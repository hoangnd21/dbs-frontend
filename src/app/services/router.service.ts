import { Injectable } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { from, Observable } from 'rxjs';

@Injectable()
export class RouterService {
  //#region Properties

  //#endregion

  //#region Constructor
  constructor(protected router: Router) { }
  //#endregion

  //#region Methoeds

  public navigateAsync(url: any[], extras?: NavigationExtras): Observable<boolean> {

    return from(this.router.navigate(url, extras));
  }
  //#endregion
}
