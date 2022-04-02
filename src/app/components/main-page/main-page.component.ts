import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.sass']
})
export class MainPageComponent implements OnInit {

  desktop : boolean = true

  constructor() { }

  ngOnInit(): void {
    if (window.screen.width >= 768) {
      this.desktop = true;
    }else{
      this.desktop = false;
    }
  }
}
