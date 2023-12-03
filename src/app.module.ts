import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ClientModule } from './client/client.module';
import { PrismaService } from './database/prisma.service';
import { EmployeeModule } from './employee/employee.module';
import { AppService } from './app.service';

@Module({
  imports: [EmployeeModule, ClientModule],
  controllers: [AppController],
  providers: [PrismaService, AppService],
})
export class AppModule {}
