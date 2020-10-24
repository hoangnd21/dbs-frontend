import { Component, Input, OnInit } from '@angular/core';
import { RouterService } from 'src/app/services/router.service';
import { SideNavItemViewModel } from 'src/view-models/sidenav-item.view-model';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'sidenav-item',
  templateUrl: './sidenav-item.component.html',
  styleUrls: ['./sidenav-item.component.scss']
})
export class SidenavItemComponent implements OnInit {
  //#region Properties

  // tslint:disable-next-line: no-input-rename
  @Input('item')
  public sidenavItem: SideNavItemViewModel;
  //#endregion

  //#region Constructor
  constructor(
    protected routerService: RouterService
  ) { }
  //#endregion

  //#region Methods
  public ngOnInit(): void {
  }

  //#endregion
}
