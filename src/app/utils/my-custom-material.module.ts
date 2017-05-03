import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  MdButtonModule, MdCheckboxModule, MdCardModule, MdInputModule, MdToolbarModule,
  MdSnackBarModule, MdSidenavModule, MdMenuModule
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
    MdSidenavModule,
    MdMenuModule,
  ],
  exports: [
    MdButtonModule,
    MdCheckboxModule,
    MdCardModule,
    MdInputModule,
    MdToolbarModule,
    MdSnackBarModule,
    MdSidenavModule,
    MdMenuModule,
  ],
  declarations: []
})
export class MyCustomMaterialModule {
}
