import { Injectable } from '@angular/core';
import { Subject } from "rxjs/Subject";
import { Post } from "../models/post-model";
import * as firebase from "firebase";

@Injectable()
export class GroupeAbplusService {


  GroupeABplus: Post[] = [];
  postSubject = new Subject<Post[]>();

  constructor() {
  }

  emitGroupeABplus() {
    this.postSubject.next(this.GroupeABplus);
  }

  saveGroupeABplus() {
    firebase.database().ref('/GroupeABplus').set(this.GroupeABplus);
  }

  createNewPost(newPost: Post) {
    this.GroupeABplus.push(newPost);
    this.saveGroupeABplus();
    this.emitGroupeABplus();
  }

  getABplus() {
    firebase.database().ref('/GroupeABplus')
      .on('value', (data) => {
        this.GroupeABplus = data.val() ? data.val() : [];
        this.emitGroupeABplus();
      });
  }

}
