import { Page } from "@playwright/test";
import cookiesPage from '../page-elements/cookies-page-element.json' with { type: "json" };

import { WebCommons } from '../../commons/ui/web-commons.js';

export class cookiesPageSteps {
    page: Page;
    web: WebCommons;

    constructor(page: Page) {
        this.page = page;
        this.web = new WebCommons(page);
    }

    //method to veryfi the cookies popup is displated
    async verifyCookiesPopupIsDisplayed() {
        await this.web.isElementVisible(cookiesPage.cookiesHeader);
    }

    //method to verify the cookies content is displayed
    async verifyCookiesContent(expContent: string) {
        await this.web.isElementVisible(cookiesPage.cookiesBody);
        const cookiesBody = await this.web.getElementText(cookiesPage.cookiesBody);
        await this.web.compareElementText(cookiesBody, expContent);
    }

    // method to verify the cookies logo is displayed
    async verifyCookiesLogo() {
        await this.web.isElementVisible(cookiesPage.cookiesLogo)
    }

    //method to verify cookiesPopup switch buttons displayed
    async verifyCookiesPopupSwitchButtons() {
        await this.web.isElementVisible(cookiesPage.necessaryCookies);
        await this.web.isElementVisible(cookiesPage.preferencesCookies);
        await this.web.isElementVisible(cookiesPage.statisticsCookies)
        await this.web.isElementVisible(cookiesPage.marketingCookies);

    }

    //method to verify show details link is displayed
    async verifyShowDetailsLink() {
        await this.web.isElementVisible(cookiesPage.showDetails);
    }

    //metohd to click on show details link
    async clickOnShowDetailsLink() {
        await this.web.clickElement(cookiesPage.showDetails)
    }

    //method to selection buttons displayed
    async clickCookiesSelectionButtons(buttonName: string) {
        switch (buttonName.toLowerCase()) {
            case 'allow all':
                await this.web.clickElement(cookiesPage.allowAllButton);
                break;
            case 'allow selection':
                await this.web.clickElement(cookiesPage.allowSelectedButton);
                break;
            case 'decline all':
                await this.web.clickElement(cookiesPage.declineAllButton);
                break;
            default:
                throw new Error(`Invalid button name: ${buttonName}. Valid options are 'Allow All', 'Allow Selection', 'Decline All'.`);
        }

    }

    //method to verify cookies popup is closed
    async verifyCookiesPopupClosed() {
        await this.web.isElementVisible(cookiesPage.cookiesHeader);
    }

    //method to verify expandedViewCookies popup
    async expandedViewCookiesPopup() {
        await this.web.isElementVisible(cookiesPage.expandedViewCookiesPoup);
    }

    //async method to verify expandedViewCookies popup allow button
    async expandedViewCookiesPopupAllowButton(button: string) {
        switch (button.toLowerCase()) {
            case 'allow all':
                await this.web.clickElement(cookiesPage.allowAllButton)
                break;
            case 'allow selection':
                await this.web.clickElement(cookiesPage.allowSelectedButton)
                break;
            case 'decline all':
                await this.web.clickElement(cookiesPage.declineAllButton)
                break;
            default:
                throw new Error(`Invalid button name: ${button}. Valid options are 'Allow All', 'Allow Selection', 'Decline All'.`)

        }
    }
}