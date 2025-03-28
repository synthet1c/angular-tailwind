import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './client/app/app.component';
import { config } from './client/app/app.config.server';

const bootstrap = () => bootstrapApplication(AppComponent, config);

export default bootstrap;
