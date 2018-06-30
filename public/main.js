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
		var e = new Error('Cannot find module "' + req + '".');
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_material_l_material_l_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/material-l/material-l.component */ "./src/app/pages/material-l/material-l.component.ts");
/* harmony import */ var _pages_material_g_material_g_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/material-g/material-g.component */ "./src/app/pages/material-g/material-g.component.ts");
/* harmony import */ var _pages_material_material_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/material/material.component */ "./src/app/pages/material/material.component.ts");
/* harmony import */ var _pages_prime_prime_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/prime/prime.component */ "./src/app/pages/prime/prime.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { component: _pages_material_material_component__WEBPACK_IMPORTED_MODULE_4__["MaterialComponent"], path: "material" },
    { component: _pages_prime_prime_component__WEBPACK_IMPORTED_MODULE_5__["PrimeComponent"], path: "prime" },
    { component: _pages_material_l_material_l_component__WEBPACK_IMPORTED_MODULE_2__["MaterialLComponent"], path: "material-l" },
    { component: _pages_material_g_material_g_component__WEBPACK_IMPORTED_MODULE_3__["MaterialGComponent"], path: "material-g" },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<router-outlet></router-outlet>\n"

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
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
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
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/esm5/chips.es5.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm5/list.es5.js");
/* harmony import */ var _pages_material_material_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/material/material.component */ "./src/app/pages/material/material.component.ts");
/* harmony import */ var _pages_prime_prime_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/prime/prime.component */ "./src/app/pages/prime/prime.component.ts");
/* harmony import */ var _pages_material_g_material_g_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/material-g/material-g.component */ "./src/app/pages/material-g/material-g.component.ts");
/* harmony import */ var _pages_material_l_material_l_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/material-l/material-l.component */ "./src/app/pages/material-l/material-l.component.ts");
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/card */ "./node_modules/primeng/card.js");
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(primeng_card__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/button */ "./node_modules/primeng/button.js");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(primeng_button__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var primeng_tabview__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/tabview */ "./node_modules/primeng/tabview.js");
/* harmony import */ var primeng_tabview__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(primeng_tabview__WEBPACK_IMPORTED_MODULE_16__);
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
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _pages_material_material_component__WEBPACK_IMPORTED_MODULE_10__["MaterialComponent"],
                _pages_prime_prime_component__WEBPACK_IMPORTED_MODULE_11__["PrimeComponent"],
                _pages_material_g_material_g_component__WEBPACK_IMPORTED_MODULE_12__["MaterialGComponent"],
                _pages_material_l_material_l_component__WEBPACK_IMPORTED_MODULE_13__["MaterialLComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__["MatTabsModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_8__["MatChipsModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_9__["MatListModule"],
                primeng_card__WEBPACK_IMPORTED_MODULE_14__["CardModule"], primeng_button__WEBPACK_IMPORTED_MODULE_15__["ButtonModule"], primeng_tabview__WEBPACK_IMPORTED_MODULE_16__["TabViewModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/pages/material-g/material-g.component.css":
/*!***********************************************************!*\
  !*** ./src/app/pages/material-g/material-g.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header-outer-wrap{\r\n    background: #38474f;;\r\n    color: white;\r\n    box-shadow: -2px 8px 17px 0px rgba(0, 0, 0, 0.48);\r\n    z-index: 100;\r\n    position: relative;\r\n}\r\n.main-wrap{\r\n    background: #eeeeee;\r\n    min-height: 100vh;\r\n    height: 100%;\r\n}\r\n.menu{\r\n    max-width: 1200px;\r\n    left: 50%;\r\n    position: relative;\r\n    margin-left: -607px;\r\n}\r\n.logo{\r\n    font-size: 20px;\r\n    outline: 0;\r\n    padding: 0px 11px;\r\n    margin: 0 10px 0 0;\r\n    position: relative;\r\n    border-radius: 3px;\r\n    border: 3px solid transparent;\r\n    color: white;\r\n    cursor: pointer;\r\n    text-align: center;\r\n    background: #465a63;\r\n}\r\n.sing-in, .sing-up{\r\n    font-size: 16px;\r\n    outline: 0;\r\n    padding: 0px 11px;\r\n    margin: 0 10px 0 0;\r\n    position: relative;\r\n    border-radius: 3px;\r\n    border: 3px solid transparent;\r\n    color: white;\r\n    cursor: pointer;\r\n    text-align: center;\r\n    background: #465a63;\r\n    transition: all 0.2s;\r\n}\r\n.sing-in:hover, .sing-up:hover{\r\n    background: #79909b;\r\n    box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.5);\r\n}\r\n.menu-item{\r\n    font-family: \"Lato\", \"Lucida Grande\", \"Lucida Sans Unicode\", Tahoma, Sans-Serif;\r\n    font-weight: 900;\r\n    font-size: 16px;\r\n    transition: all 0.2s;\r\n    min-width: 120px;\r\n    text-align: center;\r\n    line-height: 58px;\r\n    cursor: pointer;\r\n}\r\n.menu-item:hover{\r\n    font-size: 20px;\r\n}\r\n.menu-item-active{\r\n    font-size: 20px;\r\n    border-bottom: 3px solid #0ebeff;\r\n}\r\n.card-img{\r\n    width: 200px;\r\n    height: 200px;\r\n    margin-right: 40px;\r\n    background: white;\r\n    border-radius: 4px;\r\n    overflow: hidden;\r\n}\r\n.card-img > img{\r\n    width: 100%;\r\n}\r\n.card-content-right{\r\n    width: calc(100% - 240px);\r\n}\r\n.details-wrap{\r\n    display: flex;\r\n    flex-flow: column;\r\n    justify-content: space-between;\r\n}\r\n.name{\r\n    font-size: 20px;\r\n    font-weight: 400;\r\n    margin-bottom: 5px;\r\n}\r\n.follow-btn > .button{\r\n    box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.5);\r\n    background: #1fbcd2;\r\n    color: white;\r\n    padding: 10px;\r\n    min-width: 120px;\r\n    font-size: 16px;\r\n    border-radius: 4px;\r\n    transition: all 0.2s;\r\n}\r\n.follow-btn > .button:hover{\r\n    box-shadow: 5px 5px 5px 0px rgba(0,0,0,0.5);\r\n}\r\n.follow-btn > .button:active{\r\n    box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.5);\r\n}\r\n.button-wrap > .button{\r\n    box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.5);\r\n    background: #7b8286;\r\n    color: rgb(255, 255, 255);\r\n    padding: 5px;\r\n    min-width: 160px;\r\n    font-size: 16px;\r\n    border-radius: 4px;\r\n    transition: all 0.2s;\r\n    margin-right: 10px;\r\n}\r\n.button-wrap > .button:hover{\r\n    box-shadow: 5px 5px 5px 0px rgba(0,0,0,0.5);\r\n}\r\n.button-wrap > .button:active{\r\n    box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.5);\r\n}\r\n.row-list{\r\n    margin-bottom: 5px;\r\n    margin-top: 5px;\r\n}\r\n.row-list > .img{\r\n    width: 40px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    padding-left: 20px;\r\n}\r\n.row-list > .img > img{\r\n    height: 40px;\r\n    margin-right: 20px;\r\n    max-width: 50px;\r\n}\r\n.row-list > .list-details{\r\n    margin-left: 10px;\r\n    color: rgb(0, 0, 0);\r\n}\r\n.label{\r\n    margin-bottom: 10px;\r\n}"

/***/ }),

/***/ "./src/app/pages/material-g/material-g.component.html":
/*!************************************************************!*\
  !*** ./src/app/pages/material-g/material-g.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-wrap\">\n    <mat-toolbar class=\"header-outer-wrap\">\n      <mat-toolbar-row>\n        <div class=\"header d-f ai-c full-w\">\n          <div class=\"logo\">\n            C\n          </div>\n          <div class=\"d-f jc-b ai-c full-w\">\n            <div class=\"menu d-f ai-c\">\n              <div class=\"menu-item\">\n                Home\n              </div>\n              <div class=\"menu-item\">\n                Topics\n              </div>\n              <div class=\"menu-item\">\n                Questions\n              </div>\n              <div class=\"menu-item menu-item-active\">\n                Ecosystem\n              </div>\n              <div class=\"menu-item\">\n                News\n              </div>\n            </div>\n            <div class=\"sing-wrap d-f ai-c\">\n              <div class=\"sing-in\">\n                Login\n              </div>\n              <div class=\"sing-up\">\n                Register\n              </div>\n            </div>\n          </div>\n        </div>\n    \n      </mat-toolbar-row>\n    \n    </mat-toolbar>\n    <mat-tab-group id=\"material-dark\" class=\"material-gray\">\n      <mat-tab label=\"Leaders\">\n        <mat-card id=\"card-material-dark-style\" class=\"card-material-gray-style\">\n          <div class=\"d-f\">\n            <div class=\"card-img\">\n              <img src=\"\\assets\\img\\male.jpg\" alt=\"\">\n            </div>\n            <div class=\"card-content-right d-f jc-b\">\n              <div class=\"details-wrap\">\n                <div class=\"text\">\n                  <div class=\"name\">\n                    Obinna Ukwuani\n                  </div>\n                  <div class=\"details\">\n                    Currently CEO at Hotels.ng Past - founded variouns technology startups.\n                    <div>\n                      Software Developer and Computer Engineer.\n                    </div>\n                  </div>\n                </div>\n                <div class=\"button-wrap\">\n                  <button class=\"button\">\n                    Entrepreneur\n                  </button>\n                  <button class=\"button\">\n                    Investor\n                  </button>\n                </div>\n              </div>\n              <div class=\"follow-btn\">\n                <button class=\"button\">\n                  Follow\n                </button>\n              </div>\n            </div>\n          </div>\n        </mat-card>\n        <mat-card class=\"card-material-gray-style\">\n          <mat-list role=\"list\">\n            <div class=\"name label\">\n              Organisations\n            </div>\n            <mat-list-item role=\"listitem\">\n              <div class=\"row-list d-f ai-c\">\n                <div class=\"img\">\n                  <img src=\"assets\\img\\icon-bootstrap.png\" alt=\"\">\n                </div>\n                <div class=\"list-details\">\n                  Bootstrap Inc (Co-Founder)\n                </div>\n              </div>\n            </mat-list-item>\n            <mat-list-item role=\"listitem\">\n              <div class=\"row-list d-f ai-c\">\n                <div class=\"img\">\n                  <img src=\"assets\\img\\angular-icon.png\" alt=\"\">\n                </div>\n                <div class=\"list-details\">\n                  Angocode Inc (CEO)\n                </div>\n              </div>\n            </mat-list-item>\n          </mat-list>\n        </mat-card>\n        <mat-card class=\"card-material-gray-style\">\n            <mat-list role=\"list\">\n              <div class=\"name label\">\n                Solutions\n              </div>\n              <mat-list-item role=\"listitem\">\n                <div class=\"row-list d-f ai-c\">\n                  <div class=\"img\">\n                    <img src=\"assets\\img\\climat-change.jpg\" alt=\"\">\n                  </div>\n                  <div class=\"list-details\">\n                    Climate Change (Bootstrap inc)\n                  </div>\n                </div>\n              </mat-list-item>\n            </mat-list>\n          </mat-card>\n        <mat-card class=\"card-material-gray-style\">\n          <div class=\"name label\">\n            Indastry\n          </div>\n          <mat-chip-list>\n            <mat-chip>Energy</mat-chip>\n            <mat-chip>Finance</mat-chip>\n            <mat-chip>Technology</mat-chip>\n          </mat-chip-list>\n    \n        </mat-card>\n        <mat-card class=\"card-material-gray-style\">\n            <mat-list role=\"list\">\n              <div class=\"name label\">\n                Locations\n              </div>\n              <mat-list-item role=\"listitem\">\n                <div class=\"row-list d-f ai-c\">\n                  <div class=\"img\">\n                    <img src=\"assets\\img\\nigeria.jpg\" alt=\"\">\n                  </div>\n                  <div class=\"list-details\">\n                    Nigeria\n                  </div>\n                </div>\n              </mat-list-item>\n              <mat-list-item role=\"listitem\">\n                <div class=\"row-list d-f ai-c\">\n                  <div class=\"img\">\n                    <img src=\"assets\\img\\usa.png\" alt=\"\">\n                  </div>\n                  <div class=\"list-details\">\n                    USA\n                  </div>\n                </div>\n              </mat-list-item>\n            </mat-list>\n          </mat-card>\n      </mat-tab>\n      <mat-tab label=\"Organisations\">\n        <mat-card class=\"card-material-gray-style\">Simple card</mat-card>\n        <mat-card class=\"card-material-gray-style\">Simple card</mat-card>\n      </mat-tab>\n      <mat-tab label=\"Sosutions\">\n        <mat-card class=\"card-material-gray-style\">Simple card</mat-card>\n        <mat-card class=\"card-material-gray-style\">Simple card</mat-card>\n        <mat-card class=\"card-material-gray-style\">Simple card</mat-card>\n      </mat-tab>\n      <mat-tab label=\"Locations\">\n        <mat-card class=\"card-material-gray-style\">Simple card</mat-card>\n        <mat-card class=\"card-material-gray-style\">Simple card</mat-card>\n        <mat-card class=\"card-material-gray-style\">Simple card</mat-card>\n        <mat-card class=\"card-material-gray-style\">Simple card</mat-card>\n      </mat-tab>\n    </mat-tab-group>\n    \n  </div>"

/***/ }),

/***/ "./src/app/pages/material-g/material-g.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/material-g/material-g.component.ts ***!
  \**********************************************************/
/*! exports provided: MaterialGComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialGComponent", function() { return MaterialGComponent; });
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

var MaterialGComponent = /** @class */ (function () {
    function MaterialGComponent() {
    }
    MaterialGComponent.prototype.ngOnInit = function () {
    };
    MaterialGComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-material-g',
            template: __webpack_require__(/*! ./material-g.component.html */ "./src/app/pages/material-g/material-g.component.html"),
            styles: [__webpack_require__(/*! ./material-g.component.css */ "./src/app/pages/material-g/material-g.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MaterialGComponent);
    return MaterialGComponent;
}());



/***/ }),

/***/ "./src/app/pages/material-l/material-l.component.css":
/*!***********************************************************!*\
  !*** ./src/app/pages/material-l/material-l.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/material-l/material-l.component.html":
/*!************************************************************!*\
  !*** ./src/app/pages/material-l/material-l.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  material-l works!\n</p>\n"

/***/ }),

/***/ "./src/app/pages/material-l/material-l.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/material-l/material-l.component.ts ***!
  \**********************************************************/
/*! exports provided: MaterialLComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialLComponent", function() { return MaterialLComponent; });
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

var MaterialLComponent = /** @class */ (function () {
    function MaterialLComponent() {
    }
    MaterialLComponent.prototype.ngOnInit = function () {
    };
    MaterialLComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-material-l',
            template: __webpack_require__(/*! ./material-l.component.html */ "./src/app/pages/material-l/material-l.component.html"),
            styles: [__webpack_require__(/*! ./material-l.component.css */ "./src/app/pages/material-l/material-l.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MaterialLComponent);
    return MaterialLComponent;
}());



/***/ }),

/***/ "./src/app/pages/material/material.component.css":
/*!*******************************************************!*\
  !*** ./src/app/pages/material/material.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header-outer-wrap{\r\n    background: black;\r\n    color: white;\r\n}\r\n.main-wrap{\r\n    background: #191a1d;\r\n    min-height: 100vh;\r\n    height: 100%;\r\n}\r\n.menu{\r\n    max-width: 1200px;\r\n    left: 50%;\r\n    position: relative;\r\n    margin-left: -607px;\r\n}\r\n.logo{\r\n    font-size: 20px;\r\n    outline: 0;\r\n    padding: 0px 11px;\r\n    margin: 0 10px 0 0;\r\n    position: relative;\r\n    border-radius: 3px;\r\n    border: 3px solid transparent;\r\n    color: white;\r\n    cursor: pointer;\r\n    text-align: center;\r\n    background: #36383f;\r\n}\r\n.sing-in, .sing-up{\r\n    font-size: 16px;\r\n    outline: 0;\r\n    padding: 0px 11px;\r\n    margin: 0 10px 0 0;\r\n    position: relative;\r\n    border-radius: 3px;\r\n    border: 3px solid transparent;\r\n    color: white;\r\n    cursor: pointer;\r\n    text-align: center;\r\n    background: #36383f;\r\n    transition: all 0.2s;\r\n}\r\n.sing-in:hover, .sing-up:hover{\r\n    background: #4e505a;\r\n}\r\n.menu-item{\r\n    font-family: \"Lato\", \"Lucida Grande\", \"Lucida Sans Unicode\", Tahoma, Sans-Serif;\r\n    font-weight: 900;\r\n    font-size: 16px;\r\n    transition: all 0.2s;\r\n    min-width: 120px;\r\n    text-align: center;\r\n    line-height: 58px;\r\n    cursor: pointer;\r\n}\r\n.menu-item:hover{\r\n    font-size: 20px;\r\n}\r\n.menu-item-active{\r\n    font-size: 20px;\r\n    border-bottom: 3px solid #0ebeff;\r\n}\r\n.card-img{\r\n    width: 200px;\r\n    height: 200px;\r\n    margin-right: 40px;\r\n    background: white;\r\n    border-radius: 4px;\r\n    overflow: hidden;\r\n}\r\n.card-img > img{\r\n    width: 100%;\r\n}\r\n.card-content-right{\r\n    width: calc(100% - 240px);\r\n}\r\n.details-wrap{\r\n    display: flex;\r\n    flex-flow: column;\r\n    justify-content: space-between;\r\n}\r\n.name{\r\n    font-size: 20px;\r\n    font-weight: 400;\r\n    margin-bottom: 5px;\r\n}\r\n.follow-btn > .button{\r\n    box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.5);\r\n    background: #1d87b9;\r\n    color: white;\r\n    padding: 10px;\r\n    min-width: 120px;\r\n    font-size: 16px;\r\n    border-radius: 4px;\r\n    transition: all 0.2s;\r\n}\r\n.follow-btn > .button:hover{\r\n    box-shadow: 5px 5px 5px 0px rgba(0,0,0,0.5);\r\n}\r\n.follow-btn > .button:active{\r\n    box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.5);\r\n}\r\n.button-wrap > .button{\r\n    box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.5);\r\n    background: #b0bec5;\r\n    color: rgb(0, 0, 0);\r\n    padding: 5px;\r\n    min-width: 160px;\r\n    font-size: 16px;\r\n    border-radius: 4px;\r\n    transition: all 0.2s;\r\n    margin-right: 10px;\r\n}\r\n.button-wrap > .button:hover{\r\n    box-shadow: 5px 5px 5px 0px rgba(0,0,0,0.5);\r\n}\r\n.button-wrap > .button:active{\r\n    box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.5);\r\n}\r\n.row-list{\r\n    margin-bottom: 5px;\r\n    margin-top: 5px;\r\n}\r\n.row-list > .img{\r\n    width: 40px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    padding-left: 20px;\r\n}\r\n.row-list > .img > img{\r\n    height: 40px;\r\n    margin-right: 20px;\r\n    max-width: 50px;\r\n}\r\n.row-list > .list-details{\r\n    margin-left: 10px;\r\n    color: white;\r\n}\r\n.label{\r\n    margin-bottom: 10px;\r\n}"

/***/ }),

/***/ "./src/app/pages/material/material.component.html":
/*!********************************************************!*\
  !*** ./src/app/pages/material/material.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-wrap\">\n  <mat-toolbar class=\"header-outer-wrap\">\n    <mat-toolbar-row>\n      <div class=\"header d-f ai-c full-w\">\n        <div class=\"logo\">\n          C\n        </div>\n        <div class=\"d-f jc-b ai-c full-w\">\n          <div class=\"menu d-f ai-c\">\n            <div class=\"menu-item\">\n              Home\n            </div>\n            <div class=\"menu-item\">\n              Topics\n            </div>\n            <div class=\"menu-item\">\n              Questions\n            </div>\n            <div class=\"menu-item menu-item-active\">\n              Ecosystem\n            </div>\n            <div class=\"menu-item\">\n              News\n            </div>\n          </div>\n          <div class=\"sing-wrap d-f ai-c\">\n            <div class=\"sing-in\">\n              Login\n            </div>\n            <div class=\"sing-up\">\n              Register\n            </div>\n          </div>\n        </div>\n      </div>\n  \n    </mat-toolbar-row>\n  \n  </mat-toolbar>\n  <mat-tab-group id=\"material-dark\" class=\"material-dark\">\n    <mat-tab label=\"Leaders\">\n      <mat-card id=\"card-material-dark-style\" class=\"card-material-dark-style\">\n        <div class=\"d-f\">\n          <div class=\"card-img\">\n            <img src=\"\\assets\\img\\male.jpg\" alt=\"\">\n          </div>\n          <div class=\"card-content-right d-f jc-b\">\n            <div class=\"details-wrap\">\n              <div class=\"text\">\n                <div class=\"name\">\n                  Obinna Ukwuani\n                </div>\n                <div class=\"details\">\n                  Currently CEO at Hotels.ng Past - founded variouns technology startups.\n                  <div>\n                    Software Developer and Computer Engineer.\n                  </div>\n                </div>\n              </div>\n              <div class=\"button-wrap\">\n                <button class=\"button\">\n                  Entrepreneur\n                </button>\n                <button class=\"button\">\n                  Investor\n                </button>\n              </div>\n            </div>\n            <div class=\"follow-btn\">\n              <button class=\"button\">\n                Follow\n              </button>\n            </div>\n          </div>\n        </div>\n      </mat-card>\n      <mat-card class=\"card-material-dark-style\">\n        <mat-list role=\"list\">\n          <div class=\"name label\">\n            Organisations\n          </div>\n          <mat-list-item role=\"listitem\">\n            <div class=\"row-list d-f ai-c\">\n              <div class=\"img\">\n                <img src=\"assets\\img\\icon-bootstrap.png\" alt=\"\">\n              </div>\n              <div class=\"list-details\">\n                Bootstrap Inc (Co-Founder)\n              </div>\n            </div>\n          </mat-list-item>\n          <mat-list-item role=\"listitem\">\n            <div class=\"row-list d-f ai-c\">\n              <div class=\"img\">\n                <img src=\"assets\\img\\angular-icon.png\" alt=\"\">\n              </div>\n              <div class=\"list-details\">\n                Angocode Inc (CEO)\n              </div>\n            </div>\n          </mat-list-item>\n        </mat-list>\n      </mat-card>\n      <mat-card class=\"card-material-dark-style\">\n          <mat-list role=\"list\">\n            <div class=\"name label\">\n              Solutions\n            </div>\n            <mat-list-item role=\"listitem\">\n              <div class=\"row-list d-f ai-c\">\n                <div class=\"img\">\n                  <img src=\"assets\\img\\climat-change.jpg\" alt=\"\">\n                </div>\n                <div class=\"list-details\">\n                  Climate Change (Bootstrap inc)\n                </div>\n              </div>\n            </mat-list-item>\n          </mat-list>\n        </mat-card>\n      <mat-card class=\"card-material-dark-style\">\n        <div class=\"name label\">\n          Indastry\n        </div>\n        <mat-chip-list>\n          <mat-chip>Energy</mat-chip>\n          <mat-chip>Finance</mat-chip>\n          <mat-chip>Technology</mat-chip>\n        </mat-chip-list>\n  \n      </mat-card>\n      <mat-card class=\"card-material-dark-style\">\n          <mat-list role=\"list\">\n            <div class=\"name label\">\n              Locations\n            </div>\n            <mat-list-item role=\"listitem\">\n              <div class=\"row-list d-f ai-c\">\n                <div class=\"img\">\n                  <img src=\"assets\\img\\nigeria.jpg\" alt=\"\">\n                </div>\n                <div class=\"list-details\">\n                  Nigeria\n                </div>\n              </div>\n            </mat-list-item>\n            <mat-list-item role=\"listitem\">\n              <div class=\"row-list d-f ai-c\">\n                <div class=\"img\">\n                  <img src=\"assets\\img\\usa.png\" alt=\"\">\n                </div>\n                <div class=\"list-details\">\n                  USA\n                </div>\n              </div>\n            </mat-list-item>\n          </mat-list>\n        </mat-card>\n    </mat-tab>\n    <mat-tab label=\"Organisations\">\n      <mat-card class=\"card-material-dark-style\">Simple card</mat-card>\n      <mat-card class=\"card-material-dark-style\">Simple card</mat-card>\n    </mat-tab>\n    <mat-tab label=\"Sosutions\">\n      <mat-card class=\"card-material-dark-style\">Simple card</mat-card>\n      <mat-card class=\"card-material-dark-style\">Simple card</mat-card>\n      <mat-card class=\"card-material-dark-style\">Simple card</mat-card>\n    </mat-tab>\n    <mat-tab label=\"Locations\">\n      <mat-card class=\"card-material-dark-style\">Simple card</mat-card>\n      <mat-card class=\"card-material-dark-style\">Simple card</mat-card>\n      <mat-card class=\"card-material-dark-style\">Simple card</mat-card>\n      <mat-card class=\"card-material-dark-style\">Simple card</mat-card>\n    </mat-tab>\n  </mat-tab-group>\n  \n</div>"

/***/ }),

/***/ "./src/app/pages/material/material.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/material/material.component.ts ***!
  \******************************************************/
/*! exports provided: MaterialComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialComponent", function() { return MaterialComponent; });
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

var MaterialComponent = /** @class */ (function () {
    function MaterialComponent() {
    }
    MaterialComponent.prototype.ngOnInit = function () {
    };
    MaterialComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-material',
            template: __webpack_require__(/*! ./material.component.html */ "./src/app/pages/material/material.component.html"),
            styles: [__webpack_require__(/*! ./material.component.css */ "./src/app/pages/material/material.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MaterialComponent);
    return MaterialComponent;
}());



/***/ }),

/***/ "./src/app/pages/prime/prime.component.css":
/*!*************************************************!*\
  !*** ./src/app/pages/prime/prime.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header {\r\n    background: black;\r\n    color: white;\r\n    padding: 0 16px;\r\n}\r\n.main-wrap{\r\n    background: #191a1d;\r\n    min-height: 100vh;\r\n    height: 100%;\r\n}\r\n.menu{\r\n    max-width: 1200px;\r\n    left: 50%;\r\n    position: relative;\r\n    margin-left: -607px;\r\n}\r\n.logo{\r\n    font-size: 20px;\r\n    outline: 0;\r\n    padding: 0px 11px;\r\n    margin: 0 10px 0 0;\r\n    position: relative;\r\n    border-radius: 3px;\r\n    border: 3px solid transparent;\r\n    color: white;\r\n    cursor: pointer;\r\n    text-align: center;\r\n    background: #36383f;\r\n}\r\n.sing-in, .sing-up{\r\n    font-size: 16px;\r\n    outline: 0;\r\n    padding: 0px 11px;\r\n    margin: 0 10px 0 0;\r\n    position: relative;\r\n    border-radius: 3px;\r\n    border: 3px solid transparent;\r\n    color: white;\r\n    cursor: pointer;\r\n    text-align: center;\r\n    background: #36383f;\r\n    transition: all 0.2s;\r\n}\r\n.sing-in:hover, .sing-up:hover{\r\n    background: #4e505a;\r\n}\r\n.menu-item{\r\n    font-family: \"Lato\", \"Lucida Grande\", \"Lucida Sans Unicode\", Tahoma, Sans-Serif;\r\n    font-weight: 900;\r\n    font-size: 16px;\r\n    transition: all 0.2s;\r\n    min-width: 120px;\r\n    text-align: center;\r\n    line-height: 58px;\r\n    cursor: pointer;\r\n}\r\n.menu-item:hover{\r\n    font-size: 20px;\r\n}\r\n.menu-item-active{\r\n    font-size: 20px;\r\n    border-bottom: 3px solid #0ebeff;\r\n}\r\n.card-img{\r\n    width: 200px;\r\n    height: 200px;\r\n    margin-right: 40px;\r\n    background: white;\r\n    border-radius: 4px;\r\n    overflow: hidden;\r\n}\r\n.card-img > img{\r\n    width: 100%;\r\n}\r\n.card-content-right{\r\n    width: calc(100% - 240px);\r\n}\r\n.details-wrap{\r\n    display: flex;\r\n    flex-flow: column;\r\n    justify-content: space-between;\r\n}\r\n.name{\r\n    font-size: 20px;\r\n    font-weight: 400;\r\n    margin-bottom: 5px;\r\n}\r\n.follow-btn > .button{\r\n    box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.5);\r\n    background: #1d87b9;\r\n    color: white;\r\n    padding: 10px;\r\n    min-width: 120px;\r\n    font-size: 16px;\r\n    border-radius: 4px;\r\n    transition: all 0.2s;\r\n}\r\n.follow-btn > .button:hover{\r\n    box-shadow: 5px 5px 5px 0px rgba(0,0,0,0.5);\r\n}\r\n.follow-btn > .button:active{\r\n    box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.5);\r\n}\r\n.button-wrap > .button{\r\n    box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.5);\r\n    background: #b0bec5;\r\n    color: rgb(0, 0, 0);\r\n    padding: 5px;\r\n    min-width: 160px;\r\n    font-size: 16px;\r\n    border-radius: 4px;\r\n    transition: all 0.2s;\r\n    margin-right: 10px;\r\n}\r\n.button-wrap > .button:hover{\r\n    box-shadow: 5px 5px 5px 0px rgba(0,0,0,0.5);\r\n}\r\n.button-wrap > .button:active{\r\n    box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.5);\r\n}\r\n.row-list{\r\n    margin-bottom: 10px;\r\n    margin-top: 10px;\r\n    padding-left: 10px;\r\n}\r\n.row-list > .img{\r\n    width: 40px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    padding-left: 20px;\r\n}\r\n.row-list > .img > img{\r\n    height: 40px;\r\n    margin-right: 20px;\r\n    max-width: 50px;\r\n}\r\n.row-list > .list-details{\r\n    margin-left: 20px;\r\n    color: rgb(0, 0, 0);\r\n}\r\n.label{\r\n    margin-bottom: 10px;\r\n}\r\n.indastry-list{\r\n    display: flex;\r\n}\r\n.indastry-list > div{\r\n    background: #ffffff;\r\n    margin: 4px;    \r\n    color: rgba(0,0,0,.87);\r\n    padding: 7px 12px;\r\n    border-radius: 24px;\r\n    align-items: center;\r\n    cursor: default;\r\n    font-size: 13px;\r\n    line-height: 18px;\r\n}"

/***/ }),

/***/ "./src/app/pages/prime/prime.component.html":
/*!**************************************************!*\
  !*** ./src/app/pages/prime/prime.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-wrap\">\n  \n<p-card class=\"prime-page\">\n    <p-header>\n        <div class=\"header d-f ai-c full-w\">\n            <div class=\"logo\">\n              C\n            </div>\n            <div class=\"d-f jc-b ai-c full-w\">\n              <div class=\"menu d-f ai-c\">\n                <div class=\"menu-item\">\n                  Home\n                </div>\n                <div class=\"menu-item\">\n                  Topics\n                </div>\n                <div class=\"menu-item\">\n                  Questions\n                </div>\n                <div class=\"menu-item menu-item-active\">\n                  Ecosystem\n                </div>\n                <div class=\"menu-item\">\n                  News\n                </div>\n              </div>\n              <div class=\"sing-wrap d-f ai-c\">\n                <div class=\"sing-in\">\n                  Login\n                </div>\n                <div class=\"sing-up\">\n                  Register\n                </div>\n              </div>\n            </div>\n          </div>\n    </p-header>\n    <p-tabView class=\"bg-gray-500\">\n      <p-tabPanel header=\"Leaders\">\n          <div class=\"card-material-gray-style\">\n              <div class=\"d-f\">\n                <div class=\"card-img\">\n                  <img src=\"\\assets\\img\\male.jpg\" alt=\"\">\n                </div>\n                <div class=\"card-content-right d-f jc-b\">\n                  <div class=\"details-wrap\">\n                    <div class=\"text\">\n                      <div class=\"name\">\n                        Obinna Ukwuani\n                      </div>\n                      <div class=\"details\">\n                        Currently CEO at Hotels.ng Past - founded variouns technology startups.\n                        <div>\n                          Software Developer and Computer Engineer.\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"button-wrap\">\n                      <button class=\"button\">\n                        Entrepreneur\n                      </button>\n                      <button class=\"button\">\n                        Investor\n                      </button>\n                    </div>\n                  </div>\n                  <div class=\"follow-btn\">\n                    <button class=\"button\">\n                      Follow\n                    </button>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"card-material-gray-style\">\n              <div>\n                <div class=\"name label\">\n                  Organisations\n                </div>\n                <div>\n                  <div class=\"row-list d-f ai-c\">\n                    <div class=\"img\">\n                      <img src=\"assets\\img\\icon-bootstrap.png\" alt=\"\">\n                    </div>\n                    <div class=\"list-details\">\n                      Bootstrap Inc (Co-Founder)\n                    </div>\n                  </div>\n                </div>\n                <div>\n                  <div class=\"row-list d-f ai-c\">\n                    <div class=\"img\">\n                      <img src=\"assets\\img\\angular-icon.png\" alt=\"\">\n                    </div>\n                    <div class=\"list-details\">\n                      Angocode Inc (CEO)\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n\n            <div class=\"card-material-gray-style\">\n              <div>\n                <div class=\"name label\">\n                  Solutions\n                </div>\n                <div>\n                  <div class=\"row-list d-f ai-c\">\n                    <div class=\"img\">\n                      <img src=\"assets\\img\\climat-change.jpg\" alt=\"\">\n                    </div>\n                    <div class=\"list-details\">\n                      Climate Change (Bootstrap inc)\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"card-material-gray-style\">\n              <div class=\"name label\">\n                Indastry\n              </div>\n              <div class=\"indastry-list\">\n                <div>Energy</div>\n                <div>Finance</div>\n                <div>Technology</div>\n              </div>\n            </div>\n            <div class=\"card-material-gray-style\">\n              <div>\n                <div class=\"name label\">\n                  Locations\n                </div>\n                <div>\n                  <div class=\"row-list d-f ai-c\">\n                    <div class=\"img\">\n                      <img src=\"assets\\img\\nigeria.jpg\" alt=\"\">\n                    </div>\n                    <div class=\"list-details\">\n                      Nigeria\n                    </div>\n                  </div>\n                </div>\n                <div>\n                  <div class=\"row-list d-f ai-c\">\n                    <div class=\"img\">\n                      <img src=\"assets\\img\\usa.png\" alt=\"\">\n                    </div>\n                    <div class=\"list-details\">\n                      USA\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n      </p-tabPanel>\n      <p-tabPanel header=\"Organisations\">\n        Content 2\n      </p-tabPanel>\n      <p-tabPanel header=\"Sosutions\">\n        Content 3\n      </p-tabPanel>\n      <p-tabPanel header=\"Locations\">\n        Content 3\n      </p-tabPanel>\n      \n    </p-tabView>\n    <!-- Body Content\n    <p-footer>\n      Footer content here\n    </p-footer> -->\n  </p-card>\n  \n</div>\n\n<!-- <p-button label=\"Click\" ></p-button><p-button label=\"Click\" ></p-button> -->"

/***/ }),

/***/ "./src/app/pages/prime/prime.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/prime/prime.component.ts ***!
  \************************************************/
/*! exports provided: PrimeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrimeComponent", function() { return PrimeComponent; });
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

var PrimeComponent = /** @class */ (function () {
    function PrimeComponent() {
    }
    PrimeComponent.prototype.ngOnInit = function () {
    };
    PrimeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-prime',
            template: __webpack_require__(/*! ./prime.component.html */ "./src/app/pages/prime/prime.component.html"),
            styles: [__webpack_require__(/*! ./prime.component.css */ "./src/app/pages/prime/prime.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PrimeComponent);
    return PrimeComponent;
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
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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

module.exports = __webpack_require__(/*! C:\Users\shumi\Documents\design\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map