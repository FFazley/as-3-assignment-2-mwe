import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Lanyard3PageRoutingModule } from './lanyard3-routing.module';

import { Lanyard3Page } from './lanyard3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Lanyard3PageRoutingModule
  ],
  declarations: [Lanyard3Page]
})
export class Lanyard3PageModule {}
