import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
  },
  {
    path: 'products',
    loadChildren: () => import('./product-store/product-store.module').then(m => m.ProductStoreModule),
  },
  {
    path: '',
    loadChildren: () => import('./web-site/web-site.module').then(m => m.WebSiteModule),
  },
  {
    path: '**',
    redirectTo: '/home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
