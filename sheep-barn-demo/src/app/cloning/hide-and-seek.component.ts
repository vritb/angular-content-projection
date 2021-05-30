import { Component } from '@angular/core';

@Component({
  selector: 'my-hide-and-seek',
  template: `
    <my-pasture-ng-if>
      <my-sheep></my-sheep>
    </my-pasture-ng-if>
  `
})
export class HideAndSeekComponent  {}
