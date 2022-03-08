import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { EmployeesController } from './employees.controller';
import { EmployeeSchema } from './employees.schema';
import { EmployeesService } from './employees.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Employees', schema: EmployeeSchema }]),
  ],
  controllers: [EmployeesController],
  providers: [EmployeesService],
})
export class EmployeesModule {}
