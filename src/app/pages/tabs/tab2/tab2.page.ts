import { CountService } from './../../../services/count.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  get value() {
    return this.countService.count;
  }

  constructor(private countService: CountService) { }

}
