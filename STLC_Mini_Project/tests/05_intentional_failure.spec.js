const { test, expect } = require("@playwright/test")

// This test is designed to fail intentionally for defect reporting pipeline coverage

test("05 intentional failure - expecting extra button", async ({ page }) => {
  console.log("Start 05_intentional_failure")
  await page.goto("https://the-internet.herokuapp.com/add_remove_elements/")
  await page.click('button:text("Add Element")')

  const deleteButtons = await page.locator("button.added-manually").count()
  console.log(
    "Actual deleteButtons count should be 1 but test expects 2:",
    deleteButtons,
  )
  expect(deleteButtons).toBe(2) // intentional failing assertion
})
