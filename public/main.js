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

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n\r\n<div class=\"content-main-wrap\">\r\n\r\n    <div class=\"content-header fs-14\" id=\"navbar\">\r\n        <div class=\"content-tab\">\r\n            <div class=\"tab-item\">\r\n                Our Picks\r\n                <span class=\"details-left\">\r\n                    <span>\r\n                        Some Menu Item\r\n                    </span>\r\n                    <span>\r\n                        Some Menu Item\r\n                    </span>\r\n                    <span>\r\n                        Some Menu Item\r\n                    </span>\r\n                    <span>\r\n                        Some Menu Item\r\n                    </span>\r\n                </span>\r\n            </div>\r\n            <div class=\"tab-item\">\r\n                Latest\r\n                <span class=\"details-left\">\r\n                    <span>\r\n                        Some Menu Item\r\n                    </span>\r\n                    <span>\r\n                        Some Menu Item\r\n                    </span>\r\n                    <span>\r\n                        Some Menu Item\r\n                    </span>\r\n                    <span>\r\n                        Some Menu Item\r\n                    </span>\r\n                </span>\r\n            </div>\r\n            <div class=\"tab-item\">\r\n                Popular\r\n                <span class=\"details-left\">\r\n                    <span>\r\n                        Some Menu Item\r\n                    </span>\r\n                    <span>\r\n                        Some Menu Item\r\n                    </span>\r\n                    <span>\r\n                        Some Menu Item\r\n                    </span>\r\n                    <span>\r\n                        Some Menu Item\r\n                    </span>\r\n                </span>\r\n            </div>\r\n        </div>\r\n        <div class=\"content-title fs-20\">\r\n            Worldwide Chales\r\n        </div>\r\n        <div class=\"content-serch\">\r\n            <div class=\"tab-item\">\r\n                Obsessions\r\n                <span class=\"details-left details-right\">\r\n                    <span>\r\n                        Some Menu Item\r\n                    </span>\r\n                    <span>\r\n                        Some Menu Item\r\n                    </span>\r\n                    <span>\r\n                        Some Menu Item\r\n                    </span>\r\n                    <span>\r\n                        Some Menu Item\r\n                    </span>\r\n                </span>\r\n            </div>\r\n            <div>\r\n                <!-- <input class=\"serch-input\" type=\"text\"> -->\r\n                <i class=\"fas fa-search\"></i>\r\n            </div>\r\n            <div>\r\n                <i class=\"fas fa-ellipsis-h\"></i>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"content\">\r\n\r\n        <router-outlet></router-outlet>\r\n\r\n        <div id=\"container\">\r\n            <div ng2-carouselamos class=\"slides-wrapper\" [items]=\"items\" [width]=\"1300\" [$prev]=\"prev\" [$next]=\"next\" [$item]=\"item\">\r\n            </div>\r\n\r\n\r\n            <ng-template #prev>\r\n                <!-- <span class=\"arrow-left\"></span> -->\r\n                <i class=\"fas fa-angle-left light fs-40\"></i>\r\n            </ng-template>\r\n            <ng-template #next>\r\n                <!-- <span class=\"arrow-right\"></span> -->\r\n                <i class=\"fas fa-angle-right light fs-40\"></i>\r\n            </ng-template>\r\n            <ng-template #item let-item let-i=\"index\">\r\n\r\n                <div class=\"items\">\r\n                    <div class=\"df h-full ai-c slide-wrap\">\r\n                        <div class=\"image-carusel\"></div>\r\n                        <div>\r\n                            <div class=\"df jc-sb ai-c\">\r\n                                <div class=\"light mb-5 text-bold fs-20 title title-slide\">\r\n                                    FACETIME-OUT\r\n                                </div>\r\n                                <!-- <div>\r\n                                    <i class=\"fas fa-suitcase\"></i>\r\n                                </div> -->\r\n                            </div>\r\n                            <div class=\"fs-40 text-bold mb-10 color-dark title-body\">\r\n                                Facebook needs the time-out it got from Wall Street\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <!-- <div> {{ item.name }}</div> -->\r\n                </div>\r\n\r\n            </ng-template>\r\n\r\n        </div>\r\n\r\n        \r\n\r\n        <div class=\"items-label text-bold\">\r\n            Trending\r\n        </div>\r\n\r\n        <div class=\"items-wrap\">\r\n            <app-news-item *ngFor=\"let item of dataTrending\" routerLink=\"/news-details\"></app-news-item>\r\n        </div>\r\n\r\n        <div class=\"items-label text-bold\">\r\n            Latest\r\n        </div>\r\n\r\n        <div class=\"items-wrap\">\r\n            <app-news-item *ngFor=\"let item of dataLatest   \" routerLink=\"/news-details\"></app-news-item>\r\n        </div>\r\n\r\n    </div>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content-main-wrap {\n  margin-top: 60px; }\n\n#navbar {\n  background-color: white;\n  position: fixed;\n  top: 60px;\n  width: 100%;\n  display: flex;\n  transition: top 0.3s; }\n\n.details-left, .details-right {\n  visibility: hidden;\n  position: absolute;\n  display: inline-block;\n  left: 0;\n  right: 0;\n  top: 49px;\n  background: #ffffff;\n  max-width: 500px;\n  border: 1px solid #c3c3c3;\n  z-index: 1000; }\n\n.details-left span, .details-right span {\n    padding: 15px;\n    text-align: left;\n    display: inline-block;\n    width: calc( 100% - 30px); }\n\n.details-left span:hover, .details-right span:hover {\n      background: #f9f9f9;\n      transition: all 0.3s; }\n\n.details-right {\n  left: unset !important; }\n\n.tab-item:hover .details-left {\n  visibility: unset; }\n\n.content {\n  background: #f9f9f9; }\n\n.content-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  box-shadow: 0px 3px 2px -1px rgba(0, 0, 0, 0.35);\n  position: relative;\n  z-index: 99000; }\n\n.content-header .content-tab, .content-header .content-serch {\n    display: flex;\n    align-items: center; }\n\n.content-header .content-tab div, .content-header .content-serch div {\n      border-right: 1px solid #f9f9f9;\n      padding: 15px;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      cursor: pointer;\n      transition: all 0.3s;\n      color: #b7b7b7; }\n\n.content-header .content-tab div:hover, .content-header .content-serch div:hover {\n        color: #0c0c0c; }\n\n.content-header .content-serch div:first-child {\n    border-left: 1px solid #f9f9f9; }\n\n.content-header .content-title {\n    letter-spacing: 2px;\n    font-weight: bold; }\n\n.serch-input {\n  position: absolute;\n  border: none;\n  outline: none;\n  background: white; }\n\n.items-wrap {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  max-width: 1170px;\n  margin: auto;\n  padding-left: 20px;\n  padding-right: 20px; }\n\n.items-label {\n  padding: 10px;\n  padding-left: 25px;\n  font-size: 25px;\n  max-width: 1170px;\n  margin: auto; }\n\n#container {\n  width: calc(100% - 20px);\n  margin: 0 auto;\n  padding: 10px 10px;\n  background: #f9f9f9; }\n\n.items {\n  min-width: 100%;\n  height: 426px; }\n\n.arrow-right {\n  width: 0;\n  height: 0;\n  border-style: solid;\n  border-width: 60.5px 0 60.5px 44px;\n  border-color: transparent transparent transparent #007bff;\n  position: relative;\n  display: block;\n  cursor: pointer; }\n\n.arrow-right::after {\n    content: '';\n    display: block;\n    width: 0;\n    height: 0;\n    border-style: solid;\n    border-width: 60.5px 0 60.5px 44px;\n    border-color: transparent transparent transparent #f9f9f9;\n    position: absolute;\n    left: -45px;\n    top: -61px; }\n\n.arrow-left {\n  width: 0;\n  height: 0;\n  border-style: solid;\n  border-width: 60.5px 43px 60.5px 0;\n  border-color: transparent #007bff transparent transparent;\n  position: relative;\n  display: block;\n  cursor: pointer; }\n\n.arrow-left::after {\n    content: '';\n    display: block;\n    width: 0;\n    height: 0;\n    border-style: solid;\n    border-width: 60.5px 43px 60.5px 0;\n    border-color: transparent #f9f9f9 transparent transparent;\n    position: absolute;\n    right: -44px;\n    top: -61px; }\n\n.image-carusel {\n  background-image: url(https://static.timesofisrael.com/www/uploads/2016/11/Peru-APEC-Summit_Horo-1.jpg);\n  background-size: cover;\n  background-repeat: no-repeat;\n  position: relative;\n  overflow: hidden;\n  background-position: center;\n  min-width: 50%;\n  height: 100%;\n  margin-right: 60px; }\n\n@media screen and (max-width: 900px) {\n  .slide-wrap {\n    flex-flow: column; }\n    .slide-wrap .image-carusel {\n      min-width: 100%;\n      height: 100%;\n      margin-right: 0; }\n  .title-slide {\n    font-size: 16px; }\n  .title-body {\n    font-size: 25px; }\n  .arrow-right {\n    border-width: 30.5px 0 30.5px 24px; }\n    .arrow-right::after {\n      content: '';\n      border-width: 30.5px 0 30.5px 24px;\n      left: -25px;\n      top: -31px; }\n  .arrow-left {\n    border-width: 30.5px 23px 30.5px 0; }\n    .arrow-left::after {\n      content: '';\n      border-width: 30.5px 23px 30.5px 0;\n      right: -24px;\n      top: -31px; } }\n\n@media screen and (max-width: 650px) {\n  .items {\n    min-width: 700px;\n    height: 370px; }\n  .title-body {\n    padding-right: 100px; } }\n\n@media screen and (max-width: 600px) {\n  .items {\n    min-width: 700px;\n    height: 370px; }\n  .title-body {\n    padding-right: 150px; } }\n\n@media screen and (max-width: 550px) {\n  .items {\n    min-width: 700px;\n    height: 370px; }\n  .title-body {\n    padding-right: 220px; }\n  .image-carusel {\n    background-position-x: -90px; } }\n\n@media screen and (max-width: 500px) {\n  .items {\n    min-width: 700px;\n    height: 370px; }\n  .title-body {\n    padding-right: 250px; }\n  .image-carusel {\n    background-position-x: -140px; } }\n\n@media screen and (max-width: 450px) {\n  .items {\n    min-width: 700px;\n    height: 370px; }\n  .title-body {\n    padding-right: 300px; }\n  .image-carusel {\n    background-position-x: -190px; } }\n\n@media screen and (max-width: 400px) {\n  .items {\n    min-width: 700px;\n    height: 370px; }\n  .title-body {\n    padding-right: 400px; }\n  .image-carusel {\n    background-position-x: -240px; } }\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.items = [];
        this.dataTrending = ['1', '2', '3', '4'];
        this.dataLatest = ['1', '2', '3', '4'];
        this.items = [
            { name: '1 slide' },
            { name: '2 slide' },
            { name: '3 slide' }
        ];
    }
    AppComponent.prototype.ngOnInit = function () {
        var prevScrollpos = window.pageYOffset;
        window.onscroll = function () {
            var currentScrollPos = window.pageYOffset;
            if (prevScrollpos > currentScrollPos) {
                document.getElementById("navbar").style.top = "60px";
                document.getElementById("navbar").style.visibility = "unset";
            }
            else {
                document.getElementById("navbar").style.top = "-60px";
                document.getElementById("navbar").style.visibility = "unset";
            }
            prevScrollpos = currentScrollPos;
        };
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [])
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng2_carouselamos__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-carouselamos */ "./node_modules/ng2-carouselamos/dist/index.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _show_show_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./show/show.component */ "./src/app/show/show.component.ts");
/* harmony import */ var _news_item_news_item_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./news-item/news-item.component */ "./src/app/news-item/news-item.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    // {path: '', component: NewsItemComponent},
    { path: 'news-details', component: _show_show_component__WEBPACK_IMPORTED_MODULE_5__["ShowComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _show_show_component__WEBPACK_IMPORTED_MODULE_5__["ShowComponent"],
                _news_item_news_item_component__WEBPACK_IMPORTED_MODULE_6__["NewsItemComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes),
                ng2_carouselamos__WEBPACK_IMPORTED_MODULE_3__["Ng2CarouselamosModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\n    <div class=\"header-inside\">\n        <div class=\"logo df-centered\">\n            <img src=\"https://pbs.twimg.com/profile_images/483656113254961153/RpRrX33j.png\" alt=\"\">\n        </div>\n        <div class=\"menu-list df jc-sb ai-c\" [ngClass]=\"{'show': showMenu, 'transition-none' : !showMenu}\">\n            <div>\n                Opportunites\n            </div>\n            <div>\n                Collaborations\n            </div>\n            <div>\n                Events\n            </div>\n            <div>\n                Media\n            </div>\n            <div>\n                My Movemeback\n            </div>\n            <div>\n                About\n            </div>\n        </div>\n        <div class=\"user df-centered\">\n            <img src=\"https://cdn.images.express.co.uk/img/dynamic/67/590x/Didier-Drogba-936743.jpg\" alt=\"\">\n        </div>\n        <div class=\"sm-menu-btn\" (click)=\"showMenu = !showMenu\">menu</div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/header/header.component.scss":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header {\n  background: #0c0c0c;\n  padding: 10px 10px;\n  position: fixed;\n  width: calc(100% - 20px);\n  top: 0;\n  z-index: 100000; }\n\n.header-inside {\n  max-width: 1170px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-right: auto;\n  margin-left: auto;\n  position: relative; }\n\n.logo img {\n  width: 40px; }\n\n.user {\n  border-radius: 50px;\n  overflow: hidden;\n  width: 40px;\n  height: 40px; }\n\n.user img {\n    height: 40px; }\n\n.menu-list div {\n  cursor: pointer;\n  transition: all 0.3s;\n  font-size: 16px;\n  margin: 0 10px;\n  color: white; }\n\n.menu-list div:hover {\n    -webkit-transform: scale(1.2);\n            transform: scale(1.2); }\n\n.transition-none div {\n  transition: none; }\n\n.show {\n  visibility: unset !important; }\n\n@media screen and (min-width: 900px) {\n  .sm-menu-btn {\n    display: none; } }\n\n@media screen and (max-width: 900px) {\n  .menu-list {\n    position: absolute;\n    flex-flow: column;\n    align-items: baseline;\n    background: #212121;\n    padding: 10px;\n    line-height: 40px;\n    left: -10px;\n    top: 50px;\n    width: 100%;\n    font-size: 34px;\n    min-height: 100vh;\n    overflow-y: auto;\n    justify-content: flex-start;\n    visibility: hidden; } }\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/news-item/news-item.component.html":
/*!****************************************************!*\
  !*** ./src/app/news-item/news-item.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <div class=\"event-item\">\n      <div class=\"df wrapper\">\n          <div class=\"event-item-img-wrap df-centered\"></div>\n          <div class=\"df-col jc-sb\">\n              <div class=\"fs-12\">\n                  <div class=\"light mb-5 text-bold fs-10\">\n                      FACETIME-OUT\n                  </div>\n                  <div class=\"fs-16 text-bold mb-10 color-dark\">\n                      Facebook needs the time-out it got from Wall Street\n                  </div>\n                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore accusamus iusto dolore velit placeat quasi dolores ipsam\n                  at pariatur quisquam.\n              </div>\n              <div class=\"ai-c df\">\n                  <span class=\"color-gray-200 fs-14\">\n                      Hanna Kozlowska\n                  </span>\n                  <span class=\"vertical-line\"></span>\n                  <span class=\"color-gray-200 fs-14\">\n                      Juni 28, 2018\n                  </span>\n              </div>\n          </div>\n      </div>\n  </div>"

/***/ }),

/***/ "./src/app/news-item/news-item.component.scss":
/*!****************************************************!*\
  !*** ./src/app/news-item/news-item.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".event-item {\n  max-width: 500px;\n  cursor: pointer;\n  transition: all 0.3s;\n  padding: 10px;\n  margin: 10px;\n  background: white;\n  border-radius: 3px; }\n  .event-item:hover {\n    opacity: .7; }\n  .event-item-img-wrap {\n  margin-right: 20px;\n  min-width: 150px;\n  width: 150px;\n  overflow: hidden;\n  height: 150px;\n  border-radius: 4px;\n  background-image: url(https://static.timesofisrael.com/www/uploads/2016/11/Peru-APEC-Summit_Horo-1.jpg);\n  background-size: cover;\n  background-repeat: no-repeat;\n  position: relative;\n  overflow: hidden;\n  background-position: center; }\n  .event-item-img-wrap img {\n    width: auto;\n    height: 100%; }\n  .vertical-line {\n  display: inline-block;\n  margin: 0px 8px;\n  border-left: 1px solid #b2b2b2;\n  width: 0px;\n  height: 13px; }\n  .event-item-outer {\n  padding: 40px 0;\n  border-bottom: 1px dashed #e4e4e4; }\n  @media screen and (max-width: 1120px) {\n  .event-item {\n    max-width: 100%; } }\n  @media screen and (max-width: 500px) {\n  .event-item .wrapper {\n    flex-flow: column; }\n    .event-item .wrapper .event-item-img-wrap {\n      width: 100%;\n      margin-right: 0;\n      margin-bottom: 5px; } }\n"

/***/ }),

/***/ "./src/app/news-item/news-item.component.ts":
/*!**************************************************!*\
  !*** ./src/app/news-item/news-item.component.ts ***!
  \**************************************************/
/*! exports provided: NewsItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsItemComponent", function() { return NewsItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NewsItemComponent = /** @class */ (function () {
    function NewsItemComponent() {
    }
    NewsItemComponent.prototype.ngOnInit = function () {
    };
    NewsItemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-news-item',
            template: __webpack_require__(/*! ./news-item.component.html */ "./src/app/news-item/news-item.component.html"),
            styles: [__webpack_require__(/*! ./news-item.component.scss */ "./src/app/news-item/news-item.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NewsItemComponent);
    return NewsItemComponent;
}());



/***/ }),

/***/ "./src/app/show/show.component.html":
/*!******************************************!*\
  !*** ./src/app/show/show.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"news-details\">\r\n    <div class=\"img\"></div>\r\n    <div class=\"title\">\r\n        <div>\r\n            <p class=\"light text-bold fs-20 m-0\">\r\n                FACETIME-OUT\r\n            </p>\r\n            Facebook needs the time-out it got from Wall Street\r\n        </div>\r\n    </div>\r\n    <div class=\"df deteils-wrap\">\r\n        <div class=\"deteils\">\r\n            <div class=\"fs-10 text-bold color-gray-200 mb-5\">\r\n                YOU`RE READING\r\n            </div>\r\n            <div class=\"text-bold mb-10\">\r\n\r\n                Facebook needs the time-out it got from Wall Street\r\n            </div>\r\n            <div class=\"fs-14 text-bold \">\r\n                Hanna Kozlowska\r\n            </div>\r\n            <div class=\"fs-14 text-bold color-gray-200\">\r\n                Juni 28, 2018\r\n            </div>\r\n            <div class=\"df ai-c jc-fe\">\r\n                <!-- <div class=\"line-before-pie\"></div> -->\r\n                <div class=\"wrapper\">\r\n                    <div class=\"pie spinner\"></div>\r\n                    <div class=\"pie filler\"></div>\r\n                    <div class=\"mask\"></div>\r\n                    <div class=\"radius\"></div>\r\n                    <div class=\"pie-label\">\r\n                        <b>5</b>\r\n                        <div>\r\n                            min read\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"icon-wrap\">\r\n                <i class=\"fab fa-twitter-square\"></i>\r\n                <i class=\"fab fa-facebook-square\"></i>\r\n            </div>\r\n        </div>\r\n        <div class=\"text-body-news\">\r\n            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam magnam optio repellendus adipisci iste amet fugiat explicabo\r\n            rem earum. Laboriosam molestiae aut perspiciatis atque adipisci optio ea nulla saepe, repellat consequatur doloribus\r\n            aliquam voluptatibus dolorum maxime iure corrupti dignissimos velit! Aliquam exercitationem repudiandae, facilis\r\n            nam excepturi sed! Sit asperiores aspernatur aut aliquid sint, vitae beatae error deserunt eius quidem cum eaque\r\n            est ad, praesentium cumque facilis nostrum delectus. Nemo delectus rem quam quo placeat, dolores, ipsam accusamus\r\n            reiciendis dolor nam, quia cum assumenda minus ut pariatur et fugiat. Provident accusantium repudiandae ducimus\r\n            dolores nesciunt ipsum magnam perferendis quod minus consequatur iste et sequi eum dolor vitae in fugit tempore\r\n            molestias illum, aut quibusdam. Aperiam maiores unde officia nesciunt nulla quasi architecto error, expedita\r\n            corrupti. Quidem laborum maxime architecto a pariatur, eum, nihil velit eligendi aspernatur perspiciatis atque\r\n            ea quo laboriosam officiis cumque iure voluptates sequi blanditiis? Animi beatae corrupti ipsam explicabo tempore,\r\n            quas assumenda, fugit nihil exercitationem officia provident quis mollitia. Blanditiis accusantium quia perspiciatis\r\n            sapiente corporis doloremque dolores, ipsum commodi sint. Quos impedit modi a laboriosam, maxime sequi ad nostrum\r\n            illo consequuntur nam veritatis perspiciatis, tenetur nobis quod repellendus unde esse rem? Doloremque, sequi.\r\n            Ea magni, dolores est suscipit odio fugiat unde reprehenderit quam aspernatur exercitationem dolorum illum labore\r\n            ratione voluptatem id quo. Dolorem asperiores maxime ipsum excepturi fugiat vitae voluptas odit quod recusandae\r\n            illo nesciunt cum eos voluptates earum, quia consectetur error voluptatum tenetur explicabo velit illum mollitia\r\n            nobis numquam. Unde cupiditate voluptatem at ullam cumque beatae cum eius repellendus veniam amet! Quasi corrupti\r\n            repellat, eum minima aut et fuga itaque error vitae eaque, deserunt aliquam, veniam sit vero laudantium voluptate\r\n            quisquam porro assumenda ratione ipsa accusantium officia sequi. Neque dolor illo ab ad provident maiores corporis\r\n            eius, possimus eos ut autem fugit, similique nobis voluptas voluptatem maxime!\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"show-more-wrap\">\r\n    <div class=\"show-more df ai-c text-bold fs-20\">\r\n        <i class=\"fas fa-arrow-down mr-5\"></i>\r\n        MORE FROM THE CATEGORY OF\r\n        <span class=\"light ml-5 category-name\"> BUSINESS <i class=\"fas fa-suitcase ml-5\"></i></span>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/show/show.component.scss":
/*!******************************************!*\
  !*** ./src/app/show/show.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".news-details {\n  background: #f9f9f9;\n  padding-bottom: 20px; }\n  .news-details .img {\n    background-image: url(https://static.timesofisrael.com/www/uploads/2016/11/Peru-APEC-Summit_Horo-1.jpg);\n    background-size: cover;\n    background-repeat: no-repeat;\n    position: relative;\n    overflow: hidden;\n    background-position: center;\n    min-width: 100%;\n    height: calc(100vh - 240px); }\n  .news-details .title {\n    display: flex;\n    justify-content: flex-end;\n    align-items: flex-end; }\n  .news-details .title div {\n      background: #f9f9f9;\n      position: relative;\n      margin-top: -47px;\n      margin-right: 100px;\n      font-size: 40px;\n      max-width: 600px;\n      padding: 0 20px;\n      border-radius: 3px 3px 0 0;\n      font-weight: bold;\n      font-family: 'Squada One', cursive;\n      padding-top: 10px; }\n  .news-details .deteils-wrap {\n    max-width: 900px;\n    margin: auto; }\n  .news-details .deteils-wrap .deteils {\n      min-width: 225px;\n      padding-right: 25px; }\n  .news-details .deteils-wrap .text-body-news {\n      font-family: 'PT Serif', serif; }\n  .news-details .deteils-wrap .text-body-news:first-letter {\n        font-size: 40px;\n        padding: 5px 5px;\n        margin-right: 5px;\n        margin-bottom: 2px;\n        float: left;\n        font-weight: bold;\n        text-shadow: -12px -15px 2px #3498db; }\n  .icon-wrap i {\n  font-size: 30px;\n  color: #8c8c8c;\n  margin-right: 10px;\n  transition: all .3s;\n  cursor: pointer; }\n  .icon-wrap i:hover {\n    color: #2b3034; }\n  .line-before-pie {\n  width: calc(100% - 55px);\n  border-bottom: 1px solid;\n  height: 1px; }\n  .wrapper {\n  position: relative;\n  background: white; }\n  .wrapper .radius {\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    border: 1px solid;\n    z-index: 1000;\n    border-radius: 50px; }\n  .wrapper .pie-label {\n    text-align: center;\n    position: absolute;\n    top: 10px;\n    z-index: 10000;\n    font-size: 10px;\n    left: 6px;\n    font-weight: bold; }\n  .wrapper, .wrapper * {\n  box-sizing: border-box; }\n  .wrapper {\n  width: 55px;\n  height: 55px; }\n  .wrapper .pie {\n  width: 50%;\n  height: 100%;\n  -webkit-transform-origin: 100% 50%;\n          transform-origin: 100% 50%;\n  position: absolute;\n  background: #3498db;\n  border: 0px solid rgba(0,0,0,0.8); }\n  .wrapper .spinner {\n  border-radius: 100% 0 0 100% / 50% 0 0 50%;\n  z-index: 200;\n  border-right: none;\n  -webkit-animation: rota 300s linear infinite;\n          animation: rota 300s linear infinite; }\n  .wrapper:hover .spinner,\n.wrapper:hover .filler,\n.wrapper:hover .mask {\n  -webkit-animation-play-state: running;\n          animation-play-state: running; }\n  .wrapper .filler {\n  border-radius: 0 100% 100% 0 / 0 50% 50% 0;\n  left: 50%;\n  opacity: 0;\n  z-index: 100;\n  animation: opa 300s steps(1, end) infinite reverse;\n  border-left: none; }\n  .wrapper .mask {\n  width: 50%;\n  height: 100%;\n  position: absolute;\n  background: inherit;\n  opacity: 1;\n  z-index: 300;\n  -webkit-animation: opa 300s steps(1, end) infinite;\n          animation: opa 300s steps(1, end) infinite; }\n  @-webkit-keyframes rota {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n  @keyframes rota {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n  @-webkit-keyframes opa {\n  0% {\n    opacity: 1; }\n  50%, 100% {\n    opacity: 0; } }\n  @keyframes opa {\n  0% {\n    opacity: 1; }\n  50%, 100% {\n    opacity: 0; } }\n  .show-more-wrap {\n  border-bottom: 1px dashed #d0d0d0; }\n  .show-more-wrap .show-more {\n    max-width: 1170px;\n    margin: auto;\n    padding: 10px 0; }\n  .show-more-wrap .show-more .category-name {\n      cursor: pointer;\n      transition: all .3s; }\n  .show-more-wrap .show-more .category-name:hover {\n        opacity: .7; }\n"

/***/ }),

/***/ "./src/app/show/show.component.ts":
/*!****************************************!*\
  !*** ./src/app/show/show.component.ts ***!
  \****************************************/
/*! exports provided: ShowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowComponent", function() { return ShowComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ShowComponent = /** @class */ (function () {
    function ShowComponent() {
    }
    ShowComponent.prototype.ngOnInit = function () {
    };
    ShowComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-show',
            template: __webpack_require__(/*! ./show.component.html */ "./src/app/show/show.component.html"),
            styles: [__webpack_require__(/*! ./show.component.scss */ "./src/app/show/show.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ShowComponent);
    return ShowComponent;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\TASK\movemeback\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map