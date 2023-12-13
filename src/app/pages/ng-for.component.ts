import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { PageHeaderComponent } from '../page-header.component';

@Component({
  selector: 'app-ng-for',
  standalone: true,
  imports: [NgFor, MatListModule, PageHeaderComponent],
  template: `
    <app-page-header>NgFor</app-page-header>

    <mat-list>
      <mat-list-item *ngFor="let item of items; let index = index">
        ({{ index + 1 }}) {{ item }}
      </mat-list-item>
    </mat-list>
  `,
})
export default class NgForComponent {
  items = ['Item 1', 'Item 2', 'Item 3'];
}
