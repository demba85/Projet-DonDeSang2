import { Injectable } from '@angular/core';
import { Subject } from "rxjs/Subject";
import { Post } from "../models/post-model";
import * as firebase from "firebase";

@Injectable()
export class GroupeAbmoinsService {


  GroupeABmoins: Post[] = [];
  postSubject = new Subject<Post[]>();

  constructor() {
  }

  emitGroupeABmoins() {
    this.postSubject.next(this.GroupeABmoins);
  }

  saveGroupeABmoins() {
    firebase.database().ref('/GroupeABmoins').set(this.GroupeABmoins);
  }

  createNewPost(newPost: Post) {
    this.GroupeABmoins.push(newPost);
    this.saveGroupeABmoins();
    this.emitGroupeABmoins();
  }

  getABmoins() {
    firebase.database().ref('/GroupeABmoins')
      .on('value', (data) => {
        this.GroupeABmoins = data.val() ? data.val() : [];
        this.emitGroupeABmoins();
      });
  }

}
