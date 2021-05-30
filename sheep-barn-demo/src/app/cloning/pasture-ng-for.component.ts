import { Component } from '@angular/core';

@Component({
  selector: 'my-pasture-ng-for',
  template: `
    <div class="fence">
      <ng-content *ngFor="let clone of clones"></ng-content>
    </div>
  `,
  host: {
    "[class.pasture]": "true"
  }
})
export class PastureNgForComponent  {
  clones = [1, 2, 3];
}
