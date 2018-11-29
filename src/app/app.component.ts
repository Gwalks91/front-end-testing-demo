import { Component } from '@angular/core';
import { FirstDropdownComponent } from './first-dropdown/first-dropdown.component';

import { Post } from './post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'test-demo';
  posts: Post[] = [];

  onNewPost(newPost) {
    this.posts.push(newPost);
  }
}
