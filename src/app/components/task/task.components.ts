import { Task } from './../../interfaces/task.interface';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: 'task.components.html',
  styleUrls: ['task.components.scss']
})

export class TaskComponent {
  @Input() public task: Task;
  @Output() public deleteEvent = new EventEmitter<number>();
  public isEdit: boolean;

  public deleteTask(): void {
    this.deleteEvent.next(this.task.id);
  }

  public toggleEdit(): void {
    this.isEdit = !this.isEdit;
  }
}

