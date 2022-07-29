import { Injectable } from '@nestjs/common';
import { User, UserDocument } from './user.module'
import { Model } from 'mongoose'
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class AppService {
  constructor(
    @InjectModel('user') private readonly userModel: Model<UserDocument> 
  ) {}

  // create a user
  async createUser(user: User): Promise<User>  {
    const newUser = new this.userModel(user)
    return newUser.save()
  }
}
