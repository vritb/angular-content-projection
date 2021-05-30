import { Component } from '@angular/core';

@Component({
  selector: 'my-farm-no-portal',
  template: `
    <div class="barn">
      <ng-content *ngIf="!day"></ng-content>
    </div>

    <div class="outside">
      <ng-content *ngIf="day"></ng-content>
    </div>
  `,
  host: {
    "[class.no-portals]": "true",
    "[class.pasture]": "true",
    "[class.night]": "!day",
    "role": "button",
    "tabindex": "0",
    "(click)": "day = !day"
  }
})
export class FarmNoPortalComponent  {
  day = true;
}
