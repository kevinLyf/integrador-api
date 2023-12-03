/* eslint-disable prettier/prettier */
import { Prisma } from '@prisma/client';
import { IsBoolean } from 'class-validator';

export class Order implements Prisma.OrderCreateInput {
  @IsBoolean()
  finished: boolean;
  client: Prisma.ClientCreateNestedOneWithoutOrdersInput;

  createdAt?: string | Date;
  updatedAt?: string | Date;
}
