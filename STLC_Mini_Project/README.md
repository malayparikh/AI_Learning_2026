# STLC Mini Project

End-to-end test automation pipeline for the-internet.herokuapp.com/add_remove_elements/ using Playwright.

## Project contents

- `Test_Plan_AddRemoveElements.md` : test plan with scope, out-of-scope, risk, scenarios
- `tests/` : 5 Playwright spec files
  - `01_add_one_element.spec.js`
  - `02_add_five_elements.spec.js`
  - `03_remove_one_after_adding_three.spec.js`
  - `04_remove_all_elements.spec.js`
  - `05_intentional_failure.spec.js` (intentional fail)
- `playwright.config.js` : Playwright config + reporter outputs
- `mock-jira-server.js` : express mock Jira create/list API
- `pipeline.js` : orchestrates run, report parsing, defect creation, summary
- `test-results/` : generated execution artifacts, JSON + HTML report data

## Prerequisites

- Node.js 18+ or compatible
- Git

## Setup

1. `cd STLC_Mini_Project`
2. `npm install`

## Run tests

- `npm test` (alias `npx playwright test`)
- `npx playwright show-report` (to view HTML report)

## Run entire pipeline

1. Start mock Jira server (in separate terminal):
   - `npm run start-jira` or `node mock-jira-server.js`
2. Run pipeline:
   - `npm run pipeline` or `node pipeline.js`

This does:

- runs Playwright tests
- creates HTML report in `playwright-report` and JSON in `test-results/playwright-report.json`
- parses failed tests
- POSTs failed tests to mock Jira at `http://localhost:3001/api/tickets`
- prints summary pass/fail counts

## Reports

- HTML: `playwright-report/index.html`
- JSON: `test-results/playwright-report.json`

## Jira defect proof

- GET created defects: `curl http://localhost:3001/api/tickets`
- intentional failure test creates one ticket with title `[AUTOBUG] 05 intentional failure - expecting extra button`

## Notes

- `node_modules` excluded from repo via `.gitignore`.
- Any tester can run `npm run pipeline` and get repeatable result.
