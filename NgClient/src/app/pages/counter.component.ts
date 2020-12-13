import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h1>Counter</h1>
    <p>Current count: {{ currentCount }}</p>
    <button class="btn btn-primary" (click)="incrementCount()">Click me</button>
  `,
  styles: [
  ]
})
export class CounterComponent {

  currentCount = 0;

  incrementCount() {
      this.currentCount++;
  }

}
