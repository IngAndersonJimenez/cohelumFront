import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './global/header/header.component';
import { FooterComponent } from './global/footer/footer.component';
import { RouterModule } from '@angular/router';
import { SlideShowComponent } from './global/slide-show/slide-show.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SlideShowComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SlideShowComponent
  ]
})
export class ComponentsModule { }
