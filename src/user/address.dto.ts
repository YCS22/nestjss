import {
  ArrayMinSize,
  IsArray,
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class AddressDto {
  @IsString()
  @IsOptional()
  public sub: string;

  @IsString()
  @IsOptional()
  public name: string;

  @IsString()
  @IsOptional()
  public country: string;

  @IsString()
  @IsOptional()
  public region: string;

  @IsString()
  @IsOptional()
  public street: string;

  @IsString()
  @IsOptional()
  public apartment: string;

  @IsNumber()
  @IsOptional()
  public no: number;
}
