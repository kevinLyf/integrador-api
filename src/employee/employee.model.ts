/* eslint-disable prettier/prettier */
import { Prisma } from '@prisma/client';
import { IsEmail, IsNotEmpty, IsNumber, IsString, MinLength } from 'class-validator';

export class Employee implements Prisma.EmployeeCreateInput {
 
  @IsString()
  @MinLength(3)
  name: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;
  
  @IsString()
  @IsNotEmpty()
  role: string;

  @IsNotEmpty()
  @IsNumber()
  salary: number;

  createdAt?: string | Date;

  updatedAt?: string | Date;
}
