import { Test, TestingModule } from '@nestjs/testing';

import { FilesService } from './files.service';

const createdMockFile = {
  dataValues: {
    id: 1,
    name: 'file',
    fileData: [],
  },
};

describe('FilesService', () => {
  let service: FilesService;

  const mockFileRepository = {
    create: jest.fn(() => [createdMockFile]),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        FilesService,
        {
          provide: 'FILE_REPOSITORY',
          useValue: mockFileRepository,
        },
      ],
    }).compile();

    service = module.get<FilesService>(FilesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('upload', () => {
    it('should return uploaded csv file', async () => {
      const file: Express.Multer.File = {
        filename: null,
        mimetype: 'text/csv',
        path: null,
        size: null,
        buffer: Buffer.from('content'),
        originalname: 'name',
        destination: null,
        fieldname: null,
        stream: null,
        encoding: null,
      };

      const uploadedFile = await service.upload(file);

      expect(uploadedFile).toEqual(createdMockFile.dataValues);
    });
  });
});
