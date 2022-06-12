import { Module } from '@nestjs/common';
import { CustomerController } from './controller/customer/customer.controller';
import { CustomerService } from './services/customer/customer.service';

@Module({
  controllers: [CustomerController],
  providers: [CustomerService]
})
export class CustomerModule {}
