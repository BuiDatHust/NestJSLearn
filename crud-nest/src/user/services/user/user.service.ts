import { SerializeUser } from '../../types/User';
import { Injectable } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { User } from 'src/user/types/User';

@Injectable()
export class UserService {
    private users: User[] =[
        {
            username: 'bcjsbc',
            password: '123'
        },
        {
            username: 'b cj sbc',
            password: '222'
        },
        {
            username: 'b cdc dvf cjsbc',
            password: '44'
        },
        {
            username: 'bb hnhn',
            password: '567'
        },
    ];

    getUsers(){
        return this.users.map((user) => plainToClass(SerializeUser,user))
    };
}
