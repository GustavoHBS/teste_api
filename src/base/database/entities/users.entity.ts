import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UsersDocument = UsersEntity & Document;

@Schema({
  collection: 'users',
})
export class UsersEntity {
  @Prop({
    required: true,
    unique: true,
  })
  username: string;

  @Prop({
    required: true,
  })
  password: string;
}

export const usersSchema = SchemaFactory.createForClass(UsersEntity);
