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
/* harmony import */ var _main_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./main/dashboard/dashboard.component */ "./src/app/main/dashboard/dashboard.component.ts");





var routes = [
    {
        path: 'main',
        component: _main_main_component__WEBPACK_IMPORTED_MODULE_3__["MainComponent"],
        children: [
            { path: 'dashboard', component: _main_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"] }
        ]
    },
    { path: '', redirectTo: 'main/dashboard', pathMatch: 'full' }
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

module.exports = "<router-outlet></router-outlet> "

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
        this.title = 'walletly';
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
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/index.js");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");
/* harmony import */ var _main_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./main/dashboard/dashboard.component */ "./src/app/main/dashboard/dashboard.component.ts");









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _main_main_component__WEBPACK_IMPORTED_MODULE_7__["MainComponent"],
                _main_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__["DashboardComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbThemeModule"].forRoot({ name: 'default' }),
                _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbSidebarModule"].forRoot(),
                _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbMenuModule"].forRoot(),
                _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbLayoutModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbButtonModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbInputModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbCardModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/main/dashboard/dashboard.component.html":
/*!*********************************************************!*\
  !*** ./src/app/main/dashboard/dashboard.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nb-card>\n  <nb-card-body>\n    <div class=\"row\">\n      <div class=\"col-md-12 col-lg-6 col col-12\">\n        <h1 class=\"main-caption\">\n          Getting Started <br>\n          Walletly\n        </h1>\n        <p class=\"description\">\n          Lorem Ipsum is simply dummy text of the printing and\n          typesetting industry.\n        </p>\n        <div>\n          <button class=\"cust-button\" nbButton status=\"success\">\n            Create Walletly Card\n          </button>\n        </div>\n      </div>\n      <div class=\"col-md-12 col-lg-6 col col-12\">\n        <div class=\"video-wrap\">\n          <video>\n            Browser not supported\n          </video>\n          <div class=\"play\">\n            <span></span>\n          </div>\n        </div>\n      </div>\n    </div>\n  </nb-card-body>\n</nb-card>\n\n<nb-card>\n  <nb-card-body>\n    <div class=\"row\">\n      <div class=\"col-md-12 col-lg-6 col col-12\">\n        <h1>\n          Start a conversation <br>\n          and watch your <br>\n          engagement grow.\n        </h1>\n        <p class=\"description\">\n          Lorem Ipsum is simply dummy text of the printing and\n          typesetting industry.\n        </p>\n        <p class=\"description\">\n          Lorem Ipsum has been the industry's standard dummy text\n          ever since the 1500s,\n        </p>\n      </div>\n      <div class=\"col-md-12 col-lg-6 col col-baner col-12\">\n        <img width=\"100%\" style=\"margin-left: 5px;\" src=\"assets/img/charts.jpg\" alt=\"\">\n      </div>\n    </div>\n  </nb-card-body>\n</nb-card>"

/***/ }),

/***/ "./src/app/main/dashboard/dashboard.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/main/dashboard/dashboard.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-caption {\n  font-weight: 700;\n  font-size: 37px; }\n\n.description {\n  color: #ababab;\n  margin: 20px 0; }\n\n.col {\n  padding-right: 45px;\n  padding-left: 45px; }\n\n.col-baner {\n  padding-right: 0; }\n\n.video-wrap {\n  position: relative;\n  background: #f9fafc;\n  border-radius: 20px;\n  overflow: hidden;\n  box-shadow: inset 0 2px 12px 0 #dfe3eb; }\n\n.video-wrap video {\n    width: 100%; }\n\n.video-wrap .play {\n    width: 60px;\n    height: 60px;\n    cursor: pointer;\n    background: rgba(255, 255, 255, 0.6);\n    border-radius: 100px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    transition: all 0.3s;\n    position: absolute;\n    left: calc(50% - 30px);\n    top: calc(50% - 30px); }\n\n.video-wrap .play:hover {\n      background: white; }\n\n.video-wrap .play span {\n      width: 0;\n      height: 0;\n      border-style: solid;\n      border-width: 10px 0 10px 16px;\n      border-color: transparent transparent transparent #000000;\n      margin-right: -6px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9kYXNoYm9hcmQvQzpcXFRBU0tcXHdhbGxldGx5L3NyY1xcYXBwXFxtYWluXFxkYXNoYm9hcmRcXGRhc2hib2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixlQUFlLEVBQUE7O0FBRWpCO0VBQ0UsY0FBYztFQUNkLGNBQWMsRUFBQTs7QUFFaEI7RUFDRSxtQkFBbUI7RUFDbkIsa0JBQWtCLEVBQUE7O0FBRXBCO0VBQ0UsZ0JBQWdCLEVBQUE7O0FBRWxCO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLHNDQUFzQyxFQUFBOztBQUx4QztJQU9JLFdBQVcsRUFBQTs7QUFQZjtJQVVJLFdBQVc7SUFDWCxZQUFZO0lBQ1osZUFBZTtJQUNmLG9DQUFvQztJQUNwQyxvQkFBb0I7SUFDcEIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIscUJBQXFCLEVBQUE7O0FBckJ6QjtNQXVCTSxpQkFBa0MsRUFBQTs7QUF2QnhDO01BMEJNLFFBQVE7TUFDUixTQUFTO01BQ1QsbUJBQW1CO01BQ25CLDhCQUE4QjtNQUM5Qix5REFBeUQ7TUFDekQsa0JBQWtCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tYWluL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbi1jYXB0aW9uIHtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGZvbnQtc2l6ZTogMzdweDtcclxufVxyXG4uZGVzY3JpcHRpb24ge1xyXG4gIGNvbG9yOiAjYWJhYmFiO1xyXG4gIG1hcmdpbjogMjBweCAwO1xyXG59XHJcbi5jb2wge1xyXG4gIHBhZGRpbmctcmlnaHQ6IDQ1cHg7XHJcbiAgcGFkZGluZy1sZWZ0OiA0NXB4O1xyXG59XHJcbi5jb2wtYmFuZXIge1xyXG4gIHBhZGRpbmctcmlnaHQ6IDA7XHJcbn1cclxuLnZpZGVvLXdyYXAge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBiYWNrZ3JvdW5kOiAjZjlmYWZjO1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBib3gtc2hhZG93OiBpbnNldCAwIDJweCAxMnB4IDAgI2RmZTNlYjtcclxuICB2aWRlbyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgLnBsYXkge1xyXG4gICAgd2lkdGg6IDYwcHg7XHJcbiAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNik7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IGNhbGMoNTAlIC0gMzBweCk7XHJcbiAgICB0b3A6IGNhbGMoNTAlIC0gMzBweCk7XHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcclxuICAgIH1cclxuICAgIHNwYW4ge1xyXG4gICAgICB3aWR0aDogMDtcclxuICAgICAgaGVpZ2h0OiAwO1xyXG4gICAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgICBib3JkZXItd2lkdGg6IDEwcHggMCAxMHB4IDE2cHg7XHJcbiAgICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgIzAwMDAwMDtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAtNnB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/main/dashboard/dashboard.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/main/dashboard/dashboard.component.ts ***!
  \*******************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/main/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/main/dashboard/dashboard.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/main/main.component.html":
/*!******************************************!*\
  !*** ./src/app/main/main.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nb-layout>\r\n    <nb-sidebar>\r\n        <div class=\"side-wrap\">\r\n            <div class=\"top\">\r\n                <div class=\"logo\">\r\n                    WLLETLY\r\n                </div>\r\n                <nb-menu [items]=\"items\" autoCollapse=\"true\">\r\n                </nb-menu>\r\n                <div *ngIf=\"showSearchBox\">\r\n                    <div class=\"pos-r\">\r\n                        <input type=\"text\" nbInput fullWidth fieldSize=\"medium\" placeholder=\"Search\">\r\n                        <i class=\"nb-search input-icon\"></i>\r\n                    </div>\r\n                    <div class=\"menu-item\">\r\n                        <div class=\"icon\">\r\n\r\n                        </div>\r\n                        Rina Hepworth\r\n                    </div>\r\n                    <div class=\"menu-item add-page\">\r\n                        <div class=\"icon\">\r\n                            <i class=\"nb-plus\"></i>\r\n                        </div>\r\n                        Add New Page\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"bot\">\r\n                <div class=\"foot-menu-item\">\r\n                    <div class=\"icon user-icon\">\r\n                        <img src=\"https://upload.wikimedia.org/wikipedia/commons/3/38/Wikipedia_User-ICON_byNightsight.png\"\r\n                            alt=\"\">\r\n                    </div>\r\n                    <div>\r\n                        My Account\r\n                    </div>\r\n                </div>\r\n                <div class=\"foot-menu-item\">\r\n                    <div class=\"icon\">\r\n                        <i class=\"nb-info\"></i>\r\n                    </div>\r\n                    <div>\r\n                        Help\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </nb-sidebar>\r\n\r\n    <nb-layout-header subheader fixed>\r\n        <!-- <a href=\"#\" (click)=\"toggle()\">toogle</a> -->\r\n        <h3>\r\n            Welcome back rashid shairf!\r\n        </h3>\r\n    </nb-layout-header>\r\n\r\n    <nb-layout-column>\r\n        <router-outlet></router-outlet>\r\n    </nb-layout-column>\r\n\r\n    <nb-layout-footer fixed>\r\n        ®2019 Walletly Business, All rights reserved. Terms and Privacy\r\n    </nb-layout-footer>\r\n\r\n</nb-layout>"

/***/ }),

/***/ "./src/app/main/main.component.scss":
/*!******************************************!*\
  !*** ./src/app/main/main.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".logo {\n  height: 40px;\n  display: flex;\n  align-items: center;\n  padding-bottom: 20px; }\n\n.menu-item {\n  padding: 10px 0;\n  min-height: 60px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  font-size: 15px; }\n\n.menu-item .icon {\n    min-width: 40px;\n    width: 40px;\n    margin-right: 10px; }\n\n.menu-item.add-page {\n    color: #11ca6d;\n    font-size: 18px; }\n\n.menu-item.add-page .icon {\n      height: 40px;\n      width: 40px;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      border-radius: 100px;\n      background: #b8efd3;\n      border: 1px dashed;\n      font-size: 30px; }\n\n.side-wrap {\n  display: flex;\n  flex-flow: column;\n  justify-content: space-between;\n  height: 100%; }\n\n.bot {\n  margin: 0 -1.25rem 1rem; }\n\n.foot-menu-item {\n  padding: 10.8px 12px;\n  position: relative;\n  color: #ababab;\n  font-weight: 400;\n  display: flex;\n  align-items: center;\n  cursor: pointer; }\n\n.foot-menu-item:hover {\n    color: #2a2a2a;\n    font-weight: 600; }\n\n.foot-menu-item .icon {\n    width: 20px;\n    min-width: 20px;\n    margin: 0 0.25rem 0;\n    text-align: center; }\n\n.foot-menu-item .icon.user-icon {\n      border-radius: 100px;\n      overflow: hidden; }\n\n.foot-menu-item .icon.user-icon img {\n        width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9DOlxcVEFTS1xcd2FsbGV0bHkvc3JjXFxhcHBcXG1haW5cXG1haW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixvQkFBb0IsRUFBQTs7QUFFdEI7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGVBQWUsRUFBQTs7QUFOakI7SUFRSSxlQUFlO0lBQ2YsV0FBVztJQUNYLGtCQUFrQixFQUFBOztBQVZ0QjtJQWFJLGNBQXdCO0lBQ3hCLGVBQWUsRUFBQTs7QUFkbkI7TUFnQk0sWUFBWTtNQUNaLFdBQVc7TUFDWCxhQUFhO01BQ2IsbUJBQW1CO01BQ25CLHVCQUF1QjtNQUN2QixvQkFBb0I7TUFDcEIsbUJBQThCO01BQzlCLGtCQUFrQjtNQUNsQixlQUFlLEVBQUE7O0FBSXJCO0VBQ0UsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQiw4QkFBOEI7RUFDOUIsWUFBWSxFQUFBOztBQUVkO0VBQ0UsdUJBQXVCLEVBQUE7O0FBRXpCO0VBQ0Usb0JBQW9CO0VBQ3BCLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsZUFBZSxFQUFBOztBQVBqQjtJQVNJLGNBQWM7SUFDZCxnQkFBZ0IsRUFBQTs7QUFWcEI7SUFhSSxXQUFXO0lBQ1gsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixrQkFBa0IsRUFBQTs7QUFoQnRCO01Ba0JNLG9CQUFvQjtNQUNwQixnQkFBZ0IsRUFBQTs7QUFuQnRCO1FBcUJRLFdBQVcsRUFBQSIsImZpbGUiOiJzcmMvYXBwL21haW4vbWFpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dvIHtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG59XHJcbi5tZW51LWl0ZW0ge1xyXG4gIHBhZGRpbmc6IDEwcHggMDtcclxuICBtaW4taGVpZ2h0OiA2MHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIC5pY29uIHtcclxuICAgIG1pbi13aWR0aDogNDBweDtcclxuICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gIH1cclxuICAmLmFkZC1wYWdlIHtcclxuICAgIGNvbG9yOiByZ2IoMTcsIDIwMiwgMTA5KTtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIC5pY29uIHtcclxuICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICB3aWR0aDogNDBweDtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xyXG4gICAgICBiYWNrZ3JvdW5kOiByZ2IoMTg0LCAyMzksIDIxMSk7XHJcbiAgICAgIGJvcmRlcjogMXB4IGRhc2hlZDtcclxuICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4uc2lkZS13cmFwIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZmxvdzogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuLmJvdCB7XHJcbiAgbWFyZ2luOiAwIC0xLjI1cmVtIDFyZW07XHJcbn1cclxuLmZvb3QtbWVudS1pdGVtIHtcclxuICBwYWRkaW5nOiAxMC44cHggMTJweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgY29sb3I6ICNhYmFiYWI7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICY6aG92ZXIge1xyXG4gICAgY29sb3I6ICMyYTJhMmE7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gIH1cclxuICAuaWNvbiB7XHJcbiAgICB3aWR0aDogMjBweDtcclxuICAgIG1pbi13aWR0aDogMjBweDtcclxuICAgIG1hcmdpbjogMCAwLjI1cmVtIDA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAmLnVzZXItaWNvbiB7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xyXG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICBpbWcge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

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
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/index.js");




var MainComponent = /** @class */ (function () {
    function MainComponent(sidebarService, menuService) {
        this.sidebarService = sidebarService;
        this.menuService = menuService;
        this.items = [
            {
                icon: 'nb-plus',
                title: 'SunnyMeats',
                expanded: true,
                children: [
                    {
                        title: 'Dashboard',
                        icon: 'nb-grid-a-outline',
                        link: [],
                    },
                    {
                        icon: 'nb-plus',
                        title: 'Templates',
                        link: [],
                    },
                    {
                        icon: 'nb-plus',
                        title: 'Campaign',
                        link: [],
                    },
                    {
                        icon: 'nb-plus',
                        title: 'Business',
                        link: [],
                    },
                    {
                        icon: 'nb-plus',
                        title: 'Bots Store',
                        link: [],
                    },
                    {
                        icon: 'nb-home',
                        title: 'Chat Bot QR',
                        link: [],
                    },
                    {
                        icon: 'nb-plus',
                        title: 'Settings',
                        link: [],
                    },
                ],
            },
        ];
        this.showSearchBox = false;
    }
    MainComponent.prototype.ngOnInit = function () {
        this.getSelectedItem();
    };
    MainComponent.prototype.toggle = function () {
        this.sidebarService.toggle(true);
        return false;
    };
    MainComponent.prototype.getSelectedItem = function () {
        var _this = this;
        this.menuService.onSubmenuToggle()
            .subscribe(function (menuBag) {
            _this.showSearchBox = !_this.showSearchBox;
        });
    };
    MainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-main',
            template: __webpack_require__(/*! ./main.component.html */ "./src/app/main/main.component.html"),
            styles: [__webpack_require__(/*! ./main.component.scss */ "./src/app/main/main.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbSidebarService"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbMenuService"]])
    ], MainComponent);
    return MainComponent;
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

module.exports = __webpack_require__(/*! C:\TASK\walletly\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map