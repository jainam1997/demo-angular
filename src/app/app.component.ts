import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  productname!: string;
  onSubmit(event: string) {
    this.productname = event;
  }
}
