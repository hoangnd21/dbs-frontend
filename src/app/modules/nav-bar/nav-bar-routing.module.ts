import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavBarComponent } from './nav-bar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';


const routes: Routes = [];

@NgModule({
  declarations: [NavBarComponent],
  imports: [
    RouterModule.forChild(routes),
  MatToolbarModule,
  MatIconModule,
  MatButtonModule
],
  exports: [RouterModule, NavBarComponent]
})
export class NavBarRoutingModule { }
