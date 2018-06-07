import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { Post } from "../models/post-model";
import { GroupeBmoinsService } from '../services/groupe-b-moins.service';

@Component({
  selector: 'app-groupe-amoins',
  templateUrl: './groupe-amoins.component.html',
  styleUrls: ['./groupe-amoins.component.css']
})
export class GroupeAmoinsComponent implements OnInit {

  AmoinsForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private groupeBmoinsService: GroupeBmoinsService,
    private router: Router) {
  }


  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.AmoinsForm = this.formBuilder.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      age: ['', Validators.required],
      telephone: ['', Validators.required],
      // ville: ['', Validators.required],
      groupe: ['A-', Validators.required]

    });

  }

  onSaveGroupeAmoins() {
    const prenom = this.AmoinsForm.get('prenom').value;
    const nom = this.AmoinsForm.get('nom').value;
    const age = this.AmoinsForm.get('age').value;
    const telephone = this.AmoinsForm.get('telephone').value;
    // const ville = this.postForm.get('ville').value;
    const groupe = this.AmoinsForm.get('groupe').value;
    const newPost = new Post(prenom, nom, age, telephone, groupe);
    console.log('Envoyé');
    this.groupeBmoinsService.createNewPost(newPost);
    this.router.navigate(['/acceuil']);
  }

}
