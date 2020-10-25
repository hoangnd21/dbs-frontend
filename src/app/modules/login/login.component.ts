import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  //#region Properties
  public loginFormGroup: FormGroup;

  public userNameControl: FormControl;

  public passwordControl: FormControl;

  //#endregion

  //#region Constructor
  constructor() {
    this.userNameControl = new FormControl(null, [Validators.required, Validators.minLength(4)]);
    this.passwordControl = new FormControl(null, [Validators.required, Validators.minLength(4)]);

    this.loginFormGroup = new FormGroup({
      userName: this.userNameControl,
      password: this.passwordControl
    });
  }
  //#endregion

  //#region Methods
  ngOnInit(): void {
  }

  public onSubmitLoginForm(): void {
    console.log(this.loginFormGroup.value);

  }
  //#endregion
}
