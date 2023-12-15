import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { PageHeaderComponent } from '../../page-header.component';

@Component({
  selector: 'app-ng-if',
  standalone: true,
  imports: [NgIf, MatButtonModule, PageHeaderComponent],
  template: `
    <app-page-header>NgIf</app-page-header>

    <button mat-raised-button (click)="display = !display">
      Display / Hide
    </button>

    <p *ngIf="display" class="m-2">Hello World</p>
  `,
})
export default class NgIfComponent {
  display = true;
}
