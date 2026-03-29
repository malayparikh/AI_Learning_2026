# VWO Sign-In Negative Test Cases - Test Plan Template

## 1. Introduction

### 1.1 Purpose

This test plan outlines the negative testing strategy for the VWO (Visual Website Optimizer) sign-in feature. The focus is on validating error handling and user experience when invalid inputs are provided during the authentication process.

### 1.2 Scope

- **In Scope**: Negative test scenarios for email and password fields on the VWO login page (https://app.vwo.com/#/login)
- **Out of Scope**: Positive login flows, password reset functionality, SSO integrations, multi-factor authentication

### 1.3 Test Objectives

- Verify proper validation messages are displayed for invalid inputs
- Ensure application handles edge cases gracefully
- Validate user experience during error scenarios
- Confirm security by preventing unauthorized access attempts

## 2. Test Environment

### 2.1 Tools and Technologies

- **Testing Framework**: Playwright
- **Programming Language**: TypeScript/JavaScript
- **Browser**: Chromium (default), Firefox, WebKit
- **CI/CD**: GitHub Actions (optional)
- **Reporting**: HTML reports with screenshots and traces

### 2.2 Test Data

- Invalid email formats: `invalid-email`, `user@.com`, `test@domain`
- Valid email formats: `test@example.com`, `user@company.com`
- Password patterns: Empty, short, long, special characters

## 3. Test Cases

### 3.1 Test Case Matrix

| Test Case ID | Description                  | Preconditions                | Test Steps                                                                                             | Expected Result                           | Priority | Status |
| ------------ | ---------------------------- | ---------------------------- | ------------------------------------------------------------------------------------------------------ | ----------------------------------------- | -------- | ------ |
| TC-001       | Empty Email + Empty Password | User navigates to login page | 1. Leave email field empty<br>2. Leave password field empty<br>3. Click "Sign in" button               | Validation error messages for both fields | High     | Pass   |
| TC-002       | Invalid Email Format         | User navigates to login page | 1. Enter invalid email (e.g., "invalid-email")<br>2. Enter valid password<br>3. Click "Sign in" button | "Invalid email" error message displayed   | High     | Pass   |
| TC-003       | Valid Email + Empty Password | User navigates to login page | 1. Enter valid email format<br>2. Leave password field empty<br>3. Click "Sign in" button              | Password required error message           | High     | Pass   |
| TC-004       | Empty Email + Valid Password | User navigates to login page | 1. Leave email field empty<br>2. Enter valid password<br>3. Click "Sign in" button                     | Email required error message              | High     | Pass   |
| TC-005       | Valid Email + Wrong Password | User navigates to login page | 1. Enter valid email format<br>2. Enter incorrect password<br>3. Click "Sign in" button                | Authentication failure message            | High     | Pass   |

### 3.2 Test Case Details

#### TC-001: Empty Email + Empty Password

- **Severity**: High
- **Type**: Functional, Validation
- **Automation**: Automated (Playwright)
- **Test Data**: Empty strings for both fields

#### TC-002: Invalid Email Format

- **Severity**: High
- **Type**: Validation, Input Sanitization
- **Automation**: Automated (Playwright)
- **Test Data**: Various invalid email formats

#### TC-003: Valid Email + Empty Password

- **Severity**: High
- **Type**: Functional, Validation
- **Automation**: Automated (Playwright)
- **Test Data**: Valid email format + empty password

#### TC-004: Empty Email + Valid Password

- **Severity**: High
- **Type**: Functional, Validation
- **Automation**: Automated (Playwright)
- **Test Data**: Empty email + valid password string

#### TC-005: Valid Email + Wrong Password

- **Severity**: High
- **Type**: Authentication, Security
- **Automation**: Automated (Playwright)
- **Test Data**: Valid email format + incorrect password

## 4. Test Execution

### 4.1 Entry Criteria

- Test environment is set up and accessible
- VWO login page is available and responsive
- Playwright framework is installed and configured
- Test cases are reviewed and approved

### 4.2 Exit Criteria

- All test cases executed
- Defects logged and triaged
- Test results documented
- Test summary report generated

### 4.3 Test Execution Schedule

- **Phase 1**: Manual execution and script development
- **Phase 2**: Automated execution and regression testing
- **Phase 3**: CI/CD integration and monitoring

## 5. Risk Assessment

### 5.1 Risks and Mitigations

- **Risk**: VWO UI changes affecting selectors
  - **Mitigation**: Use robust locators and regular maintenance
- **Risk**: Network issues during test execution
  - **Mitigation**: Implement retry mechanisms and offline test data
- **Risk**: Browser compatibility issues
  - **Mitigation**: Test across multiple browsers in CI pipeline

## 6. Deliverables

- Test Plan Document
- Test Scripts (TypeScript)
- Test Execution Results
- HTML Test Reports
- Defect Reports (if any)
- Test Summary Report

## 7. Metrics and Reporting

### 7.1 Test Metrics

- Test Case Pass/Fail Rate
- Test Execution Time
- Defect Density
- Test Coverage Percentage

### 7.2 Reporting

- Daily test execution status
- Weekly test summary reports
- Final test completion report

## 8. Approval and Sign-off

### 8.1 Reviewers

- Test Lead
- Development Team Lead
- Product Owner

### 8.2 Approval Criteria

- All high-priority test cases pass
- No critical defects remain open
- Test coverage meets requirements
- Documentation is complete and accurate

---

**Document Version**: 1.0  
**Created By**: AI Assistant  
**Date**: March 29, 2026  
**Reviewed By**: [Pending]  
**Approved By**: [Pending]
