import { fileDataKeys } from '../constants/files.constants';
import { FileData } from '../modules/files/entities/file-data.entity';

export const prepareFileData = (fileData: FileData[]): any => {
  return fileData
    .map((fileDataItem) => {
      const fileDataItemEntries = Object.entries(fileDataItem);

      const preparedFileDataItemEntries = fileDataItemEntries.map(
        (fileDataItemEntry) => [
          fileDataKeys[fileDataItemEntry[0]],
          +fileDataItemEntry[1] || fileDataItemEntry[1],
        ],
      );

      return Object.fromEntries(preparedFileDataItemEntries);
    })
    .map((fileDataItem) => ({ ...fileDataItem }));
};
