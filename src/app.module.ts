import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { AdminModule } from './admin/admin.module';
import { OrderModule } from './order/order.module';

@Module({
  imports: [
    AuthModule,

    MongooseModule.forRoot(
      'mongodb+srv://yigit:1234@cluster0.s6kz9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    ),
    UserModule,
    AdminModule,
    OrderModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
