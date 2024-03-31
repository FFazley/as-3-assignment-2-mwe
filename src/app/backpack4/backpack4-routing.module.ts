import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Backpack4Page } from './backpack4.page';

const routes: Routes = [
  {
    path: '',
    component: Backpack4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Backpack4PageRoutingModule {}
