import { Provider } from '@nestjs/common';

import { File } from '../modules/files/entities/file.entity';

export const filesProviders: Provider[] = [
  {
    provide: 'FILE_REPOSITORY',
    useValue: File,
  },
];
