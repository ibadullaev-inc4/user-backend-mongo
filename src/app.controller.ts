import { Body, Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { User } from './user.module';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  async createUser(@Body() userDto: User) {
    return this.appService.createUser(userDto)
  }
  
}
