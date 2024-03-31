import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Lanyard6PageRoutingModule } from './lanyard6-routing.module';

import { Lanyard6Page } from './lanyard6.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Lanyard6PageRoutingModule
  ],
  declarations: [Lanyard6Page]
})
export class Lanyard6PageModule {}
