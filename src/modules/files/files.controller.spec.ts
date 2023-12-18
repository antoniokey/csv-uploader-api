import { Test, TestingModule } from '@nestjs/testing';

import { FilesController } from './files.controller';
import { FilesService } from './files.service';

const createdMockFile = {
  dataValues: {
    id: 1,
    name: 'file',
    fileData: [],
  },
};

describe('FilesController', () => {
  let filesController: FilesController;

  const mockFileRepository = {
    findOrCreate: jest.fn(() => [createdMockFile]),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FilesController],
      providers: [
        FilesService,
        {
          provide: 'FILE_REPOSITORY',
          useValue: mockFileRepository,
        },
      ],
    }).compile();

    filesController = module.get<FilesController>(FilesController);
  });

  it('should be defined', () => {
    expect(filesController).toBeDefined();
  });

  describe('uploadFile', () => {
    it('should return uploaded csv file data', async () => {
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

      const uploadedFileData = await filesController.uploadFile(file);

      expect(uploadedFileData).toEqual(createdMockFile.dataValues);
    });
  });
});
