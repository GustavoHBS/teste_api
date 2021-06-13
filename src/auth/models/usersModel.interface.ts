import { UsersDocument } from 'src/base/database/entities/users.entity';

export interface IUsersModel {
  findByName(name: string): Promise<UsersDocument | undefined>;
  create(name: string, password: string): Promise<UsersDocument>;
}
