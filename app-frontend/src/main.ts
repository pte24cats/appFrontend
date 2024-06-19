import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient, withFetch } from '@angular/common/http';

bootstrapApplication(AppComponent, {providers: [appConfig.providers, provideAnimations(), provideHttpClient(withFetch())]})
  .catch((err) => console.error(err));
