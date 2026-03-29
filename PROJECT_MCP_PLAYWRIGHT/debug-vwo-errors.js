const { chromium } = require("playwright")

;(async () => {
  const browser = await chromium.launch({ headless: true })
  const page = await browser.newPage()
  await page.goto("https://app.vwo.com/#/login", { timeout: 60000 })

  await page.click('button:has-text("Sign in")')
  await page.waitForTimeout(3000)

  const loginForm = await page.$("#js-login-form")
  const loginText = loginForm
    ? await loginForm.innerText()
    : "no #js-login-form"

  const errors = await page.$$eval(
    "span.invalid-reason, .invalid-reason, .vwo-error, .error-text, .error, .validation-error, .has-error",
    (els) => els.map((e) => e.innerText.trim()).filter(Boolean),
  )
  console.log("loginForm text snippet:", loginText.slice(0, 400))
  console.log("errors:", errors)

  const allText = await page.content()
  console.log("page title", await page.title())

  await browser.close()
})()
