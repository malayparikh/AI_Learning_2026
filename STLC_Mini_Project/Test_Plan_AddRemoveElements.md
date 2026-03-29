# Test Plan: Add/Remove Elements page

## Project

- Name: STLC Mini Project
- Target URL: https://the-internet.herokuapp.com/add_remove_elements/
- Feature: Add Element & Delete buttons

## Scope

- In-scope:
  - Add a new element by clicking "Add Element"
  - Ensure a new delete button appears for each element added
  - Delete an existing element by clicking one of the delete buttons
  - Validate counter of delete buttons after actions
  - Negative check with incorrect expected count (intentional failure)

- Out-of-scope:
  - Styling checks (CSS classes, colors)
  - Responsive/mobile viewport behavior
  - Accessibility audits
  - Browser compatibility (only Chromium automated)

## Risks

- Test flakiness due to network or page load delays.
- Third-party site unavailability/maintenance.
- Element locators changing (button text update).

## Test Scenarios

1. Add one element and verify exactly 1 delete button exists.
2. Add five elements and verify exactly 5 delete buttons exist.
3. Add 3 elements, remove 1, verify 2 delete buttons remain.
4. Add and immediately remove all elements; confirm 0 delete buttons.
5. Intentional failure: add 1 element then verify 2 delete buttons (should fail).
