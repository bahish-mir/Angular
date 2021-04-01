import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss']
})

export class DescriptionComponent implements OnInit {

  constructor(private activatedRout: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRout.params.subscribe(result => console.log(result));
  }

}
