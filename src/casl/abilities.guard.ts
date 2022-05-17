import { ForbiddenError } from '@casl/ability';
import {
  Injectable,
  CanActivate,
  ExecutionContext,
  ForbiddenException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';
import { RequireRule, CHECK_ABILITY } from './abilities.decorator';
import { CaslAbilityFactory } from './casl-ability.factory';
import { currentUser } from './current-user';

@Injectable()
export class AbilitiesGuard implements CanActivate {
  constructor(
    private reflector: Reflector,
    private caslAbilityFactory: CaslAbilityFactory,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const rules =
      this.reflector.get<RequireRule[]>(CHECK_ABILITY, context.getHandler()) ||
      [];

    //context.switchToHttp().getRequest();
    const user = currentUser;
    const ability = this.caslAbilityFactory.defineAbility(user);

    console.log('user', user);

    try {
      rules.forEach((rule) =>
        ForbiddenError.from(ability).throwUnlessCan(rule.action, rule.subject),
      );
      return true;
    } catch (error) {
      if (error instanceof ForbiddenError) {
        throw new ForbiddenException(error.message);
      }
    }

    return true;
  }
}
