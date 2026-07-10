# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: web\specs\myntra.spec.ts >> Myntra Shopping Flow >> should add the last jeans product to the bag and verify it appears in bag @myntra
- Location: tests\web\specs\myntra.spec.ts:4:7

# Error details

```
Error: page.goto: net::ERR_NAME_NOT_RESOLVED at https://prod.myntra.com/
Call log:
  - navigating to "https://prod.myntra.com/", waiting until "domcontentloaded"

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e6]:
    - heading "This site can’t be reached" [level=1] [ref=e7]
    - paragraph [ref=e8]: Check if there is a typo in prod.myntra.com.
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
  7  | import { selfHeal } from '../utils/self-healing-locators';
  8  | 
  9  | export class MyntraPage extends BasePage {
  10 |   private readonly menLink: Locator;
  11 |   private readonly jeansLink: Locator;
  12 |   private readonly productCards: Locator;
  13 |   private readonly bagButton: Locator;
  14 |   private readonly bagButton1: Locator;
  15 |   private readonly bagButton2: Locator;
  16 | 
  17 |   constructor(page: Page) {
  18 |     super(page);
  19 |     this.menLink = page.getByRole('link', { name: 'Men', exact: true }).first();
  20 |     this.jeansLink = page.getByRole('link', { name: 'Jeans', exact: true });
  21 |     this.productCards = page.locator('.product-base');
  22 |     this.bagButton = page.getByText('Bag', { exact: true });
  23 |     this.bagButton1 = page.getByRole('button', { name: 'Bag', exact: true });
  24 |     this.bagButton2 = page.getByRole('link', { name: 'Bag', exact: true });
  25 |   }
  26 | 
  27 |   async open(): Promise<void> {
> 28 |     await this.page.goto(process.env.BASE_URL ?? 'https://www.myntrasss.com/', { waitUntil: 'domcontentloaded' });
     |                     ^ Error: page.goto: net::ERR_NAME_NOT_RESOLVED at https://prod.myntra.com/
  29 |   }
  30 | 
  31 |   async hoverMenMenu1(): Promise<void> {
  32 |     await this.menLink.hover();
  33 |   }
  34 | 
  35 |    async hoverMenMenu(): Promise<void> {
  36 |     await this.hover(this.menLink);
  37 |   }
  38 | 
  39 |   async navigateToJeans1(): Promise<void> {
  40 |     await this.jeansLink.click();
  41 |   }
  42 | 
  43 |    async navigateToJeans(): Promise<void> {
  44 |     await this.click(this.jeansLink);
  45 |   }
  46 | 
  47 |   async getLastProductName(): Promise<string> {
  48 |     return await this.productCards.last().locator('h3').innerText();
  49 |   }
  50 | 
  51 |   async openLastProductInNewTab(): Promise<Page> {
  52 |     const [productPage] = await Promise.all([
  53 |       this.page.waitForEvent('popup'),
  54 |       this.productCards.last().click(),
  55 |     ]);
  56 | 
  57 |     await productPage.waitForLoadState('domcontentloaded');
  58 |     return productPage;
  59 |   }
  60 | 
  61 |   async selectSizeOnProductPage(productPage: Page, size: string): Promise<void> {
  62 |     await productPage.getByRole('button', { name: size, exact: true }).click();
  63 |   }
  64 | 
  65 |   async addProductToBag(productPage: Page): Promise<void> {
  66 |     await productPage.getByText('ADD TO BAG', { exact: true }).click();
  67 |   }
  68 | 
  69 |   async openBagOnProductPage(productPage: Page): Promise<void> {
  70 |     await productPage.getByText('Bag', { exact: true }).click();
  71 |   }
  72 | 
  73 |   async openBag(): Promise<void> {
  74 |     //await this.bagButton.click();
  75 | 
  76 |     const bagButton = await selfHeal(this.page, [
  77 |       {
  78 |         name: 'role=button name="Bag"',
  79 |         locate: (page) => this.bagButton1,
  80 |       },
  81 |       {
  82 |         name: 'role=link name="Bag"',
  83 |         locate: (page) => this.bagButton2,
  84 |       },
  85 |       {
  86 |         name: 'text="Bag"',
  87 |         locate: (page) => this.bagButton,
  88 |       },
  89 |     ]);
  90 | 
  91 |     await bagButton.first().click();
  92 |   }
  93 | 
  94 |   getBagProductLocator(productName: string): Locator {
  95 |     return this.page.getByText(productName, { exact: true });
  96 |   }
  97 | }
  98 | 
```