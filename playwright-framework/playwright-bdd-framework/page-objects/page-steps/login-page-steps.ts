import { Page } from '@playwright/test';

import loginPage from '../page-elements/login-page-element.json' with { type: "json" };

import { WebCommons } from '../../commons/ui/web-commons.js';
import config from '../../config/config.json' with { type: "json" };


export class loginPageSteps {
    page: Page;
    web: WebCommons;
    constructor(page: Page) {
        this.page = page;
        this.web = new WebCommons(page);
    }

    //Method to launch the application
    async launchApplication() {
        await this.web.launchApplication(config.app.url, config.app.title);
    }

    //method to verify login page header
    async verifyLoginPageHeader() {
        await this.web.isElementVisible(loginPage.loginPageHeader);
    }

    //method to enter business email and password
    async enterBusinessEmailAndPassword(email: string, password: string) {
        await this.web.enterText(loginPage.businessEmailInput, email);
        await this.web.enterText(loginPage.passwordInput, password);

    }

    //method to verify login button
    async verifyLoginButton() {
        await this.web.clickElement(loginPage.loginButton);
    }
    // method to click on forgot password link
    async clickOnForgotPassword() {
        await this.web.clickElement(loginPage.forgotPassword);
        await this.web.isElementVisible(loginPage.forgogotPasswordVerification)
    }

    //method to verify linked
    async socialMediaIcons() {
        await this.web.isElementVisible(loginPage.linkedLink);
        await this.web.isElementVisible(loginPage.googleLink);
    }

    //method to verify forgot Password button
    async verifyForgotPasswordButton() {
        await this.web.isElementVisible(loginPage.forgotPassword)
    }



}