const { test, expect } = require("@playwright/test")

test("03 remove one after adding three", async ({ page }) => {
  console.log("Start 03_remove_one_after_adding_three")
  await page.goto("https://the-internet.herokuapp.com/add_remove_elements/")

  for (let i = 0; i < 3; i++) {
    await page.click('button:text("Add Element")')
  }

  const addedButtons = page.locator("button.added-manually")
  await addedButtons.nth(0).click()

  const deleteButtons = await page.locator("button.added-manually").count()
  console.log("deleteButtons count after removing 1 from 3:", deleteButtons)
  expect(deleteButtons).toBe(2)
})
