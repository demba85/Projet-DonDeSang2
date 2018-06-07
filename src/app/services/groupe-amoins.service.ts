import { Injectable } from '@angular/core';
import { Subject } from "rxjs/Subject";
import { Post } from "../models/post-model";
import * as firebase from "firebase";

@Injectable()
export class GroupeAmoinsService {


  GroupeAmoins: Post[] = [];
  postSubject = new Subject<Post[]>();

  constructor() {
  }

  emitGroupeAmoins() {
    this.postSubject.next(this.GroupeAmoins);
  }

  saveGroupeAmoins() {
    firebase.database().ref('/GroupeAmoins').set(this.GroupeAmoins);
  }

  createNewPost(newPost: Post) {
    this.GroupeAmoins.push(newPost);
    this.saveGroupeAmoins();
    this.emitGroupeAmoins();
  }

  getAmoins() {
    firebase.database().ref('/GroupeAmoins')
      .on('value', (data) => {
        this.GroupeAmoins = data.val() ? data.val() : [];
        this.emitGroupeAmoins();
      });
  }
}

