import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from "@nestjs/typeorm";

@Injectable()
export class MysqlConfigService implements TypeOrmOptionsFactory {

    constructor(private config: ConfigService) {}

    createTypeOrmOptions(): TypeOrmModuleOptions {
        return {
            type: 'mysql',
            host: this.config.get('MYSQL_HOST'),
            port: this.config.get('MYSQL_PORT'),
            username: this.config.get('MYSQL_USER'),
            password: this.config.get('MYSQL_PASSWORD'),
            database: this.config.get('MYSQL_DATABASE'),
            autoLoadEntities: true,
            synchronize: false,
            logging: true,
        }
    }
}