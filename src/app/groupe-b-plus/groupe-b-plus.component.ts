import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { Post } from "../models/post-model";
import { DonDeSangService } from '../services/don-de-sang.service';

@Component({
  selector: 'app-groupe-b-plus',
  templateUrl: './groupe-b-plus.component.html',
  styleUrls: ['./groupe-b-plus.component.css']
})
export class GroupeBPlusComponent implements OnInit {



  BplusForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private donDeSangService: DonDeSangService,
    private router: Router) {
  }


  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.BplusForm = this.formBuilder.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      age: ['', Validators.required],
      telephone: ['', Validators.required],
      // ville: ['', Validators.required],
      groupe: ['B+', Validators.required]

    });

  }

  onSaveGroupeBplus() {
    const prenom = this.BplusForm.get('prenom').value;
    const nom = this.BplusForm.get('nom').value;
    const age = this.BplusForm.get('age').value;
    const telephone = this.BplusForm.get('telephone').value;
    // const ville = this.postForm.get('ville').value;
    const groupe = this.BplusForm.get('groupe').value;
    const newPost = new Post(prenom, nom, age, telephone, groupe);
    console.log('Envoyé');
    this.donDeSangService.createNewPost(newPost);
    this.router.navigate(['/acceuil']);
  }

}

 

