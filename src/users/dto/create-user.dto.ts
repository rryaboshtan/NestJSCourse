import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, Length } from 'class-validator';

export class CreateUserDto {
   @ApiProperty({ example: 'user@mail.ru', description: 'Email' })
   @IsString({ message: 'Must be a string' })
   @IsEmail({}, { message: 'Wrong email' })
   readonly email: string;

   @ApiProperty({ example: '345345654', description: 'Password' })
   @IsString({ message: 'Must be a string' })
   @Length(4, 16, { message: 'must be within 4 and 16' })
   readonly password: string;
}
