import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Lanyard1PageRoutingModule } from './lanyard1-routing.module';

import { Lanyard1Page } from './lanyard1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Lanyard1PageRoutingModule
  ],
  declarations: [Lanyard1Page]
})
export class Lanyard1PageModule {}
