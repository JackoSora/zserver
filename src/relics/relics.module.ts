import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RelicsService } from './relics.service';
import { RelicsController } from './relics.controller';
import { Relic } from './relic.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Relic])],
  providers: [RelicsService],
  controllers: [RelicsController],
})
export class RelicsModule {}
