import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppConfigService } from './app-config.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterService } from './router.service';
import { AuthorizationService } from './authorization.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    AppConfigService,
    RouterService,
    AuthorizationService
  ]
})
export class ServicesModule { }
