import {
  Controller,
  Request,
  Post,
  UseGuards,
  Body,
  Inject,
} from '@nestjs/common';
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

  @Post('auth/create')
  async create(@Body() body) {
    return this.userService.create(body.username, body.password);
  }
}
