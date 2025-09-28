import { binding } from '@lynxwall/cucumber-tsflow'
import { PlaywrightService } from '../../src/services/playwright.service'
import { TestWorld } from '../support/world';
import { Page } from 'playwright';

export function StepsBinding(): ClassDecorator {
    return binding([TestWorld]);
}

export abstract class BaseSteps {
    protected readonly playwrightService!: PlaywrightService

    // The 'world' parameter will now be correctly populated with an instance of TestWorld.
    constructor(protected readonly world: TestWorld) {
        this.playwrightService = this.world.getService(PlaywrightService);
    }

    
  protected setPage(page: Page): void {
    this.world.setPage = page;
  }

  protected getPage(): Page {
    return this.world.getPage;
  }

}