import { Module } from "@nestjs/common";
import { PlaywrightService } from "./services/playwright.service";

@Module({
  imports: [ /* no other modules needed for now */ ],
  providers: [ PlaywrightService /*, other services */ ],
  exports: [ PlaywrightService ],
})
export class AppModule {}
