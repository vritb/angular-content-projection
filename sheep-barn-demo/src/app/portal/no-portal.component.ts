import { Component } from '@angular/core';

@Component({
  selector: 'my-no-portal',
  template: `
  <h3>Farm-No-Portal</h3>
  <br/>
    <my-farm-no-portal>
      <my-sheep></my-sheep>
      <my-sheep></my-sheep>
      <my-sheep></my-sheep>
    </my-farm-no-portal>
  `
})
export class NoPortalComponent  {
  
}
