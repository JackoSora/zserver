import { Injectable } from '@nestjs/common';
import { CreateRelicDto } from 'src/dto/create-relic.dto';
import { UpdateRelicDto } from 'src/dto/update-relic.dto';

@Injectable()
export class RelicsService {
    delete(arg0: number): any {
        throw new Error('Method not implemented.');
    }
    update(arg0: number, updateRelicDto: UpdateRelicDto): any {
        throw new Error('Method not implemented.');
    }
    create(createRelicDto: CreateRelicDto): any {
        throw new Error('Method not implemented.');
    }
}
