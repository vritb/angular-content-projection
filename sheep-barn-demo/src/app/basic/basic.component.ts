import { Component } from '@angular/core';

@Component({
  selector: 'my-basic',
  template: `
    <h3>Basic</h3>
    <my-pasture>
      <my-sheep></my-sheep>
      <my-sheep></my-sheep>
      <my-sheep></my-sheep>
    </my-pasture>`
})
export class BasicComponent  {
  
}
