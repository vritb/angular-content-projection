import { Component } from '@angular/core';

@Component({
  selector: 'my-targeted-with-container',
  template: `
    <my-pasture>
      <ng-container>
        <my-sheep></my-sheep>
      </ng-container>
      <my-elephant></my-elephant>
    </my-pasture>

  `
})
export class TargetedWithContainerComponent  {}
