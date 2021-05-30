import { Component } from '@angular/core';

@Component({
  selector: 'my-targeted',
  template: `
    <my-pasture>
      <my-sheep></my-sheep>
      <my-sheep></my-sheep>
      <my-elephant></my-elephant>
    </my-pasture>
  `
})
export class TargetedComponent  {}
