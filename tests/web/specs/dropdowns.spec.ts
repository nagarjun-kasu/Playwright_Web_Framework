/**
 * Dropdowns Page Test Suite
 * =========================
 *   ✅  Positive — select values, verify output
 *   ❌  Negative — default empty selections
 *   🔀  Edge    — change selections, all dropdowns at once
 */

import { test, expect } from '../fixtures/test-fixtures';

test.describe('Dropdowns Page Tests', () => {

  test.beforeEach(async ({ dropdownsPage }) => {
    await dropdownsPage.open();
  });

  // ── Positive Tests ──────────────────────────────────

  test.describe('Positive Tests', () => {

    test('should display default output message', async ({ dropdownsPage }) => {
      // Positive: Initial output
      await dropdownsPage.expectOutputContains('Select values from the dropdowns above');
    });

    test('should select a country and update output', async ({ dropdownsPage }) => {
      // Positive: Country selection
      await dropdownsPage.selectCountry('India');
      await dropdownsPage.expectOutputContains('India');
    });

    test('should select a currency and update output', async ({ dropdownsPage }) => {
      // Positive: Currency selection
      await dropdownsPage.selectCurrency('USD');
      await dropdownsPage.expectOutputContains('USD');
    });

    test('should select a language and update output', async ({ dropdownsPage }) => {
      // Positive: Language selection
      await dropdownsPage.selectLanguage('English');
      await dropdownsPage.expectOutputContains('English');
    });

    test('should select a framework and update output', async ({ dropdownsPage }) => {
      // Positive: Framework selection
      await dropdownsPage.selectFramework('Playwright');
      await dropdownsPage.expectOutputContains('Playwright');
    });

    test('should display all country options', async ({ dropdownsPage }) => {
      // Positive: Country options list
      const options = await dropdownsPage.getCountryOptions();
      expect(options).toContain('India');
      expect(options).toContain('USA');
      expect(options).toContain('UK');
      expect(options).toContain('Germany');
      expect(options).toContain('Australia');
    });

    test('should display all currency options', async ({ dropdownsPage }) => {
      // Positive: Currency options list
      const options = await dropdownsPage.getCurrencyOptions();
      expect(options).toContain('INR');
      expect(options).toContain('USD');
      expect(options).toContain('GBP');
    });

    test('should select all four dropdowns and see combined output', async ({ dropdownsPage }) => {
      // Positive: All dropdowns selected
      await dropdownsPage.selectCountry('India');
      await dropdownsPage.selectCurrency('INR');
      await dropdownsPage.selectLanguage('Telugu');
      await dropdownsPage.selectFramework('Playwright');
      const output = await dropdownsPage.getOutputText();
      expect(output).toContain('India');
      expect(output).toContain('INR');
      expect(output).toContain('Telugu');
      expect(output).toContain('Playwright');
    });
  });

  // ── Negative Tests ──────────────────────────────────

  test.describe('Negative Tests', () => {

    test('should show "Not selected" for unselected dropdowns', async ({ dropdownsPage }) => {
      // Negative: Only select one, others show "Not selected"
      await dropdownsPage.selectCountry('India');
      const output = await dropdownsPage.getOutputText();
      expect(output).toContain('Not selected');
    });
  });

  // ── Edge Tests ──────────────────────────────────────

  test.describe('Edge Tests', () => {

    test('should change selection and update output', async ({ dropdownsPage }) => {
      // Edge: Change a selection
      await dropdownsPage.selectCountry('India');
      await dropdownsPage.expectOutputContains('India');
      await dropdownsPage.selectCountry('USA');
      await dropdownsPage.expectOutputContains('USA');
    });

    test('should handle rapid dropdown changes', async ({ dropdownsPage }) => {
      // Edge: Quick selection changes
      await dropdownsPage.selectFramework('Selenium');
      await dropdownsPage.selectFramework('Cypress');
      await dropdownsPage.selectFramework('Playwright');
      const selected = await dropdownsPage.getSelectedFramework();
      expect(selected).toBe('Playwright');
    });
  });
});