import { PartialType } from '@nestjs/mapped-types';
import { CreateRelicDto } from './create-relic.dto';

export class UpdateRelicDto extends PartialType(CreateRelicDto) {}
