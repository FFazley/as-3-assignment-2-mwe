import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Backpack5Page } from './backpack5.page';

const routes: Routes = [
  {
    path: '',
    component: Backpack5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Backpack5PageRoutingModule {}
