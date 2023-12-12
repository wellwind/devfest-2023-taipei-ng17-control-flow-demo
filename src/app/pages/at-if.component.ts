import { PageHeaderComponent } from '../page-header.component';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-at-if',
  standalone: true,
  imports: [MatButtonModule, PageHeaderComponent],
  template: `
    <app-page-header>&#64;if</app-page-header>

    <button mat-raised-button (click)="display = !display">
      Display / Hide
    </button>

    @if (display){
    <p class="m-2">Hello World</p>
    }
  `,
})
export default class AtIfComponent {
  display = true;
}
