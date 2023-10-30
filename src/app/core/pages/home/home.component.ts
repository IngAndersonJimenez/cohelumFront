import { Component } from '@angular/core';
import { HomeService } from '../../services/home.service';
import { HomeSlide } from '../../interfaces/home/homeSlide_response';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public homeSlide: HomeSlide[] = []

  constructor(private homeService: HomeService) { }

  ngOnInit(): void {
    this.homeService.GET_home_slide()
      .subscribe(
        response => {
          this.homeSlide = response;
          console.log(response);
        }
      );
  }
}
