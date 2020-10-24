import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NavBarModule } from './modules/nav-bar/nav-bar.module';
import { PrimaryLayoutComponent } from './modules/primary-layout/primary-layout.component';
import { PrimaryLayoutModule } from './modules/primary-layout/primary-layout.module';


const routes: Routes = [
  {
    path: '',
    component: PrimaryLayoutComponent,
    children: [
      {
        path: 'home',
        loadChildren: () => import('./modules/home/home.module').then(x => x.HomeModule)
      }
    ]
  }
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    RouterModule.forRoot(routes),
    NavBarModule,
    PrimaryLayoutModule
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
