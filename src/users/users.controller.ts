import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { CheckAbilities } from 'src/casl/abilities.decorator';
import { AbilitiesGuard } from 'src/casl/abilities.guard';
import { CaslAbilityFactory } from 'src/casl/casl-ability.factory';
import { Action, Article, User } from 'src/roles/role.enum';
import { AuthUser } from './users.decorator';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(
    private readonly userService: UsersService,
    private caslAbilityFactory: CaslAbilityFactory,
  ) {}

  @Post('save')
  @UseGuards(AbilitiesGuard)
  @CheckAbilities({ action: Action.Delete, subject: User })
  async addUser(
    @Body('name') userName: string,
    @Body('mail') userEmail: string,
  ) {
    // const user = new User();
    // user.isAdmin = true;

    // const ability = this.caslAbilityFactory.createForUser(user);
    // console.log(ability.can(Action.Create, Article));

    const name = await this.userService.insertUser(userName, userEmail);

    return { name };
  }
}
