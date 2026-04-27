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

import { test as base, expect } from '@playwright/test';
import {
  LoginPage,
  //RegisterPage,
  CheckboxesPage,
  //WebtablesPage,
  //KmartPage,
  DropdownsPage,
  UploadPage,
  //InteractionsPage,
} from '../pages/index';

/** Declare the custom fixture types */
type PageFixtures = {
  //navigationPage: NavigationPage;
 // calculatorPage: CalculatorPage;
  loginPage: LoginPage;
  //registerPage: RegisterPage;
  checkboxesPage: CheckboxesPage;
  //webtablesPage: WebtablesPage;
  //kmartPage: KmartPage;
  dropdownsPage: DropdownsPage;
  uploadPage: UploadPage;
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

});

export { expect };