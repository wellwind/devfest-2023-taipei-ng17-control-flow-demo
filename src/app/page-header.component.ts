import { Component } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-page-header',
  standalone: true,
  imports: [MatDividerModule],
  template: `
    <h2 class="font-bold text-lg">
      <ng-content></ng-content>
    </h2>

    <mat-divider class="!mt-2 !mb-2"></mat-divider>
  `,
  styles: `:host{ display: block;}`,
})
export class PageHeaderComponent {}
