/**
 * LoginPage — Page Object for the Login section
 */

import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './base.page';

export class LoginPage extends BasePage {
  private readonly usernameInput: Locator;
  private readonly passwordInput: Locator;
  private readonly userDescInput: Locator;
  private readonly loginButton: Locator;
  private readonly messageBox: Locator;
  private readonly credBox: Locator;

  constructor(page: Page) {
    super(page);
    this.usernameInput = page.getByRole("textbox", {name:"Username", exact:true}).filter({visible:true});
    this.passwordInput = page.getByRole("textbox", {name:"Password", exact:true}).filter({visible:true});
    this.userDescInput = page.locator('#loginUserDesc');
    this.loginButton = page.getByRole("button", {name:"Login"}).filter({visible:true});
    this.messageBox = page.locator('#loginMsg');
    this.credBox = page.locator('.cred-box');
  }

  async open(): Promise<void> {
    await this.goto();
    await this.navigateTo('login');
  }

  async fillUsername(username: string): Promise<void> {
    await this.usernameInput.fill(username);
  }

  async fillPassword(password: string): Promise<void> {
    await this.passwordInput.fill(password);
  }

  async fillUserDescription(description: string): Promise<void> {
    await this.userDescInput.fill(description);
  }

  async clickLogin(): Promise<void> {
    await this.loginButton.click();
  }

  async login(username: string, password: string): Promise<void> {
    await this.fillUsername(username);
    await this.fillPassword(password);
    await this.clickLogin();
  }

  async getMessageText(): Promise<string> {
    return (await this.messageBox.textContent()) ?? '';
  }

  async expectSuccessMessage(username: string): Promise<void> {
    await expect(this.messageBox).toHaveText(`Login successful! Welcome, ${username}.`);
    await expect(this.messageBox).toHaveClass(/msg-success/);
  }

  async expectErrorMessage(text: string): Promise<void> {
    await expect(this.messageBox).toContainText(text);
    await expect(this.messageBox).toHaveClass(/msg-error/);
  }

  async expectCredentialHintVisible(): Promise<void> {
    await expect(this.credBox).toBeVisible();
  }

  async isUsernameRequired(): Promise<boolean> {
    return (await this.usernameInput.getAttribute('required')) !== null;
  }

  async isPasswordRequired(): Promise<boolean> {
    return (await this.passwordInput.getAttribute('required')) !== null;
  }

  async clearFields(): Promise<void> {
    await this.usernameInput.clear();
    await this.passwordInput.clear();
    await this.userDescInput.clear();
  }
}