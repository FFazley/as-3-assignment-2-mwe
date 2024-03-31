import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Lanyard3Page } from './lanyard3.page';

const routes: Routes = [
  {
    path: '',
    component: Lanyard3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Lanyard3PageRoutingModule {}
