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
/* harmony import */ var _main_widget_management_new_widget_new_widget_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./main/widget-management/new-widget/new-widget.component */ "./src/app/main/widget-management/new-widget/new-widget.component.ts");
/* harmony import */ var _main_widget_management_new_widget_content_content_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./main/widget-management/new-widget/content/content.component */ "./src/app/main/widget-management/new-widget/content/content.component.ts");
/* harmony import */ var _main_widget_management_new_widget_customize_customize_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./main/widget-management/new-widget/customize/customize.component */ "./src/app/main/widget-management/new-widget/customize/customize.component.ts");
/* harmony import */ var _main_widget_management_new_widget_emded_emded_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./main/widget-management/new-widget/emded/emded.component */ "./src/app/main/widget-management/new-widget/emded/emded.component.ts");
/* harmony import */ var _main_widget_management_new_widget_requests_requests_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./main/widget-management/new-widget/requests/requests.component */ "./src/app/main/widget-management/new-widget/requests/requests.component.ts");
/* harmony import */ var _main_widget_management_new_widget_statistics_statistics_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./main/widget-management/new-widget/statistics/statistics.component */ "./src/app/main/widget-management/new-widget/statistics/statistics.component.ts");
/* harmony import */ var _main_widget_chat_widget_chat_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./main/widget-chat/widget-chat.component */ "./src/app/main/widget-chat/widget-chat.component.ts");














var routes = [
    {
        path: '',
        component: _main_main_component__WEBPACK_IMPORTED_MODULE_3__["MainComponent"],
        children: [
            { path: 'content-manage', component: _main_content_management_content_management_component__WEBPACK_IMPORTED_MODULE_4__["ContentManagementComponent"] },
            { path: 'widget-manage', component: _main_widget_management_widget_management_component__WEBPACK_IMPORTED_MODULE_5__["WidgetManagementComponent"] },
            { path: 'article/:id', component: _main_content_management_article_article_component__WEBPACK_IMPORTED_MODULE_6__["ArticleComponent"] },
            { path: 'article', component: _main_content_management_article_article_component__WEBPACK_IMPORTED_MODULE_6__["ArticleComponent"] },
            {
                path: 'new-widget',
                component: _main_widget_management_new_widget_new_widget_component__WEBPACK_IMPORTED_MODULE_7__["NewWidgetComponent"],
                children: [
                    { path: 'content/:id', component: _main_widget_management_new_widget_content_content_component__WEBPACK_IMPORTED_MODULE_8__["ContentComponent"] },
                    { path: 'customize/:id', component: _main_widget_management_new_widget_customize_customize_component__WEBPACK_IMPORTED_MODULE_9__["CustomizeComponent"] },
                    { path: 'emded/:id', component: _main_widget_management_new_widget_emded_emded_component__WEBPACK_IMPORTED_MODULE_10__["EmdedComponent"] },
                    { path: 'requests/:id', component: _main_widget_management_new_widget_requests_requests_component__WEBPACK_IMPORTED_MODULE_11__["RequestsComponent"] },
                    { path: 'statistics/:id', component: _main_widget_management_new_widget_statistics_statistics_component__WEBPACK_IMPORTED_MODULE_12__["StatisticsComponent"] },
                ]
            },
            {
                path: 'new-widget',
                component: _main_widget_management_new_widget_new_widget_component__WEBPACK_IMPORTED_MODULE_7__["NewWidgetComponent"],
                children: [
                    { path: 'content', component: _main_widget_management_new_widget_content_content_component__WEBPACK_IMPORTED_MODULE_8__["ContentComponent"] },
                    { path: 'customize', component: _main_widget_management_new_widget_customize_customize_component__WEBPACK_IMPORTED_MODULE_9__["CustomizeComponent"] },
                    { path: 'emded', component: _main_widget_management_new_widget_emded_emded_component__WEBPACK_IMPORTED_MODULE_10__["EmdedComponent"] },
                    { path: 'requests', component: _main_widget_management_new_widget_requests_requests_component__WEBPACK_IMPORTED_MODULE_11__["RequestsComponent"] },
                    { path: 'statistics', component: _main_widget_management_new_widget_statistics_statistics_component__WEBPACK_IMPORTED_MODULE_12__["StatisticsComponent"] },
                ]
            },
        ]
    },
    { path: 'widget-chat', component: _main_widget_chat_widget_chat_component__WEBPACK_IMPORTED_MODULE_13__["WidgetChatComponent"] },
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
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/button */ "./node_modules/primeng/button.js");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(primeng_button__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/dropdown */ "./node_modules/primeng/dropdown.js");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(primeng_dropdown__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var primeng_autocomplete__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/autocomplete */ "./node_modules/primeng/autocomplete.js");
/* harmony import */ var primeng_autocomplete__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(primeng_autocomplete__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/inputtext */ "./node_modules/primeng/inputtext.js");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(primeng_inputtext__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var primeng_tree__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/tree */ "./node_modules/primeng/tree.js");
/* harmony import */ var primeng_tree__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(primeng_tree__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _main_content_management_article_article_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./main/content-management/article/article.component */ "./src/app/main/content-management/article/article.component.ts");
/* harmony import */ var _shared_directives_click_outside_directive__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./shared/directives/click-outside.directive */ "./src/app/shared/directives/click-outside.directive.ts");
/* harmony import */ var _main_content_management_link_article_link_article_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./main/content-management/link-article/link-article.component */ "./src/app/main/content-management/link-article/link-article.component.ts");
/* harmony import */ var _shared_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./shared/dialog/dialog.component */ "./src/app/shared/dialog/dialog.component.ts");
/* harmony import */ var _main_widget_management_new_widget_new_widget_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./main/widget-management/new-widget/new-widget.component */ "./src/app/main/widget-management/new-widget/new-widget.component.ts");
/* harmony import */ var ngx_clipboard__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ngx-clipboard */ "./node_modules/ngx-clipboard/fesm5/ngx-clipboard.js");
/* harmony import */ var _main_widget_management_new_widget_content_content_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./main/widget-management/new-widget/content/content.component */ "./src/app/main/widget-management/new-widget/content/content.component.ts");
/* harmony import */ var _main_widget_management_new_widget_customize_customize_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./main/widget-management/new-widget/customize/customize.component */ "./src/app/main/widget-management/new-widget/customize/customize.component.ts");
/* harmony import */ var _main_widget_management_new_widget_emded_emded_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./main/widget-management/new-widget/emded/emded.component */ "./src/app/main/widget-management/new-widget/emded/emded.component.ts");
/* harmony import */ var _main_widget_management_new_widget_statistics_statistics_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./main/widget-management/new-widget/statistics/statistics.component */ "./src/app/main/widget-management/new-widget/statistics/statistics.component.ts");
/* harmony import */ var _main_widget_management_new_widget_requests_requests_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./main/widget-management/new-widget/requests/requests.component */ "./src/app/main/widget-management/new-widget/requests/requests.component.ts");
/* harmony import */ var _shared_dialog_folder_name_dialog_folder_name_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./shared/dialog-folder-name/dialog-folder-name.component */ "./src/app/shared/dialog-folder-name/dialog-folder-name.component.ts");
/* harmony import */ var _main_widget_chat_widget_chat_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./main/widget-chat/widget-chat.component */ "./src/app/main/widget-chat/widget-chat.component.ts");
/* harmony import */ var _main_widget_qa_widget_qa_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./main/widget-qa/widget-qa.component */ "./src/app/main/widget-qa/widget-qa.component.ts");










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
                _main_content_management_article_article_component__WEBPACK_IMPORTED_MODULE_17__["ArticleComponent"],
                _shared_directives_click_outside_directive__WEBPACK_IMPORTED_MODULE_18__["ClickOutsideDirective"],
                _main_content_management_link_article_link_article_component__WEBPACK_IMPORTED_MODULE_19__["LinkArticleComponent"],
                _shared_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_20__["DialogComponent"],
                _main_widget_management_new_widget_new_widget_component__WEBPACK_IMPORTED_MODULE_21__["NewWidgetComponent"],
                _main_widget_management_new_widget_content_content_component__WEBPACK_IMPORTED_MODULE_23__["ContentComponent"],
                _main_widget_management_new_widget_customize_customize_component__WEBPACK_IMPORTED_MODULE_24__["CustomizeComponent"],
                _main_widget_management_new_widget_emded_emded_component__WEBPACK_IMPORTED_MODULE_25__["EmdedComponent"],
                _main_widget_management_new_widget_statistics_statistics_component__WEBPACK_IMPORTED_MODULE_26__["StatisticsComponent"],
                _main_widget_management_new_widget_requests_requests_component__WEBPACK_IMPORTED_MODULE_27__["RequestsComponent"],
                _shared_dialog_folder_name_dialog_folder_name_component__WEBPACK_IMPORTED_MODULE_28__["DialogFolderNameComponent"],
                _main_widget_chat_widget_chat_component__WEBPACK_IMPORTED_MODULE_29__["WidgetChatComponent"],
                _main_widget_qa_widget_qa_component__WEBPACK_IMPORTED_MODULE_30__["WidgetQaComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"],
                ngx_clipboard__WEBPACK_IMPORTED_MODULE_22__["ClipboardModule"],
                // prime Modules
                primeng_button__WEBPACK_IMPORTED_MODULE_11__["ButtonModule"],
                primeng_dropdown__WEBPACK_IMPORTED_MODULE_12__["DropdownModule"],
                primeng_autocomplete__WEBPACK_IMPORTED_MODULE_14__["AutoCompleteModule"],
                primeng_inputtext__WEBPACK_IMPORTED_MODULE_15__["InputTextModule"],
                primeng_tree__WEBPACK_IMPORTED_MODULE_16__["TreeModule"]
            ],
            providers: [primeng_api__WEBPACK_IMPORTED_MODULE_10__["TreeDragDropService"]],
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

module.exports = "<div class=\"head\">\n  <div class=\"df ai-c jc-b full-width\">\n    <div (click)=\"dialog = true\" class=\"c-p df ai-c\">\n      <div>\n        <img class=\"m-r-5\" width=\"28px\" src=\"assets/img/arrow-back.png\" alt=\"\">\n      </div>\n      <div class=\"fs-20\">\n        Edit Article\n      </div>\n    </div>\n    <div class=\"df\">\n      <div class=\"df ai-c m-r-15 c-p\">\n        <img class=\"m-r-5\" width=\"22px\" src=\"assets/img/trash.png\" alt=\"\">\n        <div class=\"color-primary fs-14\">Delete Article</div>\n      </div>\n      <div (click)=\"showPreview = true\" class=\"df ai-c m-r-30 c-p\">\n        <img class=\"m-r-5\" width=\"28px\" src=\"assets/img/view.png\" alt=\"\">\n        <div class=\"color-primary fs-14\">Preview</div>\n      </div>\n      <div class=\"pos-r\">\n        <input type=\"text\" placeholder=\"Search in article\" pInputText />\n        <div class=\"icon-input\">\n          <img width=\"20px\" src=\"assets/img/search.png\" alt=\"\">\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"fs-13 m-t-10 p-l-35\">\n    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui, deleniti!\n  </div>\n</div>\n\n<div class=\"content-wrap\">\n  <div class=\"half-width\">\n    <div class=\"side-head\">\n      <div>\n        Article\n      </div>\n      <div class=\"df ai-c color-primary\">\n        <div class=\"c-p m-r-15\">\n          <img src=\"assets/img/text-icon.png\"  (click)=\"copyClip()\" alt=\"\">\n        </div>\n        <div class=\"c-p m-r-25 pos-r\">\n          <img src=\"assets/img/text-icon.png\" alt=\"\">\n          <div class=\"close-icon-text\">\n            <div class=\"line1\"></div>\n            <div class=\"line2\"></div>\n          </div>\n        </div>\n        <div (clickOutside)=\"showAddSection = false\" class=\"df ai-c c-p pos-r\">\n          <img (click)=\"showAddSection = !showAddSection\" alt=\"\" class=\"m-r-10 c-p\" src=\"assets/img/addArtictes.png\">\n          <div class=\"m-r-30\"> Add Section </div>\n          <div *ngIf=\"showAddSection\" class=\"add-section-drb\">\n            <div (click)=\"addSection('text')\" class=\"add-section-drb--item\">\n              <div class=\"icon-wrap\">\n                <img src=\"assets/img/text-drb.png\" alt=\"\">\n              </div>\n              <div>\n                Text\n              </div>\n            </div>\n            <div (click)=\"addSection('picture')\" class=\"add-section-drb--item\">\n              <div class=\"icon-wrap\">\n                <img src=\"assets/img/img-drb.png\" alt=\"\">\n              </div>\n              <div>\n                Picture\n              </div>\n            </div>\n            <div (click)=\"addSection('video')\" class=\"add-section-drb--item\">\n              <div class=\"icon-wrap\">\n                <img src=\"assets/img/video-drb.png\" alt=\"\">\n              </div>\n              <div>\n                Video\n              </div>\n            </div>\n            <div (click)=\"addSection('link')\" class=\"add-section-drb--item\">\n              <div class=\"icon-wrap\">\n                <img src=\"assets/img/link-drb.png\" alt=\"\">\n              </div>\n              <div>\n                Link\n              </div>\n            </div>\n            <div (click)=\"addSection('button')\" class=\"add-section-drb--item\">\n              <div class=\"icon-wrap\">\n                <img src=\"assets/img/button-drb.png\" alt=\"\">\n              </div>\n              <div>\n                Button\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"tags-wrap\">\n      <div class=\"m-r-20 p-t-12\">\n        Tags:\n      </div>\n      <div *ngFor=\"let tag of dataToEdit.tegs; let i = index\" class=\"chips\">\n        {{tag}}\n        <img (click)=\"detaleItem(dataToEdit.tegs, i)\" class=\"close c-p\" src=\"assets/img/close.png\" alt=\"\">\n      </div>\n      <input [(ngModel)]=\"addTagField\" class=\"add-tag\" type=\"text\" (keyup.enter)=\"addTags(dataToEdit.tegs, addTagField)\"\n        placeholder=\"Add tag\" pInputText />\n    </div>\n    <div class=\"body-side body-side-scroll\" id=\"editBox\" style=\"min-height: calc(100% - 55px); padding: 20px;\">\n      <div class=\"df ai-c m-b-30\">\n        <div class=\"m-r-15\">\n          Title:\n        </div>\n        <input class=\"full-width\" [(ngModel)]=\"dataToEdit.title\" type=\"text\" pInputText value=\"3D touch\" />\n      </div>\n      <div *ngFor=\"let item of sectionData; let i = index\">\n        <div class=\"article-section\">\n          <div class=\"actions-row\">\n            <button (click)=\"moveTop(item, i)\" class=\"top\">\n              <img src=\"assets/img/arrow.png\" alt=\"\">\n            </button>\n            <button (click)=\"moveBot(item, i)\" class=\"bot\">\n              <img src=\"assets/img/arrow.png\" alt=\"\">\n            </button>\n            <button *ngIf=\"showEdit !== i\" (click)=\"showEdit = i\">\n              Edit Section\n            </button>\n            <button *ngIf=\"showEdit === i\" (click)=\"showEdit = null\">\n              Save Section\n            </button>\n            <button (click)=\"detaleItem(sectionData, i)\">\n              Delete Section\n            </button>\n          </div>\n          <div class=\"article-section-body\">\n            <div *ngIf=\"item.text\">\n              <div id=\"text{{i}}\" class=\"text\" (click)=\"selectionId = i\">\n                {{item.text}}\n              </div>\n              <textarea *ngIf=\"showEdit === i\" [(ngModel)]=\"item.text\"></textarea>\n            </div>\n            <div class=\"text-center\" *ngIf=\"item.picture\">\n              <img style=\"max-width: 70%; max-height: 400px\" [src]=\"item.picture\" alt=\"\">\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"half-width\">\n    <div class=\"side-head\">\n      <div>\n        Questions\n      </div>\n      <div class=\"df ai-c\">\n        <img (click)=\"editQuestion()\" width=\"20px\" class=\"m-r-20 c-p\" src=\"assets/img/editArticle.png\" alt=\"\">\n        <img (click)=\"showArticle = true\" width=\"20px\" class=\"m-r-20 c-p\" src=\"assets/img/fasten.png\" alt=\"\">\n        <img (click)=\"deleteQuestion()\" width=\"18px\" class=\"c-p\" src=\"assets/img/trash.png\" alt=\"\">\n      </div>\n    </div>\n    <div class=\"body-side\">\n      <div *ngFor=\"let item of questions; let i = index\" class=\"articles-row jc-b\">\n        <div class=\"df ai-c\">\n          <input class=\"m-r-20\" [(ngModel)]=\"item.checked\" type=\"checkbox\">\n          <div class=\"icon-wrap\">\n            <img src=\"assets/img/text-icon.png\" alt=\"\">\n          </div>\n          <div (dblclick)=\"item.edit = true\" *ngIf=\"!item.edit\"> {{item.question}} </div>\n          <div class=\"df ai-c wrap\" *ngIf=\"item.edit\">\n            <input type=\"text\" [(ngModel)]=\"item.question\" pInputText />\n            <button *ngIf=\"item.edit\" (click)=\"item.edit = false; item.checked = false\" class=\"button-default\">\n              Save\n            </button>\n          </div>\n        </div>\n        <div (click)=\"detaleItem(questions, i)\" class=\"c-p icons\">\n          <img alt=\"\" src=\"assets/img/trash.png\" width=\"18px\">\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div *ngIf=\"showPreview\" (click)=\"showPreview = false\" class=\"bg-modal\"></div>\n<div *ngIf=\"showPreview\" class=\"modal\">\n  <div class=\"modal-body-wrap\">\n    <div class=\"modal-body\" style=\"width: 80vw; max-width: 600px; padding: 40px;\">\n      <div class=\"fs-20 color-dark m-b-40 df jc-b ai-c\">\n        <div>\n          {{dataToEdit.title}}\n        </div>\n        <div class=\"c-p\" (click)=\"showPreview = false\">\n          <img width=\"17px\" src=\"assets/img/times-black.png\" alt=\"\">\n        </div>\n      </div>\n      <div *ngFor=\"let item of sectionData\">\n        <p *ngIf=\"item.text\" class=\"m-b-40\">\n          {{item.text}}\n        </p>\n        <div *ngIf=\"item.picture\" class=\"text-center\">\n          <img style=\"max-height: 400px; max-width: 80%;\" [src]=\"item.picture\" alt=\"\">\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<app-link-article [show]=\"showArticle\" (hide)=\"showArticle = false\"></app-link-article>\n<app-dialog *ngIf=\"dialog\" [question]=\"'Are you sure you want to discard all changes?'\" (result)=\"answer($event)\"></app-dialog>"

/***/ }),

/***/ "./src/app/main/content-management/article/article.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/main/content-management/article/article.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content-wrap {\n  display: flex;\n  justify-content: space-between;\n  min-height: calc(100vh - 234px); }\n\n.head {\n  height: 76px;\n  background: inherit;\n  background-color: #f2f2f2;\n  display: flex;\n  align-items: center;\n  padding-left: 90px;\n  padding-right: 50px;\n  margin-bottom: 40px; }\n\n.lable-drb {\n  position: absolute;\n  top: 5px;\n  left: 5px;\n  font-size: 11px;\n  color: #1e1e1e; }\n\n.input-search {\n  width: 100%;\n  max-width: 533px;\n  margin-left: 10px; }\n\n.input-search input {\n    height: 48px;\n    width: 100%; }\n\n.side-head {\n  height: 37px;\n  background-color: #e4e4e4;\n  box-sizing: border-box;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 15px; }\n\n.body-side {\n  background-color: white;\n  box-sizing: border-box;\n  border-width: 1px;\n  border-style: solid;\n  border-color: #d7d7d7;\n  min-height: 100%; }\n\n.body-side-scroll {\n  overflow-y: auto;\n  max-height: 400px; }\n\n.arrow-right {\n  -webkit-transform: rotate(-90deg);\n          transform: rotate(-90deg); }\n\n.folder-side {\n  margin-right: 20px;\n  min-width: -webkit-fit-content;\n  min-width: -moz-fit-content;\n  min-width: fit-content;\n  width: 225px; }\n\n.articles-side {\n  width: 100%;\n  margin-right: 20px; }\n\n.article-side {\n  width: 50%;\n  max-width: 550px;\n  min-width: 420px; }\n\n.rotate-180 {\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg); }\n\n.rotate-270 {\n  -webkit-transform: rotate(270deg);\n          transform: rotate(270deg); }\n\n.rotate--90 {\n  -webkit-transform: rotate(-90deg);\n          transform: rotate(-90deg); }\n\n.articles-row {\n  border-bottom: 1px solid #d7d7d7;\n  display: flex;\n  align-items: center;\n  padding: 10px 20px;\n  transition: all 0.3s;\n  min-height: 46px; }\n\n.articles-row .icons {\n    display: none;\n    align-items: center; }\n\n.articles-row:hover {\n    background: #dff5f9; }\n\n.articles-row:hover .icons {\n      display: flex; }\n\n.tags-wrap {\n  display: flex;\n  flex-wrap: wrap;\n  padding: 5px 15px;\n  background-color: #f2f2f2;\n  box-sizing: border-box;\n  border-width: 1px;\n  border-style: solid;\n  border-color: #d7d7d7; }\n\n.add-tag {\n  height: 27px;\n  border-radius: 10px;\n  margin-bottom: 10px;\n  margin-top: 6px;\n  width: 120px; }\n\n.title-row {\n  height: 45px;\n  border-width: 1px;\n  border-style: solid;\n  border-color: #d7d7d7;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background: #f2f2f2;\n  padding: 10px 20px; }\n\n.search-row {\n  padding: 20px 20px 10px 20px;\n  display: flex;\n  font-size: 12px;\n  transition: all 0.3s;\n  border-bottom: 1px solid #d7d7d7;\n  position: relative; }\n\n.search-row .description {\n    overflow: hidden;\n    color: #999999; }\n\n.search-row .delete-icon {\n    display: none;\n    align-items: center;\n    position: absolute;\n    right: 20px; }\n\n.search-row:hover {\n    background-color: #dff5f9; }\n\n.search-row:hover .delete-icon {\n      display: flex; }\n\n.stick-row {\n  font-size: 11px;\n  color: #018191;\n  display: flex;\n  margin-bottom: 5px; }\n\n.question-row {\n  border-bottom: 1px solid #d7d7d7; }\n\n.question-row-head {\n    display: flex;\n    align-items: center;\n    min-height: 40px;\n    padding: 5px 10px;\n    cursor: pointer; }\n\n.question-row-body {\n    padding: 20px 40px 20px 40px;\n    background: #f2f2f2;\n    position: relative; }\n\n.question-row-body .question-item {\n      height: 55px;\n      background: inherit;\n      background-color: white;\n      display: flex;\n      align-items: center;\n      justify-content: space-between;\n      padding: 5px 20px;\n      border: 1px solid #d7d7d7;\n      border-bottom: 0; }\n\n.question-row-body .question-item .trash-icon {\n        display: none;\n        align-items: center;\n        cursor: pointer; }\n\n.question-row-body .question-item:hover {\n        background-color: #dff5f9; }\n\n.question-row-body .question-item:hover .trash-icon {\n          display: flex; }\n\n.question-row-body .question-item:last-child {\n        border-bottom: 1px solid #d7d7d7; }\n\n.icon-input {\n  position: absolute;\n  right: 9px;\n  top: calc(50% - 10px); }\n\n.nitif-circle {\n  background: #ff6600;\n  width: 16px;\n  height: 16px;\n  border-radius: 100px;\n  overflow: hidden;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 1px solid #feb98c;\n  font-size: 10px;\n  color: white; }\n\n.serch-result-dropdawn {\n  position: absolute;\n  top: 100%;\n  background: white;\n  width: 100%;\n  border: 1px solid #a6a6a6;\n  border-top: 0;\n  z-index: 111; }\n\n.serch-result-dropdawn--item {\n    display: flex;\n    align-items: center;\n    padding: 9px 10px;\n    cursor: pointer; }\n\n.serch-result-dropdawn--icon-wrap {\n    width: 25px;\n    min-width: 25px; }\n\n.serch-result-dropdawn--foot {\n    border-top: 1px solid #a6a6a6;\n    padding: 10px;\n    text-align: center;\n    cursor: pointer; }\n\n.head {\n  padding-left: 30px;\n  display: flex;\n  flex-flow: column;\n  align-items: flex-start;\n  justify-content: center;\n  min-height: 81px; }\n\n.half-width {\n  width: calc(50% - 10px);\n  margin-right: 20px; }\n\n.half-width:last-child {\n    margin-right: 0px; }\n\n.close-icon-text {\n  position: absolute;\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg);\n  bottom: 11px;\n  right: 8px; }\n\n.close-icon-text .line1 {\n    position: absolute;\n    content: \"\";\n    width: 11px;\n    height: 2px;\n    background: #f61b1b; }\n\n.close-icon-text .line2 {\n    position: absolute;\n    content: \"\";\n    width: 11px;\n    height: 2px;\n    background: #f61b1b;\n    -webkit-transform: rotate(90deg);\n            transform: rotate(90deg); }\n\n.icon-wrap {\n  width: 30px;\n  min-width: 30px; }\n\n.article-section .actions-row {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  margin-bottom: 10px; }\n\n.article-section .actions-row button {\n    background: none;\n    cursor: pointer;\n    outline: none;\n    margin-left: 10px;\n    min-width: 135px;\n    border: 1px solid #a6a6a6;\n    height: 30px;\n    display: flex;\n    align-items: center;\n    justify-content: center; }\n\n.article-section .actions-row button.top {\n      min-width: 100px; }\n\n.article-section .actions-row button.bot {\n      min-width: 100px; }\n\n.article-section .actions-row button.bot img {\n        -webkit-transform: rotate(180deg);\n                transform: rotate(180deg); }\n\n.article-section-body {\n  padding: 20px;\n  border: 1px solid #a6a6a6;\n  margin-bottom: 30px;\n  position: relative; }\n\n.article-section-body textarea {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    white-space: pre-line;\n    box-sizing: border-box;\n    word-break: break-all;\n    padding: 20px;\n    font-family: \"Arial\";\n    font-weight: 400;\n    font-style: normal;\n    font-size: 13px;\n    color: #333333;\n    line-height: normal;\n    resize: none;\n    outline: none;\n    border: none;\n    box-shadow: 6px 5px 8px -6px #00000087; }\n\n.article-section-body .text {\n    box-sizing: border-box;\n    word-break: break-all;\n    -webkit-appearance: textarea;\n    background-color: white;\n    -webkit-rtl-ordering: logical;\n    flex-direction: column;\n    resize: auto;\n    cursor: text;\n    white-space: pre-wrap;\n    overflow-wrap: break-word;\n    text-rendering: auto;\n    color: initial;\n    letter-spacing: normal;\n    word-spacing: normal;\n    text-transform: none;\n    text-indent: 0px;\n    text-shadow: none;\n    display: inline-block;\n    text-align: start;\n    margin: 0em;\n    font: 400 13.3333px Arial;\n    -webkit-writing-mode: horizontal-tb !important; }\n\n.add-section-drb {\n  position: absolute;\n  top: calc(100% + 10px);\n  background-color: white;\n  border-radius: 0px;\n  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.35);\n  z-index: 11;\n  width: 154px; }\n\n.add-section-drb--item {\n    padding: 8px 15px;\n    display: flex;\n    align-items: center;\n    cursor: pointer;\n    transition: all 0.3s;\n    font-size: 13px; }\n\n.add-section-drb--item:hover {\n      background: rgba(51, 51, 51, 0.1); }\n\n.add-section-drb--item .icon-wrap {\n      width: 40px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NodW1pay9Eb2N1bWVudHMva21zLXNwb3Qvc3JjL2FwcC9tYWluL2NvbnRlbnQtbWFuYWdlbWVudC9jb250ZW50LW1hbmFnZW1lbnQuY29tcG9uZW50LnNjc3MiLCIvaG9tZS9zaHVtaWsvRG9jdW1lbnRzL2ttcy1zcG90L3NyYy9hcHAvbWFpbi9jb250ZW50LW1hbmFnZW1lbnQvYXJ0aWNsZS9hcnRpY2xlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QiwrQkFBK0IsRUFBQTs7QUFFakM7RUFDRSxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLHlCQUF3QztFQUN4QyxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsbUJBQW1CLEVBQUE7O0FBRXJCO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0VBQ1QsZUFBZTtFQUNmLGNBQWMsRUFBQTs7QUFFaEI7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGlCQUFpQixFQUFBOztBQUhuQjtJQUtJLFlBQVk7SUFDWixXQUFXLEVBQUE7O0FBR2Y7RUFDRSxZQUFZO0VBQ1oseUJBQXdDO0VBQ3hDLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDhCQUE4QjtFQUM5QixlQUFlLEVBQUE7O0FBRWpCO0VBQ0UsdUJBQXdDO0VBQ3hDLHNCQUFzQjtFQUN0QixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLHFCQUFvQztFQUNwQyxnQkFBZ0IsRUFBQTs7QUFFbEI7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCLEVBQUE7O0FBRW5CO0VBQ0UsaUNBQXlCO1VBQXpCLHlCQUF5QixFQUFBOztBQUUzQjtFQUNFLGtCQUFrQjtFQUNsQiw4QkFBc0I7RUFBdEIsMkJBQXNCO0VBQXRCLHNCQUFzQjtFQUN0QixZQUFZLEVBQUE7O0FBRWQ7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCLEVBQUE7O0FBRXBCO0VBQ0UsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixnQkFBZ0IsRUFBQTs7QUFFbEI7RUFDRSxpQ0FBeUI7VUFBekIseUJBQXlCLEVBQUE7O0FBRTNCO0VBQ0UsaUNBQXlCO1VBQXpCLHlCQUF5QixFQUFBOztBQUUzQjtFQUNFLGlDQUF5QjtVQUF6Qix5QkFBeUIsRUFBQTs7QUFFM0I7RUFDRSxnQ0FBK0M7RUFDL0MsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsb0JBQW9CO0VBQ3BCLGdCQUFnQixFQUFBOztBQU5sQjtJQVFJLGFBQWE7SUFDYixtQkFBbUIsRUFBQTs7QUFUdkI7SUFZSSxtQkFBa0MsRUFBQTs7QUFadEM7TUFjTSxhQUFhLEVBQUE7O0FBSW5CO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZixpQkFBaUI7RUFDakIseUJBQXdDO0VBQ3hDLHNCQUFzQjtFQUN0QixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLHFCQUFvQyxFQUFBOztBQUV0QztFQUNFLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixZQUFZLEVBQUE7O0FBRWQ7RUFDRSxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixxQkFBZ0M7RUFDaEMsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLGtCQUFrQixFQUFBOztBQUVwQjtFQUNFLDRCQUE0QjtFQUM1QixhQUFhO0VBQ2IsZUFBZTtFQUNmLG9CQUFvQjtFQUNwQixnQ0FBMkM7RUFDM0Msa0JBQWtCLEVBQUE7O0FBTnBCO0lBUUksZ0JBQWdCO0lBQ2hCLGNBQWMsRUFBQTs7QUFUbEI7SUFZSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixXQUFXLEVBQUE7O0FBZmY7SUFrQkkseUJBQXdDLEVBQUE7O0FBbEI1QztNQW9CTSxhQUFhLEVBQUE7O0FBSW5CO0VBQ0UsZUFBZTtFQUNmLGNBQWM7RUFDZCxhQUFhO0VBQ2Isa0JBQWtCLEVBQUE7O0FBRXBCO0VBQ0UsZ0NBQTJDLEVBQUE7O0FBQzNDO0lBQ0UsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGVBQWUsRUFBQTs7QUFFakI7SUFDRSw0QkFBNEI7SUFDNUIsbUJBQWtDO0lBQ2xDLGtCQUFrQixFQUFBOztBQUhuQjtNQUtHLFlBQVk7TUFDWixtQkFBbUI7TUFDbkIsdUJBQW9DO01BQ3BDLGFBQWE7TUFDYixtQkFBbUI7TUFDbkIsOEJBQThCO01BQzlCLGlCQUFpQjtNQUNqQix5QkFBb0M7TUFDcEMsZ0JBQWdCLEVBQUE7O0FBYm5CO1FBZUssYUFBYTtRQUNiLG1CQUFtQjtRQUNuQixlQUFlLEVBQUE7O0FBakJwQjtRQW9CSyx5QkFBd0MsRUFBQTs7QUFwQjdDO1VBc0JPLGFBQWEsRUFBQTs7QUF0QnBCO1FBMEJLLGdDQUEyQyxFQUFBOztBQUtuRDtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YscUJBQXFCLEVBQUE7O0FBRXZCO0VBQ0UsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxZQUFZO0VBQ1osb0JBQW9CO0VBQ3BCLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2Qix5QkFBeUI7RUFDekIsZUFBZTtFQUNmLFlBQVksRUFBQTs7QUFFZDtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsYUFBYTtFQUNiLFlBQVksRUFBQTs7QUFDWjtJQUNFLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLGVBQWUsRUFBQTs7QUFFakI7SUFDRSxXQUFXO0lBQ1gsZUFBZSxFQUFBOztBQUVqQjtJQUNFLDZCQUE2QjtJQUM3QixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLGVBQWUsRUFBQTs7QUN4T25CO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsdUJBQXVCO0VBQ3ZCLHVCQUF1QjtFQUN2QixnQkFBZ0IsRUFBQTs7QUFFbEI7RUFDRSx1QkFBdUI7RUFDdkIsa0JBQWtCLEVBQUE7O0FBRnBCO0lBSUksaUJBQWlCLEVBQUE7O0FBR3JCO0VBQ0Usa0JBQWtCO0VBQ2xCLGdDQUF3QjtVQUF4Qix3QkFBd0I7RUFDeEIsWUFBWTtFQUNaLFVBQVUsRUFBQTs7QUFKWjtJQU1JLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsV0FBVztJQUNYLFdBQVc7SUFDWCxtQkFBbUIsRUFBQTs7QUFWdkI7SUFhSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFdBQVc7SUFDWCxXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLGdDQUF3QjtZQUF4Qix3QkFBd0IsRUFBQTs7QUFHNUI7RUFDRSxXQUFXO0VBQ1gsZUFBZSxFQUFBOztBQUVqQjtFQUVJLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLG1CQUFtQixFQUFBOztBQUx2QjtJQU9NLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QixFQUFBOztBQWhCN0I7TUFrQlEsZ0JBQWdCLEVBQUE7O0FBbEJ4QjtNQXFCUSxnQkFBZ0IsRUFBQTs7QUFyQnhCO1FBdUJVLGlDQUF5QjtnQkFBekIseUJBQXlCLEVBQUE7O0FBS2pDO0VBQ0UsYUFBYTtFQUNiLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsa0JBQWtCLEVBQUE7O0FBSm5CO0lBTUcsa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixPQUFPO0lBQ1AsV0FBVztJQUNYLFlBQVk7SUFDWixxQkFBcUI7SUFDckIsc0JBQXNCO0lBQ3RCLHFCQUFxQjtJQUNyQixhQUFhO0lBQ2Isb0JBQW9CO0lBQ3BCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGFBQWE7SUFDYixZQUFZO0lBQ1osc0NBQXNDLEVBQUE7O0FBeEJ6QztJQTJCRyxzQkFBc0I7SUFDdEIscUJBQXFCO0lBQ3JCLDRCQUE0QjtJQUM1Qix1QkFBdUI7SUFDdkIsNkJBQTZCO0lBQzdCLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osWUFBWTtJQUNaLHFCQUFxQjtJQUNyQix5QkFBeUI7SUFDekIsb0JBQW9CO0lBQ3BCLGNBQWM7SUFDZCxzQkFBc0I7SUFDdEIsb0JBQW9CO0lBQ3BCLG9CQUFvQjtJQUNwQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLHFCQUFxQjtJQUNyQixpQkFBaUI7SUFDakIsV0FBVztJQUNYLHlCQUF5QjtJQUN6Qiw4Q0FBOEMsRUFBQTs7QUFJcEQ7RUFDRSxrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLHVCQUF3QztFQUN4QyxrQkFBa0I7RUFDbEIsMkNBQTJDO0VBQzNDLFdBQVc7RUFDWCxZQUFZLEVBQUE7O0FBQ1o7SUFDRSxpQkFBaUI7SUFDakIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2Ysb0JBQW9CO0lBQ3BCLGVBQWUsRUFBQTs7QUFOaEI7TUFRRyxpQ0FBaUMsRUFBQTs7QUFScEM7TUFXRyxXQUFXLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tYWluL2NvbnRlbnQtbWFuYWdlbWVudC9hcnRpY2xlL2FydGljbGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudC13cmFwIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gMjM0cHgpO1xufVxuLmhlYWQge1xuICBoZWlnaHQ6IDc2cHg7XG4gIGJhY2tncm91bmQ6IGluaGVyaXQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQyLCAyNDIsIDI0MiwgMSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmctbGVmdDogOTBweDtcbiAgcGFkZGluZy1yaWdodDogNTBweDtcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcbn1cbi5sYWJsZS1kcmIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNXB4O1xuICBsZWZ0OiA1cHg7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgY29sb3I6ICMxZTFlMWU7XG59XG4uaW5wdXQtc2VhcmNoIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogNTMzcHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBpbnB1dCB7XG4gICAgaGVpZ2h0OiA0OHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG4uc2lkZS1oZWFkIHtcbiAgaGVpZ2h0OiAzN3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIyOCwgMjI4LCAyMjgsIDEpO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmc6IDAgMTVweDtcbn1cbi5ib2R5LXNpZGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3JkZXItd2lkdGg6IDFweDtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDIxNSwgMjE1LCAyMTUsIDEpO1xuICBtaW4taGVpZ2h0OiAxMDAlO1xufVxuLmJvZHktc2lkZS1zY3JvbGwge1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBtYXgtaGVpZ2h0OiA0MDBweDtcbn1cbi5hcnJvdy1yaWdodCB7XG4gIHRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7XG59XG4uZm9sZGVyLXNpZGUge1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gIG1pbi13aWR0aDogZml0LWNvbnRlbnQ7XG4gIHdpZHRoOiAyMjVweDtcbn1cbi5hcnRpY2xlcy1zaWRlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbn1cbi5hcnRpY2xlLXNpZGUge1xuICB3aWR0aDogNTAlO1xuICBtYXgtd2lkdGg6IDU1MHB4O1xuICBtaW4td2lkdGg6IDQyMHB4O1xufVxuLnJvdGF0ZS0xODAge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xufVxuLnJvdGF0ZS0yNzB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDI3MGRlZyk7XG59XG4ucm90YXRlLS05MCB7XG4gIHRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7XG59XG4uYXJ0aWNsZXMtcm93IHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMjE1LCAyMTUsIDIxNSwgMSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gIG1pbi1oZWlnaHQ6IDQ2cHg7XG4gIC5pY29ucyB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjIzLCAyNDUsIDI0OSwgMSk7XG4gICAgLmljb25zIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgfVxuICB9XG59XG4udGFncy13cmFwIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBwYWRkaW5nOiA1cHggMTVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDIsIDI0MiwgMjQyLCAxKTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci1jb2xvcjogcmdiYSgyMTUsIDIxNSwgMjE1LCAxKTtcbn1cbi5hZGQtdGFnIHtcbiAgaGVpZ2h0OiAyN3B4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBtYXJnaW4tdG9wOiA2cHg7XG4gIHdpZHRoOiAxMjBweDtcbn1cbi50aXRsZS1yb3cge1xuICBoZWlnaHQ6IDQ1cHg7XG4gIGJvcmRlci13aWR0aDogMXB4O1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItY29sb3I6IHJnYigyMTUsIDIxNSwgMjE1KTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiAjZjJmMmYyO1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG59XG4uc2VhcmNoLXJvdyB7XG4gIHBhZGRpbmc6IDIwcHggMjBweCAxMHB4IDIwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2IoMjE1LCAyMTUsIDIxNSk7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgLmRlc2NyaXB0aW9uIHtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGNvbG9yOiAjOTk5OTk5O1xuICB9XG4gIC5kZWxldGUtaWNvbiB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMjBweDtcbiAgfVxuICAmOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIyMywgMjQ1LCAyNDksIDEpO1xuICAgIC5kZWxldGUtaWNvbiB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgIH1cbiAgfVxufVxuLnN0aWNrLXJvdyB7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgY29sb3I6ICMwMTgxOTE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cbi5xdWVzdGlvbi1yb3cge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiKDIxNSwgMjE1LCAyMTUpO1xuICAmLWhlYWQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtaW4taGVpZ2h0OiA0MHB4O1xuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuICAmLWJvZHkge1xuICAgIHBhZGRpbmc6IDIwcHggNDBweCAyMHB4IDQwcHg7XG4gICAgYmFja2dyb3VuZDogcmdiYSgyNDIsIDI0MiwgMjQyLCAxKTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgLnF1ZXN0aW9uLWl0ZW0ge1xuICAgICAgaGVpZ2h0OiA1NXB4O1xuICAgICAgYmFja2dyb3VuZDogaW5oZXJpdDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgcGFkZGluZzogNXB4IDIwcHg7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMjE1LCAyMTUsIDIxNSk7XG4gICAgICBib3JkZXItYm90dG9tOiAwO1xuICAgICAgLnRyYXNoLWljb24ge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB9XG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMjMsIDI0NSwgMjQ5LCAxKTtcbiAgICAgICAgLnRyYXNoLWljb24ge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2IoMjE1LCAyMTUsIDIxNSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4uaWNvbi1pbnB1dCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDlweDtcbiAgdG9wOiBjYWxjKDUwJSAtIDEwcHgpO1xufVxuLm5pdGlmLWNpcmNsZSB7XG4gIGJhY2tncm91bmQ6ICNmZjY2MDA7XG4gIHdpZHRoOiAxNnB4O1xuICBoZWlnaHQ6IDE2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZlYjk4YztcbiAgZm9udC1zaXplOiAxMHB4O1xuICBjb2xvcjogd2hpdGU7XG59XG4uc2VyY2gtcmVzdWx0LWRyb3BkYXduIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2E2YTZhNjtcbiAgYm9yZGVyLXRvcDogMDtcbiAgei1pbmRleDogMTExO1xuICAmLS1pdGVtIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzogOXB4IDEwcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG4gICYtLWljb24td3JhcCB7XG4gICAgd2lkdGg6IDI1cHg7XG4gICAgbWluLXdpZHRoOiAyNXB4O1xuICB9XG4gICYtLWZvb3Qge1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjYTZhNmE2O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxufVxuIiwiQGltcG9ydCBcIi4uL2NvbnRlbnQtbWFuYWdlbWVudC5jb21wb25lbnQuc2Nzc1wiO1xuXG4uaGVhZCB7XG4gIHBhZGRpbmctbGVmdDogMzBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWluLWhlaWdodDogODFweDtcbn1cbi5oYWxmLXdpZHRoIHtcbiAgd2lkdGg6IGNhbGMoNTAlIC0gMTBweCk7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbiAgJjpsYXN0LWNoaWxkIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDBweDtcbiAgfVxufVxuLmNsb3NlLWljb24tdGV4dCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICBib3R0b206IDExcHg7XG4gIHJpZ2h0OiA4cHg7XG4gIC5saW5lMSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgd2lkdGg6IDExcHg7XG4gICAgaGVpZ2h0OiAycHg7XG4gICAgYmFja2dyb3VuZDogI2Y2MWIxYjtcbiAgfVxuICAubGluZTIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHdpZHRoOiAxMXB4O1xuICAgIGhlaWdodDogMnB4O1xuICAgIGJhY2tncm91bmQ6ICNmNjFiMWI7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xuICB9XG59XG4uaWNvbi13cmFwIHtcbiAgd2lkdGg6IDMwcHg7XG4gIG1pbi13aWR0aDogMzBweDtcbn1cbi5hcnRpY2xlLXNlY3Rpb24ge1xuICAuYWN0aW9ucy1yb3cge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgYnV0dG9uIHtcbiAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgICBtaW4td2lkdGg6IDEzNXB4O1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2E2YTZhNjtcbiAgICAgIGhlaWdodDogMzBweDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAmLnRvcCB7XG4gICAgICAgIG1pbi13aWR0aDogMTAwcHg7XG4gICAgICB9XG4gICAgICAmLmJvdCB7XG4gICAgICAgIG1pbi13aWR0aDogMTAwcHg7XG4gICAgICAgIGltZyB7XG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICAmLWJvZHkge1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2E2YTZhNjtcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0ZXh0YXJlYSB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IDA7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICB3aGl0ZS1zcGFjZTogcHJlLWxpbmU7XG4gICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgd29yZC1icmVhazogYnJlYWstYWxsO1xuICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgIGZvbnQtZmFtaWx5OiBcIkFyaWFsXCI7XG4gICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgY29sb3I6ICMzMzMzMzM7XG4gICAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICAgICAgcmVzaXplOiBub25lO1xuICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIGJveC1zaGFkb3c6IDZweCA1cHggOHB4IC02cHggIzAwMDAwMDg3O1xuICAgIH1cbiAgICAudGV4dCB7XG4gICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgd29yZC1icmVhazogYnJlYWstYWxsO1xuICAgICAgLXdlYmtpdC1hcHBlYXJhbmNlOiB0ZXh0YXJlYTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgLXdlYmtpdC1ydGwtb3JkZXJpbmc6IGxvZ2ljYWw7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgcmVzaXplOiBhdXRvO1xuICAgICAgY3Vyc29yOiB0ZXh0O1xuICAgICAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xuICAgICAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcbiAgICAgIHRleHQtcmVuZGVyaW5nOiBhdXRvO1xuICAgICAgY29sb3I6IGluaXRpYWw7XG4gICAgICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICAgICAgd29yZC1zcGFjaW5nOiBub3JtYWw7XG4gICAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgICAgIHRleHQtaW5kZW50OiAwcHg7XG4gICAgICB0ZXh0LXNoYWRvdzogbm9uZTtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIHRleHQtYWxpZ246IHN0YXJ0O1xuICAgICAgbWFyZ2luOiAwZW07XG4gICAgICBmb250OiA0MDAgMTMuMzMzM3B4IEFyaWFsO1xuICAgICAgLXdlYmtpdC13cml0aW5nLW1vZGU6IGhvcml6b250YWwtdGIgIWltcG9ydGFudDtcbiAgICB9XG4gIH1cbn1cbi5hZGQtc2VjdGlvbi1kcmIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogY2FsYygxMDAlICsgMTBweCk7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XG4gIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgYm94LXNoYWRvdzogM3B4IDNweCAzcHggcmdiYSgwLCAwLCAwLCAwLjM1KTtcbiAgei1pbmRleDogMTE7XG4gIHdpZHRoOiAxNTRweDtcbiAgJi0taXRlbSB7XG4gICAgcGFkZGluZzogOHB4IDE1cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgJjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDUxLCA1MSwgNTEsIDAuMSk7XG4gICAgfVxuICAgIC5pY29uLXdyYXAge1xuICAgICAgd2lkdGg6IDQwcHg7XG4gICAgfVxuICB9XG59XG4iXX0= */"

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
            _this.id = id.id;
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
        var selection = window.getSelection();
        window.getSelection().removeRange(range);
        this.questions.push({ question: selection.toString(), checked: false, edit: false });
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

module.exports = "<div class=\"head\">\n\n  <div class=\"df full-width\">\n    <div class=\"pos-r\">\n      <p-dropdown class=\"search-dropdown\" [(ngModel)]=\"selectedSearchIn\" [options]=\"searchIn\"></p-dropdown>\n      <label class=\"lable-drb\">Search in</label>\n    </div>\n    <div class=\"input-search pos-r\">\n      <input type=\"text\" [(ngModel)]=\"searchText\" (ngModelChange)=\"searchTextChange($event)\" placeholder=\"Search content / tag\"\n        pInputText />\n      <div *ngIf=\"searchText.length && searchResultData.length\" class=\"serch-result-dropdawn\">\n        <div (click)=\"openSearch(); searchText = ''\" *ngFor=\"let item of searchResultData\" class=\"serch-result-dropdawn--item\">\n          <div class=\"serch-result-dropdawn--icon-wrap\">\n            <img *ngIf=\"item.type === 'teg'\" src=\"assets/img/stiket.png\" alt=\"\">\n            <img *ngIf=\"item.type === 'text'\" src=\"assets/img/file.png\" alt=\"\">\n          </div>\n          <div>\n            <div class=\"serch-result-dropdawn--lable\">\n              {{item.label}}\n            </div>\n          </div>\n        </div>\n        <div (click)=\"openSearch(); searchText = ''\" class=\"serch-result-dropdawn--foot\">\n          More results\n        </div>\n      </div>\n      <!-- (focus)=\"openSearch()\" -->\n      <div class=\"icon-input\">\n        <img *ngIf=\"!searchResult\" class=\"c-p\" width=\"20px\" src=\"assets/img/search.png\" alt=\"\">\n        <img *ngIf=\"searchResult\" (click)=\"closeSearch(); searchText = ''\" class=\"c-p\" width=\"20px\" src=\"assets/img/times-black.png\"\n          alt=\"\">\n      </div>\n    </div>\n  </div>\n  <div class=\"df\">\n    <div class=\"df ai-c c-p m-r-40 text-wrap-none\">\n      <img class=\"m-r-10\" src=\"assets/img/folder-open.png\" alt=\"\">\n      Load Files\n    </div>\n    <div (click)=\"openDubicate()\" class=\"df ai-c c-p text-wrap-none\">\n      <img class=\"m-r-10\" src=\"assets/img/files-group.png\" alt=\"\">\n      Duplicates\n      <div class=\"m-l-10 nitif-circle\">\n        7\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"content-wrap\">\n\n  <div *ngIf=\"folders\" class=\"folder-side\">\n    <div class=\"side-head\">\n      <div>\n        Folders\n      </div>\n      <div class=\"df ai-c\">\n        <div (click)=\"addFolder()\" class=\"m-r-40 c-p\">\n          <img src=\"assets/img/addFolderTree.png\" alt=\"\">\n        </div>\n        <div (click)=\"expandetTree()\" class=\"c-p arrow-right\">\n          <img class=\"animate\" [ngClass]=\"{'rotate--90': collapsFolderFlag}\" src=\"assets/img/arrow.png\" alt=\"\">\n        </div>\n      </div>\n    </div>\n    <div class=\"body-side\">\n      <p-tree [value]=\"filesTree0\" selectionMode=\"single\"\n      draggableNodes=\"true\" droppableNodes=\"true\" draggableScope=\"a\" droppableScope=\"c\"\n      (onNodeUnselect)=\"onNodeUnselect($event)\" (onNodeSelect)=\"onNodeSelect($event,i)\">\n        <ng-template let-node pTemplate=\"text\">\n          <!-- <span  title=\"Double click to rename\" (dblclick)=\"newFolderName = true; \">{{node.type}}</span> -->\n          <!-- <app-dialog-folder-name *ngIf=\"newFolderName\" [fieldValue]=\"node.label\" [title]=\"'Add New Folder'\" (result)=\"node.label = $event; newFolderName = false;\"></app-dialog-folder-name> -->\n        </ng-template>\n        <ng-template let-node pTemplate=\"folder\">\n          <span  \n      title=\"Double click to rename\" (dblclick)=\"newFolderName[node.id] = true; \">{{node.label}}</span>\n          <app-dialog-folder-name *ngIf=\"newFolderName[node.id]\" [fieldValue]=\"node.label\" [title]=\"'Add New Folder'\" (result)=\"renameNode(data, node.id, $event);node.label = $event; newFolderName[node.id] = false;\"></app-dialog-folder-name>\n        </ng-template>\n      </p-tree>\n    </div>\n  </div>\n\n  <div *ngIf=\"welcome\" class=\"folder-side full-width m-r-0\">\n    <div class=\"side-head\"></div>\n    <div (onNodeDrop)=\"onDrop($event)\" (drop)=\"onDrop($event)\" class=\"body-side col jc-c ai-c text-center\">\n      <div class=\"m-b-20\">\n        Welcome to SPOT\n      </div>\n      <div class=\"m-b-20\">\n        To create your content repository, start by loading source files <br>\n        Word and PDF file are accepted\n      </div>\n      <label class=\"c-p ai-c df\">\n        <img class=\"m-r-20\" src=\"assets/img/folder-open.png\" alt=\"\">\n        Load Files\n      </label>\n    </div>\n  </div>\n\n  <div *ngIf=\"dublicate\" class=\"articles-side full-width\">\n    <div class=\"side-head\">\n      <div>\n        Duplicate Questions\n      </div>\n      <div (click)=\"backContent()\" class=\"df ai-c c-p\">\n        <img width=\"16px\" class=\"m-r-5 rotate--90\" src=\"assets/img/caret.png\" alt=\"\">\n        <div>\n          Back to content\n        </div>\n      </div>\n    </div>\n    <div class=\"body-side\">\n      <div *ngFor=\"let item of dublicateQuestionData; let i = index;\">\n        <div *ngIf=\"item.questions.length\" class=\"question-row\">\n          <div (click)=\"item.open = !item.open; \" class=\"question-row-head\">\n            <div [ngClass]=\"{'rotate-270': item.open}\" class=\"m-r-10 icon animate rotate-180\">\n              <img src=\"assets/img/caret-ques.png\" alt=\"\">\n            </div>\n            <div>\n              {{item.name}} ({{item.questions.length}})\n            </div>\n          </div>\n          <div *ngIf=\"item.open\" class=\"question-row-body\">\n            <div>\n              <div *ngFor=\"let dublicate of item.questions; let subIndex = index;\" class=\"question-item\">\n                <div>\n                  <div class=\"fs-12 m-n-7\">\n                    {{dublicate.name}}\n                  </div>\n                  <div class=\"color-gray-600\">\n                    {{dublicate.path}}\n                  </div>\n                </div>\n                <div (click)=\"detaleItem(item.questions, subIndex)\" class=\"trash-icon\">\n                  <img width=\"22px\" src=\"assets/img/trash.png\" alt=\"\">\n                </div>\n              </div>\n            </div>\n            <div class=\"df jc-e p-r-40 m-t-20\">\n              <div class=\"df ai-c c-p\">\n                <img class=\"m-r-5\" src=\"assets/img/succsess.png\" alt=\"\">\n                Keep Duplicates\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div *ngIf=\"searchResult\" class=\"articles-side full-width \">\n    <div class=\"side-head\">\n      <div>\n        Search Results\n      </div>\n      <div class=\"df ai-c color-primary\">\n        <img [routerLink]=\"['/article']\" class=\"m-r-10 c-p\" src=\"assets/img/addArtictes.png\" alt=\"\">\n        <div class=\"m-r-30\">\n          Add Article\n        </div>\n        <img (click)=\"deleteSearchResults()\" class=\"c-p m-r-40\" width=\"22px\" src=\"assets/img/trash.png\" alt=\"\">\n        <div (click)=\"backContent()\" class=\"df ai-c c-p\">\n          <img width=\"16px\" class=\"m-r-5 rotate--90\" src=\"assets/img/caret.png\" alt=\"\">\n          <div>\n            Back to content\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"body-side body-side-scroll\">\n      <div *ngFor=\"let item of searchResultData; let i = index\" class=\"search-row \">\n        <div>\n          <input class=\"m-r-20 m-t-0\" [(ngModel)]=\"item.element.checked\" type=\"checkbox\">\n        </div>\n        <div (click)=\"selectType(item.element, i)\">\n          <div class=\"df ai-c jc-b m-b-7\">\n            <div>\n              {{item.element.title}}\n            </div>\n            <div (click)=\"detaleItem(searchResultData, i)\" class=\"c-p delete-icon\">\n              <img width=\"18px\" src=\"assets/img/trash.png\" alt=\"\">\n            </div>\n          </div>\n          <div class=\"stick-row\">\n            <div *ngFor=\"let tag of item.element.tegs\" class=\"ai-c df m-r-10\">\n              <img class=\"m-r-3\" src=\"assets/img/stiket.png\" alt=\"\">\n              <div class=\"context\">\n                {{tag}}\n              </div>\n            </div>\n          </div>\n          <div class=\"description\">\n            <p class=\"context\" style=\"margin: 0; overflow: hidden; text-overflow: ellipsis; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical;\">\n              {{item.element.text}}\n            </p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div *ngIf=\"articles && selectedType\" class=\"articles-side\">\n    <div class=\"side-head\">\n      <div>\n        Articles\n      </div>\n      <div class=\"df ai-c color-primary\">\n        <img [routerLink]=\"['/article']\" class=\"m-r-10 c-p\" src=\"assets/img/addArtictes.png\" alt=\"\">\n        <div class=\"m-r-30\">\n          Add Article\n        </div>\n        <img (click)=\"deleteArticles()\" class=\"c-p\" width=\"22px\" src=\"assets/img/trash.png\" alt=\"\">\n      </div>\n    </div>\n    <div class=\"body-side\">\n      <div *ngFor=\"let item of articlesDataArr; let i = index\" (click)=\"selectType(item, i)\" class=\"articles-row jc-b\">\n        <div class=\"df ai-c\">\n          <input [(ngModel)]=\"item.checked\" class=\"m-r-20\" type=\"checkbox\">\n          <i *ngIf=\"item.type === 'folder'\" class=\"m-r-5\" class=\"fa fa-folder m-r-20 icon-folder\"></i>\n          <div>\n            {{item.label}}\n          </div>\n        </div>\n        <div (click)=\"detaleItem(articlesDataArr, item.id)\" class=\"c-p icons\">\n          <img width=\"18px\" src=\"assets/img/trash.png\" alt=\"\">\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div *ngIf=\"article && selectedText\" class=\"article-side\">\n    <div class=\"side-head\">\n      <div>\n        Article\n      </div>\n      <div class=\"df ai-c\">\n        <img (click)=\"selectedTextAction('prev')\" class=\"m-r-10 c-p\" src=\"assets/img/arrow-left.png\" alt=\"\">\n        {{editPageCount / 5}} of {{ editPageCountValue }}\n        <img (click)=\"selectedTextAction('next')\" class=\"m-l-10 rotate-180 c-p\" src=\"assets/img/arrow-left.png\" alt=\"\">\n      </div>\n      <div class=\"df ai-c\">\n        <div class=\"m-r-30 c-p\">\n          <img [routerLink]=\"[ '/article', id]\" a src=\"assets/img/editArticle.png\" alt=\"\">\n        </div>\n        <img class=\"c-p\" width=\"22px\" src=\"assets/img/trash.png\" alt=\"\">\n      </div>\n    </div>\n    <div class=\"body-side text-left\">\n      <div class=\"tags-wrap\">\n        <div class=\"m-r-20 p-t-12\">\n          Tags:\n        </div>\n        <div *ngFor=\"let tags of selectedText.tegs; let i = index\" class=\"chips\">\n          {{tags}}\n          <img (click)=\"detaleItem(selectedText.tegs, i)\" class=\"close c-p\" src=\"assets/img/close.png\" alt=\"\">\n        </div>\n        <input [(ngModel)]=\"addTagField\" class=\"add-tag\" type=\"text\" (keyup.enter)=\"addTags(selectedText.tegs, addTagField)\"\n          placeholder=\"Add tag\" pInputText />\n      </div>\n      <div class=\"p-t-10 p-l-25 p-r-25 p-b-25\">\n        <p class=\"fs-11\">\n          Content > Tecnical > Phones > iPhone > iPhone 9 >\n        </p>\n        <h4 class=\"fs-14\">\n          {{\n          selectedText.title\n          }}\n        </h4>\n        <p class=\"fs-12\">\n          <span *ngFor=\"let item of previewText\">\n            {{item}}.\n          </span>\n        </p>\n      </div>\n      <div class=\"title-row jc-b bg\">\n        <div class=\"df ai-c\">\n          <div class=\"fs-14\">\n            Questions\n          </div>\n        </div>\n        <div class=\"df ai-c\">\n          <img (click)=\"deleteQuestion()\" class=\"c-p m-r-5\" width=\"22px\" src=\"assets/img/trash.png\" alt=\"\">\n          <img (click)=\"showArticle = true\" class=\"c-p\" width=\"18px\" src=\"assets/img/fasten.png\" alt=\"\">\n        </div>\n      </div>\n      <div *ngFor=\"let item of selectedText.questins; let i = index\" class=\"articles-row jc-b\">\n        <div class=\"df ai-c\">\n          <input [(ngModel)]=\"questuonSettings[i]\" class=\"m-r-20\" type=\"checkbox\">\n          <div>\n            {{item}}\n          </div>\n        </div>\n        <div class=\"c-p icons df ai-c\">\n          <img (click)=\"detaleItem(selectedText.questins, i)\" class=\"c-p m-r-5\" width=\"22px\" src=\"assets/img/trash.png\"\n            alt=\"\">\n          <img (click)=\"showArticle = true\" class=\"c-p\" width=\"18px\" src=\"assets/img/fasten.png\" alt=\"\">\n        </div>\n      </div>\n    </div>\n  </div>\n\n</div>\n\n<app-link-article [show]=\"showArticle\" (hide)=\"showArticle = false\"></app-link-article>\n<app-dialog *ngIf=\"showDialogDelete\" [question]=\"'Are you sure you want to delete this Item?'\" (result)=\"detaleItem(null, null, $event)\"></app-dialog>"

/***/ }),

/***/ "./src/app/main/content-management/content-management.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/main/content-management/content-management.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content-wrap {\n  display: flex;\n  justify-content: space-between;\n  min-height: calc(100vh - 234px); }\n\n.head {\n  height: 76px;\n  background: inherit;\n  background-color: #f2f2f2;\n  display: flex;\n  align-items: center;\n  padding-left: 90px;\n  padding-right: 50px;\n  margin-bottom: 40px; }\n\n.lable-drb {\n  position: absolute;\n  top: 5px;\n  left: 5px;\n  font-size: 11px;\n  color: #1e1e1e; }\n\n.input-search {\n  width: 100%;\n  max-width: 533px;\n  margin-left: 10px; }\n\n.input-search input {\n    height: 48px;\n    width: 100%; }\n\n.side-head {\n  height: 37px;\n  background-color: #e4e4e4;\n  box-sizing: border-box;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 15px; }\n\n.body-side {\n  background-color: white;\n  box-sizing: border-box;\n  border-width: 1px;\n  border-style: solid;\n  border-color: #d7d7d7;\n  min-height: 100%; }\n\n.body-side-scroll {\n  overflow-y: auto;\n  max-height: 400px; }\n\n.arrow-right {\n  -webkit-transform: rotate(-90deg);\n          transform: rotate(-90deg); }\n\n.folder-side {\n  margin-right: 20px;\n  min-width: -webkit-fit-content;\n  min-width: -moz-fit-content;\n  min-width: fit-content;\n  width: 225px; }\n\n.articles-side {\n  width: 100%;\n  margin-right: 20px; }\n\n.article-side {\n  width: 50%;\n  max-width: 550px;\n  min-width: 420px; }\n\n.rotate-180 {\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg); }\n\n.rotate-270 {\n  -webkit-transform: rotate(270deg);\n          transform: rotate(270deg); }\n\n.rotate--90 {\n  -webkit-transform: rotate(-90deg);\n          transform: rotate(-90deg); }\n\n.articles-row {\n  border-bottom: 1px solid #d7d7d7;\n  display: flex;\n  align-items: center;\n  padding: 10px 20px;\n  transition: all 0.3s;\n  min-height: 46px; }\n\n.articles-row .icons {\n    display: none;\n    align-items: center; }\n\n.articles-row:hover {\n    background: #dff5f9; }\n\n.articles-row:hover .icons {\n      display: flex; }\n\n.tags-wrap {\n  display: flex;\n  flex-wrap: wrap;\n  padding: 5px 15px;\n  background-color: #f2f2f2;\n  box-sizing: border-box;\n  border-width: 1px;\n  border-style: solid;\n  border-color: #d7d7d7; }\n\n.add-tag {\n  height: 27px;\n  border-radius: 10px;\n  margin-bottom: 10px;\n  margin-top: 6px;\n  width: 120px; }\n\n.title-row {\n  height: 45px;\n  border-width: 1px;\n  border-style: solid;\n  border-color: #d7d7d7;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background: #f2f2f2;\n  padding: 10px 20px; }\n\n.search-row {\n  padding: 20px 20px 10px 20px;\n  display: flex;\n  font-size: 12px;\n  transition: all 0.3s;\n  border-bottom: 1px solid #d7d7d7;\n  position: relative; }\n\n.search-row .description {\n    overflow: hidden;\n    color: #999999; }\n\n.search-row .delete-icon {\n    display: none;\n    align-items: center;\n    position: absolute;\n    right: 20px; }\n\n.search-row:hover {\n    background-color: #dff5f9; }\n\n.search-row:hover .delete-icon {\n      display: flex; }\n\n.stick-row {\n  font-size: 11px;\n  color: #018191;\n  display: flex;\n  margin-bottom: 5px; }\n\n.question-row {\n  border-bottom: 1px solid #d7d7d7; }\n\n.question-row-head {\n    display: flex;\n    align-items: center;\n    min-height: 40px;\n    padding: 5px 10px;\n    cursor: pointer; }\n\n.question-row-body {\n    padding: 20px 40px 20px 40px;\n    background: #f2f2f2;\n    position: relative; }\n\n.question-row-body .question-item {\n      height: 55px;\n      background: inherit;\n      background-color: white;\n      display: flex;\n      align-items: center;\n      justify-content: space-between;\n      padding: 5px 20px;\n      border: 1px solid #d7d7d7;\n      border-bottom: 0; }\n\n.question-row-body .question-item .trash-icon {\n        display: none;\n        align-items: center;\n        cursor: pointer; }\n\n.question-row-body .question-item:hover {\n        background-color: #dff5f9; }\n\n.question-row-body .question-item:hover .trash-icon {\n          display: flex; }\n\n.question-row-body .question-item:last-child {\n        border-bottom: 1px solid #d7d7d7; }\n\n.icon-input {\n  position: absolute;\n  right: 9px;\n  top: calc(50% - 10px); }\n\n.nitif-circle {\n  background: #ff6600;\n  width: 16px;\n  height: 16px;\n  border-radius: 100px;\n  overflow: hidden;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 1px solid #feb98c;\n  font-size: 10px;\n  color: white; }\n\n.serch-result-dropdawn {\n  position: absolute;\n  top: 100%;\n  background: white;\n  width: 100%;\n  border: 1px solid #a6a6a6;\n  border-top: 0;\n  z-index: 111; }\n\n.serch-result-dropdawn--item {\n    display: flex;\n    align-items: center;\n    padding: 9px 10px;\n    cursor: pointer; }\n\n.serch-result-dropdawn--icon-wrap {\n    width: 25px;\n    min-width: 25px; }\n\n.serch-result-dropdawn--foot {\n    border-top: 1px solid #a6a6a6;\n    padding: 10px;\n    text-align: center;\n    cursor: pointer; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NodW1pay9Eb2N1bWVudHMva21zLXNwb3Qvc3JjL2FwcC9tYWluL2NvbnRlbnQtbWFuYWdlbWVudC9jb250ZW50LW1hbmFnZW1lbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLCtCQUErQixFQUFBOztBQUVqQztFQUNFLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIseUJBQXdDO0VBQ3hDLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixtQkFBbUIsRUFBQTs7QUFFckI7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCxlQUFlO0VBQ2YsY0FBYyxFQUFBOztBQUVoQjtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsaUJBQWlCLEVBQUE7O0FBSG5CO0lBS0ksWUFBWTtJQUNaLFdBQVcsRUFBQTs7QUFHZjtFQUNFLFlBQVk7RUFDWix5QkFBd0M7RUFDeEMsc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsOEJBQThCO0VBQzlCLGVBQWUsRUFBQTs7QUFFakI7RUFDRSx1QkFBd0M7RUFDeEMsc0JBQXNCO0VBQ3RCLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIscUJBQW9DO0VBQ3BDLGdCQUFnQixFQUFBOztBQUVsQjtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUIsRUFBQTs7QUFFbkI7RUFDRSxpQ0FBeUI7VUFBekIseUJBQXlCLEVBQUE7O0FBRTNCO0VBQ0Usa0JBQWtCO0VBQ2xCLDhCQUFzQjtFQUF0QiwyQkFBc0I7RUFBdEIsc0JBQXNCO0VBQ3RCLFlBQVksRUFBQTs7QUFFZDtFQUNFLFdBQVc7RUFDWCxrQkFBa0IsRUFBQTs7QUFFcEI7RUFDRSxVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLGdCQUFnQixFQUFBOztBQUVsQjtFQUNFLGlDQUF5QjtVQUF6Qix5QkFBeUIsRUFBQTs7QUFFM0I7RUFDRSxpQ0FBeUI7VUFBekIseUJBQXlCLEVBQUE7O0FBRTNCO0VBQ0UsaUNBQXlCO1VBQXpCLHlCQUF5QixFQUFBOztBQUUzQjtFQUNFLGdDQUErQztFQUMvQyxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixvQkFBb0I7RUFDcEIsZ0JBQWdCLEVBQUE7O0FBTmxCO0lBUUksYUFBYTtJQUNiLG1CQUFtQixFQUFBOztBQVR2QjtJQVlJLG1CQUFrQyxFQUFBOztBQVp0QztNQWNNLGFBQWEsRUFBQTs7QUFJbkI7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQix5QkFBd0M7RUFDeEMsc0JBQXNCO0VBQ3RCLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIscUJBQW9DLEVBQUE7O0FBRXRDO0VBQ0UsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLFlBQVksRUFBQTs7QUFFZDtFQUNFLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLHFCQUFnQztFQUNoQyxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsa0JBQWtCLEVBQUE7O0FBRXBCO0VBQ0UsNEJBQTRCO0VBQzVCLGFBQWE7RUFDYixlQUFlO0VBQ2Ysb0JBQW9CO0VBQ3BCLGdDQUEyQztFQUMzQyxrQkFBa0IsRUFBQTs7QUFOcEI7SUFRSSxnQkFBZ0I7SUFDaEIsY0FBYyxFQUFBOztBQVRsQjtJQVlJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLFdBQVcsRUFBQTs7QUFmZjtJQWtCSSx5QkFBd0MsRUFBQTs7QUFsQjVDO01Bb0JNLGFBQWEsRUFBQTs7QUFJbkI7RUFDRSxlQUFlO0VBQ2YsY0FBYztFQUNkLGFBQWE7RUFDYixrQkFBa0IsRUFBQTs7QUFFcEI7RUFDRSxnQ0FBMkMsRUFBQTs7QUFDM0M7SUFDRSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsZUFBZSxFQUFBOztBQUVqQjtJQUNFLDRCQUE0QjtJQUM1QixtQkFBa0M7SUFDbEMsa0JBQWtCLEVBQUE7O0FBSG5CO01BS0csWUFBWTtNQUNaLG1CQUFtQjtNQUNuQix1QkFBb0M7TUFDcEMsYUFBYTtNQUNiLG1CQUFtQjtNQUNuQiw4QkFBOEI7TUFDOUIsaUJBQWlCO01BQ2pCLHlCQUFvQztNQUNwQyxnQkFBZ0IsRUFBQTs7QUFibkI7UUFlSyxhQUFhO1FBQ2IsbUJBQW1CO1FBQ25CLGVBQWUsRUFBQTs7QUFqQnBCO1FBb0JLLHlCQUF3QyxFQUFBOztBQXBCN0M7VUFzQk8sYUFBYSxFQUFBOztBQXRCcEI7UUEwQkssZ0NBQTJDLEVBQUE7O0FBS25EO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixxQkFBcUIsRUFBQTs7QUFFdkI7RUFDRSxtQkFBbUI7RUFDbkIsV0FBVztFQUNYLFlBQVk7RUFDWixvQkFBb0I7RUFDcEIsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLHlCQUF5QjtFQUN6QixlQUFlO0VBQ2YsWUFBWSxFQUFBOztBQUVkO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxpQkFBaUI7RUFDakIsV0FBVztFQUNYLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2IsWUFBWSxFQUFBOztBQUNaO0lBQ0UsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsZUFBZSxFQUFBOztBQUVqQjtJQUNFLFdBQVc7SUFDWCxlQUFlLEVBQUE7O0FBRWpCO0lBQ0UsNkJBQTZCO0lBQzdCLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsZUFBZSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvbWFpbi9jb250ZW50LW1hbmFnZW1lbnQvY29udGVudC1tYW5hZ2VtZW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnQtd3JhcCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtIDIzNHB4KTtcbn1cbi5oZWFkIHtcbiAgaGVpZ2h0OiA3NnB4O1xuICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0MiwgMjQyLCAyNDIsIDEpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nLWxlZnQ6IDkwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDUwcHg7XG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XG59XG4ubGFibGUtZHJiIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDVweDtcbiAgbGVmdDogNXB4O1xuICBmb250LXNpemU6IDExcHg7XG4gIGNvbG9yOiAjMWUxZTFlO1xufVxuLmlucHV0LXNlYXJjaCB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDUzM3B4O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgaW5wdXQge1xuICAgIGhlaWdodDogNDhweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuLnNpZGUtaGVhZCB7XG4gIGhlaWdodDogMzdweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMjgsIDIyOCwgMjI4LCAxKTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nOiAwIDE1cHg7XG59XG4uYm9keS1zaWRlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci1jb2xvcjogcmdiYSgyMTUsIDIxNSwgMjE1LCAxKTtcbiAgbWluLWhlaWdodDogMTAwJTtcbn1cbi5ib2R5LXNpZGUtc2Nyb2xsIHtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgbWF4LWhlaWdodDogNDAwcHg7XG59XG4uYXJyb3ctcmlnaHQge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpO1xufVxuLmZvbGRlci1zaWRlIHtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICBtaW4td2lkdGg6IGZpdC1jb250ZW50O1xuICB3aWR0aDogMjI1cHg7XG59XG4uYXJ0aWNsZXMtc2lkZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59XG4uYXJ0aWNsZS1zaWRlIHtcbiAgd2lkdGg6IDUwJTtcbiAgbWF4LXdpZHRoOiA1NTBweDtcbiAgbWluLXdpZHRoOiA0MjBweDtcbn1cbi5yb3RhdGUtMTgwIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbn1cbi5yb3RhdGUtMjcwe1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgyNzBkZWcpO1xufVxuLnJvdGF0ZS0tOTAge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpO1xufVxuLmFydGljbGVzLXJvdyB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDIxNSwgMjE1LCAyMTUsIDEpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuICBtaW4taGVpZ2h0OiA0NnB4O1xuICAuaWNvbnMge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuICAmOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDIyMywgMjQ1LCAyNDksIDEpO1xuICAgIC5pY29ucyB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgIH1cbiAgfVxufVxuLnRhZ3Mtd3JhcCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgcGFkZGluZzogNXB4IDE1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQyLCAyNDIsIDI0MiwgMSk7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJvcmRlci13aWR0aDogMXB4O1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItY29sb3I6IHJnYmEoMjE1LCAyMTUsIDIxNSwgMSk7XG59XG4uYWRkLXRhZyB7XG4gIGhlaWdodDogMjdweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgbWFyZ2luLXRvcDogNnB4O1xuICB3aWR0aDogMTIwcHg7XG59XG4udGl0bGUtcm93IHtcbiAgaGVpZ2h0OiA0NXB4O1xuICBib3JkZXItd2lkdGg6IDFweDtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLWNvbG9yOiByZ2IoMjE1LCAyMTUsIDIxNSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogI2YyZjJmMjtcbiAgcGFkZGluZzogMTBweCAyMHB4O1xufVxuLnNlYXJjaC1yb3cge1xuICBwYWRkaW5nOiAyMHB4IDIwcHggMTBweCAyMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmb250LXNpemU6IDEycHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiKDIxNSwgMjE1LCAyMTUpO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIC5kZXNjcmlwdGlvbiB7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBjb2xvcjogIzk5OTk5OTtcbiAgfVxuICAuZGVsZXRlLWljb24ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDIwcHg7XG4gIH1cbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMjMsIDI0NSwgMjQ5LCAxKTtcbiAgICAuZGVsZXRlLWljb24ge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICB9XG4gIH1cbn1cbi5zdGljay1yb3cge1xuICBmb250LXNpemU6IDExcHg7XG4gIGNvbG9yOiAjMDE4MTkxO1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG4ucXVlc3Rpb24tcm93IHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYigyMTUsIDIxNSwgMjE1KTtcbiAgJi1oZWFkIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWluLWhlaWdodDogNDBweDtcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbiAgJi1ib2R5IHtcbiAgICBwYWRkaW5nOiAyMHB4IDQwcHggMjBweCA0MHB4O1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjQyLCAyNDIsIDI0MiwgMSk7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIC5xdWVzdGlvbi1pdGVtIHtcbiAgICAgIGhlaWdodDogNTVweDtcbiAgICAgIGJhY2tncm91bmQ6IGluaGVyaXQ7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgIHBhZGRpbmc6IDVweCAyMHB4O1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDIxNSwgMjE1LCAyMTUpO1xuICAgICAgYm9yZGVyLWJvdHRvbTogMDtcbiAgICAgIC50cmFzaC1pY29uIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgfVxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjIzLCAyNDUsIDI0OSwgMSk7XG4gICAgICAgIC50cmFzaC1pY29uIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiKDIxNSwgMjE1LCAyMTUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuLmljb24taW5wdXQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiA5cHg7XG4gIHRvcDogY2FsYyg1MCUgLSAxMHB4KTtcbn1cbi5uaXRpZi1jaXJjbGUge1xuICBiYWNrZ3JvdW5kOiAjZmY2NjAwO1xuICB3aWR0aDogMTZweDtcbiAgaGVpZ2h0OiAxNnB4O1xuICBib3JkZXItcmFkaXVzOiAxMDBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZWI5OGM7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgY29sb3I6IHdoaXRlO1xufVxuLnNlcmNoLXJlc3VsdC1kcm9wZGF3biB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNhNmE2YTY7XG4gIGJvcmRlci10b3A6IDA7XG4gIHotaW5kZXg6IDExMTtcbiAgJi0taXRlbSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDlweCAxMHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuICAmLS1pY29uLXdyYXAge1xuICAgIHdpZHRoOiAyNXB4O1xuICAgIG1pbi13aWR0aDogMjVweDtcbiAgfVxuICAmLS1mb290IHtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2E2YTZhNjtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbn1cbiJdfQ== */"

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
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_2__);



var ContentManagementComponent = /** @class */ (function () {
    function ContentManagementComponent(eeDragDropService) {
        this.eeDragDropService = eeDragDropService;
        this.article = true;
        this.articles = true;
        this.searchResult = false;
        this.welcome = true;
        this.folders = true;
        this.dublicate = false;
        this.collapsFolderFlag = false;
        this.math = Math;
        this.questuonSettings = {};
        this.newFolderName = {};
        this.data = [
            {
                id: "d1",
                label: "Devices",
                data: "Node 0",
                expandedIcon: "fa fa-folder-open",
                collapsedIcon: "fa fa-folder",
                leaf: false,
                expanded: false,
                type: "folder",
                children: [
                    {
                        id: "and1",
                        label: "Android",
                        data: "Node 0",
                        expandedIcon: "fa fa-folder-open",
                        collapsedIcon: "fa fa-folder",
                        type: "folder",
                        children: [
                            {
                                id: "1",
                                label: "Android 7",
                                checked: false,
                                type: "folder",
                                expandedIcon: "fa fa-folder-open",
                                collapsedIcon: "fa fa-folder"
                            },
                            {
                                id: "2",
                                label: "Android 6",
                                checked: false,
                                type: "folder",
                                expandedIcon: "fa fa-folder-open",
                                collapsedIcon: "fa fa-folder"
                            },
                            {
                                id: "3",
                                label: "Android 5",
                                checked: false,
                                type: "folder",
                                expandedIcon: "fa fa-folder-open",
                                collapsedIcon: "fa fa-folder"
                            },
                            {
                                id: "4",
                                label: "text",
                                checked: false,
                                type: "text",
                                title: "Using 3D touch",
                                tegs: ["3d touch", "screen"],
                                questins: [
                                    "Which iPhone, iPad, and iPod touch models support iOS 1?",
                                    "Which iPhone, iPad, and iPod touch models support iOS 2?",
                                    "Which iPhone, iPad, and iPod touch models support iOS 3?",
                                    "Which iPhone, iPad, and iPod touch models support iOS 4?",
                                    "Which iPhone, iPad, and iPod touch models support iOS 5?"
                                ],
                                text: "3D Touch is multitouch made multidimensional. With it you can press deeply to launch actions instead of apps, reply to notifications, preview messages and links, switch keyboards, switch apps, animate Live Photos, vary stroke width, and more. It's like a wormhole through iOS that lets you move around faster than ever.\n              3D Touch is multitouch made multidimensional. With it you can press3D Touch is multitouch made multidimensional. With it you can press deeply to launch actions instead of apps, reply to notifications, preview messages and links, switch keyboards, switch apps, animate Live Photos, vary stroke width, and more. It's like a wormhole through iOS that lets you move around faster than ever.\n              3D Touch is multitouch made multidimensional. With it you can press3D Touch is multitouch made multidimensional. With it you can press deeply to launch actions instead of apps, reply to notifications, preview messages and links, switch keyboards, switch apps, animate Live Photos, vary stroke width, and more. It's like a wormhole through iOS that lets you move around faster than ever.\n              3D Touch is multitouch made multidimensional. With it you can press3D Touch is multitouch made multidimensional. With it you can press deeply to launch actions instead of apps, reply to notifications, preview messages and links, switch keyboards, switch apps, animate Live Photos, vary stroke width, and more. It's like a wormhole through iOS that lets you move around faster than ever.\n              3D Touch is multitouch made multidimensional. With it you can press deeply to launch actions instead of apps, reply to notifications, preview messages and links, switch keyboards, switch apps, animate Live Photos, vary stroke width, and more. It's like a wormhole through iOS that lets you move around faster than ever."
                            },
                            {
                                id: "5",
                                label: "text 5",
                                checked: false,
                                type: "text",
                                questins: [
                                    "Using 3D touch models support iOS 12?",
                                    "Which iPhone, iPad, and iPod touch models support iOS 10?"
                                ],
                                tegs: ["multi", "using"],
                                title: "Using 3D touch",
                                text: "multitouch sdfsdfsdfsd sdfs dfs dfsd fsdf sdf sdfsdfsdfsdfsdf"
                            }
                        ]
                    },
                    {
                        label: "Apple",
                        id: "a1",
                        data: "Node 1",
                        type: "folder",
                        expandedIcon: "fa fa-folder-open",
                        collapsedIcon: "fa fa-folder",
                        children: [
                            {
                                id: "Apple1",
                                label: "Apple 7",
                                checked: false,
                                type: "folder",
                                expandedIcon: "fa fa-folder-open",
                                collapsedIcon: "fa fa-folder"
                            },
                            {
                                id: "Apple2",
                                label: "Apple 6",
                                checked: false,
                                type: "folder",
                                expandedIcon: "fa fa-folder-open",
                                collapsedIcon: "fa fa-folder"
                            },
                            {
                                id: "Apple3",
                                label: "Apple 5",
                                checked: false,
                                type: "folder",
                                expandedIcon: "fa fa-folder-open",
                                collapsedIcon: "fa fa-folder"
                            }
                        ]
                    },
                    {
                        label: "Windows",
                        id: "w1",
                        data: "Node 2",
                        type: "folder",
                        expandedIcon: "fa fa-folder-open",
                        collapsedIcon: "fa fa-folder",
                        children: [
                            {
                                id: "Windows1",
                                label: "Windows 7",
                                checked: false,
                                type: "folder",
                                expandedIcon: "fa fa-folder-open",
                                collapsedIcon: "fa fa-folder"
                            },
                            {
                                id: "Windows2",
                                label: "Windows 6",
                                checked: false,
                                type: "folder",
                                expandedIcon: "fa fa-folder-open",
                                collapsedIcon: "fa fa-folder"
                            },
                            {
                                id: "Windows3",
                                label: "Windows 5",
                                checked: false,
                                type: "folder",
                                expandedIcon: "fa fa-folder-open",
                                collapsedIcon: "fa fa-folder"
                            }
                        ]
                    }
                ]
            }
        ];
        this.dublicateQuestionData = [
            {
                name: " How do I use the 3D touch?",
                open: false,
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
                open: false,
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
                    tegs: ["3d touch", "screen"],
                    questins: [
                        "Which iPhone, iPad, and iPod touch models support iOS 1?",
                        "Which iPhone, iPad, and iPod touch models support iOS 2?",
                        "Which iPhone, iPad, and iPod touch models support iOS 3?",
                        "Which iPhone, iPad, and iPod touch models support iOS 4?",
                        "Which iPhone, iPad, and iPod touch models support iOS 5?"
                    ],
                    text: "3D Touch is multitouch made multidimensional. With it you can press deeply to launch actions instead of apps, reply to notifications, preview messages and links, switch keyboards, switch apps, animate Live Photos, vary stroke width, and more. It's like a wormhole through iOS that lets you move around faster than ever.\n        3D Touch is multitouch made multidimensional. With it you can press3D Touch is multitouch made multidimensional. With it you can press deeply to launch actions instead of apps, reply to notifications, preview messages and links, switch keyboards, switch apps, animate Live Photos, vary stroke width, and more. It's like a wormhole through iOS that lets you move around faster than ever.\n        3D Touch is multitouch made multidimensional. With it you can press3D Touch is multitouch made multidimensional. With it you can press deeply to launch actions instead of apps, reply to notifications, preview messages and links, switch keyboards, switch apps, animate Live Photos, vary stroke width, and more. It's like a wormhole through iOS that lets you move around faster than ever.\n        3D Touch is multitouch made multidimensional. With it you can press3D Touch is multitouch made multidimensional. With it you can press deeply to launch actions instead of apps, reply to notifications, preview messages and links, switch keyboards, switch apps, animate Live Photos, vary stroke width, and more. It's like a wormhole through iOS that lets you move around faster than ever.\n        3D Touch is multitouch made multidimensional. With it you can press deeply to launch actions instead of apps, reply to notifications, preview messages and links, switch keyboards, switch apps, animate Live Photos, vary stroke width, and more. It's like a wormhole through iOS that lets you move around faster than ever."
                },
                {
                    id: "5",
                    name: "text 5",
                    checked: false,
                    type: "text",
                    questins: [
                        "Using 3D touch models support iOS 12?",
                        "Which iPhone, iPad, and iPod touch models support iOS 10?"
                    ],
                    tegs: ["multi", "using"],
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
                    questins: [
                        "Using 3D touch models support iOS 12?",
                        "Which iPhone, iPad, and iPod touch models support iOS 10?"
                    ],
                    tegs: ["multi", "using"],
                    title: "Using 3D touch",
                    text: "2 sdfs dfs dfsd fsdf sdf sdfsdfsdfsdfsdf"
                }
            ],
            Windows: [
                { id: "1", name: "w1", checked: false, type: "folder" },
                { id: "2", name: "w2", checked: false, type: "folder" },
                { id: "3", name: "w3", checked: false, type: "folder" }
            ],
            Devices: [
                { id: "1", name: "Windows", checked: false, type: "folder" },
                { id: "2", name: "Apple", checked: false, type: "folder" },
                { id: "3", name: "Android", checked: false, type: "folder" }
            ]
        };
        this.searchText = "";
        this.searchResultData = [];
    }
    ContentManagementComponent.prototype.searchTextChange = function (e) {
        var _this = this;
        this.searchResultData = [];
        this.articlesData[this.selectedType].forEach(function (element, index) {
            if (element.type === "text") {
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
            var divs = document.querySelectorAll(".context");
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
        this.search(this.data, e.node.id);
    };
    ContentManagementComponent.prototype.renameNode = function (arr, id, name) {
        for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
            var item = arr_1[_i];
            if (item.id === id) {
                item.label = name;
            }
            if (item.children) {
                this.renameNode(item.children, id, name);
            }
        }
    };
    ContentManagementComponent.prototype.search = function (arr, id) {
        for (var _i = 0, arr_2 = arr; _i < arr_2.length; _i++) {
            var item = arr_2[_i];
            if (item.id === id) {
                if (item.children) {
                    this.articlesDataArr = item.children;
                }
            }
            if (item.children) {
                this.search(item.children, id);
            }
        }
    };
    ContentManagementComponent.prototype.onNodeUnselect = function (e) {
        this.selectedFolder = null;
    };
    ContentManagementComponent.prototype.selectType = function (item, index) {
        if (item.type === "text") {
            this.editPageCount = 5;
            this.selectedText = item;
            console.log(item, "item");
            this.previewText = item.text.split(".");
            this.previewText = this.previewText.slice(this.editPageCount - 5, this.editPageCount);
            this.editPageCountValue = this.math.ceil(this.selectedText.text.split(".").length / 5);
        }
        this.id = item.id;
    };
    ContentManagementComponent.prototype.selectedTextAction = function (flag) {
        console.log(this.editPageCount, "this.editPageCount");
        if (flag === "prev" && this.editPageCount > 5) {
            this.editPageCount = this.editPageCount - 5;
        }
        else if (flag === "next" &&
            this.editPageCount < this.selectedText.text.split(".").length) {
            this.editPageCount = this.editPageCount + 5;
        }
        this.previewText = this.selectedText.text
            .split(".")
            .slice(this.editPageCount - 5, this.editPageCount);
    };
    ContentManagementComponent.prototype.addFolder = function () {
        var id = Math.floor(Math.random() * Math.floor(1000000));
        if (this.selectedFolder) {
            if (!this.selectedFolder.children) {
                this.selectedFolder.children = [];
            }
            this.selectedFolder.expanded = true;
            var obj = {
                label: "New folder",
                data: "Node 0",
                type: "folder",
                expandedIcon: "fa fa-folder-open",
                collapsedIcon: "fa fa-folder",
                id: id
            };
            this.selectedFolder.children.push(obj);
            this.pushInData(this.selectedFolder.id, obj);
        }
        else {
            this.filesTree0.push({
                label: "New folder",
                data: "Node 0",
                type: "folder",
                expandedIcon: "fa fa-folder-open",
                collapsedIcon: "fa fa-folder",
                id: id
            });
            this.data.push({
                id: id,
                label: "New folder",
                data: "Node 0",
                type: "folder",
                expandedIcon: "fa fa-folder-open",
                collapsedIcon: "fa fa-folder"
            });
        }
    };
    ContentManagementComponent.prototype.ngOnInit = function () {
        this.arr = this.deepCopy(this.data);
        this.hideTest(this.arr);
        this.filesTree0 = this.arr;
        this.searchIn = [
            { label: "Current Folder", value: "Current Folder" },
            { label: "All Folder", value: "All Folder" }
        ];
        this.selectedSearchIn = this.searchIn[0].label;
    };
    ContentManagementComponent.prototype.pushInData = function (id, obj) {
        var count = 0;
        var removeArr = [];
        for (var i = 0; i < this.data.length; i++) {
            if (this.data[i].children) {
                this.hideTest(this.data[i].children);
            }
            if (this.data[i].id === id) {
                this.data[i].children.push(obj);
            }
        }
    };
    ContentManagementComponent.prototype.hideTest = function (arr) {
        var count = 0;
        var removeArr = [];
        for (var i = 0; i < arr.length; i++) {
            if (arr[i].children) {
                this.hideTest(arr[i].children);
            }
            if (arr[i].type === "text") {
                removeArr.push(i);
            }
        }
        for (var _i = 0, removeArr_1 = removeArr; _i < removeArr_1.length; _i++) {
            var i = removeArr_1[_i];
            arr.splice(i - count, 1);
            count += 1;
        }
    };
    ContentManagementComponent.prototype.openDubicate = function () {
        this.articles = false;
        this.folders = false;
        this.dublicate = true;
        this.welcome = false;
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
    ContentManagementComponent.prototype.detaleItem = function (data, index, event) {
        if (data !== null || index !== null) {
            this.dataDelete = data;
            this.indexDelete = index;
            this.showDialogDelete = true;
        }
        else {
            if (!event) {
                this.showDialogDelete = false;
            }
            else {
                this.removeFolder(this.data, this.indexDelete);
                this.removeFolder(this.arr, this.indexDelete);
                this.showDialogDelete = false;
            }
        }
    };
    ContentManagementComponent.prototype.onDrop = function (e) {
        console.log(e, 11111111);
    };
    ContentManagementComponent.prototype.removeFolder = function (arr, id) {
        for (var i = 0; i < arr.length; i++) {
            if (arr[i].children)
                this.removeFolder(arr[i].children, id);
            if (arr[i].id === id) {
                arr.splice(i, 1);
            }
        }
    };
    ContentManagementComponent.prototype.addTags = function (data, value) {
        data.push(value);
        console.log(data, "data");
        this.addTagField = "";
    };
    ContentManagementComponent.prototype.deleteArticles = function () {
        var _this = this;
        var _loop_1 = function (item) {
            console.log(item);
            if (item.checked) {
                setTimeout(function () {
                    _this.removeFolder(_this.data, item.id);
                    _this.removeFolder(_this.arr, item.id);
                }, 1000);
            }
        };
        for (var _i = 0, _a = this.articlesDataArr; _i < _a.length; _i++) {
            var item = _a[_i];
            _loop_1(item);
        }
    };
    ContentManagementComponent.prototype.deleteSearchResults = function () {
        this.searchResultData = this.searchResultData.filter(function (item) {
            console.log(item, "item");
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
        var _this = this;
        this.collapsFolderFlag = !this.collapsFolderFlag;
        this.filesTree0.forEach(function (node) {
            _this.expandRecursive(node, _this.collapsFolderFlag);
        });
    };
    ContentManagementComponent.prototype.expandRecursive = function (node, isExpand) {
        var _this = this;
        node.expanded = isExpand;
        if (node.children) {
            node.children.forEach(function (childNode) {
                _this.expandRecursive(childNode, isExpand);
            });
        }
    };
    ContentManagementComponent.prototype.deepCopy = function (obj) {
        if (typeof obj == "object") {
            if (Array.isArray(obj)) {
                var l = obj.length;
                var r = new Array(l);
                for (var i = 0; i < l; i++) {
                    r[i] = this.deepCopy(obj[i]);
                }
                return r;
            }
            else {
                var r_1 = Object.assign({}, obj);
                for (var k in obj) {
                    r_1[k] = this.deepCopy(obj[k]);
                }
                return r_1;
            }
        }
        return obj;
    };
    ContentManagementComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-content-management",
            template: __webpack_require__(/*! ./content-management.component.html */ "./src/app/main/content-management/content-management.component.html"),
            styles: [__webpack_require__(/*! ./content-management.component.scss */ "./src/app/main/content-management/content-management.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [primeng_api__WEBPACK_IMPORTED_MODULE_2__["TreeDragDropService"]])
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

module.exports = ".content-wrap {\n  display: flex;\n  justify-content: space-between;\n  min-height: calc(100vh - 234px); }\n\n.head {\n  height: 76px;\n  background: inherit;\n  background-color: #f2f2f2;\n  display: flex;\n  align-items: center;\n  padding-left: 90px;\n  padding-right: 50px;\n  margin-bottom: 40px; }\n\n.lable-drb {\n  position: absolute;\n  top: 5px;\n  left: 5px;\n  font-size: 11px;\n  color: #1e1e1e; }\n\n.input-search {\n  width: 100%;\n  max-width: 533px;\n  margin-left: 10px; }\n\n.input-search input {\n    height: 48px;\n    width: 100%; }\n\n.side-head {\n  height: 37px;\n  background-color: #e4e4e4;\n  box-sizing: border-box;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 15px; }\n\n.body-side {\n  background-color: white;\n  box-sizing: border-box;\n  border-width: 1px;\n  border-style: solid;\n  border-color: #d7d7d7;\n  min-height: 100%; }\n\n.body-side-scroll {\n  overflow-y: auto;\n  max-height: 400px; }\n\n.arrow-right {\n  -webkit-transform: rotate(-90deg);\n          transform: rotate(-90deg); }\n\n.folder-side {\n  margin-right: 20px;\n  min-width: -webkit-fit-content;\n  min-width: -moz-fit-content;\n  min-width: fit-content;\n  width: 225px; }\n\n.articles-side {\n  width: 100%;\n  margin-right: 20px; }\n\n.article-side {\n  width: 50%;\n  max-width: 550px;\n  min-width: 420px; }\n\n.rotate-180 {\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg); }\n\n.rotate-270 {\n  -webkit-transform: rotate(270deg);\n          transform: rotate(270deg); }\n\n.rotate--90 {\n  -webkit-transform: rotate(-90deg);\n          transform: rotate(-90deg); }\n\n.articles-row {\n  border-bottom: 1px solid #d7d7d7;\n  display: flex;\n  align-items: center;\n  padding: 10px 20px;\n  transition: all 0.3s;\n  min-height: 46px; }\n\n.articles-row .icons {\n    display: none;\n    align-items: center; }\n\n.articles-row:hover {\n    background: #dff5f9; }\n\n.articles-row:hover .icons {\n      display: flex; }\n\n.tags-wrap {\n  display: flex;\n  flex-wrap: wrap;\n  padding: 5px 15px;\n  background-color: #f2f2f2;\n  box-sizing: border-box;\n  border-width: 1px;\n  border-style: solid;\n  border-color: #d7d7d7; }\n\n.add-tag {\n  height: 27px;\n  border-radius: 10px;\n  margin-bottom: 10px;\n  margin-top: 6px;\n  width: 120px; }\n\n.title-row {\n  height: 45px;\n  border-width: 1px;\n  border-style: solid;\n  border-color: #d7d7d7;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background: #f2f2f2;\n  padding: 10px 20px; }\n\n.search-row {\n  padding: 20px 20px 10px 20px;\n  display: flex;\n  font-size: 12px;\n  transition: all 0.3s;\n  border-bottom: 1px solid #d7d7d7;\n  position: relative; }\n\n.search-row .description {\n    overflow: hidden;\n    color: #999999; }\n\n.search-row .delete-icon {\n    display: none;\n    align-items: center;\n    position: absolute;\n    right: 20px; }\n\n.search-row:hover {\n    background-color: #dff5f9; }\n\n.search-row:hover .delete-icon {\n      display: flex; }\n\n.stick-row {\n  font-size: 11px;\n  color: #018191;\n  display: flex;\n  margin-bottom: 5px; }\n\n.question-row {\n  border-bottom: 1px solid #d7d7d7; }\n\n.question-row-head {\n    display: flex;\n    align-items: center;\n    min-height: 40px;\n    padding: 5px 10px;\n    cursor: pointer; }\n\n.question-row-body {\n    padding: 20px 40px 20px 40px;\n    background: #f2f2f2;\n    position: relative; }\n\n.question-row-body .question-item {\n      height: 55px;\n      background: inherit;\n      background-color: white;\n      display: flex;\n      align-items: center;\n      justify-content: space-between;\n      padding: 5px 20px;\n      border: 1px solid #d7d7d7;\n      border-bottom: 0; }\n\n.question-row-body .question-item .trash-icon {\n        display: none;\n        align-items: center;\n        cursor: pointer; }\n\n.question-row-body .question-item:hover {\n        background-color: #dff5f9; }\n\n.question-row-body .question-item:hover .trash-icon {\n          display: flex; }\n\n.question-row-body .question-item:last-child {\n        border-bottom: 1px solid #d7d7d7; }\n\n.icon-input {\n  position: absolute;\n  right: 9px;\n  top: calc(50% - 10px); }\n\n.nitif-circle {\n  background: #ff6600;\n  width: 16px;\n  height: 16px;\n  border-radius: 100px;\n  overflow: hidden;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 1px solid #feb98c;\n  font-size: 10px;\n  color: white; }\n\n.serch-result-dropdawn {\n  position: absolute;\n  top: 100%;\n  background: white;\n  width: 100%;\n  border: 1px solid #a6a6a6;\n  border-top: 0;\n  z-index: 111; }\n\n.serch-result-dropdawn--item {\n    display: flex;\n    align-items: center;\n    padding: 9px 10px;\n    cursor: pointer; }\n\n.serch-result-dropdawn--icon-wrap {\n    width: 25px;\n    min-width: 25px; }\n\n.serch-result-dropdawn--foot {\n    border-top: 1px solid #a6a6a6;\n    padding: 10px;\n    text-align: center;\n    cursor: pointer; }\n\n.title-modal {\n  display: flex;\n  align-items: center;\n  background: #f2f2f2;\n  padding: 0 20px;\n  min-height: 70px; }\n\n.content-modal {\n  padding: 20px; }\n\n.content-wrap {\n  margin-bottom: 40px; }\n\n.search-wrap {\n  padding-left: 245px;\n  margin-bottom: 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NodW1pay9Eb2N1bWVudHMva21zLXNwb3Qvc3JjL2FwcC9tYWluL2NvbnRlbnQtbWFuYWdlbWVudC9jb250ZW50LW1hbmFnZW1lbnQuY29tcG9uZW50LnNjc3MiLCIvaG9tZS9zaHVtaWsvRG9jdW1lbnRzL2ttcy1zcG90L3NyYy9hcHAvbWFpbi9jb250ZW50LW1hbmFnZW1lbnQvbGluay1hcnRpY2xlL2xpbmstYXJ0aWNsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsK0JBQStCLEVBQUE7O0FBRWpDO0VBQ0UsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQix5QkFBd0M7RUFDeEMsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLG1CQUFtQixFQUFBOztBQUVyQjtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUNULGVBQWU7RUFDZixjQUFjLEVBQUE7O0FBRWhCO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixpQkFBaUIsRUFBQTs7QUFIbkI7SUFLSSxZQUFZO0lBQ1osV0FBVyxFQUFBOztBQUdmO0VBQ0UsWUFBWTtFQUNaLHlCQUF3QztFQUN4QyxzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIsZUFBZSxFQUFBOztBQUVqQjtFQUNFLHVCQUF3QztFQUN4QyxzQkFBc0I7RUFDdEIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixxQkFBb0M7RUFDcEMsZ0JBQWdCLEVBQUE7O0FBRWxCO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQixFQUFBOztBQUVuQjtFQUNFLGlDQUF5QjtVQUF6Qix5QkFBeUIsRUFBQTs7QUFFM0I7RUFDRSxrQkFBa0I7RUFDbEIsOEJBQXNCO0VBQXRCLDJCQUFzQjtFQUF0QixzQkFBc0I7RUFDdEIsWUFBWSxFQUFBOztBQUVkO0VBQ0UsV0FBVztFQUNYLGtCQUFrQixFQUFBOztBQUVwQjtFQUNFLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsZ0JBQWdCLEVBQUE7O0FBRWxCO0VBQ0UsaUNBQXlCO1VBQXpCLHlCQUF5QixFQUFBOztBQUUzQjtFQUNFLGlDQUF5QjtVQUF6Qix5QkFBeUIsRUFBQTs7QUFFM0I7RUFDRSxpQ0FBeUI7VUFBekIseUJBQXlCLEVBQUE7O0FBRTNCO0VBQ0UsZ0NBQStDO0VBQy9DLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQixnQkFBZ0IsRUFBQTs7QUFObEI7SUFRSSxhQUFhO0lBQ2IsbUJBQW1CLEVBQUE7O0FBVHZCO0lBWUksbUJBQWtDLEVBQUE7O0FBWnRDO01BY00sYUFBYSxFQUFBOztBQUluQjtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLHlCQUF3QztFQUN4QyxzQkFBc0I7RUFDdEIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixxQkFBb0MsRUFBQTs7QUFFdEM7RUFDRSxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsWUFBWSxFQUFBOztBQUVkO0VBQ0UsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIscUJBQWdDO0VBQ2hDLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixrQkFBa0IsRUFBQTs7QUFFcEI7RUFDRSw0QkFBNEI7RUFDNUIsYUFBYTtFQUNiLGVBQWU7RUFDZixvQkFBb0I7RUFDcEIsZ0NBQTJDO0VBQzNDLGtCQUFrQixFQUFBOztBQU5wQjtJQVFJLGdCQUFnQjtJQUNoQixjQUFjLEVBQUE7O0FBVGxCO0lBWUksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsV0FBVyxFQUFBOztBQWZmO0lBa0JJLHlCQUF3QyxFQUFBOztBQWxCNUM7TUFvQk0sYUFBYSxFQUFBOztBQUluQjtFQUNFLGVBQWU7RUFDZixjQUFjO0VBQ2QsYUFBYTtFQUNiLGtCQUFrQixFQUFBOztBQUVwQjtFQUNFLGdDQUEyQyxFQUFBOztBQUMzQztJQUNFLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixlQUFlLEVBQUE7O0FBRWpCO0lBQ0UsNEJBQTRCO0lBQzVCLG1CQUFrQztJQUNsQyxrQkFBa0IsRUFBQTs7QUFIbkI7TUFLRyxZQUFZO01BQ1osbUJBQW1CO01BQ25CLHVCQUFvQztNQUNwQyxhQUFhO01BQ2IsbUJBQW1CO01BQ25CLDhCQUE4QjtNQUM5QixpQkFBaUI7TUFDakIseUJBQW9DO01BQ3BDLGdCQUFnQixFQUFBOztBQWJuQjtRQWVLLGFBQWE7UUFDYixtQkFBbUI7UUFDbkIsZUFBZSxFQUFBOztBQWpCcEI7UUFvQksseUJBQXdDLEVBQUE7O0FBcEI3QztVQXNCTyxhQUFhLEVBQUE7O0FBdEJwQjtRQTBCSyxnQ0FBMkMsRUFBQTs7QUFLbkQ7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLHFCQUFxQixFQUFBOztBQUV2QjtFQUNFLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsWUFBWTtFQUNaLG9CQUFvQjtFQUNwQixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIseUJBQXlCO0VBQ3pCLGVBQWU7RUFDZixZQUFZLEVBQUE7O0FBRWQ7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLGFBQWE7RUFDYixZQUFZLEVBQUE7O0FBQ1o7SUFDRSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixlQUFlLEVBQUE7O0FBRWpCO0lBQ0UsV0FBVztJQUNYLGVBQWUsRUFBQTs7QUFFakI7SUFDRSw2QkFBNkI7SUFDN0IsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixlQUFlLEVBQUE7O0FDeE9uQjtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixnQkFBZ0IsRUFBQTs7QUFFbEI7RUFDRSxhQUFhLEVBQUE7O0FBRWY7RUFDRSxtQkFBbUIsRUFBQTs7QUFFckI7RUFDRSxtQkFBbUI7RUFDbkIsbUJBQW1CLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tYWluL2NvbnRlbnQtbWFuYWdlbWVudC9saW5rLWFydGljbGUvbGluay1hcnRpY2xlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnQtd3JhcCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtIDIzNHB4KTtcbn1cbi5oZWFkIHtcbiAgaGVpZ2h0OiA3NnB4O1xuICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0MiwgMjQyLCAyNDIsIDEpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nLWxlZnQ6IDkwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDUwcHg7XG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XG59XG4ubGFibGUtZHJiIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDVweDtcbiAgbGVmdDogNXB4O1xuICBmb250LXNpemU6IDExcHg7XG4gIGNvbG9yOiAjMWUxZTFlO1xufVxuLmlucHV0LXNlYXJjaCB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDUzM3B4O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgaW5wdXQge1xuICAgIGhlaWdodDogNDhweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuLnNpZGUtaGVhZCB7XG4gIGhlaWdodDogMzdweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMjgsIDIyOCwgMjI4LCAxKTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nOiAwIDE1cHg7XG59XG4uYm9keS1zaWRlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci1jb2xvcjogcmdiYSgyMTUsIDIxNSwgMjE1LCAxKTtcbiAgbWluLWhlaWdodDogMTAwJTtcbn1cbi5ib2R5LXNpZGUtc2Nyb2xsIHtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgbWF4LWhlaWdodDogNDAwcHg7XG59XG4uYXJyb3ctcmlnaHQge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpO1xufVxuLmZvbGRlci1zaWRlIHtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICBtaW4td2lkdGg6IGZpdC1jb250ZW50O1xuICB3aWR0aDogMjI1cHg7XG59XG4uYXJ0aWNsZXMtc2lkZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59XG4uYXJ0aWNsZS1zaWRlIHtcbiAgd2lkdGg6IDUwJTtcbiAgbWF4LXdpZHRoOiA1NTBweDtcbiAgbWluLXdpZHRoOiA0MjBweDtcbn1cbi5yb3RhdGUtMTgwIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbn1cbi5yb3RhdGUtMjcwe1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgyNzBkZWcpO1xufVxuLnJvdGF0ZS0tOTAge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpO1xufVxuLmFydGljbGVzLXJvdyB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDIxNSwgMjE1LCAyMTUsIDEpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuICBtaW4taGVpZ2h0OiA0NnB4O1xuICAuaWNvbnMge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuICAmOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDIyMywgMjQ1LCAyNDksIDEpO1xuICAgIC5pY29ucyB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgIH1cbiAgfVxufVxuLnRhZ3Mtd3JhcCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgcGFkZGluZzogNXB4IDE1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQyLCAyNDIsIDI0MiwgMSk7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJvcmRlci13aWR0aDogMXB4O1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItY29sb3I6IHJnYmEoMjE1LCAyMTUsIDIxNSwgMSk7XG59XG4uYWRkLXRhZyB7XG4gIGhlaWdodDogMjdweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgbWFyZ2luLXRvcDogNnB4O1xuICB3aWR0aDogMTIwcHg7XG59XG4udGl0bGUtcm93IHtcbiAgaGVpZ2h0OiA0NXB4O1xuICBib3JkZXItd2lkdGg6IDFweDtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLWNvbG9yOiByZ2IoMjE1LCAyMTUsIDIxNSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogI2YyZjJmMjtcbiAgcGFkZGluZzogMTBweCAyMHB4O1xufVxuLnNlYXJjaC1yb3cge1xuICBwYWRkaW5nOiAyMHB4IDIwcHggMTBweCAyMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmb250LXNpemU6IDEycHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiKDIxNSwgMjE1LCAyMTUpO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIC5kZXNjcmlwdGlvbiB7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBjb2xvcjogIzk5OTk5OTtcbiAgfVxuICAuZGVsZXRlLWljb24ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDIwcHg7XG4gIH1cbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMjMsIDI0NSwgMjQ5LCAxKTtcbiAgICAuZGVsZXRlLWljb24ge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICB9XG4gIH1cbn1cbi5zdGljay1yb3cge1xuICBmb250LXNpemU6IDExcHg7XG4gIGNvbG9yOiAjMDE4MTkxO1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG4ucXVlc3Rpb24tcm93IHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYigyMTUsIDIxNSwgMjE1KTtcbiAgJi1oZWFkIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWluLWhlaWdodDogNDBweDtcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbiAgJi1ib2R5IHtcbiAgICBwYWRkaW5nOiAyMHB4IDQwcHggMjBweCA0MHB4O1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjQyLCAyNDIsIDI0MiwgMSk7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIC5xdWVzdGlvbi1pdGVtIHtcbiAgICAgIGhlaWdodDogNTVweDtcbiAgICAgIGJhY2tncm91bmQ6IGluaGVyaXQ7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgIHBhZGRpbmc6IDVweCAyMHB4O1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDIxNSwgMjE1LCAyMTUpO1xuICAgICAgYm9yZGVyLWJvdHRvbTogMDtcbiAgICAgIC50cmFzaC1pY29uIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgfVxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjIzLCAyNDUsIDI0OSwgMSk7XG4gICAgICAgIC50cmFzaC1pY29uIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiKDIxNSwgMjE1LCAyMTUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuLmljb24taW5wdXQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiA5cHg7XG4gIHRvcDogY2FsYyg1MCUgLSAxMHB4KTtcbn1cbi5uaXRpZi1jaXJjbGUge1xuICBiYWNrZ3JvdW5kOiAjZmY2NjAwO1xuICB3aWR0aDogMTZweDtcbiAgaGVpZ2h0OiAxNnB4O1xuICBib3JkZXItcmFkaXVzOiAxMDBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZWI5OGM7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgY29sb3I6IHdoaXRlO1xufVxuLnNlcmNoLXJlc3VsdC1kcm9wZGF3biB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNhNmE2YTY7XG4gIGJvcmRlci10b3A6IDA7XG4gIHotaW5kZXg6IDExMTtcbiAgJi0taXRlbSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDlweCAxMHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuICAmLS1pY29uLXdyYXAge1xuICAgIHdpZHRoOiAyNXB4O1xuICAgIG1pbi13aWR0aDogMjVweDtcbiAgfVxuICAmLS1mb290IHtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2E2YTZhNjtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbn1cbiIsIkBpbXBvcnQgXCIuLi9jb250ZW50LW1hbmFnZW1lbnQuY29tcG9uZW50LnNjc3NcIjtcblxuLnRpdGxlLW1vZGFsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogI2YyZjJmMjtcbiAgcGFkZGluZzogMCAyMHB4O1xuICBtaW4taGVpZ2h0OiA3MHB4O1xufVxuLmNvbnRlbnQtbW9kYWwge1xuICBwYWRkaW5nOiAyMHB4O1xufVxuLmNvbnRlbnQtd3JhcCB7XG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XG59XG4uc2VhcmNoLXdyYXAge1xuICBwYWRkaW5nLWxlZnQ6IDI0NXB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuIl19 */"

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

/***/ "./src/app/main/widget-chat/widget-chat.component.html":
/*!*************************************************************!*\
  !*** ./src/app/main/widget-chat/widget-chat.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"test-page\">\n\n  <div *ngIf=\"!openWidget\" (click)=\"openWidget = true\" class=\"q-a_chat-window\">\n    <div class=\"q-a_chat__icon\">\n      <img src=\"assets/img/icon.png\" alt=\"\">\n    </div>\n    <p>Ask Mike</p>\n  </div>\n\n  <div *ngIf=\"openWidget\" class=\"widget-wrap-outer\">\n    <!--q-a_window__default-->\n\n    <div class=\"q-a_window__default\">\n      <div class=\"window-wrap\">\n        <div class=\"q-a_head\">\n          <div class=\"ask-window-icon\">\n            <img src=\"/assets/img/icon.png\" alt=\"\">\n          </div>\n          <p>Ask Mike</p>\n        </div>\n        <div (click)=\"openWidget = false\" class=\"close-cross\" id=\"close\">\n          <img src=\"/assets/img/close.png\" alt=\"\">\n        </div>\n      </div>\n\n      <div class=\"q-a__main\">\n        <div class=\"q-a_help_field\">\n          <div class=\"img_wrap\">\n            <img src=\"/assets/img/icon.png\" alt=\"\">\n          </div>\n          <div class=\"dialog-field\">\n            <p><span>Hi, this is Mike. How can I help you?</span></p>\n          </div>\n        </div>\n        <div class=\"your-question_input\">\n          <input type=\"text\" (focus)=\"search = true\" (blur)=\"search = false\" id=\"question\" name=\"\" placeholder=\"Ask your question...\">\n        </div>\n\n        <div *ngIf=\"!search\" class=\"main_other-questions\">\n          <p><span class=\"ul-header\">Other people asked:</span></p>\n          <ul>\n            <li><span>Which iPhone, iPad, and iPod touch models support iOS 12?</span></li>\n            <li><span>How do I use the 3D touch?</span></li>\n            <li><span>How much internal storage does each iPhone model have?</span></li>\n            <li>\n              <span>How fast are the iPhone XS, iPhone XS Max, and How iPhone XR models compared to one another?</span>\n            </li>\n            <li><span>What is Nano SIM?</span></li>\n          </ul>\n        </div>\n\n        <div *ngIf=\"search\" class=\"main_other-questions while-type\">\n          <p><span class=\"ul-header\">Did you mean...</span></p>\n          <ul>\n            <li><span>How do I use the 3D touch?</span></li>\n            <li><span>How can I upgrade my iPhone?</span></li>\n            <li>\n              <span>How fast are the iPhone XS, iPhone XS Max, and How iPhone XR models compared to\n                one\n                another?</span>\n            </li>\n            <li><span>How much internal storage does each iPhone model have?</span></li>\n            <li><span>How can I replace the SIM card in my iPhone?</span></li>\n          </ul>\n        </div>\n\n        <a href=\"#\" class=\"ref-info\">\n          <p><span class=\"questions\">See more questions...</span></p>\n        </a>\n\n        <div *ngIf=\"search\" class=\"offer_window\">\n          <div class=\"offer_picture\">\n            <img src=\"assets/img/iphone.png\" alt=\"iphone\">\n          </div>\n          <div class=\"info_section\">\n            <div class=\"offer_info\">\n              <p><span class=\"bold\">iPhone &#8553;</span></p>\n              <p><span>$876</span></p>\n            </div>\n            <div class=\"offer_buttons\">\n              <a href=\"#\" class=\"more_info\">More info</a>\n              <button class=\"btn\">Buy Now</button>\n            </div>\n          </div>\n        </div>\n        <div class=\"footer-logo\">\n          <p><span>Powered by</span></p>\n          <img src=\"/assets/img/footer-logo.png\" alt=\"\">\n        </div>\n      </div>\n    </div>\n\n\n\n\n    <!--q-a_window__while-typing-->\n\n    <!-- <div class=\"q-a_window__default\">\n            <div class=\"window-wrap\">\n                <div class=\"q-a_head\">\n                    <div class=\"ask-window-icon\">\n                        <img src=\"/assets/img/icon.png\" alt=\"\">\n                    </div>\n                    <p>Ask Mike</p>\n                </div>\n                <div class=\"close-cross\" id=\"close\">\n                    <img src=\"/assets/img/close.png\" alt=\"\">\n                </div>\n            </div>\n      \n            <div class=\"q-a__main\">\n                <div class=\"q-a_help_field\">\n                    <div class=\"img_wrap\">\n                        <img src=\"/assets/img/icon.png\" alt=\"\">\n                    </div>\n                    <div class=\"dialog-field\">\n                        <p><span>Hi, this is Mike. How can I help you?</span></p>\n                    </div>\n                </div>\n                <div class=\"your-question_input\">\n                    <input type=\"text\" id=\"question\" name=\"\" placeholder=\"Ask your question...\">\n                </div>\n                \n      \n                \n                <div class=\"footer-logo\">\n                    <p><span>Powered by</span></p>\n                    <img src=\"/assets/img/footer-logo.png\" alt=\"\">\n                </div>\n            </div>\n        </div> -->\n\n\n\n\n\n    <!--no-answer-->\n\n    <!-- <div class=\"q-a_window__default\">\n            <div class=\"window-wrap\">\n                <div class=\"q-a_head\">\n                    <div class=\"ask-window-icon\">\n                        <img src=\"/assets/img/icon.png\" alt=\"\">\n                    </div>\n                    <p>Ask Mike</p>\n                </div>\n                <div class=\"close-cross\" id=\"close\">\n                    <img src=\"/assets/img/close.png\" alt=\"\">\n                </div>\n            </div>\n      \n            <div class=\"q-a__main\">\n                <div class=\"q-a_help_field\">\n                    <div class=\"img_wrap\">\n                        <img src=\"/assets/img/icon.png\" alt=\"\">\n                    </div>\n                    <div class=\"dialog-field\">\n                        <p><span>Hi, this is Mike. How can I help you?</span></p>\n                    </div>\n                </div>\n                <div class=\"your-question_input\">\n                    <input type=\"text\" id=\"question\" name=\"\" placeholder=\"Ask your question...\">\n                </div>\n                <div class=\"q-a_help_field reply\">\n                    <div class=\"img_wrap\">\n                        <img src=\"/assets/img/icon.png\" alt=\"\">\n                    </div>\n                    <div class=\"dialog-field\">\n                        <p><span>Sorry, I don't know how to answer this. Would you like me to check and get back to\n                                you with an answer? </span></p>\n                    </div>\n                </div>\n                <div class=\"y-n_buttons\">\n                    <button class=\"button\">Yes</button>\n                    <button class=\"button\">No</button>\n                </div> -->\n\n    <!--Yes answer-->\n\n    <!-- <div class=\"q-a_help_field yes-answer\">\n                    <div class=\"img_wrap\">\n                        <img src=\"/assets/img/icon.png\" alt=\"\">\n                    </div>\n                    <div class=\"dialog-field\">\n                        <p><span>What is your email address?</span></p>\n                    </div>\n                </div>\n                <div class=\"your-question_input\">\n                    <input type=\"text\" id=\"\" name=\"\" placeholder=\"Your email...\">\n                </div>\n                <div class=\"q-a_help_field reply\">\n                    <div class=\"img_wrap\">\n                        <img src=\"/assets/img/icon.png\" alt=\"\">\n                    </div>\n                    <div class=\"dialog-field\">\n                        <p><span>Thanks, we'll get back to you shortly.</span></p>\n                    </div>\n                </div> -->\n\n\n    <!--No answer-->\n\n    <!-- <div class=\"q-a_help_field yes-answer\">\n                    <div class=\"img_wrap\">\n                        <img src=\"/assets/img/icon.png\" alt=\"\">\n                    </div>\n                    <div class=\"dialog-field\">\n                        <p><span>OK. You may try to rephrase your question.</span></p>\n                    </div>\n                </div>\n                <div class=\"your-question_input\">\n                    <input type=\"text\" id=\"\" name=\"\" placeholder=\"Ask your question...\">\n                </div>\n      \n      \n                <div class=\"footer-logo\">\n                    <p><span>Powered by</span></p>\n                    <img src=\"/assets/img/footer-logo.png\" alt=\"\">\n                </div>\n            </div>\n        </div> -->\n\n\n\n    <!--User clicked on a question-->\n\n    <!-- <div class=\"q-a_window__default\">\n            <div class=\"window-wrap\">\n                <div class=\"q-a_head\">\n                    <div class=\"ask-window-icon\">\n                        <img src=\"/assets/img/icon.png\" alt=\"\">\n                    </div>\n                    <p>Ask Mike</p>\n                </div>\n                <div class=\"close-cross\" id=\"close\">\n                    <img src=\"/assets/img/close.png\" alt=\"\">\n                </div>\n            </div>\n      \n            <div class=\"q-a__main clicked\">\n                <div class=\"main_3d-touch-description\">\n                    <p><span class=\"touch\">How do I disable the 3D touch?</span></p>\n                    <p class=\"d_touch_text\"><span>3D Touch is a new feature found in iOS 9 on the iPhone 6s and\n                            iPhone 6s Plus. It uses Apple's Taptic Engine and pressure sensors to sense the amount\n                            of pressure you apply to your display.</span></p>\n                    <p class=\"d_touch_text\"><span>You can fine-tune the amount of pressure it takes to perform a\n                            \"peek and pop\" transition by navigating to Settings &gt; General &gt; Accessibility\n                            &gt; 3D Touch.</span></p>\n                    <div class=\"touch_picture\">\n                        <div class=\"play\">\n                            <img src=\"img/play.png\" alt=\"play\">\n                        </div>\n                    </div>\n                    <p><span class=\"touch\">Did you get your answer?</span></p>\n                </div>\n                <div class=\"y-n_buttons\">\n                    <button class=\"button\">Yes</button>\n                    <button class=\"button\">No</button>\n                </div>\n                <div class=\"back-btn\">\n                    <button class=\"back-button\">Back</button>\n                </div>\n                <div class=\"footer-logo\">\n                    <p><span>Powered by</span></p>\n                    <img src=\"/assets/img/footer-logo.png\" alt=\"\">\n                </div>\n            </div>\n        </div> -->\n\n\n\n\n    <!--answer_not_helpful-->\n\n    <!-- <div class=\"q-a_window__default\">\n          <div class=\"window-wrap\">\n            <div class=\"q-a_head\">\n              <div class=\"ask-window-icon\">\n                <img src=\"/assets/img/icon.png\" alt=\"\">\n              </div>\n              <p>Ask Mike</p>\n            </div>\n            <div class=\"close-cross\" id=\"close\">\n              <img src=\"/assets/img/close.png\" alt=\"\">\n            </div>\n          </div>\n      \n          <div class=\"q-a__main\">\n            <div class=\"q-a_help_field\">\n              <div class=\"img_wrap\">\n                <img src=\"/assets/img/icon.png\" alt=\"\">\n              </div>\n              <div class=\"dialog-field\">\n                <span>Sorry it wasn't helpful. Please let us know what information is missing.</span>\n              </div>\n            </div>\n            <div class=\"your-question_input\">\n              <input type=\"text\" id=\"question\" name=\"\" placeholder=\"Ask your question...\">\n            </div>\n            <div class=\"q-a_help_field reply\">\n              <div class=\"img_wrap\">\n                <img src=\"/assets/img/icon.png\" alt=\"\">\n              </div>\n              <div class=\"dialog-field\">\n                <p>\n                  <span>Thanks for your feedback. Would you like me to get back to you with a better answer ?\n                  </span>\n                </p>\n              </div>\n            </div>\n            <div class=\"y-n_buttons\">\n              <button class=\"button\">Yes</button>\n              <button class=\"button\">No</button>\n            </div>\n       -->\n\n\n    <!--Yes answer-->\n\n    <!-- <div class=\"q-a_help_field yes-answer\">\n              <div class=\"img_wrap\">\n                <img src=\"/assets/img/icon.png\" alt=\"\">\n              </div>\n              <div class=\"dialog-field\">\n                <p><span>What is your email address?</span></p>\n              </div>\n            </div>\n            <div class=\"your-question_input\">\n              <input type=\"text\" id=\"\" name=\"\" placeholder=\"Your email...\">\n            </div>\n            <div class=\"q-a_help_field reply\">\n              <div class=\"img_wrap\">\n                <img src=\"/assets/img/icon.png\" alt=\"\">\n              </div>\n              <div class=\"dialog-field\">\n                <p><span>Thanks, we'll get back to you shortly.</span></p>\n              </div>\n            </div> -->\n\n\n\n    <!--No answer-->\n\n    <!--<div class=\"q-a_help_field yes-answer\">-->\n    <!--<div class=\"img_wrap\">-->\n    <!--<img src=\"/assets/img/icon.png\" alt=\"\">-->\n    <!--</div>-->\n    <!--<div class=\"dialog-field\">-->\n    <!--<p><span>OK. You may ask another question.</span></p>-->\n    <!--</div>-->\n    <!--</div>-->\n    <!--<div class=\"your-question_input\">-->\n    <!--<input type=\"text\" id=\"\" name=\"\" placeholder=\"Ask your question...\">-->\n    <!--</div>-->\n\n\n\n    <!-- <div class=\"footer-logo\">\n              <p><span>Powered by</span></p>\n              <img src=\"/assets/img/footer-logo.png\" alt=\"\">\n            </div>\n          </div>\n        </div> -->\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/main/widget-chat/widget-chat.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/main/widget-chat/widget-chat.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n.test-page {\n  background-image: url(\"/assets/img/test-page-view.png\");\n  background-size: 100% 100%;\n  min-width: 100vw;\n  min-height: 100vh;\n  position: relative;\n  overflow-y: auto;\n  padding-bottom: 20px; }\n/*==============Спецификации===========*/\n/*==============Спецификации===========*/\n* {\n  padding: 0;\n  margin: 0; }\na {\n  text-decoration: none; }\nli {\n  list-style-type: none; }\nbody {\n  font-family: \"Arial\", sans-serif; }\n/*=============.q-a_chat-window============*/\n.q-a_chat-window {\n  display: flex;\n  position: absolute;\n  width: 195px;\n  height: 51px;\n  background-color: #018191;\n  align-items: center;\n  cursor: pointer;\n  bottom: 27px;\n  right: 51px;\n  font-weight: 400;\n  font-size: 18px;\n  color: #ffffff; }\n.q-a_chat__icon {\n  display: flex;\n  width: 39px;\n  height: 39px;\n  background: #f2f2f2;\n  border-radius: 50%;\n  justify-content: center;\n  margin: 0 12px 0 10px;\n  overflow: hidden;\n  align-items: center; }\n.q-a_chat__icon img {\n  width: 90%; }\n.widget-wrap-outer {\n  position: absolute;\n  top: 27px;\n  right: 51px; }\n.content-wrap {\n  position: relative;\n  padding: 44px;\n  width: 100vw;\n  height: 100vh;\n  box-sizing: border-box; }\n/*===========.q-a_window__default===========*/\n.q-a_window__default {\n  width: 374px;\n  min-height: 534px;\n  border: 1px solid #cccccc; }\n.window-wrap {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background-color: #018191; }\n.q-a_head {\n  font-size: 18px;\n  color: #ffffff;\n  display: flex;\n  height: 51px;\n  align-items: center; }\n.ask-window-icon {\n  display: flex;\n  width: 39px;\n  height: 39px;\n  background: #f2f2f2;\n  border-radius: 50%;\n  justify-content: center;\n  margin: 0 12px 0 10px;\n  overflow: hidden;\n  align-items: center; }\n.ask-window-icon img {\n  width: 90%; }\n.close-cross {\n  margin-right: 21px;\n  width: 24px;\n  cursor: pointer; }\n.close-cross img {\n  display: block;\n  width: inherit; }\n/*==========================*/\n.img_wrap {\n  width: 29px;\n  height: 29px;\n  border-radius: 50%;\n  background: #f2f2f2; }\n.img_wrap img {\n  display: block;\n  width: 26px;\n  margin: 0 auto; }\n.q-a_help_field {\n  display: flex; }\n.q-a__main {\n  padding: 21px 13px 35px 13px;\n  background: white; }\n.dialog-field {\n  position: relative;\n  align-items: center;\n  width: 249px;\n  min-height: 22px;\n  background: #d9fff8;\n  border: 1px solid #999999;\n  border-radius: 4px;\n  margin-left: 12px;\n  padding: 10px; }\n.dialog-field::before {\n  content: \"\";\n  position: absolute;\n  top: 9px;\n  left: -11px;\n  width: 12px;\n  height: 9px;\n  background: url(/assets/img/rect-left.png); }\n.dialog-field {\n  font-weight: 400;\n  font-style: normal;\n  font-size: 13px;\n  color: #333333; }\n.your-question_input {\n  position: relative;\n  width: 315px;\n  min-height: 42px;\n  border: 1px solid #999999;\n  border-radius: 4px;\n  margin: 21px auto 0 auto; }\n.your-question_input input[type=\"text\"] {\n  color: #000000;\n  width: calc(100% - 20px); }\n.your-question_input::after {\n  content: \"\";\n  position: absolute;\n  top: 12px;\n  right: -11px;\n  width: 11px;\n  height: 9px;\n  background: url(/assets/img/rect-right.png); }\n.your-question_input input {\n  font-size: 13px;\n  font-weight: 400;\n  color: #999999;\n  line-height: 3;\n  margin-left: 14px;\n  width: 70%;\n  border: transparent;\n  outline: none; }\n.main_other-questions {\n  padding: 39px 12px 0 12px; }\n.main_other-questions {\n  font-weight: 700;\n  font-style: normal;\n  font-size: 12px;\n  color: #000000; }\n.ul-header,\n.questions {\n  margin-left: 7px; }\n.main_other-questions li span {\n  font-size: 12px;\n  font-weight: 400;\n  font-style: normal;\n  color: #333333; }\n.main_other-questions li {\n  margin-bottom: 16px; }\n.main_other-questions li:first-of-type {\n  margin-top: 21px; }\n.main_other-questions li:last-of-type {\n  margin-bottom: 25px; }\n.main_other-questions li:before {\n  content: \"\";\n  display: block;\n  width: 30px;\n  height: 20px;\n  background: url(/assets/img/arrow-right.png) center no-repeat;\n  margin-top: -4px;\n  float: left; }\n.ref-info {\n  font-size: 12px;\n  color: #018191;\n  font-weight: 400; }\n.footer-logo {\n  position: absolute;\n  display: flex;\n  align-items: center;\n  right: 13px;\n  bottom: 9px; }\n.footer-logo {\n  font-size: 12px;\n  color: #999999; }\n.footer-logo img {\n  width: 79px;\n  height: 18px;\n  margin-left: 3px; }\n/*q-a_window__while-typing*/\n.while-type {\n  padding-top: 20px; }\n.offer_window {\n  display: flex;\n  align-items: center;\n  width: 336px;\n  height: 143px;\n  background-color: white;\n  box-sizing: border-box;\n  border: 1px solid #cccccc;\n  box-shadow: 3px 3px 3px rgba(153, 153, 153, 0.34902);\n  margin: 25px auto;\n  padding: 10px 6px; }\n.offer_picture img {\n  width: 73px;\n  height: 125px; }\n.offer_info {\n  max-width: 240px;\n  color: #333333;\n  line-height: 1.7;\n  height: 80px;\n  padding-left: 30px; }\n.info_section {\n  height: 100%; }\n.offer_buttons {\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n  width: 240px; }\n.more_info {\n  font-size: 12px;\n  color: #018191; }\n.btn {\n  font-size: 13px;\n  color: #018191;\n  background-color: transparent;\n  border: 1px solid #018191;\n  width: 103px;\n  height: 30px;\n  cursor: pointer; }\n.btn:focus {\n  outline: none; }\n.bold {\n  font-weight: 700;\n  font-size: 16px; }\n/*============.no-answer===============*/\n.reply {\n  margin-top: 24px; }\n.y-n_buttons {\n  display: flex;\n  justify-content: space-between;\n  width: 145px;\n  margin: 22px auto; }\n.button {\n  width: 61px;\n  height: 34px;\n  background-color: white;\n  border: 1px solid #777777;\n  cursor: pointer;\n  transition: 0.5s; }\n.button:hover {\n  background-color: #018191;\n  transition: 0.5s;\n  color: #ffffff; }\n.button:focus {\n  outline: none; }\n/*user-clicked-question*/\n.clicked {\n  padding: 25px 13px 8px 13px; }\n.main_3d-touch-description {\n  padding: 0 12px 0 12px; }\n.main_3d-touch-description {\n  font-weight: 700;\n  font-style: normal;\n  font-size: 13px;\n  color: #000000; }\n.d_touch_text {\n  font-size: 12px;\n  line-height: 20px;\n  font-weight: 400;\n  color: #333333; }\n.touch {\n  font-size: 13px;\n  font-weight: bold;\n  display: block;\n  margin-bottom: 20px; }\n.touch_picture {\n  display: flex;\n  align-items: center;\n  background: url(/assets/img/treedtouch.png) center no-repeat;\n  width: 275px;\n  height: 158px;\n  margin: 25px auto; }\n.play {\n  width: 55px;\n  height: 55px;\n  border-radius: 50%;\n  margin: 0 auto;\n  background: rgba(254, 255, 243, 0.9); }\n.play img {\n  margin: 11px 21px; }\n.back-btn:before {\n  content: \"\";\n  display: block;\n  width: 30px;\n  height: 20px;\n  background: url(/assets/img/arrow-left.png) center no-repeat;\n  float: left; }\n.back-btn button {\n  font-size: 13px;\n  font-weight: bold;\n  color: #333333;\n  cursor: pointer; }\n.back-btn button:focus {\n  outline: none; }\n.back-button {\n  border: none;\n  background: transparent; }\n.back-btn {\n  cursor: pointer;\n  width: 70px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi93aWRnZXQtY2hhdC93aWRnZXQtY2hhdC5jb21wb25lbnQuc2NzcyIsIi9ob21lL3NodW1pay9Eb2N1bWVudHMva21zLXNwb3Qvc3JjL2FwcC9tYWluL3dpZGdldC1jaGF0L3dpZGdldC1jaGF0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQjtFQUNFLHVEQUF1RDtFQUN2RCwwQkFBMEI7RUFDMUIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLG9CQUFvQixFQUFBO0FBRXRCLHdDQUFBO0FBRUEsd0NBQUE7QUFDQTtFQUNFLFVBQVU7RUFDVixTQUFTLEVBQUE7QUFFWDtFQUNFLHFCQUFxQixFQUFBO0FBRXZCO0VBQ0UscUJBQXFCLEVBQUE7QUFFdkI7RUFDRSxnQ0FBZ0MsRUFBQTtBQUVsQyw0Q0FBQTtBQUNBO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osWUFBWTtFQUNaLHlCQUFzQztFQUN0QyxtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLFlBQVk7RUFDWixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixjQUFjLEVBQUE7QUFFaEI7RUFDRSxhQUFhO0VBQ2IsV0FBVztFQUNYLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QixxQkFBcUI7RUFDckIsZ0JBQWdCO0VBQ2hCLG1CQUFtQixFQUFBO0FBRXJCO0VBQ0UsVUFBVSxFQUFBO0FBRVo7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFdBQVcsRUFBQTtBQUViO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixZQUFZO0VBQ1osYUFBYTtFQUNiLHNCQUFzQixFQUFBO0FBRXhCLDZDQUFBO0FBQ0E7RUFDRSxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLHlCQUFvQyxFQUFBO0FBRXRDO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIseUJBQXNDLEVBQUE7QUFFeEM7RUFDRSxlQUFlO0VBQ2YsY0FBYztFQUNkLGFBQWE7RUFDYixZQUFZO0VBQ1osbUJBQW1CLEVBQUE7QUFFckI7RUFDRSxhQUFhO0VBQ2IsV0FBVztFQUNYLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QixxQkFBcUI7RUFDckIsZ0JBQWdCO0VBQ2hCLG1CQUFtQixFQUFBO0FBRXJCO0VBQ0UsVUFBVSxFQUFBO0FBRVo7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGVBQWUsRUFBQTtBQUVqQjtFQUNFLGNBQWM7RUFDZCxjQUFjLEVBQUE7QUFHaEIsNkJBQUE7QUFDQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLG1CQUFtQixFQUFBO0FBRXJCO0VBQ0UsY0FBYztFQUNkLFdBQVc7RUFDWCxjQUFjLEVBQUE7QUFFaEI7RUFDRSxhQUFhLEVBQUE7QUFFZjtFQUNFLDRCQUE0QjtFQUM1QixpQkFBaUIsRUFBQTtBQUVuQjtFQUNFLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixtQkFBOEI7RUFDOUIseUJBQW9DO0VBQ3BDLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsYUFBYSxFQUFBO0FBRWY7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixXQUFXO0VBQ1gsV0FBVztFQUNYLFdBQVc7RUFDWCwwQ0FBMEMsRUFBQTtBQUU1QztFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGNBQXNCLEVBQUE7QUFFeEI7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQix5QkFBb0M7RUFDcEMsa0JBQWtCO0VBQ2xCLHdCQUF3QixFQUFBO0FBRTFCO0VBQ0UsY0FBYztFQUNkLHdCQUF3QixFQUFBO0FBRTFCO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsWUFBWTtFQUNaLFdBQVc7RUFDWCxXQUFXO0VBQ1gsMkNBQTJDLEVBQUE7QUFFN0M7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGNBQXlCO0VBQ3pCLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsVUFBVTtFQUNWLG1CQUFtQjtFQUNuQixhQUFhLEVBQUE7QUFFZjtFQUNFLHlCQUF5QixFQUFBO0FBRTNCO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsY0FBYyxFQUFBO0FBRWhCOztFQUVFLGdCQUFnQixFQUFBO0FBRWxCO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsY0FBYyxFQUFBO0FBRWhCO0VBQ0UsbUJBQW1CLEVBQUE7QUFFckI7RUFDRSxnQkFBZ0IsRUFBQTtBQUVsQjtFQUNFLG1CQUFtQixFQUFBO0FBRXJCO0VBQ0UsV0FBVztFQUNYLGNBQWM7RUFDZCxXQUFXO0VBQ1gsWUFBWTtFQUNaLDZEQUE2RDtFQUM3RCxnQkFBZ0I7RUFDaEIsV0FBVyxFQUFBO0FBRWI7RUFDRSxlQUFlO0VBQ2YsY0FBYztFQUNkLGdCQUFnQixFQUFBO0FBR2xCO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLFdBQVcsRUFBQTtBQUViO0VBQ0UsZUFBZTtFQUNmLGNBQWMsRUFBQTtBQUVoQjtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osZ0JBQWdCLEVBQUE7QUFHbEIsMkJBQUE7QUFDQTtFQUNFLGlCQUFpQixFQUFBO0FBR25CO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osYUFBYTtFQUNiLHVCQUF3QztFQUN4QyxzQkFBc0I7RUFDdEIseUJBQXdDO0VBQ3hDLG9EQUE4RDtFQUM5RCxpQkFBaUI7RUFDakIsaUJBQWlCLEVBQUE7QUFFbkI7RUFDRSxXQUFXO0VBQ1gsYUFBYSxFQUFBO0FBRWY7RUFDRSxnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osa0JBQWtCLEVBQUE7QUFFcEI7RUFDRSxZQUFZLEVBQUE7QUFFZDtFQUNFLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0IsbUJBQW1CO0VBQ25CLFlBQVksRUFBQTtBQUVkO0VBQ0UsZUFBZTtFQUNmLGNBQWMsRUFBQTtBQUVoQjtFQUNFLGVBQWU7RUFDZixjQUFjO0VBQ2QsNkJBQTZCO0VBQzdCLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osWUFBWTtFQUNaLGVBQWUsRUFBQTtBQUVqQjtFQUNFLGFBQWEsRUFBQTtBQUVmO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWUsRUFBQTtBQUdqQix3Q0FBQTtBQUNBO0VBQ0UsZ0JBQWdCLEVBQUE7QUFFbEI7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLFlBQVk7RUFDWixpQkFBaUIsRUFBQTtBQUVuQjtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osdUJBQXdDO0VBQ3hDLHlCQUF3QztFQUN4QyxlQUFlO0VBQ2YsZ0JBQWdCLEVBQUE7QUFFbEI7RUFDRSx5QkFBc0M7RUFDdEMsZ0JBQWdCO0VBQ2hCLGNBQWMsRUFBQTtBQUVoQjtFQUNFLGFBQWEsRUFBQTtBQUdmLHdCQUFBO0FBRUE7RUFDRSwyQkFBMkIsRUFBQTtBQUU3QjtFQUNFLHNCQUFzQixFQUFBO0FBR3hCO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsY0FBYyxFQUFBO0FBRWhCO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsY0FBYyxFQUFBO0FBRWhCO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsbUJBQW1CLEVBQUE7QUFFckI7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDREQUE0RDtFQUM1RCxZQUFZO0VBQ1osYUFBYTtFQUNiLGlCQUFpQixFQUFBO0FBRW5CO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLG9DQUFvQyxFQUFBO0FBRXRDO0VBQ0UsaUJBQWlCLEVBQUE7QUFHbkI7RUFDRSxXQUFXO0VBQ1gsY0FBYztFQUNkLFdBQVc7RUFDWCxZQUFZO0VBQ1osNERBQTREO0VBQzVELFdBQVcsRUFBQTtBQUViO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsZUFBZSxFQUFBO0FBRWpCO0VBQ0UsYUFBYSxFQUFBO0FBRWY7RUFDRSxZQUFZO0VBQ1osdUJBQXVCLEVBQUE7QUFFekI7RUFDRSxlQUFlO0VBQ2YsV0FBVyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvbWFpbi93aWRnZXQtY2hhdC93aWRnZXQtY2hhdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi50ZXN0LXBhZ2Uge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2ltZy90ZXN0LXBhZ2Utdmlldy5wbmdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xuICBtaW4td2lkdGg6IDEwMHZ3O1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBwYWRkaW5nLWJvdHRvbTogMjBweDsgfVxuXG4vKj09PT09PT09PT09PT090KHQv9C10YbQuNGE0LjQutCw0YbQuNC4PT09PT09PT09PT0qL1xuLyo9PT09PT09PT09PT09PdCh0L/QtdGG0LjRhNC40LrQsNGG0LjQuD09PT09PT09PT09Ki9cbioge1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7IH1cblxuYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTsgfVxuXG5saSB7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTsgfVxuXG5ib2R5IHtcbiAgZm9udC1mYW1pbHk6IFwiQXJpYWxcIiwgc2Fucy1zZXJpZjsgfVxuXG4vKj09PT09PT09PT09PT0ucS1hX2NoYXQtd2luZG93PT09PT09PT09PT09Ki9cbi5xLWFfY2hhdC13aW5kb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxOTVweDtcbiAgaGVpZ2h0OiA1MXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDE4MTkxO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvdHRvbTogMjdweDtcbiAgcmlnaHQ6IDUxcHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgY29sb3I6ICNmZmZmZmY7IH1cblxuLnEtYV9jaGF0X19pY29uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDM5cHg7XG4gIGhlaWdodDogMzlweDtcbiAgYmFja2dyb3VuZDogI2YyZjJmMjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luOiAwIDEycHggMCAxMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyOyB9XG5cbi5xLWFfY2hhdF9faWNvbiBpbWcge1xuICB3aWR0aDogOTAlOyB9XG5cbi53aWRnZXQtd3JhcC1vdXRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAyN3B4O1xuICByaWdodDogNTFweDsgfVxuXG4uY29udGVudC13cmFwIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiA0NHB4O1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTAwdmg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IH1cblxuLyo9PT09PT09PT09PS5xLWFfd2luZG93X19kZWZhdWx0PT09PT09PT09PT0qL1xuLnEtYV93aW5kb3dfX2RlZmF1bHQge1xuICB3aWR0aDogMzc0cHg7XG4gIG1pbi1oZWlnaHQ6IDUzNHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjY2NjOyB9XG5cbi53aW5kb3ctd3JhcCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAxODE5MTsgfVxuXG4ucS1hX2hlYWQge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IDUxcHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cblxuLmFzay13aW5kb3ctaWNvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAzOXB4O1xuICBoZWlnaHQ6IDM5cHg7XG4gIGJhY2tncm91bmQ6ICNmMmYyZjI7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbjogMCAxMnB4IDAgMTBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxuXG4uYXNrLXdpbmRvdy1pY29uIGltZyB7XG4gIHdpZHRoOiA5MCU7IH1cblxuLmNsb3NlLWNyb3NzIHtcbiAgbWFyZ2luLXJpZ2h0OiAyMXB4O1xuICB3aWR0aDogMjRweDtcbiAgY3Vyc29yOiBwb2ludGVyOyB9XG5cbi5jbG9zZS1jcm9zcyBpbWcge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IGluaGVyaXQ7IH1cblxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PSovXG4uaW1nX3dyYXAge1xuICB3aWR0aDogMjlweDtcbiAgaGVpZ2h0OiAyOXB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQ6ICNmMmYyZjI7IH1cblxuLmltZ193cmFwIGltZyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMjZweDtcbiAgbWFyZ2luOiAwIGF1dG87IH1cblxuLnEtYV9oZWxwX2ZpZWxkIHtcbiAgZGlzcGxheTogZmxleDsgfVxuXG4ucS1hX19tYWluIHtcbiAgcGFkZGluZzogMjFweCAxM3B4IDM1cHggMTNweDtcbiAgYmFja2dyb3VuZDogd2hpdGU7IH1cblxuLmRpYWxvZy1maWVsZCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDI0OXB4O1xuICBtaW4taGVpZ2h0OiAyMnB4O1xuICBiYWNrZ3JvdW5kOiAjZDlmZmY4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjOTk5OTk5O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIG1hcmdpbi1sZWZ0OiAxMnB4O1xuICBwYWRkaW5nOiAxMHB4OyB9XG5cbi5kaWFsb2ctZmllbGQ6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA5cHg7XG4gIGxlZnQ6IC0xMXB4O1xuICB3aWR0aDogMTJweDtcbiAgaGVpZ2h0OiA5cHg7XG4gIGJhY2tncm91bmQ6IHVybCgvYXNzZXRzL2ltZy9yZWN0LWxlZnQucG5nKTsgfVxuXG4uZGlhbG9nLWZpZWxkIHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGNvbG9yOiAjMzMzMzMzOyB9XG5cbi55b3VyLXF1ZXN0aW9uX2lucHV0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMzE1cHg7XG4gIG1pbi1oZWlnaHQ6IDQycHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM5OTk5OTk7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgbWFyZ2luOiAyMXB4IGF1dG8gMCBhdXRvOyB9XG5cbi55b3VyLXF1ZXN0aW9uX2lucHV0IGlucHV0W3R5cGU9XCJ0ZXh0XCJdIHtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAyMHB4KTsgfVxuXG4ueW91ci1xdWVzdGlvbl9pbnB1dDo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTJweDtcbiAgcmlnaHQ6IC0xMXB4O1xuICB3aWR0aDogMTFweDtcbiAgaGVpZ2h0OiA5cHg7XG4gIGJhY2tncm91bmQ6IHVybCgvYXNzZXRzL2ltZy9yZWN0LXJpZ2h0LnBuZyk7IH1cblxuLnlvdXItcXVlc3Rpb25faW5wdXQgaW5wdXQge1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiAjOTk5OTk5O1xuICBsaW5lLWhlaWdodDogMztcbiAgbWFyZ2luLWxlZnQ6IDE0cHg7XG4gIHdpZHRoOiA3MCU7XG4gIGJvcmRlcjogdHJhbnNwYXJlbnQ7XG4gIG91dGxpbmU6IG5vbmU7IH1cblxuLm1haW5fb3RoZXItcXVlc3Rpb25zIHtcbiAgcGFkZGluZzogMzlweCAxMnB4IDAgMTJweDsgfVxuXG4ubWFpbl9vdGhlci1xdWVzdGlvbnMge1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICMwMDAwMDA7IH1cblxuLnVsLWhlYWRlcixcbi5xdWVzdGlvbnMge1xuICBtYXJnaW4tbGVmdDogN3B4OyB9XG5cbi5tYWluX290aGVyLXF1ZXN0aW9ucyBsaSBzcGFuIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGNvbG9yOiAjMzMzMzMzOyB9XG5cbi5tYWluX290aGVyLXF1ZXN0aW9ucyBsaSB7XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7IH1cblxuLm1haW5fb3RoZXItcXVlc3Rpb25zIGxpOmZpcnN0LW9mLXR5cGUge1xuICBtYXJnaW4tdG9wOiAyMXB4OyB9XG5cbi5tYWluX290aGVyLXF1ZXN0aW9ucyBsaTpsYXN0LW9mLXR5cGUge1xuICBtYXJnaW4tYm90dG9tOiAyNXB4OyB9XG5cbi5tYWluX290aGVyLXF1ZXN0aW9ucyBsaTpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgYmFja2dyb3VuZDogdXJsKC9hc3NldHMvaW1nL2Fycm93LXJpZ2h0LnBuZykgY2VudGVyIG5vLXJlcGVhdDtcbiAgbWFyZ2luLXRvcDogLTRweDtcbiAgZmxvYXQ6IGxlZnQ7IH1cblxuLnJlZi1pbmZvIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogIzAxODE5MTtcbiAgZm9udC13ZWlnaHQ6IDQwMDsgfVxuXG4uZm9vdGVyLWxvZ28ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHJpZ2h0OiAxM3B4O1xuICBib3R0b206IDlweDsgfVxuXG4uZm9vdGVyLWxvZ28ge1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjOTk5OTk5OyB9XG5cbi5mb290ZXItbG9nbyBpbWcge1xuICB3aWR0aDogNzlweDtcbiAgaGVpZ2h0OiAxOHB4O1xuICBtYXJnaW4tbGVmdDogM3B4OyB9XG5cbi8qcS1hX3dpbmRvd19fd2hpbGUtdHlwaW5nKi9cbi53aGlsZS10eXBlIHtcbiAgcGFkZGluZy10b3A6IDIwcHg7IH1cblxuLm9mZmVyX3dpbmRvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAzMzZweDtcbiAgaGVpZ2h0OiAxNDNweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2NjY2M7XG4gIGJveC1zaGFkb3c6IDNweCAzcHggM3B4IHJnYmEoMTUzLCAxNTMsIDE1MywgMC4zNDkwMik7XG4gIG1hcmdpbjogMjVweCBhdXRvO1xuICBwYWRkaW5nOiAxMHB4IDZweDsgfVxuXG4ub2ZmZXJfcGljdHVyZSBpbWcge1xuICB3aWR0aDogNzNweDtcbiAgaGVpZ2h0OiAxMjVweDsgfVxuXG4ub2ZmZXJfaW5mbyB7XG4gIG1heC13aWR0aDogMjQwcHg7XG4gIGNvbG9yOiAjMzMzMzMzO1xuICBsaW5lLWhlaWdodDogMS43O1xuICBoZWlnaHQ6IDgwcHg7XG4gIHBhZGRpbmctbGVmdDogMzBweDsgfVxuXG4uaW5mb19zZWN0aW9uIHtcbiAgaGVpZ2h0OiAxMDAlOyB9XG5cbi5vZmZlcl9idXR0b25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAyNDBweDsgfVxuXG4ubW9yZV9pbmZvIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogIzAxODE5MTsgfVxuXG4uYnRuIHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBjb2xvcjogIzAxODE5MTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMTgxOTE7XG4gIHdpZHRoOiAxMDNweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7IH1cblxuLmJ0bjpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7IH1cblxuLmJvbGQge1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXNpemU6IDE2cHg7IH1cblxuLyo9PT09PT09PT09PT0ubm8tYW5zd2VyPT09PT09PT09PT09PT09Ki9cbi5yZXBseSB7XG4gIG1hcmdpbi10b3A6IDI0cHg7IH1cblxuLnktbl9idXR0b25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB3aWR0aDogMTQ1cHg7XG4gIG1hcmdpbjogMjJweCBhdXRvOyB9XG5cbi5idXR0b24ge1xuICB3aWR0aDogNjFweDtcbiAgaGVpZ2h0OiAzNHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyOiAxcHggc29saWQgIzc3Nzc3NztcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiAwLjVzOyB9XG5cbi5idXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDE4MTkxO1xuICB0cmFuc2l0aW9uOiAwLjVzO1xuICBjb2xvcjogI2ZmZmZmZjsgfVxuXG4uYnV0dG9uOmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTsgfVxuXG4vKnVzZXItY2xpY2tlZC1xdWVzdGlvbiovXG4uY2xpY2tlZCB7XG4gIHBhZGRpbmc6IDI1cHggMTNweCA4cHggMTNweDsgfVxuXG4ubWFpbl8zZC10b3VjaC1kZXNjcmlwdGlvbiB7XG4gIHBhZGRpbmc6IDAgMTJweCAwIDEycHg7IH1cblxuLm1haW5fM2QtdG91Y2gtZGVzY3JpcHRpb24ge1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgY29sb3I6ICMwMDAwMDA7IH1cblxuLmRfdG91Y2hfdGV4dCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiAjMzMzMzMzOyB9XG5cbi50b3VjaCB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4OyB9XG5cbi50b3VjaF9waWN0dXJlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogdXJsKC9hc3NldHMvaW1nL3RyZWVkdG91Y2gucG5nKSBjZW50ZXIgbm8tcmVwZWF0O1xuICB3aWR0aDogMjc1cHg7XG4gIGhlaWdodDogMTU4cHg7XG4gIG1hcmdpbjogMjVweCBhdXRvOyB9XG5cbi5wbGF5IHtcbiAgd2lkdGg6IDU1cHg7XG4gIGhlaWdodDogNTVweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgYmFja2dyb3VuZDogcmdiYSgyNTQsIDI1NSwgMjQzLCAwLjkpOyB9XG5cbi5wbGF5IGltZyB7XG4gIG1hcmdpbjogMTFweCAyMXB4OyB9XG5cbi5iYWNrLWJ0bjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgYmFja2dyb3VuZDogdXJsKC9hc3NldHMvaW1nL2Fycm93LWxlZnQucG5nKSBjZW50ZXIgbm8tcmVwZWF0O1xuICBmbG9hdDogbGVmdDsgfVxuXG4uYmFjay1idG4gYnV0dG9uIHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICMzMzMzMzM7XG4gIGN1cnNvcjogcG9pbnRlcjsgfVxuXG4uYmFjay1idG4gYnV0dG9uOmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTsgfVxuXG4uYmFjay1idXR0b24ge1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50OyB9XG5cbi5iYWNrLWJ0biB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgd2lkdGg6IDcwcHg7IH1cbiIsIi50ZXN0LXBhZ2Uge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2ltZy90ZXN0LXBhZ2Utdmlldy5wbmdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xuICBtaW4td2lkdGg6IDEwMHZ3O1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbn1cbi8qPT09PT09PT09PT09PT3QodC/0LXRhtC40YTQuNC60LDRhtC40Lg9PT09PT09PT09PSovXG5cbi8qPT09PT09PT09PT09PT3QodC/0LXRhtC40YTQuNC60LDRhtC40Lg9PT09PT09PT09PSovXG4qIHtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xufVxuYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbmxpIHtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xufVxuYm9keSB7XG4gIGZvbnQtZmFtaWx5OiBcIkFyaWFsXCIsIHNhbnMtc2VyaWY7XG59XG4vKj09PT09PT09PT09PT0ucS1hX2NoYXQtd2luZG93PT09PT09PT09PT09Ki9cbi5xLWFfY2hhdC13aW5kb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxOTVweDtcbiAgaGVpZ2h0OiA1MXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEsIDEyOSwgMTQ1LCAxKTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3R0b206IDI3cHg7XG4gIHJpZ2h0OiA1MXB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuLnEtYV9jaGF0X19pY29uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDM5cHg7XG4gIGhlaWdodDogMzlweDtcbiAgYmFja2dyb3VuZDogI2YyZjJmMjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luOiAwIDEycHggMCAxMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnEtYV9jaGF0X19pY29uIGltZyB7XG4gIHdpZHRoOiA5MCU7XG59XG4ud2lkZ2V0LXdyYXAtb3V0ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMjdweDtcbiAgcmlnaHQ6IDUxcHg7XG59XG4uY29udGVudC13cmFwIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiA0NHB4O1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTAwdmg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG4vKj09PT09PT09PT09LnEtYV93aW5kb3dfX2RlZmF1bHQ9PT09PT09PT09PSovXG4ucS1hX3dpbmRvd19fZGVmYXVsdCB7XG4gIHdpZHRoOiAzNzRweDtcbiAgbWluLWhlaWdodDogNTM0cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYigyMDQsIDIwNCwgMjA0KTtcbn1cbi53aW5kb3ctd3JhcCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxLCAxMjksIDE0NSwgMSk7XG59XG4ucS1hX2hlYWQge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IDUxcHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uYXNrLXdpbmRvdy1pY29uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDM5cHg7XG4gIGhlaWdodDogMzlweDtcbiAgYmFja2dyb3VuZDogI2YyZjJmMjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luOiAwIDEycHggMCAxMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmFzay13aW5kb3ctaWNvbiBpbWcge1xuICB3aWR0aDogOTAlO1xufVxuLmNsb3NlLWNyb3NzIHtcbiAgbWFyZ2luLXJpZ2h0OiAyMXB4O1xuICB3aWR0aDogMjRweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmNsb3NlLWNyb3NzIGltZyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogaW5oZXJpdDtcbn1cblxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PSovXG4uaW1nX3dyYXAge1xuICB3aWR0aDogMjlweDtcbiAgaGVpZ2h0OiAyOXB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQ6ICNmMmYyZjI7XG59XG4uaW1nX3dyYXAgaW1nIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAyNnB4O1xuICBtYXJnaW46IDAgYXV0bztcbn1cbi5xLWFfaGVscF9maWVsZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4ucS1hX19tYWluIHtcbiAgcGFkZGluZzogMjFweCAxM3B4IDM1cHggMTNweDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG59XG4uZGlhbG9nLWZpZWxkIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMjQ5cHg7XG4gIG1pbi1oZWlnaHQ6IDIycHg7XG4gIGJhY2tncm91bmQ6IHJnYigyMTcsIDI1NSwgMjQ4KTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDE1MywgMTUzLCAxNTMpO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIG1hcmdpbi1sZWZ0OiAxMnB4O1xuICBwYWRkaW5nOiAxMHB4O1xufVxuLmRpYWxvZy1maWVsZDo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDlweDtcbiAgbGVmdDogLTExcHg7XG4gIHdpZHRoOiAxMnB4O1xuICBoZWlnaHQ6IDlweDtcbiAgYmFja2dyb3VuZDogdXJsKC9hc3NldHMvaW1nL3JlY3QtbGVmdC5wbmcpO1xufVxuLmRpYWxvZy1maWVsZCB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBjb2xvcjogcmdiKDUxLCA1MSwgNTEpO1xufVxuLnlvdXItcXVlc3Rpb25faW5wdXQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAzMTVweDtcbiAgbWluLWhlaWdodDogNDJweDtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDE1MywgMTUzLCAxNTMpO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIG1hcmdpbjogMjFweCBhdXRvIDAgYXV0bztcbn1cbi55b3VyLXF1ZXN0aW9uX2lucHV0IGlucHV0W3R5cGU9XCJ0ZXh0XCJdIHtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAyMHB4KTtcbn1cbi55b3VyLXF1ZXN0aW9uX2lucHV0OjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMnB4O1xuICByaWdodDogLTExcHg7XG4gIHdpZHRoOiAxMXB4O1xuICBoZWlnaHQ6IDlweDtcbiAgYmFja2dyb3VuZDogdXJsKC9hc3NldHMvaW1nL3JlY3QtcmlnaHQucG5nKTtcbn1cbi55b3VyLXF1ZXN0aW9uX2lucHV0IGlucHV0IHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBjb2xvcjogcmdiKDE1MywgMTUzLCAxNTMpO1xuICBsaW5lLWhlaWdodDogMztcbiAgbWFyZ2luLWxlZnQ6IDE0cHg7XG4gIHdpZHRoOiA3MCU7XG4gIGJvcmRlcjogdHJhbnNwYXJlbnQ7XG4gIG91dGxpbmU6IG5vbmU7XG59XG4ubWFpbl9vdGhlci1xdWVzdGlvbnMge1xuICBwYWRkaW5nOiAzOXB4IDEycHggMCAxMnB4O1xufVxuLm1haW5fb3RoZXItcXVlc3Rpb25zIHtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjMDAwMDAwO1xufVxuLnVsLWhlYWRlcixcbi5xdWVzdGlvbnMge1xuICBtYXJnaW4tbGVmdDogN3B4O1xufVxuLm1haW5fb3RoZXItcXVlc3Rpb25zIGxpIHNwYW4ge1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgY29sb3I6ICMzMzMzMzM7XG59XG4ubWFpbl9vdGhlci1xdWVzdGlvbnMgbGkge1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xufVxuLm1haW5fb3RoZXItcXVlc3Rpb25zIGxpOmZpcnN0LW9mLXR5cGUge1xuICBtYXJnaW4tdG9wOiAyMXB4O1xufVxuLm1haW5fb3RoZXItcXVlc3Rpb25zIGxpOmxhc3Qtb2YtdHlwZSB7XG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XG59XG4ubWFpbl9vdGhlci1xdWVzdGlvbnMgbGk6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIGJhY2tncm91bmQ6IHVybCgvYXNzZXRzL2ltZy9hcnJvdy1yaWdodC5wbmcpIGNlbnRlciBuby1yZXBlYXQ7XG4gIG1hcmdpbi10b3A6IC00cHg7XG4gIGZsb2F0OiBsZWZ0O1xufVxuLnJlZi1pbmZvIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogIzAxODE5MTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuLmZvb3Rlci1sb2dvIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICByaWdodDogMTNweDtcbiAgYm90dG9tOiA5cHg7XG59XG4uZm9vdGVyLWxvZ28ge1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjOTk5OTk5O1xufVxuLmZvb3Rlci1sb2dvIGltZyB7XG4gIHdpZHRoOiA3OXB4O1xuICBoZWlnaHQ6IDE4cHg7XG4gIG1hcmdpbi1sZWZ0OiAzcHg7XG59XG5cbi8qcS1hX3dpbmRvd19fd2hpbGUtdHlwaW5nKi9cbi53aGlsZS10eXBlIHtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG59XG5cbi5vZmZlcl93aW5kb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMzM2cHg7XG4gIGhlaWdodDogMTQzcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjA0LCAyMDQsIDIwNCwgMSk7XG4gIGJveC1zaGFkb3c6IDNweCAzcHggM3B4IHJnYmEoMTUzLCAxNTMsIDE1MywgMC4zNDkwMTk2MDc4NDMxMzcpO1xuICBtYXJnaW46IDI1cHggYXV0bztcbiAgcGFkZGluZzogMTBweCA2cHg7XG59XG4ub2ZmZXJfcGljdHVyZSBpbWcge1xuICB3aWR0aDogNzNweDtcbiAgaGVpZ2h0OiAxMjVweDtcbn1cbi5vZmZlcl9pbmZvIHtcbiAgbWF4LXdpZHRoOiAyNDBweDtcbiAgY29sb3I6ICMzMzMzMzM7XG4gIGxpbmUtaGVpZ2h0OiAxLjc7XG4gIGhlaWdodDogODBweDtcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xufVxuLmluZm9fc2VjdGlvbiB7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5vZmZlcl9idXR0b25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAyNDBweDtcbn1cbi5tb3JlX2luZm8ge1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjMDE4MTkxO1xufVxuLmJ0biB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgY29sb3I6ICMwMTgxOTE7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDE4MTkxO1xuICB3aWR0aDogMTAzcHg7XG4gIGhlaWdodDogMzBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmJ0bjpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG4uYm9sZCB7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLyo9PT09PT09PT09PT0ubm8tYW5zd2VyPT09PT09PT09PT09PT09Ki9cbi5yZXBseSB7XG4gIG1hcmdpbi10b3A6IDI0cHg7XG59XG4ueS1uX2J1dHRvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHdpZHRoOiAxNDVweDtcbiAgbWFyZ2luOiAyMnB4IGF1dG87XG59XG4uYnV0dG9uIHtcbiAgd2lkdGg6IDYxcHg7XG4gIGhlaWdodDogMzRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxMTksIDExOSwgMTE5LCAxKTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiAwLjVzO1xufVxuLmJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMSwgMTI5LCAxNDUsIDEpO1xuICB0cmFuc2l0aW9uOiAwLjVzO1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cbi5idXR0b246Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4vKnVzZXItY2xpY2tlZC1xdWVzdGlvbiovXG5cbi5jbGlja2VkIHtcbiAgcGFkZGluZzogMjVweCAxM3B4IDhweCAxM3B4O1xufVxuLm1haW5fM2QtdG91Y2gtZGVzY3JpcHRpb24ge1xuICBwYWRkaW5nOiAwIDEycHggMCAxMnB4O1xufVxuXG4ubWFpbl8zZC10b3VjaC1kZXNjcmlwdGlvbiB7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBjb2xvcjogIzAwMDAwMDtcbn1cbi5kX3RvdWNoX3RleHQge1xuICBmb250LXNpemU6IDEycHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBjb2xvcjogIzMzMzMzMztcbn1cbi50b3VjaCB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuLnRvdWNoX3BpY3R1cmUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiB1cmwoL2Fzc2V0cy9pbWcvdHJlZWR0b3VjaC5wbmcpIGNlbnRlciBuby1yZXBlYXQ7XG4gIHdpZHRoOiAyNzVweDtcbiAgaGVpZ2h0OiAxNThweDtcbiAgbWFyZ2luOiAyNXB4IGF1dG87XG59XG4ucGxheSB7XG4gIHdpZHRoOiA1NXB4O1xuICBoZWlnaHQ6IDU1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU0LCAyNTUsIDI0MywgMC45KTtcbn1cbi5wbGF5IGltZyB7XG4gIG1hcmdpbjogMTFweCAyMXB4O1xufVxuXG4uYmFjay1idG46YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIGJhY2tncm91bmQ6IHVybCgvYXNzZXRzL2ltZy9hcnJvdy1sZWZ0LnBuZykgY2VudGVyIG5vLXJlcGVhdDtcbiAgZmxvYXQ6IGxlZnQ7XG59XG4uYmFjay1idG4gYnV0dG9uIHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICMzMzMzMzM7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5iYWNrLWJ0biBidXR0b246Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xufVxuLmJhY2stYnV0dG9uIHtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cbi5iYWNrLWJ0biB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgd2lkdGg6IDcwcHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/main/widget-chat/widget-chat.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/main/widget-chat/widget-chat.component.ts ***!
  \***********************************************************/
/*! exports provided: WidgetChatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetChatComponent", function() { return WidgetChatComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var WidgetChatComponent = /** @class */ (function () {
    function WidgetChatComponent() {
    }
    WidgetChatComponent.prototype.ngOnInit = function () {
    };
    WidgetChatComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-widget-chat',
            template: __webpack_require__(/*! ./widget-chat.component.html */ "./src/app/main/widget-chat/widget-chat.component.html"),
            styles: [__webpack_require__(/*! ./widget-chat.component.scss */ "./src/app/main/widget-chat/widget-chat.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], WidgetChatComponent);
    return WidgetChatComponent;
}());



/***/ }),

/***/ "./src/app/main/widget-management/new-widget/content/content.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/main/widget-management/new-widget/content/content.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"df jc-b m-b-20\">\n  <div>\n    <div class=\"fs-20 m-b-10 color-dark\">\n      SELECT CONTENT\n    </div>\n    <div class=\"fs-14\">\n      Select the articles used in this widget\n    </div>\n  </div>\n  <div class=\"df ai-c\">\n    <div (click)=\"showTopQuestions()\" class=\"df ai-c c-p m-r-20\">\n      <i class=\"far fa-star fs-24 color-primary m-r-10\"></i>\n      <span class=\"color-primary fs-12 text-wrap-none\">Top Questions</span>\n    </div>\n    <div class=\"input-search pos-r\">\n      <input type=\"text\" [(ngModel)]=\"searchText\" (ngModelChange)=\"searchTextChange($event)\" placeholder=\"Search content / tag\"\n        pInputText />\n      <div *ngIf=\"searchText.length && searchResultData.length\" class=\"serch-result-dropdawn\">\n        <div (click)=\"openSearch(); searchText = ''\" *ngFor=\"let item of searchResultData\" class=\"serch-result-dropdawn--item\">\n          <div class=\"serch-result-dropdawn--icon-wrap\">\n            <img *ngIf=\"item.type === 'teg'\" src=\"assets/img/stiket.png\" alt=\"\">\n            <img *ngIf=\"item.type === 'text'\" src=\"assets/img/file.png\" alt=\"\">\n          </div>\n          <div>\n            <div class=\"serch-result-dropdawn--lable\">\n              {{item.label}}\n            </div>\n          </div>\n        </div>\n        <div (click)=\"openSearch(); searchText = ''\" class=\"serch-result-dropdawn--foot\">\n          More results\n        </div>\n      </div>\n      <div class=\"icon-input\">\n        <img *ngIf=\"!searchResult\" class=\"c-p\" width=\"20px\" src=\"assets/img/search.png\" alt=\"\">\n        <img *ngIf=\"searchResult\" (click)=\"closeSearch(); searchText = ''\" class=\"c-p\" width=\"20px\" src=\"assets/img/times-black.png\"\n          alt=\"\">\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"content-wrap\">\n\n  <div *ngIf=\"folders\" class=\"folder-side\">\n    <div class=\"side-head\">\n      <div>\n        Folders\n      </div>\n    </div>\n    <div class=\"body-side\">\n      <p-tree [value]=\"filesTree0\" selectionMode=\"single\" (onNodeSelect)=\"onNodeSelect($event,i)\">\n        <ng-template let-node pTemplate=\"default\">\n          <div class=\"df ai-c\">\n            <input *ngIf=\"!node.label\" [(ngModel)]=\"newText\" type=\"text\" pInputText style=\"width: 85px\">\n            <button *ngIf=\"!node.label\" (click)=\"node.label = newText; newText = ''\" class=\"button-default m-l-5\" style=\"min-width: 35px;\">ok</button>\n          </div>\n          <span *ngIf=\"node.label\">{{node.label}}</span>\n        </ng-template>\n      </p-tree>\n    </div>\n  </div>\n\n  <div *ngIf=\"searchResult\" class=\"articles-side full-width \">\n    <div class=\"side-head\">\n      <div>\n        Search Results\n      </div>\n      <div class=\"df ai-c color-primary\">\n        <div (click)=\"backContent()\" class=\"df ai-c c-p\">\n          <img width=\"16px\" class=\"m-r-5 rotate--90\" src=\"assets/img/caret.png\" alt=\"\">\n          <div>\n            Back to content\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"body-side body-side-scroll\">\n      <div *ngFor=\"let item of searchResultData; let i = index\" class=\"search-row \">\n        <div (click)=\"selectType(item.element, i)\">\n          <div class=\"df ai-c jc-b m-b-7\">\n            <div>\n              {{item.element.title}}\n            </div>\n            <div class=\"c-p delete-icon\">\n              <img width=\"24px\" src=\"assets/img/add-to-widget.png\" alt=\"\">\n            </div>\n          </div>\n          <div class=\"stick-row\">\n            <div *ngFor=\"let tag of item.element.tegs\" class=\"ai-c df m-r-10\">\n              <img class=\"m-r-3\" src=\"assets/img/stiket.png\" alt=\"\">\n              <div class=\"context\">\n                {{tag}}\n              </div>\n            </div>\n          </div>\n          <div class=\"description\">\n            <p class=\"context\" style=\"margin: 0; overflow: hidden; text-overflow: ellipsis; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical;\">\n              {{item.element.text}}\n            </p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div *ngIf=\"topQuestions\" class=\"articles-side full-width \">\n    <div class=\"side-head\">\n      <div>\n        Top Questions\n      </div>\n      <div class=\"df ai-c color-primary\">\n        <div (click)=\"backContent()\" class=\"df ai-c c-p\">\n          <img width=\"16px\" class=\"m-r-5 rotate--90\" src=\"assets/img/caret.png\" alt=\"\">\n          <div>\n            Back to content\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"body-side body-side-scroll\">\n      <div *ngFor=\"let item of selectedTopQuestion; let i = index\" class=\"search-row \">\n        <div class=\"df ai-c jc-b m-b-7 full-width \">\n          <div>\n            {{item.name}}\n          </div>\n          <div class=\"c-p\">\n            <div (click)=\"addTopQuestion(item, i);\" class=\"m-l-10 c-p df ai-c fs-20 star\">\n              <i *ngIf=\"!item.favorite\" class=\"far fa-star color-primary\"></i>\n              <i *ngIf=\"item.favorite\" class=\"fas fa-star\"></i>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div *ngIf=\"articles && selectedType\" class=\"articles-side\">\n    <div class=\"side-head p-l-20\">\n      <div class=\"df\">\n        <div class=\"m-r-20\">\n          <input type=\"checkbox\">\n        </div>\n        <div>\n          Select Articles/Folders\n        </div>\n      </div>\n    </div>\n    <div class=\"body-side\">\n      <div *ngFor=\"let item of articlesData[selectedType]; let i = index\" (click)=\"selectType(item, i)\" class=\"articles-row jc-b\">\n        <div class=\"df ai-c\">\n          <input [(ngModel)]=\"item.checked\" class=\"m-r-20\" type=\"checkbox\">\n          <i *ngIf=\"item.type === 'folder'\" class=\"m-r-5\" class=\"fa fa-folder m-r-20 icon-folder\"></i>\n          <div>\n            {{item.name}}\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div *ngIf=\"article && selectedItem\" class=\"article-side\">\n    <div class=\"side-head\">\n      <div>\n        Article\n      </div>\n    </div>\n    <div class=\"body-side text-left\">\n      <div class=\"tags-wrap\">\n        <div class=\"m-r-20 fs-11\">\n          Tags:\n        </div>\n        <div *ngFor=\"let tags of selectedItem.tegs; let i = index\" class=\"fs-13 m-r-20 color-primary\">\n          {{tags}}\n        </div>\n      </div>\n      <div class=\"p-t-10 p-l-25 p-r-25 p-b-25\">\n        <h4 class=\"fs-14\">\n          {{selectedItem.title}}\n        </h4>\n        <p class=\"fs-12\">\n          {{selectedItem.text}}\n        </p>\n      </div>\n      <div class=\"title-row jc-b bg\">\n        <div class=\"df ai-c\">\n          <div class=\"fs-14\">\n            Questions\n          </div>\n        </div>\n      </div>\n      <div *ngFor=\"let item of selectedItem.questions; let i = index\" class=\"articles-row jc-b\">\n        <div class=\"df ai-c\">\n          <div>\n            {{item.name}}\n          </div>\n        </div>\n        <div (click)=\"addTopQuestion(item, i);\" class=\"m-l-10 c-p df ai-c fs-20 star\">\n          <i *ngIf=\"!item.favorite\" class=\"far fa-star color-primary\"></i>\n          <i *ngIf=\"item.favorite\" class=\"fas fa-star\"></i>\n        </div>\n      </div>\n    </div>\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/main/widget-management/new-widget/content/content.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/main/widget-management/new-widget/content/content.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content-wrap {\n  display: flex;\n  justify-content: space-between;\n  min-height: calc(100vh - 234px); }\n\n.head {\n  height: 76px;\n  background: inherit;\n  background-color: #f2f2f2;\n  display: flex;\n  align-items: center;\n  padding-left: 90px;\n  padding-right: 50px;\n  margin-bottom: 40px; }\n\n.lable-drb {\n  position: absolute;\n  top: 5px;\n  left: 5px;\n  font-size: 11px;\n  color: #1e1e1e; }\n\n.input-search {\n  width: 100%;\n  max-width: 533px;\n  margin-left: 10px; }\n\n.input-search input {\n    height: 48px;\n    width: 100%; }\n\n.side-head {\n  height: 37px;\n  background-color: #e4e4e4;\n  box-sizing: border-box;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 15px; }\n\n.body-side {\n  background-color: white;\n  box-sizing: border-box;\n  border-width: 1px;\n  border-style: solid;\n  border-color: #d7d7d7;\n  min-height: 100%; }\n\n.body-side-scroll {\n  overflow-y: auto;\n  max-height: 400px; }\n\n.arrow-right {\n  -webkit-transform: rotate(-90deg);\n          transform: rotate(-90deg); }\n\n.folder-side {\n  margin-right: 20px;\n  min-width: -webkit-fit-content;\n  min-width: -moz-fit-content;\n  min-width: fit-content;\n  width: 225px; }\n\n.articles-side {\n  width: 100%;\n  margin-right: 20px; }\n\n.article-side {\n  width: 50%;\n  max-width: 550px;\n  min-width: 420px; }\n\n.rotate-180 {\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg); }\n\n.rotate-270 {\n  -webkit-transform: rotate(270deg);\n          transform: rotate(270deg); }\n\n.rotate--90 {\n  -webkit-transform: rotate(-90deg);\n          transform: rotate(-90deg); }\n\n.articles-row {\n  border-bottom: 1px solid #d7d7d7;\n  display: flex;\n  align-items: center;\n  padding: 10px 20px;\n  transition: all 0.3s;\n  min-height: 46px; }\n\n.articles-row .icons {\n    display: none;\n    align-items: center; }\n\n.articles-row:hover {\n    background: #dff5f9; }\n\n.articles-row:hover .icons {\n      display: flex; }\n\n.tags-wrap {\n  display: flex;\n  flex-wrap: wrap;\n  padding: 5px 15px;\n  background-color: #f2f2f2;\n  box-sizing: border-box;\n  border-width: 1px;\n  border-style: solid;\n  border-color: #d7d7d7; }\n\n.add-tag {\n  height: 27px;\n  border-radius: 10px;\n  margin-bottom: 10px;\n  margin-top: 6px;\n  width: 120px; }\n\n.title-row {\n  height: 45px;\n  border-width: 1px;\n  border-style: solid;\n  border-color: #d7d7d7;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background: #f2f2f2;\n  padding: 10px 20px; }\n\n.search-row {\n  padding: 20px 20px 10px 20px;\n  display: flex;\n  font-size: 12px;\n  transition: all 0.3s;\n  border-bottom: 1px solid #d7d7d7;\n  position: relative; }\n\n.search-row .description {\n    overflow: hidden;\n    color: #999999; }\n\n.search-row .delete-icon {\n    display: none;\n    align-items: center;\n    position: absolute;\n    right: 20px; }\n\n.search-row:hover {\n    background-color: #dff5f9; }\n\n.search-row:hover .delete-icon {\n      display: flex; }\n\n.stick-row {\n  font-size: 11px;\n  color: #018191;\n  display: flex;\n  margin-bottom: 5px; }\n\n.question-row {\n  border-bottom: 1px solid #d7d7d7; }\n\n.question-row-head {\n    display: flex;\n    align-items: center;\n    min-height: 40px;\n    padding: 5px 10px;\n    cursor: pointer; }\n\n.question-row-body {\n    padding: 20px 40px 20px 40px;\n    background: #f2f2f2;\n    position: relative; }\n\n.question-row-body .question-item {\n      height: 55px;\n      background: inherit;\n      background-color: white;\n      display: flex;\n      align-items: center;\n      justify-content: space-between;\n      padding: 5px 20px;\n      border: 1px solid #d7d7d7;\n      border-bottom: 0; }\n\n.question-row-body .question-item .trash-icon {\n        display: none;\n        align-items: center;\n        cursor: pointer; }\n\n.question-row-body .question-item:hover {\n        background-color: #dff5f9; }\n\n.question-row-body .question-item:hover .trash-icon {\n          display: flex; }\n\n.question-row-body .question-item:last-child {\n        border-bottom: 1px solid #d7d7d7; }\n\n.icon-input {\n  position: absolute;\n  right: 9px;\n  top: calc(50% - 10px); }\n\n.nitif-circle {\n  background: #ff6600;\n  width: 16px;\n  height: 16px;\n  border-radius: 100px;\n  overflow: hidden;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 1px solid #feb98c;\n  font-size: 10px;\n  color: white; }\n\n.serch-result-dropdawn {\n  position: absolute;\n  top: 100%;\n  background: white;\n  width: 100%;\n  border: 1px solid #a6a6a6;\n  border-top: 0;\n  z-index: 111; }\n\n.serch-result-dropdawn--item {\n    display: flex;\n    align-items: center;\n    padding: 9px 10px;\n    cursor: pointer; }\n\n.serch-result-dropdawn--icon-wrap {\n    width: 25px;\n    min-width: 25px; }\n\n.serch-result-dropdawn--foot {\n    border-top: 1px solid #a6a6a6;\n    padding: 10px;\n    text-align: center;\n    cursor: pointer; }\n\n.tags-wrap {\n  padding: 10px 15px; }\n\n.star {\n  color: #ff9900; }\n\n.input-search {\n  width: 228px; }\n\n.content-wrap {\n  min-height: calc(100% - 70px); }\n\n.body-side {\n  min-height: calc(100% - 34px); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NodW1pay9Eb2N1bWVudHMva21zLXNwb3Qvc3JjL2FwcC9tYWluL2NvbnRlbnQtbWFuYWdlbWVudC9jb250ZW50LW1hbmFnZW1lbnQuY29tcG9uZW50LnNjc3MiLCIvaG9tZS9zaHVtaWsvRG9jdW1lbnRzL2ttcy1zcG90L3NyYy9hcHAvbWFpbi93aWRnZXQtbWFuYWdlbWVudC9uZXctd2lkZ2V0L2NvbnRlbnQvY29udGVudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsK0JBQStCLEVBQUE7O0FBRWpDO0VBQ0UsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQix5QkFBd0M7RUFDeEMsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLG1CQUFtQixFQUFBOztBQUVyQjtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUNULGVBQWU7RUFDZixjQUFjLEVBQUE7O0FBRWhCO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixpQkFBaUIsRUFBQTs7QUFIbkI7SUFLSSxZQUFZO0lBQ1osV0FBVyxFQUFBOztBQUdmO0VBQ0UsWUFBWTtFQUNaLHlCQUF3QztFQUN4QyxzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIsZUFBZSxFQUFBOztBQUVqQjtFQUNFLHVCQUF3QztFQUN4QyxzQkFBc0I7RUFDdEIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixxQkFBb0M7RUFDcEMsZ0JBQWdCLEVBQUE7O0FBRWxCO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQixFQUFBOztBQUVuQjtFQUNFLGlDQUF5QjtVQUF6Qix5QkFBeUIsRUFBQTs7QUFFM0I7RUFDRSxrQkFBa0I7RUFDbEIsOEJBQXNCO0VBQXRCLDJCQUFzQjtFQUF0QixzQkFBc0I7RUFDdEIsWUFBWSxFQUFBOztBQUVkO0VBQ0UsV0FBVztFQUNYLGtCQUFrQixFQUFBOztBQUVwQjtFQUNFLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsZ0JBQWdCLEVBQUE7O0FBRWxCO0VBQ0UsaUNBQXlCO1VBQXpCLHlCQUF5QixFQUFBOztBQUUzQjtFQUNFLGlDQUF5QjtVQUF6Qix5QkFBeUIsRUFBQTs7QUFFM0I7RUFDRSxpQ0FBeUI7VUFBekIseUJBQXlCLEVBQUE7O0FBRTNCO0VBQ0UsZ0NBQStDO0VBQy9DLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQixnQkFBZ0IsRUFBQTs7QUFObEI7SUFRSSxhQUFhO0lBQ2IsbUJBQW1CLEVBQUE7O0FBVHZCO0lBWUksbUJBQWtDLEVBQUE7O0FBWnRDO01BY00sYUFBYSxFQUFBOztBQUluQjtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLHlCQUF3QztFQUN4QyxzQkFBc0I7RUFDdEIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixxQkFBb0MsRUFBQTs7QUFFdEM7RUFDRSxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsWUFBWSxFQUFBOztBQUVkO0VBQ0UsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIscUJBQWdDO0VBQ2hDLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixrQkFBa0IsRUFBQTs7QUFFcEI7RUFDRSw0QkFBNEI7RUFDNUIsYUFBYTtFQUNiLGVBQWU7RUFDZixvQkFBb0I7RUFDcEIsZ0NBQTJDO0VBQzNDLGtCQUFrQixFQUFBOztBQU5wQjtJQVFJLGdCQUFnQjtJQUNoQixjQUFjLEVBQUE7O0FBVGxCO0lBWUksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsV0FBVyxFQUFBOztBQWZmO0lBa0JJLHlCQUF3QyxFQUFBOztBQWxCNUM7TUFvQk0sYUFBYSxFQUFBOztBQUluQjtFQUNFLGVBQWU7RUFDZixjQUFjO0VBQ2QsYUFBYTtFQUNiLGtCQUFrQixFQUFBOztBQUVwQjtFQUNFLGdDQUEyQyxFQUFBOztBQUMzQztJQUNFLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixlQUFlLEVBQUE7O0FBRWpCO0lBQ0UsNEJBQTRCO0lBQzVCLG1CQUFrQztJQUNsQyxrQkFBa0IsRUFBQTs7QUFIbkI7TUFLRyxZQUFZO01BQ1osbUJBQW1CO01BQ25CLHVCQUFvQztNQUNwQyxhQUFhO01BQ2IsbUJBQW1CO01BQ25CLDhCQUE4QjtNQUM5QixpQkFBaUI7TUFDakIseUJBQW9DO01BQ3BDLGdCQUFnQixFQUFBOztBQWJuQjtRQWVLLGFBQWE7UUFDYixtQkFBbUI7UUFDbkIsZUFBZSxFQUFBOztBQWpCcEI7UUFvQksseUJBQXdDLEVBQUE7O0FBcEI3QztVQXNCTyxhQUFhLEVBQUE7O0FBdEJwQjtRQTBCSyxnQ0FBMkMsRUFBQTs7QUFLbkQ7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLHFCQUFxQixFQUFBOztBQUV2QjtFQUNFLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsWUFBWTtFQUNaLG9CQUFvQjtFQUNwQixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIseUJBQXlCO0VBQ3pCLGVBQWU7RUFDZixZQUFZLEVBQUE7O0FBRWQ7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLGFBQWE7RUFDYixZQUFZLEVBQUE7O0FBQ1o7SUFDRSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixlQUFlLEVBQUE7O0FBRWpCO0lBQ0UsV0FBVztJQUNYLGVBQWUsRUFBQTs7QUFFakI7SUFDRSw2QkFBNkI7SUFDN0IsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixlQUFlLEVBQUE7O0FDeE9uQjtFQUNFLGtCQUFrQixFQUFBOztBQUVwQjtFQUNFLGNBQWMsRUFBQTs7QUFFaEI7RUFDRSxZQUFZLEVBQUE7O0FBRWQ7RUFDRSw2QkFBNkIsRUFBQTs7QUFFL0I7RUFDRSw2QkFBNkIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL21haW4vd2lkZ2V0LW1hbmFnZW1lbnQvbmV3LXdpZGdldC9jb250ZW50L2NvbnRlbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudC13cmFwIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gMjM0cHgpO1xufVxuLmhlYWQge1xuICBoZWlnaHQ6IDc2cHg7XG4gIGJhY2tncm91bmQ6IGluaGVyaXQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQyLCAyNDIsIDI0MiwgMSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmctbGVmdDogOTBweDtcbiAgcGFkZGluZy1yaWdodDogNTBweDtcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcbn1cbi5sYWJsZS1kcmIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNXB4O1xuICBsZWZ0OiA1cHg7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgY29sb3I6ICMxZTFlMWU7XG59XG4uaW5wdXQtc2VhcmNoIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogNTMzcHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBpbnB1dCB7XG4gICAgaGVpZ2h0OiA0OHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG4uc2lkZS1oZWFkIHtcbiAgaGVpZ2h0OiAzN3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIyOCwgMjI4LCAyMjgsIDEpO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmc6IDAgMTVweDtcbn1cbi5ib2R5LXNpZGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3JkZXItd2lkdGg6IDFweDtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDIxNSwgMjE1LCAyMTUsIDEpO1xuICBtaW4taGVpZ2h0OiAxMDAlO1xufVxuLmJvZHktc2lkZS1zY3JvbGwge1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBtYXgtaGVpZ2h0OiA0MDBweDtcbn1cbi5hcnJvdy1yaWdodCB7XG4gIHRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7XG59XG4uZm9sZGVyLXNpZGUge1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gIG1pbi13aWR0aDogZml0LWNvbnRlbnQ7XG4gIHdpZHRoOiAyMjVweDtcbn1cbi5hcnRpY2xlcy1zaWRlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbn1cbi5hcnRpY2xlLXNpZGUge1xuICB3aWR0aDogNTAlO1xuICBtYXgtd2lkdGg6IDU1MHB4O1xuICBtaW4td2lkdGg6IDQyMHB4O1xufVxuLnJvdGF0ZS0xODAge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xufVxuLnJvdGF0ZS0yNzB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDI3MGRlZyk7XG59XG4ucm90YXRlLS05MCB7XG4gIHRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7XG59XG4uYXJ0aWNsZXMtcm93IHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMjE1LCAyMTUsIDIxNSwgMSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gIG1pbi1oZWlnaHQ6IDQ2cHg7XG4gIC5pY29ucyB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjIzLCAyNDUsIDI0OSwgMSk7XG4gICAgLmljb25zIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgfVxuICB9XG59XG4udGFncy13cmFwIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBwYWRkaW5nOiA1cHggMTVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDIsIDI0MiwgMjQyLCAxKTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci1jb2xvcjogcmdiYSgyMTUsIDIxNSwgMjE1LCAxKTtcbn1cbi5hZGQtdGFnIHtcbiAgaGVpZ2h0OiAyN3B4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBtYXJnaW4tdG9wOiA2cHg7XG4gIHdpZHRoOiAxMjBweDtcbn1cbi50aXRsZS1yb3cge1xuICBoZWlnaHQ6IDQ1cHg7XG4gIGJvcmRlci13aWR0aDogMXB4O1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItY29sb3I6IHJnYigyMTUsIDIxNSwgMjE1KTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiAjZjJmMmYyO1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG59XG4uc2VhcmNoLXJvdyB7XG4gIHBhZGRpbmc6IDIwcHggMjBweCAxMHB4IDIwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2IoMjE1LCAyMTUsIDIxNSk7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgLmRlc2NyaXB0aW9uIHtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGNvbG9yOiAjOTk5OTk5O1xuICB9XG4gIC5kZWxldGUtaWNvbiB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMjBweDtcbiAgfVxuICAmOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIyMywgMjQ1LCAyNDksIDEpO1xuICAgIC5kZWxldGUtaWNvbiB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgIH1cbiAgfVxufVxuLnN0aWNrLXJvdyB7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgY29sb3I6ICMwMTgxOTE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cbi5xdWVzdGlvbi1yb3cge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiKDIxNSwgMjE1LCAyMTUpO1xuICAmLWhlYWQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtaW4taGVpZ2h0OiA0MHB4O1xuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuICAmLWJvZHkge1xuICAgIHBhZGRpbmc6IDIwcHggNDBweCAyMHB4IDQwcHg7XG4gICAgYmFja2dyb3VuZDogcmdiYSgyNDIsIDI0MiwgMjQyLCAxKTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgLnF1ZXN0aW9uLWl0ZW0ge1xuICAgICAgaGVpZ2h0OiA1NXB4O1xuICAgICAgYmFja2dyb3VuZDogaW5oZXJpdDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgcGFkZGluZzogNXB4IDIwcHg7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMjE1LCAyMTUsIDIxNSk7XG4gICAgICBib3JkZXItYm90dG9tOiAwO1xuICAgICAgLnRyYXNoLWljb24ge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB9XG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMjMsIDI0NSwgMjQ5LCAxKTtcbiAgICAgICAgLnRyYXNoLWljb24ge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2IoMjE1LCAyMTUsIDIxNSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4uaWNvbi1pbnB1dCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDlweDtcbiAgdG9wOiBjYWxjKDUwJSAtIDEwcHgpO1xufVxuLm5pdGlmLWNpcmNsZSB7XG4gIGJhY2tncm91bmQ6ICNmZjY2MDA7XG4gIHdpZHRoOiAxNnB4O1xuICBoZWlnaHQ6IDE2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZlYjk4YztcbiAgZm9udC1zaXplOiAxMHB4O1xuICBjb2xvcjogd2hpdGU7XG59XG4uc2VyY2gtcmVzdWx0LWRyb3BkYXduIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2E2YTZhNjtcbiAgYm9yZGVyLXRvcDogMDtcbiAgei1pbmRleDogMTExO1xuICAmLS1pdGVtIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzogOXB4IDEwcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG4gICYtLWljb24td3JhcCB7XG4gICAgd2lkdGg6IDI1cHg7XG4gICAgbWluLXdpZHRoOiAyNXB4O1xuICB9XG4gICYtLWZvb3Qge1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjYTZhNmE2O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxufVxuIiwiQGltcG9ydCBcIi4uLy4uLy4uL2NvbnRlbnQtbWFuYWdlbWVudC9jb250ZW50LW1hbmFnZW1lbnQuY29tcG9uZW50LnNjc3NcIjtcblxuLnRhZ3Mtd3JhcCB7XG4gIHBhZGRpbmc6IDEwcHggMTVweDtcbn1cbi5zdGFyIHtcbiAgY29sb3I6ICNmZjk5MDA7XG59XG4uaW5wdXQtc2VhcmNoIHtcbiAgd2lkdGg6IDIyOHB4O1xufVxuLmNvbnRlbnQtd3JhcCB7XG4gIG1pbi1oZWlnaHQ6IGNhbGMoMTAwJSAtIDcwcHgpO1xufVxuLmJvZHktc2lkZSB7XG4gIG1pbi1oZWlnaHQ6IGNhbGMoMTAwJSAtIDM0cHgpO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/main/widget-management/new-widget/content/content.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/main/widget-management/new-widget/content/content.component.ts ***!
  \********************************************************************************/
/*! exports provided: ContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentComponent", function() { return ContentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_services_main_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/main.service */ "./src/app/shared/services/main.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var ContentComponent = /** @class */ (function () {
    function ContentComponent(mainService, router, activatedRoute) {
        this.mainService = mainService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.article = true;
        this.articles = true;
        this.searchResult = false;
        this.folders = true;
        this.topQuestions = false;
        this.math = Math;
        this.questuonSettings = {};
        this.selectedTopQuestion = [];
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
                    questions: [
                        {
                            name: 'test 1?',
                            id: 1,
                            favorite: false
                        },
                        {
                            name: 'test 2?',
                            id: 2,
                            favorite: false
                        },
                        {
                            name: 'test 3?',
                            id: 3,
                            favorite: false
                        },
                        {
                            name: 'test 4?',
                            id: 4,
                            favorite: false
                        },
                        {
                            name: 'test 5?',
                            id: 5,
                            favorite: false
                        },
                        {
                            name: 'test 6?',
                            id: 6,
                            favorite: false
                        }
                    ],
                    text: "3D Touch is multitouch made multidimensional. With it you can press deeply to launch actions instead of apps, reply to notifications, preview messages and links, switch keyboards, switch apps, animate Live Photos, vary stroke width, and more. It's like a wormhole through iOS that lets you move around faster than ever.\n        3D Touch is multitouch made multidimensional. With it you can press3D Touch is multitouch made multidimensional. With it you can press deeply to launch actions instead of apps, reply to notifications, preview messages and links, switch keyboards, switch apps, animate Live Photos, vary stroke width, and more. It's like a wormhole through iOS that lets you move around faster than ever.\n        3D Touch is multitouch made multidimensional. With it you can press3D Touch is multitouch made multidimensional. With it you can press deeply to launch actions instead of apps, reply to notifications, preview messages and links, switch keyboards, switch apps, animate Live Photos, vary stroke width, and more. It's like a wormhole through iOS that lets you move around faster than ever.\n        3D Touch is multitouch made multidimensional. With it you can press3D Touch is multitouch made multidimensional. With it you can press deeply to launch actions instead of apps, reply to notifications, preview messages and links, switch keyboards, switch apps, animate Live Photos, vary stroke width, and more. It's like a wormhole through iOS that lets you move around faster than ever.\n        3D Touch is multitouch made multidimensional. With it you can press deeply to launch actions instead of apps, reply to notifications, preview messages and links, switch keyboards, switch apps, animate Live Photos, vary stroke width, and more. It's like a wormhole through iOS that lets you move around faster than ever."
                },
                {
                    id: "5",
                    name: "text 5",
                    checked: false,
                    type: "text",
                    questions: [
                        {
                            name: 'test 7?',
                            id: 7,
                            favorite: false
                        },
                        {
                            name: 'test 8?',
                            id: 8,
                            favorite: false
                        },
                        {
                            name: 'test 9?',
                            id: 9,
                            favorite: false
                        },
                        {
                            name: 'test 10?',
                            id: 10,
                            favorite: false
                        },
                        {
                            name: 'test 11?',
                            id: 11,
                            favorite: false
                        },
                        {
                            name: 'test 12?',
                            id: 12,
                            favorite: false
                        }
                    ],
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
                    questions: [
                        {
                            name: 'test 13?',
                            id: 13,
                            favorite: false
                        },
                        {
                            name: 'test 14?',
                            id: 14,
                            favorite: false
                        },
                        {
                            name: 'test 15?',
                            id: 15,
                            favorite: false
                        },
                        {
                            name: 'test 16?',
                            id: 16,
                            favorite: false
                        },
                        {
                            name: 'test 17?',
                            id: 17,
                            favorite: false
                        },
                        {
                            name: 'test 18?',
                            id: 18,
                            favorite: false
                        }
                    ],
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
        this.activatedRoute.params.subscribe(function (params) {
            console.log(params);
        });
        this.data = this.mainService.getWidget();
    }
    ContentComponent.prototype.searchTextChange = function (e) {
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
    ContentComponent.prototype.onNodeSelect = function (e, i) {
        console.log(e);
        this.selectedType = e.node.label;
        this.selectedFolder = e.node;
    };
    ContentComponent.prototype.selectType = function (item, index) {
        if (item.type === 'text') {
            this.selectedItem = item;
            console.log(item, 'item');
        }
        this.id = item.id;
    };
    ContentComponent.prototype.ngOnInit = function () {
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
    };
    ContentComponent.prototype.openSearch = function () {
        this.article = true;
        this.articles = false;
        this.searchResult = true;
        this.folders = false;
        this.topQuestions = false;
    };
    ContentComponent.prototype.backContent = function () {
        this.articles = true;
        this.folders = true;
        this.searchResult = false;
        this.topQuestions = false;
    };
    ContentComponent.prototype.closeSearch = function () {
        this.article = true;
        this.articles = true;
        this.searchResult = false;
        this.folders = true;
    };
    ContentComponent.prototype.showTopQuestions = function () {
        this.topQuestions = true;
        this.article = true;
        this.articles = false;
        this.searchResult = false;
        this.folders = false;
    };
    ContentComponent.prototype.detaleItem = function (data, index) {
        data.splice(index, 1);
        console.log('delete elem', index + 1);
    };
    ContentComponent.prototype.addTopQuestion = function (item, i) {
        if (item.favorite) {
            this.selectedTopQuestion = this.selectedTopQuestion.filter(function (i) {
                if (i.id !== item.id) {
                    return true;
                }
            });
            for (var key in this.selectedItem.questions) {
                if (this.selectedItem.questions[key].id === item.id) {
                    this.selectedItem.questions[key].favorite = false;
                }
            }
        }
        else {
            if (this.selectedTopQuestion.length < 5) {
                for (var key in this.selectedItem.questions) {
                    if (this.selectedItem.questions[key].id === item.id) {
                        this.selectedItem.questions[key].favorite = true;
                    }
                }
                this.selectedTopQuestion.push(item);
                console.log(this.selectedTopQuestion);
            }
        }
    };
    ContentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-content',
            template: __webpack_require__(/*! ./content.component.html */ "./src/app/main/widget-management/new-widget/content/content.component.html"),
            styles: [__webpack_require__(/*! ./content.component.scss */ "./src/app/main/widget-management/new-widget/content/content.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_main_service__WEBPACK_IMPORTED_MODULE_2__["MainService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], ContentComponent);
    return ContentComponent;
}());



/***/ }),

/***/ "./src/app/main/widget-management/new-widget/customize/customize.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/main/widget-management/new-widget/customize/customize.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  customize works!\n</p>\n"

/***/ }),

/***/ "./src/app/main/widget-management/new-widget/customize/customize.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/main/widget-management/new-widget/customize/customize.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vd2lkZ2V0LW1hbmFnZW1lbnQvbmV3LXdpZGdldC9jdXN0b21pemUvY3VzdG9taXplLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/main/widget-management/new-widget/customize/customize.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/main/widget-management/new-widget/customize/customize.component.ts ***!
  \************************************************************************************/
/*! exports provided: CustomizeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomizeComponent", function() { return CustomizeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_services_main_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/main.service */ "./src/app/shared/services/main.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var CustomizeComponent = /** @class */ (function () {
    function CustomizeComponent(mainService, router, activatedRoute) {
        this.mainService = mainService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.activatedRoute.params.subscribe(function (params) {
            console.log(params);
        });
        this.data = this.mainService.getWidget();
    }
    CustomizeComponent.prototype.ngOnInit = function () {
    };
    CustomizeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-customize',
            template: __webpack_require__(/*! ./customize.component.html */ "./src/app/main/widget-management/new-widget/customize/customize.component.html"),
            styles: [__webpack_require__(/*! ./customize.component.scss */ "./src/app/main/widget-management/new-widget/customize/customize.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_main_service__WEBPACK_IMPORTED_MODULE_2__["MainService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], CustomizeComponent);
    return CustomizeComponent;
}());



/***/ }),

/***/ "./src/app/main/widget-management/new-widget/emded/emded.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/main/widget-management/new-widget/emded/emded.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  emded works!\n</p>\n"

/***/ }),

/***/ "./src/app/main/widget-management/new-widget/emded/emded.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/main/widget-management/new-widget/emded/emded.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vd2lkZ2V0LW1hbmFnZW1lbnQvbmV3LXdpZGdldC9lbWRlZC9lbWRlZC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/main/widget-management/new-widget/emded/emded.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/main/widget-management/new-widget/emded/emded.component.ts ***!
  \****************************************************************************/
/*! exports provided: EmdedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmdedComponent", function() { return EmdedComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_services_main_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/main.service */ "./src/app/shared/services/main.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var EmdedComponent = /** @class */ (function () {
    function EmdedComponent(mainService, router, activatedRoute) {
        this.mainService = mainService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.activatedRoute.params.subscribe(function (params) {
            console.log(params);
        });
        this.data = this.mainService.getWidget();
    }
    EmdedComponent.prototype.ngOnInit = function () {
    };
    EmdedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-emded',
            template: __webpack_require__(/*! ./emded.component.html */ "./src/app/main/widget-management/new-widget/emded/emded.component.html"),
            styles: [__webpack_require__(/*! ./emded.component.scss */ "./src/app/main/widget-management/new-widget/emded/emded.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_main_service__WEBPACK_IMPORTED_MODULE_2__["MainService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], EmdedComponent);
    return EmdedComponent;
}());



/***/ }),

/***/ "./src/app/main/widget-management/new-widget/new-widget.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/main/widget-management/new-widget/new-widget.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"display: flex; flex-flow: column; justify-content: space-between; height: 100%;\">\n  <div class=\"head\">\n    <div class=\"df ai-c jc-b full-width\">\n      <div class=\"c-p df ai-c\">\n        <div [routerLink]=\"[ '/widget-manage' ]\">\n          <img class=\"m-r-5\" width=\"28px\" src=\"assets/img/arrow-back.png\" alt=\"\">\n        </div>\n        <div class=\"fs-20 m-r-30\">\n          Edit Widget\n        </div>\n        <input maxlength=\"16\" type=\"text\" [(ngModel)]=\"widgetName\" placeholder=\"Widget name\" pInputText />\n      </div>\n      <div class=\"df\">\n        <div [routerLink]=\"[ '/widget-chat' ]\" class=\"df ai-c m-r-30 c-p\">\n          <img class=\"m-r-5\" width=\"28px\" src=\"assets/img/view.png\" alt=\"\">\n          <div class=\"color-primary fs-14\">Widget Preview</div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"df \">\n    <div class=\"side-bar\">\n      <div class=\"p-t-20\">\n        <div class=\"side-bar__header\">\n          <p><span>Build</span></p>\n        </div>\n        <div (click)=\"goToTab('/new-widget/content')\" [ngClass]=\"{'active': router.url.slice(0, 12 + 7) === '/new-widget/content'}\" class=\"side-bar--item\">\n          <div>\n            <img class=\"inactive\" src=\"assets/img/query.png\" alt=\"\">\n            <img class=\"active\" src=\"assets/img/quest_blue.png\" alt=\"\">\n          </div>\n          <p class=\"bar-text\"><span>Content</span></p>\n        </div>\n        <div (click)=\"goToTab('/new-widget/customize')\" [ngClass]=\"{'active': router.url.slice(0, 12 + 9) === '/new-widget/customize'}\" class=\"side-bar--item\">\n          <div>\n            <img class=\"inactive\" src=\"assets/img/sheet.png\" alt=\"\">\n            <img class=\"active\" src=\"assets/img/cust_blue.png\" alt=\"\">\n          </div>\n          <p class=\"bar-text\"><span>Customize</span></p>\n        </div>\n        <div (click)=\"goToTab('/new-widget/emded')\" [ngClass]=\"{'active': router.url.slice(0, 12 + 5) === '/new-widget/emded'}\" class=\"side-bar--item\">\n          <div>\n            <img class=\"inactive\" src=\"assets/img/codee.png\" alt=\"\">\n            <img class=\"active\" src=\"assets/img/code__blue.png\" alt=\"\">\n          </div>\n          <p class=\"bar-text\"><span>Embed</span></p>\n        </div>\n      </div>\n      <div class=\"side-bar_wrap\">\n        <div class=\"manage\">\n          <div class=\"side-bar__header\">\n            <p><span>Manage</span></p>\n          </div>\n          <div (click)=\"goToTab('/new-widget/statistics')\" [ngClass]=\"{'active': router.url.slice(0, 12 + 10) === '/new-widget/statistics'}\" class=\"side-bar--item\">\n            <div>\n              <img class=\"inactive\" src=\"assets/img/statistics.png\" alt=\"\">\n              <img class=\"active\" src=\"assets/img/statistics_blue.png\" alt=\"\">\n            </div>\n            <p class=\"bar-text\"><span>Statistics</span></p>\n          </div>\n          <div (click)=\"goToTab('/new-widget/requests')\" [ngClass]=\"{'active': router.url.slice(0, 12 + 8) === '/new-widget/requests'}\" class=\"side-bar--item\">\n            <div>\n              <img class=\"inactive\" src=\"assets/img/request.png\" alt=\"\">\n              <img class=\"active\" src=\"assets/img/request__blue.png\" alt=\"\">\n            </div>\n            <p class=\"bar-text\"><span>Requests</span></p>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"content\">\n\n      <router-outlet></router-outlet>\n\n    </div>\n  </div>\n\n  <div class=\"foot\">\n    <div class=\"m-r-30\">\n      <button (click)=\"save()\" class=\"button-default\">Save</button>\n    </div>\n    <div class=\"m-r-30\">\n      <button (click)=\"cancel()\" class=\"button-default\">Cancel</button>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/main/widget-management/new-widget/new-widget.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/main/widget-management/new-widget/new-widget.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".head {\n  padding-left: 30px;\n  display: flex;\n  flex-flow: column;\n  align-items: flex-start;\n  justify-content: center;\n  min-height: 81px;\n  background-color: #e4e4e4; }\n\n.foot {\n  padding-left: 30px;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  min-height: 81px;\n  background-color: #e4e4e4; }\n\n.content {\n  width: 100%;\n  padding: 20px; }\n\n.side-bar {\n  width: 100px;\n  min-width: 100px;\n  background: inherit;\n  background-color: #f2f2f2; }\n\n.side-bar--item {\n    width: 94px;\n    height: 93px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    margin: 6px auto 0 auto;\n    cursor: pointer; }\n\n.side-bar_wrap {\n  padding-top: 20px; }\n\n.build {\n  height: 360px; }\n\n.side-bar__header {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 36px;\n  background-color: #2292a1;\n  font-size: 18px;\n  font-weight: 700;\n  color: #ffffff; }\n\n.bar-text {\n  font-size: 12px;\n  color: #666666;\n  margin: 7px 0 0 0; }\n\n.side-bar--item img.active {\n  display: none; }\n\n.wrside-bar--itemap img.inactive {\n  display: block; }\n\n.side-bar--item.active img.inactive {\n  display: none; }\n\n.side-bar--item.active img.active {\n  display: block; }\n\n.bar-text.active {\n  color: #2292a1; }\n\n.side-bar--item.active > p {\n  color: #2292a1; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NodW1pay9Eb2N1bWVudHMva21zLXNwb3Qvc3JjL2FwcC9tYWluL3dpZGdldC1tYW5hZ2VtZW50L25ldy13aWRnZXQvbmV3LXdpZGdldC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLHVCQUF1QjtFQUN2Qix1QkFBdUI7RUFDdkIsZ0JBQWdCO0VBQ2hCLHlCQUF3QyxFQUFBOztBQUUxQztFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QixnQkFBZ0I7RUFDaEIseUJBQXdDLEVBQUE7O0FBRTFDO0VBQ0UsV0FBVztFQUNYLGFBQWEsRUFBQTs7QUFFZjtFQUNFLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLHlCQUF3QyxFQUFBOztBQUN4QztJQUNFLFdBQVc7SUFDWCxZQUFZO0lBQ1osYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLHVCQUF1QjtJQUN2QixlQUFlLEVBQUE7O0FBR25CO0VBQ0UsaUJBQWlCLEVBQUE7O0FBRW5CO0VBQ0UsYUFBYSxFQUFBOztBQUVmO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLHlCQUF1QztFQUN2QyxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGNBQWMsRUFBQTs7QUFHaEI7RUFDRSxlQUFlO0VBQ2YsY0FBYztFQUNkLGlCQUFpQixFQUFBOztBQUduQjtFQUNFLGFBQWEsRUFBQTs7QUFFZjtFQUNFLGNBQWMsRUFBQTs7QUFFaEI7RUFDRSxhQUFhLEVBQUE7O0FBRWY7RUFDRSxjQUFjLEVBQUE7O0FBR2hCO0VBQ0UsY0FBNEIsRUFBQTs7QUFFOUI7RUFDRSxjQUFjLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tYWluL3dpZGdldC1tYW5hZ2VtZW50L25ldy13aWRnZXQvbmV3LXdpZGdldC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkIHtcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtaW4taGVpZ2h0OiA4MXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIyOCwgMjI4LCAyMjgsIDEpO1xufVxuLmZvb3Qge1xuICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIG1pbi1oZWlnaHQ6IDgxcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjI4LCAyMjgsIDIyOCwgMSk7XG59XG4uY29udGVudHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG4uc2lkZS1iYXIge1xuICB3aWR0aDogMTAwcHg7XG4gIG1pbi13aWR0aDogMTAwcHg7XG4gIGJhY2tncm91bmQ6IGluaGVyaXQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQyLCAyNDIsIDI0MiwgMSk7XG4gICYtLWl0ZW0ge1xuICAgIHdpZHRoOiA5NHB4O1xuICAgIGhlaWdodDogOTNweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtYXJnaW46IDZweCBhdXRvIDAgYXV0bztcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbn1cbi5zaWRlLWJhcl93cmFwIHtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG59XG4uYnVpbGQge1xuICBoZWlnaHQ6IDM2MHB4O1xufVxuLnNpZGUtYmFyX19oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgaGVpZ2h0OiAzNnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDM0LCAxNDYsIDE2MSwgMSk7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG5cbi5iYXItdGV4dCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICM2NjY2NjY7XG4gIG1hcmdpbjogN3B4IDAgMCAwO1xufVxuXG4uc2lkZS1iYXItLWl0ZW0gaW1nLmFjdGl2ZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4ud3JzaWRlLWJhci0taXRlbWFwIGltZy5pbmFjdGl2ZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLnNpZGUtYmFyLS1pdGVtLmFjdGl2ZSBpbWcuaW5hY3RpdmUge1xuICBkaXNwbGF5OiBub25lO1xufVxuLnNpZGUtYmFyLS1pdGVtLmFjdGl2ZSBpbWcuYWN0aXZlIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5iYXItdGV4dC5hY3RpdmUge1xuICBjb2xvcjogcmdiYSgzNCwgMTQ2LCAxNjEsIDEpO1xufVxuLnNpZGUtYmFyLS1pdGVtLmFjdGl2ZSA+IHAge1xuICBjb2xvcjogIzIyOTJhMTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/main/widget-management/new-widget/new-widget.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/main/widget-management/new-widget/new-widget.component.ts ***!
  \***************************************************************************/
/*! exports provided: NewWidgetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewWidgetComponent", function() { return NewWidgetComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_services_main_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/main.service */ "./src/app/shared/services/main.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var NewWidgetComponent = /** @class */ (function () {
    function NewWidgetComponent(mainService, router, activatedRoute) {
        this.mainService = mainService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.data = this.mainService.getWidget();
        var curentId = +this.router.url.split('/')[this.router.url.split('/').length - 1];
        this.activatedRoute.params.subscribe(function (params) {
        });
        if (!isNaN(curentId)) {
            this.id = curentId;
            for (var key in this.data) {
                if (+this.data[key].id === +this.id) {
                    this.dataToEdit = this.data[key];
                    this.widgetName = this.dataToEdit.name;
                }
            }
        }
    }
    NewWidgetComponent.prototype.ngOnInit = function () {
    };
    NewWidgetComponent.prototype.save = function () {
        if (!this.id) {
            this.mainService.addWidget(this.widgetName);
        }
        else {
            this.dataToEdit.name = this.widgetName;
            this.mainService.editWidget(this.dataToEdit);
        }
        this.router.navigateByUrl('/widget-manage');
    };
    NewWidgetComponent.prototype.cancel = function () {
        this.widgetName = null;
        this.dataToEdit = {};
        this.router.navigateByUrl('/widget-manage');
    };
    NewWidgetComponent.prototype.goToTab = function (url) {
        if (!isNaN(this.id)) {
            this.router.navigate([url + '/' + this.id]);
        }
        else {
            this.router.navigateByUrl(url);
        }
    };
    NewWidgetComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-new-widget',
            template: __webpack_require__(/*! ./new-widget.component.html */ "./src/app/main/widget-management/new-widget/new-widget.component.html"),
            styles: [__webpack_require__(/*! ./new-widget.component.scss */ "./src/app/main/widget-management/new-widget/new-widget.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_main_service__WEBPACK_IMPORTED_MODULE_2__["MainService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], NewWidgetComponent);
    return NewWidgetComponent;
}());



/***/ }),

/***/ "./src/app/main/widget-management/new-widget/requests/requests.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/main/widget-management/new-widget/requests/requests.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  requests works!\n</p>\n"

/***/ }),

/***/ "./src/app/main/widget-management/new-widget/requests/requests.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/main/widget-management/new-widget/requests/requests.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vd2lkZ2V0LW1hbmFnZW1lbnQvbmV3LXdpZGdldC9yZXF1ZXN0cy9yZXF1ZXN0cy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/main/widget-management/new-widget/requests/requests.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/main/widget-management/new-widget/requests/requests.component.ts ***!
  \**********************************************************************************/
/*! exports provided: RequestsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestsComponent", function() { return RequestsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_services_main_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/main.service */ "./src/app/shared/services/main.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var RequestsComponent = /** @class */ (function () {
    function RequestsComponent(mainService, router, activatedRoute) {
        this.mainService = mainService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.activatedRoute.params.subscribe(function (params) {
            console.log(params);
        });
        this.data = this.mainService.getWidget();
    }
    RequestsComponent.prototype.ngOnInit = function () {
    };
    RequestsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-requests',
            template: __webpack_require__(/*! ./requests.component.html */ "./src/app/main/widget-management/new-widget/requests/requests.component.html"),
            styles: [__webpack_require__(/*! ./requests.component.scss */ "./src/app/main/widget-management/new-widget/requests/requests.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_main_service__WEBPACK_IMPORTED_MODULE_2__["MainService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], RequestsComponent);
    return RequestsComponent;
}());



/***/ }),

/***/ "./src/app/main/widget-management/new-widget/statistics/statistics.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/main/widget-management/new-widget/statistics/statistics.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  statistics works!\n</p>\n"

/***/ }),

/***/ "./src/app/main/widget-management/new-widget/statistics/statistics.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/main/widget-management/new-widget/statistics/statistics.component.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vd2lkZ2V0LW1hbmFnZW1lbnQvbmV3LXdpZGdldC9zdGF0aXN0aWNzL3N0YXRpc3RpY3MuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/main/widget-management/new-widget/statistics/statistics.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/main/widget-management/new-widget/statistics/statistics.component.ts ***!
  \**************************************************************************************/
/*! exports provided: StatisticsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatisticsComponent", function() { return StatisticsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_services_main_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/main.service */ "./src/app/shared/services/main.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var StatisticsComponent = /** @class */ (function () {
    function StatisticsComponent(mainService, router, activatedRoute) {
        this.mainService = mainService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.activatedRoute.params.subscribe(function (params) {
            console.log(params);
        });
        this.data = this.mainService.getWidget();
    }
    StatisticsComponent.prototype.ngOnInit = function () {
    };
    StatisticsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-statistics',
            template: __webpack_require__(/*! ./statistics.component.html */ "./src/app/main/widget-management/new-widget/statistics/statistics.component.html"),
            styles: [__webpack_require__(/*! ./statistics.component.scss */ "./src/app/main/widget-management/new-widget/statistics/statistics.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_main_service__WEBPACK_IMPORTED_MODULE_2__["MainService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], StatisticsComponent);
    return StatisticsComponent;
}());



/***/ }),

/***/ "./src/app/main/widget-management/widget-management.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/main/widget-management/widget-management.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"w-management__header\">\n  <h3 class=\"w-manage-title\">Manage and customize the SPOT widgets in your site</h3>\n  <p><span>A short help text will appear here with an option to read more / go to the full manual</span></p>\n</div>\n<div class=\"w-management-main\">\n\n  <div class=\"widget-container\" [ngStyle]=\"{'max-width.px': containerWidth}\">\n    <div *ngFor=\"let widget of widgetData; let i = index\">\n      <div class=\"widget-wrap\">\n        <div (mouseenter)=\"showAction = i\" (mouseleave)=\"showAction = null\" class=\"widget-card\">\n          <div class=\"widget-head\">\n            <div class=\"head-logo\">\n              <img class=\"logo-img\" src=\"assets/img/umbrella.gif\" alt=\"umbrella\">\n            </div>\n            <p>\n              <span *ngIf=\"edit !== i\" (dblclick)=\"edit = i;\">{{widget.name}}</span>\n              <span *ngIf=\"edit === i\" class=\"df ai-c\">\n                <input maxlength=\"16\" [(ngModel)]=\"widget.name\" class=\"assistant-input m-0 name-field\" type=\"text\" name=\"\"\n                  placeholder=\"\">\n                <button class=\"button-default btn-ok\" (click)=\"edit = null\">Ok</button>\n              </span>\n            </p>\n          </div>\n          <input class=\"assistant-input\" type=\"text\" name=\"\" placeholder=\"\">\n          <div class=\"frequent-questions\">\n            <div *ngFor=\"let ques of widget.quesions; let iQues = index\">\n              <p *ngIf=\"iQues <= 5 \">\n                <span>{{ques}}</span>\n              </p>\n            </div>\n          </div>\n          <div *ngIf=\"showAction === i\" class=\"widget-more\">\n            <div class=\"wid-wrap\">\n              <a [routerLink]=\"[ '/new-widget/content', widget.id]\" class=\"more-info\" title=\"Edit\">\n                <img src=\"assets/img/pen.png\" alt=\"pic\">\n              </a>\n              <a (click)=\"dublicateWidget(widget, i)\" class=\"more-info\" title=\"Dublicate\">\n                <img src=\"assets/img/copy.png\" alt=\"pic\">\n              </a>\n              <a (click)=\"showCode = true\" class=\"more-info\" title=\"Copy Code\">\n                <img src=\"assets/img/code.png\" alt=\"pic\">\n              </a>\n              <a [routerLink]=\"[ '/new-widget/statistics', widget.id]\" class=\"more-info\" title=\"Usage Statistics\">\n                <img src=\"assets/img/diagram.png\" alt=\"pic\">\n              </a>\n              <a [routerLink]=\"[ '/widget-chat' ]\" class=\"more-info\" title=\"Preview Widget\">\n                <img src=\"assets/img/eye.png\" alt=\"pic\">\n              </a>\n              <a (click)=\"detaleItem('dialog', i)\" class=\"more-info\" title=\"Delete\">\n                <img src=\"assets/img/bucket.png\" alt=\"pic\">\n              </a>\n            </div>\n          </div>\n        </div>\n        <p *ngIf=\"widget.demo\" class=\"widget_text\"><span>Use this demo widget to explore what options are available for\n            you</span></p>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"widget-wrap m-r-0\">\n    <div class=\"add_new-widget\" [routerLink]=\"[ '/new-widget/content' ]\">\n      <p class=\"add\"><span>Add new widget</span></p>\n      <img src=\"assets/img/cross.png\" alt=\"cross\">\n    </div>\n    <p class=\"widget_text\"><span>Click to create your new widget</span></p>\n  </div>\n</div>\n\n<div *ngIf=\"showCode\" (click)=\"showCode = false\" class=\"bg-modal\"></div>\n<div *ngIf=\"showCode\" class=\"modal\">\n  <div class=\"modal-body-wrap\">\n    <div class=\"modal-body p-0\" style=\"width: 80vw; max-width: 600px;\">\n      <div class=\"modal-head\">\n        <span class=\"fs-13\"><b>Copy Widget Code</b></span>\n        <img (click)=\"showCode = false\" class=\"c-p\" width=\"25px\" src=\"assets/img/times-black.png\" alt=\"\">\n      </div>\n      <div class=\"code-wrap\">\n        {{code}}\n      </div>\n      <div class=\"df ai-c jc-c p-t-20 p-b-20\">\n        <button class=\"button-default bg-gray m-r-30\" ngxClipboard [cbContent]=\"code\">Copy Code</button>\n        <button class=\"button-default bg-gray\" (click)=\"showCode = false\">Close</button>\n      </div>\n    </div>\n  </div>\n</div>\n\n<app-dialog *ngIf=\"showDeleteDialog\" [question]=\"'Are you sure you would like to delete this widget?'\" (result)=\"detaleItem('delete', null, $event)\"></app-dialog>"

/***/ }),

/***/ "./src/app/main/widget-management/widget-management.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/main/widget-management/widget-management.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p {\n  margin: 0; }\n\n.w-management__header {\n  text-align: center;\n  font-size: 16px;\n  color: #999999;\n  margin: 60px 0 20px 0;\n  line-height: 2.5; }\n\n.w-manage-title {\n  color: #333333;\n  font-weight: 400; }\n\n.w-management-main {\n  display: flex;\n  padding: 0 40px; }\n\n.widget-card {\n  position: relative;\n  width: 257px;\n  min-width: 257px;\n  height: 256px;\n  background: inherit;\n  background-color: white;\n  border: 1px solid #cccccc; }\n\n.add_new-widget {\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  justify-content: center;\n  font-weight: 700;\n  color: #cccccc;\n  width: 257px;\n  height: 256px;\n  background: url(/assets/img/dashed.png);\n  background-size: 100% 100%;\n  cursor: pointer; }\n\n.add {\n  display: block;\n  margin-bottom: 15px; }\n\n.widget-wrap {\n  width: 259px;\n  margin: 20px 25px; }\n\n.widget-head {\n  display: flex;\n  align-items: center;\n  font-size: 14px;\n  font-weight: 700;\n  color: #ffffff;\n  height: 38px;\n  background: inherit;\n  background-color: #003366;\n  padding-right: 12px; }\n\n.head-logo {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 33px;\n  min-width: 33px;\n  height: 33px;\n  border-radius: 50%;\n  background-color: #f2f2f2;\n  overflow: hidden;\n  margin: 0 10px; }\n\n.widget_text {\n  font-size: 14px;\n  color: #999999;\n  margin: 15px 0; }\n\n.logo-img {\n  width: 24px;\n  height: 24px; }\n\n.assistant-input {\n  min-height: 30px;\n  width: -webkit-fill-available;\n  background-color: white;\n  border: 1px solid #999999;\n  outline: none;\n  padding-left: 8px;\n  margin: 21px 12px 17px 12px; }\n\n.frequent-questions {\n  font-size: 11px;\n  color: #1e1e1e;\n  line-height: 2;\n  padding-left: 28px; }\n\n.widget-more {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background: rgba(177, 178, 180, 0.4);\n  top: 0;\n  pointer-events: none; }\n\n.wid-wrap {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: flex-end;\n  width: 100%;\n  margin-top: 62px; }\n\n.more-info {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 50px;\n  height: 50px;\n  background: #ffffff;\n  border-radius: 50%;\n  margin: 20px 10px 20px 10px;\n  cursor: pointer;\n  padding: 11px;\n  box-sizing: border-box;\n  pointer-events: all; }\n\n.more-info img {\n    width: 100%; }\n\n.name-field {\n  position: relative;\n  z-index: 1;\n  width: 100%; }\n\n.btn-ok {\n  position: relative;\n  z-index: 1;\n  min-width: 30px; }\n\n.modal-head {\n  height: 57px;\n  background: inherit;\n  background-color: #f2f2f2;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 20px;\n  padding: 0 30px; }\n\n.code-wrap {\n  border-width: 1px;\n  border-style: solid;\n  border-color: #cccccc;\n  border-radius: 0px;\n  padding: 5px;\n  max-height: 70vh;\n  overflow-y: auto;\n  width: calc(100% - 60px);\n  margin: auto;\n  white-space: pre-line; }\n\n.code-wrap::-webkit-scrollbar {\n    background-color: #f2f2f2;\n    border: none;\n    border-radius: 4px;\n    width: 11px; }\n\n.code-wrap::-webkit-scrollbar-thumb {\n    width: 7px;\n    background-color: #999999;\n    border: none;\n    border-radius: 4px; }\n\n.widget-container {\n  display: flex;\n  flex-wrap: wrap; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NodW1pay9Eb2N1bWVudHMva21zLXNwb3Qvc3JjL2FwcC9tYWluL3dpZGdldC1tYW5hZ2VtZW50L3dpZGdldC1tYW5hZ2VtZW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsU0FBUyxFQUFBOztBQUVYO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixjQUFjO0VBQ2QscUJBQXFCO0VBQ3JCLGdCQUFnQixFQUFBOztBQUVsQjtFQUNFLGNBQWM7RUFDZCxnQkFBZ0IsRUFBQTs7QUFFbEI7RUFDRSxhQUFhO0VBQ2IsZUFBZSxFQUFBOztBQUVqQjtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXdDO0VBQ3hDLHlCQUF3QyxFQUFBOztBQUUxQztFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLFlBQVk7RUFDWixhQUFhO0VBQ2IsdUNBQXVDO0VBQ3ZDLDBCQUEwQjtFQUMxQixlQUFlLEVBQUE7O0FBRWpCO0VBQ0UsY0FBYztFQUNkLG1CQUFtQixFQUFBOztBQUVyQjtFQUNFLFlBQVk7RUFDWixpQkFBaUIsRUFBQTs7QUFFbkI7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIseUJBQXFDO0VBQ3JDLG1CQUFtQixFQUFBOztBQUVyQjtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLFdBQVc7RUFDWCxlQUFlO0VBQ2YsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsZ0JBQWdCO0VBQ2hCLGNBQWMsRUFBQTs7QUFFaEI7RUFDRSxlQUFlO0VBQ2YsY0FBYztFQUNkLGNBQWMsRUFBQTs7QUFFaEI7RUFDRSxXQUFXO0VBQ1gsWUFBWSxFQUFBOztBQUVkO0VBQ0UsZ0JBQWdCO0VBQ2hCLDZCQUE2QjtFQUM3Qix1QkFBd0M7RUFDeEMseUJBQXdDO0VBQ3hDLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsMkJBQTJCLEVBQUE7O0FBRTdCO0VBQ0UsZUFBZTtFQUNmLGNBQWM7RUFDZCxjQUFjO0VBQ2Qsa0JBQWtCLEVBQUE7O0FBRXBCO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osb0NBQW9DO0VBQ3BDLE1BQU07RUFDTixvQkFBb0IsRUFBQTs7QUFFdEI7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLHVCQUF1QjtFQUN2QixxQkFBcUI7RUFDckIsV0FBVztFQUNYLGdCQUFnQixFQUFBOztBQUVsQjtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLFdBQVc7RUFDWCxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQiwyQkFBMkI7RUFDM0IsZUFBZTtFQUNmLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CLEVBQUE7O0FBWnJCO0lBY0ksV0FBVyxFQUFBOztBQUdmO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixXQUFXLEVBQUE7O0FBRWI7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGVBQWUsRUFBQTs7QUFFakI7RUFDRSxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLHlCQUF3QztFQUN4QyxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIsZUFBZSxFQUFBOztBQUVqQjtFQUNFLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIscUJBQW9DO0VBQ3BDLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQix3QkFBd0I7RUFDeEIsWUFBWTtFQUNaLHFCQUFxQixFQUFBOztBQVZ2QjtJQVlJLHlCQUF3QztJQUN4QyxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFdBQVcsRUFBQTs7QUFmZjtJQWtCSSxVQUFVO0lBQ1YseUJBQXdDO0lBQ3hDLFlBQVk7SUFDWixrQkFBa0IsRUFBQTs7QUFHdEI7RUFDRSxhQUFhO0VBQ2IsZUFBZSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvbWFpbi93aWRnZXQtbWFuYWdlbWVudC93aWRnZXQtbWFuYWdlbWVudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi9hc3NldHMvc2Nzcy9taXhpbnMvYnJlYWtwb2ludHNcIjtcblxucCB7XG4gIG1hcmdpbjogMDtcbn1cbi53LW1hbmFnZW1lbnRfX2hlYWRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogIzk5OTk5OTtcbiAgbWFyZ2luOiA2MHB4IDAgMjBweCAwO1xuICBsaW5lLWhlaWdodDogMi41O1xufVxuLnctbWFuYWdlLXRpdGxlIHtcbiAgY29sb3I6ICMzMzMzMzM7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG4udy1tYW5hZ2VtZW50LW1haW4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nOiAwIDQwcHg7XG59XG4ud2lkZ2V0LWNhcmQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAyNTdweDtcbiAgbWluLXdpZHRoOiAyNTdweDtcbiAgaGVpZ2h0OiAyNTZweDtcbiAgYmFja2dyb3VuZDogaW5oZXJpdDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyMDQsIDIwNCwgMjA0LCAxKTtcbn1cbi5hZGRfbmV3LXdpZGdldCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogI2NjY2NjYztcbiAgd2lkdGg6IDI1N3B4O1xuICBoZWlnaHQ6IDI1NnB4O1xuICBiYWNrZ3JvdW5kOiB1cmwoL2Fzc2V0cy9pbWcvZGFzaGVkLnBuZyk7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uYWRkIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG4ud2lkZ2V0LXdyYXAge1xuICB3aWR0aDogMjU5cHg7XG4gIG1hcmdpbjogMjBweCAyNXB4O1xufVxuLndpZGdldC1oZWFkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgaGVpZ2h0OiAzOHB4O1xuICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDUxLCAxMDIsIDEpO1xuICBwYWRkaW5nLXJpZ2h0OiAxMnB4O1xufVxuLmhlYWQtbG9nbyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB3aWR0aDogMzNweDtcbiAgbWluLXdpZHRoOiAzM3B4O1xuICBoZWlnaHQ6IDMzcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgbWFyZ2luOiAwIDEwcHg7XG59XG4ud2lkZ2V0X3RleHQge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjOTk5OTk5O1xuICBtYXJnaW46IDE1cHggMDtcbn1cbi5sb2dvLWltZyB7XG4gIHdpZHRoOiAyNHB4O1xuICBoZWlnaHQ6IDI0cHg7XG59XG4uYXNzaXN0YW50LWlucHV0IHtcbiAgbWluLWhlaWdodDogMzBweDtcbiAgd2lkdGg6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTUzLCAxNTMsIDE1MywgMSk7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHBhZGRpbmctbGVmdDogOHB4O1xuICBtYXJnaW46IDIxcHggMTJweCAxN3B4IDEycHg7XG59XG4uZnJlcXVlbnQtcXVlc3Rpb25zIHtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBjb2xvcjogIzFlMWUxZTtcbiAgbGluZS1oZWlnaHQ6IDI7XG4gIHBhZGRpbmctbGVmdDogMjhweDtcbn1cbi53aWRnZXQtbW9yZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZDogcmdiYSgxNzcsIDE3OCwgMTgwLCAwLjQpO1xuICB0b3A6IDA7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuLndpZC13cmFwIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLXRvcDogNjJweDtcbn1cbi5tb3JlLWluZm8ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBtYXJnaW46IDIwcHggMTBweCAyMHB4IDEwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcGFkZGluZzogMTFweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgcG9pbnRlci1ldmVudHM6IGFsbDtcbiAgaW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuLm5hbWUtZmllbGQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDE7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmJ0bi1vayB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTtcbiAgbWluLXdpZHRoOiAzMHB4O1xufVxuLm1vZGFsLWhlYWQge1xuICBoZWlnaHQ6IDU3cHg7XG4gIGJhY2tncm91bmQ6IGluaGVyaXQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQyLCAyNDIsIDI0MiwgMSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgcGFkZGluZzogMCAzMHB4O1xufVxuLmNvZGUtd3JhcCB7XG4gIGJvcmRlci13aWR0aDogMXB4O1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItY29sb3I6IHJnYmEoMjA0LCAyMDQsIDIwNCwgMSk7XG4gIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgcGFkZGluZzogNXB4O1xuICBtYXgtaGVpZ2h0OiA3MHZoO1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICB3aWR0aDogY2FsYygxMDAlIC0gNjBweCk7XG4gIG1hcmdpbjogYXV0bztcbiAgd2hpdGUtc3BhY2U6IHByZS1saW5lO1xuICAmOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDIsIDI0MiwgMjQyLCAxKTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIHdpZHRoOiAxMXB4O1xuICB9XG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICB3aWR0aDogN3B4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTUzLCAxNTMsIDE1MywgMSk7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgfVxufVxuLndpZGdldC1jb250YWluZXJ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn0iXX0= */"

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
/* harmony import */ var src_app_shared_services_main_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/main.service */ "./src/app/shared/services/main.service.ts");



var WidgetManagementComponent = /** @class */ (function () {
    function WidgetManagementComponent(mainService) {
        this.mainService = mainService;
        this.showAction = null;
        this.edit = null;
        this.widgetNameDemo = 'Demo Assistant';
        this.widgetData = [];
        this.code = "\n  <script src=\"https://code.jquery.com/jquery-3.1.1.min.js\"></script>\n  \n  <script src=\"https://code.highcharts.com/highcharts.js\"></script>\n  \n  <script src=\"https://code.highcharts.com/modules/data.js\"></script>\n  \n  <script src=\"https://code.highcharts.com/modules/series-label.js\"></script>\n  \n  <script src=\"https://code.highcharts.com/modules/exporting.js\"></script>\n  \n  <script src=\"https://code.highcharts.com/modules/export-data.js\"></script>\n  \n  \n  \n  <!-- Additional files for the Highslide popup effect -->\n  \n  <script src=\"https://www.highcharts.com/media/com_demo/js/highslide-full.min.js\"></script>\n  \n  <script src=\"https://www.highcharts.com/media/com_demo/js/highslide.config.js\" charset=\"utf-8\"></script>\n  \n  <link rel=\"stylesheet\" type=\"text/css\" href=\"https://www.highcharts.com/media/com_demo/css/highslide.css\" />\n  \n  \n  \n  <div id=\"container\" style=\"min-width: 310px; height: 400px; margin: 0 auto\"></div>\n  \n  <script src=\"https://code.jquery.com/jquery-3.1.1.min.js\"></script>\n  \n  <script src=\"https://code.highcharts.com/highcharts.js\"></script>\n  \n  <script src=\"https://code.highcharts.com/modules/data.js\"></script>\n  \n  <script src=\"https://code.highcharts.com/modules/series-label.js\"></script>\n  \n  <script src=\"https://code.highcharts.com/modules/exporting.js\"></script>";
    }
    WidgetManagementComponent.prototype.ngOnInit = function () {
        this.widgetData = this.mainService.getWidget();
        this.getContainerWidth();
    };
    WidgetManagementComponent.prototype.detaleItem = function (flag, index, event) {
        if (flag === 'dialog') {
            this.deleteIndex = index;
            this.showDeleteDialog = true;
        }
        else if (event) {
            this.widgetData.splice(this.deleteIndex, 1);
            console.log('delete elem', index + 1);
            this.showDeleteDialog = false;
        }
        else if (!event) {
            this.showDeleteDialog = false;
        }
    };
    WidgetManagementComponent.prototype.dublicateWidget = function (item, index) {
        this.widgetData.splice(index, 0, Object.assign({}, item));
    };
    WidgetManagementComponent.prototype.getContainerWidth = function () {
        console.log(window.innerWidth);
        var koef = Math.floor((window.innerWidth - 80 - 284) / 309);
        this.containerWidth = koef * 309;
    };
    WidgetManagementComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-widget-management',
            template: __webpack_require__(/*! ./widget-management.component.html */ "./src/app/main/widget-management/widget-management.component.html"),
            styles: [__webpack_require__(/*! ./widget-management.component.scss */ "./src/app/main/widget-management/widget-management.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_main_service__WEBPACK_IMPORTED_MODULE_2__["MainService"]])
    ], WidgetManagementComponent);
    return WidgetManagementComponent;
}());



/***/ }),

/***/ "./src/app/main/widget-qa/widget-qa.component.html":
/*!*********************************************************!*\
  !*** ./src/app/main/widget-qa/widget-qa.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  widget-qa works!\n</p>\n"

/***/ }),

/***/ "./src/app/main/widget-qa/widget-qa.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/main/widget-qa/widget-qa.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vd2lkZ2V0LXFhL3dpZGdldC1xYS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/main/widget-qa/widget-qa.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/main/widget-qa/widget-qa.component.ts ***!
  \*******************************************************/
/*! exports provided: WidgetQaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetQaComponent", function() { return WidgetQaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var WidgetQaComponent = /** @class */ (function () {
    function WidgetQaComponent() {
    }
    WidgetQaComponent.prototype.ngOnInit = function () {
    };
    WidgetQaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-widget-qa',
            template: __webpack_require__(/*! ./widget-qa.component.html */ "./src/app/main/widget-qa/widget-qa.component.html"),
            styles: [__webpack_require__(/*! ./widget-qa.component.scss */ "./src/app/main/widget-qa/widget-qa.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], WidgetQaComponent);
    return WidgetQaComponent;
}());



/***/ }),

/***/ "./src/app/shared/dialog-folder-name/dialog-folder-name.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/shared/dialog-folder-name/dialog-folder-name.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"bg-modal\"></div>\n<div class=\"modal\">\n  <div class=\"modal-body-wrap\">\n    <div class=\"modal-body\" style=\"width: 80vw; max-width: 600px; padding: 40px;\">\n      <h2 class=\"text-center\">\n        {{title}}\n      </h2>\n      <input class=\"full-width m-b-20\" [(ngModel)]=\"fieldValue\" type=\"text\" pInputText>\n      <div class=\"df jc-c\">\n        <button (click)=\"answer(fieldValue)\" class=\"button-default m-r-40\">Ok</button>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/shared/dialog-folder-name/dialog-folder-name.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/shared/dialog-folder-name/dialog-folder-name.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9kaWFsb2ctZm9sZGVyLW5hbWUvZGlhbG9nLWZvbGRlci1uYW1lLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/shared/dialog-folder-name/dialog-folder-name.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/shared/dialog-folder-name/dialog-folder-name.component.ts ***!
  \***************************************************************************/
/*! exports provided: DialogFolderNameComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogFolderNameComponent", function() { return DialogFolderNameComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DialogFolderNameComponent = /** @class */ (function () {
    function DialogFolderNameComponent() {
        this.result = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"];
    }
    DialogFolderNameComponent.prototype.answer = function (value) {
        this.result.emit(value);
    };
    DialogFolderNameComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DialogFolderNameComponent.prototype, "title", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DialogFolderNameComponent.prototype, "fieldValue", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DialogFolderNameComponent.prototype, "result", void 0);
    DialogFolderNameComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dialog-folder-name',
            template: __webpack_require__(/*! ./dialog-folder-name.component.html */ "./src/app/shared/dialog-folder-name/dialog-folder-name.component.html"),
            styles: [__webpack_require__(/*! ./dialog-folder-name.component.scss */ "./src/app/shared/dialog-folder-name/dialog-folder-name.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DialogFolderNameComponent);
    return DialogFolderNameComponent;
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

module.exports = "header {\n  height: 81px;\n  background-color: #666666;\n  display: flex;\n  align-items: center;\n  padding: 10px; }\n\n.logo-lable {\n  font-family: \"Arial Bold\", \"Arial\";\n  font-weight: 700;\n  font-style: normal;\n  font-size: 22px;\n  color: #ffffff;\n  text-align: left;\n  margin-right: 40px; }\n\n.vertical-line {\n  height: 30px;\n  border-left: 1px solid white;\n  margin-right: 40px; }\n\nnav a {\n  font-size: 16px;\n  color: #FFFFFF;\n  margin-right: 30px;\n  padding: 5px 10px; }\n\nnav a.active {\n    border-bottom: 1px solid white; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NodW1pay9Eb2N1bWVudHMva21zLXNwb3Qvc3JjL2FwcC9zaGFyZWQvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWix5QkFBd0M7RUFDeEMsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixhQUFhLEVBQUE7O0FBRWY7RUFDRSxrQ0FBa0M7RUFDbEMsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixrQkFBa0IsRUFBQTs7QUFFcEI7RUFDRSxZQUFZO0VBQ1osNEJBQTRCO0VBQzVCLGtCQUFrQixFQUFBOztBQUVwQjtFQUVRLGVBQWU7RUFDZixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGlCQUFpQixFQUFBOztBQUx6QjtJQU9ZLDhCQUE4QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoZWFkZXIge1xuICBoZWlnaHQ6IDgxcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTAyLCAxMDIsIDEwMiwgMSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG4ubG9nby1sYWJsZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkFyaWFsIEJvbGRcIiwgXCJBcmlhbFwiO1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIG1hcmdpbi1yaWdodDogNDBweDtcbn1cbi52ZXJ0aWNhbC1saW5lIHtcbiAgaGVpZ2h0OiAzMHB4O1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHdoaXRlO1xuICBtYXJnaW4tcmlnaHQ6IDQwcHg7XG59XG5uYXZ7XG4gICAgYXtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICBjb2xvcjogI0ZGRkZGRjtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xuICAgICAgICBwYWRkaW5nOiA1cHggMTBweDtcbiAgICAgICAgJi5hY3RpdmV7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgd2hpdGU7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0= */"

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

/***/ "./src/app/shared/services/main.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/services/main.service.ts ***!
  \*************************************************/
/*! exports provided: MainService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainService", function() { return MainService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MainService = /** @class */ (function () {
    function MainService() {
        this.widgetData = [
            {
                name: 'Demo Assistant',
                quesions: [
                    'Frequently asked question 1',
                    'Frequently asked question 2',
                    'Frequently asked question 3',
                    'Frequently asked question 4',
                    'Frequently asked question 5',
                ],
                demo: true,
                id: 1
            }
        ];
    }
    MainService.prototype.addWidget = function (item) {
        this.widgetData.push({
            name: item,
            quesions: [],
            demo: false,
            id: this.widgetData.length + 1
        });
    };
    MainService.prototype.editWidget = function (item) {
        for (var key in this.widgetData) {
            if (this.widgetData[key].id === item.id) {
                this.widgetData[key] = item;
            }
        }
    };
    MainService.prototype.getWidget = function () {
        return this.widgetData;
    };
    MainService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MainService);
    return MainService;
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

module.exports = __webpack_require__(/*! /home/shumik/Documents/kms-spot/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map