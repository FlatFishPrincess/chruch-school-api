import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats/cats.controller';
import { CatsService } from './cats/cats.service';
import { MinistryModule } from './ministry/ministry.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    MinistryModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
