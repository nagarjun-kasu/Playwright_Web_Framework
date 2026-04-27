/**
 * UploadPage — Page Object for the Upload / Download section
 */

import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './base.page';
import * as path from 'path';

export class UploadPage extends BasePage {
  private readonly uploadZone: Locator;
  private readonly fileInput: Locator;
  private readonly fileList: Locator;
  private readonly downloadTxtBtn: Locator;
  private readonly downloadCsvBtn: Locator;

  constructor(page: Page) {
    super(page);
    this.uploadZone = page.locator('#uploadZone');
    this.fileInput = page.locator('#fileInput');
    this.fileList = page.locator('#fileList');
    this.downloadTxtBtn = page.locator('#dlText');
    this.downloadCsvBtn = page.locator('#dlCsv');
  }

  async open(): Promise<void> {
    await this.goto();
    await this.navigateTo('upload');
  }

  async uploadFile(filePath: string): Promise<void> {
    await this.fileInput.setInputFiles(filePath);
  }

  async uploadMultipleFiles(filePaths: string[]): Promise<void> {
    await this.fileInput.setInputFiles(filePaths);
  }

  async getUploadedFileCount(): Promise<number> {
    return await this.fileList.locator('li').count();
  }

  async getUploadedFileNames(): Promise<string[]> {
    return await this.fileList.locator('li span').allTextContents();
  }

  async removeFile(index: number): Promise<void> {
    await this.fileList.locator('li').nth(index).locator('button').click();
  }

  async clickDownloadTxt(): Promise<void> {
    await this.downloadTxtBtn.click();
  }

  async clickDownloadCsv(): Promise<void> {
    await this.downloadCsvBtn.click();
  }

  async expectUploadZoneVisible(): Promise<void> {
    await expect(this.uploadZone).toBeVisible();
  }
}