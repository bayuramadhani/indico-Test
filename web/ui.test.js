const { test, expect } = require('@playwright/test');
const path = require('path');

test('Website UI Test - Form, Date Picker, File Upload', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');

  // Scroll to form
  await page.locator('#name').scrollIntoViewIfNeeded();

  // Fill in the form
  await page.fill('#name', 'John Doe');
  await page.fill('#email', 'john@example.com');
  await page.fill('#phone', '1234567890');

  // Pick a date
  await page.click('#datepicker');
  await page.click('.ui-datepicker-calendar td a:text("20")'); // Pick 20th

  // Upload file
  // Scroll to file upload section
  await page.locator('#singleFileInput').scrollIntoViewIfNeeded();
  const filePath = path.resolve('C:/Users/BayuRamadhani/Documents/1.jpg');
  await page.setInputFiles('#singleFileInput', filePath);
});
