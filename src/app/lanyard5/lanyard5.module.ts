import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Lanyard5PageRoutingModule } from './lanyard5-routing.module';

import { Lanyard5Page } from './lanyard5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Lanyard5PageRoutingModule
  ],
  declarations: [Lanyard5Page]
})
export class Lanyard5PageModule {}
