import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import baguetteBox from 'baguettebox.js';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    $(document).ready(function () {
      baguetteBox.run('.tz-gallery');
    });

    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
          return;
      }
      window.scrollTo(0, 0)
  });
  }
}
