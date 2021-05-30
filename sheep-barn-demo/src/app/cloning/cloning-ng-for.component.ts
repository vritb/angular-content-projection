import { Component } from '@angular/core';

@Component({
  selector: 'my-cloning-ng-for',
  template: `
    <h3>Cloning-ng-for</h3>
    <br/>
    <my-pasture-ng-for>
      <my-sheep></my-sheep>
    </my-pasture-ng-for>
  `
})
export class CloningNgForComponent  {}
