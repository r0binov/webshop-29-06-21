import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private translate: TranslateService) { }

  ngOnInit(): void {
    let lang = localStorage.getItem("language")
    if (lang) {
      this.translate.use(lang);
    } else {
      this.translate.use("ee")
      localStorage.setItem("language", "ee")
    }
  }
  

  useLanguage(language: string): void {
    this.translate.use(language);
    localStorage.setItem("langauge", language)
  }
}
