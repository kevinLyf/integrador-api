import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { Finance } from './finance.model';
import { Prisma } from '@prisma/client';

@Injectable()
export class FinanceService {
  constructor(private prismaService: PrismaService) {}

  async getAll(): Promise<Finance[]> {
    return this.prismaService.finance.findMany();
  }

  async getById(id: number): Promise<Finance> {
    return this.prismaService.finance.findUnique({
      where: {
        id,
      },
    });
  }

  async create(data: Finance): Promise<Finance> {
    return this.prismaService.finance.create({ data });
  }

  async delete(id: number): Promise<Finance> {
    const finance = await this.getById(id);

    if (!finance)
      throw new HttpException('Finance not found', HttpStatus.BAD_REQUEST);

    return this.prismaService.finance.delete({ where: { id } });
  }

  async edit(id: number, data: Finance): Promise<Finance> {
    const finance = await this.getById(id);

    if (!finance)
      throw new HttpException('Finance not found', HttpStatus.BAD_REQUEST);

    return this.prismaService.finance.update({
      where: { id: id },
      data: data as Prisma.FinanceUpdateInput,
    });
  }
}
