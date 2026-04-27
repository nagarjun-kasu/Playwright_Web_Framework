/**
 * DropdownsPage — Page Object for the Dropdowns section
 */

import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './base.page';

export class DropdownsPage extends BasePage {
  private readonly countrySelect: Locator;
  private readonly currencySelect: Locator;
  private readonly languageSelect: Locator;
  private readonly frameworkSelect: Locator;
  private readonly output: Locator;

  constructor(page: Page) {
    super(page);
    this.countrySelect = page.locator('#ddCountry');
    this.currencySelect = page.locator('#ddCurrency');
    this.languageSelect = page.locator('#ddLanguage');
    this.frameworkSelect = page.locator('#ddFramework');
    this.output = page.locator('#ddOutput');
  }

  async open(): Promise<void> {
    await this.goto();
    await this.navigateTo('dropdowns');
  }

  async selectCountry(country: string): Promise<void> {
    await this.countrySelect.selectOption(country);
  }

  async selectCurrency(currency: string): Promise<void> {
    await this.currencySelect.selectOption(currency);
  }

  async selectLanguage(language: string): Promise<void> {
    await this.languageSelect.selectOption(language);
  }

  async selectFramework(framework: string): Promise<void> {
    await this.frameworkSelect.selectOption(framework);
  }

  async getOutputText(): Promise<string> {
    return (await this.output.textContent()) ?? '';
  }

  async expectOutputContains(text: string): Promise<void> {
    await expect(this.output).toContainText(text);
  }

  async getCountryOptions(): Promise<string[]> {
    return await this.countrySelect.locator('option').allTextContents();
  }

  async getCurrencyOptions(): Promise<string[]> {
    return await this.currencySelect.locator('option').allTextContents();
  }

  async getSelectedCountry(): Promise<string> {
    return await this.countrySelect.inputValue();
  }

  async getSelectedFramework(): Promise<string> {
    return await this.frameworkSelect.inputValue();
  }
}