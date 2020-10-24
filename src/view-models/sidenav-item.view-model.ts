export class SideNavItemViewModel {
  //#region Properties
  public icon: string;

  public text: string;

  public navigate: string;

  //#endregion

  //#region Constructor
  public constructor(icon: string, text: string, navigate: string) {
    this.icon = icon;
    this.text = text;
    this.navigate = navigate;
  }

  //#endregion
}
