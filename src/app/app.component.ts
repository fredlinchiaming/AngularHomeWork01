import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  url = 'http://blog.miniasp.com/';
  imgurl = '/assets/images/logo.png';

  word='';
  wordLen = 0;

  constructor() {
  }
  changeTitle(altKey: boolean) {
    if (altKey) {
      this.title  = 'The Will Will Web';
    }
  }
  Count(str : string)
  {
    this.wordLen = str.length;
  }
  Reset($event)
  {
    $event.value = '';
    this.Count('');
    console.log($event);
  }

}
