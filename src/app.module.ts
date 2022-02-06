import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './users/users.model';
import { UsersModule } from './users/users.module';
import { RolesModule } from './roles/roles.module';
import { Role } from './roles/roles.model';
import { UserRoles } from './roles/userRoles';

@Module({
   controllers: [],
   providers: [],
   imports: [
      ConfigModule.forRoot({
        //  envFilePath: `${process.env.NODE_ENV}`,
         envFilePath: '.env',
      }),
      SequelizeModule.forRoot({
         dialect: 'postgres',
         host: process.env.POSTGRES_HOST,
         port: Number(process.env.POSTGRESS_PORT),
         username: process.env.POSTGRES_USER,
         password: process.env.POSTGRESS_PASSWORD,
         database: process.env.POSTGRES_DB,
         models: [User, Role, UserRoles],
         autoLoadModels: true,
         synchronize: true,
         pool: {
            max: 3,
            min: 1,
            idle: 10000,
         },
         dialectOptions: {
            ssl: {
               require: true,
               rejectUnauthorized: false,
            },
            keepAlive: true,
         },
         ssl: true,
         define: {
            timestamps: false,
         },
      }),
      UsersModule,
      RolesModule,
   ],
})
export class AppModule {}
