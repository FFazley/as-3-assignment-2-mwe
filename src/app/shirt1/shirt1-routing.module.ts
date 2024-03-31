import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Shirt1Page } from './shirt1.page';

const routes: Routes = [
  {
    path: '',
    component: Shirt1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Shirt1PageRoutingModule {}
