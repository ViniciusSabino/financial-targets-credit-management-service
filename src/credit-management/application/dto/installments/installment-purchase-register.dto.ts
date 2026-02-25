import { IsDateString, IsNumber, IsPositive, IsString } from 'class-validator';

class InstallmentPurchaseRegisterDTO {
  @IsString()
  readonly name!: string;

  @IsNumber()
  @IsPositive()
  readonly value!: number;

  @IsDateString()
  readonly date!: string;

  @IsPositive()
  readonly installments!: number;
}

export default InstallmentPurchaseRegisterDTO;
