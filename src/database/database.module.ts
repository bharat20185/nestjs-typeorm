import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { MysqlConfigService } from "./mysql-config.service";
import { ConfigModule } from "@nestjs/config";

@Module({
    imports: [
        TypeOrmModule.forRootAsync({
            useClass: MysqlConfigService
        })
    ],
    exports: [TypeOrmModule]
})
export class DatabaseModule {}