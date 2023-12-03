import {
  Controller,
  Get,
  Post,
  Delete,
  Body,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { ClientService } from './client.service';
import { Client } from './client.model';

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
