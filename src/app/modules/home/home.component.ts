import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  //#region Properties
  public backgroundImageUrl: string;
  //#endregion

  //#region Constructor
  public constructor() {

    this.backgroundImageUrl = 'https://via.placeholder.com';
  }
  //#endregion

  //#region Methods
  public ngOnInit(): void { }
  //#endregion
}
