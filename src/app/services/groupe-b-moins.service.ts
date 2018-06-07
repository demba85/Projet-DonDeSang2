import { Injectable } from '@angular/core';
import { Subject } from "rxjs/Subject";
import { Post } from "../models/post-model";
import * as firebase from "firebase";

@Injectable()
export class GroupeBmoinsService {


  GroupeBmoins: Post[] = [];
  postSubject = new Subject<Post[]>();

  constructor() {
  }

  emitGroupeBmoins() {
    this.postSubject.next(this.GroupeBmoins);
  }

  saveGroupeBmoins() {
    firebase.database().ref('/GroupeBmoins').set(this.GroupeBmoins);
  }

  createNewPost(newPost: Post) {
    this.GroupeBmoins.push(newPost);
    this.saveGroupeBmoins();
    this.emitGroupeBmoins();
  }

  getGroupeBmoins() {
    firebase.database().ref('/GroupeBmoins')
      .on('value', (data) => {
        this.GroupeBmoins = data.val() ? data.val() : [];
        this.emitGroupeBmoins();
      });
  }
}

