import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Post } from "../models/post-model";
import { DonDeSangService } from '../services/don-de-sang.service';
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.css']
})
export class AcceuilComponent implements OnInit {

   don = 'assets/images/dondesang.jpeg';

  GroupeAplus : Post[];
  postsSubscription: Subscription;

  constructor(private donDeSangService: DonDeSangService, router: Router) { }

  ngOnInit() {
    this.postsSubscription = this.donDeSangService.postSubject.subscribe(
      (GroupeAplus: Post[]) => {
        this.GroupeAplus = GroupeAplus;
      }
    )
    this.donDeSangService.getPosts();
    this.donDeSangService.emitPosts();

}

}
