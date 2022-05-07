import { Module } from '@nestjs/common';
import { KnexModule } from 'nest-knexjs';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    KnexModule.forRoot({
      config: {
        client: 'pg',
        version: '7.2',
        useNullAsDefault: true,
        connection: {
          host: '127.0.0.1',
          user: 'postgres',
          password: 'postgres',
          database: 'chef',
        },
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
