import { MatButtonModule } from '@angular/material/button';
import { Component } from '@angular/core';
import { PageHeaderComponent } from '../../page-header.component';
import { DemoComponent } from './demo.component';

@Component({
  selector: 'app-defer-trigger-on-hover',
  standalone: true,
  imports: [MatButtonModule, PageHeaderComponent, DemoComponent],
  template: `
    <app-page-header>Triggers of &#64;defer: on hover</app-page-header>

    <button #btn mat-raised-button>Hover me</button>

    @defer(on hover(btn)) {
    <app-demo></app-demo>
    } @placeholder (minimum 100ms) {
    <p>Placeholder</p>
    } @loading (after 300ms; minimum 1s) {
    <p>Loading...</p>
    } @error {
    <p>Failed to load demo</p>
    }
  `
})
export default class DeferTriggerOnHoverComponent {}
