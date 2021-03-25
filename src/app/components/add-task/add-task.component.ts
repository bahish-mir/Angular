import { Task } from './../../interfaces/task.interface';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {

  public taskForm: FormGroup;
  public taskName: FormControl;

  @Output() public newTaskAdd = new EventEmitter<Task>();

  constructor() { }

  ngOnInit(): void {
    this.initFields();
    this.initForm();
  }

  public addTask(): void {
    if (this.taskForm.valid) {
      //console.log(this.taskForm.value);
      const title = this.taskForm.value;
      const task: Task = {
        id: Math.random(),
        title,
        complete: false
      };

      this.newTaskAdd.next(task);

      this.clearForm();
    }
  }

  public keyPressHandler(event: KeyboardEvent):void{
    if( event.code === 'Enter' ){
      this.addTask();
    }
  }

  private clearForm(): void{
    this.taskName.setValue('');
    this.taskName.markAsUntouched();
  }

  private initFields(): void {
    this.taskName = new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(20)]);
  }

  private initForm(): void {
    this.taskForm = new FormGroup({
      taskName: this.taskName
    });
  }

}
