import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { Post } from "../models/post-model";
import { GroupeAbplusService } from '../services/groupe-abplus.service';

@Component({
  selector: 'app-groupe-abmoins',
  templateUrl: './groupe-abmoins.component.html',
  styleUrls: ['./groupe-abmoins.component.css']
})
export class GroupeAbmoinsComponent implements OnInit {

  ABmoinsForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private groupeAbplusService: GroupeAbplusService,
    private router: Router) {
  }


  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.ABmoinsForm = this.formBuilder.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      age: ['', Validators.required],
      telephone: ['', Validators.required],
      // ville: ['', Validators.required],
      groupe: ['AB-', Validators.required]

    });

  }

  onSaveABmoins() {
    const prenom = this.ABmoinsForm.get('prenom').value;
    const nom = this.ABmoinsForm.get('nom').value;
    const age = this.ABmoinsForm.get('age').value;
    const telephone = this.ABmoinsForm.get('telephone').value;
    // const ville = this.postForm.get('ville').value;
    const groupe = this.ABmoinsForm.get('groupe').value;
    const newPost = new Post(prenom, nom, age, telephone, groupe);
    console.log('Envoyé');
    this.groupeAbplusService.createNewPost(newPost);
    this.router.navigate(['/acceuil']);
  }


}
