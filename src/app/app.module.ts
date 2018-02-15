import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }from '@angular/forms';
import { HttpModule }from '@angular/http';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CvComponent } from './cv/cv.component';
import { CreationComponent } from './creation/creation.component';
import { AccueilComponent } from './accueil/accueil.component';



@NgModule({
  declarations: [
    AppComponent,
    CvComponent,
    CreationComponent,
    AccueilComponent,
   

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot([
    {
        path: '',
        component: AccueilComponent
    },
    {
        path: 'accueil',
        component: AccueilComponent
    },
    {
        path: 'cv',
        component: CvComponent
    },
    {
        path: 'creation',
        component: CreationComponent
    }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
