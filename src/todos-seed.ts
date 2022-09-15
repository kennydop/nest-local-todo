import { TodoDTO } from './controllers/todo/todo.dto';

export const todos: TodoDTO[] = [
  {
    id: '1',
    title: 'Write a song',
    status: 'done',
  },
  {
    id: '2',
    title: 'Make a beat',
    status: 'in progress',
  },
  {
    id: '3',
    title: 'Record song',
    status: 'todo',
  },
  {
    id: '4',
    title: 'Send song to David Guetta',
    status: 'todo',
  },
];
