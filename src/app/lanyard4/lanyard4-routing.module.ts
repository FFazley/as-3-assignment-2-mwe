import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Lanyard4Page } from './lanyard4.page';

const routes: Routes = [
  {
    path: '',
    component: Lanyard4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Lanyard4PageRoutingModule {}
