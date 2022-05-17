import {
  ArrayMinSize,
  IsArray,
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class UserDto {
  @IsString()
  @IsOptional()
  public mail: string;

  @IsString()
  @IsOptional()
  public name: string;

  @IsString()
  @IsOptional()
  public surname: string;

  @IsString()
  @IsOptional()
  public avatar: string;

  @IsString()
  @IsOptional()
  public username: string;

  @IsString()
  @IsOptional()
  public password: string;
}
