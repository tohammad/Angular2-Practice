import { Component } from '@angular/core';
import { NgRedux } from 'ng2-redux';
import { IAppState } from "app/app.store";
import { INCREMENT } from "app/app.actions";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "app works!";
  counter = 0;
  constructor(private ngRedux: NgRedux<IAppState>) {}
  increment() {
    //alert(this.counter);
    //this.counter++;

    this.ngRedux.dispatch({ type: INCREMENT });
    var state = this.ngRedux.getState();
    this.counter = state.counter;
    
  }

  showValue() {
    var state = this.ngRedux.getState();
    this.counter = state.counter;
    alert(state.counter);
  }
}
