import { PartialType } from '@nestjs/mapped-types';
import { CreateRelicDto } from './create-relic.dto';

export class UpdateRelicDto {
  readonly setname?: string;
  readonly mainstat?: string;
  readonly substats?: string[];
  readonly slot?: number;
}
