// @ts-check
import { test, expect } from '@playwright/test';

const LOCAL_URL = 'http://localhost:5173/';
test('has title', async ({ page }) => {
  await page.goto(LOCAL_URL);
  const p = page.getByRole('paragraph');
  const img = page.getByRole('img');
  const content = await p.textContent();
  const src = await img.getAttribute('src');
  expect(content?.length).toBeGreaterThan(0);
  expect(src?.length).toBeGreaterThan(0);
});
