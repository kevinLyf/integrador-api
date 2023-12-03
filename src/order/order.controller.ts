import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { OrderService } from './order.service';
import { Order } from '@prisma/client';

@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Get()
  async getAll(): Promise<Order[]> {
    return this.orderService.getAll();
  }

  @Post()
  async create(@Body() data: Order): Promise<Order> {
    return this.orderService.create(data);
  }

  @Put('/:id')
  async edit(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: Order,
  ): Promise<Order> {
    return this.orderService.edit(id, data);
  }

  @Delete('/:id')
  async delete(@Param('id', ParseIntPipe) id: number): Promise<Order> {
    return this.orderService.delete(id);
  }
}
