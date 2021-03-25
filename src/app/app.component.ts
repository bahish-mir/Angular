import { DataService } from './services/data.service';
import { Task } from './interfaces/task.interface';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    public taskList: Task[] = [];
    //public taskList: Observable<Task[]>;

  constructor(private dataService: DataService) { } // сколько модулей мы подключаем в сервис - столько экземпляров сервиса и создается

  public ngOnInit(): void {
    //console.log('App component inited!');
    this.dataService.getTask().subscribe(data => this.taskList = data);
    //this.taskList=this.dataService.getTask();
  }

  //(Двустороння привязка данных)
  // public testValue = 'Text';

  // public addOne(): void {
  //   this.testValue += '1';
  // }

  public deleteItem(id: number): void {
    this.taskList = this.taskList.filter(item => item.id !== id);
  }

  public addNewTask(task: Task):void {
    //this.taskList.push(task);
    this.taskList = [...this.taskList, task];
  }
}

/*

httpClient

        PROMISE                 OBSERRABLE
     нельзя остановить             можно
    срабатывает один раз            +-
    then, catch, finaly       .subscrube, .pipe, .unsubscribe


https://jsonplaceholder.typicode.com/users/1/todos

хуки:
1) ngOnInit(){}
2) ngOnDestroy(){}

*/
