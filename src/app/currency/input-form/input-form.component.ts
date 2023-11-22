import { Component, Output, EventEmitter} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: InputFormComponent,
      multi: true
    }]
})

export class InputFormComponent implements ControlValueAccessor {

  @Output() onInChange = new EventEmitter<any>();

  field= "";

  constructor() { }

  onChange: any = () => {}
  onTouch: any = () => {}

  get value(): string {
		return this.field;
	}

  set value(val: string){
      this.field = val
      this.onChange(val)
      this.onTouch(val)
  }

  writeValue(value: any){
    this.value = value
  }

  registerOnChange(fn: any){
    this.onChange = fn
  }

  registerOnTouched(onTouched: Function) {
    this.onTouch = onTouched;
  }
}