import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {

  public taskForm: FormGroup;
  public taskName: FormControl;

  constructor() { }

  ngOnInit(): void {
    this.initFields();
    this.initForm();
  }

  public addTask(): void {
    if (this.taskForm.valid) {
      console.log(this.taskForm.value);

    }
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
