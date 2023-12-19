import { FileValidator } from '@nestjs/common';

import { Readable } from 'stream';

import { ParseResult, parse } from 'papaparse';

import { FileData } from '../../modules/files/entities/file-data.entity';

export interface UploadedFileTypeValidatorOptions {
  fileFiels: string[];
}

export class UploadedFileFieldsValidator extends FileValidator {
  private allowedFileFields: string[] = [];

  constructor(
    protected readonly validationOptions: UploadedFileTypeValidatorOptions,
  ) {
    super(validationOptions);

    this.allowedFileFields = this.validationOptions.fileFiels;
  }

  public isValid(file?: Express.Multer.File): Promise<boolean> {
    const fileStream = Readable.from(file.buffer);

    return new Promise((resolve) => {
      parse(fileStream, {
        header: true,
        complete: async (results: ParseResult<FileData>): Promise<void> =>
          resolve(
            this.allowedFileFields.every((allowedFileField) =>
              (results.meta.fields || []).includes(allowedFileField),
            ),
          ),
      });
    });
  }

  public buildErrorMessage(): string {
    return `Failed to upload the file. Incorrect file fields`;
  }
}
