import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//REACTIVE FORMS
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//service
import { DonDeSangService } from './services/don-de-sang.service';
import { GroupeBPlusService } from './services/groupe-b-plus.service';

import { AppComponent } from './app.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { HeaderComponent } from './header/header.component';

import { RouterModule, Routes } from "@angular/router";
import { GroupeAPlusComponent } from './groupe-a-plus/groupe-a-plus.component';
import { GroupeviewComponent } from './groupeview/groupeview.component';
import { GroupeBPlusComponent } from './groupe-b-plus/groupe-b-plus.component';
import { ComprendreComponent } from './comprendre/comprendre.component';
import { SoignéesComponent } from './soignées/soignées.component';
import { FooterComponent } from './footer/footer.component';
import { GroupeOPlusComponent } from './groupe-o-plus/groupe-o-plus.component';



const appRoutes: Routes = [
  { path: 'acceuil', component: AcceuilComponent },
  { path: 'don', component: GroupeAPlusComponent },
  { path: 'comprendre', component: ComprendreComponent },
  { path: 'soigné', component: SoignéesComponent },
  { path: 'view', component: GroupeviewComponent },
  { path: 'view1', component: GroupeBPlusComponent },
  { path: '', redirectTo: 'acceuil', pathMatch: 'full' },
  { path: '**', redirectTo: 'acceuil' }
];


@NgModule({
  declarations: [
    AppComponent,
    AcceuilComponent,
    HeaderComponent,
    GroupeAPlusComponent,
    GroupeviewComponent,
    GroupeBPlusComponent,
    ComprendreComponent,
    SoignéesComponent,
    FooterComponent,
    GroupeOPlusComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule
  ],
  providers: [DonDeSangService,
              GroupeBPlusService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
