import { UsersDocument } from 'src/base/database/entities/users.entity';

export interface IAuthService {
  validateUser(email: string, pass: string): Promise<UsersDocument | null>;
  login(user: UsersDocument);
}
