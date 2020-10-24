import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimaryLayoutComponent } from './primary-layout.component';
import { NavBarModule } from '../nav-bar/nav-bar.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SidenavItemComponent } from './components/sidenav-item/sidenav-item.component';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [PrimaryLayoutComponent, SidenavItemComponent],
  imports: [
    CommonModule,
    NavBarModule,
    MatSidenavModule,
    MatIconModule
  ],
})
export class PrimaryLayoutModule { }
