import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
//import { take } from 'rxjs/operators';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss']
})

export class DescriptionComponent implements OnInit, OnDestroy {

  //private activatedSubscriber: Subscription

  constructor(private activatedRout: ActivatedRoute) { }

  ngOnInit(): void {
    // this.activatedRout.params
    //   .pipe(take(1))
    //   .subscribe(result => console.log(result));
    const id = this.activatedRout.snapshot.params.id;
    console.log(id);
  }

  ngOnDestroy(): void {
    console.log('Destroy');
    //this.activatedSubscriber.unsubscribe();
  }

}
