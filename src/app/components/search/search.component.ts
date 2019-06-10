import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor(
    private router: Router,
    private formBuilder: FormBuilder
    ) { }

  searchTxt: string;
  searchForm: FormGroup;

  ngOnInit() {
    this.searchTxt = '';
    this.searchForm = this.formBuilder.group(
      {
        searchCtr: new FormControl(this.searchTxt)
      });
  }

  search(){
    let url = `/blog/${this.searchTxt}`;
    let currentNavigation = this.router.url;
    if(currentNavigation.split('/')[1] == 'blog'){
      url = `/search/${this.searchTxt}`;
    }
    this.router.navigateByUrl(url);
  }

}
