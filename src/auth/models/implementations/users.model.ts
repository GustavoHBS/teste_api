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

  create(name: string, password: string): Promise<UsersDocument> {
    const newUser = new this.usersEntity({
      name,
      password,
    });
    return newUser.save();
  }

  async findByName(name: string): Promise<UsersDocument | undefined> {
    return this.usersEntity.findOne({
      name,
    });
  }
}
