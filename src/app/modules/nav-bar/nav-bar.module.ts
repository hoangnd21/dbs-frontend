import { NgModule } from '@angular/core';

import { NavBarRoutingModule } from './nav-bar-routing.module';


@NgModule({
  imports: [
    NavBarRoutingModule
  ],
  exports: [NavBarRoutingModule]
})
export class NavBarModule { }
