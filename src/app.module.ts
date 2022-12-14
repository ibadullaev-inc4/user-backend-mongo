import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserSchema } from './user.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://user:jsvhFPM8Q6c8ddk6@user.lytqftu.mongodb.net/?retryWrites=true&w=majority'),
    MongooseModule.forFeature([{name: 'user', schema: UserSchema}])
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
