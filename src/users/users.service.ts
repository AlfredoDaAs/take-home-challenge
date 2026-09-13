import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto.js';
import { UpdateUserDto } from './dto/update-user.dto.js';
import { UserRepository } from './users.repository.js';
import { User } from './entities/user.entity.js';
import { UserResponseDto } from './dto/user-response.dto.js';

@Injectable()
export class UsersService {
  constructor(private readonly userRepository: UserRepository) {}

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

  async findOne(id: string): Promise<UserResponseDto | undefined> {
    const user = await this.userRepository.findOne(id);

    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    return user;
  }

  async update(id: string, updateUserDto: UpdateUserDto): Promise<UserResponseDto | undefined> {
    const user = await this.userRepository.findOne(id);

    console.log('user', id, user)
    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }

    return this.userRepository.update(id, updateUserDto);
  }

  async remove(id: string): Promise<boolean> {
    const user = await this.userRepository.findOne(id);

    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }

    return this.userRepository.remove(id);
  }
}
