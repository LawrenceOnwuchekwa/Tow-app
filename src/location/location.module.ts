import { Module } from '@nestjs/common';
import { Location } from '../entity/location.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports:[TypeOrmModule.forFeature([Location])]
})
export class LocationModule {}
