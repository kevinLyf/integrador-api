import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { Client } from '@prisma/client';
import { ClientService } from './client.service';

@Controller('client')
export class ClientController {
  constructor(private readonly clientService: ClientService) {}

  @Get()
  async getAll(): Promise<Client[]> {
    return this.clientService.getAll();
  }

  @Post()
  async create(@Body() data: Client): Promise<Client> {
    return this.clientService.create(data);
  }

  @Delete('/:id')
  async delete(@Param('id', ParseIntPipe) id: number): Promise<Client> {
    return this.clientService.delete(id);
  }
}
