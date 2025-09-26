import { BeforeAll, AfterAll, Before, After } from '@cucumber/cucumber';
import { Test, TestingModule } from '@nestjs/testing';
import { AppModule } from '../../src/app.module';
import { INestApplication, INestApplicationContext } from '@nestjs/common';


// import { NestFactory } from '@nestjs/core';
// import { PlaywrightService } from '../../src/services/playwright.service';

let app: INestApplicationContext;



BeforeAll(async function () {
    const moduleFixture: TestingModule = await Test.createTestingModule({
        imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
});

AfterAll(async function () {
    // Tear down NestJS application
    await app.close();
});






// OLD --------------------
// BeforeAll(async function() {
//   // Start NestJS application context
//   app = await NestFactory.createApplicationContext(AppModule);
// });

// AfterAll(async function() {
//   // Tear down NestJS application
//   await app.close();
// });












// Before(async function() {
//   // Before each scenario: create a fresh page for testing
//   const pwService = app.get(PlaywrightService);  // retrieve our Playwright service
//   this.page = await pwService.newPage();         // store Page in the World context
// });

// After(async function() {
//   // After each scenario: close the page (and its browser context) to clean up
//   await this.page.context().close();
// });
