import { Test, TestingModule } from '@nestjs/testing';
import { RelicsController } from './relics.controller';

describe('RelicsController', () => {
  let controller: RelicsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RelicsController],
    }).compile();

    controller = module.get<RelicsController>(RelicsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
