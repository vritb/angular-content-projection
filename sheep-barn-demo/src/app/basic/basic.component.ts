import { Component } from '@angular/core';

@Component({
  selector: 'my-basic',
  template: `
    <my-pasture>
      <my-sheep></my-sheep>
      <my-sheep></my-sheep>
      <my-sheep></my-sheep>
    </my-pasture>
  `
})
export class BasicComponent  {
  
}
