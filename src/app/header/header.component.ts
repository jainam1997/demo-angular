import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'header-root',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  productName: string = '';
  @Output() onSubmit: EventEmitter<string> = new EventEmitter();

  constructor() {}

  onChange(e: string) {
    console.log('VENT ', e);
    this.onSubmit.emit(e);
  }
}
