import { setupServer } from 'msw/node';

import App from './App';
import { handlers, handlersFail } from './mocks/handlers';
import { render, waitFor } from './tests/testingUtils';

const server = setupServer(...handlers);
beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

const issueIds = ['30786', '30782', '30772', '30771', '30694', '30759'];

describe('App', () => {
    it('shows loader initially, then renders title and Open Issues after successful fetch', async () => {
        const { findByTestId, getByText, queryByTestId } = render(<App />);

        // Verify the loader is displayed initially
        const spinner = await findByTestId('spinner');
        expect(spinner).toBeInTheDocument();

        // Wait for the title and data to be displayed
        await waitFor(() => {
            // Check if the title "Open Issues" is displayed
            expect(getByText(/Open Issues/i)).toBeInTheDocument();

            // Check if each issue ID is displayed
            issueIds.forEach(item => {
                expect(getByText(new RegExp(item, 'i'))).toBeInTheDocument();
            });
        });

        // Ensure the loader is no longer in the document
        expect(queryByTestId('spinner')).not.toBeInTheDocument();
    });

    it('shows loader initially, then shows "No open issues found" when fetch fails', async () => {
        server.use(...handlersFail);
        const { findByTestId, queryByText, queryByTestId, getByText } = render(
            <App />
        );

        // Verify the loader is displayed initially
        const spinner = await findByTestId('spinner');
        expect(spinner).toBeInTheDocument();

        // Wait for the error message to be displayed
        await waitFor(() => {
            // Check if the error message "No open issues found." is displayed
            expect(getByText(/No open issues found./i)).toBeInTheDocument();

            // Ensure none of the issue IDs are displayed
            issueIds.forEach(item => {
                expect(
                    queryByText(new RegExp(item, 'i'))
                ).not.toBeInTheDocument();
            });
        });

        // Ensure the loader is no longer in the document
        expect(queryByTestId('spinner')).not.toBeInTheDocument();
    });
});
