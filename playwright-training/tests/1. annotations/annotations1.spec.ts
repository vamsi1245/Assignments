//Annotations are a set of keywords and default methods that will us to run all our test cases

//test => test refers to an independedent test method to be executed in playwright
//test.describe => test.describe is used to group the test cases based on the functionality or module. It is used to create a test suite.

import { test, expect } from '@playwright/test';

//independent test case 
test('test case ', async ({ page }) => {
    console.log("This is test case . ");
});

//group of test cases
test.describe('group of test cases', () => {
    test('test case 1', async ({ page }) => {
        console.log("This is test case 1. ");
    });

    test('test case 2', async ({ page }) => {
        console.log("This is test case 2. ");
    });

    test('test case 3', async ({ page }) => {
        console.log("This is test case 3. ");
    });
});