import { defineConfig, devices } from '@playwright/test';

const baseURL = process.env.NEXT_PUBLIC_BASE_URL
  ? process.env.NEXT_PUBLIC_BASE_URL
  : 'https://nextjs.marian1309.vercel.app/';

const playwrightConfig = defineConfig({
  testDir: './__tests__/e2e',
  testMatch: /.spec.ts/,
  fullyParallel: true,
  reporter: 'html',
  workers: 3,

  use: {
    baseURL
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] }
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] }
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] }
    }
  ]
});

export default playwrightConfig;
