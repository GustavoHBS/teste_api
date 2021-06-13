import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  UsersDocument,
  UsersEntity,
} from 'src/base/database/entities/users.entity';
import { IUsersModel } from '../usersModel.interface';

@Injectable()
export class UsersModel implements IUsersModel {
  constructor(
    @InjectModel(UsersEntity.name)
    private usersEntity: Model<UsersDocument>,
  ) {}

  create(username: string, password: string): Promise<UsersDocument> {
    console.log(username, password);
    const newUser = new this.usersEntity({
      username,
      password,
    });
    return newUser.save();
  }

  async findByUsername(username: string): Promise<UsersDocument | undefined> {
    return this.usersEntity.findOne({
      username,
    });
  }
}
