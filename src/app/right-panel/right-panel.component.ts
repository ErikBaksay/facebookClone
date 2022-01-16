import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-right-panel',
  templateUrl: './right-panel.component.html',
  styleUrls: ['./right-panel.component.sass']
})
export class RightPanelComponent implements OnInit {

  ads = [1,2]
  contacts = [1,2,3,4,5]

  constructor() { }

  ngOnInit(): void {
  }

}
