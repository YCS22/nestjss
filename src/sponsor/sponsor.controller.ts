import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Delete,
  Patch,
} from '@nestjs/common';
import { SponsorService } from './sponsor.service';

@Controller('sponsor')
export class SponsorController {
  constructor(private readonly sponsorService: SponsorService) {}

  @Post('add')
  async addSponsor(
    @Body('company_name') company_name: string,
    @Body('room_id') room_id: string,
    @Body('message') message: string,
    @Body('email') email: string,
  ) {
    const getNewSponsorId = await this.sponsorService.insertSponsor(
      company_name,
      room_id,
      message,
      email,
    );

    return { id: getNewSponsorId };
  }

  @Get('get')
  async getSponsor() {
    const getSponsorAllAttr = await this.sponsorService.getAllSponsor();

    return getSponsorAllAttr;
  }

  @Get('get/:id')
  async getSingleSponsor(@Param('id') sponsorId: string) {
    return this.sponsorService.getSponsorById(sponsorId);
  }

  @Delete('delete/:id')
  async deleteSponsor(@Param('id') sponsorId: string) {
    return this.sponsorService.deleteSponsor(sponsorId);
  }

  @Patch(':id')
  async updateSponsor(
    @Param('id') sponsorId: string,
    @Body('mail') sponsorMail: string,
  ) {
    console.log(sponsorId, sponsorMail);
    await this.sponsorService.updateSponsor(sponsorId, sponsorMail);
  }
}
