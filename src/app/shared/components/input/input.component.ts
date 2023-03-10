import { Component, Input, Output , OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  // chiamate INPUT per da parent a child //
  @Input() type: string = 'text';
  @Input() placeholder?: string = '';

  // chiamata OUTPUT da child a parent //
  @Output() valueChange = new EventEmitter<string>();

  newValue(event: any) {
    this.valueChange.emit(event.target.value);
    console.log(event);
  }


  constructor () {}

  ngOnInit(): void {

  }

}
