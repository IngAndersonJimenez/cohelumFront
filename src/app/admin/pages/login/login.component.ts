import {Component, OnInit} from '@angular/core';
import {LoginService} from "../../services/login.service";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {NotificationService} from "../../../notifications/notification.service";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  //login: RequestLogin = {emailUser:'prueba@gmail.com', password :'1010'}
  public loginForm!: FormGroup;

  constructor(public loginService: LoginService, private formBuilder: FormBuilder, private router:Router, private notificationService:NotificationService) {
  }

  ngOnInit(): void {
    this.buildForm()
  }

  private buildForm() {
    this.loginForm = this.formBuilder.group({
      emailUser: ['', new FormControl('', [Validators.required, Validators.email])],
      password: ['', Validators.required]
    });
  }

  login() {
    if (this.loginForm.valid) {
      console.log(this.loginForm)
      this.loginService.login(this.loginForm.value).subscribe(data => console.log(data),
        err => this.notificationService.showError("Login fallido","Bienvenido"))

  }

    }

}
