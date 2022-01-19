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

  users = users_data
  myProfilePicture = "./assets/images/profile_pictures/0.jpg"
  peopleOnline = [1,3,6]

  posts = [1,2,3]

  constructor() { }

  ngOnInit(): void {
  }

}
