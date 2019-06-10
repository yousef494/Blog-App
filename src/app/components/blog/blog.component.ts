import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../services/blog.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  postForm: FormGroup;

  articles;
  mode = 'edit';
  editPost_id: string = '';
  searchTxt: string = '';

  post: {
    title: '',
    content: '',
    author: string
  }

  constructor(
    private blogService: BlogService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {

    this.searchTxt = this.route.snapshot.paramMap.get('searchTxt');
    console.log(this.searchTxt);

    this.post = {
      title: '',
      content: '',
      author: ""
    };

    this.loadArticles(this.searchTxt);

    this.postForm = this.formBuilder.group(
      {
        titleCtr: new FormControl(this.post.title, [Validators.required]),
        contentCtr: new FormControl(this.post.content, [Validators.required])
      });

  }

  search(){
    this.loadArticles(this.searchTxt);
  }

  loadArticles(query: string){
    if(query != null && query.length > 0){
      this.blogService.queryArticles(query).subscribe(res => {
        this.articles = res[0];
      });
    }else{
      this.blogService.getArticles().subscribe(res => {
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
    this.blogService.updatetArticle(_id, this.post ).subscribe(result => {
      this.reset();
    }, err => {
      console.error(err);
    });
  }

  create(){
    this.updatePostObject();
    console.log(this.post);
    this.blogService.createArticle(this.post).subscribe(result => {
      this.reset();
      this.loadArticles('');
    }, err => {
      console.error(err);
    });
  }


  delete(_id: string){
    this.blogService.deleteArticel(_id).subscribe(result => {
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
    this.post.title = '';
    this.post.content = '';
  }


  updatePostObject(){
    this.post.title = this.postForm.get('titleCtr').value;
    this.post.content = this.postForm.get('contentCtr').value;
    this.post.author = "Yousef";
  }


}
