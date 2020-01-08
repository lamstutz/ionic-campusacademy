import { PeoplesService } from './../../../services/peoples.service';
import { Component } from '@angular/core';
import { CountService } from '../../../services/count.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  public value = this.countService.count;

  public myArray = [1, 2, 3, 4];
  public peoples = this.peoplesService.getAll();
  constructor(
    private countService: CountService,
    private peoplesService: PeoplesService
  ) { }

  increment() {
    this.value = this.countService.increment();
  }

  decrement() {
    this.value = this.countService.decrement();
  }
}
