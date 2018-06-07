import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { Post } from './models/post-model';
import { Subscription } from "rxjs/Subscription";
import { Router } from "@angular/router";
import { DonDeSangService } from './services/don-de-sang.service';
import { GroupeBPlusService } from './services/groupe-b-plus.service';
import { GroupeBmoinsService } from './services/groupe-b-moins.service';
import { GroupeOplusService } from './services/groupe-oplus.service';
import { GroupeAmoinsService } from './services/groupe-amoins.service';
import { GroupeAbplusService } from './services/groupe-abplus.service';
import { GroupeAbmoinsService } from './services/groupe-abmoins.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  posts: Post[];
  postsSubscription: Subscription;

 
  constructor(private donDeSangService: DonDeSangService,
              private groupeBPlusService: GroupeBPlusService,
              private groupeBmoinsService: GroupeBmoinsService,
              private groupeOplusService: GroupeOplusService,
              private groupeAmoinsService: GroupeAmoinsService,
              private groupeAbplusService: GroupeAbplusService,
              private groupeAbmoinsService: GroupeAbmoinsService,
               ){
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
    //Groupe A+
    this.postsSubscription = this.donDeSangService.postSubject.subscribe(
      (posts: Post[]) => {
        this.posts = posts;
      }
    )
    this.donDeSangService.getPosts();
    this.donDeSangService.emitPosts();
  

    //Groupe B+
    this.postsSubscription = this.groupeBPlusService.postSubject.subscribe(
      (posts: Post[]) => {
        this.posts = posts;
      }
    )
    this.groupeBPlusService.getBplus();
    this.groupeBPlusService.emitGroupeBplus();


    //Groupe B-
    this.postsSubscription = this.groupeBPlusService.postSubject.subscribe(
      (posts: Post[]) => {
        this.posts = posts;
      }
    )
    this.groupeBmoinsService.getGroupeBmoins();
    this.groupeBmoinsService.emitGroupeBmoins();

    //Groupe O-
    this.postsSubscription = this.groupeOplusService.postSubject.subscribe(
      (posts: Post[]) => {
        this.posts = posts;
      }
    )
    this.groupeOplusService.getOplus();
    this.groupeOplusService.emitGroupeOplus();

    //Groupe A-
     this.postsSubscription = this.groupeAmoinsService.postSubject.subscribe(
       (posts: Post[]) => {
         this.posts = posts;
       }
     )
     this.groupeAmoinsService.getAmoins();
     this.groupeAmoinsService.emitGroupeAmoins();

    //Groupe Ab+
    this.postsSubscription = this.groupeAbplusService.postSubject.subscribe(
      (posts: Post[]) => {
        this.posts = posts;
      }
    )
    this.groupeAbplusService.getABplus();
    this.groupeAbplusService.emitGroupeABplus();

    //Groupe Ab-
    this.postsSubscription = this.groupeAbplusService.postSubject.subscribe(
      (posts: Post[]) => {
        this.posts = posts;
      }
    )
    this.groupeAbmoinsService.getABmoins();
    this.groupeAbmoinsService.emitGroupeABmoins();

  }
  
  }

    
  


