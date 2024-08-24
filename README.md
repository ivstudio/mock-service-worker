# API Mocking in JavaScript using Mock Service Worker

This repository showcases a Mock Service Worker (MSW) v2 setup in a React environment, seamlessly integrated with Jest and React Testing Library. The configuration allows MSW to intercept API calls during development and unit testing, offering comprehensive control and flexibility throughout the development process.


[View the project](https://ivstudio.github.io/mock-server-worker/)


## Key Features

- [Detailed article](https://www.ivstudio.com/blog/mock-service-worker) providing a step-by-step explanation of the implementation process.
- Configuration of handlers, setupWorker, and setupServer for API mocking.
- On-demand API interception during development using MSW's browser integration.
- API interception in Jest and React Testing Library environments using MSW's Node.js integration.


### Tech Stack

- [Mock Service Worker (MSW)](https://mswjs.io/) for API mocking
- [Jest](https://jestjs.io/) for unit testing
- [React Testing Library](https://testing-library.com/) for component testing
- [React](https://react.dev/) for building the UI

### Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Run the mock API: `npm run dev:mock`
4. Start the development server: `npm run dev`

### Testing

To run all tests, use the following command: `npm run test`


