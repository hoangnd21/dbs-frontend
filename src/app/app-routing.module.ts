import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { GuardsModule } from './guards/guards.module';
import { IsAuthorizedGuard } from './guards/is-authorized.guard';
import { LoginComponent } from './modules/login/login.component';
import { NavBarModule } from './modules/nav-bar/nav-bar.module';
import { PrimaryLayoutComponent } from './modules/primary-layout/primary-layout.component';
import { PrimaryLayoutModule } from './modules/primary-layout/primary-layout.module';
import { ServicesModule } from './services/services.module';


const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./modules/login/login.module').then(x => x.LoginModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./modules/home/home.module').then(x => x.HomeModule),
    canActivate: [IsAuthorizedGuard]
  },
  {
    path: 'browse',
    loadChildren: () => import('./modules/browse/browse.module').then(x => x.BrowseModule),
    canActivate: [IsAuthorizedGuard]
  },
  {
    path: 'inbox',
    loadChildren: () => import('./modules/inbox/inbox.module').then(x => x.InboxModule),
    canActivate: [IsAuthorizedGuard]
  }
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    RouterModule.forRoot(routes),
    GuardsModule,
    NavBarModule,
    PrimaryLayoutModule,
    ServicesModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
