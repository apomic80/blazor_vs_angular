import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: 'counter.component.html'
})
export class CounterComponent {

  currentCount = 0;

  incrementCount() {
      this.currentCount++;
  }

}
