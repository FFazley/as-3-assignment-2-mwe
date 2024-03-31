import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Backpack3Page } from './backpack3.page';

const routes: Routes = [
  {
    path: '',
    component: Backpack3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Backpack3PageRoutingModule {}
