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

  public value$ = this.countService.count$;

  public myArray = [1, 2, 3, 4];
  public peoples: Array<any>;
  constructor(
    private countService: CountService,
    private peoplesService: PeoplesService
  ) { }

  async ngOnInit() {
    console.log('ngOnInit hello :)');
    // Promise.all([
    //   this.peoplesService.getAll(),
    //   this.peoplesService.getAll2()
    // ])
    //   .then(this.concatPeoples)
    //   .then(peoples => this.peoplesToDetails(peoples))
    //   .then((peoplesDetail: Array<any>) => {
    //     this.peoples = peoplesDetail;
    //   })
    //   .catch(console.error)
    //   .finally(() => {
    //     console.log('FINALLY');
    //   });

    try {
      this.peoples = await this.getPeoplesDetail();
    } catch (err) {
      console.error(err);
    }
    console.log('ngOnInit END');
  }

  async getPeoplesDetail(): Promise<any[]> {
    try {
      const peoplesArray = await Promise.all([
        this.peoplesService.getAll(),
        this.peoplesService.getAll2()
      ]).catch(err => {
        console.error(err);
        return Promise.reject(err);
      });
      const allPeoples = this.concatPeoples(peoplesArray);
      return await this.peoplesToDetails(allPeoples);
    } catch (error) {
      console.error(error);
    } finally {
      console.log('FINALLY');
    }
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
    this.countService.increment();
  }

  decrement() {
    this.countService.decrement();
  }
}
