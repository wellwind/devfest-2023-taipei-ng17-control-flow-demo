import { NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { Component } from '@angular/core';
import { PageHeaderComponent } from '../page-header.component';

@Component({
  selector: 'app-ng-switch',
  standalone: true,
  imports: [NgSwitch, NgSwitchCase, NgSwitchDefault, PageHeaderComponent],
  template: `
    <app-page-header>NgSwitch</app-page-header>

    <div [ngSwitch]="data">
      <div *ngSwitchCase="'1'">1</div>
      <div *ngSwitchCase="'2'">2</div>
      <div *ngSwitchDefault>default</div>
    </div>
  `,
})
export default class NgSwitchComponent {
  data = '1';
}
