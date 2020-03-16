import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import baguetteBox from 'baguettebox.js';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

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
