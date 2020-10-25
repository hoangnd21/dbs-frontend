import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrimaryLayoutComponent } from '../primary-layout/primary-layout.component';
import { PrimaryLayoutModule } from '../primary-layout/primary-layout.module';
import { HomeComponent } from './home.component';


const routes: Routes = [
  {
    path: '',
    component: PrimaryLayoutComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), PrimaryLayoutModule],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
