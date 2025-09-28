import { Injectable, OnModuleInit, OnApplicationShutdown } from '@nestjs/common';
import { chromium, Browser, Page, BrowserContext } from 'playwright';

@Injectable()
export class PlaywrightService implements OnModuleInit, OnApplicationShutdown {
  private browser: Browser | null = null;
  private context: BrowserContext | null = null;

  async onModuleInit() {
    // Launch a single browser instance when the Nest app starts (one-time setup)
    console.log("Creating browser")
    this.browser = await chromium.launch({ headless: false });
    this.context = await this.browser.newContext();
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
    const page = await this.context!.newPage();
    return page;
  }
}
