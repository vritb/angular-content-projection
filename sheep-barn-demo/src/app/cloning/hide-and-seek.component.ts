import { Component } from '@angular/core';

@Component({
  selector: 'my-hide-and-seek',
  template: `
    <h3>Hide and Seek</h3>
    <my-pasture-ng-if>
      <my-sheep></my-sheep>
    </my-pasture-ng-if>
  `
})
export class HideAndSeekComponent  {}
