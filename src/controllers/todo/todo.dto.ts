import { IsNumberString, IsString, IsNotEmpty } from 'class-validator';

export class TodoDTO {
  // @IsNumberString()
  id?: string;

  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  status: 'todo' | 'done' | 'in progress';
}
