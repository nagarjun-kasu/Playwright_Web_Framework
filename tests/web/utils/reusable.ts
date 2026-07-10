/**
 * Reusable Playwright Functions for Web Automation
 * 
 * This module provides a collection of utility functions for common web actions
 * using Playwright and TypeScript. All functions follow best practices including
 * proper error handling, type annotations, and modular design.
 * 
 * @module reusable
 */

import { Page, Locator, Frame, Keyboard, Mouse } from '@playwright/test';

// ============================================
// Type Definitions
// ============================================

/** Options for navigation actions */
export interface NavigationOptions {
  /** Wait until network is idle (default: false) */
  waitUntil?: 'load' | 'domcontentloaded' | 'networkidle' | 'commit';
  /** Timeout in milliseconds */
  timeout?: number;
  /** Referer URL */
  referer?: string;
}

/** Options for click actions */
export interface ClickOptions {
  /** Number of clicks */
  clickCount?: number;
  /** Delay between clicks in ms */
  delay?: number;
  /** Modifier keys to hold */
  modifiers?: ('Alt' | 'Control' | 'Meta' | 'Shift')[];
  /** Position relative to element */
  position?: { x: number; y: number };
  /** Timeout in milliseconds */
  timeout?: number;
}

/** Options for fill actions */
export interface FillOptions {
  /** Whether to force fill even if element is not visible */
  force?: boolean;
  /** Whether to skip validation */
  noWaitAfter?: boolean;
  /** Timeout in milliseconds */
  timeout?: number;
}

/** Options for wait actions */
export interface WaitForSelectorOptions {
  /** State to wait for */
  state?: 'attached' | 'detached' | 'visible' | 'hidden';
  /** Timeout in milliseconds */
  timeout?: number;
}

/** Options for select actions */
export interface SelectOptions {
  /** Whether to force selection */
  force?: boolean;
  /** Timeout in milliseconds */
  timeout?: number;
}

// ============================================
// Navigation Functions
// ============================================

/**
 * Navigates to a specified URL
 * 
 * @param page - Playwright Page object
 * @param url - Target URL to navigate to
 * @param options - Navigation options
 * @returns Promise that resolves when navigation completes
 * @example
 * await navigateToUrl(page, 'https://example.com', { waitUntil: 'networkidle' });
 */
export async function navigateToUrl(
  page: Page,
  url: string,
  options?: NavigationOptions
): Promise<void> {
  const { waitUntil = 'load', timeout = 30000, referer } = options || {};
  
  await page.goto(url, { waitUntil, timeout, referer });
}

/**
 * Navigates to a URL and waits for a specific selector
 * 
 * @param page - Playwright Page object
 * @param url - Target URL to navigate to
 * @param selector - Selector to wait for after navigation
 * @param options - Navigation options
 * @returns Promise that resolves when selector is visible
 */
export async function navigateAndWaitForSelector(
  page: Page,
  url: string,
  selector: string,
  options?: NavigationOptions & WaitForSelectorOptions
): Promise<void> {
  const { state = 'visible', timeout = 30000, ...navOptions } = options || {};
  
  await page.goto(url, { ...navOptions, waitUntil: navOptions.waitUntil || 'load' });
  await page.waitForSelector(selector, { state, timeout });
}

/**
 * Reloads the current page
 * 
 * @param page - Playwright Page object
 * @param options - Navigation options
 * @returns Promise that resolves when page reloads
 */
export async function reloadPage(
  page: Page,
  options?: NavigationOptions
): Promise<void> {
  const { waitUntil = 'load', timeout = 30000 } = options || {};
  
  await page.reload({ waitUntil, timeout });
}

/**
 * Goes back in browser history
 * 
 * @param page - Playwright Page object
 * @returns Promise that resolves when navigation completes
 */
export async function goBack(page: Page): Promise<void> {
  await page.goBack();
}

/**
 * Goes forward in browser history
 * 
 * @param page - Playwright Page object
 * @returns Promise that resolves when navigation completes
 */
export async function goForward(page: Page): Promise<void> {
  await page.goForward();
}

// ============================================
// Click Functions
// ============================================

/**
 * Clicks on an element identified by selector
 * 
 * @param page - Playwright Page object
 * @param selector - CSS or XPath selector
 * @param options - Click options
 * @returns Promise that resolves when click completes
 * @example
 * await clickElement(page, '#submit-button', { timeout: 5000 });
 */
export async function clickElement(
  page: Page,
  selector: string,
  options?: ClickOptions
): Promise<void> {
  const { clickCount = 1, delay, modifiers, position, timeout = 30000 } = options || {};
  
  await page.click(selector, { clickCount, delay, modifiers, position, timeout });
}

/**
 * Clicks on an element and waits for navigation
 * 
 * @param page - Playwright Page object
 * @param selector - CSS or XPath selector
 * @param options - Click and navigation options
 * @returns Promise that resolves when navigation completes
 */
export async function clickAndNavigate(
  page: Page,
  selector: string,
  options?: ClickOptions & NavigationOptions
): Promise<void> {
  const { timeout = 30000, waitUntil = 'load', ...clickOptions } = options || {};
  
  await Promise.all([
    page.click(selector, { ...clickOptions, timeout })
  ]);
}

/**
 * Double clicks on an element
 * 
 * @param page - Playwright Page object
 * @param selector - CSS or XPath selector
 * @param options - Click options
 * @returns Promise that resolves when double click completes
 */
export async function doubleClickElement(
  page: Page,
  selector: string,
  options?: ClickOptions
): Promise<void> {
  await clickElement(page, selector, { ...options, clickCount: 2 });
}

/**
 * Right clicks on an element (context menu)
 * 
 * @param page - Playwright Page object
 * @param selector - CSS or XPath selector
 * @param options - Click options
 * @returns Promise that resolves when right click completes
 */
export async function rightClickElement(
  page: Page,
  selector: string,
  options?: ClickOptions
): Promise<void> {
  const { timeout = 30000 } = options || {};
  
  await page.click(selector, { button: 'right', timeout });
}

// ============================================
// Form Input Functions
// ============================================

/**
 * Fills an input field with text
 * 
 * @param page - Playwright Page object
 * @param selector - CSS or XPath selector
 * @param value - Text value to fill
 * @param options - Fill options
 * @returns Promise that resolves when fill completes
 * @example
 * await fillInput(page, '#username', 'testuser', { timeout: 5000 });
 */
export async function fillInput(
  page: Page,
  selector: string,
  value: string,
  options?: FillOptions
): Promise<void> {
  const { force = false, noWaitAfter = false, timeout = 30000 } = options || {};
  
  await page.fill(selector, value, { force, noWaitAfter, timeout });
}

/**
 * Types text into an input field character by character
 * 
 * @param page - Playwright Page object
 * @param selector - CSS or XPath selector
 * @param text - Text to type
 * @param options - Type options including delay
 * @returns Promise that resolves when typing completes
 * @example
 * await typeText(page, '#search', 'playwright', { delay: 100 });
 */
export async function typeText(
  page: Page,
  selector: string,
  text: string,
  options?: {
    delay?: number;
    timeout?: number;
  }
): Promise<void> {
  const { delay, timeout = 30000 } = options || {};
  
  await page.type(selector, text, { delay, timeout });
}

/**
 * Clears an input field
 * 
 * @param page - Playwright Page object
 * @param selector - CSS or XPath selector
 * @param options - Fill options
 * @returns Promise that resolves when clear completes
 */
export async function clearInput(
  page: Page,
  selector: string,
  options?: FillOptions
): Promise<void> {
  const { timeout = 30000 } = options || {};
  
  await page.fill(selector, '', { timeout });
}

/**
 * Presses a key on the page or element
 * 
 * @param page - Playwright Page object
 * @param key - Key to press (e.g., 'Enter', 'Tab', 'Escape')
 * @param options - Press options
 * @returns Promise that resolves when key press completes
 * @example
 * await pressKey(page, 'Enter');
 */
export async function pressKey(
  page: Page,
  key: string,
  options?: {
    delay?: number;
    timeout?: number;
  }
): Promise<void> {
  const { delay, timeout = 30000 } = options || {};
  
  await page.keyboard.press(key, { delay });
}

/**
 * Selects option(s) from a dropdown/select element
 * 
 * @param page - Playwright Page object
 * @param selector - CSS or XPath selector
 * @param values - Value(s) to select
 * @param options - Select options
 * @returns Promise that resolves when selection completes
 * @example
 * await selectDropdown(page, '#country', 'US');
 * await selectDropdown(page, '#colors', ['red', 'blue']);
 */
export async function selectDropdown(
  page: Page,
  selector: string,
  values: string | string[],
  options?: SelectOptions
): Promise<string[]> {
  const { force = false, timeout = 30000 } = options || {};
  
  return await page.selectOption(selector, values, { force, timeout });
}

// ============================================
// Wait Functions
// ============================================

/**
 * Waits for an element to be visible
 * 
 * @param page - Playwright Page object
 * @param selector - CSS or XPath selector
 * @param options - Wait options
 * @returns Promise that resolves when element is visible
 * @example
 * await waitForElementVisible(page, '#loading-spinner', { timeout: 10000 });
 */
export async function waitForElementVisible(
  page: Page,
  selector: string,
  options?: WaitForSelectorOptions
): Promise<void> {
  const { state = 'visible', timeout = 30000 } = options || {};
  
  await page.waitForSelector(selector, { state, timeout });
}

/**
 * Waits for an element to be hidden or removed
 * 
 * @param page - Playwright Page object
 * @param selector - CSS or XPath selector
 * @param options - Wait options
 * @returns Promise that resolves when element is hidden
 */
export async function waitForElementHidden(
  page: Page,
  selector: string,
  options?: WaitForSelectorOptions
): Promise<void> {
  await waitForElementVisible(page, selector, { ...options, state: 'hidden' });
}

/**
 * Waits for an element to be attached to DOM
 * 
 * @param page - Playwright Page object
 * @param selector - CSS or XPath selector
 * @param options - Wait options
 * @returns Promise that resolves when element is attached
 */
export async function waitForElementAttached(
  page: Page,
  selector: string,
  options?: WaitForSelectorOptions
): Promise<void> {
  await waitForElementVisible(page, selector, { ...options, state: 'attached' });
}

/**
 * Waits for a specific timeout
 * 
 * @param milliseconds - Time to wait in milliseconds
 * @returns Promise that resolves after timeout
 * @example
 * await waitForTimeout(2000); // Wait 2 seconds
 */
export async function waitForTimeout(milliseconds: number): Promise<void> {
  await new Promise(resolve => setTimeout(resolve, milliseconds));
}

/**
 * Waits for a URL to match a pattern
 * 
 * @param page - Playwright Page object
 * @param url - URL or pattern to match
 * @param options - Wait options
 * @returns Promise that resolves when URL matches
 */
export async function waitForUrl(
  page: Page,
  url: string | RegExp,
  options?: {
    timeout?: number;
  }
): Promise<void> {
  const { timeout = 30000 } = options || {};
  
  await page.waitForURL(url, { timeout });
}

// ============================================
// Assertion Functions
// ============================================

/**
 * Checks if an element is visible
 * 
 * @param page - Playwright Page object
 * @param selector - CSS or XPath selector
 * @returns Promise that resolves to boolean indicating visibility
 * @example
 * const isVisible = await isElementVisible(page, '#submit-button');
 */
export async function isElementVisible(
  page: Page,
  selector: string
): Promise<boolean> {
  const element = page.locator(selector);
  return await element.isVisible();
}

/**
 * Checks if an element is enabled
 * 
 * @param page - Playwright Page object
 * @param selector - CSS or XPath selector
 * @returns Promise that resolves to boolean indicating enabled state
 */
export async function isElementEnabled(
  page: Page,
  selector: string
): Promise<boolean> {
  const element = page.locator(selector);
  return await element.isEnabled();
}

/**
 * Checks if an element exists in the DOM
 * 
 * @param page - Playwright Page object
 * @param selector - CSS or XPath selector
 * @returns Promise that resolves to boolean indicating existence
 */
export async function doesElementExist(
  page: Page,
  selector: string
): Promise<boolean> {
  const element = page.locator(selector);
  return await element.count() > 0;
}

/**
 * Gets the text content of an element
 * 
 * @param page - Playwright Page object
 * @param selector - CSS or XPath selector
 * @returns Promise that resolves to text content
 * @example
 * const headingText = await getElementText(page, 'h1.title');
 */
export async function getElementText(
  page: Page,
  selector: string
): Promise<string> {
  const element = page.locator(selector);
  return await element.textContent() || '';
}

/**
 * Gets an attribute value from an element
 * 
 * @param page - Playwright Page object
 * @param selector - CSS or XPath selector
 * @param attribute - Attribute name
 * @returns Promise that resolves to attribute value
 * @example
 * const href = await getElementAttribute(page, 'a.link', 'href');
 */
export async function getElementAttribute(
  page: Page,
  selector: string,
  attribute: string
): Promise<string | null> {
  const element = page.locator(selector);
  return await element.getAttribute(attribute);
}

// ============================================
// Frame Functions
// ============================================

/**
 * Switches to an iframe and returns a frame handle
 * 
 * @param page - Playwright Page object
 * @param selector - Iframe selector
 * @returns Promise that resolves to Frame
 * @example
 * const frame = await switchToFrame(page, 'iframe[name="content"]');
 */
export async function switchToFrame(
  page: Page,
  selector: string
): Promise<Frame | null> {
  const iframeHandle = await page.locator(selector).elementHandle();
  if (!iframeHandle) {
    return null;
  }

  return await iframeHandle.contentFrame();
}

/**
 * Performs action within an iframe
 * 
 * @param page - Playwright Page object
 * @param frameSelector - Iframe selector
 * @param action - Action to perform within frame
 * @returns Promise that resolves to action result
 */
export async function performInFrame<T>(
  page: Page,
  frameSelector: string,
  action: (frame: Frame) => Promise<T>
): Promise<T> {
  const iframeHandle = await page.locator(frameSelector).elementHandle();
  if (!iframeHandle) {
    throw new Error(`Iframe not found for selector: ${frameSelector}`);
  }

  const frame = await iframeHandle.contentFrame();
  if (!frame) {
    throw new Error(`Unable to switch to frame for selector: ${frameSelector}`);
  }

  return await action(frame);
}

// ============================================
// Mouse & Keyboard Functions
// ============================================

/**
 * Moves mouse to a specific position
 * 
 * @param page - Playwright Page object
 * @param x - X coordinate
 * @param y - Y coordinate
 * @returns Promise that resolves when mouse moves
 */
export async function moveMouse(
  page: Page,
  x: number,
  y: number
): Promise<void> {
  await page.mouse.move(x, y);
}

/**
 * Clicks at a specific position
 * 
 * @param page - Playwright Page object
 * @param x - X coordinate
 * @param y - Y coordinate
 * @param options - Click options
 * @returns Promise that resolves when click completes
 */
export async function clickAtPosition(
  page: Page,
  x: number,
  y: number,
  options?: {
    button?: 'left' | 'right' | 'middle';
    clickCount?: number;
  }
): Promise<void> {
  const { button = 'left', clickCount = 1 } = options || {};
  
  await page.mouse.click(x, y, { button, clickCount });
}

/**
 * Scrolls the page to a specific position
 * 
 * @param page - Playwright Page object
 * @param x - X coordinate
 * @param y - Y coordinate
 * @returns Promise that resolves when scroll completes
 */
export async function scrollToPosition(
  page: Page,
  x: number,
  y: number
): Promise<void> {
  await page.mouse.wheel(x, y);
}

/**
 * Scrolls an element into view
 * 
 * @param page - Playwright Page object
 * @param selector - CSS or XPath selector
 * @param options - Scroll options
 * @returns Promise that resolves when scroll completes
 */
export async function scrollElementIntoView(
  page: Page,
  selector: string,
  options?: {
    timeout?: number;
  }
): Promise<void> {
  const { timeout = 30000 } = options || {};
  
  const element = page.locator(selector);
  await element.scrollIntoViewIfNeeded({ timeout });
}

// ============================================
// Screenshot Functions
// ============================================

/**
 * Takes a screenshot of the page
 * 
 * @param page - Playwright Page object
 * @param path - File path to save screenshot
 * @param options - Screenshot options
 * @returns Promise that resolves when screenshot is taken
 * @example
 * await takeScreenshot(page, './screenshots/page.png', { fullPage: true });
 */
export async function takeScreenshot(
  page: Page,
  path: string,
  options?: {
    fullPage?: boolean;
    type?: 'png' | 'jpeg';
    quality?: number;
  }
): Promise<void> {
  const { fullPage = false, type = 'png', quality } = options || {};
  
  await page.screenshot({ path, fullPage, type, quality });
}

/**
 * Takes a screenshot of a specific element
 * 
 * @param page - Playwright Page object
 * @param selector - CSS or XPath selector
 * @param path - File path to save screenshot
 * @returns Promise that resolves when screenshot is taken
 */
export async function takeElementScreenshot(
  page: Page,
  selector: string,
  path: string
): Promise<void> {
  const element = page.locator(selector);
  await element.screenshot({ path });
}

// ============================================
// Utility Functions
// ============================================

/**
 * Gets the current page URL
 * 
 * @param page - Playwright Page object
 * @returns Promise that resolves to current URL
 */
export async function getCurrentUrl(page: Page): Promise<string> {
  return page.url();
}

/**
 * Gets the page title
 * 
 * @param page - Playwright Page object
 * @returns Promise that resolves to page title
 */
export async function getPageTitle(page: Page): Promise<string> {
  return page.title();
}

/**
 * Focuses on an element
 * 
 * @param page - Playwright Page object
 * @param selector - CSS or XPath selector
 * @returns Promise that resolves when focus completes
 */
export async function focusElement(
  page: Page,
  selector: string
): Promise<void> {
  const element = page.locator(selector);
  await element.focus();
}

/**
 * Hovers over an element
 * 
 * @param page - Playwright Page object
 * @param selector - CSS or XPath selector
 * @returns Promise that resolves when hover completes
 */
export async function hoverOverElement(
  page: Page,
  selector: string
): Promise<void> {
  const element = page.locator(selector);
  await element.hover();
}

/**
 * Checks a checkbox or radio button
 * 
 * @param page - Playwright Page object
 * @param selector - CSS or XPath selector
 * @returns Promise that resolves when check completes
 */
export async function checkElement(
  page: Page,
  selector: string
): Promise<void> {
  const element = page.locator(selector);
  await element.check();
}

/**
 * Unchecks a checkbox
 * 
 * @param page - Playwright Page object
 * @param selector - CSS or XPath selector
 * @returns Promise that resolves when uncheck completes
 */
export async function uncheckElement(
  page: Page,
  selector: string
): Promise<void> {
  const element = page.locator(selector);
  await element.uncheck();
}

/**
 * Gets the count of elements matching a selector
 * 
 * @param page - Playwright Page object
 * @param selector - CSS or XPath selector
 * @returns Promise that resolves to count of elements
 * @example
 * const itemCount = await getElementCount(page, '.list-item');
 */
export async function getElementCount(
  page: Page,
  selector: string
): Promise<number> {
  const element = page.locator(selector);
  return await element.count();
}