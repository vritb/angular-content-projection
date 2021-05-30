import { Component } from '@angular/core';

@Component({
  selector: 'my-pasture',
  template: `
    <div class="fence">
      <ng-content select="my-sheep"></ng-content>
    </div>
    <ng-content></ng-content>
  `,
  host: {
    "[class.pasture]": "true"
  }
})
export class PastureComponent  {}
