import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attribute-directive',
  templateUrl: './attribute-directive.component.html',
  styleUrls: ['./attribute-directive.component.css']
})
export class AttributeDirectiveComponent implements OnInit {

  public isSpecial = true;
  myClasses = {};
  myStyles = {};
  myProperty = '';

  add() {
    this.myClasses = {
      class1: true,
      class2: true,
      class3: true,
    };
  }

  setStyles() {
    // CSS styles: set per current state of component properties
    this.myStyles = {
      'font-style': true ? 'italic' : 'normal',
      'font-weight': true ? 'bold' : 'normal',
      'font-size': true ? '24px' : '12px',
    };
  }

  constructor() {}

  ngOnInit() {}

}
