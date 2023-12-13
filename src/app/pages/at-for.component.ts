import { Component } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { PageHeaderComponent } from '../page-header.component';

@Component({
  selector: 'app-at-for',
  standalone: true,
  imports: [MatListModule, PageHeaderComponent],
  template: `
    <app-page-header>&#64;for</app-page-header>

    <mat-list>
      @for (item of items; track item; let index = $index) {
      <mat-list-item> ({{ index + 1 }}) {{ item }} </mat-list-item>
      }
    </mat-list>
  `,
})
export default class AtForComponent {
  items = ['Item 1', 'Item 2', 'Item 3'];
}
