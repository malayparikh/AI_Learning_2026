# VWO Sign-In Negative Testing with Playwright MCP

This project demonstrates automated negative testing for the VWO (Visual Website Optimizer) sign-in feature using Playwright and MCP (Model Context Protocol). It includes 5 comprehensive negative test cases to validate error handling and user experience during authentication failures.

## 🚀 Features

- **Automated Testing**: End-to-end negative test cases using Playwright
- **MCP Integration**: Compatible with VS Code MCP server for enhanced testing workflows
- **Cross-Browser Support**: Tests run on Chromium, Firefox, and WebKit
- **HTML Reports**: Detailed test execution reports with screenshots and traces
- **CI/CD Ready**: Configurable for continuous integration pipelines

## 📋 Test Cases Covered

| Test Case | Description                  | Expected Behavior                 |
| --------- | ---------------------------- | --------------------------------- |
| TC-001    | Empty Email + Empty Password | Validation errors for both fields |
| TC-002    | Invalid Email Format         | "Invalid email" error message     |
| TC-003    | Valid Email + Empty Password | Password required error           |
| TC-004    | Empty Email + Valid Password | Email required error              |
| TC-005    | Valid Email + Wrong Password | Authentication failure message    |

## 🛠️ Prerequisites

- **Node.js**: Version 16 or higher
- **npm**: Package manager
- **VS Code**: With MCP server configured (optional)
- **Git**: For version control

## 📦 Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-username/vwo-signin-negative-testing.git
   cd vwo-signin-negative-testing
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Install Playwright browsers**:
   ```bash
   npx playwright install
   ```

## 🏃‍♂️ Usage

### Running Tests

**Basic execution**:

```bash
npx playwright test
```

**Headed mode (watch tests run in browser)**:

```bash
npx playwright test --headed
```

**With HTML report**:

```bash
npx playwright test --reporter=html
```

**PowerShell one-liner (Windows) with auto-report**:

```powershell
$ts = Get-Date -Format 'yyyyMMdd_HHmmss'; $report="playwright-report-$ts"; npx playwright test --headed --reporter=list --reporter=html:output=$report; if ($LASTEXITCODE -eq 0) { Start-Process "$report\index.html" }
```

### Test Configuration

- **Test File**: `tests/vwo-signin-negative.spec.ts`
- **Base URL**: `https://app.vwo.com/#/login`
- **Timeout**: 30 seconds per test
- **Retries**: 0 (configurable in `playwright.config.ts`)

## 📊 Reports

### HTML Report

Generated automatically with each test run:

- Test execution timeline
- Screenshots on failure
- Trace files for debugging
- Performance metrics

**Location**: `playwright-report/index.html` (or timestamped folder)

### Custom Summary Report

A static HTML summary is available at:

- `vwo-invalid-login-execution-report.html`

## 🏗️ Project Structure

```
├── .vscode/
│   └── mcp.json                 # MCP server configuration
├── tests/
│   └── vwo-signin-negative.spec.ts  # Test specifications
├── debug-vwo-errors.js          # Debug script for error inspection
├── vwo-invalid-login-execution-report.html  # Custom report
├── Test_Plan_Template.md        # Detailed test plan
├── README.md                    # This file
├── package.json                 # Dependencies
└── playwright.config.ts         # Playwright configuration
```

## 🔧 Configuration

### Playwright Config (`playwright.config.ts`)

```typescript
import { defineConfig } from "@playwright/test"

export default defineConfig({
  testDir: "./tests",
  timeout: 30000,
  expect: {
    timeout: 5000,
  },
  use: {
    baseURL: "https://app.vwo.com",
    headless: true,
    screenshot: "only-on-failure",
    trace: "retain-on-failure",
  },
  projects: [{ name: "chromium" }, { name: "firefox" }, { name: "webkit" }],
})
```

### MCP Configuration (`.vscode/mcp.json`)

```json
{
  "servers": {
    "playwright": {
      "command": "npx",
      "args": ["@playwright/mcp@latest"],
      "type": "stdio"
    }
  },
  "inputs": []
}
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines

- Follow TypeScript best practices
- Add tests for new features
- Update documentation
- Ensure cross-browser compatibility

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Playwright](https://playwright.dev/) - Modern web testing framework
- [VWO](https://vwo.com/) - A/B testing and conversion optimization platform
- [MCP](https://github.com/modelcontextprotocol) - Model Context Protocol

## 📞 Support

For questions or issues:

- Open an issue on GitHub
- Check the [Playwright documentation](https://playwright.dev/docs/intro)
- Review the test execution reports for debugging

---

**Version**: 1.0.0  
**Last Updated**: March 29, 2026  
**Author**: AI Assistant
