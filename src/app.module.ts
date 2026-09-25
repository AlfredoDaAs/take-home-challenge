import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { UsersModule } from './users/users.module.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { dataSourceOptions } from './data-source.js'

const envFile = `.env${process.env.NODE_ENV ? '.' + process.env.NODE_ENV : ''}`;

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, envFilePath: envFile }),
    TypeOrmModule.forRootAsync({
      useFactory: async () => ({
        ...dataSourceOptions,
        autoLoadEntities: true,
      })
    }),
    UsersModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
