import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductStoreRoutingModule } from './product-store-routing.module';
import { ProductComponent } from './pages/product/product.component';
import { ProductsComponent } from './pages/products/products.component';


@NgModule({
  declarations: [
    ProductComponent,
    ProductsComponent
  ],
  imports: [
    CommonModule,
    ProductStoreRoutingModule
  ]
})
export class ProductStoreModule { }
