# Next.js 15 API Routes Development Mode Bug

This repository demonstrates a bug encountered in Next.js 15 where API routes fail to function correctly during development.  The `fetch` call within a client-side component consistently fails, even though the API route responds with a 200 status code.  This issue is specific to development mode and does not occur in a production environment.

## Reproduction Steps

1. Clone this repository.
2. Run `npm install` to install dependencies.
3. Run `npm run dev` to start the Next.js development server.
4. Observe that the `fetch` call in `pages/index.js` fails, resulting in the 'Loading...' message being displayed persistently.
5. The API route `/api/hello` should return `{ text: 'Hello' }`, but the client-side fetch call does not receive this data.

## Solution (in bugSolution.js)

The solution involves ensuring the correct environment configuration.  In this case, the production build environment was correctly configured, allowing the API routes to function. However, the development environment needed modification to be aligned correctly. The bug is likely due to a mismatch between expected configuration and actual environment settings in development. 