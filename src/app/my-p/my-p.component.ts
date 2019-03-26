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
  @Input()
  foo: string = 'joo';

  title: string = 'nesto';
  prviBroj: number = 0;
  drugiBroj: number = 0;
  zbroj: number = 0;

  maca() {
    console.log('Ja sam mica maca... tralalaaalaaaa');
  }
  //   tipka(event) {
  //     this.title = event.target.value;
  //   }
  setPrviBroj(event) {
    this.prviBroj = parseInt(event.target.value);
  }
  setDrugiBroj(event) {
    this.drugiBroj = parseInt(event.target.value);
  }

  zbroji() {
    this.zbroj = this.prviBroj + this.drugiBroj;
  }
}
