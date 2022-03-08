import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

export class EmployeeDTO {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumber()
  @IsNotEmpty()
  salary: number;

  @IsString()
  @IsNotEmpty()
  department: string;
}
