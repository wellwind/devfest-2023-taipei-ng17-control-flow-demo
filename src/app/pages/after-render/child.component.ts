import {
  AfterViewInit,
  Component,
  afterNextRender,
  afterRender,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [MatButtonModule],
  template: `
    <div class="text-lg">Child Component</div>
    <button mat-raised-button (click)="counter = counter + 1">
      Counter: {{ counter }}
    </button>
  `,
})
export class ChildComponent implements AfterViewInit {
  counter = 0;

  constructor() {
    afterNextRender(() => {
      console.log('Child: afterNextRender');
    });

    afterRender(() => {
      console.log('Child: afterRender');
    });
  }

  ngAfterViewInit() {
    console.log('Child: ngAfterViewInit');
  }
}
