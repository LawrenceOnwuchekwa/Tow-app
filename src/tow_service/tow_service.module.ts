import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TowService } from 'src/entity/tow_service.entity';

@Module({
    imports:[TypeOrmModule.forFeature([TowService])]
})
export class TowServiceModule {}
