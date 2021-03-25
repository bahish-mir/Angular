import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
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
        loadChildren: ()=> import('./modules/tasks/tasks.module').then(m => m.TasksModule)
      },
      {
        path: 'about',
        loadChildren: () => import('./modules/about/about.module').then(m => m.AboutModule)
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})

export class RoutingModule {}
