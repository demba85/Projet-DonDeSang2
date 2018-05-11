import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { Post } from "../models/post-model";
import { GroupeBPlusService } from '../services/groupe-b-plus.service';
import { Subscription } from "rxjs/Subscription";


@Component({
  selector: 'app-groupe-b-plus',
  templateUrl: './groupe-b-plus.component.html',
  styleUrls: ['./groupe-b-plus.component.css']
})
export class GroupeBPlusComponent implements OnInit {

  posts: Post[];
  postsSubscription: Subscription;

  postForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private groupeBPlusService: GroupeBPlusService,
    private router: Router) {
  }


  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.postForm = this.formBuilder.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      age: ['', Validators.required],
      telephone: ['', Validators.required],
      // ville: ['', Validators.required],
      groupe: ['B+', Validators.required]
      
    });

  }



  onSaveGroupeBplus() {
    const prenom = this.postForm.get('prenom').value;
    const nom = this.postForm.get('nom').value;
    const age = this.postForm.get('age').value;
    const telephone = this.postForm.get('telephone').value;
    // const ville = this.postForm.get('ville').value;
    const groupe = this.postForm.get('groupe').value;
    const newPost = new Post(prenom, nom, age, telephone, groupe);

    this.groupeBPlusService.createNewPost(newPost);
    this.router.navigate(['/acceuil']);
  }


}