import { Task } from './../interfaces/task.interface';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DataService {

  constructor(private http: HttpClient) { }

  public getTask(): Observable<Task[]> {
    return this.http.get<Task[]>('https://jsonplaceholder.typicode.com/users/1/todos');
  }

  // public deleteTask(id: number): Task[] {
  //   this.taskList = this.taskList.filter(item => item.id !== id);
  //   return this.taskList;
  // }

}
