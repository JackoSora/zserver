import { Controller, Get } from '@nestjs/common';
import { CharactersService } from './characters.service';

@Controller('characters')
export class CharactersController {
  constructor(private readonly chara: CharactersService) {}
  @Get()
  async greet(): Promise<string> {
    const characters = await this.chara.findAll();
    characters.forEach((element) => {
      console.log(element.name);
    });
    return characters[0].name;
    ``;
  }
}
