# Sales analytics CI/CD assignment

A small static dashboard created to demonstrate the flow: code push → GitHub Actions → unit tests → build → versioned AWS S3 artifact → automated deployment → live website.

## Local commands

- `npm test` runs four automated unit tests using the built-in Node.js test runner.
- `npm run build` generates deployment-ready files in `dist/` and inserts the version from `package.json`.

Requires Node.js 20 or newer. No third-party npm dependencies are required.

The sample dashboard data is fictional. AWS infrastructure and GitHub Actions automation will be added in the next assignment steps.
