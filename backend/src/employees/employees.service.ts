import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Model } from 'mongoose';
import { EmployeeDTO } from 'src/dto/Employee.dto';

@Injectable()
export class EmployeesService {
  private logger = new Logger('EmployeesService');

  constructor(@InjectModel('Employees') private employeesModel: Model<any>) {}

  public async createEmployee(employee: EmployeeDTO) {
    try {
      const newEmployee = await this.employeesModel.create(employee);
      this.logger.log(`created employee`, newEmployee);
      return newEmployee;
    } catch (error) {
      this.logger.error('an error ocurred creating emplyee', error.message);
      throw error;
    }
  }

  public async getSalaryDetailsByDepartment(department: string) {
    try {
      const salaryDescription = await this.employeesModel.aggregate([
        { $match: { department } },
        {
          $group: {
            _id: '$department',
            min: { $min: '$salary' },
            avg: { $avg: '$salary' },
            max: { $max: '$salary' },
            employees: {
              $addToSet: {
                id: "$_id",
                name: "$name",
                salary: "$salary"
              }
            }
          },
        },
      ]);
      return salaryDescription[0];
    } catch (error) {
      this.logger.error('an error ocurred creating emplyee', error.message);
      throw error;
    }
  }
}
