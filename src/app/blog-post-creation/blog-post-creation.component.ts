import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Post } from '../post';

@Component({
  selector: 'app-blog-post-creation',
  templateUrl: './blog-post-creation.component.html',
  styleUrls: ['./blog-post-creation.component.css']
})

export class BlogPostCreationComponent implements OnInit {
  @Output() newPost: EventEmitter<Post> = new EventEmitter();

  post: Post;

  constructor() { }

  ngOnInit() {
    this.resetPost();
  }

  _onPost() {
    this.newPost.emit(this.post);
    this.resetPost();
  }

  resetPost() {
    this.post = new Post("","","");
  }
}
