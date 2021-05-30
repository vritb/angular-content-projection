import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommonExamplesModule } from '../common-examples/common-examples.module';
import { SheepBlueprintDirective } from './sheep-blueprint.directive';
import { FarmNgForComponent } from './farm-ng-for.component';
import { TemplateRefNgForComponent } from './template-ref-ng-for.component';
import { FarmTemplateOutletComponent } from './farm-template-outlet.component';
import { TemplateRefTemplateOutletComponent } from './template-ref-template-outlet.component';

@NgModule({
  imports:      [ CommonModule, CommonExamplesModule ],
  declarations: [ SheepBlueprintDirective, FarmNgForComponent, TemplateRefNgForComponent, FarmTemplateOutletComponent, TemplateRefTemplateOutletComponent ],
  exports:      [ TemplateRefNgForComponent, TemplateRefTemplateOutletComponent ]
})
export class TemplateRefModule { }
