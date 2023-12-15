import {
  AfterViewInit,
  Component,
  afterNextRender,
  afterRender,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { PageHeaderComponent } from '../../page-header.component';
import { ChildComponent } from './child.component';

@Component({
  selector: 'app-after-render',
  standalone: true,
  imports: [MatButtonModule, PageHeaderComponent, ChildComponent],
  template: `
    <app-page-header>
      afterRender & afterNextRender & ngAfterViewInit
    </app-page-header>

    <button mat-raised-button (click)="display = !display">
      Display / Hide
    </button>

    <div class="m-2">
      @if (display) {
        <app-child></app-child>
      }
    </div>
  `,
})
export default class AfterRenderComponent implements AfterViewInit {
  display = false;

  constructor() {
    afterNextRender(() => {
      console.log('Parent: afterNextRender');
    });
    afterRender(() => {
      console.log('Parent: afterRender');
    });
  }

  ngAfterViewInit() {
    console.log('Parent: ngAfterViewInit');
  }
}
