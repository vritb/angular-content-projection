import { Component } from '@angular/core';

@Component({
  selector: 'my-portal',
  template: `
    <my-farm-portal>
      <my-sheep></my-sheep>
      <my-sheep></my-sheep>
      <my-sheep></my-sheep>
    </my-farm-portal>
  `
})
export class PortalComponent  {
  
}
