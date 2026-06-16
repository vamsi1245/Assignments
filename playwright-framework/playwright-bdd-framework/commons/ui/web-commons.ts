import { Page, Locator, expect } from '@playwright/test';


export class WebCommons {
    page: Page; //class level variable to store the page object

    constructor(page: Page) {//constructor to initialize the page object when creating an instance of WebCommons class
        this.page = page;
    }

    //common method to generate web element for locator
    async element(locator: string): Promise<Locator> {
        return this.page.locator(locator);

    }

    //common method to lounch the application
    async launchApplication(url: string, title?: string): Promise<void> {
        await this.page.goto(url);
        if (title) {
            await expect(this.page).toHaveTitle(title);
        }
    }

    //common methos to scroll to element
    async scrollToElement(locator: string): Promise<void> {
        const element = await this.element(locator);
        await element.scrollIntoViewIfNeeded();
    }

    //common method to click on element
    async clickElement(locator: string): Promise<void> {
        const element = await this.element(locator);
        await element.click();
    }

    //commmon method to hover on element
    async hoverOnElement(locator: string): Promise<void> {
        const element = await this.element(locator);
        await element.hover();
    }

    //common method to get text of element
    async getElementText(locator: string): Promise<string> {
        const element = await this.element(locator);
        return await element.textContent() || '';
    }

    //common method to select the option from dropdown
    async selectOption(locator: string, optionValue: string): Promise<void> {
        const element = await this.element(locator);
        await element.selectOption("{role}");
    }

    //common method to check box is checked or not
    async isCheckboxChecked(locator: string): Promise<void> {
        const element = await this.element(locator);
        if (!await element.isChecked()) {
            await element.check();
        }

    }

    //common method to get attribute value of element
    async getElementAttribute(locator: string, attributeName: string): Promise<string> {
        const element = await this.element(locator);
        return await element.getAttribute(attributeName) || '';

    }

    //common method to upload file
    async uploadFile(locator: string, filePath: string): Promise<void> {
        const element = await this.element(locator);
        await element.setInputFiles(filePath);
    }

    //common method to check if element is visible
    async isElementVisible(locator: string): Promise<boolean> {
        const element = await this.element(locator);
        return await element.isVisible();
    }

    //common method to enter text in input field
    async enterText(locator: string, text: string): Promise<void> {
        const element = await this.element(locator);
        await element.fill(text);
    }

    //common method to compare the text of element with expected text
    async compareElementText(actual: string, expected: string): Promise<void> {
        expect(actual.trim()).toContain(expected.trim());
    }

    //common method to handle alerts popup
    async handleAlert(action: 'accept' | 'dismiss', promptText?: string): Promise<void> {
        this.page.once('dialog', async (dialog) => {
            if (promptText) {
                await dialog.accept(promptText);
            }
            else {
                if (action === 'accept') {
                    await dialog.accept();
                } else {
                    await dialog.dismiss();
                }
            }

        });
    }

    //common method to take screenshot
    async takeScreenshot(filePath: string): Promise<void> {
        await this.page.screenshot({ path: filePath })
    }

    //common method to refresh the page
    async refreshPage(): Promise<void> {
        await this.page.reload();

    }

    //common method to locate frame element
    async frameElement(frameLocator: string, frameElement: string): Promise<Locator> {
        const element = await this.page.frameLocator(frameLocator);
        const frameElementLocator = element.locator(frameElement);
        return frameElementLocator;

    }

    //common metohd to locate the element by using playwright locator metohds
    async locateElementByMethod(locator: string, role?: Parameters<Page['getByRole']>[0]): Promise<Locator> {
        const [method, value] = locator.split('-', 2);
        if (method === 'getByRole') {

            if (!role) {
                throw new Error('Role parameter is required for getByRole method');
            }
            return this.page.getByRole(role, { name: value ?? '' });
        }
        else if (method === 'getByLabel') {
            return this.page.getByLabel(value ?? '');
        }
        else if (method === 'getByText') {
            return this.page.getByText(value ?? '');
        }
        throw new Error(`Unsupported method: ${method}`);
    }
}
