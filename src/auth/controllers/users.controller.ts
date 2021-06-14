import { Controller, Post, UseGuards, Body, Inject } from '@nestjs/common';
import { JwtAuthGuard } from 'src/base/guards/jwt-auth.guard';
import { IUsersService } from '../services/usersService.interface';

@Controller('users')
export class UsersController {
  constructor(@Inject('UsersService') private userService: IUsersService) {}

  @UseGuards(JwtAuthGuard)
  @Post('create')
  async create(@Body() body) {
    return this.userService.create(body.username, body.password);
  }
}
