import { Component } from '@angular/core';

@Component({
  selector: 'my-pasture-ng-if',
  template: `
    <button class="fence" (click)="hiding = !hiding">
      <ng-content *ngIf="!hiding"></ng-content>
    </button>
  `,
  host: {
    "[class.pasture]": "true"
  }
})
export class PastureNgIfComponent  {
  hiding = false;
}
