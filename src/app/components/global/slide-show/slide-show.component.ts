import { Component, Input, OnInit } from '@angular/core';
import { ResponseHomeSlide } from 'src/app/web-site/interfaces/home/homeSlide_response';

@Component({
  selector: 'app-slide-show',
  templateUrl: './slide-show.component.html',
  styleUrls: ['./slide-show.component.scss']
})
export class SlideShowComponent implements OnInit {
  @Input() homeSlideItems: any;

  constructor() { }
  ngOnInit() {
    console.log(this.homeSlideItems);
  }
}
