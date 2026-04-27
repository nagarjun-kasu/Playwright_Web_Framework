/**
 * Playwright Configuration
 * ========================
 *
 * This config file controls all Playwright test execution behaviour:
 *
 * ── Parallel Execution ───────────────────────────────────────
 * • `workers`        — Number of parallel worker processes.
 *                      Set to `'50%'` (half of CPU cores) for optimal performance.
 *                      CI uses 1 worker for stability; local uses 50%.
 * • `fullyParallel`  — When true, tests WITHIN a single file run in parallel too
 *                      (not just across files). Maximises throughput.
 *
 * ── Retry Logic ──────────────────────────────────────────────
 * • `retries`        — Number of retry attempts for failed tests.
 *                      CI: 2 retries (to handle transient network issues).
 *                      Local: 0 (immediate feedback during development).
 *
 * ── Auto-Waiting ─────────────────────────────────────────────
 * • `actionTimeout`  — Max time (ms) Playwright waits for actions like click(),
 *                      fill() to succeed before failing.
 * • `timeout`        — Global test timeout (ms) per test case.
 * • `navigationTimeout` — Max wait for page.goto() and other navigation.
 *
 * ── Allure Reporting ─────────────────────────────────────────
 * • Added `allure-playwright` reporter alongside HTML reporter.
 *   Allure results are written to `./allure-results`.
 *   Use `npm run allure:report` to generate and view the report.
 *
 * ── CI/CD Integration ────────────────────────────────────────
 * • `process.env.CI` automatically sets conservative workers and retries.
 * • `forbidOnly`     — Fails if `.only` is left in tests (prevents
 *                      accidentally focusing a single test in CI).
 * • `trace: 'on-first-retry'` — Captures detailed trace on first retry,
 *                      enabling post-mortem debugging in CI.
 * • `screenshot: 'only-on-failure'` — Auto-captures failure screenshots.
 * • `video: 'retain-on-failure'`    — Records video for failing tests only.
 */

import { defineConfig, devices } from '@playwright/test';

export default defineConfig({

  // ── Test File Discovery ────────────────────────────────
  testDir: './tests',
  testMatch: '**/*.spec.ts',

  // ── Parallel Execution ────────────────────────────────
  fullyParallel: true,
  workers: process.env.CI ? 1 : 1,

  // ── Retry Logic ───────────────────────────────────────
  retries: process.env.CI ? 2 : 0,

  // ── CI Safety: fail if .only is left in codebase ──────
  forbidOnly: !!process.env.CI,

  // ── Global Timeouts (Auto-Waiting) ────────────────────
  timeout: 60_000,           // 60s per test
  expect: {
    timeout: 10_000,         // 10s for expect assertions
  },

  // ── Reporters ─────────────────────────────────────────
  reporter: [
    // Built-in HTML report (always generated)
    ['html', { open: 'never', outputFolder: 'playwright-report' }],
    // Allure report (generates allure-results/ directory)
    ['allure-playwright'],
    // Console list for CI visibility
    ['list'],
  ],

  // ── Shared Settings for All Projects ──────────────────
  use: {
    // Application under test
    //baseURL: 'https://nagarjunreddykasu.github.io/web-automation-practice-site/',

    // Auto-waiting timeouts
    actionTimeout: 15_000,
    navigationTimeout: 30_000,

    // Tracing — captured on first retry to enable post-mortem debugging
    trace: 'on-first-retry',

    // Screenshot on failure — auto-captured and attached to reports
    screenshot: 'only-on-failure',

    // Video — retained only for failed tests (saves disk in CI)
    video: 'retain-on-failure',

    // Default viewport
    viewport: { width: 1280, height: 720 },

    // Ignore HTTPS errors (useful for staging environments)
    ignoreHTTPSErrors: true,
  },

  // ── Browser Projects ──────────────────────────────────
  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
      },
    },
    {
      name: 'firefox',
      use: {
        ...devices['Desktop Firefox'],
      },
    },
    {
      name: 'webkit',
      use: {
        ...devices['Desktop Safari'],
      },
    },
    {
    name: 'Google Chrome',
     use: { 
      ...devices['Desktop Chrome'], 
      channel: 'chrome',
      headless:false,
      viewport:{width:1500, height:800},
      }, 
    },
  ],
});