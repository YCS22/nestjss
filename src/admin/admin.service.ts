import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { SubCategoryDto, UpdateSubCategoryDto } from './admin.dto';

@Injectable()
export class AdminService {
  constructor(
    @InjectModel('Category') private readonly categoryModel: Model<any>,
  ) {}

  async getCategory() {
    return await this.categoryModel.find().exec();
  }

  async postCategory(newCategory: any) {
    const category = new this.categoryModel({
      name: newCategory.categoryName,
      subCategory: newCategory.subCategory,
    });

    category.save();
    return category;
  }

  async addSubCategoryToCategory(body: SubCategoryDto) {
    const category: any = await this.categoryModel
      .find({ _id: body.categoryId })
      .exec();

    category[0].subCategory.push({ name: body.subCategoryName });
    console.log(category[0]);
    category[0].save();

    return category;
  }

  async updateSubCategoryName(body: UpdateSubCategoryDto) {
    const category: any = await this.categoryModel
      .find({ _id: body.categoryId })
      .exec();

    const newCategory = category[0].subCategory.filter((item: any) => {
      return item.name != body.oldSubCategoryName;
    });

    this.categoryModel.updateOne(
      { _id: body.categoryId, subCategory: { name: body.oldSubCategoryName } },
      {
        subCategory: [...newCategory, { name: body.newSubCategoryName }],
      },
      function (err, docs) {
        if (err) {
          console.log('dd', err);
        } else {
          console.log('updated', docs);
        }
      },
    );
    return [...newCategory];
  }

  async deleteSubCategory(body: SubCategoryDto) {
    const category: any = await this.categoryModel
      .find({ _id: body.categoryId })
      .exec();
    const newCategory = category[0].subCategory.filter((item: any) => {
      return item.name != body.subCategoryName;
    });

    await this.categoryModel.updateOne(
      { _id: body.categoryId },
      {
        subCategory: [...newCategory],
      },
    );

    return newCategory;
  }
}
