import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { DatabaseModule } from 'src/base/database/database.module';
import { AuthController } from './controllers/auth.controller';
import { UsersModel } from './models/implementations/users.model';
import { AuthService } from './services/implementations/auth.service';
import { UsersService } from './services/implementations/users.service';
import { JwtStrategy } from './strategy/jwt.strategy';
import { LocalStrategy } from './strategy/local.strategy';

@Module({
  imports: [
    DatabaseModule,
    PassportModule,
    JwtModule.registerAsync({
      useFactory: () => ({
        secret: process.env.AUTH_SECRET_KEY,
        signOptions: {
          expiresIn: process.env.EXPIRATION_SECONDS + 's',
        },
      }),
    }),
  ],
  controllers: [AuthController],
  providers: [
    AuthService,
    UsersService,
    LocalStrategy,
    JwtStrategy,
    UsersModel,
  ],
  exports: [AuthService, JwtModule],
})
export class AuthModule {}
