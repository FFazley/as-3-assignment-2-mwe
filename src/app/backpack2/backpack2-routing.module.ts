import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Backpack2Page } from './backpack2.page';

const routes: Routes = [
  {
    path: '',
    component: Backpack2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Backpack2PageRoutingModule {}
