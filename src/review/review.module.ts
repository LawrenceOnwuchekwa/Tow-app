import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Review } from 'src/entity/review.entity';

@Module({
    imports:[TypeOrmModule.forFeature([Review])]
})
export class ReviewModule {}
