import { Injectable } from '@angular/core';
import { Post } from '../models/post.model';
import { Subject } from 'rxjs';
import * as firebase from 'firebase';
import DataSnapshot = firebase.database.DataSnapshot;

@Injectable()
export class PostsService {

  posts: Post[] = [];
  postsSubject = new Subject<Post[]>();

  emitPosts() {
    this.postsSubject.next(this.posts);
  }

  savePosts() {
    firebase.database().ref('/posts').set(this.posts);
  }

  getPosts() {
    firebase.database().ref('/posts')
      .on('value', (data: DataSnapshot) => {
        this.posts = data.val() ? data.val() : [];
        this.emitPosts();
      }
    );
  }

  constructor() {
    this.getPosts();
   }

  createNewPost(newPost: Post) {
     this.posts.push(newPost);
     this.savePosts();
     this.emitPosts();
  }

  removePost(index) {
    this.posts.splice(index, 1);
    this.savePosts();
    this.emitPosts();
  }

  lovePost(index: number) {
   this.posts[index].loveIts++;
   this.savePosts();
  }

  dontLovePost(index: number) {
    this.posts[index].loveIts--;
    this.savePosts();
   }

}
