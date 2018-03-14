webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n  <div class=\"row\">\r\n    <app-left-side-bar></app-left-side-bar>\r\n    <app-content></app-content>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material_tabs__ = __webpack_require__("./node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__left_side_bar_left_side_bar_component__ = __webpack_require__("./src/app/left-side-bar/left-side-bar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__content_content_component__ = __webpack_require__("./src/app/content/content.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__content_middle_block_middle_block_component__ = __webpack_require__("./src/app/content/middle-block/middle-block.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__content_right_side_bar_right_side_bar_component__ = __webpack_require__("./src/app/content/right-side-bar/right-side-bar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__content_footer_content_footer_content_component__ = __webpack_require__("./src/app/content/footer-content/footer-content.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__selected_item_service__ = __webpack_require__("./src/app/selected-item.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["G" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__left_side_bar_left_side_bar_component__["a" /* LeftSideBarComponent */],
                __WEBPACK_IMPORTED_MODULE_7__content_content_component__["a" /* ContentComponent */],
                __WEBPACK_IMPORTED_MODULE_8__content_middle_block_middle_block_component__["a" /* MiddleBlockComponent */],
                __WEBPACK_IMPORTED_MODULE_9__content_right_side_bar_right_side_bar_component__["a" /* RightSideBarComponent */],
                __WEBPACK_IMPORTED_MODULE_10__content_footer_content_footer_content_component__["a" /* FooterContentComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material_tabs__["a" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_11__selected_item_service__["a" /* SelectedItemService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/content/content.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/content/content.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-9\" style=\"padding-right: 0;\">\r\n  <app-middle-block [photos]=\"photos\" ></app-middle-block>\r\n  <app-right-side-bar [photos]=\"photos\"></app-right-side-bar>\r\n  <app-footer-content></app-footer-content>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/content/content.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContentComponent = /** @class */ (function () {
    function ContentComponent() {
        this.photos = [
            {
                'globalName': 'Passport 2 from 2',
                'details': [
                    {
                        'photoName': 'Passport1',
                        'photoUrl': '../assets/passport.jpg'
                    },
                    {
                        'photoName': 'Passport2',
                        'photoUrl': '../assets/passport2.jpg'
                    },
                    {
                        'photoName': 'Passport3',
                        'photoUrl': '../assets/passport3.jpeg'
                    },
                ]
            },
            {
                'globalName': 'Driver Licence 2 from 2',
                'details': [
                    {
                        'photoName': 'Driver1',
                        'photoUrl': '../assets/driver.jpg'
                    },
                    {
                        'photoName': 'Driver2',
                        'photoUrl': '../assets/driver2.jpg'
                    },
                    {
                        'photoName': 'Driver3',
                        'photoUrl': '../assets/driver3.jpg'
                    },
                ]
            },
        ];
    }
    ContentComponent.prototype.ngOnInit = function () {
    };
    ContentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-content',
            template: __webpack_require__("./src/app/content/content.component.html"),
            styles: [__webpack_require__("./src/app/content/content.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContentComponent);
    return ContentComponent;
}());



/***/ }),

/***/ "./src/app/content/footer-content/footer-content.component.css":
/***/ (function(module, exports) {

module.exports = "/deep/ .mat-tab-header-pagination  {\r\n  display: none !important;\r\n}\r\n\r\n/deep/ .mat-ripple-element {\r\n  display: none !important;\r\n}\r\n\r\n/*HIDE unuse elements in tabs*/\r\n\r\n.wrapper-footer{\r\n  clear: both;\r\n  padding-top: 5px;\r\n}\r\n\r\n/*STYLE TABS*/\r\n\r\n/deep/ .wrapper-footer .mat-tab-label {\r\n  background-color: #efeeef;\r\n  border: 1px solid #b7b3b3 ;\r\n  height: 25px!important;\r\n}\r\n\r\n/deep/  .mat-tab-label:hover {\r\n  background-color: #d5d4d5;\r\n}\r\n\r\n/deep/ .mat-tab-labels{\r\n  display: block!important;\r\n}\r\n\r\n/deep/ .wrapper-footer .mat-tab-label-active {\r\n  background-color: #fff;\r\n  border: 1px solid #b7b3b3;\r\n  font-weight: bold;\r\n  opacity: 1;\r\n}\r\n\r\n/*STYLE TABS*/\r\n\r\n/*CUSTOM STYLES*/\r\n\r\n.search{\r\n  padding: 10px 0;\r\n}\r\n\r\n.search input{\r\n  border: 1px solid #d9d7d9;\r\n  outline: none;\r\n  padding: 0 10px;\r\n  height: 26px;\r\n}\r\n\r\n.my-table{\r\n  padding: 5px 10px;\r\n  border: 1px solid #b7b3b3;\r\n  min-height: 173px;\r\n  max-height: 173px;\r\n  overflow-y: auto;\r\n}\r\n\r\n.my-table table{\r\n  width: 100%;\r\n}\r\n\r\n.my-table table td {\r\n  padding: 5px 10px;\r\n}\r\n\r\n.my-table table td:first-child {\r\n  font-weight: bold;\r\n}\r\n\r\n.my-table table td:nth-child(2) {\r\n  font-weight: bold;\r\n  padding-left: 20px;\r\n}\r\n\r\n.my-table table td:nth-child(3) {\r\n  font-weight: bold;\r\n  padding-left: 20px;\r\n  color: red;\r\n  text-align: center;\r\n}\r\n\r\n.my-table table td:nth-child(4) {\r\n  font-weight: bold;\r\n  padding-left: 10px;\r\n}\r\n\r\n.my-table table td:nth-child(3) i {\r\n  margin: 0 3px;\r\n}\r\n\r\n.my-table table {\r\n  border-collapse: collapse;\r\n}\r\n\r\n.my-table table, th, td {\r\n  border: 1px solid #b7b3b3;\r\n\r\n}\r\n\r\n.right-table {\r\n  padding: 5px 10px;\r\n  border: 1px solid #b7b3b3;\r\n  min-height: 173px;\r\n  max-height: 173px;\r\n  overflow-y: auto;\r\n  font-weight: bold;\r\n}\r\n\r\n.right-table table{\r\n  width: 100%;\r\n}\r\n\r\n.right-table table td {\r\n  padding: 5px 10px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/content/footer-content/footer-content.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col md-12 wrapper-footer\">\r\n  <mat-tab-group [@.disabled]=\"true\">\r\n    <mat-tab label=\"Обзор дел\">\r\n      <div class=\"col-md-12 search\">\r\n        <span>Поиск:</span>\r\n        <input type=\"text\">\r\n      </div>\r\n      <div class=\"col-md-8 my-table table-responsive\">\r\n        <table class=\"table-striped\">\r\n          <tr>\r\n            <td>274485973645</td>\r\n            <td>Куренков В.А.</td>\r\n            <td>\r\n              <i class=\"fa fa-ban\" aria-hidden=\"true\"></i>\r\n              <i class=\"fa fa-ban\" aria-hidden=\"true\"></i>\r\n              <i class=\"fa fa-ban\" aria-hidden=\"true\"></i>\r\n            </td>\r\n            <td>\r\n              10.03.18 17:04\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <td>274485973645</td>\r\n            <td>Куренков В.А.</td>\r\n            <td>\r\n              <i class=\"fa fa-ban\" aria-hidden=\"true\"></i>\r\n              <i class=\"fa fa-ban\" aria-hidden=\"true\"></i>\r\n              <i class=\"fa fa-ban\" aria-hidden=\"true\"></i>\r\n            </td>\r\n            <td>\r\n              10.03.18 17:04\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <td>274485973645</td>\r\n            <td>Куренков В.А.</td>\r\n            <td>\r\n              <i class=\"fa fa-ban\" aria-hidden=\"true\"></i>\r\n              <i class=\"fa fa-ban\" aria-hidden=\"true\"></i>\r\n              <i class=\"fa fa-ban\" aria-hidden=\"true\"></i>\r\n            </td>\r\n            <td>\r\n              10.03.18 17:04\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <td>274485973645</td>\r\n            <td>Куренков В.А.</td>\r\n            <td>\r\n              <i class=\"fa fa-ban\" aria-hidden=\"true\"></i>\r\n              <i class=\"fa fa-ban\" aria-hidden=\"true\"></i>\r\n              <i class=\"fa fa-ban\" aria-hidden=\"true\"></i>\r\n            </td>\r\n            <td>\r\n              10.03.18 17:04\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <td>274485973645</td>\r\n            <td>Куренков В.А.</td>\r\n            <td>\r\n              <i class=\"fa fa-ban\" aria-hidden=\"true\"></i>\r\n              <i class=\"fa fa-ban\" aria-hidden=\"true\"></i>\r\n              <i class=\"fa fa-ban\" aria-hidden=\"true\"></i>\r\n            </td>\r\n            <td>\r\n              10.03.18 17:04\r\n            </td>\r\n          </tr>          <tr>\r\n          <td>274485973645</td>\r\n          <td>Куренков В.А.</td>\r\n          <td>\r\n            <i class=\"fa fa-ban\" aria-hidden=\"true\"></i>\r\n            <i class=\"fa fa-ban\" aria-hidden=\"true\"></i>\r\n            <i class=\"fa fa-ban\" aria-hidden=\"true\"></i>\r\n          </td>\r\n          <td>\r\n            10.03.18 17:04\r\n          </td>\r\n        </tr>\r\n          <tr>\r\n            <td>274485973645</td>\r\n            <td>Куренков В.А.</td>\r\n            <td>\r\n              <i class=\"fa fa-ban\" aria-hidden=\"true\"></i>\r\n              <i class=\"fa fa-ban\" aria-hidden=\"true\"></i>\r\n              <i class=\"fa fa-ban\" aria-hidden=\"true\"></i>\r\n            </td>\r\n            <td>\r\n              10.03.18 17:04\r\n            </td>\r\n          </tr>\r\n\r\n        </table>\r\n      </div>\r\n      <div class=\"col-md-4 right-table table-responsive\">\r\n        <table class=\"table-striped\">\r\n          <tr>\r\n            <td>10.03.18 17:04</td>\r\n            <td>Регистрация дела</td>\r\n            <td>\r\n              Куренков В.А.\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <td>10.03.18 17:04</td>\r\n            <td>Регистрация дела</td>\r\n            <td>\r\n              Куренков В.А.\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <td>10.03.18 17:04</td>\r\n            <td>Регистрация дела</td>\r\n            <td>\r\n              Куренков В.А.\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <td>10.03.18 17:04</td>\r\n            <td>Регистрация дела</td>\r\n            <td>\r\n              Куренков В.А.\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <td>10.03.18 17:04</td>\r\n            <td>Регистрация дела</td>\r\n            <td>\r\n              Куренков В.А.\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <td>10.03.18 17:04</td>\r\n            <td>Регистрация дела</td>\r\n            <td>\r\n              Куренков В.А.\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <td>10.03.18 17:04</td>\r\n            <td>Регистрация дела</td>\r\n            <td>\r\n              Куренков В.А.\r\n            </td>\r\n          </tr>\r\n        </table>\r\n\r\n      </div>\r\n    </mat-tab>\r\n    <mat-tab label=\"Работа с курьером\">Работа с курьером</mat-tab>\r\n    <mat-tab label=\"Служебная переписка\">Служебная переписка</mat-tab>\r\n    <mat-tab label=\"Дела от аварийных комиссаров\">Дела от аварийных комиссаров</mat-tab>\r\n    <mat-tab label=\"Проверка ОСАГО\">Проверка ОСАГО</mat-tab>\r\n  </mat-tab-group>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/content/footer-content/footer-content.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterContentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterContentComponent = /** @class */ (function () {
    function FooterContentComponent() {
    }
    FooterContentComponent.prototype.ngOnInit = function () {
    };
    FooterContentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-footer-content',
            template: __webpack_require__("./src/app/content/footer-content/footer-content.component.html"),
            styles: [__webpack_require__("./src/app/content/footer-content/footer-content.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterContentComponent);
    return FooterContentComponent;
}());



/***/ }),

/***/ "./src/app/content/middle-block/middle-block.component.css":
/***/ (function(module, exports) {

module.exports = "/*HIDE unuse elements in tabs*/\r\n/deep/ .mat-tab-header-pagination  {\r\n  display: none !important;\r\n}\r\n/deep/ .mat-ripple-element {\r\n  display: none !important;\r\n}\r\n/*HIDE unuse elements in tabs*/\r\n.wrapper-middle{\r\n  -webkit-box-shadow: 0 0 5px 3px #88888847;\r\n  box-shadow: 0 0 5px 3px #88888847;\r\n  padding: 0;\r\n}\r\n/*STYLE TABS*/\r\n/deep/ .wrapper-middle .mat-tab-label {\r\n  background-color: #efeeef;\r\n  border: 1px solid #b7b3b3 ;\r\n  height: 25px!important;\r\n  width: 180px!important;\r\n\r\n}\r\n/deep/ .mat-tab-label:hover {\r\n  background-color: #d5d4d5;\r\n}\r\n/deep/ .mat-tab-labels{\r\n  display: block!important;\r\n}\r\n/deep/ .wrapper-middle .mat-tab-label-active {\r\n  background-color: #fff;\r\n  border: 1px solid #b7b3b3;\r\n  font-weight: bold;\r\n  opacity: 1;\r\n}\r\n.tab-body{\r\n  border: 1px solid #cccbcc;\r\n  min-height: calc(100vh - 324px);\r\n  max-height: calc(100vh - 324px);\r\n  overflow-y: auto;\r\n  text-align: center;\r\n  padding-top: 10px;\r\n  padding-bottom: 10px;\r\n}\r\n.tab-body img {\r\n  width: 40%;\r\n}\r\n/deep/ .mat-tab-label-container {\r\n  border-right: 1px solid #cccbcc ;\r\n}\r\n.img-controls{\r\n  border-left: 1px solid #cccbcc;\r\n  border-right: 1px solid #cccbcc;\r\n  border-bottom: 1px solid #cccbcc;\r\n  text-align: center;\r\n  height: 40px ;\r\n  padding: 5px 0;\r\n}\r\n.img-controls span {\r\n  text-align: center;\r\n  background-color: #e8e6e8;\r\n  height: 100%;\r\n  display: inline-block;\r\n  vertical-align: bottom;\r\n  width: 30px;\r\n  border: 1px solid rgb(169, 169, 169);\r\n  cursor: pointer;\r\n}\r\n.img-controls span:hover {\r\n  background-color: #cccacc;\r\n}\r\n.img-controls i {\r\n  font-size: 25px;\r\n  font-weight: bolder;\r\n  color: #5698cf;\r\n  padding-top: 1px;\r\n}\r\n.img-controls select {\r\n  height: 100%;\r\n  width: 100px ;\r\n  background-color: #e8e6e8;\r\n  outline: none;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/content/middle-block/middle-block.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-9 wrapper-middle\">\r\n  <mat-tab-group [@.disabled]=\"true\">\r\n    <mat-tab label=\"Сопровождение дела\">\r\n      <div *ngIf= \"item !== undefined\">\r\n        <div class=\"col-md-12 tab-body\">\r\n          <img [src]=\"photos[item].details[index].photoUrl\" alt=\"passport\" (click)=\"test()\" >\r\n        </div>\r\n        <div class=\"col-md-12 img-controls\">\r\n          <select [(ngModel)]=\"index\">\r\n            <option *ngFor=\"let c of photos[item].details;let i = index\" [value]=\"i\">{{c.photoName}}</option>\r\n          </select>\r\n          <span (click)=\"prevPhoto()\">\r\n          <i class=\"fa fa-angle-left\" aria-hidden=\"true\"></i>\r\n        </span>\r\n          <span (click)=\"nextPhoto()\">\r\n          <i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i>\r\n        </span>\r\n        </div>\r\n      </div>\r\n      <div *ngIf=\"item == undefined\" >\r\n        <div class=\"col-md-12 tab-body\" style=\"min-height: calc(100vh - 285px)\">\r\n          <p style=\"position: absolute;text-align: center;top: 41%;left: 40%;font-weight: bold;\">Нет изображения для просмотра</p>\r\n        </div>\r\n      </div>\r\n    </mat-tab>\r\n    <mat-tab label=\"Работа по ОСАГО\">\r\n      <div class=\"col-md-12 tab-body\">\r\n        asdasdadaLorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, natus, quasi! Atque cumque dicta dolore doloremque, dolores eum itaque laudantium maiores minus nobis quod similique sint voluptates? Assumenda exercitationem facilis, fugit magnam magni quidem. Cum iste labore libero minima quam quas quidem sunt ut vitae. Blanditiis consectetur doloremque eaque eligendi!\r\n      </div>\r\n    </mat-tab>\r\n  </mat-tab-group>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/content/middle-block/middle-block.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MiddleBlockComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__selected_item_service__ = __webpack_require__("./src/app/selected-item.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MiddleBlockComponent = /** @class */ (function () {
    function MiddleBlockComponent(selectedItem) {
        this.selectedItem = selectedItem;
        this.index = 0;
    }
    MiddleBlockComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.selectedItem.currentItem.subscribe(function (item) { return _this.item = item; });
        this.selectedItem.currentPhoto.subscribe(function (index) { return _this.index = index; });
    };
    //   ngAfterViewChecked() {
    //     this.detailPhotoIndex = this.index;
    //     console.log(this.index);
    //
    // }
    MiddleBlockComponent.prototype.nextPhoto = function () {
        if (this.index < this.photos[this.item].details.length - 1) {
            this.index = this.index + 1;
            console.log(this.index);
        }
    };
    MiddleBlockComponent.prototype.prevPhoto = function () {
        if (this.index > 0) {
            this.index = this.index - 1;
            console.log(this.index);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])(),
        __metadata("design:type", Object)
    ], MiddleBlockComponent.prototype, "photos", void 0);
    MiddleBlockComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-middle-block',
            template: __webpack_require__("./src/app/content/middle-block/middle-block.component.html"),
            styles: [__webpack_require__("./src/app/content/middle-block/middle-block.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__selected_item_service__["a" /* SelectedItemService */]])
    ], MiddleBlockComponent);
    return MiddleBlockComponent;
}());



/***/ }),

/***/ "./src/app/content/right-side-bar/right-side-bar.component.css":
/***/ (function(module, exports) {

module.exports = ".wrapper-right-side{\r\n  border: 1px solid #cccbcc;\r\n  min-height: calc(100vh - 261px);\r\n  max-height: calc(100vh - 261px);\r\n  -webkit-box-shadow: 0 0 5px 3px #88888847;\r\n  box-shadow: 0 0 5px 3px #88888847;\r\n  padding-top: 17px;\r\n  width: 24%;\r\n  margin-left: 1%;\r\n}\r\n.wrapper-right-side p {\r\n  padding: 5px 17px;\r\n  margin-bottom: 0;\r\n}\r\n.wrapper-right-side p:hover{\r\n  cursor: pointer;\r\n  background-color: #e2e1e2\r\n}\r\n.wrapper-right-side .fa-ban{\r\n  font-size: 19px;\r\n  margin-right: 3px;\r\n  vertical-align: bottom;\r\n  color: red;\r\n}\r\n.wrapper-right-side .fa-check{\r\n  font-size: 19px;\r\n  vertical-align: bottom;\r\n  color: green;\r\n}\r\n.active {\r\n  background-color: #e2e1e2;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/content/right-side-bar/right-side-bar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-3 wrapper-right-side\">\r\n  <div class=\"row\">\r\n    <p *ngFor=\"let photo of photos;let i = index\" (click)=\"selectItem(i)\" [ngClass]=\"{ 'active': mySelectedItem == i }\">\r\n      <span><i class=\"fa fa-check\" aria-hidden=\"true\"></i></span>\r\n      <span>{{ photo.globalName }}</span>\r\n    </p>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/content/right-side-bar/right-side-bar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RightSideBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__selected_item_service__ = __webpack_require__("./src/app/selected-item.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RightSideBarComponent = /** @class */ (function () {
    function RightSideBarComponent(selectedItem) {
        this.selectedItem = selectedItem;
    }
    RightSideBarComponent.prototype.ngOnInit = function () {
    };
    RightSideBarComponent.prototype.selectItem = function (index) {
        this.mySelectedItem = index;
        this.selectedItem.changeItem(this.mySelectedItem);
        this.selectedItem.changePhoto(0);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])(),
        __metadata("design:type", Object)
    ], RightSideBarComponent.prototype, "photos", void 0);
    RightSideBarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-right-side-bar',
            template: __webpack_require__("./src/app/content/right-side-bar/right-side-bar.component.html"),
            styles: [__webpack_require__("./src/app/content/right-side-bar/right-side-bar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__selected_item_service__["a" /* SelectedItemService */]])
    ], RightSideBarComponent);
    return RightSideBarComponent;
}());



/***/ }),

/***/ "./src/app/left-side-bar/left-side-bar.component.css":
/***/ (function(module, exports) {

module.exports = "/*HIDE unuse elements in tabs*/\r\n/deep/ .mat-tab-header-pagination  {\r\n  display: none !important;\r\n}\r\n/deep/ .mat-ripple-element {\r\n  display: none !important;\r\n}\r\n/*HIDE unuse elements in tabs*/\r\n.wrapper{\r\n  padding: 0;\r\n  -webkit-box-shadow: 0 0 5px 3px #88888847;\r\n  box-shadow: 0 0 5px 3px #88888847;\r\n}\r\n/*STYLE TABS*/\r\n/deep/ .wrapper .mat-tab-label {\r\n  background-color: #efeeef;\r\n  border: 1px solid #b7b3b3 ;\r\n  height: 25px!important;\r\n  min-width: 50%!important;\r\n  width: 50%;\r\n\r\n}\r\n/deep/  .mat-tab-label:hover {\r\n  background-color: #d5d4d5;\r\n}\r\n/deep/ .mat-tab-labels{\r\n  display: block!important;\r\n}\r\n/deep/ .wrapper .mat-tab-label-active {\r\n  background-color: #fff;\r\n  border: 1px solid #b7b3b3;\r\n  font-weight: bold;\r\n  opacity: 1;\r\n}\r\n.tab-body{\r\n  border-left: 1px solid #cccbcc;\r\n  border-right: 1px solid #cccbcc;\r\n  border-bottom: 1px solid #cccbcc;\r\n  padding-top: 10px;\r\n  min-height: calc(100vh - 264px); ;\r\n  max-height: calc(100vh - 264px);\r\n  overflow-y: auto;\r\n}\r\n.tab-body input {\r\n  width: 100%;\r\n  border: 1px solid #d9d7d9;\r\n  outline: none;\r\n  padding: 0 10px;\r\n  height: 26px;\r\n}\r\n.tab-body textarea {\r\n  width: 100%;\r\n  border: 1px solid #d9d7d9;\r\n  outline: none;\r\n  padding: 0 10px;\r\n  height: 50px;\r\n}\r\n.tab-body select {\r\n  width: 100%;\r\n  border: 1px solid #d9d7d9;\r\n  outline: none;\r\n  padding: 0 10px;\r\n  height: 26px;\r\n}\r\n.tab-body .col-md-5 {\r\n  padding: 0;\r\n}\r\n.tab-body .row {\r\n  margin: 10px 0;\r\n}\r\n.check input {\r\n  width: 15px;\r\n  vertical-align: middle;\r\n  margin-bottom: 3px;\r\n}\r\n.check span {\r\n\r\n}\r\n/*STYLE TABS*/\r\n/*FOOTER LEFT SIDE STYLES*/\r\n.left-side-footer span {\r\n  display: block;\r\n}\r\n.left-side-footer {\r\n  padding: 0;\r\n}\r\n.footer-body {\r\n  border-top: 1px solid #b7b3b3;\r\n  border-right: 1px solid #b7b3b3;\r\n  border-bottom: 1px solid #b7b3b3;\r\n  padding: 0;\r\n}\r\n.footer-body .row {\r\n  margin: 10px 0;\r\n  padding-left: 20px;\r\n}\r\n.footer-body .row:hover {\r\n  cursor: pointer;\r\n  background-color: #e2e1e2;\r\n}\r\n.controls{\r\n  border-right: 1px solid #b7b3b3;\r\n}\r\n.controls button  {\r\n  margin: 5px 5px;\r\n  background-color: buttonface\r\n}\r\n.controls select  {\r\n  margin: 5px 0px;\r\n  height: 26px;\r\n  background-color: buttonface;\r\n  width: 90px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/left-side-bar/left-side-bar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-3 wrapper\">\r\n  <mat-tab-group [@.disabled]=\"true\">\r\n    <div class=\"col-md-12\">\r\n      <!--TAB ВОДИТЕЛЬ START-->\r\n      <mat-tab label=\"Водитель\">\r\n        <div class=\"col-md-12 tab-body\">\r\n          <div class=\"row\">\r\n            <div class=\"col-md-12 check\">\r\n              <input type=\"checkbox\">\r\n              <span>Транспортным средством управлял собственник</span>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <span style=\"font-weight: bold;\">Персональные данные:</span>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-md-5\">\r\n              <span>Имя:</span>\r\n            </div>\r\n            <div class=\"col-md-7\">\r\n              <input type=\"text\">\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-md-5\">\r\n              <span>Фамилия:</span>\r\n            </div>\r\n            <div class=\"col-md-7\">\r\n              <input type=\"text\">\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-md-5\">\r\n              <span>Отчество:</span>\r\n            </div>\r\n            <div class=\"col-md-7\">\r\n              <input type=\"text\">\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-md-5\">\r\n              <span>Паспорт серия номер:</span>\r\n            </div>\r\n            <div class=\"col-md-7\">\r\n              <input type=\"text\">\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-md-5\">\r\n              <span>Кем выдан:</span>\r\n            </div>\r\n            <div class=\"col-md-7\">\r\n              <textarea></textarea>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-md-5\">\r\n              <span>Когда выдан:</span>\r\n            </div>\r\n            <div class=\"col-md-7\">\r\n              <input type=\"date\">\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-md-5\">\r\n              <span>Дата рождения:</span>\r\n            </div>\r\n            <div class=\"col-md-7\">\r\n              <input type=\"date\">\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-md-5\">\r\n              <span>Место рождения:</span>\r\n            </div>\r\n            <div class=\"col-md-7\">\r\n              <input type=\"text\">\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-md-5\">\r\n              <span>Адрес:</span>\r\n            </div>\r\n            <div class=\"col-md-7\">\r\n              <textarea></textarea>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-md-5\">\r\n              <span>Дата выдачи ВУ:</span>\r\n            </div>\r\n            <div class=\"col-md-7\">\r\n              <input type=\"date\">\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-md-5\">\r\n              <span>Кем выдан ВУ:</span>\r\n            </div>\r\n            <div class=\"col-md-7\">\r\n              <input type=\"text\">\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-md-5\">\r\n              <span>Номер ВУ:</span>\r\n            </div>\r\n            <div class=\"col-md-7\">\r\n              <input type=\"text\">\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-md-5\">\r\n              <span>Страховой полис номер:</span>\r\n            </div>\r\n            <div class=\"col-md-7\">\r\n              <input type=\"text\">\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-md-5\">\r\n              <span>Страховая компания:</span>\r\n            </div>\r\n            <div class=\"col-md-7\">\r\n              <select>\r\n                <option>Пункт 1</option>\r\n                <option>Пункт 2</option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-md-5\">\r\n              <span>Адрес страховой:</span>\r\n            </div>\r\n            <div class=\"col-md-7\">\r\n              <textarea></textarea>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-md-5\">\r\n              <span>Страховой полис годен до:</span>\r\n            </div>\r\n            <div class=\"col-md-7\">\r\n              <input type=\"date\">\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-md-5\">\r\n              <span>E-mail:</span>\r\n            </div>\r\n            <div class=\"col-md-7\">\r\n              <input type=\"email\">\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-md-5\">\r\n              <span>Номер телефона 1:</span>\r\n            </div>\r\n            <div class=\"col-md-7\">\r\n              <input type=\"tel\">\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-md-5\">\r\n              <span>Номер телефона 2:</span>\r\n            </div>\r\n            <div class=\"col-md-7\">\r\n              <input type=\"tel\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </mat-tab>\r\n      <!--TAB ВОДИТЕЛЬ END-->\r\n\r\n      <!--TAB АВТОМОБИЛЬ START-->\r\n      <mat-tab label=\"Автомобиль\">\r\n        <div class=\"col-md-12 tab-body\">\r\n          <div class=\"row\">\r\n            <span style=\"font-weight: bold;\">Автомобиль:</span>\r\n            <div class=\"row\">\r\n              <div class=\"col-md-5\">\r\n                <span>Тип ТС:</span>\r\n              </div>\r\n              <div class=\"col-md-7\">\r\n                <select>\r\n                  <option>Пункт 1</option>\r\n                  <option>Пункт 2</option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col-md-5\">\r\n                <span>Гос. номер:</span>\r\n              </div>\r\n              <div class=\"col-md-7\">\r\n                <input type=\"text\">\r\n              </div>\r\n            </div>\r\n            <div class=\"row\">\r\n            <div class=\"col-md-5\">\r\n              <span>Марка:</span>\r\n            </div>\r\n            <div class=\"col-md-7\">\r\n              <select>\r\n                <option>Пункт 1</option>\r\n                <option>Пункт 2</option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n            <div class=\"row\">\r\n              <div class=\"col-md-5\">\r\n                <span>Модель:</span>\r\n              </div>\r\n              <div class=\"col-md-7\">\r\n                <select>\r\n                  <option>Пункт 1</option>\r\n                  <option>Пункт 2</option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col-md-5\">\r\n                <span>Страна производитель:</span>\r\n              </div>\r\n              <div class=\"col-md-7\">\r\n                <select>\r\n                  <option>Пункт 1</option>\r\n                  <option>Пункт 2</option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col-md-5\">\r\n                <span>Год выпуска ТС:</span>\r\n              </div>\r\n              <div class=\"col-md-7\">\r\n                <input type=\"number\">\r\n              </div>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col-md-5\">\r\n                <span>Дата начала эксплуатации:</span>\r\n              </div>\r\n              <div class=\"col-md-7\">\r\n                <input type=\"date\">\r\n              </div>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col-md-5\">\r\n                <span>Год выпуска кузова:</span>\r\n              </div>\r\n              <div class=\"col-md-7\">\r\n                <input type=\"number\">\r\n              </div>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col-md-5\">\r\n                <span>Номер кузова(шасси):</span>\r\n              </div>\r\n              <div class=\"col-md-7\">\r\n                <input type=\"text\">\r\n              </div>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col-md-5\">\r\n                <span>Номер рамы:</span>\r\n              </div>\r\n              <div class=\"col-md-7\">\r\n                <input type=\"text\">\r\n              </div>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col-md-5\">\r\n                <span>Номер ПТС:</span>\r\n              </div>\r\n              <div class=\"col-md-7\">\r\n                <input type=\"text\">\r\n              </div>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col-md-5\">\r\n                <span>Дата выдачи ПТС:</span>\r\n              </div>\r\n              <div class=\"col-md-7\">\r\n                <input type=\"date\">\r\n              </div>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col-md-5\">\r\n                <span>Номер СоРТС:</span>\r\n              </div>\r\n              <div class=\"col-md-7\">\r\n                <input type=\"text\">\r\n              </div>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col-md-5\">\r\n                <span>Дата выдачи СоРТС:</span>\r\n              </div>\r\n              <div class=\"col-md-7\">\r\n                <input type=\"date\">\r\n              </div>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col-md-5\">\r\n                <span>VIN:</span>\r\n              </div>\r\n              <div class=\"col-md-7\">\r\n                <input type=\"text\">\r\n              </div>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col-md-5\">\r\n                <span>Мощность(л.с):</span>\r\n              </div>\r\n              <div class=\"col-md-7\">\r\n                <input type=\"number\">\r\n              </div>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col-md-5\">\r\n                <span>Цвет:</span>\r\n              </div>\r\n              <div class=\"col-md-7\">\r\n                <select>\r\n                  <option>Пункт 1</option>\r\n                  <option>Пункт 2</option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col-md-5\">\r\n                <span>Тип ЛКП:</span>\r\n              </div>\r\n              <div class=\"col-md-7\">\r\n                <select>\r\n                  <option>Пункт 1</option>\r\n                  <option>Пункт 2</option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col-md-5\">\r\n                <span>Пробег:</span>\r\n              </div>\r\n              <div class=\"col-md-7\">\r\n                <input type=\"text\">\r\n              </div>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col-md-5\">\r\n                <span>Номер двигателя:</span>\r\n              </div>\r\n              <div class=\"col-md-7\">\r\n                <input type=\"text\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </mat-tab>\r\n      <!--TAB АВТОМОБИЛЬ END-->\r\n    </div>\r\n    <div class=\"col-md-12\">\r\n      <mat-tab label=\"Сведенья о ДТП\">\r\n        <div class=\"col-md-12 tab-body\">\r\n          <div class=\"row\">\r\n            <div class=\"col-md-5\">\r\n              <span>Адрес:</span>\r\n            </div>\r\n            <div class=\"col-md-7\">\r\n              <input type=\"text\">\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-md-5\">\r\n              <span>Дата ДТП:</span>\r\n            </div>\r\n            <div class=\"col-md-7\">\r\n              <input type=\"date\">\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-md-5\">\r\n              <span>Стоимость уступаемых:</span>\r\n            </div>\r\n            <div class=\"col-md-7\">\r\n              <input type=\"text\">\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-md-5\">\r\n              <span>Цессионарий:</span>\r\n            </div>\r\n            <div class=\"col-md-7\">\r\n              <input type=\"text\">\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-md-5\">\r\n              <span>Коментарий:</span>\r\n            </div>\r\n            <div class=\"col-md-7\">\r\n              <input type=\"text\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </mat-tab>\r\n      <mat-tab label=\"Собственник\">\r\n        <div class=\"col-md-12 tab-body\">\r\n          <div class=\"row\">\r\n            <div style=\"padding: 0;\" class=\"col-md-12 check\">\r\n              <div class=\"col-md-12\">\r\n                <input type=\"radio\" id=\"contactChoice1\"\r\n                       name=\"contact\" value=\"phys\">\r\n                <label style=\"font-weight: normal;\" for=\"contactChoice1\">Физическое лицо</label>\r\n              </div>\r\n              <div class=\"col-md-12\">\r\n                <input type=\"radio\" id=\"contactChoice2\"\r\n                       name=\"contact\" value=\"urid\">\r\n                <label style=\"font-weight: normal;\" for=\"contactChoice2\">Юридическое лицо</label>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <span style=\"font-weight: bold;\">Персональные данные:</span>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-md-5\">\r\n              <span>Имя:</span>\r\n            </div>\r\n            <div class=\"col-md-7\">\r\n              <input type=\"text\">\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-md-5\">\r\n              <span>Фамилия:</span>\r\n            </div>\r\n            <div class=\"col-md-7\">\r\n              <input type=\"text\">\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-md-5\">\r\n              <span>Отчество:</span>\r\n            </div>\r\n            <div class=\"col-md-7\">\r\n              <input type=\"text\">\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-md-5\">\r\n              <span>Паспорт серия номер:</span>\r\n            </div>\r\n            <div class=\"col-md-7\">\r\n              <input type=\"text\">\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-md-5\">\r\n              <span>Кем выдан:</span>\r\n            </div>\r\n            <div class=\"col-md-7\">\r\n              <textarea></textarea>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-md-5\">\r\n              <span>Когда выдан:</span>\r\n            </div>\r\n            <div class=\"col-md-7\">\r\n              <input type=\"date\">\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-md-5\">\r\n              <span>Дата рождения:</span>\r\n            </div>\r\n            <div class=\"col-md-7\">\r\n              <input type=\"date\">\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-md-5\">\r\n              <span>Место рождения:</span>\r\n            </div>\r\n            <div class=\"col-md-7\">\r\n              <input type=\"text\">\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-md-5\">\r\n              <span>Адрес:</span>\r\n            </div>\r\n            <div class=\"col-md-7\">\r\n              <textarea></textarea>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-md-5\">\r\n              <span>Дата выдачи ВУ:</span>\r\n            </div>\r\n            <div class=\"col-md-7\">\r\n              <input type=\"date\">\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-md-5\">\r\n              <span>Кем выдан ВУ:</span>\r\n            </div>\r\n            <div class=\"col-md-7\">\r\n              <input type=\"text\">\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-md-5\">\r\n              <span>Номер ВУ:</span>\r\n            </div>\r\n            <div class=\"col-md-7\">\r\n              <input type=\"text\">\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-md-5\">\r\n              <span>Страховой полис номер:</span>\r\n            </div>\r\n            <div class=\"col-md-7\">\r\n              <input type=\"text\">\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-md-5\">\r\n              <span>Страховая компания:</span>\r\n            </div>\r\n            <div class=\"col-md-7\">\r\n              <select>\r\n                <option>Пункт 1</option>\r\n                <option>Пункт 2</option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-md-5\">\r\n              <span>Адрес страховой:</span>\r\n            </div>\r\n            <div class=\"col-md-7\">\r\n              <textarea></textarea>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-md-5\">\r\n              <span>Страховой полис годен до:</span>\r\n            </div>\r\n            <div class=\"col-md-7\">\r\n              <input type=\"date\">\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-md-5\">\r\n              <span>E-mail:</span>\r\n            </div>\r\n            <div class=\"col-md-7\">\r\n              <input type=\"email\">\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-md-5\">\r\n              <span>Номер телефона 1:</span>\r\n            </div>\r\n            <div class=\"col-md-7\">\r\n              <input type=\"tel\">\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-md-5\">\r\n              <span>Номер телефона 2:</span>\r\n            </div>\r\n            <div class=\"col-md-7\">\r\n              <input type=\"tel\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </mat-tab>\r\n    </div>\r\n  </mat-tab-group>\r\n  <div class=\"col-md-12 left-side-footer\">\r\n    <span style=\"padding: 3px 9px;border-right: 1px solid #b7b3b3;\">Участники ДТП</span>\r\n    <div class=\"col-md-12 footer-body\">\r\n      <div class=\"row\">\r\n        <span style=\"font-weight: bold;\">Куренков В.А( Пострадавший )</span>\r\n        <span>MAZDA MPV</span>\r\n        <span>Водитель: Куренков В.А </span>\r\n      </div>\r\n      <div class=\"row\">\r\n        <span style=\"font-weight: bold;\">Куренков В.А( Виновник )</span>\r\n        <span>MAZDA MPV</span>\r\n        <span>Водитель: Куренков В.А </span>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-12 controls\">\r\n      <button>Добавить</button>\r\n      <select>\r\n        <option>Виновник</option>\r\n        <option>Пострадавший</option>\r\n      </select>\r\n      <button>Удалить</button>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/left-side-bar/left-side-bar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LeftSideBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LeftSideBarComponent = /** @class */ (function () {
    function LeftSideBarComponent() {
    }
    LeftSideBarComponent.prototype.ngOnInit = function () {
    };
    LeftSideBarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-left-side-bar',
            template: __webpack_require__("./src/app/left-side-bar/left-side-bar.component.html"),
            styles: [__webpack_require__("./src/app/left-side-bar/left-side-bar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LeftSideBarComponent);
    return LeftSideBarComponent;
}());



/***/ }),

/***/ "./src/app/selected-item.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectedItemService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__("./node_modules/rxjs/_esm5/BehaviorSubject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SelectedItemService = /** @class */ (function () {
    function SelectedItemService() {
        this.selectedItemSource = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](undefined);
        this.selectedPhoto = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](0);
        this.currentItem = this.selectedItemSource.asObservable();
        this.currentPhoto = this.selectedPhoto.asObservable();
    }
    SelectedItemService.prototype.changeItem = function (item) {
        this.selectedItemSource.next(item);
    };
    SelectedItemService.prototype.changePhoto = function (index) {
        this.selectedPhoto.next(index);
    };
    SelectedItemService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], SelectedItemService);
    return SelectedItemService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map