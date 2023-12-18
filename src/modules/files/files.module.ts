import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { FilesController } from './files.controller';
import { FilesService } from './files.service';
import { filesProviders } from '../../providers/files.providers';
import { File } from './entities/file.entity';
import { FileData } from './entities/file-data.entity';

@Module({
  imports: [SequelizeModule.forFeature([File, FileData])],
  controllers: [FilesController],
  providers: [FilesService, ...filesProviders],
})
export class FilesModule {}
