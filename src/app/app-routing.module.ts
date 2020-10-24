import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NavBarModule } from './modules/nav-bar/nav-bar.module';
import { PrimaryLayoutComponent } from './modules/primary-layout/primary-layout.component';
import { PrimaryLayoutModule } from './modules/primary-layout/primary-layout.module';
import { ServicesModule } from './services/services.module';


const routes: Routes = [
  {
    path: '',
    component: PrimaryLayoutComponent,
    children: [
      {
        path: 'home',
        loadChildren: () => import('./modules/home/home.module').then(x => x.HomeModule)
      },
      {
        path: 'browse',
        loadChildren: () => import('./modules/browse/browse.module').then(x => x.BrowseModule)
      },
      {
        path: 'inbox',
        loadChildren: () => import('./modules/inbox/inbox.module').then(x => x.InboxModule)
      },
    ]
  }
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    RouterModule.forRoot(routes),
    NavBarModule,
    PrimaryLayoutModule,
    ServicesModule
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
