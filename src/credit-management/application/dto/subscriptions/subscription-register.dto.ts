import { IsDateString, IsNumber, IsPositive, IsString } from 'class-validator';

class SubscriptionRegisterDTO {
  @IsString()
  readonly name!: string;

  @IsNumber()
  @IsPositive()
  readonly value!: number;

  @IsDateString()
  readonly date!: string;
}

export default SubscriptionRegisterDTO;
