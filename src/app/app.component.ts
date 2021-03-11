import { Task } from './interfaces/task.interface';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public taskList: Task[] = [
    {
      id: 0,
      name: 'First task',
      description: 'Some description',
      isComplete: false,
      datetime: 12345678
    },
    {
      id: 1,
      name: 'Second task',
      description: 'Some description two',
      isComplete: false,
      datetime: 1234241143
    }
  ];
}
