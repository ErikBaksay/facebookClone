import { my_account_data } from './../../my_account_data';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {

  my_account_data = my_account_data

  constructor() { }

  ngOnInit(): void {
  }

}
