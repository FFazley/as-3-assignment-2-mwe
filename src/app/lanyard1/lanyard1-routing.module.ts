import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Lanyard1Page } from './lanyard1.page';

const routes: Routes = [
  {
    path: '',
    component: Lanyard1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Lanyard1PageRoutingModule {}
