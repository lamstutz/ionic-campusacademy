import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class CountService {

    count = 0;

    constructor() {

    }


    decrement(): number {
        return --this.count;
    }
    increment(): number {
        return ++this.count;
    }
}