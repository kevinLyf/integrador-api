/* eslint-disable prettier/prettier */
import { Prisma } from '@prisma/client';
import { IsNumber, IsString } from 'class-validator';

export class Product implements Prisma.ProductCreateInput {
  @IsString()
  name: string;

  @IsNumber()
  value: number;

  createdAt?: string | Date;
  updatedAt?: string | Date;
}
