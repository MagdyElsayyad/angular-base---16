import { Injectable, Signal, WritableSignal, signal } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LocalStorageService } from 'ngx-webstorage';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  public languages= {
    en : {
      text: "English",
      code: 'en',
      flag: ''
    },
    ar : {
      text: "Arabic",
      code: 'ar',
      flag: ''
    },
  };

  public langsArr: any[] = []
  private _currentLang: WritableSignal<string> =  signal("");
  public get currentLang() : Signal<string>{
    return this._currentLang.asReadonly();
  }
  constructor(
    public translate: TranslateService,
     private localStorageService: LocalStorageService
     ) {
      this.langsArr = Object.values(this.languages);
    let browserLang;
    this.translate.addLangs(Object.keys(this.languages));
    if (this.localStorageService.retrieve('lang')) {
      browserLang = this.localStorageService.retrieve('lang');
    }
    else {
      browserLang = translate.getBrowserLang();
    }
    this.setLanguage(browserLang.match(/en|ar/) ? browserLang : 'en');
  }
  public setLanguage(lang: string) {
    this.translate.use(lang);
    this.localStorageService.store('lang', lang);
    this._currentLang.set(lang);
    if(this.languages.ar.code === lang){
      document.documentElement.dir = 'rtl'
    }else{
      document.documentElement.dir = 'ltr'
    }
    document.documentElement.lang = lang;
  }

}
