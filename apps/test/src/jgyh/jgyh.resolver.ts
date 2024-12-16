import * as graphql from "@nestjs/graphql";
import { JgyhResolverBase } from "./base/jgyh.resolver.base";
import { Jgyh } from "./base/Jgyh";
import { JgyhService } from "./jgyh.service";

@graphql.Resolver(() => Jgyh)
export class JgyhResolver extends JgyhResolverBase {
  constructor(protected readonly service: JgyhService) {
    super(service);
  }
}
