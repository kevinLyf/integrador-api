import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { Client } from './client.model';

@Injectable()
export class ClientService {
  constructor(private prismaService: PrismaService) {}

  async getAll(): Promise<Client[]> {
    return this.prismaService.client.findMany({
      include: {
        orders: true,
      },
    }) as unknown as Client[];
  }

  async getById(id: number): Promise<Client> {
    return this.prismaService.client.findUnique({ where: { id } });
  }

  async getByEmail(email: string): Promise<Client> {
    return this.prismaService.client.findFirst({ where: { email } });
  }

  async getByCpf(cpf: string): Promise<Client> {
    return this.prismaService.client.findFirst({ where: { cpf } });
  }

  async create(data: Client): Promise<Client> {
    const email = await this.getByEmail(data.email);
    const cpf = await this.getByCpf(data.cpf);

    if (email)
      throw new HttpException('Email already exists', HttpStatus.BAD_REQUEST);

    if (cpf)
      throw new HttpException('Cpf already exists', HttpStatus.BAD_REQUEST);

    return this.prismaService.client.create({ data });
  }

  async delete(id: number): Promise<any> {
    const client = await this.getById(id);

    if (!client)
      throw new HttpException('Client not found', HttpStatus.BAD_REQUEST);

    return this.prismaService.client.delete({
      where: { id },
    });
  }
}
