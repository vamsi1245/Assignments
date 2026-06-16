//CSS Selector: CSS Select Tree is all about locating the elements by using CSS properties of the Web Elements. 

//CSS Selector Syntaxes

//Syntax 1: tagName#id
//Syntax 2: tagName.className
//Syntax 3: tagName[attribute="attribute-value "]
//Syntax 4: tagName[attribute*="attribute-value"] //* refers contains
//Syntax 5: tagName[attribute^="attribute-value "] //^ refers starts with
//Syntax 6: tagName[attribute$="attribute-value "] //$ refers ends with
//Syntax 7: tagName[attribute1="attribute-value "][attribute2="attribute-value "]
//Syntax 8: Advanced CSS selector with relationship. 

// technique: target -> parent -> ancestor -> ancestor's parent

//css selector: ancestor's parent > ancestor > parent > target'

// ancestor : ul[class="leftmenu"]
// parent element : li
// target element : a[href="services.htm"]

// ul[class="leftmenu"] > li > a[href="services.htm"]


import { test, expect } from '@playwright/test';

test('css selector', async ({ page }) => {

await page.goto("https://parabank.parasoft.com/parabank/index.htm");

//Syntax 2: tagName.className
await page.locator('img.logo')
//Syntax 4: tagName[attribute*="attribute-value"] //* refers contains
await page.locator("a[href*='register.htm']");

await page.locator("ul[class='button'] > li > a[href*='index.htm']");

await page.locator("ul[class='visit'] >li>a");


});

