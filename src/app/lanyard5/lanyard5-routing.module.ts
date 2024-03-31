import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Lanyard5Page } from './lanyard5.page';

const routes: Routes = [
  {
    path: '',
    component: Lanyard5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Lanyard5PageRoutingModule {}
