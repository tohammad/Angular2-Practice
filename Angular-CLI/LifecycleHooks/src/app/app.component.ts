import { Component, OnInit, OnChanges, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy, OnChanges {
  title = 'app works!';

  constructor() {
    console.log("constructor");

  }

  ngOnChanges() {
    console.log("ngOnChanges");
  }

  ngOnInit() {
    console.log("ngOnInit");
  }
  ngDoCheck() {
    console.log("ngDoCheck");
  }

  
  ngOnDestroy() {
    console.log("ngOnDestroy");
  }
}
