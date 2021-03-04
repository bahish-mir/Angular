import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public title: 'My first text!'; 
  public counter = 0;

  public increment(): void {
    this.counter++;
  }

}
