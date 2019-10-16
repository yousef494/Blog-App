import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import { ResizeService } from './../../../services/resize.service';
import { routerTransition } from './../../../services/page.animation';
import { AuthService } from './../../../services/auth.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  animations: [routerTransition]
})
export class SidebarComponent implements OnInit {


  menue = [];
  @Input() isMenuClosed;
  user: any;

  ngOnInit() {
    this.menue = [
      {
        title: 'Home',
        url: '/portofolio/',
        icon: 'fa-home',
        lastItemInSection: true
      },
      {
        title: 'Blog',
        url: '/',
        icon: 'fa-comment'
      },
      {
        title: 'Algorithms',
        url: '/algs/',
        icon: 'fa-laptop-code',
        lastItemInSection: true
      },
      {
        title: 'Chat',
        url: '/bot/',
        icon: 'fa-comments',
        lastItemInSection: true
      }
    ];
    
    this.isMenuClosed =  this.isSmallWidth();
  }



  constructor(
    private resizeService: ResizeService,
    private route: ActivatedRoute,
    private authService: AuthService,
    private router: Router
  ) {
    this.user = authService.getUser();

    if (authService.getUser() && authService.getUser().role === 'User') {
      this.isMenuClosed = true;
    }

    const vm = this;
  }


  /**
   * Call resize service after side panel mode changes
   */
  onSideNavModeChange() {
    this.isMenuClosed = !this.isMenuClosed;
  }

  private isSmallWidth() {
    return window.innerWidth < 700;
  }


  logout() {
    this.authService.logout();
    this.router.navigateByUrl('/');
  }

  /**
   * Return url as state, that will trigger animation when url changes
   * @param outlet
   * @returns {string}
   */
  getState(outlet) {
    return this.router.url;
  }

}
