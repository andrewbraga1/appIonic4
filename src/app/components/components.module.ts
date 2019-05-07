import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormComponent } from '../contact/form/form.component';

@NgModule({
  declarations: [FormComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [FormComponent]
})
export class ComponentsModule { }
