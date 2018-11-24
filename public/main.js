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
/* harmony import */ var ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-bootstrap/carousel */ "./node_modules/ngx-bootstrap/carousel/fesm5/ngx-bootstrap-carousel.js");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "./node_modules/ngx-bootstrap/datepicker/fesm5/ngx-bootstrap-datepicker.js");
/* harmony import */ var _shared_card_date_result_card_date_result_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shared/card-date-result/card-date-result.component */ "./src/app/shared/card-date-result/card-date-result.component.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
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
                _shared_card_result_card_result_component__WEBPACK_IMPORTED_MODULE_9__["CardResultComponent"],
                _shared_card_date_result_card_date_result_component__WEBPACK_IMPORTED_MODULE_12__["CardDateResultComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                ng2_datepicker__WEBPACK_IMPORTED_MODULE_4__["NgDatepickerModule"],
                ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_11__["BsDatepickerModule"].forRoot(),
                ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_13__["ModalModule"].forRoot(),
                ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_10__["CarouselModule"].forRoot()
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

module.exports = "<div class=\"main-content\">\n\n    <div>\n        <!-- <app-header></app-header> -->\n        <div class=\"header-wrap\">\n            <div class=\"logo-wrap\">\n                <img src=\"assets/svg/logo.svg\" alt=\"\">\n            </div>\n            <div class=\"menu-wrap\">\n                <div class=\"menu-item\" (click)=\"showMyCar()\">\n                    My cars\n                </div>\n                <div class=\"menu-item\" (click)=\"showBookingHistory()\">\n                    My Bookings\n                </div>\n                <div class=\"menu-item\" (click)=\"showUserInfo()\">\n                    hi, Abdullah Alkhatib\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"content-wrap\">\n\n\n        <app-side-booking [ngClass]=\"{'hideElement': showDetails, 'showElement': !showDetails}\" style=\"max-width: fit-content !important;\"\n            (showElement)=\"showElement($event)\"></app-side-booking>\n\n        <div class=\"edit-wrap\" [ngClass]=\"{'hideElement': !userInfo, 'showElement': userInfo}\">\n            <div class=\"top-row\">\n                <div class=\"lable\">\n                    Current Funds:\n                </div>\n                <div class=\"value\">\n                    <div>\n                        ¥ 120,000\n                    </div>\n                </div>\n                <div class=\"button-wrap\">\n                    <button class=\"button-side\">\n                        confirm booking\n                    </button>\n                </div>\n            </div>\n            <div class=\"user-info-wrap\">\n                <div class=\"row-edit border\">\n                    <div class=\"col-name\">\n                        Name\n                    </div>\n                    <div class=\"col-info\">\n                        Abdullah Al-Khatib\n                    </div>\n                    <div class=\"col-edit\">\n                        <span class=\"c-p\">\n                            EDIT\n                        </span>\n                    </div>\n                </div>\n                <div class=\"row-edit border\">\n                    <div class=\"col-name\">\n                        Email\n                    </div>\n                    <div class=\"col-info\">\n                        aki@tokyosupercars.com\n                    </div>\n                    <div class=\"col-edit\">\n                        <span class=\"c-p\">\n                            EDIT\n                        </span>\n                    </div>\n                </div>\n                <div class=\"row-edit border\">\n                    <div class=\"col-name\">\n                        Phone\n                    </div>\n                    <div class=\"col-info\">\n                        +818061339056\n                    </div>\n                    <div class=\"col-edit\">\n                        <span class=\"c-p\">\n                            EDIT\n                        </span>\n                    </div>\n                </div>\n                <div class=\"row-edit border\">\n                    <div class=\"col-name\">\n                        Address\n                    </div>\n                    <div class=\"col-info\">\n                        The Magnolia Garden Room 803 <br>\n                        1-23-6 Ebisu, Shibuya <br>\n                        Tokyo, Japan\n                    </div>\n                    <div class=\"col-edit\">\n                        <span class=\"c-p\">\n                            EDIT\n                        </span>\n                    </div>\n                </div>\n            </div>\n            <div class=\"fs-18 df ai-c jc-b m-t-45\">\n                <div class=\"link-view fs-18\">\n                    Sign out\n                </div>\n                <div>\n                    <span class=\"m-r-10\">Having Trouble?</span>\n                    <span class=\"link-view fs-18\">Contact us</span>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"car-booking-wrap\" [ngClass]=\"{'hideElement': !bookinHistory, 'showElement': bookinHistory}\">\n            <div class=\"m-b-40 fs-18 fw-600\">\n                BOOKING HISTORY\n            </div>\n            <div class=\"p-l-35 row-wrap\">\n                <div class=\"row-booking fw-600 fs-18\">\n                    <div class=\"col-status\">\n                        Status\n                    </div>\n                    <div class=\"col-car\">\n                        Car\n                    </div>\n                    <div class=\"col-date\">\n                        Date\n                    </div>\n                    <div class=\"col-actions\">\n\n                    </div>\n                </div>\n                <div class=\"row-booking border\">\n                    <div class=\"col-status\">\n                        Booking Requested\n                    </div>\n                    <div class=\"col-car\">\n                        Ferrari 458\n                        Italia\n                    </div>\n                    <div class=\"col-date\">\n                        Oct 23–28, 2018\n                    </div>\n                    <div class=\"col-actions\">\n\n                    </div>\n                </div>\n                <div class=\"row-booking border\">\n                    <div class=\"col-status\">\n                        Booking Rejected\n                    </div>\n                    <div class=\"col-car\">\n                        Ferrari 458\n                        Italia\n                    </div>\n                    <div class=\"col-date\">\n                        Sep 11–13, 2018\n                    </div>\n                    <div class=\"col-actions\">\n\n                    </div>\n                </div>\n                <div class=\"row-booking border\">\n                    <div class=\"col-status\">\n                        Confirmed\n                    </div>\n                    <div class=\"col-car\">\n                        Ferrari 458\n                        Italia\n                    </div>\n                    <div class=\"col-date\">\n                        Sep 02–03, 2018\n                    </div>\n                    <div class=\"col-actions\">\n                        <span class=\"link-view\">View Invoice</span>\n                    </div>\n                </div>\n                <div class=\"row-booking border\">\n                    <div class=\"col-status\">\n                        Confirmed\n                    </div>\n                    <div class=\"col-car\">\n                        Lamborghini Huracán\n                        Spyder LP610-4\n                    </div>\n                    <div class=\"col-date\">\n                        Jun 23–28, 2018\n                    </div>\n                    <div class=\"col-actions\">\n                        <span class=\"link-view\">View Invoice</span>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"car-booking-wrap\"  [ngClass]=\"{'hideElement': !myCar, 'showElement': myCar}\">\n            <div class=\"m-b-40 fs-18 fw-600\">\n                MY CAR BOOKINGS\n            </div>\n            <div class=\"p-l-35 row-wrap\">\n                <div class=\"row-booking fw-600 fs-18\">\n                    <div class=\"col-status\">\n                        Status\n                    </div>\n                    <div class=\"col-car\">\n                        Car\n                    </div>\n                    <div class=\"col-date\">\n                        Date\n                    </div>\n                    <div class=\"col-actions\">\n\n                    </div>\n                </div>\n                <div class=\"row-booking border\">\n                    <div class=\"col-status\">\n                        New Booking\n                    </div>\n                    <div class=\"col-car\">\n                        Ferrari 458\n                        Italia\n                    </div>\n                    <div class=\"col-date\">\n                        Oct 23–28, 2018\n                    </div>\n                    <div class=\"col-actions\">\n                        <div>\n                            <div class=\"df\">\n                                <button class=\"btn-action primary-bg\">\n                                    Accept\n                                </button>\n                                <button class=\"btn-action dark-bg\">\n                                    Decline\n                                </button>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"row-booking border\">\n                    <div class=\"col-status\">\n                        New Booking\n                    </div>\n                    <div class=\"col-car\">\n                        Ferrari 458\n                        Italia\n                    </div>\n                    <div class=\"col-date\">\n                        Nov 23–28, 2018\n                    </div>\n                    <div class=\"col-actions\">\n                        <div>\n                            <div class=\"df\">\n                                <button class=\"btn-action primary-bg\">\n                                    Accept\n                                </button>\n                                <button class=\"btn-action dark-bg\">\n                                    Decline\n                                </button>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"row-booking border\">\n                    <div class=\"col-status\">\n                        Declined\n                    </div>\n                    <div class=\"col-car\">\n                        Lamborghini Huracán\n                        Spyder LP610-4\n                    </div>\n                    <div class=\"col-date\">\n                        Sep 11–13, 2018\n                    </div>\n                    <div class=\"col-actions\">\n\n                    </div>\n                </div>\n                <div class=\"row-booking border\">\n                    <div class=\"col-status\">\n                        Accepted\n                    </div>\n                    <div class=\"col-car\">\n                        Aston Martin\n                        Vantage V12\n                    </div>\n                    <div class=\"col-date\">\n                        Sep 02–03, 2018\n                    </div>\n                    <div class=\"col-actions\">\n                        <span class=\"link-view\">View Invoice</span>\n                    </div>\n                </div>\n                <div class=\"row-booking border\">\n                    <div class=\"col-status\">\n                        Accepted\n                    </div>\n                    <div class=\"col-car\">\n                        Lamborghini Huracán\n                        Spyder LP610-4\n                    </div>\n                    <div class=\"col-date\">\n                        Jun 23–28, 2018\n                    </div>\n                    <div class=\"col-actions\">\n                        <span class=\"link-view\">View Invoice</span>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"details-main-wrap\" [ngClass]=\"{'hideElement': !showMoreResults || showResults, 'showElement': showMoreResults}\">\n            <div class=\"carousel-wrap\">\n                <carousel>\n                    <slide *ngFor=\"let item of dataSlide\">\n                        <div class=\"pos-r img-slide-wrap\">\n                            <img class=\"img-slide\" [src]=\"item.img\" alt=\"\">\n                        </div>\n                    </slide>\n                </carousel>\n            </div>\n            <div class=\"details-info-wrap\">\n                <div class=\"col-custome\">\n                    <div class=\"car-name\">\n                        Ferrari 458 ITALIA\n                    </div>\n                    <div class=\"details m-b-12\">\n                        Designed to cut through the air and become one with the sky, the Huracán Spyder is the pinnacle\n                        of Italian hand craftsmanship, a sports car concept elevated to the performance and sensation\n                        of a coupé.\n                        Designed to cut through the air and become one with the sky, the Huracán Spyder is the pinnacle\n                        of Italian hand craftsmanship, a sports car concept elevated to the performance and sensation\n                        of a coupé. esigned to cut through the air and become.\n                    </div>\n                </div>\n                <div class=\"col-custome\">\n\n                    <div class=\"row-list\">\n                        <span>Engine</span>\n                        <span>V12</span>\n                    </div>\n\n                    <div class=\"row-list\">\n                        <span>Displacement</span>\n                        <span>5.2 L</span>\n                    </div>\n\n                    <div class=\"row-list\">\n                        <span>Horsepower</span>\n                        <span>610</span>\n                    </div>\n\n                    <div class=\"row-list\">\n                        <span>0-100km/h</span>\n                        <span>3.4 secs</span>\n                    </div>\n\n                    <div class=\"row-list\">\n                        <span>Top speed</span>\n                        <span>324 km/h</span>\n                    </div>\n                    <div class=\"row-list\">\n                        <span>Engine Location</span>\n                        <span>Mid Engine</span>\n                    </div>\n                    <div class=\"row-list\">\n                        <span>Max torque</span>\n                        <span>540 Nm</span>\n                    </div>\n                    <div class=\"row-list\">\n                        <span>Transmission</span>\n                        <span>Dual-clutch, 7-speed F1</span>\n                    </div>\n                    <div class=\"row-list\">\n                        <span>Weight (kerb)</span>\n                        <span>1380 kg</span>\n                    </div>\n                </div>\n                <div class=\"col-custome\">\n                    <div class=\"fs-18 m-b-5 text-center\">\n                        Price for 1 day:\n                    </div>\n                    <div class=\"fs-30 m-b-10 text-center\">\n                        <div>\n                            ¥ 120,000\n                        </div>\n                    </div>\n\n                    <div class=\"m-b-10\">\n                        <button class=\"button-side\">\n                            confirm booking\n                        </button>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"df\" [ngClass]=\"{'hideElement': !showResults || showMoreResults, 'showElement': showResults}\">\n\n            <div *ngIf=\"resultsDay\" class=\"result\">\n                <app-card-result (showDetailsEmit)=\"showDetailsEmit($event)\"></app-card-result>\n                <app-card-result (showDetailsEmit)=\"showDetailsEmit($event)\"></app-card-result>\n                <app-card-result (showDetailsEmit)=\"showDetailsEmit($event)\"></app-card-result>\n                <app-card-result (showDetailsEmit)=\"showDetailsEmit($event)\"></app-card-result>\n                <app-card-result (showDetailsEmit)=\"showDetailsEmit($event)\"></app-card-result>\n\n            </div>\n            <div *ngIf=\"resultsCar\" class=\"result\">\n                <app-card-date-result (showDetailsEmit)=\"showDetailsEmit($event)\"></app-card-date-result>\n                <app-card-date-result (showDetailsEmit)=\"showDetailsEmit($event)\"></app-card-date-result>\n                <app-card-date-result (showDetailsEmit)=\"showDetailsEmit($event)\"></app-card-date-result>\n                <app-card-date-result (showDetailsEmit)=\"showDetailsEmit($event)\"></app-card-date-result>\n                <app-card-date-result (showDetailsEmit)=\"showDetailsEmit($event)\"></app-card-date-result>\n            </div>\n            <div class=\"bg-wrap\" [ngClass]=\"{'hideElementOpacity': !showDetails, 'showElementOpacity': showDetails}\"></div>\n            <div class=\"details-wrap\" [ngClass]=\"{'hideElement': !showDetails, 'showElement': showDetails}\">\n                <div class=\"img-wrap m-b-12\">\n                    <img src=\"assets/img/car/dhiva-krishna-463042-unsplash.png\" alt=\"\">\n                </div>\n                <div class=\"info m-b-10\">\n                    <div class=\"car-name\">\n                        Lamborghini Huracán Spyder LP610-4\n                    </div>\n                    <div class=\"details m-b-12\">\n                        Designed to cut through the air and become one with the sky, the Huracán Spyder is the\n                        pinnacle\n                        of\n                        Italian hand\n                        craftsmanship, a sports car concept elevated to the performance and sensation of a coupé.\n                    </div>\n                    <div class=\"row-list\">\n                        <span>Engine</span>\n                        <span>V12</span>\n                    </div>\n\n                    <div class=\"row-list\">\n                        <span>Displacement</span>\n                        <span>5.2 L</span>\n                    </div>\n\n                    <div class=\"row-list\">\n                        <span>Horsepower</span>\n                        <span>610</span>\n                    </div>\n\n                    <div class=\"row-list\">\n                        <span>0-100km/h</span>\n                        <span>3.4 secs</span>\n                    </div>\n\n                    <div class=\"row-list\">\n                        <span>Top speed</span>\n                        <span>324 km/h</span>\n                    </div>\n                </div>\n                <div class=\"cost-wrap text-center fs-14\">\n                    <div class=\"df ai-c jc-b\">\n                        <span>\n                            Pick-up Date:\n                        </span>\n                        <span>\n                            Pick-up Date:\n                        </span>\n                    </div>\n\n                    <div class=\"df ai-c jc-b\">\n                        <span>\n                            Sat 28 Sep 10:00 AM\n                        </span>\n                        <span>\n                            Mon 30 Sep 20:00 PM\n                        </span>\n                    </div>\n\n                    <div class=\"df ai-c jc-b fs-30 m-b-10\">\n                        <div>\n                            Total:\n                        </div>\n                        <div>\n                            ¥ 120,000\n                        </div>\n                    </div>\n\n                    <div class=\"m-b-10\">\n                        <button class=\"button-side\" (click)=\"showDetails = !showDetails; showMoreResults = true; showResults = false;\">\n                            confirm booking\n                        </button>\n                    </div>\n\n                </div>\n            </div>\n\n        </div>\n\n    </div>\n\n    <div>\n        <app-footer></app-footer>\n    </div>\n\n</div>"

/***/ }),

/***/ "./src/app/pages/pages.component.scss":
/*!********************************************!*\
  !*** ./src/app/pages/pages.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header-wrap {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 30px 32px 30px 44px; }\n  .header-wrap .logo-wrap {\n    cursor: pointer; }\n  .header-wrap .menu-wrap {\n    display: flex;\n    align-items: center; }\n  .header-wrap .menu-wrap .menu-item {\n      margin-left: 60px;\n      font-size: 16px;\n      text-align: right;\n      text-transform: uppercase;\n      color: #FFFFFF;\n      cursor: pointer; }\n  .main-content {\n  background: url(/assets/img/main-bg.jpg);\n  min-height: 100vh;\n  height: 100%;\n  background-repeat: no-repeat;\n  background-size: 100% auto;\n  background-position: center;\n  overflow-y: auto;\n  background-attachment: fixed; }\n  .content-wrap {\n  display: flex;\n  overflow: hidden;\n  justify-content: flex-end; }\n  .hideElement {\n  transition: all 0.5s;\n  width: 0 !important;\n  min-width: 0 !important;\n  -webkit-transform: translate3d(100%, 0, 0);\n          transform: translate3d(100%, 0, 0);\n  overflow: hidden;\n  padding: 0 !important;\n  white-space: nowrap; }\n  .showElement {\n  width: 100%;\n  transition: all 0.5s;\n  -webkit-transform: translate3d(0, 0, 0);\n          transform: translate3d(0, 0, 0); }\n  .result {\n  background: #E5E5E5;\n  box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.25);\n  max-height: 735px;\n  overflow-y: auto; }\n  .booking-wrap {\n  min-width: 360px;\n  width: 360px;\n  background: #28292B;\n  box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.25);\n  padding: 28px 16px 16px 24px;\n  white-space: nowrap; }\n  .booking-wrap .header {\n    font-size: 18px;\n    text-align: center;\n    text-transform: uppercase;\n    color: #FFFFFF;\n    margin-bottom: 24px; }\n  .booking-wrap .caption {\n    font-weight: 300;\n    font-size: 16px;\n    text-align: center;\n    text-transform: uppercase;\n    color: #FFFFFF;\n    margin-bottom: 20px; }\n  .booking-wrap .lable {\n    font-weight: normal;\n    font-size: 16px;\n    color: #B09E8F;\n    margin-bottom: 12px; }\n  .button-side {\n  height: 60px;\n  background: #927B62;\n  cursor: pointer;\n  border: none;\n  outline: none;\n  width: 100%;\n  color: white;\n  text-transform: uppercase; }\n  .drb-wrap {\n  position: relative; }\n  .drb-wrap .custom-button-drb {\n    border: 1px solid rgba(146, 123, 98, 0.2) !important;\n    font-family: Lato;\n    font-weight: normal;\n    line-height: 10px;\n    font-size: 14px !important;\n    color: #FFFFFF;\n    background: no-repeat;\n    outline: none;\n    height: 46px;\n    width: 100% !important;\n    cursor: pointer;\n    padding: 5px 10px;\n    display: flex;\n    align-items: center;\n    position: relative; }\n  .drb-wrap .custom-button-drb .arrow-date {\n      border: 0.25px solid white;\n      height: 10px;\n      width: 10px;\n      -webkit-transform: rotate(135deg);\n              transform: rotate(135deg);\n      border-left: 0;\n      border-bottom: 0;\n      position: absolute;\n      right: 16px;\n      top: 50%;\n      margin-top: -7px; }\n  .drb-wrap .drb {\n    position: absolute;\n    top: 46px;\n    width: 100%;\n    background: #E5E5E5;\n    z-index: 1;\n    max-height: 239px;\n    overflow-y: auto; }\n  .drb-wrap .drb .drb-item {\n      padding: 5px 10px;\n      cursor: pointer;\n      font-family: Lato;\n      font-weight: normal;\n      font-size: 14px;\n      color: #28292B; }\n  .drb-wrap .drb .drb-item:hover {\n        background: #927B62;\n        color: white; }\n  .details-wrap {\n  padding: 30px;\n  background: #E5E5E5;\n  width: 395px;\n  max-height: 735px; }\n  .details-wrap .info .car-name {\n    font-size: 18px;\n    text-transform: uppercase;\n    color: #28292B;\n    margin-bottom: 12px; }\n  .details-wrap .info .details {\n    font-size: 14px;\n    color: rgba(40, 41, 43, 0.6); }\n  .details-wrap .info .row-list {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    border-bottom: 1px solid rgba(146, 123, 98, 0.1);\n    font-size: 14px; }\n  .img-wrap {\n  height: 225px; }\n  .bg-wrap {\n  background: rgba(40, 41, 43, 0.5);\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%; }\n  .hideElementOpacity {\n  opacity: 0;\n  pointer-events: none;\n  transition: 0.5s; }\n  .showElementOpacity {\n  opacity: 1;\n  pointer-events: unset;\n  transition: 0.5s; }\n  .details-main-wrap {\n  width: 100%;\n  background: #E5E5E5;\n  box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.25); }\n  .details-main-wrap .carousel-wrap {\n    display: flex;\n    justify-content: center; }\n  .details-main-wrap .carousel-wrap carousel slide .img-slide-wrap {\n      width: 100%; }\n  .details-main-wrap .carousel-wrap carousel slide .img-slide-wrap .img-slide {\n        width: 100%;\n        height: auto;\n        max-width: 1080px;\n        max-height: 415px; }\n  .details-main-wrap .details-info-wrap {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 30px; }\n  .details-main-wrap .details-info-wrap .col-custome .car-name {\n      font-size: 18px;\n      text-transform: uppercase;\n      color: #28292B;\n      margin-bottom: 12px; }\n  .details-main-wrap .details-info-wrap .col-custome .details {\n      font-size: 14px;\n      color: rgba(40, 41, 43, 0.6); }\n  .details-main-wrap .details-info-wrap .col-custome .row-list {\n      display: flex;\n      align-items: center;\n      justify-content: space-between;\n      border-bottom: 1px solid rgba(146, 123, 98, 0.1);\n      font-size: 14px; }\n  .details-main-wrap .details-info-wrap .col-custome:nth-child(1) {\n      max-width: 326px;\n      width: 33%;\n      margin-right: 20px; }\n  .details-main-wrap .details-info-wrap .col-custome:nth-child(2) {\n      max-width: 360px;\n      width: 33%;\n      padding-top: 18px;\n      margin-right: 20px; }\n  .details-main-wrap .details-info-wrap .col-custome:nth-child(3) {\n      max-width: 228px;\n      width: 33%; }\n  .car-booking-wrap {\n  padding: 68px 87px 68px 50px;\n  background: #E5E5E5;\n  box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.25);\n  width: 100%; }\n  .car-booking-wrap .row-wrap .row-booking {\n    min-height: 46px;\n    font-size: 14px;\n    display: flex;\n    align-items: center;\n    justify-content: space-between; }\n  .car-booking-wrap .row-wrap .row-booking .col-status {\n      min-width: 110px;\n      padding-left: 15px;\n      width: calc(100% / 4 - 68px); }\n  .car-booking-wrap .row-wrap .row-booking .col-car {\n      min-width: 190px;\n      width: calc(100% / 4 + 100px); }\n  .car-booking-wrap .row-wrap .row-booking .col-date {\n      min-width: 110px;\n      width: calc(100% / 4 - 82px); }\n  .car-booking-wrap .row-wrap .row-booking .col-actions {\n      width: 280px;\n      text-align: right;\n      width: calc(100% / 4); }\n  .car-booking-wrap .row-wrap .row-booking.border {\n      border: 1px solid rgba(146, 123, 98, 0.2) !important;\n      border-bottom: none !important; }\n  .car-booking-wrap .row-wrap .row-booking.border:last-child {\n        border-bottom: 1px solid rgba(146, 123, 98, 0.2) !important; }\n  .btn-action {\n  width: 146px;\n  height: 44px;\n  background: #28292B;\n  font-size: 14px;\n  text-align: center;\n  text-transform: capitalize;\n  color: #FFFFFF;\n  transition: all 0.2s;\n  cursor: pointer;\n  margin-bottom: 0;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  border: none;\n  outline: none; }\n  .primary-bg {\n  background: #927B62; }\n  .dark-bg {\n  background: #28292B; }\n  .link-view {\n  font-size: 14px;\n  text-align: right;\n  -webkit-text-decoration-line: underline;\n          text-decoration-line: underline;\n  color: #927B62;\n  cursor: pointer;\n  transition: all 0.3s;\n  margin-right: 14px; }\n  .link-view:hover {\n    -webkit-text-decoration-line: none;\n            text-decoration-line: none; }\n  .edit-wrap {\n  padding: 0 86px;\n  background: #E5E5E5;\n  box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.25);\n  width: 100%; }\n  .edit-wrap .top-row {\n    display: flex;\n    align-items: center;\n    justify-content: flex-end;\n    margin-bottom: 50px;\n    margin-top: 130px; }\n  .edit-wrap .top-row .lable {\n      font-size: 18px;\n      text-align: right;\n      color: #28292B;\n      margin-right: 35px; }\n  .edit-wrap .top-row .value {\n      margin-right: 63px;\n      font-size: 30px;\n      text-align: right;\n      color: #28292B; }\n  .edit-wrap .user-info-wrap .row-edit {\n    min-height: 46px;\n    font-size: 14px;\n    display: flex;\n    justify-content: space-between;\n    padding-top: 11px;\n    padding-bottom: 11px; }\n  .edit-wrap .user-info-wrap .row-edit .col-name {\n      min-width: 135px;\n      padding-left: 15px;\n      width: calc(100% / 3 - 248px); }\n  .edit-wrap .user-info-wrap .row-edit .col-info {\n      min-width: 190px;\n      width: calc(100% / 3 + 219px); }\n  .edit-wrap .user-info-wrap .row-edit .col-edit {\n      min-width: 110px;\n      width: calc(100% / 3 - 82px);\n      text-align: right;\n      padding-right: 15px; }\n  .edit-wrap .user-info-wrap .row-edit.border {\n      border: 1px solid rgba(146, 123, 98, 0.2) !important;\n      border-bottom: none !important; }\n  .edit-wrap .user-info-wrap .row-edit.border:last-child {\n        border-bottom: 1px solid rgba(146, 123, 98, 0.2) !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvQzpcXFRBU0tcXGNhci1yZW50L3NyY1xcYXBwXFxwYWdlc1xccGFnZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFhO0VBQ2Isb0JBQW1CO0VBQ25CLCtCQUE4QjtFQUM5Qiw2QkFBNEIsRUFnQi9CO0VBcEJEO0lBTVEsZ0JBQWUsRUFDbEI7RUFQTDtJQVNRLGNBQWE7SUFDYixvQkFBbUIsRUFTdEI7RUFuQkw7TUFZWSxrQkFBaUI7TUFDakIsZ0JBQWU7TUFDZixrQkFBaUI7TUFDakIsMEJBQXlCO01BQ3pCLGVBQWM7TUFDZCxnQkFBZSxFQUNsQjtFQUlUO0VBQ0kseUNBQXdDO0VBQ3hDLGtCQUFpQjtFQUNqQixhQUFZO0VBQ1osNkJBQTRCO0VBQzVCLDJCQUEwQjtFQUMxQiw0QkFBMkI7RUFDM0IsaUJBQWdCO0VBQ2hCLDZCQUE0QixFQUMvQjtFQUNEO0VBQ0ksY0FBYTtFQUNiLGlCQUFnQjtFQUNoQiwwQkFBeUIsRUFDNUI7RUFDRDtFQUNJLHFCQUFvQjtFQUNwQixvQkFBbUI7RUFDbkIsd0JBQXVCO0VBQ3ZCLDJDQUFrQztVQUFsQyxtQ0FBa0M7RUFDbEMsaUJBQWdCO0VBQ2hCLHNCQUFxQjtFQUNyQixvQkFBbUIsRUFDdEI7RUFVRDtFQUNJLFlBQVc7RUFDWCxxQkFBb0I7RUFDcEIsd0NBQStCO1VBQS9CLGdDQUErQixFQUNsQztFQUNEO0VBQ0ksb0JBQW1CO0VBQ25CLDZDQUE0QztFQUM1QyxrQkFBaUI7RUFDakIsaUJBQWdCLEVBQ25CO0VBR0Q7RUFDSSxpQkFBZ0I7RUFDaEIsYUFBWTtFQUNaLG9CQUFtQjtFQUNuQiw2Q0FBNEM7RUFDNUMsNkJBQTRCO0VBQzVCLG9CQUFtQixFQXNCdEI7RUE1QkQ7SUFRUSxnQkFBZTtJQUNmLG1CQUFrQjtJQUNsQiwwQkFBeUI7SUFDekIsZUFBYztJQUNkLG9CQUFtQixFQUN0QjtFQWJMO0lBZVEsaUJBQWdCO0lBQ2hCLGdCQUFlO0lB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QWU7TUFDZixrQkFBaUI7TUFDakIsZUFBYyxFQUNqQjtFQXRCVDtJQTZCWSxpQkFBZ0I7SUFDaEIsZ0JBQWU7SUFDZixjQUFhO0lBQ2IsK0JBQThCO0lBQzlCLGtCQUFpQjtJQUNqQixxQkFBb0IsRUF3QnZCO0VBMURUO01Bb0NnQixpQkFBZ0I7TUFDaEIsbUJBQWtCO01BQ2xCLDhCQUE2QixFQUNoQztFQXZDYjtNQXlDZ0IsaUJBQWdCO01BQ2hCLDhCQUE2QixFQUNoQztFQTNDYjtNQTZDZ0IsaUJBQWdCO01BQ2hCLDZCQUE0QjtNQUM1QixrQkFBaUI7TUFDakIsb0JBQW1CLEVBRXRCO0VBbERiO01Bb0RnQixxREFBb0Q7TUFDcEQsK0JBQThCLEVBSWpDO0VBekRiO1FBdURvQiw0REFBMkQsRUFDOUQiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wYWdlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXItd3JhcHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgcGFkZGluZzogMzBweCAzMnB4IDMwcHggNDRweDtcclxuICAgIC5sb2dvLXdyYXB7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG4gICAgLm1lbnUtd3JhcHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgLm1lbnUtaXRlbXtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDYwcHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4ubWFpbi1jb250ZW50e1xyXG4gICAgYmFja2dyb3VuZDogdXJsKC9hc3NldHMvaW1nL21haW4tYmcuanBnKTtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSBhdXRvO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XHJcbn1cclxuLmNvbnRlbnQtd3JhcHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxufVxyXG4uaGlkZUVsZW1lbnR7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cztcclxuICAgIHdpZHRoOiAwICFpbXBvcnRhbnQ7XHJcbiAgICBtaW4td2lkdGg6IDAgIWltcG9ydGFudDtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTAwJSwgMCwgMCk7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxufVxyXG4vLyAuaGlkZUVsZW1lbnQtbGVmdHtcclxuLy8gICAgIHdpZHRoOiAwO1xyXG4vLyAgICAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XHJcbi8vICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMDAlLCAwLCAwKTtcclxuLy8gfVxyXG4vLyAuc2hvd0VsZW1lbnQtbGVmdHtcclxuLy8gICAgIHdpZHRoOiAxMDAlO1xyXG4vLyAgICAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XHJcbi8vIH1cclxuLnNob3dFbGVtZW50e1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cztcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XHJcbn1cclxuLnJlc3VsdHtcclxuICAgIGJhY2tncm91bmQ6ICNFNUU1RTU7XHJcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDE0cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcclxuICAgIG1heC1oZWlnaHQ6IDczNXB4O1xyXG4gICAgb3ZlcmZsb3cteTogYXV0bztcclxufVxyXG5cclxuXHJcbi5ib29raW5nLXdyYXB7XHJcbiAgICBtaW4td2lkdGg6IDM2MHB4O1xyXG4gICAgd2lkdGg6IDM2MHB4O1xyXG4gICAgYmFja2dyb3VuZDogIzI4MjkyQjtcclxuICAgIGJveC1zaGFkb3c6IDBweCA0cHggMTRweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xyXG4gICAgcGFkZGluZzogMjhweCAxNnB4IDE2cHggMjRweDtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAuaGVhZGVye1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICBjb2xvcjogI0ZGRkZGRjtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xyXG4gICAgfVxyXG4gICAgLmNhcHRpb257XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIH1cclxuICAgIC5sYWJsZXtcclxuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICBjb2xvcjogI0IwOUU4RjtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xyXG4gICAgfVxyXG59XHJcbi5idXR0b24tc2lkZXtcclxuICAgIGhlaWdodDogNjBweDtcclxuICAgIGJhY2tncm91bmQ6ICM5MjdCNjI7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcbi5kcmItd3JhcHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIC5jdXN0b20tYnV0dG9uLWRyYntcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDE0NiwgMTIzLCA5OCwgMC4yKSAhaW1wb3J0YW50O1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBMYXRvO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICAgICAgYmFja2dyb3VuZDogbm8tcmVwZWF0O1xyXG4gICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgaGVpZ2h0OiA0NnB4O1xyXG4gICAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgLmFycm93LWRhdGV7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMC4yNXB4IHNvbGlkIHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgICB3aWR0aDogMTBweDtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMTM1ZGVnKTtcclxuICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IDA7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDA7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgcmlnaHQ6IDE2cHg7XHJcbiAgICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAtN3B4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5kcmJ7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogNDZweDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjRTVFNUU1O1xyXG4gICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgICAgbWF4LWhlaWdodDogMjM5cHg7XHJcbiAgICAgICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAgICAgICAuZHJiLWl0ZW17XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBMYXRvO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMjgyOTJCO1xyXG4gICAgICAgICAgICAmOmhvdmVye1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzkyN0I2MjtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLmRldGFpbHMtd3JhcHtcclxuICAgIHBhZGRpbmc6IDMwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRTVFNUU1O1xyXG4gICAgd2lkdGg6IDM5NXB4O1xyXG4gICAgbWF4LWhlaWdodDogNzM1cHg7XHJcbiAgICAuaW5mb3tcclxuICAgICAgICAuY2FyLW5hbWV7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICAgICAgY29sb3I6ICMyODI5MkI7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEycHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5kZXRhaWxze1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiByZ2JhKDQwLCA0MSwgNDMsIDAuNik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5yb3ctbGlzdHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgxNDYsIDEyMywgOTgsIDAuMSk7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuLmltZy13cmFwe1xyXG4gICAgaGVpZ2h0OiAyMjVweDtcclxufVxyXG4uYmctd3JhcHtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoNDAsIDQxLCA0MywgMC41KTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG4uaGlkZUVsZW1lbnRPcGFjaXR5e1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgdHJhbnNpdGlvbjogMC41cztcclxufVxyXG4uc2hvd0VsZW1lbnRPcGFjaXR5e1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHBvaW50ZXItZXZlbnRzOiB1bnNldDtcclxuICAgIHRyYW5zaXRpb246IDAuNXM7XHJcbn1cclxuXHJcbi5kZXRhaWxzLW1haW4td3JhcHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZDogI0U1RTVFNTtcclxuICAgIGJveC1zaGFkb3c6IDBweCA0cHggMTRweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xyXG4gICAgLmNhcm91c2VsLXdyYXB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBjYXJvdXNlbHtcclxuICAgICAgICAgICAgc2xpZGV7XHJcbiAgICAgICAgICAgICAgICAuaW1nLXNsaWRlLXdyYXB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgLmltZy1zbGlkZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDgwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ6IDQxNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5kZXRhaWxzLWluZm8td3JhcHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIHBhZGRpbmc6IDMwcHg7XHJcbiAgICAgICAgLmNvbC1jdXN0b21le1xyXG4gICAgICAgICAgICAuY2FyLW5hbWV7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICMyODI5MkI7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5kZXRhaWxze1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHJnYmEoNDAsIDQxLCA0MywgMC42KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucm93LWxpc3R7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDE0NiwgMTIzLCA5OCwgMC4xKTtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmOm50aC1jaGlsZCgxKXtcclxuICAgICAgICAgICAgICAgIG1heC13aWR0aDogMzI2cHg7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMzMlO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICY6bnRoLWNoaWxkKDIpe1xyXG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAzNjBweDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAzMyU7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMThweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmOm50aC1jaGlsZCgzKXtcclxuICAgICAgICAgICAgICAgIG1heC13aWR0aDogMjI4cHg7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMzMlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4uY2FyLWJvb2tpbmctd3JhcHtcclxuICAgIHBhZGRpbmc6IDY4cHggODdweCA2OHB4IDUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRTVFNUU1O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDRweCAxNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIC5yb3ctd3JhcHtcclxuICAgICAgICAucm93LWJvb2tpbmd7XHJcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDQ2cHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICAuY29sLXN0YXR1c3tcclxuICAgICAgICAgICAgICAgIG1pbi13aWR0aDogMTEwcHg7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogY2FsYygxMDAlIC8gNCAtIDY4cHgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5jb2wtY2Fye1xyXG4gICAgICAgICAgICAgICAgbWluLXdpZHRoOiAxOTBweDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLyA0ICsgMTAwcHgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5jb2wtZGF0ZXtcclxuICAgICAgICAgICAgICAgIG1pbi13aWR0aDogMTEwcHg7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogY2FsYygxMDAlIC8gNCAtIDgycHgpO1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuY29sLWFjdGlvbnN7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMjgwcHg7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLyA0KVxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmLmJvcmRlcntcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTQ2LCAxMjMsIDk4LCAwLjIpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAmOmxhc3QtY2hpbGR7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMTQ2LCAxMjMsIDk4LCAwLjIpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIDxpbnB1dCBjbGFzcz1cImN1c3RvbWUtcmFkaW9cIiBoaWRkZW4gdHlwZT1cInJhZGlvXCIgbmFtZT1cImZpcnN0LXJvd1wiIGlkPVwiYWNjZXB0MVwiPlxyXG4vLyAgICAgPGxhYmVsIGZvcj1cImFjY2VwdDFcIj5BY2NlcHQ8L2xhYmVsPlxyXG4vLyAgICAgPGlucHV0IGNsYXNzPVwiY3VzdG9tZS1yYWRpb1wiIGhpZGRlbiB0eXBlPVwicmFkaW9cIiBuYW1lPVwiZmlyc3Qtcm93XCIgaWQ9XCJkZWNsaW5lMVwiPlxyXG4vLyA8bGFiZWwgZm9yPVwiZGVjbGluZTFcIj5EZWNsaW5lPC9sYWJlbD4gXHJcbi8vIC5jdXN0b21lLXJhZGlvICsgbGFiZWx7XHJcbi8vICAgICB3aWR0aDogMTQ2cHg7XHJcbi8vICAgICBoZWlnaHQ6IDQ0cHg7XHJcbi8vICAgICBiYWNrZ3JvdW5kOiAjMjgyOTJCO1xyXG4vLyAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4vLyAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4vLyAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbi8vICAgICBjb2xvcjogI0ZGRkZGRjtcclxuLy8gICAgIHRyYW5zaXRpb246IGFsbCAwLjJzO1xyXG4vLyAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4vLyAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuLy8gICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4vLyAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuLy8gICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4vLyB9XHJcbi8vIC5jdXN0b21lLXJhZGlvOmNoZWNrZWQgKyBsYWJlbHtcclxuLy8gICAgIGJhY2tncm91bmQ6ICM5MjdCNjI7XHJcbi8vIH1cclxuLmJ0bi1hY3Rpb257XHJcbiAgICB3aWR0aDogMTQ2cHg7XHJcbiAgICBoZWlnaHQ6IDQ0cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMjgyOTJCO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICBjb2xvcjogI0ZGRkZGRjtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxufVxyXG4ucHJpbWFyeS1iZ3tcclxuICAgIGJhY2tncm91bmQ6ICM5MjdCNjI7XHJcbn1cclxuLmRhcmstYmd7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMjgyOTJCO1xyXG59XHJcbi5saW5rLXZpZXd7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIHRleHQtZGVjb3JhdGlvbi1saW5lOiB1bmRlcmxpbmU7XHJcbiAgICBjb2xvcjogIzkyN0I2MjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxNHB4O1xyXG4gICAgJjpob3ZlcntcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb24tbGluZTogbm9uZTtcclxuICAgIH1cclxufVxyXG5cclxuLmVkaXQtd3JhcHtcclxuICAgIHBhZGRpbmc6IDAgODZweDtcclxuICAgIGJhY2tncm91bmQ6ICNFNUU1RTU7XHJcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDE0cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgLnRvcC1yb3d7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMzBweDtcclxuICAgICAgICAubGFibGV7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMjgyOTJCO1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDM1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC52YWx1ZXtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA2M3B4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgICAgICBjb2xvcjogIzI4MjkyQjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmJ1dHRvbi13cmFwe1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAudXNlci1pbmZvLXdyYXB7XHJcbiAgICAgICAgLnJvdy1lZGl0e1xyXG4gICAgICAgICAgICBtaW4taGVpZ2h0OiA0NnB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgcGFkZGluZy10b3A6IDExcHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxMXB4O1xyXG4gICAgICAgICAgICAuY29sLW5hbWV7XHJcbiAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDEzNXB4O1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAvIDMgLSAyNDhweCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmNvbC1pbmZve1xyXG4gICAgICAgICAgICAgICAgbWluLXdpZHRoOiAxOTBweDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLyAzICsgMjE5cHgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5jb2wtZWRpdHtcclxuICAgICAgICAgICAgICAgIG1pbi13aWR0aDogMTEwcHg7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogY2FsYygxMDAlIC8gMyAtIDgycHgpO1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xyXG4gICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJi5ib3JkZXJ7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDE0NiwgMTIzLCA5OCwgMC4yKSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgJjpsYXN0LWNoaWxke1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDE0NiwgMTIzLCA5OCwgMC4yKSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19 */"

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
        this.resultsDay = false;
        this.resultsCar = false;
        this.showDetails = false;
        this.showMoreResults = false;
        this.userInfo = false;
        this.bookinHistory = false;
        this.myCar = false;
        this.date = new Date();
        this.carData = [
            { car: 'BMW' },
            { car: 'Audi' },
            { car: 'Lamborghini' },
            { car: 'Porshe' },
        ];
        this.dataSlide = [
            { img: 'assets/img/car/sid-ramirez-736273-unsplash.png' },
            { img: 'https://storage.googleapis.com/gtspirit/uploads/2013/02/georgef458_08_w1023_h682.jpg' },
            { img: 'https://upload.wikimedia.org/wikipedia/commons/d/d0/2010-2011_Ferrari_458_Italia_coupe_%282011-03-23%29_03.jpg' },
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
    PagesComponent.prototype.showUserInfo = function () {
        this.showResults = false;
        this.resultsDay = false;
        this.resultsCar = false;
        this.showDetails = false;
        this.showMoreResults = false;
        this.bookinHistory = false;
        this.userInfo = true;
        this.myCar = false;
    };
    PagesComponent.prototype.showMyCar = function () {
        this.showResults = false;
        this.resultsDay = false;
        this.resultsCar = false;
        this.showDetails = false;
        this.showMoreResults = false;
        this.bookinHistory = false;
        this.userInfo = false;
        this.myCar = true;
    };
    PagesComponent.prototype.showBookingHistory = function () {
        this.showResults = false;
        this.resultsDay = false;
        this.resultsCar = false;
        this.showDetails = false;
        this.showMoreResults = false;
        this.bookinHistory = true;
        this.userInfo = false;
        this.myCar = false;
    };
    PagesComponent.prototype.closeMenuIsems = function () {
        this.bookinHistory = false;
        this.userInfo = false;
        this.myCar = false;
    };
    PagesComponent.prototype.showElement = function (e) {
        this.closeMenuIsems();
        this.showResults = e.showResults;
        this.resultsDay = e.resultsDay;
        this.resultsCar = e.resultsCar;
        this.showMoreResults = e.showMoreResults;
        console.log(e);
    };
    PagesComponent.prototype.showDetailsEmit = function (e) {
        this.closeMenuIsems();
        this.showDetails = e.showDetails;
        console.log(e);
    };
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

/***/ "./src/app/shared/card-date-result/card-date-result.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/shared/card-date-result/card-date-result.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-wrap-card\">\n  <div class=\"img-wrap\">\n    <img src=\"assets/img/car/dhiva-krishna-463042-unsplash.png\" alt=\"\">\n  </div>\n  <div>\n    <div class=\"car-name\">\n      Lamborghini Huracán Spyder LP610-4\n    </div>\n    <div class=\"details\">\n      Designed to cut through the air and become one with the sky, the Huracán Spyder is the pinnacle of Italian hand\n      craftsmanship, a sports car concept elevated to the performance and sensation of a coupé.\n    </div>\n    <div class=\"row-list\">\n      <span>Engine</span>\n      <span>V12</span>\n    </div>\n\n    <div class=\"row-list\">\n      <span>Displacement</span>\n      <span>5.2 L</span>\n    </div>\n\n    <div class=\"row-list\">\n      <span>Horsepower</span>\n      <span>610</span>\n    </div>\n\n    <div class=\"row-list\">\n      <span>0-100km/h</span>\n      <span>3.4 secs</span>\n    </div>\n\n    <div class=\"row-list\">\n      <span>Top speed</span>\n      <span>324 km/h</span>\n    </div>\n  </div>\n  <div class=\"cost-wrap text-center\">\n    <div class=\"fs-18\">\n      Price for 1 day:\n    </div>\n    <div class=\"fs-30 m-b-32\">\n      ¥ 120,000\n    </div>\n    <div class=\"m-b-10\">\n      <button (click)=\"openModal(template)\" class=\"button-side\">\n        See available days\n      </button>\n    </div>\n    <div class=\"link-more\">\n      Or learn more about the car\n    </div>\n  </div>\n</div>\n\n<ng-template #template>\n  <div class=\"custom-modal-wrapper\">\n    <button class=\"button-side\">\n      Pick-up date\n    </button>\n    <div class=\"date-piker-wrap\">\n      <div class=\"arrow-date\"></div>\n      <!-- (ngModelChange)=\"timeFrom !==null ? modalRef.hide() : null; timeFrom !==null ? openModal(template2) : null\" -->\n      <ng-datepicker class=\"modal-datapiker\" [(ngModel)]=\"date\" (ngModelChange)=\"timeFrom ? modalRef.hide() : null; timeFrom ? openModal(template2) : null\" isOpened=\"true\"></ng-datepicker>\n    </div>\n    <div class=\"drb-wrap\">\n      <div (click)=\"showTimeFrom = !showTimeFrom\" [ngClass]=\"{'active': showTimeFrom}\" class=\"custom-button-drb\">\n        <div class=\"arrow-date\"></div>\n        {{timeFrom || 'Choose time'}}\n      </div>\n      <div *ngIf=\"showTimeFrom\" class=\"drb\">\n        <div (click)=\"timeFrom = item.time; showTimeFrom = false;modalRef.hide(); openModal(template2)\" class=\"drb-item text-center\" *ngFor=\"let item of timeDate\">\n          {{item.time}}\n        </div>\n      </div>\n    </div>\n  </div>\n</ng-template>\n\n<ng-template #template2>\n  <div class=\"custom-modal-wrapper\">\n    <button class=\"button-side pos-r\">\n      <div class=\"arrow-back\" (click)=\"modalRef.hide();  openModal(template)\"></div>\n      drop-off date\n    </button>\n    <div class=\"date-piker-wrap\">\n      <div class=\"arrow-date\"></div>\n      <ng-datepicker class=\"modal-datapiker\" [(ngModel)]=\"date\" isOpened=\"true\"></ng-datepicker>\n    </div>\n    <div class=\"drb-wrap\">\n      <div (click)=\"showTimeFrom = !showTimeFrom\" [ngClass]=\"{'active': showTimeFrom}\" class=\"custom-button-drb\">\n        <div class=\"arrow-date\"></div>\n        {{timeTo || 'Choose time'}}\n      </div>\n      <div *ngIf=\"showTimeFrom\" class=\"drb\">\n        <div (click)=\"timeFrom = item.time; showTimeFrom = false; showDetails = true; showMoreResults = true; emit(showDetails, showMoreResults); modalRef.hide()\" class=\"drb-item text-center\" *ngFor=\"let item of timeDate\">\n          {{item.time}}\n        </div>\n      </div>\n    </div>\n  </div>\n</ng-template>"

/***/ }),

/***/ "./src/app/shared/card-date-result/card-date-result.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/shared/card-date-result/card-date-result.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-wrap-card {\n  height: 100%;\n  width: 100%;\n  padding: 30px 30px 0 30px;\n  display: flex;\n  align-items: center;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content; }\n\n.row-list {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  border-bottom: 1px solid rgba(146, 123, 98, 0.1);\n  font-size: 14px; }\n\n.button-side {\n  height: 60px;\n  background: #927B62;\n  cursor: pointer;\n  border: none;\n  outline: none;\n  width: 100%;\n  color: white;\n  text-transform: uppercase; }\n\n.link-more {\n  font-family: Lato;\n  font-size: 14px;\n  text-align: center;\n  -webkit-text-decoration-line: underline;\n          text-decoration-line: underline;\n  color: #28292B;\n  transition: all 0.3s; }\n\n.link-more:hover {\n    -webkit-text-decoration-line: none;\n            text-decoration-line: none; }\n\n.img-wrap {\n  min-width: 344px;\n  width: 344px;\n  height: 229px;\n  overflow: hidden;\n  margin-right: 21px; }\n\n.car-name {\n  font-size: 18px;\n  text-transform: uppercase;\n  color: #28292B;\n  margin-bottom: 12px; }\n\n.details {\n  font-size: 14px;\n  color: rgba(40, 41, 43, 0.6); }\n\n.cost-wrap {\n  min-width: 238px;\n  margin-left: 33px; }\n\n.drb-wrap {\n  position: relative; }\n\n.drb-wrap .custom-button-drb {\n    border: 1px solid rgba(146, 123, 98, 0.2) !important;\n    font-family: Lato;\n    font-weight: normal;\n    line-height: 10px;\n    font-size: 14px !important;\n    color: #28292B;\n    background: no-repeat;\n    outline: none;\n    height: 46px;\n    width: 100% !important;\n    cursor: pointer;\n    padding: 5px 10px;\n    display: flex;\n    align-items: center;\n    position: relative; }\n\n.drb-wrap .custom-button-drb.active {\n      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n      z-index: 111; }\n\n.drb-wrap .custom-button-drb .arrow-date {\n      border: 0.25px solid #28292B;\n      height: 10px;\n      width: 10px;\n      -webkit-transform: rotate(135deg);\n              transform: rotate(135deg);\n      border-left: 0;\n      border-bottom: 0;\n      position: absolute;\n      right: 16px;\n      top: 50%;\n      margin-top: -7px; }\n\n.drb-wrap .drb {\n    position: absolute;\n    top: 46px;\n    width: 100%;\n    z-index: 1;\n    max-height: 239px;\n    overflow-y: auto;\n    background: #E5E5E5; }\n\n.drb-wrap .drb .drb-item {\n      padding: 5px 10px;\n      cursor: pointer;\n      font-family: Lato;\n      font-weight: normal;\n      font-size: 14px;\n      color: #28292B; }\n\n.drb-wrap .drb .drb-item:hover {\n        background: #927B62;\n        color: white; }\n\n.date-piker-wrap {\n  position: relative; }\n\n.date-piker-wrap .arrow-date {\n    border: 0.25px solid #28292B;\n    height: 10px;\n    width: 10px;\n    -webkit-transform: rotate(135deg);\n            transform: rotate(135deg);\n    border-left: 0;\n    border-bottom: 0;\n    position: absolute;\n    right: 16px;\n    top: 25px;\n    margin-top: -7px; }\n\n.custom-modal-wrapper {\n  background: #E5E5E5; }\n\n.arrow-back {\n  border: 0.25px solid white;\n  height: 10px;\n  width: 10px;\n  -webkit-transform: rotate(135deg);\n  transform: rotate(225deg);\n  border-left: 0;\n  border-bottom: 0;\n  position: absolute;\n  left: 16px;\n  top: 50%;\n  margin-top: -4px;\n  transition: all .3s; }\n\n.arrow-back:hover {\n    -webkit-transform: scale(1.4) rotate(225deg);\n            transform: scale(1.4) rotate(225deg); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NhcmQtZGF0ZS1yZXN1bHQvQzpcXFRBU0tcXGNhci1yZW50L3NyY1xcYXBwXFxzaGFyZWRcXGNhcmQtZGF0ZS1yZXN1bHRcXGNhcmQtZGF0ZS1yZXN1bHQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFZO0VBQ1osWUFBVztFQUNYLDBCQUF5QjtFQUN6QixjQUFhO0VBQ2Isb0JBQW1CO0VBQ25CLDRCQUFtQjtFQUFuQix5QkFBbUI7RUFBbkIsb0JBQW1CLEVBQ3RCOztBQUNEO0VBQ0ksY0FBYTtFQUNiLG9CQUFtQjtFQUNuQiwrQkFBOEI7RUFDOUIsaURBQWdEO0VBQ2hELGdCQUFlLEVBQ2xCOztBQUNEO0VBQ0ksYUFBWTtFQUNaLG9CQUFtQjtFQUNuQixnQkFBZTtFQUNmLGFBQVk7RUFDWixjQUFhO0VBQ2IsWUFBVztFQUNYLGFBQVk7RUFDWiwwQkFBeUIsRUFDNUI7O0FBQ0Q7RUFDSSxrQkFBaUI7RUFDakIsZ0JBQWU7RUFDZixtQkFBa0I7RUFDbEIsd0NBQStCO1VBQS9CLGdDQUErQjtFQUMvQixlQUFjO0VBQ2QscUJBQW9CLEVBSXZCOztBQVZEO0lBUVEsbUNBQTBCO1lBQTFCLDJCQUEwQixFQUM3Qjs7QUFHTDtFQUNJLGlCQUFnQjtFQUNoQixhQUFZO0VBQ1osY0FBYTtFQUNiLGlCQUFnQjtFQUNoQixtQkFBa0IsRUFJckI7O0FBQ0Q7RUFDSSxnQkFBZTtFQUNmLDBCQUF5QjtFQUN6QixlQUFjO0VBQ2Qsb0JBQW1CLEVBQ3RCOztBQUNEO0VBQ0ksZ0JBQWU7RUFDZiw2QkFBNEIsRUFDL0I7O0FBQ0Q7RUFDSSxpQkFBZ0I7RUFDaEIsa0JBQWlCLEVBQ3BCOztBQUNEO0VBQ0ksbUJBQWtCLEVBdURyQjs7QUF4REQ7SUFHUSxxREFBb0Q7SUFDcEQsa0JBQWlCO0lBQ2pCLG9CQUFtQjtJQUNuQixrQkFBaUI7SUFDakIsMkJBQTBCO0lBQzFCLGVBQWM7SUFDZCxzQkFBcUI7SUFDckIsY0FBYTtJQUNiLGFBQVk7SUFDWix1QkFBc0I7SUFDdEIsZ0JBQWU7SUFDZixrQkFBaUI7SUFDakIsY0FBYTtJQUNiLG9CQUFtQjtJQUNuQixtQkFBa0IsRUFpQnJCOztBQWxDTDtNQW1CWSw0Q0FBMkM7TUFDM0MsYUFBWSxFQUNmOztBQXJCVDtNQXVCWSw2QkFBNEI7TUFDNUIsYUFBWTtNQUNaLFlBQVc7TUFDWCxrQ0FBeUI7Y0FBekIsMEJBQXlCO01BQ3pCLGVBQWM7TUFDZCxpQkFBZ0I7TUFDaEIsbUJBQWtCO01BQ2xCLFlBQVc7TUFDWCxTQUFRO01BQ1IsaUJBQWdCLEVBQ25COztBQWpDVDtJQW9DUSxtQkFBa0I7SUFDbEIsVUFBUztJQUNULFlBQVc7SUFDWCxXQUFVO0lBQ1Ysa0JBQWlCO0lBQ2pCLGlCQUFnQjtJQUNoQixvQkFBbUIsRUFhdEI7O0FBdkRMO01BNENZLGtCQUFpQjtNQUNqQixnQkFBZTtNQUNmLGtCQUFpQjtNQUNqQixvQkFBbUI7TUFDbkIsZ0JBQWU7TUFDZixlQUFjLEVBS2pCOztBQXREVDtRQW1EZ0Isb0JBQW1CO1FBQ25CLGFBQVksRUFDZjs7QUFJYjtFQUNJLG1CQUFrQixFQWFyQjs7QUFkRDtJQUdRLDZCQUE0QjtJQUM1QixhQUFZO0lBQ1osWUFBVztJQUNYLGtDQUF5QjtZQUF6QiwwQkFBeUI7SUFDekIsZUFBYztJQUNkLGlCQUFnQjtJQUNoQixtQkFBa0I7SUFDbEIsWUFBVztJQUNYLFVBQVM7SUFDVCxpQkFBZ0IsRUFDbkI7O0FBRUw7RUFDSSxvQkFBbUIsRUFDdEI7O0FBQ0Q7RUFDSSwyQkFBMEI7RUFDMUIsYUFBWTtFQUNaLFlBQVc7RUFDWCxrQ0FBaUM7RUFDakMsMEJBQXlCO0VBQ3pCLGVBQWM7RUFDZCxpQkFBZ0I7RUFDaEIsbUJBQWtCO0VBQ2xCLFdBQVU7RUFDVixTQUFRO0VBQ1IsaUJBQWdCO0VBQ2hCLG9CQUFtQixFQUl0Qjs7QUFoQkQ7SUFjUSw2Q0FBcUM7WUFBckMscUNBQXFDLEVBQ3hDIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NhcmQtZGF0ZS1yZXN1bHQvY2FyZC1kYXRlLXJlc3VsdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluLXdyYXAtY2FyZHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMzBweCAzMHB4IDAgMzBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcclxufVxyXG4ucm93LWxpc3R7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDE0NiwgMTIzLCA5OCwgMC4xKTtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG4uYnV0dG9uLXNpZGV7XHJcbiAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjOTI3QjYyO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG4ubGluay1tb3Jle1xyXG4gICAgZm9udC1mYW1pbHk6IExhdG87XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB0ZXh0LWRlY29yYXRpb24tbGluZTogdW5kZXJsaW5lO1xyXG4gICAgY29sb3I6ICMyODI5MkI7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuICAgICY6aG92ZXJ7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uLWxpbmU6IG5vbmU7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5pbWctd3JhcHtcclxuICAgIG1pbi13aWR0aDogMzQ0cHg7XHJcbiAgICB3aWR0aDogMzQ0cHg7XHJcbiAgICBoZWlnaHQ6IDIyOXB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIG1hcmdpbi1yaWdodDogMjFweDtcclxuICAgIGltZ3tcclxuXHJcbiAgICB9XHJcbn1cclxuLmNhci1uYW1le1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGNvbG9yOiAjMjgyOTJCO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTJweDtcclxufVxyXG4uZGV0YWlsc3tcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGNvbG9yOiByZ2JhKDQwLCA0MSwgNDMsIDAuNik7XHJcbn1cclxuLmNvc3Qtd3JhcHtcclxuICAgIG1pbi13aWR0aDogMjM4cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMzNweDtcclxufVxyXG4uZHJiLXdyYXB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAuY3VzdG9tLWJ1dHRvbi1kcmJ7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxNDYsIDEyMywgOTgsIDAuMikgIWltcG9ydGFudDtcclxuICAgICAgICBmb250LWZhbWlseTogTGF0bztcclxuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxMHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGNvbG9yOiAjMjgyOTJCO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IG5vLXJlcGVhdDtcclxuICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgIGhlaWdodDogNDZweDtcclxuICAgICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICBwYWRkaW5nOiA1cHggMTBweDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICYuYWN0aXZle1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xyXG4gICAgICAgICAgICB6LWluZGV4OiAxMTE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5hcnJvdy1kYXRle1xyXG4gICAgICAgICAgICBib3JkZXI6IDAuMjVweCBzb2xpZCAjMjgyOTJCO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwcHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMHB4O1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxMzVkZWcpO1xyXG4gICAgICAgICAgICBib3JkZXItbGVmdDogMDtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMDtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICByaWdodDogMTZweDtcclxuICAgICAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IC03cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmRyYntcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiA0NnB4O1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgICAgbWF4LWhlaWdodDogMjM5cHg7XHJcbiAgICAgICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjRTVFNUU1O1xyXG4gICAgICAgIC5kcmItaXRlbXtcclxuICAgICAgICAgICAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IExhdG87XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgY29sb3I6ICMyODI5MkI7XHJcbiAgICAgICAgICAgICY6aG92ZXJ7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjOTI3QjYyO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbi5kYXRlLXBpa2VyLXdyYXB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAuYXJyb3ctZGF0ZXtcclxuICAgICAgICBib3JkZXI6IDAuMjVweCBzb2xpZCAjMjgyOTJCO1xyXG4gICAgICAgIGhlaWdodDogMTBweDtcclxuICAgICAgICB3aWR0aDogMTBweDtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxMzVkZWcpO1xyXG4gICAgICAgIGJvcmRlci1sZWZ0OiAwO1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDA7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHJpZ2h0OiAxNnB4O1xyXG4gICAgICAgIHRvcDogMjVweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAtN3B4O1xyXG4gICAgfVxyXG59XHJcbi5jdXN0b20tbW9kYWwtd3JhcHBlcntcclxuICAgIGJhY2tncm91bmQ6ICNFNUU1RTU7XHJcbn1cclxuLmFycm93LWJhY2t7XHJcbiAgICBib3JkZXI6IDAuMjVweCBzb2xpZCB3aGl0ZTtcclxuICAgIGhlaWdodDogMTBweDtcclxuICAgIHdpZHRoOiAxMHB4O1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgxMzVkZWcpO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMjI1ZGVnKTtcclxuICAgIGJvcmRlci1sZWZ0OiAwO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDE2cHg7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIG1hcmdpbi10b3A6IC00cHg7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjNzO1xyXG4gICAgJjpob3ZlcntcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuNDApIHJvdGF0ZSgyMjVkZWcpO1xyXG4gICAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/shared/card-date-result/card-date-result.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/shared/card-date-result/card-date-result.component.ts ***!
  \***********************************************************************/
/*! exports provided: CardDateResultComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardDateResultComponent", function() { return CardDateResultComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var date_fns_locale_fr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns/locale/fr */ "./node_modules/date-fns/locale/fr/index.js");
/* harmony import */ var date_fns_locale_fr__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(date_fns_locale_fr__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CardDateResultComponent = /** @class */ (function () {
    function CardDateResultComponent(modalService) {
        this.modalService = modalService;
        this.date = new Date();
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
        this.showDetailsEmit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    CardDateResultComponent.prototype.openModal = function (template) {
        this.modalRef = this.modalService.show(template);
    };
    CardDateResultComponent.prototype.emit = function (showDetails, showMoreResults) {
        var _this = this;
        var options = {
            showDetails: showDetails,
            showMoreResults: showMoreResults,
        };
        console.log(options, 'options');
        setTimeout(function () {
            _this.showDetailsEmit.emit(options);
        }, 200);
    };
    CardDateResultComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], CardDateResultComponent.prototype, "showDetailsEmit", void 0);
    CardDateResultComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-card-date-result',
            template: __webpack_require__(/*! ./card-date-result.component.html */ "./src/app/shared/card-date-result/card-date-result.component.html"),
            styles: [__webpack_require__(/*! ./card-date-result.component.scss */ "./src/app/shared/card-date-result/card-date-result.component.scss")]
        }),
        __metadata("design:paramtypes", [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"]])
    ], CardDateResultComponent);
    return CardDateResultComponent;
}());



/***/ }),

/***/ "./src/app/shared/card-result/card-result.component.html":
/*!***************************************************************!*\
  !*** ./src/app/shared/card-result/card-result.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-wrap-card\">\n  <div class=\"img-wrap\">\n    <img src=\"assets/img/car/dhiva-krishna-463042-unsplash.png\" alt=\"\">\n  </div>\n  <div>\n    <div class=\"car-name\">\n      Lamborghini Huracán Spyder LP610-4\n    </div>\n    <div class=\"details\">\n      Designed to cut through the air and become one with the sky, the Huracán Spyder is the pinnacle of Italian hand\n      craftsmanship, a sports car concept elevated to the performance and sensation of a coupé.\n    </div>\n    <div class=\"row-list\">\n      <span>Engine</span>\n      <span>V12</span>\n    </div>\n\n    <div class=\"row-list\">\n      <span>Displacement</span>\n      <span>5.2 L</span>\n    </div>\n\n    <div class=\"row-list\">\n      <span>Horsepower</span>\n      <span>610</span>\n    </div>\n\n    <div class=\"row-list\">\n      <span>0-100km/h</span>\n      <span>3.4 secs</span>\n    </div>\n\n    <div class=\"row-list\">\n      <span>Top speed</span>\n      <span>324 km/h</span>\n    </div>\n  </div>\n  <div class=\"cost-wrap text-center\">\n    <div class=\"fs-18\">\n      Price for 1 day:\n    </div>\n    <div class=\"fs-30 m-b-32\">\n      ¥ 120,000\n    </div>\n    <div class=\"m-b-10\">\n      <button class=\"button-side\" (click)=\"showDetails = !showDetails; showMoreResults = true; emit(showDetails, showMoreResults)\">\n        Book now\n      </button>\n    </div>\n    <div class=\"link-more c-p\">\n      Or learn more about the car\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/shared/card-result/card-result.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/shared/card-result/card-result.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-wrap-card {\n  height: 100%;\n  width: 100%;\n  padding: 30px 30px 0 30px;\n  display: flex;\n  align-items: center;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content; }\n\n.row-list {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  border-bottom: 1px solid rgba(146, 123, 98, 0.1);\n  font-size: 14px; }\n\n.button-side {\n  height: 60px;\n  background: #927B62;\n  cursor: pointer;\n  border: none;\n  outline: none;\n  width: 100%;\n  color: white;\n  text-transform: uppercase; }\n\n.link-more {\n  font-family: Lato;\n  font-size: 14px;\n  text-align: center;\n  -webkit-text-decoration-line: underline;\n          text-decoration-line: underline;\n  color: #28292B;\n  transition: all 0.3s; }\n\n.link-more:hover {\n    -webkit-text-decoration-line: none;\n            text-decoration-line: none; }\n\n.img-wrap {\n  min-width: 344px;\n  width: 344px;\n  height: 229px;\n  overflow: hidden;\n  margin-right: 21px; }\n\n.car-name {\n  font-size: 18px;\n  text-transform: uppercase;\n  color: #28292B;\n  margin-bottom: 12px; }\n\n.details {\n  font-size: 14px;\n  color: rgba(40, 41, 43, 0.6); }\n\n.cost-wrap {\n  min-width: 238px;\n  margin-left: 33px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NhcmQtcmVzdWx0L0M6XFxUQVNLXFxjYXItcmVudC9zcmNcXGFwcFxcc2hhcmVkXFxjYXJkLXJlc3VsdFxcY2FyZC1yZXN1bHQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFZO0VBQ1osWUFBVztFQUNYLDBCQUF5QjtFQUN6QixjQUFhO0VBQ2Isb0JBQW1CO0VBQ25CLDRCQUFtQjtFQUFuQix5QkFBbUI7RUFBbkIsb0JBQW1CLEVBQ3RCOztBQUNEO0VBQ0ksY0FBYTtFQUNiLG9CQUFtQjtFQUNuQiwrQkFBOEI7RUFDOUIsaURBQWdEO0VBQ2hELGdCQUFlLEVBQ2xCOztBQUNEO0VBQ0ksYUFBWTtFQUNaLG9CQUFtQjtFQUNuQixnQkFBZTtFQUNmLGFBQVk7RUFDWixjQUFhO0VBQ2IsWUFBVztFQUNYLGFBQVk7RUFDWiwwQkFBeUIsRUFDNUI7O0FBQ0Q7RUFDSSxrQkFBaUI7RUFDakIsZ0JBQWU7RUFDZixtQkFBa0I7RUFDbEIsd0NBQStCO1VBQS9CLGdDQUErQjtFQUMvQixlQUFjO0VBQ2QscUJBQW9CLEVBSXZCOztBQVZEO0lBUVEsbUNBQTBCO1lBQTFCLDJCQUEwQixFQUM3Qjs7QUFHTDtFQUNJLGlCQUFnQjtFQUNoQixhQUFZO0VBQ1osY0FBYTtFQUNiLGlCQUFnQjtFQUNoQixtQkFBa0IsRUFJckI7O0FBQ0Q7RUFDSSxnQkFBZTtFQUNmLDBCQUF5QjtFQUN6QixlQUFjO0VBQ2Qsb0JBQW1CLEVBQ3RCOztBQUNEO0VBQ0ksZ0JBQWU7RUFDZiw2QkFBNEIsRUFDL0I7O0FBQ0Q7RUFDSSxpQkFBZ0I7RUFDaEIsa0JBQWlCLEVBQ3BCIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NhcmQtcmVzdWx0L2NhcmQtcmVzdWx0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4td3JhcC1jYXJke1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAzMHB4IDMwcHggMCAzMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xyXG59XHJcbi5yb3ctbGlzdHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMTQ2LCAxMjMsIDk4LCAwLjEpO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcbi5idXR0b24tc2lkZXtcclxuICAgIGhlaWdodDogNjBweDtcclxuICAgIGJhY2tncm91bmQ6ICM5MjdCNjI7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcbi5saW5rLW1vcmV7XHJcbiAgICBmb250LWZhbWlseTogTGF0bztcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHRleHQtZGVjb3JhdGlvbi1saW5lOiB1bmRlcmxpbmU7XHJcbiAgICBjb2xvcjogIzI4MjkyQjtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gICAgJjpob3ZlcntcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb24tbGluZTogbm9uZTtcclxuICAgIH1cclxufVxyXG5cclxuLmltZy13cmFwe1xyXG4gICAgbWluLXdpZHRoOiAzNDRweDtcclxuICAgIHdpZHRoOiAzNDRweDtcclxuICAgIGhlaWdodDogMjI5cHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMXB4O1xyXG4gICAgaW1ne1xyXG5cclxuICAgIH1cclxufVxyXG4uY2FyLW5hbWV7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgY29sb3I6ICMyODI5MkI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xyXG59XHJcbi5kZXRhaWxze1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgY29sb3I6IHJnYmEoNDAsIDQxLCA0MywgMC42KTtcclxufVxyXG4uY29zdC13cmFwe1xyXG4gICAgbWluLXdpZHRoOiAyMzhweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAzM3B4O1xyXG59XHJcbiJdfQ== */"

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
        this.showDetailsEmit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    CardResultComponent.prototype.emit = function (showDetails, showMoreResults) {
        var _this = this;
        var options = {
            showDetails: showDetails,
            showMoreResults: showMoreResults,
        };
        console.log(options, 'options');
        setTimeout(function () {
            _this.showDetailsEmit.emit(options);
        }, 200);
    };
    CardResultComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], CardResultComponent.prototype, "showDetailsEmit", void 0);
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

module.exports = "<div class=\"booking-wrap\">\n  <div class=\"header\">\n    Book your car today\n  </div>\n  <div class=\"caption\">\n    Book by Date\n  </div>\n  <div class=\"lable\">\n    Pick-up Date:\n  </div>\n  <!-- <input type=\"text\" placeholder=\"Datepicker\" class=\"form-control\" bsDatepicker> -->\n  <div class=\"date-piker-wrap m-b-14\">\n    <div class=\"arrow-date\"></div>\n    <ng-datepicker [(ngModel)]=\"date\"></ng-datepicker>\n  </div>\n\n  <div class=\"drb-wrap m-b-14\">\n    <div (click)=\"showTimeFrom = !showTimeFrom\" class=\"custom-button-drb\">\n      <div class=\"arrow-date\"></div>\n      {{timeFrom || 'Choose time'}}\n    </div>\n    <div *ngIf=\"showTimeFrom\" class=\"drb\">\n      <div (click)=\"timeFrom = item.time; showTimeFrom = false\" class=\"drb-item text-center\" *ngFor=\"let item of timeDate\">\n        {{item.time}}\n      </div>\n    </div>\n  </div>\n\n  <div class=\"lable\">\n    Drop-off Date:\n  </div>\n  <div class=\"date-piker-wrap m-b-14\">\n    <div class=\"arrow-date\"></div>\n    <ng-datepicker [(ngModel)]=\"date\"></ng-datepicker>\n  </div>\n  <div class=\"drb-wrap m-b-14\">\n    <div (click)=\"showTimeTo = !showTimeTo\" class=\"custom-button-drb\">\n      <div class=\"arrow-date\"></div>\n      {{timeTo || 'Choose time'}}\n    </div>\n    <div *ngIf=\"showTimeTo\" class=\"drb\">\n      <div (click)=\"timeTo = item.time; showTimeTo = false\" class=\"drb-item text-center\" *ngFor=\"let item of timeDate\">\n        {{item.time}}\n      </div>\n    </div>\n  </div>\n\n  <div class=\"m-b-38\">\n    <button class=\"button-side\" (click)=\"emit(showResults, !resultsDay, resultsCar, false)\">\n      See available Cars\n    </button>\n  </div>\n\n  <div class=\"caption m-b-32\">\n    book by car\n  </div>\n\n  <div class=\"drb-wrap m-b-24\">\n    <div (click)=\"showCarList = !showCarList\" class=\"custom-button-drb\">\n      <div class=\"arrow-date\"></div>\n      {{carName || 'Choose your car'}}\n    </div>\n    <div *ngIf=\"showCarList\" class=\"drb\">\n      <div (click)=\"carName = item.car; showCarList = false\" class=\"drb-item\" *ngFor=\"let item of carData\">\n        {{item.car}}\n      </div>\n    </div>\n  </div>\n\n  <div>\n    <button class=\"button-side\" (click)=\"emit(showResults, resultsDay, !resultsCar, false)\">\n      See available Cars\n    </button>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/shared/side-booking/side-booking.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/shared/side-booking/side-booking.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header-wrap {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 30px 32px 30px 44px; }\n  .header-wrap .logo-wrap {\n    cursor: pointer; }\n  .header-wrap .menu-wrap {\n    display: flex;\n    align-items: center; }\n  .header-wrap .menu-wrap .menu-item {\n      margin-left: 60px;\n      font-size: 16px;\n      text-align: right;\n      text-transform: uppercase;\n      color: #FFFFFF;\n      cursor: pointer; }\n  .main-content {\n  background: url(/assets/img/main-bg.jpg);\n  min-height: 100vh;\n  height: 100%;\n  background-repeat: no-repeat;\n  background-size: 100% auto;\n  background-position: center;\n  overflow-y: auto;\n  background-attachment: fixed; }\n  .content-wrap {\n  display: flex;\n  overflow: hidden;\n  justify-content: flex-end; }\n  .hideElement {\n  transition: all 0.5s;\n  width: 0 !important;\n  min-width: 0 !important;\n  -webkit-transform: translate3d(100%, 0, 0);\n          transform: translate3d(100%, 0, 0);\n  overflow: hidden;\n  padding: 0 !important;\n  white-space: nowrap; }\n  .showElement {\n  width: 100%;\n  transition: all 0.5s;\n  -webkit-transform: translate3d(0, 0, 0);\n          transform: translate3d(0, 0, 0); }\n  .result {\n  background: #E5E5E5;\n  box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.25);\n  max-height: 735px;\n  overflow-y: auto; }\n  .booking-wrap {\n  min-width: 360px;\n  width: 360px;\n  background: #28292B;\n  box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.25);\n  padding: 28px 16px 16px 24px;\n  white-space: nowrap; }\n  .booking-wrap .header {\n    font-size: 18px;\n    text-align: center;\n    text-transform: uppercase;\n    color: #FFFFFF;\n    margin-bottom: 24px; }\n  .booking-wrap .caption {\n    font-weight: 300;\n    font-size: 16px;\n    text-align: center;\n    text-transform: uppercase;\n    color: #FFFFFF;\n    margin-bottom: 20px; }\n  .booking-wrap .lable {\n    font-weight: normal;\n    font-size: 16px;\n    color: #B09E8F;\n    margin-bottom: 12px; }\n  .button-side {\n  height: 60px;\n  background: #927B62;\n  cursor: pointer;\n  border: none;\n  outline: none;\n  width: 100%;\n  color: white;\n  text-transform: uppercase; }\n  .drb-wrap {\n  position: relative; }\n  .drb-wrap .custom-button-drb {\n    border: 1px solid rgba(146, 123, 98, 0.2) !important;\n    font-family: Lato;\n    font-weight: normal;\n    line-height: 10px;\n    font-size: 14px !important;\n    color: #FFFFFF;\n    background: no-repeat;\n    outline: none;\n    height: 46px;\n    width: 100% !important;\n    cursor: pointer;\n    padding: 5px 10px;\n    display: flex;\n    align-items: center;\n    position: relative; }\n  .drb-wrap .custom-button-drb .arrow-date {\n      border: 0.25px solid white;\n      height: 10px;\n      width: 10px;\n      -webkit-transform: rotate(135deg);\n              transform: rotate(135deg);\n      border-left: 0;\n      border-bottom: 0;\n      position: absolute;\n      right: 16px;\n      top: 50%;\n      margin-top: -7px; }\n  .drb-wrap .drb {\n    position: absolute;\n    top: 46px;\n    width: 100%;\n    background: #E5E5E5;\n    z-index: 1;\n    max-height: 239px;\n    overflow-y: auto; }\n  .drb-wrap .drb .drb-item {\n      padding: 5px 10px;\n      cursor: pointer;\n      font-family: Lato;\n      font-weight: normal;\n      font-size: 14px;\n      color: #28292B; }\n  .drb-wrap .drb .drb-item:hover {\n        background: #927B62;\n        color: white; }\n  .details-wrap {\n  padding: 30px;\n  background: #E5E5E5;\n  width: 395px;\n  max-height: 735px; }\n  .details-wrap .info .car-name {\n    font-size: 18px;\n    text-transform: uppercase;\n    color: #28292B;\n    margin-bottom: 12px; }\n  .details-wrap .info .details {\n    font-size: 14px;\n    color: rgba(40, 41, 43, 0.6); }\n  .details-wrap .info .row-list {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    border-bottom: 1px solid rgba(146, 123, 98, 0.1);\n    font-size: 14px; }\n  .img-wrap {\n  height: 225px; }\n  .bg-wrap {\n  background: rgba(40, 41, 43, 0.5);\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%; }\n  .hideElementOpacity {\n  opacity: 0;\n  pointer-events: none;\n  transition: 0.5s; }\n  .showElementOpacity {\n  opacity: 1;\n  pointer-events: unset;\n  transition: 0.5s; }\n  .details-main-wrap {\n  width: 100%;\n  background: #E5E5E5;\n  box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.25); }\n  .details-main-wrap .carousel-wrap {\n    display: flex;\n    justify-content: center; }\n  .details-main-wrap .carousel-wrap carousel slide .img-slide-wrap {\n      width: 100%; }\n  .details-main-wrap .carousel-wrap carousel slide .img-slide-wrap .img-slide {\n        width: 100%;\n        height: auto;\n        max-width: 1080px;\n        max-height: 415px; }\n  .details-main-wrap .details-info-wrap {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 30px; }\n  .details-main-wrap .details-info-wrap .col-custome .car-name {\n      font-size: 18px;\n      text-transform: uppercase;\n      color: #28292B;\n      margin-bottom: 12px; }\n  .details-main-wrap .details-info-wrap .col-custome .details {\n      font-size: 14px;\n      color: rgba(40, 41, 43, 0.6); }\n  .details-main-wrap .details-info-wrap .col-custome .row-list {\n      display: flex;\n      align-items: center;\n      justify-content: space-between;\n      border-bottom: 1px solid rgba(146, 123, 98, 0.1);\n      font-size: 14px; }\n  .details-main-wrap .details-info-wrap .col-custome:nth-child(1) {\n      max-width: 326px;\n      width: 33%;\n      margin-right: 20px; }\n  .details-main-wrap .details-info-wrap .col-custome:nth-child(2) {\n      max-width: 360px;\n      width: 33%;\n      padding-top: 18px;\n      margin-right: 20px; }\n  .details-main-wrap .details-info-wrap .col-custome:nth-child(3) {\n      max-width: 228px;\n      width: 33%; }\n  .car-booking-wrap {\n  padding: 68px 87px 68px 50px;\n  background: #E5E5E5;\n  box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.25);\n  width: 100%; }\n  .car-booking-wrap .row-wrap .row-booking {\n    min-height: 46px;\n    font-size: 14px;\n    display: flex;\n    align-items: center;\n    justify-content: space-between; }\n  .car-booking-wrap .row-wrap .row-booking .col-status {\n      min-width: 110px;\n      padding-left: 15px;\n      width: calc(100% / 4 - 68px); }\n  .car-booking-wrap .row-wrap .row-booking .col-car {\n      min-width: 190px;\n      width: calc(100% / 4 + 100px); }\n  .car-booking-wrap .row-wrap .row-booking .col-date {\n      min-width: 110px;\n      width: calc(100% / 4 - 82px); }\n  .car-booking-wrap .row-wrap .row-booking .col-actions {\n      width: 280px;\n      text-align: right;\n      width: calc(100% / 4); }\n  .car-booking-wrap .row-wrap .row-booking.border {\n      border: 1px solid rgba(146, 123, 98, 0.2) !important;\n      border-bottom: none !important; }\n  .car-booking-wrap .row-wrap .row-booking.border:last-child {\n        border-bottom: 1px solid rgba(146, 123, 98, 0.2) !important; }\n  .btn-action {\n  width: 146px;\n  height: 44px;\n  background: #28292B;\n  font-size: 14px;\n  text-align: center;\n  text-transform: capitalize;\n  color: #FFFFFF;\n  transition: all 0.2s;\n  cursor: pointer;\n  margin-bottom: 0;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  border: none;\n  outline: none; }\n  .primary-bg {\n  background: #927B62; }\n  .dark-bg {\n  background: #28292B; }\n  .link-view {\n  font-size: 14px;\n  text-align: right;\n  -webkit-text-decoration-line: underline;\n          text-decoration-line: underline;\n  color: #927B62;\n  cursor: pointer;\n  transition: all 0.3s;\n  margin-right: 14px; }\n  .link-view:hover {\n    -webkit-text-decoration-line: none;\n            text-decoration-line: none; }\n  .edit-wrap {\n  padding: 0 86px;\n  background: #E5E5E5;\n  box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.25);\n  width: 100%; }\n  .edit-wrap .top-row {\n    display: flex;\n    align-items: center;\n    justify-content: flex-end;\n    margin-bottom: 50px;\n    margin-top: 130px; }\n  .edit-wrap .top-row .lable {\n      font-size: 18px;\n      text-align: right;\n      color: #28292B;\n      margin-right: 35px; }\n  .edit-wrap .top-row .value {\n      margin-right: 63px;\n      font-size: 30px;\n      text-align: right;\n      color: #28292B; }\n  .edit-wrap .user-info-wrap .row-edit {\n    min-height: 46px;\n    font-size: 14px;\n    display: flex;\n    justify-content: space-between;\n    padding-top: 11px;\n    padding-bottom: 11px; }\n  .edit-wrap .user-info-wrap .row-edit .col-name {\n      min-width: 135px;\n      padding-left: 15px;\n      width: calc(100% / 3 - 248px); }\n  .edit-wrap .user-info-wrap .row-edit .col-info {\n      min-width: 190px;\n      width: calc(100% / 3 + 219px); }\n  .edit-wrap .user-info-wrap .row-edit .col-edit {\n      min-width: 110px;\n      width: calc(100% / 3 - 82px);\n      text-align: right;\n      padding-right: 15px; }\n  .edit-wrap .user-info-wrap .row-edit.border {\n      border: 1px solid rgba(146, 123, 98, 0.2) !important;\n      border-bottom: none !important; }\n  .edit-wrap .user-info-wrap .row-edit.border:last-child {\n        border-bottom: 1px solid rgba(146, 123, 98, 0.2) !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3NpZGUtYm9va2luZy9DOlxcVEFTS1xcY2FyLXJlbnQvc3JjXFxhcHBcXHBhZ2VzXFxwYWdlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQWE7RUFDYixvQkFBbUI7RUFDbkIsK0JBQThCO0VBQzlCLDZCQUE0QixFQWdCL0I7RUFwQkQ7SUFNUSxnQkFBZSxFQUNsQjtFQVBMO0lBU1EsY0FBYTtJQUNiLG9CQUFtQixFQVN0QjtFQW5CTDtNQVlZLGtCQUFpQjtNQUNqQixnQkFBZTtNQUNmLGtCQUFpQjtNQUNqQiwwQkFBeUI7TUFDekIsZUFBYztNQUNkLGdCQUFlLEVBQ2xCO0VBSVQ7RUFDSSx5Q0FBd0M7RUFDeEMsa0JBQWlCO0VBQ2pCLGFBQVk7RUFDWiw2QkFBNEI7RUFDNUIsMkJBQTBCO0VBQzFCLDRCQUEyQjtFQUMzQixpQkFBZ0I7RUFDaEIsNkJBQTRCLEVBQy9CO0VBQ0Q7RUFDSSxjQUFhO0VBQ2IsaUJBQWdCO0VBQ2hCLDBCQUF5QixFQUM1QjtFQUNEO0VBQ0kscUJBQW9CO0VBQ3BCLG9CQUFtQjtFQUNuQix3QkFBdUI7RUFDdkIsMkNBQWtDO1VBQWxDLG1DQUFrQztFQUNsQyxpQkFBZ0I7RUFDaEIsc0JBQXFCO0VBQ3JCLG9CQUFtQixFQUN0QjtFQVVEO0VBQ0ksWUFBVztFQUNYLHFCQUFvQjtFQUNwQix3Q0FBK0I7VUFBL0IsZ0NBQStCLEVBQ2xDO0VBQ0Q7RUFDSSxvQkFBbUI7RUFDbkIsNkNBQTRDO0VBQzVDLGtCQUFpQjtFQUNqQixpQkFBZ0IsRUFDbkI7RUFHRDtFQUNJLGlCQUFnQjtFQUNoQixhQUFZO0VBQ1osb0JBQW1CO0VBQ25CLDZDQUE0QztFQUM1Qyw2QkFBNEI7RUFDNUIsb0JBQW1CLEVBc0J0QjtFQTVCRDtJQVFRLGdCQUFlO0lBQ2YsbUJBQWtCO0lBQ2xCLDBCQUF5QjtJQUN6QixlQUFjO0lBQ2Qsb0JBQW1CLEVBQ3RCO0VBYkw7SUFlUSxpQkFBZ0I7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QUFrQjtNQUNsQixnQkFBZTtNQUNmLGtCQUFpQjtNQUNqQixlQUFjLEVBQ2pCO0VBdEJUO0lBNkJZLGlCQUFnQjtJQUNoQixnQkFBZTtJQUNmLGNBQWE7SUFDYiwrQkFBOEI7SUFDOUIsa0JBQWlCO0lBQ2pCLHFCQUFvQixFQXdCdkI7RUExRFQ7TUFvQ2dCLGlCQUFnQjtNQUNoQixtQkFBa0I7TUFDbEIsOEJBQTZCLEVBQ2hDO0VBdkNiO01BeUNnQixpQkFBZ0I7TUFDaEIsOEJBQTZCLEVBQ2hDO0VBM0NiO01BNkNnQixpQkFBZ0I7TUFDaEIsNkJBQTRCO01BQzVCLGtCQUFpQjtNQUNqQixvQkFBbUIsRUFFdEI7RUFsRGI7TUFvRGdCLHFEQUFvRDtNQUNwRCwrQkFBOEIsRUFJakM7RUF6RGI7UUF1RG9CLDREQUEyRCxFQUM5RCIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9zaWRlLWJvb2tpbmcvc2lkZS1ib29raW5nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlci13cmFwe1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBwYWRkaW5nOiAzMHB4IDMycHggMzBweCA0NHB4O1xyXG4gICAgLmxvZ28td3JhcHtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcbiAgICAubWVudS13cmFwe1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAubWVudS1pdGVte1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogNjBweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICAgICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5tYWluLWNvbnRlbnR7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoL2Fzc2V0cy9pbWcvbWFpbi1iZy5qcGcpO1xyXG4gICAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIGF1dG87XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcclxufVxyXG4uY29udGVudC13cmFwe1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG59XHJcbi5oaWRlRWxlbWVudHtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzO1xyXG4gICAgd2lkdGg6IDAgIWltcG9ydGFudDtcclxuICAgIG1pbi13aWR0aDogMCAhaW1wb3J0YW50O1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMDAlLCAwLCAwKTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG59XHJcbi8vIC5oaWRlRWxlbWVudC1sZWZ0e1xyXG4vLyAgICAgd2lkdGg6IDA7XHJcbi8vICAgICB0cmFuc2l0aW9uOiBhbGwgMC41cztcclxuLy8gICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwMCUsIDAsIDApO1xyXG4vLyB9XHJcbi8vIC5zaG93RWxlbWVudC1sZWZ0e1xyXG4vLyAgICAgd2lkdGg6IDEwMCU7XHJcbi8vICAgICB0cmFuc2l0aW9uOiBhbGwgMC41cztcclxuLy8gfVxyXG4uc2hvd0VsZW1lbnR7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcclxufVxyXG4ucmVzdWx0e1xyXG4gICAgYmFja2dyb3VuZDogI0U1RTVFNTtcclxuICAgIGJveC1zaGFkb3c6IDBweCA0cHggMTRweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xyXG4gICAgbWF4LWhlaWdodDogNzM1cHg7XHJcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG59XHJcblxyXG5cclxuLmJvb2tpbmctd3JhcHtcclxuICAgIG1pbi13aWR0aDogMzYwcHg7XHJcbiAgICB3aWR0aDogMzYwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMjgyOTJCO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDRweCAxNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XHJcbiAgICBwYWRkaW5nOiAyOHB4IDE2cHggMTZweCAyNHB4O1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIC5oZWFkZXJ7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XHJcbiAgICB9XHJcbiAgICAuY2FwdGlvbntcclxuICAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICBjb2xvcjogI0ZGRkZGRjtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgfVxyXG4gICAgLmxhYmxle1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIGNvbG9yOiAjQjA5RThGO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEycHg7XHJcbiAgICB9XHJcbn1cclxuLmJ1dHRvbi1zaWRle1xyXG4gICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgYmFja2dyb3VuZDogIzkyN0I2MjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuLmRyYi13cmFwe1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgLmN1c3RvbS1idXR0b24tZHJie1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTQ2LCAxMjMsIDk4LCAwLjIpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IExhdG87XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMTBweDtcclxuICAgICAgICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcclxuICAgICAgICBjb2xvcjogI0ZGRkZGRjtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBuby1yZXBlYXQ7XHJcbiAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICBoZWlnaHQ6IDQ2cHg7XHJcbiAgICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAuYXJyb3ctZGF0ZXtcclxuICAgICAgICAgICAgYm9yZGVyOiAwLjI1cHggc29saWQgcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwcHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMHB4O1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxMzVkZWcpO1xyXG4gICAgICAgICAgICBib3JkZXItbGVmdDogMDtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMDtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICByaWdodDogMTZweDtcclxuICAgICAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IC03cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmRyYntcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiA0NnB4O1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNFNUU1RTU7XHJcbiAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgICBtYXgtaGVpZ2h0OiAyMzlweDtcclxuICAgICAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgICAgIC5kcmItaXRlbXtcclxuICAgICAgICAgICAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IExhdG87XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgY29sb3I6ICMyODI5MkI7XHJcbiAgICAgICAgICAgICY6aG92ZXJ7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjOTI3QjYyO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4uZGV0YWlscy13cmFwe1xyXG4gICAgcGFkZGluZzogMzBweDtcclxuICAgIGJhY2tncm91bmQ6ICNFNUU1RTU7XHJcbiAgICB3aWR0aDogMzk1cHg7XHJcbiAgICBtYXgtaGVpZ2h0OiA3MzVweDtcclxuICAgIC5pbmZve1xyXG4gICAgICAgIC5jYXItbmFtZXtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgICAgICBjb2xvcjogIzI4MjkyQjtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTJweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmRldGFpbHN7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgY29sb3I6IHJnYmEoNDAsIDQxLCA0MywgMC42KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnJvdy1saXN0e1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDE0NiwgMTIzLCA5OCwgMC4xKTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4uaW1nLXdyYXB7XHJcbiAgICBoZWlnaHQ6IDIyNXB4O1xyXG59XHJcbi5iZy13cmFwe1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSg0MCwgNDEsIDQzLCAwLjUpO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHRvcDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcbi5oaWRlRWxlbWVudE9wYWNpdHl7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xyXG59XHJcbi5zaG93RWxlbWVudE9wYWNpdHl7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgcG9pbnRlci1ldmVudHM6IHVuc2V0O1xyXG4gICAgdHJhbnNpdGlvbjogMC41cztcclxufVxyXG5cclxuLmRldGFpbHMtbWFpbi13cmFwe1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRTVFNUU1O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDRweCAxNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XHJcbiAgICAuY2Fyb3VzZWwtd3JhcHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGNhcm91c2Vse1xyXG4gICAgICAgICAgICBzbGlkZXtcclxuICAgICAgICAgICAgICAgIC5pbWctc2xpZGUtd3JhcHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAuaW1nLXNsaWRle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDEwODBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4LWhlaWdodDogNDE1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmRldGFpbHMtaW5mby13cmFwe1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgcGFkZGluZzogMzBweDtcclxuICAgICAgICAuY29sLWN1c3RvbWV7XHJcbiAgICAgICAgICAgIC5jYXItbmFtZXtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzI4MjkyQjtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEycHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmRldGFpbHN7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogcmdiYSg0MCwgNDEsIDQzLCAwLjYpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5yb3ctbGlzdHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMTQ2LCAxMjMsIDk4LCAwLjEpO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICY6bnRoLWNoaWxkKDEpe1xyXG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAzMjZweDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAzMyU7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJjpudGgtY2hpbGQoMil7XHJcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDM2MHB4O1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDMzJTtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxOHB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICY6bnRoLWNoaWxkKDMpe1xyXG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAyMjhweDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAzMyU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5jYXItYm9va2luZy13cmFwe1xyXG4gICAgcGFkZGluZzogNjhweCA4N3B4IDY4cHggNTBweDtcclxuICAgIGJhY2tncm91bmQ6ICNFNUU1RTU7XHJcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDE0cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgLnJvdy13cmFwe1xyXG4gICAgICAgIC5yb3ctYm9va2luZ3tcclxuICAgICAgICAgICAgbWluLWhlaWdodDogNDZweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgIC5jb2wtc3RhdHVze1xyXG4gICAgICAgICAgICAgICAgbWluLXdpZHRoOiAxMTBweDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTVweDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLyA0IC0gNjhweCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmNvbC1jYXJ7XHJcbiAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDE5MHB4O1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAvIDQgKyAxMDBweCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmNvbC1kYXRle1xyXG4gICAgICAgICAgICAgICAgbWluLXdpZHRoOiAxMTBweDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLyA0IC0gODJweCk7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5jb2wtYWN0aW9uc3tcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAyODBweDtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAvIDQpXHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICYuYm9yZGVye1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxNDYsIDEyMywgOTgsIDAuMikgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICY6bGFzdC1jaGlsZHtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgxNDYsIDEyMywgOTgsIDAuMikgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLy8gPGlucHV0IGNsYXNzPVwiY3VzdG9tZS1yYWRpb1wiIGhpZGRlbiB0eXBlPVwicmFkaW9cIiBuYW1lPVwiZmlyc3Qtcm93XCIgaWQ9XCJhY2NlcHQxXCI+XHJcbi8vICAgICA8bGFiZWwgZm9yPVwiYWNjZXB0MVwiPkFjY2VwdDwvbGFiZWw+XHJcbi8vICAgICA8aW5wdXQgY2xhc3M9XCJjdXN0b21lLXJhZGlvXCIgaGlkZGVuIHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJmaXJzdC1yb3dcIiBpZD1cImRlY2xpbmUxXCI+XHJcbi8vIDxsYWJlbCBmb3I9XCJkZWNsaW5lMVwiPkRlY2xpbmU8L2xhYmVsPiBcclxuLy8gLmN1c3RvbWUtcmFkaW8gKyBsYWJlbHtcclxuLy8gICAgIHdpZHRoOiAxNDZweDtcclxuLy8gICAgIGhlaWdodDogNDRweDtcclxuLy8gICAgIGJhY2tncm91bmQ6ICMyODI5MkI7XHJcbi8vICAgICBmb250LXNpemU6IDE0cHg7XHJcbi8vICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbi8vICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuLy8gICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4vLyAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XHJcbi8vICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbi8vICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4vLyAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbi8vICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4vLyAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbi8vIH1cclxuLy8gLmN1c3RvbWUtcmFkaW86Y2hlY2tlZCArIGxhYmVse1xyXG4vLyAgICAgYmFja2dyb3VuZDogIzkyN0I2MjtcclxuLy8gfVxyXG4uYnRuLWFjdGlvbntcclxuICAgIHdpZHRoOiAxNDZweDtcclxuICAgIGhlaWdodDogNDRweDtcclxuICAgIGJhY2tncm91bmQ6ICMyODI5MkI7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG59XHJcbi5wcmltYXJ5LWJne1xyXG4gICAgYmFja2dyb3VuZDogIzkyN0I2MjtcclxufVxyXG4uZGFyay1iZ3tcclxuICAgIGJhY2tncm91bmQ6ICMyODI5MkI7XHJcbn1cclxuLmxpbmstdmlld3tcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uLWxpbmU6IHVuZGVybGluZTtcclxuICAgIGNvbG9yOiAjOTI3QjYyO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDE0cHg7XHJcbiAgICAmOmhvdmVye1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbi1saW5lOiBub25lO1xyXG4gICAgfVxyXG59XHJcblxyXG4uZWRpdC13cmFwe1xyXG4gICAgcGFkZGluZzogMCA4NnB4O1xyXG4gICAgYmFja2dyb3VuZDogI0U1RTVFNTtcclxuICAgIGJveC1zaGFkb3c6IDBweCA0cHggMTRweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICAudG9wLXJvd3tcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEzMHB4O1xyXG4gICAgICAgIC5sYWJsZXtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICAgICAgY29sb3I6ICMyODI5MkI7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMzVweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnZhbHVle1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDYzcHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMjgyOTJCO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuYnV0dG9uLXdyYXB7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC51c2VyLWluZm8td3JhcHtcclxuICAgICAgICAucm93LWVkaXR7XHJcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDQ2cHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMTFweDtcclxuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDExcHg7XHJcbiAgICAgICAgICAgIC5jb2wtbmFtZXtcclxuICAgICAgICAgICAgICAgIG1pbi13aWR0aDogMTM1cHg7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogY2FsYygxMDAlIC8gMyAtIDI0OHB4KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuY29sLWluZm97XHJcbiAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDE5MHB4O1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAvIDMgKyAyMTlweCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmNvbC1lZGl0e1xyXG4gICAgICAgICAgICAgICAgbWluLXdpZHRoOiAxMTBweDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLyAzIC0gODJweCk7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XHJcbiAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmLmJvcmRlcntcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTQ2LCAxMjMsIDk4LCAwLjIpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAmOmxhc3QtY2hpbGR7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMTQ2LCAxMjMsIDk4LCAwLjIpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0= */"

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
        this.showElement = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.showResults = false;
        this.resultsDay = false;
        this.resultsCar = false;
        this.showMoreResults = false;
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
    SideBookingComponent.prototype.emit = function (showResults, resultsDay, resultsCar, showMoreResults) {
        var _this = this;
        showResults = !showResults;
        var navigationOption = {
            showResults: showResults,
            resultsDay: resultsDay,
            resultsCar: resultsCar,
            showMoreResults: showMoreResults
        };
        console.log(navigationOption, 'navigationOption');
        setTimeout(function () {
            _this.showElement.emit(navigationOption);
        }, 200);
    };
    SideBookingComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], SideBookingComponent.prototype, "showElement", void 0);
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