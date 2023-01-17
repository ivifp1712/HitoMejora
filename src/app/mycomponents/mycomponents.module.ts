import { IonicModule } from '@ionic/angular';
import { CaratulasComponent } from './caratulas/caratulas.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [CaratulasComponent],
  imports: [
    CommonModule,
    IonicModule
  ], exports: [ CaratulasComponent]
})
export class MycomponentsModule { }
