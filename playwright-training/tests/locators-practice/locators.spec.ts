import { test, expect } from '@playwright/test';




test.describe('locators-practice', async () => {

    test('locator-1', async ({ page }) => {
        await page.goto("https://www.testautomationcentral.com/demo/dropdown.html")
        const options = await page.locator('//div[@id="simple-dropdown"]//select').all();

        for (const option of options) {
            const text = await option.textContent();

            if (text?.trim() === 'Option 2') {
                const value = await option.getAttribute('value');
                await page.locator('#simple-dropdown select').selectOption(value!);
                break;
            }
            else {
                throw new Error("Option 8 not found in the dropdown");
            }
        }


    })

    test('locator-2', async ({ page }) => {
        await page.goto("https://www.amazon.com/");
        await page.getByPlaceholder('Search Amazon').fill('mobile');
        const options = await page.locator('//div[@id="sac-autocomplete-results-container"]').all();
        for (const option of options) {
            const text = await option.textContent();

            if (text?.trim() === 'mobiles phones') {
                await option.click();
                break;
            }

        }

    })

    test('alerts', { tag: '@regression' }, async ({ page }) => {

        await page.goto("https://testautomationcentral.com/demo/alerts.html")
        const alert = page.locator("//button[text()='Show Alert']")
        page.on('dialog', async dialog => {
            const message = dialog.message();
            console.log(message);
            // await dialog.accept()

            // await dialog.dismiss()
            await dialog.accept('text-to-enter');

        })
        await alert.click();

    })

    


})