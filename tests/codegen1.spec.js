import { test, expect } from '@playwright/test';

test.use({
  viewport: {
    height: 1080,
    width: 1920
  }
});

test('test', async ({ page }) => {
  await page.goto('https://ineuron-courses.vercel.app/');
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.getByRole('link', { name: 'New user? Signup' }).click();
  await page.getByRole('textbox', { name: 'Name' }).click();
  await page.getByRole('textbox', { name: 'Name' }).fill('r1@gmail.com');
  await page.getByRole('textbox', { name: 'Name' }).press('Tab');
  await page.getByRole('textbox', { name: 'Email' }).fill('r1@gmail.com');
  await page.getByRole('textbox', { name: 'Email' }).press('Tab');
  await page.getByRole('textbox', { name: 'Password' }).fill('r1@gmail.com');
  await page.getByRole('checkbox', { name: 'DevOps' }).check();
  await page.getByRole('checkbox', { name: 'Machine Learning' }).check();
  await page.getByRole('button', { name: 'Log in' }).click();
});