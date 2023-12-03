/* eslint-disable prettier/prettier */
import { Prisma } from '@prisma/client';
import { IsCPF } from 'class-validator-cpf';
import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class Client implements Prisma.ClientCreateInput {
  @IsString()
  @MinLength(3)
  name: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsCPF()
  cpf: string;

  orders?: Prisma.OrderCreateNestedManyWithoutClientInput;

  createdAt?: string | Date;

  updatedAt?: string | Date;
}
