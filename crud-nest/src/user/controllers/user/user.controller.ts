import { Controller, Get, Inject } from '@nestjs/common';
import { UserService } from 'src/user/services/user/user.service';

@Controller('user')
export class UserController {
    constructor(@Inject('USER_SERVICE') private readonly userService: UserService){}

    @Get('')
    getUsers(){
        return this.userService.getUsers();
    }
}
