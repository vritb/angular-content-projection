import { Component } from '@angular/core';

@Component({
  selector: 'my-ng-project-as',
  template: `
    <my-pasture>
      <ng-container ngProjectAs="my-sheep">
        <my-sheep></my-sheep>
      </ng-container>
      <my-elephant></my-elephant>
    </my-pasture>

  `
})
export class NgProjectAsComponent  {}
