import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommonExamplesModule } from '../common-examples/common-examples.module';
import { PastureNgContentComponent } from './pasture-ng-content.component';
import { CloningNgContentComponent } from './cloning-ng-content.component';
import { PastureNgForComponent } from './pasture-ng-for.component';
import { CloningNgForComponent } from './cloning-ng-for.component';
import { PastureNgIfComponent } from './pasture-ng-if.component';
import { HideAndSeekComponent } from './hide-and-seek.component';

@NgModule({
  imports:      [ CommonModule, CommonExamplesModule ],
  declarations: [ PastureNgContentComponent, CloningNgContentComponent, PastureNgForComponent, CloningNgForComponent, PastureNgIfComponent, HideAndSeekComponent ],
  exports:      [ CloningNgContentComponent, CloningNgForComponent, HideAndSeekComponent ]
})
export class CloningModule { }
