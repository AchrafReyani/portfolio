/* eslint-disable import/no-extraneous-dependencies */
import type {PlaywrightTestConfig} from '@playwright/test';
import {devices} from '@playwright/test';

// Use a distinct port on CI to avoid conflicts during concurrent tests
const PORT = process.env.CI ? 3001 : 3000;
const BASE_URL = `http://localhost:${PORT}`;

// Expose to tests that read process.env.BASE_URL
process.env.BASE_URL = BASE_URL;

const config: PlaywrightTestConfig = {
  retries: process.env.CI ? 1 : 0,
  testDir: './tests',
  projects: [
    {
      name: 'chromium',
      use: devices['Desktop Chrome']
    }
  ],
  fullyParallel: true,
  use: {
    baseURL: BASE_URL,
    env: {
      PLAYWRIGHT: 'true'
    }
  },
  webServer: {
    // Use dev server for geo-location tests to test query param override
    command:
      process.platform === 'win32'
        ? `set PORT=${PORT} && ${process.env.CI ? 'npm start' : 'npm run dev'}`
        : `PORT=${PORT} ${process.env.CI ? 'npm start' : 'npm run dev'}`,
    port: PORT,
    reuseExistingServer: !process.env.CI
  }
};

export default config;
