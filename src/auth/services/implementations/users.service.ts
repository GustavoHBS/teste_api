import { Inject, Injectable } from '@nestjs/common';
import { IUsersModel } from 'src/auth/models/usersModel.interface';
import { UsersDocument } from 'src/base/database/entities/users.entity';

@Injectable()
export class UsersService {
  constructor(@Inject('UsersModel') private usersModel: IUsersModel) {}

  async findOne(username: string): Promise<UsersDocument | undefined> {
    return this.usersModel.findByUsername(username);
  }

  async create(username: string, password: string): Promise<UsersDocument> {
    return this.usersModel.create(username, password);
  }
}
