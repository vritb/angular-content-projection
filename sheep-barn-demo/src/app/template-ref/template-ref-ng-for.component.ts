import { Component } from '@angular/core';

@Component({
  selector: 'my-template-ref-ng-for',
  template: `
    <my-farm-ng-for>
      <my-sheep *mySheepBlueprint></my-sheep>
    </my-farm-ng-for>
  `
})
export class TemplateRefNgForComponent  {}
