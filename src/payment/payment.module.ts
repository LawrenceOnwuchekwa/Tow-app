import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Payment } from 'src/entity/payment.entity';

@Module({
    imports:[TypeOrmModule.forFeature([Payment])]
})
export class PaymentModule {}
