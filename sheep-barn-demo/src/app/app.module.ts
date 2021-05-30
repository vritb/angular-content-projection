import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { BasicModule } from './basic/basic.module';
import { TargetedModule } from './targeted/targeted.module';
import { CloningModule } from './cloning/cloning.module';
import { TemplateRefModule } from './template-ref/template-ref.module';
import { PortalModule } from './portal/portal.module';

@NgModule({
  imports:      [ BrowserModule, BasicModule, TargetedModule, CloningModule, TemplateRefModule, PortalModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
