import { Module } from "@nestjs/common";
import { JgyhModuleBase } from "./base/jgyh.module.base";
import { JgyhService } from "./jgyh.service";
import { JgyhController } from "./jgyh.controller";
import { JgyhResolver } from "./jgyh.resolver";

@Module({
  imports: [JgyhModuleBase],
  controllers: [JgyhController],
  providers: [JgyhService, JgyhResolver],
  exports: [JgyhService],
})
export class JgyhModule {}
