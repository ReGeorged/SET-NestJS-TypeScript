import { binding, given, when, then, before } from '@lynxwall/cucumber-tsflow'
import { PlaywrightService } from '../../src/services/playwright.service'
import { expect } from 'chai';
import { TestWorld } from '../support/world';
import { Page } from 'playwright';
import { BaseSteps, StepsBinding } from './baseSteps';

@StepsBinding()
export class HomePageSteps extends BaseSteps {

    private page!: Page;

    @before()
    public async setup() {
        this.page = await this.playwrightService.newPage();
    }

    @given('I open the Spring Academy homepage')
    public async navigateToHomePage() {
        await this.page.goto('https://spring.academy/');
    };

    @when('I click on {string}')
    public async search(searchTerm: string) {
        await this.page.locator(`//img[@alt="${searchTerm}"]`).first().click()
    };

    @then('Guides Page Should open')
    public async searchResults(searchTerm: string) {
        expect(await this.page.locator(".guide-list-container").isVisible(), "Guides Page did not load")
    };
}