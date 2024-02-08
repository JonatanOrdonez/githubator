import { IsNotEmpty, IsString } from 'class-validator';

export class NewMergeDto {
  @IsNotEmpty()
  @IsString()
  action: string;
}
