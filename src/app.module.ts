import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ClientModule } from './client/client.module';
import { PrismaService } from './database/prisma.service';
import { EmployeeModule } from './employee/employee.module';
import { AppService } from './app.service';
import { FinanceController } from './finance/finance.controller';
import { FinanceService } from './finance/finance.service';
import { FinanceModule } from './finance/finance.module';

@Module({
  imports: [EmployeeModule, ClientModule, FinanceModule],
  controllers: [AppController, FinanceController],
  providers: [PrismaService, AppService, FinanceService],
})
export class AppModule {}
