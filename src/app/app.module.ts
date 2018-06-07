import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//REACTIVE FORMS
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//Angularefire2
import { AngularFireModule} from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

//service
import { DonDeSangService } from './services/don-de-sang.service';
import { GroupeBPlusService } from './services/groupe-b-plus.service';
import { GroupeBmoinsService } from './services/groupe-b-moins.service';
import { GroupeOplusService } from './services/groupe-oplus.service';
import { GroupeAmoinsService } from './services/groupe-amoins.service';
import { GroupeAbplusService } from './services/groupe-abplus.service';
import { GroupeAbmoinsService } from './services/groupe-abmoins.service';

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
import { GroupeBmoinsComponent } from './groupe-bmoins/groupe-bmoins.component';
import { GroupeAmoinsComponent } from './groupe-amoins/groupe-amoins.component';
import { GroupeAbplusComponent } from './groupe-abplus/groupe-abplus.component';
import { GroupeAbmoinsComponent } from './groupe-abmoins/groupe-abmoins.component';



const CONFIG = {
  apiKey: "AIzaSyATRWwJlGnzDnQXIq-WILGuQm7RKK5ZdRw",
  authDomain: "dondesang-c7810.firebaseapp.com",
  databaseURL: "https://dondesang-c7810.firebaseio.com",
  projectId: "dondesang-c7810",
  storageBucket: "dondesang-c7810.appspot.com",
  messagingSenderId: "596485316554"
};


const appRoutes: Routes = [
  { path: 'acceuil', component: AcceuilComponent },
  { path: 'don', component: GroupeAPlusComponent },
  { path: 'comprendre', component: ComprendreComponent },
  { path: 'soigné', component: SoignéesComponent },
  { path: 'view', component: GroupeviewComponent },
  { path: 'view1', component: GroupeBPlusComponent },
  { path: 'view2', component: GroupeBmoinsComponent},
  { path: 'view3', component: GroupeOPlusComponent },
  { path: 'view4', component: GroupeAmoinsComponent },
  { path: 'view5', component: GroupeAbplusComponent },
  { path: 'view6', component: GroupeAbmoinsComponent },
  { path: '', redirectTo: 'acceuil', pathMatch: 'full'},
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
    GroupeOPlusComponent,
    GroupeBmoinsComponent,
    GroupeAmoinsComponent,
    GroupeAbplusComponent,
    GroupeAbmoinsComponent,
   ],

  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(CONFIG),
    AngularFireDatabaseModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule
  ],
  providers: [DonDeSangService,
              GroupeBPlusService,
              GroupeBmoinsService,
              GroupeOplusService,
              GroupeAmoinsService,
              GroupeAbplusService,
              GroupeAbmoinsService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
