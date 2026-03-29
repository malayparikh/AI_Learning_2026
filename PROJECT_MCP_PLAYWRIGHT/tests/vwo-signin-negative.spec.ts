import { test, expect } from "@playwright/test"

test.describe("VWO Sign In - Negative Tests", () => {
  const url = "https://app.vwo.com/#/login"
  const loginForm = "#js-login-form"

  test.beforeEach(async ({ page }) => {
    await page.goto(url, { waitUntil: "domcontentloaded" })
    await expect(page.locator(loginForm)).toBeVisible()
  })

  test("should show validation messages when both email and password are empty", async ({
    page,
  }) => {
    await page.click('button:has-text("Sign in")')
    await expect(page.locator(`${loginForm} .invalid-reason`)).toContainText(
      /email|password/i,
    )
  })

  test("should show error when email has invalid format", async ({ page }) => {
    await page.fill(`${loginForm} input[type="email"]`, "invalid-email")
    await page.fill(`${loginForm} input[type="password"]`, "AnyPass123!")
    await page.click('button:has-text("Sign in")')
    await expect(page.locator(`${loginForm} .invalid-reason`)).toContainText(
      /invalid email/i,
    )
  })

  test("should show error when valid email and empty password", async ({
    page,
  }) => {
    await page.fill(`${loginForm} input[type="email"]`, "test@example.com")
    await page.click('button:has-text("Sign in")')
    await expect(page.locator(`${loginForm} .invalid-reason`)).toContainText(
      /password|invalid email|required/i,
    )
  })

  test("should show error when empty email and valid password", async ({
    page,
  }) => {
    await page.fill(`${loginForm} input[type="password"]`, "AnyPass123!")
    await page.click('button:has-text("Sign in")')
    await expect(page.locator(`${loginForm} .invalid-reason`)).toContainText(
      /email|required/i,
    )
  })

  test("should show auth failure on valid email and wrong password", async ({
    page,
  }) => {
    await page.fill(`${loginForm} input[type="email"]`, "validuser@example.com")
    await page.fill(`${loginForm} input[type="password"]`, "WrongPassword123")
    await page.click('button:has-text("Sign in")')
    await expect(page.locator(`${loginForm} .invalid-reason`)).toContainText(
      /invalid username or password|incorrect|invalid email/i,
    )
  })
})
