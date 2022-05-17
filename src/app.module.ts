import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ProductModule } from './product/product.module';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { SponsorModule } from './sponsor/sponsor.module';
import { CaslModule } from './casl/casl.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    AuthModule,
    ProductModule,
    MongooseModule.forRoot(
      'mongodb+srv://yigit:1234@cluster0.s6kz9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    ),
    UsersModule,
    SponsorModule,
    CaslModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
