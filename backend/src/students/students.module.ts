import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { StudentsSchema } from './schema/students.schema';
import { StudentsService } from './students.service';
import { StudentsController } from './students.controller';

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
  providers: [StudentsService],
  controllers: [StudentsController],
})
export class StudentsModule {}
