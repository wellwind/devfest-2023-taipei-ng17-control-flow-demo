import { Component, Input, booleanAttribute } from '@angular/core';

@Component({
  selector: 'app-text',
  standalone: true,
  template: `
      <span [class.bg-blue-500]="highlight" [class.text-white]="highlight">text works!</span>
  `,
})
export class TextComponent {
  @Input({ transform: booleanAttribute }) highlight = false;
}
