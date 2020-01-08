import { CamelCasePipe } from './camelCase.pipe';
import { NgModule } from '@angular/core';

const listPipe = [
    CamelCasePipe
];

@NgModule({
    declarations: listPipe,
    exports: listPipe
})
export class PipeModule { }
