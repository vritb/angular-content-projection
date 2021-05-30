import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommonExamplesModule } from '../common-examples/common-examples.module';
import { PastureComponent } from './pasture.component';
import { BasicComponent } from './basic.component';

@NgModule({
  imports:      [ CommonModule, CommonExamplesModule ],
  declarations: [ PastureComponent, BasicComponent ],
  exports:      [ BasicComponent ]
})
export class BasicModule { }
