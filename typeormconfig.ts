import { ConfigModule, ConfigService } from "@nestjs/config";
import { TypeOrmModuleAsyncOptions, TypeOrmModuleOptions } from "@nestjs/typeorm";


export default class TypeOrmConfig{
    static getOrmConfig(configService:ConfigService):TypeOrmModuleOptions{
        console.log({
            type: 'postgres',
            host: configService.get('DB_HOST'),
            port: configService.get('DB_PORT'),
            username: "postgres",
            password: configService.get('DB_PASSWORD'),
            database: configService.get('DB_DATABASE'),
            entities: [__dirname + '/../**/*.entity{.ts,.js}'],
            synchronize: true,
            logging:true
         })
        return{
            type: 'postgres',
            host: configService.get('DB_HOST'),
            port: configService.get('DB_PORT'),
            username: "postgres",
            password: configService.get('DB_PASSWORD'),
            database: configService.get('DB_DATABASE'),
            entities: [__dirname + '/../**/*.model{.ts,.js}'],
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