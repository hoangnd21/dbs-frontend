import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AppConfigService } from 'src/app/services/app-config.service';
import { AppConfig } from 'src/view-models/app-config';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit, OnDestroy {
  //#region Properties
  protected _pageHeader: string;

  protected readonly _subscription: Subscription;
  //#endregion

  //#region Accessors

  public get pageHeader(): string {

    return this._pageHeader;
  }

  public set pageHeader(value: string) {
    this._pageHeader = value;
  }
  //#endregion
  //#region Constructor
  constructor(
    protected appConfigService: AppConfigService
  ) {
    this.pageHeader = 'Pet stores';
    this._subscription = new Subscription();
  }

  //#endregion
  //#region Methods
  public ngOnInit(): void {
    const loadAppNameSubscription: Subscription = this.appConfigService.loadConfigurationAsync().subscribe(
      (appConfig: AppConfig) => {
        this.pageHeader = appConfig.applicationName;
      }
    );

  }

  public ngOnDestroy(): void {

    if(this._subscription && !this._subscription.closed) {
      this._subscription.unsubscribe();
    }
  }
  //#endregion
}
