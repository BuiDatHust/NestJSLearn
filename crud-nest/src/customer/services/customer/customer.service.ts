import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from 'src/customer/dtos/CreateCustomer.dto';
import { Customer } from 'src/customer/types/Customer';

@Injectable()
export class CustomerService {
    private users : Customer[] = [
        {"id": 1, "name": "bcjcd dcd", email : "scsc"},
        {"id": 2, "name": "bc dd dcdjcd dcd", email : "scsc"},
        {"id": 3, "name": "azasw jcd dcd", email : "scsc"},
        {"id": 4, "name": "bcj vf cd dcd", email : "scsc"},
    ]

    findCustomerById(id){
        return this.users.find((user)=> user.id === id);
    }

    findAllCustomer(){
        return this.users;
    }

    createCustomer(newCustomer: CreateCustomerDto){
        this.users.push(newCustomer);
        return this.users;
    }
}
