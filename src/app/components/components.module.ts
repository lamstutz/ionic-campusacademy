import { MyComponentComponent } from './my-component/my-component.component';
import { PeopleComponent } from './people/people.component';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

const componentsPipe = [
    PeopleComponent,
    MyComponentComponent
];

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
    ],
    declarations: componentsPipe,
    exports: componentsPipe
})
export class ComponentsModule { }
