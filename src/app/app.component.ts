import { Component } from '@angular/core';
import { Carousel, Dropdown, initTE } from 'tw-elements';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mg-angular';

  ngOnInit() {
    initTE({ Carousel, Dropdown });
  }
}
