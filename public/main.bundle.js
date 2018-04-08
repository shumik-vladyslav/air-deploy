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

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__profile_profile_component__ = __webpack_require__("./src/app/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__buy_knko_buy_knko_component__ = __webpack_require__("./src/app/buy-knko/buy-knko.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__referrals_referrals_component__ = __webpack_require__("./src/app/referrals/referrals.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__withdraw_withdraw_component__ = __webpack_require__("./src/app/withdraw/withdraw.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__settings_settings_component__ = __webpack_require__("./src/app/settings/settings.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    {
        component: __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */],
        path: 'home'
    },
    {
        component: __WEBPACK_IMPORTED_MODULE_3__profile_profile_component__["a" /* ProfileComponent */],
        path: 'profile'
    },
    {
        component: __WEBPACK_IMPORTED_MODULE_4__buy_knko_buy_knko_component__["a" /* BuyKnkoComponent */],
        path: 'buy-knko'
    },
    {
        component: __WEBPACK_IMPORTED_MODULE_5__referrals_referrals_component__["a" /* ReferralsComponent */],
        path: 'referrals'
    },
    {
        component: __WEBPACK_IMPORTED_MODULE_6__withdraw_withdraw_component__["a" /* WithdrawComponent */],
        path: 'withdraw'
    },
    {
        component: __WEBPACK_IMPORTED_MODULE_7__settings_settings_component__["a" /* SettingsComponent */],
        path: 'settings'
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ".warap-body-content{\r\n    padding-left: 120px;\r\n    padding-right: 120px;\r\n    font-family: 'Poppins';\r\n}\r\n@media screen and (max-width: 980px) {\r\n    .warap-body-content{\r\n        padding-left: 20px;\r\n        padding-right: 20px;\r\n    }\r\n    .main-wrapper{\r\n        background: white !important;\r\n    }\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\" min-height: 100vh;\">\n    <div class=\"main-wrapper\" style=\"display: flex; justify-content: space-between; flex-flow: column; min-height: 100vh; background: rgba(246, 247, 251, 1);\">\n\n        <div>\n            <app-header></app-header>\n            <div class=\"warap-body-content\">\n                <app-home></app-home>\n            </div>\n            <!-- <router-outlet></router-outlet> -->\n        </div>\n      \n        <div>\n            <app-footer></app-footer>\n        </div>\n      \n      </div>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__("./node_modules/@ngx-translate/core/@ngx-translate/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(translate) {
        this.translate = translate;
        translate.addLangs(['en', 'fr']);
        translate.setDefaultLang('en');
        var browserLang = translate.getBrowserLang();
        translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export HttpLoaderFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__buy_knko_buy_knko_component__ = __webpack_require__("./src/app/buy-knko/buy-knko.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__withdraw_withdraw_component__ = __webpack_require__("./src/app/withdraw/withdraw.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__referrals_referrals_component__ = __webpack_require__("./src/app/referrals/referrals.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__settings_settings_component__ = __webpack_require__("./src/app/settings/settings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__profile_profile_component__ = __webpack_require__("./src/app/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__buy_knko_congratulations_congratulations_component__ = __webpack_require__("./src/app/buy-knko/congratulations/congratulations.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__shared_header_header_component__ = __webpack_require__("./src/app/shared/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__shared_footer_footer_component__ = __webpack_require__("./src/app/shared/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ngx_translate_core__ = __webpack_require__("./node_modules/@ngx-translate/core/@ngx-translate/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ngx_translate_http_loader__ = __webpack_require__("./node_modules/@ngx-translate/http-loader/esm5/ngx-translate-http-loader.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















// AoT requires an exported function for factories
function HttpLoaderFactory(httpClient) {
    return new __WEBPACK_IMPORTED_MODULE_15__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](httpClient);
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_5__buy_knko_buy_knko_component__["a" /* BuyKnkoComponent */],
                __WEBPACK_IMPORTED_MODULE_6__withdraw_withdraw_component__["a" /* WithdrawComponent */],
                __WEBPACK_IMPORTED_MODULE_7__referrals_referrals_component__["a" /* ReferralsComponent */],
                __WEBPACK_IMPORTED_MODULE_8__settings_settings_component__["a" /* SettingsComponent */],
                __WEBPACK_IMPORTED_MODULE_9__profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_10__buy_knko_congratulations_congratulations_component__["a" /* CongratulationsComponent */],
                __WEBPACK_IMPORTED_MODULE_11__shared_header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_12__shared_footer_footer_component__["a" /* FooterComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_13__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_13__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: HttpLoaderFactory,
                        deps: [__WEBPACK_IMPORTED_MODULE_14__angular_common_http__["a" /* HttpClient */]]
                    }
                })
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/buy-knko/buy-knko.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/buy-knko/buy-knko.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  buy-knko works!\n</p>\n"

/***/ }),

/***/ "./src/app/buy-knko/buy-knko.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BuyKnkoComponent; });
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

var BuyKnkoComponent = /** @class */ (function () {
    function BuyKnkoComponent() {
    }
    BuyKnkoComponent.prototype.ngOnInit = function () {
    };
    BuyKnkoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-buy-knko',
            template: __webpack_require__("./src/app/buy-knko/buy-knko.component.html"),
            styles: [__webpack_require__("./src/app/buy-knko/buy-knko.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BuyKnkoComponent);
    return BuyKnkoComponent;
}());



/***/ }),

/***/ "./src/app/buy-knko/congratulations/congratulations.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/buy-knko/congratulations/congratulations.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  congratulations works!\n</p>\n"

/***/ }),

/***/ "./src/app/buy-knko/congratulations/congratulations.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CongratulationsComponent; });
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

var CongratulationsComponent = /** @class */ (function () {
    function CongratulationsComponent() {
    }
    CongratulationsComponent.prototype.ngOnInit = function () {
    };
    CongratulationsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-congratulations',
            template: __webpack_require__("./src/app/buy-knko/congratulations/congratulations.component.html"),
            styles: [__webpack_require__("./src/app/buy-knko/congratulations/congratulations.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CongratulationsComponent);
    return CongratulationsComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/***/ (function(module, exports) {

module.exports = ".head-content{\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-pack: distribute;\r\n        justify-content: space-around;\r\n    margin-top: 25px;\r\n}\r\n.box-top{\r\n    border-bottom: 5px solid rgba(1, 121, 233, 1);\r\n    background: white;\r\n    border-radius: 5px;\r\n    width: calc(100% / 3);\r\n    margin-right: 42px;\r\n    padding: 20px;\r\n    padding-top: 15px;\r\n    padding-bottom: 0px;\r\n    position: relative;\r\n}\r\n.head-box{\r\n    font-weight: 600;\r\n    color: rgba(1, 121, 231, 1);\r\n    font-family: 'Poppins';\r\n    letter-spacing: 1px;\r\n}\r\n.content-box{\r\n    text-align: center;\r\n    font-size: 30px;\r\n    color: rgba(80, 92, 108, 1);\r\n    margin-bottom: 0;\r\n}\r\n.knko{\r\n    text-align: center;\r\n    color: rgba(164, 171, 181, 1);\r\n    font-family: 'Poppins';\r\n    font-size: 15px;\r\n    margin-bottom: 15px;\r\n}\r\n.coment{\r\n    color: rgb(196, 204, 216);\r\n    font-size: 13px;\r\n    font-family: 'Poppins';\r\n    font-weight: 100;\r\n    margin-bottom: 13px;\r\n}\r\n.new-btn{\r\n    position: absolute;\r\n    right: 10px;\r\n    top: 7px;\r\n    background: rgb(215, 222, 232);\r\n    color: white;\r\n    -webkit-box-shadow: inset 0px 0px 5px 2px rgba(0,0,0,0.06);\r\n    box-shadow: inset 0px 0px 5px 2px rgba(0,0,0,0.06);\r\n    padding: 4px 7px;\r\n    border-radius: 2px;\r\n    font-size: 10px;\r\n}\r\n.scroll-wrap{\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    font-size: 12px;\r\n    color: rgba(148, 157, 166, 1);\r\n    position: relative;\r\n    top: -5px;\r\n    right: -5px;\r\n}\r\n.scroll-wrap > img{\r\n    width: 20px;\r\n    margin-left: 10px;\r\n}\r\n.body-content-head{\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: justify;\r\n        -ms-flex-pack: justify;\r\n            justify-content: space-between;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n}\r\n.body-content{\r\n    padding: 20px;\r\n    background: white;\r\n    margin-top: 30px;\r\n    border-radius: 5px;\r\n    border-bottom: 5px solid rgba(1, 121, 233, 1);\r\n}\r\n.caption-right{\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    color: rgb(0, 110, 231);\r\n    font-size: 16px;\r\n}\r\n.caption-row{\r\n    width: calc(100% + 40px);\r\n    margin-left: -20px;\r\n    padding-left: 20px;\r\n    padding-right: 20px;\r\n    border-bottom: 1px solid rgba(232, 238 , 245, 1);   \r\n    color: rgba(79, 92, 108, 1) !important;\r\n    font-size: 15px !important;\r\n    font-weight: 600 !important;\r\n}\r\n.row-table{\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: justify;\r\n        -ms-flex-pack: justify;\r\n            justify-content: space-between;\r\n    padding-top: 10px;\r\n    padding-bottom: 10px;\r\n    font-size: 15px;\r\n    color: rgba(85, 95, 111, 1);\r\n}\r\n.row-table > div{\r\n    width: calc(100% / 6);\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n}\r\n.column-1{\r\n    width: calc((100% / 6) - 20px) !important;\r\n}\r\n.column-2{\r\n    \r\n}\r\n.column-3{\r\n    width: calc((100% / 6) + 40px) !important;\r\n}\r\n.column-4{\r\n    width: calc((100% / 6) + 40px) !important;\r\n}\r\n.column-5{\r\n    width: calc((100% / 6) - 45px) !important;\r\n}\r\n.column-6{\r\n    width: calc((100% / 6) - 50px) !important;\r\n}\r\n.blue-style{\r\n    color: rgb(0, 110, 231);\r\n}\r\n.status-value{\r\n    border: 1px solid;\r\n    font-size: 12px;\r\n    height: 32px;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    width: 85px;\r\n    border-radius: 50px;\r\n}\r\n.active{\r\n    color: rgba(128, 227, 10, 1);\r\n}\r\n.pending{\r\n    color: rgba(205, 185, 7, 1);\r\n}\r\n.rejected{\r\n    color: rgb(255, 90, 74);\r\n}\r\n.amount-value{\r\n    position: relative;\r\n    left: -10px;\r\n}\r\n.response-content{\r\n    display: none !important;\r\n}\r\n@media screen and (max-width: 980px) {\r\n    .response-content{\r\n        display: block !important;\r\n    }\r\n    .head-content, .body-content{\r\n        display: none !important;\r\n    }\r\n    .head-response{\r\n        display: -webkit-box;\r\n        display: -ms-flexbox;\r\n        display: flex;\r\n        -webkit-box-pack: justify;\r\n            -ms-flex-pack: justify;\r\n                justify-content: space-between;\r\n        padding-left: 40px;\r\n        padding-right: 40px;\r\n    }\r\n    .left-head-response, .right-head-response{\r\n        display: -webkit-box;\r\n        display: -ms-flexbox;\r\n        display: flex;\r\n        -webkit-box-orient: vertical;\r\n        -webkit-box-direction: normal;\r\n            -ms-flex-flow: column;\r\n                flex-flow: column;\r\n        -webkit-box-align: center;\r\n            -ms-flex-align: center;\r\n                align-items: center;\r\n        -webkit-box-pack: justify;\r\n            -ms-flex-pack: justify;\r\n                justify-content: space-between;\r\n    }\r\n    .knko{\r\n        margin-bottom: 0;\r\n    }\r\n    .head-value{\r\n        font-size: 20px;\r\n        margin-bottom: 6px;\r\n        margin-top: 24px;\r\n    }\r\n    .body-content-response{\r\n        overflow: hidden;\r\n        width: calc(100% + 40px);\r\n        padding-top: 19px;\r\n        margin-left: -20px;\r\n        border-bottom: 1px solid rgb(245, 245, 245);\r\n        padding-left: 20px;\r\n        padding-right: 20px;\r\n    }\r\n    .scroll-tab{\r\n        display: -webkit-box;\r\n        display: -ms-flexbox;\r\n        display: flex;\r\n        -webkit-box-pack: justify;\r\n            -ms-flex-pack: justify;\r\n                justify-content: space-between;\r\n        -webkit-box-align: center;\r\n            -ms-flex-align: center;\r\n                align-items: center;\r\n        overflow-x: scroll;\r\n        width: 100%;\r\n        padding-top: 19px;\r\n    }\r\n    .scroll-tab::-webkit-scrollbar {\r\n        width: 0;\r\n    }\r\n    .scroll-tab > div{\r\n        min-width: 100px;\r\n        text-align: center;\r\n        font-size: 18px;\r\n        color: rgba(164, 171, 181, 1);\r\n    }\r\n    .active-tab{\r\n        color: rgb(61, 61, 61) !important;\r\n    }\r\n    .head-content-response{\r\n        display: -webkit-box;\r\n        display: -ms-flexbox;\r\n        display: flex;\r\n        -webkit-box-pack: justify;\r\n            -ms-flex-pack: justify;\r\n                justify-content: space-between;\r\n        -webkit-box-align: center;\r\n            -ms-flex-align: center;\r\n                align-items: center;\r\n        color: rgba(140, 141, 141, 1);\r\n        font-size: 16px;\r\n        margin-top: 15px;\r\n        margin-bottom: 15px;\r\n    }\r\n    .knko-value-blue-style{\r\n        background: rgba(41, 137, 244, 1);\r\n        border: none;\r\n        color: white;\r\n        margin-left: 15px;\r\n        font-size: 14px;\r\n    }\r\n    .knko-value-gray-style{\r\n        background: rgba(176, 191, 173, 1);\r\n        border: none;\r\n        color: white;\r\n        margin-left: 15px;\r\n        font-size: 14px;\r\n    }\r\n    .knko-wrap-right{\r\n        display: -webkit-box;\r\n        display: -ms-flexbox;\r\n        display: flex;\r\n        -webkit-box-align: center;\r\n            -ms-flex-align: center;\r\n                align-items: center;\r\n    }\r\n    .time-value{\r\n        display: -webkit-box;\r\n        display: -ms-flexbox;\r\n        display: flex;\r\n        -webkit-box-align: center;\r\n            -ms-flex-align: center;\r\n                align-items: center;\r\n    }\r\n    .knko-value-inside-wrap{\r\n        display: -webkit-box;\r\n        display: -ms-flexbox;\r\n        display: flex;\r\n        -webkit-box-orient: vertical;\r\n        -webkit-box-direction: normal;\r\n            -ms-flex-flow: column;\r\n                flex-flow: column; \r\n        -webkit-box-pack: center; \r\n            -ms-flex-pack: center; \r\n                justify-content: center;\r\n    }\r\n    .time-value-inside{\r\n        font-size: 12px;\r\n        color: rgba(225, 225, 225, 1);\r\n    }\r\n    .knko-value-inside{\r\n        color: rgb(61, 61, 61);\r\n        font-size: 18px;\r\n        font-weight: 600;\r\n        margin-bottom: 3px;\r\n    }\r\n    .status-value{\r\n        margin-left: 15px;\r\n        font-size: 13px;\r\n        width: 90px;\r\n    }\r\n    .knko-value-complited-style{\r\n        color: rgb(159, 233, 54);\r\n    }\r\n}\r\n@media screen and (max-width: 430px) {\r\n    .head-response{\r\n        padding-left: 0px;\r\n        padding-right: 0px;\r\n    }\r\n}\r\n@media screen and (max-width: 400px) {\r\n    .knko-value-inside{\r\n        font-size: 16px;\r\n    }\r\n}"

/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = " <!--{{ 'HOME.SELECT' | translate }}-->\n\n <div class=\"head-content\">\n  <div class=\"box-top\">\n    <p class=\"head-box\">TOTAL BALANCE</p>\n    <p class=\"content-box\">\n      123 505\n    </p>\n    <p class=\"knko\">\n      KNKO\n    </p>\n    <p class=\"coment\">\n      <!-- *based on current token sale price -->\n    </p>\n    \n  </div>\n  <div class=\"box-top\">\n    <p class=\"head-box\">ERNED BY REFERALS</p>\n    <p class=\"content-box\">\n      56 600\n    </p>\n    <p class=\"knko\">\n      KNKO\n    </p>\n    <p class=\"coment\">\n      <!-- *based on current token sale price -->\n    </p>\n    <button class=\"button new-btn\"> NEW</button>\n  </div>\n  <div class=\"box-top\" style=\"margin-right: 0;\">\n    <p class=\"head-box\">CURENT VALUE IN EUR*</p>\n    <p class=\"content-box\">\n        € 1 2350,5\n    </p>\n    <p class=\"knko\">\n      <!-- KNKO -->\n    </p>\n    <p class=\"coment\">\n      *based on current token sale price\n    </p>\n    <button class=\"button new-btn\"> NEW</button>\n  </div>\n </div>\n\n <div class=\"body-content\">\n  <div class=\"body-content-head\">\n    <div class=\"caption-right\">\n      RECENT TRANSACTIONS\n    </div>\n    <div class=\"scroll-wrap\">\n      SCROLL THE TAB DOWN\n      <img src=\"assets\\img\\SETTINGS.png\" alt=\"\">\n    </div>\n  </div>\n  <div class=\"caption-row row-table\">\n    <div class=\"column-1\">\n      Date\n    </div>\n    <div class=\"column-2\">\n      Type\n    </div>\n    <div class=\"column-3\">\n      From\n    </div>\n    <div class=\"column-4\">\n      Amount\n    </div>\n    <div class=\"column-5\">\n      Status\n    </div>\n    <div class=\"column-6\">\n      Balance\n    </div>\n  </div>\n   <div class=\"row-table\">\n    <div class=\"column-1\">\n      Yesterday\n    </div>\n    <div class=\"column-2\">\n      Withdrawal\n    </div>\n    <div class=\"column-3\">\n      Carolina_314\n    </div>\n    <div class=\"column-4\">\n      <div class=\"amount-value\">\n          + 40 000 KNKO\n      </div>\n    </div>\n    <div class=\"column-5\">\n      <div class=\"status-value active\">\n        ACTIVE\n      </div>\n    </div>\n    <div class=\"column-6 blue-style\">\n      123 505 KNKO\n    </div>\n  </div>\n   <div class=\"row-table\">\n    <div class=\"column-1\">\n      Yesterday\n    </div>\n    <div class=\"column-2\">\n      Withdrawal\n    </div>\n    <div class=\"column-3\">\n      Carolina_314\n    </div>\n    <div class=\"column-4\">\n      <div class=\"amount-value\">\n          + 40 000 KNKO\n      </div>\n    </div>\n    <div class=\"column-5\">\n      <div class=\"status-value pending\">\n        PENDING\n      </div>\n    </div>\n    <div class=\"column-6\">\n      123 505 KNKO\n    </div>\n  </div>\n   <div class=\"row-table\">\n    <div class=\"column-1\">\n      Yesterday\n    </div>\n    <div class=\"column-2\">\n      Withdrawal\n    </div>\n    <div class=\"column-3\">\n      Carolina_314\n    </div>\n    <div class=\"column-4\">\n      <div class=\"amount-value\">\n          + 40 000 KNKO\n      </div>\n    </div>\n    <div class=\"column-5\">\n      <div class=\"status-value rejected\">\n        REJECTED\n      </div>\n    </div>\n    <div class=\"column-6\">\n      123 505 KNKO\n    </div>\n  </div>\n </div>\n\n<div class=\"response-content\">\n  <div class=\"head-response\">\n    <div class=\"left-head-response\">\n      <div class=\"head-value\">\n        123 505\n      </div>\n      <div class=\"knko\">\n        KNKO\n      </div>\n    </div>\n    <div class=\"right-head-response\">\n      <div class=\"head-value\">\n        <img style=\"width: 30px;\" src=\"assets\\img\\VectorSmartObject.png\" alt=\"\">\n        1000\n      </div>\n      <div class=\"knko\">\n        K-Points\n      </div>\n    </div>\n  </div>\n  <div class=\"body-content-response\">\n    <div class=\"scroll-tab\">\n      <div>January</div>\n      <div>February</div>\n      <div>March</div>\n      <div class=\"active-tab\">This month</div>\n      <div>May</div>\n      <div>June</div>\n      <div>July</div>\n      <div>August</div>\n      <div>September</div>\n      <div>October</div>\n      <div>November</div>\n      <div>December</div>\n      <div>All time</div>\n    </div>\n  </div>\n  <div class=\"content-response\">\n      <div class=\"head-content-response\">\n        <div class=\"time-value\">\n          Today\n        </div>\n        <div class=\"knko-wrap-right\">\n          KNKO\n          <div class=\"knko-value-blue-style status-value\">\n            123 505\n          </div>\n        </div>\n      </div>\n  </div>\n  <div class=\"content-response\">\n      <div class=\"head-content-response\">\n        <div class=\"time-value\">\n          <img style=\"width: 50px; border-radius: 50%; margin-right: 15px;\" src=\"assets\\img\\favicon.png\" alt=\"\">\n          <div class=\"knko-value-inside-wrap\">\n            <div class=\"knko-value-inside\">\n              + 45 000 KNKO\n            </div>\n            <div class=\"time-value-inside\">\n              1:05 PM. AFFILIATE BONUS 5%\n            </div>\n          </div>\n        </div>\n        <div class=\"knko-wrap-right\">\n          \n          <div class=\"knko-value-complited-style status-value\">\n            COMPLETED\n          </div>\n        </div>\n      </div>\n  </div>\n  <div class=\"content-response\">\n      <div class=\"head-content-response\">\n        <div class=\"time-value\">\n          <img style=\"width: 50px; border-radius: 50%; margin-right: 15px;\" src=\"assets\\img\\favicon.png\" alt=\"\">\n          <div class=\"knko-value-inside-wrap\">\n            <div class=\"knko-value-inside\">\n              + 45 000 KNKO\n            </div>\n            <div class=\"time-value-inside\">\n              1:05 PM. AFFILIATE BONUS 5%\n            </div>\n          </div>\n        </div>\n        <div class=\"knko-wrap-right\">\n          \n          <div class=\"knko-value-complited-style status-value\">\n            COMPLETED\n          </div>\n        </div>\n      </div>\n  </div>\n  <div class=\"content-response\">\n      <div class=\"head-content-response\">\n        <div class=\"time-value\">\n          <img style=\"width: 50px; border-radius: 50%; margin-right: 15px;\" src=\"assets\\img\\favicon.png\" alt=\"\">\n          <div class=\"knko-value-inside-wrap\">\n            <div class=\"knko-value-inside\">\n              + 45 000 KNKO\n            </div>\n            <div class=\"time-value-inside\">\n              1:05 PM. AFFILIATE BONUS 5%\n            </div>\n          </div>\n        </div>\n        <div class=\"knko-wrap-right\">\n          \n          <div class=\"knko-value-complited-style status-value\">\n            COMPLETED\n          </div>\n        </div>\n      </div>\n  </div>\n  <div class=\"content-response\">\n      <div class=\"head-content-response\">\n        <div class=\"time-value\">\n          Yesterday\n        </div>\n        <div class=\"knko-wrap-right\">\n          KNKO\n          <div class=\"knko-value-gray-style status-value\">\n            123 505\n          </div>\n        </div>\n      </div>\n  </div>\n  <div class=\"content-response\">\n      <div class=\"head-content-response\">\n        <div class=\"time-value\">\n          <img style=\"width: 50px; border-radius: 50%; margin-right: 15px;\" src=\"assets\\img\\favicon.png\" alt=\"\">\n          <div class=\"knko-value-inside-wrap\">\n            <div class=\"knko-value-inside\">\n              + 45 000 KNKO\n            </div>\n            <div class=\"time-value-inside\">\n              1:05 PM. AFFILIATE BONUS 5%\n            </div>\n          </div>\n        </div>\n        <div class=\"knko-wrap-right\">\n          \n          <div class=\"knko-value-complited-style status-value\">\n            COMPLETED\n          </div>\n        </div>\n      </div>\n  </div>\n  <div class=\"content-response\">\n      <div class=\"head-content-response\">\n        <div class=\"time-value\">\n          <img style=\"width: 50px; border-radius: 50%; margin-right: 15px;\" src=\"assets\\img\\favicon.png\" alt=\"\">\n          <div class=\"knko-value-inside-wrap\">\n            <div class=\"knko-value-inside\">\n              + 45 000 KNKO\n            </div>\n            <div class=\"time-value-inside\">\n              1:05 PM. AFFILIATE BONUS 5%\n            </div>\n          </div>\n        </div>\n        <div class=\"knko-wrap-right\">\n          \n          <div class=\"pending status-value\">\n            PENDING\n          </div>\n        </div>\n      </div>\n  </div>\n  <div class=\"content-response\">\n      <div class=\"head-content-response\">\n        <div class=\"time-value\">\n          <img style=\"width: 50px; border-radius: 50%; margin-right: 15px;\" src=\"assets\\img\\favicon.png\" alt=\"\">\n          <div class=\"knko-value-inside-wrap\">\n            <div class=\"knko-value-inside\">\n              + 45 000 KNKO\n            </div>\n            <div class=\"time-value-inside\">\n              1:05 PM. AFFILIATE BONUS 5%\n            </div>\n          </div>\n        </div>\n        <div class=\"knko-wrap-right\">\n          \n          <div class=\"rejected status-value\">\n            REJECTED\n          </div>\n        </div>\n      </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
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

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/home/home.component.html"),
            styles: [__webpack_require__("./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/profile/profile.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  profile works!\n</p>\n"

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
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

var ProfileComponent = /** @class */ (function () {
    function ProfileComponent() {
    }
    ProfileComponent.prototype.ngOnInit = function () {
    };
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-profile',
            template: __webpack_require__("./src/app/profile/profile.component.html"),
            styles: [__webpack_require__("./src/app/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/referrals/referrals.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/referrals/referrals.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  referrals works!\n</p>\n"

/***/ }),

/***/ "./src/app/referrals/referrals.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReferralsComponent; });
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

var ReferralsComponent = /** @class */ (function () {
    function ReferralsComponent() {
    }
    ReferralsComponent.prototype.ngOnInit = function () {
    };
    ReferralsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-referrals',
            template: __webpack_require__("./src/app/referrals/referrals.component.html"),
            styles: [__webpack_require__("./src/app/referrals/referrals.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ReferralsComponent);
    return ReferralsComponent;
}());



/***/ }),

/***/ "./src/app/settings/settings.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/settings/settings.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  settings works!\n</p>\n"

/***/ }),

/***/ "./src/app/settings/settings.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsComponent; });
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

var SettingsComponent = /** @class */ (function () {
    function SettingsComponent() {
    }
    SettingsComponent.prototype.ngOnInit = function () {
    };
    SettingsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-settings',
            template: __webpack_require__("./src/app/settings/settings.component.html"),
            styles: [__webpack_require__("./src/app/settings/settings.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SettingsComponent);
    return SettingsComponent;
}());



/***/ }),

/***/ "./src/app/shared/footer/footer.component.css":
/***/ (function(module, exports) {

module.exports = ".main-wrap > div{\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: justify;\r\n        -ms-flex-pack: justify;\r\n            justify-content: space-between;\r\n    padding-left: 120px;\r\n    padding-right: 120px;\r\n    background: rgba(1, 111, 232, 1);\r\n    height: 65px;\r\n    font-family: 'Poppins', sans-serif;\r\n    margin-top: 40px;\r\n}\r\n.menu-wrap-outer{\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: justify;\r\n        -ms-flex-pack: justify;\r\n            justify-content: space-between;\r\n    background: white !important;\r\n    border-top: 2px solid rgba(230, 235, 239, 1);\r\n    font-size: 11px\r\n}\r\n.menu-wrap-outer > div{\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n}\r\n.footer-right > span{\r\n    color: rgba(20, 172, 248, 1);\r\n    padding-left: 5px;\r\n    padding-right: 5px;\r\n    border-right: 2px solid rgb(183, 183, 183);;\r\n    display: inline-block;\r\n    height: 11px;\r\n}\r\n.footer-right > span > span{\r\n    position: relative;\r\n    top: -2px;\r\n    white-space: nowrap;\r\n}\r\n.footer-left{\r\n    color: rgba(162, 170, 177, 1);\r\n}\r\n@media screen and (max-width: 980px) {\r\n    .main-wrap > div{\r\n        -webkit-box-orient: vertical;\r\n        -webkit-box-direction: normal;\r\n            -ms-flex-flow: column;\r\n                flex-flow: column;\r\n        -webkit-box-pack: center;\r\n            -ms-flex-pack: center;\r\n                justify-content: center;\r\n        -webkit-box-align: center;\r\n            -ms-flex-align: center;\r\n                align-items: center;\r\n        padding-left: 20px;\r\n        padding-right: 20px;\r\n    }\r\n    .footer-left{\r\n        margin-bottom: 7px;\r\n        text-align: center;\r\n    }\r\n}"

/***/ }),

/***/ "./src/app/shared/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-wrap\">\n    <div class=\"menu-wrap-outer\">\n     <div class=\"footer-left\">\n      Copirights © 2018 Kaenko Holdings Limited. All rights reserved.\n     </div>\n     <div class=\"footer-right\">\n      <span>\n          <span>Terms of Use</span>\n      </span>\n      <span>\n          <span>Privacy Policy</span>\n      </span>\n      <span style=\"border-right: none;\">\n          <span>Terms of Sale</span>\n      </span>\n     </div>\n    </div>\n  </div>\n\n  \n"

/***/ }),

/***/ "./src/app/shared/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
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

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-footer',
            template: __webpack_require__("./src/app/shared/footer/footer.component.html"),
            styles: [__webpack_require__("./src/app/shared/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/shared/header/header.component.css":
/***/ (function(module, exports) {

module.exports = ".main-wrap > div{\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: justify;\r\n        -ms-flex-pack: justify;\r\n            justify-content: space-between;\r\n    padding-left: 120px;\r\n    padding-right: 120px;\r\n    background: rgba(1, 111, 232, 1);\r\n    height: 65px;\r\n}\r\n.logo-wrap{\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n}\r\n.menu-wrap{\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex; \r\n}\r\n.menu-wrap > div > img{\r\n    width: 20px;\r\n    margin-right: 10px;\r\n}\r\n.menu-wrap > div{\r\n    height: 100%;\r\n    color: #8194b3;\r\n    margin-right: 45px;\r\n    font-weight: 900;\r\n    white-space: nowrap;\r\n    cursor: pointer;\r\n    padding-right: 10px;\r\n}\r\n.active-tab{\r\n    color: #007ae7 !important;\r\n    border-bottom: 2px solid rgb(82, 164, 240) !important;\r\n    padding-bottom: 2px;\r\n    position: relative;\r\n    top: 2px;\r\n}\r\n.my-profile{\r\n    height: 100%;\r\n    color: #8194b3;\r\n    margin-right: 106px;\r\n    font-weight: 900;\r\n    white-space: nowrap;\r\n    cursor: pointer;\r\n}\r\n.arrow{\r\n    width: 14px;\r\n    margin-left: 10px;\r\n}\r\n.menu-wrap-outer{\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: justify;\r\n        -ms-flex-pack: justify;\r\n            justify-content: space-between;\r\n    background: white !important;\r\n    border-bottom: 2px solid rgba(230, 235, 239, 1);\r\n}\r\n.menu-wrap-outer > div > div{\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n}\r\n.menu-wrap-outer > div{\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n}\r\n.user-img > div{\r\n    position: relative;\r\n}\r\n.user-img > div > img{\r\n    border-radius: 50%;\r\n    border: 1px solid white;\r\n    width: 65px;\r\n    height: 65px;\r\n}\r\n.circle-wrap{\r\n    position: absolute;\r\n    border-radius: 50%;\r\n    font-size: 17px;\r\n    color: rgba(76, 218, 100, 1);\r\n    background: white;\r\n    height: 19px;\r\n    left: 48px;\r\n    bottom: 4px;\r\n    width: 19px;\r\n}\r\n.fa-check-circle{\r\n    position: relative;\r\n    top: -2px;\r\n    left: 1px;\r\n}\r\n.user-img{\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    position: absolute;\r\n    left: -187px;\r\n    min-width: 201px;\r\n    top: 13px;\r\n}\r\n.user-name{\r\n    color: white;\r\n    font-family: 'Poppins', sans-serif;\r\n    font-weight: 600;\r\n    font-size: 13px;\r\n    position: relative;\r\n    top: -6px;\r\n}\r\n.user-logo{\r\n    position: relative;\r\n}\r\n.button-lang{\r\n    margin-left: 30px;\r\n    color: white;\r\n    font-size: 16px;\r\n    font-weight: 500;\r\n    position: relative;\r\n    top: 3px;\r\n}\r\n.fa-angle-down{\r\n    font-size: 22px;\r\n    color: rgba(130, 185, 243, 1);\r\n    font-weight: 100;\r\n    position: relative;\r\n    top: 3px;\r\n    margin-left: 4px;\r\n}\r\n.arrow-lang-lang{\r\n    display: none;\r\n}\r\n.header-wrap-response{\r\n    display: none !important;\r\n}\r\n@media screen and (max-width: 980px) {\r\n    .button-lang{\r\n        margin-left: 0px;\r\n    }\r\n    .user-logo {\r\n        display: -webkit-box;\r\n        display: -ms-flexbox;\r\n        display: flex;\r\n        -webkit-box-pack: center;\r\n            -ms-flex-pack: center;\r\n                justify-content: center;\r\n    }\r\n    .response-head{\r\n        display: -webkit-box;\r\n        display: -ms-flexbox;\r\n        display: flex;\r\n        -webkit-box-pack: justify;\r\n            -ms-flex-pack: justify;\r\n                justify-content: space-between;\r\n        padding-top: 15px;\r\n    }\r\n    .user-img{\r\n        left: unset;\r\n        top: 0;\r\n        -webkit-box-orient: vertical;\r\n        -webkit-box-direction: normal;\r\n            -ms-flex-flow: column;\r\n                flex-flow: column;\r\n        top: 56px;\r\n    }\r\n    .user-img > div > img{\r\n        width: 100px;\r\n        height: 100px;\r\n        border: 4px solid white;\r\n    }\r\n    .main-wrap > div{\r\n        -webkit-box-orient: vertical;\r\n        -webkit-box-direction: normal;\r\n            -ms-flex-flow: column;\r\n                flex-flow: column;\r\n        height: 166px;\r\n    }\r\n    .fa-check-circle{\r\n        top: -3px;\r\n    }\r\n    .circle-wrap{\r\n        font-size: 23px;\r\n        height: 25px;\r\n        bottom: unset;\r\n        width: 25px;\r\n        left: 121px;\r\n    }\r\n    .user-name{\r\n        color: rgba(180, 191, 196, 1);\r\n        top: 11px;\r\n    }\r\n    .user-name > .arrow{\r\n        display: none;\r\n    }\r\n    .arrow-lang{\r\n        display: none;\r\n    }\r\n    .arrow-lang-lang{\r\n        display: unset;\r\n        width: 17px;\r\n        margin-top: -2px;\r\n    }\r\n    .personal{\r\n        text-align: right;\r\n        color: white;\r\n        font-size: 12px;\r\n        margin-top: 2px;\r\n        font-style: italic;\r\n    }\r\n    .burger-wrap{\r\n        cursor: pointer;\r\n    }\r\n    .some-circle{\r\n        display: block;\r\n        position: absolute;\r\n        left: -4px;\r\n        top: -52px;\r\n        height: 101px;\r\n        overflow: hidden;\r\n        width: 100%;\r\n    }\r\n    .some-circle > img{\r\n        position: absolute;\r\n    }\r\n    span.some-circle > img:nth-child(1){\r\n        width: 209px;\r\n   }\r\n   span.some-circle > img:nth-child(2){\r\n        width: 185px;\r\n        left: 12px;\r\n        top: 12px;\r\n   }\r\n   span.some-circle > img:nth-child(3){\r\n        width: 165px;\r\n        left: 23px;\r\n        top: 27px;\r\n   }\r\n   span.some-circle > img:nth-child(4){\r\n        width: 131px;\r\n        left: 40px;\r\n        top: 41px;\r\n   }\r\n   .menu-wrap-outer{\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-flow: column;\r\n            flex-flow: column;\r\n    height: unset;\r\n    padding: 0;\r\n    z-index: 10000000;\r\n    background: white !important;\r\n    position: absolute;\r\n    width: 100%;\r\n    top: 64px;\r\n    padding: 0 !important;\r\n    height: unset !important;\r\n   }\r\n   .menu-wrap{\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-flow: column;\r\n            flex-flow: column;\r\n    -webkit-box-align: start;\r\n        -ms-flex-align: start;\r\n            align-items: flex-start;\r\n   }\r\n   .menu-wrap > div{\r\n    margin-bottom: 4px;\r\n    width: 100%;\r\n    padding: 3px;\r\n    padding-left: 10px;\r\n    margin-right: 0;\r\n   }\r\n   .main-wrap > div{\r\n    padding-left: 20px;\r\n    padding-right: 20px;\r\n   }\r\n   .my-profile{\r\n    padding: 3px;\r\n    margin-bottom: 4px;\r\n    padding-left: 40px;\r\n    margin-right: 0;\r\n   }\r\n   .header-wrap{\r\n    display: none !important;\r\n    }\r\n    .header-wrap-response{\r\n        display: block !important;\r\n    }\r\n    .menu-wrap-large-page{\r\n        display: none !important;\r\n    }\r\n}"

/***/ }),

/***/ "./src/app/shared/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-wrap\">\n  <div class=\"header-wrap\">\n    <div class=\"logo-wrap\">\n      <div>\n        <!-- {{ 'HOME.TITLE' | translate }} -->\n        <img src=\"assets\\img\\XCZCZXCZ.png\" alt=\"\" style=\"width: 125px;\">\n      </div>\n     <div class=\"dropdawn-wrap\">\n      <button class=\"button button-lang\">\n        <span>\n          EN\n        </span>\n        <img class=\"arrow\" src=\"assets\\img\\down-arrow.png\" alt=\"\">\n      </button>\n     </div>\n      <!-- <select #langSelect (change)=\"translate.use(langSelect.value)\">\n        <option *ngFor=\"let lang of translate.getLangs()\" [value]=\"lang\" [selected]=\"lang === translate.currentLang\">{{ lang }}</option>\n      </select> -->\n    </div>\n    <div class=\"user-logo\">\n      <div class=\"user-img\">\n        <div>\n          <img src=\"assets\\img\\user.png\" alt=\"\">\n        </div>\n        <span class=\"circle-wrap\">\n          <i class=\"fas fa-check-circle\"></i>\n        </span>\n        <div class=\"dropdawn-wrap\" style=\"margin-left:10px;\">\n          <button class=\"user-name button\">\n            <span>\n              bibahadid23\n            </span>\n            <img class=\"arrow\" src=\"assets\\img\\down-arrow.png\" alt=\"\">         \n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"header-wrap-response\">\n      <div class=\"response-head\">\n            <div class=\"dropdawn-wrap\">\n              <button class=\"button button-lang\">\n                <span>\n                  EN\n                </span>\n                <img class=\"arrow arrow-lang-lang\" src=\"assets\\img\\down-arrow-response.png\" alt=\"\">\n                <img class=\"arrow arrow-lang\" src=\"assets\\img\\down-arrow.png\" alt=\"\">\n              </button>\n            </div>\n            <div class=\"logo-wrap\">\n              <div>\n                <!-- {{ 'HOME.TITLE' | translate }} -->\n                <img src=\"assets\\img\\XCZCZXCZ.png\" alt=\"\" style=\"width: 125px;\">\n                <div class=\"personal\">\n                  PERSONAL\n                </div>\n              </div>\n              <!-- <select #langSelect (change)=\"translate.use(langSelect.value)\">\n                <option *ngFor=\"let lang of translate.getLangs()\" [value]=\"lang\" [selected]=\"lang === translate.currentLang\">{{ lang }}</option>\n              </select> -->\n            </div>\n            <div class=\"burger-wrap\" (click)=\"navigations = !navigations\">\n              <img src=\"assets\\img\\menu.png\" alt=\"\" style=\"width: 30px;\">\n            </div>\n      </div>\n      <div class=\"user-logo\">\n        <div class=\"user-img\">\n          <div>\n            <img src=\"assets\\img\\user.png\" alt=\"\">\n          </div>\n          <span class=\"some-circle\">\n            <img src=\"assets\\img\\1th-line.png\" alt=\"\">\n            <img src=\"assets\\img\\2th-line.png\" alt=\"\">\n            <img src=\"assets\\img\\3th-line.png\" alt=\"\">\n            <img src=\"assets\\img\\4th-line.png\" alt=\"\">\n          </span>\n          <span class=\"circle-wrap\">\n            <i class=\"fas fa-check-circle\"></i>\n          </span>\n          <div class=\"dropdawn-wrap\" style=\"margin-left:10px;\">\n            <button class=\"user-name button\">\n              <span>\n                bibahadid23\n              </span>\n              <img class=\"arrow\" src=\"assets\\img\\down-arrow.png\" alt=\"\">         \n            </button>\n          </div>\n        </div>\n      </div>\n    </div>\n  <div class=\"menu-wrap-outer\" *ngIf=\"navigations\">\n    <div class=\"menu-wrap\">\n      <div class=\"active-tab\"> \n        <!-- <img src=\"assets\\img\\Home-inactive.png\" alt=\"\"> -->\n        <img src=\"assets\\img\\Home.png\" alt=\"\">\n        HOME\n      </div>\n      <div>\n        <img src=\"assets\\img\\BUY-KNKO.png\" alt=\"\">\n        <!-- <img src=\"assets\\img\\BUY-KNKO-active.png\" alt=\"\"> -->\n        BY KNKO\n      </div>\n      <div>\n        <img src=\"assets\\img\\WITHDRAW.png\" alt=\"\">\n        <!-- <img src=\"assets\\img\\WITHDRAW-active.png\" alt=\"\"> -->\n        WITHDRAW\n      </div>\n      <div>\n        <img src=\"assets\\img\\REFERRALS.png\" alt=\"\">\n        <!-- <img src=\"assets\\img\\REFERRALS-active.png\" alt=\"\"> -->\n        REFERRALS\n      </div>\n      <div>\n        <img src=\"assets\\img\\SETTINGS.png\" alt=\"\">\n        <!-- <img src=\"assets\\img\\SETTINGS-active.png\" alt=\"\"> -->\n        SETTINGS\n      </div>\n    </div>\n    <div class=\"my-profile\">\n      <div>\n        MY PROFILE\n      </div>\n    </div>\n  </div>\n  <div class=\"menu-wrap-outer menu-wrap-large-page\">\n      <div class=\"menu-wrap\">\n        <div class=\"active-tab\"> \n          <!-- <img src=\"assets\\img\\Home-inactive.png\" alt=\"\"> -->\n          <img src=\"assets\\img\\Home.png\" alt=\"\">\n          HOME\n        </div>\n        <div>\n          <img src=\"assets\\img\\BUY-KNKO.png\" alt=\"\">\n          <!-- <img src=\"assets\\img\\BUY-KNKO-active.png\" alt=\"\"> -->\n          BY KNKO\n        </div>\n        <div>\n          <img src=\"assets\\img\\WITHDRAW.png\" alt=\"\">\n          <!-- <img src=\"assets\\img\\WITHDRAW-active.png\" alt=\"\"> -->\n          WITHDRAW\n        </div>\n        <div>\n          <img src=\"assets\\img\\REFERRALS.png\" alt=\"\">\n          <!-- <img src=\"assets\\img\\REFERRALS-active.png\" alt=\"\"> -->\n          REFERRALS\n        </div>\n        <div>\n          <img src=\"assets\\img\\SETTINGS.png\" alt=\"\">\n          <!-- <img src=\"assets\\img\\SETTINGS-active.png\" alt=\"\"> -->\n          SETTINGS\n        </div>\n      </div>\n      <div class=\"my-profile\">\n        <div>\n          MY PROFILE\n        </div>\n      </div>\n    </div>\n</div>\n<!-- <div>\n  <label>\n    {{ 'HOME.SELECT' | translate }}\n    \n  </label>\n</div>\n<p>\n  header works!\n</p>\n<button (click)=\"changeLang('fr')\">fr</button> -->\n"

/***/ }),

/***/ "./src/app/shared/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__("./node_modules/@ngx-translate/core/@ngx-translate/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(translate) {
        this.translate = translate;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.changeLang = function (lang) {
        this.translate.use(lang);
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__("./src/app/shared/header/header.component.html"),
            styles: [__webpack_require__("./src/app/shared/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/withdraw/withdraw.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/withdraw/withdraw.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  withdraw works!\n</p>\n"

/***/ }),

/***/ "./src/app/withdraw/withdraw.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WithdrawComponent; });
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

var WithdrawComponent = /** @class */ (function () {
    function WithdrawComponent() {
    }
    WithdrawComponent.prototype.ngOnInit = function () {
    };
    WithdrawComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-withdraw',
            template: __webpack_require__("./src/app/withdraw/withdraw.component.html"),
            styles: [__webpack_require__("./src/app/withdraw/withdraw.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], WithdrawComponent);
    return WithdrawComponent;
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* enableProdMode */])();
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