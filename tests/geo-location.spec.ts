import {test, expect} from '@playwright/test';

const BASE_URL = process.env.BASE_URL || 'http://localhost:3000';

test.describe('Geo-location based background images', () => {
  test('should show fallback image when no continent is specified', async ({
    page
  }) => {
    await page.goto(`${BASE_URL}/en`);
    
    // Wait for the home section to load
    const homeSection = page.locator('#home');
    await expect(homeSection).toBeVisible();
    
    // Check that the background image style contains the fallback image
    const backgroundImage = await homeSection.evaluate((el) => {
      return window.getComputedStyle(el).backgroundImage;
    });
    
    expect(backgroundImage).toContain('global.jpg');
  });

  test('should show Europe image when continent=EU is in query params (dev mode)', async ({
    page
  }) => {
    await page.goto(`${BASE_URL}/en?continent=EU`);
    
    // Wait for the home section to load
    const homeSection = page.locator('#home');
    await expect(homeSection).toBeVisible();
    
    // Check that the background image style contains the Europe image
    const backgroundImage = await homeSection.evaluate((el) => {
      return window.getComputedStyle(el).backgroundImage;
    });
    
    expect(backgroundImage).toContain('europe.jpg');
  });

  test('should show North America image when continent=NA is in query params', async ({
    page
  }) => {
    await page.goto(`${BASE_URL}/en?continent=NA`);
    
    const homeSection = page.locator('#home');
    await expect(homeSection).toBeVisible();
    
    const backgroundImage = await homeSection.evaluate((el) => {
      return window.getComputedStyle(el).backgroundImage;
    });
    
    expect(backgroundImage).toContain('north-america.jpg');
  });

  test('should show Asia image when continent=AS is in query params', async ({
    page
  }) => {
    await page.goto(`${BASE_URL}/en?continent=AS`);
    
    const homeSection = page.locator('#home');
    await expect(homeSection).toBeVisible();
    
    const backgroundImage = await homeSection.evaluate((el) => {
      return window.getComputedStyle(el).backgroundImage;
    });
    
    expect(backgroundImage).toContain('asia.jpg');
  });

  test('should show Africa image when continent=AF is in query params', async ({
    page
  }) => {
    await page.goto(`${BASE_URL}/en?continent=AF`);
    
    const homeSection = page.locator('#home');
    await expect(homeSection).toBeVisible();
    
    const backgroundImage = await homeSection.evaluate((el) => {
      return window.getComputedStyle(el).backgroundImage;
    });
    
    expect(backgroundImage).toContain('africa.jpg');
  });

  test('should show South America image when continent=SA is in query params', async ({
    page
  }) => {
    await page.goto(`${BASE_URL}/en?continent=SA`);
    
    const homeSection = page.locator('#home');
    await expect(homeSection).toBeVisible();
    
    const backgroundImage = await homeSection.evaluate((el) => {
      return window.getComputedStyle(el).backgroundImage;
    });
    
    expect(backgroundImage).toContain('south-america.jpg');
  });

  test('should show Oceania image when continent=OC is in query params', async ({
    page
  }) => {
    await page.goto(`${BASE_URL}/en?continent=OC`);
    
    const homeSection = page.locator('#home');
    await expect(homeSection).toBeVisible();
    
    const backgroundImage = await homeSection.evaluate((el) => {
      return window.getComputedStyle(el).backgroundImage;
    });
    
    expect(backgroundImage).toContain('oceania.jpg');
  });

  test('should handle lowercase continent codes', async ({page}) => {
    await page.goto(`${BASE_URL}/en?continent=eu`);
    
    const homeSection = page.locator('#home');
    await expect(homeSection).toBeVisible();
    
    const backgroundImage = await homeSection.evaluate((el) => {
      return window.getComputedStyle(el).backgroundImage;
    });
    
    // Should still show Europe image (uppercase conversion)
    expect(backgroundImage).toContain('europe.jpg');
  });

  test('should show fallback for invalid continent code', async ({page}) => {
    await page.goto(`${BASE_URL}/en?continent=XX`);
    
    const homeSection = page.locator('#home');
    await expect(homeSection).toBeVisible();
    
    const backgroundImage = await homeSection.evaluate((el) => {
      return window.getComputedStyle(el).backgroundImage;
    });
    
    // Should fall back to global.jpg
    expect(backgroundImage).toContain('global.jpg');
  });
});

