import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommonExamplesModule } from '../common-examples/common-examples.module';
import { PastureComponent } from './pasture.component';
import { TargetedComponent } from './targeted.component';
import { TargetedWithContainerComponent } from './targeted-with-container.component';
import { NgProjectAsComponent } from './ng-project-as.component';

@NgModule({
  imports:      [ CommonModule, CommonExamplesModule ],
  declarations: [ PastureComponent, TargetedComponent, TargetedWithContainerComponent, NgProjectAsComponent ],
  exports:      [ TargetedComponent, TargetedWithContainerComponent, NgProjectAsComponent ]
})
export class TargetedModule { }
