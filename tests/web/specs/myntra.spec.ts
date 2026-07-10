import { test, expect } from '../fixtures/test-fixtures';

test.describe('Myntra Shopping Flow', () => {
  test('should add the last jeans product to the bag and verify it appears in bag @myntra', async ({ myntraPage }) => {
    await myntraPage.open();
    await myntraPage.hoverMenMenu();
    await myntraPage.navigateToJeans();

    const lastProductName = await myntraPage.getLastProductName();
    const productPage = await myntraPage.openLastProductInNewTab();

    await myntraPage.selectSizeOnProductPage(productPage, '38');
    await myntraPage.addProductToBag(productPage);
    await myntraPage.openBagOnProductPage(productPage);

    await expect(productPage.getByText(lastProductName, { exact: true })).toBeVisible();
    await productPage.close();

    await myntraPage.openBag();
    await expect(myntraPage.getBagProductLocator(lastProductName)).toBeVisible();
  });
});