import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto.js';
import { UpdateUserDto } from './dto/update-user.dto.js';
import { UserRepository } from './users.repository.js';
import { User } from './entities/user.entity.js';
import { UserResponseDto } from './dto/user-response.dto.js';
import { UserWithPokemonDto } from './dto/user-with-pokemon.dto.js';

@Injectable()
export class UsersService {
  constructor(private readonly userRepository: UserRepository) { }

  async create(createUserDto: CreateUserDto): Promise<UserResponseDto> {
    const createUser = {
      ...createUserDto
    } as User;

    const user = await this.userRepository.create(createUser);

    return user;
  }

  async findAll(): Promise<UserResponseDto[]> {
    return this.userRepository.findAll();
  }

  async findOne(id: string): Promise<UserWithPokemonDto | null> {
    return this.userRepository.findOne(id);
  }

  async update(id: string, updateUserDto: UpdateUserDto): Promise<UserResponseDto | undefined> {
    await this.userRepository.findOne(id);

    return this.userRepository.update(id, updateUserDto);
  }

  async remove(id: string): Promise<boolean> {
    await this.userRepository.findOne(id);

    return this.userRepository.remove(id);
  }
}
