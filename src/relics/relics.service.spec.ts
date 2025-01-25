import { Test, TestingModule } from '@nestjs/testing';
import { RelicsService } from './relics.service';

describe('RelicsService', () => {
  let service: RelicsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RelicsService],
    }).compile();

    service = module.get<RelicsService>(RelicsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
