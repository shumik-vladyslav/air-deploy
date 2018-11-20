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
/* harmony import */ var _pages_pages_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/pages.component */ "./src/app/pages/pages.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', redirectTo: '/booking', pathMatch: 'full' },
    { path: 'booking', component: _pages_pages_component__WEBPACK_IMPORTED_MODULE_2__["PagesComponent"] }
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

module.exports = "<router-outlet></router-outlet>\n\n<!-- <div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col\">\n      1\n    </div>\n    <div class=\"col\">\n      2\n    </div>\n  </div>\n  <ng-datepicker [(ngModel)]=\"date\" isOpened=\"true\">\n  </ng-datepicker>\n</div> -->"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
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
/* harmony import */ var ng2_datepicker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-datepicker */ "./node_modules/ng2-datepicker/dist/bundles/ng2-datepicker.umd.js");
/* harmony import */ var ng2_datepicker__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng2_datepicker__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _pages_pages_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/pages.component */ "./src/app/pages/pages.component.ts");
/* harmony import */ var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/header/header.component */ "./src/app/shared/header/header.component.ts");
/* harmony import */ var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/footer/footer.component */ "./src/app/shared/footer/footer.component.ts");
/* harmony import */ var _shared_side_booking_side_booking_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/side-booking/side-booking.component */ "./src/app/shared/side-booking/side-booking.component.ts");
/* harmony import */ var _shared_card_result_card_result_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/card-result/card-result.component */ "./src/app/shared/card-result/card-result.component.ts");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "./node_modules/ngx-bootstrap/datepicker/fesm5/ngx-bootstrap-datepicker.js");
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
                _pages_pages_component__WEBPACK_IMPORTED_MODULE_5__["PagesComponent"],
                _shared_header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
                _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"],
                _shared_side_booking_side_booking_component__WEBPACK_IMPORTED_MODULE_8__["SideBookingComponent"],
                _shared_card_result_card_result_component__WEBPACK_IMPORTED_MODULE_9__["CardResultComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                ng2_datepicker__WEBPACK_IMPORTED_MODULE_4__["NgDatepickerModule"],
                ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_10__["BsDatepickerModule"].forRoot()
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/pages/pages.component.html":
/*!********************************************!*\
  !*** ./src/app/pages/pages.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n\n    <div>\n        <app-header></app-header>\n    </div>\n\n    <div class=\"content-wrap\">\n\n        <div class=\"\">\n\n            <div class=\"booking-wrap\">\n                <div class=\"header\">\n                    Book your car today\n                </div>\n                <div class=\"caption\">\n                    Book by Date\n                </div>\n                <div class=\"lable\">\n                    Pick-up Date:\n                </div>\n                <!-- <input type=\"text\" placeholder=\"Datepicker\" class=\"form-control\" bsDatepicker> -->\n                <div class=\"date-piker-wrap m-b-14\">\n                    <div class=\"arrow-date\"></div>\n                    <ng-datepicker [(ngModel)]=\"date\"></ng-datepicker>\n                </div>\n\n                <div class=\"drb-wrap m-b-14\">\n                    <div (click)=\"showTimeFrom = !showTimeFrom\" class=\"custom-button-drb\">\n                        <div class=\"arrow-date\"></div>\n                        {{timeFrom || 'Choose time'}}\n                    </div>\n                    <div *ngIf=\"showTimeFrom\" class=\"drb\">\n                        <div (click)=\"timeFrom = item.time; showTimeFrom = false\" class=\"drb-item text-center\" *ngFor=\"let item of timeDate\">\n                            {{item.time}}\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"lable\">\n                    Drop-off Date:\n                </div>\n                <div class=\"date-piker-wrap m-b-14\">\n                    <div class=\"arrow-date\"></div>\n                    <ng-datepicker [(ngModel)]=\"date\"></ng-datepicker>\n                </div>\n                <div class=\"drb-wrap m-b-14\">\n                    <div (click)=\"showTimeTo = !showTimeTo\" class=\"custom-button-drb\">\n                        <div class=\"arrow-date\"></div>\n                        {{timeTo || 'Choose time'}}\n                    </div>\n                    <div *ngIf=\"showTimeTo\" class=\"drb\">\n                        <div (click)=\"timeTo = item.time; showTimeTo = false\" class=\"drb-item text-center\" *ngFor=\"let item of timeDate\">\n                            {{item.time}}\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"m-b-38\">\n                    <button class=\"button-side\" (click)=\"showResults = !showResults\">\n                        See available Cars\n                    </button>\n                </div>\n\n                <div class=\"caption m-b-32\">\n                    book by car\n                </div>\n\n                <div class=\"drb-wrap m-b-24\">\n                    <div (click)=\"showCarList = !showCarList\" class=\"custom-button-drb\">\n                        <div class=\"arrow-date\"></div>\n                        {{carName || 'Choose your car'}}\n                    </div>\n                    <div *ngIf=\"showCarList\" class=\"drb\">\n                        <div (click)=\"carName = item.car; showCarList = false\" class=\"drb-item\" *ngFor=\"let item of carData\">\n                            {{item.car}}\n                        </div>\n                    </div>\n                </div>\n\n                <div>\n                    <button class=\"button-side\" (click)=\"showResults = !showResults\">\n                        See available Cars\n                    </button>\n                </div>\n\n            </div>\n        </div>\n        <div class=\"result\" [ngClass]=\"{'hideElement': !showResults, 'showElement': showResults}\">\n            <app-card-result></app-card-result>\n            <app-card-result></app-card-result>\n            <app-card-result></app-card-result>\n            <app-card-result></app-card-result>\n            <app-card-result></app-card-result>\n        </div>\n\n    </div>\n\n    <div>\n        <app-footer></app-footer>\n    </div>\n\n</div>"

/***/ }),

/***/ "./src/app/pages/pages.component.scss":
/*!********************************************!*\
  !*** ./src/app/pages/pages.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-content {\n  background: url('main-bg.jpg');\n  min-height: 100vh;\n  height: 100%;\n  background-repeat: no-repeat;\n  background-size: 100% auto;\n  background-position: center;\n  overflow-y: auto;\n  background-attachment: fixed; }\n\n.content-wrap {\n  display: flex;\n  overflow: hidden;\n  justify-content: flex-end; }\n\n.hideElement {\n  transition: all 0.5s;\n  width: 0;\n  -webkit-transform: translate3d(100%, 0, 0);\n          transform: translate3d(100%, 0, 0); }\n\n.showElement {\n  width: 100%;\n  transition: all 0.5s;\n  -webkit-transform: translate3d(0, 0, 0);\n          transform: translate3d(0, 0, 0); }\n\n.result {\n  background: #E5E5E5;\n  box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.25);\n  max-height: 735px;\n  overflow-y: auto; }\n\n.booking-wrap {\n  min-width: 360px;\n  width: 360px;\n  background: #28292B;\n  box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.25);\n  padding: 28px 16px 16px 24px; }\n\n.booking-wrap .header {\n    font-size: 18px;\n    text-align: center;\n    text-transform: uppercase;\n    color: #FFFFFF;\n    margin-bottom: 24px; }\n\n.booking-wrap .caption {\n    font-weight: 300;\n    font-size: 16px;\n    text-align: center;\n    text-transform: uppercase;\n    color: #FFFFFF;\n    margin-bottom: 20px; }\n\n.booking-wrap .lable {\n    font-weight: normal;\n    font-size: 16px;\n    color: #B09E8F;\n    margin-bottom: 12px; }\n\n.button-side {\n  height: 60px;\n  background: #927B62;\n  cursor: pointer;\n  border: none;\n  outline: none;\n  width: 100%;\n  color: white; }\n\n.drb-wrap {\n  position: relative; }\n\n.drb-wrap .custom-button-drb {\n    border: 1px solid rgba(146, 123, 98, 0.2) !important;\n    font-family: Lato;\n    font-weight: normal;\n    line-height: 10px;\n    font-size: 14px !important;\n    color: #FFFFFF;\n    background: no-repeat;\n    outline: none;\n    height: 46px;\n    width: 100% !important;\n    cursor: pointer;\n    padding: 5px 10px;\n    display: flex;\n    align-items: center;\n    position: relative; }\n\n.drb-wrap .custom-button-drb .arrow-date {\n      border: 0.25px solid white;\n      height: 10px;\n      width: 10px;\n      -webkit-transform: rotate(135deg);\n              transform: rotate(135deg);\n      border-left: 0;\n      border-bottom: 0;\n      position: absolute;\n      right: 16px;\n      top: 50%;\n      margin-top: -7px; }\n\n.drb-wrap .drb {\n    position: absolute;\n    top: 46px;\n    width: 100%;\n    background: #E5E5E5;\n    z-index: 1;\n    max-height: 239px;\n    overflow-y: auto; }\n\n.drb-wrap .drb .drb-item {\n      padding: 5px 10px;\n      cursor: pointer;\n      font-family: Lato;\n      font-weight: normal;\n      font-size: 14px;\n      color: #28292B; }\n\n.drb-wrap .drb .drb-item:hover {\n        background: #927B62;\n        color: white; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvQzpcXFRBU0tcXGNhci1yZW50L3NyY1xcYXBwXFxwYWdlc1xccGFnZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwrQkFBNkM7RUFDN0Msa0JBQWlCO0VBQ2pCLGFBQVk7RUFDWiw2QkFBNEI7RUFDNUIsMkJBQTBCO0VBQzFCLDRCQUEyQjtFQUMzQixpQkFBZ0I7RUFDaEIsNkJBQTRCLEVBQy9COztBQUNEO0VBQ0ksY0FBYTtFQUNiLGlCQUFnQjtFQUNoQiwwQkFBeUIsRUFDNUI7O0FBQ0Q7RUFDSSxxQkFBb0I7RUFDcEIsU0FBUTtFQUNSLDJDQUFrQztVQUFsQyxtQ0FBa0MsRUFDckM7O0FBVUQ7RUFDSSxZQUFXO0VBQ1gscUJBQW9CO0VBQ3BCLHdDQUErQjtVQUEvQixnQ0FBK0IsRUFDbEM7O0FBQ0Q7RUFDSSxvQkFBbUI7RUFDbkIsNkNBQTRDO0VBQzVDLGtCQUFpQjtFQUNqQixpQkFBZ0IsRUFDbkI7O0FBRUQ7RUFDSSxpQkFBZ0I7RUFDaEIsYUFBWTtFQUNaLG9CQUFtQjtFQUNuQiw2Q0FBNEM7RUFDNUMsNkJBQTRCLEVBc0IvQjs7QUEzQkQ7SUFPUSxnQkFBZTtJQUNmLG1CQUFrQjtJQUNsQiwwQkFBeUI7SUFDekIsZUFBYztJQUNkLG9CQUFtQixFQUN0Qjs7QUFaTDtJQWNRLGlCQUFnQjtJQUNoQixnQkFBZTtJQUNmLG1CQUFrQjtJQUNsQiwwQkFBeUI7SUFDekIsZUFBYztJQUNkLG9CQUFtQixFQUN0Qjs7QUFwQkw7SUFzQlEsb0JBQW1CO0lBQ25CLGdCQUFlO0lBQ2YsZUFBYztJQUNkLG9CQUFtQixFQUN0Qjs7QUFFTDtFQUNJLGFBQVk7RUFDWixvQkFBbUI7RUFDbkIsZ0JBQWU7RUFDZixhQUFZO0VBQ1osY0FBYTtFQUNiLFlBQVc7RUFDWCxhQUFZLEVBQ2Y7O0FBQ0Q7RUFDSSxtQkFBa0IsRUFtRHJCOztBQXBERDtJQUdRLHFEQUFvRDtJQUNwRCxrQkFBaUI7SUFDakIsb0JBQW1CO0lBQ25CLGtCQUFpQjtJQUNqQiwyQkFBMEI7SUFDMUIsZUFBYztJQUNkLHNCQUFxQjtJQUNyQixjQUFhO0lBQ2IsYUFBWTtJQUNaLHVCQUFzQjtJQUN0QixnQkFBZTtJQUNmLGtCQUFpQjtJQUNqQixjQUFhO0lBQ2Isb0JBQW1CO0lBQ25CLG1CQUFrQixFQWFyQjs7QUE5Qkw7TUFtQlksMkJBQXVDO01BQ3ZDLGFBQVk7TUFDWixZQUFXO01BQ1gsa0NBQXlCO2NBQXpCLDBCQUF5QjtNQUN6QixlQUFjO01BQ2QsaUJBQWdCO01BQ2hCLG1CQUFrQjtNQUNsQixZQUFXO01BQ1gsU0FBUTtNQUNSLGlCQUFnQixFQUNuQjs7QUE3QlQ7SUFnQ1EsbUJBQWtCO0lBQ2xCLFVBQVM7SUFDVCxZQUFXO0lBQ1gsb0JBQW1CO0lBQ25CLFdBQVU7SUFDVixrQkFBaUI7SUFDakIsaUJBQWdCLEVBYW5COztBQW5ETDtNQXdDWSxrQkFBaUI7TUFDakIsZ0JBQWU7TUFDZixrQkFBaUI7TUFDakIsb0JBQW1CO01BQ25CLGdCQUFlO01BQ2YsZUFBYyxFQUtqQjs7QUFsRFQ7UUErQ2dCLG9CQUFtQjtRQUNuQixhQUFZLEVBQ2YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wYWdlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluLWNvbnRlbnR7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vYXNzZXRzL2ltZy9tYWluLWJnLmpwZyk7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgYXV0bztcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xyXG59XHJcbi5jb250ZW50LXdyYXB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbn1cclxuLmhpZGVFbGVtZW50e1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XHJcbiAgICB3aWR0aDogMDtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTAwJSwgMCwgMCk7XHJcbn1cclxuLy8gLmhpZGVFbGVtZW50LWxlZnR7XHJcbi8vICAgICB3aWR0aDogMDtcclxuLy8gICAgIHRyYW5zaXRpb246IGFsbCAwLjVzO1xyXG4vLyAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTAwJSwgMCwgMCk7XHJcbi8vIH1cclxuLy8gLnNob3dFbGVtZW50LWxlZnR7XHJcbi8vICAgICB3aWR0aDogMTAwJTtcclxuLy8gICAgIHRyYW5zaXRpb246IGFsbCAwLjVzO1xyXG4vLyB9XHJcbi5zaG93RWxlbWVudHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xyXG59XHJcbi5yZXN1bHR7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRTVFNUU1O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDRweCAxNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XHJcbiAgICBtYXgtaGVpZ2h0OiA3MzVweDtcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbn1cclxuXHJcbi5ib29raW5nLXdyYXB7XHJcbiAgICBtaW4td2lkdGg6IDM2MHB4O1xyXG4gICAgd2lkdGg6IDM2MHB4O1xyXG4gICAgYmFja2dyb3VuZDogIzI4MjkyQjtcclxuICAgIGJveC1zaGFkb3c6IDBweCA0cHggMTRweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xyXG4gICAgcGFkZGluZzogMjhweCAxNnB4IDE2cHggMjRweDtcclxuICAgIC5oZWFkZXJ7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XHJcbiAgICB9XHJcbiAgICAuY2FwdGlvbntcclxuICAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICBjb2xvcjogI0ZGRkZGRjtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgfVxyXG4gICAgLmxhYmxle1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIGNvbG9yOiAjQjA5RThGO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEycHg7XHJcbiAgICB9XHJcbn1cclxuLmJ1dHRvbi1zaWRle1xyXG4gICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgYmFja2dyb3VuZDogIzkyN0I2MjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4uZHJiLXdyYXB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAuY3VzdG9tLWJ1dHRvbi1kcmJ7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxNDYsIDEyMywgOTgsIDAuMikgIWltcG9ydGFudDtcclxuICAgICAgICBmb250LWZhbWlseTogTGF0bztcclxuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxMHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IG5vLXJlcGVhdDtcclxuICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgIGhlaWdodDogNDZweDtcclxuICAgICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICBwYWRkaW5nOiA1cHggMTBweDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIC5hcnJvdy1kYXRle1xyXG4gICAgICAgICAgICBib3JkZXI6IDAuMjVweCBzb2xpZCByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTBweDtcclxuICAgICAgICAgICAgd2lkdGg6IDEwcHg7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDEzNWRlZyk7XHJcbiAgICAgICAgICAgIGJvcmRlci1sZWZ0OiAwO1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAwO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHJpZ2h0OiAxNnB4O1xyXG4gICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogLTdweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuZHJie1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDQ2cHg7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI0U1RTVFNTtcclxuICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgIG1heC1oZWlnaHQ6IDIzOXB4O1xyXG4gICAgICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICAgICAgLmRyYi1pdGVte1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA1cHggMTBweDtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogTGF0bztcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICBjb2xvcjogIzI4MjkyQjtcclxuICAgICAgICAgICAgJjpob3ZlcntcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICM5MjdCNjI7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/pages/pages.component.ts":
/*!******************************************!*\
  !*** ./src/app/pages/pages.component.ts ***!
  \******************************************/
/*! exports provided: PagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesComponent", function() { return PagesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var date_fns_locale_fr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns/locale/fr */ "./node_modules/date-fns/locale/fr/index.js");
/* harmony import */ var date_fns_locale_fr__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(date_fns_locale_fr__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PagesComponent = /** @class */ (function () {
    function PagesComponent() {
        this.showResults = false;
        this.date = new Date();
        this.carData = [
            { car: 'BMW' },
            { car: 'Audi' },
            { car: 'Lamborghini' },
            { car: 'Porshe' },
        ];
        this.timeDate = [
            { time: '09:00 PM' },
            { time: '09:30 PM' },
            { time: '10:00 PM' },
            { time: '10:30 PM' },
            { time: '11:00 PM' },
            { time: '11:30 PM' },
            { time: '12:00 PM' },
            { time: '12:30 PM' },
            { time: '13:00 PM' },
            { time: '14:00 PM' },
        ];
        this.options = {
            minYear: 1970,
            maxYear: 2030,
            displayFormat: 'MMM D[,] YYYY',
            barTitleFormat: 'MMMM YYYY',
            dayNamesFormat: 'dd',
            firstCalendarDay: 0,
            locale: date_fns_locale_fr__WEBPACK_IMPORTED_MODULE_1__,
            minDate: new Date(Date.now()),
            maxDate: new Date(Date.now()),
            barTitleIfEmpty: 'Click to select a date',
            placeholder: 'Click to select a date',
            addClass: 'form-control',
            addStyle: {},
            fieldId: 'my-date-picker',
            useEmptyBarTitle: false,
        };
    }
    PagesComponent.prototype.ngOnInit = function () {
    };
    PagesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pages',
            template: __webpack_require__(/*! ./pages.component.html */ "./src/app/pages/pages.component.html"),
            styles: [__webpack_require__(/*! ./pages.component.scss */ "./src/app/pages/pages.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PagesComponent);
    return PagesComponent;
}());



/***/ }),

/***/ "./src/app/shared/card-result/card-result.component.html":
/*!***************************************************************!*\
  !*** ./src/app/shared/card-result/card-result.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-wrap-card\">\n  <div class=\"img-wrap\">\n    <img src=\"assets/img/car/dhiva-krishna-463042-unsplash.png\" alt=\"\">\n  </div>\n  <div>\n    <div class=\"car-name\">\n      Lamborghini Huracán Spyder LP610-4\n    </div>\n    <div class=\"details\">\n      Designed to cut through the air and become one with the sky, the Huracán Spyder is the pinnacle of Italian hand\n      craftsmanship, a sports car concept elevated to the performance and sensation of a coupé.\n    </div>\n    <div class=\"row-list\">\n      <span>Engine</span>\n      <span>V12</span>\n    </div>\n\n    <div class=\"row-list\">\n      <span>Displacement</span>\n      <span>5.2 L</span>\n    </div>\n\n    <div class=\"row-list\">\n      <span>Horsepower</span>\n      <span>610</span>\n    </div>\n\n    <div class=\"row-list\">\n      <span>0-100km/h</span>\n      <span>3.4 secs</span>\n    </div>\n\n    <div class=\"row-list\">\n      <span>Top speed</span>\n      <span>324 km/h</span>\n    </div>\n  </div>\n  <div class=\"cost-wrap text-center\">\n    <div class=\"fs-18\">\n      Price for 1 day:\n    </div>\n    <div class=\"fs-30 m-b-32\">\n      ¥ 120,000\n    </div>\n    <div class=\"m-b-10\">\n      <button class=\"button-side\">\n        Book now\n      </button>\n    </div>\n    <div class=\"link-more\">\n      Or learn more about the car\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/shared/card-result/card-result.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/shared/card-result/card-result.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-wrap-card {\n  height: 100%;\n  width: 100%;\n  padding: 30px 30px 0 30px;\n  display: flex;\n  align-items: center;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content; }\n\n.row-list {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  border-bottom: 1px solid rgba(146, 123, 98, 0.1);\n  font-size: 14px; }\n\n.button-side {\n  height: 60px;\n  background: #927B62;\n  cursor: pointer;\n  border: none;\n  outline: none;\n  width: 100%;\n  color: white; }\n\n.link-more {\n  font-family: Lato;\n  font-size: 14px;\n  text-align: center;\n  -webkit-text-decoration-line: underline;\n          text-decoration-line: underline;\n  color: #28292B;\n  transition: all 0.3s; }\n\n.link-more:hover {\n    -webkit-text-decoration-line: none;\n            text-decoration-line: none; }\n\n.img-wrap {\n  min-width: 344px;\n  width: 344px;\n  height: 229px;\n  overflow: hidden;\n  margin-right: 21px; }\n\n.car-name {\n  font-size: 18px;\n  text-transform: uppercase;\n  color: #28292B;\n  margin-bottom: 12px; }\n\n.details {\n  font-size: 14px;\n  color: rgba(40, 41, 43, 0.6); }\n\n.cost-wrap {\n  min-width: 238px;\n  margin-left: 33px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NhcmQtcmVzdWx0L0M6XFxUQVNLXFxjYXItcmVudC9zcmNcXGFwcFxcc2hhcmVkXFxjYXJkLXJlc3VsdFxcY2FyZC1yZXN1bHQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFZO0VBQ1osWUFBVztFQUNYLDBCQUF5QjtFQUN6QixjQUFhO0VBQ2Isb0JBQW1CO0VBQ25CLDRCQUFtQjtFQUFuQix5QkFBbUI7RUFBbkIsb0JBQW1CLEVBQ3RCOztBQUNEO0VBQ0ksY0FBYTtFQUNiLG9CQUFtQjtFQUNuQiwrQkFBOEI7RUFDOUIsaURBQWdEO0VBQ2hELGdCQUFlLEVBQ2xCOztBQUNEO0VBQ0ksYUFBWTtFQUNaLG9CQUFtQjtFQUNuQixnQkFBZTtFQUNmLGFBQVk7RUFDWixjQUFhO0VBQ2IsWUFBVztFQUNYLGFBQVksRUFDZjs7QUFDRDtFQUNJLGtCQUFpQjtFQUNqQixnQkFBZTtFQUNmLG1CQUFrQjtFQUNsQix3Q0FBK0I7VUFBL0IsZ0NBQStCO0VBQy9CLGVBQWM7RUFDZCxxQkFBb0IsRUFJdkI7O0FBVkQ7SUFRUSxtQ0FBMEI7WUFBMUIsMkJBQTBCLEVBQzdCOztBQUdMO0VBQ0ksaUJBQWdCO0VBQ2hCLGFBQVk7RUFDWixjQUFhO0VBQ2IsaUJBQWdCO0VBQ2hCLG1CQUFrQixFQUlyQjs7QUFDRDtFQUNJLGdCQUFlO0VBQ2YsMEJBQXlCO0VBQ3pCLGVBQWM7RUFDZCxvQkFBbUIsRUFDdEI7O0FBQ0Q7RUFDSSxnQkFBZTtFQUNmLDZCQUE0QixFQUMvQjs7QUFDRDtFQUNJLGlCQUFnQjtFQUNoQixrQkFBaUIsRUFDcEIiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY2FyZC1yZXN1bHQvY2FyZC1yZXN1bHQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbi13cmFwLWNhcmR7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDMwcHggMzBweCAwIDMwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XHJcbn1cclxuLnJvdy1saXN0e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgxNDYsIDEyMywgOTgsIDAuMSk7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuLmJ1dHRvbi1zaWRle1xyXG4gICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgYmFja2dyb3VuZDogIzkyN0I2MjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4ubGluay1tb3Jle1xyXG4gICAgZm9udC1mYW1pbHk6IExhdG87XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB0ZXh0LWRlY29yYXRpb24tbGluZTogdW5kZXJsaW5lO1xyXG4gICAgY29sb3I6ICMyODI5MkI7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuICAgICY6aG92ZXJ7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uLWxpbmU6IG5vbmU7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5pbWctd3JhcHtcclxuICAgIG1pbi13aWR0aDogMzQ0cHg7XHJcbiAgICB3aWR0aDogMzQ0cHg7XHJcbiAgICBoZWlnaHQ6IDIyOXB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIG1hcmdpbi1yaWdodDogMjFweDtcclxuICAgIGltZ3tcclxuXHJcbiAgICB9XHJcbn1cclxuLmNhci1uYW1le1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGNvbG9yOiAjMjgyOTJCO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTJweDtcclxufVxyXG4uZGV0YWlsc3tcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGNvbG9yOiByZ2JhKDQwLCA0MSwgNDMsIDAuNik7XHJcbn1cclxuLmNvc3Qtd3JhcHtcclxuICAgIG1pbi13aWR0aDogMjM4cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMzNweDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/shared/card-result/card-result.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/shared/card-result/card-result.component.ts ***!
  \*************************************************************/
/*! exports provided: CardResultComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardResultComponent", function() { return CardResultComponent; });
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

var CardResultComponent = /** @class */ (function () {
    function CardResultComponent() {
    }
    CardResultComponent.prototype.ngOnInit = function () {
    };
    CardResultComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-card-result',
            template: __webpack_require__(/*! ./card-result.component.html */ "./src/app/shared/card-result/card-result.component.html"),
            styles: [__webpack_require__(/*! ./card-result.component.scss */ "./src/app/shared/card-result/card-result.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CardResultComponent);
    return CardResultComponent;
}());



/***/ }),

/***/ "./src/app/shared/footer/footer.component.html":
/*!*****************************************************!*\
  !*** ./src/app/shared/footer/footer.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"footer-wrap\">\n    © 2018 club velocita, Inc. All right reserved.\n</div>"

/***/ }),

/***/ "./src/app/shared/footer/footer.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/shared/footer/footer.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer-wrap {\n  padding: 30px 32px 30px 44px;\n  font-size: 14px;\n  text-align: right;\n  text-transform: capitalize;\n  color: #FFFFFF; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2Zvb3Rlci9DOlxcVEFTS1xcY2FyLXJlbnQvc3JjXFxhcHBcXHNoYXJlZFxcZm9vdGVyXFxmb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw2QkFBNEI7RUFDNUIsZ0JBQWU7RUFDZixrQkFBaUI7RUFDakIsMkJBQTBCO0VBQzFCLGVBQWMsRUFDakIiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb290ZXItd3JhcHtcclxuICAgIHBhZGRpbmc6IDMwcHggMzJweCAzMHB4IDQ0cHg7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgY29sb3I6ICNGRkZGRkY7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/shared/footer/footer.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
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

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/shared/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/shared/footer/footer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/shared/header/header.component.html":
/*!*****************************************************!*\
  !*** ./src/app/shared/header/header.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header-wrap\">\n  <div class=\"logo-wrap\">\n    <img src=\"assets/svg/logo.svg\" alt=\"\">\n  </div>\n  <div class=\"menu-wrap\">\n    <div class=\"menu-item\">\n      My cars\n    </div>\n    <div class=\"menu-item\">\n      My Bookings\n    </div>\n    <div class=\"menu-item\">\n      hi, Abdullah Alkhatib\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/shared/header/header.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/shared/header/header.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header-wrap {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 30px 32px 30px 44px; }\n  .header-wrap .logo-wrap {\n    cursor: pointer; }\n  .header-wrap .menu-wrap {\n    display: flex;\n    align-items: center; }\n  .header-wrap .menu-wrap .menu-item {\n      margin-left: 60px;\n      font-size: 16px;\n      text-align: right;\n      text-transform: uppercase;\n      color: #FFFFFF;\n      cursor: pointer; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2hlYWRlci9DOlxcVEFTS1xcY2FyLXJlbnQvc3JjXFxhcHBcXHNoYXJlZFxcaGVhZGVyXFxoZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFhO0VBQ2Isb0JBQW1CO0VBQ25CLCtCQUE4QjtFQUM5Qiw2QkFBNEIsRUFnQi9CO0VBcEJEO0lBTVEsZ0JBQWUsRUFDbEI7RUFQTDtJQVNRLGNBQWE7SUFDYixvQkFBbUIsRUFTdEI7RUFuQkw7TUFZWSxrQkFBaUI7TUFDakIsZ0JBQWU7TUFDZixrQkFBaUI7TUFDakIsMEJBQXlCO01BQ3pCLGVBQWM7TUFDZCxnQkFBZSxFQUNsQiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlci13cmFwe1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBwYWRkaW5nOiAzMHB4IDMycHggMzBweCA0NHB4O1xyXG4gICAgLmxvZ28td3JhcHtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcbiAgICAubWVudS13cmFwe1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAubWVudS1pdGVte1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogNjBweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICAgICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0= */"

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

/***/ "./src/app/shared/side-booking/side-booking.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/shared/side-booking/side-booking.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"booking-wrap\">\n  <div class=\"header\">\n    Book your car today\n  </div>\n  <div class=\"caption\">\n    Book by Date\n  </div>\n  <div class=\"lable\">\n    Pick-up Date:\n  </div>\n  <!-- <input type=\"text\" placeholder=\"Datepicker\" class=\"form-control\" bsDatepicker> -->\n  <div class=\"date-piker-wrap m-b-14\">\n    <div class=\"arrow-date\"></div>\n    <ng-datepicker [(ngModel)]=\"date\"></ng-datepicker>\n  </div>\n\n  <div class=\"drb-wrap m-b-14\">\n    <div (click)=\"showTimeFrom = !showTimeFrom\" class=\"custom-button-drb\">\n      <div class=\"arrow-date\"></div>\n      {{timeFrom || 'Choose time'}}\n    </div>\n    <div *ngIf=\"showTimeFrom\" class=\"drb\">\n      <div (click)=\"timeFrom = item.time; showTimeFrom = false\" class=\"drb-item text-center\" *ngFor=\"let item of timeDate\">\n        {{item.time}}\n      </div>\n    </div>\n  </div>\n\n  <div class=\"lable\">\n    Drop-off Date:\n  </div>\n  <div class=\"date-piker-wrap m-b-14\">\n    <div class=\"arrow-date\"></div>\n    <ng-datepicker [(ngModel)]=\"date\"></ng-datepicker>\n  </div>\n  <div class=\"drb-wrap m-b-14\">\n    <div (click)=\"showTimeTo = !showTimeTo\" class=\"custom-button-drb\">\n      <div class=\"arrow-date\"></div>\n      {{timeTo || 'Choose time'}}\n    </div>\n    <div *ngIf=\"showTimeTo\" class=\"drb\">\n      <div (click)=\"timeTo = item.time; showTimeTo = false\" class=\"drb-item text-center\" *ngFor=\"let item of timeDate\">\n        {{item.time}}\n      </div>\n    </div>\n  </div>\n\n  <div class=\"m-b-38\">\n    <button class=\"button-side\">\n      See available Cars\n    </button>\n  </div>\n\n  <div class=\"caption m-b-32\">\n    book by car\n  </div>\n\n  <div class=\"drb-wrap m-b-24\">\n    <div (click)=\"showCarList = !showCarList\" class=\"custom-button-drb\">\n      <div class=\"arrow-date\"></div>\n      {{carName || 'Choose your car'}}\n    </div>\n    <div *ngIf=\"showCarList\" class=\"drb\">\n      <div (click)=\"carName = item.car; showCarList = false\" class=\"drb-item\" *ngFor=\"let item of carData\">\n        {{item.car}}\n      </div>\n    </div>\n  </div>\n\n  <div>\n    <button class=\"button-side\">\n      See available Cars\n    </button>\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/shared/side-booking/side-booking.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/shared/side-booking/side-booking.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".booking-wrap {\n  min-width: 360px;\n  width: 360px;\n  background: #28292B;\n  box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.25);\n  padding: 28px 16px 16px 24px; }\n  .booking-wrap .header {\n    font-size: 18px;\n    text-align: center;\n    text-transform: uppercase;\n    color: #FFFFFF;\n    margin-bottom: 24px; }\n  .booking-wrap .caption {\n    font-weight: 300;\n    font-size: 16px;\n    text-align: center;\n    text-transform: uppercase;\n    color: #FFFFFF;\n    margin-bottom: 20px; }\n  .booking-wrap .lable {\n    font-weight: normal;\n    font-size: 16px;\n    color: #B09E8F;\n    margin-bottom: 12px; }\n  .button-side {\n  height: 60px;\n  background: #927B62;\n  cursor: pointer;\n  border: none;\n  outline: none;\n  width: 100%;\n  color: white; }\n  .drb-wrap {\n  position: relative; }\n  .drb-wrap .custom-button-drb {\n    border: 1px solid rgba(146, 123, 98, 0.2) !important;\n    font-family: Lato;\n    font-weight: normal;\n    line-height: 10px;\n    font-size: 14px !important;\n    color: #FFFFFF;\n    background: no-repeat;\n    outline: none;\n    height: 46px;\n    width: 100% !important;\n    cursor: pointer;\n    padding: 5px 10px;\n    display: flex;\n    align-items: center;\n    position: relative; }\n  .drb-wrap .custom-button-drb .arrow-date {\n      border: 0.25px solid white;\n      height: 10px;\n      width: 10px;\n      -webkit-transform: rotate(135deg);\n              transform: rotate(135deg);\n      border-left: 0;\n      border-bottom: 0;\n      position: absolute;\n      right: 16px;\n      top: 50%;\n      margin-top: -7px; }\n  .drb-wrap .drb {\n    position: absolute;\n    top: 46px;\n    width: 100%;\n    background: #E5E5E5;\n    z-index: 1;\n    max-height: 239px;\n    overflow-y: auto; }\n  .drb-wrap .drb .drb-item {\n      padding: 5px 10px;\n      cursor: pointer;\n      font-family: Lato;\n      font-weight: normal;\n      font-size: 14px;\n      color: #28292B; }\n  .drb-wrap .drb .drb-item:hover {\n        background: #927B62;\n        color: white; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3NpZGUtYm9va2luZy9DOlxcVEFTS1xcY2FyLXJlbnQvc3JjXFxhcHBcXHNoYXJlZFxcc2lkZS1ib29raW5nXFxzaWRlLWJvb2tpbmcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBZ0I7RUFDaEIsYUFBWTtFQUNaLG9CQUFtQjtFQUNuQiw2Q0FBNEM7RUFDNUMsNkJBQTRCLEVBc0IvQjtFQTNCRDtJQU9RLGdCQUFlO0lBQ2YsbUJBQWtCO0lBQ2xCLDBCQUF5QjtJQUN6QixlQUFjO0lBQ2Qsb0JBQW1CLEVBQ3RCO0VBWkw7SUFjUSxpQkFBZ0I7SUFDaEIsZ0JBQWU7SUFDZixtQkFBa0I7SUFDbEIsMEJBQXlCO0lBQ3pCLGVBQWM7SUFDZCxvQkFBbUIsRUFDdEI7RUFwQkw7SUFzQlEsb0JBQW1CO0lBQ25CLGdCQUFlO0lBQ2YsZUFBYztJQUNkLG9CQUFtQixFQUN0QjtFQUVMO0VBQ0ksYUFBWTtFQUNaLG9CQUFtQjtFQUNuQixnQkFBZTtFQUNmLGFBQVk7RUFDWixjQUFhO0VBQ2IsWUFBVztFQUNYLGFBQVksRUFDZjtFQUNEO0VBQ0ksbUJBQWtCLEVBbURyQjtFQXBERDtJQUdRLHFEQUFvRDtJQUNwRCxrQkFBaUI7SUFDakIsb0JBQW1CO0lBQ25CLGtCQUFpQjtJQUNqQiwyQkFBMEI7SUFDMUIsZUFBYztJQUNkLHNCQUFxQjtJQUNyQixjQUFhO0lBQ2IsYUFBWTtJQUNaLHVCQUFzQjtJQUN0QixnQkFBZTtJQUNmLGtCQUFpQjtJQUNqQixjQUFhO0lBQ2Isb0JBQW1CO0lBQ25CLG1CQUFrQixFQWFyQjtFQTlCTDtNQW1CWSwyQkFBdUM7TUFDdkMsYUFBWTtNQUNaLFlBQVc7TUFDWCxrQ0FBeUI7Y0FBekIsMEJBQXlCO01BQ3pCLGVBQWM7TUFDZCxpQkFBZ0I7TUFDaEIsbUJBQWtCO01BQ2xCLFlBQVc7TUFDWCxTQUFRO01BQ1IsaUJBQWdCLEVBQ25CO0VBN0JUO0lBZ0NRLG1CQUFrQjtJQUNsQixVQUFTO0lBQ1QsWUFBVztJQUNYLG9CQUFtQjtJQUNuQixXQUFVO0lBQ1Ysa0JBQWlCO0lBQ2pCLGlCQUFnQixFQWFuQjtFQW5ETDtNQXdDWSxrQkFBaUI7TUFDakIsZ0JBQWU7TUFDZixrQkFBaUI7TUFDakIsb0JBQW1CO01BQ25CLGdCQUFlO01BQ2YsZUFBYyxFQUtqQjtFQWxEVDtRQStDZ0Isb0JBQW1CO1FBQ25CLGFBQVksRUFDZiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9zaWRlLWJvb2tpbmcvc2lkZS1ib29raW5nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJvb2tpbmctd3JhcHtcclxuICAgIG1pbi13aWR0aDogMzYwcHg7XHJcbiAgICB3aWR0aDogMzYwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMjgyOTJCO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDRweCAxNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XHJcbiAgICBwYWRkaW5nOiAyOHB4IDE2cHggMTZweCAyNHB4O1xyXG4gICAgLmhlYWRlcntcclxuICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjRweDtcclxuICAgIH1cclxuICAgIC5jYXB0aW9ue1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICB9XHJcbiAgICAubGFibGV7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgY29sb3I6ICNCMDlFOEY7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTJweDtcclxuICAgIH1cclxufVxyXG4uYnV0dG9uLXNpZGV7XHJcbiAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjOTI3QjYyO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcbi5kcmItd3JhcHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIC5jdXN0b20tYnV0dG9uLWRyYntcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDE0NiwgMTIzLCA5OCwgMC4yKSAhaW1wb3J0YW50O1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBMYXRvO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICAgICAgYmFja2dyb3VuZDogbm8tcmVwZWF0O1xyXG4gICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgaGVpZ2h0OiA0NnB4O1xyXG4gICAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgLmFycm93LWRhdGV7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMC4yNXB4IHNvbGlkIHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgICB3aWR0aDogMTBweDtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMTM1ZGVnKTtcclxuICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IDA7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDA7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgcmlnaHQ6IDE2cHg7XHJcbiAgICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAtN3B4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5kcmJ7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogNDZweDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjRTVFNUU1O1xyXG4gICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgICAgbWF4LWhlaWdodDogMjM5cHg7XHJcbiAgICAgICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAgICAgICAuZHJiLWl0ZW17XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBMYXRvO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMjgyOTJCO1xyXG4gICAgICAgICAgICAmOmhvdmVye1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzkyN0I2MjtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/shared/side-booking/side-booking.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/shared/side-booking/side-booking.component.ts ***!
  \***************************************************************/
/*! exports provided: SideBookingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideBookingComponent", function() { return SideBookingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var date_fns_locale_fr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns/locale/fr */ "./node_modules/date-fns/locale/fr/index.js");
/* harmony import */ var date_fns_locale_fr__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(date_fns_locale_fr__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SideBookingComponent = /** @class */ (function () {
    function SideBookingComponent() {
        this.date = new Date();
        this.carData = [
            { car: 'BMW' },
            { car: 'Audi' },
            { car: 'Lamborghini' },
            { car: 'Porshe' },
        ];
        this.timeDate = [
            { time: '09:00 PM' },
            { time: '09:30 PM' },
            { time: '10:00 PM' },
            { time: '10:30 PM' },
            { time: '11:00 PM' },
            { time: '11:30 PM' },
            { time: '12:00 PM' },
            { time: '12:30 PM' },
            { time: '13:00 PM' },
            { time: '14:00 PM' },
        ];
        this.options = {
            minYear: 1970,
            maxYear: 2030,
            displayFormat: 'MMM D[,] YYYY',
            barTitleFormat: 'MMMM YYYY',
            dayNamesFormat: 'dd',
            firstCalendarDay: 0,
            locale: date_fns_locale_fr__WEBPACK_IMPORTED_MODULE_1__,
            minDate: new Date(Date.now()),
            maxDate: new Date(Date.now()),
            barTitleIfEmpty: 'Click to select a date',
            placeholder: 'Click to select a date',
            addClass: 'form-control',
            addStyle: {},
            fieldId: 'my-date-picker',
            useEmptyBarTitle: false,
        };
    }
    SideBookingComponent.prototype.ngOnInit = function () {
    };
    SideBookingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-side-booking',
            template: __webpack_require__(/*! ./side-booking.component.html */ "./src/app/shared/side-booking/side-booking.component.html"),
            styles: [__webpack_require__(/*! ./side-booking.component.scss */ "./src/app/shared/side-booking/side-booking.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SideBookingComponent);
    return SideBookingComponent;
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

module.exports = __webpack_require__(/*! C:\TASK\car-rent\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map