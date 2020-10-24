import { Component, OnInit } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  //#region Properties
  protected _pageHeader: string;
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
  constructor() {
    this.pageHeader = 'Pet stores';
  }

  //#endregion
  //#region Methods
  ngOnInit(): void { }
  //#endregion
}
