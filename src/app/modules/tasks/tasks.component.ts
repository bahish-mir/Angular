import { DataService } from './../../services/data.service';
import { Task } from './../../interfaces/task.interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  public taskList: Task[] = [];
  //public taskList: Observable<Task[]>;

  constructor(private dataService: DataService) { } // сколько модулей мы подключаем в сервис - столько экземпляров сервиса и создается

  public ngOnInit(): void {
    //console.log('App component inited!');
    this.dataService.getTasks().subscribe(data => this.taskList = data);
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
