import { forwardRef, Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AuthModule } from 'src/auth/auth.module';
import { Role } from 'src/roles/roles.model';
import { RolesModule } from 'src/roles/roles.module';
import { UserRoles } from 'src/roles/userRoles';
import { UsersController } from './users.controller';
import { User } from './users.model';
import { UsersService } from './users.service';

@Module({
   controllers: [UsersController],
   providers: [UsersService],
   imports: [SequelizeModule.forFeature([User]), RolesModule, forwardRef(() => AuthModule)],
   exports: [UsersService, AuthModule],
})
export class UsersModule {}
