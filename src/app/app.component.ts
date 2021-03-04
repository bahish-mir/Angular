import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public title = 'My first text!';
  public counter = 0;
  public myNumbers: number[] = [4, 6, 8, 12, 7, 0];
  public isTitleShow = true;
  public selectedValue: number;

  public increment(): void {
    this.counter++;
    this.myNumbers.push(this.counter);
    if (this.myNumbers.length > 10) {
      this.isTitleShow = false;
    }
  }


}
