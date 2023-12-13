import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { PageHeaderComponent } from './../../page-header.component';
import { DemoComponent } from './demo.component';
import { DemoDirective } from './demo.directive';
import { DemoPipe } from './demo.pipe';

@Component({
  selector: 'app-defer-basic',
  standalone: true,
  imports: [
    MatButtonModule,
    PageHeaderComponent,
    DemoComponent,
    DemoPipe,
    DemoDirective,
  ],
  template: `
    <app-page-header>Basic Usage of &#64;defer</app-page-header>

    <button mat-raised-button (click)="display = !display">
      Display / Hide
    </button>

    @if (display) {
      @defer {
        <app-demo class="block m-2"></app-demo>

        <div class="m-2">{{ 'test' | demo }}</div>

        <div class="m-2" appDemo>Hello World</div>
      }
    }
  `,
})
export default class DeferBasicComponent {
  display = false;
}
