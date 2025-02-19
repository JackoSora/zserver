import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { CharactersModule } from './characters/characters.module';
import { RelicsModule } from './relics/relics.module';
import { Character } from './characters/character.entity';
import { Relic } from './relics/relic.entity';
import { User } from './users/entities/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost', // Replace with your database host
      port: 5432, // Replace with your database port
      username: 'zadmin', // Replace with your database username
      password: '12thHarbinger', // Replace with your database password
      database: 'zzz_optimizer', // Replace with your database name
      entities: [Character, Relic, User], // Add your entities here
      synchronize: true, // Set to false in production
    }),
    TypeOrmModule.forFeature([Character, Relic]), // Register the Character entity
    UsersModule,
    CharactersModule,
    RelicsModule,
  ],
})
export class AppModule {}
