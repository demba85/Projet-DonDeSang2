import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { Post } from "../models/post-model";
import { GroupeBmoinsService } from '../services/groupe-b-moins.service';

@Component({
  selector: 'app-groupe-bmoins',
  templateUrl: './groupe-bmoins.component.html',
  styleUrls: ['./groupe-bmoins.component.css']
})
export class GroupeBmoinsComponent implements OnInit {

  BmoinsForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private groupeBmoinsService: GroupeBmoinsService,
              private router: Router) {
  }


  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.BmoinsForm = this.formBuilder.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      age: ['', Validators.required],
      telephone: ['', Validators.required],
      // ville: ['', Validators.required],
      groupe: ['B-', Validators.required]

    });

  }

  onSaveGroupeBmoins() {
    const prenom = this.BmoinsForm.get('prenom').value;
    const nom = this.BmoinsForm.get('nom').value;
    const age = this.BmoinsForm.get('age').value;
    const telephone = this.BmoinsForm.get('telephone').value;
    // const ville = this.postForm.get('ville').value;
    const groupe = this.BmoinsForm.get('groupe').value;
    const newPost = new Post(prenom, nom, age, telephone, groupe);
    console.log('Envoyé');
    this.groupeBmoinsService.createNewPost(newPost);
    this.router.navigate(['/acceuil']);
  }
}
