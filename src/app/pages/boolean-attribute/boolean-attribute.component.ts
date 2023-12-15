import { Component } from '@angular/core';
import { TextComponent } from './text.component';
import { PageHeaderComponent } from '../../page-header.component';

@Component({
  selector: 'app-boolean-attribute',
  standalone: true,
  imports: [PageHeaderComponent, TextComponent],
  template: `
   <app-page-header> boolean attribute </app-page-header>

   <app-text highlight></app-text>
  `
})
export default class BooleanAttributeComponent {}
