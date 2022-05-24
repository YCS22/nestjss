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

export class CategoryDto {
  @IsString()
  @IsNotEmpty()
  public categoryId: string;

  @IsString()
  @IsOptional()
  public region: string;

  @IsString()
  @IsOptional()
  public fromCity: string;

  @IsString()
  @IsOptional()
  public toCity: string;

  @IsString()
  @IsOptional()
  public fromRegion: string;

  @IsString()
  @IsOptional()
  public toRegion: string;

  @IsString()
  @IsOptional()
  public squaremeter: string;

  @IsString()
  @IsOptional()
  public period: string;

  @IsString()
  @IsOptional()
  public startingHour: string;

  @IsString()
  @IsOptional()
  public fromFloor: string;

  @IsString()
  @IsOptional()
  public toFloor: string;

  @IsString()
  @IsOptional()
  public extraServices: string;

  @IsString()
  @IsOptional()
  public complemantaryServices: string;

  @IsString()
  @IsOptional()
  public cleaninFrequency: string;

  @IsString()
  @IsOptional()
  public extraPackingServices: string;

  @IsString()
  @IsOptional()
  public insuranceServices: string;
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
