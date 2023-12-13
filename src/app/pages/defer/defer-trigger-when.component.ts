import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { PageHeaderComponent } from '../../page-header.component';
import { DemoComponent } from './demo.component';

@Component({
  selector: 'app-defer-trigger-when',
  standalone: true,
  imports: [MatButtonModule, PageHeaderComponent, DemoComponent],
  template: `
    <app-page-header>Triggers of &#64;defer: when</app-page-header>

    <button mat-raised-button (click)="display = !display">
      Display / Hide
    </button>

    <div class="block m-2">
      @defer (when display) {
        <app-demo></app-demo>
      } @placeholder (minimum 100ms) {
        <p>Placeholder</p>
      } @loading (after 300ms; minimum 1s) {
        <p>Loading...</p>
      } @error {
        <p>Failed to load demo</p>
      }
    </div>
  `,
})
export default class DeferTriggerWhenComponent {
  display = false;
}
