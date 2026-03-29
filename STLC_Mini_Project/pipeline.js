const { execSync } = require("child_process")
const fs = require("fs")
const path = require("path")
const axios = require("axios")

;(async function () {
  try {
    console.log("=== STLC Pipeline: Start ===")
    console.log("1) Running Playwright tests (HTML + JSON)")

    let testsPassed = true
    const jsonReportPath = path.join(
      process.cwd(),
      "test-results",
      "playwright-report.json",
    )

    try {
      execSync("npx playwright test", {
        stdio: "inherit",
      })
    } catch (err) {
      testsPassed = false
      console.warn(
        "Warning: Playwright test command exited with failure status. Continuing pipeline evaluation.",
      )
    }
    if (!fs.existsSync(jsonReportPath)) {
      console.error("JSON report not found at", jsonReportPath)
      process.exit(2)
    }

    const rawReport = fs.readFileSync(jsonReportPath, "utf-8")
    const report = JSON.parse(rawReport)

    const failedTests = []

    function gatherFailedTests(suites) {
      for (const suite of suites || []) {
        for (const spec of suite.specs || []) {
          for (const test of spec.tests || []) {
            for (const result of test.results || []) {
              if (result.status === "failed") {
                failedTests.push({
                  title: test.title || spec.title || suite.title,
                  file: suite.file || spec.file,
                  duration: result.duration,
                  error:
                    result.error || (result.errors && result.errors[0]) || {},
                })
              }
            }
          }
        }
      }
    }

    gatherFailedTests(report.suites)

    console.log(`2) Found ${failedTests.length} failed tests`)

    if (failedTests.length > 0) {
      console.log("3) Sending failed tests to mock JIRA server")
      for (const fail of failedTests) {
        const body = {
          summary: `[AUTOBUG] ${fail.title}`,
          description: `Test failed in file ${fail.file}. Error: ${fail.error || "No error message"}.`,
        }

        try {
          const res = await axios.post(
            "http://localhost:3001/api/tickets",
            body,
          )
          console.log(" -> Created ticket ID", res.data.id)
        } catch (err) {
          console.error("Unable to create JIRA ticket", err.message)
        }
      }
    }

    const totalTests =
      (report.stats.expected || 0) +
      (report.stats.unexpected || 0) +
      (report.stats.skipped || 0)
    const passedTests = report.stats.expected || 0
    const failedTestsCount = report.stats.unexpected || 0

    console.log("=== STLC Pipeline: Summary ===")
    console.log(`Total tests: ${totalTests}`)
    console.log(
      `Passed: ${passedTests}, Failed: ${failedTestsCount}, Skipped: ${report.stats.skipped || 0}`,
    )
    console.log("HTML report available at ./playwright-report/index.html")
    if (!testsPassed) {
      console.log(
        "Pipeline result: FAILED (some tests failed, see jira tickets)",
      )
    } else {
      console.log("Pipeline result: SUCCESS (all tests passed)")
    }
    console.log("Pipeline finished")
  } catch (error) {
    console.error("Pipeline failed:", error.message)
    process.exit(1)
  }
})()
