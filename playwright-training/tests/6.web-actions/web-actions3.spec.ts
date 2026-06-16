/*
1. Enter URL and Launch the application(https://demoqa.com/alerts)
2. Locate Alert buttons to trigger the alerts
3. Click on the information alert and copy the alert message and then select OK button
4. Click on the Confirmation alert, copy the alert message, and select the Cancel button.
5. Click on the prompt alert.Copy the alert message.Enter text.Then Select OK button. */

import { test, expect } from '@playwright/test';

test('Demo QA web-actions3', async ({ page }) => {

    //1. Enter URL and Launch the application(https://demoqa.com/alerts)
    await page.goto("https://demoqa.com/alerts");

    //2. Locate Alert buttons to trigger the alerts
    const infoAlertButton = await page.locator('button#alertButton');
    const confirmAlertButton = await page.locator('button#confirmButton');
    const promptAlertButton = await page.locator('button#promtButton');

    //3. Click on the information alert and copy the alert message and then select OK button
    page.once('dialog', async dialog => {

        //print alert message
        console.log(dialog.message());

        //click on ok button
        await dialog.accept();
    });
    await infoAlertButton.click();

    page.once('dialog', async dialog => {

        //print alert message
        console.log(dialog.message());

        //click on cancel button
        await dialog.dismiss();
    });
    await confirmAlertButton.click();

    page.once('dialog', async dialog => {
        //print alert message
        console.log(dialog.message());

        //click on ok button
        await dialog.accept("playwright");

    });
    await promptAlertButton.click();
});