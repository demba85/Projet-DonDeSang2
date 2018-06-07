import { Injectable } from '@angular/core';
import { Subject } from "rxjs/Subject";
import { Post } from "../models/post-model";
import * as firebase from "firebase";

@Injectable()
export class GroupeOplusService {


  GroupeOplus: Post[] = [];
  postSubject = new Subject<Post[]>();

  constructor() {
  }

  emitGroupeOplus() {
    this.postSubject.next(this.GroupeOplus);
  }

  saveGroupeOplus() {
    firebase.database().ref('/GroupeOplus').set(this.GroupeOplus);
  }

  createNewPost(newPost: Post) {
    this.GroupeOplus.push(newPost);
    this.saveGroupeOplus();
    this.emitGroupeOplus();
  }

  getOplus() {
    firebase.database().ref('/GroupeOplus')
      .on('value', (data) => {
        this.GroupeOplus = data.val() ? data.val() : [];
        this.emitGroupeOplus();
      });
  }
}
