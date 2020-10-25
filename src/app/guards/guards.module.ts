import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IsAuthorizedGuard } from './is-authorized.guard';



@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    IsAuthorizedGuard
  ]
})
export class GuardsModule { }
