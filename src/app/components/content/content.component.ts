import { Component, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
})
export class ContentComponent {

  @Input()
  template?: TemplateRef<{ $implicit: number }>;

}
