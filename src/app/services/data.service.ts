import { take, tap } from 'rxjs/operators';
import { Task } from './../interfaces/task.interface';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DataService {

  private tasks: Task[] = [];

  constructor(private http: HttpClient) { }

  public getTask(): Observable<Task[]> {
    if (this.tasks.length > 0) {
      return of(this.tasks);
    } else {
      return this.http.get<Task[]>('https://jsonplaceholder.typicode.com/users/1/todos')
      .pipe(take(1), tap(data => this.tasks = data));
    }
  }

  // public deleteTask(id: number): Task[] {
  //   this.taskList = this.taskList.filter(item => item.id !== id);
  //   return this.taskList;
  // }

}
