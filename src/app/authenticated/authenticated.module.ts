import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {ReactiveFormsModule} from "@angular/forms";
import {SharedModule} from "../shared/shared.module";
import {MenuComponent} from "./menu/menu.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {AuthenticatedRouting} from "./authenticated-routing.module";


@NgModule({
  declarations: [
    MenuComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    AuthenticatedRouting
  ]
})
export class AuthenticatedModule { }
