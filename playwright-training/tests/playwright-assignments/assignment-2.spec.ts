/* 1. Enter URL and Launch the application (https://demoqa.com/automation-practice-form)
2. Wait for Page-load
3. Enter First name and Last name
4. Enter Email
5. Select Gender (Male)
6. Enter mobile number
7.Select DOB (1-Feb-1991)
8.Search and Select Computer Science and English
9.Select Hobbies as Sports and Reading
10.Upload photo
11.Submit Details */


import{test,expect} from '@playwright/test';
test('learningautomation',async ({ page }) => {
    await page.goto('https://rahulshettyacademy.com/locatorspractice/');
    await page.locator('input#inputUsername').fill('Rahul');
    await page.locator('//input[@name="inputPassword"]').fill('rahulshettyacademy');
    await page.locator('//button[text()="Sign In"]').click();

});