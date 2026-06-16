/* Assignment - 2
1. Enter URL and Launch the application (https://demoqa.com/automation-practice-form)
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

import { test, expect, Page } from '@playwright/test';

test('Demo QA web-actions2', async ({ page }) => {

   //1. Enter URL and Launch the application (https://demoqa.com/automation-practice-form)
   await page.goto('https://demoqa.com/automation-practice-form');

   //2. Wait for Page-load
   const text = await page.locator('//h1[contains(text(),"Practice Form")]');
   await expect(text).toHaveText("Practice Form");

   //3. Enter First name and Last name
   const fname = await page.locator('input#firstName');
   await fname.fill('Vamsi');
   const lname = await page.locator('input#lastName');
   await lname.fill('Krishna');

   //4. Enter Email
   const email = await page.locator('input#userEmail');
   await email.fill("vamsi123@gmail.com");

   //5. Select Gender (Male)
   await selectGender(page, "Male");

   //6. Enter mobile number
   const mobile = await page.locator('input#userNumber');
   await mobile.fill("6301863900");

   //7.Select DOB (1-Feb-1991)
   await selectDob(page, "4", "September", "1997")

   //8.Search and Select Computer Science and English
   const subjects: string[] = ["computer Science", "English"]

   await selectSubject(page, subjects);

   //9.Select Hobbies as Sports and Reading
   const hobbies: string[] = ["Sports", "Reading"];
   await selectHobbiles(page, hobbies);

   //10.Upload photo
   const uploadInput = await page.locator('input#uploadPicture');
   const filPath = "C:\\AutomationTraining\\playwright-training\\files\\photo.jpg";
   await uploadInput.setInputFiles(filPath);

   //11.Submit Details
   const button =await page.locator('button#submit');
   await button.click();


});

async function selectGender(page: Page, option: string) {
   const gender = await page.locator(`//label[text()="${option}"]`)
   await gender.check();
}

async function selectDob(page: any, date: string, month: string, year: string) {
   const dob = await page.locator('input#dateOfBirthInput');
   await dob.click();
   const monthDropDown = await page.locator('select[class="react-datepicker__month-select"]');
   await monthDropDown.selectOption({ label: month });
   const YearDropDown = await page.locator('select[class="react-datepicker__year-select"]');
   await YearDropDown.selectOption({ label: year });
   const dateLocator = await page.locator(`//div[contains(@aria-label,"${month}") and text()="${date}"]`);
   await dateLocator.click();

}

async function selectSubject(page: any, subjects: string[]) {
   const subjectUInput = await page.locator('div[class*="subjects-auto-complete__input-container"]');
   subjectUInput.click();
   const subjectInertnalInput = await page.locator('input[id="subjectsInput"]');

   for (const subject of subjects) {

      await subjectInertnalInput.fill(subject);
      await subjectInertnalInput.press('Enter');

   }
}

async function selectHobbiles(page: any, hobbies: string[]) {
   for (const hobby of hobbies) {
      const hobbyLocator = await page.locator(`//label[text()="${hobby}"]`);
      hobbyLocator.click();
   }


}