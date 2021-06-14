import { Controller, Request, Post, UseGuards, Inject } from '@nestjs/common';
import { LocalAuthGuard } from 'src/base/guards/local-auth.guard';
import { IAuthService } from '../services/authService.interface';

@Controller('auth')
export class AuthController {
  constructor(@Inject('AuthService') private authService: IAuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }
}
