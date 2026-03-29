const { test, expect } = require("@playwright/test")

test("01 add one element", async ({ page }) => {
  console.log("Start 01_add_one_element")
  await page.goto("https://the-internet.herokuapp.com/add_remove_elements/")
  await page.click('button:text("Add Element")')

  const deleteButtons = await page.locator("button.added-manually").count()
  console.log("deleteButtons count:", deleteButtons)
  expect(deleteButtons).toBe(1)
})
