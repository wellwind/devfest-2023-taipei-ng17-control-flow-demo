import { Component } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { PageHeaderComponent } from '../../page-header.component';
import { DemoComponent } from './demo.component';

@Component({
  selector: 'app-defer-trigger-on-viewport',
  standalone: true,
  imports: [MatDividerModule, PageHeaderComponent, DemoComponent],
  template: `
    <app-page-header>Triggers of &#64;defer: on viewport</app-page-header>

    <p>scroll down</p>
    <p>scroll down</p>
    <p>scroll down</p>
    <p>scroll down</p>
    <p>scroll down</p>
    <p>scroll down</p>
    <p>scroll down</p>
    <p>scroll down</p>
    <p>scroll down</p>
    <p>scroll down</p>
    <p>scroll down</p>
    <p>scroll down</p>
    <p>scroll down</p>
    <p>scroll down</p>
    <p>scroll down</p>
    <p>scroll down</p>
    <p>scroll down</p>
    <p>scroll down</p>
    <p>scroll down</p>
    <p>scroll down</p>
    <p>scroll down</p>
    <p>scroll down</p>
    <p>scroll down</p>
    <p>scroll down</p>
    <p>scroll down</p>
    <p>scroll down</p>
    <p>scroll down</p>
    <p>scroll down</p>
    <p>scroll down</p>
    <p>scroll down</p>
    <p>scroll down</p>
    <p>scroll down</p>
    <p>scroll down</p>
    <p>scroll down</p>
    <p>scroll down</p>
    <p>scroll down</p>
    <p>scroll down</p>
    <p>scroll down</p>
    <p>scroll down</p>
    <p>scroll down</p>
    <p>scroll down</p>
    <p>scroll down</p>
    <p>scroll down</p>
    <p>scroll down</p>
    <p>scroll down</p>
    <p>scroll down</p>
    <p>scroll down</p>
    <p>scroll down</p>
    <p>scroll down</p>
    <p>almost...</p>
    <p>almost...</p>
    <p>almost...</p>
    <p>almost...</p>
    <p>almost...</p>
    <p>almost...</p>
    <p>almost...</p>
    <p>almost...</p>
    <p>almost...</p>
    <p>almost...</p>
    <p>almost...</p>
    <p>almost...</p>
    <p>almost...</p>

    <mat-divider></mat-divider>

    @defer(on viewport) {
    <app-demo></app-demo>
    } @placeholder (minimum 100ms) {
    <p>Placeholder</p>
    } @loading (after 300ms; minimum 1s) {
    <p>Loading...</p>
    } @error {
    <p>Failed to load demo</p>
    }
  `,
  styles: ``,
})
export default class DeferTriggerOnViewportComponent {}
