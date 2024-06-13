import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TowDriver } from 'src/entity/tow_driver.entity';

@Module({
    imports:[TypeOrmModule.forFeature([TowDriver])]
})
export class TowDriverModule {}
