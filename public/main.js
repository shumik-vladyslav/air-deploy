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

module.exports = "<app-landing></app-landing>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

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

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Milestone';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _landing_landing_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./landing/landing.component */ "./src/app/landing/landing.component.ts");
/* harmony import */ var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/header/header.component */ "./src/app/shared/header/header.component.ts");
/* harmony import */ var _shared_banner_slider_banner_slider_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/banner-slider/banner-slider.component */ "./src/app/shared/banner-slider/banner-slider.component.ts");
/* harmony import */ var _shared_product_slider_product_slider_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/product-slider/product-slider.component */ "./src/app/shared/product-slider/product-slider.component.ts");
/* harmony import */ var _shared_card_trending_card_trending_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/card-trending/card-trending.component */ "./src/app/shared/card-trending/card-trending.component.ts");
/* harmony import */ var _shared_card_video_card_video_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/card-video/card-video.component */ "./src/app/shared/card-video/card-video.component.ts");
/* harmony import */ var src_app_shared_card_example_card_example_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/card-example/card-example.component */ "./src/app/shared/card-example/card-example.component.ts");
/* harmony import */ var _shared_search_search_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/search/search.component */ "./src/app/shared/search/search.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _landing_landing_component__WEBPACK_IMPORTED_MODULE_3__["LandingComponent"],
                _shared_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
                _shared_banner_slider_banner_slider_component__WEBPACK_IMPORTED_MODULE_5__["BannerSliderComponent"],
                _shared_product_slider_product_slider_component__WEBPACK_IMPORTED_MODULE_6__["ProductSliderComponent"],
                _shared_card_trending_card_trending_component__WEBPACK_IMPORTED_MODULE_7__["CardTrendingComponent"],
                _shared_card_video_card_video_component__WEBPACK_IMPORTED_MODULE_8__["CardVideoComponent"],
                src_app_shared_card_example_card_example_component__WEBPACK_IMPORTED_MODULE_9__["CardExampleComponent"],
                _shared_search_search_component__WEBPACK_IMPORTED_MODULE_10__["SearchComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/landing/landing.component.html":
/*!************************************************!*\
  !*** ./src/app/landing/landing.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-loader\"></div>\n\n<div class=\"wrapper\">\n\n    <!-- ======================== Navigation ======================== -->\n\n    <app-header></app-header>\n\n    <!-- ========================  Header content ======================== -->\n\n    <section class=\"header-content\">\n\n        <app-banner-slider></app-banner-slider>\n\n        <button class=\"search-button\" (click)=\"showSearch = !showSearch\">\n            <img src=\"assets/HOME-PAGE-ICONS&GRAPHICS/Hoveringsearch.png\" alt=\"\">\n        </button>\n\n        <div [ngClass]=\"{'bg-fixed-active': showMobilMenu}\" class=\"bg-fixed\"></div>\n\n        <div class=\"set-button-wrap\">\n            <button [ngClass]=\"{'active': showMobilMenu}\" class=\"mobile-menu button\" (click)=\"(showMobilMenu = !showMobilMenu) && (showMobilMenuItem = '')\">\n                <img src=\"assets/HOME-PAGE-ICONS&GRAPHICS/s-symbol-white.png\" alt=\"\">\n            </button>\n            <button [ngClass]=\"{'active': showMobilMenu}\" class=\"mobile-estimate button\" (click)=\"(showMobilMenuItem = 'estimate') && ( showMobilMenu = false )\">\n                <img src=\"assets/HOME-PAGE-ICONS&GRAPHICS/estimate_white.png\" alt=\"\">\n                <span class=\"button-lable\">\n                    Estimate\n                </span>\n            </button>\n            <button [ngClass]=\"{'active': showMobilMenu}\" class=\"mobile-explore button\" (click)=\"(showMobilMenuItem = 'explore') && ( showMobilMenu = false )\">\n                <img src=\"assets/HOME-PAGE-ICONS&GRAPHICS/explore_white.png\" alt=\"\">\n                <span class=\"button-lable\">\n                    Explore\n                </span>\n            </button>\n            <button [ngClass]=\"{'active': showMobilMenu}\" (click)=\"showSearch = !showSearch\" class=\"mobile-search button\">\n                <img src=\"assets/HOME-PAGE-ICONS&GRAPHICS/search.png\" alt=\"\">\n                <span class=\"button-lable\">\n                    Search\n                </span>\n            </button>\n        </div>\n        <app-search *ngIf=\"showSearch\"></app-search>\n        <div class=\"estimate-wrap hide-menu-item-sm\" [ngClass]=\"{'show-menu-item-sm': showMobilMenuItem == 'estimate'}\">\n            <div class=\"tittle\">\n                SELECT A SPACE TO ESTIMATE\n            </div>\n            <div>\n                <div class=\"custom-row-estimate-sm\">\n                    <div class=\"item-extimate-sm\">\n                        <img src=\"assets/Menu-Icons/bedroom_white.png\" alt=\"\"> BEDROOM\n                    </div>\n                    <div class=\"item-extimate-sm\">\n                        <img src=\"assets/Menu-Icons/Livin_white.png\" alt=\"\"> LIVING\n                    </div>\n                </div>\n                <div class=\"custom-row-estimate-sm\">\n                    <div class=\"item-extimate-sm\">\n                        <img src=\"assets/Menu-Icons/Bathroom_white.png\" alt=\"\"> BATHROOM\n                    </div>\n                    <div class=\"item-extimate-sm\">\n                        <img src=\"assets/Menu-Icons/Kitchen_White.png\" alt=\"\"> KITCHEN\n                    </div>\n                </div>\n                <div class=\"custom-row-estimate-sm\">\n                    <div class=\"item-extimate-sm\">\n                        <img src=\"assets/Menu-Icons/Dining_White.png\" alt=\"\"> DINING\n                    </div>\n                    <div class=\"item-extimate-sm\">\n                        <img src=\"assets/Menu-Icons/Study_White.png\" alt=\"\"> STUDY\n                    </div>\n                </div>\n                <div class=\"custom-row-estimate-sm\">\n                    <div class=\"item-extimate-sm\">\n                        <img src=\"assets/Menu-Icons/Terrace_White.png\" alt=\"\"> TERRACE\n                    </div>\n                    <div class=\"item-extimate-sm\">\n                        <img src=\"assets/Menu-Icons/All_White.png\" alt=\"\"> ALL SPACES\n                        <div class=\"comment-estimate\">\n                            Looking for a complete Home Makeover? Select this option!\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"explore-wrap hide-menu-item-sm\" [ngClass]=\"{'show-menu-item-sm': showMobilMenuItem == 'explore'}\">\n            <div class=\"tittle\">\n                EXPLORE BY\n            </div>\n            <div class=\"head-sub-menu\">\n                <div class=\"sub-menu-item active\">\n                    <i class=\"fa fa-home lable-icon\"></i>\n                    SPACES\n                </div>\n                <div class=\"sub-menu-item\">\n                    <i class=\"fa fa-paint-brush lable-icon\"></i>\n                    STYLES\n                </div>\n                <div class=\"sub-menu-item\">\n                    <i class=\"fa fa-map-marker lable-icon\"></i>\n                    AREAS\n                </div>\n                <div class=\"sub-menu-item\">\n                    <i class=\"fa fa-bath lable-icon\"></i>\n                    OBJECTS\n                </div>\n            </div>\n            <div class=\"custome-row-explore\">\n                    <span>\n                        Bedroom\n                    </span>\n                    <i class=\"fa fa-caret-right\"></i>\n            </div>\n            <div class=\"custome-row-explore\">\n                    <span>\n                        Bathroom\n                    </span>\n                    <i class=\"fa fa-caret-right\"></i>\n            </div>\n            <div class=\"custome-row-explore\">\n                    <span>\n                        Living\n                    </span>\n                    <i class=\"fa fa-caret-right\"></i>\n            </div>\n            <div class=\"custome-row-explore\">\n                    <span>\n                        Kitchen\n                    </span>\n                    <i class=\"fa fa-caret-right\"></i>\n            </div>\n            <div class=\"custome-row-explore\">\n                    <span>\n                        Dining\n                    </span>\n                    <i class=\"fa fa-caret-right\"></i>\n            </div>\n            <div class=\"custome-row-explore\">\n                    <span>\n                        Terrace\n                    </span>\n                    <i class=\"fa fa-caret-right\"></i>\n            </div>\n            <div class=\"custome-row-explore\">\n                    <span>\n                        Study\n                    </span>\n                    <i class=\"fa fa-caret-right\"></i>\n            </div>\n        </div>\n        <!--/owl-slider-->\n    </section>\n\n    <!-- ========================  Icons slider ======================== -->\n\n    <section class=\"owl-icons-wrapper owl-icons-frontpage\">\n\n        <!-- === header === -->\n\n        <header class=\"hidden\">\n            <h2>Product categories</h2>\n        </header>\n\n        <div class=\"container hide-sm\">\n\n            <app-product-slider ></app-product-slider>\n            <!--/owl-icons-->\n        </div>\n        <!--/container-->\n    </section>\n\n    <!-- ========================  Products widget ======================== -->\n\n    <section class=\"products\">\n\n        <div class=\"container\">\n\n            <!-- === header title === -->\n\n            <header>\n                <div class=\"row\">\n                    <div class=\"col-md-offset-2 col-md-8 text-center\">\n                        <h2 class=\"title\">Now Trending on Spacifii</h2>\n                    </div>\n                    <div class=\"page-slide-value\">\n                        Results 1 / 9\n                    </div>\n                </div>\n            </header>\n\n            <div class=\"container-box-slider m-b-60\">\n                <i class=\"fa fa-caret-left caret-style\"></i>\n                <div class=\"container custom-container\">\n                    <div class=\"row m-b-60\">\n                        <div class=\"col-sm-12 col-md-4 col-lg-4\">\n                            <app-card-trending></app-card-trending>\n                        </div>\n                        <div class=\"col-sm-12 col-md-4 col-lg-4\">\n                            <app-card-trending></app-card-trending>\n                        </div>\n                        <div class=\"col-sm-12 col-md-4 col-lg-4\">\n                            <app-card-trending></app-card-trending>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-sm-12 col-md-4 col-lg-4\">\n                            <app-card-trending></app-card-trending>\n                        </div>\n                        <div class=\"col-sm-12 col-md-4 col-lg-4\">\n                            <app-card-trending></app-card-trending>\n                        </div>\n                        <div class=\"col-sm-12 col-md-4 col-lg-4\">\n                            <app-card-trending></app-card-trending>\n                        </div>\n                    </div>\n                </div>\n                <i class=\"fa fa-caret-right caret-style\"></i>\n            </div>\n\n\n            <div class=\"container container-width\">\n                <div class=\"row\">\n                    <div class=\"text-box m-b-60\">\n                        <div class=\"title-text-box\">\n                            Browse Photos\n                        </div>\n                        <div class=\"body-text-box\">\n                            Kitchen · Bathroom · Powder Room · Bedroom · Living Room · Home Theater · Family Room · Dining · Terrace & Balcony · Patio\n                            · Swimming Pool · Sunroom · Garden · Veranda · Baby & Kids · Nursery · Home Office · Wardrobe\n                            · Exterior · Entry · Garage & Shed · Home Gym · Corridor · Home Bar · Utility Room · Staircase\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n            <header>\n                <div class=\"row\">\n                    <div class=\"col-md-offset-2 col-md-8 text-center\">\n                        <h2 class=\"title\">Watch Our Customer Stories</h2>\n                    </div>\n                </div>\n            </header>\n\n            <div class=\"container-box-slider-video m-b-60\">\n                <i class=\"fa fa-caret-left caret-style\"></i>\n                <div class=\"container custom-container\">\n                    <div class=\"row\">\n                        <div class=\"col-sm-12 col-xs-12 col-md-4 col-lg-4\">\n                            <app-card-video></app-card-video>\n                        </div>\n                        <div class=\"col-sm-12 col-xs-12 col-md-4 col-lg-4\">\n                            <app-card-video></app-card-video>\n                        </div>\n                        <div class=\"col-sm-12 col-xs-12 col-md-4 col-lg-4\">\n                            <app-card-video></app-card-video>\n                        </div>\n                    </div>\n                </div>\n                <i class=\"fa fa-caret-right caret-style\"></i>\n\n            </div>\n            <!--/wrapper-->\n\n\n            <header>\n                <div class=\"row\">\n                    <div class=\"col-md-offset-2 col-md-8 text-center\">\n                        <h2 class=\"title\">Recently Spacifiied</h2>\n                    </div>\n                </div>\n            </header>\n\n            <div class=\"container-box-slider-video\">\n                <i class=\"fa fa-caret-left caret-style\"></i>\n                <div class=\"container custom-container\">\n                    <div class=\"row\">\n                        <div class=\"col-sm-12\">\n                            <app-card-example></app-card-example>\n                        </div>\n                    </div>\n                </div>\n                <i class=\"fa fa-caret-right caret-style\"></i>\n\n            </div>\n\n\n        </div>\n\n    </section>\n\n    <div class=\"footer-contemt\">\n        <div class=\"top-footer\">\n            <div class=\"logo-footer\">\n                <img src=\"assets/HOME-PAGE-ICONS&GRAPHICS/s-symbolblack.png\" alt=\"\">\n            </div>\n            <div class=\"top-footer-items\">\n                <div class=\"top-footer-item\">\n                    About\n                </div>\n                <div class=\"top-footer-item\">\n                    Careers\n                </div>\n                <div class=\"top-footer-item\">\n                    Contact Us\n                </div>\n                <div class=\"top-footer-item\">\n                    Advertise\n                </div>\n                <div class=\"top-footer-item\">\n                    Terms & Privacy\n                </div>\n            </div>\n        </div>\n        <div class=\"bot-footer text-center\">\n            Spacifii ©2018\n            <div class=\"social-wrap\">\n                <img src=\"assets/HOME-PAGE-ICONS&GRAPHICS/facebook.png\" alt=\"\">\n                <img src=\"assets/HOME-PAGE-ICONS&GRAPHICS/insta.png\" alt=\"\">\n                <img src=\"assets/HOME-PAGE-ICONS&GRAPHICS/youtube.png\" alt=\"\">\n                <img src=\"assets/HOME-PAGE-ICONS&GRAPHICS/twitter.png\" alt=\"\">\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/landing/landing.component.scss":
/*!************************************************!*\
  !*** ./src/app/landing/landing.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header-content {\n  position: relative; }\n\nheader .title {\n  font-weight: normal; }\n\n.container-box-slider, .container-box-slider-video {\n  display: flex;\n  align-items: center; }\n\n.container-box-slider .caret-style, .container-box-slider-video .caret-style {\n    opacity: 0;\n    font-size: 60px;\n    color: #ababab;\n    cursor: pointer;\n    transition: all .3s; }\n\n.container-box-slider .caret-style:hover, .container-box-slider-video .caret-style:hover {\n      color: #868686; }\n\n.container-box-slider:hover .caret-style, .container-box-slider-video:hover .caret-style {\n    opacity: 1; }\n\n.m-b-60 {\n  margin-bottom: 60px; }\n\n.custom-container {\n  padding: 0 30px; }\n\n@media (max-width: 767px) {\n  .custom-container {\n    padding: 0 0px;\n    width: 100%; } }\n\n.container-width {\n  max-width: calc( 100% - 100px); }\n\n@media screen and (max-width: 599px) {\n    .container-width {\n      max-width: calc( 100% - 50px); } }\n\n.togle-img-wrap {\n  display: inline-block;\n  width: 30px;\n  display: flex;\n  justify-content: center;\n  margin-right: 10px; }\n\n.togle-img-wrap img {\n    width: 20px; }\n\n.top-footer {\n  position: relative;\n  background: white; }\n\n.top-footer .logo-footer {\n    position: absolute;\n    left: 30px;\n    top: 6px; }\n\n.top-footer .top-footer-items {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    padding: 12px;\n    flex-wrap: wrap; }\n\n.top-footer .top-footer-items .top-footer-item {\n      border-right: 1px solid #3d3d3d;\n      color: #3d3d3d;\n      height: 18px;\n      padding: 0 30px;\n      cursor: pointer;\n      transition: all .3s; }\n\n.top-footer .top-footer-items .top-footer-item:hover {\n        color: #FFBB00;\n        transition: all .3s; }\n\n.top-footer .top-footer-items .top-footer-item:last-child {\n        border-right: 0; }\n\n.bot-footer {\n  position: relative;\n  color: white;\n  background: #3d3d3d;\n  padding: 20px; }\n\n.bot-footer .social-wrap {\n    display: flex;\n    align-items: center;\n    position: absolute;\n    right: 30px;\n    top: 16px; }\n\n@media screen and (max-width: 991px) {\n      .bot-footer .social-wrap {\n        display: flex;\n        align-items: center;\n        position: relative;\n        right: 0;\n        top: 0;\n        justify-content: center;\n        margin-top: 20px; } }\n\n.bot-footer .social-wrap img {\n      margin-right: 20px;\n      cursor: pointer;\n      transition: all .3s; }\n\n.bot-footer .social-wrap img:hover {\n        opacity: .6; }\n\n.page-slide-value {\n  font-size: 12px;\n  text-align: right;\n  padding-right: 67px;\n  margin-top: 10px; }\n\n@media screen and (max-width: 991px) {\n    .page-slide-value {\n      display: none; } }\n\n.search-button {\n  outline: none;\n  border: none;\n  background: none;\n  cursor: pointer;\n  position: absolute;\n  right: 97px;\n  bottom: 196px;\n  padding: 0;\n  width: 67px;\n  height: 67px;\n  display: flex;\n  align-items: center;\n  justify-content: center; }\n\n@media screen and (max-width: 991px) {\n    .search-button {\n      display: none; } }\n\n.set-button-wrap {\n  position: fixed;\n  right: 22px;\n  bottom: 17px;\n  display: none;\n  flex-flow: column-reverse;\n  align-items: center;\n  z-index: 1111; }\n\n@media screen and (max-width: 991px) {\n    .set-button-wrap {\n      display: flex; } }\n\n.set-button-wrap .button {\n    border: 3px solid white;\n    border-radius: 50%;\n    width: 67px;\n    height: 67px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    transition: all .3s;\n    outline: none; }\n\n.set-button-wrap .button img {\n      width: 30px; }\n\n.set-button-wrap .button .button-lable {\n      position: absolute;\n      bottom: -18px;\n      color: white;\n      font-size: 12px;\n      display: none; }\n\n.set-button-wrap .mobile-menu {\n    background: #0c7a86;\n    width: 67px;\n    height: 67px;\n    position: relative;\n    z-index: 5; }\n\n.set-button-wrap .mobile-estimate {\n    border: none;\n    background: #f57c00;\n    width: 62px;\n    height: 62px;\n    position: absolute;\n    z-index: 4; }\n\n.set-button-wrap .mobile-explore {\n    border: none;\n    background: #3d3d3d;\n    width: 62px;\n    height: 62px;\n    position: absolute;\n    z-index: 3; }\n\n.set-button-wrap .mobile-search {\n    border: none;\n    background: #0c7a86;\n    width: 62px;\n    height: 62px;\n    position: absolute;\n    z-index: 2; }\n\n.set-button-wrap .active .button-lable {\n    display: inline; }\n\n.set-button-wrap .active.mobile-menu {\n    background: #999999; }\n\n.set-button-wrap .active.mobile-estimate {\n    -webkit-transform: translate(0, -96px);\n            transform: translate(0, -96px); }\n\n.set-button-wrap .active.mobile-explore {\n    -webkit-transform: translate(0, -192px);\n            transform: translate(0, -192px); }\n\n.set-button-wrap .active.mobile-search {\n    -webkit-transform: translate(0, -288px);\n            transform: translate(0, -288px); }\n\n.bg-fixed {\n  pointer-events: none;\n  transition: all .3s;\n  position: fixed;\n  width: 100%;\n  height: 100vh;\n  top: 0;\n  bottom: 0;\n  left: 0; }\n\n.bg-fixed-active {\n  background: rgba(0, 0, 0, 0.4);\n  z-index: 1; }\n\n.estimate-wrap, .explore-wrap {\n  background: #3d3d3d;\n  height: 100%;\n  width: 100%;\n  top: 0;\n  left: 0;\n  position: fixed;\n  z-index: 111;\n  padding-top: 58px; }\n\n.estimate-wrap .tittle, .explore-wrap .tittle {\n    text-align: center;\n    color: white;\n    padding: 10px;\n    padding-top: 20px; }\n\n.custom-row-estimate-sm {\n  display: flex; }\n\n.custom-row-estimate-sm .item-extimate-sm {\n    width: 50%;\n    min-height: 100px;\n    display: flex;\n    align-items: center;\n    flex-flow: column;\n    color: white;\n    transition: all .3s;\n    padding: 18px; }\n\n.custom-row-estimate-sm .item-extimate-sm:hover {\n      background: #f57c00; }\n\n.custom-row-estimate-sm .item-extimate-sm img {\n      margin-bottom: 10px;\n      height: 50px; }\n\n.custom-row-estimate-sm .item-extimate-sm .comment-estimate {\n      text-align: center;\n      margin-top: 10px;\n      font-size: 12px; }\n\n.hide-menu-item-sm {\n  -webkit-transform: translate(100%, 100%);\n          transform: translate(100%, 100%);\n  transition: all .3s; }\n\n.show-menu-item-sm {\n  -webkit-transform: translate(0, 0);\n          transform: translate(0, 0); }\n\n.head-sub-menu {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-top: 15px;\n  margin-bottom: 15px; }\n\n.head-sub-menu .sub-menu-item {\n    display: flex;\n    align-items: center;\n    flex-flow: column;\n    color: white;\n    width: calc(100% / 4);\n    padding-bottom: 5px; }\n\n.head-sub-menu .sub-menu-item.active {\n      border-bottom: 1px solid #f57c00; }\n\n.head-sub-menu .sub-menu-item .lable-icon {\n      font-size: 25px;\n      margin-bottom: 5px;\n      cursor: pointer; }\n\n.custome-row-explore {\n  padding: 15px 20px;\n  border-bottom: 1px solid #919191;\n  color: white;\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center; }\n\n.custome-row-explore span {\n    display: inline-block;\n    width: 100px;\n    text-align: left; }\n\n.custome-row-explore:last-child {\n    border-bottom: none; }\n\n.custome-row-explore .fa-caret-right {\n    position: absolute;\n    right: 15px;\n    color: #a2a2a2; }\n\n@media screen and (max-width: 991px) {\n  .products {\n    padding-top: 150px; } }\n\n@media screen and (min-width: 960px) {\n  .logo-footer {\n    left: 200px !important; }\n  .social-wrap {\n    right: 140px !important; } }\n"

/***/ }),

/***/ "./src/app/landing/landing.component.ts":
/*!**********************************************!*\
  !*** ./src/app/landing/landing.component.ts ***!
  \**********************************************/
/*! exports provided: LandingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingComponent", function() { return LandingComponent; });
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

var LandingComponent = /** @class */ (function () {
    function LandingComponent() {
        this.showMobilMenu = false;
        this.showMobilMenuItem = '';
    }
    LandingComponent.prototype.ngOnInit = function () {
    };
    LandingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-landing',
            template: __webpack_require__(/*! ./landing.component.html */ "./src/app/landing/landing.component.html"),
            styles: [__webpack_require__(/*! ./landing.component.scss */ "./src/app/landing/landing.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LandingComponent);
    return LandingComponent;
}());



/***/ }),

/***/ "./src/app/shared/banner-slider/banner-slider.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/shared/banner-slider/banner-slider.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"owl-slider\">\n\n    <!-- === slide item === -->\n\n    <div class=\"item slide-item\" style=\"background-image:url(https://content.jdmagicbox.com/comp/mumbai/k8/pwfl1503923521f4j2k8/catalogue/spacifii-powai-mumbai-interior-designers-e1dy3.jpg?interpolation=lanczos-none&output-format=jpg&resize=1024:370&crop=1024:370px;*,*)\">\n        <div class=\"box\">\n            <div class=\"container text-center content-box\">\n                <h2 class=\"title animated h1\" data-animation=\"fadeInDown\">Headline 1</h2>\n                <div class=\"animated\" data-animation=\"fadeInUp\">\n                    Body Text - This will be a rotating banner with bkgd image- headline- text and CTA that keeps changing Maximum 3 banners\n                    (SPACIFII - EXPLORE - ESTIMATE)\n                </div>\n                <div class=\"animated\" data-animation=\"fadeInUp\">\n                    <a href=\"https://themeforest.net/item/mobel-furniture-website-template/20382155\" target=\"_blank\" class=\"btn btn-main custom-btn\">\n                        CALL TO ACTION</a>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <!-- === slide item === -->\n\n    <div class=\"item slide-item\" style=\"background-image:url(https://content.jdmagicbox.com/comp/mumbai/k8/pwfl1503923521f4j2k8/catalogue/spacifii-powai-mumbai-interior-designers-e1dy3.jpg?interpolation=lanczos-none&output-format=jpg&resize=1024:370&crop=1024:370px;*,*)\">\n        <div class=\"box\">\n            <div class=\"container text-center content-box\">\n                <h2 class=\"title animated h1\" data-animation=\"fadeInDown\">Headline 2</h2>\n                <div class=\"animated\" data-animation=\"fadeInUp\">\n                    Body Text - This will be a rotating banner with bkgd image- headline- text and CTA that keeps changing Maximum 3 banners\n                    (SPACIFII - EXPLORE - ESTIMATE)\n                </div>\n                <div class=\"animated\" data-animation=\"fadeInUp\">\n                    <a href=\"https://themeforest.net/item/mobel-furniture-website-template/20382155\" target=\"_blank\" class=\"btn btn-main custom-btn\">\n                        CALL TO ACTION</a>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <!-- === slide item === -->\n\n    <div class=\"item slide-item\" style=\"background-image:url(https://content.jdmagicbox.com/comp/mumbai/k8/pwfl1503923521f4j2k8/catalogue/spacifii-powai-mumbai-interior-designers-e1dy3.jpg?interpolation=lanczos-none&output-format=jpg&resize=1024:370&crop=1024:370px;*,*)\">\n        <div class=\"box\">\n            <div class=\"container text-center content-box\">\n                <h2 class=\"title animated h1\" data-animation=\"fadeInDown\">Headline 3</h2>\n                <div class=\"animated\" data-animation=\"fadeInUp\">\n                    Body Text - This will be a rotating banner with bkgd image- headline- text and CTA that keeps changing Maximum 3 banners\n                    (SPACIFII - EXPLORE - ESTIMATE)\n                </div>\n                <div class=\"animated\" data-animation=\"fadeInUp\">\n                    <a href=\"https://themeforest.net/item/mobel-furniture-website-template/20382155\" target=\"_blank\" class=\"btn btn-main custom-btn\">\n                        CALL TO ACTION</a>\n                </div>\n            </div>\n        </div>\n    </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/shared/banner-slider/banner-slider.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/shared/banner-slider/banner-slider.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".slider-wrap {\n  margin-top: 0 !important; }\n\n.head-container-wrap {\n  background-image: url(https://content.jdmagicbox.com/comp/mumbai/k8/pwfl1503923521f4j2k8/catalogue/spacifii-powai-mumbai-interior-designers-e1dy3.jpg?interpolation=lanczos-none&output-format=jpg&resize=1024:370&crop=1024:370px;*,*);\n  padding-top: 60px;\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n  background-position: center;\n  background-size: 100%;\n  min-height: 100vh; }\n\n.slide-item {\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: auto 100%;\n  min-height: 500px; }\n\n.content-box {\n  max-width: 400px;\n  margin: auto; }\n\n.content-box .title {\n    text-shadow: none; }\n\n.custom-btn {\n  margin-top: 40px;\n  border-radius: 10px;\n  padding: 10px;\n  background: #f57c00;\n  text-shadow: none;\n  text-transform: uppercase;\n  box-shadow: 0px 0px 16px #00000059; }\n\n.logo {\n  top: 2px; }\n\n.logo img {\n    max-width: 100px; }\n\n.owl-slider {\n  position: relative; }\n"

/***/ }),

/***/ "./src/app/shared/banner-slider/banner-slider.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/shared/banner-slider/banner-slider.component.ts ***!
  \*****************************************************************/
/*! exports provided: BannerSliderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BannerSliderComponent", function() { return BannerSliderComponent; });
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

var BannerSliderComponent = /** @class */ (function () {
    function BannerSliderComponent() {
    }
    BannerSliderComponent.prototype.ngOnInit = function () {
    };
    BannerSliderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-banner-slider',
            template: __webpack_require__(/*! ./banner-slider.component.html */ "./src/app/shared/banner-slider/banner-slider.component.html"),
            styles: [__webpack_require__(/*! ./banner-slider.component.scss */ "./src/app/shared/banner-slider/banner-slider.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], BannerSliderComponent);
    return BannerSliderComponent;
}());



/***/ }),

/***/ "./src/app/shared/card-example/card-example.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/shared/card-example/card-example.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"box box-video\">\n    <div style=\"background-image: url(https://content.jdmagicbox.com/comp/mumbai/k8/pwfl1503923521f4j2k8/catalogue/spacifii-powai-mumbai-interior-designers-e1dy3.jpg?interpolation=lanczos-none&output-format=jpg&resize=1024:370&crop=1024:370px;*,*)\"\n        class=\"bg-img-item-tranding img-full-width\">\n    </div>\n    <div class=\"title-box-item border-none\">\n        <span class=\"icon-title-box\">\n            <img src=\"assets/HOME-PAGE-ICONS&GRAPHICS/image.png\" alt=\"\">\n        </span>\n        Living Room - Customer Name\n    </div>\n    <div class=\"second-title-full\">\n        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut\n    </div>\n    <div class=\"day-text\">\n        Posted on : HRS / DDMMYY\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/shared/card-example/card-example.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/shared/card-example/card-example.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".box-tranding {\n  cursor: pointer;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.45);\n  position: relative;\n  transition: all 0.5s;\n  margin-bottom: 10px; }\n  .box-tranding .bg-img-item-tranding {\n    background-repeat: no-repeat;\n    background-position: center;\n    background-size: auto 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 100%;\n    height: 280px; }\n  .box-tranding .bg-img-item-tranding .hover-content-box {\n      -webkit-transform: scale(0);\n              transform: scale(0);\n      transition: all .3s;\n      width: 80%;\n      background: rgba(0, 0, 0, 0.4);\n      padding: 20px;\n      border-radius: 2px;\n      color: white;\n      text-align: center;\n      font-size: 40px; }\n  @media screen and (max-width: 991px) {\n        .box-tranding .bg-img-item-tranding .hover-content-box {\n          font-size: 20px; } }\n  .box-tranding .title-box-item {\n    background: white;\n    display: flex;\n    align-items: center;\n    padding: 10px;\n    font-size: 13px;\n    transition: all .3s;\n    color: black; }\n  .box-tranding .title-box-item .icon-title-box {\n      margin-right: 10px;\n      width: 20px; }\n  .box-tranding:hover .bg-img-item-tranding .hover-content-box {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    transition: all .3s; }\n  .box-tranding:hover .title-box-item {\n    opacity: .5;\n    transition: all .3s; }\n  .container-box-slider, .container-box-slider-video {\n  display: flex;\n  align-items: center; }\n  .container-box-slider .caret-style, .container-box-slider-video .caret-style {\n    opacity: 0;\n    font-size: 60px;\n    color: #ababab;\n    cursor: pointer;\n    transition: all .3s; }\n  .container-box-slider .caret-style:hover, .container-box-slider-video .caret-style:hover {\n      color: #868686; }\n  .container-box-slider:hover .caret-style, .container-box-slider-video:hover .caret-style {\n    opacity: 1; }\n  .m-b-60 {\n  margin-bottom: 60px; }\n  .custom-container {\n  padding: 0 30px; }\n  @media (max-width: 767px) {\n  .custom-container {\n    padding: 0 0px;\n    width: 100%; } }\n  .text-box {\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.45);\n  background-color: white;\n  position: relative;\n  transition: all 0.5s;\n  padding: 25px !important; }\n  .text-box .title-text-box {\n    font-size: 20px;\n    color: black;\n    margin-bottom: 20px; }\n  .text-box .body-text-box {\n    color: #454545;\n    line-height: 27px; }\n  .container-width {\n  max-width: calc( 100% - 100px); }\n  @media screen and (max-width: 599px) {\n    .container-width {\n      max-width: calc( 100% - 50px); } }\n  .box-video {\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.45);\n  background-color: white;\n  position: relative;\n  transition: all 0.5s;\n  margin-bottom: 10px; }\n  .box-video .bg-img-item-tranding {\n    position: relative;\n    background-repeat: no-repeat;\n    background-position: center;\n    background-size: auto 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 100%;\n    height: 280px;\n    cursor: pointer; }\n  .box-video .bg-img-item-tranding .hover-content-box-video {\n      -webkit-transform: scale(0);\n              transform: scale(0);\n      transition: all .3s;\n      width: 100%;\n      height: 100%;\n      background: rgba(0, 0, 0, 0.4);\n      color: white;\n      text-align: center;\n      font-size: 16px;\n      display: flex;\n      align-items: center;\n      justify-content: center; }\n  .box-video .bg-img-item-tranding .hover-content-box-video .box-video-hoder-inside {\n        padding: 10px 30px;\n        color: white;\n        border: 1px solid;\n        font-weight: 500; }\n  .box-video .bg-img-item-tranding .logo-video {\n      position: absolute;\n      right: 10px;\n      top: 10px; }\n  .box-video .bg-img-item-tranding:hover .hover-content-box-video {\n      -webkit-transform: scale(1);\n              transform: scale(1); }\n  .box-video .img-full-width {\n    height: 380px; }\n  .box-video .second-title {\n    padding: 10px;\n    min-height: 80px;\n    font-size: 12px; }\n  .box-video .second-title-full {\n    min-height: unset;\n    padding: 20px 10px;\n    font-size: 12px; }\n  .box-video .title-box-item {\n    background: white;\n    display: flex;\n    align-items: center;\n    padding: 10px;\n    font-size: 13px;\n    transition: all .3s;\n    color: black;\n    border-bottom: 1px solid #bdbdbd;\n    padding-bottom: 6px; }\n  .box-video .title-box-item .icon-title-box {\n      margin-right: 10px;\n      width: 20px; }\n  .border-none {\n  border: none !important; }\n  .day-text {\n  min-height: unset;\n  padding: 10px 10px;\n  font-size: 12px;\n  padding-top: 0;\n  color: #a7a9ac; }\n"

/***/ }),

/***/ "./src/app/shared/card-example/card-example.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/shared/card-example/card-example.component.ts ***!
  \***************************************************************/
/*! exports provided: CardExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardExampleComponent", function() { return CardExampleComponent; });
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

var CardExampleComponent = /** @class */ (function () {
    function CardExampleComponent() {
    }
    CardExampleComponent.prototype.ngOnInit = function () {
    };
    CardExampleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-card-example',
            template: __webpack_require__(/*! ./card-example.component.html */ "./src/app/shared/card-example/card-example.component.html"),
            styles: [__webpack_require__(/*! ./card-example.component.scss */ "./src/app/shared/card-example/card-example.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CardExampleComponent);
    return CardExampleComponent;
}());



/***/ }),

/***/ "./src/app/shared/card-trending/card-trending.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/shared/card-trending/card-trending.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"box box-tranding\">\n    <div style=\"background-image: url(https://content.jdmagicbox.com/comp/mumbai/k8/pwfl1503923521f4j2k8/catalogue/spacifii-powai-mumbai-interior-designers-e1dy3.jpg?interpolation=lanczos-none&output-format=jpg&resize=1024:370&crop=1024:370px;*,*)\"\n        class=\"bg-img-item-tranding\">\n        <div class=\"hover-content-box\">\n            ADSPACE\n        </div>\n    </div>\n    <div class=\"title-box-item\">\n        <span class=\"icon-title-box\">\n            <img src=\"assets/HOME-PAGE-ICONS&GRAPHICS/image.png\" alt=\"\">\n        </span>\n        Living Room - TITLE\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/shared/card-trending/card-trending.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/shared/card-trending/card-trending.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".box-tranding {\n  cursor: pointer;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.45);\n  position: relative;\n  transition: all 0.5s;\n  margin-bottom: 10px; }\n  .box-tranding .bg-img-item-tranding {\n    background-repeat: no-repeat;\n    background-position: center;\n    background-size: auto 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 100%;\n    height: 280px; }\n  .box-tranding .bg-img-item-tranding .hover-content-box {\n      -webkit-transform: scale(0);\n              transform: scale(0);\n      transition: all .3s;\n      width: 80%;\n      background: rgba(0, 0, 0, 0.4);\n      padding: 20px;\n      border-radius: 2px;\n      color: white;\n      text-align: center;\n      font-size: 40px; }\n  @media screen and (max-width: 991px) {\n        .box-tranding .bg-img-item-tranding .hover-content-box {\n          font-size: 20px; } }\n  .box-tranding .title-box-item {\n    background: white;\n    display: flex;\n    align-items: center;\n    padding: 10px;\n    font-size: 13px;\n    transition: all .3s;\n    color: black; }\n  .box-tranding .title-box-item .icon-title-box {\n      margin-right: 10px;\n      width: 20px; }\n  .box-tranding:hover .bg-img-item-tranding .hover-content-box {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    transition: all .3s; }\n  .box-tranding:hover .title-box-item {\n    opacity: .5;\n    transition: all .3s; }\n  .container-box-slider, .container-box-slider-video {\n  display: flex;\n  align-items: center; }\n  .container-box-slider .caret-style, .container-box-slider-video .caret-style {\n    opacity: 0;\n    font-size: 60px;\n    color: #ababab;\n    cursor: pointer;\n    transition: all .3s; }\n  .container-box-slider .caret-style:hover, .container-box-slider-video .caret-style:hover {\n      color: #868686; }\n  .container-box-slider:hover .caret-style, .container-box-slider-video:hover .caret-style {\n    opacity: 1; }\n  .m-b-60 {\n  margin-bottom: 60px; }\n  .custom-container {\n  padding: 0 30px; }\n  @media (max-width: 767px) {\n  .custom-container {\n    padding: 0 0px;\n    width: 100%; } }\n  .text-box {\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.45);\n  background-color: white;\n  position: relative;\n  transition: all 0.5s;\n  padding: 25px !important; }\n  .text-box .title-text-box {\n    font-size: 20px;\n    color: black;\n    margin-bottom: 20px; }\n  .text-box .body-text-box {\n    color: #454545;\n    line-height: 27px; }\n  .container-width {\n  max-width: calc( 100% - 100px); }\n  @media screen and (max-width: 599px) {\n    .container-width {\n      max-width: calc( 100% - 50px); } }\n  .box-video {\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.45);\n  background-color: white;\n  position: relative;\n  transition: all 0.5s;\n  margin-bottom: 10px; }\n  .box-video .bg-img-item-tranding {\n    position: relative;\n    background-repeat: no-repeat;\n    background-position: center;\n    background-size: auto 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 100%;\n    height: 280px;\n    cursor: pointer; }\n  .box-video .bg-img-item-tranding .hover-content-box-video {\n      -webkit-transform: scale(0);\n              transform: scale(0);\n      transition: all .3s;\n      width: 100%;\n      height: 100%;\n      background: rgba(0, 0, 0, 0.4);\n      color: white;\n      text-align: center;\n      font-size: 16px;\n      display: flex;\n      align-items: center;\n      justify-content: center; }\n  .box-video .bg-img-item-tranding .hover-content-box-video .box-video-hoder-inside {\n        padding: 10px 30px;\n        color: white;\n        border: 1px solid;\n        font-weight: 500; }\n  .box-video .bg-img-item-tranding .logo-video {\n      position: absolute;\n      right: 10px;\n      top: 10px; }\n  .box-video .bg-img-item-tranding:hover .hover-content-box-video {\n      -webkit-transform: scale(1);\n              transform: scale(1); }\n  .box-video .img-full-width {\n    height: 380px; }\n  .box-video .second-title {\n    padding: 10px;\n    min-height: 80px;\n    font-size: 12px; }\n  .box-video .second-title-full {\n    min-height: unset;\n    padding: 20px 10px;\n    font-size: 12px; }\n  .box-video .title-box-item {\n    background: white;\n    display: flex;\n    align-items: center;\n    padding: 10px;\n    font-size: 13px;\n    transition: all .3s;\n    color: black;\n    border-bottom: 1px solid #bdbdbd;\n    padding-bottom: 6px; }\n  .box-video .title-box-item .icon-title-box {\n      margin-right: 10px;\n      width: 20px; }\n  .border-none {\n  border: none !important; }\n  .day-text {\n  min-height: unset;\n  padding: 10px 10px;\n  font-size: 12px;\n  padding-top: 0;\n  color: #a7a9ac; }\n"

/***/ }),

/***/ "./src/app/shared/card-trending/card-trending.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/shared/card-trending/card-trending.component.ts ***!
  \*****************************************************************/
/*! exports provided: CardTrendingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardTrendingComponent", function() { return CardTrendingComponent; });
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

var CardTrendingComponent = /** @class */ (function () {
    function CardTrendingComponent() {
    }
    CardTrendingComponent.prototype.ngOnInit = function () {
    };
    CardTrendingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-card-trending',
            template: __webpack_require__(/*! ./card-trending.component.html */ "./src/app/shared/card-trending/card-trending.component.html"),
            styles: [__webpack_require__(/*! ./card-trending.component.scss */ "./src/app/shared/card-trending/card-trending.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CardTrendingComponent);
    return CardTrendingComponent;
}());



/***/ }),

/***/ "./src/app/shared/card-video/card-video.component.html":
/*!*************************************************************!*\
  !*** ./src/app/shared/card-video/card-video.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"box box-video\">\n    <div style=\"background-image: url(https://content.jdmagicbox.com/comp/mumbai/k8/pwfl1503923521f4j2k8/catalogue/spacifii-powai-mumbai-interior-designers-e1dy3.jpg?interpolation=lanczos-none&output-format=jpg&resize=1024:370&crop=1024:370px;*,*)\"\n        class=\"bg-img-item-tranding\">\n        <div class=\"hover-content-box-video\">\n            <div class=\"box-video-hoder-inside\">\n                Watch Video\n            </div>\n        </div>\n        <div class=\"logo-video\">\n            <img src=\"assets/HOME-PAGE-ICONS&GRAPHICS/s-symbol-white.png\" alt=\"\">\n        </div>\n    </div>\n    <div class=\"title-box-item\">\n        <span class=\"icon-title-box\">\n            <img src=\"assets/HOME-PAGE-ICONS&GRAPHICS/video.png\" alt=\"\">\n        </span>\n        Customer Video\n    </div>\n    <div class=\"second-title\">\n        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/shared/card-video/card-video.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/shared/card-video/card-video.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".box-tranding {\n  cursor: pointer;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.45);\n  position: relative;\n  transition: all 0.5s;\n  margin-bottom: 10px; }\n  .box-tranding .bg-img-item-tranding {\n    background-repeat: no-repeat;\n    background-position: center;\n    background-size: auto 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 100%;\n    height: 280px; }\n  .box-tranding .bg-img-item-tranding .hover-content-box {\n      -webkit-transform: scale(0);\n              transform: scale(0);\n      transition: all .3s;\n      width: 80%;\n      background: rgba(0, 0, 0, 0.4);\n      padding: 20px;\n      border-radius: 2px;\n      color: white;\n      text-align: center;\n      font-size: 40px; }\n  @media screen and (max-width: 991px) {\n        .box-tranding .bg-img-item-tranding .hover-content-box {\n          font-size: 20px; } }\n  .box-tranding .title-box-item {\n    background: white;\n    display: flex;\n    align-items: center;\n    padding: 10px;\n    font-size: 13px;\n    transition: all .3s;\n    color: black; }\n  .box-tranding .title-box-item .icon-title-box {\n      margin-right: 10px;\n      width: 20px; }\n  .box-tranding:hover .bg-img-item-tranding .hover-content-box {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    transition: all .3s; }\n  .box-tranding:hover .title-box-item {\n    opacity: .5;\n    transition: all .3s; }\n  .container-box-slider, .container-box-slider-video {\n  display: flex;\n  align-items: center; }\n  .container-box-slider .caret-style, .container-box-slider-video .caret-style {\n    opacity: 0;\n    font-size: 60px;\n    color: #ababab;\n    cursor: pointer;\n    transition: all .3s; }\n  .container-box-slider .caret-style:hover, .container-box-slider-video .caret-style:hover {\n      color: #868686; }\n  .container-box-slider:hover .caret-style, .container-box-slider-video:hover .caret-style {\n    opacity: 1; }\n  .m-b-60 {\n  margin-bottom: 60px; }\n  .custom-container {\n  padding: 0 30px; }\n  @media (max-width: 767px) {\n  .custom-container {\n    padding: 0 0px;\n    width: 100%; } }\n  .text-box {\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.45);\n  background-color: white;\n  position: relative;\n  transition: all 0.5s;\n  padding: 25px !important; }\n  .text-box .title-text-box {\n    font-size: 20px;\n    color: black;\n    margin-bottom: 20px; }\n  .text-box .body-text-box {\n    color: #454545;\n    line-height: 27px; }\n  .container-width {\n  max-width: calc( 100% - 100px); }\n  @media screen and (max-width: 599px) {\n    .container-width {\n      max-width: calc( 100% - 50px); } }\n  .box-video {\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.45);\n  background-color: white;\n  position: relative;\n  transition: all 0.5s;\n  margin-bottom: 10px; }\n  .box-video .bg-img-item-tranding {\n    position: relative;\n    background-repeat: no-repeat;\n    background-position: center;\n    background-size: auto 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 100%;\n    height: 280px;\n    cursor: pointer; }\n  .box-video .bg-img-item-tranding .hover-content-box-video {\n      -webkit-transform: scale(0);\n              transform: scale(0);\n      transition: all .3s;\n      width: 100%;\n      height: 100%;\n      background: rgba(0, 0, 0, 0.4);\n      color: white;\n      text-align: center;\n      font-size: 16px;\n      display: flex;\n      align-items: center;\n      justify-content: center; }\n  .box-video .bg-img-item-tranding .hover-content-box-video .box-video-hoder-inside {\n        padding: 10px 30px;\n        color: white;\n        border: 1px solid;\n        font-weight: 500; }\n  .box-video .bg-img-item-tranding .logo-video {\n      position: absolute;\n      right: 10px;\n      top: 10px; }\n  .box-video .bg-img-item-tranding:hover .hover-content-box-video {\n      -webkit-transform: scale(1);\n              transform: scale(1); }\n  .box-video .img-full-width {\n    height: 380px; }\n  .box-video .second-title {\n    padding: 10px;\n    min-height: 80px;\n    font-size: 12px; }\n  .box-video .second-title-full {\n    min-height: unset;\n    padding: 20px 10px;\n    font-size: 12px; }\n  .box-video .title-box-item {\n    background: white;\n    display: flex;\n    align-items: center;\n    padding: 10px;\n    font-size: 13px;\n    transition: all .3s;\n    color: black;\n    border-bottom: 1px solid #bdbdbd;\n    padding-bottom: 6px; }\n  .box-video .title-box-item .icon-title-box {\n      margin-right: 10px;\n      width: 20px; }\n  .border-none {\n  border: none !important; }\n  .day-text {\n  min-height: unset;\n  padding: 10px 10px;\n  font-size: 12px;\n  padding-top: 0;\n  color: #a7a9ac; }\n"

/***/ }),

/***/ "./src/app/shared/card-video/card-video.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/card-video/card-video.component.ts ***!
  \***********************************************************/
/*! exports provided: CardVideoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardVideoComponent", function() { return CardVideoComponent; });
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

var CardVideoComponent = /** @class */ (function () {
    function CardVideoComponent() {
    }
    CardVideoComponent.prototype.ngOnInit = function () {
    };
    CardVideoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-card-video',
            template: __webpack_require__(/*! ./card-video.component.html */ "./src/app/shared/card-video/card-video.component.html"),
            styles: [__webpack_require__(/*! ./card-video.component.scss */ "./src/app/shared/card-video/card-video.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CardVideoComponent);
    return CardVideoComponent;
}());



/***/ }),

/***/ "./src/app/shared/header/header.component.html":
/*!*****************************************************!*\
  !*** ./src/app/shared/header/header.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar-fixed\">\n\n  <div class=\"container\">\n\n    <!-- ==========  Top navigation ========== -->\n\n    <!-- <div class=\"navigation navigation-top clearfix\">\n              <ul>\n                  <li><a href=\"#\"><i class=\"fa fa-facebook\"></i></a></li>\n                  <li><a href=\"#\"><i class=\"fa fa-twitter\"></i></a></li>\n                  <li><a href=\"#\"><i class=\"fa fa-youtube\"></i></a></li>\n                  <li><a href=\"javascript:void(0);\" class=\"open-login\"><i class=\"icon icon-user\"></i></a></li>\n                  <li><a href=\"javascript:void(0);\" class=\"open-search\"><i class=\"icon icon-magnifier\"></i></a></li>\n                  <li><a href=\"javascript:void(0);\" class=\"open-cart\"><i class=\"icon icon-cart\"></i> <span>3</span></a></li>\n              </ul>\n          </div> -->\n\n    <!-- ==========  Main navigation ========== -->\n\n    <div class=\"navigation navigation-main\">\n      <a href=\"#\" class=\"open-menu menu-sm\"><i class=\"icon icon-menu\"></i></a>\n      <a href=\"index.html\" class=\"logo\" [ngClass]=\"{'logo-pos': !showHeaderRight}\">\n        <img class=\"hide-sm\" src=\"assets/HOME-PAGE-ICONS&GRAPHICS/Logo white@1.5x.png\" alt=\"\" />\n        <img class=\"show-sm logo-black\" src=\"assets/HOME-PAGE-ICONS&GRAPHICS/Logo-black.png\" alt=\"\">\n      </a>\n      <div *ngIf=\"showHeaderRight\" class=\"header-right-sm show-sm\">\n        <!-- <div class=\"img-wram-header\">\n          <img src=\"assets/HOME-PAGE-ICONS&GRAPHICS/photo.png\" alt=\"\">\n        </div>\n        <div class=\"img-wram-header\">\n          <img src=\"assets/HOME-PAGE-ICONS&GRAPHICS/copy.png\" alt=\"\">\n        </div> -->\n        <button class=\"btn-login\">\n            Login / Signup\n        </button>\n      </div>\n      <!-- <a href=\"#\" class=\"open-login\"><i class=\"icon icon-user\"></i></a>\n      <a href=\"#\" class=\"open-search\"><i class=\"icon icon-magnifier\"></i></a>\n      <a href=\"#\" class=\"open-cart\"><i class=\"icon icon-cart\"></i> <span>3</span></a> -->\n      <div class=\"floating-menu show-sm\">\n          <div class=\"user-wrap-sm\">\n                <img width=\"25px\" src=\"assets/HOME-PAGE-ICONS&GRAPHICS/account@1.5x.png\" alt=\"\">\n                Sign in / Register\n                <i class=\"fa fa-caret-right\"></i>\n          </div>\n          <div class=\"my-wrap\">\n            <div>\n                <img width=\"25px\" src=\"assets/HOME-PAGE-ICONS&GRAPHICS/photo-white.png\" alt=\"\">\n                My Uploads\n            </div>\n            <div>\n                <img width=\"25px\" src=\"assets/HOME-PAGE-ICONS&GRAPHICS/copy-white.png\" alt=\"\">\n                My Cards\n            </div>\n          </div>\n          <div class=\"menu-item-sm\">\n              HOW IT WORKS\n          </div>\n          <div class=\"menu-item-sm\">\n              FAQs\n          </div>\n          <div class=\"menu-item-sm\">\n              BLOG\n          </div>\n          <div class=\"menu-item-sm\">\n              CONTACT\n          </div>\n          <div class=\"menu-item-sm\">\n              HELP & SUPPORT\n          </div>\n          <div class=\"menu-item-sm\">\n              MENU OPTION# \n          </div>\n      </div>\n      <div class=\"floating-menu hide-sm\">\n        <!--mobile toggle menu trigger-->\n        <div class=\"close-menu-wrapper\">\n          <span class=\"close-menu\"><i class=\"icon icon-cross\"></i></span>\n        </div>\n        <ul>\n          <li>\n            <a href=\"index.html\">HOW IT WORKS<span class=\"open-dropdown\"></span></a>\n            <!-- <div class=\"navbar-dropdown\">\n                              <div class=\"navbar-box\">\n                                  <div class=\"box-1\">\n                                      <div class=\"box\">\n                                          <div class=\"h2\">Find your inspiration</div>\n                                          <div class=\"clearfix\">\n                                              <p>Homes that differ in terms of style, concept and architectural solutions have been furnished by Furniture Factory. These spaces tell of an international lifestyle that expresses modernity, research and a creative spirit.</p>\n                                              <a class=\"btn btn-clean btn-big\" href=\"products-grid.html\">Shop now</a>\n                                          </div>\n                                      </div>\n                                  </div>\n                                  <div class=\"box-2\">\n                                      <div class=\"box clearfix\">\n                                          <div class=\"row\">\n                                              <div class=\"col-md-4\">\n                                                  <ul>\n                                                      <li class=\"label\">Multipage</li>\n                                                      <li><a href=\"index-xmas.html\">Home - Xmas <span class=\"label label-warning\">New</span></a></li>\n                                                      <li><a href=\"index.html\">Home - Slider</a></li>\n                                                      <li><a href=\"index-2.html\">Home - Tabsy</a></li>\n                                                      <li><a href=\"index-3.html\">Home - Slider full screen</a></li>\n                                                      <li><a href=\"index-4.html\">Home - Info icons</a></li>\n                                                  </ul>\n                                                  <ul>\n                                                      <li class=\"label\">Singlepage</li>\n                                                      <li><a href=\"index-5.html\">Onepage</a></li>\n                                                      <li><a href=\"index-6.html\">Onepage - Filters <span class=\"label label-warning\">Isotope</span></a></li>\n                                                  </ul>\n                                              </div>\n                                              <div class=\"col-md-4\">\n                                                  <ul>\n                                                      <li class=\"label\">Isotope</li>\n                                                      <li><a href=\"products-grid-isotope.html\">Products filters <span class=\"label label-warning\">New</span></a></li>\n                                                      <li><a href=\"products-topbar-isotope.html\">Products topbar <span class=\"label label-warning\">New</span></a></li>\n                                                  </ul>\n                                                  <ul>\n                                                      <li class=\"label\">Product page</li>\n                                                      <li><a href=\"products-grid.html\">Products grid</a></li>\n                                                      <li><a href=\"products-list.html\">Products list</a></li>\n                                                      <li><a href=\"category.html\">Products intro</a></li>\n                                                      <li><a href=\"products-topbar.html\">Products topbar</a></li>\n                                                      <li><a href=\"product.html\">Product overview</a></li>\n                                                  </ul>\n                                              </div>\n                                              <div class=\"col-md-4\">\n                                                  <ul>\n                                                      <li class=\"label\">Blog</li>\n                                                      <li><a href=\"blog-grid.html\">Blog grid</a></li>\n                                                      <li><a href=\"blog-list.html\">Blog list</a></li>\n                                                      <li><a href=\"blog-grid-fullpage.html\">Blog fullpage</a></li>\n                                                      <li><a href=\"ideas.html\">Blog ideas</a></li>\n                                                      <li><a href=\"article.html\">Article</a></li>\n                                                  </ul>\n                                              </div>\n                                          </div>\n                                      </div>\n                                  </div>\n                              </div>\n                          </div> -->\n          </li>\n          <li>\n            <a href=\"category.html\">ESTIMATE<span class=\"open-dropdown\"><i class=\"fa fa-caret-down\"></i></span></a>\n            <div class=\"navbar-dropdown\">\n              <div class=\"navbar-box\">\n                <div class=\"box-1\">\n                  <div class=\"left-content-wrap\">\n                    <div class=\"caption-left text-center\">\n                      Recently Spacified\n                    </div>\n                    <div class=\"img-wrap\">\n                      <img src=\"http://www.hanak-nabytek.cz/wp-content/uploads/2015/09/hanak_nabytek_olomouc_bily_interier_premium.jpg\" alt=\"\">\n                    </div>\n                    <div class=\"text-wrap\">\n                      “ Customer Speak Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet\n                      dolore magna aliquam erat vol\"\n                    </div>\n                    <div class=\"img-user-wrap\">\n                      <img src=\"https://vignette3.wikia.nocookie.net/strangerthings8338/images/e/ee/JaneDoeP.jpg/revision/latest?cb=20160717214233\"\n                        alt=\"\">\n                      <div>\n                        <div>\n                          Customer Name\n                        </div>\n                        <div>\n                          Location\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"box-2 custome-box-2\">\n                  <div class=\"clearfix categories\">\n                    <div class=\"row m-0\">\n                      <div class=\"col-md-6 p-0 border-box\">\n                        <div class=\"estimate-item\">\n                          <div class=\"hover-box\">\n                            <div class=\"project-value\">\n                              1 Pject\n                            </div>\n                            <div class=\"complete\">\n                              <div>\n                                50% Complete\n                              </div>\n                              <div class=\"custome-progress-bar\">\n                                <div style=\"width: 50%\" class=\"progress-value\"></div>\n                              </div>\n                            </div>\n                          </div>\n                          <div class=\"img-wrap-box\">\n                            <img src=\"assets/Menu-Icons/bedroom_white.png\" alt=\"\">\n                          </div>\n                          <div>\n                            BEDROOM\n                          </div>\n                        </div>\n                      </div>\n                      <div class=\"col-md-6 p-0 border-box\">\n                        <div class=\"estimate-item\">\n                          <div class=\"hover-box\">\n                            <div class=\"project-value\">\n                              1 Pject\n                            </div>\n                            <div class=\"complete\">\n                              <div>\n                                50% Complete\n                              </div>\n                              <div class=\"custome-progress-bar\">\n                                <div style=\"width: 50%\" class=\"progress-value\"></div>\n                              </div>\n                            </div>\n                          </div>\n                          <div class=\"img-wrap-box\">\n                            <img src=\"assets/Menu-Icons/Bathroom_white.png\" alt=\"\">\n                          </div>\n                          <div>\n                            BATHROOM\n                          </div>\n                        </div>\n                      </div>\n                      <div class=\"col-md-6 p-0 border-box\">\n                        <div class=\"estimate-item\">\n                          <div class=\"hover-box\">\n                            <div class=\"project-value\">\n                              1 Pject\n                            </div>\n                            <div class=\"complete\">\n                              <div>\n                                50% Complete\n                              </div>\n                              <div class=\"custome-progress-bar\">\n                                <div style=\"width: 50%\" class=\"progress-value\"></div>\n                              </div>\n                            </div>\n                          </div>\n                          <div class=\"img-wrap-box\">\n                            <img src=\"assets/Menu-Icons/Livin_white.png\" alt=\"\">\n                          </div>\n\n                          <div>\n                            LIVING\n                          </div>\n                        </div>\n                      </div>\n                      <div class=\"col-md-6 p-0 border-box\">\n                        <div class=\"estimate-item\">\n                          <div class=\"hover-box\">\n                            <div class=\"project-value\">\n                              1 Pject\n                            </div>\n                            <div class=\"complete\">\n                              <div>\n                                50% Complete\n                              </div>\n                              <div class=\"custome-progress-bar\">\n                                <div style=\"width: 50%\" class=\"progress-value\"></div>\n                              </div>\n                            </div>\n                          </div>\n                          <div class=\"img-wrap-box\">\n                            <img src=\"assets/Menu-Icons/Kitchen_White.png\" alt=\"\">\n                          </div>\n\n                          <div>\n                            KITCHEN\n                          </div>\n                        </div>\n                      </div>\n                      <div class=\"col-md-6 p-0 border-box\">\n                        <div class=\"estimate-item\">\n                          <div class=\"hover-box\">\n                            <div class=\"project-value\">\n                              1 Pject\n                            </div>\n                            <div class=\"complete\">\n                              <div>\n                                50% Complete\n                              </div>\n                              <div class=\"custome-progress-bar\">\n                                <div style=\"width: 50%\" class=\"progress-value\"></div>\n                              </div>\n                            </div>\n                          </div>\n                          <div class=\"img-wrap-box\">\n                            <img src=\"assets/Menu-Icons/Dining_White.png\" alt=\"\">\n                          </div>\n\n                          <div>\n                            DINING\n                          </div>\n                        </div>\n                      </div>\n                      <div class=\"col-md-6 p-0 border-box\">\n                        <div class=\"estimate-item\">\n                          <div class=\"hover-box\">\n                            <div class=\"project-value\">\n                              1 Pject\n                            </div>\n                            <div class=\"complete\">\n                              <div>\n                                50% Complete\n                              </div>\n                              <div class=\"custome-progress-bar\">\n                                <div style=\"width: 50%\" class=\"progress-value\"></div>\n                              </div>\n                            </div>\n                          </div>\n                          <div class=\"img-wrap-box\">\n                            <img src=\"assets/Menu-Icons/Study_White.png\" alt=\"\">\n                          </div>\n\n                          <div>\n                            STUDY\n                          </div>\n                        </div>\n                      </div>\n                      <div class=\"col-md-6 p-0 border-box\">\n                        <div class=\"estimate-item\">\n                          <div class=\"hover-box\">\n                            <div class=\"project-value\">\n                              1 Pject\n                            </div>\n                            <div class=\"complete\">\n                              <div>\n                                50% Complete\n                              </div>\n                              <div class=\"custome-progress-bar\">\n                                <div style=\"width: 50%\" class=\"progress-value\"></div>\n                              </div>\n                            </div>\n                          </div>\n                          <div class=\"img-wrap-box\">\n                            <img src=\"assets/Menu-Icons/Terrace_White.png\" alt=\"\">\n                          </div>\n\n                          <div>\n                            TERRACE\n                          </div>\n                        </div>\n                      </div>\n                      <div class=\"col-md-6 p-0 border-box\">\n                        <div class=\"estimate-item\">\n                          <div class=\"hover-box\">\n                            <div class=\"project-value\">\n                              1 Pject\n                            </div>\n                            <div class=\"complete\">\n                              <div>\n                                50% Complete\n                              </div>\n                              <div class=\"custome-progress-bar\">\n                                <div style=\"width: 50%\" class=\"progress-value\"></div>\n                              </div>\n                            </div>\n                          </div>\n                          <div class=\"img-wrap-box\">\n                            <img src=\"assets/Menu-Icons/bedroom_white.png\" alt=\"\">\n                          </div>\n                          <div>\n                            ALL SPACES\n                          </div>\n                          <div class=\"comment-box\">\n                            Looking for a complete Home Makeover?\n                            <div>\n                              Select this option!\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </li>\n          <li>\n            <a href=\"#\">EXPLORE<span class=\"open-dropdown\"><i class=\"fa fa-caret-down\"></i></span></a>\n            <div class=\"navbar-dropdown navbar-dropdown-single\">\n              <div class=\"navbar-box\">\n                <div class=\"box-2\">\n                  <div class=\"box clearfix\">\n                    <ul class=\"list\">\n                      <li class=\"list-item\">\n                        <div class=\"lable-row\">\n                          <i class=\"fa fa-home lable-icon\"></i>\n                          SPACES\n                          <i class=\"fa fa-angle-right\"></i>\n                        </div>\n                        <ul class=\"sub-list\">\n                          <li>Bedroom </li>\n                          <li>Bathroom </li>\n                          <li>Living </li>\n                          <li>Kitchen </li>\n                          <li>Dining </li>\n                          <li>Terrace</li>\n                          <li>Study</li>\n                        </ul>\n                      </li>\n                      <li class=\"list-item\">\n                        <div class=\"lable-row\">\n                          <i class=\"fa fa-paint-brush lable-icon\"></i>\n                          STYLES\n                          <i class=\"fa fa-angle-right\"></i>\n                        </div>\n                        <ul class=\"sub-list\">\n                          <li>Bedroom </li>\n                          <li>Bathroom </li>\n                          <li>Living </li>\n                          <li>Kitchen </li>\n                          <li>Dining </li>\n                          <li>Terrace</li>\n                          <li>Study</li>\n                        </ul>\n                      </li>\n                      <li class=\"list-item\">\n                        <div class=\"lable-row\">\n                          <i class=\"fa fa-map-marker lable-icon\"></i>\n                          AREAS\n                          <i class=\"fa fa-angle-right\"></i>\n                        </div>\n                        <ul class=\"sub-list\">\n                          <li>Bedroom </li>\n                          <li>Bathroom </li>\n                          <li>Living </li>\n                          <li>Kitchen </li>\n                          <li>Dining </li>\n                          <li>Terrace</li>\n                          <li>Study</li>\n                        </ul>\n                      </li>\n                      <li class=\"list-item\">\n                        <div class=\"lable-row\">\n                          <i class=\"fa fa-bath lable-icon\"></i>\n                          OBJECTS\n                          <i class=\"fa fa-angle-right\"></i>\n                        </div>\n                        <ul class=\"sub-list\">\n                          <li>Bedroom </li>\n                          <li>Bathroom </li>\n                          <li>Living </li>\n                          <li>Kitchen </li>\n                          <li>Dining </li>\n                          <li>Terrace</li>\n                          <li>Study</li>\n                        </ul>\n                      </li>\n                    </ul>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </li>\n          <li>\n            <a href=\"#\">FAQs</a>\n            <!-- <div class=\"navbar-dropdown\">\n                              <div class=\"navbar-box\">\n                                  <div class=\"box-2\">\n                                      <div class=\"box clearfix\">\n                                          <div class=\"row\">\n                                              <div class=\"clearfix\">\n                                                  <div class=\"col-md-3\">\n                                                      <ul>\n                                                          <li class=\"label\">Seating</li>\n                                                          <li><a href=\"javascript:void(0);\">Benches</a></li>\n                                                          <li><a href=\"javascript:void(0);\">Submenu <span class=\"label label-warning\">New</span></a></li>\n                                                          <li><a href=\"javascript:void(0);\">Chaises</a></li>\n                                                          <li><a href=\"javascript:void(0);\">Recliners</a></li>\n                                                      </ul>\n                                                  </div>\n                                                  <div class=\"col-md-3\">\n                                                      <ul>\n                                                          <li class=\"label\">Storage</li>\n                                                          <li><a href=\"javascript:void(0);\">Bockcases</a></li>\n                                                          <li><a href=\"javascript:void(0);\">Closets</a></li>\n                                                          <li><a href=\"javascript:void(0);\">Wardrobes</a></li>\n                                                          <li><a href=\"javascript:void(0);\">Dressers <span class=\"label label-success\">Trending</span></a></li>\n                                                          <li><a href=\"javascript:void(0);\">Sideboards </a></li>\n                                                      </ul>\n                                                  </div>\n                                                  <div class=\"col-md-3\">\n                                                      <ul>\n                                                          <li class=\"label\">Tables</li>\n                                                          <li><a href=\"javascript:void(0);\">Consoles</a></li>\n                                                          <li><a href=\"javascript:void(0);\">Desks</a></li>\n                                                          <li><a href=\"javascript:void(0);\">Dining tables</a></li>\n                                                          <li><a href=\"javascript:void(0);\">Occasional tables</a></li>\n                                                      </ul>\n                                                  </div>\n                                                  <div class=\"col-md-3\">\n                                                      <ul>\n                                                          <li class=\"label\">Chairs</li>\n                                                          <li><a href=\"javascript:void(0);\">Dining Chairs</a></li>\n                                                          <li><a href=\"javascript:void(0);\">Office Chairs</a></li>\n                                                          <li><a href=\"javascript:void(0);\">Lounge Chairs <span class=\"label label-warning\">Offer</span></a></li>\n                                                          <li><a href=\"javascript:void(0);\">Stools</a></li>\n\n                                                      </ul>\n                                                  </div>\n                                              </div>\n                                              <div class=\"clearfix\">\n                                                  <div class=\"col-md-3\">\n                                                      <ul>\n                                                          <li class=\"label\">Kitchen</li>\n                                                          <li><a href=\"javascript:void(0);\">Kitchen types</a></li>\n                                                          <li><a href=\"javascript:void(0);\">Kitchen elements <span class=\"label label-info\">50%</span></a></li>\n                                                          <li><a href=\"javascript:void(0);\">Bars</a></li>\n                                                          <li><a href=\"javascript:void(0);\">Wall decoration</a></li>\n                                                      </ul>\n                                                  </div>\n                                                  <div class=\"col-md-3\">\n                                                      <ul>\n                                                          <li class=\"label\">Accessories</li>\n                                                          <li><a href=\"javascript:void(0);\">Coat Racks</a></li>\n                                                          <li><a href=\"javascript:void(0);\">Lazy bags <span class=\"label label-success\">Info</span></a></li>\n                                                      </ul>\n                                                  </div>\n                                                  <div class=\"col-md-3\">\n                                                      <ul>\n                                                          <li class=\"label\">Beds</li>\n                                                          <li><a href=\"javascript:void(0);\">Beds</a></li>\n                                                          <li><a href=\"javascript:void(0);\">Sofabeds</a></li>\n                                                      </ul>\n                                                  </div>\n                                                  <div class=\"col-md-3\">\n                                                      <ul>\n                                                          <li class=\"label\">Entertainment</li>\n                                                          <li><a href=\"javascript:void(0);\">Wall units <span class=\"label label-warning\">Popular</span></a></li>\n                                                          <li><a href=\"javascript:void(0);\">Media sets</a></li>\n                                                          <li><a href=\"javascript:void(0);\">Decoration</a></li>\n                                                      </ul>\n                                                  </div>\n                                              </div>\n                                          </div>\n                                      </div>\n                                  </div>\n                              </div>\n                          </div> -->\n          </li>\n          <li>\n            <a href=\"#\">\n              Blog\n            </a>\n          </li>\n          <li><a class=\"login-link\" href=\"shortcodes.html\"><span><img width=\"25px\" src=\"assets/HOME-PAGE-ICONS&GRAPHICS/account@1.5x.png\"\n                  alt=\"\"></span> Sign in / Register</a></li>\n        </ul>\n      </div>\n    </div>\n\n    <!-- ==========  Search wrapper ========== -->\n\n    <div class=\"search-wrapper\">\n      <input class=\"form-control\" placeholder=\"Search...\" />\n      <button class=\"btn btn-main\">Go!</button>\n    </div>\n\n    <!-- ==========  Login wrapper ========== -->\n\n    <div class=\"login-wrapper\">\n      <form>\n        <div class=\"form-group\">\n          <input type=\"email\" class=\"form-control\" id=\"exampleInputEmail1\" placeholder=\"Email\">\n        </div>\n        <div class=\"form-group\">\n          <input type=\"password\" class=\"form-control\" id=\"exampleInputPassword1\" placeholder=\"Password\">\n        </div>\n        <div class=\"form-group\">\n          <a href=\"#forgotpassword\" class=\"open-popup\">Forgot password?</a>\n          <a href=\"#createaccount\" class=\"open-popup\">Don't have an account?</a>\n        </div>\n        <button type=\"submit\" class=\"btn btn-block btn-main\">Submit</button>\n      </form>\n    </div>\n\n    <!-- ==========  Cart wrapper ========== -->\n\n    <div class=\"cart-wrapper\">\n      <div class=\"checkout\">\n        <div class=\"clearfix\">\n\n          <!--cart item-->\n\n          <div class=\"row\">\n\n            <div class=\"cart-block cart-block-item clearfix\">\n              <div class=\"image\">\n                <a href=\"product.html\"><img src=\"assets/images/product-1.png\" alt=\"\" /></a>\n              </div>\n              <div class=\"title\">\n                <div><a href=\"product.html\">Green corner</a></div>\n                <small>Green corner</small>\n              </div>\n              <div class=\"quantity\">\n                <input type=\"number\" value=\"2\" class=\"form-control form-quantity\" />\n              </div>\n              <div class=\"price\">\n                <span class=\"final\">$ 1.998</span>\n                <span class=\"discount\">$ 2.666</span>\n              </div>\n              <!--delete-this-item-->\n              <span class=\"icon icon-cross icon-delete\"></span>\n            </div>\n\n            <!--cart item-->\n\n            <div class=\"cart-block cart-block-item clearfix\">\n              <div class=\"image\">\n                <a href=\"product.html\"><img src=\"assets/images/product-2.png\" alt=\"\" /></a>\n              </div>\n              <div class=\"title\">\n                <div><a href=\"product.html\">Green corner</a></div>\n                <small>Green corner</small>\n              </div>\n              <div class=\"quantity\">\n                <input type=\"number\" value=\"2\" class=\"form-control form-quantity\" />\n              </div>\n              <div class=\"price\">\n                <span class=\"final\">$ 1.998</span>\n                <span class=\"discount\">$ 2.666</span>\n              </div>\n              <!--delete-this-item-->\n              <span class=\"icon icon-cross icon-delete\"></span>\n            </div>\n\n            <!--cart item-->\n\n            <div class=\"cart-block cart-block-item clearfix\">\n              <div class=\"image\">\n                <a href=\"product.html\"><img src=\"assets/images/product-3.png\" alt=\"\" /></a>\n              </div>\n              <div class=\"title\">\n                <div><a href=\"product.html\">Green corner</a></div>\n                <small>Green corner</small>\n              </div>\n              <div class=\"quantity\">\n                <input type=\"number\" value=\"2\" class=\"form-control form-quantity\" />\n              </div>\n              <div class=\"price\">\n                <span class=\"final\">$ 1.998</span>\n                <span class=\"discount\">$ 2.666</span>\n              </div>\n              <!--delete-this-item-->\n              <span class=\"icon icon-cross icon-delete\"></span>\n            </div>\n\n            <!--cart item-->\n\n            <div class=\"cart-block cart-block-item clearfix\">\n              <div class=\"image\">\n                <a href=\"product.html\"><img src=\"assets/images/product-4.png\" alt=\"\" /></a>\n              </div>\n              <div class=\"title\">\n                <div><a href=\"product.html\">Green corner</a></div>\n                <small>Green corner</small>\n              </div>\n              <div class=\"quantity\">\n                <input type=\"number\" value=\"2\" class=\"form-control form-quantity\" />\n              </div>\n              <div class=\"price\">\n                <span class=\"final\">$ 1.998</span>\n                <span class=\"discount\">$ 2.666</span>\n              </div>\n              <!--delete-this-item-->\n              <span class=\"icon icon-cross icon-delete\"></span>\n            </div>\n          </div>\n\n          <hr />\n\n          <!--cart prices -->\n\n          <div class=\"clearfix\">\n            <div class=\"cart-block cart-block-footer clearfix\">\n              <div>\n                <strong>Discount 15%</strong>\n              </div>\n              <div>\n                <span>$ 159,00</span>\n              </div>\n            </div>\n\n            <div class=\"cart-block cart-block-footer clearfix\">\n              <div>\n                <strong>Shipping</strong>\n              </div>\n              <div>\n                <span>$ 30,00</span>\n              </div>\n            </div>\n\n            <div class=\"cart-block cart-block-footer clearfix\">\n              <div>\n                <strong>VAT</strong>\n              </div>\n              <div>\n                <span>$ 59,00</span>\n              </div>\n            </div>\n          </div>\n\n          <hr />\n\n          <!--cart final price -->\n\n          <div class=\"clearfix\">\n            <div class=\"cart-block cart-block-footer clearfix\">\n              <div>\n                <strong>Total</strong>\n              </div>\n              <div>\n                <div class=\"h4 title\">$ 1259,00</div>\n              </div>\n            </div>\n          </div>\n\n\n          <!--cart navigation -->\n\n          <div class=\"cart-block-buttons clearfix\">\n            <div class=\"row\">\n              <div class=\"col-xs-6\">\n                <a href=\"products-grid.html\" class=\"btn btn-clean-dark\">Continue shopping</a>\n              </div>\n              <div class=\"col-xs-6 text-right\">\n                <a href=\"checkout-1.html\" class=\"btn btn-main\"><span class=\"icon icon-cart\"></span> Checkout</a>\n              </div>\n            </div>\n          </div>\n\n        </div>\n      </div>\n    </div>\n  </div>\n</nav>"

/***/ }),

/***/ "./src/app/shared/header/header.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/shared/header/header.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".slider-wrap {\n  margin-top: 0 !important; }\n\n.head-container-wrap {\n  background-image: url(https://content.jdmagicbox.com/comp/mumbai/k8/pwfl1503923521f4j2k8/catalogue/spacifii-powai-mumbai-interior-designers-e1dy3.jpg?interpolation=lanczos-none&output-format=jpg&resize=1024:370&crop=1024:370px;*,*);\n  padding-top: 60px;\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n  background-position: center;\n  background-size: 100%;\n  min-height: 100vh; }\n\n.slide-item {\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: auto 100%; }\n\n.content-box {\n  max-width: 400px;\n  margin: auto; }\n\n.content-box .title {\n    text-shadow: none; }\n\n.custom-btn {\n  margin-top: 40px;\n  border-radius: 10px;\n  padding: 10px;\n  background: #f57c00;\n  text-shadow: none;\n  text-transform: uppercase;\n  box-shadow: 0px 0px 16px #00000059; }\n\n.logo {\n  top: 2px; }\n\n.logo img {\n    max-width: 100px; }\n\nheader .title {\n  font-weight: normal; }\n\ndiv.navigation.navigation-main > div > ul > li > a {\n  font-family: 'Fjalla One', sans-serif;\n  font-size: 18px;\n  font-style: normal;\n  letter-Spacing: 0.04em;\n  font-weight: 400;\n  text-transform: capitalize; }\n\ndiv.navigation.navigation-main > div > ul > li:hover > a {\n  color: #d9802b; }\n\n.login-link span {\n  margin-right: 10px; }\n\n.list {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  background: rgba(62, 62, 62, 0.95);\n  position: relative;\n  border-bottom: 2px solid black;\n  margin-right: 1px; }\n\n.list .list-item {\n    padding: 15px 40px;\n    color: white;\n    cursor: pointer;\n    transition: all 0.3; }\n\n.list .list-item .lable-row {\n      display: flex;\n      align-items: center; }\n\n.list .list-item .lable-row .fa-angle-right {\n        font-size: 0px;\n        transition: all 0.3;\n        position: absolute;\n        right: 15px; }\n\n.list .list-item .sub-list {\n      max-width: 0;\n      transition: all .3s, visibility 0;\n      white-space: nowrap;\n      position: absolute;\n      left: calc(100% + 1px);\n      top: 0;\n      display: block;\n      visibility: hidden;\n      height: calc( 100% + 2px);\n      border-bottom: 2px solid black; }\n\n.list .list-item:hover {\n      background: #26a69a;\n      width: calc(100% + 1px); }\n\n.list .list-item:hover .sub-list {\n        max-width: 500px;\n        width: 180px;\n        visibility: unset;\n        transition: all .3s;\n        white-space: nowrap;\n        padding: 29px;\n        background: rgba(62, 62, 62, 0.95) !important; }\n\n.list .list-item:hover .sub-list li {\n          color: white;\n          transition: all .3s;\n          cursor: pointer; }\n\n.list .list-item:hover .sub-list li:hover {\n            color: #d9802b; }\n\n.list .list-item:hover .lable-row .fa-angle-right {\n        font-size: 20px; }\n\n.lable-icon {\n  font-size: 30px;\n  margin-right: 20px;\n  width: 30px; }\n\n.clearfix {\n  padding: 0 !important;\n  background: none; }\n\n.navbar-dropdown {\n  overflow: visible !important; }\n\n.navbar-box .box-2 {\n  background: none !important; }\n\n.estimate-item {\n  position: relative;\n  color: white;\n  height: 230px;\n  overflow: hidden;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-flow: column;\n  padding-top: 25px;\n  cursor: pointer;\n  font-family: 'Barlow', sans-serif;\n  font-weight: 500; }\n\n.estimate-item .hover-box {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    display: flex;\n    justify-content: space-between;\n    padding: 0px 30px;\n    -webkit-transform: translate(0px, -100px);\n            transform: translate(0px, -100px);\n    transition: all .3s; }\n\n.estimate-item:hover {\n    background: #26a69a; }\n\n.estimate-item:hover .hover-box {\n      -webkit-transform: translate(0px, 0px);\n              transform: translate(0px, 0px); }\n\n.estimate-item .img-wrap-box {\n    height: 65px; }\n\n.estimate-item .img-wrap-box img {\n      margin-bottom: 15px; }\n\n.custome-progress-bar {\n  height: 20px;\n  width: 100%;\n  margin-top: 4px;\n  background: #8cd0ca; }\n\n.custome-progress-bar .progress-value {\n    background: white;\n    height: 100%; }\n\n.border-box {\n  border: 1px solid #888888; }\n\n.border-box:hover {\n    border: 1px solid #ffffff; }\n\n.caption-left {\n  margin: 40px;\n  color: #dde0e9;\n  font-size: 20px;\n  Font-Family: \"Barlow\";\n  font-weight: 400; }\n\n.img-wrap {\n  margin-bottom: 40px;\n  padding: 0 20px; }\n\n.img-wrap img {\n    max-width: 525px;\n    height: 435px; }\n\n.text-wrap {\n  Font-Family: \"Barlow\";\n  Font-Size: 21px;\n  Color: #dcdfe8;\n  Font-Style: normal;\n  padding-left: 55px;\n  padding-right: 15px; }\n\n.img-user-wrap {\n  padding: 0 10px;\n  display: flex;\n  align-items: center;\n  justify-content: right;\n  FLOAT: RIGHT;\n  MARGIN-TOP: 25PX;\n  Font-Family: \"Barlow\";\n  FONT-SIZE: 18PX;\n  display: flex;\n  align-items: center; }\n\n.img-user-wrap img {\n    width: 94px;\n    height: 78px;\n    border-radius: 50%;\n    margin-right: 20px; }\n\n.comment-box {\n  text-align: center;\n  width: calc(100% - 30px);\n  font-size: 13px;\n  position: absolute;\n  bottom: 10px; }\n\n@media screen and (max-width: 991px) {\n  .navigation {\n    display: flex;\n    align-items: center; } }\n\n@media screen and (max-width: 991px) {\n  .navbar-fixed {\n    background: white; } }\n\n.logo-black {\n  width: 100px; }\n\n.menu-sm {\n  color: black !important;\n  border: none !important;\n  position: relative !important; }\n\n.menu-sm .icon {\n    font-size: 25px !important; }\n\n.header-right-sm {\n  display: flex;\n  align-items: center;\n  position: absolute;\n  right: 0; }\n\n.header-right-sm .img-wram-header {\n    margin-right: 20px;\n    cursor: pointer; }\n\n.header-right-sm .img-wram-header img {\n      width: auto;\n      height: 30px; }\n\n@media screen and (max-width: 991px) {\n  .logo-pos {\n    position: absolute;\n    left: 50%;\n    margin-left: -50px; } }\n\n.btn-login {\n  border-radius: 5px;\n  padding: 7px 10px;\n  background: #f57c00;\n  text-shadow: none;\n  border: none;\n  outline: none;\n  color: white !important;\n  margin-right: 20px; }\n\n@media screen and (max-width: 991px) {\n  .floating-menu {\n    background: #3d3d3d !important;\n    max-width: 320px;\n    left: 0 !important;\n    min-height: 100vh !important;\n    height: 100% !important; } }\n\n.user-wrap-sm {\n  display: flex;\n  align-items: center;\n  padding: 10px 20px;\n  padding-top: 30px;\n  border-bottom: 1px solid #919191;\n  width: calc(100% + 20px);\n  margin-left: -10px;\n  color: white; }\n\n.user-wrap-sm img {\n    margin-right: 20px; }\n\n.user-wrap-sm i {\n    margin-left: 20px; }\n\n.my-wrap {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px 20px;\n  border-bottom: 1px solid #919191;\n  width: calc(100% + 20px);\n  margin-left: -10px;\n  color: white;\n  margin-bottom: 20px; }\n\n.my-wrap div img {\n    margin-right: 10px; }\n\n.menu-item-sm {\n  padding: 20px;\n  padding-left: 40px;\n  font-family: 'Fjalla One', sans-serif;\n  color: white;\n  transition: all .3s;\n  cursor: pointer; }\n\n.menu-item-sm:hover {\n    color: #f57c00; }\n\n@media (min-width: 992px) {\n  nav .navigation-main .floating-menu > ul > li > a {\n    color: white;\n    padding: 24px 20px; } }\n\n@media (min-width: 1200px) {\n  .nav .navigation-main .floating-menu > ul > li > a {\n    padding: 20px 30px; } }\n"

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
        this.showHeaderRight = true;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/shared/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/shared/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/shared/product-slider/product-slider.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/shared/product-slider/product-slider.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"owl-icons\">\n\n    <!-- === icon item === -->\n\n    <a href=\"#\">\n        <figure class=\"slide-menu-item\">\n            <div class=\"img-slide-menu-wrap\">\n                <img class=\"img-slide-menu\" src=\"assets/Menu-Icons/Bathroom_white.png\" alt=\"\">\n            </div>\n            <figcaption>Bathroom</figcaption>\n            <div class=\"toogle-on-over-menu\">\n                <div class=\"toogle-on-over-menu-item\">\n                    <span class=\"togle-img-wrap\">\n                        <img width=\"20px\" src=\"assets/HOME-PAGE-ICONS&GRAPHICS/estimate_black.png\" alt=\"\">\n                    </span>\n                    EXSTIMATE\n                </div>\n                <div class=\"toogle-on-over-menu-item\">\n                    <span class=\"togle-img-wrap\">\n                        <img width=\"20px\" src=\"assets/HOME-PAGE-ICONS&GRAPHICS/explore_black.png\" alt=\"\">\n                    </span>\n                    EXPLORE\n                </div>\n            </div>\n        </figure>\n    </a>\n\n    <!-- === icon item === -->\n\n    <a href=\"#\">\n        <figure class=\"slide-menu-item\">\n            <div class=\"img-slide-menu-wrap\">\n                <img class=\"img-slide-menu\" src=\"assets/Menu-Icons/bedroom_white.png\" alt=\"\">\n            </div>\n            <figcaption>Bedroom</figcaption>\n            <div class=\"toogle-on-over-menu\">\n                <div class=\"toogle-on-over-menu-item\">\n                    <span class=\"togle-img-wrap\">\n                        <img width=\"20px\" src=\"assets/HOME-PAGE-ICONS&GRAPHICS/estimate_black.png\" alt=\"\">\n                    </span>\n                    EXSTIMATE\n                </div>\n                <div class=\"toogle-on-over-menu-item\">\n                    <span class=\"togle-img-wrap\">\n                        <img width=\"20px\" src=\"assets/HOME-PAGE-ICONS&GRAPHICS/explore_black.png\" alt=\"\">\n                    </span>\n                    EXPLORE\n                </div>\n            </div>\n        </figure>\n    </a>\n\n    <!-- === icon item === -->\n\n    <a href=\"#\">\n        <figure class=\"slide-menu-item\">\n            <div class=\"img-slide-menu-wrap\">\n                <img class=\"img-slide-menu\" src=\"assets/Menu-Icons/Dining_White.png\" alt=\"\">\n            </div>\n            <figcaption>Diding</figcaption>\n            <div class=\"toogle-on-over-menu\">\n                <div class=\"toogle-on-over-menu-item\">\n                    <span class=\"togle-img-wrap\">\n                        <img width=\"20px\" src=\"assets/HOME-PAGE-ICONS&GRAPHICS/estimate_black.png\" alt=\"\">\n                    </span>\n                    EXSTIMATE\n                </div>\n                <div class=\"toogle-on-over-menu-item\">\n                    <span class=\"togle-img-wrap\">\n                        <img width=\"20px\" src=\"assets/HOME-PAGE-ICONS&GRAPHICS/explore_black.png\" alt=\"\">\n                    </span>\n                    EXPLORE\n                </div>\n            </div>\n        </figure>\n    </a>\n\n    <!-- === icon item === -->\n\n    <a href=\"#\">\n        <figure class=\"slide-menu-item\">\n            <div class=\"img-slide-menu-wrap\">\n                <img class=\"img-slide-menu\" src=\"assets/Menu-Icons/Kitchen_White.png\" alt=\"\">\n            </div>\n            <figcaption>Kitchen</figcaption>\n            <div class=\"toogle-on-over-menu\">\n                <div class=\"toogle-on-over-menu-item\">\n                    <span class=\"togle-img-wrap\">\n                        <img width=\"20px\" src=\"assets/HOME-PAGE-ICONS&GRAPHICS/estimate_black.png\" alt=\"\">\n                    </span>\n                    EXSTIMATE\n                </div>\n                <div class=\"toogle-on-over-menu-item\">\n                    <span class=\"togle-img-wrap\">\n                        <img width=\"20px\" src=\"assets/HOME-PAGE-ICONS&GRAPHICS/explore_black.png\" alt=\"\">\n                    </span>\n                    EXPLORE\n                </div>\n            </div>\n        </figure>\n    </a>\n\n    <!-- === icon item === -->\n\n    <a href=\"#\">\n        <figure class=\"slide-menu-item\">\n            <div class=\"img-slide-menu-wrap\">\n                <img class=\"img-slide-menu\" src=\"assets/Menu-Icons/Livin_white.png\" alt=\"\">\n            </div>\n            <figcaption>Media storage</figcaption>\n            <div class=\"toogle-on-over-menu\">\n                <div class=\"toogle-on-over-menu-item\">\n                    <span class=\"togle-img-wrap\">\n                        <img width=\"20px\" src=\"assets/HOME-PAGE-ICONS&GRAPHICS/estimate_black.png\" alt=\"\">\n                    </span>\n                    EXSTIMATE\n                </div>\n                <div class=\"toogle-on-over-menu-item\">\n                    <span class=\"togle-img-wrap\">\n                        <img width=\"20px\" src=\"assets/HOME-PAGE-ICONS&GRAPHICS/explore_black.png\" alt=\"\">\n                    </span>\n                    EXPLORE\n                </div>\n            </div>\n        </figure>\n    </a>\n\n    <!-- === icon item === -->\n\n    <a href=\"#\">\n        <figure class=\"slide-menu-item\">\n            <div class=\"img-slide-menu-wrap\">\n                <img class=\"img-slide-menu\" src=\"assets/Menu-Icons/Study_White.png\" alt=\"\">\n            </div>\n            <figcaption>Study</figcaption>\n            <div class=\"toogle-on-over-menu\">\n                <div class=\"toogle-on-over-menu-item\">\n                    <span class=\"togle-img-wrap\">\n                        <img width=\"20px\" src=\"assets/HOME-PAGE-ICONS&GRAPHICS/estimate_black.png\" alt=\"\">\n                    </span>\n                    EXSTIMATE\n                </div>\n                <div class=\"toogle-on-over-menu-item\">\n                    <span class=\"togle-img-wrap\">\n                        <img width=\"20px\" src=\"assets/HOME-PAGE-ICONS&GRAPHICS/explore_black.png\" alt=\"\">\n                    </span>\n                    EXPLORE\n                </div>\n            </div>\n        </figure>\n    </a>\n\n    <!-- === icon item === -->\n\n    <a href=\"#\">\n        <figure class=\"slide-menu-item\">\n            <div class=\"img-slide-menu-wrap\">\n                <img class=\"img-slide-menu\" src=\"assets/Menu-Icons/Terrace_White.png\" alt=\"\">\n            </div>\n            <figcaption>Bookcase</figcaption>\n            <div class=\"toogle-on-over-menu\">\n                <div class=\"toogle-on-over-menu-item\">\n                    <span class=\"togle-img-wrap\">\n                        <img width=\"20px\" src=\"assets/HOME-PAGE-ICONS&GRAPHICS/estimate_black.png\" alt=\"\">\n                    </span>\n                    EXSTIMATE\n                </div>\n                <div class=\"toogle-on-over-menu-item\">\n                    <span class=\"togle-img-wrap\">\n                        <img width=\"20px\" src=\"assets/HOME-PAGE-ICONS&GRAPHICS/explore_black.png\" alt=\"\">\n                    </span>\n                    EXPLORE\n                </div>\n            </div>\n        </figure>\n    </a>\n\n    <!-- === icon item === -->\n\n    <a href=\"#\">\n        <figure class=\"slide-menu-item\">\n            <div class=\"img-slide-menu-wrap\">\n                <img class=\"img-slide-menu\" src=\"assets/Menu-Icons/Bathroom_white.png\" alt=\"\">\n            </div>\n            <figcaption>Bedroom</figcaption>\n            <div class=\"toogle-on-over-menu\">\n                <div class=\"toogle-on-over-menu-item\">\n                    <span class=\"togle-img-wrap\">\n                        <img width=\"20px\" src=\"assets/HOME-PAGE-ICONS&GRAPHICS/explore_black.png\" alt=\"\">\n                    </span>\n                    EXSTIMATE\n                </div>\n                <div class=\"toogle-on-over-menu-item\">\n                    <span class=\"togle-img-wrap\">\n                        <img width=\"20px\" src=\"assets/HOME-PAGE-ICONS&GRAPHICS/estimate_black.png\" alt=\"\">\n                    </span>\n                    EXPLORE\n                </div>\n            </div>\n        </figure>\n    </a>\n\n    <!-- === icon item === -->\n\n    <a href=\"#\">\n        <figure class=\"slide-menu-item\">\n            <div class=\"img-slide-menu-wrap\">\n                <img class=\"img-slide-menu\" src=\"assets/Menu-Icons/Bathroom_white.png\" alt=\"\">\n            </div>\n            <figcaption>Nightstand</figcaption>\n            <div class=\"toogle-on-over-menu\">\n                <div class=\"toogle-on-over-menu-item\">\n                    <span class=\"togle-img-wrap\">\n                        <img width=\"20px\" src=\"assets/HOME-PAGE-ICONS&GRAPHICS/explore_black.png\" alt=\"\">\n                    </span>\n                    EXSTIMATE\n                </div>\n                <div class=\"toogle-on-over-menu-item\">\n                    <span class=\"togle-img-wrap\">\n                        <img width=\"20px\" src=\"assets/HOME-PAGE-ICONS&GRAPHICS/estimate_black.png\" alt=\"\">\n                    </span>\n                    EXPLORE\n                </div>\n            </div>\n        </figure>\n    </a>\n\n    <!-- === icon item === -->\n\n    <a href=\"#\">\n        <figure class=\"slide-menu-item\">\n            <div class=\"img-slide-menu-wrap\">\n                <img class=\"img-slide-menu\" src=\"assets/Menu-Icons/Bathroom_white.png\" alt=\"\">\n            </div>\n            <figcaption>Children room</figcaption>\n            <div class=\"toogle-on-over-menu\">\n                <div class=\"toogle-on-over-menu-item\">\n                    <span class=\"togle-img-wrap\">\n                        <img width=\"20px\" src=\"assets/HOME-PAGE-ICONS&GRAPHICS/explore_black.png\" alt=\"\">\n                    </span>\n                    EXSTIMATE\n                </div>\n                <div class=\"toogle-on-over-menu-item\">\n                    <span class=\"togle-img-wrap\">\n                        <img width=\"20px\" src=\"assets/HOME-PAGE-ICONS&GRAPHICS/estimate_black.png\" alt=\"\">\n                    </span>\n                    EXPLORE\n                </div>\n            </div>\n        </figure>\n    </a>\n\n    <!-- === icon item === -->\n\n    <a href=\"#\">\n        <figure class=\"slide-menu-item\">\n            <div class=\"img-slide-menu-wrap\">\n                <img class=\"img-slide-menu\" src=\"assets/Menu-Icons/Bathroom_white.png\" alt=\"\">\n            </div>\n            <figcaption>Kitchen</figcaption>\n            <div class=\"toogle-on-over-menu\">\n                <div class=\"toogle-on-over-menu-item\">\n                    <span class=\"togle-img-wrap\">\n                        <img width=\"20px\" src=\"assets/HOME-PAGE-ICONS&GRAPHICS/explore_black.png\" alt=\"\">\n                    </span>\n                    EXSTIMATE\n                </div>\n                <div class=\"toogle-on-over-menu-item\">\n                    <span class=\"togle-img-wrap\">\n                        <img width=\"20px\" src=\"assets/HOME-PAGE-ICONS&GRAPHICS/estimate_black.png\" alt=\"\">\n                    </span>\n                    EXPLORE\n                </div>\n            </div>\n        </figure>\n    </a>\n\n    <!-- === icon item === -->\n\n    <a href=\"#\">\n        <figure class=\"slide-menu-item\">\n            <div class=\"img-slide-menu-wrap\">\n                <img class=\"img-slide-menu\" src=\"assets/Menu-Icons/Bathroom_white.png\" alt=\"\">\n            </div>\n            <figcaption>Bathroom</figcaption>\n            <div class=\"toogle-on-over-menu\">\n                <div class=\"toogle-on-over-menu-item\">\n                    <span class=\"togle-img-wrap\">\n                        <img width=\"20px\" src=\"assets/HOME-PAGE-ICONS&GRAPHICS/explore_black.png\" alt=\"\">\n                    </span>\n                    EXSTIMATE\n                </div>\n                <div class=\"toogle-on-over-menu-item\">\n                    <span class=\"togle-img-wrap\">\n                        <img width=\"20px\" src=\"assets/HOME-PAGE-ICONS&GRAPHICS/estimate_black.png\" alt=\"\">\n                    </span>\n                    EXPLORE\n                </div>\n            </div>\n        </figure>\n    </a>\n\n    <!-- === icon item === -->\n\n    <a href=\"#\">\n        <figure class=\"slide-menu-item\">\n            <div class=\"img-slide-menu-wrap\">\n                <img class=\"img-slide-menu\" src=\"assets/Menu-Icons/Bathroom_white.png\" alt=\"\">\n            </div>\n            <figcaption>Wardrobe</figcaption>\n            <div class=\"toogle-on-over-menu\">\n                <div class=\"toogle-on-over-menu-item\">\n                    <span class=\"togle-img-wrap\">\n                        <img width=\"20px\" src=\"assets/HOME-PAGE-ICONS&GRAPHICS/explore_black.png\" alt=\"\">\n                    </span>\n                    EXSTIMATE\n                </div>\n                <div class=\"toogle-on-over-menu-item\">\n                    <span class=\"togle-img-wrap\">\n                        <img width=\"20px\" src=\"assets/HOME-PAGE-ICONS&GRAPHICS/estimate_black.png\" alt=\"\">\n                    </span>\n                    EXPLORE\n                </div>\n            </div>\n        </figure>\n    </a>\n\n    <!-- === icon item === -->\n\n    <a href=\"#\">\n        <figure class=\"slide-menu-item\">\n            <div class=\"img-slide-menu-wrap\">\n                <img class=\"img-slide-menu\" src=\"assets/Menu-Icons/Bathroom_white.png\" alt=\"\">\n            </div>\n            <figcaption>Shoe cabinet</figcaption>\n            <div class=\"toogle-on-over-menu\">\n                <div class=\"toogle-on-over-menu-item\">\n                    <span class=\"togle-img-wrap\">\n                        <img width=\"20px\" src=\"assets/HOME-PAGE-ICONS&GRAPHICS/explore_black.png\" alt=\"\">\n                    </span>\n                    EXSTIMATE\n                </div>\n                <div class=\"toogle-on-over-menu-item\">\n                    <span class=\"togle-img-wrap\">\n                        <img width=\"20px\" src=\"assets/HOME-PAGE-ICONS&GRAPHICS/estimate_black.png\" alt=\"\">\n                    </span>\n                    EXPLORE\n                </div>\n            </div>\n        </figure>\n    </a>\n\n</div>"

/***/ }),

/***/ "./src/app/shared/product-slider/product-slider.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/shared/product-slider/product-slider.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".img-slide-menu-wrap {\n  height: 60px;\n  display: flex;\n  flex-flow: column;\n  align-items: center; }\n  .img-slide-menu-wrap .img-slide-menu {\n    width: 60px !important; }\n  .slide-menu-item {\n  position: relative; }\n  .slide-menu-item .toogle-on-over-menu {\n    -webkit-transform: scale(0);\n            transform: scale(0);\n    position: absolute;\n    background: #f1f2f2;\n    top: 0;\n    right: 0;\n    transition: all .3s; }\n  .slide-menu-item .toogle-on-over-menu .toogle-on-over-menu-item {\n      padding: 10px;\n      transition: all .3s;\n      display: flex;\n      align-items: center;\n      color: #454545;\n      font-size: 12px;\n      height: 44px; }\n  .slide-menu-item .toogle-on-over-menu .toogle-on-over-menu-item:hover {\n        background: #e6e7e8;\n        cursor: pointer; }\n  .slide-menu-item:hover .toogle-on-over-menu {\n    -webkit-transform: scale(1);\n            transform: scale(1); }\n  .togle-img-wrap {\n  display: inline-block;\n  width: 30px;\n  display: flex;\n  justify-content: center;\n  margin-right: 10px; }\n  .togle-img-wrap img {\n    width: 20px; }\n"

/***/ }),

/***/ "./src/app/shared/product-slider/product-slider.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/shared/product-slider/product-slider.component.ts ***!
  \*******************************************************************/
/*! exports provided: ProductSliderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductSliderComponent", function() { return ProductSliderComponent; });
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

var ProductSliderComponent = /** @class */ (function () {
    function ProductSliderComponent() {
    }
    ProductSliderComponent.prototype.ngOnInit = function () {
    };
    ProductSliderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product-slider',
            template: __webpack_require__(/*! ./product-slider.component.html */ "./src/app/shared/product-slider/product-slider.component.html"),
            styles: [__webpack_require__(/*! ./product-slider.component.scss */ "./src/app/shared/product-slider/product-slider.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ProductSliderComponent);
    return ProductSliderComponent;
}());



/***/ }),

/***/ "./src/app/shared/search/search.component.html":
/*!*****************************************************!*\
  !*** ./src/app/shared/search/search.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"out-wrap\">\n  <div class=\"wrap-inside\">\n    <div class=\"input-wrap\">\n      <i class=\"icon icon-magnifier\"></i>\n      <input type=\"text\" placeholder=\"I'm looking for ....\">\n    </div>\n    <div class=\"serch-item\">\n        Auto-suggest option 1 in <span class=\"color-gray\">Object Category</span>\n    </div>\n    <div class=\"serch-item\">\n        Auto-suggest with <span class=\"color-orange\">highlighted keyphrase</span> option 2\n    </div>\n    <div class=\"serch-item border-none\">\n        <span class=\"color-red\">Auto-suggest excluding <span class=\"line-through\">keyphrase</span></span> option 3\n    </div>\n    <div class=\"box-key\">\n        <img width=\"20px\" src=\"assets/HOME-PAGE-ICONS&GRAPHICS/estimate_white.png\" alt=\"\">\n        Get an Estimate on Keyphrase (Space)\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/shared/search/search.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/shared/search/search.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".out-wrap {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: rgba(0, 0, 0, 0.8);\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 111111; }\n  .out-wrap .wrap-inside {\n    max-width: 560px; }\n  @media screen and (min-width: 600px) {\n      .out-wrap .wrap-inside {\n        width: 600px; } }\n  @media screen and (max-width: 599px) {\n      .out-wrap .wrap-inside {\n        max-width: 320px;\n        padding: 10px; } }\n  .input-wrap {\n  border-bottom: 1px solid white;\n  margin-bottom: 7px; }\n  .input-wrap .icon-magnifier {\n    color: white;\n    font-size: 21px;\n    margin-right: 16px;\n    display: inline-block;\n    position: relative;\n    left: -5px;\n    top: -3px; }\n  .input-wrap input {\n    border: none;\n    background: no-repeat;\n    color: white;\n    font-size: 32px; }\n  @media screen and (max-width: 599px) {\n      .input-wrap input {\n        max-width: 320px;\n        font-size: 20px; } }\n  .input-wrap input::-webkit-input-placeholder {\n      /* Chrome/Opera/Safari */\n      color: white; }\n  .input-wrap input::-moz-placeholder {\n      /* Firefox 19+ */\n      color: white; }\n  .input-wrap input:-ms-input-placeholder {\n      /* IE 10+ */\n      color: white; }\n  .input-wrap input:-moz-placeholder {\n      /* Firefox 18- */\n      color: white; }\n  .serch-item {\n  background: white;\n  padding: 10px 40px;\n  border-bottom: 1px solid black;\n  font-size: 18px; }\n  @media screen and (max-width: 599px) {\n    .serch-item {\n      padding: 10px 20px;\n      font-size: 16px; } }\n  .border-none {\n  border: none !important; }\n  .line-through {\n  text-decoration: line-through; }\n  .box-key {\n  background: #26a69a;\n  padding: 10px 40px;\n  color: white;\n  font-size: 18px; }\n  @media screen and (max-width: 599px) {\n    .box-key {\n      padding: 10px 20px;\n      font-size: 12px; } }\n  .box-key img {\n    margin-right: 15px; }\n  .color-red {\n  color: #e53a34; }\n  .color-orange {\n  color: #f57c00; }\n  .color-gray {\n  color: #6d6e71; }\n"

/***/ }),

/***/ "./src/app/shared/search/search.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/search/search.component.ts ***!
  \***************************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
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

var SearchComponent = /** @class */ (function () {
    function SearchComponent() {
    }
    SearchComponent.prototype.ngOnInit = function () {
    };
    SearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-search',
            template: __webpack_require__(/*! ./search.component.html */ "./src/app/shared/search/search.component.html"),
            styles: [__webpack_require__(/*! ./search.component.scss */ "./src/app/shared/search/search.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SearchComponent);
    return SearchComponent;
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\TASK\Milestone\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map