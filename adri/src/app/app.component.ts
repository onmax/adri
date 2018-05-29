import { Component, OnInit } from '@angular/core';
declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  static showE = e => {
    $(`.${e}`).show();
  };

  hideAll = () => {
    let elements = ['first', 'second'];
    elements.map(e => {
      $(`.${e}`).hide();
    });
  };
  toSecond() {
    this.hideAll();
    setTimeout(function() {
      AppComponent.showE('second');
    }, 300);
  }

  ngOnInit() {}
}
