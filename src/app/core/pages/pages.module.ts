import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { StoreComponent } from './store/store.component';
import { ProductComponent } from './product/product.component';
import { ComponentsModule } from 'src/app/components/components.module';



@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    StoreComponent,
    ProductComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ]
})
export class PagesModule { }
