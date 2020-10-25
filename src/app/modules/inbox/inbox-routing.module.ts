import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrimaryLayoutComponent } from '../primary-layout/primary-layout.component';
import { PrimaryLayoutModule } from '../primary-layout/primary-layout.module';
import { InboxComponent } from './inbox.component';


const routes: Routes = [
  {
    path: '',
    component: PrimaryLayoutComponent,
    children: [
      {
        path: '',
        component: InboxComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), PrimaryLayoutModule],
  declarations: [InboxComponent],
  exports: [RouterModule]
})
export class InboxRoutingModule { }
