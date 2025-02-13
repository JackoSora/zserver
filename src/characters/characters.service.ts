import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Character } from './character.entity';

@Injectable()
export class CharactersService {
  constructor(
    @InjectRepository(Character)
    private charactersRepository: Repository<Character>,
  ) {}

  // Fetch all characters
  async findAll(): Promise<Character[]> {
    return this.charactersRepository.find();
  }

  // Fetch a single character by ID
  async findOne(id: string): Promise<Character> {
    const character = await this.charactersRepository.findOne({ where: { id } });
    if (!character) {
      throw new Error(`Character with ID ${id} not found`);
    }
    return character;
  }

  // Add a new character
  async create(character: Partial<Character>): Promise<Character> {
    const newCharacter = this.charactersRepository.create(character);
    return this.charactersRepository.save(newCharacter);
  }

  // Update a character
  async update(id: string, character: Partial<Character>): Promise<Character> {
    await this.charactersRepository.update(id, character);
    const updatedCharacter = await this.charactersRepository.findOne({ where: { id } });
    if (!updatedCharacter) {
      throw new Error(`Character with ID ${id} not found`);
    }
    return updatedCharacter;
  }

  // Delete a character
  async delete(id: string): Promise<void> {
    await this.charactersRepository.delete(id);
  }
}