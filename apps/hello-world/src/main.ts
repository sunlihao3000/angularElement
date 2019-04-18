import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { environment } from './environments/environment';
import { GreetModule } from '@ng1-ce-wrapper/greet';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(GreetModule)
  .catch(err => console.error(err));
