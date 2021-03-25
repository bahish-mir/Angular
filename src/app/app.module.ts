import { EnterPressDirective } from './components/directives/enter.directive';
import { FirstDirective } from './components/directives/first.directive';
import { DateTimePipe } from './pipes/datetime.pipe';
import { TaskComponent } from './components/task/task.components';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AddTaskComponent } from './components/add-task/add-task.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    DateTimePipe,
    AddTaskComponent,
    FirstDirective,
    EnterPressDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
