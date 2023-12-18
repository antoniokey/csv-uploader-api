import {
  AllowNull,
  AutoIncrement,
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  PrimaryKey,
  Table,
  Unique,
} from 'sequelize-typescript';

import { File } from './file.entity';

@Table({
  underscored: true,
  tableName: 'files_data',
})
export class FileData extends Model {
  @PrimaryKey
  @AutoIncrement
  @AllowNull(false)
  @Unique
  @Column(DataType.INTEGER)
  id: number;

  @ForeignKey(() => File)
  @Column(DataType.INTEGER)
  fileId: number;

  @BelongsTo(() => File)
  file: File;

  @Column(DataType.INTEGER)
  dataId: number;

  @Column(DataType.STRING)
  userName: string;

  @Column(DataType.STRING)
  firstName: string;

  @Column(DataType.STRING)
  lastName: string;

  @Column(DataType.STRING)
  city: string;

  @Column(DataType.STRING)
  address: string;

  @Column(DataType.INTEGER)
  zip: number;

  @Column(DataType.INTEGER)
  creditCardCode: number;

  @Column(DataType.INTEGER)
  cvv: number;

  @Column(DataType.STRING)
  name: string;

  @Column(DataType.STRING)
  date: string;
}
