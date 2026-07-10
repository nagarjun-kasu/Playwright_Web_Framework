import {expect, test} from '@playwright/test'

test("Validate mobile order confirmation", async({page})=>{
    await page.goto("https://nagarjun-kasu.github.io/mobile_ecommerce/");

    //locator for last mobile card
    const lastProduct = page.locator(".product-card").last();
    //extracting last mobile name, brand, price
    const lastMobileName = await lastProduct.locator(".product-card-name").innerText();
    const lastMobileBrand = await lastProduct.locator(".product-card-brand").innerText();
    const lastMobilePrice = await lastProduct.locator(".price-current").innerText();
    console.log(`Last Mobile Name: ${lastMobileName}, Mobile Brand: ${lastMobileBrand}, MobilePrice: ${lastMobilePrice}`);

    //Adding last mobile to cart
    await lastProduct.getByRole("button", {name:"Add to Cart"}).click();
    console.log(await page.locator(".toast-message").innerText());
    await expect(page.locator(".toast-message")).toHaveText(`${lastMobileName} added to cart!`);
    //click on cart icon
    await page.getByTitle("Shopping Cart").click();
    //validate the mobile name, brand, price are shown correctly in the cart page
    await expect(page.locator(".cart-item-info > .cart-item-name")).toHaveText(lastMobileName);
    await expect(page.locator(".cart-item-info > .cart-item-brand")).toHaveText(lastMobileBrand.charAt(0)+lastMobileBrand.slice(1).toLowerCase());
    await expect(page.locator(".cart-item-info > .cart-item-price")).toHaveText(lastMobilePrice);
    //validate the quantity is 1 in the cart page
    console.log(await page.locator(".quantity-control > .qty-value").innerText());
    await expect(page.locator(".quantity-control > .qty-value")).toHaveText("1");
    
    //validate the cart totals
    const cartTotals = page.locator(".cart-totals");
    const subTotal = await cartTotals.locator(".cart-total-row").first().locator("span").nth(1).textContent();
    const tax = await cartTotals.locator(".cart-total-row").nth(1).locator("span").nth(1).textContent();
    const total = await cartTotals.locator(".total").locator("span").nth(1).textContent();
    console.log(`Cart Subtotal:${subTotal}, Tax:${tax}, Total:${total}`);

    const subTotalValue = Number(subTotal?.replace(/[$,]/g,''));
    const taxValue = Number(tax?.replace(/[$,]/g,''));
    const totalValue = Number(total?.replace(/[$,]/g,''));
    console.log(`Subtotal Value:${subTotalValue}, Tax value:${taxValue}, Total value:${totalValue}`);
    console.log(subTotalValue + taxValue);
    expect(subTotalValue + taxValue).toBe(totalValue);

    //click on Proceed to Checkout button
    

    await page.pause();


})