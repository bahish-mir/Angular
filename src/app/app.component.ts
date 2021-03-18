import { Task } from './interfaces/task.interface';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  //(Двустороння привязка данных)
  // public testValue = 'Text';

  // public addOne(): void {
  //   this.testValue += '1';
  // }

  public deleteItem(id: number): void {

  }
}
