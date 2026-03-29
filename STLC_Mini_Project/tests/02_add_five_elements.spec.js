const { test, expect } = require("@playwright/test")

test("02 add five elements", async ({ page }) => {
  console.log("Start 02_add_five_elements")
  await page.goto("https://the-internet.herokuapp.com/add_remove_elements/")

  for (let i = 0; i < 5; i++) {
    await page.click('button:text("Add Element")')
  }

  const deleteButtons = await page.locator("button.added-manually").count()
  console.log("deleteButtons count after adding 5:", deleteButtons)
  expect(deleteButtons).toBe(5)
})
