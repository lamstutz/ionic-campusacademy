import { Injectable } from "@angular/core";
import { Subject, BehaviorSubject, ReplaySubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CountService {

    count$ = new BehaviorSubject(0);



    constructor() {

    }


    decrement(): void {
        this.count$.next(this.count$.value - 1);
    }
    increment(): void {
        this.count$.next(this.count$.getValue() + 1);
    }
}