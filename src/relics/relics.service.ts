import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Relic } from './relic.entity';
import { CreateRelicDto } from '../dto/create-relic.dto';
import { UpdateRelicDto } from '../dto/update-relic.dto';

@Injectable()
export class RelicsService {
  constructor(
    @InjectRepository(Relic)
    private readonly relicRepository: Repository<Relic>,
  ) {}

  async createRelic(createRelicDto: CreateRelicDto): Promise<Relic> {
    const normalizedSubstats = createRelicDto.substats.map(stat => stat.trim());
    const relicData = {
      Set: createRelicDto.setname,
      Mainstat: createRelicDto.mainstat,
      Rolls: normalizedSubstats,
      Slot: 0,
    };
    const relic = this.relicRepository.create(relicData);
    return await this.relicRepository.save(relic);
  }

  async updateRelic(id: string, updateRelicDto: UpdateRelicDto): Promise<Relic> {
    console.log('Update DTO received:', updateRelicDto);
    const relic = await this.relicRepository.findOneBy({ RelicUniqueID: id });
    if (!relic) {
      throw new NotFoundException(`Relic with id ${id} not found.`);
    }
    if (updateRelicDto.setname !== undefined) {
      relic.Set = updateRelicDto.setname;
    }
    if (updateRelicDto.mainstat !== undefined) {
      relic.Mainstat = updateRelicDto.mainstat;
    }
    if (updateRelicDto.substats !== undefined) {
      relic.Rolls = updateRelicDto.substats.map(stat => stat.trim());
    }
    if (updateRelicDto.slot !== undefined) {
      relic.Slot = Number(updateRelicDto.slot);
    }
    return await this.relicRepository.save(relic);
  }

  async deleteRelic(id: string): Promise<void> {
    const result = await this.relicRepository.delete({ RelicUniqueID: id });
    if (result.affected === 0) {
      throw new NotFoundException(`Relic with id ${id} not found.`);
    }
  }
}
