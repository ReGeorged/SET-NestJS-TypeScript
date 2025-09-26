import { setWorldConstructor, World } from '@cucumber/cucumber';
import { INestApplicationContext } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from '../../src/app.module';

class TestWorld extends World {
  app: INestApplicationContext;
  // You can also store other context per scenario, e.g. current Page, test data, etc.
}

setWorldConstructor(TestWorld);
