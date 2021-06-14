import { Document } from 'mongoose';
export declare type UsersDocument = UsersEntity & Document;
export declare class UsersEntity {
    username: string;
    password: string;
}
export declare const usersSchema: import("mongoose").Schema<Document<UsersEntity, any>, import("mongoose").Model<any, any, any>, undefined>;
