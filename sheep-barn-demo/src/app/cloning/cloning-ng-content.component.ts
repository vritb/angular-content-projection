import { Component } from '@angular/core';

@Component({
  selector: 'my-cloning-ng-content',
  template: `
    <h3>Cloning ng-content</h3>
    <my-pasture-ng-content>
      <my-sheep></my-sheep>
    </my-pasture-ng-content>
  `
})
export class CloningNgContentComponent  {}
