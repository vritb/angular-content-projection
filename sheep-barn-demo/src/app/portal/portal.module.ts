import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommonExamplesModule } from '../common-examples/common-examples.module';
import { FarmNoPortalComponent } from './farm-no-portal.component';
import { NoPortalComponent } from './no-portal.component';
import { FarmPortalComponent } from './farm-portal.component';
import { PortalComponent } from './portal.component';

@NgModule({
  imports:      [ CommonModule, CommonExamplesModule ],
  declarations: [ FarmNoPortalComponent, NoPortalComponent, FarmPortalComponent, PortalComponent ],
  exports:      [ NoPortalComponent, PortalComponent ]
})
export class PortalModule { }
