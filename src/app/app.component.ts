import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { ChildComponentComponent } from './child-component/child-component.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{

  userName: any = "jai";

  constructor(){

  }

  ngOnInit(){

  }
   
}
