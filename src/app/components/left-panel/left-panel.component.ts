import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-left-panel',
  templateUrl: './left-panel.component.html',
  styleUrls: ['./left-panel.component.sass']
})
export class LeftPanelComponent implements OnInit {

  links = [1,2,3,4,5,6,7]

  constructor() { }

  ngOnInit(): void {
  }

}
