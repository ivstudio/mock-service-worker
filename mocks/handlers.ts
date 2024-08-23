import { http } from 'msw';

import { MOCK_API } from './apis';
import { openIssuesMockApi } from './openIssues.mockApi';

// Handlers for successful API responses
export const handlers = [
    // Intercept GET requests to the specified URL
    http.get(MOCK_API.FB_REACT_ISSUES, () => {
        // Return a mock response with the open issues data
        return new Response(JSON.stringify(openIssuesMockApi));
    }),
];

// Handlers for failed API responses
export const handlersFail = [
    // Intercept GET requests to the specified URL
    http.get(MOCK_API.FB_REACT_ISSUES, () => {
        // Return a mock response with a 400 status and error message
        return new Response(null, {
            status: 400,
            statusText: 'Something went wrong!',
        });
    }),
];
