import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { MyComponentComponent } from '../../../components/my-component/my-component.component';
import { YellowDirective } from '../../../directives/yellow.directive';
import { CamelCasePipe } from '../../../pipes/camelCase.pipe';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: Tab1Page }])
  ],
  declarations: [Tab1Page, MyComponentComponent, YellowDirective, CamelCasePipe]
})
export class Tab1PageModule { }
