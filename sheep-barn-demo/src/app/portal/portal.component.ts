import { Component } from '@angular/core';

@Component({
  selector: 'my-portal',
  template: `
    <h3>Farm-Portal</h3>>
    <br/>
    <my-farm-portal>
      <my-sheep></my-sheep>
      <my-sheep></my-sheep>
      <my-sheep></my-sheep>
    </my-farm-portal>
  `
})
export class PortalComponent  {
  
}
