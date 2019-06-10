(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_blog_blog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/blog/blog.component */ "./src/app/components/blog/blog.component.ts");
/* harmony import */ var _components_template_main_main_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/template/main/main.component */ "./src/app/components/template/main/main.component.ts");





var routes = [{
        path: '',
        component: _components_template_main_main_component__WEBPACK_IMPORTED_MODULE_4__["TemplateComponent"],
        children: [
            {
                path: '',
                redirectTo: 'blog',
                pathMatch: 'full'
            },
            {
                path: 'blog',
                component: _components_blog_blog_component__WEBPACK_IMPORTED_MODULE_3__["BlogComponent"]
            },
            {
                path: 'search/:searchTxt',
                component: _components_blog_blog_component__WEBPACK_IMPORTED_MODULE_3__["BlogComponent"]
            },
            {
                path: 'blog/:searchTxt',
                component: _components_blog_blog_component__WEBPACK_IMPORTED_MODULE_3__["BlogComponent"]
            }
        ]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'blog';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_blog_blog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/blog/blog.component */ "./src/app/components/blog/blog.component.ts");
/* harmony import */ var _components_search_search_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/search/search.component */ "./src/app/components/search/search.component.ts");
/* harmony import */ var _components_template_main_main_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/template/main/main.component */ "./src/app/components/template/main/main.component.ts");
/* harmony import */ var _components_template_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/template/sidebar/sidebar.component */ "./src/app/components/template/sidebar/sidebar.component.ts");
/* harmony import */ var _services_blog_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/blog.service */ "./src/app/services/blog.service.ts");
/* harmony import */ var _services_resize_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/resize.service */ "./src/app/services/resize.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _components_blog_blog_component__WEBPACK_IMPORTED_MODULE_7__["BlogComponent"],
                _components_search_search_component__WEBPACK_IMPORTED_MODULE_8__["SearchComponent"],
                _components_template_main_main_component__WEBPACK_IMPORTED_MODULE_9__["TemplateComponent"],
                _components_template_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_10__["SidebarComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]
            ],
            providers: [
                _services_blog_service__WEBPACK_IMPORTED_MODULE_11__["BlogService"],
                _services_resize_service__WEBPACK_IMPORTED_MODULE_12__["ResizeService"],
                _services_auth_service__WEBPACK_IMPORTED_MODULE_13__["AuthService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/blog/blog.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/blog/blog.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row mb-4\">\n    <hr />\n    <br />\n    <!-- Add new post section -->\n    <div class=\"col-md-12 card card-block\" *ngIf=\"editPost_id !== post._id\">\n      <button class=\"card-link btn btn-sm btn-info\" (click)=\"sEdit('NEW')\" *ngIf=\"editPost_id !== 'NEW'\">Add\n        Post</button>\n\n      <form [formGroup]=\"postForm\" *ngIf=\"editPost_id === 'NEW'\">\n        <h4 class=\"card-header post-title\">\n          <textarea formControlName=\"titleCtr\" placeholder=\"Title\" class=\"form-label\"\n            [(ngModel)]=\"post.title\"></textarea>\n        </h4>\n        <p class=\"card-body post-text\">\n          <textarea rows=\"5\" formControlName=\"contentCtr\" placeholder=\"Content\" class=\"form-label\"\n            [(ngModel)]=\"post.content\"></textarea>\n        </p>\n        <button class=\"card-link btn btn-sm btn-primary\" (click)=\"create()\">Submit</button>\n        <button class=\"card-link btn btn-sm btn-secondary\" (click)=\"cancel()\">Cancel</button>\n      </form>\n    </div>\n    <!-- End of add section-->\n    <hr />\n  </div>\n\n  <div class=\"row mb-4\" *ngFor=\"let post of articles\">\n    <!-- View section -->\n    <div class=\"card card-block\" *ngIf=\"editPost_id !== post._id\">\n      <div class=\"row\">\n        <div class=\"col-md-2 text-center mt-5\">\n          <img src=\"assets/img/{{post.author}}.jpg\" class=\"picture-profile\" alt=\"profile-picture\">\n          <div class=\"author-info\">\n            <strong>{{ post.author}}</strong><br />\n            <span>{{ post.createdAt | date:'MMM dd,yyyy HH:mm' }}</span><br/>\n            <span>Updated: {{ post.updatedAt | date:'MMM dd,yyyy HH:mm' }}</span>\n            <div class=\"badges\">\n              <i class=\"fa fa-star text-warning\" *ngFor=\" let r of post.rating\"></i>\n            </div>\n            <div class=\"mt-5\">\n                <button class=\"card-link btn btn-sm btn-primary\" (click)=\"sEdit(post._id)\">Edit</button>\n                <button class=\"card-link btn btn-sm btn-danger\" (click)=\"sDelete(post._id)\">Delete</button>\n              </div>\n          </div>\n        </div>\n        <div class=\"col-md-10\">\n          <h4 class=\"card-header post-title\">{{ post.title }}</h4>\n          <p class=\"card-body post-text\">{{post.content}}</p>\n        </div>\n      </div>\n\n    </div>\n    <!-- End of view section -->\n\n    <!-- Edit section-->\n    <div class=\"col-md-12  card card-block alert-warning\" *ngIf=\"editPost_id === post._id && mode == 'edit'\">\n      <form [formGroup]=\"postForm\">\n        <h4 class=\"card-header post-title\">\n          <textarea formControlName=\"titleCtr\" placeholder=\"Title\" class=\"form-label\"\n            [(ngModel)]=\"post.title\"></textarea>\n        </h4>\n        <p class=\"card-body post-text\">\n          <textarea rows=\"5\" formControlName=\"contentCtr\" class=\"form-label\" [(ngModel)]=\"post.content\"></textarea>\n        </p>\n        <button class=\"card-link btn btn-sm btn-primary\" (click)=\"update(post._id)\">Save</button>\n        <button class=\"card-link btn btn-sm btn-secondary\" (click)=\"cancel()\">Discard</button>\n      </form>\n    </div>\n    <!-- End of edit section-->\n\n    <!-- Delete section -->\n    <div class=\"col-md-12  card card-block alert-danger\" *ngIf=\"editPost_id === post._id && mode == 'delete'\">\n      <h4 class=\"card-header post-title\">\n        Are you sure, you want to delete this post?\n      </h4>\n      <p class=\"card-body post-text\">\n        {{post.title}}\n      </p>\n      <button class=\"card-link btn btn-sm btn-warning\" (click)=\"delete(post._id)\">Confirm</button>\n      <button class=\"card-link btn btn-sm btn-secondary\" (click)=\"cancel()\">Cancel</button>\n    </div>\n    <!-- End of delete section-->\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/components/blog/blog.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/blog/blog.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "textarea {\n  width: 100%;\n  border: 0;\n  width: 100%;\n  padding: 0;\n  background-color: transparent; }\n\n.post-title {\n  text-align: left;\n  background-color: transparent; }\n\n.post-text {\n  text-align: left;\n  text-align: justify;\n  text-justify: inter-word; }\n\n.pull-right {\n  float: right !important; }\n\n.italic {\n  font-style: italic; }\n\n.card {\n  display: inline;\n  padding: 0.9rem; }\n\n.badges {\n  font-size: 12px; }\n\n.author-info {\n  font-size: 12px; }\n\n.picture-profile {\n  width: 60px;\n  border-radius: 50%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9Zb3VzZWYvRG9jdW1lbnRzL215d29ya3NwYWNlL0FydGljbGVBcHAvYmxvZy9zcmMvYXBwL2NvbXBvbmVudHMvYmxvZy9ibG9nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBVztFQUNYLFNBQVM7RUFDVCxXQUFXO0VBQ1gsVUFBVTtFQUNWLDZCQUE2QixFQUFBOztBQUlqQztFQUNJLGdCQUFnQjtFQUNoQiw2QkFBNkIsRUFBQTs7QUFHakM7RUFDSSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLHdCQUF3QixFQUFBOztBQUc1QjtFQUNJLHVCQUF1QixFQUFBOztBQUczQjtFQUNJLGtCQUFrQixFQUFBOztBQUd0QjtFQUNJLGVBQWU7RUFDZixlQUFlLEVBQUE7O0FBR25CO0VBQ0ksZUFBZSxFQUFBOztBQUduQjtFQUNJLGVBQWUsRUFBQTs7QUFHbkI7RUFDSSxXQUFXO0VBQ1gsa0JBQWtCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Jsb2cvYmxvZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInRleHRhcmVhIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXI6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgIC8vIG1pbi1oZWlnaHQ6IDM2MHB4O1xufVxuXG4ucG9zdC10aXRsZSB7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLnBvc3QtdGV4dCB7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICAgIHRleHQtanVzdGlmeTogaW50ZXItd29yZDtcbn1cblxuLnB1bGwtcmlnaHQge1xuICAgIGZsb2F0OiByaWdodCAhaW1wb3J0YW50O1xufVxuXG4uaXRhbGljIHtcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG5cbi5jYXJkIHtcbiAgICBkaXNwbGF5OiBpbmxpbmU7XG4gICAgcGFkZGluZzogMC45cmVtO1xufVxuXG4uYmFkZ2VzIHtcbiAgICBmb250LXNpemU6IDEycHg7XG59XG5cbi5hdXRob3ItaW5mbyB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4ucGljdHVyZS1wcm9maWxlIHtcbiAgICB3aWR0aDogNjBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/components/blog/blog.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/blog/blog.component.ts ***!
  \***************************************************/
/*! exports provided: BlogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogComponent", function() { return BlogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_blog_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/blog.service */ "./src/app/services/blog.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");





var BlogComponent = /** @class */ (function () {
    function BlogComponent(blogService, formBuilder, route) {
        this.blogService = blogService;
        this.formBuilder = formBuilder;
        this.route = route;
        this.mode = 'edit';
        this.editPost_id = '';
        this.searchTxt = '';
    }
    BlogComponent.prototype.ngOnInit = function () {
        this.searchTxt = this.route.snapshot.paramMap.get('searchTxt');
        console.log(this.searchTxt);
        this.post = {
            title: '',
            content: '',
            author: ""
        };
        this.loadArticles(this.searchTxt);
        this.postForm = this.formBuilder.group({
            titleCtr: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.post.title, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            contentCtr: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.post.content, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])
        });
    };
    BlogComponent.prototype.search = function () {
        this.loadArticles(this.searchTxt);
    };
    BlogComponent.prototype.loadArticles = function (query) {
        var _this = this;
        if (query != null && query.length > 0) {
            this.blogService.queryArticles(query).subscribe(function (res) {
                _this.articles = res[0];
            });
        }
        else {
            this.blogService.getArticles().subscribe(function (res) {
                _this.articles = res[0];
            });
        }
    };
    BlogComponent.prototype.sEdit = function (_id) {
        this.editPost_id = _id;
        this.mode = 'edit';
    };
    BlogComponent.prototype.sDelete = function (_id) {
        this.editPost_id = _id;
        this.mode = 'delete';
    };
    BlogComponent.prototype.update = function (_id) {
        var _this = this;
        this.updatePostObject();
        this.blogService.updatetArticle(_id, this.post).subscribe(function (result) {
            _this.reset();
        }, function (err) {
            console.error(err);
        });
    };
    BlogComponent.prototype.create = function () {
        var _this = this;
        this.updatePostObject();
        console.log(this.post);
        this.blogService.createArticle(this.post).subscribe(function (result) {
            _this.reset();
            _this.loadArticles('');
        }, function (err) {
            console.error(err);
        });
    };
    BlogComponent.prototype.delete = function (_id) {
        var _this = this;
        this.blogService.deleteArticel(_id).subscribe(function (result) {
            _this.reset();
            _this.loadArticles('');
        }, function (err) {
            console.error(err);
        });
    };
    BlogComponent.prototype.cancel = function () {
        this.reset();
    };
    BlogComponent.prototype.reset = function () {
        this.editPost_id = '';
        this.mode = '';
        this.post.title = '';
        this.post.content = '';
    };
    BlogComponent.prototype.updatePostObject = function () {
        this.post.title = this.postForm.get('titleCtr').value;
        this.post.content = this.postForm.get('contentCtr').value;
        this.post.author = "Yousef";
    };
    BlogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-blog',
            template: __webpack_require__(/*! ./blog.component.html */ "./src/app/components/blog/blog.component.html"),
            styles: [__webpack_require__(/*! ./blog.component.scss */ "./src/app/components/blog/blog.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_blog_service__WEBPACK_IMPORTED_MODULE_2__["BlogService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], BlogComponent);
    return BlogComponent;
}());



/***/ }),

/***/ "./src/app/components/search/search.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/search/search.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form  [formGroup]=\"searchForm\"\nclass=\"d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search\">\n    <div class=\"input-group\">\n      <input type=\"text\" formControlName=\"searchCtr\" [(ngModel)]=\"searchTxt\" class=\"form-control bg-light border-0 small\"\n             placeholder=\"Search for...\" aria-label=\"Search\" aria-describedby=\"basic-addon2\">\n      <div class=\"input-group-append\">\n        <button class=\"btn btn-primary\" type=\"button\" (click)=\"search()\" >\n          <i class=\"fas fa-search fa-sm\"></i>\n        </button>\n      </div>\n    </div>\n  </form>"

/***/ }),

/***/ "./src/app/components/search/search.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/search/search.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/search/search.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/search/search.component.ts ***!
  \*******************************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");




var SearchComponent = /** @class */ (function () {
    function SearchComponent(router, formBuilder) {
        this.router = router;
        this.formBuilder = formBuilder;
    }
    SearchComponent.prototype.ngOnInit = function () {
        this.searchTxt = '';
        this.searchForm = this.formBuilder.group({
            searchCtr: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.searchTxt)
        });
    };
    SearchComponent.prototype.search = function () {
        var url = "/blog/" + this.searchTxt;
        var currentNavigation = this.router.url;
        if (currentNavigation.split('/')[1] == 'blog') {
            url = "/search/" + this.searchTxt;
        }
        this.router.navigateByUrl(url);
    };
    SearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-search',
            template: __webpack_require__(/*! ./search.component.html */ "./src/app/components/search/search.component.html"),
            styles: [__webpack_require__(/*! ./search.component.scss */ "./src/app/components/search/search.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./src/app/components/template/main/main.component.html":
/*!**************************************************************!*\
  !*** ./src/app/components/template/main/main.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  <!-- Page Wrapper -->\n  <div id=\"wrapper\">\n\n      <!-- Sidebar -->\n      <app-sidebar></app-sidebar>\n      <!-- End of Sidebar -->\n  \n      <!-- Content Wrapper -->\n      <div id=\"content-wrapper\" class=\"d-flex flex-column\">\n  \n        <!-- Main Content -->\n        <div id=\"content\">\n  \n          <!-- Topbar -->\n          <nav class=\"navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow\">\n  \n            <!-- Sidebar Toggle (Topbar) -->\n            <button id=\"sidebarToggleTop\" class=\"btn btn-link d-md-none rounded-circle mr-3\">\n              <i class=\"fa fa-bars\"></i>\n            </button>\n            \n            <!-- Topbar Search -->\n            <app-search></app-search>\n  \n            <!-- Topbar Navbar -->\n            <ul class=\"navbar-nav ml-auto\">\n  \n              <!-- Nav Item - Search Dropdown (Visible Only XS) -->\n              <li class=\"nav-item dropdown no-arrow d-sm-none\">\n                <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"searchDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                  <i class=\"fas fa-search fa-fw\"></i>\n                </a>\n                <!-- Dropdown - Messages -->\n                <div class=\"dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in\" aria-labelledby=\"searchDropdown\">\n                    <app-search></app-search>\n                </div>\n              </li>\n  \n                 <div class=\"topbar-divider d-none d-sm-block\"></div>\n  \n              <!-- Nav Item - User Information -->\n              <li class=\"nav-item dropdown no-arrow\">\n                <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"userDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                  <span class=\"mr-2 d-none d-lg-inline text-gray-600 small\">{{user.username}}</span>\n                  <img class=\"img-profile rounded-circle\" src=\"assets/img/{{user.username}}.jpg\">\n                </a>\n                <!-- Dropdown - User Information -->\n                <div class=\"dropdown-menu dropdown-menu-right shadow animated--grow-in\" aria-labelledby=\"userDropdown\">\n                  <a class=\"dropdown-item\" href=\"#\">\n                    <i class=\"fas fa-user fa-sm fa-fw mr-2 text-gray-400\"></i>\n                    Profile\n                  </a>\n                  <a class=\"dropdown-item\" href=\"#\">\n                    <i class=\"fas fa-cogs fa-sm fa-fw mr-2 text-gray-400\"></i>\n                    Settings\n                  </a>\n                  <a class=\"dropdown-item\" href=\"#\">\n                    <i class=\"fas fa-list fa-sm fa-fw mr-2 text-gray-400\"></i>\n                    Activity Log\n                  </a>\n                  <div class=\"dropdown-divider\"></div>\n                  <a class=\"dropdown-item\" href=\"#\" data-toggle=\"modal\" data-target=\"#logoutModal\">\n                    <i class=\"fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400\"></i>\n                    Logout\n                  </a>\n                </div>\n              </li>\n  \n            </ul>\n  \n          </nav>\n          <!-- End of Topbar -->\n  \n          <!-- Begin Page Content -->\n          <div class=\"container-fluid\">\n              <h1 class=\"h3 mb-4 text-gray-800\">{{ title }}</h1>\n              <router-outlet #outlet=\"outlet\"></router-outlet>\n          </div>\n          <!-- /.container-fluid -->\n  \n        </div>\n        <!-- End of Main Content -->\n  \n        <!-- Footer -->\n        <footer class=\"sticky-footer bg-white\">\n          <div class=\"container my-auto\">\n            <div class=\"copyright text-center my-auto\">\n              <span>Copyright &copy; Your Website 2019</span>\n            </div>\n          </div>\n        </footer>\n        <!-- End of Footer -->\n  \n      </div>\n      <!-- End of Content Wrapper -->\n  \n    </div>\n    <!-- End of Page Wrapper -->\n  \n    <!-- Scroll to Top Button-->\n    <a class=\"scroll-to-top rounded\" href=\"#page-top\">\n      <i class=\"fas fa-angle-up\"></i>\n    </a>\n  \n    <!-- Logout Modal-->\n    <div class=\"modal fade\" id=\"logoutModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n      <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n          <div class=\"modal-header\">\n            <h5 class=\"modal-title\" id=\"exampleModalLabel\">Ready to Leave?</h5>\n            <button class=\"close\" type=\"button\" data-dismiss=\"modal\" aria-label=\"Close\">\n              <span aria-hidden=\"true\">×</span>\n            </button>\n          </div>\n          <div class=\"modal-body\">Select \"Logout\" below if you are ready to end your current session.</div>\n          <div class=\"modal-footer\">\n            <button class=\"btn btn-secondary\" type=\"button\" data-dismiss=\"modal\">Cancel</button>\n            <a class=\"btn btn-primary\" href=\"login.html\">Logout</a>\n          </div>\n        </div>\n      </div>\n    </div>"

/***/ }),

/***/ "./src/app/components/template/main/main.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/components/template/main/main.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdGVtcGxhdGUvbWFpbi9tYWluLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/template/main/main.component.ts":
/*!************************************************************!*\
  !*** ./src/app/components/template/main/main.component.ts ***!
  \************************************************************/
/*! exports provided: TemplateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplateComponent", function() { return TemplateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../services/auth.service */ "./src/app/services/auth.service.ts");



var TemplateComponent = /** @class */ (function () {
    function TemplateComponent(auth) {
        this.auth = auth;
    }
    TemplateComponent.prototype.ngOnInit = function () {
        this.user = this.auth.getUser();
    };
    TemplateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-template',
            template: __webpack_require__(/*! ./main.component.html */ "./src/app/components/template/main/main.component.html"),
            styles: [__webpack_require__(/*! ./main.component.scss */ "./src/app/components/template/main/main.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], TemplateComponent);
    return TemplateComponent;
}());



/***/ }),

/***/ "./src/app/components/template/sidebar/sidebar.component.html":
/*!********************************************************************!*\
  !*** ./src/app/components/template/sidebar/sidebar.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"navbar-nav bg-gradient-primary sidebar sidebar-dark accordion\" id=\"accordionSidebar\"\n[ngClass]=\"{\n  'toggled': isMenuClosed\n}\">\n  \n    <!-- Sidebar - Brand -->\n    <a class=\"sidebar-brand d-flex align-items-center justify-content-center\" href=\"index.html\">\n      <div class=\"sidebar-brand-icon rotate-n-15\">\n          <i class=\"fas fa-blog\"></i>\n      </div>\n      <div class=\"sidebar-brand-text mx-3\">Blog App <sup>Beta</sup></div>\n    </a>\n\n    <!-- Divider -->\n    <hr class=\"sidebar-divider my-0\">\n\n    <li class=\"nav-item\" *ngFor=\"let item of menue\">\n      <a class=\"nav-link\" [routerLink]=\"item.url\">\n        <i class=\"fas fa-fw fa-table\"></i>\n        <span>{{ item.title }}</span></a>\n    </li>\n\n    <!-- Divider -->\n    <hr class=\"sidebar-divider d-none d-md-block\">\n\n    <!-- Sidebar Toggler (Sidebar) -->\n    <div class=\"text-center d-none d-md-inline\">\n      <button class=\"rounded-circle border-0\" id=\"sidebarToggle\"\n      (click)=\"onSideNavModeChange()\">\n    </button>\n    </div>\n\n  </ul>"

/***/ }),

/***/ "./src/app/components/template/sidebar/sidebar.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/components/template/sidebar/sidebar.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdGVtcGxhdGUvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/template/sidebar/sidebar.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/components/template/sidebar/sidebar.component.ts ***!
  \******************************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_resize_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../services/resize.service */ "./src/app/services/resize.service.ts");
/* harmony import */ var _services_page_animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../services/page.animation */ "./src/app/services/page.animation.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");







var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(resizeService, route, authService, router) {
        this.resizeService = resizeService;
        this.route = route;
        this.authService = authService;
        this.router = router;
        this.menue = [];
        this.isMenuClosed = this.isSmallWidth();
        this.user = authService.getUser();
        if (authService.getUser() && authService.getUser().role === 'User') {
            this.isMenuClosed = true;
        }
        var vm = this;
    }
    SidebarComponent.prototype.ngOnInit = function () {
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
            }
        ];
    };
    /**
     * Call resize service after side panel mode changes
     */
    SidebarComponent.prototype.onSideNavModeChange = function () {
        this.isMenuClosed = !this.isMenuClosed;
    };
    SidebarComponent.prototype.isSmallWidth = function () {
        return window.innerWidth < 700;
    };
    SidebarComponent.prototype.logout = function () {
        this.authService.logout();
        this.router.navigateByUrl('/');
    };
    /**
     * Return url as state, that will trigger animation when url changes
     * @param outlet
     * @returns {string}
     */
    SidebarComponent.prototype.getState = function (outlet) {
        return this.router.url;
    };
    SidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/components/template/sidebar/sidebar.component.html"),
            animations: [_services_page_animation__WEBPACK_IMPORTED_MODULE_3__["routerTransition"]],
            styles: [__webpack_require__(/*! ./sidebar.component.scss */ "./src/app/components/template/sidebar/sidebar.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_resize_service__WEBPACK_IMPORTED_MODULE_2__["ResizeService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");



 // change to new RxJS 6 import syntax

var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem('token')
    })
};
var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
        this.urlPrefix = '';
        this.endpoint = '/post/';
        this.urlPrefix = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].baseUrl + this.endpoint;
    }
    AuthService.prototype.getUsers = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["forkJoin"])(this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].baseUrl + '/users'));
    };
    AuthService.prototype.login = function (credentials) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].baseUrl + '/users/login', credentials);
    };
    AuthService.prototype.register = function (user) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].baseUrl + '/users', user);
    };
    AuthService.prototype.getAuthUrl = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].baseUrl + '/auth');
    };
    AuthService.prototype.authenticate = function (auth) {
        console.log(auth);
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].baseUrl + '/auth', auth);
    };
    AuthService.prototype.isAuthenticated = function () {
        return true;
        if (localStorage.getItem('token')) {
            return true;
        }
        return false;
    };
    AuthService.prototype.isAdmin = function () {
        return true; //localStorage.getItem('role') === 'admin';
    };
    AuthService.prototype.getUserEmail = function () {
        return 'yousef@yousef.com'; //localStorage.getItem('username');
    };
    AuthService.prototype.logout = function () {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
    };
    AuthService.prototype.getUser = function () {
        return { 'username': 'Yousef', 'role': 'admin' };
        //return JSON.parse(localStorage.getItem('user'));
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/blog.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/blog.service.ts ***!
  \******************************************/
/*! exports provided: BlogService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogService", function() { return BlogService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");



 // change to new RxJS 6 import syntax

var BlogService = /** @class */ (function () {
    function BlogService(http) {
        this.http = http;
        this.urlPrefix = '';
        this.endpoint = '/post/';
        this.urlPrefix = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].baseUrl + this.endpoint;
    }
    BlogService.prototype.getCount = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["forkJoin"])(this.http.get(this.urlPrefix + 'count'));
    };
    BlogService.prototype.getArticles = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["forkJoin"])(this.http.get(this.urlPrefix + '?sort=-createdAt'));
    };
    BlogService.prototype.getArticle = function (id) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["forkJoin"])(this.http.get(this.urlPrefix + id));
    };
    BlogService.prototype.queryArticles = function (query) {
        var queryJson = { "title": { "$regex": "" + query + "", "$options": 'i' } };
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["forkJoin"])(this.http.get(this.urlPrefix + '?query=' + JSON.stringify(queryJson)));
    };
    BlogService.prototype.createArticle = function (article) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["forkJoin"])(this.http.post(this.urlPrefix, article));
    };
    BlogService.prototype.updatetArticle = function (id, article) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["forkJoin"])(this.http.patch(this.urlPrefix + id, article));
    };
    BlogService.prototype.deleteArticel = function (id) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["forkJoin"])(this.http.delete(this.urlPrefix + id));
    };
    BlogService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], BlogService);
    return BlogService;
}());



/***/ }),

/***/ "./src/app/services/page.animation.ts":
/*!********************************************!*\
  !*** ./src/app/services/page.animation.ts ***!
  \********************************************/
/*! exports provided: routerTransition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routerTransition", function() { return routerTransition; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");

// Page change animation
var routerTransition = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('routerTransition', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => *', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
            // css styles at start of transition
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }),
            // animation and styles at end of transition
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('.3s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1 }))
        ]),
    ])
]);


/***/ }),

/***/ "./src/app/services/resize.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/resize.service.ts ***!
  \********************************************/
/*! exports provided: ResizeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResizeService", function() { return ResizeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



/**
 * Service for informing about resizing of layout
 */
var ResizeService = /** @class */ (function () {
    function ResizeService() {
        this.resizeInformer$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    ResizeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ResizeService);
    return ResizeService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    baseUrl: 'api/v1'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/Yousef/Documents/myworkspace/ArticleApp/blog/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map