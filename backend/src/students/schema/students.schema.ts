import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type StudentsDocument = Students & Document;

@Schema({ collection: 'students' })
export class Students {
  @Prop()
  name: string;

  @Prop()
  contact: string;

  @Prop()
  image: string;
}

export const StudentsSchema = SchemaFactory.createForClass(Students);
