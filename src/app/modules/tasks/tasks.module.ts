import { EnterPressDirective } from './../../components/directives/enter.directive';
import { FirstDirective } from './../../components/directives/first.directive';
import { AddTaskComponent } from './../../components/add-task/add-task.component';
import { DateTimePipe } from './../../pipes/datetime.pipe';
import { NgModule } from "@angular/core";
import { TaskComponent } from "src/app/components/task/task.components";
import { TasksComponent } from './tasks.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TaskComponent,
    DateTimePipe,
    AddTaskComponent,
    FirstDirective,
    EnterPressDirective,
    TasksComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})

export class TasksModule {}
