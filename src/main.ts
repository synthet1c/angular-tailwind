import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './client/app/app.config';
import { AppComponent } from './client/app/app.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
