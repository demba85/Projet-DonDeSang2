import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { Post } from "../models/post-model";
import { GroupeAbplusService } from '../services/groupe-abplus.service';

@Component({
  selector: 'app-groupe-abplus',
  templateUrl: './groupe-abplus.component.html',
  styleUrls: ['./groupe-abplus.component.css']
})
export class GroupeAbplusComponent implements OnInit {


  ABplusForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private groupeAbplusService: GroupeAbplusService,
    private router: Router) {
  }


  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.ABplusForm = this.formBuilder.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      age: ['', Validators.required],
      telephone: ['', Validators.required],
      // ville: ['', Validators.required],
      groupe: ['AB+', Validators.required]

    });

  }

  onSaveABplus() {
    const prenom = this.ABplusForm.get('prenom').value;
    const nom = this.ABplusForm.get('nom').value;
    const age = this.ABplusForm.get('age').value;
    const telephone = this.ABplusForm.get('telephone').value;
    // const ville = this.postForm.get('ville').value;
    const groupe = this.ABplusForm.get('groupe').value;
    const newPost = new Post(prenom, nom, age, telephone, groupe);
    console.log('Envoyé');
    this.groupeAbplusService.createNewPost(newPost);
    this.router.navigate(['/acceuil']);
  }

}
