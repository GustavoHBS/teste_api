import {
  Controller,
  Request,
  Post,
  UseGuards,
  Body,
  Inject,
  Get,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/base/guards/jwt-auth.guard';
import { LocalAuthGuard } from 'src/base/guards/local-auth.guard';
import { IAuthService } from '../services/authService.interface';
import { IUsersService } from '../services/usersService.interface';

@Controller()
export class AuthController {
  constructor(
    @Inject('AuthService') private authService: IAuthService,
    @Inject('UsersService') private userService: IUsersService,
  ) {}

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Post('auth/create')
  async create(@Body() body) {
    return this.userService.create(body.username, body.password);
  }

  @Get()
  async isAlive() {
    return {
      message: 'The server is alive',
    };
  }
}
