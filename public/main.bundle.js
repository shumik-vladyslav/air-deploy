webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<app-dashboard></app-dashboard>\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h1 {\n  color: red; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.sass")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dashboard_header_header_component__ = __webpack_require__("../../../../../src/app/dashboard/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dashboard_left_nav_left_nav_component__ = __webpack_require__("../../../../../src/app/dashboard/left-nav/left-nav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__dashboard_job_record_view_job_record_view_component__ = __webpack_require__("../../../../../src/app/dashboard/job-record-view/job-record-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_service_left_nav_service__ = __webpack_require__("../../../../../src/app/shared/service/left-nav.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_4__dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_5__dashboard_header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_6__dashboard_left_nav_left_nav_component__["a" /* LeftNavComponent */],
            __WEBPACK_IMPORTED_MODULE_7__dashboard_job_record_view_job_record_view_component__["a" /* JobRecordViewComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot()
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */],
            __WEBPACK_IMPORTED_MODULE_8__shared_service_left_nav_service__["a" /* LeftNavService */],
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "\n<app-header></app-header>\n<app-job-record-view></app-job-record-view>\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Component */])({
        selector: 'app-dashboard',
        template: __webpack_require__("../../../../../src/app/dashboard/dashboard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/dashboard.component.sass")]
    }),
    __metadata("design:paramtypes", [])
], DashboardComponent);

//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<!--//DESKTOP HEADER-->\n<div class=\"container-fluid header \">\n  <div class=\"row\">\n    <div class=\"navbar-header \" style=\"padding: 26px 0;display: flex;width: 320px;\">\n        <div class=\"col-md-3 medium-hamburger menu \">\n          <i (click)=\"openMenu()\" class=\"fa fa-bars hamburger\" aria-hidden=\"true\"></i>\n        </div>\n      <div class=\"col-3 large-hamburger menu \">\n        <i (click)=\"openMenu();addClass()\"   class=\"fa fa-bars hamburger\" aria-hidden=\"true\"></i>\n      </div>\n        <div class=\"col-md-9 logo \">\n          <img  src=\"./assets/fieldmagic.png\" alt=\"LOGO\">\n        </div>\n    </div>\n    <div class=\"col header-nav\">\n      <div class=\"search-form-wrapper\">\n        <form  class=\"ng-pristine ng-valid\">\n          <div class=\"input-group\">\n            <span class=\"icon-search\">\n              <i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n            </span>\n            <input type=\"text\" class=\"form-control\" id=\"inputSearch\" placeholder=\"Search\" required=\"\" autofocus=\"autofocus\">\n          </div>\n        </form>\n      </div>\n      <div class=\"col-md-6 col-lg-5 avatar\">\n        <span><i class=\"fa fa-plus\" aria-hidden=\"true\"></i></span>\n        <span><i class=\"fa fa-question\" aria-hidden=\"true\"></i></span>\n        <span><i class=\"fa fa-gear\" aria-hidden=\"true\"></i></span>\n        <span class=\"avatar-block\" style=\"position: relative;\">\n          <span class=\"online-status\"></span>\n          <img src=\"./assets/avatar.png\" alt=\"Avatar\">\n        </span>\n      </div>\n    </div>\n  </div>\n</div>\n\n<!--MOBILE HEADER-->\n<div class=\"container-fluid hide-class \">\n  <div class=\"row mobile-header \">\n    <div class=\"col-2\">\n      <i (click)=\"openMenu()\" class=\"fa fa-bars hamburger\" aria-hidden=\"true\"></i>\n    </div>\n    <div class=\"col-6 \"style=\"padding-top: 5px;padding-left: 10%;\" >\n      <img  class=\"img-fluid\" src=\"./assets/fieldmagic.png\" style=\"vertical-align: -webkit-baseline-middle\" alt=\"LOGO\">\n    </div>\n    <div class=\"col-4\" style=\"position: relative;\">\n      <span class=\"avatar-block\" style=\"position: relative;\">\n        <i class=\"fa fa-search\" (click)=\"openSearch()\" aria-hidden=\"true\" style=\"margin-right: 15px;\"></i>\n        <span class=\"online-status\"></span>\n        <img src=\"./assets/avatar.png\" (click)=\"showIcons = !showIcons\" alt=\"Avatar\">\n      </span>\n      <div *ngIf=\"showIcons\" class=\"drop-icons\">\n        <i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\n        <i class=\"fa fa-question\" aria-hidden=\"true\"></i>\n        <span><i class=\"fa fa-gear\" aria-hidden=\"true\"></i></span>\n      </div>\n    </div>\n  </div>\n  <div *ngIf=\"showSearch\" class=\"row input-search-mobile\">\n    <div class=\"col-12\" style=\"padding: 0;\">\n      <i class=\"fa fa-search\" aria-hidden=\"true\" style=\"margin-right: 15px;\"></i>\n      <i class=\"fa fa-times\" (click)=\"closeSearch()\" aria-hidden=\"true\"></i>\n      <input type=\"text\" placeholder=\"Search ...\">\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/header/header.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".header {\n  display: none; }\n  .header .menu {\n    text-align: center; }\n    .header .menu i {\n      color: #afb5b9;\n      font-size: 25px;\n      vertical-align: -webkit-baseline-middle; }\n  .header .header-nav {\n    padding: 20px 0;\n    background-color: #0e76bc; }\n    .header .header-nav .avatar {\n      float: right;\n      position: relative;\n      text-align: right;\n      padding-right: 50px; }\n      .header .header-nav .avatar .avatar-block {\n        border-radius: 50%;\n        display: inline-block;\n        height: 50px;\n        width: 50px; }\n      .header .header-nav .avatar .online-status {\n        display: block;\n        position: absolute;\n        top: 5px;\n        right: 0px;\n        z-index: 1;\n        background-color: #547df9;\n        border-radius: 50%;\n        border: 1.5px solid #fff;\n        width: 9px;\n        height: 9px; }\n      .header .header-nav .avatar i {\n        padding-top: 9px;\n        font-size: 20px;\n        color: white;\n        margin-right: 20px;\n        vertical-align: sub;\n        cursor: pointer; }\n    .header .header-nav .search-form-wrapper {\n      position: absolute;\n      right: 37%;\n      margin-top: 5px;\n      width: 30%; }\n      .header .header-nav .search-form-wrapper .input-group {\n        position: relative; }\n      .header .header-nav .search-form-wrapper .icon-search {\n        padding: 11px;\n        font-size: 14px;\n        font-weight: 400;\n        line-height: 1;\n        color: #fff;\n        background-color: #096cad;\n        border: 0 solid #ccc;\n        border-radius: 2px; }\n    .header .header-nav .form-control {\n      background-color: #096cad;\n      border-width: 0;\n      border-radius: 2px;\n      color: #fff;\n      padding-left: 0;\n      width: 100%;\n      height: 40px; }\n      .header .header-nav .form-control::-webkit-input-placeholder {\n        color: white; }\n\n.hamburger {\n  cursor: pointer; }\n\n.hide-class {\n  display: none; }\n\n.mobile-header {\n  text-align: center;\n  padding: 10px 0;\n  border-bottom: 1px solid #eeeeee; }\n  .mobile-header i {\n    padding-top: 14px; }\n\n.input-search-mobile {\n  padding: 0;\n  background-color: #096cad;\n  border-width: 0;\n  border-radius: 2px;\n  color: #fff;\n  height: 40px; }\n  .input-search-mobile .fa-search {\n    position: absolute;\n    top: 10px;\n    left: 10px; }\n  .input-search-mobile .fa-times {\n    position: absolute;\n    right: 11px;\n    top: 5px; }\n  .input-search-mobile input {\n    width: 100%;\n    padding-left: 30px;\n    background-color: transparent;\n    height: 100%;\n    border: 1px solid white;\n    color: white; }\n    .input-search-mobile input::-webkit-input-placeholder {\n      color: white; }\n\n.drop-icons {\n  position: absolute;\n  right: -9%;\n  bottom: -34px;\n  width: 120%; }\n  .drop-icons i {\n    margin: 0 10px;\n    cursor: pointer; }\n\n.avatar-block {\n  cursor: pointer; }\n\n@media (min-width: 992px) {\n  .header {\n    display: block; } }\n\n@media (max-width: 992px) {\n  .hide-class {\n    display: block; } }\n\n@media (max-width: 400px) {\n  .avatar-block .fa-search {\n    margin-right: 0 !important; } }\n\n.mobile-header .online-status {\n  display: block;\n  position: absolute;\n  top: -8px;\n  right: 0px;\n  z-index: 1;\n  background-color: #547df9;\n  border-radius: 50%;\n  border: 1.5px solid #fff;\n  width: 9px;\n  height: 9px; }\n\n@media (max-width: 1550px) {\n  .medium-hamburger {\n    display: block !important; }\n  .large-hamburger {\n    display: none !important; } }\n\n@media (min-width: 1550px) {\n  .medium-hamburger {\n    display: none !important; }\n  .large-hamburger {\n    display: block !important; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_service_left_nav_service__ = __webpack_require__("../../../../../src/app/shared/service/left-nav.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = (function () {
    function HeaderComponent(leftNavService) {
        this.leftNavService = leftNavService;
        this.showSearch = false;
    }
    HeaderComponent.prototype.openMenu = function () {
        this.leftNavService.showMenu.emit(true);
    };
    HeaderComponent.prototype.openSearch = function () {
        this.showSearch = true;
    };
    HeaderComponent.prototype.closeSearch = function () {
        this.showSearch = false;
    };
    HeaderComponent.prototype.addClass = function () {
        this.leftNavService.marginClass.emit(true);
    };
    HeaderComponent.prototype.ngOnInit = function () {
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Component */])({
        selector: 'app-header',
        template: __webpack_require__("../../../../../src/app/dashboard/header/header.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/header/header.component.sass")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_service_left_nav_service__["a" /* LeftNavService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_service_left_nav_service__["a" /* LeftNavService */]) === "function" && _a || Object])
], HeaderComponent);

var _a;
//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/job-record-view/job-record-view.component.html":
/***/ (function(module, exports) {

module.exports = "<app-left-nav></app-left-nav>\n<div class=\"col-content\" [ngClass]=\"{'margin-class' : showClass}\">\n  <div class=\"container-fluid\">\n    <div class=\"row row-heading\">\n      <div class=\"col-md-5 col-12 col-left\">\n        <h1 class=\"heading\">Job#100202</h1>\n      </div>\n      <div class=\"col-md-7 col-12 col-right\">\n        <div class=\"button-wrapper inline-buttons\">\n          <a class=\"btn btn-default\" style=\"margin-bottom: 10px\" href=\"#\"><span class=\"icon-wrapper\"><i class=\"fa fa-list\" aria-hidden=\"true\"></i></span>Manage Work Order</a>\n          <div class=\"dropdown-button-wrapper \">\n            <!-- Single button -->\n            <div class=\"btn-group dropdown\" ngbDropdown >\n              <button  id=\"dropdownBasic1\" style=\"margin-bottom: 10px;\"  class=\"btn btn-default btn-justify dropdown-toggle\" ngbDropdownToggle >\n                <span class=\"icon-wrapper\"><i class=\"fa fa-edit\" aria-hidden=\"true\"></i></span>Edit <span class=\"caret\"></span>\n              </button>\n              <ul class=\"dropdown-menu\"   ngbDropdownMenu aria-labelledby=\"dropdownBasic1\" >\n                <li  class=\"dropdown-item\"><a href=\"#\">Print</a></li>\n                <li  class=\"dropdown-item\"><a href=\"#\">Delete</a></li>\n                <li  class=\"dropdown-item\"><a href=\"#\">Download</a></li>\n              </ul>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"row col-wrapper customer-wrapper\">\n      <div class=\"col-md-7 col-sm-12 col-left\">\n        <div class=\"row\">\n          <div class=\"col-md-6 col-12 customer\">\n            <span>Customer</span>\n            <span>Financial Status: Active</span>\n          </div>\n          <div class=\"col-md-6 col-12 site hidden-sm-down\">\n            <span>Site</span>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-6 col-12 customer-under\">\n            <ul>\n              <li><span class=\"icon-wrapper\"><i class=\"fa fa-briefcase\" aria-hidden=\"true\"></i></span><a href=\"#\">First Express</a></li>\n              <li><span class=\"icon-wrapper\"><i class=\"fa fa-phone-square\" aria-hidden=\"true\"></i></span>03-9517-9800</li>\n              <li><span class=\"icon-wrapper\"><i class=\"fa fa-envelope\" aria-hidden=\"true\"></i></span><a href=\"mailto:eveline@yahoo.com\">eveline@yahoo.com</a></li>\n              <li><span class=\"icon-wrapper\"><i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i></span>288 N 168th Ave #266, Camberwell West, VI, 3124, Australia</li>\n            </ul>\n          </div>\n          <div class=\"col-md-6 col-12 site-under hidden-sm-down\">\n            <ul>\n              <li><span class=\"icon-wrapper\"><i class=\"fa fa-briefcase\" aria-hidden=\"true\"></i></span><a href=\"#\">15126 Goldenwest St</a></li>\n              <li><span class=\"icon-wrapper\"><i class=\"fa fa-phone-square\" aria-hidden=\"true\"></i></span>03-9517-9800</li>\n              <li><span class=\"icon-wrapper\"><i class=\"fa fa-envelope\" aria-hidden=\"true\"></i></span>-</li>\n              <li><span class=\"icon-wrapper\"><i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i></span>-</li>\n            </ul>\n          </div>\n          <div class=\"col-md-6 col-12 site hidden-md-up \" style=\"border-left: 1px solid #eeeeee\">\n            <span>Site</span>\n          </div>\n          <div class=\"col-md-6 site-under col-12 hidden-md-up\" style=\"border-left: 1px solid #eeeeee\">\n            <ul>\n              <li><span class=\"icon-wrapper\"><i class=\"fa fa-briefcase\" aria-hidden=\"true\"></i></span><a href=\"#\">15126 Goldenwest St</a></li>\n              <li><span class=\"icon-wrapper\"><i class=\"fa fa-phone-square\" aria-hidden=\"true\"></i></span>03-9517-9800</li>\n              <li><span class=\"icon-wrapper\"><i class=\"fa fa-envelope\" aria-hidden=\"true\"></i></span>-</li>\n              <li><span class=\"icon-wrapper\"><i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i></span>-</li>\n            </ul>\n          </div>\n        </div>\n        <div class=\"row create-block\">\n          <div class=\"col-md-12 col-sm-12\" style=\"padding: 0;\">\n            <ul class=\"first-block\">\n              <li class=\"col-md col-4\">1 Linked Contacts <a href=\"#\" class=\"\"><span class=\"icon-wrapper\"><i class=\"fa fa-plus-circle\" aria-hidden=\"true\"></i></span>Create Contact</a></li>\n              <li class=\"col-md col-4\">1 Total Open Quotes <a href=\"#\" class=\"\"><span class=\"icon-wrapper\"><i class=\"fa fa-plus-circle\" aria-hidden=\"true\"></i></span>Create Quote</a></li>\n              <li class=\"col-md col-4 \">2 Total Open Jobs <a href=\"#\" class=\"\"><span class=\"icon-wrapper\"><i class=\"fa fa-plus-circle\" aria-hidden=\"true\"></i></span>Create Job</a></li>\n              <li class=\"col-md hidden-sm-down \">1 Total Maintenace Schedules <a href=\"#\" class=\"\"><span class=\"icon-wrapper\"><i class=\"fa fa-plus-circle\" aria-hidden=\"true\"></i></span>Manage Maintenance</a></li>\n              <li class=\"col-md hidden-sm-down \">30 Total Active Assets <a href=\"#\" class=\"\"><span class=\"icon-wrapper\"><i class=\"fa fa-plus-circle\" aria-hidden=\"true\"></i></span>Manage Assets</a></li>\n            </ul>\n          </div>\n        </div>\n        <div class=\"row create-block hidden-md-up\">\n          <div class=\"col-md-12 col-sm-12\" style=\"padding: 0;\">\n            <ul class=\"first-block\">\n              <li class=\"col-md col-6  \">1 Total Maintenace Schedules <a href=\"#\" class=\"\"><span class=\"icon-wrapper\"><i class=\"fa fa-plus-circle\" aria-hidden=\"true\"></i></span>Manage Maintenance</a></li>\n              <li class=\"col-md col-6 hidden-md-up\">30 Total Active Assets <a href=\"#\" class=\"\"><span class=\"icon-wrapper\"><i class=\"fa fa-plus-circle\" aria-hidden=\"true\"></i></span>Manage Assets</a></li>\n            </ul>\n          </div>\n        </div>\n        <div class=\"row create-block\">\n          <div class=\"col-md-12 col-sm-12\"  style=\"padding: 0;\">\n            <ul class=\"second-block\">\n              <li class=\"col-md-6 col-12\">Show Financial Summary</li>\n              <li class=\"col-md-6 hidden-sm-down\">Show Resource Summary <a href=\"#\" class=\"\"><span class=\"icon-wrapper\"><i class=\"fa fa-plus-circle\" aria-hidden=\"true\"></i></span>Schedule This Job</a></li>\n            </ul>\n          </div>\n        </div>\n        <div class=\"row create-block hidden-md-up\">\n          <div class=\"col-md-12 col-sm-12\"  style=\"padding: 0;\">\n            <ul class=\"second-block\">\n              <li class=\"col-md-6 col-12\">Show Resource Summary <a href=\"#\" class=\"\"><span class=\"icon-wrapper\"><i class=\"fa fa-plus-circle\" aria-hidden=\"true\"></i></span>Schedule This Job</a></li>\n            </ul>\n          </div>\n        </div>\n        <div class=\"row create-block\">\n          <div class=\"col-md-12 col-sm-12\" style=\"padding: 0;\">\n            <ul class=\"third-block\">\n              <li class=\"col-md col-6\">1 Total Hours <a href=\"#\" class=\"\"><span class=\"icon-wrapper\"><i class=\"fa fa-plus-circle\" aria-hidden=\"true\"></i></span>Log Time Entry</a></li>\n              <li class=\"col-md col-6\">1 Total Materials <a href=\"#\" class=\"\"><span class=\"icon-wrapper\"><i class=\"fa fa-plus-circle\" aria-hidden=\"true\"></i></span>Log Materials</a></li>\n              <li class=\"col-md col-6 hidden-md-up\">2 Total Invoices <a href=\"#\" class=\"\"><span class=\"icon-wrapper\"><i class=\"fa fa-plus-circle\" aria-hidden=\"true\"></i></span>Create Invoice</a></li>\n              <li class=\"col-md col-6 hidden-md-up\">1 Total Purchase Orders <a href=\"#\" class=\"\"><span class=\"icon-wrapper\"><i class=\"fa fa-plus-circle\" aria-hidden=\"true\"></i></span>Generate Purchase Order</a></li>\n            </ul>\n          </div>\n        </div>\n        <div class=\"row create-block hidden-md-up\">\n          <div class=\"col-md-12 col-sm-12\" style=\"padding: 0;\">\n            <ul class=\"third-block\">\n              <li class=\"col-md col-6 hidden-md-up\">2 Total Invoices <a href=\"#\" class=\"\"><span class=\"icon-wrapper\"><i class=\"fa fa-plus-circle\" aria-hidden=\"true\"></i></span>Create Invoice</a></li>\n              <li class=\"col-md col-6 hidden-md-up\">1 Total Purchase Orders <a href=\"#\" class=\"\"><span class=\"icon-wrapper\"><i class=\"fa fa-plus-circle\" aria-hidden=\"true\"></i></span>Generate Purchase Order</a></li>\n            </ul>\n          </div>\n        </div>\n        <div class=\"row detailAcc\">\n            <div class=\"col-md-12 col-sm-12\" style=\"padding: 0;\">\n              <span style=\"margin-bottom: 20px;margin-top: 40px;display: block;\">Details</span>\n              <div id=\"accordion\" role=\"tablist\">\n                <div class=\"card\">\n                  <div class=\"card-header\" role=\"tab\" id=\"headingOne\">\n                    <h5 class=\"mb-0\" (click)=\"caretStatus = !caretStatus\">\n                      <a data-toggle=\"collapse\" href=\"#collapseOne\" aria-expanded=\"true\" aria-controls=\"collapseOne\">\n                        <i class=\"fa\" [ngClass]=\"{'fa-angle-down': caretStatus,'fa-angle-up': !caretStatus}\" aria-hidden=\"true\"></i>\n                        Account Information\n                      </a>\n                    </h5>\n                  </div>\n\n                  <div id=\"collapseOne\" class=\"collapse show\" role=\"tabpanel\" aria-labelledby=\"headingOne\" data-parent=\"#accordion\">\n                    <div class=\"card-body\">\n                      <div class=\"row inputs-block\">\n                        <div class=\"col-md\">\n                          <label for=\"accountOwner\">Account Owner</label>\n                          <input id=\"accountOwner\" type=\"text\">\n                          <i class=\"fa fa-pencil\" aria-hidden=\"true\"></i>\n                        </div>\n                        <div class=\"col-md\">\n                          <label for=\"accountName\">Account Name</label>\n                          <input id=\"accountName\" type=\"text\">\n                          <i class=\"fa fa-pencil\" aria-hidden=\"true\"></i>\n                        </div>\n                        <div class=\"col-md\">\n\n                        </div>\n                      </div>\n                      <div class=\"row inputs-block\" style=\"margin-top: 20px;\">\n                        <div class=\"col-md\">\n                          <label for=\"email\">Email</label>\n                          <input type=\"text\" id=\"email\">\n                          <i class=\"fa fa-pencil\" aria-hidden=\"true\"></i>\n                        </div>\n                        <div class=\"col-md\">\n                          <label for=\"phoneNumber\">Phone Number</label>\n                          <input type=\"text\" id=\"phoneNumber\">\n                          <i class=\"fa fa-pencil\" aria-hidden=\"true\"></i>\n                        </div>\n                        <div class=\"col-md\">\n                          <label for=\"Fax\">Fax</label>\n                          <input type=\"text\" id=\"Fax\">\n                          <i class=\"fa fa-pencil\" aria-hidden=\"true\"></i>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"card\">\n                  <div class=\"card-header\" role=\"tab\" id=\"headingTwo\">\n                    <h5 class=\"mb-0\" (click)=\"caretStatus2 = !caretStatus2\" >\n                      <a class=\"collapsed\" data-toggle=\"collapse\" href=\"#collapseTwo\" aria-expanded=\"false\" aria-controls=\"collapseTwo\">\n                        <i class=\"fa\" [ngClass]=\"{'fa-angle-down': !caretStatus2,'fa-angle-up': caretStatus2}\" aria-hidden=\"true\"></i>\n                        Additional Information\n                      </a>\n                    </h5>\n                  </div>\n                  <div id=\"collapseTwo\" class=\"collapse\" role=\"tabpanel\" aria-labelledby=\"headingTwo\" data-parent=\"#accordion\">\n                    <div class=\"card-body\">\n                      CONTENT GO HERE\n                    </div>\n                  </div>\n                </div>\n                <div class=\"card\">\n                  <div class=\"card-header\" role=\"tab\" id=\"headingThree\">\n                    <h5 class=\"mb-0\" (click)=\"caretStatus3 = !caretStatus3\">\n                      <a class=\"collapsed\" data-toggle=\"collapse\" href=\"#collapseThree\" aria-expanded=\"false\" aria-controls=\"collapseThree\">\n                        <i class=\"fa\" [ngClass]=\"{'fa-angle-down': !caretStatus3,'fa-angle-up': caretStatus3}\" aria-hidden=\"true\"></i>\n                        Address Information\n                      </a>\n                    </h5>\n                  </div>\n                  <div id=\"collapseThree\" class=\"collapse\" role=\"tabpanel\" aria-labelledby=\"headingThree\" data-parent=\"#accordion\">\n                    <div class=\"card-body\">\n                      CONTENT GO HERE\n                    </div>\n                  </div>\n                </div>\n                <div class=\"card\">\n                  <div class=\"card-header\" role=\"tab\" id=\"headingFour\">\n                    <h5 class=\"mb-0\" (click)=\"caretStatus4 = !caretStatus4\">\n                      <a class=\"collapsed\" data-toggle=\"collapse\" href=\"#collapseFour\" aria-expanded=\"false\" aria-controls=\"collapseThree\">\n                        <i class=\"fa\" [ngClass]=\"{'fa-angle-down': !caretStatus4,'fa-angle-up': caretStatus4}\" aria-hidden=\"true\"></i>\n                        Renewal/Co-Term Information\n                      </a>\n                    </h5>\n                  </div>\n                  <div id=\"collapseFour\" class=\"collapse\" role=\"tabpanel\" aria-labelledby=\"headingFour\" data-parent=\"#accordion\">\n                    <div class=\"card-body\">\n                      CONTENT GO HERE\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n        </div>\n      </div>\n      <div class=\"col-md-5 col-sm-12 mytabs\">\n        <!-- Nav tabs -->\n        <div class=\"tabs-wrapper\">\n          <ul class=\"nav classic-tabs tabs-cyan\" role=\"tablist\">\n            <li class=\"nav-item col-md-4\">\n              <a class=\"nav-link waves-light active\" data-toggle=\"tab\" href=\"#panel51\" role=\"tab\">ACTIVITY</a>\n            </li>\n            <li class=\"nav-item col-md-3\">\n              <a class=\"nav-link waves-light\" data-toggle=\"tab\" href=\"#panel52\" role=\"tab\">FILES</a>\n            </li>\n            <li class=\"nav-item col-md\">\n              <a class=\"nav-link waves-light\" data-toggle=\"tab\" href=\"#panel53\" role=\"tab\">MANAGE CHECKLIST</a>\n            </li>\n          </ul>\n        </div>\n\n        <!-- Tab panels -->\n        <div class=\"tab-content card\">\n\n          <!--Panel 1-->\n          <div class=\"tab-pane fade in show active\" id=\"panel51\" role=\"tabpanel\">\n            <p>ACCTIVITY TAB</p>\n          </div>\n          <!--/.Panel 1-->\n\n          <!--Panel 2-->\n          <div class=\"tab-pane fade\" id=\"panel52\" role=\"tabpanel\">\n            <p>FILES TAB</p>\n          </div>\n          <!--/.Panel 2-->\n\n          <!--Panel 3-->\n          <div class=\"tab-pane fade\" id=\"panel53\" role=\"tabpanel\">\n            <div class=\"table-responsive ng-scope\">\n              <table class=\"table table-no-border table-manage-checklist\">\n                <thead>\n                <tr>\n                  <th>Checklist Name</th>\n                  <th>Type</th>\n                  <th>Schedules</th>\n                  <th class=\"color-light-blue\">Attach Checklist<span class=\"icon-wrapper\"><i class=\"fa fa-paperclip\" aria-hidden=\"true\"></i></span></th>\n                </tr>\n                </thead>\n                <tbody>\n                <tr>\n                  <th scope=\"row\">Pump Diesel</th>\n                  <td>Asset</td>\n                  <td>Monthly</td>\n                  <td>\n                    <div class=\"buttons-wrapper inline-buttons\">\n                      <button type=\"button\" class=\"btn btn-icon btn-color-light-blue\"><span class=\"icon-wrapper\"><i class=\"fa fa-edit\" aria-hidden=\"true\"></i></span></button>\n                      <button type=\"button\" class=\"btn btn-icon btn-color-light-yellow\"><span class=\"icon-wrapper\"><i class=\"fa fa-trash\" aria-hidden=\"true\"></i></span></button>\n                    </div>\n                  </td>\n                </tr>\n                <tr>\n                  <th scope=\"row\">Fire Inspection Panels</th>\n                  <td>Asset</td>\n                  <td>6 Monthly</td>\n                  <td>\n                    <div class=\"buttons-wrapper inline-buttons\">\n                      <button type=\"button\" class=\"btn btn-icon btn-color-light-blue\"><span class=\"icon-wrapper\"><i class=\"fa fa-edit\" aria-hidden=\"true\"></i></span></button>\n                      <button type=\"button\" class=\"btn btn-icon btn-color-light-yellow\"><span class=\"icon-wrapper\"><i class=\"fa fa-trash\" aria-hidden=\"true\"></i></span></button>\n                    </div>\n                  </td>\n                </tr>\n                <tr>\n                  <th scope=\"row\">Hydrant Pump</th>\n                  <td>Asset</td>\n                  <td>6 Monthly</td>\n                  <td>\n                    <div class=\"buttons-wrapper inline-buttons\">\n                      <button type=\"button\" class=\"btn btn-icon btn-color-light-blue\"><span class=\"icon-wrapper\"><i class=\"fa fa-edit\" aria-hidden=\"true\"></i></span></button>\n                      <button type=\"button\" class=\"btn btn-icon btn-color-light-yellow\"><span class=\"icon-wrapper\"><i class=\"fa fa-trash\" aria-hidden=\"true\"></i></span></button>\n                    </div>\n                  </td>\n                </tr>\n                </tbody>\n              </table>\n            </div>\n          </div>\n          <!--/.Panel 3-->\n\n\n\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/job-record-view/job-record-view.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".row-heading {\n  border-bottom: 1px solid #eee;\n  margin-bottom: 50px;\n  padding-bottom: 20px; }\n\n.col-content {\n  padding: 30px; }\n  .col-content .heading {\n    font-size: 24px;\n    color: #0e76bc;\n    font-family: 'Roboto', sans-serif;\n    font-weight: 400; }\n  .col-content .button-wrapper {\n    text-align: right; }\n    .col-content .button-wrapper .btn {\n      display: inline-block;\n      margin-left: 10px;\n      padding: 6px 12px;\n      margin-bottom: 0;\n      font-size: 14px;\n      font-weight: 400;\n      height: 40px;\n      line-height: 2;\n      border: 0 solid transparent; }\n    .col-content .button-wrapper .btn-default {\n      color: #fff;\n      background-color: #0e76bc; }\n      .col-content .button-wrapper .btn-default .icon-wrapper {\n        margin-right: 5px; }\n    .col-content .button-wrapper .dropdown-button-wrapper {\n      display: inline-block;\n      margin-left: 10px;\n      min-width: 130px; }\n      .col-content .button-wrapper .dropdown-button-wrapper .btn-group {\n        width: 100%; }\n        .col-content .button-wrapper .dropdown-button-wrapper .btn-group .btn {\n          width: 100%; }\n        .col-content .button-wrapper .dropdown-button-wrapper .btn-group .dropdown-menu {\n          left: -29px !important;\n          border: 1px solid rgba(0, 0, 0, 0.15);\n          box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175); }\n          .col-content .button-wrapper .dropdown-button-wrapper .btn-group .dropdown-menu .dropdown-item a {\n            color: black; }\n            .col-content .button-wrapper .dropdown-button-wrapper .btn-group .dropdown-menu .dropdown-item a:hover {\n              text-decoration: none; }\n      .col-content .button-wrapper .dropdown-button-wrapper #dropdownBasic1 {\n        cursor: pointer; }\n        .col-content .button-wrapper .dropdown-button-wrapper #dropdownBasic1:focus {\n          color: #333;\n          background-color: #d4d4d4;\n          border-color: #8c8c8c;\n          box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125); }\n\n.customer-wrapper .customer {\n  border: 1px solid #eee;\n  padding: 10px 20px; }\n  .customer-wrapper .customer span:first-child {\n    color: #777777;\n    font-size: 18px;\n    font-family: 'Roboto', sans-serif;\n    font-weight: 400;\n    vertical-align: -webkit-baseline-middle; }\n  .customer-wrapper .customer span:nth-child(2) {\n    float: right;\n    font-family: 'Roboto', sans-serif;\n    font-weight: 500;\n    background-color: #2bb673;\n    padding: 5px 10px;\n    color: white;\n    font-size: 14px;\n    border-radius: 4px; }\n\n.customer-wrapper .customer-under {\n  border-left: 1px solid #eee;\n  border-right: 1px solid #eee;\n  border-bottom: 1px solid #eee;\n  padding-top: 15px;\n  padding-bottom: 15px;\n  margin-bottom: 10px; }\n  .customer-wrapper .customer-under ul {\n    list-style: none;\n    padding-left: 0;\n    margin-bottom: 0; }\n    .customer-wrapper .customer-under ul li {\n      margin: 5px 0;\n      color: #777777;\n      font-size: 14px; }\n      .customer-wrapper .customer-under ul li a {\n        text-decoration: none;\n        color: #55acee; }\n    .customer-wrapper .customer-under ul i {\n      display: inline-block;\n      margin-right: 10px;\n      min-width: 16px;\n      text-align: center;\n      color: #777777; }\n\n.customer-wrapper .site {\n  border-top: 1px solid #eee;\n  border-bottom: 1px solid #eee;\n  border-right: 1px solid #eee;\n  padding: 10px 20px; }\n  .customer-wrapper .site span {\n    color: #777777;\n    font-size: 18px;\n    font-family: 'Roboto', sans-serif;\n    font-weight: 400;\n    vertical-align: -webkit-baseline-middle; }\n\n.customer-wrapper .site-under {\n  border-right: 1px solid #eee;\n  border-bottom: 1px solid #eee;\n  padding-top: 15px;\n  padding-bottom: 15px;\n  margin-bottom: 10px; }\n  .customer-wrapper .site-under ul {\n    list-style: none;\n    padding-left: 0;\n    margin-bottom: 0; }\n    .customer-wrapper .site-under ul li {\n      margin: 5px 0;\n      color: #777777;\n      font-size: 14px; }\n      .customer-wrapper .site-under ul li a {\n        text-decoration: none;\n        color: #55acee; }\n    .customer-wrapper .site-under ul i {\n      display: inline-block;\n      margin-right: 10px;\n      min-width: 16px;\n      text-align: center;\n      color: #777777; }\n\n.create-block .first-block {\n  border: 1px solid #eee;\n  overflow: hidden;\n  padding: 0;\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  font-size: 14px; }\n  .create-block .first-block li {\n    display: inline-block;\n    vertical-align: top;\n    text-align: center;\n    color: #55acee;\n    padding: 10px 0; }\n    .create-block .first-block li:not(:last-child) {\n      border-right: 1px solid #eee; }\n  .create-block .first-block a {\n    display: block;\n    color: #55acee; }\n  .create-block .first-block span {\n    color: #2bb673;\n    margin-right: 4px;\n    min-width: 16px;\n    text-align: center;\n    display: inline-block; }\n\n.second-block {\n  border: 1px solid #eee;\n  overflow: hidden;\n  padding: 0;\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  font-size: 14px; }\n  .second-block li {\n    display: inline-block;\n    vertical-align: top;\n    text-align: center;\n    color: #55acee;\n    padding: 10px 0; }\n    .second-block li:not(:last-child) {\n      border-right: 1px solid #eee; }\n  .second-block a {\n    display: block;\n    color: #55acee; }\n  .second-block span {\n    color: #2bb673;\n    margin-right: 4px;\n    min-width: 16px;\n    text-align: center;\n    display: inline-block; }\n\n.third-block {\n  border: 1px solid #eee;\n  overflow: hidden;\n  padding: 0;\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  font-size: 14px; }\n  .third-block li {\n    display: inline-block;\n    vertical-align: top;\n    text-align: center;\n    color: #55acee;\n    padding: 10px 0; }\n    .third-block li:not(:last-child) {\n      border-right: 1px solid #eee; }\n  .third-block a {\n    display: block;\n    color: #55acee; }\n  .third-block span {\n    color: #2bb673;\n    margin-right: 4px;\n    min-width: 16px;\n    text-align: center;\n    display: inline-block; }\n\n.detailAcc .card {\n  border-radius: 0;\n  border-left: 1px solid #eee;\n  border-right: 1px solid #eee;\n  border-bottom: 1px solid #eee;\n  border-top: none; }\n  .detailAcc .card i {\n    font-size: 15px;\n    margin-right: 5px;\n    font-weight: bold; }\n  .detailAcc .card:first-child {\n    border-top: 1px solid #eee; }\n\n.detailAcc .card-header {\n  background-color: transparent;\n  border-radius: 0;\n  border-bottom: none; }\n  .detailAcc .card-header a {\n    text-decoration: none;\n    color: #55acee;\n    font-size: 14px;\n    font-family: 'Roboto', sans-serif;\n    font-weight: 500; }\n\n.detailAcc .card-body {\n  padding: 20px;\n  background-color: #f7f8fc;\n  border-top: 1px solid #eee; }\n\n.inputs-block i {\n  position: absolute;\n  top: 42px;\n  right: 27px;\n  color: #ccc; }\n\n.inputs-block input {\n  width: 100%;\n  border-radius: 4px;\n  border: 1px solid #eee;\n  color: #777777;\n  padding: 5px 10px; }\n\n.inputs-block label {\n  display: inline-block;\n  color: #777777;\n  padding-left: 10px; }\n\n.mytabs .tabs-wrapper {\n  border-top: 1px solid #eee;\n  border-left: 1px solid #eee;\n  border-right: 1px solid #eee;\n  text-align: center; }\n  .mytabs .tabs-wrapper li {\n    padding: 0; }\n  .mytabs .tabs-wrapper a {\n    color: #777777;\n    font-family: 'Roboto', sans-serif;\n    font-weight: 400;\n    font-size: 14px;\n    border-bottom: 6px solid transparent;\n    padding-top: 13px; }\n    .mytabs .tabs-wrapper a:hover {\n      color: #55acee;\n      border-bottom: 6px solid #55acee; }\n    .mytabs .tabs-wrapper a:focus {\n      color: #55acee;\n      border-bottom: 6px solid #55acee; }\n\n.mytabs .card {\n  border-top: 1px solid #eee;\n  border-radius: 0 !important;\n  padding: 12px 25px; }\n\n.table {\n  width: 100%;\n  max-width: 100%;\n  margin-bottom: 1rem;\n  font-size: 14px;\n  font-family: 'Roboto', sans-serif; }\n  .table i {\n    cursor: pointer; }\n  .table th {\n    color: #777777;\n    font-weight: 300;\n    border: none;\n    padding: 5px;\n    vertical-align: inherit; }\n    .table th:last-child {\n      color: #55acee; }\n      .table th:last-child i {\n        margin-left: 5px; }\n  .table td {\n    color: #777777;\n    font-weight: 300;\n    border: none;\n    vertical-align: inherit;\n    padding: 5px; }\n    .table td .btn {\n      display: inline-block;\n      font-weight: 400;\n      line-height: 1.25;\n      text-align: center;\n      white-space: nowrap;\n      vertical-align: middle;\n      -webkit-user-select: none;\n      -moz-user-select: none;\n      -ms-user-select: none;\n      user-select: none;\n      border: 1px solid transparent;\n      padding: .5rem 1rem;\n      font-size: 1rem;\n      border-radius: .25rem;\n      transition: all .2s ease-in-out;\n      background-color: transparent; }\n    .table td span {\n      margin-left: 4px; }\n\n.btn-color-light-yellow {\n  color: #fdcd8c !important; }\n\n.btn-color-light-blue {\n  color: #55acee; }\n\n.margin-class {\n  margin-left: 320px; }\n  .margin-class .customer-wrapper .col-left {\n    -webkit-box-flex: 0 !important;\n    -ms-flex: 0 0 100% !important;\n    flex: 0 0 100% !important;\n    max-width: 100% !important; }\n  .margin-class .mytabs {\n    -webkit-box-flex: 0 !important;\n    -ms-flex: 0 0 100% !important;\n    flex: 0 0 100% !important;\n    max-width: 100% !important;\n    margin-top: 20px !important;\n    padding: 0; }\n\n@media (max-width: 1280px) {\n  .col-content {\n    margin-left: 0; } }\n\n@media (max-width: 770px) {\n  .row-heading .col-left {\n    width: 100%;\n    text-align: center;\n    -webkit-box-flex: 0;\n    -ms-flex: 0 0 100%;\n    flex: 0 0 100%;\n    max-width: 100%; }\n  .row-heading .col-right {\n    -webkit-box-flex: 0;\n    -ms-flex: 0 0 100%;\n    flex: 0 0 100%;\n    max-width: 100%; }\n    .row-heading .col-right .button-wrapper {\n      text-align: center;\n      margin-top: 20px; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/job-record-view/job-record-view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_service_left_nav_service__ = __webpack_require__("../../../../../src/app/shared/service/left-nav.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobRecordViewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var JobRecordViewComponent = (function () {
    function JobRecordViewComponent(leftNavService) {
        var _this = this;
        this.leftNavService = leftNavService;
        this.showClass = true;
        this.leftNavService.marginClass.subscribe(function (data) {
            _this.showClass = !_this.showClass;
        });
    }
    JobRecordViewComponent.prototype.ngOnInit = function () {
    };
    return JobRecordViewComponent;
}());
JobRecordViewComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Component */])({
        selector: 'app-job-record-view',
        template: __webpack_require__("../../../../../src/app/dashboard/job-record-view/job-record-view.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/job-record-view/job-record-view.component.sass")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_service_left_nav_service__["a" /* LeftNavService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_service_left_nav_service__["a" /* LeftNavService */]) === "function" && _a || Object])
], JobRecordViewComponent);

var _a;
//# sourceMappingURL=job-record-view.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/left-nav/left-nav.component.html":
/***/ (function(module, exports) {

module.exports = "<div  *ngIf=\"showMenu\" class=\"menu\" aria-expanded=\"true\" aria-hidden=\"false\" style=\"\">\n    <ul class=\"\">\n      <li><a href=\"#\"><span class=\"icon-wrapper\"><i class=\"fa fa-id-card\" aria-hidden=\"true\"></i></span>Leads</a></li>\n      <li><a href=\"#\"><span class=\"icon-wrapper\"><i class=\"fa fa-users\" aria-hidden=\"true\"></i></span>Customers</a></li>\n      <li><a href=\"#\"><span class=\"icon-wrapper\"><i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i></span>Sites</a></li>\n      <li><a href=\"#\"><span class=\"icon-wrapper\"><i class=\"fa fa-address-book\" aria-hidden=\"true\"></i></span>Contacts</a></li>\n      <li><a href=\"#\"><span class=\"icon-wrapper\"><i class=\"fa fa-paste\" aria-hidden=\"true\"></i></span>Quotes</a></li>\n      <li><a href=\"#\"><span class=\"icon-wrapper\"><i class=\"fa fa-wrench\" aria-hidden=\"true\"></i></span>Jobs</a></li>\n      <li><a href=\"#\"><span class=\"icon-wrapper\"><i class=\"fa fa-calendar\" aria-hidden=\"true\"></i></span>Scheduling</a></li>\n      <li><a href=\"#\"><span class=\"icon-wrapper\"><i class=\"fa fa-dollar\" aria-hidden=\"true\"></i></span>Sales</a></li>\n      <li><a href=\"#\"><span class=\"icon-wrapper\"><i class=\"fa fa-shopping-bag\" aria-hidden=\"true\"></i></span>Purchase Orders</a></li>\n      <li><a href=\"#\"><span class=\"icon-wrapper\"><i class=\"fa fa-desktop\" aria-hidden=\"true\"></i></span>Dashboard &amp; Reports</a></li>\n    </ul>\n  </div>\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/left-nav/left-nav.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".menu {\n  float: left;\n  width: 320px;\n  z-index: 100;\n  box-shadow: 4px 3px 8px 0px rgba(119, 119, 119, 0.16);\n  background-color: white;\n  height: 130vh; }\n  .menu ul {\n    padding-left: 20px; }\n  .menu li {\n    list-style: none;\n    padding: 10px 20px;\n    margin-bottom: 15px; }\n    .menu li a {\n      text-decoration: none;\n      color: #777777; }\n    .menu li:hover {\n      background-color: #0e76bc;\n      border-radius: 4px 0 0 4px;\n      cursor: pointer; }\n      .menu li:hover a {\n        color: white; }\n    .menu li i {\n      display: inline-block;\n      background-color: #0e76bc;\n      border-radius: 50%;\n      border: 2px solid #7bb4da;\n      color: #fff;\n      width: 34px;\n      height: 34px;\n      margin-right: 10px;\n      text-align: center;\n      line-height: 2;\n      font-size: 15px; }\n\n@media (max-width: 1550px) {\n  .menu {\n    position: absolute; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/left-nav/left-nav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_service_left_nav_service__ = __webpack_require__("../../../../../src/app/shared/service/left-nav.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LeftNavComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LeftNavComponent = (function () {
    function LeftNavComponent(leftNavService) {
        var _this = this;
        this.leftNavService = leftNavService;
        this.showMenu = true;
        this.leftNavService.showMenu.subscribe(function (data) {
            _this.showMenu = !_this.showMenu;
        });
    }
    LeftNavComponent.prototype.ngOnInit = function () {
    };
    return LeftNavComponent;
}());
LeftNavComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Component */])({
        selector: 'app-left-nav',
        template: __webpack_require__("../../../../../src/app/dashboard/left-nav/left-nav.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/left-nav/left-nav.component.sass")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_service_left_nav_service__["a" /* LeftNavService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_service_left_nav_service__["a" /* LeftNavService */]) === "function" && _a || Object])
], LeftNavComponent);

var _a;
//# sourceMappingURL=left-nav.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/service/left-nav.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LeftNavService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LeftNavService = (function () {
    function LeftNavService() {
        this.showMenu = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* EventEmitter */]();
        this.marginClass = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* EventEmitter */]();
    }
    return LeftNavService;
}());
LeftNavService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], LeftNavService);

//# sourceMappingURL=left-nav.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map