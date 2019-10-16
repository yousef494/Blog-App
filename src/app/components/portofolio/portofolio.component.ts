import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

import { NgwWowService } from 'ngx-wow';


@Component({
  selector: 'app-portofolio',
  templateUrl: './portofolio.component.html',
  styleUrls: ['./portofolio.component.scss',
    "../../../template2/assets/css/main.css",
    "../../../template2/assets/css/noscript.css",
  ]
})
export class PortofolioComponent implements OnInit {


  $sidebar: HTMLElement;

  numberOfABtns: Number = 0;

  constructor(private router: Router, private wowService: NgwWowService) {
    this.wowService.init();
  }

  ngOnInit() {
    this.$sidebar = document.getElementById("sidebar");

    this.numberOfABtns = this.$sidebar.getElementsByTagName('a').length;

    window.setTimeout(function () {
      document.getElementById("pageContent").classList.remove('is-preload');
    }, 100);

    //this.sidebar();
    document.getElementsByTagName("body")[0].style.background = '#312450';
    //this.imgAnimation();
  }


  sidebar() {



  }


  aMenuClicked($event) {
    console.log(this.numberOfABtns);
    this.deActivateBtns();
    let id = $event.target.id;
    let element = document.getElementById(id);
    element.classList.add('active');
    element.classList.add('active-locked');
    console.log(id);

  }

  deActivateBtns() {
    for (let i = 0; i < this.numberOfABtns; i++) {
      let element = document.getElementById('ABtn-' + i);
      element.classList.remove('active');
      element.classList.remove('active-locked');
    }
  }


  imgAnimation() {
    let spotlights = document.getElementsByClassName('spotlights');

    for (let i = 0; i < spotlights.length; i++) {
      let spotlight = spotlights[i];
      let anchor = spotlight.getElementsByTagName('a')[0];
      let img = anchor.getElementsByTagName('img')[0];
      let x;
      // Assign image.
      anchor.style.backgroundImage = 'url(' + img.getAttribute('src') + ')';

      // Set background position.
      if (x = img.getAttribute('data-position'))
        anchor.style.backgroundPosition = x;

      img.hidden = true;

    }
  }

}
