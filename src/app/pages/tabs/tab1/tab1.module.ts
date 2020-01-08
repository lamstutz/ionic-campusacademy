import { ComponentsModule } from './../../../components/components.module';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { YellowDirective } from '../../../directives/yellow.directive';
import { PipeModule } from '../../../pipes/pipe.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: Tab1Page }]),
    PipeModule,
    ComponentsModule
  ],
  declarations: [Tab1Page, YellowDirective]
})
export class Tab1PageModule { }
