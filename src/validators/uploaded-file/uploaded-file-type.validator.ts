import { FileValidator } from '@nestjs/common';

import { allowedFileTypes } from '../../constants/files.constants';

export interface UploadedFileTypeValidatorOptions {
  fileTypes: string[];
}

export class UploadedFileTypeValidator extends FileValidator {
  private allowedMimeTypes: string[] = [];

  constructor(
    protected readonly validationOptions: UploadedFileTypeValidatorOptions,
  ) {
    super(validationOptions);

    this.allowedMimeTypes = this.validationOptions.fileTypes;
  }

  public isValid(file?: Express.Multer.File): boolean {
    return this.allowedMimeTypes.includes(file.mimetype);
  }

  public buildErrorMessage(): string {
    const joinedAllowedFileTypes = allowedFileTypes.join(', ');

    return `Incorrect file type. Allowed file types: ${joinedAllowedFileTypes}`;
  }
}
