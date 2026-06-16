import { Page } from '@playwright/test';
import homePage from '../page-elements/home-page-element.json' with {type: "json"};
import { WebCommons } from '../../commons/ui/web-commons.js';

export class homePageSteps {
    page: Page;
    web: WebCommons;

    constructor(page: Page) {
        this.page = page;
        this.web = new WebCommons(page);
    }

    //method to verify login page header
    async verifyHomePageHeader(expected: string) {
        await this.web.isElementVisible(homePage.homePageHeader);
        const content = await this.web.getElementText(homePage.homePageHeader);
        //await this.web.compareElementText(content, expected);
    }

    //method toverify users page
    async verifyUsersButton(){
        await this.web.isElementVisible(homePage.userLink);
        const content = await this.web.getElementText(homePage.userLink);
        await this.web.clickElement(homePage.userLink);
    }

    //method to verify Add Users
    async clickOnAddUsers() {
        await this.web.isElementVisible(homePage.addUserButton);
        await this.web.clickElement(homePage.addUserButton);
    }

    //method to verify new user
    async verifyBusinessEmail() {
        await this.web.isElementVisible(homePage.addBusinessEmail);

    }
    //methos to enter business email
    async enterBusinessEmail(email: string) {
        await this.web.enterText(homePage.addBusinessEmail, email);
    }

    //method to select role
    async selectRole(role: string) {
        await this.web.clickElement(homePage.addRole);
        await this.web.clickElement(homePage.addRolDropdownOption.replace('option',role));
    }

    //method to click invite button
    async clickInviteButton() {
        await this.web.clickElement(homePage.inviteButton)
    }

    //method to click invited users button
    async clickInvitedUsersButton() {
        await this.web.clickElement(homePage.invitedUser);

    }

    //method to click on profile icon
    async clickOnProfileIcon() {
        await this.web.clickElement(homePage.profileIcon);
    }

    //method to click on logout icon
    async clickOnLogoutIcon() {
        await this.web.clickElement(homePage.logoutButton);
    }

}