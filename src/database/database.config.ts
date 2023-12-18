import { SequelizeModuleOptions } from '@nestjs/sequelize';

export const databaseConfig: SequelizeModuleOptions = {
  dialect: 'sqlite',
  storage: 'data.sqlite',
  autoLoadModels: true,
  synchronize: true,
};
