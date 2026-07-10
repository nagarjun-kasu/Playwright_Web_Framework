/**
 * Login Page Test Suite
 * =====================
 *   ✅  Positive tests — valid credentials, UI elements
 *   ❌  Negative tests — wrong password, empty fields, SQL injection
 *   🔀  Edge tests    — whitespace, special characters, field clearing
 */

import { test, expect } from '../fixtures/test-fixtures';

test.describe('Login Page Tests', () => {

  test.beforeEach(async ({ loginPage }) => {
    await loginPage.open();
  });

  // ── UI Validation ───────────────────────────────────

  test.describe('UI Validation', () => {

    test('should display the login form heading', async ({ page }) => {
      // Positive: Verify Login heading is visible
      await expect(page.locator('#page-login h2')).toContainText('Login');
    });

    test('should display credential hint box', async ({ loginPage }) => {
      // Positive: Credential hint box is visible
      await loginPage.expectCredentialHintVisible();
    });

    test('should have username and password as required fields', async ({ loginPage }) => {
      // Positive: HTML required attribute on mandatory fields
      expect(await loginPage.isUsernameRequired()).toBeTruthy();
      expect(await loginPage.isPasswordRequired()).toBeTruthy();
    });
  });

  // ── Positive Tests ──────────────────────────────────

  test.describe('Positive Tests', () => {

    test('should login successfully with valid credentials', async ({ loginPage }) => {
      // Positive: Default credentials from the hint box
      await loginPage.login('nagarjun', 'Test@123');
      await loginPage.expectSuccessMessage('nagarjun');
    });

    test('should accept username description as optional field', async ({ loginPage }) => {
      // Positive: Optional field does not block login
      await loginPage.fillUsername('nagarjun');
      await loginPage.fillPassword('Test@123');
      await loginPage.fillUserDescription('Admin user test');
      await loginPage.clickLogin();
      await loginPage.expectSuccessMessage('nagarjun');
    });
  });

  // ── Negative Tests ──────────────────────────────────

  test.describe('Negative Tests @sanity', () => {

    test('should show error for invalid username', async ({ loginPage }) => {
      // Negative: Wrong username
      await loginPage.login('invaliduser', 'Test@123');
      await loginPage.expectErrorMessage('Invalid username or password');
    });

    test('should show error for invalid password', async ({ loginPage }) => {
      // Negative: Wrong password
      await loginPage.login('nagarjun', 'WrongPass');
      await loginPage.expectErrorMessage('Invalid username or password');
    });

    test('should show error for both invalid credentials', async ({ loginPage }) => {
      // Negative: Both fields wrong
      await loginPage.login('wrong', 'wrong');
      await loginPage.expectErrorMessage('Invalid username or password');
    });

    test('should show error for case-sensitive username', async ({ loginPage }) => {
      // Negative: Username is case-sensitive (Nagarjun vs nagarjun)
      await loginPage.login('Nagarjun', 'Test@123');
      await loginPage.expectErrorMessage('Invalid username or password');
    });

    test('should show error for case-sensitive password', async ({ loginPage }) => {
      // Negative: Password is case-sensitive
      await loginPage.login('nagarjun', 'test@123');
      await loginPage.expectErrorMessage('Invalid username or password');
    });
  });
});