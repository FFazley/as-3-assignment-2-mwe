import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LanyardPageRoutingModule } from './lanyard-routing.module';

import { LanyardPage } from './lanyard.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LanyardPageRoutingModule
  ],
  declarations: [LanyardPage]
})
export class LanyardPageModule {}
