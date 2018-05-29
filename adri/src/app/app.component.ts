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
    $(`.${e}`).css('display', 'flex');
  };

  hideAll = () => {
    let elements = ['first', 'second'];
    elements.map(e => {
      $(`.${e}`).css('display', 'none');
    });
  };
  toSecond() {
    this.hideAll();
    setTimeout(function() {
      AppComponent.showE('second');
    }, 300);

    let audioPlayer: HTMLAudioElement = <HTMLAudioElement>document.getElementById(
      'audio'
    );
    audioPlayer.play();
  }

  ngOnInit() {}
}
