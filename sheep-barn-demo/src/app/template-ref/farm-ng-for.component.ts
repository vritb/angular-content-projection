import { Component, TemplateRef } from '@angular/core';

import { FarmComponent } from './farm';

@Component({
  selector: 'my-farm-ng-for',
  template: `
    <div class="fence">
      <ng-content *ngFor="let sheep of flock; template: sheepTemplate"></ng-content>
    </div>
  `,
  host: {
    "[class.farm]": "true"
  },
  providers: [{ provide: FarmComponent, useExisting: FarmNgForComponent}]
})
export class FarmNgForComponent extends FarmComponent  {
  flock = [1, 2, 3];
}
