import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FlywayConfig } from './flyway-config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfigAsync } from 'typeormconfig';
import { HistoryModule } from './history/history.module';
import { UserModule } from './user/user.module';
import { CustomerModule } from './customer/customer.module';

@Module({
  imports: [TypeOrmModule.forRootAsync(typeOrmConfigAsync),
    HistoryModule, UserModule, CustomerModule
  ],
  controllers: [AppController],
  providers: [AppService,FlywayConfig],
})
export class AppModule {}
