import {Component, OnInit} from '@angular/core';
import {LoginService} from "../../services/login.service";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {RequestLogin} from "../../interface/RequestLogin";
import {Router} from "@angular/router";
import {Inventory} from "../../interface/inventory";



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  inventory: Inventory | undefined;
  login: Array<RequestLogin> = [];
  public loginForm!: FormGroup;

  constructor(public loginService: LoginService, private formBuilder: FormBuilder, private router:Router) {
  }

  ngOnInit(): void {
    this.buildForm()
  }

  private buildForm() {
    this.loginForm = this.formBuilder.group({
      email: ['', new FormControl('', [Validators.required, Validators.email])],
      password: ['', Validators.required]
    });
  }

/*  login() {
    if (this.loginForm.valid) {
      this.loginService.login(this.loginForm.value).subscribe(data => {});
    }
  }*/

  loginUser(){
    this.loginService.loginUser(this.login).subscribe(
        response =>{
          this.router.navigate(['/home'])
        }

    )
  }
  obtenerInventario(id: number) {
    this.loginService.getInventory(id).subscribe(
      (data: Inventory) => {
        // Maneja los datos de inventario obtenidos exitosamente, por ejemplo, almacénalos en una variable.
        console.log('Inventario obtenido:', data);
      }
    );
  }

  getInventory() {
    this.loginService.getInventoryById(1).subscribe((data: Inventory) => {
      this.inventory = data;
    });
  }


}
