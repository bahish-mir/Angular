import { RouterModule } from '@angular/router';
import { DescriptionComponent } from './description.component';
import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    DescriptionComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path:'',
        component: DescriptionComponent
      }
    ])
  ]
})

export class DescriptionModule { }
