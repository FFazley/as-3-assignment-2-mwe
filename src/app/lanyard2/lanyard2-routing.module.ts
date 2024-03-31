import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Lanyard2Page } from './lanyard2.page';

const routes: Routes = [
  {
    path: '',
    component: Lanyard2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Lanyard2PageRoutingModule {}
