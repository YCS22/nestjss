import { SetMetadata } from '@nestjs/common';
import { Action, Subjects } from './casl-ability.factory';

export const CHECK_ABILITY = 'check_ability';

export interface RequireRule {
  action: Action;
  subject: Subjects;
}

export const CheckAbilities = (...requirements) =>
  SetMetadata(CHECK_ABILITY, requirements);
