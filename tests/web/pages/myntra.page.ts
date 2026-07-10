/**
 * MyntraPage — Page Object for the Myntra shopping flow
 */

import { Page, Locator } from '@playwright/test';
import { BasePage } from './base.page';
import { selfHeal } from '../utils/self-healing-locators';

export class MyntraPage extends BasePage {
  private readonly menLink: Locator;
  private readonly jeansLink: Locator;
  private readonly productCards: Locator;
  private readonly bagButton: Locator;
  private readonly bagButton1: Locator;
  private readonly bagButton2: Locator;

  constructor(page: Page) {
    super(page);
    this.menLink = page.getByRole('link', { name: 'Men', exact: true }).first();
    this.jeansLink = page.getByRole('link', { name: 'Jeans', exact: true });
    this.productCards = page.locator('.product-base');
    this.bagButton = page.getByText('Bag', { exact: true });
    this.bagButton1 = page.getByRole('button', { name: 'Bag', exact: true });
    this.bagButton2 = page.getByRole('link', { name: 'Bag', exact: true });
  }

  async open(): Promise<void> {
    await this.page.goto(process.env.BASE_URL ?? 'https://www.myntrasss.com/', { waitUntil: 'domcontentloaded' });
  }

  async hoverMenMenu1(): Promise<void> {
    await this.menLink.hover();
  }

   async hoverMenMenu(): Promise<void> {
    await this.hover(this.menLink);
  }

  async navigateToJeans1(): Promise<void> {
    await this.jeansLink.click();
  }

   async navigateToJeans(): Promise<void> {
    await this.click(this.jeansLink);
  }

  async getLastProductName(): Promise<string> {
    return await this.productCards.last().locator('h3').innerText();
  }

  async openLastProductInNewTab(): Promise<Page> {
    const [productPage] = await Promise.all([
      this.page.waitForEvent('popup'),
      this.productCards.last().click(),
    ]);

    await productPage.waitForLoadState('domcontentloaded');
    return productPage;
  }

  async selectSizeOnProductPage(productPage: Page, size: string): Promise<void> {
    await productPage.getByRole('button', { name: size, exact: true }).click();
  }

  async addProductToBag(productPage: Page): Promise<void> {
    await productPage.getByText('ADD TO BAG', { exact: true }).click();
  }

  async openBagOnProductPage(productPage: Page): Promise<void> {
    await productPage.getByText('Bag', { exact: true }).click();
  }

  async openBag(): Promise<void> {
    //await this.bagButton.click();

    const bagButton = await selfHeal(this.page, [
      {
        name: 'role=button name="Bag"',
        locate: (page) => this.bagButton1,
      },
      {
        name: 'role=link name="Bag"',
        locate: (page) => this.bagButton2,
      },
      {
        name: 'text="Bag"',
        locate: (page) => this.bagButton,
      },
    ]);

    await bagButton.first().click();
  }

  getBagProductLocator(productName: string): Locator {
    return this.page.getByText(productName, { exact: true });
  }
}
