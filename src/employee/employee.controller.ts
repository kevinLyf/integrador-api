import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Put,
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

  @Put('/:id')
  async edit(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: Employee,
  ): Promise<Employee> {
    return this.employeeService.edit(id, data);
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
