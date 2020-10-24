import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavBarRoutingModule } from './nav-bar-routing.module';


@NgModule({
  imports: [
    CommonModule,
    NavBarRoutingModule
  ],
  exports: [NavBarRoutingModule]
})
export class NavBarModule { }