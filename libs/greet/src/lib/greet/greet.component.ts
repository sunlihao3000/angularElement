import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ng1-ce-wrapper-greet',
  templateUrl: './greet.component.html',
  styleUrls: ['./greet.component.scss']
})
export class GreetComponent implements OnInit {

  theName: string;

  constructor() {

  }

  ngOnInit() {
    this.theName = 'test';

  }

  clickChangeName() {

    if (this.theName === 'test') {
      this.theName = 'test3';
    } else {
      this.theName= 'test';
    }

  }


}
