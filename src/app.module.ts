import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientModule } from './client/client.module';
import { PrismaService } from './database/prisma.service';
import { EmployeeModule } from './employee/employee.module';
import { OrderModule } from './order/order.module';
import { FinanceModule } from './finance/finance.module';
import { ProductModule } from './product/product.module';

@Module({
  imports: [
    EmployeeModule,
    ClientModule,
    OrderModule,
    FinanceModule,
    ProductModule,
  ],
  controllers: [AppController],
  providers: [PrismaService, AppService],
})
export class AppModule {}
