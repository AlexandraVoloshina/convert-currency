import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-select-currency',
  templateUrl: './select-currency.component.html',
  styleUrls: ['./select-currency.component.scss']
})
export class SelectCurrencyComponent implements OnInit {

  @Input() value: string = '';

  @Output() onChangeValue = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  updateValue(e: any){
    this.value = e;
    this.onChangeValue.emit(this.value);
  }

}
