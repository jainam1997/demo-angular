import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'filter-option-root',
  templateUrl: './filter-option.component.html',
  styleUrls: ['./filter-option.component.css'],
})
export class FilterOptionComponent {
  constructor() {}

  @Input() priceRange: any[] = [];
  @Input() brands: any[] = [];
  @Output() onSubmit: EventEmitter<any> = new EventEmitter();

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }

  OnFilter(field: string, item: any) {
    if (field === 'price') {
      const splitValue = item.name.split('-');
      this.onSubmit.emit({
        field: field,
        isChecked: item.value,
        value: [splitValue[0].trim(), splitValue[1].trim()],
      });
    } else {
      this.onSubmit.emit({
        field: field,
        isChecked: item.value,
        value: item.name,
      });
    }
    console.log('field ', field, ':: ', item);

  }
}
