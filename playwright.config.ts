import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "__tests__/e2e", // e2e テストのディレクトリ
  timeout: 30000, // テストのタイムアウト時間（ミリ秒）
  testIgnore: ["**/__tests__/unit/**"], // Jest のテストを除外
  use: {
    headless: true, // ヘッドレスモードで実行
    actionTimeout: 0, // アクションのタイムアウトを無制限に
    baseURL: "http://localhost:3000", // ローカルで Next.js アプリが動いている場合の URL
  },
});
