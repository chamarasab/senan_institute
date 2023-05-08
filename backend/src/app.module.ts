import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {MongooseModule} from "@nestjs/mongoose";

@Module({
  imports: [
      MongooseModule.forRoot('mongodb+srv://chamara:JK9fDYJPpZJhLZNN@senan.hveg71u.mongodb.net/senan_db?retryWrites=true&w=majority')
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
