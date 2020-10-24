import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SIDENAV_MODE } from 'src/app/constants/global-types';
import { AppConfigService } from 'src/app/services/app-config.service';
import { AppConfig } from 'src/view-models/app-config';
import { SideNavItemViewModel } from 'src/view-models/sidenav-item.view-model';

@Component({
  selector: 'app-primary-layout',
  templateUrl: './primary-layout.component.html',
  styleUrls: ['./primary-layout.component.scss']
})
export class PrimaryLayoutComponent implements OnInit, OnDestroy {
  //#region Properties
  protected _sideNavMode: SIDENAV_MODE;

  protected _sideNavItems: SideNavItemViewModel[];

  protected _subscription: Subscription;
  //#endregion

  //#region Accessors
  public get sidenavMode(): SIDENAV_MODE {

    return this._sideNavMode;
  }

  public set sidenavMode(value: SIDENAV_MODE) {
    this._sideNavMode = value;
  }

  public get sidenavItems(): SideNavItemViewModel[] {
    return this._sideNavItems;
  }

  public set sidenavItems(value: SideNavItemViewModel[]) {
    this._sideNavItems = value;
  }
  //#endregion
  //#region Constructor
  public constructor(
    protected appConfigService: AppConfigService
  ) {
    this._subscription = new Subscription();
  }
  //#endregion

  //#region Methods
  public ngOnInit(): void {
    const getSidenavItemsSubscription: Subscription = this.appConfigService.loadConfigurationAsync().subscribe(
      (appConfig: AppConfig) => {
        this.sidenavItems = appConfig.sidenavItems.map(x => new SideNavItemViewModel(x.icon, x.text, x.navigate));
      }
    );
    this._subscription.add(getSidenavItemsSubscription);

    // TODO: check viewport to change sidenav mode
    this.sidenavMode = 'side';
  }

  public ngOnDestroy(): void {
    if (this._subscription && !this._subscription.closed) {
      this._subscription.unsubscribe();
    }
  }
  //#endregion
}
