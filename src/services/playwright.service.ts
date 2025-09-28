import { Injectable, OnModuleInit, OnApplicationShutdown } from '@nestjs/common';
import { chromium, Browser, Page } from 'playwright';

@Injectable()
export class PlaywrightService implements OnModuleInit, OnApplicationShutdown {
  private browser: Browser | null = null;

  async onModuleInit() {
    // Launch a single browser instance when the Nest app starts (one-time setup)
    this.browser = await chromium.launch({ headless: false });
  }

  async onApplicationShutdown() {
    // Clean up: close browser when Nest application shuts down
    if (this.browser) {
      await this.browser.close();
      this.browser = null;
    }
  }

  async newPage(): Promise<Page> {
    // Create a fresh browser context and page for a test scenario
    if (!this.browser) {
      throw new Error('Playwright browser is not initialized yet.');
    }
    const context = await this.browser.newContext();  // new incognito context
    const page = await context.newPage();
    return page;
  }
}
