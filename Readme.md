# E2E Browser Test Automation POC with NestJs + TypeScript
## ! This is POC project dont look for best practices here )
* Libs used :
  * Playwright (Browser Automation)
  * @cucumber/cucumber (BDD)
    * @types/cucumber (Types for cucumber)
    * @lynxwall/cucumber-tsflow (TypeScript Flow For Cucumber)
  * Chai (Assertions)
  * NestJS:
    * @nestjs/common
    * @nestjs/config
    * @nestjs/core
    * reflect-metadata


# Cucumber files are under ./features
## ./features support has cucumber world and hooks in which we inject nestjs application context
## In ./src we have default application module and service in which we have playwright service
## In ./features/step_definitions/baseSteps.ts we have abstract class that has injected NestJs Application context and export  @StepsBinding() function to be reused by other steps
## Thus in our steps after extending BaseSteps and adding @StepsBinding() we have our nestjs app context available

# To run tests run:
``` sh
npm run test:e2e 
```