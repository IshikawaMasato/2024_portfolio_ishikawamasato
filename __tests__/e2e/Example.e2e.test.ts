// tests/e2e/Example.e2e.test.ts
import { test, expect } from "@playwright/test";

test("should load homepage", async ({ page }) => {
  await page.goto("http://localhost:3000"); // ローカル Next.js アプリ
  await expect(page).toHaveTitle("Create Next App"); // タイトルが一致することを確認
});
