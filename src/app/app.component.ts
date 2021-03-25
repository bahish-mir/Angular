import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

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
