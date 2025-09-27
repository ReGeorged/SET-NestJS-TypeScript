import { Given, When, Then } from '@cucumber/cucumber';
import { PlaywrightService } from '../../src/services/playwright.service'
import { expect } from 'chai';
import { TestWorld } from '../support/world';

Given('I open the Google homepage', async function() {
    const pw = this.app.get(PlaywrightService); 

  await this.page.goto('https://www.google.com');
});

When('I search for {string}', async function(searchTerm: string) {
  // Assume Google's search box has name 'q'
  await this.page.fill('input[name="q"]', searchTerm);
  await this.page.press('input[name="q"]', 'Enter');
});

Then('results should be shown for {string}', async function(searchTerm: string) {
  // Wait for results to load (e.g., wait for some result selector)
  const firstResult = await this.page.waitForSelector('h3');  // Google result titles are <h3>
  const text = await firstResult.innerText();
  expect(text.toLowerCase()).to.include(searchTerm.toLowerCase());
});
