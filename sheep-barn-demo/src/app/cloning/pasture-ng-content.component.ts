import { Component } from '@angular/core';

@Component({
  selector: 'my-pasture-ng-content',
  template: `
    <div class="fence">
      <ng-content></ng-content>
      <ng-content></ng-content>
      <ng-content></ng-content>
    </div>
  `,
  host: {
    "[class.pasture]": "true"
  }
})
export class PastureNgContentComponent  {}
