import { Inject, Injectable } from '@nestjs/common';

import { Readable } from 'stream';

import { ParseResult, parse } from 'papaparse';

import { prepareFileData } from '../../utils/files.utils';
import { File } from './entities/file.entity';
import { FileData } from './entities/file-data.entity';

@Injectable()
export class FilesService {
  constructor(
    @Inject('FILE_REPOSITORY') private readonly fileRepository: typeof File,
  ) {}

  public upload(file: Express.Multer.File): Promise<File> {
    const fileStream = Readable.from(file.buffer);

    return new Promise((resolve, reject): void => {
      parse(fileStream, {
        header: true,
        complete: async (results: ParseResult<FileData>): Promise<void> => {
          try {
            const uploadedFile = await this.fileRepository.findOrCreate({
              where: { name: file.originalname },
              defaults: {
                name: file.originalname,
                fileData: prepareFileData(results.data),
              },
              include: ['fileData'],
            });
  
            resolve(uploadedFile[0].dataValues as File);
          } catch(err) {
            reject(err);
          }
        },
      });
    });
  }
}
