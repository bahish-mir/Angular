import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TaskComponent } from './components/task/task.components';
import { AboutComponent } from './modules/about/about.component';
import { TasksComponent } from './modules/tasks/tasks.component';

@NgModule({
  declarations: [
    TasksComponent,
    AboutComponent
  ],
  imports: [
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: 'tasks',
        pathMatch: 'full'
      },
      {
        path: 'tasks',
        component: TaskComponent
      },
      {
        path: 'about',
        component: AboutComponent
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})

export class RoutingModule {}
