import { given, when, then, before, after, beforeAll } from '@lynxwall/cucumber-tsflow'
import { expect } from 'chai';
import { Page } from 'playwright';
import { BaseSteps, StepsBinding } from './baseSteps';

@StepsBinding()
export class RegisterSteps extends BaseSteps {

    private page!: Page;

    @before()
    public async setup() {
        if (!this.page) {
            this.page = await this.playwrightService.newPage();
        }
    }

    @when('I click on Register')
    public async clickRegister() {
        // await this.page.waitForLoadState('networkidle', { timeout: 30000 });
        // let locatorStr = `//*[@id="root"]/div/div/div[2]/div[2]/div[2]/div/div/div/div[1]/div/div[2]/a[1]/button`;
        // //  let locatorStr = `//div[contains(@class,"auth")]//button[contains(@class,"auth-btn")]`
        // // let locatorStr = `//*[@id="root"]/div/div/div[1]/header/div[1]/div[2]/a/button`
        // let locator = this.page.locator(locatorStr);
        // await locator.waitFor({ state: 'visible', timeout: 30000 })
        // await locator.click({ timeout: 15000, force: true })

        await this.page.goto("https://google.com")

        //         let locatorStr = `//a[@data-tooltip-id="Courses"]`;
        // let locator = this.page.locator(locatorStr).first();
        // await locator.waitFor({ state: 'visible', timeout: 30000 })
        // await locator.click({ timeout: 15000 })
    };

    @then('Register page should open')
    public async verifyGuidesPage() {
        await this.page.waitForLoadState('networkidle', { timeout: 30000 })
        let selector = `//h1[@class="login-text"]`
        await this.page.waitForSelector(selector, { state: 'visible' });
        const isVisible = await this.page.locator(selector).isVisible();
        expect(isVisible, 'Guides Page did not load').to.be.true;
    };

}
