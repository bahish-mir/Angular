import { DataService } from './services/data.service';
import { Task } from './interfaces/task.interface';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private dataService: DataService) { }// сколько модулей мы подключаем в сервис - столько экземпляров сервиса и создается

  //(Двустороння привязка данных)
  // public testValue = 'Text';

  // public addOne(): void {
  //   this.testValue += '1';
  // }

  public deleteItem(id: number): void {

  }
}
