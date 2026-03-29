const { test, expect } = require("@playwright/test")

test("04 remove all elements", async ({ page }) => {
  console.log("Start 04_remove_all_elements")
  await page.goto("https://the-internet.herokuapp.com/add_remove_elements/")

  for (let i = 0; i < 4; i++) {
    await page.click('button:text("Add Element")')
  }

  const deleteButtons = page.locator("button.added-manually")
  const countBefore = await deleteButtons.count()
  console.log("deleteButtons count before removing all:", countBefore)

  while ((await deleteButtons.count()) > 0) {
    await deleteButtons.first().click()
  }

  const countAfter = await page.locator("button.added-manually").count()
  console.log("deleteButtons count after removing all:", countAfter)
  expect(countAfter).toBe(0)
})
