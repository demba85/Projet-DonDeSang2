import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { Post } from './models/post-model';
import { Subscription } from "rxjs/Subscription";
import { Router } from "@angular/router";
import { DonDeSangService } from './services/don-de-sang.service';
import { GroupeBPlusService } from './services/groupe-b-plus.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  posts: Post[];
  postsSubscription: Subscription;

 
  constructor(private donDeSangService: DonDeSangService){
    var config = {
      apiKey: "AIzaSyATRWwJlGnzDnQXIq-WILGuQm7RKK5ZdRw",
      authDomain: "dondesang-c7810.firebaseapp.com",
      databaseURL: "https://dondesang-c7810.firebaseio.com",
      projectId: "dondesang-c7810",
      storageBucket: "dondesang-c7810.appspot.com",
      messagingSenderId: "596485316554"
    };
    firebase.initializeApp(config);
  }

  ngOnInit() {
    this.postsSubscription = this.donDeSangService.postSubject.subscribe(
      (posts: Post[]) => {
        this.posts = posts;
      }
    )
    this.donDeSangService.getPosts();
    this.donDeSangService.emitPosts();
  }

}
