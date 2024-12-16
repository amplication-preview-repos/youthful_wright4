import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { JgyhServiceBase } from "./base/jgyh.service.base";

@Injectable()
export class JgyhService extends JgyhServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
