import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimaryLayoutComponent } from './primary-layout.component';
import { NavBarModule } from '../nav-bar/nav-bar.module';

@NgModule({
  declarations: [PrimaryLayoutComponent],
  imports: [
    CommonModule,
    NavBarModule
  ],
})
export class PrimaryLayoutModule { }
