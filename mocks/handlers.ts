import { http } from 'msw';

import { openIssuesMockApi } from './openIssues.mockApi';

// Must match the real URL (won't be called in tests)
export const API_GH_REPOS_FB_REACT_ISSUES =
    'https://api.github.com/repos/facebook/react/issues';

// Handlers for successful API responses
export const handlers = [
    // Intercept GET requests to the specified URL
    http.get(API_GH_REPOS_FB_REACT_ISSUES, () => {
        // Return a mock response with the open issues data
        return new Response(JSON.stringify(openIssuesMockApi));
    }),
];

// Handlers for failed API responses
export const handlersFail = [
    // Intercept GET requests to the specified URL
    http.get(API_GH_REPOS_FB_REACT_ISSUES, () => {
        // Return a mock response with a 400 status and error message
        return new Response(null, {
            status: 400,
            statusText: 'Something went wrong!',
        });
    }),
];