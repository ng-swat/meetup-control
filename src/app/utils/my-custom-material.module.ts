import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MdButtonModule, MdCheckboxModule, MdCardModule, MdInputModule, MdToolbarModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MdButtonModule,
    MdCheckboxModule,
    MdCardModule,
    MdInputModule,
    MdToolbarModule,
  ],
  exports: [
    MdButtonModule,
    MdCheckboxModule,
    MdCardModule,
    MdInputModule,
    MdToolbarModule,
  ],
  declarations: []
})
export class MyCustomMaterialModule {
}
