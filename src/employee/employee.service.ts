import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { Employee } from './employee.model';
import { Prisma } from '@prisma/client';

@Injectable()
export class EmployeeService {
  constructor(private prismaService: PrismaService) {}

  async getAll(): Promise<Employee[]> {
    return this.prismaService.employee.findMany();
  }

  async getByEmail(email: string): Promise<Employee> {
    return this.prismaService.employee.findFirst({ where: { email } });
  }

  async getById(id: number): Promise<Employee> {
    return this.prismaService.employee.findUnique({ where: { id } });
  }

  async create(data: Employee): Promise<Employee> {
    const email = await this.getByEmail(data.email);

    if (email)
      throw new HttpException('Email already exists', HttpStatus.BAD_REQUEST);

    return this.prismaService.employee.create({ data });
  }

  async edit(id: number, data: Employee): Promise<Employee> {
    const employee = await this.getById(id);

    if (!employee)
      throw new HttpException('Employee Not Found', HttpStatus.BAD_REQUEST);

    return this.prismaService.employee.update({
      where: { id: id },
      data: data as Prisma.EmployeeUpdateInput,
    });
  }

  async delete(id: number): Promise<Employee> {
    const employee = await this.getById(id);

    if (!employee)
      throw new HttpException('Employee Not Found', HttpStatus.BAD_REQUEST);

    return this.prismaService.employee.delete({
      where: { id },
    });
  }
}
