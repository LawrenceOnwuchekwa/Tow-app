import { ConfigModule, ConfigService } from "@nestjs/config";
import { TypeOrmModuleAsyncOptions, TypeOrmModuleOptions } from "@nestjs/typeorm";
import { Customer } from "src/entity/customer.entity";
import { History } from "src/entity/history.entity";
import { Location } from "src/entity/location.entity";
import { Payment } from "src/entity/payment.entity";
import { Review } from "src/entity/review.entity";
import { TowDriver } from "src/entity/tow_driver.entity";
import { TowService } from "src/entity/tow_service.entity";
import { User } from "src/entity/user.entity";
import { Vehicle } from "src/entity/vehicle.entity";


export default class TypeOrmConfig{
    static getOrmConfig(configService:ConfigService):TypeOrmModuleOptions{
        return{
            type: 'postgres',
            host: configService.get('DB_HOST'),
            port: configService.get('DB_PORT'),
            username: "postgres",
            password: configService.get('DB_PASSWORD'),
            database: configService.get('DB_DATABASE'),
            entities: [User,Location,Payment,History,Vehicle,TowService,TowDriver,Review,Customer],
            synchronize: true,
            logging:true
         }
        }

    }
    export const typeOrmConfigAsync:TypeOrmModuleAsyncOptions = {
        imports:[ConfigModule],
        useFactory: async(configService:ConfigService):
        Promise<TypeOrmModuleOptions> => TypeOrmConfig.getOrmConfig(configService),
        inject:[ConfigService]
    };