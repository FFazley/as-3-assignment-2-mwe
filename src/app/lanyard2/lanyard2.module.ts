import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Lanyard2PageRoutingModule } from './lanyard2-routing.module';

import { Lanyard2Page } from './lanyard2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Lanyard2PageRoutingModule
  ],
  declarations: [Lanyard2Page]
})
export class Lanyard2PageModule {}
