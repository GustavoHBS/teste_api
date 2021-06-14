import { UsersService } from './users.service';
import { JwtService } from '@nestjs/jwt';
import { UsersDocument } from 'src/base/database/entities/users.entity';
export declare class AuthService {
    private usersService;
    private jwtService;
    constructor(usersService: UsersService, jwtService: JwtService);
    validateUser(username: string, pass: string): Promise<UsersDocument | null>;
    login(user: UsersDocument): Promise<{
        access_token: string;
    }>;
}
