import { Task } from './../interfaces/task.interface';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class DataService {
  private taskList: Task[] = [
    {
      id: 0,
      name: 'First task',
      description: 'Some description',
      isComplete: false,
      datetime: 1615483089
    },
    {
      id: 1,
      name: 'Second task',
      description: 'Some description two',
      isComplete: true,
      datetime: 1615483089
    }
  ];

  public getTask(): Task[] {
    return this.taskList;
  }

  public deleteTask(id: number): Task[] {
    this.taskList = this.taskList.filter(item => item.id !== id);
    return this.taskList;
  }

}
