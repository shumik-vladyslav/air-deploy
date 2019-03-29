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
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");
/* harmony import */ var _main_content_management_content_management_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./main/content-management/content-management.component */ "./src/app/main/content-management/content-management.component.ts");
/* harmony import */ var _main_widget_management_widget_management_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./main/widget-management/widget-management.component */ "./src/app/main/widget-management/widget-management.component.ts");
/* harmony import */ var _main_content_management_article_article_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./main/content-management/article/article.component */ "./src/app/main/content-management/article/article.component.ts");







var routes = [
    {
        path: '',
        component: _main_main_component__WEBPACK_IMPORTED_MODULE_3__["MainComponent"],
        children: [
            { path: 'content-manage', component: _main_content_management_content_management_component__WEBPACK_IMPORTED_MODULE_4__["ContentManagementComponent"] },
            { path: 'widget-manage', component: _main_widget_management_widget_management_component__WEBPACK_IMPORTED_MODULE_5__["WidgetManagementComponent"] },
            { path: 'article/:id', component: _main_content_management_article_article_component__WEBPACK_IMPORTED_MODULE_6__["ArticleComponent"] },
            { path: 'article', component: _main_content_management_article_article_component__WEBPACK_IMPORTED_MODULE_6__["ArticleComponent"] },
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

module.exports = "<router-outlet></router-outlet>"

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
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");
/* harmony import */ var _main_content_management_content_management_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./main/content-management/content-management.component */ "./src/app/main/content-management/content-management.component.ts");
/* harmony import */ var _main_widget_management_widget_management_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./main/widget-management/widget-management.component */ "./src/app/main/widget-management/widget-management.component.ts");
/* harmony import */ var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/header/header.component */ "./src/app/shared/header/header.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/button */ "./node_modules/primeng/button.js");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(primeng_button__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/dropdown */ "./node_modules/primeng/dropdown.js");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(primeng_dropdown__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var primeng_autocomplete__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/autocomplete */ "./node_modules/primeng/autocomplete.js");
/* harmony import */ var primeng_autocomplete__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(primeng_autocomplete__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/inputtext */ "./node_modules/primeng/inputtext.js");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(primeng_inputtext__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var primeng_tree__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/tree */ "./node_modules/primeng/tree.js");
/* harmony import */ var primeng_tree__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(primeng_tree__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _main_content_management_article_article_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./main/content-management/article/article.component */ "./src/app/main/content-management/article/article.component.ts");
/* harmony import */ var _shared_directives_click_outside_directive__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./shared/directives/click-outside.directive */ "./src/app/shared/directives/click-outside.directive.ts");
/* harmony import */ var _main_content_management_link_article_link_article_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./main/content-management/link-article/link-article.component */ "./src/app/main/content-management/link-article/link-article.component.ts");
/* harmony import */ var _shared_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./shared/dialog/dialog.component */ "./src/app/shared/dialog/dialog.component.ts");










// prime Modules










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _main_main_component__WEBPACK_IMPORTED_MODULE_5__["MainComponent"],
                _main_content_management_content_management_component__WEBPACK_IMPORTED_MODULE_6__["ContentManagementComponent"],
                _main_widget_management_widget_management_component__WEBPACK_IMPORTED_MODULE_7__["WidgetManagementComponent"],
                _shared_header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"],
                _main_content_management_article_article_component__WEBPACK_IMPORTED_MODULE_16__["ArticleComponent"],
                _shared_directives_click_outside_directive__WEBPACK_IMPORTED_MODULE_17__["ClickOutsideDirective"],
                _main_content_management_link_article_link_article_component__WEBPACK_IMPORTED_MODULE_18__["LinkArticleComponent"],
                _shared_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_19__["DialogComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
                // prime Modules
                primeng_button__WEBPACK_IMPORTED_MODULE_10__["ButtonModule"],
                primeng_dropdown__WEBPACK_IMPORTED_MODULE_11__["DropdownModule"],
                primeng_autocomplete__WEBPACK_IMPORTED_MODULE_13__["AutoCompleteModule"],
                primeng_inputtext__WEBPACK_IMPORTED_MODULE_14__["InputTextModule"],
                primeng_tree__WEBPACK_IMPORTED_MODULE_15__["TreeModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/main/content-management/article/article.component.html":
/*!************************************************************************!*\
  !*** ./src/app/main/content-management/article/article.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"head\">\n  <div class=\"df ai-c jc-b full-width\">\n    <div (click)=\"dialog = true\" class=\"c-p df ai-c\">\n      <div>\n        <img class=\"m-r-5\" width=\"28px\" src=\"assets/img/arrow-back.png\" alt=\"\">\n      </div>\n      <div class=\"fs-20\">\n        Edit Article\n      </div>\n    </div>\n    <div class=\"df\">\n      <div class=\"df ai-c m-r-15 c-p\">\n        <img class=\"m-r-5\" width=\"22px\" src=\"assets/img/trash.png\" alt=\"\">\n        <div class=\"color-primary fs-14\">Delete Article</div>\n      </div>\n      <div (click)=\"showPreview = true\" class=\"df ai-c m-r-30 c-p\">\n        <img class=\"m-r-5\" width=\"28px\" src=\"assets/img/view.png\" alt=\"\">\n        <div class=\"color-primary fs-14\">Preview</div>\n      </div>\n      <div class=\"pos-r\">\n        <input type=\"text\" placeholder=\"Search in article\" pInputText />\n        <div class=\"icon-input\">\n          <img width=\"20px\" src=\"assets/img/search.png\" alt=\"\">\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"fs-13 m-t-10 p-l-35\">\n    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui, deleniti!\n  </div>\n</div>\n\n<div class=\"content-wrap\">\n  <div class=\"half-width\">\n    <div class=\"side-head\">\n      <div>\n        Article\n      </div>\n      <div class=\"df ai-c color-primary\">\n        <div class=\"c-p m-r-15\">\n          <img src=\"assets/img/text-icon.png\"  (click)=\"copyClip()\" alt=\"\">\n        </div>\n        <div class=\"c-p m-r-25 pos-r\">\n          <img src=\"assets/img/text-icon.png\" alt=\"\">\n          <div class=\"close-icon-text\">\n            <div class=\"line1\"></div>\n            <div class=\"line2\"></div>\n          </div>\n        </div>\n        <div (clickOutside)=\"showAddSection = false\" class=\"df ai-c c-p pos-r\">\n          <img (click)=\"showAddSection = !showAddSection\" alt=\"\" class=\"m-r-10 c-p\" src=\"assets/img/addArtictes.png\">\n          <div class=\"m-r-30\"> Add Section </div>\n          <div *ngIf=\"showAddSection\" class=\"add-section-drb\">\n            <div (click)=\"addSection('text')\" class=\"add-section-drb--item\">\n              <div class=\"icon-wrap\">\n                <img src=\"assets/img/text-drb.png\" alt=\"\">\n              </div>\n              <div>\n                Text\n              </div>\n            </div>\n            <div (click)=\"addSection('picture')\" class=\"add-section-drb--item\">\n              <div class=\"icon-wrap\">\n                <img src=\"assets/img/img-drb.png\" alt=\"\">\n              </div>\n              <div>\n                Picture\n              </div>\n            </div>\n            <div (click)=\"addSection('video')\" class=\"add-section-drb--item\">\n              <div class=\"icon-wrap\">\n                <img src=\"assets/img/video-drb.png\" alt=\"\">\n              </div>\n              <div>\n                Video\n              </div>\n            </div>\n            <div (click)=\"addSection('link')\" class=\"add-section-drb--item\">\n              <div class=\"icon-wrap\">\n                <img src=\"assets/img/link-drb.png\" alt=\"\">\n              </div>\n              <div>\n                Link\n              </div>\n            </div>\n            <div (click)=\"addSection('button')\" class=\"add-section-drb--item\">\n              <div class=\"icon-wrap\">\n                <img src=\"assets/img/button-drb.png\" alt=\"\">\n              </div>\n              <div>\n                Button\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"tags-wrap\">\n      <div class=\"m-r-20 p-t-12\">\n        Tags:\n      </div>\n      <div *ngFor=\"let tag of dataToEdit.tegs; let i = index\" class=\"chips\">\n        {{tag}}\n        <img (click)=\"detaleItem(dataToEdit.tegs, i)\" class=\"close c-p\" src=\"assets/img/close.png\" alt=\"\">\n      </div>\n      <input [(ngModel)]=\"addTagField\" class=\"add-tag\" type=\"text\" (keyup.enter)=\"addTags(dataToEdit.tegs, addTagField)\"\n        placeholder=\"Add tag\" pInputText />\n    </div>\n    <div class=\"body-side body-side-scroll\" id=\"editBox\" style=\"min-height: calc(100% - 55px); padding: 20px;\">\n      <div class=\"df ai-c m-b-30\">\n        <div class=\"m-r-15\">\n          Title:\n        </div>\n        <input class=\"full-width\" [(ngModel)]=\"dataToEdit.title\" type=\"text\" pInputText value=\"3D touch\" />\n      </div>\n      <div *ngFor=\"let item of sectionData; let i = index\">\n        <div class=\"article-section\">\n          <div class=\"actions-row\">\n            <button (click)=\"moveTop(item, i)\" class=\"top\">\n              <img src=\"assets/img/arrow.png\" alt=\"\">\n            </button>\n            <button (click)=\"moveBot(item, i)\" class=\"bot\">\n              <img src=\"assets/img/arrow.png\" alt=\"\">\n            </button>\n            <button *ngIf=\"showEdit !== i\" (click)=\"showEdit = i\">\n              Edit Section\n            </button>\n            <button *ngIf=\"showEdit === i\" (click)=\"showEdit = null\">\n              Save Section\n            </button>\n            <button (click)=\"detaleItem(sectionData, i)\">\n              Delete Section\n            </button>\n          </div>\n          <div class=\"article-section-body\">\n            <div *ngIf=\"item.text\">\n              <div id=\"text{{i}}\" class=\"text\" (click)=\"selectionId = i\">\n                {{item.text}}\n              </div>\n              <textarea *ngIf=\"showEdit === i\" [(ngModel)]=\"item.text\"></textarea>\n            </div>\n            <div class=\"text-center\" *ngIf=\"item.picture\">\n              <img style=\"max-width: 70%; max-height: 400px\" [src]=\"item.picture\" alt=\"\">\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"half-width\">\n    <div class=\"side-head\">\n      <div>\n        Questions\n      </div>\n      <div class=\"df ai-c\">\n        <img (click)=\"editQuestion()\" width=\"20px\" class=\"m-r-20 c-p\" src=\"assets/img/editArticle.png\" alt=\"\">\n        <img (click)=\"showArticle = true\" width=\"20px\" class=\"m-r-20 c-p\" src=\"assets/img/fasten.png\" alt=\"\">\n        <img (click)=\"deleteQuestion()\" width=\"18px\" class=\"c-p\" src=\"assets/img/trash.png\" alt=\"\">\n      </div>\n    </div>\n    <div class=\"body-side\">\n      <div *ngFor=\"let item of questions; let i = index\" class=\"articles-row jc-b\">\n        <div class=\"df ai-c\">\n          <input class=\"m-r-20\" [(ngModel)]=\"item.checked\" type=\"checkbox\">\n          <div class=\"icon-wrap\">\n            <img src=\"assets/img/text-icon.png\" alt=\"\">\n          </div>\n          <div (dblclick)=\"item.edit = true\" *ngIf=\"!item.edit\"> {{item.question}} </div>\n          <div class=\"df ai-c wrap\" *ngIf=\"item.edit\">\n            <input type=\"text\" [(ngModel)]=\"item.question\" pInputText />\n            <button *ngIf=\"item.edit\" (click)=\"item.edit = false\" class=\"button-default\">\n              Save\n            </button>\n          </div>\n        </div>\n        <div (click)=\"detaleItem(questions, i)\" class=\"c-p icons\">\n          <img alt=\"\" src=\"assets/img/trash.png\" width=\"18px\">\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div *ngIf=\"showPreview\" (click)=\"showPreview = false\" class=\"bg-modal\"></div>\n<div *ngIf=\"showPreview\" class=\"modal\">\n  <div class=\"modal-body-wrap\">\n    <div class=\"modal-body\" style=\"width: 80vw; max-width: 600px; padding: 40px;\">\n      <div class=\"fs-20 color-dark m-b-40 df jc-b ai-c\">\n        <div>\n          {{dataToEdit.title}}\n        </div>\n        <div class=\"c-p\" (click)=\"showPreview = false\">\n          <img width=\"17px\" src=\"assets/img/times-black.png\" alt=\"\">\n        </div>\n      </div>\n      <div *ngFor=\"let item of sectionData\">\n        <p *ngIf=\"item.text\" class=\"m-b-40\">\n          {{item.text}}\n        </p>\n        <div *ngIf=\"item.picture\" class=\"text-center\">\n          <img style=\"max-height: 400px; max-width: 80%;\" [src]=\"item.picture\" alt=\"\">\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<app-link-article [show]=\"showArticle\" (hide)=\"showArticle = false\"></app-link-article>\n<app-dialog *ngIf=\"dialog\" [question]=\"'Are you sure you want to discard all changes?'\" (result)=\"answer($event)\"></app-dialog>"

/***/ }),

/***/ "./src/app/main/content-management/article/article.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/main/content-management/article/article.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content-wrap {\n  display: flex;\n  justify-content: space-between;\n  min-height: calc(100vh - 234px); }\n\n.head {\n  height: 76px;\n  background: inherit;\n  background-color: #f2f2f2;\n  display: flex;\n  align-items: center;\n  padding-left: 90px;\n  padding-right: 50px;\n  margin-bottom: 40px; }\n\n.lable-drb {\n  position: absolute;\n  top: 5px;\n  left: 5px;\n  font-size: 11px;\n  color: #1e1e1e; }\n\n.input-search {\n  width: 100%;\n  max-width: 533px;\n  margin-left: 10px; }\n\n.input-search input {\n    height: 48px;\n    width: 100%; }\n\n.side-head {\n  height: 37px;\n  background-color: #e4e4e4;\n  box-sizing: border-box;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 15px; }\n\n.body-side {\n  background-color: white;\n  box-sizing: border-box;\n  border-width: 1px;\n  border-style: solid;\n  border-color: #d7d7d7;\n  min-height: 100%; }\n\n.body-side-scroll {\n  overflow-y: auto;\n  max-height: 400px; }\n\n.arrow-right {\n  -webkit-transform: rotate(-90deg);\n          transform: rotate(-90deg); }\n\n.folder-side {\n  width: 225px;\n  min-width: 225px;\n  margin-right: 20px; }\n\n.articles-side {\n  width: 100%;\n  margin-right: 20px; }\n\n.article-side {\n  width: 50%;\n  max-width: 550px;\n  min-width: 420px; }\n\n.rotate-180 {\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg); }\n\n.rotate--90 {\n  -webkit-transform: rotate(-90deg);\n          transform: rotate(-90deg); }\n\n.articles-row {\n  border-bottom: 1px solid #d7d7d7;\n  display: flex;\n  align-items: center;\n  padding: 10px 20px;\n  transition: all 0.3s;\n  min-height: 46px; }\n\n.articles-row .icons {\n    display: none;\n    align-items: center; }\n\n.articles-row:hover {\n    background: #dff5f9; }\n\n.articles-row:hover .icons {\n      display: flex; }\n\n.tags-wrap {\n  display: flex;\n  flex-wrap: wrap;\n  padding: 5px 15px;\n  background-color: #f2f2f2;\n  box-sizing: border-box;\n  border-width: 1px;\n  border-style: solid;\n  border-color: #d7d7d7; }\n\n.add-tag {\n  height: 27px;\n  border-radius: 10px;\n  margin-bottom: 10px;\n  margin-top: 6px;\n  width: 120px; }\n\n.title-row {\n  height: 45px;\n  border-width: 1px;\n  border-style: solid;\n  border-color: #d7d7d7;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background: #f2f2f2;\n  padding: 10px 20px; }\n\n.search-row {\n  padding: 20px 20px 10px 20px;\n  display: flex;\n  font-size: 12px;\n  transition: all 0.3s;\n  border-bottom: 1px solid #d7d7d7;\n  position: relative; }\n\n.search-row .description {\n    overflow: hidden;\n    color: #999999; }\n\n.search-row .delete-icon {\n    display: none;\n    align-items: center;\n    position: absolute;\n    right: 20px; }\n\n.search-row:hover {\n    background-color: #dff5f9; }\n\n.search-row:hover .delete-icon {\n      display: flex; }\n\n.stick-row {\n  font-size: 11px;\n  color: #018191;\n  display: flex;\n  margin-bottom: 5px; }\n\n.question-row {\n  border-bottom: 1px solid #d7d7d7; }\n\n.question-row-head {\n    display: flex;\n    align-items: center;\n    min-height: 40px;\n    padding: 5px 10px;\n    cursor: pointer; }\n\n.question-row-body {\n    padding: 20px 40px 20px 40px;\n    background: #f2f2f2;\n    position: relative; }\n\n.question-row-body .question-item {\n      height: 55px;\n      background: inherit;\n      background-color: white;\n      display: flex;\n      align-items: center;\n      justify-content: space-between;\n      padding: 5px 20px;\n      border: 1px solid #d7d7d7;\n      border-bottom: 0; }\n\n.question-row-body .question-item .trash-icon {\n        display: none;\n        align-items: center;\n        cursor: pointer; }\n\n.question-row-body .question-item:hover {\n        background-color: #dff5f9; }\n\n.question-row-body .question-item:hover .trash-icon {\n          display: flex; }\n\n.question-row-body .question-item:last-child {\n        border-bottom: 1px solid #d7d7d7; }\n\n.icon-input {\n  position: absolute;\n  right: 9px;\n  top: calc(50% - 10px); }\n\n.nitif-circle {\n  background: #ff6600;\n  width: 16px;\n  height: 16px;\n  border-radius: 100px;\n  overflow: hidden;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 1px solid #feb98c;\n  font-size: 10px;\n  color: white; }\n\n.serch-result-dropdawn {\n  position: absolute;\n  top: 100%;\n  background: white;\n  width: 100%;\n  border: 1px solid #a6a6a6;\n  border-top: 0;\n  z-index: 111; }\n\n.serch-result-dropdawn--item {\n    display: flex;\n    align-items: center;\n    padding: 9px 10px;\n    cursor: pointer; }\n\n.serch-result-dropdawn--icon-wrap {\n    width: 25px;\n    min-width: 25px; }\n\n.serch-result-dropdawn--foot {\n    border-top: 1px solid #a6a6a6;\n    padding: 10px;\n    text-align: center;\n    cursor: pointer; }\n\n.head {\n  padding-left: 30px;\n  display: flex;\n  flex-flow: column;\n  align-items: flex-start;\n  justify-content: center;\n  min-height: 81px; }\n\n.half-width {\n  width: calc(50% - 10px);\n  margin-right: 20px; }\n\n.half-width:last-child {\n    margin-right: 0px; }\n\n.close-icon-text {\n  position: absolute;\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg);\n  bottom: 11px;\n  right: 8px; }\n\n.close-icon-text .line1 {\n    position: absolute;\n    content: \"\";\n    width: 11px;\n    height: 2px;\n    background: #f61b1b; }\n\n.close-icon-text .line2 {\n    position: absolute;\n    content: \"\";\n    width: 11px;\n    height: 2px;\n    background: #f61b1b;\n    -webkit-transform: rotate(90deg);\n            transform: rotate(90deg); }\n\n.icon-wrap {\n  width: 30px;\n  min-width: 30px; }\n\n.article-section .actions-row {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  margin-bottom: 10px; }\n\n.article-section .actions-row button {\n    background: none;\n    cursor: pointer;\n    outline: none;\n    margin-left: 10px;\n    min-width: 135px;\n    border: 1px solid #a6a6a6;\n    height: 30px;\n    display: flex;\n    align-items: center;\n    justify-content: center; }\n\n.article-section .actions-row button.top {\n      min-width: 100px; }\n\n.article-section .actions-row button.bot {\n      min-width: 100px; }\n\n.article-section .actions-row button.bot img {\n        -webkit-transform: rotate(180deg);\n                transform: rotate(180deg); }\n\n.article-section-body {\n  padding: 20px;\n  border: 1px solid #a6a6a6;\n  margin-bottom: 30px;\n  position: relative; }\n\n.article-section-body textarea {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    white-space: pre-line;\n    box-sizing: border-box;\n    word-break: break-all;\n    padding: 20px;\n    font-family: \"Arial\";\n    font-weight: 400;\n    font-style: normal;\n    font-size: 13px;\n    color: #333333;\n    line-height: normal;\n    resize: none;\n    outline: none;\n    border: none;\n    box-shadow: 6px 5px 8px -6px #00000087; }\n\n.article-section-body .text {\n    box-sizing: border-box;\n    word-break: break-all;\n    -webkit-appearance: textarea;\n    background-color: white;\n    -webkit-rtl-ordering: logical;\n    flex-direction: column;\n    resize: auto;\n    cursor: text;\n    white-space: pre-wrap;\n    overflow-wrap: break-word;\n    text-rendering: auto;\n    color: initial;\n    letter-spacing: normal;\n    word-spacing: normal;\n    text-transform: none;\n    text-indent: 0px;\n    text-shadow: none;\n    display: inline-block;\n    text-align: start;\n    margin: 0em;\n    font: 400 13.3333px Arial;\n    -webkit-writing-mode: horizontal-tb !important; }\n\n.add-section-drb {\n  position: absolute;\n  top: calc(100% + 10px);\n  background-color: white;\n  border-radius: 0px;\n  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.35);\n  z-index: 11;\n  width: 154px; }\n\n.add-section-drb--item {\n    padding: 8px 15px;\n    display: flex;\n    align-items: center;\n    cursor: pointer;\n    transition: all 0.3s;\n    font-size: 13px; }\n\n.add-section-drb--item:hover {\n      background: rgba(51, 51, 51, 0.1); }\n\n.add-section-drb--item .icon-wrap {\n      width: 40px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NodW1pay9Eb2N1bWVudHMvU1BPVC9zcmMvYXBwL21haW4vY29udGVudC1tYW5hZ2VtZW50L2NvbnRlbnQtbWFuYWdlbWVudC5jb21wb25lbnQuc2NzcyIsIi9ob21lL3NodW1pay9Eb2N1bWVudHMvU1BPVC9zcmMvYXBwL21haW4vY29udGVudC1tYW5hZ2VtZW50L2FydGljbGUvYXJ0aWNsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsK0JBQStCLEVBQUE7O0FBRWpDO0VBQ0UsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQix5QkFBd0M7RUFDeEMsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLG1CQUFtQixFQUFBOztBQUVyQjtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUNULGVBQWU7RUFDZixjQUFjLEVBQUE7O0FBRWhCO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixpQkFBaUIsRUFBQTs7QUFIbkI7SUFLSSxZQUFZO0lBQ1osV0FBVyxFQUFBOztBQUdmO0VBQ0UsWUFBWTtFQUNaLHlCQUF3QztFQUN4QyxzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIsZUFBZSxFQUFBOztBQUVqQjtFQUNFLHVCQUF3QztFQUN4QyxzQkFBc0I7RUFDdEIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixxQkFBb0M7RUFDcEMsZ0JBQWdCLEVBQUE7O0FBRWxCO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQixFQUFBOztBQUVuQjtFQUNFLGlDQUF5QjtVQUF6Qix5QkFBeUIsRUFBQTs7QUFFM0I7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGtCQUFrQixFQUFBOztBQUVwQjtFQUNFLFdBQVc7RUFDWCxrQkFBa0IsRUFBQTs7QUFFcEI7RUFDRSxVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLGdCQUFnQixFQUFBOztBQUVsQjtFQUNFLGlDQUF5QjtVQUF6Qix5QkFBeUIsRUFBQTs7QUFFM0I7RUFDRSxpQ0FBeUI7VUFBekIseUJBQXlCLEVBQUE7O0FBRTNCO0VBQ0UsZ0NBQStDO0VBQy9DLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQixnQkFBZ0IsRUFBQTs7QUFObEI7SUFRSSxhQUFhO0lBQ2IsbUJBQW1CLEVBQUE7O0FBVHZCO0lBWUksbUJBQWtDLEVBQUE7O0FBWnRDO01BY00sYUFBYSxFQUFBOztBQUluQjtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLHlCQUF3QztFQUN4QyxzQkFBc0I7RUFDdEIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixxQkFBb0MsRUFBQTs7QUFFdEM7RUFDRSxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsWUFBWSxFQUFBOztBQUVkO0VBQ0UsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIscUJBQWdDO0VBQ2hDLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixrQkFBa0IsRUFBQTs7QUFFcEI7RUFDRSw0QkFBNEI7RUFDNUIsYUFBYTtFQUNiLGVBQWU7RUFDZixvQkFBb0I7RUFDcEIsZ0NBQTJDO0VBQzNDLGtCQUFrQixFQUFBOztBQU5wQjtJQVFJLGdCQUFnQjtJQUNoQixjQUFjLEVBQUE7O0FBVGxCO0lBWUksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsV0FBVyxFQUFBOztBQWZmO0lBa0JJLHlCQUF3QyxFQUFBOztBQWxCNUM7TUFvQk0sYUFBYSxFQUFBOztBQUluQjtFQUNFLGVBQWU7RUFDZixjQUFjO0VBQ2QsYUFBYTtFQUNiLGtCQUFrQixFQUFBOztBQUVwQjtFQUNFLGdDQUEyQyxFQUFBOztBQUMzQztJQUNFLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixlQUFlLEVBQUE7O0FBRWpCO0lBQ0UsNEJBQTRCO0lBQzVCLG1CQUFrQztJQUNsQyxrQkFBa0IsRUFBQTs7QUFIbkI7TUFLRyxZQUFZO01BQ1osbUJBQW1CO01BQ25CLHVCQUFvQztNQUNwQyxhQUFhO01BQ2IsbUJBQW1CO01BQ25CLDhCQUE4QjtNQUM5QixpQkFBaUI7TUFDakIseUJBQW9DO01BQ3BDLGdCQUFnQixFQUFBOztBQWJuQjtRQWVLLGFBQWE7UUFDYixtQkFBbUI7UUFDbkIsZUFBZSxFQUFBOztBQWpCcEI7UUFvQksseUJBQXdDLEVBQUE7O0FBcEI3QztVQXNCTyxhQUFhLEVBQUE7O0FBdEJwQjtRQTBCSyxnQ0FBMkMsRUFBQTs7QUFLbkQ7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLHFCQUFxQixFQUFBOztBQUV2QjtFQUNFLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsWUFBWTtFQUNaLG9CQUFvQjtFQUNwQixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIseUJBQXlCO0VBQ3pCLGVBQWU7RUFDZixZQUFZLEVBQUE7O0FBRWQ7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLGFBQWE7RUFDYixZQUFZLEVBQUE7O0FBQ1o7SUFDRSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixlQUFlLEVBQUE7O0FBRWpCO0lBQ0UsV0FBVztJQUNYLGVBQWUsRUFBQTs7QUFFakI7SUFDRSw2QkFBNkI7SUFDN0IsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixlQUFlLEVBQUE7O0FDck9uQjtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLHVCQUF1QjtFQUN2Qix1QkFBdUI7RUFDdkIsZ0JBQWdCLEVBQUE7O0FBRWxCO0VBQ0UsdUJBQXVCO0VBQ3ZCLGtCQUFrQixFQUFBOztBQUZwQjtJQUlJLGlCQUFpQixFQUFBOztBQUdyQjtFQUNFLGtCQUFrQjtFQUNsQixnQ0FBd0I7VUFBeEIsd0JBQXdCO0VBQ3hCLFlBQVk7RUFDWixVQUFVLEVBQUE7O0FBSlo7SUFNSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFdBQVc7SUFDWCxXQUFXO0lBQ1gsbUJBQW1CLEVBQUE7O0FBVnZCO0lBYUksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxXQUFXO0lBQ1gsV0FBVztJQUNYLG1CQUFtQjtJQUNuQixnQ0FBd0I7WUFBeEIsd0JBQXdCLEVBQUE7O0FBRzVCO0VBQ0UsV0FBVztFQUNYLGVBQWUsRUFBQTs7QUFFakI7RUFFSSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QixtQkFBbUIsRUFBQTs7QUFMdkI7SUFPTSxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUIsRUFBQTs7QUFoQjdCO01Ba0JRLGdCQUFnQixFQUFBOztBQWxCeEI7TUFxQlEsZ0JBQWdCLEVBQUE7O0FBckJ4QjtRQXVCVSxpQ0FBeUI7Z0JBQXpCLHlCQUF5QixFQUFBOztBQUtqQztFQUNFLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLGtCQUFrQixFQUFBOztBQUpuQjtJQU1HLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sT0FBTztJQUNQLFdBQVc7SUFDWCxZQUFZO0lBQ1oscUJBQXFCO0lBQ3JCLHNCQUFzQjtJQUN0QixxQkFBcUI7SUFDckIsYUFBYTtJQUNiLG9CQUFvQjtJQUNwQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixhQUFhO0lBQ2IsWUFBWTtJQUNaLHNDQUFzQyxFQUFBOztBQXhCekM7SUEyQkcsc0JBQXNCO0lBQ3RCLHFCQUFxQjtJQUNyQiw0QkFBNEI7SUFDNUIsdUJBQXVCO0lBQ3ZCLDZCQUE2QjtJQUM3QixzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLFlBQVk7SUFDWixxQkFBcUI7SUFDckIseUJBQXlCO0lBQ3pCLG9CQUFvQjtJQUNwQixjQUFjO0lBQ2Qsc0JBQXNCO0lBQ3RCLG9CQUFvQjtJQUNwQixvQkFBb0I7SUFDcEIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixxQkFBcUI7SUFDckIsaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCx5QkFBeUI7SUFDekIsOENBQThDLEVBQUE7O0FBSXBEO0VBQ0Usa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0Qix1QkFBd0M7RUFDeEMsa0JBQWtCO0VBQ2xCLDJDQUEyQztFQUMzQyxXQUFXO0VBQ1gsWUFBWSxFQUFBOztBQUNaO0lBQ0UsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLG9CQUFvQjtJQUNwQixlQUFlLEVBQUE7O0FBTmhCO01BUUcsaUNBQWlDLEVBQUE7O0FBUnBDO01BV0csV0FBVyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvbWFpbi9jb250ZW50LW1hbmFnZW1lbnQvYXJ0aWNsZS9hcnRpY2xlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnQtd3JhcCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtIDIzNHB4KTtcbn1cbi5oZWFkIHtcbiAgaGVpZ2h0OiA3NnB4O1xuICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0MiwgMjQyLCAyNDIsIDEpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nLWxlZnQ6IDkwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDUwcHg7XG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XG59XG4ubGFibGUtZHJiIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDVweDtcbiAgbGVmdDogNXB4O1xuICBmb250LXNpemU6IDExcHg7XG4gIGNvbG9yOiAjMWUxZTFlO1xufVxuLmlucHV0LXNlYXJjaCB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDUzM3B4O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgaW5wdXQge1xuICAgIGhlaWdodDogNDhweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuLnNpZGUtaGVhZCB7XG4gIGhlaWdodDogMzdweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMjgsIDIyOCwgMjI4LCAxKTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nOiAwIDE1cHg7XG59XG4uYm9keS1zaWRlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci1jb2xvcjogcmdiYSgyMTUsIDIxNSwgMjE1LCAxKTtcbiAgbWluLWhlaWdodDogMTAwJTtcbn1cbi5ib2R5LXNpZGUtc2Nyb2xsIHtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgbWF4LWhlaWdodDogNDAwcHg7XG59XG4uYXJyb3ctcmlnaHQge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpO1xufVxuLmZvbGRlci1zaWRlIHtcbiAgd2lkdGg6IDIyNXB4O1xuICBtaW4td2lkdGg6IDIyNXB4O1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59XG4uYXJ0aWNsZXMtc2lkZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59XG4uYXJ0aWNsZS1zaWRlIHtcbiAgd2lkdGg6IDUwJTtcbiAgbWF4LXdpZHRoOiA1NTBweDtcbiAgbWluLXdpZHRoOiA0MjBweDtcbn1cbi5yb3RhdGUtMTgwIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbn1cbi5yb3RhdGUtLTkwIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKTtcbn1cbi5hcnRpY2xlcy1yb3cge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgyMTUsIDIxNSwgMjE1LCAxKTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMTBweCAyMHB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgbWluLWhlaWdodDogNDZweDtcbiAgLmljb25zIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogcmdiYSgyMjMsIDI0NSwgMjQ5LCAxKTtcbiAgICAuaWNvbnMge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICB9XG4gIH1cbn1cbi50YWdzLXdyYXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIHBhZGRpbmc6IDVweCAxNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0MiwgMjQyLCAyNDIsIDEpO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3JkZXItd2lkdGg6IDFweDtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDIxNSwgMjE1LCAyMTUsIDEpO1xufVxuLmFkZC10YWcge1xuICBoZWlnaHQ6IDI3cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIG1hcmdpbi10b3A6IDZweDtcbiAgd2lkdGg6IDEyMHB4O1xufVxuLnRpdGxlLXJvdyB7XG4gIGhlaWdodDogNDVweDtcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci1jb2xvcjogcmdiKDIxNSwgMjE1LCAyMTUpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6ICNmMmYyZjI7XG4gIHBhZGRpbmc6IDEwcHggMjBweDtcbn1cbi5zZWFyY2gtcm93IHtcbiAgcGFkZGluZzogMjBweCAyMHB4IDEwcHggMjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYigyMTUsIDIxNSwgMjE1KTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAuZGVzY3JpcHRpb24ge1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgY29sb3I6ICM5OTk5OTk7XG4gIH1cbiAgLmRlbGV0ZS1pY29uIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAyMHB4O1xuICB9XG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjIzLCAyNDUsIDI0OSwgMSk7XG4gICAgLmRlbGV0ZS1pY29uIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgfVxuICB9XG59XG4uc3RpY2stcm93IHtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBjb2xvcjogIzAxODE5MTtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuLnF1ZXN0aW9uLXJvdyB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2IoMjE1LCAyMTUsIDIxNSk7XG4gICYtaGVhZCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1pbi1oZWlnaHQ6IDQwcHg7XG4gICAgcGFkZGluZzogNXB4IDEwcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG4gICYtYm9keSB7XG4gICAgcGFkZGluZzogMjBweCA0MHB4IDIwcHggNDBweDtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI0MiwgMjQyLCAyNDIsIDEpO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAucXVlc3Rpb24taXRlbSB7XG4gICAgICBoZWlnaHQ6IDU1cHg7XG4gICAgICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICBwYWRkaW5nOiA1cHggMjBweDtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigyMTUsIDIxNSwgMjE1KTtcbiAgICAgIGJvcmRlci1ib3R0b206IDA7XG4gICAgICAudHJhc2gtaWNvbiB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIH1cbiAgICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIyMywgMjQ1LCAyNDksIDEpO1xuICAgICAgICAudHJhc2gtaWNvbiB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYigyMTUsIDIxNSwgMjE1KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbi5pY29uLWlucHV0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogOXB4O1xuICB0b3A6IGNhbGMoNTAlIC0gMTBweCk7XG59XG4ubml0aWYtY2lyY2xlIHtcbiAgYmFja2dyb3VuZDogI2ZmNjYwMDtcbiAgd2lkdGg6IDE2cHg7XG4gIGhlaWdodDogMTZweDtcbiAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZmViOThjO1xuICBmb250LXNpemU6IDEwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5zZXJjaC1yZXN1bHQtZHJvcGRhd24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTAwJTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6IDFweCBzb2xpZCAjYTZhNmE2O1xuICBib3JkZXItdG9wOiAwO1xuICB6LWluZGV4OiAxMTE7XG4gICYtLWl0ZW0ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiA5cHggMTBweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbiAgJi0taWNvbi13cmFwIHtcbiAgICB3aWR0aDogMjVweDtcbiAgICBtaW4td2lkdGg6IDI1cHg7XG4gIH1cbiAgJi0tZm9vdCB7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNhNmE2YTY7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG59XG4iLCJAaW1wb3J0IFwiLi4vY29udGVudC1tYW5hZ2VtZW50LmNvbXBvbmVudC5zY3NzXCI7XG5cbi5oZWFkIHtcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtaW4taGVpZ2h0OiA4MXB4O1xufVxuLmhhbGYtd2lkdGgge1xuICB3aWR0aDogY2FsYyg1MCUgLSAxMHB4KTtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAmOmxhc3QtY2hpbGQge1xuICAgIG1hcmdpbi1yaWdodDogMHB4O1xuICB9XG59XG4uY2xvc2UtaWNvbi10ZXh0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gIGJvdHRvbTogMTFweDtcbiAgcmlnaHQ6IDhweDtcbiAgLmxpbmUxIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgY29udGVudDogXCJcIjtcbiAgICB3aWR0aDogMTFweDtcbiAgICBoZWlnaHQ6IDJweDtcbiAgICBiYWNrZ3JvdW5kOiAjZjYxYjFiO1xuICB9XG4gIC5saW5lMiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgd2lkdGg6IDExcHg7XG4gICAgaGVpZ2h0OiAycHg7XG4gICAgYmFja2dyb3VuZDogI2Y2MWIxYjtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG4gIH1cbn1cbi5pY29uLXdyYXAge1xuICB3aWR0aDogMzBweDtcbiAgbWluLXdpZHRoOiAzMHB4O1xufVxuLmFydGljbGUtc2VjdGlvbiB7XG4gIC5hY3Rpb25zLXJvdyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICBidXR0b24ge1xuICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAgIG1pbi13aWR0aDogMTM1cHg7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjYTZhNmE2O1xuICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICYudG9wIHtcbiAgICAgICAgbWluLXdpZHRoOiAxMDBweDtcbiAgICAgIH1cbiAgICAgICYuYm90IHtcbiAgICAgICAgbWluLXdpZHRoOiAxMDBweDtcbiAgICAgICAgaW1nIHtcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gICYtYm9keSB7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYTZhNmE2O1xuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRleHRhcmVhIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogMDtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIHdoaXRlLXNwYWNlOiBwcmUtbGluZTtcbiAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XG4gICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgZm9udC1mYW1pbHk6IFwiQXJpYWxcIjtcbiAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICBjb2xvcjogIzMzMzMzMztcbiAgICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gICAgICByZXNpemU6IG5vbmU7XG4gICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgYm94LXNoYWRvdzogNnB4IDVweCA4cHggLTZweCAjMDAwMDAwODc7XG4gICAgfVxuICAgIC50ZXh0IHtcbiAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XG4gICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IHRleHRhcmVhO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAtd2Via2l0LXJ0bC1vcmRlcmluZzogbG9naWNhbDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICByZXNpemU6IGF1dG87XG4gICAgICBjdXJzb3I6IHRleHQ7XG4gICAgICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XG4gICAgICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xuICAgICAgdGV4dC1yZW5kZXJpbmc6IGF1dG87XG4gICAgICBjb2xvcjogaW5pdGlhbDtcbiAgICAgIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gICAgICB3b3JkLXNwYWNpbmc6IG5vcm1hbDtcbiAgICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICAgICAgdGV4dC1pbmRlbnQ6IDBweDtcbiAgICAgIHRleHQtc2hhZG93OiBub25lO1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgdGV4dC1hbGlnbjogc3RhcnQ7XG4gICAgICBtYXJnaW46IDBlbTtcbiAgICAgIGZvbnQ6IDQwMCAxMy4zMzMzcHggQXJpYWw7XG4gICAgICAtd2Via2l0LXdyaXRpbmctbW9kZTogaG9yaXpvbnRhbC10YiAhaW1wb3J0YW50O1xuICAgIH1cbiAgfVxufVxuLmFkZC1zZWN0aW9uLWRyYiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiBjYWxjKDEwMCUgKyAxMHB4KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xuICBib3gtc2hhZG93OiAzcHggM3B4IDNweCByZ2JhKDAsIDAsIDAsIDAuMzUpO1xuICB6LWluZGV4OiAxMTtcbiAgd2lkdGg6IDE1NHB4O1xuICAmLS1pdGVtIHtcbiAgICBwYWRkaW5nOiA4cHggMTVweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAmOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoNTEsIDUxLCA1MSwgMC4xKTtcbiAgICB9XG4gICAgLmljb24td3JhcCB7XG4gICAgICB3aWR0aDogNDBweDtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/main/content-management/article/article.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/main/content-management/article/article.component.ts ***!
  \**********************************************************************/
/*! exports provided: ArticleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleComponent", function() { return ArticleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var ArticleComponent = /** @class */ (function () {
    function ArticleComponent(activatedRoute, route) {
        this.activatedRoute = activatedRoute;
        this.route = route;
        this.articlesData = [
            { id: "1", name: "iPhone 7", checked: false, type: "folder" },
            { id: "2", name: "iPhone 6", checked: false, type: "folder" },
            { id: "3", name: "iPhone 5", checked: false, type: "folder" },
            {
                id: "4",
                name: "text",
                checked: false,
                type: "text",
                title: "Using 3D touch",
                tegs: ['3d touch', 'screen'],
                questins: ['Which iPhone, iPad, and iPod touch models support iOS 1?', 'Which iPhone, iPad, and iPod touch models support iOS 2?', 'Which iPhone, iPad, and iPod touch models support iOS 3?', 'Which iPhone, iPad, and iPod touch models support iOS 4?', 'Which iPhone, iPad, and iPod touch models support iOS 5?'],
                text: "3D Touch is multitouch made multidimensional. With it you can press deeply to launch actions instead of apps, reply to notifications, preview messages and links, switch keyboards, switch apps, animate Live Photos, vary stroke width, and more. It's like a wormhole through iOS that lets you move around faster than ever.\n      3D Touch is multitouch made multidimensional. With it you can press3D Touch is multitouch made multidimensional. With it you can press deeply to launch actions instead of apps, reply to notifications, preview messages and links, switch keyboards, switch apps, animate Live Photos, vary stroke width, and more. It's like a wormhole through iOS that lets you move around faster than ever.\n      3D Touch is multitouch made multidimensional. With it you can press3D Touch is multitouch made multidimensional. With it you can press deeply to launch actions instead of apps, reply to notifications, preview messages and links, switch keyboards, switch apps, animate Live Photos, vary stroke width, and more. It's like a wormhole through iOS that lets you move around faster than ever.\n      3D Touch is multitouch made multidimensional. With it you can press3D Touch is multitouch made multidimensional. With it you can press deeply to launch actions instead of apps, reply to notifications, preview messages and links, switch keyboards, switch apps, animate Live Photos, vary stroke width, and more. It's like a wormhole through iOS that lets you move around faster than ever.\n      3D Touch is multitouch made multidimensional. With it you can press deeply to launch actions instead of apps, reply to notifications, preview messages and links, switch keyboards, switch apps, animate Live Photos, vary stroke width, and more. It's like a wormhole through iOS that lets you move around faster than ever.",
                picture: 'http://images4.fanpop.com/image/photos/19400000/rainbow-sky-beautiful-pictures-19401741-1093-614.jpg',
            },
            {
                id: "5",
                name: "text 5",
                checked: false,
                type: "text",
                questins: ['Using 3D touch models support iOS 12?', 'Which iPhone, iPad, and iPod touch models support iOS 10?'],
                tegs: ['multi', 'using'],
                title: "Using 3D touch",
                text: "sdfsdfsdfsd sdfs dfs dfsd fsdf sdf sdfsdfsdfsdfsdf",
                picture: 'http://images4.fanpop.com/image/photos/19400000/rainbow-sky-beautiful-pictures-19401741-1093-614.jpg',
            }
        ];
        this.sectionData = [];
        this.questions = [
            { question: 'test', checked: false, edit: false },
            { question: 'test', checked: false, edit: false },
            { question: 'test', checked: false, edit: false },
            { question: 'test', checked: false, edit: false },
        ];
        // tslint:disable-next-line:max-line-length
        this.text = "3D Touch is multitouch made multidimensional. With it you can press deeply to launch actions instead of apps, reply to notifications, preview messages and links, switch keyboards, switch apps, animate Live Photos, vary stroke width, and more. It's like a wormhole through iOS that lets you move around faster than ever.  If you have an iPhone 6s or later, you can also press firmly (3D Touch) on an app icon to bring up quick actions. All apps have quick actions, even if it's simply the standard App Store app shortcut that lets you share the app with someone else. Some apps have several quick actions, including dynamic quick actions that update based on the last person you contacted, article you read, show you watched, etc. Tap on an action to go directly to that feature or content in the app.";
    }
    ArticleComponent.prototype.ngOnInit = function () {
        var _this = this;
        var _a;
        this.activatedRoute.params.subscribe(function (params) {
            var id = params;
            console.log(id);
            for (var key in _this.articlesData) {
                if (_this.articlesData[key].id === id.id) {
                    _this.dataToEdit = _this.articlesData[key];
                }
            }
            console.log(_this.dataToEdit, 'dataToEdit');
        });
        if (this.id) {
            for (var key in this.dataToEdit) {
                if (key === 'text' || key === 'picture') {
                    this.sectionData.push((_a = {},
                        _a[key] = this.dataToEdit[key],
                        _a));
                }
            }
        }
        else {
            this.dataToEdit = {
                name: "text",
                checked: false,
                type: "text",
                title: "Your Title",
                tegs: [],
                questins: [],
                text: "Your Text",
                picture: '',
            };
            this.sectionData = [];
        }
        console.log(this.sectionData, 'this.sectionData');
    };
    ArticleComponent.prototype.detaleItem = function (data, index) {
        data.splice(index, 1);
        console.log('delete elem', index + 1);
    };
    ArticleComponent.prototype.deleteQuestion = function () {
        this.questions = this.questions.filter(function (item) {
            if (item.checked === false) {
                return true;
            }
        });
    };
    ArticleComponent.prototype.editQuestion = function () {
        for (var key in this.questions) {
            if (this.questions[key].checked === true) {
                this.questions[key].edit = true;
            }
        }
    };
    ArticleComponent.prototype.addTags = function (data, value) {
        data.push(value);
        console.log(data, 'data');
        this.addTagField = '';
    };
    ArticleComponent.prototype.addSection = function (flag) {
        var _a, _b;
        if (flag === 'text') {
            this.sectionData.push((_a = {},
                _a[flag] = 'New Section',
                _a));
        }
        else if (flag === 'picture') {
            this.sectionData.push((_b = {},
                _b[flag] = 'https://s3.amazonaws.com/tinycards/image/36125d06520a2f6acdae39d1221e5ca8',
                _b));
        }
        this.showAddSection = false;
        setTimeout(function () {
            window.scrollTo(0, document.body.scrollHeight);
            var elem = document.getElementById('editBox');
            elem.scrollTo(0, elem.scrollHeight);
        }, 100);
    };
    ArticleComponent.prototype.moveTop = function (item, index) {
        console.log(index);
        if (index !== 0) {
            // let nextArr = this.sectionData.slice(index - 1, 1)
            this.sectionData.splice(index, 1);
            this.sectionData.splice(index - 1, 0, item);
        }
        console.log(this.sectionData);
    };
    ArticleComponent.prototype.moveBot = function (item, index) {
        console.log(index);
        if (index !== this.sectionData.length) {
            // let nextArr = this.sectionData.slice(index - 1, 1)
            this.sectionData.splice(index, 1);
            this.sectionData.splice(index + 1, 0, item);
        }
        console.log(this.sectionData);
    };
    ArticleComponent.prototype.answer = function (event) {
        if (event) {
            this.route.navigate(['/content-manage']);
        }
        this.dialog = false;
    };
    ArticleComponent.prototype.copyClip = function () {
        console.log(this.selectionId);
        var reference_element = document.querySelector('#text' + this.selectionId);
        var range = document.createRange();
        range.selectNodeContents(reference_element);
        window.getSelection().addRange(range);
        var success = document.execCommand('copy');
        window.getSelection().removeRange(range);
        console.log(document.execCommand('copy'));
    };
    ArticleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-article',
            template: __webpack_require__(/*! ./article.component.html */ "./src/app/main/content-management/article/article.component.html"),
            styles: [__webpack_require__(/*! ./article.component.scss */ "./src/app/main/content-management/article/article.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ArticleComponent);
    return ArticleComponent;
}());



/***/ }),

/***/ "./src/app/main/content-management/content-management.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/main/content-management/content-management.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"head\">\n  \n  <div class=\"df full-width\">\n    <div class=\"pos-r\">\n      <p-dropdown class=\"search-dropdown\" [(ngModel)]=\"selectedSearchIn\" [options]=\"searchIn\"></p-dropdown>\n      <label class=\"lable-drb\">Search in</label>\n    </div>\n    <div class=\"input-search pos-r\">\n      <input type=\"text\" [(ngModel)]=\"searchText\" (ngModelChange)=\"searchTextChange($event)\" placeholder=\"Search content / tag\"\n        pInputText />\n      <div *ngIf=\"searchText.length && searchResultData.length\" class=\"serch-result-dropdawn\">\n        <div (click)=\"openSearch(); searchText = ''\" *ngFor=\"let item of searchResultData\" class=\"serch-result-dropdawn--item\">\n          <div class=\"serch-result-dropdawn--icon-wrap\">\n            <img *ngIf=\"item.type === 'teg'\" src=\"assets/img/stiket.png\" alt=\"\">\n            <img *ngIf=\"item.type === 'text'\" src=\"assets/img/file.png\" alt=\"\">\n          </div>\n          <div>\n            <div class=\"serch-result-dropdawn--lable\">\n              {{item.label}}\n            </div>\n          </div>\n        </div>\n        <div (click)=\"openSearch(); searchText = ''\" class=\"serch-result-dropdawn--foot\">\n          More results\n        </div>\n      </div>\n      <!-- (focus)=\"openSearch()\" -->\n      <div class=\"icon-input\">\n        <img *ngIf=\"!searchResult\" class=\"c-p\" width=\"20px\" src=\"assets/img/search.png\" alt=\"\">\n        <img *ngIf=\"searchResult\" (click)=\"closeSearch(); searchText = ''\" class=\"c-p\" width=\"20px\" src=\"assets/img/times-black.png\"\n          alt=\"\">\n      </div>\n    </div>\n  </div>\n  <div class=\"df\">\n    <div class=\"df ai-c c-p m-r-40 text-wrap-none\">\n      <img class=\"m-r-10\" src=\"assets/img/folder-open.png\" alt=\"\">\n      Load Files\n    </div>\n    <div (click)=\"openDubicate()\" class=\"df ai-c c-p text-wrap-none\">\n      <img class=\"m-r-10\" src=\"assets/img/files-group.png\" alt=\"\">\n      Duplicates\n      <div class=\"m-l-10 nitif-circle\">\n        7\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"content-wrap\">\n\n  <div *ngIf=\"folders\" class=\"folder-side\">\n    <div class=\"side-head\">\n      <div>\n        Folders\n      </div>\n      <div class=\"df ai-c\">\n        <div (click)=\"addFolder()\" class=\"m-r-40 c-p\">\n          <img src=\"assets/img/addFolderTree.png\" alt=\"\">\n        </div>\n        <div (click)=\"expandetTree()\" class=\"c-p arrow-right\">\n          <img class=\"animate\" src=\"assets/img/arrow.png\" alt=\"\">\n        </div>\n      </div>\n    </div>\n    <div class=\"body-side\">\n      <p-tree [value]=\"filesTree0\" selectionMode=\"single\" (onNodeSelect)=\"onNodeSelect($event,i)\">\n        <ng-template let-node pTemplate=\"default\">\n          <div class=\"df ai-c\">\n            <input *ngIf=\"!node.label\" [(ngModel)]=\"newText\" type=\"text\" pInputText style=\"width: 85px\">\n            <button *ngIf=\"!node.label\" (click)=\"node.label = newText; newText = ''\" class=\"button-default m-l-5\" style=\"min-width: 35px;\">ok</button>\n          </div>\n          <span *ngIf=\"node.label\">{{node.label}}</span>\n        </ng-template>\n      </p-tree>\n    </div>\n  </div>\n\n  <div *ngIf=\"welcome\" class=\"folder-side full-width m-r-0\">\n    <div class=\"side-head\"></div>\n    <div class=\"body-side col jc-c ai-c text-center\">\n      <div class=\"m-b-20\">\n        Welcome to SPOT\n      </div>\n      <div class=\"m-b-20\">\n        To create your content repository, start by loading source files <br>\n        Word and PDF file are accepted\n      </div>\n      <label class=\"c-p ai-c df\">\n        <img class=\"m-r-20\" src=\"assets/img/folder-open.png\" alt=\"\">\n        Load Files\n      </label>\n    </div>\n  </div>\n\n  <div *ngIf=\"dublicate\" class=\"articles-side full-width\">\n    <div class=\"side-head\">\n      <div>\n        Duplicate Questions\n      </div>\n      <div (click)=\"backContent()\" class=\"df ai-c c-p\">\n        <img width=\"16px\" class=\"m-r-5 rotate--90\" src=\"assets/img/caret.png\" alt=\"\">\n        <div>\n          Back to content\n        </div>\n      </div>\n    </div>\n    <div class=\"body-side\">\n      <div *ngFor=\"let item of dublicateQuestionData; let i = index;\">\n        <div *ngIf=\"item.questions.length\" class=\"question-row\">\n          <div (click)=\"showQuestion = i \" class=\"question-row-head\">\n            <div [ngClass]=\"{'rotate-180': showQuestion === i}\" class=\"m-r-10 icon animate\">\n              <img src=\"assets/img/caret-ques.png\" alt=\"\">\n            </div>\n            <div>\n              {{item.name}} ({{item.questions.length}})\n            </div>\n          </div>\n          <div *ngIf=\"showQuestion === i\" class=\"question-row-body\">\n            <div>\n              <div *ngFor=\"let dublicate of item.questions; let subIndex = index;\" class=\"question-item\">\n                <div>\n                  <div class=\"fs-12 m-n-7\">\n                    {{dublicate.name}}\n                  </div>\n                  <div class=\"color-gray-600\">\n                    {{dublicate.path}}\n                  </div>\n                </div>\n                <div (click)=\"detaleItem(item.questions, subIndex)\" class=\"trash-icon\">\n                  <img width=\"22px\" src=\"assets/img/trash.png\" alt=\"\">\n                </div>\n              </div>\n            </div>\n            <div class=\"df jc-e p-r-40 m-t-20\">\n              <div class=\"df ai-c c-p\">\n                <img class=\"m-r-5\" src=\"assets/img/succsess.png\" alt=\"\">\n                Keep Duplicates\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div *ngIf=\"searchResult\" class=\"articles-side full-width \">\n    <div class=\"side-head\">\n      <div>\n        Search Results\n      </div>\n      <div class=\"df ai-c color-primary\">\n        <img [routerLink]=\"['/article']\" class=\"m-r-10 c-p\" src=\"assets/img/addArtictes.png\" alt=\"\">\n        <div class=\"m-r-30\">\n          Add Article\n        </div>\n        <img (click)=\"deleteSearchResults()\" class=\"c-p m-r-40\" width=\"22px\" src=\"assets/img/trash.png\" alt=\"\">\n        <div (click)=\"backContent()\" class=\"df ai-c c-p\">\n          <img width=\"16px\" class=\"m-r-5 rotate--90\" src=\"assets/img/caret.png\" alt=\"\">\n          <div>\n            Back to content\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"body-side body-side-scroll\">\n      <div *ngFor=\"let item of searchResultData; let i = index\" class=\"search-row \">\n        <div>\n          <input class=\"m-r-20 m-t-0\" [(ngModel)]=\"item.element.checked\" type=\"checkbox\">\n        </div>\n        <div (click)=\"selectType(item.element, i)\">\n          <div class=\"df ai-c jc-b m-b-7\">\n            <div>\n              {{item.element.title}}\n            </div>\n            <div (click)=\"detaleItem(searchResultData, i)\" class=\"c-p delete-icon\">\n              <img width=\"18px\" src=\"assets/img/trash.png\" alt=\"\">\n            </div>\n          </div>\n          <div class=\"stick-row\">\n            <div *ngFor=\"let tag of item.element.tegs\" class=\"ai-c df m-r-10\">\n              <img class=\"m-r-3\" src=\"assets/img/stiket.png\" alt=\"\">\n              <div class=\"context\">\n                {{tag}}\n              </div>\n            </div>\n          </div>\n          <div class=\"description\">\n            <p class=\"context\" style=\"margin: 0; overflow: hidden; text-overflow: ellipsis; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical;\">\n              {{item.element.text}}\n            </p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div *ngIf=\"articles && selectedType\" class=\"articles-side\">\n    <div class=\"side-head\"> \n      <div>\n        Articles\n      </div>\n      <div class=\"df ai-c color-primary\">\n        <img [routerLink]=\"['/article']\" class=\"m-r-10 c-p\" src=\"assets/img/addArtictes.png\" alt=\"\">\n        <div class=\"m-r-30\">\n          Add Article\n        </div>\n        <img (click)=\"deleteArticles()\" class=\"c-p\" width=\"22px\" src=\"assets/img/trash.png\" alt=\"\">\n      </div>\n    </div>\n    <div class=\"body-side\">\n      <div *ngFor=\"let item of articlesData[selectedType]; let i = index\" (click)=\"selectType(item, i)\" class=\"articles-row jc-b\">\n        <div class=\"df ai-c\">\n          <input [(ngModel)]=\"item.checked\" class=\"m-r-20\" type=\"checkbox\">\n          <i *ngIf=\"item.type === 'folder'\" class=\"m-r-5\" class=\"fa fa-folder m-r-20 icon-folder\"></i>\n          <div>\n            {{item.name}}\n          </div>\n        </div>\n        <div (click)=\"detaleItem(articlesData[selectedType], i)\" class=\"c-p icons\">\n          <img width=\"18px\" src=\"assets/img/trash.png\" alt=\"\">\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div *ngIf=\"article && selectedText\" class=\"article-side\">\n    <div class=\"side-head\">\n      <div>\n        Article\n      </div>\n      <div class=\"df ai-c\">\n        <img (click)=\"selectedTextAction('prev')\" class=\"m-r-10 c-p\" src=\"assets/img/arrow-left.png\" alt=\"\">\n        {{editPageCount / 5}} of {{ editPageCountValue }}\n        <img (click)=\"selectedTextAction('next')\" class=\"m-l-10 rotate-180 c-p\" src=\"assets/img/arrow-left.png\" alt=\"\">\n      </div>\n      <div class=\"df ai-c\">\n        <div class=\"m-r-30 c-p\">\n          <img [routerLink]=\"[ '/article', id]\" a src=\"assets/img/editArticle.png\" alt=\"\">\n        </div>\n        <img class=\"c-p\" width=\"22px\" src=\"assets/img/trash.png\" alt=\"\">\n      </div>\n    </div>\n    <div class=\"body-side text-left\">\n      <div class=\"tags-wrap\">\n        <div class=\"m-r-20 p-t-12\">\n          Tags:\n        </div>\n        <div *ngFor=\"let tags of selectedText.tegs; let i = index\" class=\"chips\">\n          {{tags}}\n          <img (click)=\"detaleItem(selectedText.tegs, i)\" class=\"close c-p\" src=\"assets/img/close.png\" alt=\"\">\n        </div>\n        <input [(ngModel)]=\"addTagField\" class=\"add-tag\" type=\"text\" (keyup.enter)=\"addTags(selectedText.tegs, addTagField)\" placeholder=\"Add tag\" pInputText />\n      </div>\n      <div class=\"p-t-10 p-l-25 p-r-25 p-b-25\">\n        <p class=\"fs-11\">\n          Content > Tecnical > Phones > iPhone > iPhone 9 >\n        </p>\n        <h4 class=\"fs-14\">\n          {{\n          selectedText.title\n          }}\n        </h4>\n        <p class=\"fs-12\">\n          <span *ngFor=\"let item of previewText\">\n            {{item}}.\n          </span>\n        </p>\n      </div>\n      <div class=\"title-row jc-b bg\">\n        <div class=\"df ai-c\">\n          <div class=\"fs-14\">\n            Questions\n          </div>\n        </div>\n        <div class=\"df ai-c\">\n          <img (click)=\"deleteQuestion()\" class=\"c-p m-r-5\" width=\"22px\" src=\"assets/img/trash.png\" alt=\"\">\n          <img (click)=\"showArticle = true\" class=\"c-p\" width=\"18px\" src=\"assets/img/fasten.png\" alt=\"\">\n        </div>\n      </div>\n      <div *ngFor=\"let item of selectedText.questins; let i = index\" class=\"articles-row jc-b\">\n        <div class=\"df ai-c\">\n          <input [(ngModel)]=\"questuonSettings[i]\" class=\"m-r-20\" type=\"checkbox\">\n          <div>\n            {{item}}\n          </div>\n        </div>\n        <div class=\"c-p icons df ai-c\">\n          <img (click)=\"detaleItem(selectedText.questins, i)\" class=\"c-p m-r-5\" width=\"22px\" src=\"assets/img/trash.png\" alt=\"\">\n          <img (click)=\"showArticle = true\" class=\"c-p\" width=\"18px\" src=\"assets/img/fasten.png\" alt=\"\">\n        </div>\n      </div>\n    </div>\n  </div>\n\n</div>\n\n<app-link-article [show]=\"showArticle\" (hide)=\"showArticle = false\"></app-link-article>"

/***/ }),

/***/ "./src/app/main/content-management/content-management.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/main/content-management/content-management.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content-wrap {\n  display: flex;\n  justify-content: space-between;\n  min-height: calc(100vh - 234px); }\n\n.head {\n  height: 76px;\n  background: inherit;\n  background-color: #f2f2f2;\n  display: flex;\n  align-items: center;\n  padding-left: 90px;\n  padding-right: 50px;\n  margin-bottom: 40px; }\n\n.lable-drb {\n  position: absolute;\n  top: 5px;\n  left: 5px;\n  font-size: 11px;\n  color: #1e1e1e; }\n\n.input-search {\n  width: 100%;\n  max-width: 533px;\n  margin-left: 10px; }\n\n.input-search input {\n    height: 48px;\n    width: 100%; }\n\n.side-head {\n  height: 37px;\n  background-color: #e4e4e4;\n  box-sizing: border-box;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 15px; }\n\n.body-side {\n  background-color: white;\n  box-sizing: border-box;\n  border-width: 1px;\n  border-style: solid;\n  border-color: #d7d7d7;\n  min-height: 100%; }\n\n.body-side-scroll {\n  overflow-y: auto;\n  max-height: 400px; }\n\n.arrow-right {\n  -webkit-transform: rotate(-90deg);\n          transform: rotate(-90deg); }\n\n.folder-side {\n  width: 225px;\n  min-width: 225px;\n  margin-right: 20px; }\n\n.articles-side {\n  width: 100%;\n  margin-right: 20px; }\n\n.article-side {\n  width: 50%;\n  max-width: 550px;\n  min-width: 420px; }\n\n.rotate-180 {\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg); }\n\n.rotate--90 {\n  -webkit-transform: rotate(-90deg);\n          transform: rotate(-90deg); }\n\n.articles-row {\n  border-bottom: 1px solid #d7d7d7;\n  display: flex;\n  align-items: center;\n  padding: 10px 20px;\n  transition: all 0.3s;\n  min-height: 46px; }\n\n.articles-row .icons {\n    display: none;\n    align-items: center; }\n\n.articles-row:hover {\n    background: #dff5f9; }\n\n.articles-row:hover .icons {\n      display: flex; }\n\n.tags-wrap {\n  display: flex;\n  flex-wrap: wrap;\n  padding: 5px 15px;\n  background-color: #f2f2f2;\n  box-sizing: border-box;\n  border-width: 1px;\n  border-style: solid;\n  border-color: #d7d7d7; }\n\n.add-tag {\n  height: 27px;\n  border-radius: 10px;\n  margin-bottom: 10px;\n  margin-top: 6px;\n  width: 120px; }\n\n.title-row {\n  height: 45px;\n  border-width: 1px;\n  border-style: solid;\n  border-color: #d7d7d7;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background: #f2f2f2;\n  padding: 10px 20px; }\n\n.search-row {\n  padding: 20px 20px 10px 20px;\n  display: flex;\n  font-size: 12px;\n  transition: all 0.3s;\n  border-bottom: 1px solid #d7d7d7;\n  position: relative; }\n\n.search-row .description {\n    overflow: hidden;\n    color: #999999; }\n\n.search-row .delete-icon {\n    display: none;\n    align-items: center;\n    position: absolute;\n    right: 20px; }\n\n.search-row:hover {\n    background-color: #dff5f9; }\n\n.search-row:hover .delete-icon {\n      display: flex; }\n\n.stick-row {\n  font-size: 11px;\n  color: #018191;\n  display: flex;\n  margin-bottom: 5px; }\n\n.question-row {\n  border-bottom: 1px solid #d7d7d7; }\n\n.question-row-head {\n    display: flex;\n    align-items: center;\n    min-height: 40px;\n    padding: 5px 10px;\n    cursor: pointer; }\n\n.question-row-body {\n    padding: 20px 40px 20px 40px;\n    background: #f2f2f2;\n    position: relative; }\n\n.question-row-body .question-item {\n      height: 55px;\n      background: inherit;\n      background-color: white;\n      display: flex;\n      align-items: center;\n      justify-content: space-between;\n      padding: 5px 20px;\n      border: 1px solid #d7d7d7;\n      border-bottom: 0; }\n\n.question-row-body .question-item .trash-icon {\n        display: none;\n        align-items: center;\n        cursor: pointer; }\n\n.question-row-body .question-item:hover {\n        background-color: #dff5f9; }\n\n.question-row-body .question-item:hover .trash-icon {\n          display: flex; }\n\n.question-row-body .question-item:last-child {\n        border-bottom: 1px solid #d7d7d7; }\n\n.icon-input {\n  position: absolute;\n  right: 9px;\n  top: calc(50% - 10px); }\n\n.nitif-circle {\n  background: #ff6600;\n  width: 16px;\n  height: 16px;\n  border-radius: 100px;\n  overflow: hidden;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 1px solid #feb98c;\n  font-size: 10px;\n  color: white; }\n\n.serch-result-dropdawn {\n  position: absolute;\n  top: 100%;\n  background: white;\n  width: 100%;\n  border: 1px solid #a6a6a6;\n  border-top: 0;\n  z-index: 111; }\n\n.serch-result-dropdawn--item {\n    display: flex;\n    align-items: center;\n    padding: 9px 10px;\n    cursor: pointer; }\n\n.serch-result-dropdawn--icon-wrap {\n    width: 25px;\n    min-width: 25px; }\n\n.serch-result-dropdawn--foot {\n    border-top: 1px solid #a6a6a6;\n    padding: 10px;\n    text-align: center;\n    cursor: pointer; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NodW1pay9Eb2N1bWVudHMvU1BPVC9zcmMvYXBwL21haW4vY29udGVudC1tYW5hZ2VtZW50L2NvbnRlbnQtbWFuYWdlbWVudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsK0JBQStCLEVBQUE7O0FBRWpDO0VBQ0UsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQix5QkFBd0M7RUFDeEMsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLG1CQUFtQixFQUFBOztBQUVyQjtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUNULGVBQWU7RUFDZixjQUFjLEVBQUE7O0FBRWhCO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixpQkFBaUIsRUFBQTs7QUFIbkI7SUFLSSxZQUFZO0lBQ1osV0FBVyxFQUFBOztBQUdmO0VBQ0UsWUFBWTtFQUNaLHlCQUF3QztFQUN4QyxzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIsZUFBZSxFQUFBOztBQUVqQjtFQUNFLHVCQUF3QztFQUN4QyxzQkFBc0I7RUFDdEIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixxQkFBb0M7RUFDcEMsZ0JBQWdCLEVBQUE7O0FBRWxCO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQixFQUFBOztBQUVuQjtFQUNFLGlDQUF5QjtVQUF6Qix5QkFBeUIsRUFBQTs7QUFFM0I7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGtCQUFrQixFQUFBOztBQUVwQjtFQUNFLFdBQVc7RUFDWCxrQkFBa0IsRUFBQTs7QUFFcEI7RUFDRSxVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLGdCQUFnQixFQUFBOztBQUVsQjtFQUNFLGlDQUF5QjtVQUF6Qix5QkFBeUIsRUFBQTs7QUFFM0I7RUFDRSxpQ0FBeUI7VUFBekIseUJBQXlCLEVBQUE7O0FBRTNCO0VBQ0UsZ0NBQStDO0VBQy9DLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQixnQkFBZ0IsRUFBQTs7QUFObEI7SUFRSSxhQUFhO0lBQ2IsbUJBQW1CLEVBQUE7O0FBVHZCO0lBWUksbUJBQWtDLEVBQUE7O0FBWnRDO01BY00sYUFBYSxFQUFBOztBQUluQjtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLHlCQUF3QztFQUN4QyxzQkFBc0I7RUFDdEIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixxQkFBb0MsRUFBQTs7QUFFdEM7RUFDRSxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsWUFBWSxFQUFBOztBQUVkO0VBQ0UsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIscUJBQWdDO0VBQ2hDLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixrQkFBa0IsRUFBQTs7QUFFcEI7RUFDRSw0QkFBNEI7RUFDNUIsYUFBYTtFQUNiLGVBQWU7RUFDZixvQkFBb0I7RUFDcEIsZ0NBQTJDO0VBQzNDLGtCQUFrQixFQUFBOztBQU5wQjtJQVFJLGdCQUFnQjtJQUNoQixjQUFjLEVBQUE7O0FBVGxCO0lBWUksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsV0FBVyxFQUFBOztBQWZmO0lBa0JJLHlCQUF3QyxFQUFBOztBQWxCNUM7TUFvQk0sYUFBYSxFQUFBOztBQUluQjtFQUNFLGVBQWU7RUFDZixjQUFjO0VBQ2QsYUFBYTtFQUNiLGtCQUFrQixFQUFBOztBQUVwQjtFQUNFLGdDQUEyQyxFQUFBOztBQUMzQztJQUNFLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixlQUFlLEVBQUE7O0FBRWpCO0lBQ0UsNEJBQTRCO0lBQzVCLG1CQUFrQztJQUNsQyxrQkFBa0IsRUFBQTs7QUFIbkI7TUFLRyxZQUFZO01BQ1osbUJBQW1CO01BQ25CLHVCQUFvQztNQUNwQyxhQUFhO01BQ2IsbUJBQW1CO01BQ25CLDhCQUE4QjtNQUM5QixpQkFBaUI7TUFDakIseUJBQW9DO01BQ3BDLGdCQUFnQixFQUFBOztBQWJuQjtRQWVLLGFBQWE7UUFDYixtQkFBbUI7UUFDbkIsZUFBZSxFQUFBOztBQWpCcEI7UUFvQksseUJBQXdDLEVBQUE7O0FBcEI3QztVQXNCTyxhQUFhLEVBQUE7O0FBdEJwQjtRQTBCSyxnQ0FBMkMsRUFBQTs7QUFLbkQ7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLHFCQUFxQixFQUFBOztBQUV2QjtFQUNFLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsWUFBWTtFQUNaLG9CQUFvQjtFQUNwQixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIseUJBQXlCO0VBQ3pCLGVBQWU7RUFDZixZQUFZLEVBQUE7O0FBRWQ7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLGFBQWE7RUFDYixZQUFZLEVBQUE7O0FBQ1o7SUFDRSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixlQUFlLEVBQUE7O0FBRWpCO0lBQ0UsV0FBVztJQUNYLGVBQWUsRUFBQTs7QUFFakI7SUFDRSw2QkFBNkI7SUFDN0IsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixlQUFlLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tYWluL2NvbnRlbnQtbWFuYWdlbWVudC9jb250ZW50LW1hbmFnZW1lbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudC13cmFwIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gMjM0cHgpO1xufVxuLmhlYWQge1xuICBoZWlnaHQ6IDc2cHg7XG4gIGJhY2tncm91bmQ6IGluaGVyaXQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQyLCAyNDIsIDI0MiwgMSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmctbGVmdDogOTBweDtcbiAgcGFkZGluZy1yaWdodDogNTBweDtcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcbn1cbi5sYWJsZS1kcmIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNXB4O1xuICBsZWZ0OiA1cHg7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgY29sb3I6ICMxZTFlMWU7XG59XG4uaW5wdXQtc2VhcmNoIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogNTMzcHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBpbnB1dCB7XG4gICAgaGVpZ2h0OiA0OHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG4uc2lkZS1oZWFkIHtcbiAgaGVpZ2h0OiAzN3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIyOCwgMjI4LCAyMjgsIDEpO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmc6IDAgMTVweDtcbn1cbi5ib2R5LXNpZGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3JkZXItd2lkdGg6IDFweDtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDIxNSwgMjE1LCAyMTUsIDEpO1xuICBtaW4taGVpZ2h0OiAxMDAlO1xufVxuLmJvZHktc2lkZS1zY3JvbGwge1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBtYXgtaGVpZ2h0OiA0MDBweDtcbn1cbi5hcnJvdy1yaWdodCB7XG4gIHRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7XG59XG4uZm9sZGVyLXNpZGUge1xuICB3aWR0aDogMjI1cHg7XG4gIG1pbi13aWR0aDogMjI1cHg7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbn1cbi5hcnRpY2xlcy1zaWRlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbn1cbi5hcnRpY2xlLXNpZGUge1xuICB3aWR0aDogNTAlO1xuICBtYXgtd2lkdGg6IDU1MHB4O1xuICBtaW4td2lkdGg6IDQyMHB4O1xufVxuLnJvdGF0ZS0xODAge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xufVxuLnJvdGF0ZS0tOTAge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpO1xufVxuLmFydGljbGVzLXJvdyB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDIxNSwgMjE1LCAyMTUsIDEpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuICBtaW4taGVpZ2h0OiA0NnB4O1xuICAuaWNvbnMge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuICAmOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDIyMywgMjQ1LCAyNDksIDEpO1xuICAgIC5pY29ucyB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgIH1cbiAgfVxufVxuLnRhZ3Mtd3JhcCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgcGFkZGluZzogNXB4IDE1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQyLCAyNDIsIDI0MiwgMSk7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJvcmRlci13aWR0aDogMXB4O1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItY29sb3I6IHJnYmEoMjE1LCAyMTUsIDIxNSwgMSk7XG59XG4uYWRkLXRhZyB7XG4gIGhlaWdodDogMjdweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgbWFyZ2luLXRvcDogNnB4O1xuICB3aWR0aDogMTIwcHg7XG59XG4udGl0bGUtcm93IHtcbiAgaGVpZ2h0OiA0NXB4O1xuICBib3JkZXItd2lkdGg6IDFweDtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLWNvbG9yOiByZ2IoMjE1LCAyMTUsIDIxNSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogI2YyZjJmMjtcbiAgcGFkZGluZzogMTBweCAyMHB4O1xufVxuLnNlYXJjaC1yb3cge1xuICBwYWRkaW5nOiAyMHB4IDIwcHggMTBweCAyMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmb250LXNpemU6IDEycHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiKDIxNSwgMjE1LCAyMTUpO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIC5kZXNjcmlwdGlvbiB7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBjb2xvcjogIzk5OTk5OTtcbiAgfVxuICAuZGVsZXRlLWljb24ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDIwcHg7XG4gIH1cbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMjMsIDI0NSwgMjQ5LCAxKTtcbiAgICAuZGVsZXRlLWljb24ge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICB9XG4gIH1cbn1cbi5zdGljay1yb3cge1xuICBmb250LXNpemU6IDExcHg7XG4gIGNvbG9yOiAjMDE4MTkxO1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG4ucXVlc3Rpb24tcm93IHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYigyMTUsIDIxNSwgMjE1KTtcbiAgJi1oZWFkIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWluLWhlaWdodDogNDBweDtcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbiAgJi1ib2R5IHtcbiAgICBwYWRkaW5nOiAyMHB4IDQwcHggMjBweCA0MHB4O1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjQyLCAyNDIsIDI0MiwgMSk7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIC5xdWVzdGlvbi1pdGVtIHtcbiAgICAgIGhlaWdodDogNTVweDtcbiAgICAgIGJhY2tncm91bmQ6IGluaGVyaXQ7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgIHBhZGRpbmc6IDVweCAyMHB4O1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDIxNSwgMjE1LCAyMTUpO1xuICAgICAgYm9yZGVyLWJvdHRvbTogMDtcbiAgICAgIC50cmFzaC1pY29uIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgfVxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjIzLCAyNDUsIDI0OSwgMSk7XG4gICAgICAgIC50cmFzaC1pY29uIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiKDIxNSwgMjE1LCAyMTUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuLmljb24taW5wdXQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiA5cHg7XG4gIHRvcDogY2FsYyg1MCUgLSAxMHB4KTtcbn1cbi5uaXRpZi1jaXJjbGUge1xuICBiYWNrZ3JvdW5kOiAjZmY2NjAwO1xuICB3aWR0aDogMTZweDtcbiAgaGVpZ2h0OiAxNnB4O1xuICBib3JkZXItcmFkaXVzOiAxMDBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZWI5OGM7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgY29sb3I6IHdoaXRlO1xufVxuLnNlcmNoLXJlc3VsdC1kcm9wZGF3biB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNhNmE2YTY7XG4gIGJvcmRlci10b3A6IDA7XG4gIHotaW5kZXg6IDExMTtcbiAgJi0taXRlbSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDlweCAxMHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuICAmLS1pY29uLXdyYXAge1xuICAgIHdpZHRoOiAyNXB4O1xuICAgIG1pbi13aWR0aDogMjVweDtcbiAgfVxuICAmLS1mb290IHtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2E2YTZhNjtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/main/content-management/content-management.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/main/content-management/content-management.component.ts ***!
  \*************************************************************************/
/*! exports provided: ContentManagementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentManagementComponent", function() { return ContentManagementComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ContentManagementComponent = /** @class */ (function () {
    function ContentManagementComponent() {
        this.article = true;
        this.articles = true;
        this.searchResult = false;
        this.welcome = true;
        this.folders = true;
        this.dublicate = false;
        this.math = Math;
        this.questuonSettings = {};
        this.dublicateQuestionData = [
            {
                name: " How do I use the 3D touch?",
                questions: [
                    {
                        name: "What is the camera resolution?",
                        path: "Content > Tecnical > Phones > iPhone > iPhone 8 > Specifications"
                    },
                    {
                        name: "What is the camera resolution?",
                        path: "Content > Tecnical > Phones > iPhone > iPhone 7 > Specifications"
                    },
                    {
                        name: "What is the camera resolution?",
                        path: "Content > Tecnical > Phones > iPhone > iPhone 6 > Specifications"
                    },
                    {
                        name: "What is the camera resolution?",
                        path: "Content > Tecnical > Phones > iPhone > iPhone 5 > Specifications"
                    }
                ]
            },
            {
                name: "How to replace the screen?",
                questions: [
                    {
                        name: "How to replace the screen?",
                        path: "Content > Tecnical > Phones > iPhone > iPhone 8 > Specifications"
                    },
                    {
                        name: "How to replace the screen?",
                        path: "Content > Tecnical > Phones > iPhone > iPhone 7 > Specifications"
                    },
                    {
                        name: "How to replace the screen?",
                        path: "Content > Tecnical > Phones > iPhone > iPhone 6 > Specifications"
                    },
                    {
                        name: "How to replace the screen?",
                        path: "Content > Tecnical > Phones > iPhone > iPhone 5 > Specifications"
                    }
                ]
            }
        ];
        this.articlesData = {
            Android: [
                { id: "1", name: "Android 7", checked: false, type: "folder" },
                { id: "2", name: "Android 6", checked: false, type: "folder" },
                { id: "3", name: "Android 5", checked: false, type: "folder" },
                {
                    id: "4",
                    name: "text",
                    checked: false,
                    type: "text",
                    title: "Using 3D touch",
                    tegs: ['3d touch', 'screen'],
                    questins: ['Which iPhone, iPad, and iPod touch models support iOS 1?', 'Which iPhone, iPad, and iPod touch models support iOS 2?', 'Which iPhone, iPad, and iPod touch models support iOS 3?', 'Which iPhone, iPad, and iPod touch models support iOS 4?', 'Which iPhone, iPad, and iPod touch models support iOS 5?'],
                    text: "3D Touch is multitouch made multidimensional. With it you can press deeply to launch actions instead of apps, reply to notifications, preview messages and links, switch keyboards, switch apps, animate Live Photos, vary stroke width, and more. It's like a wormhole through iOS that lets you move around faster than ever.\n        3D Touch is multitouch made multidimensional. With it you can press3D Touch is multitouch made multidimensional. With it you can press deeply to launch actions instead of apps, reply to notifications, preview messages and links, switch keyboards, switch apps, animate Live Photos, vary stroke width, and more. It's like a wormhole through iOS that lets you move around faster than ever.\n        3D Touch is multitouch made multidimensional. With it you can press3D Touch is multitouch made multidimensional. With it you can press deeply to launch actions instead of apps, reply to notifications, preview messages and links, switch keyboards, switch apps, animate Live Photos, vary stroke width, and more. It's like a wormhole through iOS that lets you move around faster than ever.\n        3D Touch is multitouch made multidimensional. With it you can press3D Touch is multitouch made multidimensional. With it you can press deeply to launch actions instead of apps, reply to notifications, preview messages and links, switch keyboards, switch apps, animate Live Photos, vary stroke width, and more. It's like a wormhole through iOS that lets you move around faster than ever.\n        3D Touch is multitouch made multidimensional. With it you can press deeply to launch actions instead of apps, reply to notifications, preview messages and links, switch keyboards, switch apps, animate Live Photos, vary stroke width, and more. It's like a wormhole through iOS that lets you move around faster than ever."
                },
                {
                    id: "5",
                    name: "text 5",
                    checked: false,
                    type: "text",
                    questins: ['Using 3D touch models support iOS 12?', 'Which iPhone, iPad, and iPod touch models support iOS 10?'],
                    tegs: ['multi', 'using'],
                    title: "Using 3D touch",
                    text: "multitouch sdfsdfsdfsd sdfs dfs dfsd fsdf sdf sdfsdfsdfsdfsdf"
                }
            ],
            Apple: [
                { id: "1", name: "iPhone 7", checked: false, type: "folder" },
                { id: "2", name: "iPhone 6", checked: false, type: "folder" },
                { id: "3", name: "iPhone 5", checked: false, type: "folder" },
                {
                    id: "5",
                    name: "text 5",
                    checked: false,
                    type: "text",
                    questins: ['Using 3D touch models support iOS 12?', 'Which iPhone, iPad, and iPod touch models support iOS 10?'],
                    tegs: ['multi', 'using'],
                    title: "Using 3D touch",
                    text: "2 sdfs dfs dfsd fsdf sdf sdfsdfsdfsdfsdf"
                }
            ],
            Windows: [
                { id: "1", name: "w1", checked: false, type: "folder" },
                { id: "2", name: "w2", checked: false, type: "folder" },
                { id: "3", name: "w3", checked: false, type: "folder" },
            ],
            Devices: [
                { id: "1", name: "Windows", checked: false, type: "folder" },
                { id: "2", name: "Apple", checked: false, type: "folder" },
                { id: "3", name: "Android", checked: false, type: "folder" },
            ]
        };
        this.searchText = '';
        this.searchResultData = [];
    }
    ContentManagementComponent.prototype.searchTextChange = function (e) {
        var _this = this;
        this.searchResultData = [];
        this.articlesData[this.selectedType].forEach(function (element, index) {
            if (element.type === 'text') {
                if (element.text.includes(e)) {
                    _this.searchResultData.push({
                        type: "text",
                        label: element.title,
                        element: element
                    });
                }
                for (var _i = 0, _a = element.tegs; _i < _a.length; _i++) {
                    var item = _a[_i];
                    if (item.includes(e)) {
                        _this.searchResultData.push({
                            type: "teg",
                            label: item,
                            element: element
                        });
                    }
                }
            }
        });
        console.log(e, this.searchResultData);
        setTimeout(function () {
            var divs = document.querySelectorAll('.context');
            [].forEach.call(divs, function (div) {
                console.log(div);
                var options = {};
                var markInstance = new Mark(div);
                markInstance.unmark({
                    done: function () {
                        markInstance.mark(e, options);
                    }
                });
            });
        }, 100);
    };
    ContentManagementComponent.prototype.onNodeSelect = function (e, i) {
        console.log(e);
        this.selectedType = e.node.label;
        this.selectedFolder = e.node;
        this.welcome = false;
    };
    ContentManagementComponent.prototype.selectType = function (item, index) {
        if (item.type === 'text') {
            this.editPageCount = 5;
            this.selectedText = item;
            console.log(item, 'item');
            this.previewText = item.text.split('.');
            this.previewText = this.previewText.slice(this.editPageCount - 5, this.editPageCount);
            this.editPageCountValue = this.math.ceil(this.selectedText.text.split('.').length / 5);
        }
        this.id = item.id;
    };
    ContentManagementComponent.prototype.selectedTextAction = function (flag) {
        console.log(this.editPageCount, 'this.editPageCount');
        if (flag === 'prev' && this.editPageCount > 5) {
            this.editPageCount = this.editPageCount - 5;
        }
        else if (flag === 'next' && this.editPageCount < this.selectedText.text.split('.').length) {
            this.editPageCount = this.editPageCount + 5;
        }
        this.previewText = this.selectedText.text.split('.').slice(this.editPageCount - 5, this.editPageCount);
    };
    ContentManagementComponent.prototype.addFolder = function () {
        if (this.selectedFolder) {
            if (!this.selectedFolder.children) {
                this.selectedFolder.children = [];
            }
            this.selectedFolder.children.push({
                label: "",
                data: "Node 0",
                expandedIcon: "fa fa-folder-open",
                collapsedIcon: "fa fa-folder"
            });
        }
        else {
            this.filesTree0.push({
                label: "",
                data: "Node 0",
                expandedIcon: "fa fa-folder-open",
                collapsedIcon: "fa fa-folder"
            });
        }
    };
    ContentManagementComponent.prototype.ngOnInit = function () {
        this.filesTree0 = [
            {
                label: "Devices",
                data: "Node 0",
                expandedIcon: "fa fa-folder-open",
                collapsedIcon: "fa fa-folder",
                leaf: false,
                expanded: false,
                children: [
                    {
                        label: "Android",
                        data: "Node 0",
                        expandedIcon: "fa fa-folder-open",
                        collapsedIcon: "fa fa-folder"
                    },
                    {
                        label: "Apple",
                        data: "Node 1",
                        expandedIcon: "fa fa-folder-open",
                        collapsedIcon: "fa fa-folder"
                    },
                    {
                        label: "Windows",
                        data: "Node 2",
                        expandedIcon: "fa fa-folder-open",
                        collapsedIcon: "fa fa-folder"
                    }
                ]
            },
        ];
        this.searchIn = [
            { label: "Current Folder", value: "Current Folder" },
            { label: "All Folder", value: "All Folder" }
        ];
        this.selectedSearchIn = this.searchIn[0].label;
    };
    ContentManagementComponent.prototype.openDubicate = function () {
        this.articles = false;
        this.folders = false;
        this.dublicate = true;
    };
    ContentManagementComponent.prototype.backContent = function () {
        this.articles = true;
        this.folders = true;
        this.dublicate = false;
        this.searchResult = false;
    };
    ContentManagementComponent.prototype.openSearch = function () {
        this.article = true;
        this.articles = false;
        this.searchResult = true;
        this.folders = false;
        this.dublicate = false;
    };
    ContentManagementComponent.prototype.closeSearch = function () {
        this.article = true;
        this.articles = true;
        this.searchResult = false;
        this.folders = true;
        this.dublicate = false;
    };
    ContentManagementComponent.prototype.detaleItem = function (data, index) {
        data.splice(index, 1);
        console.log('delete elem', index + 1);
    };
    ContentManagementComponent.prototype.addTags = function (data, value) {
        data.push(value);
        console.log(data, 'data');
        this.addTagField = '';
    };
    ContentManagementComponent.prototype.deleteArticles = function () {
        this.articlesData = this.articlesData[this.selectedType].filter(function (item) {
            if (item.checked === false) {
                return true;
            }
        });
    };
    ContentManagementComponent.prototype.deleteSearchResults = function () {
        this.searchResultData = this.searchResultData.filter(function (item) {
            console.log(item, 'item');
            if (item.element.checked === false) {
                return true;
            }
        });
    };
    ContentManagementComponent.prototype.deleteQuestion = function () {
        var count = 0;
        for (var key in this.questuonSettings) {
            if (this.questuonSettings[key]) {
                this.selectedText.questins.splice(+key - count, 1);
                count++;
            }
        }
        this.questuonSettings = {};
    };
    ContentManagementComponent.prototype.expandetTree = function () {
        this.filesTree0.forEach(function (element) {
            element.expanded = false;
        });
    };
    ContentManagementComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-content-management",
            template: __webpack_require__(/*! ./content-management.component.html */ "./src/app/main/content-management/content-management.component.html"),
            styles: [__webpack_require__(/*! ./content-management.component.scss */ "./src/app/main/content-management/content-management.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ContentManagementComponent);
    return ContentManagementComponent;
}());



/***/ }),

/***/ "./src/app/main/content-management/link-article/link-article.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/main/content-management/link-article/link-article.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"show\" class=\"bg-modal\"></div>\n<div *ngIf=\"show\" class=\"modal\">\n  <div class=\"modal-body-wrap\">\n    <div class=\"modal-body p-0\" style=\"width: 90vw;\">\n      <div class=\"title-modal jc-b\">\n        <div class=\"fw-600 fs-16\">\n          Link to Article\n        </div>\n        <div (click)=\"close()\" class=\"c-p\">\n          <img width=\"18px\" src=\"assets/img/times-black.png\" alt=\"\">\n        </div>\n      </div>\n      <div class=\"content-modal\">\n\n        <div class=\"df\" style=\"padding-left: 245px; margin-bottom: 20px;\">\n          <div class=\"pos-r\">\n            <p-dropdown class=\"search-dropdown\" [(ngModel)]=\"selectedSearchIn\" [options]=\"searchIn\"></p-dropdown>\n            <label class=\"lable-drb\">Search in</label>\n          </div>\n          <div class=\"input-search pos-r\">\n            <input type=\"text\" [(ngModel)]=\"searchText\" (ngModelChange)=\"searchTextChange($event)\" placeholder=\"Search content / tag\"\n              pInputText />\n            <div *ngIf=\"searchText.length && searchResultData.length\" class=\"serch-result-dropdawn\">\n              <div (click)=\"openSearch(); searchText = ''\" *ngFor=\"let item of searchResultData\" class=\"serch-result-dropdawn--item\">\n                <div class=\"serch-result-dropdawn--icon-wrap\">\n                  <img *ngIf=\"item.type === 'teg'\" src=\"assets/img/stiket.png\" alt=\"\">\n                  <img *ngIf=\"item.type === 'text'\" src=\"assets/img/file.png\" alt=\"\">\n                </div>\n                <div>\n                  <div class=\"serch-result-dropdawn--lable\">\n                    {{item.label}}\n                  </div>\n                </div>\n              </div>\n              <div (click)=\"openSearch(); searchText = ''\" class=\"serch-result-dropdawn--foot\">\n                More results\n              </div>\n            </div>\n            <!-- (focus)=\"openSearch()\" -->\n            <div class=\"icon-input\">\n              <img *ngIf=\"!searchResult\" class=\"c-p\" width=\"20px\" src=\"assets/img/search.png\" alt=\"\">\n              <img *ngIf=\"searchResult\" (click)=\"closeSearch(); searchText = ''\" class=\"c-p\" width=\"20px\" src=\"assets/img/times-black.png\"\n                alt=\"\">\n            </div>\n          </div>\n        </div>\n\n        <div class=\"content-wrap\">\n\n          <div *ngIf=\"folders\" class=\"folder-side\">\n            <div class=\"side-head\">\n              <div>\n                Folders\n              </div>\n              <div class=\"df ai-c\">\n                <div (click)=\"addFolder()\" class=\"m-r-40 c-p\">\n                  <img src=\"assets/img/addFolderTree.png\" alt=\"\">\n                </div>\n                <div (click)=\"expandetTree()\" class=\"c-p arrow-right\">\n                  <img class=\"animate\" src=\"assets/img/arrow.png\" alt=\"\">\n                </div>\n              </div>\n            </div>\n            <div class=\"body-side\">\n              <p-tree [value]=\"filesTree0\" selectionMode=\"single\" (onNodeSelect)=\"onNodeSelect($event,i)\">\n                <ng-template let-node pTemplate=\"default\">\n                  <div class=\"df ai-c\">\n                    <input *ngIf=\"!node.label\" [(ngModel)]=\"newText\" type=\"text\" pInputText style=\"width: 85px\">\n                    <button *ngIf=\"!node.label\" (click)=\"node.label = newText; newText = ''\" class=\"button-default m-l-5\"\n                      style=\"min-width: 35px;\">ok</button>\n                  </div>\n                  <span *ngIf=\"node.label\">{{node.label}}</span>\n                </ng-template>\n              </p-tree>\n            </div>\n          </div>\n\n          <div *ngIf=\"searchResult\" class=\"articles-side full-width \">\n            <div class=\"side-head\">\n              <div>\n                Search Results\n              </div>\n              <div class=\"df ai-c color-primary\">\n                <img [routerLink]=\"['/article']\" class=\"m-r-10 c-p\" src=\"assets/img/addArtictes.png\" alt=\"\">\n                <div class=\"m-r-30\">\n                  Add Article\n                </div>\n                <img (click)=\"deleteSearchResults()\" class=\"c-p m-r-40\" width=\"22px\" src=\"assets/img/trash.png\" alt=\"\">\n                <div (click)=\"backContent()\" class=\"df ai-c c-p\">\n                  <img width=\"16px\" class=\"m-r-5 rotate--90\" src=\"assets/img/caret.png\" alt=\"\">\n                  <div>\n                    Back to content\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"body-side body-side-scroll\">\n              <div *ngFor=\"let item of searchResultData; let i = index\" class=\"search-row \">\n                <div>\n                  <input class=\"m-r-20 m-t-0\" [(ngModel)]=\"item.element.checked\" type=\"checkbox\">\n                </div>\n                <div (click)=\"selectType(item.element, i)\">\n                  <div class=\"df ai-c jc-b m-b-7\">\n                    <div>\n                      {{item.element.title}}\n                    </div>\n                    <div (click)=\"detaleItem(searchResultData, i)\" class=\"c-p delete-icon\">\n                      <img width=\"18px\" src=\"assets/img/trash.png\" alt=\"\">\n                    </div>\n                  </div>\n                  <div class=\"stick-row\">\n                    <div *ngFor=\"let tag of item.element.tegs\" class=\"ai-c df m-r-10\">\n                      <img class=\"m-r-3\" src=\"assets/img/stiket.png\" alt=\"\">\n                      <div class=\"context\">\n                        {{tag}}\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"description\">\n                    <p class=\"context\" style=\"margin: 0; overflow: hidden; text-overflow: ellipsis; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical;\">\n                      {{item.element.text}}\n                    </p>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n\n          <div *ngIf=\"articles\" class=\"articles-side\">\n            <div class=\"side-head\">\n              <div>\n                Articles\n              </div>\n              <div class=\"df ai-c color-primary\">\n                <img [routerLink]=\"['/article']\" class=\"m-r-10 c-p\" src=\"assets/img/addArtictes.png\" alt=\"\">\n                <div class=\"m-r-30\">\n                  Add Article\n                </div>\n                <img (click)=\"deleteArticles()\" class=\"c-p\" width=\"22px\" src=\"assets/img/trash.png\" alt=\"\">\n              </div>\n            </div>\n            <div class=\"body-side\">\n              <div *ngFor=\"let item of articlesData[selectedType]; let i = index\" (click)=\"selectType(item, i)\" class=\"articles-row jc-b\">\n                <div class=\"df ai-c\">\n                  <input [(ngModel)]=\"item.checked\" class=\"m-r-20\" type=\"checkbox\">\n                  <i *ngIf=\"item.type === 'folder'\" class=\"m-r-5\" class=\"fa fa-folder m-r-20 icon-folder\"></i>\n                  <div>\n                    {{item.name}}\n                  </div>\n                </div>\n                <div (click)=\"detaleItem(articlesData[selectedType], i)\" class=\"c-p icons\">\n                  <img width=\"18px\" src=\"assets/img/trash.png\" alt=\"\">\n                </div>\n              </div>\n            </div>\n          </div>\n\n          <div *ngIf=\"article && selectedText\" class=\"article-side\">\n            <div class=\"side-head\">\n              <div>\n                Article\n              </div>\n              <div class=\"df ai-c\">\n                <img (click)=\"selectedTextAction('prev')\" class=\"m-r-10 c-p\" src=\"assets/img/arrow-left.png\" alt=\"\">\n                {{editPageCount / 5}} of {{ editPageCountValue }}\n                <img (click)=\"selectedTextAction('next')\" class=\"m-l-10 rotate-180 c-p\" src=\"assets/img/arrow-left.png\"\n                  alt=\"\">\n              </div>\n              <div class=\"df ai-c\">\n                <div class=\"m-r-30 c-p\">\n                  <img [routerLink]=\"[ '/article', id]\" a src=\"assets/img/editArticle.png\" alt=\"\">\n                </div>\n                <img class=\"c-p\" width=\"22px\" src=\"assets/img/trash.png\" alt=\"\">\n              </div>\n            </div>\n            <div class=\"body-side text-left\">\n              <div class=\"tags-wrap\">\n                <div class=\"m-r-20 p-t-12\">\n                  Tags:\n                </div>\n                <div *ngFor=\"let tags of selectedText.tegs; let i = index\" class=\"chips\">\n                  {{tags}}\n                  <img (click)=\"detaleItem(selectedText.tegs, i)\" class=\"close c-p\" src=\"assets/img/close.png\" alt=\"\">\n                </div>\n                <input [(ngModel)]=\"addTagField\" class=\"add-tag\" type=\"text\" (keyup.enter)=\"addTags(selectedText.tegs, addTagField)\"\n                  placeholder=\"Add tag\" pInputText />\n              </div>\n              <div class=\"p-t-10 p-l-25 p-r-25 p-b-25\">\n                <p class=\"fs-11\">\n                  Content > Tecnical > Phones > iPhone > iPhone 9 >\n                </p>\n                <h4 class=\"fs-14\">\n                  {{\n                  selectedText.title\n                  }}\n                </h4>\n                <p class=\"fs-12\">\n                  <span *ngFor=\"let item of previewText\">\n                    {{item}}.\n                  </span>\n                </p>\n              </div>\n              <div class=\"title-row jc-b bg\">\n                <div class=\"df ai-c\">\n                  <div class=\"fs-14\">\n                    Questions\n                  </div>\n                </div>\n                <div class=\"df ai-c\">\n                  <img (click)=\"deleteQuestion()\" class=\"c-p m-r-5\" width=\"22px\" src=\"assets/img/trash.png\" alt=\"\">\n                  <img (click)=\"showArticle = true\" class=\"c-p\" width=\"18px\" src=\"assets/img/fasten.png\" alt=\"\">\n                </div>\n              </div>\n              <div *ngFor=\"let item of selectedText.questins; let i = index\" class=\"articles-row jc-b\">\n                <div class=\"df ai-c\">\n                  <input [(ngModel)]=\"questuonSettings[i]\" class=\"m-r-20\" type=\"checkbox\">\n                  <div>\n                    {{item}}\n                  </div>\n                </div>\n                <div class=\"c-p icons df ai-c\">\n                  <img (click)=\"detaleItem(selectedText.questins, i)\" class=\"c-p m-r-5\" width=\"22px\" src=\"assets/img/trash.png\"\n                    alt=\"\">\n                  <img (click)=\"showArticle = true\" class=\"c-p\" width=\"18px\" src=\"assets/img/fasten.png\" alt=\"\">\n                </div>\n              </div>\n            </div>\n          </div>\n\n        </div>\n\n      </div>\n      <div class=\"title-modal p-r-60 jc-e\">\n        <button class=\"button-default m-r-20\">Link</button>\n        <button (click)=\"close()\" class=\"button-default\">Cancel</button>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/main/content-management/link-article/link-article.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/main/content-management/link-article/link-article.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content-wrap {\n  display: flex;\n  justify-content: space-between;\n  min-height: calc(100vh - 234px); }\n\n.head {\n  height: 76px;\n  background: inherit;\n  background-color: #f2f2f2;\n  display: flex;\n  align-items: center;\n  padding-left: 90px;\n  padding-right: 50px;\n  margin-bottom: 40px; }\n\n.lable-drb {\n  position: absolute;\n  top: 5px;\n  left: 5px;\n  font-size: 11px;\n  color: #1e1e1e; }\n\n.input-search {\n  width: 100%;\n  max-width: 533px;\n  margin-left: 10px; }\n\n.input-search input {\n    height: 48px;\n    width: 100%; }\n\n.side-head {\n  height: 37px;\n  background-color: #e4e4e4;\n  box-sizing: border-box;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 15px; }\n\n.body-side {\n  background-color: white;\n  box-sizing: border-box;\n  border-width: 1px;\n  border-style: solid;\n  border-color: #d7d7d7;\n  min-height: 100%; }\n\n.body-side-scroll {\n  overflow-y: auto;\n  max-height: 400px; }\n\n.arrow-right {\n  -webkit-transform: rotate(-90deg);\n          transform: rotate(-90deg); }\n\n.folder-side {\n  width: 225px;\n  min-width: 225px;\n  margin-right: 20px; }\n\n.articles-side {\n  width: 100%;\n  margin-right: 20px; }\n\n.article-side {\n  width: 50%;\n  max-width: 550px;\n  min-width: 420px; }\n\n.rotate-180 {\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg); }\n\n.rotate--90 {\n  -webkit-transform: rotate(-90deg);\n          transform: rotate(-90deg); }\n\n.articles-row {\n  border-bottom: 1px solid #d7d7d7;\n  display: flex;\n  align-items: center;\n  padding: 10px 20px;\n  transition: all 0.3s;\n  min-height: 46px; }\n\n.articles-row .icons {\n    display: none;\n    align-items: center; }\n\n.articles-row:hover {\n    background: #dff5f9; }\n\n.articles-row:hover .icons {\n      display: flex; }\n\n.tags-wrap {\n  display: flex;\n  flex-wrap: wrap;\n  padding: 5px 15px;\n  background-color: #f2f2f2;\n  box-sizing: border-box;\n  border-width: 1px;\n  border-style: solid;\n  border-color: #d7d7d7; }\n\n.add-tag {\n  height: 27px;\n  border-radius: 10px;\n  margin-bottom: 10px;\n  margin-top: 6px;\n  width: 120px; }\n\n.title-row {\n  height: 45px;\n  border-width: 1px;\n  border-style: solid;\n  border-color: #d7d7d7;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background: #f2f2f2;\n  padding: 10px 20px; }\n\n.search-row {\n  padding: 20px 20px 10px 20px;\n  display: flex;\n  font-size: 12px;\n  transition: all 0.3s;\n  border-bottom: 1px solid #d7d7d7;\n  position: relative; }\n\n.search-row .description {\n    overflow: hidden;\n    color: #999999; }\n\n.search-row .delete-icon {\n    display: none;\n    align-items: center;\n    position: absolute;\n    right: 20px; }\n\n.search-row:hover {\n    background-color: #dff5f9; }\n\n.search-row:hover .delete-icon {\n      display: flex; }\n\n.stick-row {\n  font-size: 11px;\n  color: #018191;\n  display: flex;\n  margin-bottom: 5px; }\n\n.question-row {\n  border-bottom: 1px solid #d7d7d7; }\n\n.question-row-head {\n    display: flex;\n    align-items: center;\n    min-height: 40px;\n    padding: 5px 10px;\n    cursor: pointer; }\n\n.question-row-body {\n    padding: 20px 40px 20px 40px;\n    background: #f2f2f2;\n    position: relative; }\n\n.question-row-body .question-item {\n      height: 55px;\n      background: inherit;\n      background-color: white;\n      display: flex;\n      align-items: center;\n      justify-content: space-between;\n      padding: 5px 20px;\n      border: 1px solid #d7d7d7;\n      border-bottom: 0; }\n\n.question-row-body .question-item .trash-icon {\n        display: none;\n        align-items: center;\n        cursor: pointer; }\n\n.question-row-body .question-item:hover {\n        background-color: #dff5f9; }\n\n.question-row-body .question-item:hover .trash-icon {\n          display: flex; }\n\n.question-row-body .question-item:last-child {\n        border-bottom: 1px solid #d7d7d7; }\n\n.icon-input {\n  position: absolute;\n  right: 9px;\n  top: calc(50% - 10px); }\n\n.nitif-circle {\n  background: #ff6600;\n  width: 16px;\n  height: 16px;\n  border-radius: 100px;\n  overflow: hidden;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 1px solid #feb98c;\n  font-size: 10px;\n  color: white; }\n\n.serch-result-dropdawn {\n  position: absolute;\n  top: 100%;\n  background: white;\n  width: 100%;\n  border: 1px solid #a6a6a6;\n  border-top: 0;\n  z-index: 111; }\n\n.serch-result-dropdawn--item {\n    display: flex;\n    align-items: center;\n    padding: 9px 10px;\n    cursor: pointer; }\n\n.serch-result-dropdawn--icon-wrap {\n    width: 25px;\n    min-width: 25px; }\n\n.serch-result-dropdawn--foot {\n    border-top: 1px solid #a6a6a6;\n    padding: 10px;\n    text-align: center;\n    cursor: pointer; }\n\n.title-modal {\n  display: flex;\n  align-items: center;\n  background: #f2f2f2;\n  padding: 0 20px;\n  min-height: 70px; }\n\n.content-modal {\n  padding: 20px; }\n\n.content-wrap {\n  margin-bottom: 40px; }\n\n.search-wrap {\n  padding-left: 245px;\n  margin-bottom: 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NodW1pay9Eb2N1bWVudHMvU1BPVC9zcmMvYXBwL21haW4vY29udGVudC1tYW5hZ2VtZW50L2NvbnRlbnQtbWFuYWdlbWVudC5jb21wb25lbnQuc2NzcyIsIi9ob21lL3NodW1pay9Eb2N1bWVudHMvU1BPVC9zcmMvYXBwL21haW4vY29udGVudC1tYW5hZ2VtZW50L2xpbmstYXJ0aWNsZS9saW5rLWFydGljbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLCtCQUErQixFQUFBOztBQUVqQztFQUNFLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIseUJBQXdDO0VBQ3hDLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixtQkFBbUIsRUFBQTs7QUFFckI7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCxlQUFlO0VBQ2YsY0FBYyxFQUFBOztBQUVoQjtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsaUJBQWlCLEVBQUE7O0FBSG5CO0lBS0ksWUFBWTtJQUNaLFdBQVcsRUFBQTs7QUFHZjtFQUNFLFlBQVk7RUFDWix5QkFBd0M7RUFDeEMsc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsOEJBQThCO0VBQzlCLGVBQWUsRUFBQTs7QUFFakI7RUFDRSx1QkFBd0M7RUFDeEMsc0JBQXNCO0VBQ3RCLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIscUJBQW9DO0VBQ3BDLGdCQUFnQixFQUFBOztBQUVsQjtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUIsRUFBQTs7QUFFbkI7RUFDRSxpQ0FBeUI7VUFBekIseUJBQXlCLEVBQUE7O0FBRTNCO0VBQ0UsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixrQkFBa0IsRUFBQTs7QUFFcEI7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCLEVBQUE7O0FBRXBCO0VBQ0UsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixnQkFBZ0IsRUFBQTs7QUFFbEI7RUFDRSxpQ0FBeUI7VUFBekIseUJBQXlCLEVBQUE7O0FBRTNCO0VBQ0UsaUNBQXlCO1VBQXpCLHlCQUF5QixFQUFBOztBQUUzQjtFQUNFLGdDQUErQztFQUMvQyxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixvQkFBb0I7RUFDcEIsZ0JBQWdCLEVBQUE7O0FBTmxCO0lBUUksYUFBYTtJQUNiLG1CQUFtQixFQUFBOztBQVR2QjtJQVlJLG1CQUFrQyxFQUFBOztBQVp0QztNQWNNLGFBQWEsRUFBQTs7QUFJbkI7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQix5QkFBd0M7RUFDeEMsc0JBQXNCO0VBQ3RCLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIscUJBQW9DLEVBQUE7O0FBRXRDO0VBQ0UsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLFlBQVksRUFBQTs7QUFFZDtFQUNFLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLHFCQUFnQztFQUNoQyxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsa0JBQWtCLEVBQUE7O0FBRXBCO0VBQ0UsNEJBQTRCO0VBQzVCLGFBQWE7RUFDYixlQUFlO0VBQ2Ysb0JBQW9CO0VBQ3BCLGdDQUEyQztFQUMzQyxrQkFBa0IsRUFBQTs7QUFOcEI7SUFRSSxnQkFBZ0I7SUFDaEIsY0FBYyxFQUFBOztBQVRsQjtJQVlJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLFdBQVcsRUFBQTs7QUFmZjtJQWtCSSx5QkFBd0MsRUFBQTs7QUFsQjVDO01Bb0JNLGFBQWEsRUFBQTs7QUFJbkI7RUFDRSxlQUFlO0VBQ2YsY0FBYztFQUNkLGFBQWE7RUFDYixrQkFBa0IsRUFBQTs7QUFFcEI7RUFDRSxnQ0FBMkMsRUFBQTs7QUFDM0M7SUFDRSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsZUFBZSxFQUFBOztBQUVqQjtJQUNFLDRCQUE0QjtJQUM1QixtQkFBa0M7SUFDbEMsa0JBQWtCLEVBQUE7O0FBSG5CO01BS0csWUFBWTtNQUNaLG1CQUFtQjtNQUNuQix1QkFBb0M7TUFDcEMsYUFBYTtNQUNiLG1CQUFtQjtNQUNuQiw4QkFBOEI7TUFDOUIsaUJBQWlCO01BQ2pCLHlCQUFvQztNQUNwQyxnQkFBZ0IsRUFBQTs7QUFibkI7UUFlSyxhQUFhO1FBQ2IsbUJBQW1CO1FBQ25CLGVBQWUsRUFBQTs7QUFqQnBCO1FBb0JLLHlCQUF3QyxFQUFBOztBQXBCN0M7VUFzQk8sYUFBYSxFQUFBOztBQXRCcEI7UUEwQkssZ0NBQTJDLEVBQUE7O0FBS25EO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixxQkFBcUIsRUFBQTs7QUFFdkI7RUFDRSxtQkFBbUI7RUFDbkIsV0FBVztFQUNYLFlBQVk7RUFDWixvQkFBb0I7RUFDcEIsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLHlCQUF5QjtFQUN6QixlQUFlO0VBQ2YsWUFBWSxFQUFBOztBQUVkO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxpQkFBaUI7RUFDakIsV0FBVztFQUNYLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2IsWUFBWSxFQUFBOztBQUNaO0lBQ0UsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsZUFBZSxFQUFBOztBQUVqQjtJQUNFLFdBQVc7SUFDWCxlQUFlLEVBQUE7O0FBRWpCO0lBQ0UsNkJBQTZCO0lBQzdCLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsZUFBZSxFQUFBOztBQ3JPbkI7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsZ0JBQWdCLEVBQUE7O0FBRWxCO0VBQ0UsYUFBYSxFQUFBOztBQUVmO0VBQ0UsbUJBQW1CLEVBQUE7O0FBRXJCO0VBQ0UsbUJBQW1CO0VBQ25CLG1CQUFtQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbWFpbi9jb250ZW50LW1hbmFnZW1lbnQvbGluay1hcnRpY2xlL2xpbmstYXJ0aWNsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50LXdyYXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSAyMzRweCk7XG59XG4uaGVhZCB7XG4gIGhlaWdodDogNzZweDtcbiAgYmFja2dyb3VuZDogaW5oZXJpdDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDIsIDI0MiwgMjQyLCAxKTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZy1sZWZ0OiA5MHB4O1xuICBwYWRkaW5nLXJpZ2h0OiA1MHB4O1xuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xufVxuLmxhYmxlLWRyYiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1cHg7XG4gIGxlZnQ6IDVweDtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBjb2xvcjogIzFlMWUxZTtcbn1cbi5pbnB1dC1zZWFyY2gge1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiA1MzNweDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIGlucHV0IHtcbiAgICBoZWlnaHQ6IDQ4cHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cbi5zaWRlLWhlYWQge1xuICBoZWlnaHQ6IDM3cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjI4LCAyMjgsIDIyOCwgMSk7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcGFkZGluZzogMCAxNXB4O1xufVxuLmJvZHktc2lkZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJvcmRlci13aWR0aDogMXB4O1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItY29sb3I6IHJnYmEoMjE1LCAyMTUsIDIxNSwgMSk7XG4gIG1pbi1oZWlnaHQ6IDEwMCU7XG59XG4uYm9keS1zaWRlLXNjcm9sbCB7XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIG1heC1oZWlnaHQ6IDQwMHB4O1xufVxuLmFycm93LXJpZ2h0IHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKTtcbn1cbi5mb2xkZXItc2lkZSB7XG4gIHdpZHRoOiAyMjVweDtcbiAgbWluLXdpZHRoOiAyMjVweDtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xufVxuLmFydGljbGVzLXNpZGUge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xufVxuLmFydGljbGUtc2lkZSB7XG4gIHdpZHRoOiA1MCU7XG4gIG1heC13aWR0aDogNTUwcHg7XG4gIG1pbi13aWR0aDogNDIwcHg7XG59XG4ucm90YXRlLTE4MCB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG59XG4ucm90YXRlLS05MCB7XG4gIHRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7XG59XG4uYXJ0aWNsZXMtcm93IHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMjE1LCAyMTUsIDIxNSwgMSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gIG1pbi1oZWlnaHQ6IDQ2cHg7XG4gIC5pY29ucyB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjIzLCAyNDUsIDI0OSwgMSk7XG4gICAgLmljb25zIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgfVxuICB9XG59XG4udGFncy13cmFwIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBwYWRkaW5nOiA1cHggMTVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDIsIDI0MiwgMjQyLCAxKTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci1jb2xvcjogcmdiYSgyMTUsIDIxNSwgMjE1LCAxKTtcbn1cbi5hZGQtdGFnIHtcbiAgaGVpZ2h0OiAyN3B4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBtYXJnaW4tdG9wOiA2cHg7XG4gIHdpZHRoOiAxMjBweDtcbn1cbi50aXRsZS1yb3cge1xuICBoZWlnaHQ6IDQ1cHg7XG4gIGJvcmRlci13aWR0aDogMXB4O1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItY29sb3I6IHJnYigyMTUsIDIxNSwgMjE1KTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiAjZjJmMmYyO1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG59XG4uc2VhcmNoLXJvdyB7XG4gIHBhZGRpbmc6IDIwcHggMjBweCAxMHB4IDIwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2IoMjE1LCAyMTUsIDIxNSk7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgLmRlc2NyaXB0aW9uIHtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGNvbG9yOiAjOTk5OTk5O1xuICB9XG4gIC5kZWxldGUtaWNvbiB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMjBweDtcbiAgfVxuICAmOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIyMywgMjQ1LCAyNDksIDEpO1xuICAgIC5kZWxldGUtaWNvbiB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgIH1cbiAgfVxufVxuLnN0aWNrLXJvdyB7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgY29sb3I6ICMwMTgxOTE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cbi5xdWVzdGlvbi1yb3cge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiKDIxNSwgMjE1LCAyMTUpO1xuICAmLWhlYWQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtaW4taGVpZ2h0OiA0MHB4O1xuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuICAmLWJvZHkge1xuICAgIHBhZGRpbmc6IDIwcHggNDBweCAyMHB4IDQwcHg7XG4gICAgYmFja2dyb3VuZDogcmdiYSgyNDIsIDI0MiwgMjQyLCAxKTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgLnF1ZXN0aW9uLWl0ZW0ge1xuICAgICAgaGVpZ2h0OiA1NXB4O1xuICAgICAgYmFja2dyb3VuZDogaW5oZXJpdDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgcGFkZGluZzogNXB4IDIwcHg7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMjE1LCAyMTUsIDIxNSk7XG4gICAgICBib3JkZXItYm90dG9tOiAwO1xuICAgICAgLnRyYXNoLWljb24ge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB9XG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMjMsIDI0NSwgMjQ5LCAxKTtcbiAgICAgICAgLnRyYXNoLWljb24ge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2IoMjE1LCAyMTUsIDIxNSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4uaWNvbi1pbnB1dCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDlweDtcbiAgdG9wOiBjYWxjKDUwJSAtIDEwcHgpO1xufVxuLm5pdGlmLWNpcmNsZSB7XG4gIGJhY2tncm91bmQ6ICNmZjY2MDA7XG4gIHdpZHRoOiAxNnB4O1xuICBoZWlnaHQ6IDE2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZlYjk4YztcbiAgZm9udC1zaXplOiAxMHB4O1xuICBjb2xvcjogd2hpdGU7XG59XG4uc2VyY2gtcmVzdWx0LWRyb3BkYXduIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2E2YTZhNjtcbiAgYm9yZGVyLXRvcDogMDtcbiAgei1pbmRleDogMTExO1xuICAmLS1pdGVtIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzogOXB4IDEwcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG4gICYtLWljb24td3JhcCB7XG4gICAgd2lkdGg6IDI1cHg7XG4gICAgbWluLXdpZHRoOiAyNXB4O1xuICB9XG4gICYtLWZvb3Qge1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjYTZhNmE2O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxufVxuIiwiQGltcG9ydCBcIi4uL2NvbnRlbnQtbWFuYWdlbWVudC5jb21wb25lbnQuc2Nzc1wiO1xuXG4udGl0bGUtbW9kYWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiAjZjJmMmYyO1xuICBwYWRkaW5nOiAwIDIwcHg7XG4gIG1pbi1oZWlnaHQ6IDcwcHg7XG59XG4uY29udGVudC1tb2RhbCB7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG4uY29udGVudC13cmFwIHtcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcbn1cbi5zZWFyY2gtd3JhcCB7XG4gIHBhZGRpbmctbGVmdDogMjQ1cHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/main/content-management/link-article/link-article.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/main/content-management/link-article/link-article.component.ts ***!
  \********************************************************************************/
/*! exports provided: LinkArticleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkArticleComponent", function() { return LinkArticleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LinkArticleComponent = /** @class */ (function () {
    function LinkArticleComponent() {
        this.hide = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"];
        this.article = true;
        this.articles = true;
        this.searchResult = false;
        this.folders = true;
        this.welcome = true;
        this.dublicate = false;
        this.math = Math;
        this.questuonSettings = {};
        this.dublicateQuestionData = [
            {
                name: " How do I use the 3D touch?",
                questions: [
                    {
                        name: "What is the camera resolution?",
                        path: "Content > Tecnical > Phones > iPhone > iPhone 8 > Specifications"
                    },
                    {
                        name: "What is the camera resolution?",
                        path: "Content > Tecnical > Phones > iPhone > iPhone 7 > Specifications"
                    },
                    {
                        name: "What is the camera resolution?",
                        path: "Content > Tecnical > Phones > iPhone > iPhone 6 > Specifications"
                    },
                    {
                        name: "What is the camera resolution?",
                        path: "Content > Tecnical > Phones > iPhone > iPhone 5 > Specifications"
                    }
                ]
            },
            {
                name: "How to replace the screen?",
                questions: [
                    {
                        name: "How to replace the screen?",
                        path: "Content > Tecnical > Phones > iPhone > iPhone 8 > Specifications"
                    },
                    {
                        name: "How to replace the screen?",
                        path: "Content > Tecnical > Phones > iPhone > iPhone 7 > Specifications"
                    },
                    {
                        name: "How to replace the screen?",
                        path: "Content > Tecnical > Phones > iPhone > iPhone 6 > Specifications"
                    },
                    {
                        name: "How to replace the screen?",
                        path: "Content > Tecnical > Phones > iPhone > iPhone 5 > Specifications"
                    }
                ]
            }
        ];
        this.articlesData = {
            Android: [
                { id: "1", name: "Android 7", checked: false, type: "folder" },
                { id: "2", name: "Android 6", checked: false, type: "folder" },
                { id: "3", name: "Android 5", checked: false, type: "folder" },
                {
                    id: "4",
                    name: "text",
                    checked: false,
                    type: "text",
                    title: "Using 3D touch",
                    tegs: ['3d touch', 'screen'],
                    questins: ['Which iPhone, iPad, and iPod touch models support iOS 1?', 'Which iPhone, iPad, and iPod touch models support iOS 2?', 'Which iPhone, iPad, and iPod touch models support iOS 3?', 'Which iPhone, iPad, and iPod touch models support iOS 4?', 'Which iPhone, iPad, and iPod touch models support iOS 5?'],
                    text: "3D Touch is multitouch made multidimensional. With it you can press deeply to launch actions instead of apps, reply to notifications, preview messages and links, switch keyboards, switch apps, animate Live Photos, vary stroke width, and more. It's like a wormhole through iOS that lets you move around faster than ever.\n        3D Touch is multitouch made multidimensional. With it you can press3D Touch is multitouch made multidimensional. With it you can press deeply to launch actions instead of apps, reply to notifications, preview messages and links, switch keyboards, switch apps, animate Live Photos, vary stroke width, and more. It's like a wormhole through iOS that lets you move around faster than ever.\n        3D Touch is multitouch made multidimensional. With it you can press3D Touch is multitouch made multidimensional. With it you can press deeply to launch actions instead of apps, reply to notifications, preview messages and links, switch keyboards, switch apps, animate Live Photos, vary stroke width, and more. It's like a wormhole through iOS that lets you move around faster than ever.\n        3D Touch is multitouch made multidimensional. With it you can press3D Touch is multitouch made multidimensional. With it you can press deeply to launch actions instead of apps, reply to notifications, preview messages and links, switch keyboards, switch apps, animate Live Photos, vary stroke width, and more. It's like a wormhole through iOS that lets you move around faster than ever.\n        3D Touch is multitouch made multidimensional. With it you can press deeply to launch actions instead of apps, reply to notifications, preview messages and links, switch keyboards, switch apps, animate Live Photos, vary stroke width, and more. It's like a wormhole through iOS that lets you move around faster than ever."
                },
                {
                    id: "5",
                    name: "text 5",
                    checked: false,
                    type: "text",
                    questins: ['Using 3D touch models support iOS 12?', 'Which iPhone, iPad, and iPod touch models support iOS 10?'],
                    tegs: ['multi', 'using'],
                    title: "Using 3D touch",
                    text: "multitouch sdfsdfsdfsd sdfs dfs dfsd fsdf sdf sdfsdfsdfsdfsdf"
                }
            ],
            Apple: [
                { id: "1", name: "iPhone 7", checked: false, type: "folder" },
                { id: "2", name: "iPhone 6", checked: false, type: "folder" },
                { id: "3", name: "iPhone 5", checked: false, type: "folder" },
                {
                    id: "5",
                    name: "text 5",
                    checked: false,
                    type: "text",
                    questins: ['Using 3D touch models support iOS 12?', 'Which iPhone, iPad, and iPod touch models support iOS 10?'],
                    tegs: ['multi', 'using'],
                    title: "Using 3D touch",
                    text: "2 sdfs dfs dfsd fsdf sdf sdfsdfsdfsdfsdf"
                }
            ],
            Windows: [
                { id: "1", name: "w1", checked: false, type: "folder" },
                { id: "2", name: "w2", checked: false, type: "folder" },
                { id: "3", name: "w3", checked: false, type: "folder" },
            ],
            Devices: [
                { id: "1", name: "Windows", checked: false, type: "folder" },
                { id: "2", name: "Apple", checked: false, type: "folder" },
                { id: "3", name: "Android", checked: false, type: "folder" },
            ]
        };
        this.searchText = '';
        this.searchResultData = [];
    }
    LinkArticleComponent.prototype.searchTextChange = function (e) {
        var _this = this;
        this.searchResultData = [];
        this.articlesData[this.selectedType].forEach(function (element, index) {
            if (element.type === 'text') {
                if (element.text.includes(e)) {
                    _this.searchResultData.push({
                        type: "text",
                        label: element.title,
                        element: element
                    });
                }
                for (var _i = 0, _a = element.tegs; _i < _a.length; _i++) {
                    var item = _a[_i];
                    if (item.includes(e)) {
                        _this.searchResultData.push({
                            type: "teg",
                            label: item,
                            element: element
                        });
                    }
                }
            }
        });
        console.log(e, this.searchResultData);
        setTimeout(function () {
            var divs = document.querySelectorAll('.context');
            [].forEach.call(divs, function (div) {
                console.log(div);
                var options = {};
                var markInstance = new Mark(div);
                markInstance.unmark({
                    done: function () {
                        markInstance.mark(e, options);
                    }
                });
            });
        }, 100);
    };
    LinkArticleComponent.prototype.onNodeSelect = function (e, i) {
        console.log(e);
        this.selectedType = e.node.label;
        this.selectedFolder = e.node;
        this.welcome = false;
    };
    LinkArticleComponent.prototype.selectType = function (item, index) {
        if (item.type === 'text') {
            this.editPageCount = 5;
            this.selectedText = item;
            console.log(item, 'item');
            this.previewText = item.text.split('.');
            this.previewText = this.previewText.slice(this.editPageCount - 5, this.editPageCount);
            this.editPageCountValue = this.math.ceil(this.selectedText.text.split('.').length / 5);
        }
        this.id = item.id;
    };
    LinkArticleComponent.prototype.selectedTextAction = function (flag) {
        console.log(this.editPageCount, 'this.editPageCount');
        if (flag === 'prev' && this.editPageCount > 5) {
            this.editPageCount = this.editPageCount - 5;
        }
        else if (flag === 'next' && this.editPageCount < this.selectedText.text.split('.').length) {
            this.editPageCount = this.editPageCount + 5;
        }
        this.previewText = this.selectedText.text.split('.').slice(this.editPageCount - 5, this.editPageCount);
    };
    LinkArticleComponent.prototype.addFolder = function () {
        if (this.selectedFolder) {
            if (!this.selectedFolder.children) {
                this.selectedFolder.children = [];
            }
            this.selectedFolder.children.push({
                label: "",
                data: "Node 0",
                expandedIcon: "fa fa-folder-open",
                collapsedIcon: "fa fa-folder"
            });
        }
        else {
            this.filesTree0.push({
                label: "",
                data: "Node 0",
                expandedIcon: "fa fa-folder-open",
                collapsedIcon: "fa fa-folder"
            });
        }
    };
    LinkArticleComponent.prototype.ngOnInit = function () {
        this.filesTree0 = [
            {
                label: "Devices",
                data: "Node 0",
                expandedIcon: "fa fa-folder-open",
                collapsedIcon: "fa fa-folder",
                leaf: false,
                expanded: false,
                children: [
                    {
                        label: "Android",
                        data: "Node 0",
                        expandedIcon: "fa fa-folder-open",
                        collapsedIcon: "fa fa-folder"
                    },
                    {
                        label: "Apple",
                        data: "Node 1",
                        expandedIcon: "fa fa-folder-open",
                        collapsedIcon: "fa fa-folder"
                    },
                    {
                        label: "Windows",
                        data: "Node 2",
                        expandedIcon: "fa fa-folder-open",
                        collapsedIcon: "fa fa-folder"
                    }
                ]
            },
        ];
        this.searchIn = [
            { label: "Current Folder", value: "Current Folder" },
            { label: "All Folder", value: "All Folder" }
        ];
        this.selectedSearchIn = this.searchIn[0].label;
    };
    LinkArticleComponent.prototype.openDubicate = function () {
        this.articles = false;
        this.folders = false;
        this.dublicate = true;
    };
    LinkArticleComponent.prototype.backContent = function () {
        this.articles = true;
        this.folders = true;
        this.dublicate = false;
        this.searchResult = false;
    };
    LinkArticleComponent.prototype.openSearch = function () {
        this.article = true;
        this.articles = false;
        this.searchResult = true;
        this.folders = false;
        this.dublicate = false;
    };
    LinkArticleComponent.prototype.closeSearch = function () {
        this.article = true;
        this.articles = true;
        this.searchResult = false;
        this.folders = true;
        this.dublicate = false;
    };
    LinkArticleComponent.prototype.detaleItem = function (data, index) {
        data.splice(index, 1);
        console.log('delete elem', index + 1);
    };
    LinkArticleComponent.prototype.addTags = function (data, value) {
        data.push(value);
        console.log(data, 'data');
        this.addTagField = '';
    };
    LinkArticleComponent.prototype.deleteArticles = function () {
        this.articlesData = this.articlesData[this.selectedType].filter(function (item) {
            if (item.checked === false) {
                return true;
            }
        });
    };
    LinkArticleComponent.prototype.deleteSearchResults = function () {
        this.searchResultData = this.searchResultData.filter(function (item) {
            console.log(item, 'item');
            if (item.element.checked === false) {
                return true;
            }
        });
    };
    LinkArticleComponent.prototype.deleteQuestion = function () {
        var count = 0;
        for (var key in this.questuonSettings) {
            if (this.questuonSettings[key]) {
                this.selectedText.questins.splice(+key - count, 1);
                count++;
            }
        }
        this.questuonSettings = {};
    };
    LinkArticleComponent.prototype.expandetTree = function () {
        this.filesTree0.forEach(function (element) {
            element.expanded = false;
        });
    };
    LinkArticleComponent.prototype.close = function () {
        this.show = false;
        this.hide.emit('');
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], LinkArticleComponent.prototype, "show", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], LinkArticleComponent.prototype, "hide", void 0);
    LinkArticleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-link-article',
            template: __webpack_require__(/*! ./link-article.component.html */ "./src/app/main/content-management/link-article/link-article.component.html"),
            styles: [__webpack_require__(/*! ./link-article.component.scss */ "./src/app/main/content-management/link-article/link-article.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LinkArticleComponent);
    return LinkArticleComponent;
}());



/***/ }),

/***/ "./src/app/main/main.component.html":
/*!******************************************!*\
  !*** ./src/app/main/main.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/main/main.component.scss":
/*!******************************************!*\
  !*** ./src/app/main/main.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vbWFpbi5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/main/main.component.ts":
/*!****************************************!*\
  !*** ./src/app/main/main.component.ts ***!
  \****************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MainComponent = /** @class */ (function () {
    function MainComponent() {
    }
    MainComponent.prototype.ngOnInit = function () {
    };
    MainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-main',
            template: __webpack_require__(/*! ./main.component.html */ "./src/app/main/main.component.html"),
            styles: [__webpack_require__(/*! ./main.component.scss */ "./src/app/main/main.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "./src/app/main/widget-management/widget-management.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/main/widget-management/widget-management.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  widget-management works!\n</p>\n"

/***/ }),

/***/ "./src/app/main/widget-management/widget-management.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/main/widget-management/widget-management.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vd2lkZ2V0LW1hbmFnZW1lbnQvd2lkZ2V0LW1hbmFnZW1lbnQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/main/widget-management/widget-management.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/main/widget-management/widget-management.component.ts ***!
  \***********************************************************************/
/*! exports provided: WidgetManagementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetManagementComponent", function() { return WidgetManagementComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var WidgetManagementComponent = /** @class */ (function () {
    function WidgetManagementComponent() {
    }
    WidgetManagementComponent.prototype.ngOnInit = function () {
    };
    WidgetManagementComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-widget-management',
            template: __webpack_require__(/*! ./widget-management.component.html */ "./src/app/main/widget-management/widget-management.component.html"),
            styles: [__webpack_require__(/*! ./widget-management.component.scss */ "./src/app/main/widget-management/widget-management.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], WidgetManagementComponent);
    return WidgetManagementComponent;
}());



/***/ }),

/***/ "./src/app/shared/dialog/dialog.component.html":
/*!*****************************************************!*\
  !*** ./src/app/shared/dialog/dialog.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"bg-modal\"></div>\n<div class=\"modal\">\n  <div class=\"modal-body-wrap\">\n    <div class=\"modal-body\" style=\"width: 80vw; max-width: 600px; padding: 40px;\">\n      <h2 class=\"text-center\">\n        {{question}}\n      </h2>\n      <div class=\"df jc-c\">\n        <button (click)=\"answer(true)\" class=\"button-default m-r-40\">Yes</button>\n        <button (click)=\"answer(false)\" class=\"button-default\">No</button>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/shared/dialog/dialog.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/shared/dialog/dialog.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9kaWFsb2cvZGlhbG9nLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/shared/dialog/dialog.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/dialog/dialog.component.ts ***!
  \***************************************************/
/*! exports provided: DialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogComponent", function() { return DialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DialogComponent = /** @class */ (function () {
    function DialogComponent() {
        this.result = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"];
    }
    DialogComponent.prototype.answer = function (event) {
        this.result.emit(event);
    };
    DialogComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DialogComponent.prototype, "question", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DialogComponent.prototype, "result", void 0);
    DialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dialog',
            template: __webpack_require__(/*! ./dialog.component.html */ "./src/app/shared/dialog/dialog.component.html"),
            styles: [__webpack_require__(/*! ./dialog.component.scss */ "./src/app/shared/dialog/dialog.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DialogComponent);
    return DialogComponent;
}());



/***/ }),

/***/ "./src/app/shared/directives/click-outside.directive.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/directives/click-outside.directive.ts ***!
  \**************************************************************/
/*! exports provided: ClickOutsideDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClickOutsideDirective", function() { return ClickOutsideDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ClickOutsideDirective = /** @class */ (function () {
    function ClickOutsideDirective(_elementRef) {
        this._elementRef = _elementRef;
        this.clickOutside = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ClickOutsideDirective.prototype.onClick = function (targetElement) {
        var clickedInside = this._elementRef.nativeElement.contains(targetElement);
        if (!clickedInside) {
            this.clickOutside.emit(null);
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ClickOutsideDirective.prototype, "clickOutside", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('document:click', ['$event.target']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], ClickOutsideDirective.prototype, "onClick", null);
    ClickOutsideDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            // tslint:disable-next-line:directive-selector
            selector: '[clickOutside]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], ClickOutsideDirective);
    return ClickOutsideDirective;
}());



/***/ }),

/***/ "./src/app/shared/header/header.component.html":
/*!*****************************************************!*\
  !*** ./src/app/shared/header/header.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n  <div class=\"logo\">\n    <img width=\"180px\" class=\"m-r-10\" src=\"/assets/img/logo.png\">\n  </div>\n  <div class=\"logo-lable\">\n    SPOT\n  </div>\n  <div class=\"vertical-line\"></div>\n  <nav>\n    <a routerLink=\"/content-manage\" routerLinkActive=\"active\">\n      SPOT CONTENT\n    </a>\n    <a routerLink=\"/widget-manage\" routerLinkActive=\"active\">\n      SPOT WIDGETS\n    </a>\n  </nav>\n</header>"

/***/ }),

/***/ "./src/app/shared/header/header.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/shared/header/header.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "header {\n  height: 81px;\n  background-color: #666666;\n  display: flex;\n  align-items: center;\n  padding: 10px; }\n\n.logo-lable {\n  font-family: \"Arial Bold\", \"Arial\";\n  font-weight: 700;\n  font-style: normal;\n  font-size: 22px;\n  color: #ffffff;\n  text-align: left;\n  margin-right: 40px; }\n\n.vertical-line {\n  height: 30px;\n  border-left: 1px solid white;\n  margin-right: 40px; }\n\nnav a {\n  font-size: 16px;\n  color: #FFFFFF;\n  margin-right: 30px;\n  padding: 5px 10px; }\n\nnav a.active {\n    border-bottom: 1px solid white; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NodW1pay9Eb2N1bWVudHMvU1BPVC9zcmMvYXBwL3NoYXJlZC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtFQUNaLHlCQUF3QztFQUN4QyxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGFBQWEsRUFBQTs7QUFFZjtFQUNFLGtDQUFrQztFQUNsQyxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGtCQUFrQixFQUFBOztBQUVwQjtFQUNFLFlBQVk7RUFDWiw0QkFBNEI7RUFDNUIsa0JBQWtCLEVBQUE7O0FBRXBCO0VBRVEsZUFBZTtFQUNmLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsaUJBQWlCLEVBQUE7O0FBTHpCO0lBT1ksOEJBQThCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImhlYWRlciB7XG4gIGhlaWdodDogODFweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMDIsIDEwMiwgMTAyLCAxKTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMTBweDtcbn1cbi5sb2dvLWxhYmxlIHtcbiAgZm9udC1mYW1pbHk6IFwiQXJpYWwgQm9sZFwiLCBcIkFyaWFsXCI7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbWFyZ2luLXJpZ2h0OiA0MHB4O1xufVxuLnZlcnRpY2FsLWxpbmUge1xuICBoZWlnaHQ6IDMwcHg7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgd2hpdGU7XG4gIG1hcmdpbi1yaWdodDogNDBweDtcbn1cbm5hdntcbiAgICBhe1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIGNvbG9yOiAjRkZGRkZGO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XG4gICAgICAgIHBhZGRpbmc6IDVweCAxMHB4O1xuICAgICAgICAmLmFjdGl2ZXtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB3aGl0ZTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/shared/header/header.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/header/header.component.ts ***!
  \***************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/shared/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/shared/header/header.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
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
    production: false
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

module.exports = __webpack_require__(/*! /home/shumik/Documents/SPOT/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map