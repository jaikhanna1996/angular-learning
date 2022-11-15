import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural-directive',
  templateUrl: './structrul-directive.component.html',
  styleUrls: ['./structrul-directive.component.css']
})
export class StructuralDirectiveComponent implements OnInit {

  x = true;

  func(){
    this.x = !this.x;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
