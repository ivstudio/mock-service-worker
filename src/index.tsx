import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

import '@/styles/index.css';

const root = ReactDOM.createRoot(document.getElementById('root')!);

(async function entry() {
    /*
        This ensures the mock service worker could only be enabled in development.
        To enable MSW, run: npm run dev:mock
        More details: https://mswjs.io/docs/integrations/browser
    */
    if (process.env.NODE_ENV === 'development') {
        const { isMockServiceEnabled } = await import('./mocks/browser');
        await isMockServiceEnabled();
    }

    root.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>
    );
})();
