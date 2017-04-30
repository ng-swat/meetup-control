import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  MdButtonModule, MdCheckboxModule, MdCardModule, MdInputModule, MdToolbarModule,
  MdSnackBarModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MdButtonModule,
    MdCheckboxModule,
    MdCardModule,
    MdInputModule,
    MdToolbarModule,
    MdSnackBarModule,
  ],
  exports: [
    MdButtonModule,
    MdCheckboxModule,
    MdCardModule,
    MdInputModule,
    MdToolbarModule,
    MdSnackBarModule,
  ],
  declarations: []
})
export class MyCustomMaterialModule {
}
