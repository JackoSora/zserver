import { Controller, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RelicsService } from './relics.service';
import { CreateRelicDto } from '../dto/create-relic.dto';
import { UpdateRelicDto } from '../dto/update-relic.dto';

@Controller('relics')
export class RelicsController {
  constructor(private readonly relicsService: RelicsService) {}

  @Post()
  async create(@Body() createRelicDto: CreateRelicDto): Promise<any> {
    return this.relicsService.create(createRelicDto);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateRelicDto: UpdateRelicDto,
  ): Promise<any> {
    return this.relicsService.update(+id, updateRelicDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<any> {
    return this.relicsService.delete(+id);
  }
}
