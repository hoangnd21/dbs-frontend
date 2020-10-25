import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
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

  // tslint:disable-next-line: no-output-rename
  @Output('toggle-sidebar')
  protected _sideBarToggleEventEmitter: EventEmitter<any>;
  //#endregion

  //#region Accessors

  public get pageHeader(): string {

    return this._pageHeader;
  }

  public set pageHeader(value: string) {
    this._pageHeader = value;
  }

  public get isLoginPage(): boolean {
    return this.router.url.includes('/login');
  }

  //#endregion

  //#region Constructor
  constructor(
    protected appConfigService: AppConfigService,
    protected router: Router
  ) {
    this._subscription = new Subscription();
    this._sideBarToggleEventEmitter = new EventEmitter<boolean>();
  }

  //#endregion
  //#region Methods
  public ngOnInit(): void {
    const loadAppNameSubscription: Subscription = this.appConfigService.loadConfigurationAsync().subscribe(
      (appConfig: AppConfig) => {
        this.pageHeader = appConfig.applicationName;
      }
    );

    this._subscription.add(loadAppNameSubscription);

  }

  public ngOnDestroy(): void {

    if (this._subscription && !this._subscription.closed) {
      this._subscription.unsubscribe();
    }
  }

  public onClickingSidebarMenuHamburger(): void {
    this._sideBarToggleEventEmitter.emit();
  }
  //#endregion
}
