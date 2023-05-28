import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { UsersService } from './users.service';
import { User } from './domains/user.domain';
import { CreateUserDto } from './dtos/createUser.dto';

@Controller('users')
@ApiTags('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  /**
   * Get all users
   */
  @Get()
  get(): User[] {
    return this.usersService.get();
  }

  /**
   * Create a new user
   */
  @Post()
  @ApiCreatedResponse({
    description: 'The user has been successfully created',
    type: User,
  })
  create(@Body() createUserDto: CreateUserDto) {
    this.usersService.create(createUserDto);
  }
}
