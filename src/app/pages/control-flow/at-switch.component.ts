import { Component } from '@angular/core';
import { PageHeaderComponent } from '../../page-header.component';

@Component({
  selector: 'app-at-switch',
  standalone: true,
  imports: [PageHeaderComponent],
  template: `
    <app-page-header>&#64;switch</app-page-header>

    <div>
      @switch (data) {
        @case ('1') {
          <div>1</div>
        }
        @case ('2') {
          <div>2</div>
        }
        @default {
          <div>default</div>
        }
      }
    </div>
  `,
})
export default class AtSwitchComponent {
  data = '1';
}
