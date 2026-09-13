import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto.js';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateUserDto extends PartialType(CreateUserDto) {
    @ApiPropertyOptional({ description: 'The username of the user', type: String, example: 'Alfredo' })
    username?: string;

    @ApiPropertyOptional({ description: 'The email of the user', type: String, example: 'alfredo@example.com' })
    email?: string;

    @ApiPropertyOptional({ description: 'The password of the user', type: String, example: 'password123' })
    password?: string;
}
