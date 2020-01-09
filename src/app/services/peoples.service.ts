import { environment } from './../../environments/environment';
import { People } from './../models/people.interface';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeoplesService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Array<People>> {

    const url = `${environment.swapi.baseUrl}${environment.swapi.paths.people}`;
    return this.http.get(url).pipe(
      map((body: any) => {
        if (body && body.count >= 0) {
          return body.results as Array<People>;
        }
        return [];
      })
    );

  }

  getDetail(people: People): Promise<any> {
    const { name, gender } = people;
    return Promise.resolve({ name, gender });
  }
}
