import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { Post } from "../models/post-model";
import { GroupeOplusService } from '../services/groupe-oplus.service';

@Component({
  selector: 'app-groupe-o-plus',
  templateUrl: './groupe-o-plus.component.html',
  styleUrls: ['./groupe-o-plus.component.css']
})
export class GroupeOPlusComponent implements OnInit {

  OplusForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private groupeOplusService: GroupeOplusService,
    private router: Router) {
  }


  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.OplusForm = this.formBuilder.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      age: ['', Validators.required],
      telephone: ['', Validators.required],
      // ville: ['', Validators.required],
      groupe: ['O+', Validators.required]

    });

  }

  onSaveOplus() {
    const prenom = this.OplusForm.get('prenom').value;
    const nom = this.OplusForm.get('nom').value;
    const age = this.OplusForm.get('age').value;
    const telephone = this.OplusForm.get('telephone').value;
    // const ville = this.postForm.get('ville').value;
    const groupe = this.OplusForm.get('groupe').value;
    const newPost = new Post(prenom, nom, age, telephone, groupe);
    console.log('Envoyé');
    this.groupeOplusService.createNewPost(newPost);
    this.router.navigate(['/acceuil']);
  }

}
