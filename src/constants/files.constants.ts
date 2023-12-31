import { FileDataKey, FileDatabaseKey } from '../enum/files.enum';

export const fileDataKeys = {
  [FileDataKey.Id]: FileDatabaseKey.DataId,
  [FileDataKey.UserName]: FileDatabaseKey.UserName,
  [FileDataKey.FirstName]: FileDatabaseKey.FirstName,
  [FileDataKey.LastName]: FileDatabaseKey.LastName,
  [FileDataKey.City]: FileDatabaseKey.City,
  [FileDataKey.Address]: FileDatabaseKey.Address,
  [FileDataKey.Zip]: FileDatabaseKey.Zip,
  [FileDataKey.CreditCardCode]: FileDatabaseKey.CreditCardCode,
  [FileDataKey.CVV]: FileDatabaseKey.CVV,
  [FileDataKey.Name]: FileDatabaseKey.Name,
  [FileDataKey.Date]: FileDatabaseKey.Date,
};

export const allowedMimeTypes: string[] = ['text/csv'];
export const allowedFileTypes: string[] = ['.csv'];

export const allowedFileFields: string[] = [
  FileDataKey.Id,
  FileDataKey.UserName,
  FileDataKey.FirstName,
  FileDataKey.LastName,
  FileDataKey.City,
  FileDataKey.Address,
  FileDataKey.Zip,
  FileDataKey.CreditCardCode,
  FileDataKey.CVV,
  FileDataKey.Name,
  FileDataKey.Date,
];
