import { Component, Input, OnInit } from '@angular/core';
import { PostsService } from '../services/posts.service';
import { Post } from '../models/post.model';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {
  @Input() post: Post;
  @Input() index: number;

  constructor(private postsService: PostsService) {}

  ngOnInit() {
  }

  onLoveIt() {
    this.postsService.lovePost(this.index);
  }

  onDontLoveIt() {
    this.postsService.dontLovePost(this.index);
  }

  onRemovePost() {
    this.postsService.removePost(this.index);
  }



}
