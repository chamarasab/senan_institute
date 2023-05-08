import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { StudentsSchema } from './schema/students.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'Students',
        schema: StudentsSchema,
        collection: 'students',
      },
    ]),
  ],
})
export class StudentsModule {}
