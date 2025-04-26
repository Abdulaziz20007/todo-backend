import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Todo } from './schemas/todo.schema';
import { Model } from 'mongoose';

@Injectable()
export class TodoService {
  constructor(@InjectModel(Todo.name) private TodoModel: Model<Todo>) {}
  create(createTodoDto: CreateTodoDto) {
    return this.TodoModel.create(createTodoDto);
  }

  findAll() {
    return this.TodoModel.find();
  }

  findOne(id: string) {
    return this.TodoModel.findById(id);
  }

  async update(id: string, updateTodoDto: UpdateTodoDto) {
    const todo = await this.TodoModel.findByIdAndUpdate(id, updateTodoDto, {
      new: true,
    });
    return todo;
  }

  remove(id: string) {
    return this.TodoModel.findByIdAndDelete(id);
  }
}
