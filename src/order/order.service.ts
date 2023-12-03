import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { Order } from '@prisma/client';

@Injectable()
export class OrderService {
  constructor(private prismaService: PrismaService) {}

  async getAll(): Promise<Order[]> {
    return this.prismaService.order.findMany();
  }

  async getById(id: number): Promise<Order> {
    return this.prismaService.order.findUnique({ where: { id } });
  }

  async create(data: Order): Promise<Order> {
    return this.prismaService.order.create({
      data: {
        finished: data.finished,
        client: {
          connect: { id: data.clientId },
        },
      },
    });
  }

  async edit(orderId: number, data: Order) {
    const order = await this.prismaService.order.findUnique({
      where: { id: orderId },
    });

    if (!order) {
      throw new HttpException(`Order not found`, HttpStatus.BAD_REQUEST);
    }

    return this.prismaService.order.update({
      where: { id: orderId },
      data: data,
    });
  }

  async delete(id: number): Promise<Order> {
    const order = await this.getById(id);

    if (!order)
      throw new HttpException('Order not found', HttpStatus.BAD_REQUEST);

    return this.prismaService.order.delete({
      where: { id },
    });
  }
}
