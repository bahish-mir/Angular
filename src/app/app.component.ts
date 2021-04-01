import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private router: Router) {}

  // public goToTasks(): void {
  //   this.router.navigate(['tasks']);
  // }

  // public goToAbout(): void {
  //   this.router.navigate(['about']);
  // }

  // public goTo(address: string): void {
  //   this.router.navigate([address]);
  // }

}

/*

httpClient

        PROMISE                 OBSERRABLE
     нельзя остановить             можно
    срабатывает один раз            +-
    then, catch, finaly       .subscrube, .pipe, .unsubscribe


https://jsonplaceholder.typicode.com/users/1/todos

хуки:
1) ngOnInit(){}
2) ngOnDestroy(){}

*/
