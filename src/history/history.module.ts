import { Module } from '@nestjs/common';
import { History } from '../entity/history.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports:[TypeOrmModule.forFeature([History])]
})
export class HistoryModule {}
