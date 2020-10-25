import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { StorageKeyConstant } from '../constants/storage-key.constant';


@Injectable()
export class AuthorizationService {
  //#region Properties

  //#endregion

  //#region Constructor
  constructor() { }
  //#endregion

  //#region Methods
  // TODO: change this to store token instead
  public storeLoginTokenAsync(accessToken: string): Observable<boolean> {
    return of(sessionStorage.setItem(StorageKeyConstant.accessToken, accessToken)).pipe(
      map(() => !!sessionStorage.getItem(StorageKeyConstant.accessToken))
    );
  }

  public getLoginTokenAsync(): Observable<string> {
    return of(sessionStorage.getItem(StorageKeyConstant.accessToken));
  }
  //#endregion
}
