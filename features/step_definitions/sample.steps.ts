import { binding, given, when, then, before } from '@lynxwall/cucumber-tsflow'
import { PlaywrightService } from '../../src/services/playwright.service'
import { expect } from 'chai';
import { TestWorld } from '../support/world';
import { Page } from 'playwright';

// The change is on this line:
@binding([TestWorld])
export class HomePageSteps {
    private readonly playwrightService: PlaywrightService
    private page: Page;

    // The 'world' parameter will now be correctly populated with an instance of TestWorld.
    constructor(protected readonly world: TestWorld) {
        // This call will now succeed because 'this.world' is a valid TestWorld instance.
        this.playwrightService = this.world.getService(PlaywrightService);
    }

    @before()
    public async setup() {
        this.page = await this.playwrightService.newPage();
    }

    @given('I open the Google homepage')
    public async navigateToHomePage() {
        await this.page.goto('https://www.google.com');
    };

    @when('I search for {string}')
    public async search(searchTerm: string) {
        // Assume Google's search box has name 'q'
        await this.page.fill('input[name="q"]', searchTerm);
        await this.page.press('input[name="q"]', 'Enter');
    };

    @then('results should be shown for {string}')
    public async searchResults(searchTerm: string) {
        // Wait for results to load (e.g., wait for some result selector)
        const firstResult = await this.page.waitForSelector('h3');  // Google result titles are <h3>
        const text = await firstResult.innerText();
        expect(text.toLowerCase()).to.include(searchTerm.toLowerCase());
    };
}