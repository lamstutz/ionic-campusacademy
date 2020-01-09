import { PeoplesService } from './../../../services/peoples.service';
import { Component, OnInit } from '@angular/core';
import { CountService } from '../../../services/count.service';
import { People } from 'src/app/models/people.interface';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  public value = this.countService.count;

  public myArray = [1, 2, 3, 4];
  public peoples: Array<any>;
  constructor(
    private countService: CountService,
    private peoplesService: PeoplesService
  ) { }

  ngOnInit() {
    console.log('ngOnInit hello :)');
    Promise.all([
      this.peoplesService.getAll(),
      this.peoplesService.getAll2()
    ])
      .then(this.concatPeoples)
      .then(peoples => this.peoplesToDetails(peoples))
      .then((peoplesDetail: Array<any>) => {
        this.peoples = peoplesDetail;
      })
      .catch(console.error)
      .finally(() => {
        console.log('FINALLY');
      });

    console.log('ngOnInit END');
  }

  concatPeoples([peoples1, peoples2]: People[][]) {
    console.log('getAll resolve peoples !');
    return peoples1.concat(peoples2);
  }

  peoplesToDetails(peoples: Array<People>) {
    return Promise.all(peoples.map(people => this.peoplesService.getDetail(people)))
      .catch(err => {
        console.error(err);
        return Promise.reject(err);
      });
  }

  increment() {
    this.value = this.countService.increment();
  }

  decrement() {
    this.value = this.countService.decrement();
  }
}
