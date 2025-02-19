import { Test, TestingModule } from '@nestjs/testing';
import { RelicsController } from './relics.controller';
import { RelicsService } from './relics.service';
import { CreateRelicDto } from '../dto/create-relic.dto';
import { UpdateRelicDto } from '../dto/update-relic.dto';

describe('RelicsController', () => {
  let controller: RelicsController;
  let service: RelicsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RelicsController],
      providers: [
        {
          provide: RelicsService,
          useValue: {
            create: jest.fn(),
            update: jest.fn(),
            delete: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<RelicsController>(RelicsController);
    service = module.get<RelicsService>(RelicsService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should call service.create when creating a relic', async () => {
    const createRelicDto: CreateRelicDto = {
      setname: 'TestSet',
      mainstat: 'HP',
      substat1: 'ATK',
      substat2: 'DEF',
      substat3: 'SPD',
      substat4: 'CRIT',
    };
    await controller.create(createRelicDto);
    expect(service.create).toHaveBeenCalledWith(createRelicDto);
  });

  it('should call service.update when updating a relic', async () => {
    const id = '1';
    const updateRelicDto: UpdateRelicDto = {
      mainstat: 'ATK',
    };
    await controller.update(id, updateRelicDto);
    expect(service.update).toHaveBeenCalledWith(1, updateRelicDto);
  });

  it('should call service.delete when deleting a relic', async () => {
    const id = '1';
    await controller.delete(id);
    expect(service.delete).toHaveBeenCalledWith(1);
  });
});
