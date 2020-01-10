import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  constructor(private route: ActivatedRoute) {
    console.log('hello detail !');
    const peopleId = this.route.snapshot.paramMap.get('peopleId');
    console.log('peopleId = ', peopleId);
  }

  ngOnInit() {
  }

}
