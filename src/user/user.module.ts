import { forwardRef, Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';

import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './user.model';
import { AuthModule } from 'src/auth/auth.module';
import { AuthService } from 'src/auth/auth.service';
@Module({
  imports: [
    //circular dependency
    forwardRef(() => AuthModule),
    MongooseModule.forFeature([{ name: 'PocketUser', schema: UserSchema }]),
  ],
  providers: [UserService],
  controllers: [UserController],
  exports: [UserService],
})
export class UserModule {}
