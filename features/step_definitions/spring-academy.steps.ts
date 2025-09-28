import { given, when, then, before, after } from '@lynxwall/cucumber-tsflow'
import { expect } from 'chai';
import { Page } from 'playwright';
import { BaseSteps, StepsBinding } from './baseSteps';

@StepsBinding()
export class HomePageSteps extends BaseSteps {

    private page!: Page;

 
  @before()
  public async setup() {
    this.page = await this.playwrightService.newPage();
    this.setPage(this.page);
  }

  @after()
  public async teardown() {
    if (!this.page) {
      return;
    }
    const context = this.page.context();
    if (!context) {
      this.page.close;
    }
  }

    @given('I open the Spring Academy homepage')
    public async navigateToHomePage() {
        await this.page.goto('https://spring.academy/');
        await this.page.waitForLoadState('networkidle', { timeout: 30000 });

    };

    @when('I click on {string}')
    public async search(searchTerm: string) {
        let locatorStr = `//a[@data-tooltip-id="${searchTerm}"]`;
        let locator = this.page.locator(locatorStr).first();
        await locator.waitFor({ state: 'visible', timeout: 30000 })
        await locator.click({ timeout: 15000 })
    };

    @then('Guides Page Should open')
    public async verifyGuidesPage() {
        this.page.waitForLoadState('networkidle')
        await this.page.waitForSelector('.guide-list-container', { state: 'visible' });
        const isVisible = await this.page.locator('.guide-list-container').isVisible();
        expect(isVisible, 'Guides Page did not load').to.be.true;
    };
}