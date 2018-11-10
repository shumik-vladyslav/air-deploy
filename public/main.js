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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _first_page_first_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./first-page/first-page.component */ "./src/app/first-page/first-page.component.ts");
/* harmony import */ var _second_page_second_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./second-page/second-page.component */ "./src/app/second-page/second-page.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: '', component: _first_page_first_page_component__WEBPACK_IMPORTED_MODULE_2__["FirstPageComponent"] },
    { path: 'second', component: _second_page_second_page_component__WEBPACK_IMPORTED_MODULE_3__["SecondPageComponent"] },
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

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-wrap\">\n  <mat-drawer-container class=\"example-container\" autosize>\n    <mat-drawer #drawer class=\"example-sidenav\" mode=\"side\">\n      <div class=\"bg\"></div>\n      <div class=\"side-content\">\n          \n      </div>\n    </mat-drawer>\n\n    <mat-drawer-content>\n\n      <mat-toolbar fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n        <div class=\"example-sidenav-content\">\n          <button class=\"header-button\" type=\"button\" mat-button (click)=\"drawer.toggle()\">\n            Toggle sidenav\n          </button>\n        </div>\n        <div>\n          <button class=\"header-button\" mat-button [matMenuTriggerFor]=\"menu\">Menu</button>\n          <mat-menu #menu=\"matMenu\">\n            <button mat-menu-item routerLink=\"/\">First Page</button>\n            <button mat-menu-item routerLink=\"/second\">Second Page</button>\n          </mat-menu>\n        </div>\n      </mat-toolbar>\n\n      <div class=\"main-content-wrap\">\n        <router-outlet></router-outlet>\n      </div>\n\n    </mat-drawer-content>\n\n  </mat-drawer-container>\n\n</div>\n\n\n<!-- <mat-card>\n  Main Theme:\n  <button mat-raised-button color=\"primary\">\n    Primary\n  </button>\n  <button mat-raised-button color=\"accent\">\n    Accent\n  </button>\n  <button mat-raised-button color=\"warn\">\n    Warning\n  </button>\n</mat-card>\n<mat-card class=\"alternate-theme\">\n  Alternate Theme:\n  <button mat-raised-button color=\"primary\">\n    Primary\n  </button>\n  <button mat-raised-button color=\"accent\">\n    Accent\n  </button>\n  <button mat-raised-button color=\"warn\">\n    Warning\n  </button>\n</mat-card> -->"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-wrap {\n  min-height: 100vh;\n  background: #fafafa; }\n\n.main-content-wrap {\n  margin: 10px 20px; }\n\n.bg {\n  background-image: url(https://phototour.pro/kcfinder/upload/images/Ladakh_Air/Air_Ladakh_2015_21.jpg);\n  background-repeat: no-repeat;\n  background-size: auto 100%;\n  -webkit-filter: blur(1px);\n  filter: blur(1px);\n  width: 100%;\n  height: 100%; }\n\n.example-sidenav {\n  min-width: 250px;\n  box-shadow: 2px 0px 7px 4px #00000063; }\n\n.side-content {\n  background: rgba(255, 255, 255, 0.74);\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  left: 0;\n  top: 0;\n  z-index: 1111111111; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFRBU0tcXHdpcmVmcmFtZS9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQWlCO0VBQ2pCLG9CQUFtQixFQUN0Qjs7QUFDRDtFQUNJLGtCQUFpQixFQUNwQjs7QUFDRDtFQUNJLHNHQUFxRztFQUNyRyw2QkFBNEI7RUFDNUIsMkJBQTBCO0VBQzFCLDBCQUF5QjtFQUN6QixrQkFBaUI7RUFDakIsWUFBVztFQUNYLGFBQVksRUFDZjs7QUFDRDtFQUNJLGlCQUFnQjtFQUNoQixzQ0FBcUMsRUFDeEM7O0FBQ0Q7RUFDSSxzQ0FBcUM7RUFDckMsWUFBVztFQUNYLGFBQVk7RUFDWixtQkFBa0I7RUFDbEIsUUFBTztFQUNQLE9BQU07RUFDTixvQkFBbUIsRUFDdEIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbi13cmFwe1xyXG4gICAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmFmYWZhO1xyXG59XHJcbi5tYWluLWNvbnRlbnQtd3JhcHtcclxuICAgIG1hcmdpbjogMTBweCAyMHB4O1xyXG59XHJcbi5iZ3tcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwczovL3Bob3RvdG91ci5wcm8va2NmaW5kZXIvdXBsb2FkL2ltYWdlcy9MYWRha2hfQWlyL0Fpcl9MYWRha2hfMjAxNV8yMS5qcGcpO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogYXV0byAxMDAlO1xyXG4gICAgLXdlYmtpdC1maWx0ZXI6IGJsdXIoMXB4KTtcclxuICAgIGZpbHRlcjogYmx1cigxcHgpO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuLmV4YW1wbGUtc2lkZW5hdntcclxuICAgIG1pbi13aWR0aDogMjUwcHg7XHJcbiAgICBib3gtc2hhZG93OiAycHggMHB4IDdweCA0cHggIzAwMDAwMDYzO1xyXG59XHJcbi5zaWRlLWNvbnRlbnR7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzQpO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgei1pbmRleDogMTExMTExMTExMTtcclxufSJdfQ== */"

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
        this.title = 'wireframe';
        this.showFiller = false;
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
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm5/sidenav.es5.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm5/menu.es5.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _first_page_first_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./first-page/first-page.component */ "./src/app/first-page/first-page.component.ts");
/* harmony import */ var _second_page_second_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./second-page/second-page.component */ "./src/app/second-page/second-page.component.ts");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/esm5/divider.es5.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm5/list.es5.js");
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
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _first_page_first_page_component__WEBPACK_IMPORTED_MODULE_10__["FirstPageComponent"],
                _second_page_second_page_component__WEBPACK_IMPORTED_MODULE_11__["SecondPageComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
                _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["MatMenuModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"],
                _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__["MatSidenavModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__["FlexLayoutModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_12__["MatTableModule"],
                _angular_material_divider__WEBPACK_IMPORTED_MODULE_13__["MatDividerModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_14__["MatListModule"]
            ],
            exports: [_angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTabsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["MatMenuModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"]],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/first-page/first-page.component.html":
/*!******************************************************!*\
  !*** ./src/app/first-page/first-page.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\" fxLayoutGap=\"20px\" fxLayout.sm=\"column\" fxLayout.sm=\"column\" fxLayout.xs=\"column\" fxLayoutAlign=\"space-between\">\n  <div fxFlex=\"1 1\">\n\n    <mat-card class=\"custome m-b-20\">STA Summary. Forman: Marry Foren</mat-card>\n\n    <mat-card class=\"custome fs-18 m-b-20\">Activity 1: Excavating for Fondatio</mat-card>\n\n    <table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8 full-width m-b-20\">\n\n      <ng-container matColumnDef=\"hh\">\n        <th mat-header-cell *matHeaderCellDef> HH# </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.hh}} </td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"name\">\n        <th mat-header-cell *matHeaderCellDef> Name </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"assigment\">\n        <th mat-header-cell *matHeaderCellDef> Assigment </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.assigment}} </td>\n      </ng-container>\n\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n\n    </table>\n\n    <mat-card class=\"custome fs-18 m-b-20\">Activity 2: Excavatinq for Fondatio</mat-card>\n\n    <table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8 full-width m-b-20\">\n\n      <ng-container matColumnDef=\"hh\">\n        <th mat-header-cell *matHeaderCellDef> HH# </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.hh}} </td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"name\">\n        <th mat-header-cell *matHeaderCellDef> Name </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"assigment\">\n        <th mat-header-cell *matHeaderCellDef> Assigment </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.assigment}} </td>\n      </ng-container>\n\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n\n    </table>\n\n    <mat-card class=\"custome a-200 fs-18 m-b-20\">\n      <mat-card-title>\n        Life Critical Activitie:\n      </mat-card-title>\n      <mat-list>\n        <mat-list-item>1. Life Critical Operation</mat-list-item>\n        <mat-divider></mat-divider>\n        <mat-list-item>2. Life Critical Operation</mat-list-item>\n      </mat-list>\n    </mat-card>\n\n  </div>\n  <div fxFlex=\"1 1\">\n    <mat-card class=\"custome m-b-20\">Emergency Logistic</mat-card>\n\n    <table mat-table [dataSource]=\"dataSourceLogistic\" class=\"mat-elevation-z8 full-width m-b-20\">\n\n      <ng-container matColumnDef=\"contact\">\n        <th mat-header-cell *matHeaderCellDef> Emergency Contacts </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.contact}} </td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"name\">\n        <th mat-header-cell *matHeaderCellDef> Name </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"number\">\n        <th mat-header-cell *matHeaderCellDef> Number </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.number}} </td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"radio\">\n        <th mat-header-cell *matHeaderCellDef> Radio </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.radio}} </td>\n      </ng-container>\n\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumnsLogistic\"></tr>\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumnsLogistic;\"></tr>\n\n    </table>\n\n    <mat-tab-group class=\"m-b-20\">\n      <mat-tab label=\"Site\">\n        \n        <img width=\"100%\" height=\"auto\" src=\"https://www.fivesquid.com/pics/t2/1444729815-46048-1-1.png\" alt=\"\">\n\n        <!-- <div style='overflow:hidden;height:auto; width:100%;'>\n          <div id='gmap_canvas' style='height:auto; width:100%;'></div>\n        </div> -->\n      </mat-tab>\n      <mat-tab label=\"Unit\">\n        2\n      </mat-tab>\n      <mat-tab label=\"CWA01\">\n        3\n      </mat-tab>\n    </mat-tab-group>\n\n    <mat-card class=\"custome a-200 fs-18 m-b-20\">\n      <mat-card-title>\n        Work Location:\n      </mat-card-title>\n      <mat-card-subtitle>\n        Warehouse\n      </mat-card-subtitle>\n      <mat-list>\n        <mat-list-item>West Laydown Yard</mat-list-item>\n        <mat-divider></mat-divider>\n        <mat-list-item>CWA01</mat-list-item>\n      </mat-list>\n    </mat-card>\n\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/first-page/first-page.component.scss":
/*!******************************************************!*\
  !*** ./src/app/first-page/first-page.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZpcnN0LXBhZ2UvZmlyc3QtcGFnZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/first-page/first-page.component.ts":
/*!****************************************************!*\
  !*** ./src/app/first-page/first-page.component.ts ***!
  \****************************************************/
/*! exports provided: FirstPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirstPageComponent", function() { return FirstPageComponent; });
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

var ELEMENT_DATA = [
    { hh: 1, name: 'Brian Orggg', assigment: 'Operator' },
    { hh: 1, name: 'Brian Orggg', assigment: 'Operator' },
    { hh: 1, name: 'Brian Orggg', assigment: 'Operator' },
    { hh: 1, name: 'Brian Orggg', assigment: 'Operator' },
    { hh: 1, name: 'Brian Orggg', assigment: 'Operator' },
    { hh: 1, name: 'Brian Orggg', assigment: 'Operator' },
    { hh: 1, name: 'Brian Orggg', assigment: 'Operator' },
];
var LOGISTIC_DATA = [
    { contact: 'SOW Emergency #1', name: 'Brian Orggg', number: '555-233-3434', radio: 'Chanel #1' },
    { contact: 'SOW Emergency #1', name: 'Brian Orggg', number: '555-233-3434', radio: 'Chanel #1' },
    { contact: 'SOW Emergency #1', name: 'Brian Orggg', number: '555-233-3434', radio: 'Chanel #1' },
    { contact: 'SOW Emergency #1', name: 'Brian Orggg', number: '555-233-3434', radio: 'Chanel #1' },
    { contact: 'SOW Emergency #1', name: 'Brian Orggg', number: '555-233-3434', radio: 'Chanel #1' },
    { contact: 'SOW Emergency #1', name: 'Brian Orggg', number: '555-233-3434', radio: 'Chanel #1' },
    { contact: 'SOW Emergency #1', name: 'Brian Orggg', number: '555-233-3434', radio: 'Chanel #1' },
];
var FirstPageComponent = /** @class */ (function () {
    function FirstPageComponent() {
        this.displayedColumns = ['hh', 'name', 'assigment'];
        this.displayedColumnsLogistic = ['contact', 'name', 'number', 'radio'];
        this.dataSource = ELEMENT_DATA;
        this.dataSourceLogistic = LOGISTIC_DATA;
    }
    FirstPageComponent.prototype.ngOnInit = function () {
    };
    FirstPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-first-page',
            template: __webpack_require__(/*! ./first-page.component.html */ "./src/app/first-page/first-page.component.html"),
            styles: [__webpack_require__(/*! ./first-page.component.scss */ "./src/app/first-page/first-page.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FirstPageComponent);
    return FirstPageComponent;
}());



/***/ }),

/***/ "./src/app/second-page/second-page.component.html":
/*!********************************************************!*\
  !*** ./src/app/second-page/second-page.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\" fxLayoutGap=\"20px\" fxLayout.sm=\"column\" fxLayout.xs=\"column\" fxLayoutAlign=\"space-between\">\n  <div fxFlex=\"1 1\">\n    <mat-card class=\"custome a-200 fs-18 m-b-20\">\n      <mat-card-title>\n        Reminders\n      </mat-card-title>\n      <mat-list>\n        <mat-list-item>\n          <span>\n            Permits, Inspections, Training, Licenses, Certifications\n          </span>\n        </mat-list-item>\n      </mat-list>\n    </mat-card>\n\n\n    <table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8 full-width m-b-20\">\n\n      <ng-container matColumnDef=\"number\">\n        <th mat-header-cell *matHeaderCellDef> Number</th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.number}} </td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"hazard\">\n        <th mat-header-cell *matHeaderCellDef> Hazard <button class=\"m-l-10\" mat-raised-button color=\"primary\">Add</button></th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.hazard}} </td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"controls\">\n        <th mat-header-cell *matHeaderCellDef> Controls </th>\n        <td mat-cell *matCellDef=\"let element\">\n          <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n            {{element.controls}}\n            <button class=\"m-l-10\" mat-raised-button color=\"primary\">Add</button>\n          </div>\n        </td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"required\">\n        <th mat-header-cell *matHeaderCellDef> Required </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.required}} </td>\n      </ng-container>\n\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n\n    </table>\n\n    <mat-card class=\"custome fs-18 m-b-10\">Error Precursors / Potential Iss</mat-card>\n\n    <mat-card class=\"custome fs-18 m-b-20\">\n      <mat-list>\n        <mat-list-item>\n          <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\" class=\"full-width\">\n            <mat-checkbox fxFlex=\"1 1\">Complacens</mat-checkbox>\n            <span fxFlex=\"1 1\">Lorem</span>\n          </div>\n        </mat-list-item>\n        <mat-list-item>\n          <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\" class=\"full-width\">\n            <mat-checkbox fxFlex=\"1 1\">Complacens</mat-checkbox>\n            <span fxFlex=\"1 1\">Lorem</span>\n          </div>\n        </mat-list-item>\n      </mat-list>\n    </mat-card>\n\n\n  </div>\n  <div fxFlex=\"1 1\">\n    <div fxLayout=\"row\" fxLayoutGap=\"10px\" fxLayout.xs=\"column\" fxLayoutAlign=\"space-between\">\n      <div fxFlex=\"1 1\">\n        <mat-card class=\"custome a-200 fs-18 m-b-20\">\n          <mat-card-title>\n            Equipment:\n          </mat-card-title>\n          <mat-list>\n            <mat-list-item>1. lorem</mat-list-item>\n            <mat-divider></mat-divider>\n            <mat-list-item>2. lorem</mat-list-item>\n            <mat-divider></mat-divider>\n            <mat-list-item>3. lorem</mat-list-item>\n            <mat-divider></mat-divider>\n            <mat-list-item>4. lorem</mat-list-item>\n          </mat-list>\n        </mat-card>\n      </div>\n      <div fxFlex=\"1 1\">\n        <mat-card class=\"custome a-200 fs-18 m-b-20\">\n          <mat-card-title>\n            Tools\n          </mat-card-title>\n          <mat-list>\n            <mat-list-item>1. lorem</mat-list-item>\n            <mat-divider></mat-divider>\n            <mat-list-item>2. lorem</mat-list-item>\n            <mat-divider></mat-divider>\n            <mat-list-item>3. lorem</mat-list-item>\n            <mat-divider></mat-divider>\n            <mat-list-item>4. lorem</mat-list-item>\n          </mat-list>\n        </mat-card>\n      </div>\n    </div>\n\n\n    <mat-card class=\"fs-18 m-b-5\" fxLayoutGap=\"10px\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n      <i class=\"material-icons\">\n        wb_cloudy\n      </i>\n      <span class=\"color-gray\">\n        Thunderstorm possible at 3:45am\n      </span>\n    </mat-card>\n\n    <table mat-table [dataSource]=\"dataSourceWeather\" class=\"mat-elevation-z8 full-width m-b-20\">\n\n      <ng-container matColumnDef=\"time\">\n        <th mat-header-cell *matHeaderCellDef> TIME</th>\n        <td mat-cell *matCellDef=\"let element\">\n          <div fxLayoutGap=\"10px\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n            <div>\n              <div>\n                {{element.time}} PM\n              </div>\n              <div class=\"color-gray fs-11 m-t-5\">\n                THU\n              </div>\n            </div>\n            <div>\n              <i class=\"material-icons fs-30 color-gray\">\n                wb_cloudy\n              </i>\n            </div>\n          </div>\n        </td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"description\">\n        <th mat-header-cell *matHeaderCellDef> DESCRIPTIO </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.description}} </td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"temp\">\n        <th mat-header-cell *matHeaderCellDef> TEMP </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.temp}}° </td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"feels\">\n        <th mat-header-cell *matHeaderCellDef> FEELS </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.feels}}° </td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"presip\">\n        <th mat-header-cell *matHeaderCellDef> PRESIP </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.presip}}% </td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"humidity\">\n        <th mat-header-cell *matHeaderCellDef> HUMIDITY </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.humidity}}% </td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"wind\">\n        <th mat-header-cell *matHeaderCellDef> WIND </th>\n        <td mat-cell *matCellDef=\"let element\"> S {{element.wind}} mph</td>\n      </ng-container>\n\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumnsWeather\"></tr>\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumnsWeather;\"></tr>\n\n    </table>\n\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/second-page/second-page.component.scss":
/*!********************************************************!*\
  !*** ./src/app/second-page/second-page.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlY29uZC1wYWdlL3NlY29uZC1wYWdlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/second-page/second-page.component.ts":
/*!******************************************************!*\
  !*** ./src/app/second-page/second-page.component.ts ***!
  \******************************************************/
/*! exports provided: SecondPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecondPageComponent", function() { return SecondPageComponent; });
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

var weather_DATA = [
    { time: '10:00', description: 'Clody', temp: 68, feels: 68, presip: 15, humidity: 74, wind: 12 },
    { time: '10:00', description: 'Clody', temp: 68, feels: 68, presip: 15, humidity: 74, wind: 12 },
    { time: '10:00', description: 'Clody', temp: 68, feels: 68, presip: 15, humidity: 74, wind: 12 },
    { time: '10:00', description: 'Clody', temp: 68, feels: 68, presip: 15, humidity: 74, wind: 12 },
    { time: '10:00', description: 'Clody', temp: 68, feels: 68, presip: 15, humidity: 74, wind: 12 },
    { time: '10:00', description: 'Clody', temp: 68, feels: 68, presip: 15, humidity: 74, wind: 12 },
];
var ELEMENT_DATA = [
    { number: 1, hazard: 'Hazard 1', controls: '1. Control 2', required: 'Name' },
    { number: 1, hazard: 'Hazard 1', controls: '1. Control 2', required: 'Name' },
    { number: 1, hazard: 'Hazard 1', controls: '1. Control 2', required: 'Name' },
    { number: 1, hazard: 'Hazard 1', controls: '1. Control 2', required: 'Name' },
    { number: 1, hazard: 'Hazard 1', controls: '1. Control 2', required: 'Name' },
    { number: 1, hazard: 'Hazard 1', controls: '1. Control 2', required: 'Name' },
];
var SecondPageComponent = /** @class */ (function () {
    function SecondPageComponent() {
        this.displayedColumns = ['number', 'hazard', 'controls', 'required'];
        this.displayedColumnsWeather = ['time', 'description', 'temp', 'feels', 'presip', 'humidity', 'wind'];
        this.dataSource = ELEMENT_DATA;
        this.dataSourceWeather = weather_DATA;
    }
    SecondPageComponent.prototype.ngOnInit = function () {
    };
    SecondPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-second-page',
            template: __webpack_require__(/*! ./second-page.component.html */ "./src/app/second-page/second-page.component.html"),
            styles: [__webpack_require__(/*! ./second-page.component.scss */ "./src/app/second-page/second-page.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SecondPageComponent);
    return SecondPageComponent;
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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);





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

module.exports = __webpack_require__(/*! C:\TASK\wireframe\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map