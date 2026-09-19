import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from './entities/user.entity.js';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm/browser/repository/Repository.js';
import { PokemonClient } from '../clients /pokemon.client.js';
import { UserWithPokemonDto } from './dto/user-with-pokemon.dto.js';

@Injectable()
export class UserRepository {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,
        private readonly pokemonClient: PokemonClient,
    ) { }

    async create(user: User): Promise<User> {
        const newUser = this.userRepository.create(user);

        return this.userRepository.save(newUser);
    }

    async findAll(): Promise<User[]> {
        return this.userRepository.find();
    }

    async findOne(id: string): Promise<UserWithPokemonDto | null> {
        const user = await this.userRepository.findOneBy({ id });

        if (!user) {
            throw new NotFoundException(`User with ID ${id} not found`);
        }

        const pomekons = await this.pokemonClient.getPokemonDetailsByIds(user?.pokemonIds || []);

        return {
            ...user,
            pokemon: pomekons
        } as UserWithPokemonDto;
    }

    async update(id: string, updatedUser: Partial<User>): Promise<User | undefined> {
        const user = await this.userRepository.findOneBy({ id });

        if (user) {
            Object.assign(user, updatedUser);
            return this.userRepository.save(user);
        }

        return undefined;
    }

    async remove(id: string): Promise<boolean> {
        const user = await this.userRepository.findOneBy({ id });

        if (user) {
            await this.userRepository.remove(user);
            return true;
        }

        return false;
    }
}