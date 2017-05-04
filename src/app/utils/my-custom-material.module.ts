import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  MdButtonModule, MdCheckboxModule, MdCardModule, MdInputModule, MdToolbarModule,
  MdSnackBarModule, MdSidenavModule, MdMenuModule, MdDialogModule
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
    MdDialogModule,
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
    MdDialogModule,
  ],
  declarations: []
})
export class MyCustomMaterialModule {
}
