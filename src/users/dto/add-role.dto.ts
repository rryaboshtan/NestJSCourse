import { IsNumber, IsString } from "class-validator";

export class AddRoleDto {
    @IsString({message: 'Must be a string'})
    readonly value: string;
    
    @IsNumber({}, {message: 'must be a number'})
   readonly userId: number;
}
