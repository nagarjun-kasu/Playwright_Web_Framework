# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: web\specs\myntra.spec.ts >> Myntra Shopping Flow >> should add the last jeans product to the bag and verify it appears in bag @myntra
- Location: tests\web\specs\myntra.spec.ts:4:7

# Error details

```
Error: page.goto: net::ERR_HTTP2_PROTOCOL_ERROR at https://www.myntra.com/
Call log:
  - navigating to "https://www.myntra.com/", waiting until "domcontentloaded"

```

# Test source

```ts
  1  | /**
  2  |  * MyntraPage — Page Object for the Myntra shopping flow
  3  |  */
  4  | 
  5  | import { Page, Locator, expect } from '@playwright/test';
  6  | import { BasePage } from './base.page';
  7  | 
  8  | export class MyntraPage extends BasePage {
  9  |   private readonly menLink: Locator;
  10 |   private readonly jeansLink: Locator;
  11 |   private readonly productCards: Locator;
  12 |   private readonly bagButton: Locator;
  13 | 
  14 |   constructor(page: Page) {
  15 |     super(page);
  16 |     this.menLink = page.getByRole('link', { name: 'Men', exact: true }).first();
  17 |     this.jeansLink = page.getByRole('link', { name: 'Jeans', exact: true });
  18 |     this.productCards = page.locator('.product-base');
  19 |     this.bagButton = page.getByText('Bag', { exact: true });
  20 |   }
  21 | 
  22 |   async open(): Promise<void> {
> 23 |     await this.page.goto('https://www.myntra.com/', { waitUntil: 'domcontentloaded' });
     |                     ^ Error: page.goto: net::ERR_HTTP2_PROTOCOL_ERROR at https://www.myntra.com/
  24 |   }
  25 | 
  26 |   async hoverMenMenu(): Promise<void> {
  27 |     await this.menLink.hover();
  28 |   }
  29 | 
  30 |   async navigateToJeans(): Promise<void> {
  31 |     await this.jeansLink.click();
  32 |   }
  33 | 
  34 |   async getLastProductName(): Promise<string> {
  35 |     return await this.productCards.last().locator('h3').innerText();
  36 |   }
  37 | 
  38 |   async openLastProductInNewTab(): Promise<Page> {
  39 |     const [productPage] = await Promise.all([
  40 |       this.page.waitForEvent('popup'),
  41 |       this.productCards.last().click(),
  42 |     ]);
  43 | 
  44 |     await productPage.waitForLoadState('domcontentloaded');
  45 |     return productPage;
  46 |   }
  47 | 
  48 |   async selectSizeOnProductPage(productPage: Page, size: string): Promise<void> {
  49 |     await productPage.getByRole('button', { name: size, exact: true }).click();
  50 |   }
  51 | 
  52 |   async addProductToBag(productPage: Page): Promise<void> {
  53 |     await productPage.getByText('ADD TO BAG', { exact: true }).click();
  54 |   }
  55 | 
  56 |   async openBagOnProductPage(productPage: Page): Promise<void> {
  57 |     await productPage.getByText('Bag', { exact: true }).click();
  58 |   }
  59 | 
  60 |   async openBag(): Promise<void> {
  61 |     await this.bagButton.click();
  62 |   }
  63 | 
  64 |   getBagProductLocator(productName: string): Locator {
  65 |     return this.page.getByText(productName, { exact: true });
  66 |   }
  67 | }
  68 | 
```