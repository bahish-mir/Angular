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

  //(Двустороння привязка данных)
  // public testValue = 'Text';

  // public addOne(): void {
  //   this.testValue += '1';
  // }

  public deleteItem(id: number): void {
    this.taskList = this.taskList.filter(item => item.id !== id);
  }
}
