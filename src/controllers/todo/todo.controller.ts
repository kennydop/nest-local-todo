import { TodoDTO } from './todo.dto';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { todos } from '../../todos-seed';

const allTodos = todos;

@Controller('api/todo')
export class TodoController {
  @Get()
  getTodos(): TodoDTO[] {
    return allTodos;
  }

  @Get(':id')
  getTodo(@Param('id') id): TodoDTO {
    const index = allTodos.findIndex((td) => td.id === id);
    return allTodos[index];
  }

  @Post()
  addTodo(@Body() body: TodoDTO): TodoDTO {
    const id = allTodos.length + 1;
    body.id = id.toString();
    allTodos.push(body);
    return body;
  }

  @Put(':id')
  updateTodo(@Body() body: TodoDTO, @Param('id') id): TodoDTO {
    const index = allTodos.findIndex((td) => td.id === id);
    for (const key in body) {
      allTodos[index][key] = body[key];
    }
    return allTodos[index];
  }

  @Delete(':id')
  deleteTodo(@Param('id') id) {
    const index = allTodos.findIndex((td) => td.id === id);
    allTodos.splice(index, 1);
    return 'Todo Deleted';
  }
}
