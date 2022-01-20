import { my_account_data } from './../../my_account_data';
import { posts_data } from './../../posts_data';
import { Component, OnInit } from '@angular/core';
import { stories_data } from 'src/app/stories_data';
import { users_data } from 'src/app/users_data';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.sass']
})
export class FeedComponent implements OnInit {

  stories = stories_data
  numberOfStories = this.stories.length

  my_account_data = my_account_data
  users = users_data
  peopleOnline = [1,3,6]

  posts = posts_data

  timePosted_temporary = ["5h","11h","1d"]

  constructor() { }

  ngOnInit(): void {
  }

}
