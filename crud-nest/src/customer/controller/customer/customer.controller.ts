import { Body, Controller, Get, HttpException, HttpStatus, Param, ParseIntPipe, Post, Req, Res, UseInterceptors, UsePipes, ValidationPipe } from '@nestjs/common';
import { Request, Response } from 'express';
import { CreateCustomerDto } from 'src/customer/dtos/CreateCustomer.dto';
import { CustomerService } from 'src/customer/services/customer/customer.service';

@Controller('customer')
export class CustomerController {
    constructor(private customerService: CustomerService){}

    @Get('search/:id/')
    getCustomerById(
        @Param('id', ParseIntPipe ) id: number,
    ){
        const user =  this.customerService.findCustomerById(id);

        if(user) return user;
        else throw new HttpException("User Not Found", HttpStatus.BAD_REQUEST)
    }

    @Get('')
    getCustomer(){
        return this.customerService.findAllCustomer();
    }

    @Post('create')
    @UsePipes(ValidationPipe)
    createCustomer(
        @Body('') customer:CreateCustomerDto
    ){
        return this.customerService.createCustomer(customer);
    }
}
