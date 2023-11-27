import { expect, test } from '@playwright/test';

test('root page title', async ({ page }) => {
  await page.goto('/');

  await expect(page).toHaveTitle(/Next.js 13/);
});

test('root page starter content', async ({ page }) => {
  await page.goto('/');

  const content = await page.innerText('p');

  expect(content).toBe('Starter');
});
