import { Module } from '@nestjs/common';
import { SponsorService } from './sponsor.service';
import { SponsorController } from './sponsor.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { SponsorSchema } from './sponsor.model';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Sponsor', schema: SponsorSchema }]),
  ],
  providers: [SponsorService],
  controllers: [SponsorController],
})
export class SponsorModule {}
