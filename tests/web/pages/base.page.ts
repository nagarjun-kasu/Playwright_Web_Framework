/**
 * BasePage — shared navigation helpers and common actions
 * ========================================================
 * Every page object extends this class so common utilities (goto, nav clicks,
 * waiting helpers) are available everywhere without duplication.
 */

import { Locator, Page, expect } from '@playwright/test';

export const BASE_URL = process.env.BASE_URL ?? 'https://nagarjunreddykasu.github.io/web-automation-practice-site/';

export class BasePage {
  constructor(protected readonly page: Page) {}


  /** Navigate to the practice hub root */
  async goto(): Promise<void> {
    await this.page.goto(BASE_URL, { waitUntil: 'domcontentloaded' });
  }

  /** Navigate to a specific URL */
  async navigateToUrl(url: string): Promise<void> {
    await this.page.goto(url, { waitUntil: 'domcontentloaded' });
  }

  /** Click the target element */
  async click(element: Locator): Promise<void> {
    await element.click();
  }

  /** Fill the target input element */
  async fill(element: Locator, value: string): Promise<void> {
    await element.fill(value);
  }

  /// Hover over the target element
  async hover(element: Locator): Promise<void> {
    await element.hover();
  }

  /** Get the text content of the target element */
  async getText(element: Locator): Promise<string> {
    return (await element.textContent()) ?? '';
  }

  /** Get the input value of the target element */
  async getValue(element: Locator): Promise<string> {
    return await element.inputValue();
  }

  /** Get attribute value from the target element */
  async getAttribute(element: Locator, name: string): Promise<string | null> {
    return await element.getAttribute(name);
  }

  /** Determine if the target element is visible */
  async isVisible(element: Locator): Promise<boolean> {
    return await element.isVisible();
  }

  /** Wait until the target element is visible */
  async waitForVisible(element: Locator, timeout?: number): Promise<void> {
    await element.waitFor({ state: 'visible', timeout });
  }

  /** Wait until the target element is hidden */
  async waitForHidden(element: Locator, timeout?: number): Promise<void> {
    await element.waitFor({ state: 'hidden', timeout });
  }

  /**
   * Click a navigation menu item by its `data-page` attribute value.
   * Waits for the corresponding page section to become visible.
   */
  async navigateTo(
    pageName:
      | 'welcome'
      | 'login'
      | 'register'
      | 'checkboxes'
      | 'webtables'
      | 'calculator'
      | 'kmart'
      | 'dropdowns'
      | 'upload'
      | 'interactions',
  ): Promise<void> {
    const navLink = this.page.locator(`a[data-page="${pageName}"]`);
    await navLink.click();
    const section = this.page.locator(`#page-${pageName}`);
    await expect(section).toBeVisible();
  }

  /** Verify the active navigation link matches the expected page */
  async expectActiveNav(pageName: string): Promise<void> {
    const activeLink = this.page.locator('a.active[data-page]');
    await expect(activeLink).toHaveAttribute('data-page', pageName);
  }

  /** Return the page title text */
  async getPageTitle(): Promise<string> {
    return await this.page.title();
  }
}