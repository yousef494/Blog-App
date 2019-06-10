import {
  Component,
  HostListener,
  OnInit
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
  isMenuClosed = this.isSmallWidth();
  user: any;

  ngOnInit() {
    this.menue = [
      {
        title: 'Blog',
        url: '/',
        iconClass: 'material-icons',
        iconCode: 'dashboard'
      },
      {
        title: 'Teams',
        iconClass: 'material-icons',
        iconCode: 'group',
        url: '/team'
      }];
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
