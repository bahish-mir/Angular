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
  static editTaskId: number;

  public deleteTask(): void {
    this.deleteEvent.next(this.task.id);
  }

  public toggleEdit(): void {
    if (this.isEdit) {
      TaskComponent.editTaskId = null;
    } else {
      TaskComponent.editTaskId = this.task.id;
    }
  }

  public get isEdit(): boolean {
    return TaskComponent.editTaskId === this.task.id;
  }
}

