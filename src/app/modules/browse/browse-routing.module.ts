import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrimaryLayoutComponent } from '../primary-layout/primary-layout.component';
import { PrimaryLayoutModule } from '../primary-layout/primary-layout.module';
import { BrowseComponent } from './browse.component';


const routes: Routes = [
  {
    path: '',
    component: PrimaryLayoutComponent,
    children: [
      {
        path: '',
        component: BrowseComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), PrimaryLayoutModule],
  declarations: [BrowseComponent],
  exports: [RouterModule]
})
export class BrowseRoutingModule { }
