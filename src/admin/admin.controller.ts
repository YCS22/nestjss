import { Body, Controller, Delete, Get, Patch, Post } from '@nestjs/common';
import { SubCategoryDto, UpdateSubCategoryDto } from './admin.dto';
import { AdminService } from './admin.service';

@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Get('/category')
  async getCategory() {
    return await this.adminService.getCategory();
  }

  @Post('/category')
  async postCategory(@Body() body: string) {
    return await this.adminService.postCategory(body);
  }

  @Post('/subcategory')
  async addSubCategoryToCategory(@Body() body: SubCategoryDto) {
    return await this.adminService.addSubCategoryToCategory(body);
  }

  @Patch('/subcategory')
  async updateSubCategory(@Body() body: UpdateSubCategoryDto) {
    return await this.adminService.updateSubCategoryName(body);
  }

  @Delete('/subcategory')
  async deleteSubCategory(@Body() body: SubCategoryDto) {
    return await this.adminService.deleteSubCategory(body);
  }
}
