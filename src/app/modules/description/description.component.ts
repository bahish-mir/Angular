import { Task } from './../../interfaces/task.interface';
import { DataService } from './../../services/data.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
//import { take } from 'rxjs/operators';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss']
})

export class DescriptionComponent implements OnInit, OnDestroy {

  //private activatedSubscriber: Subscription
  public taskInfo: Observable<Task>;

  constructor(
    private activatedRout: ActivatedRoute,
    private DataService: DataService
  ) { }

  ngOnInit(): void {
    // this.activatedRout.params
    //   .pipe(take(1))
    //   .subscribe(result => console.log(result));
    const id = this.activatedRout.snapshot.params.id;
    //console.log(id);
    this.taskInfo = this.DataService.getTaskInfo(+id);

  }

  ngOnDestroy(): void {
    //console.log('Destroy');
    //this.activatedSubscriber.unsubscribe();
  }

}
