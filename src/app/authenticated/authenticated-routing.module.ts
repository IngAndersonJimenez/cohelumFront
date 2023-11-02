import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MenuComponent} from "./menu/menu.component";


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'menu',
        component: MenuComponent,
      },
      {
        path: 'dash',
        component: MenuComponent,
      },
      {
        path: '**',
        redirectTo: 'menu'
      }
    ]
  }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class AuthenticatedRouting { }
