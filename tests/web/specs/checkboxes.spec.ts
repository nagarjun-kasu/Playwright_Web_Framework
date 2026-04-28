/**
 * Checkboxes Page Test Suite
 * ==========================
 *   ✅  Positive — select, deselect, select all, verify output
 *   ❌  Negative — readonly checkboxes cannot be toggled
 *   🔀  Edge    — rapid toggling, select all then deselect all
 */

import { test, expect } from '../fixtures/test-fixtures';

test.describe('Checkboxes Page Tests', () => {

  test.beforeEach(async ({ checkboxesPage }) => {
    await checkboxesPage.open();
  });

  // ── Positive Tests ──────────────────────────────────

  test.describe('Positive Tests', () => {

    test('should display all checkboxes', async ({ checkboxesPage }) => {
      // Positive: Total checkboxes (including readonly) should be 8
      const count = await checkboxesPage.getAllCheckboxCount();
      expect(count).toBe(8);
    });

    test('should have 6 enabled checkboxes', async ({ checkboxesPage }) => {
      // Positive: Only 6 checkboxes are interactive
      const count = await checkboxesPage.getEnabledCheckboxCount();
      expect(count).toBe(6);
    });

    test('should check a single checkbox and update output', async ({ checkboxesPage }) => {
      // Positive: Check one item
      await checkboxesPage.checkByValue('Enable dark mode');
      await checkboxesPage.expectOutputContains('Enable dark mode');
    });

    test('should check multiple checkboxes and see them in output', async ({ checkboxesPage }) => {
      // Positive: Multiple selections
      await checkboxesPage.checkByValue('Enable dark mode');
      await checkboxesPage.checkByValue('Auto-save drafts');
      const output = await checkboxesPage.getOutputText();
      expect(output).toContain('Enable dark mode');
      expect(output).toContain('Auto-save drafts');
    });

    test('should uncheck a checkbox and update output', async ({ checkboxesPage }) => {
      // Positive: Check then uncheck
      await checkboxesPage.checkByValue('Enable dark mode');
      await checkboxesPage.expectOutputContains('Enable dark mode');
      await checkboxesPage.uncheckByValue('Enable dark mode');
      const output = await checkboxesPage.getOutputText();
      expect(output).not.toContain('Enable dark mode');
    });

    test('should select all enabled checkboxes via Select All button', async ({ checkboxesPage }) => {
      // Positive: Select All
      await checkboxesPage.clickSelectAll();
      const output = await checkboxesPage.getOutputText();
      expect(output).toContain('Receive email notifications');
      expect(output).toContain('Enable dark mode');
      expect(output).toContain('Subscribe to newsletter');
    });

    test('should deselect all enabled checkboxes via Deselect All button', async ({ checkboxesPage }) => {
      // Positive: Select All then Deselect All
      // Note: Readonly "Accept Terms and Conditions" stays checked
      await checkboxesPage.clickSelectAll();
      await checkboxesPage.clickDeselectAll();
      await checkboxesPage.expectOutputContains('Accept Terms and Conditions');
      // Verify enabled items are NOT in the output (only readonly stays)
      const output = await checkboxesPage.getOutputText();
      expect(output).not.toContain('Enable dark mode');
      expect(output).not.toContain('Auto-save drafts');
    });

    test('should show "No items selected" initially', async ({ checkboxesPage }) => {
      // Positive: Default state
      await checkboxesPage.expectNoItemsSelected();
    });
  });

  // ── Negative Tests ──────────────────────────────────

  test.describe('Negative Tests', () => {

    test('should not be able to toggle readonly "Accept Terms" checkbox', async ({ checkboxesPage }) => {
      // Negative: Readonly checkbox is disabled
      const disabled = await checkboxesPage.isCheckboxDisabled('Accept Terms and Conditions');
      expect(disabled).toBeTruthy();
    });

    test('should not be able to toggle readonly "Required cookies" checkbox', async ({ checkboxesPage }) => {
      // Negative: Readonly checkbox is disabled
      const disabled = await checkboxesPage.isCheckboxDisabled('Required cookies');
      expect(disabled).toBeTruthy();
    });

    test('should keep "Accept Terms" checked even after Deselect All', async ({ checkboxesPage }) => {
      // Negative: Readonly checked item stays checked
      await checkboxesPage.clickDeselectAll();
      const checked = await checkboxesPage.isCheckedByValue('Accept Terms and Conditions');
      expect(checked).toBeTruthy();
    });
  });

  // ── Edge Tests ──────────────────────────────────────

  test.describe('Edge Tests', () => {

    test('should handle rapid select all / deselect all cycling', async ({ checkboxesPage }) => {
      // Edge: Rapid toggling — after final deselect, only readonly checked items remain
      for (let i = 0; i < 5; i++) {
        await checkboxesPage.clickSelectAll();
        await checkboxesPage.clickDeselectAll();
      }
      // Readonly "Accept Terms" stays checked; enabled items are unchecked
      const output = await checkboxesPage.getOutputText();
      expect(output).toContain('Accept Terms and Conditions');
      expect(output).not.toContain('Enable dark mode');
    });

    test('should handle checking already checked checkbox', async ({ checkboxesPage }) => {
      // Edge: Double-check should remain checked
      await checkboxesPage.checkByValue('Enable dark mode');
      await checkboxesPage.checkByValue('Enable dark mode'); // Already checked
      const checked = await checkboxesPage.isCheckedByValue('Enable dark mode');
      expect(checked).toBeTruthy();
    });

    test('should update output correctly when unchecking middle item', async ({ checkboxesPage }) => {
      // Edge: Check 3 items, uncheck the middle one
      await checkboxesPage.checkByValue('Receive email notifications');
      await checkboxesPage.checkByValue('Enable dark mode');
      await checkboxesPage.checkByValue('Subscribe to newsletter');
      await checkboxesPage.uncheckByValue('Enable dark mode');
      const output = await checkboxesPage.getOutputText();
      expect(output).toContain('Receive email notifications');
      expect(output).not.toContain('Enable dark mode');
      expect(output).toContain('Subscribe to newsletter');
    });
  });
});