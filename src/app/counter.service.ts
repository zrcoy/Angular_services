import { Injectable, EventEmitter } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class CounterService {
  count: number = 0;

  updateCounter = new EventEmitter<Number>();

  addCount() {
    this.count++;
    console.log(this.count);
    this.updateCounter.emit(this.count);
  }
}
