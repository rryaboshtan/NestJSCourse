import { ApiProperty } from '@nestjs/swagger';
import { BelongsToMany, Column, DataType, Model, Table } from 'sequelize-typescript';
import { Role } from 'src/roles/roles.model';
import { UserRoles } from 'src/roles/userRoles.model';

interface UserCreationAttrs {
   email: string;
   password: string;
}

@Table({ tableName: 'users' })
export class User extends Model<User, UserCreationAttrs> {
   @ApiProperty({ example: '1', description: 'Unique id' })
   @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
   id: number;

   @ApiProperty({ example: 'user@mail.ru', description: 'Email' })
   @Column({ type: DataType.STRING, unique: true, allowNull: false })
   email: string;

   @ApiProperty({ example: '345345654', description: 'Password' })
   @Column({ type: DataType.STRING, allowNull: false })
   password: string;

   @ApiProperty({ example: 'true', description: 'Banned or not' })
   @Column({ type: DataType.BOOLEAN, defaultValue: false })
   banned: boolean;

   @ApiProperty({ example: 'some reason', description: 'Banned reason' })
   @Column({ type: DataType.STRING })
   banReason: string;

   @BelongsToMany(() => Role, () => UserRoles)
   roles: Role[];
}
