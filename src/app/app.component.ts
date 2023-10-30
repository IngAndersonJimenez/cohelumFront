import { Component } from '@angular/core';
import { LoginService } from './core/services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cohelumFront';
  constructor(private loginService: LoginService) {
    // this.loginService.postToken()
    //   .subscribe(
    //     response => {
    //       console.log(response);
    //     }
    //   );
  }
}
