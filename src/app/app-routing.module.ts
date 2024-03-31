import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'rent-page',
    loadChildren: () => import('./rent-page/rent-page.module').then( m => m.RentPagePageModule)
  },  {
    path: 'mycart',
    loadChildren: () => import('./mycart/mycart.module').then( m => m.MycartPageModule)
  },
  {
    path: 'book',
    loadChildren: () => import('./book/book.module').then( m => m.BookPageModule)
  },
  {
    path: 'shirt',
    loadChildren: () => import('./shirt/shirt.module').then( m => m.ShirtPageModule)
  },
  {
    path: 'backpack',
    loadChildren: () => import('./backpack/backpack.module').then( m => m.BackpackPageModule)
  },
  {
    path: 'lanyard',
    loadChildren: () => import('./lanyard/lanyard.module').then( m => m.LanyardPageModule)
  },
  {
    path: 'book1',
    loadChildren: () => import('./book1/book1.module').then( m => m.Book1PageModule)
  },
  {
    path: 'book2',
    loadChildren: () => import('./book2/book2.module').then( m => m.Book2PageModule)
  },
  {
    path: 'book3',
    loadChildren: () => import('./book3/book3.module').then( m => m.Book3PageModule)
  },
  {
    path: 'book4',
    loadChildren: () => import('./book4/book4.module').then( m => m.Book4PageModule)
  },
  {
    path: 'book5',
    loadChildren: () => import('./book5/book5.module').then( m => m.Book5PageModule)
  },
  {
    path: 'book6',
    loadChildren: () => import('./book6/book6.module').then( m => m.Book6PageModule)
  },
  {
    path: 'lanyard1',
    loadChildren: () => import('./lanyard1/lanyard1.module').then( m => m.Lanyard1PageModule)
  },
  {
    path: 'lanyard2',
    loadChildren: () => import('./lanyard2/lanyard2.module').then( m => m.Lanyard2PageModule)
  },
  {
    path: 'lanyard3',
    loadChildren: () => import('./lanyard3/lanyard3.module').then( m => m.Lanyard3PageModule)
  },
  {
    path: 'lanyard4',
    loadChildren: () => import('./lanyard4/lanyard4.module').then( m => m.Lanyard4PageModule)
  },
  {
    path: 'lanyard5',
    loadChildren: () => import('./lanyard5/lanyard5.module').then( m => m.Lanyard5PageModule)
  },
  {
    path: 'lanyard6',
    loadChildren: () => import('./lanyard6/lanyard6.module').then( m => m.Lanyard6PageModule)
  },
  {
    path: 'backpack1',
    loadChildren: () => import('./backpack1/backpack1.module').then( m => m.Backpack1PageModule)
  },
  {
    path: 'backpack2',
    loadChildren: () => import('./backpack2/backpack2.module').then( m => m.Backpack2PageModule)
  },
  {
    path: 'backpack3',
    loadChildren: () => import('./backpack3/backpack3.module').then( m => m.Backpack3PageModule)
  },
  {
    path: 'backpack4',
    loadChildren: () => import('./backpack4/backpack4.module').then( m => m.Backpack4PageModule)
  },
  {
    path: 'backpack5',
    loadChildren: () => import('./backpack5/backpack5.module').then( m => m.Backpack5PageModule)
  },
  {
    path: 'backpack6',
    loadChildren: () => import('./backpack6/backpack6.module').then( m => m.Backpack6PageModule)
  },
  {
    path: 'shirt1',
    loadChildren: () => import('./shirt1/shirt1.module').then( m => m.Shirt1PageModule)
  },
  {
    path: 'shirt2',
    loadChildren: () => import('./shirt2/shirt2.module').then( m => m.Shirt2PageModule)
  },
  {
    path: 'shirt3',
    loadChildren: () => import('./shirt3/shirt3.module').then( m => m.Shirt3PageModule)
  },
  {
    path: 'shirt4',
    loadChildren: () => import('./shirt4/shirt4.module').then( m => m.Shirt4PageModule)
  },
  {
    path: 'shirt5',
    loadChildren: () => import('./shirt5/shirt5.module').then( m => m.Shirt5PageModule)
  },
  {
    path: 'shirt6',
    loadChildren: () => import('./shirt6/shirt6.module').then( m => m.Shirt6PageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
