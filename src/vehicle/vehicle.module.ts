import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Vehicle } from 'src/entity/vehicle.entity';

@Module({
    imports:[TypeOrmModule.forFeature([Vehicle])]
})
export class VehicleModule {}
