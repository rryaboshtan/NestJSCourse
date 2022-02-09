import { HttpCode, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class AuthService {
   constructor(private userService: UsersService, private jwtService: JwtService) {}

   async login(dto: CreateUserDto) {}

   async registration(dto: CreateUserDto) {
      const candidate = await this.userService.getUsersByEmail(dto.email);
      if (candidate) {
         throw new HttpException('User with such email is already exist', HttpStatus.BAD_REQUEST);
      }
       const hashPassword = await bcrypt.hash(dto.password, 5);
   }
}
