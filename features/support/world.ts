import { IWorldOptions, setWorldConstructor, World } from '@cucumber/cucumber';
import { INestApplicationContext, Type } from '@nestjs/common';
import { app } from './hooks'; // Import the shared app instance

export class TestWorld extends World {
  // Make this public so it can be accessed from step definitions
  private app: INestApplicationContext;

  constructor(options: IWorldOptions) {
    super(options);
    // Each scenario gets its own World instance, but they all share
    // the same NestJS application context created in the BeforeAll hook.
    this.app = app;
  }

  public get getApp(){
    if(!app) throw new Error("Application context not initialized")
      return this.app;
    }
  /**
   * A convenience method to retrieve a provider (service, repository, etc.)
   * from the NestJS application context.
   * @param type The class type of the provider to retrieve.
   * @returns An instance of the requested provider.
   */
  public getService<T>(type: Type<T>): T {
    if (!this.getApp) {
      throw new Error('Nest application context not initialised yet. Ensure hooks are running.');
    }
    // The 'get' method queries the IoC container for the provider instance.
    return this.getApp.get(type);
  }
}

// setWorldConstructor(TestWorld);