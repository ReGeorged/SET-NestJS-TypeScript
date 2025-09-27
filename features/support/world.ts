import 'reflect-metadata';
import { IWorldOptions, setWorldConstructor, World } from '@cucumber/cucumber';
import { INestApplicationContext } from '@nestjs/common';

export class TestWorld extends World {
  app!: INestApplicationContext;
  constructor(opts: IWorldOptions) { super(opts); }
}

setWorldConstructor(TestWorld);
