import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { Post } from "../models/post-model";
import { DonDeSangService } from '../services/don-de-sang.service';

@Component({
  selector: 'app-groupe-a-plus',
  templateUrl: './groupe-a-plus.component.html',
  styleUrls: ['./groupe-a-plus.component.css']
})
export class GroupeAPlusComponent implements OnInit {



  postForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private donDeSangService: DonDeSangService,
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
      groupe: ['A+', Validators.required]

    });
 
  }

  onSavePost() {
    const prenom = this.postForm.get('prenom').value;
    const nom = this.postForm.get('nom').value;
    const age = this.postForm.get('age').value;
    const telephone = this.postForm.get('telephone').value;
    // const ville = this.postForm.get('ville').value;
    const groupe = this.postForm.get('groupe').value;
    const newPost = new Post (prenom, nom, age, telephone, groupe);
    console.log('Envoyé');
    this.donDeSangService.createNewPost(newPost);
    this.router.navigate(['/acceuil']);
  }

}
