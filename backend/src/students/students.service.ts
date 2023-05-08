import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Students, StudentsDocument } from './schema/students.schema';
import { Model } from 'mongoose';

@Injectable()
export class StudentsService {
  constructor(
    @InjectModel(Students.name) private studentsModel: Model<StudentsDocument>,
  ) {}

  async getAll(): Promise<Students[]> {
    return this.studentsModel.find().exec();
  }
}
