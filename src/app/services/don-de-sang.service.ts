import { Injectable } from '@angular/core';
import { Subject } from "rxjs/Subject";
import { Post } from "../models/post-model";
import * as firebase from "firebase";

@Injectable()
export class DonDeSangService {


  GroupeAplus: Post[] = [];
  postSubject = new Subject<Post[]>();

  constructor() {
  }

  emitPosts() {
    this.postSubject.next(this.GroupeAplus);
  }

  savePosts() {
    firebase.database().ref('/GroupeAplus').set(this.GroupeAplus);
  }

   createNewPost(newPost: Post) {
     this.GroupeAplus.push(newPost);
     this.savePosts();
     this.emitPosts();
   }

  getPosts() {
    firebase.database().ref('/GroupeAplus')
      .on('value', (data) => {
        this.GroupeAplus = data.val() ? data.val() : [];
        this.emitPosts();
      });
  }
}
