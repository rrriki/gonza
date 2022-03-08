import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Param,
  Post,
  Response,
} from '@nestjs/common';
import { EmployeeDTO } from 'src/dto/Employee.dto';
import { EmployeesService } from './employees.service';

@Controller('employees')
export class EmployeesController {
  constructor(private employeesService: EmployeesService) {}

  @Post()
  public async createEmploye(@Response() res, @Body() employee: EmployeeDTO) {
    try {
      const newEmployee = await this.employeesService.createEmployee(employee);
      return res.status(HttpStatus.OK).json(newEmployee);
    } catch (error) {
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get('/:department/salaries')
  public async getSalaryDetailsByDepartment(
    @Response() res,
    @Param('department') department,
  ) {
    try {
      const salaries = await this.employeesService.getSalaryDetailsByDepartment(
        department,
      );
      return res.status(HttpStatus.OK).json(salaries);
    } catch (error) {
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
