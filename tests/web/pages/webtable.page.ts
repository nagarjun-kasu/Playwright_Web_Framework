/**
 * WebTablePage — Page Object for Web Tables functionality
 * ==========================================================
 * Provides methods to interact with the web tables page for CRUD operations
 * and data validation.
 */

import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './base.page';

export interface TableRecord {
  firstName: string;
  lastName: string;
  email: string;
  age: string;
  department: string;
}

export class WebTablePage extends BasePage {
  // Table elements
  readonly tableBody: Locator;
  readonly tableRows: Locator;
  readonly tableHeaders: Locator;
  
  // Form elements
  readonly addButton: Locator;
  readonly firstNameInput: Locator;
  readonly lastNameInput: Locator;
  readonly emailInput: Locator;
  readonly ageInput: Locator;
  readonly departmentInput: Locator;
  readonly submitButton: Locator;
  readonly cancelButton: Locator;
  
  // Modal/Dialog elements
  readonly modalContainer: Locator;
  readonly modalTitle: Locator;
  readonly closeModalButton: Locator;
  
  // Action buttons within table rows
  readonly editButtons: Locator;
  readonly deleteButtons: Locator;
  readonly confirmDeleteButton: Locator;

  constructor(page: Page) {
    super(page);
    
    // Initialize table locators
    this.tableBody = this.page.locator('#webtable tbody');
    this.tableRows = this.tableBody.locator('tr');
    this.tableHeaders = this.page.locator('#webtable thead th');
    
    // Initialize form locators
    this.addButton = this.page.locator('button:has-text("Add New")');
    this.firstNameInput = this.page.locator('#firstName');
    this.lastNameInput = this.page.locator('#lastName');
    this.emailInput = this.page.locator('#email');
    this.ageInput = this.page.locator('#age');
    this.departmentInput = this.page.locator('#department');
    this.submitButton = this.page.locator('button[type="submit"]');
    this.cancelButton = this.page.locator('button:has-text("Cancel")');
    
    // Initialize modal locators
    this.modalContainer = this.page.locator('.modal, .modal-content, [role="dialog"]');
    this.modalTitle = this.modalContainer.locator('h2, h3, .modal-title');
    this.closeModalButton = this.modalContainer.locator('button.close, .close-btn, [aria-label="Close"]');
    
    // Initialize action buttons
    this.editButtons = this.page.locator('button.edit-btn, .edit-button');
    this.deleteButtons = this.page.locator('button.delete-btn, .delete-button');
    this.confirmDeleteButton = this.page.locator('button.confirm-delete, .delete-confirm');
  }

  /**
   * Navigate to the web tables page
   */
  async navigateTo(): Promise<void> {
    await this.goto();
    await this.navigateTo();
  }

  /**
   * Get the current number of rows in the table
   */
  async getRowCount(): Promise<number> {
    return await this.tableRows.count();
  }

  /**
   * Get all table data as an array of objects
   */
  async getTableData(): Promise<TableRecord[]> {
    const rows = await this.tableRows.all();
    const data: TableRecord[] = [];
    
    for (const row of rows) {
      const cells = row.locator('td');
      const cellCount = await cells.count();
      
      if (cellCount >= 5) {
        data.push({
          firstName: await cells.nth(0).textContent() || '',
          lastName: await cells.nth(1).textContent() || '',
          email: await cells.nth(2).textContent() || '',
          age: await cells.nth(3).textContent() || '',
          department: await cells.nth(4).textContent() || '',
        });
      }
    }
    
    return data;
  }

  /**
   * Open the add new record form
   */
  async openAddForm(): Promise<void> {
    await this.addButton.click();
    await expect(this.submitButton).toBeVisible();
  }

  /**
   * Fill in the record form with data
   */
  async fillRecordForm(record: TableRecord): Promise<void> {
    await this.firstNameInput.fill(record.firstName);
    await this.lastNameInput.fill(record.lastName);
    await this.emailInput.fill(record.email);
    await this.ageInput.fill(record.age);
    await this.departmentInput.fill(record.department);
  }

  /**
   * Submit the record form to add a new record
   */
  async submitRecord(): Promise<void> {
    await this.submitButton.click();
    // Wait for the table to update
    await this.page.waitForTimeout(500);
  }

  /**
   * Add a new record to the web table
   */
  async addNewRecord(record: TableRecord): Promise<void> {
    await this.openAddForm();
    await this.fillRecordForm(record);
    await this.submitRecord();
  }

  /**
   * Find a row by email and return its data
   */
  async findRowByEmail(email: string): Promise<Locator | null> {
    const rows = await this.tableRows.all();
    
    for (const row of rows) {
      const emailCell = row.locator('td').nth(2);
      const cellText = await emailCell.textContent();
      
      if (cellText?.trim() === email) {
        return row;
      }
    }
    
    return null;
  }

  /**
   * Edit an existing record by email
   */
  async editRecordByEmail(email: string, updatedRecord: Partial<TableRecord>): Promise<void> {
    // Find the row containing the email
    const row = await this.findRowByEmail(email);
    
    if (!row) {
      throw new Error(`Record with email "${email}" not found`);
    }
    
    // Click the edit button in that row
    const editButton = row.locator('button.edit-btn, .edit-button, button:has-text("Edit")');
    await editButton.click();
    
    // Wait for form to be populated and editable
    await this.page.waitForTimeout(300);
    
    // Clear and update fields that are provided
    if (updatedRecord.firstName !== undefined) {
      await this.firstNameInput.fill(updatedRecord.firstName);
    }
    if (updatedRecord.lastName !== undefined) {
      await this.lastNameInput.fill(updatedRecord.lastName);
    }
    if (updatedRecord.email !== undefined) {
      await this.emailInput.fill(updatedRecord.email);
    }
    if (updatedRecord.age !== undefined) {
      await this.ageInput.fill(updatedRecord.age);
    }
    if (updatedRecord.department !== undefined) {
      await this.departmentInput.fill(updatedRecord.department);
    }
    
    // Submit the updated record
    await this.submitRecord();
  }

  /**
   * Delete a record by email
   */
  async deleteRecordByEmail(email: string): Promise<void> {
    // Find the row containing the email
    const row = await this.findRowByEmail(email);
    
    if (!row) {
      throw new Error(`Record with email "${email}" not found`);
    }
    
    // Click the delete button in that row
    const deleteButton = row.locator('button.delete-btn, .delete-button, button:has-text("Delete")');
    await deleteButton.click();
    
    // Wait for confirmation dialog if present
    await this.page.waitForTimeout(300);
    
    // Confirm deletion if there's a confirmation button
    const confirmButton = this.page.locator('button.confirm-delete, button:has-text("Confirm"), button:has-text("Yes")');
    if (await confirmButton.count() > 0) {
      await confirmButton.click();
    }
    
    // Wait for the table to update
    await this.page.waitForTimeout(500);
  }

  /**
   * Verify that a record exists in the table
   */
  async verifyRecordExists(record: TableRecord): Promise<boolean> {
    const row = await this.findRowByEmail(record.email);
    
    if (!row) {
      return false;
    }
    
    // Verify each field matches
    const cells = row.locator('td');
    
    const firstNameMatch = await cells.nth(0).textContent() === record.firstName;
    const lastNameMatch = await cells.nth(1).textContent() === record.lastName;
    const emailMatch = await cells.nth(2).textContent() === record.email;
    const ageMatch = await cells.nth(3).textContent() === record.age;
    const departmentMatch = await cells.nth(4).textContent() === record.department;
    
    return firstNameMatch && lastNameMatch && emailMatch && ageMatch && departmentMatch;
  }

  /**
   * Verify that a record does not exist in the table
   */
  async verifyRecordNotExists(email: string): Promise<boolean> {
    const row = await this.findRowByEmail(email);
    return row === null;
  }

  /**
   * Get a specific cell value from the table
   */
  async getCellValue(rowIndex: number, columnIndex: number): Promise<string> {
    const row = this.tableRows.nth(rowIndex);
    const cell = row.locator('td').nth(columnIndex);
    return (await cell.textContent()) || '';
  }

  /**
   * Clear all form inputs
   */
  async clearForm(): Promise<void> {
    await this.firstNameInput.clear();
    await this.lastNameInput.clear();
    await this.emailInput.clear();
    await this.ageInput.clear();
    await this.departmentInput.clear();
  }

  /**
   * Cancel the record form
   */
  async cancelForm(): Promise<void> {
    await this.cancelButton.click();
    await this.page.waitForTimeout(300);
  }

  /**
   * Close the modal if open
   */
  async closeModal(): Promise<void> {
    const closeButton = this.page.locator('button.close, .close-btn, [aria-label="Close"], .modal-close');
    if (await closeButton.count() > 0) {
      await closeButton.click();
    }
  }
}