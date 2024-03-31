import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Lanyard4PageRoutingModule } from './lanyard4-routing.module';

import { Lanyard4Page } from './lanyard4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Lanyard4PageRoutingModule
  ],
  declarations: [Lanyard4Page]
})
export class Lanyard4PageModule {}
