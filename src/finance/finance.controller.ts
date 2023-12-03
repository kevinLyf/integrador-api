import {
  Body,
  Controller,
  Get,
  Post,
  Delete,
  Param,
  ParseIntPipe,
  Put,
} from '@nestjs/common';
import { Finance } from './finance.model';
import { FinanceService } from './finance.service';

@Controller('finance')
export class FinanceController {
  constructor(private readonly financeService: FinanceService) {}

  @Get()
  async getAll(): Promise<Finance[]> {
    return this.financeService.getAll();
  }

  @Post()
  async create(@Body() data: Finance): Promise<Finance> {
    return this.financeService.create(data);
  }

  @Put('/:id')
  async edit(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: Finance,
  ): Promise<Finance> {
    return this.financeService.edit(id, data);
  }

  @Delete('/:id')
  async delete(@Param('id', ParseIntPipe) id: number): Promise<Finance> {
    return this.financeService.delete(id);
  }
}
