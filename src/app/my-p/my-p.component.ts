import { Component, Input } from '@angular/core';

@Component({
  selector: 'my-p',
  templateUrl: './my-p.component.html'
})
export class MyPComponent {
  @Input()
  name: string;
  @Input()
  bla: string;
}
