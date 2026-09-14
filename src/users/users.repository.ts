import { Injectable } from '@nestjs/common';
import { User } from './entities/user.entity.js';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm/browser/repository/Repository.js';

@Injectable()
export class UserRepository {
    constructor (
        @InjectRepository(User)
        private userRepository: Repository<User>,
    ) {}
    
    async create(user: User): Promise<User> {
        const newUser = this.userRepository.create(user);

        return this.userRepository.save(newUser);
    }

    async findAll(): Promise<User[]> {
        return this.userRepository.find();
    }

    async findOne(id: string): Promise<User | null> {
        return this.userRepository.findOneBy({ id });
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