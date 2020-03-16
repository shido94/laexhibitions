import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }
  images = [
    './assets//HOME/1.jpg',
    './assets/HOME/2.jpg',
    './assets/HOME/3.jpg',
    './assets/HOME/4.jpg'
  ];

  ngOnInit() {
  }

}
