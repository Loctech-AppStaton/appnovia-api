import { IsNotEmpty, IsOptional } from 'class-validator';

export class CreateContactDto {
  @IsNotEmpty()
  readonly name: string;

  @IsNotEmpty()
  readonly phone: string;

  @IsNotEmpty()
  email: String;

  @IsNotEmpty()
  companyName: String;

  @IsNotEmpty()
  companySize: String;

  @IsNotEmpty()
  product: String;

  @IsOptional()
  description: String;
}
