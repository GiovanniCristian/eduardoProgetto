import { Component, Input, Output , OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  @Input() type: string = 'text';
  @Input() placeholder?: string = '';

  @Output() valueChange = new EventEmitter<string>();

  newValue(value: string) {
    this.valueChange.emit(value);
  }


  constructor () {}

  ngOnInit(): void {

  }

}
