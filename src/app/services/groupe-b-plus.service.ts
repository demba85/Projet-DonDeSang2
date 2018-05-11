import { Injectable } from '@angular/core';
import { Subject } from "rxjs/Subject";
import { Post } from "../models/post-model";
import * as firebase from "firebase";

@Injectable()
export class GroupeBPlusService {


  GroupeBplus: Post[] = [];
  postSubject = new Subject<Post[]>();

  constructor() {
  }

  emitGroupeBplus() {
    this.postSubject.next(this.GroupeBplus);
  }

  saveGroupeBplus() {
    firebase.database().ref('/GroupeBplus').set(this.GroupeBplus);
  }

  createNewPost(newPost: Post) {
    this.GroupeBplus.push(newPost);
    this.saveGroupeBplus();
    this.emitGroupeBplus();
  }
}
