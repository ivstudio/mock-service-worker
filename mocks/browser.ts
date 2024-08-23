import { setupWorker } from 'msw/browser';

import { handlers } from './handlers';

/* 
    Enable the mock service worker in the browser.
    During development you can enable the mock service worker
    by running: npm run dev:mock

    You can change the handler to handlersFail to test the error state or
    add additional handlers for different scenarios.

*/
export async function isMockServiceEnabled() {
    if (!process.env.MOCK_SERVICE_WORKER) {
        return;
    }

    const worker = setupWorker(...handlers);
    return worker.start();
}
