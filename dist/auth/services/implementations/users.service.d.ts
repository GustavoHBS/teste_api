import { IUsersModel } from 'src/auth/models/usersModel.interface';
import { UsersDocument } from 'src/base/database/entities/users.entity';
export declare class UsersService {
    private usersModel;
    constructor(usersModel: IUsersModel);
    findOne(username: string): Promise<UsersDocument | undefined>;
    create(username: string, password: string): Promise<UsersDocument>;
}
