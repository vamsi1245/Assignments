//test.skip => test.skip is used to skip the execution of a test case. It is used when we want to skip the execution of a test case due to some reason. It can be used with a condition as well.
//test.fixme => test.fixme is used to mark a test case as a known issue. It is used when we want to mark a test case as a known issue and skip the execution of that test case. It can be used with a condition as well.
//test.only => test.only is used to execute only a specific test case. It is used when we want to execute only a specific test case and skip the execution of all other test cases.
//test.fail => test.fail is used to mark a test case as expected to fail. It is used when we want to mark a test case as expected to fail and skip the execution of that test case. It can be used with a condition as well.
//test.slow => test.slow is used to mark a test case as slow. It is used when we want to mark a test case as slow and skip the execution of that test case. It can be used with a condition as well.

import { test, expect } from '@playwright/test';

test.skip('test case 1', async ({ page }) => {
    console.log("This is test case skipped. ");
});

test('test case 2', async ({ page }) => {
    console.log("This is test case 2. ");
});

test.fail('test case 3', async ({ page }) => {
    console.log("This is test case 3. ");
    expect(1).toBe(2);
});

test('test case 4', async ({ page }) => {
    test.slow();
    console.log("This is test case 4. ");
    setTimeout(() => { 
        console.log("This is test case 4 - slow.");
    }, 35000);
});

test('test case 5', async ({ page }) => {
    console.log("This is test case 5. ");
});