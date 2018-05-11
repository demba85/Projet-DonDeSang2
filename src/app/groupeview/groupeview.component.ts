import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { Post } from "../models/post-model";
import { DonDeSangService } from '../services/don-de-sang.service';
import { GroupeBPlusService } from '../services/groupe-b-plus.service';

@Component({
  selector: 'app-groupeview',
  templateUrl: './groupeview.component.html',
  styleUrls: ['./groupeview.component.css']
})
export class GroupeviewComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
    private donDeSangService: DonDeSangService,
    private router: Router) {
  }

  ngOnInit() {
  }
  onNewPostAplus(){
    this.router.navigate(['/don']);
  }

  onNewPostBplus() {
    this.router.navigate(['/view1']);
  }


}
