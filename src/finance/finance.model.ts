/* eslint-disable prettier/prettier */
import { Prisma } from '@prisma/client';
import { IsNumber, IsString, IsBoolean, MinLength } from 'class-validator';

export class Finance implements Prisma.FinanceCreateInput {
  @IsString()
  @MinLength(3)
  name: string;

  @IsNumber()
  value: number;

  @IsBoolean()
  profit: boolean;

  createdAt?: string | Date;

  updatedAt?: string | Date;
}
