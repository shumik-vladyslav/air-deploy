webpackJsonp([2],{

/***/ "./src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "./src async recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n<!--<app-orders-board></app-orders-board>-->"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent.prototype.onClick = function () {
        this.message = 'Hello ' + this.name;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("./src/app/app.component.html"),
        styles: [__webpack_require__("./src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_primeng_primeng__ = __webpack_require__("./node_modules/primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_primeng_primeng__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_odata__ = __webpack_require__("./node_modules/angular2-odata/build/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_odata___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_angular2_odata__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__orders_board_orders_board_component__ = __webpack_require__("./src/app/orders-board/orders-board.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_routes__ = __webpack_require__("./src/app/app.routes.ts");
/* unused harmony export MyODataConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






// import { ClipboardModule } from 'angular2-clipboard';







var MyODataConfig = (function (_super) {
    __extends(MyODataConfig, _super);
    function MyODataConfig() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // baseUrl= 'http://dev.avtokompaniya.ru/api/';
        _this.baseUrl = 'http://dev.avtokompaniya.ru/api/';
        return _this;
    }
    return MyODataConfig;
}(__WEBPACK_IMPORTED_MODULE_7_angular2_odata__["ODataConfiguration"]));
MyODataConfig = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Injectable"])()
], MyODataConfig);

var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_9__orders_board_orders_board_component__["a" /* OrdersBoardComponent */],
            __WEBPACK_IMPORTED_MODULE_10__login_login_component__["a" /* LoginComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["BrowserModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_5__angular_http__["HttpModule"],
            __WEBPACK_IMPORTED_MODULE_6_primeng_primeng__["InputTextModule"],
            __WEBPACK_IMPORTED_MODULE_6_primeng_primeng__["ButtonModule"],
            __WEBPACK_IMPORTED_MODULE_6_primeng_primeng__["CheckboxModule"],
            __WEBPACK_IMPORTED_MODULE_6_primeng_primeng__["DataTableModule"],
            __WEBPACK_IMPORTED_MODULE_6_primeng_primeng__["SharedModule"],
            __WEBPACK_IMPORTED_MODULE_6_primeng_primeng__["DropdownModule"],
            __WEBPACK_IMPORTED_MODULE_6_primeng_primeng__["ListboxModule"],
            __WEBPACK_IMPORTED_MODULE_6_primeng_primeng__["OverlayPanelModule"],
            __WEBPACK_IMPORTED_MODULE_6_primeng_primeng__["ChipsModule"],
            __WEBPACK_IMPORTED_MODULE_6_primeng_primeng__["ToolbarModule"],
            __WEBPACK_IMPORTED_MODULE_0__angular_router__["RouterModule"].forRoot(__WEBPACK_IMPORTED_MODULE_11__app_routes__["a" /* ROUTES */]),
            __WEBPACK_IMPORTED_MODULE_6_primeng_primeng__["PaginatorModule"],
            __WEBPACK_IMPORTED_MODULE_6_primeng_primeng__["ToggleButtonModule"]
        ],
        // providers: [ { provide: ODataConfiguration, useFactory: () => { 
        //       const odta = new ODataConfiguration();
        //       odta.baseUrl = 'http://dev.avtokompaniya.ru/api/';
        //       return odta; }
        //   }, ODataServiceFactory ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "./src/app/app.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__orders_board_orders_board_component__ = __webpack_require__("./src/app/orders-board/orders-board.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ROUTES; });


var ROUTES = [
    // Main redirect
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    // App views
    { path: '', component: __WEBPACK_IMPORTED_MODULE_0__login_login_component__["a" /* LoginComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_0__login_login_component__["a" /* LoginComponent */] },
    { path: 'orders', component: __WEBPACK_IMPORTED_MODULE_1__orders_board_orders_board_component__["a" /* OrdersBoardComponent */] },
    { path: '**', redirectTo: 'login' }
];
//# sourceMappingURL=app.routes.js.map

/***/ }),

/***/ "./src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body{\r\n    background-color:#f5f5f5;\r\n}\r\n.form-signin\r\n{\r\n    max-width: 330px;\r\n    padding: 15px;\r\n    margin: 0 auto;\r\n}\r\n.form-signin .form-control\r\n{\r\n    position: relative;\r\n    font-size: 16px;\r\n    height: auto;\r\n    padding: 10px;\r\n    box-sizing: border-box;\r\n}\r\n.form-signin .form-control:focus\r\n{\r\n    z-index: 2;\r\n}\r\n.form-signin input[type=\"text\"]\r\n{\r\n    margin-bottom: -1px;\r\n    border-bottom-left-radius: 0;\r\n    border-bottom-right-radius: 0;\r\n}\r\n.form-signin input[type=\"password\"]\r\n{\r\n    margin-bottom: 10px;\r\n    border-top-left-radius: 0;\r\n    border-top-right-radius: 0;\r\n}\r\n.account-wall\r\n{\r\n    margin-top: 80px;\r\n    padding: 40px 0px 20px 0px;\r\n    background-color: #ffffff;\r\n    box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.16);\r\n}\r\n.login-title\r\n{\r\n    color: #555;\r\n    font-size: 22px;\r\n    font-weight: 400;\r\n    display: block;\r\n}\r\n.profile-img\r\n{\r\n    width: 96px;\r\n    height: 96px;\r\n    margin: 0 auto 10px;\r\n    display: block;\r\n    border-radius: 50%;\r\n}\r\n.select-img\r\n{\r\n\tborder-radius: 50%;\r\n    display: block;\r\n    height: 75px;\r\n    margin: 0 30px 10px;\r\n    width: 75px;\r\n    border-radius: 50%;\r\n}\r\n.select-name\r\n{\r\n    display: block;\r\n    margin: 30px 10px 10px;\r\n}\r\n\r\n.logo-img\r\n{\r\n    width: 96px;\r\n    height: 96px;\r\n    margin: 0 auto 10px;\r\n    display: block;\r\n    border-radius: 50%;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-6 col-md-4 col-md-offset-4\">\r\n      <div class=\"account-wall\">\r\n        <div id=\"my-tab-content\" class=\"tab-content\">\r\n          <div class=\"tab-pane active\" id=\"login\">\r\n            <img class=\"profile-img\" src=\"https://lh5.googleusercontent.com/-b0-k99FZlyE/AAAAAAAAAAI/AAAAAAAAAAA/eu7opA4byxI/photo.jpg?sz=120\"\r\n              alt=\"\">\r\n            <form class=\"form-signin\" action=\"\" method=\"\">\r\n              <div class=\"form-group\">\r\n                <div *ngIf=\"loginError\" class=\"alert alert-danger\">\r\n                  {{errorMessage}}\r\n                </div>\r\n              </div>\r\n              <input [(ngModel)]=\"username\" name=\"username\" type=\"text\" class=\"form-control\" placeholder=\"Username\" required autofocus>\r\n              <input [(ngModel)]=\"password\" name=\"password\" type=\"password\" class=\"form-control\" placeholder=\"Password\" required>\r\n              <input type=\"button\" (click)=\"login()\" class=\"btn btn-lg btn-default btn-block\" value=\"Sign In\" />\r\n            </form>\r\n            <div id=\"tabs\" data-tabs=\"tabs\">\r\n              <br>\r\n              <br>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = (function () {
    function LoginComponent(http, router) {
        this.http = http;
        this.router = router;
        this.loginError = false;
        this.errorMessage = '';
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'Content-Type': 'application/x-www-form-urlencoded' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: headers });
        var body = "grant_type=password&username=" + this.username + "&password=" + this.password;
        var url = 'https://cat.avtokompaniya.ru/api/Token';
        //  const url = 'http://dev.avtokompaniya.ru/api/Token';
        this.http.post(url, body, options)
            .map(function (res) { return res.json(); })
            .subscribe(function (authInfo) {
            _this.authInfo = authInfo;
            console.log(authInfo);
            localStorage.setItem('currentUser', JSON.stringify(authInfo));
            _this.router.navigate(['orders']);
        }, function (error) {
            _this.loginError = true;
            _this.errorMessage = 'Login error. User not found';
            console.log("Sign in error: " + error.message);
        });
    };
    LoginComponent.prototype.logout = function () {
        localStorage.removeItem('currentUser');
        this.router.navigate(['login']);
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__("./src/app/login/login.component.html"),
        styles: [__webpack_require__("./src/app/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]) === "function" && _b || Object])
], LoginComponent);

var _a, _b;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "./src/app/orders-board/orders-board.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/orders-board/orders-board.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g\">\r\n  <div class=\"ui-g-3\" [hidden]=\"isResponsiveFlag && !checked\">\r\n    <!--<div class=\"ontop container\">\r\n      <div class=\"row\">\r\n\r\n      </div>\r\n    </div>-->\r\n    <!--<p-paginator rows=\"10\" totalRecords=\"totalOrders\"  alwaysShow [rowsPerPageOptions]=\"[10,20,30]\"></p-paginator>-->\r\n    <!--Suppliers filter-->\r\n    <div >\r\n      <p-toolbar [style]=\"{'height':'100%'}\">\r\n        <!--<div class=\"pre-scrollable\" style=\"height:100%;min-height:100%;\">-->\r\n          <label> Suppliers </label>\r\n          <p-listbox [options]=\"suppliersFilter\" [(ngModel)]=\"suppliersFilterSelected\" multiple=\"multiple\" checkbox=\"checkbox\" filter=\"filter\"\r\n            (onChange)=\"onChangeSuppliersFilter()\" [style]=\"{'width':'100%'}\">\r\n          </p-listbox>\r\n\r\n\r\n          <!--Statuses filter-->\r\n          <label> Statuses </label>\r\n          <p-listbox [options]=\"statusesFilter\" [(ngModel)]=\"statusesFilterSelected\" multiple=\"multiple\" checkbox=\"checkbox\" filter=\"filter\"\r\n            (onChange)=\"onChangeStatusesFilter()\" [style]=\"{'width':'100%'}\">\r\n          </p-listbox>\r\n\r\n\r\n          <!--Customers filter-->\r\n          <label> Customers</label>\r\n          <p-listbox [options]=\"customersFilter\" [(ngModel)]=\"customersFilterSelected\" multiple=\"multiple\" checkbox=\"checkbox\" filter=\"filter\"\r\n            (onChange)=\"onChangeCustomersFilter()\" [style]=\"{'width':'100%'}\">\r\n          </p-listbox>\r\n\r\n        <!--</div>-->\r\n      </p-toolbar>\r\n    </div>\r\n  </div>\r\n\r\n  <div [ngClass]=\"{'ui-g-9': (!isResponsiveFlag || checked)}\">\r\n    <p-toolbar>\r\n      <div class=\"ui-toolbar-group-left\">\r\n        <span [hidden]=\"!(isResponsiveFlag)\">\r\n          <p-toggleButton [(ngModel)]=\"checked\" (onChange)=\"onApplyFilters($event)\" \r\n          onLabel=\"&nbsp;\" offLabel=\"&nbsp;\" onIcon=\"fa-bars\"  offIcon=\"fa-bars\" [style]=\"{'float':'left'}\"></p-toggleButton>\r\n          <!--<button  type=\"text\" pButton  iconPos=\"left\" (click)=\"onApplyFilters()\" ></button>-->\r\n        </span>\r\n        <span [hidden]=\"isResponsiveFlag\">\r\n          <button  type=\"text\" pButton label=\"Apply filters\" icon=\"fa-filter\" iconPos=\"left\" (click)=\"onApplyFilters()\" style=\"float: left;\"></button>\r\n        </span>\r\n      </div>\r\n      <div class=\"ui-toolbar-group-right\">\r\n        <div class=\"ui-helper-clearfix\">\r\n          <button type=\"button\" pButton icon=\"fa-file-o\" iconPos=\"left\" label=\"CSV\" (click)=\"dt.exportCSV()\" style=\"float: right;\"></button>\r\n          <button type=\"button\" pButton data-clipboard-target=\"#ordersTable\" icon=\"fa-clipboard\" iconPos=\"left\" label=\"Clipboard\" style=\"float:right;\"\r\n            (click)=\"onCopyToClipboard()\"></button>\r\n          <button type=\"button\" pButton icon=\"fa-file-excel-o\" iconPos=\"left\" label=\"Excell\" (click)=\"onExcellExport()\" style=\"float:right;\"></button>\r\n          <!--<button data-clipboard-target=\"#ordersTable\" label=\"Copy2Clipboard\"></button>-->\r\n          <!--<button class=\"btn\" [cbContent]=\"'target string'\">Copy to clipboard</button>-->\r\n        </div>\r\n      </div>\r\n    </p-toolbar>\r\n    <!--scrollable=\"true\" scrollHeight=\"550px\"-->\r\n    <p-dataTable id=\"ordersTable\" [value]=\"orders\" [rows]=\"10\" [paginator]=\"true\" [(selection)]=\"selectedOrders\" (onRowSelect)=\"onSelectionChange()\"\r\n      (onRowUnselect)=\"onSelectionChange()\" dataKey=\"Id\" [editable]=\"true\" #dt exportFilename=\"orders\" [lazy]=\"true\" [totalRecords]=\"totalOrders\"\r\n      (onLazyLoad)=\"loadOrdersLazy($event)\" [responsive]=\"true\" [stacked]=\"isResponsiveFlag\" [style]=\"{'width':'100%'}\">\r\n\r\n      <p-column selectionMode=\"multiple\"></p-column>\r\n      <p-column field=\"Id\" header=\"Id\"></p-column>\r\n      <p-column field=\"Code\" header=\"Код\"></p-column>\r\n      <p-column field=\"Brand\" header=\"Бренд\"></p-column>\r\n      <p-column field=\"Name\" header=\"Название\"></p-column>\r\n      <p-column field=\"Count\" header=\"Кол-во\"></p-column>\r\n      <p-column field=\"Price\" header=\"Цена\" [editable]=\"true\">\r\n        <ng-template let-col let-order=\"rowData\" pTemplate=\"editor\">\r\n          <input type=\"text\" pInputText (keyup.enter)=\"onPriceChange(order)\" [(ngModel)]=\"order[col.field]\"/>\r\n        </ng-template>\r\n      </p-column>\r\n      <p-column field=\"PriceVendor\" header=\"Цена поставщика\" [editable]=\"true\" >\r\n        <ng-template let-col let-order=\"rowData\" pTemplate=\"editor\">\r\n          <input type=\"text\" pInputText (keyup.enter)=\"onPriceVendorChange(order)\" [(ngModel)]=\"order[col.field]\"/>\r\n        </ng-template>\r\n      </p-column>\r\n      <p-column field=\"CountVendor\" header=\"Количество у поставщика\"></p-column>\r\n      <p-column field=\"DeliveryTime\" header=\"Время доставки\"></p-column>\r\n      <p-column field=\"Status\" header=\"Статус\" [editable]=\"true\" [style]=\"{'overflow':'visible'}\">\r\n        <ng-template let-col let-order=\"rowData\" pTemplate=\"editor\">\r\n          <p-dropdown [(ngModel)]=\"order[col.field]\" [options]=\"orderStatusesDropBox\" [autoWidth]=\"false\" [style]=\"{'width':'100%'}\"\r\n            required=\"true\" (onChange)=\"onStatusChange(order)\">\r\n          </p-dropdown>\r\n        </ng-template>\r\n      </p-column>\r\n      <p-column field=\"OrderId\" header=\"Id заказа\"></p-column>\r\n      <p-column field=\"OrderDate\" header=\"Дата заказа\"></p-column>\r\n      <p-column field=\"Comment\" header=\"Комментарий\"></p-column>\r\n      <p-column field=\"CustomerId\" header=\"Id клиента\"></p-column>\r\n      <p-column field=\"SuppliersId\" header=\"Id поставщика\"></p-column>\r\n\r\n    </p-dataTable>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/orders-board/orders-board.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_primeng_primeng__ = __webpack_require__("./node_modules/primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_primeng_primeng__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ts_clipboard__ = __webpack_require__("./node_modules/ts-clipboard/ts-clipboard.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ts_clipboard___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ts_clipboard__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrdersBoardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var OrdersBoardComponent = (function () {
    function OrdersBoardComponent(http, router) {
        this.http = http;
        this.router = router;
        this.suppliersFilter = [];
        this.suppliersFilterSelected = [];
        this.statusesFilter = [];
        this.statusesFilterSelected = [];
        this.customersFilter = [];
        this.customersFilterSelected = [];
        this.orders = [];
        this.selectedOrders = [];
        this.totalOrders = 10;
        this.orderStatusesDropBox = [];
        this.apiPrefix = 'https://cat.avtokompaniya.ru/api';
        this.isResponsiveFlag = false;
    }
    OrdersBoardComponent.prototype.isResponsive = function () {
        var screanWidth = (window.innerWidth > 0) ? window.innerWidth : screen.width;
        // console.log(screanWidth);
        if (screanWidth <= 768) {
            this.isResponsiveFlag = true;
            return true;
        }
        this.isResponsiveFlag = false;
        return false;
    };
    OrdersBoardComponent.prototype.authHeader = function () {
        // create authorization header with jwt token
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.access_token) {
            var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"]({ 'Authorization': 'Bearer ' + currentUser.access_token });
            console.log('Bearer ' + currentUser.access_token);
            // return new RequestOptions();
            return new __WEBPACK_IMPORTED_MODULE_2__angular_http__["RequestOptions"]({ headers: headers, method: __WEBPACK_IMPORTED_MODULE_2__angular_http__["RequestMethod"].Get });
        }
        else {
            this.router.navigate(['login']);
        }
    };
    OrdersBoardComponent.prototype.ngOnInit = function () {
        var _this = this;
        var self = this;
        window.onresize = function (event) {
            self.isResponsive();
        };
        // get totalOrders
        setInterval(function () {
            console.log(_this.authHeader());
        }, 500);
        this.http.get(this.apiPrefix + "/OrderItems/$count")
            .map(function (res) { return res.json(); })
            .subscribe(
        // convert to dropdown required format
        function (numberStr) { return _this.totalOrders = +numberStr; }, function (error) { return console.log("Fetch totalOrders error: " + error); });
        // prepare status filter
        this.http.get(this.apiPrefix + "/Statuses", this.authHeader())
            .map(function (res) { return res.json(); })
            .subscribe(
        // convert to dropdown required format
        function (statuses) { return _this.orderStatusesDropBox = _this.statusesFilter = statuses.value.map(function (status) { return { label: status.Name, value: status.Id }; }); }, function (error) { return console.log("Fetch statuses error: " + error); });
        // prepare status filter
        this.http.get(this.apiPrefix + "/Suppliers", this.authHeader())
            .map(function (res) { return res.json(); })
            .subscribe(
        // convert to dropdown required format
        function (statuses) { return _this.suppliersFilter = statuses.value.map(function (status) { return { label: status.Name, value: status.Id }; }); }, function (error) { return console.log("Fetch suppliers error: " + error); });
        // prepare customers filter
        this.http.get(this.apiPrefix + "/Customers", this.authHeader())
            .map(function (res) { return res.json(); })
            .subscribe(
        // convert to dropdown required format
        function (statuses) { return _this.customersFilter = statuses.value.map(function (status) { return { label: status.Name, value: status.Id }; }); }, function (error) { return console.log("Fetch customers error: " + error); });
    };
    OrdersBoardComponent.prototype.onChangeSuppliersFilter = function (checked) {
        console.log(JSON.stringify(this.suppliersFilterSelected));
    };
    OrdersBoardComponent.prototype.onChangeStatusesFilter = function () {
        console.log(JSON.stringify(this.statusesFilterSelected));
    };
    OrdersBoardComponent.prototype.onChangeCustomersFilter = function () {
        console.log(JSON.stringify(this.customersFilterSelected));
        console.log(this.prepareOdataFilterString());
    };
    OrdersBoardComponent.prototype.onSelectionChange = function () {
        // setTimeout(() => console.log(JSON.stringify(this.selectedOrders)), 1000);
    };
    OrdersBoardComponent.prototype.onStatusChange = function (order) {
        var _this = this;
        console.log('onStatusChange');
        this.http.patch(this.apiPrefix + "/OrderItems/" + order.Id, { Status: order.Status }, this.authHeader())
            .map(function (res) { return res.json(); })
            .subscribe(function (resp) { return console.log("update seccess : " + resp); }, function (error) { return console.log("update error: " + error); });
        if (this.selectedOrders.includes(order)) {
            this.selectedOrders.forEach(function (element) {
                element.Status = order.Status;
                // send changes to server;
                _this.http.patch(_this.apiPrefix + "/OrderItems/" + element.Id, { Status: element.Status }, _this.authHeader())
                    .map(function (res) { return res.json(); })
                    .subscribe(function (resp) { return console.log("update seccess : " + resp); }, function (error) { return console.log("update error: " + error); });
            });
        }
    };
    OrdersBoardComponent.prototype.onPriceChange = function (order) {
        console.log('onPriceChange');
        console.log(JSON.stringify(order));
        this.http.patch(this.apiPrefix + "/OrderItems/" + order.Id, { Price: order.Price }, this.authHeader())
            .map(function (res) { return res.json(); })
            .subscribe(function (resp) { return console.log("update seccess : " + resp); }, function (error) { return console.log("update error: " + error); });
    };
    OrdersBoardComponent.prototype.onPriceVendorChange = function (order, price) {
        console.log(price);
        console.log('onPriceVendorChange');
        console.log(JSON.stringify(order));
        this.http.patch(this.apiPrefix + "/OrderItems/" + order.Id, { PriceVendor: order.PriceVendor }, this.authHeader())
            .map(function (res) { return res.json(); })
            .subscribe(function (resp) { return console.log("update seccess : " + resp); }, function (error) { return console.log("update error: " + error); });
    };
    OrdersBoardComponent.prototype.prepareOdataFilterString = function () {
        var filters = [];
        if (this.customersFilterSelected.length > 0) {
            var customerFilter = this.customersFilterSelected.reduce(function (prevVal, currItem) { return prevVal + " CustomerId eq " + currItem + " or"; }, '(');
            customerFilter = customerFilter.slice(0, -2) + " )";
            filters.push(customerFilter);
        }
        if (this.statusesFilterSelected.length > 0) {
            var statusFilter = this.statusesFilterSelected.reduce(function (prevVal, currItem) { return prevVal + " Status eq " + currItem + " or"; }, '(');
            statusFilter = statusFilter.slice(0, -2) + " )";
            filters.push(statusFilter);
        }
        if (this.suppliersFilterSelected.length > 0) {
            var suplierFilter = this.suppliersFilterSelected.reduce(function (prevVal, currItem) { return prevVal + " SuppliersId eq " + currItem + " or"; }, '(');
            suplierFilter = suplierFilter.slice(0, -2) + " )";
            filters.push(suplierFilter);
        }
        if (filters.length === 0) {
            return '';
        }
        var result = '';
        if (filters.length === 1) {
            result = filters[0];
        }
        else {
            result = filters.join(' and ');
        }
        console.log("result " + result);
        return result;
    };
    OrdersBoardComponent.prototype.onApplyFilters = function () {
        var _this = this;
        console.log('onApplyFilters');
        var filtersStr = this.prepareOdataFilterString();
        if (filtersStr !== '') {
            filtersStr = "$filter=" + filtersStr;
        }
        this.http.get(this.apiPrefix + "/OrderItems?" + filtersStr, this.authHeader())
            .map(function (res) { return res.json(); })
            .subscribe(
        // convert to dropdown required format
        function (orderitems) { return _this.orders = orderitems.value; }, function (error) { return console.log("Fetch orderitems error: " + error.message); });
    };
    OrdersBoardComponent.prototype.loadOrdersLazy = function (event) {
        var _this = this;
        console.log('load orders lazy');
        console.log('onApplyFilters');
        var filtersStr = this.prepareOdataFilterString();
        if (filtersStr !== '') {
            filtersStr = "$filter=" + filtersStr;
        }
        // todo auth token
        this.http.get(this.apiPrefix + "/OrderItems?" + filtersStr + "&$top=" + event.rows + "&$skip=" + event.first, this.authHeader())
            .map(function (res) { return res.json(); })
            .subscribe(
        // convert to dropdown required format
        function (orderitems) { return _this.orders = orderitems.value; }, function (error) { return console.log("Fetch orderitems error: " + error.message); });
    };
    OrdersBoardComponent.prototype.datenum = function (v, date1904) {
        if (date1904 === void 0) { date1904 = null; }
        if (date1904) {
            v += 1462;
        }
        var epoch = Date.parse(v);
        return (epoch - (new Date(Date.UTC(1899, 11, 30))).getTime()) / (24 * 60 * 60 * 1000);
    };
    OrdersBoardComponent.prototype.sheetFromArrayOfArrays = function (data, opts) {
        if (opts === void 0) { opts = null; }
        var keysArray = [];
        if (data && data.length > 0) {
            keysArray = Object.keys(data[0]);
        }
        var ws = {};
        var range = { s: { c: 10000000, r: 10000000 }, e: { c: 0, r: 0 } };
        for (var R = 0; R != data.length; ++R) {
            for (var C = 0; C != keysArray.length; ++C) {
                if (range.s.r > R) {
                    range.s.r = R;
                }
                if (range.s.c > C) {
                    range.s.c = C;
                }
                if (range.e.r < R) {
                    range.e.r = R;
                }
                if (range.e.c < C) {
                    range.e.c = C;
                }
                var cell = { v: data[R][keysArray[C]], t: '', z: '' };
                if (cell.v == null) {
                    continue;
                }
                var cell_ref = XLSX.utils.encode_cell({ c: C, r: R });
                if (typeof cell.v === 'number') {
                    cell.t = 'n';
                }
                else if (typeof cell.v === 'boolean') {
                    cell.t = 'b';
                }
                else if (cell.v instanceof Date) {
                    cell.t = 'n';
                    cell.z = XLSX.SSF._table[14];
                    cell.v = this.datenum(cell.v);
                }
                else {
                    cell.t = 's';
                }
                ws[cell_ref] = cell;
            }
        }
        if (range.s.c < 10000000) {
            ws['!ref'] = XLSX.utils.encode_range(range);
        }
        return ws;
    };
    // using https://www.npmjs.com/package/xlsx
    OrdersBoardComponent.prototype.onExcellExport = function () {
        var wb = {
            SheetNames: [],
            Sheets: {}
        };
        var ws = this.sheetFromArrayOfArrays(this.orders);
        var ws_name = 'vlad';
        /* add worksheet to workbook */
        wb.SheetNames.push(ws_name);
        wb.Sheets[ws_name] = ws;
        var wbout = XLSX.write(wb, { bookType: 'xlsx', bookSST: true, type: 'binary' });
        function s2ab(s) {
            var buf = new ArrayBuffer(s.length);
            var view = new Uint8Array(buf);
            for (var i = 0; i != s.length; ++i) {
                view[i] = s.charCodeAt(i) & 0xFF;
            }
            ;
            return buf;
        }
        saveAs(new Blob([s2ab(wbout)], { type: 'application/octet-stream' }), 'test.xlsx');
    };
    OrdersBoardComponent.prototype.onCopyToClipboard = function () {
        __WEBPACK_IMPORTED_MODULE_4_ts_clipboard__["Clipboard"].copy(this.tableToCSV());
    };
    OrdersBoardComponent.prototype.tableToCSV = function () {
        var _this = this;
        var data = this.dataTable.filteredValue || this.dataTable.value;
        // let csv = '\ufeff';
        var csv = '';
        // headers
        for (var i = 0; i < this.dataTable.columns.length; i++) {
            if (this.dataTable.columns[i].field) {
                csv += '"' + (this.dataTable.columns[i].header || this.dataTable.columns[i].field) + '"';
                if (i < (this.dataTable.columns.length - 1)) {
                    csv += this.dataTable.csvSeparator;
                }
            }
        }
        // body
        data.forEach(function (record, i) {
            csv += '\n';
            for (var i_1 = 0; i_1 < _this.dataTable.columns.length; i_1++) {
                if (_this.dataTable.columns[i_1].field) {
                    csv += '"' + _this.dataTable.resolveFieldData(record, _this.dataTable.columns[i_1].field) + '"';
                    if (i_1 < (_this.dataTable.columns.length - 1)) {
                        csv += _this.dataTable.csvSeparator;
                    }
                }
            }
        });
        return csv;
    };
    return OrdersBoardComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_primeng_primeng__["DataTable"]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_primeng_primeng__["DataTable"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_primeng_primeng__["DataTable"]) === "function" && _a || Object)
], OrdersBoardComponent.prototype, "dataTable", void 0);
OrdersBoardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-orders-board',
        template: __webpack_require__("./src/app/orders-board/orders-board.component.html"),
        styles: [__webpack_require__("./src/app/orders-board/orders-board.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"]) === "function" && _c || Object])
], OrdersBoardComponent);

var _a, _b, _c;
//# sourceMappingURL=orders-board.component.js.map

/***/ }),

/***/ "./src/environments/environment.ts":
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

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[1]);
//# sourceMappingURL=main.bundle.js.map