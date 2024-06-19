import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavigationComponent } from './navigation/navigation.component';

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NavigationComponent,
    HomeComponent,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent }
  
    ])

  ],

  providers: [],

})

export class AppModule {}
