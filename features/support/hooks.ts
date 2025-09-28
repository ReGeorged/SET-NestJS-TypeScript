import { BeforeAll, AfterAll } from '@cucumber/cucumber';
import { NestFactory } from '@nestjs/core';
import { AppModule } from '../../src/app.module';
import { INestApplicationContext } from '@nestjs/common';

export let app: INestApplicationContext;

BeforeAll(async function () {
app = await NestFactory.createApplicationContext(AppModule);

});

AfterAll(async function () {
    // Tear down NestJS application
    await app?.close();
});
