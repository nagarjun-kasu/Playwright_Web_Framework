/**
 * Web Tables Test Suite
 * =====================
 * End-to-end test cases for the web tables page functionality.
 * Tests include adding, editing, deleting records and data validation.
 */

import { test, expect } from '@playwright/test';
import { WebTablePage, TableRecord } from '../pages/webtable.page';

// Test data - using dynamic variables instead of hardcoded values
const testRecords = {
  validRecord: {
    firstName: 'John',
    lastName: 'Doe',
    email: `john.doe.${Date.now()}@example.com`,
    age: '30',
    department: 'Engineering',
  },
  updatedRecord: {
    firstName: 'Jane',
    lastName: 'Smith',
    email: `jane.smith.${Date.now()}@example.com`,
    age: '28',
    department: 'Marketing',
  },
  secondRecord: {
    firstName: 'Bob',
    lastName: 'Wilson',
    email: `bob.wilson.${Date.now()}@example.com`,
    age: '35',
    department: 'Sales',
  },
};

test.describe('Web Tables - Add Record Tests', () => {
  let webTablePage: WebTablePage;

  test.beforeEach(async ({ page }) => {
    webTablePage = new WebTablePage(page);
    await webTablePage.navigateTo();
  });

  test('TC-WT-001: Add a new valid record to the web table', async ({ page }) => {
    const record = testRecords.validRecord;
    
    // Add new record
    await webTablePage.addNewRecord(record);
    
    // Verify record was added
    const rowCount = await webTablePage.getRowCount();
    expect(rowCount).toBeGreaterThan(0);
    
    // Verify the record exists with all fields
    const exists = await webTablePage.verifyRecordExists(record);
    expect(exists).toBeTruthy();
  });

  test('TC-WT-002: Add multiple records to the web table', async ({ page }) => {
    const record1 = testRecords.validRecord;
    const record2 = testRecords.secondRecord;
    
    // Add first record
    await webTablePage.addNewRecord(record1);
    const initialCount = await webTablePage.getRowCount();
    
    // Add second record
    await webTablePage.addNewRecord(record2);
    const newCount = await webTablePage.getRowCount();
    
    // Verify both records exist
    expect(newCount).toBe(initialCount + 1);
    expect(await webTablePage.verifyRecordExists(record1)).toBeTruthy();
    expect(await webTablePage.verifyRecordExists(record2)).toBeTruthy();
  });

  test('TC-WT-003: Verify added record data matches input data', async ({ page }) => {
    const record = testRecords.validRecord;
    
    // Add the record
    await webTablePage.addNewRecord(record);
    
    // Get table data
    const tableData = await webTablePage.getTableData();
    
    // Find the added record
    const foundRecord = tableData.find(
      (r) => r.email === record.email
    );
    
    // Validate all fields match
    expect(foundRecord).toBeDefined();
    expect(foundRecord?.firstName).toBe(record.firstName);
    expect(foundRecord?.lastName).toBe(record.lastName);
    expect(foundRecord?.email).toBe(record.email);
    expect(foundRecord?.age).toBe(record.age);
    expect(foundRecord?.department).toBe(record.department);
  });
});

test.describe('Web Tables - Edit Record Tests', () => {
  let webTablePage: WebTablePage;

  test.beforeEach(async ({ page }) => {
    webTablePage = new WebTablePage(page);
    await webTablePage.navigateTo();
  });

  test('TC-WT-004: Edit an existing record in the web table', async ({ page }) => {
    const originalRecord = testRecords.validRecord;
    const updatedRecord = testRecords.updatedRecord;
    
    // First add a record to edit
    await webTablePage.addNewRecord(originalRecord);
    
    // Edit the record by email
    await webTablePage.editRecordByEmail(originalRecord.email, updatedRecord);
    
    // Verify the updated record exists
    const exists = await webTablePage.verifyRecordExists(updatedRecord);
    expect(exists).toBeTruthy();
    
    // Verify the original record no longer exists
    const originalExists = await webTablePage.verifyRecordNotExists(originalRecord.email);
    expect(originalExists).toBeTruthy();
  });

  test('TC-WT-005: Edit only specific fields of a record', async ({ page }) => {
    const originalRecord = testRecords.validRecord;
    const partialUpdate = {
      age: '40',
      department: 'Finance',
    };
    
    // Add a record
    await webTablePage.addNewRecord(originalRecord);
    
    // Edit only age and department
    await webTablePage.editRecordByEmail(originalRecord.email, partialUpdate);
    
    // Verify other fields remain unchanged
    const row = await webTablePage.findRowByEmail(originalRecord.email);
    expect(row).toBeTruthy();
    
    const cells = row!.locator('td');
    expect(await cells.nth(0).textContent()).toBe(originalRecord.firstName);
    expect(await cells.nth(1).textContent()).toBe(originalRecord.lastName);
    expect(await cells.nth(3).textContent()).toBe('40');
    expect(await cells.nth(4).textContent()).toBe('Finance');
  });

  test('TC-WT-006: Verify edited record data persists correctly', async ({ page }) => {
    const originalRecord = testRecords.validRecord;
    const updatedRecord = {
      ...testRecords.updatedRecord,
      email: originalRecord.email, // Keep same email for verification
    };
    
    // Add record
    await webTablePage.addNewRecord(originalRecord);
    
    // Edit with new values but same email
    await webTablePage.editRecordByEmail(originalRecord.email, {
      firstName: updatedRecord.firstName,
      lastName: updatedRecord.lastName,
      age: updatedRecord.age,
      department: updatedRecord.department,
    });
    
    // Get table data and verify
    const tableData = await webTablePage.getTableData();
    const foundRecord = tableData.find((r) => r.email === originalRecord.email);
    
    expect(foundRecord?.firstName).toBe(updatedRecord.firstName);
    expect(foundRecord?.lastName).toBe(updatedRecord.lastName);
    expect(foundRecord?.age).toBe(updatedRecord.age);
    expect(foundRecord?.department).toBe(updatedRecord.department);
  });
});

test.describe('Web Tables - Delete Record Tests', () => {
  let webTablePage: WebTablePage;

  test.beforeEach(async ({ page }) => {
    webTablePage = new WebTablePage(page);
    await webTablePage.navigateTo();
  });

  test('TC-WT-007: Delete an existing record from the web table', async ({ page }) => {
    const record = testRecords.validRecord;
    
    // Add a record to delete
    await webTablePage.addNewRecord(record);
    const initialCount = await webTablePage.getRowCount();
    
    // Delete the record
    await webTablePage.deleteRecordByEmail(record.email);
    const finalCount = await webTablePage.getRowCount();
    
    // Verify record was deleted
    expect(finalCount).toBe(initialCount - 1);
    expect(await webTablePage.verifyRecordNotExists(record.email)).toBeTruthy();
  });

  test('TC-WT-008: Delete multiple records from the web table', async ({ page }) => {
    const record1 = testRecords.validRecord;
    const record2 = testRecords.secondRecord;
    
    // Add two records
    await webTablePage.addNewRecord(record1);
    await webTablePage.addNewRecord(record2);
    const countAfterAdd = await webTablePage.getRowCount();
    
    // Delete first record
    await webTablePage.deleteRecordByEmail(record1.email);
    const countAfterFirstDelete = await webTablePage.getRowCount();
    expect(countAfterFirstDelete).toBe(countAfterAdd - 1);
    expect(await webTablePage.verifyRecordNotExists(record1.email)).toBeTruthy();
    
    // Delete second record
    await webTablePage.deleteRecordByEmail(record2.email);
    const countAfterSecondDelete = await webTablePage.getRowCount();
    expect(countAfterSecondDelete).toBe(countAfterFirstDelete - 1);
    expect(await webTablePage.verifyRecordNotExists(record2.email)).toBeTruthy();
  });

  test('TC-WT-009: Verify deleted record is completely removed', async ({ page }) => {
    const record = testRecords.validRecord;
    
    // Add record
    await webTablePage.addNewRecord(record);
    
    // Delete record
    await webTablePage.deleteRecordByEmail(record.email);
    
    // Verify all fields of the deleted record are gone
    const tableData = await webTablePage.getTableData();
    const foundRecord = tableData.find((r) => r.email === record.email);
    
    expect(foundRecord).toBeUndefined();
  });
});

test.describe('Web Tables - Data Validation Tests', () => {
  let webTablePage: WebTablePage;

  test.beforeEach(async ({ page }) => {
    webTablePage = new WebTablePage(page);
    await webTablePage.navigateTo();
  });

  test('TC-WT-010: Validate table displays correct number of columns', async ({ page }) => {
    const headerCount = await webTablePage.tableHeaders.count();
    
    // Web table should have 5 columns: First Name, Last Name, Email, Age, Department
    expect(headerCount).toBe(5);
  });

  test('TC-WT-011: Validate all fields in a table row', async ({ page }) => {
    const record = testRecords.validRecord;
    
    // Add record
    await webTablePage.addNewRecord(record);
    
    // Get table data
    const tableData = await webTablePage.getTableData();
    
    // Verify the record has all required fields
    const foundRecord = tableData.find((r) => r.email === record.email);
    expect(foundRecord).not.toBeNull();
    expect(foundRecord?.firstName).toBeTruthy();
    expect(foundRecord?.lastName).toBeTruthy();
    expect(foundRecord?.email).toBeTruthy();
    expect(foundRecord?.age).toBeTruthy();
    expect(foundRecord?.department).toBeTruthy();
  });

  test('TC-WT-012: Validate data integrity after multiple operations', async ({ page }) => {
    const record1 = testRecords.validRecord;
    const record2 = testRecords.secondRecord;
    
    // Add two records
    await webTablePage.addNewRecord(record1);
    await webTablePage.addNewRecord(record2);
    
    // Edit one record
    const updatedRecord1 = {
      ...record1,
      age: '32',
      department: 'QA',
    };
    await webTablePage.editRecordByEmail(record1.email, {
      age: '32',
      department: 'QA',
    });
    
    // Get final table data
    const tableData = await webTablePage.getTableData();
    
    // Verify both records exist with correct data
    const foundRecord1 = tableData.find((r) => r.email === record1.email);
    const foundRecord2 = tableData.find((r) => r.email === record2.email);
    
    expect(foundRecord1).toBeDefined();
    expect(foundRecord1?.age).toBe('32');
    expect(foundRecord1?.department).toBe('QA');
    
    expect(foundRecord2).toBeDefined();
    expect(foundRecord2?.email).toBe(record2.email);
  });
});

test.describe('Web Tables - Form Interaction Tests', () => {
  let webTablePage: WebTablePage;

  test.beforeEach(async ({ page }) => {
    webTablePage = new WebTablePage(page);
    await webTablePage.navigateTo();
  });

  test('TC-WT-013: Open and close add record form', async ({ page }) => {
    // Open form
    await webTablePage.openAddForm();
    
    // Verify form is visible
    await expect(webTablePage.submitButton).toBeVisible();
    await expect(webTablePage.firstNameInput).toBeVisible();
    
    // Cancel form
    await webTablePage.cancelForm();
    
    // Verify form is closed
    await expect(webTablePage.submitButton).not.toBeVisible();
  });

  test('TC-WT-014: Clear form inputs', async ({ page }) => {
    const record = testRecords.validRecord;
    
    // Open form and fill data
    await webTablePage.openAddForm();
    await webTablePage.fillRecordForm(record);
    
    // Clear form
    await webTablePage.clearForm();
    
    // Verify fields are empty
    const firstName = await webTablePage.firstNameInput.inputValue();
    const lastName = await webTablePage.lastNameInput.inputValue();
    
    expect(firstName).toBe('');
    expect(lastName).toBe('');
  });
});