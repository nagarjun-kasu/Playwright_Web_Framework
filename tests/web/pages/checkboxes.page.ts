/**
 * CheckboxesPage — Page Object for the Checkboxes section
 */

import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './base.page';

export class CheckboxesPage extends BasePage {
  private readonly checkboxList: Locator;
  private readonly selectAllBtn: Locator;
  private readonly deselectAllBtn: Locator;
  private readonly output: Locator;

  constructor(page: Page) {
    super(page);
    this.checkboxList = page.locator('#cbList');
    this.selectAllBtn = page.locator('#cbSelectAll');
    this.deselectAllBtn = page.locator('#cbDeselectAll');
    this.output = page.locator('#cbOutput');
  }

  async open(): Promise<void> {
    await this.goto();
    await this.navigateTo('checkboxes');
  }

  /** Get all checkbox locators (enabled only) */
  private get enabledCheckboxes(): Locator {
    return this.checkboxList.locator('input[type="checkbox"]:not(:disabled)');
  }

  /** Get all checkbox locators (including disabled) */
  private get allCheckboxes(): Locator {
    return this.checkboxList.locator('input[type="checkbox"]');
  }

  async getEnabledCheckboxCount(): Promise<number> {
    return await this.enabledCheckboxes.count();
  }

  async getAllCheckboxCount(): Promise<number> {
    return await this.allCheckboxes.count();
  }

  async checkByValue(value: string): Promise<void> {
    await this.checkboxList.locator(`input[value="${value}"]`).check();
  }

  async uncheckByValue(value: string): Promise<void> {
    await this.checkboxList.locator(`input[value="${value}"]`).uncheck();
  }

  async isCheckedByValue(value: string): Promise<boolean> {
    return await this.checkboxList.locator(`input[value="${value}"]`).isChecked();
  }

  async clickSelectAll(): Promise<void> {
    await this.selectAllBtn.click();
  }

  async clickDeselectAll(): Promise<void> {
    await this.deselectAllBtn.click();
  }

  async getOutputText(): Promise<string> {
    return (await this.output.textContent()) ?? '';
  }

  async expectOutputContains(text: string): Promise<void> {
    await expect(this.output).toContainText(text);
  }

  async expectNoItemsSelected(): Promise<void> {
    await expect(this.output).toContainText('No items selected');
  }

  /** Verify that readonly checkboxes cannot be changed */
  async isCheckboxDisabled(value: string): Promise<boolean> {
    return await this.checkboxList.locator(`input[value="${value}"]`).isDisabled();
  }
}