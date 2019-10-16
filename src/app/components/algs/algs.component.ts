import { Component, OnInit } from '@angular/core';
import { AlgsService } from '../../services/algs.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-algs',
  templateUrl: './algs.component.html',
  styleUrls: ['./algs.component.scss']
})
export class AlgsComponent implements OnInit {

  postForm: FormGroup;

  articles;
  mode = 'edit';
  editPost_id: string = '';
  searchTxt: string = '';

  post: {
    name: '',
    description: '',
    category: string
  }

  constructor(
    private algsService: AlgsService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {

    this.searchTxt = this.route.snapshot.paramMap.get('searchTxt');
    console.log(this.searchTxt);

    this.post = {
      name: '',
      description: '',
      category: ""
    };

    this.loadArticles(this.searchTxt);

    this.postForm = this.formBuilder.group(
      {
        nameCtr: new FormControl(this.post.name, [Validators.required]),
        descriptionCtr: new FormControl(this.post.description, [Validators.required])
      });

  }

  search(){
    this.loadArticles(this.searchTxt);
  }

  loadArticles(query: string){
    if(query != null && query.length > 0){
      this.algsService.queryArticles(query).subscribe(res => {
        this.articles = res[0];
      });
    }else{
      this.algsService.getArticles().subscribe(res => {
        this.articles = res[0];
      });
    }
  }

  sEdit(_id: string) {
    this.editPost_id = _id;
    this.mode = 'edit';
  }

  sDelete(_id: string) {
    this.editPost_id = _id;
    this.mode = 'delete';
  }

  update(_id: string) {
    this.updatePostObject();
    this.algsService.updatetArticle(_id, this.post ).subscribe(result => {
      this.reset();
    }, err => {
      console.error(err);
    });
  }

  create(){
    this.updatePostObject();
    console.log(this.post);
    this.algsService.createArticle(this.post).subscribe(result => {
      this.reset();
      this.loadArticles('');
    }, err => {
      console.error(err);
    });
  }


  delete(_id: string){
    this.algsService.deleteArticel(_id).subscribe(result => {
      this.reset();
      this.loadArticles('');
    }, err => {
      console.error(err);
    });
  }

  cancel(){
    this.reset();
  }

  reset(){
    this.editPost_id = '';
    this.mode = '';
    this.post.name = '';
    this.post.description = '';
  }


  updatePostObject(){
    this.post.name = this.postForm.get('nameCtr').value;
    this.post.description = this.postForm.get('descriptionCtr').value;
    this.post.category = "Uncategorized";
  }


}


