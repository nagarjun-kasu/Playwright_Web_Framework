/*
 * Self-Healing Locator Strategy
 * =============================
 * Provides a resilient locator mechanism that tries multiple selector strategies
 * in priority order. If the primary locator fails, it falls back to alternative
 * locators automatically. This reduces test flakiness caused by UI changes.

*/

import { Locator, Page } from '@playwright/test';

/** Descriptor for a single locator strategy */
export interface LocatorStrategy {
  /** Human-readable label used for logging and diagnostics */
  name: string;
  /** Function that produces a Playwright Locator from a Page */
  locate: (page: Page) => Locator;
}

/**
 * Attempts each locator strategy in order. Returns the first Locator whose
 * element is visible and attached to the DOM within the given timeout.
 *
 * @param page      - Playwright Page instance
 * @param strategies - Ordered array of locator strategies (highest priority first)
 * @param timeout   - Max time (ms) to wait per strategy before falling back (default 3 000 ms)
 * @returns         - The first healthy Locator found
 * @throws          - If none of the strategies resolve a visible element
 */
export async function selfHeal(
  page: Page,
  strategies: LocatorStrategy[],
  timeout = 3_000,
): Promise<Locator> {
  for (const strategy of strategies) {
    try{
      const locator = strategy.locate(page);
      await locator.first().waitFor({ state: 'visible', timeout });
      // Strategy succeeded — return this locator
      return locator;
    }catch {
      // Strategy failed; fall through to the next one
      console.warn(`[SelfHeal] Strategy "${strategy.name}" failed — trying next.`);
    }
  }
  throw new Error(
    `[SelfHeal] All ${strategies.length} strategies exhausted. Element not found.`,
  );
}

/**
 * Convenience builder that creates a standard set of fallback strategies
 * for a given element described by common attributes.
 *
 * Usage:
 *   const locator = await selfHeal(page, buildStrategies({
 *     testId:  'calc-display',
 *     role:    'textbox',
 *     id:      'calcDisplay',
 *     text:    '0',
 *     css:     '.calc-display',
 *     xpath:   '//div[@class="calc-display"]',
 *   }));
 */
export interface StrategyHints {
  testId?: string;
  role?: 'button' | 'textbox' | 'link' | 'checkbox' | 'radio' | 'heading' | 'cell' | 'row' | 'option' | 'listitem' | 'dialog' | 'table' | 'combobox' | 'slider' | 'tab';
  roleName?: string;
  id?: string;
  text?: string;
  css?: string;
  xpath?: string;
  label?: string;
  placeholder?: string;
}

export function buildStrategies(hints: StrategyHints): LocatorStrategy[] {
  const strategies: LocatorStrategy[] = [];

  // 1. data-testid (most stable, CI-friendly)
  if(hints.testId){
    strategies.push({
      name: `data-testid="${hints.testId}"`,
      locate: (page) => page.getByTestId(hints.testId!),
    });
  }

  // 2. ARIA role + accessible name
  if(hints.role) {
    strategies.push({
      name: `role=${hints.role} name="${hints.roleName ?? ''}"`,
      locate: (page) =>
        hints.roleName
          ? page.getByRole(hints.role!, { name: hints.roleName })
          : page.getByRole(hints.role!),
    });
  }

  // 3. Label-based (form elements)
  if (hints.label) {
    strategies.push({
      name: `label="${hints.label}"`,
      locate: (page) => page.getByLabel(hints.label!),
    });
  }

  // 4. Placeholder-based
  if (hints.placeholder) {
    strategies.push({
      name: `placeholder="${hints.placeholder}"`,
      locate: (page) => page.getByPlaceholder(hints.placeholder!),
    });
  }

  // 5. CSS id
  if (hints.id) {
    strategies.push({
      name: `#${hints.id}`,
      locate: (page) => page.locator(`#${hints.id}`),
    });
  }

  // 6. Text content
  if (hints.text) {
    strategies.push({
      name: `text="${hints.text}"`,
      locate: (page) => page.getByText(hints.text!, { exact: true }),
    });
  }

  // 7. CSS selector
  if (hints.css) {
    strategies.push({
      name: `css="${hints.css}"`,
      locate: (page) => page.locator(hints.css!),
    });
  }

  // 8. XPath (last resort)
  if (hints.xpath) {
    strategies.push({
      name: `xpath="${hints.xpath}"`,
      locate: (page) => page.locator(hints.xpath!),
    });
  }

  return strategies;
}