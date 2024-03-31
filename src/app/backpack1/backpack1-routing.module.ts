import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Backpack1Page } from './backpack1.page';

const routes: Routes = [
  {
    path: '',
    component: Backpack1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Backpack1PageRoutingModule {}
