import { Module } from '@nestjs/common';
import { AddressService } from './address.service';
import { AddressController } from './address.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { AdressSchema } from './address.model';
import { UserModule } from 'src/user/user.module';

@Module({
  imports: [
    UserModule,
    MongooseModule.forFeature([
      { name: 'PocketAddress', schema: AdressSchema },
    ]),
  ],
  providers: [AddressService],
  controllers: [AddressController],
})
export class AdressModule {}
