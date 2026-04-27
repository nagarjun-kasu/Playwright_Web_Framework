/**
 * BasePage — shared navigation helpers and common actions
 * ========================================================
 * Every page object extends this class so common utilities (goto, nav clicks,
 * waiting helpers) are available everywhere without duplication.
 */

import { Page, expect } from '@playwright/test';

export const BASE_URL = 'https://nagarjunreddykasu.github.io/web-automation-practice-site/';

export class BasePage {
  constructor(protected readonly page: Page) {}

  /** Navigate to the practice hub root */
  async goto(): Promise<void> {
    await this.page.goto(BASE_URL, { waitUntil: 'domcontentloaded' });
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