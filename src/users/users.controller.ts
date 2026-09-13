import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { UsersService } from './users.service.js';
import { CreateUserDto } from './dto/create-user.dto.js';
import { UpdateUserDto } from './dto/update-user.dto.js';
import { User } from './entities/user.entity.js';
import { ApiBody, ApiResponse, ApiOkResponse, ApiTags, ApiCreatedResponse, ApiOperation, ApiParam } from '@nestjs/swagger';
import { UserResponseDto } from './dto/user-response.dto.js';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @ApiOperation({ summary: 'Create a new user' })
  @ApiCreatedResponse({ description: 'The user has been successfully created.', type: UserResponseDto })
  @ApiBody({ type: CreateUserDto })
  @Post()
  create(@Body() createUserDto: CreateUserDto): Promise<UserResponseDto> {
    return this.usersService.create(createUserDto);
  }

  @ApiOperation({ summary: 'Retrieve all users' })
  @ApiOkResponse({ description: 'List of all users', type: [UserResponseDto] })
  @Get()
  findAll(): Promise<UserResponseDto[]> {
    return this.usersService.findAll();
  }

  @ApiOperation({ summary: 'Retrieve a user by ID' })
  @ApiOkResponse({ description: 'The user with the specified ID', type: UserResponseDto })
  @ApiParam({ name: 'id', description: 'The ID of the user', type: String, example: 'aeb10d4c-44b4-4025-a430-823a0e7959c2' })
  @Get(':id')
  findOne(@Param('id') id: string): Promise<UserResponseDto | undefined> {
    return this.usersService.findOne(id);
  }

  @ApiOperation({ summary: 'Update a user by ID' })
  @ApiOkResponse({ description: 'The user with the specified ID has been successfully updated.', type: UserResponseDto })
  @ApiBody({ type: UpdateUserDto })
  @ApiParam({ name: 'id', description: 'The ID of the user', type: String, example: 'aeb10d4c-44b4-4025-a430-823a0e7959c2' })
  @Put(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto): Promise<UserResponseDto | undefined> {
    return this.usersService.update(id, updateUserDto);
  }

  @ApiOperation({ summary: 'Delete a user by ID' })
  @ApiOkResponse({ description: 'The user with the specified ID has been successfully deleted.' })
  @Delete(':id')
  remove(@Param('id') id: string): Promise<boolean> {
    return this.usersService.remove(id);
  }
}
