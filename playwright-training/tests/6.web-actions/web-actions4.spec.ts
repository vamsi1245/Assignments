import { test, expect } from '@playwright/test';

test('web-action-handling frames', async ({ page }) => {



    // 1. Enter URL and Launch the application (https://demoqa.com/frames)
    await page.goto("https://demoqa.com/frames");


    // 2. Locate Main window element
    const mainindowElement = await page.locator('h1.text-center');

    // Locate the frame
    const frameLocator = page.frameLocator('iframe#frame1');


    // 3. Locate Frame Element
    const frameElement= await frameLocator.locator('h1[id="sampleHeading"]');


    // 4. Copy and Print text from frame element
    console.log("Text from frame element: " + await frameElement.textContent());


    // 5. Copy and Print text from main window element
    console.log("Text from main window element: " + await mainindowElement.textContent());


})