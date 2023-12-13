import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { PageHeaderComponent } from '../../page-header.component';
import { DemoComponent } from './demo.component';

@Component({
  selector: 'app-defer-blocks',
  standalone: true,
  imports: [MatButtonModule, PageHeaderComponent, DemoComponent],
  template: `
    <app-page-header>Blocks of &#64;defer</app-page-header>

    <button mat-raised-button (click)="display = !display">
      Display / Hide
    </button>

    @if (display) {
      <div class="block m-2">
        @defer {
          <app-demo></app-demo>
        } @placeholder (minimum 100ms) {
          <p>Placeholder</p>
        } @loading (after 300ms; minimum 1s) {
          <p>Loading...</p>
        } @error {
          <p>Failed to load demo</p>
        }
      </div>
    }
  `,
})
export default class DeferBlocksComponent {
  display = false;
}
