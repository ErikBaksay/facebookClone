import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.sass']
})
export class FeedComponent implements OnInit {

  stories = [1,1,1,1]
  numberOfStories = this.stories.length

  posts = [1,2,3]

  constructor() { }

  ngOnInit(): void {
  }

}
