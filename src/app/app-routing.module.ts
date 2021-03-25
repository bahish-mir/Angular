import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: 'tasks', 
        pathMatch: 'full'
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})

export class RoutingModule {}
