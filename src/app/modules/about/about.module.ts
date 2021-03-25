import { RouterModule } from '@angular/router';
import { AboutComponent } from './about.component';
import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AboutComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: AboutComponent
      }
    ])
  ]
})

export class AboutModule { }
