import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FlywayConfig } from './flyway-config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfigAsync } from 'typeormconfig';

@Module({
  imports: [TypeOrmModule.forRootAsync(typeOrmConfigAsync)],
  controllers: [AppController],
  providers: [AppService,FlywayConfig],
})
export class AppModule {}
