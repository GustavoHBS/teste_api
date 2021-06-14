import {
  BadRequestException,
  InternalServerErrorException,
} from '@nestjs/common';
import { Inject, Injectable } from '@nestjs/common';
import { IUsersModel } from 'src/auth/models/usersModel.interface';
import { UsersDocument } from 'src/base/database/entities/users.entity';

@Injectable()
export class UsersService {
  constructor(@Inject('UsersModel') private usersModel: IUsersModel) {}

  async findOne(username: string): Promise<UsersDocument | undefined> {
    return this.usersModel.findByUsername(username);
  }

  async create(username: string, password: string): Promise<any> {
    return this.usersModel
      .create(username, password)
      .then(() => {
        return {
          message: 'Usuário criado com sucesso',
        };
      })
      .catch(err => {
        if (err.code === 11000) {
          throw new BadRequestException({
            message:
              'Já existe um usuário com este username, tente novamente com outro username.',
          });
        } else {
          throw new InternalServerErrorException();
        }
      });
  }
}
