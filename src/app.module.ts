import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MysqlConfigService } from './database/mysql-config.service';
import { DatabaseModule } from './database/database.module';
import { ActorModule } from './actor/actor.module';
import { CityModule } from './city/city.module';
import { CountryModule } from './country/country.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, envFilePath: ['.env', '.db.env'] }),
    /* TypeOrmModule.forRootAsync({
      /* useFactory: (config: ConfigService) => ({
        type: 'mysql',
        host: config.get('MYSQL_HOST'),
        port: config.get('MYSQL_PORT'),
        username: config.get('MYSQL_USER'),
        password: config.get('MYSQL_PASSWORD'),
        database: config.get('MYSQL_DATABASE'),
        autoLoadEntities: true,
        synchronize: false
      }),
      inject: [ConfigService]
      useClass: MysqlConfigService
    }), */
    DatabaseModule,
    ActorModule,
    CityModule,
    CountryModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
