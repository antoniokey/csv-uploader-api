import {
  Controller,
  ParseFilePipe,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';

import { UploadedFileTypeValidator } from '../../validators/uploaded-file/uploaded-file-type.validator';
import { UploadedFileFieldsValidator } from '../../validators/uploaded-file/uploaded-file-fields.validator';
import {
  allowedFileFields,
  allowedMimeTypes,
} from '../../constants/files.constants';

import { FilesService } from './files.service';
import { File } from './entities/file.entity';

@Controller('files')
export class FilesController {
  constructor(private readonly filesService: FilesService) {}

  @Post('/upload')
  @UseInterceptors(FileInterceptor('file'))
  public uploadFile(
    @UploadedFile(
      new ParseFilePipe({
        validators: [
          new UploadedFileTypeValidator({ fileTypes: allowedMimeTypes }),
          new UploadedFileFieldsValidator({ fileFiels: allowedFileFields }),
        ],
      }),
    )
    file: Express.Multer.File,
  ): Promise<File> {
    return this.filesService.upload(file);
  }
}
