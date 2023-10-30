import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SlideShowComponent } from '../global/slide-show/slide-show.component';
import { HomeSlideComponent } from './home-slide/home-slide.component';
import { AlliesComponent } from './allies/allies.component';
import { ProductsComponent } from './products/products.component';
import { AssembliesComponent } from './assemblies/assemblies.component';
import { TeamComponent } from './team/team.component';



@NgModule({
  declarations: [
    SlideShowComponent,
    HomeSlideComponent,
    AlliesComponent,
    ProductsComponent,
    AssembliesComponent,
    TeamComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    SlideShowComponent,
    HomeSlideComponent,
    AlliesComponent,
    ProductsComponent,
    AssembliesComponent,
    TeamComponent
  ]
})
export class HomeModule { }
