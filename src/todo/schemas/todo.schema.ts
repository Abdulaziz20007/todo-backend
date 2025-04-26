import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type TodoDocument = HydratedDocument<Todo>;

@Schema({ timestamps: true })
export class Todo {
  @Prop()
  title: string;

  @Prop({ default: false })
  is_done: boolean;

  @Prop({ default: false })
  is_archived: boolean;
}

export const TodoSchema = SchemaFactory.createForClass(Todo);
