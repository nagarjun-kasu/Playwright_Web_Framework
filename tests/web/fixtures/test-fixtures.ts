/**
 * Test Fixtures
 * =============
 * Extends Playwright's built-in test with page object instances.
 * Each test automatically receives pre-instantiated page objects,
 * eliminating boilerplate setup inside individual test files.
 *
 * Usage in tests:
 *   import { test, expect } from '../src/fixtures/test-fixtures';
 *   test('example', async ({ calculatorPage }) => { ... });
 */

import { existsSync, mkdirSync } from 'fs';
import { test as base, expect, type TestInfo } from '@playwright/test';
import {
  LoginPage,
  //RegisterPage,
  CalculatorPage,
  CheckboxesPage,
  //WebtablesPage,
  //KmartPage,
  DropdownsPage,
  UploadPage,
  MyntraPage,
  //InteractionsPage,
} from '../pages/index';

/** Declare the custom fixture types */
type PageFixtures = {
  //navigationPage: NavigationPage;
  loginPage: LoginPage;
  calculatorPage: CalculatorPage;
  //registerPage: RegisterPage;
  checkboxesPage: CheckboxesPage;
  //webtablesPage: WebtablesPage;
  //kmartPage: KmartPage;
  dropdownsPage: DropdownsPage;
  uploadPage: UploadPage;
  myntraPage: MyntraPage;
  //interactionsPage: InteractionsPage;
};

/**
 * Extended test object with page-object fixtures.
 * Each fixture is lazily initialised — only created when a test requests it.
 */
export const test = base.extend<PageFixtures>({
  loginPage: async ({ page }, use) => {
    const login = new LoginPage(page);
    await use(login);
  },

  checkboxesPage: async ({ page }, use) => {
    const checkboxes = new CheckboxesPage(page);
    await use(checkboxes);
  },

  dropdownsPage: async ({ page }, use) => {
    const dropdowns = new DropdownsPage(page);
    await use(dropdowns);
  },

  uploadPage: async ({ page }, use) => {
    const upload = new UploadPage(page);
    await use(upload);
  },

  myntraPage: async ({ page }, use) => {
    const myntra = new MyntraPage(page);
    await use(myntra);
  },

  calculatorPage: async ({ page }, use) => {
    const calculator = new CalculatorPage(page);
    await use(calculator);
  }

});

// Global hooks for all tests in the framework
const resultsDir = 'test-results/failures';
if (!existsSync(resultsDir)) {
  mkdirSync(resultsDir, { recursive: true });
}

test.beforeEach(async ({ page }) => {
  await page.context().clearCookies();
  await page.context().clearPermissions();
});

test.afterEach(async ({ page }, testInfo) => {
  if (testInfo.status !== 'passed') {
    await page.screenshot({ path: `${resultsDir}/${testInfo.title.replace(/[^a-zA-Z0-9-_]/g, '_')}.png`, fullPage: true });
  }
});

export { expect };