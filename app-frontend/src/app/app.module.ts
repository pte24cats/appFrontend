import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import  {NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CatsService } from '../services/cat.service';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { NavigationComponent } from './navigation/navigation.component';


@NgModule({
  declarations: [
    
  ],
  imports: [
    AppComponent,
    BrowserModule,
    FormsModule,
    NavigationComponent,
    HomeComponent,
    RouterModule.forRoot([
      { path: '', component: HomeComponent }
  
    ])

  ],
  providers: [
    CatsService,
    provideHttpClient(withFetch())
  ],

})

export class AppModule {}
