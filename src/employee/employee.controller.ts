import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { Employee } from './employee.model';
import { EmployeeService } from './employee.service';

@Controller('employee')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  @Get()
  async getAll(): Promise<Employee[]> {
    return this.employeeService.getAll();
  }

  @Post()
  async create(@Body() data: Employee): Promise<Employee> {
    return this.employeeService.create(data);
  }

  @Delete('/:id')
  async delete(@Param('id', ParseIntPipe) id: number): Promise<any> {
    return this.employeeService.delete(id);
  }
}
