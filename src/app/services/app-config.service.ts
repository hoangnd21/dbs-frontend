import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppConfig } from 'src/view-models/app-config';

@Injectable()
export class AppConfigService {

  //#region Constructor

  constructor(protected _httpClient: HttpClient) { }

  //#endregion

  public loadConfigurationAsync(): Observable<AppConfig> {
    return this._httpClient.get<AppConfig>('/assets/app-config.json');
  }
}
