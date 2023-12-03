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
import { ProductService } from './product.service';
import { Product } from './product.model';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  async getAll(): Promise<Product[]> {
    return this.productService.getAll();
  }

  @Post()
  async create(@Body() data: Product): Promise<Product> {
    return this.productService.create(data);
  }

  @Put('/:id')
  async edit(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: Product,
  ): Promise<Product> {
    return this.productService.edit(id, data);
  }

  @Delete('/:id')
  async delete(@Param('id', ParseIntPipe) id: number): Promise<any> {
    return this.productService.delete(id);
  }
}
