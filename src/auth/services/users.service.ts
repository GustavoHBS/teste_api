import { Inject, Injectable } from '@nestjs/common';
import { UsersDocument } from 'src/base/database/entities/users.entity';
import { IUsersModel } from '../models/usersModel.interface';

@Injectable()
export class UsersService {
  constructor(@Inject('UsersModel') private usersModel: IUsersModel) {}

  async findOne(username: string): Promise<UsersDocument | undefined> {
    return this.usersModel.findByName(username);
  }

  async create(username: string, password: string): Promise<UsersDocument> {
    return this.usersModel.create(username, password);
  }
}
