//code generator.

import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://ineuron-courses.vercel.app/');
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('m3@gmail.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('m3@gmail.com');
  await page.getByRole('button', { name: 'Sign in' }).click();
  await page.getByRole('heading', { name: 'USER Email Doesn\'t Exist' }).click();
});