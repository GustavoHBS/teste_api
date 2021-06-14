import { IAuthService } from '../services/authService.interface';
import { IUsersService } from '../services/usersService.interface';
export declare class AuthController {
    private authService;
    private userService;
    constructor(authService: IAuthService, userService: IUsersService);
    login(req: any): Promise<any>;
    create(body: any): Promise<import("../../base/database/entities/users.entity").UsersDocument>;
    isAlive(): Promise<{
        message: string;
    }>;
}
