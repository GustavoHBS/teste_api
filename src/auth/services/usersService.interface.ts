import { UsersDocument } from 'src/base/database/entities/users.entity';

export interface IUsersService {
  findOne(username: string): Promise<UsersDocument | undefined>;

  create(username: string, password: string): Promise<UsersDocument>;
}
