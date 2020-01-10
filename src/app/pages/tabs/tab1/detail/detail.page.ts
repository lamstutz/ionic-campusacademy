import { Subscription } from 'rxjs';
import { People } from 'src/app/models/people.interface';
import { PeoplesService } from './../../../../services/peoples.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit, OnDestroy {

  private peopleId: string;
  public people: People;
  private sub: Subscription;

  constructor(private route: ActivatedRoute, private peopleService: PeoplesService) {
    console.log('hello detail !');
    this.peopleId = this.route.snapshot.paramMap.get('peopleId');
    console.log('peopleId = ', this.peopleId);
  }

  ngOnInit() {
    this.sub = this.peopleService.getDetail(this.peopleId).subscribe((people) => {
      this.people = people;
    });
  }

  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }

}
