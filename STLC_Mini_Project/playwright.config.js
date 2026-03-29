const { defineConfig } = require("@playwright/test")

module.exports = defineConfig({
  testDir: "./tests",
  retries: 0,
  timeout: 120000,
  use: {
    headless: true,
    viewport: { width: 1280, height: 720 },
    actionTimeout: 10000,
    navigationTimeout: 30000,
    video: "retain-on-failure",
  },
  outputDir: "test-results",
  reporter: [
    ["html", { outputFolder: "playwright-report", open: "never" }],
    ["json", { outputFile: "test-results/playwright-report.json" }],
  ],
})
