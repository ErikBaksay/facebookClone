import { my_account_data } from './../../my_account_data';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-left-panel',
  templateUrl: './left-panel.component.html',
  styleUrls: ['./left-panel.component.sass']
})
export class LeftPanelComponent implements OnInit {

  my_account_data = my_account_data

  constructor() { }

  ngOnInit(): void {
  }

}
