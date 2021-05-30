import { Component } from '@angular/core';

@Component({
  selector: 'my-farm-portal',
  template: `
    <div class="barn">
      <ng-container *ngIf="!day"
        [ngTemplateOutlet]="sheep">
      </ng-container>
    </div>

    <div class="outside">
      <ng-container *ngIf="day"
        [ngTemplateOutlet]="sheep">
      </ng-container>
    </div>

    <ng-template #sheep>
      <ng-content></ng-content>
    </ng-template>
  `,
  host: {
    "[class.portals]": "true",
    "[class.pasture]": "true",
    "[class.night]": "!day",
    "role": "button",
    "tabindex": "0",
    "(click)": "day = !day"
  }
})
export class FarmPortalComponent  {
  day = true;
}
