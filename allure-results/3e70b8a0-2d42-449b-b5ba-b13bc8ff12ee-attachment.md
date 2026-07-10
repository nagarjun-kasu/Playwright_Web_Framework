# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: web\specs\myntra.spec.ts >> Myntra Shopping Flow >> should add the last jeans product to the bag and verify it appears in bag @myntra
- Location: tests\web\specs\myntra.spec.ts:4:7

# Error details

```
Error: page.goto: net::ERR_NAME_NOT_RESOLVED at https://uat.myntra.com/
Call log:
  - navigating to "https://uat.myntra.com/", waiting until "domcontentloaded"

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e6]:
    - heading "This site can’t be reached" [level=1] [ref=e7]
    - paragraph [ref=e8]: Check if there is a typo in uat.myntra.com.
    - generic [ref=e9]:
      - paragraph
      - list [ref=e10]:
        - listitem [ref=e11]:
          - text: If spelling is correct,
          - link "try running Windows Network Diagnostics" [ref=e12] [cursor=pointer]:
            - /url: javascript:diagnoseErrors()
          - text: .
    - generic [ref=e13]: DNS_PROBE_FINISHED_NXDOMAIN
  - button "Reload" [ref=e16] [cursor=pointer]
```

# Test source

```ts
  1  | /**
  2  |  * MyntraPage — Page Object for the Myntra shopping flow
  3  |  */
  4  | 
  5  | import { Page, Locator } from '@playwright/test';
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
> 23 |     await this.page.goto(process.env.BASE_URL ?? 'https://www.myntrasss.com/', { waitUntil: 'domcontentloaded' });
     |                     ^ Error: page.goto: net::ERR_NAME_NOT_RESOLVED at https://uat.myntra.com/
  24 |   }
  25 | 
  26 |   async hoverMenMenu1(): Promise<void> {
  27 |     await this.menLink.hover();
  28 |   }
  29 | 
  30 |    async hoverMenMenu(): Promise<void> {
  31 |     await this.hover(this.menLink);
  32 |   }
  33 | 
  34 |   async navigateToJeans1(): Promise<void> {
  35 |     await this.jeansLink.click();
  36 |   }
  37 | 
  38 |    async navigateToJeans(): Promise<void> {
  39 |     await this.click(this.jeansLink);
  40 |   }
  41 | 
  42 |   async getLastProductName(): Promise<string> {
  43 |     return await this.productCards.last().locator('h3').innerText();
  44 |   }
  45 | 
  46 |   async openLastProductInNewTab(): Promise<Page> {
  47 |     const [productPage] = await Promise.all([
  48 |       this.page.waitForEvent('popup'),
  49 |       this.productCards.last().click(),
  50 |     ]);
  51 | 
  52 |     await productPage.waitForLoadState('domcontentloaded');
  53 |     return productPage;
  54 |   }
  55 | 
  56 |   async selectSizeOnProductPage(productPage: Page, size: string): Promise<void> {
  57 |     await productPage.getByRole('button', { name: size, exact: true }).click();
  58 |   }
  59 | 
  60 |   async addProductToBag(productPage: Page): Promise<void> {
  61 |     await productPage.getByText('ADD TO BAG', { exact: true }).click();
  62 |   }
  63 | 
  64 |   async openBagOnProductPage(productPage: Page): Promise<void> {
  65 |     await productPage.getByText('Bag', { exact: true }).click();
  66 |   }
  67 | 
  68 |   async openBag(): Promise<void> {
  69 |     await this.bagButton.click();
  70 |   }
  71 | 
  72 |   getBagProductLocator(productName: string): Locator {
  73 |     return this.page.getByText(productName, { exact: true });
  74 |   }
  75 | }
  76 | 
```