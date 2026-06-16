/*Assignment - 1

1. Launch application using url (https://parabank.parasoft.com/parabank/index.htm)
2.verify application logo is displayed
3.Verify application caption displayed as "Experience the difference"
4.Enter invalid username
5.Enter empty Password
6.Click on login button
7.Verify the error message "Please enter a username and password."
8.Click on admin page link
9.select the option "soap" from dba mode radio button
10.Scroll to element dropdown
11.Select the option web service from the dropdown
12.click on submit button
13.verify submission is successful by validating success message
14.Click on services page link
15.wait for service page
16.Scroll down till bookstore services table
17.get total rows of books store services table
18.get total columns of books store services table
19.Print table data (row wise and column wise data)*/

import { test, expect } from '@playwright/test';

test('assignment', async ({ page }) => {

    await page.goto('https://parabank.parasoft.com/parabank/index.htm');
    const logo = await page.locator('img.logo');
    await expect(logo).toBeVisible();
    //3.Verify application caption displayed as "Experience the difference"
    const caption = await page.locator('p.caption');
    await expect(caption).toHaveText('Experience the difference');
    //4.Enter invalid username
    const username = await page.locator('(//div[@class="login"]/input[@name="username"])');
    username.fill('vamsi123');
    //5.Enter empty Password
    const password = await page.locator('//div[@class="login"]/input[@name="password"]');
    password.fill('');
    //6.Click on login button
    const button = await page.locator('input.button');
    button.click();
    //7.Verify the error message "Please enter a username and password."
    const errorMessage = await page.locator('p.error');
    await expect(errorMessage).toHaveText('Please enter a username and password.');
    //8.Click on admin page link
    const adminPage = await page.locator('//a[contains(text(), "Admin Page")]');
    adminPage.click();
    //9.select the option "soap" from dba mode radio button

    //10.Scroll to element dropdown
    const dropdown = await page.locator('select#loanProvider');
    await dropdown.scrollIntoViewIfNeeded();
    //11.Select the option web service from the dropdown
    dropdown.selectOption({ label: 'Web Service' });
    //12.click on submit button
    await page.locator('//input[@value="Log In"]').click();
    //13.verify submission is successful by validating success message

    //14.Click on services page link
    await page.locator('//ul[@class="leftmenu"]/child::li/child::a[text()="Services"]').click();
    //15.wait for service page
    await page.waitForLoadState('networkidle');
    //16.Scroll down till bookstore services table
    await page.locator('//span[contains(text(),"Bookstore services:")]').scrollIntoViewIfNeeded();
    //17.get total rows of books store services table
    const rows = await page.locator('//span[text()="Bookstore services:"]/following-sibling::table[1]/tbody/tr');
    const total = await rows.count();
    await expect(rows).toHaveCount(8);
    //18.get total columns of books store services table
    const columns = await page.locator('//span[text()="Bookstore services:"]/following-sibling::table[1]/tbody/tr[1]/td');
    const totalColumns = await columns.count();
    await expect(columns).toHaveCount(3);
    //19.Print table data (row wise and column wise data)
    for (let i = 1; i <= total; i++) {
        for (let j = 1; j <= totalColumns; j++) {
            const data = await page.locator(`//span[text()="Bookstore services:"]/following-sibling::table[1]/tbody/tr[${i}]/td[${j}]`).textContent();
            await expect(data).not.toBe('');
        }

    }

});

