import {
  ArrayMinSize,
  IsArray,
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class SubCategoryDto {
  @IsString()
  @IsNotEmpty()
  public categoryId: string;

  @IsString()
  @IsNotEmpty()
  public subCategoryName: string;
}

export class UpdateSubCategoryDto {
  @IsString()
  @IsNotEmpty()
  public categoryId: string;

  @IsString()
  @IsNotEmpty()
  public oldSubCategoryName: string;

  @IsString()
  @IsNotEmpty()
  public newSubCategoryName: string;
}
