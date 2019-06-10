import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../../services/auth.service';

@Component({
  selector: 'app-template',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class TemplateComponent implements OnInit {

  user: any;

  constructor(private auth: AuthService) { }

  ngOnInit() {
    this.user = this.auth.getUser();
  }

}
