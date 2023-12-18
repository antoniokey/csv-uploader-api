import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { AppController } from './app.controller';
import { FilesModule } from './modules/files/files.module';
import { databaseConfig } from './database/database.config';

@Module({
  imports: [FilesModule, SequelizeModule.forRoot(databaseConfig)],
  controllers: [AppController],
})
export class AppModule {}
