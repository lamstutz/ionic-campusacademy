import { People } from './../../models/people.interface';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss'],
})
export class PeopleComponent implements OnInit {

  @Input()
  people: People;

  constructor() {
    // console.log('constructor people : ', this.people);
  }

  ngOnInit() {
    // console.log('ngOnInit people : ', this.people);

  }

}
