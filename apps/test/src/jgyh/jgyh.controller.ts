import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { JgyhService } from "./jgyh.service";
import { JgyhControllerBase } from "./base/jgyh.controller.base";

@swagger.ApiTags("jgyhs")
@common.Controller("jgyhs")
export class JgyhController extends JgyhControllerBase {
  constructor(protected readonly service: JgyhService) {
    super(service);
  }
}
