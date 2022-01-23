import { friends_data } from './../../friends_data';
import { users_data } from 'src/app/users_data';
import { ads_data } from './../../ads_data';
import { groups } from '../../groups_data';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-right-panel',
  templateUrl: './right-panel.component.html',
  styleUrls: ['./right-panel.component.sass']
})
export class RightPanelComponent implements OnInit {

  adsToDisplayIDs = [1,2]
  ads = ads_data
  contacts = [1,2,3,4,5]
  groups = groups
  users = users_data
  friendsIDs = friends_data

  constructor() { }

  ngOnInit(): void {
  }

}
