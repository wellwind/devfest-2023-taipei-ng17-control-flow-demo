import { JsonPipe } from '@angular/common';
import { Component, Input, booleanAttribute } from '@angular/core';

@Component({
  selector: 'app-text',
  standalone: true,
  imports: [JsonPipe],
  template: `
    <div>
      <span [class.bg-blue-500]="highlight" [class.text-white]="highlight">
        text works!
      </span>
    </div>

    <div>
      <span>highlight: {{ highlight | json }}</span>
    </div>
  `,
})
export class TextComponent {
  @Input({ transform: booleanAttribute }) highlight = false;
}
