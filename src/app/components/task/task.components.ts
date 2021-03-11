import { Task } from './../../interfaces/task.interface';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: 'task.components.html',
  styleUrls: ['task.components.scss']
})

export class TaskComponent {
  @Input() public task: Task;
}

