import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { Product } from './product.model';
import { Prisma } from '@prisma/client';

@Injectable()
export class ProductService {
  constructor(private prismaService: PrismaService) {}

  async getAll(): Promise<Product[]> {
    return this.prismaService.product.findMany();
  }

  async getById(id: number): Promise<Product> {
    return this.prismaService.product.findUnique({
      where: {
        id,
      },
    });
  }

  async create(data: Product): Promise<Product> {
    return this.prismaService.product.create({ data });
  }

  async edit(id: number, data: Product): Promise<Product> {
    const product = await this.getById(id);

    if (!product)
      throw new HttpException('Product Not Found', HttpStatus.BAD_REQUEST);

    return this.prismaService.product.update({
      where: { id: id },
      data: data as Prisma.ProductUpdateInput,
    });
  }

  async delete(id: number): Promise<Product> {
    const product = await this.getById(id);

    if (!product)
      throw new HttpException('Product Not Found', HttpStatus.BAD_REQUEST);

    return this.prismaService.product.delete({ where: { id } });
  }
}
