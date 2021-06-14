import { Model } from 'mongoose';
import { UsersDocument } from 'src/base/database/entities/users.entity';
import { IUsersModel } from '../usersModel.interface';
export declare class UsersModel implements IUsersModel {
    private usersEntity;
    constructor(usersEntity: Model<UsersDocument>);
    create(username: string, password: string): Promise<UsersDocument>;
    findByUsername(username: string): Promise<UsersDocument | undefined>;
}
