import { Component } from '@angular/core';
import { LanguageService } from './core/services/language.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mg-angular';

  constructor(
     langService: LanguageService
  ){}
  ngOnInit() {
  }
}
