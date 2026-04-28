/**
 * Upload Functionality Test Suite
 * ================================
 * End-to-end test cases for the upload and download page functionality.
 * Tests include file upload, multiple file upload, file removal, and downloads.
 */

import { test, expect } from '@playwright/test';
import { UploadPage } from '../pages/upload.page';
import * as path from 'path';
import * as fs from 'fs';

// Test data - using dynamic variables instead of hardcoded values
const testFiles = {
  smallTextFile: 'test-small.txt',
  largeTextFile: 'test-large.txt',
  csvFile: 'test-data.csv',
  jsonFile: 'test-data.json',
};

test.describe('Upload - File Upload Tests', () => {
  let uploadPage: UploadPage;

  test.beforeEach(async ({ page }) => {
    uploadPage = new UploadPage(page);
    await uploadPage.open();
  });

  test('TC-UP-001: Upload a single text file', async ({ page }) => {
    // Create a test file
    const testFilePath = path.join(__dirname, '..', 'fixtures', testFiles.smallTextFile);
    const testContent = 'Test file for upload functionality';
    
    // Ensure fixtures directory exists
    const fixturesDir = path.join(__dirname, '..', 'fixtures');
    if (!fs.existsSync(fixturesDir)) {
      fs.mkdirSync(fixturesDir, { recursive: true });
    }
    
    // Create test file
    fs.writeFileSync(testFilePath, testContent);
    
    // Upload the file
    await uploadPage.uploadFile(testFilePath);
    
    // Verify file was uploaded
    const fileCount = await uploadPage.getUploadedFileCount();
    expect(fileCount).toBeGreaterThan(0);
    
    // Verify file name appears in the list
    const fileNames = await uploadPage.getUploadedFileNames();
    expect(fileNames.some(name => name.includes('test-small.txt'))).toBeTruthy();
    
    // Cleanup
    if (fs.existsSync(testFilePath)) {
      fs.unlinkSync(testFilePath);
    }
  });

  test('TC-UP-002: Upload a CSV file', async ({ page }) => {
    const testFilePath = path.join(__dirname, '..', 'fixtures', testFiles.csvFile);
    const testContent = 'name,age,city\nJohn,30,NYC\nJane,25,LA';
    
    // Create test file
    fs.writeFileSync(testFilePath, testContent);
    
    // Upload the file
    await uploadPage.uploadFile(testFilePath);
    
    // Verify file was uploaded
    const fileCount = await uploadPage.getUploadedFileCount();
    expect(fileCount).toBe(1);
    
    // Verify file name
    const fileNames = await uploadPage.getUploadedFileNames();
    expect(fileNames[0]).toContain('test-data.csv');
    
    // Cleanup
    if (fs.existsSync(testFilePath)) {
      fs.unlinkSync(testFilePath);
    }
  });

  test('TC-UP-003: Upload a JSON file', async ({ page }) => {
    const testFilePath = path.join(__dirname, '..', 'fixtures', testFiles.jsonFile);
    const testContent = JSON.stringify({ name: 'Test', value: 123 }, null, 2);
    
    // Create test file
    fs.writeFileSync(testFilePath, testContent);
    
    // Upload the file
    await uploadPage.uploadFile(testFilePath);
    
    // Verify file was uploaded
    const fileCount = await uploadPage.getUploadedFileCount();
    expect(fileCount).toBe(1);
    
    // Cleanup
    if (fs.existsSync(testFilePath)) {
      fs.unlinkSync(testFilePath);
    }
  });
});

test.describe('Upload - Multiple File Upload Tests', () => {
  let uploadPage: UploadPage;

  test.beforeEach(async ({ page }) => {
    uploadPage = new UploadPage(page);
    await uploadPage.open();
  });

  test('TC-UP-004: Upload multiple files at once', async ({ page }) => {
    const fixturesDir = path.join(__dirname, '..', 'fixtures');
    
    // Create multiple test files
    const file1 = path.join(fixturesDir, 'multi-test-1.txt');
    const file2 = path.join(fixturesDir, 'multi-test-2.txt');
    const file3 = path.join(fixturesDir, 'multi-test-3.txt');
    
    fs.writeFileSync(file1, 'File 1 content');
    fs.writeFileSync(file2, 'File 2 content');
    fs.writeFileSync(file3, 'File 3 content');
    
    // Upload multiple files
    await uploadPage.uploadMultipleFiles([file1, file2, file3]);
    
    // Verify all files were uploaded
    const fileCount = await uploadPage.getUploadedFileCount();
    expect(fileCount).toBe(3);
    
    // Verify file names
    const fileNames = await uploadPage.getUploadedFileNames();
    expect(fileNames.length).toBe(3);
    
    // Cleanup
    [file1, file2, file3].forEach(f => {
      if (fs.existsSync(f)) fs.unlinkSync(f);
    });
  });

  test('TC-UP-005: Add more files to existing upload', async ({ page }) => {
    const fixturesDir = path.join(__dirname, '..', 'fixtures');
    
    // Create test files
    const file1 = path.join(fixturesDir, 'add-test-1.txt');
    const file2 = path.join(fixturesDir, 'add-test-2.txt');
    
    fs.writeFileSync(file1, 'First file');
    fs.writeFileSync(file2, 'Second file');
    
    // Upload first file
    await uploadPage.uploadFile(file1);
    const initialCount = await uploadPage.getUploadedFileCount();
    
    // Upload second file
    await uploadPage.uploadMultipleFiles([file2]);
    const newCount = await uploadPage.getUploadedFileCount();
    
    // Verify both files exist
    expect(newCount).toBe(initialCount + 1);
    
    // Cleanup
    [file1, file2].forEach(f => {
      if (fs.existsSync(f)) fs.unlinkSync(f);
    });
  });
});

test.describe('Upload - File Removal Tests', () => {
  let uploadPage: UploadPage;

  test.beforeEach(async ({ page }) => {
    uploadPage = new UploadPage(page);
    await uploadPage.open();
  });

  test('TC-UP-006: Remove an uploaded file', async ({ page }) => {
    const testFilePath = path.join(__dirname, '..', 'fixtures', 'remove-test.txt');
    fs.writeFileSync(testFilePath, 'Test file for removal');
    
    // Upload file
    await uploadPage.uploadFile(testFilePath);
    const initialCount = await uploadPage.getUploadedFileCount();
    expect(initialCount).toBe(1);
    
    // Remove the file
    await uploadPage.removeFile(0);
    await page.waitForTimeout(500);
    
    // Verify file was removed
    const finalCount = await uploadPage.getUploadedFileCount();
    expect(finalCount).toBe(0);
    
    // Cleanup
    if (fs.existsSync(testFilePath)) {
      fs.unlinkSync(testFilePath);
    }
  });

  test('TC-UP-007: Remove specific file from multiple uploads', async ({ page }) => {
    const fixturesDir = path.join(__dirname, '..', 'fixtures');
    
    // Create multiple test files
    const file1 = path.join(fixturesDir, 'remove-multi-1.txt');
    const file2 = path.join(fixturesDir, 'remove-multi-2.txt');
    const file3 = path.join(fixturesDir, 'remove-multi-3.txt');
    
    fs.writeFileSync(file1, 'File 1');
    fs.writeFileSync(file2, 'File 2');
    fs.writeFileSync(file3, 'File 3');
    
    // Upload all files
    await uploadPage.uploadMultipleFiles([file1, file2, file3]);
    const totalCount = await uploadPage.getUploadedFileCount();
    expect(totalCount).toBe(3);
    
    // Remove middle file (index 1)
    await uploadPage.removeFile(1);
    await page.waitForTimeout(500);
    
    // Verify only 2 files remain
    const remainingCount = await uploadPage.getUploadedFileCount();
    expect(remainingCount).toBe(2);
    
    // Cleanup
    [file1, file2, file3].forEach(f => {
      if (fs.existsSync(f)) fs.unlinkSync(f);
    });
  });
});

test.describe('Upload - Download Tests', () => {
  let uploadPage: UploadPage;

  test.beforeEach(async ({ page }) => {
    uploadPage = new UploadPage(page);
    await uploadPage.open();
  });

  test('TC-UP-008: Download sample.txt file', async ({ page }) => {
    // Get the download promise
    const downloadPromise = page.waitForEvent('download');
    
    // Click download button
    await uploadPage.clickDownloadTxt();
    
    // Wait for download to complete
    const download = await downloadPromise;
    
    // Verify download occurred
    expect(download).toBeTruthy();
    expect(download.suggestedFilename()).toContain('sample.txt');
    
    // Save the file temporarily
    const tempPath = path.join(__dirname, '..', '..', 'temp-download.txt');
    await download.saveAs(tempPath);
    
    // Verify file was downloaded with content
    const fileContent = fs.readFileSync(tempPath, 'utf-8');
    expect(fileContent.length).toBeGreaterThan(0);
    
    // Cleanup
    if (fs.existsSync(tempPath)) {
      fs.unlinkSync(tempPath);
    }
  });

  test('TC-UP-009: Download data.csv file', async ({ page }) => {
    // Get the download promise
    const downloadPromise = page.waitForEvent('download');
    
    // Click download button
    await uploadPage.clickDownloadCsv();
    
    // Wait for download to complete
    const download = await downloadPromise;
    
    // Verify download occurred
    expect(download).toBeTruthy();
    expect(download.suggestedFilename()).toContain('data.csv');
    
    // Save the file temporarily
    const tempPath = path.join(__dirname, '..', '..', 'temp-download.csv');
    await download.saveAs(tempPath);
    
    // Verify file was downloaded with content
    const fileContent = fs.readFileSync(tempPath, 'utf-8');
    expect(fileContent.length).toBeGreaterThan(0);
    
    // Cleanup
    if (fs.existsSync(tempPath)) {
      fs.unlinkSync(tempPath);
    }
  });

  test('TC-UP-010: Verify downloaded CSV has valid content', async ({ page }) => {
    // Download the CSV file
    const downloadPromise = page.waitForEvent('download');
    await uploadPage.clickDownloadCsv();
    const download = await downloadPromise;
    
    const tempPath = path.join(__dirname, '..', '..', 'temp-verify.csv');
    await download.saveAs(tempPath);
    
    // Read and verify CSV content
    const content = fs.readFileSync(tempPath, 'utf-8');
    const lines = content.split('\n').filter(line => line.trim());
    
    // Verify CSV has header and data
    expect(lines.length).toBeGreaterThan(1);
    expect(lines[0]).toContain(','); // CSV should have commas
    
    // Cleanup
    if (fs.existsSync(tempPath)) {
      fs.unlinkSync(tempPath);
    }
  });
});

test.describe('Upload - UI Visibility Tests', () => {
  let uploadPage: UploadPage;

  test.beforeEach(async ({ page }) => {
    uploadPage = new UploadPage(page);
    await uploadPage.open();
  });

  test('TC-UP-011: Verify upload zone is visible', async ({ page }) => {
    await uploadPage.expectUploadZoneVisible();
  });

  test('TC-UP-012: Verify download buttons are visible', async ({ page }) => {
    await expect(uploadPage.downloadTxtBtn).toBeVisible();
    await expect(uploadPage.downloadCsvBtn).toBeVisible();
  });

  test('TC-UP-013: Verify navigation to upload page works', async ({ page }) => {
    // Navigate to upload page
    await uploadPage.open();
    
    // Verify we're on the upload page
    await expect(uploadPage.uploadZone).toBeVisible();
  });
});

test.describe('Upload - Edge Cases', () => {
  let uploadPage: UploadPage;

  test.beforeEach(async ({ page }) => {
    uploadPage = new UploadPage(page);
    await uploadPage.open();
  });

  test('TC-UP-014: Upload file with special characters in name', async ({ page }) => {
    const fixturesDir = path.join(__dirname, '..', 'fixtures');
    const specialFile = path.join(fixturesDir, 'test-file-with-dash_underscore.json');
    
    fs.writeFileSync(specialFile, '{"test": true}');
    
    // Upload file with special characters
    await uploadPage.uploadFile(specialFile);
    
    // Verify file was uploaded
    const fileCount = await uploadPage.getUploadedFileCount();
    expect(fileCount).toBe(1);
    
    // Cleanup
    if (fs.existsSync(specialFile)) {
      fs.unlinkSync(specialFile);
    }
  });

  test('TC-UP-015: Empty file upload', async ({ page }) => {
    const fixturesDir = path.join(__dirname, '..', 'fixtures');
    const emptyFile = path.join(fixturesDir, 'empty-file.txt');
    
    // Create empty file
    fs.writeFileSync(emptyFile, '');
    
    // Upload empty file
    await uploadPage.uploadFile(emptyFile);
    
    // Verify file was uploaded (empty files should still be accepted)
    const fileCount = await uploadPage.getUploadedFileCount();
    expect(fileCount).toBe(1);
    
    // Cleanup
    if (fs.existsSync(emptyFile)) {
      fs.unlinkSync(emptyFile);
    }
  });
});