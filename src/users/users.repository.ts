import { Injectable } from '@nestjs/common';
import { User } from './entities/user.entity.js';

@Injectable()
export class UserRepository {
    private users: User[] = [];
    
    async create(user: User): Promise<User> {
        this.users.push(user);
        return user;
    }

    async findAll(): Promise<User[]> {
        return this.users;
    }

    async findOne(id: string): Promise<User | undefined> {
        return this.users.find(user => user.id === id);
    }

    async update(id: string, updatedUser: Partial<User>): Promise<User | undefined> {
        const userIndex = this.users.findIndex(user => user.id === id);
        if (userIndex !== -1) {
            this.users[userIndex] = { ...this.users[userIndex], ...updatedUser };
            return this.users[userIndex];
        }
        return undefined;
    }

    async remove(id: string): Promise<boolean> {
        const userIndex = this.users.findIndex(user => user.id === id);
        if (userIndex !== -1) {
            this.users.splice(userIndex, 1);
            return true;
        }
        return false;
    }
}