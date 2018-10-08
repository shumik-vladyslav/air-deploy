(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./pages/auth/auth.module": [
		"./src/app/pages/auth/auth.module.ts",
		"pages-auth-auth-module"
	],
	"./pages/home/home.module": [
		"./src/app/pages/home/home.module.ts",
		"pages-home-home-module"
	],
	"./pages/kyc/kyc.module": [
		"./src/app/pages/kyc/kyc.module.ts",
		"pages-kyc-kyc-module"
	],
	"./pages/settings/settings.module": [
		"./src/app/pages/settings/settings.module.ts",
		"pages-settings-settings-module~pages-wallet-wallet-module",
		"pages-settings-settings-module"
	],
	"./pages/wallet/wallet.module": [
		"./src/app/pages/wallet/wallet.module.ts",
		"pages-settings-settings-module~pages-wallet-wallet-module",
		"pages-wallet-wallet-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		var module = __webpack_require__(ids[0]);
		return module;
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

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
/* harmony import */ var _app_components_shell_shell_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/components/shell/shell.component */ "./src/app/components/shell/shell.component.ts");
/* harmony import */ var _app_components_wallet_wallet_shell_wallet_shell_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/components/wallet/wallet-shell/wallet-shell.component */ "./src/app/components/wallet/wallet-shell/wallet-shell.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    {
        path: '',
        loadChildren: './pages/home/home.module#HomeModule'
    },
    {
        path: 'app',
        component: _app_components_wallet_wallet_shell_wallet_shell_component__WEBPACK_IMPORTED_MODULE_3__["WalletShellComponent"],
        children: [
            {
                path: '',
                loadChildren: './pages/wallet/wallet.module#WalletModule'
            },
            {
                path: 'settings',
                loadChildren: './pages/settings/settings.module#SettingsModule'
            }
        ]
    },
    {
        path: 'auth',
        component: _app_components_shell_shell_component__WEBPACK_IMPORTED_MODULE_2__["ShellComponent"],
        children: [
            {
                path: '',
                loadChildren: './pages/auth/auth.module#AuthModule'
            }
        ]
    },
    {
        path: 'kyc',
        component: _app_components_shell_shell_component__WEBPACK_IMPORTED_MODULE_2__["ShellComponent"],
        children: [
            {
                path: '',
                loadChildren: './pages/kyc/kyc.module#KycModule'
            }
        ]
    },
    {
        path: 'login',
        redirectTo: 'auth/login'
    },
    {
        path: 'signup',
        redirectTo: 'auth/register'
    },
    {
        path: 'settings',
        redirectTo: 'app/settings'
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
                    scrollPositionRestoration: 'enabled',
                    anchorScrolling: 'enabled'
                })],
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

module.exports = "<div *ngIf=\"routeLoading || (processLoading$ | async)\" class=\"app-loading\" [class.process-loading]=\"processLoading$ | async\">\n    <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4NCjxzdmcgd2lkdGg9IjcwcHgiIGhlaWdodD0iNzBweCIgdmlld0JveD0iMCAwIDcwIDcwIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPg0KICAgIDwhLS0gR2VuZXJhdG9yOiBza2V0Y2h0b29sIDUxLjIgKDU3NTE5KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4NCiAgICA8dGl0bGU+Q0ZCREEyNDktMTVBOC00NzEyLUE1ODMtQTdDQzI5MDBDNUU4PC90aXRsZT4NCiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggc2tldGNodG9vbC48L2Rlc2M+DQogICAgPGRlZnM+PC9kZWZzPg0KICAgIDxnIGlkPSJpbnN0YXItd2ViIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4NCiAgICAgICAgPGcgaWQ9IkRlc2t0b3AtSEQtQ29weSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTY4NS4wMDAwMDAsIC0xNDQuMDAwMDAwKSIgZmlsbC1ydWxlPSJub256ZXJvIj4NCiAgICAgICAgICAgIDxnIGlkPSJIRUFERVIiPg0KICAgICAgICAgICAgICAgIDxnIGlkPSJMb2dvX1Rva2VuX0FydGJvYXJkLTE3IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg2ODUuMDAwMDAwLCAxNDQuMDAwMDAwKSI+DQogICAgICAgICAgICAgICAgICAgIDxjaXJjbGUgaWQ9Ik92YWwiIGZpbGw9IiMzMDM4NjQiIGN4PSIzNSIgY3k9IjM1IiByPSIzNSI+PC9jaXJjbGU+DQogICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0zMS40NDMxNDI3LDI0LjU0Nzc1MjcgTDM1LjM5NDM2NjIsMjAuNjU2MjAzNCBMMzkuMzkwMjcyNCwyNC41OTgwNDc0IEw0NS4wMzk0MzY5LDI0LjU5ODA0NzQgTDQ1LjAzOTQzNjksMzAuMTYxODk0MiBMNDkuMDM1MzQzMSwzNC4wOTc0NTE0IEw0NS4wMzk0MzY5LDM4LjAzMzAwODYgQzQ1LjA0Mjk1MTYsNDAuMjIyNDgyIDQ2Ljg0NDIxMTksNDEuOTk2NTM4NCA0OS4wNjcyNTkzLDQyIEw2MS44MzM3MzI3LDQyIEM2NS43MDQ0MDc0LDI5LjI4MTcwNjggNTkuNjgyODM2NSwxNS42NzAwMjY0IDQ3LjU4OTkxODYsOS44MDIwNDg4NSBDMzUuNDk3MDAwNywzLjkzNDA3MTM1IDIwLjg2OTU1MjgsNy41MjYwMDQ4NCAxMi45ODkyMDU0LDE4LjI5ODY0MTIgQzEyLjExODc0NzgsMTkuNTA5Njg1NSAxMi4wMDg1Njg5LDIxLjA5ODMzMTMgMTIuNzAzNzQwMiwyMi40MTQ3MDMyIEMxMy4zOTg5MTE0LDIzLjczMTA3NSAxNC43ODI4MTgyLDI0LjU1NDM1MjMgMTYuMjg5MzM4OCwyNC41NDc3NTI3IEwzMS40NDMxNDI3LDI0LjU0Nzc1MjcgWiIgaWQ9IlNoYXBlIiBmaWxsPSIjRkZGRkZGIj48L3BhdGg+DQogICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0zOC40OTQ0OTQsNDMuNjA0ODQwNiBMMzQuNTIzODY3MSw0Ny40OTIwMjUgTDMwLjU0MDUxMzgsNDMuNjA0ODQwNiBMMjQuOTA5MDk1OSw0My42MDQ4NDA2IEwyNC45MDkwOTU5LDM4LjA0OTA0MTggTDIwLjkyNTc0MjYsMzQuMTM2ODU5NSBMMjQuOTA5MDk1OSwzMC4yMjQ2NzcyIEMyNC45MDkwOTU5LDI4LjAyOTUyMzYgMjMuMDk3MTk4OSwyNi4yNSAyMC44NjIxMTA4LDI2LjI1IEw4LjIyNDgyNzA4LDI2LjI1IEM0LjIzNzg0MzMsMzguOTU2MjM3NCAxMC4yNDk2OTY2LDUyLjYyMzU3MTggMjIuNDAyNjIzLDU4LjQ4MTc3MDkgQzM0LjU1NTU0OTQsNjQuMzM5OTcgNDkuMjQxNTg4Niw2MC42NDk4NTE4IDU3LjAzNjgxMjYsNDkuNzc5MzM5MiBDNTcuODg3MDQ1NCw0OC41NzIzMjAzIDU3Ljk4NDM5MDgsNDcuMDAxNDEyIDU3LjI4OTQ3MzUsNDUuNzAyMDM0NyBDNTYuNTk0NTU2Miw0NC40MDI2NTc1IDU1LjIyMjM3MTEsNDMuNTg5ODMyNiA1My43Mjc5NTY4LDQzLjU5MjM0MTcgTDM4LjQ5NDQ5NCw0My42MDQ4NDA2IFoiIGlkPSJTaGFwZSIgZmlsbD0iI0ZGRkZGRiI+PC9wYXRoPg0KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNNDIuNDM1NjIyMywzMS45NDIwNjAxIEw0NS41LDM1IEw0Mi40MjI3NDY4LDM4LjA3NzI1MzIgTDQyLjQyMjc0NjgsMzguMDk2NTY2NSBMNDIuNDIyNzQ2OCw0Mi40MjI3NDY4IEwzOC4wNzcyNTMyLDQyLjQyMjc0NjggTDM4LjA1NzkzOTksNDIuNDM1NjIyMyBMMzUsNDUuNSBMMzEuOTIyNzQ2OCw0Mi40MjI3NDY4IEwzMS45MDM0MzM1LDQyLjQyMjc0NjggTDI3LjU3NzI1MzIsNDIuNDIyNzQ2OCBMMjcuNTc3MjUzMiwzOC4wNzcyNTMyIEwyNy41NjQzNzc3LDM4LjA1NzkzOTkgTDI0LjUsMzUgTDI3LjU3NzI1MzIsMzEuOTIyNzQ2OCBMMjcuNTc3MjUzMiwzMS45MDM0MzM1IEwyNy41NzcyNTMyLDI3LjU3NzI1MzIgTDMxLjkyMjc0NjgsMjcuNTc3MjUzMiBMMzEuOTQyMDYwMSwyNy41NjQzNzc3IEwzNSwyNC41IEwzOC4wNzcyNTMyLDI3LjU3NzI1MzIgTDM4LjA5MDEyODgsMjcuNTc3MjUzMiBMNDIuNDIyNzQ2OCwyNy41NzcyNTMyIEw0Mi40MjI3NDY4LDMxLjkyMjc0NjggTDQyLjQzNTYyMjMsMzEuOTQyMDYwMSBaIiBpZD0iQ29tYmluZWQtU2hhcGUiIGZpbGw9IiM2M0NBQjYiPjwvcGF0aD4NCiAgICAgICAgICAgICAgICA8L2c+DQogICAgICAgICAgICA8L2c+DQogICAgICAgIDwvZz4NCiAgICA8L2c+DQo8L3N2Zz4=\">\n    <svg class=\"spinner\" viewBox=\"25 25 50 50\">\n      <circle class=\"path\" cx=\"50\" cy=\"50\" r=\"20\" fill=\"none\" stroke-width=\"2\" stroke-miterlimit=\"10\"/>\n    </svg>\n</div>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".process-loading {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1080;\n  background-color: #000;\n  opacity: 0.5; }\n"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/fesm5/ngxs-store.js");
/* harmony import */ var _app_core_state_app_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/core/state/app.state */ "./src/app/core/state/app.state.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
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
    function AppComponent(router) {
        var _this = this;
        this.router = router;
        this.routeLoading = false;
        this.router.events.subscribe(function (event) {
            switch (true) {
                case event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"]: {
                    _this.routeLoading = true;
                    break;
                }
                case event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]:
                case event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationCancel"]:
                case event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationError"]: {
                    _this.routeLoading = false;
                    break;
                }
                default: {
                    break;
                }
            }
        });
    }
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Select"])(_app_core_state_app_state__WEBPACK_IMPORTED_MODULE_3__["AppState"].loading),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"])
    ], AppComponent.prototype, "processLoading$", void 0);
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_core_state_app_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/core/state/app.state */ "./src/app/core/state/app.state.ts");
/* harmony import */ var _app_core_state_auth_state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/core/state/auth.state */ "./src/app/core/state/auth.state.ts");
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @env/environment */ "./src/environments/environment.ts");
/* harmony import */ var _ngxs_devtools_plugin__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngxs/devtools-plugin */ "./node_modules/@ngxs/devtools-plugin/fesm5/ngxs-devtools-plugin.js");
/* harmony import */ var _ngxs_logger_plugin__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngxs/logger-plugin */ "./node_modules/@ngxs/logger-plugin/fesm5/ngxs-logger-plugin.js");
/* harmony import */ var _ngxs_storage_plugin__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngxs/storage-plugin */ "./node_modules/@ngxs/storage-plugin/fesm5/ngxs-storage-plugin.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/fesm5/ngxs-store.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _app_core_state_logout_plugin__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @app/core/state/logout.plugin */ "./src/app/core/state/logout.plugin.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _app_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @app/components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _components_shell_shell_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/shell/shell.component */ "./src/app/components/shell/shell.component.ts");
/* harmony import */ var _app_components_wallet_wallet_header_wallet_header_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @app/components/wallet/wallet-header/wallet-header.component */ "./src/app/components/wallet/wallet-header/wallet-header.component.ts");
/* harmony import */ var _app_components_wallet_wallet_shell_wallet_shell_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @app/components/wallet/wallet-shell/wallet-shell.component */ "./src/app/components/wallet/wallet-shell/wallet-shell.component.ts");
/* harmony import */ var _components_notifications_modal_notifications_modal_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/notifications-modal/notifications-modal.component */ "./src/app/components/notifications-modal/notifications-modal.component.ts");
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"],
                _app_components_wallet_wallet_header_wallet_header_component__WEBPACK_IMPORTED_MODULE_19__["WalletHeaderComponent"],
                _app_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_17__["FooterComponent"],
                _app_components_wallet_wallet_shell_wallet_shell_component__WEBPACK_IMPORTED_MODULE_20__["WalletShellComponent"],
                _components_shell_shell_component__WEBPACK_IMPORTED_MODULE_18__["ShellComponent"],
                _components_notifications_modal_notifications_modal_component__WEBPACK_IMPORTED_MODULE_21__["NotificationsModalComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_14__["SharedModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_10__["ToastrModule"].forRoot(),
                _ngxs_store__WEBPACK_IMPORTED_MODULE_9__["NgxsModule"].forRoot([
                    _app_core_state_app_state__WEBPACK_IMPORTED_MODULE_3__["AppState"],
                    _app_core_state_auth_state__WEBPACK_IMPORTED_MODULE_4__["AuthState"]
                ]),
                _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatSidenavModule"],
                _ngxs_storage_plugin__WEBPACK_IMPORTED_MODULE_8__["NgxsStoragePluginModule"].forRoot({
                    key: 'auth.token'
                }),
                !_env_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production ? [_ngxs_devtools_plugin__WEBPACK_IMPORTED_MODULE_6__["NgxsReduxDevtoolsPluginModule"].forRoot(), _ngxs_logger_plugin__WEBPACK_IMPORTED_MODULE_7__["NgxsLoggerPluginModule"].forRoot()] : [],
                _core_core_module__WEBPACK_IMPORTED_MODULE_13__["CoreModule"].forRoot(),
                _app_routing_module__WEBPACK_IMPORTED_MODULE_11__["AppRoutingModule"],
            ],
            providers: [{
                    provide: _ngxs_store__WEBPACK_IMPORTED_MODULE_9__["NGXS_PLUGINS"],
                    useValue: _app_core_state_logout_plugin__WEBPACK_IMPORTED_MODULE_15__["logoutPlugin"],
                    multi: true
                }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/footer/footer.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"container-fluid\">\n  <div class=\"container-fluid\">\n    <div class=\"foot-flex row align-items-center\">\n      <div class=\"nav-left col-lg\">\n        <div class=\"d-flex d-lg-none icon-row\">\n          <a target=\"_blank\" href=\"https://t.me/InsightsNetwork\">\n            <i class=\"fa fa-telegram\" aria-hidden=\"true\"></i>\n          </a>\n          <a target=\"_blank\" href=\"https://medium.com/insightsnetwork\">\n            <i class=\"fa fa-medium\" aria-hidden=\"true\"></i>\n          </a>\n          <a target=\"_blank\" href=\"https://twitter.com/instartoken\">\n            <i class=\"fa fa-twitter\" aria-hidden=\"true\"></i>\n          </a>\n          <a target=\"_blank\" href=\"https://www.reddit.com/r/instar/\">\n            <i class=\"fa fa-reddit-alien\" aria-hidden=\"true\"></i>\n          </a>\n        </div>\n        <div class=\"d-flex align-items-center logo-main-row\">\n          <svg width=\"33px\" height=\"33px\" viewBox=\"0 0 33 33\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\"\n            xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n            <g id=\"Page-1\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\n              <g id=\"Group-2\" fill-rule=\"nonzero\">\n                <path d=\"M14.39,10.49 L16.67,8.21 L18.97,10.51 L22.23,10.51 L22.23,13.77 L24.53,16.07 L22.23,18.37 C22.23,19.6513006 23.2686994,20.69 24.55,20.69 L31.91,20.69 C34.1440703,13.2469763 30.6743922,5.27910499 23.7035405,1.84444377 C16.7326888,-1.59021744 8.30059142,0.513439854 3.76,6.82 C3.25849265,7.52879747 3.19474868,8.45830427 3.5947998,9.22892907 C3.99485092,9.99955386 4.79172687,10.4822908 5.66,10.48 L14.39,10.49 Z\"\n                  id=\"Shape\" fill=\"#FFFFFF\" />\n                <path d=\"M19,21.64 L16.7,23.94 L14.4,21.64 L11.14,21.64 L11.14,18.38 L8.84,16.08 L11.14,13.78 C11.14,13.1593934 10.893465,12.5642053 10.4546299,12.1253701 C10.0157947,11.686535 9.42060659,11.44 8.8,11.44 L1.49,11.44 C-0.830111386,18.9234377 2.64328551,26.9820587 9.67671039,30.4339699 C16.7101353,33.8858811 25.2097111,31.7034356 29.71,25.29 C30.2011138,24.5801633 30.2575433,23.6563613 29.8564776,22.8920268 C29.455412,22.1276924 28.6631687,21.6492104 27.8,21.65 L19,21.64 Z\"\n                  id=\"Shape\" fill=\"#FFFFFF\" />\n                <polygon id=\"Shape\" fill=\"#4DBD97\" points=\"20.92 14.38 20.91 14.37 20.91 11.89 18.44 11.89 18.43 11.89 16.67 10.13 14.92 11.88 14.91 11.89 12.43 11.89 12.43 14.36 12.43 14.37 10.67 16.13 12.42 17.88 12.43 17.89 12.43 20.37 14.9 20.37 14.91 20.37 16.67 22.13 18.42 20.38 18.43 20.37 20.91 20.37 20.91 17.9 20.91 17.89 22.67 16.13\" />\n              </g>\n            </g>\n          </svg>\n          <a href=\"/\" class=\"navbar-brand\">INSIGHTS NETWORK</a>\n        </div>\n      </div>\n    </div>\n    <hr>\n    <div class=\"row\">\n      <div class=\"col-12 col-md-7 copyright\">\n        <p>Insights Network 2018 © All rights reserved</p>\n      </div>\n      <div class=\"col-12 col-md-5 ml-md-auto text-right d-flex\">\n        <div class=\"col-6\">\n          <p>\n            <a target=\"_blank\" href=\"https://insights.network/privacy/\">Privacy Policy</a>\n          </p>\n        </div>\n        <div class=\"col-6\">\n          <p>\n            <a target=\"_blank\" href=\"https://insights.network/terms/\">Terms of Service</a>\n          </p>\n        </div>\n      </div>\n    </div>\n  </div>\n</footer>\n"

/***/ }),

/***/ "./src/app/components/footer/footer.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*!\n * Bootstrap Grid v4.1.3 (https://getbootstrap.com/)\n * Copyright 2011-2018 The Bootstrap Authors\n * Copyright 2011-2018 Twitter, Inc.\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)\n */\n@-ms-viewport {\n  width: device-width; }\nhtml {\n  box-sizing: border-box;\n  -ms-overflow-style: scrollbar; }\n*,\n*::before,\n*::after {\n  box-sizing: inherit; }\n.container {\n  width: 100%;\n  padding-right: 15px;\n  padding-left: 15px;\n  margin-right: auto;\n  margin-left: auto; }\n@media (min-width: 576px) {\n    .container {\n      max-width: 540px; } }\n@media (min-width: 768px) {\n    .container {\n      max-width: 720px; } }\n@media (min-width: 992px) {\n    .container {\n      max-width: 960px; } }\n@media (min-width: 1200px) {\n    .container {\n      max-width: 1140px; } }\n.container-fluid {\n  width: 100%;\n  padding-right: 15px;\n  padding-left: 15px;\n  margin-right: auto;\n  margin-left: auto; }\n.row {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-flex-wrap: wrap;\n      -ms-flex-wrap: wrap;\n          flex-wrap: wrap;\n  margin-right: -15px;\n  margin-left: -15px; }\n.no-gutters {\n  margin-right: 0;\n  margin-left: 0; }\n.no-gutters > .col,\n  .no-gutters > [class*=\"col-\"] {\n    padding-right: 0;\n    padding-left: 0; }\n.col-1, .col-2, .col-3, .col-4, .col-5, .col-6, .col-7, .col-8, .col-9, .col-10, .col-11, .col-12, .col,\n.col-auto, .col-sm-1, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-10, .col-sm-11, .col-sm-12, .col-sm,\n.col-sm-auto, .col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-10, .col-md-11, .col-md-12, .col-md,\n.col-md-auto, .col-lg-1, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-10, .col-lg-11, .col-lg-12, .col-lg,\n.col-lg-auto, .col-xl-1, .col-xl-2, .col-xl-3, .col-xl-4, .col-xl-5, .col-xl-6, .col-xl-7, .col-xl-8, .col-xl-9, .col-xl-10, .col-xl-11, .col-xl-12, .col-xl,\n.col-xl-auto {\n  position: relative;\n  width: 100%;\n  min-height: 1px;\n  padding-right: 15px;\n  padding-left: 15px; }\n.col {\n  -webkit-flex-basis: 0;\n      -ms-flex-preferred-size: 0;\n          flex-basis: 0;\n  -webkit-box-flex: 1;\n  -webkit-flex-grow: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  max-width: 100%; }\n.col-auto {\n  -webkit-box-flex: 0;\n  -webkit-flex: 0 0 auto;\n      -ms-flex: 0 0 auto;\n          flex: 0 0 auto;\n  width: auto;\n  max-width: none; }\n.col-1 {\n  -webkit-box-flex: 0;\n  -webkit-flex: 0 0 8.33333333%;\n      -ms-flex: 0 0 8.33333333%;\n          flex: 0 0 8.33333333%;\n  max-width: 8.33333333%; }\n.col-2 {\n  -webkit-box-flex: 0;\n  -webkit-flex: 0 0 16.66666667%;\n      -ms-flex: 0 0 16.66666667%;\n          flex: 0 0 16.66666667%;\n  max-width: 16.66666667%; }\n.col-3 {\n  -webkit-box-flex: 0;\n  -webkit-flex: 0 0 25%;\n      -ms-flex: 0 0 25%;\n          flex: 0 0 25%;\n  max-width: 25%; }\n.col-4 {\n  -webkit-box-flex: 0;\n  -webkit-flex: 0 0 33.33333333%;\n      -ms-flex: 0 0 33.33333333%;\n          flex: 0 0 33.33333333%;\n  max-width: 33.33333333%; }\n.col-5 {\n  -webkit-box-flex: 0;\n  -webkit-flex: 0 0 41.66666667%;\n      -ms-flex: 0 0 41.66666667%;\n          flex: 0 0 41.66666667%;\n  max-width: 41.66666667%; }\n.col-6 {\n  -webkit-box-flex: 0;\n  -webkit-flex: 0 0 50%;\n      -ms-flex: 0 0 50%;\n          flex: 0 0 50%;\n  max-width: 50%; }\n.col-7 {\n  -webkit-box-flex: 0;\n  -webkit-flex: 0 0 58.33333333%;\n      -ms-flex: 0 0 58.33333333%;\n          flex: 0 0 58.33333333%;\n  max-width: 58.33333333%; }\n.col-8 {\n  -webkit-box-flex: 0;\n  -webkit-flex: 0 0 66.66666667%;\n      -ms-flex: 0 0 66.66666667%;\n          flex: 0 0 66.66666667%;\n  max-width: 66.66666667%; }\n.col-9 {\n  -webkit-box-flex: 0;\n  -webkit-flex: 0 0 75%;\n      -ms-flex: 0 0 75%;\n          flex: 0 0 75%;\n  max-width: 75%; }\n.col-10 {\n  -webkit-box-flex: 0;\n  -webkit-flex: 0 0 83.33333333%;\n      -ms-flex: 0 0 83.33333333%;\n          flex: 0 0 83.33333333%;\n  max-width: 83.33333333%; }\n.col-11 {\n  -webkit-box-flex: 0;\n  -webkit-flex: 0 0 91.66666667%;\n      -ms-flex: 0 0 91.66666667%;\n          flex: 0 0 91.66666667%;\n  max-width: 91.66666667%; }\n.col-12 {\n  -webkit-box-flex: 0;\n  -webkit-flex: 0 0 100%;\n      -ms-flex: 0 0 100%;\n          flex: 0 0 100%;\n  max-width: 100%; }\n.order-first {\n  -webkit-box-ordinal-group: 0;\n  -webkit-order: -1;\n      -ms-flex-order: -1;\n          order: -1; }\n.order-last {\n  -webkit-box-ordinal-group: 14;\n  -webkit-order: 13;\n      -ms-flex-order: 13;\n          order: 13; }\n.order-0 {\n  -webkit-box-ordinal-group: 1;\n  -webkit-order: 0;\n      -ms-flex-order: 0;\n          order: 0; }\n.order-1 {\n  -webkit-box-ordinal-group: 2;\n  -webkit-order: 1;\n      -ms-flex-order: 1;\n          order: 1; }\n.order-2 {\n  -webkit-box-ordinal-group: 3;\n  -webkit-order: 2;\n      -ms-flex-order: 2;\n          order: 2; }\n.order-3 {\n  -webkit-box-ordinal-group: 4;\n  -webkit-order: 3;\n      -ms-flex-order: 3;\n          order: 3; }\n.order-4 {\n  -webkit-box-ordinal-group: 5;\n  -webkit-order: 4;\n      -ms-flex-order: 4;\n          order: 4; }\n.order-5 {\n  -webkit-box-ordinal-group: 6;\n  -webkit-order: 5;\n      -ms-flex-order: 5;\n          order: 5; }\n.order-6 {\n  -webkit-box-ordinal-group: 7;\n  -webkit-order: 6;\n      -ms-flex-order: 6;\n          order: 6; }\n.order-7 {\n  -webkit-box-ordinal-group: 8;\n  -webkit-order: 7;\n      -ms-flex-order: 7;\n          order: 7; }\n.order-8 {\n  -webkit-box-ordinal-group: 9;\n  -webkit-order: 8;\n      -ms-flex-order: 8;\n          order: 8; }\n.order-9 {\n  -webkit-box-ordinal-group: 10;\n  -webkit-order: 9;\n      -ms-flex-order: 9;\n          order: 9; }\n.order-10 {\n  -webkit-box-ordinal-group: 11;\n  -webkit-order: 10;\n      -ms-flex-order: 10;\n          order: 10; }\n.order-11 {\n  -webkit-box-ordinal-group: 12;\n  -webkit-order: 11;\n      -ms-flex-order: 11;\n          order: 11; }\n.order-12 {\n  -webkit-box-ordinal-group: 13;\n  -webkit-order: 12;\n      -ms-flex-order: 12;\n          order: 12; }\n.offset-1 {\n  margin-left: 8.33333333%; }\n.offset-2 {\n  margin-left: 16.66666667%; }\n.offset-3 {\n  margin-left: 25%; }\n.offset-4 {\n  margin-left: 33.33333333%; }\n.offset-5 {\n  margin-left: 41.66666667%; }\n.offset-6 {\n  margin-left: 50%; }\n.offset-7 {\n  margin-left: 58.33333333%; }\n.offset-8 {\n  margin-left: 66.66666667%; }\n.offset-9 {\n  margin-left: 75%; }\n.offset-10 {\n  margin-left: 83.33333333%; }\n.offset-11 {\n  margin-left: 91.66666667%; }\n@media (min-width: 576px) {\n  .col-sm {\n    -webkit-flex-basis: 0;\n        -ms-flex-preferred-size: 0;\n            flex-basis: 0;\n    -webkit-box-flex: 1;\n    -webkit-flex-grow: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1;\n    max-width: 100%; }\n  .col-sm-auto {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 auto;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n    width: auto;\n    max-width: none; }\n  .col-sm-1 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 8.33333333%;\n        -ms-flex: 0 0 8.33333333%;\n            flex: 0 0 8.33333333%;\n    max-width: 8.33333333%; }\n  .col-sm-2 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 16.66666667%;\n        -ms-flex: 0 0 16.66666667%;\n            flex: 0 0 16.66666667%;\n    max-width: 16.66666667%; }\n  .col-sm-3 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 25%;\n        -ms-flex: 0 0 25%;\n            flex: 0 0 25%;\n    max-width: 25%; }\n  .col-sm-4 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 33.33333333%;\n        -ms-flex: 0 0 33.33333333%;\n            flex: 0 0 33.33333333%;\n    max-width: 33.33333333%; }\n  .col-sm-5 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 41.66666667%;\n        -ms-flex: 0 0 41.66666667%;\n            flex: 0 0 41.66666667%;\n    max-width: 41.66666667%; }\n  .col-sm-6 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 50%;\n        -ms-flex: 0 0 50%;\n            flex: 0 0 50%;\n    max-width: 50%; }\n  .col-sm-7 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 58.33333333%;\n        -ms-flex: 0 0 58.33333333%;\n            flex: 0 0 58.33333333%;\n    max-width: 58.33333333%; }\n  .col-sm-8 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 66.66666667%;\n        -ms-flex: 0 0 66.66666667%;\n            flex: 0 0 66.66666667%;\n    max-width: 66.66666667%; }\n  .col-sm-9 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 75%;\n        -ms-flex: 0 0 75%;\n            flex: 0 0 75%;\n    max-width: 75%; }\n  .col-sm-10 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 83.33333333%;\n        -ms-flex: 0 0 83.33333333%;\n            flex: 0 0 83.33333333%;\n    max-width: 83.33333333%; }\n  .col-sm-11 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 91.66666667%;\n        -ms-flex: 0 0 91.66666667%;\n            flex: 0 0 91.66666667%;\n    max-width: 91.66666667%; }\n  .col-sm-12 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 100%;\n        -ms-flex: 0 0 100%;\n            flex: 0 0 100%;\n    max-width: 100%; }\n  .order-sm-first {\n    -webkit-box-ordinal-group: 0;\n    -webkit-order: -1;\n        -ms-flex-order: -1;\n            order: -1; }\n  .order-sm-last {\n    -webkit-box-ordinal-group: 14;\n    -webkit-order: 13;\n        -ms-flex-order: 13;\n            order: 13; }\n  .order-sm-0 {\n    -webkit-box-ordinal-group: 1;\n    -webkit-order: 0;\n        -ms-flex-order: 0;\n            order: 0; }\n  .order-sm-1 {\n    -webkit-box-ordinal-group: 2;\n    -webkit-order: 1;\n        -ms-flex-order: 1;\n            order: 1; }\n  .order-sm-2 {\n    -webkit-box-ordinal-group: 3;\n    -webkit-order: 2;\n        -ms-flex-order: 2;\n            order: 2; }\n  .order-sm-3 {\n    -webkit-box-ordinal-group: 4;\n    -webkit-order: 3;\n        -ms-flex-order: 3;\n            order: 3; }\n  .order-sm-4 {\n    -webkit-box-ordinal-group: 5;\n    -webkit-order: 4;\n        -ms-flex-order: 4;\n            order: 4; }\n  .order-sm-5 {\n    -webkit-box-ordinal-group: 6;\n    -webkit-order: 5;\n        -ms-flex-order: 5;\n            order: 5; }\n  .order-sm-6 {\n    -webkit-box-ordinal-group: 7;\n    -webkit-order: 6;\n        -ms-flex-order: 6;\n            order: 6; }\n  .order-sm-7 {\n    -webkit-box-ordinal-group: 8;\n    -webkit-order: 7;\n        -ms-flex-order: 7;\n            order: 7; }\n  .order-sm-8 {\n    -webkit-box-ordinal-group: 9;\n    -webkit-order: 8;\n        -ms-flex-order: 8;\n            order: 8; }\n  .order-sm-9 {\n    -webkit-box-ordinal-group: 10;\n    -webkit-order: 9;\n        -ms-flex-order: 9;\n            order: 9; }\n  .order-sm-10 {\n    -webkit-box-ordinal-group: 11;\n    -webkit-order: 10;\n        -ms-flex-order: 10;\n            order: 10; }\n  .order-sm-11 {\n    -webkit-box-ordinal-group: 12;\n    -webkit-order: 11;\n        -ms-flex-order: 11;\n            order: 11; }\n  .order-sm-12 {\n    -webkit-box-ordinal-group: 13;\n    -webkit-order: 12;\n        -ms-flex-order: 12;\n            order: 12; }\n  .offset-sm-0 {\n    margin-left: 0; }\n  .offset-sm-1 {\n    margin-left: 8.33333333%; }\n  .offset-sm-2 {\n    margin-left: 16.66666667%; }\n  .offset-sm-3 {\n    margin-left: 25%; }\n  .offset-sm-4 {\n    margin-left: 33.33333333%; }\n  .offset-sm-5 {\n    margin-left: 41.66666667%; }\n  .offset-sm-6 {\n    margin-left: 50%; }\n  .offset-sm-7 {\n    margin-left: 58.33333333%; }\n  .offset-sm-8 {\n    margin-left: 66.66666667%; }\n  .offset-sm-9 {\n    margin-left: 75%; }\n  .offset-sm-10 {\n    margin-left: 83.33333333%; }\n  .offset-sm-11 {\n    margin-left: 91.66666667%; } }\n@media (min-width: 768px) {\n  .col-md {\n    -webkit-flex-basis: 0;\n        -ms-flex-preferred-size: 0;\n            flex-basis: 0;\n    -webkit-box-flex: 1;\n    -webkit-flex-grow: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1;\n    max-width: 100%; }\n  .col-md-auto {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 auto;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n    width: auto;\n    max-width: none; }\n  .col-md-1 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 8.33333333%;\n        -ms-flex: 0 0 8.33333333%;\n            flex: 0 0 8.33333333%;\n    max-width: 8.33333333%; }\n  .col-md-2 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 16.66666667%;\n        -ms-flex: 0 0 16.66666667%;\n            flex: 0 0 16.66666667%;\n    max-width: 16.66666667%; }\n  .col-md-3 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 25%;\n        -ms-flex: 0 0 25%;\n            flex: 0 0 25%;\n    max-width: 25%; }\n  .col-md-4 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 33.33333333%;\n        -ms-flex: 0 0 33.33333333%;\n            flex: 0 0 33.33333333%;\n    max-width: 33.33333333%; }\n  .col-md-5 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 41.66666667%;\n        -ms-flex: 0 0 41.66666667%;\n            flex: 0 0 41.66666667%;\n    max-width: 41.66666667%; }\n  .col-md-6 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 50%;\n        -ms-flex: 0 0 50%;\n            flex: 0 0 50%;\n    max-width: 50%; }\n  .col-md-7 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 58.33333333%;\n        -ms-flex: 0 0 58.33333333%;\n            flex: 0 0 58.33333333%;\n    max-width: 58.33333333%; }\n  .col-md-8 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 66.66666667%;\n        -ms-flex: 0 0 66.66666667%;\n            flex: 0 0 66.66666667%;\n    max-width: 66.66666667%; }\n  .col-md-9 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 75%;\n        -ms-flex: 0 0 75%;\n            flex: 0 0 75%;\n    max-width: 75%; }\n  .col-md-10 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 83.33333333%;\n        -ms-flex: 0 0 83.33333333%;\n            flex: 0 0 83.33333333%;\n    max-width: 83.33333333%; }\n  .col-md-11 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 91.66666667%;\n        -ms-flex: 0 0 91.66666667%;\n            flex: 0 0 91.66666667%;\n    max-width: 91.66666667%; }\n  .col-md-12 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 100%;\n        -ms-flex: 0 0 100%;\n            flex: 0 0 100%;\n    max-width: 100%; }\n  .order-md-first {\n    -webkit-box-ordinal-group: 0;\n    -webkit-order: -1;\n        -ms-flex-order: -1;\n            order: -1; }\n  .order-md-last {\n    -webkit-box-ordinal-group: 14;\n    -webkit-order: 13;\n        -ms-flex-order: 13;\n            order: 13; }\n  .order-md-0 {\n    -webkit-box-ordinal-group: 1;\n    -webkit-order: 0;\n        -ms-flex-order: 0;\n            order: 0; }\n  .order-md-1 {\n    -webkit-box-ordinal-group: 2;\n    -webkit-order: 1;\n        -ms-flex-order: 1;\n            order: 1; }\n  .order-md-2 {\n    -webkit-box-ordinal-group: 3;\n    -webkit-order: 2;\n        -ms-flex-order: 2;\n            order: 2; }\n  .order-md-3 {\n    -webkit-box-ordinal-group: 4;\n    -webkit-order: 3;\n        -ms-flex-order: 3;\n            order: 3; }\n  .order-md-4 {\n    -webkit-box-ordinal-group: 5;\n    -webkit-order: 4;\n        -ms-flex-order: 4;\n            order: 4; }\n  .order-md-5 {\n    -webkit-box-ordinal-group: 6;\n    -webkit-order: 5;\n        -ms-flex-order: 5;\n            order: 5; }\n  .order-md-6 {\n    -webkit-box-ordinal-group: 7;\n    -webkit-order: 6;\n        -ms-flex-order: 6;\n            order: 6; }\n  .order-md-7 {\n    -webkit-box-ordinal-group: 8;\n    -webkit-order: 7;\n        -ms-flex-order: 7;\n            order: 7; }\n  .order-md-8 {\n    -webkit-box-ordinal-group: 9;\n    -webkit-order: 8;\n        -ms-flex-order: 8;\n            order: 8; }\n  .order-md-9 {\n    -webkit-box-ordinal-group: 10;\n    -webkit-order: 9;\n        -ms-flex-order: 9;\n            order: 9; }\n  .order-md-10 {\n    -webkit-box-ordinal-group: 11;\n    -webkit-order: 10;\n        -ms-flex-order: 10;\n            order: 10; }\n  .order-md-11 {\n    -webkit-box-ordinal-group: 12;\n    -webkit-order: 11;\n        -ms-flex-order: 11;\n            order: 11; }\n  .order-md-12 {\n    -webkit-box-ordinal-group: 13;\n    -webkit-order: 12;\n        -ms-flex-order: 12;\n            order: 12; }\n  .offset-md-0 {\n    margin-left: 0; }\n  .offset-md-1 {\n    margin-left: 8.33333333%; }\n  .offset-md-2 {\n    margin-left: 16.66666667%; }\n  .offset-md-3 {\n    margin-left: 25%; }\n  .offset-md-4 {\n    margin-left: 33.33333333%; }\n  .offset-md-5 {\n    margin-left: 41.66666667%; }\n  .offset-md-6 {\n    margin-left: 50%; }\n  .offset-md-7 {\n    margin-left: 58.33333333%; }\n  .offset-md-8 {\n    margin-left: 66.66666667%; }\n  .offset-md-9 {\n    margin-left: 75%; }\n  .offset-md-10 {\n    margin-left: 83.33333333%; }\n  .offset-md-11 {\n    margin-left: 91.66666667%; } }\n@media (min-width: 992px) {\n  .col-lg {\n    -webkit-flex-basis: 0;\n        -ms-flex-preferred-size: 0;\n            flex-basis: 0;\n    -webkit-box-flex: 1;\n    -webkit-flex-grow: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1;\n    max-width: 100%; }\n  .col-lg-auto {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 auto;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n    width: auto;\n    max-width: none; }\n  .col-lg-1 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 8.33333333%;\n        -ms-flex: 0 0 8.33333333%;\n            flex: 0 0 8.33333333%;\n    max-width: 8.33333333%; }\n  .col-lg-2 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 16.66666667%;\n        -ms-flex: 0 0 16.66666667%;\n            flex: 0 0 16.66666667%;\n    max-width: 16.66666667%; }\n  .col-lg-3 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 25%;\n        -ms-flex: 0 0 25%;\n            flex: 0 0 25%;\n    max-width: 25%; }\n  .col-lg-4 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 33.33333333%;\n        -ms-flex: 0 0 33.33333333%;\n            flex: 0 0 33.33333333%;\n    max-width: 33.33333333%; }\n  .col-lg-5 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 41.66666667%;\n        -ms-flex: 0 0 41.66666667%;\n            flex: 0 0 41.66666667%;\n    max-width: 41.66666667%; }\n  .col-lg-6 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 50%;\n        -ms-flex: 0 0 50%;\n            flex: 0 0 50%;\n    max-width: 50%; }\n  .col-lg-7 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 58.33333333%;\n        -ms-flex: 0 0 58.33333333%;\n            flex: 0 0 58.33333333%;\n    max-width: 58.33333333%; }\n  .col-lg-8 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 66.66666667%;\n        -ms-flex: 0 0 66.66666667%;\n            flex: 0 0 66.66666667%;\n    max-width: 66.66666667%; }\n  .col-lg-9 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 75%;\n        -ms-flex: 0 0 75%;\n            flex: 0 0 75%;\n    max-width: 75%; }\n  .col-lg-10 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 83.33333333%;\n        -ms-flex: 0 0 83.33333333%;\n            flex: 0 0 83.33333333%;\n    max-width: 83.33333333%; }\n  .col-lg-11 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 91.66666667%;\n        -ms-flex: 0 0 91.66666667%;\n            flex: 0 0 91.66666667%;\n    max-width: 91.66666667%; }\n  .col-lg-12 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 100%;\n        -ms-flex: 0 0 100%;\n            flex: 0 0 100%;\n    max-width: 100%; }\n  .order-lg-first {\n    -webkit-box-ordinal-group: 0;\n    -webkit-order: -1;\n        -ms-flex-order: -1;\n            order: -1; }\n  .order-lg-last {\n    -webkit-box-ordinal-group: 14;\n    -webkit-order: 13;\n        -ms-flex-order: 13;\n            order: 13; }\n  .order-lg-0 {\n    -webkit-box-ordinal-group: 1;\n    -webkit-order: 0;\n        -ms-flex-order: 0;\n            order: 0; }\n  .order-lg-1 {\n    -webkit-box-ordinal-group: 2;\n    -webkit-order: 1;\n        -ms-flex-order: 1;\n            order: 1; }\n  .order-lg-2 {\n    -webkit-box-ordinal-group: 3;\n    -webkit-order: 2;\n        -ms-flex-order: 2;\n            order: 2; }\n  .order-lg-3 {\n    -webkit-box-ordinal-group: 4;\n    -webkit-order: 3;\n        -ms-flex-order: 3;\n            order: 3; }\n  .order-lg-4 {\n    -webkit-box-ordinal-group: 5;\n    -webkit-order: 4;\n        -ms-flex-order: 4;\n            order: 4; }\n  .order-lg-5 {\n    -webkit-box-ordinal-group: 6;\n    -webkit-order: 5;\n        -ms-flex-order: 5;\n            order: 5; }\n  .order-lg-6 {\n    -webkit-box-ordinal-group: 7;\n    -webkit-order: 6;\n        -ms-flex-order: 6;\n            order: 6; }\n  .order-lg-7 {\n    -webkit-box-ordinal-group: 8;\n    -webkit-order: 7;\n        -ms-flex-order: 7;\n            order: 7; }\n  .order-lg-8 {\n    -webkit-box-ordinal-group: 9;\n    -webkit-order: 8;\n        -ms-flex-order: 8;\n            order: 8; }\n  .order-lg-9 {\n    -webkit-box-ordinal-group: 10;\n    -webkit-order: 9;\n        -ms-flex-order: 9;\n            order: 9; }\n  .order-lg-10 {\n    -webkit-box-ordinal-group: 11;\n    -webkit-order: 10;\n        -ms-flex-order: 10;\n            order: 10; }\n  .order-lg-11 {\n    -webkit-box-ordinal-group: 12;\n    -webkit-order: 11;\n        -ms-flex-order: 11;\n            order: 11; }\n  .order-lg-12 {\n    -webkit-box-ordinal-group: 13;\n    -webkit-order: 12;\n        -ms-flex-order: 12;\n            order: 12; }\n  .offset-lg-0 {\n    margin-left: 0; }\n  .offset-lg-1 {\n    margin-left: 8.33333333%; }\n  .offset-lg-2 {\n    margin-left: 16.66666667%; }\n  .offset-lg-3 {\n    margin-left: 25%; }\n  .offset-lg-4 {\n    margin-left: 33.33333333%; }\n  .offset-lg-5 {\n    margin-left: 41.66666667%; }\n  .offset-lg-6 {\n    margin-left: 50%; }\n  .offset-lg-7 {\n    margin-left: 58.33333333%; }\n  .offset-lg-8 {\n    margin-left: 66.66666667%; }\n  .offset-lg-9 {\n    margin-left: 75%; }\n  .offset-lg-10 {\n    margin-left: 83.33333333%; }\n  .offset-lg-11 {\n    margin-left: 91.66666667%; } }\n@media (min-width: 1200px) {\n  .col-xl {\n    -webkit-flex-basis: 0;\n        -ms-flex-preferred-size: 0;\n            flex-basis: 0;\n    -webkit-box-flex: 1;\n    -webkit-flex-grow: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1;\n    max-width: 100%; }\n  .col-xl-auto {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 auto;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n    width: auto;\n    max-width: none; }\n  .col-xl-1 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 8.33333333%;\n        -ms-flex: 0 0 8.33333333%;\n            flex: 0 0 8.33333333%;\n    max-width: 8.33333333%; }\n  .col-xl-2 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 16.66666667%;\n        -ms-flex: 0 0 16.66666667%;\n            flex: 0 0 16.66666667%;\n    max-width: 16.66666667%; }\n  .col-xl-3 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 25%;\n        -ms-flex: 0 0 25%;\n            flex: 0 0 25%;\n    max-width: 25%; }\n  .col-xl-4 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 33.33333333%;\n        -ms-flex: 0 0 33.33333333%;\n            flex: 0 0 33.33333333%;\n    max-width: 33.33333333%; }\n  .col-xl-5 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 41.66666667%;\n        -ms-flex: 0 0 41.66666667%;\n            flex: 0 0 41.66666667%;\n    max-width: 41.66666667%; }\n  .col-xl-6 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 50%;\n        -ms-flex: 0 0 50%;\n            flex: 0 0 50%;\n    max-width: 50%; }\n  .col-xl-7 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 58.33333333%;\n        -ms-flex: 0 0 58.33333333%;\n            flex: 0 0 58.33333333%;\n    max-width: 58.33333333%; }\n  .col-xl-8 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 66.66666667%;\n        -ms-flex: 0 0 66.66666667%;\n            flex: 0 0 66.66666667%;\n    max-width: 66.66666667%; }\n  .col-xl-9 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 75%;\n        -ms-flex: 0 0 75%;\n            flex: 0 0 75%;\n    max-width: 75%; }\n  .col-xl-10 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 83.33333333%;\n        -ms-flex: 0 0 83.33333333%;\n            flex: 0 0 83.33333333%;\n    max-width: 83.33333333%; }\n  .col-xl-11 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 91.66666667%;\n        -ms-flex: 0 0 91.66666667%;\n            flex: 0 0 91.66666667%;\n    max-width: 91.66666667%; }\n  .col-xl-12 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 100%;\n        -ms-flex: 0 0 100%;\n            flex: 0 0 100%;\n    max-width: 100%; }\n  .order-xl-first {\n    -webkit-box-ordinal-group: 0;\n    -webkit-order: -1;\n        -ms-flex-order: -1;\n            order: -1; }\n  .order-xl-last {\n    -webkit-box-ordinal-group: 14;\n    -webkit-order: 13;\n        -ms-flex-order: 13;\n            order: 13; }\n  .order-xl-0 {\n    -webkit-box-ordinal-group: 1;\n    -webkit-order: 0;\n        -ms-flex-order: 0;\n            order: 0; }\n  .order-xl-1 {\n    -webkit-box-ordinal-group: 2;\n    -webkit-order: 1;\n        -ms-flex-order: 1;\n            order: 1; }\n  .order-xl-2 {\n    -webkit-box-ordinal-group: 3;\n    -webkit-order: 2;\n        -ms-flex-order: 2;\n            order: 2; }\n  .order-xl-3 {\n    -webkit-box-ordinal-group: 4;\n    -webkit-order: 3;\n        -ms-flex-order: 3;\n            order: 3; }\n  .order-xl-4 {\n    -webkit-box-ordinal-group: 5;\n    -webkit-order: 4;\n        -ms-flex-order: 4;\n            order: 4; }\n  .order-xl-5 {\n    -webkit-box-ordinal-group: 6;\n    -webkit-order: 5;\n        -ms-flex-order: 5;\n            order: 5; }\n  .order-xl-6 {\n    -webkit-box-ordinal-group: 7;\n    -webkit-order: 6;\n        -ms-flex-order: 6;\n            order: 6; }\n  .order-xl-7 {\n    -webkit-box-ordinal-group: 8;\n    -webkit-order: 7;\n        -ms-flex-order: 7;\n            order: 7; }\n  .order-xl-8 {\n    -webkit-box-ordinal-group: 9;\n    -webkit-order: 8;\n        -ms-flex-order: 8;\n            order: 8; }\n  .order-xl-9 {\n    -webkit-box-ordinal-group: 10;\n    -webkit-order: 9;\n        -ms-flex-order: 9;\n            order: 9; }\n  .order-xl-10 {\n    -webkit-box-ordinal-group: 11;\n    -webkit-order: 10;\n        -ms-flex-order: 10;\n            order: 10; }\n  .order-xl-11 {\n    -webkit-box-ordinal-group: 12;\n    -webkit-order: 11;\n        -ms-flex-order: 11;\n            order: 11; }\n  .order-xl-12 {\n    -webkit-box-ordinal-group: 13;\n    -webkit-order: 12;\n        -ms-flex-order: 12;\n            order: 12; }\n  .offset-xl-0 {\n    margin-left: 0; }\n  .offset-xl-1 {\n    margin-left: 8.33333333%; }\n  .offset-xl-2 {\n    margin-left: 16.66666667%; }\n  .offset-xl-3 {\n    margin-left: 25%; }\n  .offset-xl-4 {\n    margin-left: 33.33333333%; }\n  .offset-xl-5 {\n    margin-left: 41.66666667%; }\n  .offset-xl-6 {\n    margin-left: 50%; }\n  .offset-xl-7 {\n    margin-left: 58.33333333%; }\n  .offset-xl-8 {\n    margin-left: 66.66666667%; }\n  .offset-xl-9 {\n    margin-left: 75%; }\n  .offset-xl-10 {\n    margin-left: 83.33333333%; }\n  .offset-xl-11 {\n    margin-left: 91.66666667%; } }\n.d-none {\n  display: none !important; }\n.d-inline {\n  display: inline !important; }\n.d-inline-block {\n  display: inline-block !important; }\n.d-block {\n  display: block !important; }\n.d-table {\n  display: table !important; }\n.d-table-row {\n  display: table-row !important; }\n.d-table-cell {\n  display: table-cell !important; }\n.d-flex {\n  display: -webkit-box !important;\n  display: -webkit-flex !important;\n  display: -ms-flexbox !important;\n  display: flex !important; }\n.d-inline-flex {\n  display: -webkit-inline-box !important;\n  display: -webkit-inline-flex !important;\n  display: -ms-inline-flexbox !important;\n  display: inline-flex !important; }\n@media (min-width: 576px) {\n  .d-sm-none {\n    display: none !important; }\n  .d-sm-inline {\n    display: inline !important; }\n  .d-sm-inline-block {\n    display: inline-block !important; }\n  .d-sm-block {\n    display: block !important; }\n  .d-sm-table {\n    display: table !important; }\n  .d-sm-table-row {\n    display: table-row !important; }\n  .d-sm-table-cell {\n    display: table-cell !important; }\n  .d-sm-flex {\n    display: -webkit-box !important;\n    display: -webkit-flex !important;\n    display: -ms-flexbox !important;\n    display: flex !important; }\n  .d-sm-inline-flex {\n    display: -webkit-inline-box !important;\n    display: -webkit-inline-flex !important;\n    display: -ms-inline-flexbox !important;\n    display: inline-flex !important; } }\n@media (min-width: 768px) {\n  .d-md-none {\n    display: none !important; }\n  .d-md-inline {\n    display: inline !important; }\n  .d-md-inline-block {\n    display: inline-block !important; }\n  .d-md-block {\n    display: block !important; }\n  .d-md-table {\n    display: table !important; }\n  .d-md-table-row {\n    display: table-row !important; }\n  .d-md-table-cell {\n    display: table-cell !important; }\n  .d-md-flex {\n    display: -webkit-box !important;\n    display: -webkit-flex !important;\n    display: -ms-flexbox !important;\n    display: flex !important; }\n  .d-md-inline-flex {\n    display: -webkit-inline-box !important;\n    display: -webkit-inline-flex !important;\n    display: -ms-inline-flexbox !important;\n    display: inline-flex !important; } }\n@media (min-width: 992px) {\n  .d-lg-none {\n    display: none !important; }\n  .d-lg-inline {\n    display: inline !important; }\n  .d-lg-inline-block {\n    display: inline-block !important; }\n  .d-lg-block {\n    display: block !important; }\n  .d-lg-table {\n    display: table !important; }\n  .d-lg-table-row {\n    display: table-row !important; }\n  .d-lg-table-cell {\n    display: table-cell !important; }\n  .d-lg-flex {\n    display: -webkit-box !important;\n    display: -webkit-flex !important;\n    display: -ms-flexbox !important;\n    display: flex !important; }\n  .d-lg-inline-flex {\n    display: -webkit-inline-box !important;\n    display: -webkit-inline-flex !important;\n    display: -ms-inline-flexbox !important;\n    display: inline-flex !important; } }\n@media (min-width: 1200px) {\n  .d-xl-none {\n    display: none !important; }\n  .d-xl-inline {\n    display: inline !important; }\n  .d-xl-inline-block {\n    display: inline-block !important; }\n  .d-xl-block {\n    display: block !important; }\n  .d-xl-table {\n    display: table !important; }\n  .d-xl-table-row {\n    display: table-row !important; }\n  .d-xl-table-cell {\n    display: table-cell !important; }\n  .d-xl-flex {\n    display: -webkit-box !important;\n    display: -webkit-flex !important;\n    display: -ms-flexbox !important;\n    display: flex !important; }\n  .d-xl-inline-flex {\n    display: -webkit-inline-box !important;\n    display: -webkit-inline-flex !important;\n    display: -ms-inline-flexbox !important;\n    display: inline-flex !important; } }\n@media print {\n  .d-print-none {\n    display: none !important; }\n  .d-print-inline {\n    display: inline !important; }\n  .d-print-inline-block {\n    display: inline-block !important; }\n  .d-print-block {\n    display: block !important; }\n  .d-print-table {\n    display: table !important; }\n  .d-print-table-row {\n    display: table-row !important; }\n  .d-print-table-cell {\n    display: table-cell !important; }\n  .d-print-flex {\n    display: -webkit-box !important;\n    display: -webkit-flex !important;\n    display: -ms-flexbox !important;\n    display: flex !important; }\n  .d-print-inline-flex {\n    display: -webkit-inline-box !important;\n    display: -webkit-inline-flex !important;\n    display: -ms-inline-flexbox !important;\n    display: inline-flex !important; } }\n.flex-row {\n  -webkit-box-orient: horizontal !important;\n  -webkit-box-direction: normal !important;\n  -webkit-flex-direction: row !important;\n      -ms-flex-direction: row !important;\n          flex-direction: row !important; }\n.flex-column {\n  -webkit-box-orient: vertical !important;\n  -webkit-box-direction: normal !important;\n  -webkit-flex-direction: column !important;\n      -ms-flex-direction: column !important;\n          flex-direction: column !important; }\n.flex-row-reverse {\n  -webkit-box-orient: horizontal !important;\n  -webkit-box-direction: reverse !important;\n  -webkit-flex-direction: row-reverse !important;\n      -ms-flex-direction: row-reverse !important;\n          flex-direction: row-reverse !important; }\n.flex-column-reverse {\n  -webkit-box-orient: vertical !important;\n  -webkit-box-direction: reverse !important;\n  -webkit-flex-direction: column-reverse !important;\n      -ms-flex-direction: column-reverse !important;\n          flex-direction: column-reverse !important; }\n.flex-wrap {\n  -webkit-flex-wrap: wrap !important;\n      -ms-flex-wrap: wrap !important;\n          flex-wrap: wrap !important; }\n.flex-nowrap {\n  -webkit-flex-wrap: nowrap !important;\n      -ms-flex-wrap: nowrap !important;\n          flex-wrap: nowrap !important; }\n.flex-wrap-reverse {\n  -webkit-flex-wrap: wrap-reverse !important;\n      -ms-flex-wrap: wrap-reverse !important;\n          flex-wrap: wrap-reverse !important; }\n.flex-fill {\n  -webkit-box-flex: 1 !important;\n  -webkit-flex: 1 1 auto !important;\n      -ms-flex: 1 1 auto !important;\n          flex: 1 1 auto !important; }\n.flex-grow-0 {\n  -webkit-box-flex: 0 !important;\n  -webkit-flex-grow: 0 !important;\n      -ms-flex-positive: 0 !important;\n          flex-grow: 0 !important; }\n.flex-grow-1 {\n  -webkit-box-flex: 1 !important;\n  -webkit-flex-grow: 1 !important;\n      -ms-flex-positive: 1 !important;\n          flex-grow: 1 !important; }\n.flex-shrink-0 {\n  -webkit-flex-shrink: 0 !important;\n      -ms-flex-negative: 0 !important;\n          flex-shrink: 0 !important; }\n.flex-shrink-1 {\n  -webkit-flex-shrink: 1 !important;\n      -ms-flex-negative: 1 !important;\n          flex-shrink: 1 !important; }\n.justify-content-start {\n  -webkit-box-pack: start !important;\n  -webkit-justify-content: flex-start !important;\n      -ms-flex-pack: start !important;\n          justify-content: flex-start !important; }\n.justify-content-end {\n  -webkit-box-pack: end !important;\n  -webkit-justify-content: flex-end !important;\n      -ms-flex-pack: end !important;\n          justify-content: flex-end !important; }\n.justify-content-center {\n  -webkit-box-pack: center !important;\n  -webkit-justify-content: center !important;\n      -ms-flex-pack: center !important;\n          justify-content: center !important; }\n.justify-content-between {\n  -webkit-box-pack: justify !important;\n  -webkit-justify-content: space-between !important;\n      -ms-flex-pack: justify !important;\n          justify-content: space-between !important; }\n.justify-content-around {\n  -webkit-justify-content: space-around !important;\n      -ms-flex-pack: distribute !important;\n          justify-content: space-around !important; }\n.align-items-start {\n  -webkit-box-align: start !important;\n  -webkit-align-items: flex-start !important;\n      -ms-flex-align: start !important;\n          align-items: flex-start !important; }\n.align-items-end {\n  -webkit-box-align: end !important;\n  -webkit-align-items: flex-end !important;\n      -ms-flex-align: end !important;\n          align-items: flex-end !important; }\n.align-items-center {\n  -webkit-box-align: center !important;\n  -webkit-align-items: center !important;\n      -ms-flex-align: center !important;\n          align-items: center !important; }\n.align-items-baseline {\n  -webkit-box-align: baseline !important;\n  -webkit-align-items: baseline !important;\n      -ms-flex-align: baseline !important;\n          align-items: baseline !important; }\n.align-items-stretch {\n  -webkit-box-align: stretch !important;\n  -webkit-align-items: stretch !important;\n      -ms-flex-align: stretch !important;\n          align-items: stretch !important; }\n.align-content-start {\n  -webkit-align-content: flex-start !important;\n      -ms-flex-line-pack: start !important;\n          align-content: flex-start !important; }\n.align-content-end {\n  -webkit-align-content: flex-end !important;\n      -ms-flex-line-pack: end !important;\n          align-content: flex-end !important; }\n.align-content-center {\n  -webkit-align-content: center !important;\n      -ms-flex-line-pack: center !important;\n          align-content: center !important; }\n.align-content-between {\n  -webkit-align-content: space-between !important;\n      -ms-flex-line-pack: justify !important;\n          align-content: space-between !important; }\n.align-content-around {\n  -webkit-align-content: space-around !important;\n      -ms-flex-line-pack: distribute !important;\n          align-content: space-around !important; }\n.align-content-stretch {\n  -webkit-align-content: stretch !important;\n      -ms-flex-line-pack: stretch !important;\n          align-content: stretch !important; }\n.align-self-auto {\n  -webkit-align-self: auto !important;\n      -ms-flex-item-align: auto !important;\n              -ms-grid-row-align: auto !important;\n          align-self: auto !important; }\n.align-self-start {\n  -webkit-align-self: flex-start !important;\n      -ms-flex-item-align: start !important;\n          align-self: flex-start !important; }\n.align-self-end {\n  -webkit-align-self: flex-end !important;\n      -ms-flex-item-align: end !important;\n          align-self: flex-end !important; }\n.align-self-center {\n  -webkit-align-self: center !important;\n      -ms-flex-item-align: center !important;\n              -ms-grid-row-align: center !important;\n          align-self: center !important; }\n.align-self-baseline {\n  -webkit-align-self: baseline !important;\n      -ms-flex-item-align: baseline !important;\n          align-self: baseline !important; }\n.align-self-stretch {\n  -webkit-align-self: stretch !important;\n      -ms-flex-item-align: stretch !important;\n              -ms-grid-row-align: stretch !important;\n          align-self: stretch !important; }\n@media (min-width: 576px) {\n  .flex-sm-row {\n    -webkit-box-orient: horizontal !important;\n    -webkit-box-direction: normal !important;\n    -webkit-flex-direction: row !important;\n        -ms-flex-direction: row !important;\n            flex-direction: row !important; }\n  .flex-sm-column {\n    -webkit-box-orient: vertical !important;\n    -webkit-box-direction: normal !important;\n    -webkit-flex-direction: column !important;\n        -ms-flex-direction: column !important;\n            flex-direction: column !important; }\n  .flex-sm-row-reverse {\n    -webkit-box-orient: horizontal !important;\n    -webkit-box-direction: reverse !important;\n    -webkit-flex-direction: row-reverse !important;\n        -ms-flex-direction: row-reverse !important;\n            flex-direction: row-reverse !important; }\n  .flex-sm-column-reverse {\n    -webkit-box-orient: vertical !important;\n    -webkit-box-direction: reverse !important;\n    -webkit-flex-direction: column-reverse !important;\n        -ms-flex-direction: column-reverse !important;\n            flex-direction: column-reverse !important; }\n  .flex-sm-wrap {\n    -webkit-flex-wrap: wrap !important;\n        -ms-flex-wrap: wrap !important;\n            flex-wrap: wrap !important; }\n  .flex-sm-nowrap {\n    -webkit-flex-wrap: nowrap !important;\n        -ms-flex-wrap: nowrap !important;\n            flex-wrap: nowrap !important; }\n  .flex-sm-wrap-reverse {\n    -webkit-flex-wrap: wrap-reverse !important;\n        -ms-flex-wrap: wrap-reverse !important;\n            flex-wrap: wrap-reverse !important; }\n  .flex-sm-fill {\n    -webkit-box-flex: 1 !important;\n    -webkit-flex: 1 1 auto !important;\n        -ms-flex: 1 1 auto !important;\n            flex: 1 1 auto !important; }\n  .flex-sm-grow-0 {\n    -webkit-box-flex: 0 !important;\n    -webkit-flex-grow: 0 !important;\n        -ms-flex-positive: 0 !important;\n            flex-grow: 0 !important; }\n  .flex-sm-grow-1 {\n    -webkit-box-flex: 1 !important;\n    -webkit-flex-grow: 1 !important;\n        -ms-flex-positive: 1 !important;\n            flex-grow: 1 !important; }\n  .flex-sm-shrink-0 {\n    -webkit-flex-shrink: 0 !important;\n        -ms-flex-negative: 0 !important;\n            flex-shrink: 0 !important; }\n  .flex-sm-shrink-1 {\n    -webkit-flex-shrink: 1 !important;\n        -ms-flex-negative: 1 !important;\n            flex-shrink: 1 !important; }\n  .justify-content-sm-start {\n    -webkit-box-pack: start !important;\n    -webkit-justify-content: flex-start !important;\n        -ms-flex-pack: start !important;\n            justify-content: flex-start !important; }\n  .justify-content-sm-end {\n    -webkit-box-pack: end !important;\n    -webkit-justify-content: flex-end !important;\n        -ms-flex-pack: end !important;\n            justify-content: flex-end !important; }\n  .justify-content-sm-center {\n    -webkit-box-pack: center !important;\n    -webkit-justify-content: center !important;\n        -ms-flex-pack: center !important;\n            justify-content: center !important; }\n  .justify-content-sm-between {\n    -webkit-box-pack: justify !important;\n    -webkit-justify-content: space-between !important;\n        -ms-flex-pack: justify !important;\n            justify-content: space-between !important; }\n  .justify-content-sm-around {\n    -webkit-justify-content: space-around !important;\n        -ms-flex-pack: distribute !important;\n            justify-content: space-around !important; }\n  .align-items-sm-start {\n    -webkit-box-align: start !important;\n    -webkit-align-items: flex-start !important;\n        -ms-flex-align: start !important;\n            align-items: flex-start !important; }\n  .align-items-sm-end {\n    -webkit-box-align: end !important;\n    -webkit-align-items: flex-end !important;\n        -ms-flex-align: end !important;\n            align-items: flex-end !important; }\n  .align-items-sm-center {\n    -webkit-box-align: center !important;\n    -webkit-align-items: center !important;\n        -ms-flex-align: center !important;\n            align-items: center !important; }\n  .align-items-sm-baseline {\n    -webkit-box-align: baseline !important;\n    -webkit-align-items: baseline !important;\n        -ms-flex-align: baseline !important;\n            align-items: baseline !important; }\n  .align-items-sm-stretch {\n    -webkit-box-align: stretch !important;\n    -webkit-align-items: stretch !important;\n        -ms-flex-align: stretch !important;\n            align-items: stretch !important; }\n  .align-content-sm-start {\n    -webkit-align-content: flex-start !important;\n        -ms-flex-line-pack: start !important;\n            align-content: flex-start !important; }\n  .align-content-sm-end {\n    -webkit-align-content: flex-end !important;\n        -ms-flex-line-pack: end !important;\n            align-content: flex-end !important; }\n  .align-content-sm-center {\n    -webkit-align-content: center !important;\n        -ms-flex-line-pack: center !important;\n            align-content: center !important; }\n  .align-content-sm-between {\n    -webkit-align-content: space-between !important;\n        -ms-flex-line-pack: justify !important;\n            align-content: space-between !important; }\n  .align-content-sm-around {\n    -webkit-align-content: space-around !important;\n        -ms-flex-line-pack: distribute !important;\n            align-content: space-around !important; }\n  .align-content-sm-stretch {\n    -webkit-align-content: stretch !important;\n        -ms-flex-line-pack: stretch !important;\n            align-content: stretch !important; }\n  .align-self-sm-auto {\n    -webkit-align-self: auto !important;\n        -ms-flex-item-align: auto !important;\n                -ms-grid-row-align: auto !important;\n            align-self: auto !important; }\n  .align-self-sm-start {\n    -webkit-align-self: flex-start !important;\n        -ms-flex-item-align: start !important;\n            align-self: flex-start !important; }\n  .align-self-sm-end {\n    -webkit-align-self: flex-end !important;\n        -ms-flex-item-align: end !important;\n            align-self: flex-end !important; }\n  .align-self-sm-center {\n    -webkit-align-self: center !important;\n        -ms-flex-item-align: center !important;\n                -ms-grid-row-align: center !important;\n            align-self: center !important; }\n  .align-self-sm-baseline {\n    -webkit-align-self: baseline !important;\n        -ms-flex-item-align: baseline !important;\n            align-self: baseline !important; }\n  .align-self-sm-stretch {\n    -webkit-align-self: stretch !important;\n        -ms-flex-item-align: stretch !important;\n                -ms-grid-row-align: stretch !important;\n            align-self: stretch !important; } }\n@media (min-width: 768px) {\n  .flex-md-row {\n    -webkit-box-orient: horizontal !important;\n    -webkit-box-direction: normal !important;\n    -webkit-flex-direction: row !important;\n        -ms-flex-direction: row !important;\n            flex-direction: row !important; }\n  .flex-md-column {\n    -webkit-box-orient: vertical !important;\n    -webkit-box-direction: normal !important;\n    -webkit-flex-direction: column !important;\n        -ms-flex-direction: column !important;\n            flex-direction: column !important; }\n  .flex-md-row-reverse {\n    -webkit-box-orient: horizontal !important;\n    -webkit-box-direction: reverse !important;\n    -webkit-flex-direction: row-reverse !important;\n        -ms-flex-direction: row-reverse !important;\n            flex-direction: row-reverse !important; }\n  .flex-md-column-reverse {\n    -webkit-box-orient: vertical !important;\n    -webkit-box-direction: reverse !important;\n    -webkit-flex-direction: column-reverse !important;\n        -ms-flex-direction: column-reverse !important;\n            flex-direction: column-reverse !important; }\n  .flex-md-wrap {\n    -webkit-flex-wrap: wrap !important;\n        -ms-flex-wrap: wrap !important;\n            flex-wrap: wrap !important; }\n  .flex-md-nowrap {\n    -webkit-flex-wrap: nowrap !important;\n        -ms-flex-wrap: nowrap !important;\n            flex-wrap: nowrap !important; }\n  .flex-md-wrap-reverse {\n    -webkit-flex-wrap: wrap-reverse !important;\n        -ms-flex-wrap: wrap-reverse !important;\n            flex-wrap: wrap-reverse !important; }\n  .flex-md-fill {\n    -webkit-box-flex: 1 !important;\n    -webkit-flex: 1 1 auto !important;\n        -ms-flex: 1 1 auto !important;\n            flex: 1 1 auto !important; }\n  .flex-md-grow-0 {\n    -webkit-box-flex: 0 !important;\n    -webkit-flex-grow: 0 !important;\n        -ms-flex-positive: 0 !important;\n            flex-grow: 0 !important; }\n  .flex-md-grow-1 {\n    -webkit-box-flex: 1 !important;\n    -webkit-flex-grow: 1 !important;\n        -ms-flex-positive: 1 !important;\n            flex-grow: 1 !important; }\n  .flex-md-shrink-0 {\n    -webkit-flex-shrink: 0 !important;\n        -ms-flex-negative: 0 !important;\n            flex-shrink: 0 !important; }\n  .flex-md-shrink-1 {\n    -webkit-flex-shrink: 1 !important;\n        -ms-flex-negative: 1 !important;\n            flex-shrink: 1 !important; }\n  .justify-content-md-start {\n    -webkit-box-pack: start !important;\n    -webkit-justify-content: flex-start !important;\n        -ms-flex-pack: start !important;\n            justify-content: flex-start !important; }\n  .justify-content-md-end {\n    -webkit-box-pack: end !important;\n    -webkit-justify-content: flex-end !important;\n        -ms-flex-pack: end !important;\n            justify-content: flex-end !important; }\n  .justify-content-md-center {\n    -webkit-box-pack: center !important;\n    -webkit-justify-content: center !important;\n        -ms-flex-pack: center !important;\n            justify-content: center !important; }\n  .justify-content-md-between {\n    -webkit-box-pack: justify !important;\n    -webkit-justify-content: space-between !important;\n        -ms-flex-pack: justify !important;\n            justify-content: space-between !important; }\n  .justify-content-md-around {\n    -webkit-justify-content: space-around !important;\n        -ms-flex-pack: distribute !important;\n            justify-content: space-around !important; }\n  .align-items-md-start {\n    -webkit-box-align: start !important;\n    -webkit-align-items: flex-start !important;\n        -ms-flex-align: start !important;\n            align-items: flex-start !important; }\n  .align-items-md-end {\n    -webkit-box-align: end !important;\n    -webkit-align-items: flex-end !important;\n        -ms-flex-align: end !important;\n            align-items: flex-end !important; }\n  .align-items-md-center {\n    -webkit-box-align: center !important;\n    -webkit-align-items: center !important;\n        -ms-flex-align: center !important;\n            align-items: center !important; }\n  .align-items-md-baseline {\n    -webkit-box-align: baseline !important;\n    -webkit-align-items: baseline !important;\n        -ms-flex-align: baseline !important;\n            align-items: baseline !important; }\n  .align-items-md-stretch {\n    -webkit-box-align: stretch !important;\n    -webkit-align-items: stretch !important;\n        -ms-flex-align: stretch !important;\n            align-items: stretch !important; }\n  .align-content-md-start {\n    -webkit-align-content: flex-start !important;\n        -ms-flex-line-pack: start !important;\n            align-content: flex-start !important; }\n  .align-content-md-end {\n    -webkit-align-content: flex-end !important;\n        -ms-flex-line-pack: end !important;\n            align-content: flex-end !important; }\n  .align-content-md-center {\n    -webkit-align-content: center !important;\n        -ms-flex-line-pack: center !important;\n            align-content: center !important; }\n  .align-content-md-between {\n    -webkit-align-content: space-between !important;\n        -ms-flex-line-pack: justify !important;\n            align-content: space-between !important; }\n  .align-content-md-around {\n    -webkit-align-content: space-around !important;\n        -ms-flex-line-pack: distribute !important;\n            align-content: space-around !important; }\n  .align-content-md-stretch {\n    -webkit-align-content: stretch !important;\n        -ms-flex-line-pack: stretch !important;\n            align-content: stretch !important; }\n  .align-self-md-auto {\n    -webkit-align-self: auto !important;\n        -ms-flex-item-align: auto !important;\n                -ms-grid-row-align: auto !important;\n            align-self: auto !important; }\n  .align-self-md-start {\n    -webkit-align-self: flex-start !important;\n        -ms-flex-item-align: start !important;\n            align-self: flex-start !important; }\n  .align-self-md-end {\n    -webkit-align-self: flex-end !important;\n        -ms-flex-item-align: end !important;\n            align-self: flex-end !important; }\n  .align-self-md-center {\n    -webkit-align-self: center !important;\n        -ms-flex-item-align: center !important;\n                -ms-grid-row-align: center !important;\n            align-self: center !important; }\n  .align-self-md-baseline {\n    -webkit-align-self: baseline !important;\n        -ms-flex-item-align: baseline !important;\n            align-self: baseline !important; }\n  .align-self-md-stretch {\n    -webkit-align-self: stretch !important;\n        -ms-flex-item-align: stretch !important;\n                -ms-grid-row-align: stretch !important;\n            align-self: stretch !important; } }\n@media (min-width: 992px) {\n  .flex-lg-row {\n    -webkit-box-orient: horizontal !important;\n    -webkit-box-direction: normal !important;\n    -webkit-flex-direction: row !important;\n        -ms-flex-direction: row !important;\n            flex-direction: row !important; }\n  .flex-lg-column {\n    -webkit-box-orient: vertical !important;\n    -webkit-box-direction: normal !important;\n    -webkit-flex-direction: column !important;\n        -ms-flex-direction: column !important;\n            flex-direction: column !important; }\n  .flex-lg-row-reverse {\n    -webkit-box-orient: horizontal !important;\n    -webkit-box-direction: reverse !important;\n    -webkit-flex-direction: row-reverse !important;\n        -ms-flex-direction: row-reverse !important;\n            flex-direction: row-reverse !important; }\n  .flex-lg-column-reverse {\n    -webkit-box-orient: vertical !important;\n    -webkit-box-direction: reverse !important;\n    -webkit-flex-direction: column-reverse !important;\n        -ms-flex-direction: column-reverse !important;\n            flex-direction: column-reverse !important; }\n  .flex-lg-wrap {\n    -webkit-flex-wrap: wrap !important;\n        -ms-flex-wrap: wrap !important;\n            flex-wrap: wrap !important; }\n  .flex-lg-nowrap {\n    -webkit-flex-wrap: nowrap !important;\n        -ms-flex-wrap: nowrap !important;\n            flex-wrap: nowrap !important; }\n  .flex-lg-wrap-reverse {\n    -webkit-flex-wrap: wrap-reverse !important;\n        -ms-flex-wrap: wrap-reverse !important;\n            flex-wrap: wrap-reverse !important; }\n  .flex-lg-fill {\n    -webkit-box-flex: 1 !important;\n    -webkit-flex: 1 1 auto !important;\n        -ms-flex: 1 1 auto !important;\n            flex: 1 1 auto !important; }\n  .flex-lg-grow-0 {\n    -webkit-box-flex: 0 !important;\n    -webkit-flex-grow: 0 !important;\n        -ms-flex-positive: 0 !important;\n            flex-grow: 0 !important; }\n  .flex-lg-grow-1 {\n    -webkit-box-flex: 1 !important;\n    -webkit-flex-grow: 1 !important;\n        -ms-flex-positive: 1 !important;\n            flex-grow: 1 !important; }\n  .flex-lg-shrink-0 {\n    -webkit-flex-shrink: 0 !important;\n        -ms-flex-negative: 0 !important;\n            flex-shrink: 0 !important; }\n  .flex-lg-shrink-1 {\n    -webkit-flex-shrink: 1 !important;\n        -ms-flex-negative: 1 !important;\n            flex-shrink: 1 !important; }\n  .justify-content-lg-start {\n    -webkit-box-pack: start !important;\n    -webkit-justify-content: flex-start !important;\n        -ms-flex-pack: start !important;\n            justify-content: flex-start !important; }\n  .justify-content-lg-end {\n    -webkit-box-pack: end !important;\n    -webkit-justify-content: flex-end !important;\n        -ms-flex-pack: end !important;\n            justify-content: flex-end !important; }\n  .justify-content-lg-center {\n    -webkit-box-pack: center !important;\n    -webkit-justify-content: center !important;\n        -ms-flex-pack: center !important;\n            justify-content: center !important; }\n  .justify-content-lg-between {\n    -webkit-box-pack: justify !important;\n    -webkit-justify-content: space-between !important;\n        -ms-flex-pack: justify !important;\n            justify-content: space-between !important; }\n  .justify-content-lg-around {\n    -webkit-justify-content: space-around !important;\n        -ms-flex-pack: distribute !important;\n            justify-content: space-around !important; }\n  .align-items-lg-start {\n    -webkit-box-align: start !important;\n    -webkit-align-items: flex-start !important;\n        -ms-flex-align: start !important;\n            align-items: flex-start !important; }\n  .align-items-lg-end {\n    -webkit-box-align: end !important;\n    -webkit-align-items: flex-end !important;\n        -ms-flex-align: end !important;\n            align-items: flex-end !important; }\n  .align-items-lg-center {\n    -webkit-box-align: center !important;\n    -webkit-align-items: center !important;\n        -ms-flex-align: center !important;\n            align-items: center !important; }\n  .align-items-lg-baseline {\n    -webkit-box-align: baseline !important;\n    -webkit-align-items: baseline !important;\n        -ms-flex-align: baseline !important;\n            align-items: baseline !important; }\n  .align-items-lg-stretch {\n    -webkit-box-align: stretch !important;\n    -webkit-align-items: stretch !important;\n        -ms-flex-align: stretch !important;\n            align-items: stretch !important; }\n  .align-content-lg-start {\n    -webkit-align-content: flex-start !important;\n        -ms-flex-line-pack: start !important;\n            align-content: flex-start !important; }\n  .align-content-lg-end {\n    -webkit-align-content: flex-end !important;\n        -ms-flex-line-pack: end !important;\n            align-content: flex-end !important; }\n  .align-content-lg-center {\n    -webkit-align-content: center !important;\n        -ms-flex-line-pack: center !important;\n            align-content: center !important; }\n  .align-content-lg-between {\n    -webkit-align-content: space-between !important;\n        -ms-flex-line-pack: justify !important;\n            align-content: space-between !important; }\n  .align-content-lg-around {\n    -webkit-align-content: space-around !important;\n        -ms-flex-line-pack: distribute !important;\n            align-content: space-around !important; }\n  .align-content-lg-stretch {\n    -webkit-align-content: stretch !important;\n        -ms-flex-line-pack: stretch !important;\n            align-content: stretch !important; }\n  .align-self-lg-auto {\n    -webkit-align-self: auto !important;\n        -ms-flex-item-align: auto !important;\n                -ms-grid-row-align: auto !important;\n            align-self: auto !important; }\n  .align-self-lg-start {\n    -webkit-align-self: flex-start !important;\n        -ms-flex-item-align: start !important;\n            align-self: flex-start !important; }\n  .align-self-lg-end {\n    -webkit-align-self: flex-end !important;\n        -ms-flex-item-align: end !important;\n            align-self: flex-end !important; }\n  .align-self-lg-center {\n    -webkit-align-self: center !important;\n        -ms-flex-item-align: center !important;\n                -ms-grid-row-align: center !important;\n            align-self: center !important; }\n  .align-self-lg-baseline {\n    -webkit-align-self: baseline !important;\n        -ms-flex-item-align: baseline !important;\n            align-self: baseline !important; }\n  .align-self-lg-stretch {\n    -webkit-align-self: stretch !important;\n        -ms-flex-item-align: stretch !important;\n                -ms-grid-row-align: stretch !important;\n            align-self: stretch !important; } }\n@media (min-width: 1200px) {\n  .flex-xl-row {\n    -webkit-box-orient: horizontal !important;\n    -webkit-box-direction: normal !important;\n    -webkit-flex-direction: row !important;\n        -ms-flex-direction: row !important;\n            flex-direction: row !important; }\n  .flex-xl-column {\n    -webkit-box-orient: vertical !important;\n    -webkit-box-direction: normal !important;\n    -webkit-flex-direction: column !important;\n        -ms-flex-direction: column !important;\n            flex-direction: column !important; }\n  .flex-xl-row-reverse {\n    -webkit-box-orient: horizontal !important;\n    -webkit-box-direction: reverse !important;\n    -webkit-flex-direction: row-reverse !important;\n        -ms-flex-direction: row-reverse !important;\n            flex-direction: row-reverse !important; }\n  .flex-xl-column-reverse {\n    -webkit-box-orient: vertical !important;\n    -webkit-box-direction: reverse !important;\n    -webkit-flex-direction: column-reverse !important;\n        -ms-flex-direction: column-reverse !important;\n            flex-direction: column-reverse !important; }\n  .flex-xl-wrap {\n    -webkit-flex-wrap: wrap !important;\n        -ms-flex-wrap: wrap !important;\n            flex-wrap: wrap !important; }\n  .flex-xl-nowrap {\n    -webkit-flex-wrap: nowrap !important;\n        -ms-flex-wrap: nowrap !important;\n            flex-wrap: nowrap !important; }\n  .flex-xl-wrap-reverse {\n    -webkit-flex-wrap: wrap-reverse !important;\n        -ms-flex-wrap: wrap-reverse !important;\n            flex-wrap: wrap-reverse !important; }\n  .flex-xl-fill {\n    -webkit-box-flex: 1 !important;\n    -webkit-flex: 1 1 auto !important;\n        -ms-flex: 1 1 auto !important;\n            flex: 1 1 auto !important; }\n  .flex-xl-grow-0 {\n    -webkit-box-flex: 0 !important;\n    -webkit-flex-grow: 0 !important;\n        -ms-flex-positive: 0 !important;\n            flex-grow: 0 !important; }\n  .flex-xl-grow-1 {\n    -webkit-box-flex: 1 !important;\n    -webkit-flex-grow: 1 !important;\n        -ms-flex-positive: 1 !important;\n            flex-grow: 1 !important; }\n  .flex-xl-shrink-0 {\n    -webkit-flex-shrink: 0 !important;\n        -ms-flex-negative: 0 !important;\n            flex-shrink: 0 !important; }\n  .flex-xl-shrink-1 {\n    -webkit-flex-shrink: 1 !important;\n        -ms-flex-negative: 1 !important;\n            flex-shrink: 1 !important; }\n  .justify-content-xl-start {\n    -webkit-box-pack: start !important;\n    -webkit-justify-content: flex-start !important;\n        -ms-flex-pack: start !important;\n            justify-content: flex-start !important; }\n  .justify-content-xl-end {\n    -webkit-box-pack: end !important;\n    -webkit-justify-content: flex-end !important;\n        -ms-flex-pack: end !important;\n            justify-content: flex-end !important; }\n  .justify-content-xl-center {\n    -webkit-box-pack: center !important;\n    -webkit-justify-content: center !important;\n        -ms-flex-pack: center !important;\n            justify-content: center !important; }\n  .justify-content-xl-between {\n    -webkit-box-pack: justify !important;\n    -webkit-justify-content: space-between !important;\n        -ms-flex-pack: justify !important;\n            justify-content: space-between !important; }\n  .justify-content-xl-around {\n    -webkit-justify-content: space-around !important;\n        -ms-flex-pack: distribute !important;\n            justify-content: space-around !important; }\n  .align-items-xl-start {\n    -webkit-box-align: start !important;\n    -webkit-align-items: flex-start !important;\n        -ms-flex-align: start !important;\n            align-items: flex-start !important; }\n  .align-items-xl-end {\n    -webkit-box-align: end !important;\n    -webkit-align-items: flex-end !important;\n        -ms-flex-align: end !important;\n            align-items: flex-end !important; }\n  .align-items-xl-center {\n    -webkit-box-align: center !important;\n    -webkit-align-items: center !important;\n        -ms-flex-align: center !important;\n            align-items: center !important; }\n  .align-items-xl-baseline {\n    -webkit-box-align: baseline !important;\n    -webkit-align-items: baseline !important;\n        -ms-flex-align: baseline !important;\n            align-items: baseline !important; }\n  .align-items-xl-stretch {\n    -webkit-box-align: stretch !important;\n    -webkit-align-items: stretch !important;\n        -ms-flex-align: stretch !important;\n            align-items: stretch !important; }\n  .align-content-xl-start {\n    -webkit-align-content: flex-start !important;\n        -ms-flex-line-pack: start !important;\n            align-content: flex-start !important; }\n  .align-content-xl-end {\n    -webkit-align-content: flex-end !important;\n        -ms-flex-line-pack: end !important;\n            align-content: flex-end !important; }\n  .align-content-xl-center {\n    -webkit-align-content: center !important;\n        -ms-flex-line-pack: center !important;\n            align-content: center !important; }\n  .align-content-xl-between {\n    -webkit-align-content: space-between !important;\n        -ms-flex-line-pack: justify !important;\n            align-content: space-between !important; }\n  .align-content-xl-around {\n    -webkit-align-content: space-around !important;\n        -ms-flex-line-pack: distribute !important;\n            align-content: space-around !important; }\n  .align-content-xl-stretch {\n    -webkit-align-content: stretch !important;\n        -ms-flex-line-pack: stretch !important;\n            align-content: stretch !important; }\n  .align-self-xl-auto {\n    -webkit-align-self: auto !important;\n        -ms-flex-item-align: auto !important;\n                -ms-grid-row-align: auto !important;\n            align-self: auto !important; }\n  .align-self-xl-start {\n    -webkit-align-self: flex-start !important;\n        -ms-flex-item-align: start !important;\n            align-self: flex-start !important; }\n  .align-self-xl-end {\n    -webkit-align-self: flex-end !important;\n        -ms-flex-item-align: end !important;\n            align-self: flex-end !important; }\n  .align-self-xl-center {\n    -webkit-align-self: center !important;\n        -ms-flex-item-align: center !important;\n                -ms-grid-row-align: center !important;\n            align-self: center !important; }\n  .align-self-xl-baseline {\n    -webkit-align-self: baseline !important;\n        -ms-flex-item-align: baseline !important;\n            align-self: baseline !important; }\n  .align-self-xl-stretch {\n    -webkit-align-self: stretch !important;\n        -ms-flex-item-align: stretch !important;\n                -ms-grid-row-align: stretch !important;\n            align-self: stretch !important; } }\nfooter {\n  position: absolute;\n  width: 100%;\n  background: #323c44;\n  padding: 6rem 4rem; }\n@media (max-width: 991.98px) {\n    footer {\n      padding: 4rem 0; } }\nfooter.fixed-bottom {\n    position: absolute; }\n@media (max-width: 991.98px) {\n      footer.fixed-bottom {\n        position: inherit; } }\nfooter hr {\n    background: #fff;\n    height: 1px;\n    border: 0;\n    margin-top: 1.34rem;\n    width: 100%; }\nfooter a {\n    color: #fff; }\nfooter a:hover {\n      color: #fff; }\nfooter .navbar-brand {\n    white-space: normal;\n    margin-right: -24%; }\nfooter .icon-row {\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    font-size: 1.5rem;\n    -webkit-box-pack: justify;\n    -webkit-justify-content: space-between;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    -webkit-flex-wrap: wrap;\n        -ms-flex-wrap: wrap;\n            flex-wrap: wrap; }\n@media (max-width: 991.98px) {\n      footer .icon-row {\n        width: 100%;\n        -webkit-box-pack: justify !important;\n        -webkit-justify-content: space-between !important;\n            -ms-flex-pack: justify !important;\n                justify-content: space-between !important;\n        -webkit-box-pack: center;\n        -webkit-justify-content: center;\n            -ms-flex-pack: center;\n                justify-content: center;\n        font-size: 2.3rem;\n        padding: 0 2rem; } }\nfooter .icon-row .fa {\n      margin-right: 0;\n      margin-top: 5.36rem;\n      width: 25px;\n      height: auto; }\n@media (max-width: 991.98px) {\n        footer .icon-row .fa {\n          margin-top: 0; } }\nfooter hr {\n    background: #fff;\n    height: 1px;\n    border: 0;\n    margin-top: 1.34rem; }\n/* footer */\n@media (max-width: 991.98px) {\n  .foot-flex {\n    -webkit-box-pack: center;\n    -webkit-justify-content: center;\n        -ms-flex-pack: center;\n            justify-content: center; } }\np {\n  color: #fff;\n  font-family: \"AcuminPro-ExtraLight\";\n  font-size: 1.072rem;\n  font-weight: normal;\n  opacity: .85;\n  margin-top: 2rem;\n  letter-spacing: .6px; }\n@media (max-width: 767.98px) {\n    p {\n      text-align: center; } }\n@media (max-width: 991.98px) {\n  .nav-left {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n    -webkit-flex-direction: column;\n        -ms-flex-direction: column;\n            flex-direction: column; }\n    .nav-left .logo-main-row {\n      -webkit-box-pack: center;\n      -webkit-justify-content: center;\n          -ms-flex-pack: center;\n              justify-content: center;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n      -webkit-flex-direction: column;\n          -ms-flex-direction: column;\n              flex-direction: column;\n      padding-top: 2.7rem; }\n    .nav-left svg {\n      margin-right: 4%; }\n    .nav-left a {\n      margin: 0;\n      text-align: center;\n      font-size: 1.5rem; } }\n"

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
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
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/components/footer/footer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/notifications-modal/notifications-modal.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/components/notifications-modal/notifications-modal.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  notifications-modal works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/notifications-modal/notifications-modal.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/components/notifications-modal/notifications-modal.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/notifications-modal/notifications-modal.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/notifications-modal/notifications-modal.component.ts ***!
  \*********************************************************************************/
/*! exports provided: NotificationsModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsModalComponent", function() { return NotificationsModalComponent; });
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

var NotificationsModalComponent = /** @class */ (function () {
    function NotificationsModalComponent() {
    }
    NotificationsModalComponent.prototype.ngOnInit = function () {
    };
    NotificationsModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-notifications-modal',
            template: __webpack_require__(/*! ./notifications-modal.component.html */ "./src/app/components/notifications-modal/notifications-modal.component.html"),
            styles: [__webpack_require__(/*! ./notifications-modal.component.scss */ "./src/app/components/notifications-modal/notifications-modal.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NotificationsModalComponent);
    return NotificationsModalComponent;
}());



/***/ }),

/***/ "./src/app/components/shell/shell.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/shell/shell.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header [isLoggedIn]=\"isLoggedIn\" [navScrolled]=\"false\" (signOut)=\"signOut()\"></app-header>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/components/shell/shell.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/components/shell/shell.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/shell/shell.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/shell/shell.component.ts ***!
  \*****************************************************/
/*! exports provided: ShellComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShellComponent", function() { return ShellComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/fesm5/ngxs-store.js");
/* harmony import */ var _app_core_state_auth_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/core/state/auth.state */ "./src/app/core/state/auth.state.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ShellComponent = /** @class */ (function () {
    function ShellComponent(store, router) {
        this.store = store;
        this.router = router;
        this.isLoggedIn = false;
    }
    ShellComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.token$.subscribe(function (token) { return _this.isLoggedIn = !!token; });
    };
    ShellComponent.prototype.signOut = function () {
        var _this = this;
        this.store.dispatch(new _app_core_state_auth_state__WEBPACK_IMPORTED_MODULE_2__["Logout"]()).subscribe(function () { return _this.router.navigateByUrl('/'); });
    };
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Select"])(_app_core_state_auth_state__WEBPACK_IMPORTED_MODULE_2__["AuthState"].token),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"])
    ], ShellComponent.prototype, "token$", void 0);
    ShellComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-shell',
            template: __webpack_require__(/*! ./shell.component.html */ "./src/app/components/shell/shell.component.html"),
            styles: [__webpack_require__(/*! ./shell.component.scss */ "./src/app/components/shell/shell.component.scss")]
        }),
        __metadata("design:paramtypes", [_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Store"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ShellComponent);
    return ShellComponent;
}());



/***/ }),

/***/ "./src/app/components/wallet/wallet-header/wallet-header.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/components/wallet/wallet-header/wallet-header.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n  <nav class=\"navbar navbar-dark navbar-expand-lg\">\n    <div class=\"container-fluid\">\n      <a routerLink=\"/app\" class=\"navbar-brand\">\n        <img src=\"assets/images/logo-token.svg\" alt=\"Insights Logo\">\n        <span>INSIGHTS NETWORK</span>\n      </a>\n      <button class=\"navbar-toggler\" type=\"button\"   (click)=\"onToggleSidenav() \">\n        <span class=\"navbar-toggler-icon\"></span>\n      </button>\n      <div class=\"collapse navbar-collapse\">\n        <ul class=\"navbar-nav ml-auto align-items-center\">\n          <li class=\"nav-item dropdown\">\n            <a class=\"nav-link\" id=\"alertDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\n              aria-expanded=\"false\">\n              <img src=\"assets/images/bell.svg\"/>\n            </a>\n            <div class=\"dropdown-menu\" aria-labelledby=\"alertDropdown\">\n              <div>\n                <div class=\"dropdown-item welcome\">\n                  <div>\n                    <img src=\"assets/images/logo-token.svg\" alt=\"Insights Logo\">\n                  </div>\n                  <div>\n                    <h1>Welcome to Instar Wallet</h1>\n                  </div>\n                  <div>\n                    <p>\n                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\n                      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris\n                      nisi ut aliquip ex ea commodo consequat.\n                    </p>\n                  </div>\n                </div>\n                <div class=\"dropdown-item kyc-status\" [ngClass]=\"kycClass\">\n                  <i class=\"fa fa-shield\" aria-hidden=\"true\"></i>\n                  <p>{{ kycMessage }}</p>\n                </div>\n                <!-- <a href=\"#\" class=\"dropdown-item\">alert 2</a>\n                <a href=\"#\" class=\"dropdown-item\">alert 3</a>\n                <a href=\"#\" class=\"dropdown-item\">alert 4</a> -->\n              </div>\n            </div>\n          </li>\n          <li class=vertical-line>\n            <div></div>\n          </li>\n          <li class=\"nav-item dropdown\">\n            <a class=\"nav-link\" id=\"profileDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\n              aria-expanded=\"false\">\n              <img *ngIf=\"profilePicture\" class=\"rounded-circle\" width=\"50\" height=\"50\" [src]=\"profilePicture\">\n              <div class=\"profileName\">\n                <h4>{{ firstName }} {{ lastName }}</h4>\n                <span>{{ email }}</span>\n              </div>\n              <img class=\"option\" src=\"assets/images/options.svg\">\n            </a>\n            <div class=\"dropdown-menu profile-menu\" aria-labelledby=\"profileDropdown\">\n              <div>\n                <div class=\"text-center\">\n                  <div>\n                    <img *ngIf=\"profilePicture\" class=\"rounded-circle mb-2\" width=\"50\" height=\"50\" [src]=\"profilePicture\">\n                  </div>\n                  <div>{{ firstName }} {{ lastName }}</div>\n                  <div>{{email}}</div>\n                  <hr>\n                </div>\n                <div>\n                  <a routerLink=\"settings\" class=\"dropdown-item\">Settings</a>\n                  <a href=\"mailto:help@insights.network\" class=\"dropdown-item\">Contact Support</a>\n                  <a routerLink=\"referral\" class=\"dropdown-item referral-item\">Invite friends\n                    <div *ngIf=\"referralReward\">Get <img src=\"assets/images/wallet/white-icon.svg\"> {{referralReward}}</div></a>\n                  <a (click)=\"onSignOut()\" class=\"dropdown-item\">Sign Out</a>\n                </div>\n              </div>\n            </div>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </nav>\n</header>\n"

/***/ }),

/***/ "./src/app/components/wallet/wallet-header/wallet-header.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/components/wallet/wallet-header/wallet-header.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*!\n * Bootstrap Grid v4.1.3 (https://getbootstrap.com/)\n * Copyright 2011-2018 The Bootstrap Authors\n * Copyright 2011-2018 Twitter, Inc.\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)\n */\n@-ms-viewport {\n  width: device-width; }\nhtml {\n  box-sizing: border-box;\n  -ms-overflow-style: scrollbar; }\n*,\n*::before,\n*::after {\n  box-sizing: inherit; }\n.container {\n  width: 100%;\n  padding-right: 15px;\n  padding-left: 15px;\n  margin-right: auto;\n  margin-left: auto; }\n@media (min-width: 576px) {\n    .container {\n      max-width: 540px; } }\n@media (min-width: 768px) {\n    .container {\n      max-width: 720px; } }\n@media (min-width: 992px) {\n    .container {\n      max-width: 960px; } }\n@media (min-width: 1200px) {\n    .container {\n      max-width: 1140px; } }\n.container-fluid {\n  width: 100%;\n  padding-right: 15px;\n  padding-left: 15px;\n  margin-right: auto;\n  margin-left: auto; }\n.row {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-flex-wrap: wrap;\n      -ms-flex-wrap: wrap;\n          flex-wrap: wrap;\n  margin-right: -15px;\n  margin-left: -15px; }\n.no-gutters {\n  margin-right: 0;\n  margin-left: 0; }\n.no-gutters > .col,\n  .no-gutters > [class*=\"col-\"] {\n    padding-right: 0;\n    padding-left: 0; }\n.col-1, .col-2, .col-3, .col-4, .col-5, .col-6, .col-7, .col-8, .col-9, .col-10, .col-11, .col-12, .col,\n.col-auto, .col-sm-1, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-10, .col-sm-11, .col-sm-12, .col-sm,\n.col-sm-auto, .col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-10, .col-md-11, .col-md-12, .col-md,\n.col-md-auto, .col-lg-1, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-10, .col-lg-11, .col-lg-12, .col-lg,\n.col-lg-auto, .col-xl-1, .col-xl-2, .col-xl-3, .col-xl-4, .col-xl-5, .col-xl-6, .col-xl-7, .col-xl-8, .col-xl-9, .col-xl-10, .col-xl-11, .col-xl-12, .col-xl,\n.col-xl-auto {\n  position: relative;\n  width: 100%;\n  min-height: 1px;\n  padding-right: 15px;\n  padding-left: 15px; }\n.col {\n  -webkit-flex-basis: 0;\n      -ms-flex-preferred-size: 0;\n          flex-basis: 0;\n  -webkit-box-flex: 1;\n  -webkit-flex-grow: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  max-width: 100%; }\n.col-auto {\n  -webkit-box-flex: 0;\n  -webkit-flex: 0 0 auto;\n      -ms-flex: 0 0 auto;\n          flex: 0 0 auto;\n  width: auto;\n  max-width: none; }\n.col-1 {\n  -webkit-box-flex: 0;\n  -webkit-flex: 0 0 8.33333333%;\n      -ms-flex: 0 0 8.33333333%;\n          flex: 0 0 8.33333333%;\n  max-width: 8.33333333%; }\n.col-2 {\n  -webkit-box-flex: 0;\n  -webkit-flex: 0 0 16.66666667%;\n      -ms-flex: 0 0 16.66666667%;\n          flex: 0 0 16.66666667%;\n  max-width: 16.66666667%; }\n.col-3 {\n  -webkit-box-flex: 0;\n  -webkit-flex: 0 0 25%;\n      -ms-flex: 0 0 25%;\n          flex: 0 0 25%;\n  max-width: 25%; }\n.col-4 {\n  -webkit-box-flex: 0;\n  -webkit-flex: 0 0 33.33333333%;\n      -ms-flex: 0 0 33.33333333%;\n          flex: 0 0 33.33333333%;\n  max-width: 33.33333333%; }\n.col-5 {\n  -webkit-box-flex: 0;\n  -webkit-flex: 0 0 41.66666667%;\n      -ms-flex: 0 0 41.66666667%;\n          flex: 0 0 41.66666667%;\n  max-width: 41.66666667%; }\n.col-6 {\n  -webkit-box-flex: 0;\n  -webkit-flex: 0 0 50%;\n      -ms-flex: 0 0 50%;\n          flex: 0 0 50%;\n  max-width: 50%; }\n.col-7 {\n  -webkit-box-flex: 0;\n  -webkit-flex: 0 0 58.33333333%;\n      -ms-flex: 0 0 58.33333333%;\n          flex: 0 0 58.33333333%;\n  max-width: 58.33333333%; }\n.col-8 {\n  -webkit-box-flex: 0;\n  -webkit-flex: 0 0 66.66666667%;\n      -ms-flex: 0 0 66.66666667%;\n          flex: 0 0 66.66666667%;\n  max-width: 66.66666667%; }\n.col-9 {\n  -webkit-box-flex: 0;\n  -webkit-flex: 0 0 75%;\n      -ms-flex: 0 0 75%;\n          flex: 0 0 75%;\n  max-width: 75%; }\n.col-10 {\n  -webkit-box-flex: 0;\n  -webkit-flex: 0 0 83.33333333%;\n      -ms-flex: 0 0 83.33333333%;\n          flex: 0 0 83.33333333%;\n  max-width: 83.33333333%; }\n.col-11 {\n  -webkit-box-flex: 0;\n  -webkit-flex: 0 0 91.66666667%;\n      -ms-flex: 0 0 91.66666667%;\n          flex: 0 0 91.66666667%;\n  max-width: 91.66666667%; }\n.col-12 {\n  -webkit-box-flex: 0;\n  -webkit-flex: 0 0 100%;\n      -ms-flex: 0 0 100%;\n          flex: 0 0 100%;\n  max-width: 100%; }\n.order-first {\n  -webkit-box-ordinal-group: 0;\n  -webkit-order: -1;\n      -ms-flex-order: -1;\n          order: -1; }\n.order-last {\n  -webkit-box-ordinal-group: 14;\n  -webkit-order: 13;\n      -ms-flex-order: 13;\n          order: 13; }\n.order-0 {\n  -webkit-box-ordinal-group: 1;\n  -webkit-order: 0;\n      -ms-flex-order: 0;\n          order: 0; }\n.order-1 {\n  -webkit-box-ordinal-group: 2;\n  -webkit-order: 1;\n      -ms-flex-order: 1;\n          order: 1; }\n.order-2 {\n  -webkit-box-ordinal-group: 3;\n  -webkit-order: 2;\n      -ms-flex-order: 2;\n          order: 2; }\n.order-3 {\n  -webkit-box-ordinal-group: 4;\n  -webkit-order: 3;\n      -ms-flex-order: 3;\n          order: 3; }\n.order-4 {\n  -webkit-box-ordinal-group: 5;\n  -webkit-order: 4;\n      -ms-flex-order: 4;\n          order: 4; }\n.order-5 {\n  -webkit-box-ordinal-group: 6;\n  -webkit-order: 5;\n      -ms-flex-order: 5;\n          order: 5; }\n.order-6 {\n  -webkit-box-ordinal-group: 7;\n  -webkit-order: 6;\n      -ms-flex-order: 6;\n          order: 6; }\n.order-7 {\n  -webkit-box-ordinal-group: 8;\n  -webkit-order: 7;\n      -ms-flex-order: 7;\n          order: 7; }\n.order-8 {\n  -webkit-box-ordinal-group: 9;\n  -webkit-order: 8;\n      -ms-flex-order: 8;\n          order: 8; }\n.order-9 {\n  -webkit-box-ordinal-group: 10;\n  -webkit-order: 9;\n      -ms-flex-order: 9;\n          order: 9; }\n.order-10 {\n  -webkit-box-ordinal-group: 11;\n  -webkit-order: 10;\n      -ms-flex-order: 10;\n          order: 10; }\n.order-11 {\n  -webkit-box-ordinal-group: 12;\n  -webkit-order: 11;\n      -ms-flex-order: 11;\n          order: 11; }\n.order-12 {\n  -webkit-box-ordinal-group: 13;\n  -webkit-order: 12;\n      -ms-flex-order: 12;\n          order: 12; }\n.offset-1 {\n  margin-left: 8.33333333%; }\n.offset-2 {\n  margin-left: 16.66666667%; }\n.offset-3 {\n  margin-left: 25%; }\n.offset-4 {\n  margin-left: 33.33333333%; }\n.offset-5 {\n  margin-left: 41.66666667%; }\n.offset-6 {\n  margin-left: 50%; }\n.offset-7 {\n  margin-left: 58.33333333%; }\n.offset-8 {\n  margin-left: 66.66666667%; }\n.offset-9 {\n  margin-left: 75%; }\n.offset-10 {\n  margin-left: 83.33333333%; }\n.offset-11 {\n  margin-left: 91.66666667%; }\n@media (min-width: 576px) {\n  .col-sm {\n    -webkit-flex-basis: 0;\n        -ms-flex-preferred-size: 0;\n            flex-basis: 0;\n    -webkit-box-flex: 1;\n    -webkit-flex-grow: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1;\n    max-width: 100%; }\n  .col-sm-auto {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 auto;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n    width: auto;\n    max-width: none; }\n  .col-sm-1 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 8.33333333%;\n        -ms-flex: 0 0 8.33333333%;\n            flex: 0 0 8.33333333%;\n    max-width: 8.33333333%; }\n  .col-sm-2 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 16.66666667%;\n        -ms-flex: 0 0 16.66666667%;\n            flex: 0 0 16.66666667%;\n    max-width: 16.66666667%; }\n  .col-sm-3 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 25%;\n        -ms-flex: 0 0 25%;\n            flex: 0 0 25%;\n    max-width: 25%; }\n  .col-sm-4 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 33.33333333%;\n        -ms-flex: 0 0 33.33333333%;\n            flex: 0 0 33.33333333%;\n    max-width: 33.33333333%; }\n  .col-sm-5 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 41.66666667%;\n        -ms-flex: 0 0 41.66666667%;\n            flex: 0 0 41.66666667%;\n    max-width: 41.66666667%; }\n  .col-sm-6 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 50%;\n        -ms-flex: 0 0 50%;\n            flex: 0 0 50%;\n    max-width: 50%; }\n  .col-sm-7 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 58.33333333%;\n        -ms-flex: 0 0 58.33333333%;\n            flex: 0 0 58.33333333%;\n    max-width: 58.33333333%; }\n  .col-sm-8 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 66.66666667%;\n        -ms-flex: 0 0 66.66666667%;\n            flex: 0 0 66.66666667%;\n    max-width: 66.66666667%; }\n  .col-sm-9 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 75%;\n        -ms-flex: 0 0 75%;\n            flex: 0 0 75%;\n    max-width: 75%; }\n  .col-sm-10 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 83.33333333%;\n        -ms-flex: 0 0 83.33333333%;\n            flex: 0 0 83.33333333%;\n    max-width: 83.33333333%; }\n  .col-sm-11 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 91.66666667%;\n        -ms-flex: 0 0 91.66666667%;\n            flex: 0 0 91.66666667%;\n    max-width: 91.66666667%; }\n  .col-sm-12 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 100%;\n        -ms-flex: 0 0 100%;\n            flex: 0 0 100%;\n    max-width: 100%; }\n  .order-sm-first {\n    -webkit-box-ordinal-group: 0;\n    -webkit-order: -1;\n        -ms-flex-order: -1;\n            order: -1; }\n  .order-sm-last {\n    -webkit-box-ordinal-group: 14;\n    -webkit-order: 13;\n        -ms-flex-order: 13;\n            order: 13; }\n  .order-sm-0 {\n    -webkit-box-ordinal-group: 1;\n    -webkit-order: 0;\n        -ms-flex-order: 0;\n            order: 0; }\n  .order-sm-1 {\n    -webkit-box-ordinal-group: 2;\n    -webkit-order: 1;\n        -ms-flex-order: 1;\n            order: 1; }\n  .order-sm-2 {\n    -webkit-box-ordinal-group: 3;\n    -webkit-order: 2;\n        -ms-flex-order: 2;\n            order: 2; }\n  .order-sm-3 {\n    -webkit-box-ordinal-group: 4;\n    -webkit-order: 3;\n        -ms-flex-order: 3;\n            order: 3; }\n  .order-sm-4 {\n    -webkit-box-ordinal-group: 5;\n    -webkit-order: 4;\n        -ms-flex-order: 4;\n            order: 4; }\n  .order-sm-5 {\n    -webkit-box-ordinal-group: 6;\n    -webkit-order: 5;\n        -ms-flex-order: 5;\n            order: 5; }\n  .order-sm-6 {\n    -webkit-box-ordinal-group: 7;\n    -webkit-order: 6;\n        -ms-flex-order: 6;\n            order: 6; }\n  .order-sm-7 {\n    -webkit-box-ordinal-group: 8;\n    -webkit-order: 7;\n        -ms-flex-order: 7;\n            order: 7; }\n  .order-sm-8 {\n    -webkit-box-ordinal-group: 9;\n    -webkit-order: 8;\n        -ms-flex-order: 8;\n            order: 8; }\n  .order-sm-9 {\n    -webkit-box-ordinal-group: 10;\n    -webkit-order: 9;\n        -ms-flex-order: 9;\n            order: 9; }\n  .order-sm-10 {\n    -webkit-box-ordinal-group: 11;\n    -webkit-order: 10;\n        -ms-flex-order: 10;\n            order: 10; }\n  .order-sm-11 {\n    -webkit-box-ordinal-group: 12;\n    -webkit-order: 11;\n        -ms-flex-order: 11;\n            order: 11; }\n  .order-sm-12 {\n    -webkit-box-ordinal-group: 13;\n    -webkit-order: 12;\n        -ms-flex-order: 12;\n            order: 12; }\n  .offset-sm-0 {\n    margin-left: 0; }\n  .offset-sm-1 {\n    margin-left: 8.33333333%; }\n  .offset-sm-2 {\n    margin-left: 16.66666667%; }\n  .offset-sm-3 {\n    margin-left: 25%; }\n  .offset-sm-4 {\n    margin-left: 33.33333333%; }\n  .offset-sm-5 {\n    margin-left: 41.66666667%; }\n  .offset-sm-6 {\n    margin-left: 50%; }\n  .offset-sm-7 {\n    margin-left: 58.33333333%; }\n  .offset-sm-8 {\n    margin-left: 66.66666667%; }\n  .offset-sm-9 {\n    margin-left: 75%; }\n  .offset-sm-10 {\n    margin-left: 83.33333333%; }\n  .offset-sm-11 {\n    margin-left: 91.66666667%; } }\n@media (min-width: 768px) {\n  .col-md {\n    -webkit-flex-basis: 0;\n        -ms-flex-preferred-size: 0;\n            flex-basis: 0;\n    -webkit-box-flex: 1;\n    -webkit-flex-grow: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1;\n    max-width: 100%; }\n  .col-md-auto {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 auto;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n    width: auto;\n    max-width: none; }\n  .col-md-1 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 8.33333333%;\n        -ms-flex: 0 0 8.33333333%;\n            flex: 0 0 8.33333333%;\n    max-width: 8.33333333%; }\n  .col-md-2 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 16.66666667%;\n        -ms-flex: 0 0 16.66666667%;\n            flex: 0 0 16.66666667%;\n    max-width: 16.66666667%; }\n  .col-md-3 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 25%;\n        -ms-flex: 0 0 25%;\n            flex: 0 0 25%;\n    max-width: 25%; }\n  .col-md-4 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 33.33333333%;\n        -ms-flex: 0 0 33.33333333%;\n            flex: 0 0 33.33333333%;\n    max-width: 33.33333333%; }\n  .col-md-5 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 41.66666667%;\n        -ms-flex: 0 0 41.66666667%;\n            flex: 0 0 41.66666667%;\n    max-width: 41.66666667%; }\n  .col-md-6 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 50%;\n        -ms-flex: 0 0 50%;\n            flex: 0 0 50%;\n    max-width: 50%; }\n  .col-md-7 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 58.33333333%;\n        -ms-flex: 0 0 58.33333333%;\n            flex: 0 0 58.33333333%;\n    max-width: 58.33333333%; }\n  .col-md-8 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 66.66666667%;\n        -ms-flex: 0 0 66.66666667%;\n            flex: 0 0 66.66666667%;\n    max-width: 66.66666667%; }\n  .col-md-9 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 75%;\n        -ms-flex: 0 0 75%;\n            flex: 0 0 75%;\n    max-width: 75%; }\n  .col-md-10 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 83.33333333%;\n        -ms-flex: 0 0 83.33333333%;\n            flex: 0 0 83.33333333%;\n    max-width: 83.33333333%; }\n  .col-md-11 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 91.66666667%;\n        -ms-flex: 0 0 91.66666667%;\n            flex: 0 0 91.66666667%;\n    max-width: 91.66666667%; }\n  .col-md-12 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 100%;\n        -ms-flex: 0 0 100%;\n            flex: 0 0 100%;\n    max-width: 100%; }\n  .order-md-first {\n    -webkit-box-ordinal-group: 0;\n    -webkit-order: -1;\n        -ms-flex-order: -1;\n            order: -1; }\n  .order-md-last {\n    -webkit-box-ordinal-group: 14;\n    -webkit-order: 13;\n        -ms-flex-order: 13;\n            order: 13; }\n  .order-md-0 {\n    -webkit-box-ordinal-group: 1;\n    -webkit-order: 0;\n        -ms-flex-order: 0;\n            order: 0; }\n  .order-md-1 {\n    -webkit-box-ordinal-group: 2;\n    -webkit-order: 1;\n        -ms-flex-order: 1;\n            order: 1; }\n  .order-md-2 {\n    -webkit-box-ordinal-group: 3;\n    -webkit-order: 2;\n        -ms-flex-order: 2;\n            order: 2; }\n  .order-md-3 {\n    -webkit-box-ordinal-group: 4;\n    -webkit-order: 3;\n        -ms-flex-order: 3;\n            order: 3; }\n  .order-md-4 {\n    -webkit-box-ordinal-group: 5;\n    -webkit-order: 4;\n        -ms-flex-order: 4;\n            order: 4; }\n  .order-md-5 {\n    -webkit-box-ordinal-group: 6;\n    -webkit-order: 5;\n        -ms-flex-order: 5;\n            order: 5; }\n  .order-md-6 {\n    -webkit-box-ordinal-group: 7;\n    -webkit-order: 6;\n        -ms-flex-order: 6;\n            order: 6; }\n  .order-md-7 {\n    -webkit-box-ordinal-group: 8;\n    -webkit-order: 7;\n        -ms-flex-order: 7;\n            order: 7; }\n  .order-md-8 {\n    -webkit-box-ordinal-group: 9;\n    -webkit-order: 8;\n        -ms-flex-order: 8;\n            order: 8; }\n  .order-md-9 {\n    -webkit-box-ordinal-group: 10;\n    -webkit-order: 9;\n        -ms-flex-order: 9;\n            order: 9; }\n  .order-md-10 {\n    -webkit-box-ordinal-group: 11;\n    -webkit-order: 10;\n        -ms-flex-order: 10;\n            order: 10; }\n  .order-md-11 {\n    -webkit-box-ordinal-group: 12;\n    -webkit-order: 11;\n        -ms-flex-order: 11;\n            order: 11; }\n  .order-md-12 {\n    -webkit-box-ordinal-group: 13;\n    -webkit-order: 12;\n        -ms-flex-order: 12;\n            order: 12; }\n  .offset-md-0 {\n    margin-left: 0; }\n  .offset-md-1 {\n    margin-left: 8.33333333%; }\n  .offset-md-2 {\n    margin-left: 16.66666667%; }\n  .offset-md-3 {\n    margin-left: 25%; }\n  .offset-md-4 {\n    margin-left: 33.33333333%; }\n  .offset-md-5 {\n    margin-left: 41.66666667%; }\n  .offset-md-6 {\n    margin-left: 50%; }\n  .offset-md-7 {\n    margin-left: 58.33333333%; }\n  .offset-md-8 {\n    margin-left: 66.66666667%; }\n  .offset-md-9 {\n    margin-left: 75%; }\n  .offset-md-10 {\n    margin-left: 83.33333333%; }\n  .offset-md-11 {\n    margin-left: 91.66666667%; } }\n@media (min-width: 992px) {\n  .col-lg {\n    -webkit-flex-basis: 0;\n        -ms-flex-preferred-size: 0;\n            flex-basis: 0;\n    -webkit-box-flex: 1;\n    -webkit-flex-grow: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1;\n    max-width: 100%; }\n  .col-lg-auto {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 auto;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n    width: auto;\n    max-width: none; }\n  .col-lg-1 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 8.33333333%;\n        -ms-flex: 0 0 8.33333333%;\n            flex: 0 0 8.33333333%;\n    max-width: 8.33333333%; }\n  .col-lg-2 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 16.66666667%;\n        -ms-flex: 0 0 16.66666667%;\n            flex: 0 0 16.66666667%;\n    max-width: 16.66666667%; }\n  .col-lg-3 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 25%;\n        -ms-flex: 0 0 25%;\n            flex: 0 0 25%;\n    max-width: 25%; }\n  .col-lg-4 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 33.33333333%;\n        -ms-flex: 0 0 33.33333333%;\n            flex: 0 0 33.33333333%;\n    max-width: 33.33333333%; }\n  .col-lg-5 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 41.66666667%;\n        -ms-flex: 0 0 41.66666667%;\n            flex: 0 0 41.66666667%;\n    max-width: 41.66666667%; }\n  .col-lg-6 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 50%;\n        -ms-flex: 0 0 50%;\n            flex: 0 0 50%;\n    max-width: 50%; }\n  .col-lg-7 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 58.33333333%;\n        -ms-flex: 0 0 58.33333333%;\n            flex: 0 0 58.33333333%;\n    max-width: 58.33333333%; }\n  .col-lg-8 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 66.66666667%;\n        -ms-flex: 0 0 66.66666667%;\n            flex: 0 0 66.66666667%;\n    max-width: 66.66666667%; }\n  .col-lg-9 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 75%;\n        -ms-flex: 0 0 75%;\n            flex: 0 0 75%;\n    max-width: 75%; }\n  .col-lg-10 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 83.33333333%;\n        -ms-flex: 0 0 83.33333333%;\n            flex: 0 0 83.33333333%;\n    max-width: 83.33333333%; }\n  .col-lg-11 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 91.66666667%;\n        -ms-flex: 0 0 91.66666667%;\n            flex: 0 0 91.66666667%;\n    max-width: 91.66666667%; }\n  .col-lg-12 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 100%;\n        -ms-flex: 0 0 100%;\n            flex: 0 0 100%;\n    max-width: 100%; }\n  .order-lg-first {\n    -webkit-box-ordinal-group: 0;\n    -webkit-order: -1;\n        -ms-flex-order: -1;\n            order: -1; }\n  .order-lg-last {\n    -webkit-box-ordinal-group: 14;\n    -webkit-order: 13;\n        -ms-flex-order: 13;\n            order: 13; }\n  .order-lg-0 {\n    -webkit-box-ordinal-group: 1;\n    -webkit-order: 0;\n        -ms-flex-order: 0;\n            order: 0; }\n  .order-lg-1 {\n    -webkit-box-ordinal-group: 2;\n    -webkit-order: 1;\n        -ms-flex-order: 1;\n            order: 1; }\n  .order-lg-2 {\n    -webkit-box-ordinal-group: 3;\n    -webkit-order: 2;\n        -ms-flex-order: 2;\n            order: 2; }\n  .order-lg-3 {\n    -webkit-box-ordinal-group: 4;\n    -webkit-order: 3;\n        -ms-flex-order: 3;\n            order: 3; }\n  .order-lg-4 {\n    -webkit-box-ordinal-group: 5;\n    -webkit-order: 4;\n        -ms-flex-order: 4;\n            order: 4; }\n  .order-lg-5 {\n    -webkit-box-ordinal-group: 6;\n    -webkit-order: 5;\n        -ms-flex-order: 5;\n            order: 5; }\n  .order-lg-6 {\n    -webkit-box-ordinal-group: 7;\n    -webkit-order: 6;\n        -ms-flex-order: 6;\n            order: 6; }\n  .order-lg-7 {\n    -webkit-box-ordinal-group: 8;\n    -webkit-order: 7;\n        -ms-flex-order: 7;\n            order: 7; }\n  .order-lg-8 {\n    -webkit-box-ordinal-group: 9;\n    -webkit-order: 8;\n        -ms-flex-order: 8;\n            order: 8; }\n  .order-lg-9 {\n    -webkit-box-ordinal-group: 10;\n    -webkit-order: 9;\n        -ms-flex-order: 9;\n            order: 9; }\n  .order-lg-10 {\n    -webkit-box-ordinal-group: 11;\n    -webkit-order: 10;\n        -ms-flex-order: 10;\n            order: 10; }\n  .order-lg-11 {\n    -webkit-box-ordinal-group: 12;\n    -webkit-order: 11;\n        -ms-flex-order: 11;\n            order: 11; }\n  .order-lg-12 {\n    -webkit-box-ordinal-group: 13;\n    -webkit-order: 12;\n        -ms-flex-order: 12;\n            order: 12; }\n  .offset-lg-0 {\n    margin-left: 0; }\n  .offset-lg-1 {\n    margin-left: 8.33333333%; }\n  .offset-lg-2 {\n    margin-left: 16.66666667%; }\n  .offset-lg-3 {\n    margin-left: 25%; }\n  .offset-lg-4 {\n    margin-left: 33.33333333%; }\n  .offset-lg-5 {\n    margin-left: 41.66666667%; }\n  .offset-lg-6 {\n    margin-left: 50%; }\n  .offset-lg-7 {\n    margin-left: 58.33333333%; }\n  .offset-lg-8 {\n    margin-left: 66.66666667%; }\n  .offset-lg-9 {\n    margin-left: 75%; }\n  .offset-lg-10 {\n    margin-left: 83.33333333%; }\n  .offset-lg-11 {\n    margin-left: 91.66666667%; } }\n@media (min-width: 1200px) {\n  .col-xl {\n    -webkit-flex-basis: 0;\n        -ms-flex-preferred-size: 0;\n            flex-basis: 0;\n    -webkit-box-flex: 1;\n    -webkit-flex-grow: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1;\n    max-width: 100%; }\n  .col-xl-auto {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 auto;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n    width: auto;\n    max-width: none; }\n  .col-xl-1 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 8.33333333%;\n        -ms-flex: 0 0 8.33333333%;\n            flex: 0 0 8.33333333%;\n    max-width: 8.33333333%; }\n  .col-xl-2 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 16.66666667%;\n        -ms-flex: 0 0 16.66666667%;\n            flex: 0 0 16.66666667%;\n    max-width: 16.66666667%; }\n  .col-xl-3 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 25%;\n        -ms-flex: 0 0 25%;\n            flex: 0 0 25%;\n    max-width: 25%; }\n  .col-xl-4 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 33.33333333%;\n        -ms-flex: 0 0 33.33333333%;\n            flex: 0 0 33.33333333%;\n    max-width: 33.33333333%; }\n  .col-xl-5 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 41.66666667%;\n        -ms-flex: 0 0 41.66666667%;\n            flex: 0 0 41.66666667%;\n    max-width: 41.66666667%; }\n  .col-xl-6 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 50%;\n        -ms-flex: 0 0 50%;\n            flex: 0 0 50%;\n    max-width: 50%; }\n  .col-xl-7 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 58.33333333%;\n        -ms-flex: 0 0 58.33333333%;\n            flex: 0 0 58.33333333%;\n    max-width: 58.33333333%; }\n  .col-xl-8 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 66.66666667%;\n        -ms-flex: 0 0 66.66666667%;\n            flex: 0 0 66.66666667%;\n    max-width: 66.66666667%; }\n  .col-xl-9 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 75%;\n        -ms-flex: 0 0 75%;\n            flex: 0 0 75%;\n    max-width: 75%; }\n  .col-xl-10 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 83.33333333%;\n        -ms-flex: 0 0 83.33333333%;\n            flex: 0 0 83.33333333%;\n    max-width: 83.33333333%; }\n  .col-xl-11 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 91.66666667%;\n        -ms-flex: 0 0 91.66666667%;\n            flex: 0 0 91.66666667%;\n    max-width: 91.66666667%; }\n  .col-xl-12 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 100%;\n        -ms-flex: 0 0 100%;\n            flex: 0 0 100%;\n    max-width: 100%; }\n  .order-xl-first {\n    -webkit-box-ordinal-group: 0;\n    -webkit-order: -1;\n        -ms-flex-order: -1;\n            order: -1; }\n  .order-xl-last {\n    -webkit-box-ordinal-group: 14;\n    -webkit-order: 13;\n        -ms-flex-order: 13;\n            order: 13; }\n  .order-xl-0 {\n    -webkit-box-ordinal-group: 1;\n    -webkit-order: 0;\n        -ms-flex-order: 0;\n            order: 0; }\n  .order-xl-1 {\n    -webkit-box-ordinal-group: 2;\n    -webkit-order: 1;\n        -ms-flex-order: 1;\n            order: 1; }\n  .order-xl-2 {\n    -webkit-box-ordinal-group: 3;\n    -webkit-order: 2;\n        -ms-flex-order: 2;\n            order: 2; }\n  .order-xl-3 {\n    -webkit-box-ordinal-group: 4;\n    -webkit-order: 3;\n        -ms-flex-order: 3;\n            order: 3; }\n  .order-xl-4 {\n    -webkit-box-ordinal-group: 5;\n    -webkit-order: 4;\n        -ms-flex-order: 4;\n            order: 4; }\n  .order-xl-5 {\n    -webkit-box-ordinal-group: 6;\n    -webkit-order: 5;\n        -ms-flex-order: 5;\n            order: 5; }\n  .order-xl-6 {\n    -webkit-box-ordinal-group: 7;\n    -webkit-order: 6;\n        -ms-flex-order: 6;\n            order: 6; }\n  .order-xl-7 {\n    -webkit-box-ordinal-group: 8;\n    -webkit-order: 7;\n        -ms-flex-order: 7;\n            order: 7; }\n  .order-xl-8 {\n    -webkit-box-ordinal-group: 9;\n    -webkit-order: 8;\n        -ms-flex-order: 8;\n            order: 8; }\n  .order-xl-9 {\n    -webkit-box-ordinal-group: 10;\n    -webkit-order: 9;\n        -ms-flex-order: 9;\n            order: 9; }\n  .order-xl-10 {\n    -webkit-box-ordinal-group: 11;\n    -webkit-order: 10;\n        -ms-flex-order: 10;\n            order: 10; }\n  .order-xl-11 {\n    -webkit-box-ordinal-group: 12;\n    -webkit-order: 11;\n        -ms-flex-order: 11;\n            order: 11; }\n  .order-xl-12 {\n    -webkit-box-ordinal-group: 13;\n    -webkit-order: 12;\n        -ms-flex-order: 12;\n            order: 12; }\n  .offset-xl-0 {\n    margin-left: 0; }\n  .offset-xl-1 {\n    margin-left: 8.33333333%; }\n  .offset-xl-2 {\n    margin-left: 16.66666667%; }\n  .offset-xl-3 {\n    margin-left: 25%; }\n  .offset-xl-4 {\n    margin-left: 33.33333333%; }\n  .offset-xl-5 {\n    margin-left: 41.66666667%; }\n  .offset-xl-6 {\n    margin-left: 50%; }\n  .offset-xl-7 {\n    margin-left: 58.33333333%; }\n  .offset-xl-8 {\n    margin-left: 66.66666667%; }\n  .offset-xl-9 {\n    margin-left: 75%; }\n  .offset-xl-10 {\n    margin-left: 83.33333333%; }\n  .offset-xl-11 {\n    margin-left: 91.66666667%; } }\n.d-none {\n  display: none !important; }\n.d-inline {\n  display: inline !important; }\n.d-inline-block {\n  display: inline-block !important; }\n.d-block {\n  display: block !important; }\n.d-table {\n  display: table !important; }\n.d-table-row {\n  display: table-row !important; }\n.d-table-cell {\n  display: table-cell !important; }\n.d-flex {\n  display: -webkit-box !important;\n  display: -webkit-flex !important;\n  display: -ms-flexbox !important;\n  display: flex !important; }\n.d-inline-flex {\n  display: -webkit-inline-box !important;\n  display: -webkit-inline-flex !important;\n  display: -ms-inline-flexbox !important;\n  display: inline-flex !important; }\n@media (min-width: 576px) {\n  .d-sm-none {\n    display: none !important; }\n  .d-sm-inline {\n    display: inline !important; }\n  .d-sm-inline-block {\n    display: inline-block !important; }\n  .d-sm-block {\n    display: block !important; }\n  .d-sm-table {\n    display: table !important; }\n  .d-sm-table-row {\n    display: table-row !important; }\n  .d-sm-table-cell {\n    display: table-cell !important; }\n  .d-sm-flex {\n    display: -webkit-box !important;\n    display: -webkit-flex !important;\n    display: -ms-flexbox !important;\n    display: flex !important; }\n  .d-sm-inline-flex {\n    display: -webkit-inline-box !important;\n    display: -webkit-inline-flex !important;\n    display: -ms-inline-flexbox !important;\n    display: inline-flex !important; } }\n@media (min-width: 768px) {\n  .d-md-none {\n    display: none !important; }\n  .d-md-inline {\n    display: inline !important; }\n  .d-md-inline-block {\n    display: inline-block !important; }\n  .d-md-block {\n    display: block !important; }\n  .d-md-table {\n    display: table !important; }\n  .d-md-table-row {\n    display: table-row !important; }\n  .d-md-table-cell {\n    display: table-cell !important; }\n  .d-md-flex {\n    display: -webkit-box !important;\n    display: -webkit-flex !important;\n    display: -ms-flexbox !important;\n    display: flex !important; }\n  .d-md-inline-flex {\n    display: -webkit-inline-box !important;\n    display: -webkit-inline-flex !important;\n    display: -ms-inline-flexbox !important;\n    display: inline-flex !important; } }\n@media (min-width: 992px) {\n  .d-lg-none {\n    display: none !important; }\n  .d-lg-inline {\n    display: inline !important; }\n  .d-lg-inline-block {\n    display: inline-block !important; }\n  .d-lg-block {\n    display: block !important; }\n  .d-lg-table {\n    display: table !important; }\n  .d-lg-table-row {\n    display: table-row !important; }\n  .d-lg-table-cell {\n    display: table-cell !important; }\n  .d-lg-flex {\n    display: -webkit-box !important;\n    display: -webkit-flex !important;\n    display: -ms-flexbox !important;\n    display: flex !important; }\n  .d-lg-inline-flex {\n    display: -webkit-inline-box !important;\n    display: -webkit-inline-flex !important;\n    display: -ms-inline-flexbox !important;\n    display: inline-flex !important; } }\n@media (min-width: 1200px) {\n  .d-xl-none {\n    display: none !important; }\n  .d-xl-inline {\n    display: inline !important; }\n  .d-xl-inline-block {\n    display: inline-block !important; }\n  .d-xl-block {\n    display: block !important; }\n  .d-xl-table {\n    display: table !important; }\n  .d-xl-table-row {\n    display: table-row !important; }\n  .d-xl-table-cell {\n    display: table-cell !important; }\n  .d-xl-flex {\n    display: -webkit-box !important;\n    display: -webkit-flex !important;\n    display: -ms-flexbox !important;\n    display: flex !important; }\n  .d-xl-inline-flex {\n    display: -webkit-inline-box !important;\n    display: -webkit-inline-flex !important;\n    display: -ms-inline-flexbox !important;\n    display: inline-flex !important; } }\n@media print {\n  .d-print-none {\n    display: none !important; }\n  .d-print-inline {\n    display: inline !important; }\n  .d-print-inline-block {\n    display: inline-block !important; }\n  .d-print-block {\n    display: block !important; }\n  .d-print-table {\n    display: table !important; }\n  .d-print-table-row {\n    display: table-row !important; }\n  .d-print-table-cell {\n    display: table-cell !important; }\n  .d-print-flex {\n    display: -webkit-box !important;\n    display: -webkit-flex !important;\n    display: -ms-flexbox !important;\n    display: flex !important; }\n  .d-print-inline-flex {\n    display: -webkit-inline-box !important;\n    display: -webkit-inline-flex !important;\n    display: -ms-inline-flexbox !important;\n    display: inline-flex !important; } }\n.flex-row {\n  -webkit-box-orient: horizontal !important;\n  -webkit-box-direction: normal !important;\n  -webkit-flex-direction: row !important;\n      -ms-flex-direction: row !important;\n          flex-direction: row !important; }\n.flex-column {\n  -webkit-box-orient: vertical !important;\n  -webkit-box-direction: normal !important;\n  -webkit-flex-direction: column !important;\n      -ms-flex-direction: column !important;\n          flex-direction: column !important; }\n.flex-row-reverse {\n  -webkit-box-orient: horizontal !important;\n  -webkit-box-direction: reverse !important;\n  -webkit-flex-direction: row-reverse !important;\n      -ms-flex-direction: row-reverse !important;\n          flex-direction: row-reverse !important; }\n.flex-column-reverse {\n  -webkit-box-orient: vertical !important;\n  -webkit-box-direction: reverse !important;\n  -webkit-flex-direction: column-reverse !important;\n      -ms-flex-direction: column-reverse !important;\n          flex-direction: column-reverse !important; }\n.flex-wrap {\n  -webkit-flex-wrap: wrap !important;\n      -ms-flex-wrap: wrap !important;\n          flex-wrap: wrap !important; }\n.flex-nowrap {\n  -webkit-flex-wrap: nowrap !important;\n      -ms-flex-wrap: nowrap !important;\n          flex-wrap: nowrap !important; }\n.flex-wrap-reverse {\n  -webkit-flex-wrap: wrap-reverse !important;\n      -ms-flex-wrap: wrap-reverse !important;\n          flex-wrap: wrap-reverse !important; }\n.flex-fill {\n  -webkit-box-flex: 1 !important;\n  -webkit-flex: 1 1 auto !important;\n      -ms-flex: 1 1 auto !important;\n          flex: 1 1 auto !important; }\n.flex-grow-0 {\n  -webkit-box-flex: 0 !important;\n  -webkit-flex-grow: 0 !important;\n      -ms-flex-positive: 0 !important;\n          flex-grow: 0 !important; }\n.flex-grow-1 {\n  -webkit-box-flex: 1 !important;\n  -webkit-flex-grow: 1 !important;\n      -ms-flex-positive: 1 !important;\n          flex-grow: 1 !important; }\n.flex-shrink-0 {\n  -webkit-flex-shrink: 0 !important;\n      -ms-flex-negative: 0 !important;\n          flex-shrink: 0 !important; }\n.flex-shrink-1 {\n  -webkit-flex-shrink: 1 !important;\n      -ms-flex-negative: 1 !important;\n          flex-shrink: 1 !important; }\n.justify-content-start {\n  -webkit-box-pack: start !important;\n  -webkit-justify-content: flex-start !important;\n      -ms-flex-pack: start !important;\n          justify-content: flex-start !important; }\n.justify-content-end {\n  -webkit-box-pack: end !important;\n  -webkit-justify-content: flex-end !important;\n      -ms-flex-pack: end !important;\n          justify-content: flex-end !important; }\n.justify-content-center {\n  -webkit-box-pack: center !important;\n  -webkit-justify-content: center !important;\n      -ms-flex-pack: center !important;\n          justify-content: center !important; }\n.justify-content-between {\n  -webkit-box-pack: justify !important;\n  -webkit-justify-content: space-between !important;\n      -ms-flex-pack: justify !important;\n          justify-content: space-between !important; }\n.justify-content-around {\n  -webkit-justify-content: space-around !important;\n      -ms-flex-pack: distribute !important;\n          justify-content: space-around !important; }\n.align-items-start {\n  -webkit-box-align: start !important;\n  -webkit-align-items: flex-start !important;\n      -ms-flex-align: start !important;\n          align-items: flex-start !important; }\n.align-items-end {\n  -webkit-box-align: end !important;\n  -webkit-align-items: flex-end !important;\n      -ms-flex-align: end !important;\n          align-items: flex-end !important; }\n.align-items-center {\n  -webkit-box-align: center !important;\n  -webkit-align-items: center !important;\n      -ms-flex-align: center !important;\n          align-items: center !important; }\n.align-items-baseline {\n  -webkit-box-align: baseline !important;\n  -webkit-align-items: baseline !important;\n      -ms-flex-align: baseline !important;\n          align-items: baseline !important; }\n.align-items-stretch {\n  -webkit-box-align: stretch !important;\n  -webkit-align-items: stretch !important;\n      -ms-flex-align: stretch !important;\n          align-items: stretch !important; }\n.align-content-start {\n  -webkit-align-content: flex-start !important;\n      -ms-flex-line-pack: start !important;\n          align-content: flex-start !important; }\n.align-content-end {\n  -webkit-align-content: flex-end !important;\n      -ms-flex-line-pack: end !important;\n          align-content: flex-end !important; }\n.align-content-center {\n  -webkit-align-content: center !important;\n      -ms-flex-line-pack: center !important;\n          align-content: center !important; }\n.align-content-between {\n  -webkit-align-content: space-between !important;\n      -ms-flex-line-pack: justify !important;\n          align-content: space-between !important; }\n.align-content-around {\n  -webkit-align-content: space-around !important;\n      -ms-flex-line-pack: distribute !important;\n          align-content: space-around !important; }\n.align-content-stretch {\n  -webkit-align-content: stretch !important;\n      -ms-flex-line-pack: stretch !important;\n          align-content: stretch !important; }\n.align-self-auto {\n  -webkit-align-self: auto !important;\n      -ms-flex-item-align: auto !important;\n              -ms-grid-row-align: auto !important;\n          align-self: auto !important; }\n.align-self-start {\n  -webkit-align-self: flex-start !important;\n      -ms-flex-item-align: start !important;\n          align-self: flex-start !important; }\n.align-self-end {\n  -webkit-align-self: flex-end !important;\n      -ms-flex-item-align: end !important;\n          align-self: flex-end !important; }\n.align-self-center {\n  -webkit-align-self: center !important;\n      -ms-flex-item-align: center !important;\n              -ms-grid-row-align: center !important;\n          align-self: center !important; }\n.align-self-baseline {\n  -webkit-align-self: baseline !important;\n      -ms-flex-item-align: baseline !important;\n          align-self: baseline !important; }\n.align-self-stretch {\n  -webkit-align-self: stretch !important;\n      -ms-flex-item-align: stretch !important;\n              -ms-grid-row-align: stretch !important;\n          align-self: stretch !important; }\n@media (min-width: 576px) {\n  .flex-sm-row {\n    -webkit-box-orient: horizontal !important;\n    -webkit-box-direction: normal !important;\n    -webkit-flex-direction: row !important;\n        -ms-flex-direction: row !important;\n            flex-direction: row !important; }\n  .flex-sm-column {\n    -webkit-box-orient: vertical !important;\n    -webkit-box-direction: normal !important;\n    -webkit-flex-direction: column !important;\n        -ms-flex-direction: column !important;\n            flex-direction: column !important; }\n  .flex-sm-row-reverse {\n    -webkit-box-orient: horizontal !important;\n    -webkit-box-direction: reverse !important;\n    -webkit-flex-direction: row-reverse !important;\n        -ms-flex-direction: row-reverse !important;\n            flex-direction: row-reverse !important; }\n  .flex-sm-column-reverse {\n    -webkit-box-orient: vertical !important;\n    -webkit-box-direction: reverse !important;\n    -webkit-flex-direction: column-reverse !important;\n        -ms-flex-direction: column-reverse !important;\n            flex-direction: column-reverse !important; }\n  .flex-sm-wrap {\n    -webkit-flex-wrap: wrap !important;\n        -ms-flex-wrap: wrap !important;\n            flex-wrap: wrap !important; }\n  .flex-sm-nowrap {\n    -webkit-flex-wrap: nowrap !important;\n        -ms-flex-wrap: nowrap !important;\n            flex-wrap: nowrap !important; }\n  .flex-sm-wrap-reverse {\n    -webkit-flex-wrap: wrap-reverse !important;\n        -ms-flex-wrap: wrap-reverse !important;\n            flex-wrap: wrap-reverse !important; }\n  .flex-sm-fill {\n    -webkit-box-flex: 1 !important;\n    -webkit-flex: 1 1 auto !important;\n        -ms-flex: 1 1 auto !important;\n            flex: 1 1 auto !important; }\n  .flex-sm-grow-0 {\n    -webkit-box-flex: 0 !important;\n    -webkit-flex-grow: 0 !important;\n        -ms-flex-positive: 0 !important;\n            flex-grow: 0 !important; }\n  .flex-sm-grow-1 {\n    -webkit-box-flex: 1 !important;\n    -webkit-flex-grow: 1 !important;\n        -ms-flex-positive: 1 !important;\n            flex-grow: 1 !important; }\n  .flex-sm-shrink-0 {\n    -webkit-flex-shrink: 0 !important;\n        -ms-flex-negative: 0 !important;\n            flex-shrink: 0 !important; }\n  .flex-sm-shrink-1 {\n    -webkit-flex-shrink: 1 !important;\n        -ms-flex-negative: 1 !important;\n            flex-shrink: 1 !important; }\n  .justify-content-sm-start {\n    -webkit-box-pack: start !important;\n    -webkit-justify-content: flex-start !important;\n        -ms-flex-pack: start !important;\n            justify-content: flex-start !important; }\n  .justify-content-sm-end {\n    -webkit-box-pack: end !important;\n    -webkit-justify-content: flex-end !important;\n        -ms-flex-pack: end !important;\n            justify-content: flex-end !important; }\n  .justify-content-sm-center {\n    -webkit-box-pack: center !important;\n    -webkit-justify-content: center !important;\n        -ms-flex-pack: center !important;\n            justify-content: center !important; }\n  .justify-content-sm-between {\n    -webkit-box-pack: justify !important;\n    -webkit-justify-content: space-between !important;\n        -ms-flex-pack: justify !important;\n            justify-content: space-between !important; }\n  .justify-content-sm-around {\n    -webkit-justify-content: space-around !important;\n        -ms-flex-pack: distribute !important;\n            justify-content: space-around !important; }\n  .align-items-sm-start {\n    -webkit-box-align: start !important;\n    -webkit-align-items: flex-start !important;\n        -ms-flex-align: start !important;\n            align-items: flex-start !important; }\n  .align-items-sm-end {\n    -webkit-box-align: end !important;\n    -webkit-align-items: flex-end !important;\n        -ms-flex-align: end !important;\n            align-items: flex-end !important; }\n  .align-items-sm-center {\n    -webkit-box-align: center !important;\n    -webkit-align-items: center !important;\n        -ms-flex-align: center !important;\n            align-items: center !important; }\n  .align-items-sm-baseline {\n    -webkit-box-align: baseline !important;\n    -webkit-align-items: baseline !important;\n        -ms-flex-align: baseline !important;\n            align-items: baseline !important; }\n  .align-items-sm-stretch {\n    -webkit-box-align: stretch !important;\n    -webkit-align-items: stretch !important;\n        -ms-flex-align: stretch !important;\n            align-items: stretch !important; }\n  .align-content-sm-start {\n    -webkit-align-content: flex-start !important;\n        -ms-flex-line-pack: start !important;\n            align-content: flex-start !important; }\n  .align-content-sm-end {\n    -webkit-align-content: flex-end !important;\n        -ms-flex-line-pack: end !important;\n            align-content: flex-end !important; }\n  .align-content-sm-center {\n    -webkit-align-content: center !important;\n        -ms-flex-line-pack: center !important;\n            align-content: center !important; }\n  .align-content-sm-between {\n    -webkit-align-content: space-between !important;\n        -ms-flex-line-pack: justify !important;\n            align-content: space-between !important; }\n  .align-content-sm-around {\n    -webkit-align-content: space-around !important;\n        -ms-flex-line-pack: distribute !important;\n            align-content: space-around !important; }\n  .align-content-sm-stretch {\n    -webkit-align-content: stretch !important;\n        -ms-flex-line-pack: stretch !important;\n            align-content: stretch !important; }\n  .align-self-sm-auto {\n    -webkit-align-self: auto !important;\n        -ms-flex-item-align: auto !important;\n                -ms-grid-row-align: auto !important;\n            align-self: auto !important; }\n  .align-self-sm-start {\n    -webkit-align-self: flex-start !important;\n        -ms-flex-item-align: start !important;\n            align-self: flex-start !important; }\n  .align-self-sm-end {\n    -webkit-align-self: flex-end !important;\n        -ms-flex-item-align: end !important;\n            align-self: flex-end !important; }\n  .align-self-sm-center {\n    -webkit-align-self: center !important;\n        -ms-flex-item-align: center !important;\n                -ms-grid-row-align: center !important;\n            align-self: center !important; }\n  .align-self-sm-baseline {\n    -webkit-align-self: baseline !important;\n        -ms-flex-item-align: baseline !important;\n            align-self: baseline !important; }\n  .align-self-sm-stretch {\n    -webkit-align-self: stretch !important;\n        -ms-flex-item-align: stretch !important;\n                -ms-grid-row-align: stretch !important;\n            align-self: stretch !important; } }\n@media (min-width: 768px) {\n  .flex-md-row {\n    -webkit-box-orient: horizontal !important;\n    -webkit-box-direction: normal !important;\n    -webkit-flex-direction: row !important;\n        -ms-flex-direction: row !important;\n            flex-direction: row !important; }\n  .flex-md-column {\n    -webkit-box-orient: vertical !important;\n    -webkit-box-direction: normal !important;\n    -webkit-flex-direction: column !important;\n        -ms-flex-direction: column !important;\n            flex-direction: column !important; }\n  .flex-md-row-reverse {\n    -webkit-box-orient: horizontal !important;\n    -webkit-box-direction: reverse !important;\n    -webkit-flex-direction: row-reverse !important;\n        -ms-flex-direction: row-reverse !important;\n            flex-direction: row-reverse !important; }\n  .flex-md-column-reverse {\n    -webkit-box-orient: vertical !important;\n    -webkit-box-direction: reverse !important;\n    -webkit-flex-direction: column-reverse !important;\n        -ms-flex-direction: column-reverse !important;\n            flex-direction: column-reverse !important; }\n  .flex-md-wrap {\n    -webkit-flex-wrap: wrap !important;\n        -ms-flex-wrap: wrap !important;\n            flex-wrap: wrap !important; }\n  .flex-md-nowrap {\n    -webkit-flex-wrap: nowrap !important;\n        -ms-flex-wrap: nowrap !important;\n            flex-wrap: nowrap !important; }\n  .flex-md-wrap-reverse {\n    -webkit-flex-wrap: wrap-reverse !important;\n        -ms-flex-wrap: wrap-reverse !important;\n            flex-wrap: wrap-reverse !important; }\n  .flex-md-fill {\n    -webkit-box-flex: 1 !important;\n    -webkit-flex: 1 1 auto !important;\n        -ms-flex: 1 1 auto !important;\n            flex: 1 1 auto !important; }\n  .flex-md-grow-0 {\n    -webkit-box-flex: 0 !important;\n    -webkit-flex-grow: 0 !important;\n        -ms-flex-positive: 0 !important;\n            flex-grow: 0 !important; }\n  .flex-md-grow-1 {\n    -webkit-box-flex: 1 !important;\n    -webkit-flex-grow: 1 !important;\n        -ms-flex-positive: 1 !important;\n            flex-grow: 1 !important; }\n  .flex-md-shrink-0 {\n    -webkit-flex-shrink: 0 !important;\n        -ms-flex-negative: 0 !important;\n            flex-shrink: 0 !important; }\n  .flex-md-shrink-1 {\n    -webkit-flex-shrink: 1 !important;\n        -ms-flex-negative: 1 !important;\n            flex-shrink: 1 !important; }\n  .justify-content-md-start {\n    -webkit-box-pack: start !important;\n    -webkit-justify-content: flex-start !important;\n        -ms-flex-pack: start !important;\n            justify-content: flex-start !important; }\n  .justify-content-md-end {\n    -webkit-box-pack: end !important;\n    -webkit-justify-content: flex-end !important;\n        -ms-flex-pack: end !important;\n            justify-content: flex-end !important; }\n  .justify-content-md-center {\n    -webkit-box-pack: center !important;\n    -webkit-justify-content: center !important;\n        -ms-flex-pack: center !important;\n            justify-content: center !important; }\n  .justify-content-md-between {\n    -webkit-box-pack: justify !important;\n    -webkit-justify-content: space-between !important;\n        -ms-flex-pack: justify !important;\n            justify-content: space-between !important; }\n  .justify-content-md-around {\n    -webkit-justify-content: space-around !important;\n        -ms-flex-pack: distribute !important;\n            justify-content: space-around !important; }\n  .align-items-md-start {\n    -webkit-box-align: start !important;\n    -webkit-align-items: flex-start !important;\n        -ms-flex-align: start !important;\n            align-items: flex-start !important; }\n  .align-items-md-end {\n    -webkit-box-align: end !important;\n    -webkit-align-items: flex-end !important;\n        -ms-flex-align: end !important;\n            align-items: flex-end !important; }\n  .align-items-md-center {\n    -webkit-box-align: center !important;\n    -webkit-align-items: center !important;\n        -ms-flex-align: center !important;\n            align-items: center !important; }\n  .align-items-md-baseline {\n    -webkit-box-align: baseline !important;\n    -webkit-align-items: baseline !important;\n        -ms-flex-align: baseline !important;\n            align-items: baseline !important; }\n  .align-items-md-stretch {\n    -webkit-box-align: stretch !important;\n    -webkit-align-items: stretch !important;\n        -ms-flex-align: stretch !important;\n            align-items: stretch !important; }\n  .align-content-md-start {\n    -webkit-align-content: flex-start !important;\n        -ms-flex-line-pack: start !important;\n            align-content: flex-start !important; }\n  .align-content-md-end {\n    -webkit-align-content: flex-end !important;\n        -ms-flex-line-pack: end !important;\n            align-content: flex-end !important; }\n  .align-content-md-center {\n    -webkit-align-content: center !important;\n        -ms-flex-line-pack: center !important;\n            align-content: center !important; }\n  .align-content-md-between {\n    -webkit-align-content: space-between !important;\n        -ms-flex-line-pack: justify !important;\n            align-content: space-between !important; }\n  .align-content-md-around {\n    -webkit-align-content: space-around !important;\n        -ms-flex-line-pack: distribute !important;\n            align-content: space-around !important; }\n  .align-content-md-stretch {\n    -webkit-align-content: stretch !important;\n        -ms-flex-line-pack: stretch !important;\n            align-content: stretch !important; }\n  .align-self-md-auto {\n    -webkit-align-self: auto !important;\n        -ms-flex-item-align: auto !important;\n                -ms-grid-row-align: auto !important;\n            align-self: auto !important; }\n  .align-self-md-start {\n    -webkit-align-self: flex-start !important;\n        -ms-flex-item-align: start !important;\n            align-self: flex-start !important; }\n  .align-self-md-end {\n    -webkit-align-self: flex-end !important;\n        -ms-flex-item-align: end !important;\n            align-self: flex-end !important; }\n  .align-self-md-center {\n    -webkit-align-self: center !important;\n        -ms-flex-item-align: center !important;\n                -ms-grid-row-align: center !important;\n            align-self: center !important; }\n  .align-self-md-baseline {\n    -webkit-align-self: baseline !important;\n        -ms-flex-item-align: baseline !important;\n            align-self: baseline !important; }\n  .align-self-md-stretch {\n    -webkit-align-self: stretch !important;\n        -ms-flex-item-align: stretch !important;\n                -ms-grid-row-align: stretch !important;\n            align-self: stretch !important; } }\n@media (min-width: 992px) {\n  .flex-lg-row {\n    -webkit-box-orient: horizontal !important;\n    -webkit-box-direction: normal !important;\n    -webkit-flex-direction: row !important;\n        -ms-flex-direction: row !important;\n            flex-direction: row !important; }\n  .flex-lg-column {\n    -webkit-box-orient: vertical !important;\n    -webkit-box-direction: normal !important;\n    -webkit-flex-direction: column !important;\n        -ms-flex-direction: column !important;\n            flex-direction: column !important; }\n  .flex-lg-row-reverse {\n    -webkit-box-orient: horizontal !important;\n    -webkit-box-direction: reverse !important;\n    -webkit-flex-direction: row-reverse !important;\n        -ms-flex-direction: row-reverse !important;\n            flex-direction: row-reverse !important; }\n  .flex-lg-column-reverse {\n    -webkit-box-orient: vertical !important;\n    -webkit-box-direction: reverse !important;\n    -webkit-flex-direction: column-reverse !important;\n        -ms-flex-direction: column-reverse !important;\n            flex-direction: column-reverse !important; }\n  .flex-lg-wrap {\n    -webkit-flex-wrap: wrap !important;\n        -ms-flex-wrap: wrap !important;\n            flex-wrap: wrap !important; }\n  .flex-lg-nowrap {\n    -webkit-flex-wrap: nowrap !important;\n        -ms-flex-wrap: nowrap !important;\n            flex-wrap: nowrap !important; }\n  .flex-lg-wrap-reverse {\n    -webkit-flex-wrap: wrap-reverse !important;\n        -ms-flex-wrap: wrap-reverse !important;\n            flex-wrap: wrap-reverse !important; }\n  .flex-lg-fill {\n    -webkit-box-flex: 1 !important;\n    -webkit-flex: 1 1 auto !important;\n        -ms-flex: 1 1 auto !important;\n            flex: 1 1 auto !important; }\n  .flex-lg-grow-0 {\n    -webkit-box-flex: 0 !important;\n    -webkit-flex-grow: 0 !important;\n        -ms-flex-positive: 0 !important;\n            flex-grow: 0 !important; }\n  .flex-lg-grow-1 {\n    -webkit-box-flex: 1 !important;\n    -webkit-flex-grow: 1 !important;\n        -ms-flex-positive: 1 !important;\n            flex-grow: 1 !important; }\n  .flex-lg-shrink-0 {\n    -webkit-flex-shrink: 0 !important;\n        -ms-flex-negative: 0 !important;\n            flex-shrink: 0 !important; }\n  .flex-lg-shrink-1 {\n    -webkit-flex-shrink: 1 !important;\n        -ms-flex-negative: 1 !important;\n            flex-shrink: 1 !important; }\n  .justify-content-lg-start {\n    -webkit-box-pack: start !important;\n    -webkit-justify-content: flex-start !important;\n        -ms-flex-pack: start !important;\n            justify-content: flex-start !important; }\n  .justify-content-lg-end {\n    -webkit-box-pack: end !important;\n    -webkit-justify-content: flex-end !important;\n        -ms-flex-pack: end !important;\n            justify-content: flex-end !important; }\n  .justify-content-lg-center {\n    -webkit-box-pack: center !important;\n    -webkit-justify-content: center !important;\n        -ms-flex-pack: center !important;\n            justify-content: center !important; }\n  .justify-content-lg-between {\n    -webkit-box-pack: justify !important;\n    -webkit-justify-content: space-between !important;\n        -ms-flex-pack: justify !important;\n            justify-content: space-between !important; }\n  .justify-content-lg-around {\n    -webkit-justify-content: space-around !important;\n        -ms-flex-pack: distribute !important;\n            justify-content: space-around !important; }\n  .align-items-lg-start {\n    -webkit-box-align: start !important;\n    -webkit-align-items: flex-start !important;\n        -ms-flex-align: start !important;\n            align-items: flex-start !important; }\n  .align-items-lg-end {\n    -webkit-box-align: end !important;\n    -webkit-align-items: flex-end !important;\n        -ms-flex-align: end !important;\n            align-items: flex-end !important; }\n  .align-items-lg-center {\n    -webkit-box-align: center !important;\n    -webkit-align-items: center !important;\n        -ms-flex-align: center !important;\n            align-items: center !important; }\n  .align-items-lg-baseline {\n    -webkit-box-align: baseline !important;\n    -webkit-align-items: baseline !important;\n        -ms-flex-align: baseline !important;\n            align-items: baseline !important; }\n  .align-items-lg-stretch {\n    -webkit-box-align: stretch !important;\n    -webkit-align-items: stretch !important;\n        -ms-flex-align: stretch !important;\n            align-items: stretch !important; }\n  .align-content-lg-start {\n    -webkit-align-content: flex-start !important;\n        -ms-flex-line-pack: start !important;\n            align-content: flex-start !important; }\n  .align-content-lg-end {\n    -webkit-align-content: flex-end !important;\n        -ms-flex-line-pack: end !important;\n            align-content: flex-end !important; }\n  .align-content-lg-center {\n    -webkit-align-content: center !important;\n        -ms-flex-line-pack: center !important;\n            align-content: center !important; }\n  .align-content-lg-between {\n    -webkit-align-content: space-between !important;\n        -ms-flex-line-pack: justify !important;\n            align-content: space-between !important; }\n  .align-content-lg-around {\n    -webkit-align-content: space-around !important;\n        -ms-flex-line-pack: distribute !important;\n            align-content: space-around !important; }\n  .align-content-lg-stretch {\n    -webkit-align-content: stretch !important;\n        -ms-flex-line-pack: stretch !important;\n            align-content: stretch !important; }\n  .align-self-lg-auto {\n    -webkit-align-self: auto !important;\n        -ms-flex-item-align: auto !important;\n                -ms-grid-row-align: auto !important;\n            align-self: auto !important; }\n  .align-self-lg-start {\n    -webkit-align-self: flex-start !important;\n        -ms-flex-item-align: start !important;\n            align-self: flex-start !important; }\n  .align-self-lg-end {\n    -webkit-align-self: flex-end !important;\n        -ms-flex-item-align: end !important;\n            align-self: flex-end !important; }\n  .align-self-lg-center {\n    -webkit-align-self: center !important;\n        -ms-flex-item-align: center !important;\n                -ms-grid-row-align: center !important;\n            align-self: center !important; }\n  .align-self-lg-baseline {\n    -webkit-align-self: baseline !important;\n        -ms-flex-item-align: baseline !important;\n            align-self: baseline !important; }\n  .align-self-lg-stretch {\n    -webkit-align-self: stretch !important;\n        -ms-flex-item-align: stretch !important;\n                -ms-grid-row-align: stretch !important;\n            align-self: stretch !important; } }\n@media (min-width: 1200px) {\n  .flex-xl-row {\n    -webkit-box-orient: horizontal !important;\n    -webkit-box-direction: normal !important;\n    -webkit-flex-direction: row !important;\n        -ms-flex-direction: row !important;\n            flex-direction: row !important; }\n  .flex-xl-column {\n    -webkit-box-orient: vertical !important;\n    -webkit-box-direction: normal !important;\n    -webkit-flex-direction: column !important;\n        -ms-flex-direction: column !important;\n            flex-direction: column !important; }\n  .flex-xl-row-reverse {\n    -webkit-box-orient: horizontal !important;\n    -webkit-box-direction: reverse !important;\n    -webkit-flex-direction: row-reverse !important;\n        -ms-flex-direction: row-reverse !important;\n            flex-direction: row-reverse !important; }\n  .flex-xl-column-reverse {\n    -webkit-box-orient: vertical !important;\n    -webkit-box-direction: reverse !important;\n    -webkit-flex-direction: column-reverse !important;\n        -ms-flex-direction: column-reverse !important;\n            flex-direction: column-reverse !important; }\n  .flex-xl-wrap {\n    -webkit-flex-wrap: wrap !important;\n        -ms-flex-wrap: wrap !important;\n            flex-wrap: wrap !important; }\n  .flex-xl-nowrap {\n    -webkit-flex-wrap: nowrap !important;\n        -ms-flex-wrap: nowrap !important;\n            flex-wrap: nowrap !important; }\n  .flex-xl-wrap-reverse {\n    -webkit-flex-wrap: wrap-reverse !important;\n        -ms-flex-wrap: wrap-reverse !important;\n            flex-wrap: wrap-reverse !important; }\n  .flex-xl-fill {\n    -webkit-box-flex: 1 !important;\n    -webkit-flex: 1 1 auto !important;\n        -ms-flex: 1 1 auto !important;\n            flex: 1 1 auto !important; }\n  .flex-xl-grow-0 {\n    -webkit-box-flex: 0 !important;\n    -webkit-flex-grow: 0 !important;\n        -ms-flex-positive: 0 !important;\n            flex-grow: 0 !important; }\n  .flex-xl-grow-1 {\n    -webkit-box-flex: 1 !important;\n    -webkit-flex-grow: 1 !important;\n        -ms-flex-positive: 1 !important;\n            flex-grow: 1 !important; }\n  .flex-xl-shrink-0 {\n    -webkit-flex-shrink: 0 !important;\n        -ms-flex-negative: 0 !important;\n            flex-shrink: 0 !important; }\n  .flex-xl-shrink-1 {\n    -webkit-flex-shrink: 1 !important;\n        -ms-flex-negative: 1 !important;\n            flex-shrink: 1 !important; }\n  .justify-content-xl-start {\n    -webkit-box-pack: start !important;\n    -webkit-justify-content: flex-start !important;\n        -ms-flex-pack: start !important;\n            justify-content: flex-start !important; }\n  .justify-content-xl-end {\n    -webkit-box-pack: end !important;\n    -webkit-justify-content: flex-end !important;\n        -ms-flex-pack: end !important;\n            justify-content: flex-end !important; }\n  .justify-content-xl-center {\n    -webkit-box-pack: center !important;\n    -webkit-justify-content: center !important;\n        -ms-flex-pack: center !important;\n            justify-content: center !important; }\n  .justify-content-xl-between {\n    -webkit-box-pack: justify !important;\n    -webkit-justify-content: space-between !important;\n        -ms-flex-pack: justify !important;\n            justify-content: space-between !important; }\n  .justify-content-xl-around {\n    -webkit-justify-content: space-around !important;\n        -ms-flex-pack: distribute !important;\n            justify-content: space-around !important; }\n  .align-items-xl-start {\n    -webkit-box-align: start !important;\n    -webkit-align-items: flex-start !important;\n        -ms-flex-align: start !important;\n            align-items: flex-start !important; }\n  .align-items-xl-end {\n    -webkit-box-align: end !important;\n    -webkit-align-items: flex-end !important;\n        -ms-flex-align: end !important;\n            align-items: flex-end !important; }\n  .align-items-xl-center {\n    -webkit-box-align: center !important;\n    -webkit-align-items: center !important;\n        -ms-flex-align: center !important;\n            align-items: center !important; }\n  .align-items-xl-baseline {\n    -webkit-box-align: baseline !important;\n    -webkit-align-items: baseline !important;\n        -ms-flex-align: baseline !important;\n            align-items: baseline !important; }\n  .align-items-xl-stretch {\n    -webkit-box-align: stretch !important;\n    -webkit-align-items: stretch !important;\n        -ms-flex-align: stretch !important;\n            align-items: stretch !important; }\n  .align-content-xl-start {\n    -webkit-align-content: flex-start !important;\n        -ms-flex-line-pack: start !important;\n            align-content: flex-start !important; }\n  .align-content-xl-end {\n    -webkit-align-content: flex-end !important;\n        -ms-flex-line-pack: end !important;\n            align-content: flex-end !important; }\n  .align-content-xl-center {\n    -webkit-align-content: center !important;\n        -ms-flex-line-pack: center !important;\n            align-content: center !important; }\n  .align-content-xl-between {\n    -webkit-align-content: space-between !important;\n        -ms-flex-line-pack: justify !important;\n            align-content: space-between !important; }\n  .align-content-xl-around {\n    -webkit-align-content: space-around !important;\n        -ms-flex-line-pack: distribute !important;\n            align-content: space-around !important; }\n  .align-content-xl-stretch {\n    -webkit-align-content: stretch !important;\n        -ms-flex-line-pack: stretch !important;\n            align-content: stretch !important; }\n  .align-self-xl-auto {\n    -webkit-align-self: auto !important;\n        -ms-flex-item-align: auto !important;\n                -ms-grid-row-align: auto !important;\n            align-self: auto !important; }\n  .align-self-xl-start {\n    -webkit-align-self: flex-start !important;\n        -ms-flex-item-align: start !important;\n            align-self: flex-start !important; }\n  .align-self-xl-end {\n    -webkit-align-self: flex-end !important;\n        -ms-flex-item-align: end !important;\n            align-self: flex-end !important; }\n  .align-self-xl-center {\n    -webkit-align-self: center !important;\n        -ms-flex-item-align: center !important;\n                -ms-grid-row-align: center !important;\n            align-self: center !important; }\n  .align-self-xl-baseline {\n    -webkit-align-self: baseline !important;\n        -ms-flex-item-align: baseline !important;\n            align-self: baseline !important; }\n  .align-self-xl-stretch {\n    -webkit-align-self: stretch !important;\n        -ms-flex-item-align: stretch !important;\n                -ms-grid-row-align: stretch !important;\n            align-self: stretch !important; } }\nheader .navbar {\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem; }\n@media (max-width: 991.98px) {\n    header .navbar {\n      padding-top: 1rem;\n      padding-bottom: 1rem; } }\nheader .navbar-dark .navbar-toggler {\n  border: 0;\n  padding-right: 0;\n  padding-left: 0; }\n@media (max-width: 991.98px) {\n  header .navbar-expand-lg > .container,\n  header .navbar-expand-lg > .container-fluid {\n    padding-left: 15px;\n    padding-right: 15px; } }\nheader .navbar-brand {\n  font-family: 'Nunito Sans';\n  margin-left: 0;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center; }\nheader .navbar-brand span {\n    margin-left: 1.437rem;\n    letter-spacing: 0.64px;\n    white-space: normal;\n    word-break: break-all;\n    font-size: 1.125rem;\n    font-weight: bold;\n    font-style: normal; }\n@media (max-width: 575.98px) {\n      header .navbar-brand span {\n        font-size: 1.1rem;\n        letter-spacing: 0.2rem;\n        margin-left: 0.75rem;\n        font-weight: bold; } }\nheader .navbar-dark .navbar-brand:hover {\n  color: #000; }\na.nav-btn-gray {\n  background: #93a5bf;\n  color: #fff !important;\n  padding: 0.536rem 0.804rem;\n  padding-left: 0.8rem !important;\n  padding-right: 0.8rem !important; }\n.top-bar {\n  background: #28a745;\n  color: #fff;\n  padding-top: 0.1675rem;\n  padding-bottom: 0.1675rem;\n  padding-left: 0.335rem;\n  padding-right: 0.335rem; }\n.top-bar a {\n    color: #fff; }\n.top-bar a:hover {\n      color: #fff; }\n.navbar-brand {\n  font-size: 1.675rem;\n  text-decoration: none;\n  letter-spacing: 4px;\n  margin-left: 2.68rem;\n  font-weight: 200;\n  margin-right: 0; }\n.navbar-brand .btn-outline-danger {\n    padding: 1rem 1.5rem !important; }\n.navbar-brand img {\n    width: 40px;\n    height: 40px; }\n@media (max-width: 575.98px) {\n      .navbar-brand img {\n        width: 40px;\n        height: 40px; } }\n.navbar-dark .navbar-brand {\n  color: #000; }\n.nav-item {\n  margin-right: 1rem;\n  margin-left: 1rem; }\n@media (max-width: 767.98px) {\n    .nav-item {\n      margin-left: 0;\n      margin-right: 0; } }\nheader .navbar-dark .navbar-nav .nav-link {\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  font-weight: 600;\n  color: #000;\n  text-align: center;\n  letter-spacing: 1.8px; }\nheader .navbar-dark .navbar-nav .nav-link:hover {\n    color: #000; }\nheader .navbar-dark .navbar-nav .nav-link i {\n    font-size: 2.25rem; }\nheader .navbar-nh {\n  z-index: 9999;\n  position: absolute;\n  width: 100%; }\n@media (max-width: 991.98px) {\n    header .navbar-nh {\n      background: transparent;\n      position: relative;\n      padding-bottom: 0;\n      padding-top: 2rem;\n      padding-bottom: 2rem; } }\nheader .navbar-default {\n  background-color: transparent !important;\n  border-color: transparent !important; }\nheader .navbar-default .navbar-nav > li > a {\n    color: #fff !important;\n    font-size: 16px; }\nheader .navbar-default .navbar-nav > li > a:hover {\n      color: #fff !important; }\nheader .navbar-default .navbar-toggle {\n    border-color: transparent; }\nheader .navbar-default .navbar-toggle:hover {\n      background-color: transparent !important; }\nheader .navbar-default .navbar-toggle:focus {\n      background-color: transparent !important; }\nheader .navbar-default .navbar-toggle .icon-bar {\n      background-color: #fff; }\nheader .nav > li {\n  text-align: center; }\n.navbar.active {\n  background: #3a446a !important;\n  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.25);\n  padding-top: 10px !important;\n  padding-bottom: 10px !important;\n  -webkit-transition: 0.5s;\n  transition: 0.5s; }\nheader .dropdown:hover > .dropdown-menu {\n  display: block; }\nheader .dropdown-menu:hover {\n  display: block; }\nheader .dropdown-menu {\n  position: absolute;\n  border: 0;\n  width: 128%;\n  margin-top: -9%;\n  left: 50%;\n  -webkit-transform: translate(-50%, 0);\n      -ms-transform: translate(-50%, 0);\n          transform: translate(-50%, 0);\n  background: transparent; }\nheader .dropdown-menu .text-center div:nth-child(2) {\n    font-size: 1.5rem;\n    font-weight: 600;\n    letter-spacing: 0.4px;\n    color: #303864; }\nheader .dropdown-menu .text-center div:nth-child(3) {\n    font-size: 0.9rem;\n    font-weight: 600;\n    letter-spacing: 0.3px;\n    color: #9199a8;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap; }\nheader .dropdown-menu.second {\n    width: 211%; }\nheader .dropdown-menu.second > div:before {\n      right: 28.5%; }\nheader .dropdown-menu.third > div:before {\n    top: 7px;\n    right: 21.5%; }\nheader .dropdown-menu > div {\n    padding-top: 0.5rem;\n    padding-bottom: 0.5rem;\n    margin-top: 5%;\n    background-color: #fff;\n    border: solid 1px #979797;\n    border-radius: 0.25rem;\n    max-width: 16rem;\n    width: 100%; }\nheader .dropdown-menu > div:before {\n      content: \"\";\n      position: absolute;\n      width: 20px;\n      height: 20px;\n      background: white;\n      border-top: 1px solid #bee7d9;\n      border-left: 1px solid #bee7d9;\n      top: 10px;\n      right: 12.5%;\n      -webkit-transform: rotate(45deg);\n          -ms-transform: rotate(45deg);\n              transform: rotate(45deg); }\nheader .dropdown-item {\n  font-size: 0.93rem;\n  color: #303864;\n  font-weight: 600;\n  letter-spacing: 0.3px;\n  text-decoration: none;\n  cursor: pointer;\n  font-family: \"Nunito Sans\" !important;\n  letter-spacing: 0.3px;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  white-space: inherit;\n  padding-left: 0.75rem;\n  padding-right: 0.75rem;\n  word-break: break-word; }\nheader .dropdown-item:hover, header .dropdown-item:focus {\n    background-color: #E9EDF2;\n    color: #16181b; }\nheader .dropdown-item img {\n    width: 13%;\n    margin-right: 0.75rem; }\nheader .show-menu {\n  display: none;\n  background: -webkit-gradient(linear, right bottom, left top, from(rgba(104, 116, 155, 0.5)), color-stop(50%, rgba(104, 116, 155, 0.85)), to(#68749b)), -webkit-gradient(linear, left top, left bottom, from(white), to(white));\n  background: linear-gradient(to left top, rgba(104, 116, 155, 0.5) 0%, rgba(104, 116, 155, 0.85) 50%, #68749b 100%), linear-gradient(white, white);\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  z-index: 9999999;\n  color: #fff;\n  font-size: 1.34rem;\n  font-weight: 400;\n  text-align: left;\n  overflow-y: auto; }\nheader .show-menu a {\n    color: #ffffff; }\nheader .show-menu::-webkit-scrollbar {\n  width: 8px; }\nheader .show-menu::-webkit-scrollbar-track {\n  background: #b9b5b5; }\nheader .show-menu::-webkit-scrollbar-thumb {\n  background: #68749b;\n  border-radius: 5px; }\nheader .show-menu::-webkit-scrollbar-thumb:hover {\n  background: #68749b; }\nheader .mini-icons {\n  margin-right: 15px; }\nheader .bttm {\n  margin: 0.268rem 0; }\nheader .mini-hr {\n  border: 0;\n  width: 100%;\n  height: 1px;\n  background: #fff; }\nheader .mini-dark {\n  display: block;\n  padding: 0.335rem 0;\n  background: #3a446a;\n  color: #fff;\n  text-align: center;\n  margin-bottom: 1rem; }\nheader .mini-icon-item {\n  margin: 0.469rem 0; }\nheader .mini-light {\n  display: block;\n  padding: 0.335rem 0;\n  background: #fff;\n  text-align: center;\n  margin-bottom: 1rem;\n  color: black !important; }\nheader .mini-title {\n  margin-bottom: 0.536rem; }\nheader .mini-brand {\n  letter-spacing: 1.5px; }\nheader .mini-container {\n  width: 100%;\n  min-width: 340px;\n  max-width: 550px;\n  padding: 15px 20px;\n  margin: 0 auto; }\nheader .mini-col {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n      -ms-flex-direction: column;\n          flex-direction: column; }\nheader .justified {\n  -webkit-box-pack: justify;\n  -webkit-justify-content: space-between;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  margin: 1.34rem 0; }\nheader .justified .close-menu {\n    margin-right: 0; }\nheader .justified img {\n    margin-right: 10px; }\nheader .mini-row {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center; }\nheader .hide-menu {\n  display: none !important; }\n@media only screen and (max-width: 1100px) {\n  header .show-menu {\n    display: block; }\n  header .menu-burger {\n    display: block; }\n  header .nav-right {\n    display: none; } }\nheader {\n  font-family: 'Nunito Sans';\n  background-color: #303864; }\nheader span {\n    color: #ffffff; }\nheader .navbar-dark .navbar-nav .nav-link {\n    color: #ffffff !important; }\nheader .dropdown-menu {\n    position: absolute;\n    border: 0;\n    margin-top: -5%;\n    background: transparent;\n    right: 0;\n    left: unset;\n    -webkit-transform: unset;\n        -ms-transform: unset;\n            transform: unset;\n    color: black;\n    word-break: break-all;\n    min-width: 27rem; }\nheader .dropdown-menu .text-center:nth-child(2) {\n      font-size: 1.5rem;\n      font-weight: 600;\n      letter-spacing: 0.4px;\n      color: #303864; }\nheader .dropdown-menu .text-center:nth-child(3) {\n      font-size: 0.9rem;\n      font-weight: 600;\n      letter-spacing: 0.3px;\n      color: #9199a8; }\nheader .dropdown-menu:hover {\n      display: block; }\nheader .dropdown-menu > div {\n      float: right;\n      padding-top: 2.5rem;\n      padding-bottom: 2.5rem;\n      margin-top: 5%;\n      background-color: #fff;\n      border: none;\n      max-width: 20.5rem;\n      width: 100%;\n      border-radius: 0;\n      padding-left: 1.5rem;\n      padding-right: 1.5rem;\n      max-height: 33rem;\n      overflow: auto; }\nheader .dropdown-menu > div:before {\n        display: none; }\nheader .dropdown-menu > div hr {\n        border-top: 1px solid #979797; }\n#profileDropdown img,\n#profileDropdown span,\n#profileDropdown h4 {\n  margin-right: 1.375rem; }\n#profileDropdown .option {\n  margin-right: 0; }\n#profileDropdown .profileName {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-flex-wrap: wrap;\n      -ms-flex-wrap: wrap;\n          flex-wrap: wrap; }\n#profileDropdown h4 {\n  font-size: 0.875rem;\n  font-weight: 600;\n  letter-spacing: 0.25px;\n  color: #ffffff;\n  margin-bottom: 0.25rem;\n  margin-top: 0.25rem;\n  text-align: left; }\n#profileDropdown span {\n  font-size: 0.75rem;\n  font-weight: 600;\n  letter-spacing: 0.25px;\n  color: #9199a8;\n  display: inline-block;\n  vertical-align: bottom;\n  line-height: normal; }\n.nav-link {\n  cursor: pointer; }\n.vertical-line > div {\n  background-color: rgba(255, 255, 255, 0.1);\n  width: 1px;\n  height: 100%;\n  position: absolute;\n  top: 0; }\n.referral-item > div {\n  margin-left: auto;\n  border-radius: 0.25rem;\n  background-color: #63cab6;\n  color: white;\n  padding: 0.25rem 0.5rem; }\n.referral-item > div img {\n    margin-right: 0;\n    width: 1.25rem;\n    margin-left: 0.5rem; }\n.welcome {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n.welcome img {\n    width: 3rem !important;\n    height: 3rem;\n    margin-bottom: 1rem; }\n.welcome h1 {\n    font-size: 1.25rem;\n    font-weight: bold;\n    letter-spacing: 0.3px;\n    text-align: center;\n    color: #303864; }\n.welcome p {\n    font-size: 1rem;\n    font-weight: 600;\n    letter-spacing: 0.3px;\n    color: #9199a8; }\n.kyc-status i {\n  font-size: 3rem;\n  margin-right: 1rem; }\n.kyc-status.success {\n  color: green !important; }\n.kyc-status.warning {\n  color: orange !important; }\n.kyc-status.error {\n  color: red !important; }\n"

/***/ }),

/***/ "./src/app/components/wallet/wallet-header/wallet-header.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/components/wallet/wallet-header/wallet-header.component.ts ***!
  \****************************************************************************/
/*! exports provided: WalletHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WalletHeaderComponent", function() { return WalletHeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_shared_data_enums__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/shared/data/enums */ "./src/app/shared/data/enums/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WalletHeaderComponent = /** @class */ (function () {
    function WalletHeaderComponent() {
        this.signOut = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.toggleSidenav = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.changeCls = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    WalletHeaderComponent.prototype.ngOnInit = function () {
        switch (this.kycStatus) {
            case _app_shared_data_enums__WEBPACK_IMPORTED_MODULE_1__["KycStatus"].PASSED:
                this.kycMessage = 'Congratulations, you have successfully completed KYC process';
                this.kycClass = 'success';
                break;
            case _app_shared_data_enums__WEBPACK_IMPORTED_MODULE_1__["KycStatus"].UNDETERMINED:
                this.kycMessage = 'You have not yet completed the KYC process';
                this.kycClass = 'warning';
                break;
            case _app_shared_data_enums__WEBPACK_IMPORTED_MODULE_1__["KycStatus"].REJECTED:
            case _app_shared_data_enums__WEBPACK_IMPORTED_MODULE_1__["KycStatus"].MULTIPLE_REJECTIONS:
                this.kycMessage = 'Your KYC process has been rejected.';
                this.kycClass = 'error';
                break;
        }
    };
    WalletHeaderComponent.prototype.onSignOut = function () {
        this.signOut.emit();
    };
    WalletHeaderComponent.prototype.onToggleSidenav = function () {
        this.toggleSidenav.emit();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], WalletHeaderComponent.prototype, "profilePicture", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], WalletHeaderComponent.prototype, "email", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], WalletHeaderComponent.prototype, "referralReward", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], WalletHeaderComponent.prototype, "firstName", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], WalletHeaderComponent.prototype, "lastName", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], WalletHeaderComponent.prototype, "kycStatus", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], WalletHeaderComponent.prototype, "signOut", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], WalletHeaderComponent.prototype, "toggleSidenav", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], WalletHeaderComponent.prototype, "changeCls", void 0);
    WalletHeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-wallet-header',
            template: __webpack_require__(/*! ./wallet-header.component.html */ "./src/app/components/wallet/wallet-header/wallet-header.component.html"),
            styles: [__webpack_require__(/*! ./wallet-header.component.scss */ "./src/app/components/wallet/wallet-header/wallet-header.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], WalletHeaderComponent);
    return WalletHeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/wallet/wallet-shell/wallet-shell.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/components/wallet/wallet-shell/wallet-shell.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-wallet-header [email]=\"email$ | async\" [firstName]=\"(names$ | async).firstName\" [lastName]=\"(names$ | async).lastName\"\n  [profilePicture]=\"profilePicture$ | async\" [referralReward]=\"referralReward$ | async\" (signOut)=\"signOut()\"\n  (toggleSidenav)=\"toggleSidenav()\"   [kycStatus]=\"kycStatus$ | async\" ></app-wallet-header>\n<mat-sidenav-container [class.unvsblbtn]=\"!helpClass\"   [class.vsblbtn]=\"helpClass\">\n  <mat-sidenav #sidenav class=\"sidenav\" [mode]=\"mobileQuery.matches ? 'over' : 'side'\" [opened]='!mobileQuery.matches && !disableSidenav'\n    [disableClose]=\"!mobileQuery.matches\">\n    <div *ngIf=\"mobileQuery.matches\">\n      <div class=\"text-center\">\n        <div class=\"user-info\">\n          <img *ngIf=\"profilePicture$ | async\" class=\"rounded-circle\" width=\"50\" height=\"50\" [src]=\"profilePicture$ | async\">\n          <div>\n            <h4>{{ (names$ | async).firstName }} {{ (names$ | async).lastName }}</h4>\n            <span>{{email$ | async}}</span>\n          </div>\n        </div>\n        <hr>\n        <div>\n          <a class=\"dropdown-item\">Notification <span class=\"notification-number\">2</span></a>\n          <a routerLink=\"settings\" class=\"dropdown-item\">Settings</a>\n          <a href=\"mailto:help@insights.network\" class=\"dropdown-item\">Contact Support</a>\n          <a routerLink=\"referral\" class=\"dropdown-item referral-item\">Invite friends\n            <div>Get <img src=\"assets/images/wallet/white-icon.svg\"> {{referralReward$ | async}}</div></a>\n          <a (click)=\"signOut()\" class=\"dropdown-item\">Sign Out</a>\n        </div>\n      </div>\n    </div>\n    <div class=\"container\">\n      <ul *ngIf=\"!mobileQuery.matches\" class=\"list-unstyled components\">\n        <li>\n          <a routerLink=\"./\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\">\n            <img src=\"assets/images/wallet/sidebar/dashboard.svg\">Dashboard</a>\n          <a routerLink=\"activities\" routerLinkActive=\"active\">\n            <img src=\"assets/images/wallet/sidebar/activity.svg\">Activities</a>\n          <a routerLink=\"wallet\" routerLinkActive=\"active\">\n            <img src=\"assets/images/wallet/sidebar/wallet.svg\">Wallet</a>\n          <!-- <a routerLink=\"exchange\" routerLinkActive=\"active\">\n            <img src=\"assets/images/wallet/sidebar/exchange.svg\">Exchange</a> -->\n          <a routerLink=\"referral\" routerLinkActive=\"active\">\n            <img src=\"assets/images/wallet/sidebar/referral.svg\">Invite Friends</a>\n        </li>\n      </ul>\n    </div>\n  </mat-sidenav>\n</mat-sidenav-container>\n<main>\n  <div class=\"container\">\n    <router-outlet></router-outlet>\n  </div>\n</main>\n<app-footer class=\"d-none d-lg-block d-xl-none\"></app-footer>\n<app-bottom-nav class=\"d-lg-none\">\n  <a routerLink=\"./\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\">\n    <img src=\"assets/images/wallet/sidebar/dashboard.svg\">Dashboard</a>\n  <a routerLink=\"activities\" routerLinkActive=\"active\">\n    <img src=\"assets/images/wallet/sidebar/activity.svg\">Activity</a>\n  <a routerLink=\"wallet\" routerLinkActive=\"active\">\n    <img src=\"assets/images/wallet/sidebar/wallet.svg\">Wallet</a>\n  <!-- <a routerLink=\"exchange\" routerLinkActive=\"active\">\n    <img src=\"assets/images/wallet/sidebar/exchange.svg\">Exchange</a> -->\n  <a routerLink=\"referral\" routerLinkActive=\"active\">\n    <img src=\"assets/images/wallet/sidebar/referral.svg\">Referral</a>\n</app-bottom-nav>\n"

/***/ }),

/***/ "./src/app/components/wallet/wallet-shell/wallet-shell.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/components/wallet/wallet-shell/wallet-shell.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*!\n * Bootstrap Grid v4.1.3 (https://getbootstrap.com/)\n * Copyright 2011-2018 The Bootstrap Authors\n * Copyright 2011-2018 Twitter, Inc.\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)\n */\n@-ms-viewport {\n  width: device-width; }\nhtml {\n  box-sizing: border-box;\n  -ms-overflow-style: scrollbar; }\n*,\n*::before,\n*::after {\n  box-sizing: inherit; }\n.container {\n  width: 100%;\n  padding-right: 15px;\n  padding-left: 15px;\n  margin-right: auto;\n  margin-left: auto; }\n@media (min-width: 576px) {\n    .container {\n      max-width: 540px; } }\n@media (min-width: 768px) {\n    .container {\n      max-width: 720px; } }\n@media (min-width: 992px) {\n    .container {\n      max-width: 960px; } }\n@media (min-width: 1200px) {\n    .container {\n      max-width: 1140px; } }\n.container-fluid {\n  width: 100%;\n  padding-right: 15px;\n  padding-left: 15px;\n  margin-right: auto;\n  margin-left: auto; }\n.row {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-flex-wrap: wrap;\n      -ms-flex-wrap: wrap;\n          flex-wrap: wrap;\n  margin-right: -15px;\n  margin-left: -15px; }\n.no-gutters {\n  margin-right: 0;\n  margin-left: 0; }\n.no-gutters > .col,\n  .no-gutters > [class*=\"col-\"] {\n    padding-right: 0;\n    padding-left: 0; }\n.col-1, .col-2, .col-3, .col-4, .col-5, .col-6, .col-7, .col-8, .col-9, .col-10, .col-11, .col-12, .col,\n.col-auto, .col-sm-1, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-10, .col-sm-11, .col-sm-12, .col-sm,\n.col-sm-auto, .col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-10, .col-md-11, .col-md-12, .col-md,\n.col-md-auto, .col-lg-1, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-10, .col-lg-11, .col-lg-12, .col-lg,\n.col-lg-auto, .col-xl-1, .col-xl-2, .col-xl-3, .col-xl-4, .col-xl-5, .col-xl-6, .col-xl-7, .col-xl-8, .col-xl-9, .col-xl-10, .col-xl-11, .col-xl-12, .col-xl,\n.col-xl-auto {\n  position: relative;\n  width: 100%;\n  min-height: 1px;\n  padding-right: 15px;\n  padding-left: 15px; }\n.col {\n  -webkit-flex-basis: 0;\n      -ms-flex-preferred-size: 0;\n          flex-basis: 0;\n  -webkit-box-flex: 1;\n  -webkit-flex-grow: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  max-width: 100%; }\n.col-auto {\n  -webkit-box-flex: 0;\n  -webkit-flex: 0 0 auto;\n      -ms-flex: 0 0 auto;\n          flex: 0 0 auto;\n  width: auto;\n  max-width: none; }\n.col-1 {\n  -webkit-box-flex: 0;\n  -webkit-flex: 0 0 8.33333333%;\n      -ms-flex: 0 0 8.33333333%;\n          flex: 0 0 8.33333333%;\n  max-width: 8.33333333%; }\n.col-2 {\n  -webkit-box-flex: 0;\n  -webkit-flex: 0 0 16.66666667%;\n      -ms-flex: 0 0 16.66666667%;\n          flex: 0 0 16.66666667%;\n  max-width: 16.66666667%; }\n.col-3 {\n  -webkit-box-flex: 0;\n  -webkit-flex: 0 0 25%;\n      -ms-flex: 0 0 25%;\n          flex: 0 0 25%;\n  max-width: 25%; }\n.col-4 {\n  -webkit-box-flex: 0;\n  -webkit-flex: 0 0 33.33333333%;\n      -ms-flex: 0 0 33.33333333%;\n          flex: 0 0 33.33333333%;\n  max-width: 33.33333333%; }\n.col-5 {\n  -webkit-box-flex: 0;\n  -webkit-flex: 0 0 41.66666667%;\n      -ms-flex: 0 0 41.66666667%;\n          flex: 0 0 41.66666667%;\n  max-width: 41.66666667%; }\n.col-6 {\n  -webkit-box-flex: 0;\n  -webkit-flex: 0 0 50%;\n      -ms-flex: 0 0 50%;\n          flex: 0 0 50%;\n  max-width: 50%; }\n.col-7 {\n  -webkit-box-flex: 0;\n  -webkit-flex: 0 0 58.33333333%;\n      -ms-flex: 0 0 58.33333333%;\n          flex: 0 0 58.33333333%;\n  max-width: 58.33333333%; }\n.col-8 {\n  -webkit-box-flex: 0;\n  -webkit-flex: 0 0 66.66666667%;\n      -ms-flex: 0 0 66.66666667%;\n          flex: 0 0 66.66666667%;\n  max-width: 66.66666667%; }\n.col-9 {\n  -webkit-box-flex: 0;\n  -webkit-flex: 0 0 75%;\n      -ms-flex: 0 0 75%;\n          flex: 0 0 75%;\n  max-width: 75%; }\n.col-10 {\n  -webkit-box-flex: 0;\n  -webkit-flex: 0 0 83.33333333%;\n      -ms-flex: 0 0 83.33333333%;\n          flex: 0 0 83.33333333%;\n  max-width: 83.33333333%; }\n.col-11 {\n  -webkit-box-flex: 0;\n  -webkit-flex: 0 0 91.66666667%;\n      -ms-flex: 0 0 91.66666667%;\n          flex: 0 0 91.66666667%;\n  max-width: 91.66666667%; }\n.col-12 {\n  -webkit-box-flex: 0;\n  -webkit-flex: 0 0 100%;\n      -ms-flex: 0 0 100%;\n          flex: 0 0 100%;\n  max-width: 100%; }\n.order-first {\n  -webkit-box-ordinal-group: 0;\n  -webkit-order: -1;\n      -ms-flex-order: -1;\n          order: -1; }\n.order-last {\n  -webkit-box-ordinal-group: 14;\n  -webkit-order: 13;\n      -ms-flex-order: 13;\n          order: 13; }\n.order-0 {\n  -webkit-box-ordinal-group: 1;\n  -webkit-order: 0;\n      -ms-flex-order: 0;\n          order: 0; }\n.order-1 {\n  -webkit-box-ordinal-group: 2;\n  -webkit-order: 1;\n      -ms-flex-order: 1;\n          order: 1; }\n.order-2 {\n  -webkit-box-ordinal-group: 3;\n  -webkit-order: 2;\n      -ms-flex-order: 2;\n          order: 2; }\n.order-3 {\n  -webkit-box-ordinal-group: 4;\n  -webkit-order: 3;\n      -ms-flex-order: 3;\n          order: 3; }\n.order-4 {\n  -webkit-box-ordinal-group: 5;\n  -webkit-order: 4;\n      -ms-flex-order: 4;\n          order: 4; }\n.order-5 {\n  -webkit-box-ordinal-group: 6;\n  -webkit-order: 5;\n      -ms-flex-order: 5;\n          order: 5; }\n.order-6 {\n  -webkit-box-ordinal-group: 7;\n  -webkit-order: 6;\n      -ms-flex-order: 6;\n          order: 6; }\n.order-7 {\n  -webkit-box-ordinal-group: 8;\n  -webkit-order: 7;\n      -ms-flex-order: 7;\n          order: 7; }\n.order-8 {\n  -webkit-box-ordinal-group: 9;\n  -webkit-order: 8;\n      -ms-flex-order: 8;\n          order: 8; }\n.order-9 {\n  -webkit-box-ordinal-group: 10;\n  -webkit-order: 9;\n      -ms-flex-order: 9;\n          order: 9; }\n.order-10 {\n  -webkit-box-ordinal-group: 11;\n  -webkit-order: 10;\n      -ms-flex-order: 10;\n          order: 10; }\n.order-11 {\n  -webkit-box-ordinal-group: 12;\n  -webkit-order: 11;\n      -ms-flex-order: 11;\n          order: 11; }\n.order-12 {\n  -webkit-box-ordinal-group: 13;\n  -webkit-order: 12;\n      -ms-flex-order: 12;\n          order: 12; }\n.offset-1 {\n  margin-left: 8.33333333%; }\n.offset-2 {\n  margin-left: 16.66666667%; }\n.offset-3 {\n  margin-left: 25%; }\n.offset-4 {\n  margin-left: 33.33333333%; }\n.offset-5 {\n  margin-left: 41.66666667%; }\n.offset-6 {\n  margin-left: 50%; }\n.offset-7 {\n  margin-left: 58.33333333%; }\n.offset-8 {\n  margin-left: 66.66666667%; }\n.offset-9 {\n  margin-left: 75%; }\n.offset-10 {\n  margin-left: 83.33333333%; }\n.offset-11 {\n  margin-left: 91.66666667%; }\n@media (min-width: 576px) {\n  .col-sm {\n    -webkit-flex-basis: 0;\n        -ms-flex-preferred-size: 0;\n            flex-basis: 0;\n    -webkit-box-flex: 1;\n    -webkit-flex-grow: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1;\n    max-width: 100%; }\n  .col-sm-auto {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 auto;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n    width: auto;\n    max-width: none; }\n  .col-sm-1 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 8.33333333%;\n        -ms-flex: 0 0 8.33333333%;\n            flex: 0 0 8.33333333%;\n    max-width: 8.33333333%; }\n  .col-sm-2 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 16.66666667%;\n        -ms-flex: 0 0 16.66666667%;\n            flex: 0 0 16.66666667%;\n    max-width: 16.66666667%; }\n  .col-sm-3 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 25%;\n        -ms-flex: 0 0 25%;\n            flex: 0 0 25%;\n    max-width: 25%; }\n  .col-sm-4 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 33.33333333%;\n        -ms-flex: 0 0 33.33333333%;\n            flex: 0 0 33.33333333%;\n    max-width: 33.33333333%; }\n  .col-sm-5 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 41.66666667%;\n        -ms-flex: 0 0 41.66666667%;\n            flex: 0 0 41.66666667%;\n    max-width: 41.66666667%; }\n  .col-sm-6 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 50%;\n        -ms-flex: 0 0 50%;\n            flex: 0 0 50%;\n    max-width: 50%; }\n  .col-sm-7 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 58.33333333%;\n        -ms-flex: 0 0 58.33333333%;\n            flex: 0 0 58.33333333%;\n    max-width: 58.33333333%; }\n  .col-sm-8 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 66.66666667%;\n        -ms-flex: 0 0 66.66666667%;\n            flex: 0 0 66.66666667%;\n    max-width: 66.66666667%; }\n  .col-sm-9 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 75%;\n        -ms-flex: 0 0 75%;\n            flex: 0 0 75%;\n    max-width: 75%; }\n  .col-sm-10 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 83.33333333%;\n        -ms-flex: 0 0 83.33333333%;\n            flex: 0 0 83.33333333%;\n    max-width: 83.33333333%; }\n  .col-sm-11 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 91.66666667%;\n        -ms-flex: 0 0 91.66666667%;\n            flex: 0 0 91.66666667%;\n    max-width: 91.66666667%; }\n  .col-sm-12 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 100%;\n        -ms-flex: 0 0 100%;\n            flex: 0 0 100%;\n    max-width: 100%; }\n  .order-sm-first {\n    -webkit-box-ordinal-group: 0;\n    -webkit-order: -1;\n        -ms-flex-order: -1;\n            order: -1; }\n  .order-sm-last {\n    -webkit-box-ordinal-group: 14;\n    -webkit-order: 13;\n        -ms-flex-order: 13;\n            order: 13; }\n  .order-sm-0 {\n    -webkit-box-ordinal-group: 1;\n    -webkit-order: 0;\n        -ms-flex-order: 0;\n            order: 0; }\n  .order-sm-1 {\n    -webkit-box-ordinal-group: 2;\n    -webkit-order: 1;\n        -ms-flex-order: 1;\n            order: 1; }\n  .order-sm-2 {\n    -webkit-box-ordinal-group: 3;\n    -webkit-order: 2;\n        -ms-flex-order: 2;\n            order: 2; }\n  .order-sm-3 {\n    -webkit-box-ordinal-group: 4;\n    -webkit-order: 3;\n        -ms-flex-order: 3;\n            order: 3; }\n  .order-sm-4 {\n    -webkit-box-ordinal-group: 5;\n    -webkit-order: 4;\n        -ms-flex-order: 4;\n            order: 4; }\n  .order-sm-5 {\n    -webkit-box-ordinal-group: 6;\n    -webkit-order: 5;\n        -ms-flex-order: 5;\n            order: 5; }\n  .order-sm-6 {\n    -webkit-box-ordinal-group: 7;\n    -webkit-order: 6;\n        -ms-flex-order: 6;\n            order: 6; }\n  .order-sm-7 {\n    -webkit-box-ordinal-group: 8;\n    -webkit-order: 7;\n        -ms-flex-order: 7;\n            order: 7; }\n  .order-sm-8 {\n    -webkit-box-ordinal-group: 9;\n    -webkit-order: 8;\n        -ms-flex-order: 8;\n            order: 8; }\n  .order-sm-9 {\n    -webkit-box-ordinal-group: 10;\n    -webkit-order: 9;\n        -ms-flex-order: 9;\n            order: 9; }\n  .order-sm-10 {\n    -webkit-box-ordinal-group: 11;\n    -webkit-order: 10;\n        -ms-flex-order: 10;\n            order: 10; }\n  .order-sm-11 {\n    -webkit-box-ordinal-group: 12;\n    -webkit-order: 11;\n        -ms-flex-order: 11;\n            order: 11; }\n  .order-sm-12 {\n    -webkit-box-ordinal-group: 13;\n    -webkit-order: 12;\n        -ms-flex-order: 12;\n            order: 12; }\n  .offset-sm-0 {\n    margin-left: 0; }\n  .offset-sm-1 {\n    margin-left: 8.33333333%; }\n  .offset-sm-2 {\n    margin-left: 16.66666667%; }\n  .offset-sm-3 {\n    margin-left: 25%; }\n  .offset-sm-4 {\n    margin-left: 33.33333333%; }\n  .offset-sm-5 {\n    margin-left: 41.66666667%; }\n  .offset-sm-6 {\n    margin-left: 50%; }\n  .offset-sm-7 {\n    margin-left: 58.33333333%; }\n  .offset-sm-8 {\n    margin-left: 66.66666667%; }\n  .offset-sm-9 {\n    margin-left: 75%; }\n  .offset-sm-10 {\n    margin-left: 83.33333333%; }\n  .offset-sm-11 {\n    margin-left: 91.66666667%; } }\n@media (min-width: 768px) {\n  .col-md {\n    -webkit-flex-basis: 0;\n        -ms-flex-preferred-size: 0;\n            flex-basis: 0;\n    -webkit-box-flex: 1;\n    -webkit-flex-grow: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1;\n    max-width: 100%; }\n  .col-md-auto {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 auto;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n    width: auto;\n    max-width: none; }\n  .col-md-1 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 8.33333333%;\n        -ms-flex: 0 0 8.33333333%;\n            flex: 0 0 8.33333333%;\n    max-width: 8.33333333%; }\n  .col-md-2 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 16.66666667%;\n        -ms-flex: 0 0 16.66666667%;\n            flex: 0 0 16.66666667%;\n    max-width: 16.66666667%; }\n  .col-md-3 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 25%;\n        -ms-flex: 0 0 25%;\n            flex: 0 0 25%;\n    max-width: 25%; }\n  .col-md-4 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 33.33333333%;\n        -ms-flex: 0 0 33.33333333%;\n            flex: 0 0 33.33333333%;\n    max-width: 33.33333333%; }\n  .col-md-5 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 41.66666667%;\n        -ms-flex: 0 0 41.66666667%;\n            flex: 0 0 41.66666667%;\n    max-width: 41.66666667%; }\n  .col-md-6 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 50%;\n        -ms-flex: 0 0 50%;\n            flex: 0 0 50%;\n    max-width: 50%; }\n  .col-md-7 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 58.33333333%;\n        -ms-flex: 0 0 58.33333333%;\n            flex: 0 0 58.33333333%;\n    max-width: 58.33333333%; }\n  .col-md-8 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 66.66666667%;\n        -ms-flex: 0 0 66.66666667%;\n            flex: 0 0 66.66666667%;\n    max-width: 66.66666667%; }\n  .col-md-9 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 75%;\n        -ms-flex: 0 0 75%;\n            flex: 0 0 75%;\n    max-width: 75%; }\n  .col-md-10 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 83.33333333%;\n        -ms-flex: 0 0 83.33333333%;\n            flex: 0 0 83.33333333%;\n    max-width: 83.33333333%; }\n  .col-md-11 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 91.66666667%;\n        -ms-flex: 0 0 91.66666667%;\n            flex: 0 0 91.66666667%;\n    max-width: 91.66666667%; }\n  .col-md-12 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 100%;\n        -ms-flex: 0 0 100%;\n            flex: 0 0 100%;\n    max-width: 100%; }\n  .order-md-first {\n    -webkit-box-ordinal-group: 0;\n    -webkit-order: -1;\n        -ms-flex-order: -1;\n            order: -1; }\n  .order-md-last {\n    -webkit-box-ordinal-group: 14;\n    -webkit-order: 13;\n        -ms-flex-order: 13;\n            order: 13; }\n  .order-md-0 {\n    -webkit-box-ordinal-group: 1;\n    -webkit-order: 0;\n        -ms-flex-order: 0;\n            order: 0; }\n  .order-md-1 {\n    -webkit-box-ordinal-group: 2;\n    -webkit-order: 1;\n        -ms-flex-order: 1;\n            order: 1; }\n  .order-md-2 {\n    -webkit-box-ordinal-group: 3;\n    -webkit-order: 2;\n        -ms-flex-order: 2;\n            order: 2; }\n  .order-md-3 {\n    -webkit-box-ordinal-group: 4;\n    -webkit-order: 3;\n        -ms-flex-order: 3;\n            order: 3; }\n  .order-md-4 {\n    -webkit-box-ordinal-group: 5;\n    -webkit-order: 4;\n        -ms-flex-order: 4;\n            order: 4; }\n  .order-md-5 {\n    -webkit-box-ordinal-group: 6;\n    -webkit-order: 5;\n        -ms-flex-order: 5;\n            order: 5; }\n  .order-md-6 {\n    -webkit-box-ordinal-group: 7;\n    -webkit-order: 6;\n        -ms-flex-order: 6;\n            order: 6; }\n  .order-md-7 {\n    -webkit-box-ordinal-group: 8;\n    -webkit-order: 7;\n        -ms-flex-order: 7;\n            order: 7; }\n  .order-md-8 {\n    -webkit-box-ordinal-group: 9;\n    -webkit-order: 8;\n        -ms-flex-order: 8;\n            order: 8; }\n  .order-md-9 {\n    -webkit-box-ordinal-group: 10;\n    -webkit-order: 9;\n        -ms-flex-order: 9;\n            order: 9; }\n  .order-md-10 {\n    -webkit-box-ordinal-group: 11;\n    -webkit-order: 10;\n        -ms-flex-order: 10;\n            order: 10; }\n  .order-md-11 {\n    -webkit-box-ordinal-group: 12;\n    -webkit-order: 11;\n        -ms-flex-order: 11;\n            order: 11; }\n  .order-md-12 {\n    -webkit-box-ordinal-group: 13;\n    -webkit-order: 12;\n        -ms-flex-order: 12;\n            order: 12; }\n  .offset-md-0 {\n    margin-left: 0; }\n  .offset-md-1 {\n    margin-left: 8.33333333%; }\n  .offset-md-2 {\n    margin-left: 16.66666667%; }\n  .offset-md-3 {\n    margin-left: 25%; }\n  .offset-md-4 {\n    margin-left: 33.33333333%; }\n  .offset-md-5 {\n    margin-left: 41.66666667%; }\n  .offset-md-6 {\n    margin-left: 50%; }\n  .offset-md-7 {\n    margin-left: 58.33333333%; }\n  .offset-md-8 {\n    margin-left: 66.66666667%; }\n  .offset-md-9 {\n    margin-left: 75%; }\n  .offset-md-10 {\n    margin-left: 83.33333333%; }\n  .offset-md-11 {\n    margin-left: 91.66666667%; } }\n@media (min-width: 992px) {\n  .col-lg {\n    -webkit-flex-basis: 0;\n        -ms-flex-preferred-size: 0;\n            flex-basis: 0;\n    -webkit-box-flex: 1;\n    -webkit-flex-grow: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1;\n    max-width: 100%; }\n  .col-lg-auto {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 auto;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n    width: auto;\n    max-width: none; }\n  .col-lg-1 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 8.33333333%;\n        -ms-flex: 0 0 8.33333333%;\n            flex: 0 0 8.33333333%;\n    max-width: 8.33333333%; }\n  .col-lg-2 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 16.66666667%;\n        -ms-flex: 0 0 16.66666667%;\n            flex: 0 0 16.66666667%;\n    max-width: 16.66666667%; }\n  .col-lg-3 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 25%;\n        -ms-flex: 0 0 25%;\n            flex: 0 0 25%;\n    max-width: 25%; }\n  .col-lg-4 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 33.33333333%;\n        -ms-flex: 0 0 33.33333333%;\n            flex: 0 0 33.33333333%;\n    max-width: 33.33333333%; }\n  .col-lg-5 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 41.66666667%;\n        -ms-flex: 0 0 41.66666667%;\n            flex: 0 0 41.66666667%;\n    max-width: 41.66666667%; }\n  .col-lg-6 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 50%;\n        -ms-flex: 0 0 50%;\n            flex: 0 0 50%;\n    max-width: 50%; }\n  .col-lg-7 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 58.33333333%;\n        -ms-flex: 0 0 58.33333333%;\n            flex: 0 0 58.33333333%;\n    max-width: 58.33333333%; }\n  .col-lg-8 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 66.66666667%;\n        -ms-flex: 0 0 66.66666667%;\n            flex: 0 0 66.66666667%;\n    max-width: 66.66666667%; }\n  .col-lg-9 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 75%;\n        -ms-flex: 0 0 75%;\n            flex: 0 0 75%;\n    max-width: 75%; }\n  .col-lg-10 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 83.33333333%;\n        -ms-flex: 0 0 83.33333333%;\n            flex: 0 0 83.33333333%;\n    max-width: 83.33333333%; }\n  .col-lg-11 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 91.66666667%;\n        -ms-flex: 0 0 91.66666667%;\n            flex: 0 0 91.66666667%;\n    max-width: 91.66666667%; }\n  .col-lg-12 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 100%;\n        -ms-flex: 0 0 100%;\n            flex: 0 0 100%;\n    max-width: 100%; }\n  .order-lg-first {\n    -webkit-box-ordinal-group: 0;\n    -webkit-order: -1;\n        -ms-flex-order: -1;\n            order: -1; }\n  .order-lg-last {\n    -webkit-box-ordinal-group: 14;\n    -webkit-order: 13;\n        -ms-flex-order: 13;\n            order: 13; }\n  .order-lg-0 {\n    -webkit-box-ordinal-group: 1;\n    -webkit-order: 0;\n        -ms-flex-order: 0;\n            order: 0; }\n  .order-lg-1 {\n    -webkit-box-ordinal-group: 2;\n    -webkit-order: 1;\n        -ms-flex-order: 1;\n            order: 1; }\n  .order-lg-2 {\n    -webkit-box-ordinal-group: 3;\n    -webkit-order: 2;\n        -ms-flex-order: 2;\n            order: 2; }\n  .order-lg-3 {\n    -webkit-box-ordinal-group: 4;\n    -webkit-order: 3;\n        -ms-flex-order: 3;\n            order: 3; }\n  .order-lg-4 {\n    -webkit-box-ordinal-group: 5;\n    -webkit-order: 4;\n        -ms-flex-order: 4;\n            order: 4; }\n  .order-lg-5 {\n    -webkit-box-ordinal-group: 6;\n    -webkit-order: 5;\n        -ms-flex-order: 5;\n            order: 5; }\n  .order-lg-6 {\n    -webkit-box-ordinal-group: 7;\n    -webkit-order: 6;\n        -ms-flex-order: 6;\n            order: 6; }\n  .order-lg-7 {\n    -webkit-box-ordinal-group: 8;\n    -webkit-order: 7;\n        -ms-flex-order: 7;\n            order: 7; }\n  .order-lg-8 {\n    -webkit-box-ordinal-group: 9;\n    -webkit-order: 8;\n        -ms-flex-order: 8;\n            order: 8; }\n  .order-lg-9 {\n    -webkit-box-ordinal-group: 10;\n    -webkit-order: 9;\n        -ms-flex-order: 9;\n            order: 9; }\n  .order-lg-10 {\n    -webkit-box-ordinal-group: 11;\n    -webkit-order: 10;\n        -ms-flex-order: 10;\n            order: 10; }\n  .order-lg-11 {\n    -webkit-box-ordinal-group: 12;\n    -webkit-order: 11;\n        -ms-flex-order: 11;\n            order: 11; }\n  .order-lg-12 {\n    -webkit-box-ordinal-group: 13;\n    -webkit-order: 12;\n        -ms-flex-order: 12;\n            order: 12; }\n  .offset-lg-0 {\n    margin-left: 0; }\n  .offset-lg-1 {\n    margin-left: 8.33333333%; }\n  .offset-lg-2 {\n    margin-left: 16.66666667%; }\n  .offset-lg-3 {\n    margin-left: 25%; }\n  .offset-lg-4 {\n    margin-left: 33.33333333%; }\n  .offset-lg-5 {\n    margin-left: 41.66666667%; }\n  .offset-lg-6 {\n    margin-left: 50%; }\n  .offset-lg-7 {\n    margin-left: 58.33333333%; }\n  .offset-lg-8 {\n    margin-left: 66.66666667%; }\n  .offset-lg-9 {\n    margin-left: 75%; }\n  .offset-lg-10 {\n    margin-left: 83.33333333%; }\n  .offset-lg-11 {\n    margin-left: 91.66666667%; } }\n@media (min-width: 1200px) {\n  .col-xl {\n    -webkit-flex-basis: 0;\n        -ms-flex-preferred-size: 0;\n            flex-basis: 0;\n    -webkit-box-flex: 1;\n    -webkit-flex-grow: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1;\n    max-width: 100%; }\n  .col-xl-auto {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 auto;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n    width: auto;\n    max-width: none; }\n  .col-xl-1 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 8.33333333%;\n        -ms-flex: 0 0 8.33333333%;\n            flex: 0 0 8.33333333%;\n    max-width: 8.33333333%; }\n  .col-xl-2 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 16.66666667%;\n        -ms-flex: 0 0 16.66666667%;\n            flex: 0 0 16.66666667%;\n    max-width: 16.66666667%; }\n  .col-xl-3 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 25%;\n        -ms-flex: 0 0 25%;\n            flex: 0 0 25%;\n    max-width: 25%; }\n  .col-xl-4 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 33.33333333%;\n        -ms-flex: 0 0 33.33333333%;\n            flex: 0 0 33.33333333%;\n    max-width: 33.33333333%; }\n  .col-xl-5 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 41.66666667%;\n        -ms-flex: 0 0 41.66666667%;\n            flex: 0 0 41.66666667%;\n    max-width: 41.66666667%; }\n  .col-xl-6 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 50%;\n        -ms-flex: 0 0 50%;\n            flex: 0 0 50%;\n    max-width: 50%; }\n  .col-xl-7 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 58.33333333%;\n        -ms-flex: 0 0 58.33333333%;\n            flex: 0 0 58.33333333%;\n    max-width: 58.33333333%; }\n  .col-xl-8 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 66.66666667%;\n        -ms-flex: 0 0 66.66666667%;\n            flex: 0 0 66.66666667%;\n    max-width: 66.66666667%; }\n  .col-xl-9 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 75%;\n        -ms-flex: 0 0 75%;\n            flex: 0 0 75%;\n    max-width: 75%; }\n  .col-xl-10 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 83.33333333%;\n        -ms-flex: 0 0 83.33333333%;\n            flex: 0 0 83.33333333%;\n    max-width: 83.33333333%; }\n  .col-xl-11 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 91.66666667%;\n        -ms-flex: 0 0 91.66666667%;\n            flex: 0 0 91.66666667%;\n    max-width: 91.66666667%; }\n  .col-xl-12 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 100%;\n        -ms-flex: 0 0 100%;\n            flex: 0 0 100%;\n    max-width: 100%; }\n  .order-xl-first {\n    -webkit-box-ordinal-group: 0;\n    -webkit-order: -1;\n        -ms-flex-order: -1;\n            order: -1; }\n  .order-xl-last {\n    -webkit-box-ordinal-group: 14;\n    -webkit-order: 13;\n        -ms-flex-order: 13;\n            order: 13; }\n  .order-xl-0 {\n    -webkit-box-ordinal-group: 1;\n    -webkit-order: 0;\n        -ms-flex-order: 0;\n            order: 0; }\n  .order-xl-1 {\n    -webkit-box-ordinal-group: 2;\n    -webkit-order: 1;\n        -ms-flex-order: 1;\n            order: 1; }\n  .order-xl-2 {\n    -webkit-box-ordinal-group: 3;\n    -webkit-order: 2;\n        -ms-flex-order: 2;\n            order: 2; }\n  .order-xl-3 {\n    -webkit-box-ordinal-group: 4;\n    -webkit-order: 3;\n        -ms-flex-order: 3;\n            order: 3; }\n  .order-xl-4 {\n    -webkit-box-ordinal-group: 5;\n    -webkit-order: 4;\n        -ms-flex-order: 4;\n            order: 4; }\n  .order-xl-5 {\n    -webkit-box-ordinal-group: 6;\n    -webkit-order: 5;\n        -ms-flex-order: 5;\n            order: 5; }\n  .order-xl-6 {\n    -webkit-box-ordinal-group: 7;\n    -webkit-order: 6;\n        -ms-flex-order: 6;\n            order: 6; }\n  .order-xl-7 {\n    -webkit-box-ordinal-group: 8;\n    -webkit-order: 7;\n        -ms-flex-order: 7;\n            order: 7; }\n  .order-xl-8 {\n    -webkit-box-ordinal-group: 9;\n    -webkit-order: 8;\n        -ms-flex-order: 8;\n            order: 8; }\n  .order-xl-9 {\n    -webkit-box-ordinal-group: 10;\n    -webkit-order: 9;\n        -ms-flex-order: 9;\n            order: 9; }\n  .order-xl-10 {\n    -webkit-box-ordinal-group: 11;\n    -webkit-order: 10;\n        -ms-flex-order: 10;\n            order: 10; }\n  .order-xl-11 {\n    -webkit-box-ordinal-group: 12;\n    -webkit-order: 11;\n        -ms-flex-order: 11;\n            order: 11; }\n  .order-xl-12 {\n    -webkit-box-ordinal-group: 13;\n    -webkit-order: 12;\n        -ms-flex-order: 12;\n            order: 12; }\n  .offset-xl-0 {\n    margin-left: 0; }\n  .offset-xl-1 {\n    margin-left: 8.33333333%; }\n  .offset-xl-2 {\n    margin-left: 16.66666667%; }\n  .offset-xl-3 {\n    margin-left: 25%; }\n  .offset-xl-4 {\n    margin-left: 33.33333333%; }\n  .offset-xl-5 {\n    margin-left: 41.66666667%; }\n  .offset-xl-6 {\n    margin-left: 50%; }\n  .offset-xl-7 {\n    margin-left: 58.33333333%; }\n  .offset-xl-8 {\n    margin-left: 66.66666667%; }\n  .offset-xl-9 {\n    margin-left: 75%; }\n  .offset-xl-10 {\n    margin-left: 83.33333333%; }\n  .offset-xl-11 {\n    margin-left: 91.66666667%; } }\n.d-none {\n  display: none !important; }\n.d-inline {\n  display: inline !important; }\n.d-inline-block {\n  display: inline-block !important; }\n.d-block {\n  display: block !important; }\n.d-table {\n  display: table !important; }\n.d-table-row {\n  display: table-row !important; }\n.d-table-cell {\n  display: table-cell !important; }\n.d-flex {\n  display: -webkit-box !important;\n  display: -webkit-flex !important;\n  display: -ms-flexbox !important;\n  display: flex !important; }\n.d-inline-flex {\n  display: -webkit-inline-box !important;\n  display: -webkit-inline-flex !important;\n  display: -ms-inline-flexbox !important;\n  display: inline-flex !important; }\n@media (min-width: 576px) {\n  .d-sm-none {\n    display: none !important; }\n  .d-sm-inline {\n    display: inline !important; }\n  .d-sm-inline-block {\n    display: inline-block !important; }\n  .d-sm-block {\n    display: block !important; }\n  .d-sm-table {\n    display: table !important; }\n  .d-sm-table-row {\n    display: table-row !important; }\n  .d-sm-table-cell {\n    display: table-cell !important; }\n  .d-sm-flex {\n    display: -webkit-box !important;\n    display: -webkit-flex !important;\n    display: -ms-flexbox !important;\n    display: flex !important; }\n  .d-sm-inline-flex {\n    display: -webkit-inline-box !important;\n    display: -webkit-inline-flex !important;\n    display: -ms-inline-flexbox !important;\n    display: inline-flex !important; } }\n@media (min-width: 768px) {\n  .d-md-none {\n    display: none !important; }\n  .d-md-inline {\n    display: inline !important; }\n  .d-md-inline-block {\n    display: inline-block !important; }\n  .d-md-block {\n    display: block !important; }\n  .d-md-table {\n    display: table !important; }\n  .d-md-table-row {\n    display: table-row !important; }\n  .d-md-table-cell {\n    display: table-cell !important; }\n  .d-md-flex {\n    display: -webkit-box !important;\n    display: -webkit-flex !important;\n    display: -ms-flexbox !important;\n    display: flex !important; }\n  .d-md-inline-flex {\n    display: -webkit-inline-box !important;\n    display: -webkit-inline-flex !important;\n    display: -ms-inline-flexbox !important;\n    display: inline-flex !important; } }\n@media (min-width: 992px) {\n  .d-lg-none {\n    display: none !important; }\n  .d-lg-inline {\n    display: inline !important; }\n  .d-lg-inline-block {\n    display: inline-block !important; }\n  .d-lg-block {\n    display: block !important; }\n  .d-lg-table {\n    display: table !important; }\n  .d-lg-table-row {\n    display: table-row !important; }\n  .d-lg-table-cell {\n    display: table-cell !important; }\n  .d-lg-flex {\n    display: -webkit-box !important;\n    display: -webkit-flex !important;\n    display: -ms-flexbox !important;\n    display: flex !important; }\n  .d-lg-inline-flex {\n    display: -webkit-inline-box !important;\n    display: -webkit-inline-flex !important;\n    display: -ms-inline-flexbox !important;\n    display: inline-flex !important; } }\n@media (min-width: 1200px) {\n  .d-xl-none {\n    display: none !important; }\n  .d-xl-inline {\n    display: inline !important; }\n  .d-xl-inline-block {\n    display: inline-block !important; }\n  .d-xl-block {\n    display: block !important; }\n  .d-xl-table {\n    display: table !important; }\n  .d-xl-table-row {\n    display: table-row !important; }\n  .d-xl-table-cell {\n    display: table-cell !important; }\n  .d-xl-flex {\n    display: -webkit-box !important;\n    display: -webkit-flex !important;\n    display: -ms-flexbox !important;\n    display: flex !important; }\n  .d-xl-inline-flex {\n    display: -webkit-inline-box !important;\n    display: -webkit-inline-flex !important;\n    display: -ms-inline-flexbox !important;\n    display: inline-flex !important; } }\n@media print {\n  .d-print-none {\n    display: none !important; }\n  .d-print-inline {\n    display: inline !important; }\n  .d-print-inline-block {\n    display: inline-block !important; }\n  .d-print-block {\n    display: block !important; }\n  .d-print-table {\n    display: table !important; }\n  .d-print-table-row {\n    display: table-row !important; }\n  .d-print-table-cell {\n    display: table-cell !important; }\n  .d-print-flex {\n    display: -webkit-box !important;\n    display: -webkit-flex !important;\n    display: -ms-flexbox !important;\n    display: flex !important; }\n  .d-print-inline-flex {\n    display: -webkit-inline-box !important;\n    display: -webkit-inline-flex !important;\n    display: -ms-inline-flexbox !important;\n    display: inline-flex !important; } }\n.flex-row {\n  -webkit-box-orient: horizontal !important;\n  -webkit-box-direction: normal !important;\n  -webkit-flex-direction: row !important;\n      -ms-flex-direction: row !important;\n          flex-direction: row !important; }\n.flex-column {\n  -webkit-box-orient: vertical !important;\n  -webkit-box-direction: normal !important;\n  -webkit-flex-direction: column !important;\n      -ms-flex-direction: column !important;\n          flex-direction: column !important; }\n.flex-row-reverse {\n  -webkit-box-orient: horizontal !important;\n  -webkit-box-direction: reverse !important;\n  -webkit-flex-direction: row-reverse !important;\n      -ms-flex-direction: row-reverse !important;\n          flex-direction: row-reverse !important; }\n.flex-column-reverse {\n  -webkit-box-orient: vertical !important;\n  -webkit-box-direction: reverse !important;\n  -webkit-flex-direction: column-reverse !important;\n      -ms-flex-direction: column-reverse !important;\n          flex-direction: column-reverse !important; }\n.flex-wrap {\n  -webkit-flex-wrap: wrap !important;\n      -ms-flex-wrap: wrap !important;\n          flex-wrap: wrap !important; }\n.flex-nowrap {\n  -webkit-flex-wrap: nowrap !important;\n      -ms-flex-wrap: nowrap !important;\n          flex-wrap: nowrap !important; }\n.flex-wrap-reverse {\n  -webkit-flex-wrap: wrap-reverse !important;\n      -ms-flex-wrap: wrap-reverse !important;\n          flex-wrap: wrap-reverse !important; }\n.flex-fill {\n  -webkit-box-flex: 1 !important;\n  -webkit-flex: 1 1 auto !important;\n      -ms-flex: 1 1 auto !important;\n          flex: 1 1 auto !important; }\n.flex-grow-0 {\n  -webkit-box-flex: 0 !important;\n  -webkit-flex-grow: 0 !important;\n      -ms-flex-positive: 0 !important;\n          flex-grow: 0 !important; }\n.flex-grow-1 {\n  -webkit-box-flex: 1 !important;\n  -webkit-flex-grow: 1 !important;\n      -ms-flex-positive: 1 !important;\n          flex-grow: 1 !important; }\n.flex-shrink-0 {\n  -webkit-flex-shrink: 0 !important;\n      -ms-flex-negative: 0 !important;\n          flex-shrink: 0 !important; }\n.flex-shrink-1 {\n  -webkit-flex-shrink: 1 !important;\n      -ms-flex-negative: 1 !important;\n          flex-shrink: 1 !important; }\n.justify-content-start {\n  -webkit-box-pack: start !important;\n  -webkit-justify-content: flex-start !important;\n      -ms-flex-pack: start !important;\n          justify-content: flex-start !important; }\n.justify-content-end {\n  -webkit-box-pack: end !important;\n  -webkit-justify-content: flex-end !important;\n      -ms-flex-pack: end !important;\n          justify-content: flex-end !important; }\n.justify-content-center {\n  -webkit-box-pack: center !important;\n  -webkit-justify-content: center !important;\n      -ms-flex-pack: center !important;\n          justify-content: center !important; }\n.justify-content-between {\n  -webkit-box-pack: justify !important;\n  -webkit-justify-content: space-between !important;\n      -ms-flex-pack: justify !important;\n          justify-content: space-between !important; }\n.justify-content-around {\n  -webkit-justify-content: space-around !important;\n      -ms-flex-pack: distribute !important;\n          justify-content: space-around !important; }\n.align-items-start {\n  -webkit-box-align: start !important;\n  -webkit-align-items: flex-start !important;\n      -ms-flex-align: start !important;\n          align-items: flex-start !important; }\n.align-items-end {\n  -webkit-box-align: end !important;\n  -webkit-align-items: flex-end !important;\n      -ms-flex-align: end !important;\n          align-items: flex-end !important; }\n.align-items-center {\n  -webkit-box-align: center !important;\n  -webkit-align-items: center !important;\n      -ms-flex-align: center !important;\n          align-items: center !important; }\n.align-items-baseline {\n  -webkit-box-align: baseline !important;\n  -webkit-align-items: baseline !important;\n      -ms-flex-align: baseline !important;\n          align-items: baseline !important; }\n.align-items-stretch {\n  -webkit-box-align: stretch !important;\n  -webkit-align-items: stretch !important;\n      -ms-flex-align: stretch !important;\n          align-items: stretch !important; }\n.align-content-start {\n  -webkit-align-content: flex-start !important;\n      -ms-flex-line-pack: start !important;\n          align-content: flex-start !important; }\n.align-content-end {\n  -webkit-align-content: flex-end !important;\n      -ms-flex-line-pack: end !important;\n          align-content: flex-end !important; }\n.align-content-center {\n  -webkit-align-content: center !important;\n      -ms-flex-line-pack: center !important;\n          align-content: center !important; }\n.align-content-between {\n  -webkit-align-content: space-between !important;\n      -ms-flex-line-pack: justify !important;\n          align-content: space-between !important; }\n.align-content-around {\n  -webkit-align-content: space-around !important;\n      -ms-flex-line-pack: distribute !important;\n          align-content: space-around !important; }\n.align-content-stretch {\n  -webkit-align-content: stretch !important;\n      -ms-flex-line-pack: stretch !important;\n          align-content: stretch !important; }\n.align-self-auto {\n  -webkit-align-self: auto !important;\n      -ms-flex-item-align: auto !important;\n              -ms-grid-row-align: auto !important;\n          align-self: auto !important; }\n.align-self-start {\n  -webkit-align-self: flex-start !important;\n      -ms-flex-item-align: start !important;\n          align-self: flex-start !important; }\n.align-self-end {\n  -webkit-align-self: flex-end !important;\n      -ms-flex-item-align: end !important;\n          align-self: flex-end !important; }\n.align-self-center {\n  -webkit-align-self: center !important;\n      -ms-flex-item-align: center !important;\n              -ms-grid-row-align: center !important;\n          align-self: center !important; }\n.align-self-baseline {\n  -webkit-align-self: baseline !important;\n      -ms-flex-item-align: baseline !important;\n          align-self: baseline !important; }\n.align-self-stretch {\n  -webkit-align-self: stretch !important;\n      -ms-flex-item-align: stretch !important;\n              -ms-grid-row-align: stretch !important;\n          align-self: stretch !important; }\n@media (min-width: 576px) {\n  .flex-sm-row {\n    -webkit-box-orient: horizontal !important;\n    -webkit-box-direction: normal !important;\n    -webkit-flex-direction: row !important;\n        -ms-flex-direction: row !important;\n            flex-direction: row !important; }\n  .flex-sm-column {\n    -webkit-box-orient: vertical !important;\n    -webkit-box-direction: normal !important;\n    -webkit-flex-direction: column !important;\n        -ms-flex-direction: column !important;\n            flex-direction: column !important; }\n  .flex-sm-row-reverse {\n    -webkit-box-orient: horizontal !important;\n    -webkit-box-direction: reverse !important;\n    -webkit-flex-direction: row-reverse !important;\n        -ms-flex-direction: row-reverse !important;\n            flex-direction: row-reverse !important; }\n  .flex-sm-column-reverse {\n    -webkit-box-orient: vertical !important;\n    -webkit-box-direction: reverse !important;\n    -webkit-flex-direction: column-reverse !important;\n        -ms-flex-direction: column-reverse !important;\n            flex-direction: column-reverse !important; }\n  .flex-sm-wrap {\n    -webkit-flex-wrap: wrap !important;\n        -ms-flex-wrap: wrap !important;\n            flex-wrap: wrap !important; }\n  .flex-sm-nowrap {\n    -webkit-flex-wrap: nowrap !important;\n        -ms-flex-wrap: nowrap !important;\n            flex-wrap: nowrap !important; }\n  .flex-sm-wrap-reverse {\n    -webkit-flex-wrap: wrap-reverse !important;\n        -ms-flex-wrap: wrap-reverse !important;\n            flex-wrap: wrap-reverse !important; }\n  .flex-sm-fill {\n    -webkit-box-flex: 1 !important;\n    -webkit-flex: 1 1 auto !important;\n        -ms-flex: 1 1 auto !important;\n            flex: 1 1 auto !important; }\n  .flex-sm-grow-0 {\n    -webkit-box-flex: 0 !important;\n    -webkit-flex-grow: 0 !important;\n        -ms-flex-positive: 0 !important;\n            flex-grow: 0 !important; }\n  .flex-sm-grow-1 {\n    -webkit-box-flex: 1 !important;\n    -webkit-flex-grow: 1 !important;\n        -ms-flex-positive: 1 !important;\n            flex-grow: 1 !important; }\n  .flex-sm-shrink-0 {\n    -webkit-flex-shrink: 0 !important;\n        -ms-flex-negative: 0 !important;\n            flex-shrink: 0 !important; }\n  .flex-sm-shrink-1 {\n    -webkit-flex-shrink: 1 !important;\n        -ms-flex-negative: 1 !important;\n            flex-shrink: 1 !important; }\n  .justify-content-sm-start {\n    -webkit-box-pack: start !important;\n    -webkit-justify-content: flex-start !important;\n        -ms-flex-pack: start !important;\n            justify-content: flex-start !important; }\n  .justify-content-sm-end {\n    -webkit-box-pack: end !important;\n    -webkit-justify-content: flex-end !important;\n        -ms-flex-pack: end !important;\n            justify-content: flex-end !important; }\n  .justify-content-sm-center {\n    -webkit-box-pack: center !important;\n    -webkit-justify-content: center !important;\n        -ms-flex-pack: center !important;\n            justify-content: center !important; }\n  .justify-content-sm-between {\n    -webkit-box-pack: justify !important;\n    -webkit-justify-content: space-between !important;\n        -ms-flex-pack: justify !important;\n            justify-content: space-between !important; }\n  .justify-content-sm-around {\n    -webkit-justify-content: space-around !important;\n        -ms-flex-pack: distribute !important;\n            justify-content: space-around !important; }\n  .align-items-sm-start {\n    -webkit-box-align: start !important;\n    -webkit-align-items: flex-start !important;\n        -ms-flex-align: start !important;\n            align-items: flex-start !important; }\n  .align-items-sm-end {\n    -webkit-box-align: end !important;\n    -webkit-align-items: flex-end !important;\n        -ms-flex-align: end !important;\n            align-items: flex-end !important; }\n  .align-items-sm-center {\n    -webkit-box-align: center !important;\n    -webkit-align-items: center !important;\n        -ms-flex-align: center !important;\n            align-items: center !important; }\n  .align-items-sm-baseline {\n    -webkit-box-align: baseline !important;\n    -webkit-align-items: baseline !important;\n        -ms-flex-align: baseline !important;\n            align-items: baseline !important; }\n  .align-items-sm-stretch {\n    -webkit-box-align: stretch !important;\n    -webkit-align-items: stretch !important;\n        -ms-flex-align: stretch !important;\n            align-items: stretch !important; }\n  .align-content-sm-start {\n    -webkit-align-content: flex-start !important;\n        -ms-flex-line-pack: start !important;\n            align-content: flex-start !important; }\n  .align-content-sm-end {\n    -webkit-align-content: flex-end !important;\n        -ms-flex-line-pack: end !important;\n            align-content: flex-end !important; }\n  .align-content-sm-center {\n    -webkit-align-content: center !important;\n        -ms-flex-line-pack: center !important;\n            align-content: center !important; }\n  .align-content-sm-between {\n    -webkit-align-content: space-between !important;\n        -ms-flex-line-pack: justify !important;\n            align-content: space-between !important; }\n  .align-content-sm-around {\n    -webkit-align-content: space-around !important;\n        -ms-flex-line-pack: distribute !important;\n            align-content: space-around !important; }\n  .align-content-sm-stretch {\n    -webkit-align-content: stretch !important;\n        -ms-flex-line-pack: stretch !important;\n            align-content: stretch !important; }\n  .align-self-sm-auto {\n    -webkit-align-self: auto !important;\n        -ms-flex-item-align: auto !important;\n                -ms-grid-row-align: auto !important;\n            align-self: auto !important; }\n  .align-self-sm-start {\n    -webkit-align-self: flex-start !important;\n        -ms-flex-item-align: start !important;\n            align-self: flex-start !important; }\n  .align-self-sm-end {\n    -webkit-align-self: flex-end !important;\n        -ms-flex-item-align: end !important;\n            align-self: flex-end !important; }\n  .align-self-sm-center {\n    -webkit-align-self: center !important;\n        -ms-flex-item-align: center !important;\n                -ms-grid-row-align: center !important;\n            align-self: center !important; }\n  .align-self-sm-baseline {\n    -webkit-align-self: baseline !important;\n        -ms-flex-item-align: baseline !important;\n            align-self: baseline !important; }\n  .align-self-sm-stretch {\n    -webkit-align-self: stretch !important;\n        -ms-flex-item-align: stretch !important;\n                -ms-grid-row-align: stretch !important;\n            align-self: stretch !important; } }\n@media (min-width: 768px) {\n  .flex-md-row {\n    -webkit-box-orient: horizontal !important;\n    -webkit-box-direction: normal !important;\n    -webkit-flex-direction: row !important;\n        -ms-flex-direction: row !important;\n            flex-direction: row !important; }\n  .flex-md-column {\n    -webkit-box-orient: vertical !important;\n    -webkit-box-direction: normal !important;\n    -webkit-flex-direction: column !important;\n        -ms-flex-direction: column !important;\n            flex-direction: column !important; }\n  .flex-md-row-reverse {\n    -webkit-box-orient: horizontal !important;\n    -webkit-box-direction: reverse !important;\n    -webkit-flex-direction: row-reverse !important;\n        -ms-flex-direction: row-reverse !important;\n            flex-direction: row-reverse !important; }\n  .flex-md-column-reverse {\n    -webkit-box-orient: vertical !important;\n    -webkit-box-direction: reverse !important;\n    -webkit-flex-direction: column-reverse !important;\n        -ms-flex-direction: column-reverse !important;\n            flex-direction: column-reverse !important; }\n  .flex-md-wrap {\n    -webkit-flex-wrap: wrap !important;\n        -ms-flex-wrap: wrap !important;\n            flex-wrap: wrap !important; }\n  .flex-md-nowrap {\n    -webkit-flex-wrap: nowrap !important;\n        -ms-flex-wrap: nowrap !important;\n            flex-wrap: nowrap !important; }\n  .flex-md-wrap-reverse {\n    -webkit-flex-wrap: wrap-reverse !important;\n        -ms-flex-wrap: wrap-reverse !important;\n            flex-wrap: wrap-reverse !important; }\n  .flex-md-fill {\n    -webkit-box-flex: 1 !important;\n    -webkit-flex: 1 1 auto !important;\n        -ms-flex: 1 1 auto !important;\n            flex: 1 1 auto !important; }\n  .flex-md-grow-0 {\n    -webkit-box-flex: 0 !important;\n    -webkit-flex-grow: 0 !important;\n        -ms-flex-positive: 0 !important;\n            flex-grow: 0 !important; }\n  .flex-md-grow-1 {\n    -webkit-box-flex: 1 !important;\n    -webkit-flex-grow: 1 !important;\n        -ms-flex-positive: 1 !important;\n            flex-grow: 1 !important; }\n  .flex-md-shrink-0 {\n    -webkit-flex-shrink: 0 !important;\n        -ms-flex-negative: 0 !important;\n            flex-shrink: 0 !important; }\n  .flex-md-shrink-1 {\n    -webkit-flex-shrink: 1 !important;\n        -ms-flex-negative: 1 !important;\n            flex-shrink: 1 !important; }\n  .justify-content-md-start {\n    -webkit-box-pack: start !important;\n    -webkit-justify-content: flex-start !important;\n        -ms-flex-pack: start !important;\n            justify-content: flex-start !important; }\n  .justify-content-md-end {\n    -webkit-box-pack: end !important;\n    -webkit-justify-content: flex-end !important;\n        -ms-flex-pack: end !important;\n            justify-content: flex-end !important; }\n  .justify-content-md-center {\n    -webkit-box-pack: center !important;\n    -webkit-justify-content: center !important;\n        -ms-flex-pack: center !important;\n            justify-content: center !important; }\n  .justify-content-md-between {\n    -webkit-box-pack: justify !important;\n    -webkit-justify-content: space-between !important;\n        -ms-flex-pack: justify !important;\n            justify-content: space-between !important; }\n  .justify-content-md-around {\n    -webkit-justify-content: space-around !important;\n        -ms-flex-pack: distribute !important;\n            justify-content: space-around !important; }\n  .align-items-md-start {\n    -webkit-box-align: start !important;\n    -webkit-align-items: flex-start !important;\n        -ms-flex-align: start !important;\n            align-items: flex-start !important; }\n  .align-items-md-end {\n    -webkit-box-align: end !important;\n    -webkit-align-items: flex-end !important;\n        -ms-flex-align: end !important;\n            align-items: flex-end !important; }\n  .align-items-md-center {\n    -webkit-box-align: center !important;\n    -webkit-align-items: center !important;\n        -ms-flex-align: center !important;\n            align-items: center !important; }\n  .align-items-md-baseline {\n    -webkit-box-align: baseline !important;\n    -webkit-align-items: baseline !important;\n        -ms-flex-align: baseline !important;\n            align-items: baseline !important; }\n  .align-items-md-stretch {\n    -webkit-box-align: stretch !important;\n    -webkit-align-items: stretch !important;\n        -ms-flex-align: stretch !important;\n            align-items: stretch !important; }\n  .align-content-md-start {\n    -webkit-align-content: flex-start !important;\n        -ms-flex-line-pack: start !important;\n            align-content: flex-start !important; }\n  .align-content-md-end {\n    -webkit-align-content: flex-end !important;\n        -ms-flex-line-pack: end !important;\n            align-content: flex-end !important; }\n  .align-content-md-center {\n    -webkit-align-content: center !important;\n        -ms-flex-line-pack: center !important;\n            align-content: center !important; }\n  .align-content-md-between {\n    -webkit-align-content: space-between !important;\n        -ms-flex-line-pack: justify !important;\n            align-content: space-between !important; }\n  .align-content-md-around {\n    -webkit-align-content: space-around !important;\n        -ms-flex-line-pack: distribute !important;\n            align-content: space-around !important; }\n  .align-content-md-stretch {\n    -webkit-align-content: stretch !important;\n        -ms-flex-line-pack: stretch !important;\n            align-content: stretch !important; }\n  .align-self-md-auto {\n    -webkit-align-self: auto !important;\n        -ms-flex-item-align: auto !important;\n                -ms-grid-row-align: auto !important;\n            align-self: auto !important; }\n  .align-self-md-start {\n    -webkit-align-self: flex-start !important;\n        -ms-flex-item-align: start !important;\n            align-self: flex-start !important; }\n  .align-self-md-end {\n    -webkit-align-self: flex-end !important;\n        -ms-flex-item-align: end !important;\n            align-self: flex-end !important; }\n  .align-self-md-center {\n    -webkit-align-self: center !important;\n        -ms-flex-item-align: center !important;\n                -ms-grid-row-align: center !important;\n            align-self: center !important; }\n  .align-self-md-baseline {\n    -webkit-align-self: baseline !important;\n        -ms-flex-item-align: baseline !important;\n            align-self: baseline !important; }\n  .align-self-md-stretch {\n    -webkit-align-self: stretch !important;\n        -ms-flex-item-align: stretch !important;\n                -ms-grid-row-align: stretch !important;\n            align-self: stretch !important; } }\n@media (min-width: 992px) {\n  .flex-lg-row {\n    -webkit-box-orient: horizontal !important;\n    -webkit-box-direction: normal !important;\n    -webkit-flex-direction: row !important;\n        -ms-flex-direction: row !important;\n            flex-direction: row !important; }\n  .flex-lg-column {\n    -webkit-box-orient: vertical !important;\n    -webkit-box-direction: normal !important;\n    -webkit-flex-direction: column !important;\n        -ms-flex-direction: column !important;\n            flex-direction: column !important; }\n  .flex-lg-row-reverse {\n    -webkit-box-orient: horizontal !important;\n    -webkit-box-direction: reverse !important;\n    -webkit-flex-direction: row-reverse !important;\n        -ms-flex-direction: row-reverse !important;\n            flex-direction: row-reverse !important; }\n  .flex-lg-column-reverse {\n    -webkit-box-orient: vertical !important;\n    -webkit-box-direction: reverse !important;\n    -webkit-flex-direction: column-reverse !important;\n        -ms-flex-direction: column-reverse !important;\n            flex-direction: column-reverse !important; }\n  .flex-lg-wrap {\n    -webkit-flex-wrap: wrap !important;\n        -ms-flex-wrap: wrap !important;\n            flex-wrap: wrap !important; }\n  .flex-lg-nowrap {\n    -webkit-flex-wrap: nowrap !important;\n        -ms-flex-wrap: nowrap !important;\n            flex-wrap: nowrap !important; }\n  .flex-lg-wrap-reverse {\n    -webkit-flex-wrap: wrap-reverse !important;\n        -ms-flex-wrap: wrap-reverse !important;\n            flex-wrap: wrap-reverse !important; }\n  .flex-lg-fill {\n    -webkit-box-flex: 1 !important;\n    -webkit-flex: 1 1 auto !important;\n        -ms-flex: 1 1 auto !important;\n            flex: 1 1 auto !important; }\n  .flex-lg-grow-0 {\n    -webkit-box-flex: 0 !important;\n    -webkit-flex-grow: 0 !important;\n        -ms-flex-positive: 0 !important;\n            flex-grow: 0 !important; }\n  .flex-lg-grow-1 {\n    -webkit-box-flex: 1 !important;\n    -webkit-flex-grow: 1 !important;\n        -ms-flex-positive: 1 !important;\n            flex-grow: 1 !important; }\n  .flex-lg-shrink-0 {\n    -webkit-flex-shrink: 0 !important;\n        -ms-flex-negative: 0 !important;\n            flex-shrink: 0 !important; }\n  .flex-lg-shrink-1 {\n    -webkit-flex-shrink: 1 !important;\n        -ms-flex-negative: 1 !important;\n            flex-shrink: 1 !important; }\n  .justify-content-lg-start {\n    -webkit-box-pack: start !important;\n    -webkit-justify-content: flex-start !important;\n        -ms-flex-pack: start !important;\n            justify-content: flex-start !important; }\n  .justify-content-lg-end {\n    -webkit-box-pack: end !important;\n    -webkit-justify-content: flex-end !important;\n        -ms-flex-pack: end !important;\n            justify-content: flex-end !important; }\n  .justify-content-lg-center {\n    -webkit-box-pack: center !important;\n    -webkit-justify-content: center !important;\n        -ms-flex-pack: center !important;\n            justify-content: center !important; }\n  .justify-content-lg-between {\n    -webkit-box-pack: justify !important;\n    -webkit-justify-content: space-between !important;\n        -ms-flex-pack: justify !important;\n            justify-content: space-between !important; }\n  .justify-content-lg-around {\n    -webkit-justify-content: space-around !important;\n        -ms-flex-pack: distribute !important;\n            justify-content: space-around !important; }\n  .align-items-lg-start {\n    -webkit-box-align: start !important;\n    -webkit-align-items: flex-start !important;\n        -ms-flex-align: start !important;\n            align-items: flex-start !important; }\n  .align-items-lg-end {\n    -webkit-box-align: end !important;\n    -webkit-align-items: flex-end !important;\n        -ms-flex-align: end !important;\n            align-items: flex-end !important; }\n  .align-items-lg-center {\n    -webkit-box-align: center !important;\n    -webkit-align-items: center !important;\n        -ms-flex-align: center !important;\n            align-items: center !important; }\n  .align-items-lg-baseline {\n    -webkit-box-align: baseline !important;\n    -webkit-align-items: baseline !important;\n        -ms-flex-align: baseline !important;\n            align-items: baseline !important; }\n  .align-items-lg-stretch {\n    -webkit-box-align: stretch !important;\n    -webkit-align-items: stretch !important;\n        -ms-flex-align: stretch !important;\n            align-items: stretch !important; }\n  .align-content-lg-start {\n    -webkit-align-content: flex-start !important;\n        -ms-flex-line-pack: start !important;\n            align-content: flex-start !important; }\n  .align-content-lg-end {\n    -webkit-align-content: flex-end !important;\n        -ms-flex-line-pack: end !important;\n            align-content: flex-end !important; }\n  .align-content-lg-center {\n    -webkit-align-content: center !important;\n        -ms-flex-line-pack: center !important;\n            align-content: center !important; }\n  .align-content-lg-between {\n    -webkit-align-content: space-between !important;\n        -ms-flex-line-pack: justify !important;\n            align-content: space-between !important; }\n  .align-content-lg-around {\n    -webkit-align-content: space-around !important;\n        -ms-flex-line-pack: distribute !important;\n            align-content: space-around !important; }\n  .align-content-lg-stretch {\n    -webkit-align-content: stretch !important;\n        -ms-flex-line-pack: stretch !important;\n            align-content: stretch !important; }\n  .align-self-lg-auto {\n    -webkit-align-self: auto !important;\n        -ms-flex-item-align: auto !important;\n                -ms-grid-row-align: auto !important;\n            align-self: auto !important; }\n  .align-self-lg-start {\n    -webkit-align-self: flex-start !important;\n        -ms-flex-item-align: start !important;\n            align-self: flex-start !important; }\n  .align-self-lg-end {\n    -webkit-align-self: flex-end !important;\n        -ms-flex-item-align: end !important;\n            align-self: flex-end !important; }\n  .align-self-lg-center {\n    -webkit-align-self: center !important;\n        -ms-flex-item-align: center !important;\n                -ms-grid-row-align: center !important;\n            align-self: center !important; }\n  .align-self-lg-baseline {\n    -webkit-align-self: baseline !important;\n        -ms-flex-item-align: baseline !important;\n            align-self: baseline !important; }\n  .align-self-lg-stretch {\n    -webkit-align-self: stretch !important;\n        -ms-flex-item-align: stretch !important;\n                -ms-grid-row-align: stretch !important;\n            align-self: stretch !important; } }\n@media (min-width: 1200px) {\n  .flex-xl-row {\n    -webkit-box-orient: horizontal !important;\n    -webkit-box-direction: normal !important;\n    -webkit-flex-direction: row !important;\n        -ms-flex-direction: row !important;\n            flex-direction: row !important; }\n  .flex-xl-column {\n    -webkit-box-orient: vertical !important;\n    -webkit-box-direction: normal !important;\n    -webkit-flex-direction: column !important;\n        -ms-flex-direction: column !important;\n            flex-direction: column !important; }\n  .flex-xl-row-reverse {\n    -webkit-box-orient: horizontal !important;\n    -webkit-box-direction: reverse !important;\n    -webkit-flex-direction: row-reverse !important;\n        -ms-flex-direction: row-reverse !important;\n            flex-direction: row-reverse !important; }\n  .flex-xl-column-reverse {\n    -webkit-box-orient: vertical !important;\n    -webkit-box-direction: reverse !important;\n    -webkit-flex-direction: column-reverse !important;\n        -ms-flex-direction: column-reverse !important;\n            flex-direction: column-reverse !important; }\n  .flex-xl-wrap {\n    -webkit-flex-wrap: wrap !important;\n        -ms-flex-wrap: wrap !important;\n            flex-wrap: wrap !important; }\n  .flex-xl-nowrap {\n    -webkit-flex-wrap: nowrap !important;\n        -ms-flex-wrap: nowrap !important;\n            flex-wrap: nowrap !important; }\n  .flex-xl-wrap-reverse {\n    -webkit-flex-wrap: wrap-reverse !important;\n        -ms-flex-wrap: wrap-reverse !important;\n            flex-wrap: wrap-reverse !important; }\n  .flex-xl-fill {\n    -webkit-box-flex: 1 !important;\n    -webkit-flex: 1 1 auto !important;\n        -ms-flex: 1 1 auto !important;\n            flex: 1 1 auto !important; }\n  .flex-xl-grow-0 {\n    -webkit-box-flex: 0 !important;\n    -webkit-flex-grow: 0 !important;\n        -ms-flex-positive: 0 !important;\n            flex-grow: 0 !important; }\n  .flex-xl-grow-1 {\n    -webkit-box-flex: 1 !important;\n    -webkit-flex-grow: 1 !important;\n        -ms-flex-positive: 1 !important;\n            flex-grow: 1 !important; }\n  .flex-xl-shrink-0 {\n    -webkit-flex-shrink: 0 !important;\n        -ms-flex-negative: 0 !important;\n            flex-shrink: 0 !important; }\n  .flex-xl-shrink-1 {\n    -webkit-flex-shrink: 1 !important;\n        -ms-flex-negative: 1 !important;\n            flex-shrink: 1 !important; }\n  .justify-content-xl-start {\n    -webkit-box-pack: start !important;\n    -webkit-justify-content: flex-start !important;\n        -ms-flex-pack: start !important;\n            justify-content: flex-start !important; }\n  .justify-content-xl-end {\n    -webkit-box-pack: end !important;\n    -webkit-justify-content: flex-end !important;\n        -ms-flex-pack: end !important;\n            justify-content: flex-end !important; }\n  .justify-content-xl-center {\n    -webkit-box-pack: center !important;\n    -webkit-justify-content: center !important;\n        -ms-flex-pack: center !important;\n            justify-content: center !important; }\n  .justify-content-xl-between {\n    -webkit-box-pack: justify !important;\n    -webkit-justify-content: space-between !important;\n        -ms-flex-pack: justify !important;\n            justify-content: space-between !important; }\n  .justify-content-xl-around {\n    -webkit-justify-content: space-around !important;\n        -ms-flex-pack: distribute !important;\n            justify-content: space-around !important; }\n  .align-items-xl-start {\n    -webkit-box-align: start !important;\n    -webkit-align-items: flex-start !important;\n        -ms-flex-align: start !important;\n            align-items: flex-start !important; }\n  .align-items-xl-end {\n    -webkit-box-align: end !important;\n    -webkit-align-items: flex-end !important;\n        -ms-flex-align: end !important;\n            align-items: flex-end !important; }\n  .align-items-xl-center {\n    -webkit-box-align: center !important;\n    -webkit-align-items: center !important;\n        -ms-flex-align: center !important;\n            align-items: center !important; }\n  .align-items-xl-baseline {\n    -webkit-box-align: baseline !important;\n    -webkit-align-items: baseline !important;\n        -ms-flex-align: baseline !important;\n            align-items: baseline !important; }\n  .align-items-xl-stretch {\n    -webkit-box-align: stretch !important;\n    -webkit-align-items: stretch !important;\n        -ms-flex-align: stretch !important;\n            align-items: stretch !important; }\n  .align-content-xl-start {\n    -webkit-align-content: flex-start !important;\n        -ms-flex-line-pack: start !important;\n            align-content: flex-start !important; }\n  .align-content-xl-end {\n    -webkit-align-content: flex-end !important;\n        -ms-flex-line-pack: end !important;\n            align-content: flex-end !important; }\n  .align-content-xl-center {\n    -webkit-align-content: center !important;\n        -ms-flex-line-pack: center !important;\n            align-content: center !important; }\n  .align-content-xl-between {\n    -webkit-align-content: space-between !important;\n        -ms-flex-line-pack: justify !important;\n            align-content: space-between !important; }\n  .align-content-xl-around {\n    -webkit-align-content: space-around !important;\n        -ms-flex-line-pack: distribute !important;\n            align-content: space-around !important; }\n  .align-content-xl-stretch {\n    -webkit-align-content: stretch !important;\n        -ms-flex-line-pack: stretch !important;\n            align-content: stretch !important; }\n  .align-self-xl-auto {\n    -webkit-align-self: auto !important;\n        -ms-flex-item-align: auto !important;\n                -ms-grid-row-align: auto !important;\n            align-self: auto !important; }\n  .align-self-xl-start {\n    -webkit-align-self: flex-start !important;\n        -ms-flex-item-align: start !important;\n            align-self: flex-start !important; }\n  .align-self-xl-end {\n    -webkit-align-self: flex-end !important;\n        -ms-flex-item-align: end !important;\n            align-self: flex-end !important; }\n  .align-self-xl-center {\n    -webkit-align-self: center !important;\n        -ms-flex-item-align: center !important;\n                -ms-grid-row-align: center !important;\n            align-self: center !important; }\n  .align-self-xl-baseline {\n    -webkit-align-self: baseline !important;\n        -ms-flex-item-align: baseline !important;\n            align-self: baseline !important; }\n  .align-self-xl-stretch {\n    -webkit-align-self: stretch !important;\n        -ms-flex-item-align: stretch !important;\n                -ms-grid-row-align: stretch !important;\n            align-self: stretch !important; } }\nmain {\n  min-height: -webkit-calc(100% - 23rem);\n  min-height: calc(100% - 23rem);\n  background-color: white; }\n@media (max-width: 991px) {\n  .vsblbtn {\n    display: block; }\n  .unvsblbtn {\n    display: none; }\n  /deep/.mat-drawer-backdrop.mat-drawer-shown {\n    visibility: hidden !important; } }\nmat-sidenav-container {\n  box-shadow: 2px 0 10px 0 rgba(0, 0, 0, 0.07);\n  border: solid 1px rgba(140, 159, 191, 0.3); }\n.mat-drawer {\n  position: inherit; }\n.sidenav {\n  color: #8c9fbf;\n  width: 100%;\n  font-family: 'Nunito Sans'; }\n@media (max-width: 991.98px) {\n    .sidenav {\n      background-color: #3a446a;\n      color: #ffffff;\n      width: 100%;\n      height: -webkit-fit-content;\n      height: -moz-fit-content;\n      height: fit-content;\n      -webkit-transform: translate3d(0, -100%, 0);\n              transform: translate3d(0, -100%, 0); } }\n.sidenav .mat-drew {\n    position: inherit; }\n.sidenav hr {\n    background-color: #979797; }\n.sidenav ul {\n    margin-bottom: 0; }\n.sidenav ul li a {\n      padding: 1rem 1rem;\n      font-size: 14px;\n      font-weight: normal;\n      font-style: normal;\n      font-stretch: normal;\n      line-height: normal;\n      letter-spacing: normal;\n      color: #8c9fbf;\n      text-decoration: none;\n      display: inline-block; }\n.sidenav ul li a:hover {\n        color: #3a446a; }\n.sidenav ul li a.active {\n        color: #61c1b7;\n        border-bottom: 2px solid #61c1b7; }\n.sidenav ul li a img {\n        margin-right: 10px;\n        width: 19px; }\n.dropdown-item {\n  font-size: 0.93rem;\n  color: #ffffff;\n  text-decoration: none;\n  cursor: pointer;\n  letter-spacing: 1.5px;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  white-space: inherit;\n  padding: 0.75rem 1.75rem; }\n.dropdown-item:hover, .dropdown-item:focus {\n    background-color: #3a446a;\n    color: #ffffff; }\n.dropdown-item img {\n    width: 13%;\n    margin-right: 0.75rem; }\n.notification-number {\n  color: #e76988;\n  letter-spacing: 0.3px;\n  font-weight: bold;\n  margin-left: 1rem; }\n.user-info {\n  padding: 1rem 1.75rem;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  text-align: left; }\n.user-info img {\n    margin-right: 1rem; }\n.user-info h4 {\n    font-size: 1.2rem;\n    font-weight: 600;\n    letter-spacing: 0.4px;\n    color: #ffffff;\n    margin-bottom: 0; }\n.user-info span {\n    font-size: 1rem;\n    font-weight: 600;\n    letter-spacing: 0.3px;\n    color: #9199a8;\n    word-break: break-all; }\n.referral-item > div {\n  margin-left: auto;\n  border-radius: 0.25rem;\n  background-color: #63cab6;\n  color: white;\n  padding: 0.25rem 0.5rem; }\n.referral-item > div img {\n    margin-right: 0;\n    width: 1.25rem;\n    margin-left: 0.5rem; }\n"

/***/ }),

/***/ "./src/app/components/wallet/wallet-shell/wallet-shell.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/components/wallet/wallet-shell/wallet-shell.component.ts ***!
  \**************************************************************************/
/*! exports provided: WalletShellComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WalletShellComponent", function() { return WalletShellComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/fesm5/ngxs-store.js");
/* harmony import */ var _app_pages_wallet_state_wallet_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/pages/wallet/state/wallet.state */ "./src/app/pages/wallet/state/wallet.state.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_core_state_auth_state__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/core/state/auth.state */ "./src/app/core/state/auth.state.ts");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var WalletShellComponent = /** @class */ (function () {
    function WalletShellComponent(store, router, changeDetectorRef, media) {
        var _this = this;
        this.store = store;
        this.router = router;
        this.disableSidenav = false;
        this.helpClass = false;
        this.mobileQuery = media.matchMedia('(max-width: 991px)');
        this.mobileQueryListener = function () { return changeDetectorRef.detectChanges(); };
        this.mobileQuery.addListener(this.mobileQueryListener);
        this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["filter"])(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__["NavigationEnd"]; }))
            .subscribe(function () { return _this.disableSidenav = _this.router.url.includes('settings'); });
    }
    WalletShellComponent.prototype.ngOnDestroy = function () {
        this.mobileQuery.removeListener(this.mobileQueryListener);
    };
    WalletShellComponent.prototype.signOut = function () {
        var _this = this;
        this.store.dispatch(new _app_core_state_auth_state__WEBPACK_IMPORTED_MODULE_5__["Logout"]()).subscribe(function () { return _this.router.navigateByUrl('/'); });
    };
    WalletShellComponent.prototype.toggleSidenav = function () {
        this.sidenav.toggle();
        this.helpClass = !this.helpClass;
        console.log(this.helpClass);
    };
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Select"])(_app_pages_wallet_state_wallet_state__WEBPACK_IMPORTED_MODULE_2__["WalletState"].profilePicture),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], WalletShellComponent.prototype, "profilePicture$", void 0);
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Select"])(_app_pages_wallet_state_wallet_state__WEBPACK_IMPORTED_MODULE_2__["WalletState"].email),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], WalletShellComponent.prototype, "email$", void 0);
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Select"])(_app_pages_wallet_state_wallet_state__WEBPACK_IMPORTED_MODULE_2__["WalletState"].referralReward),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], WalletShellComponent.prototype, "referralReward$", void 0);
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Select"])(_app_pages_wallet_state_wallet_state__WEBPACK_IMPORTED_MODULE_2__["WalletState"].names),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], WalletShellComponent.prototype, "names$", void 0);
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Select"])(_app_pages_wallet_state_wallet_state__WEBPACK_IMPORTED_MODULE_2__["WalletState"].kycStatus),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], WalletShellComponent.prototype, "kycStatus$", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('sidenav'),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSidenav"])
    ], WalletShellComponent.prototype, "sidenav", void 0);
    WalletShellComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-wallet-shell',
            template: __webpack_require__(/*! ./wallet-shell.component.html */ "./src/app/components/wallet/wallet-shell/wallet-shell.component.html"),
            styles: [__webpack_require__(/*! ./wallet-shell.component.scss */ "./src/app/components/wallet/wallet-shell/wallet-shell.component.scss")]
        }),
        __metadata("design:paramtypes", [_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Store"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_6__["MediaMatcher"]])
    ], WalletShellComponent);
    return WalletShellComponent;
}());



/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: httpInterceptorProviders, CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "httpInterceptorProviders", function() { return httpInterceptorProviders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _module_import_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./module-import-guard */ "./src/app/core/module-import-guard.ts");
/* harmony import */ var _app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var _app_core_interceptors_logging_interceptor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/core/interceptors/logging.interceptor */ "./src/app/core/interceptors/logging.interceptor.ts");
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @env/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_core_services_activity_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/core/services/activity.service */ "./src/app/core/services/activity.service.ts");
/* harmony import */ var _app_core_interceptors_auth_interceptor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @app/core/interceptors/auth.interceptor */ "./src/app/core/interceptors/auth.interceptor.ts");
/* harmony import */ var _app_core_interceptors_locale_interceptor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @app/core/interceptors/locale.interceptor */ "./src/app/core/interceptors/locale.interceptor.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_core_services_user_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @app/core/services/user.service */ "./src/app/core/services/user.service.ts");
/* harmony import */ var _app_core_interceptors_http_error_interceptor__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @app/core/interceptors/http-error.interceptor */ "./src/app/core/interceptors/http-error.interceptor.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};













var httpInterceptorProviders = [
    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"], useClass: _app_core_interceptors_auth_interceptor__WEBPACK_IMPORTED_MODULE_8__["AuthInterceptor"], multi: true },
    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"], useClass: _app_core_interceptors_locale_interceptor__WEBPACK_IMPORTED_MODULE_9__["LocaleInterceptor"], multi: true },
    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"], useClass: _app_core_interceptors_http_error_interceptor__WEBPACK_IMPORTED_MODULE_12__["HttpErrorInterceptor"], multi: true },
];
if (!_env_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].production) {
    httpInterceptorProviders.push({ provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"], useClass: _app_core_interceptors_logging_interceptor__WEBPACK_IMPORTED_MODULE_5__["LoggingInterceptor"], multi: true });
}
var CoreModule = /** @class */ (function () {
    function CoreModule(parentModule) {
        Object(_module_import_guard__WEBPACK_IMPORTED_MODULE_3__["throwIfAlreadyLoaded"])(parentModule, 'CoreModule');
    }
    CoreModule_1 = CoreModule;
    CoreModule.forRoot = function () {
        return {
            ngModule: CoreModule_1,
            providers: [],
        };
    };
    CoreModule = CoreModule_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"]
            ],
            providers: [_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], httpInterceptorProviders, _app_core_services_activity_service__WEBPACK_IMPORTED_MODULE_7__["ActivityService"], _app_core_services_user_service__WEBPACK_IMPORTED_MODULE_11__["UserService"]],
            declarations: [],
            exports: []
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"])()),
        __metadata("design:paramtypes", [CoreModule])
    ], CoreModule);
    return CoreModule;
    var CoreModule_1;
}());



/***/ }),

/***/ "./src/app/core/interceptors/auth.interceptor.ts":
/*!*******************************************************!*\
  !*** ./src/app/core/interceptors/auth.interceptor.ts ***!
  \*******************************************************/
/*! exports provided: AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/fesm5/ngxs-store.js");
/* harmony import */ var _app_core_state_auth_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/core/state/auth.state */ "./src/app/core/state/auth.state.ts");
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @env/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthInterceptor = /** @class */ (function () {
    function AuthInterceptor(store) {
        this.store = store;
    }
    AuthInterceptor.prototype.intercept = function (req, next) {
        var token = this.store.selectSnapshot(_app_core_state_auth_state__WEBPACK_IMPORTED_MODULE_2__["AuthState"].token);
        if (token && req.url && req.url.includes(_env_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].backendEndpoint)) {
            var cloned = req.clone({
                headers: req.headers.set('Authorization', 'Basic ' + btoa(token + ':' + ''))
            });
            return next.handle(cloned);
        }
        return next.handle(req);
    };
    AuthInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Store"]])
    ], AuthInterceptor);
    return AuthInterceptor;
}());



/***/ }),

/***/ "./src/app/core/interceptors/http-error.interceptor.ts":
/*!*************************************************************!*\
  !*** ./src/app/core/interceptors/http-error.interceptor.ts ***!
  \*************************************************************/
/*! exports provided: HttpErrorInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpErrorInterceptor", function() { return HttpErrorInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/fesm5/ngxs-store.js");
/* harmony import */ var _app_core_state_auth_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/core/state/auth.state */ "./src/app/core/state/auth.state.ts");
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @env/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var HttpErrorInterceptor = /** @class */ (function () {
    function HttpErrorInterceptor(router, store) {
        this.router = router;
        this.store = store;
    }
    HttpErrorInterceptor.prototype.intercept = function (req, next) {
        var _this = this;
        return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) {
            if (error.error instanceof ErrorEvent) {
                // A client-side or network error occurred. Handle it accordingly.
            }
            else {
                // The backend returned an unsuccessful response code.
                // The response body may contain clues as to what went wrong,
                if (error.url && error.url.includes(_env_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].backendEndpoint)) {
                    if (error.status === 401) {
                        _this.store.dispatch(new _app_core_state_auth_state__WEBPACK_IMPORTED_MODULE_3__["Logout"]()).subscribe(function () {
                            _this.router.navigateByUrl('/login');
                        });
                    }
                }
            }
            // return an observable with a user-facing error message
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error.error);
        }));
    };
    HttpErrorInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], HttpErrorInterceptor);
    return HttpErrorInterceptor;
}());



/***/ }),

/***/ "./src/app/core/interceptors/locale.interceptor.ts":
/*!*********************************************************!*\
  !*** ./src/app/core/interceptors/locale.interceptor.ts ***!
  \*********************************************************/
/*! exports provided: LocaleInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocaleInterceptor", function() { return LocaleInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @env/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var LocaleInterceptor = /** @class */ (function () {
    function LocaleInterceptor() {
    }
    LocaleInterceptor.prototype.intercept = function (req, next) {
        if (req.url && req.url.includes(_env_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].backendEndpoint)) {
            var cloned = req.clone({
                headers: req.headers.set('locale', 'english')
            });
            return next.handle(cloned);
        }
        return next.handle(req);
    };
    LocaleInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], LocaleInterceptor);
    return LocaleInterceptor;
}());



/***/ }),

/***/ "./src/app/core/interceptors/logging.interceptor.ts":
/*!**********************************************************!*\
  !*** ./src/app/core/interceptors/logging.interceptor.ts ***!
  \**********************************************************/
/*! exports provided: LoggingInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoggingInterceptor", function() { return LoggingInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoggingInterceptor = /** @class */ (function () {
    function LoggingInterceptor() {
    }
    LoggingInterceptor.prototype.intercept = function (request, next) {
        console.log('HTTP REQUEST');
        console.log(request);
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (event) {
            if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]) {
                console.log('HTTP RESPONSE', event);
            }
        }, function (error) {
            console.log('HTTP ERROR', error);
        }));
    };
    LoggingInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], LoggingInterceptor);
    return LoggingInterceptor;
}());



/***/ }),

/***/ "./src/app/core/module-import-guard.ts":
/*!*********************************************!*\
  !*** ./src/app/core/module-import-guard.ts ***!
  \*********************************************/
/*! exports provided: throwIfAlreadyLoaded */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "throwIfAlreadyLoaded", function() { return throwIfAlreadyLoaded; });
function throwIfAlreadyLoaded(parentModule, moduleName) {
    if (parentModule) {
        throw new Error(moduleName + " has already been loaded. Import Core modules in the AppModule only.");
    }
}


/***/ }),

/***/ "./src/app/core/services/activity.service.ts":
/*!***************************************************!*\
  !*** ./src/app/core/services/activity.service.ts ***!
  \***************************************************/
/*! exports provided: ActivityService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivityService", function() { return ActivityService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @env/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ActivityService = /** @class */ (function () {
    function ActivityService(http) {
        this.http = http;
    }
    ActivityService.prototype.getActivities = function () {
        return this.http.get(_env_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].backendEndpoint + "/activities");
    };
    ActivityService.prototype.getActivityById = function (id) {
        return this.http.get(_env_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].backendEndpoint + "/activity/" + id);
    };
    ActivityService.prototype.getCompletedActivityById = function (id) {
        return this.http.get(_env_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].backendEndpoint + "/activity/" + id + "/answers");
    };
    ActivityService.prototype.submitActivity = function (request) {
        return this.http.post(_env_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].backendEndpoint + "/complete/poll", request);
    };
    ActivityService.prototype.submitSubscription = function (activityId) {
        return this.http.post(_env_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].backendEndpoint + "/confirm/transaction", { activityId: activityId });
    };
    ActivityService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ActivityService);
    return ActivityService;
}());



/***/ }),

/***/ "./src/app/core/services/auth.service.ts":
/*!***********************************************!*\
  !*** ./src/app/core/services/auth.service.ts ***!
  \***********************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @env/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.login = function (email, password) {
        return this.http.post(_env_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].backendEndpoint + "/login", { email: email, password: password });
    };
    AuthService.prototype.signUp = function (firstName, lastName, email, referrerUrl) {
        return this.http.post(_env_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].backendEndpoint + "/v2/signup", { firstName: firstName, lastName: lastName, email: email, referrerUrl: referrerUrl });
    };
    AuthService.prototype.changePassword = function (oldPassword, newPassword, isSignUp) {
        return this.http.post(_env_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].backendEndpoint + "/update/password", { oldPassword: oldPassword, newPassword: newPassword, isSignUp: isSignUp });
    };
    AuthService.prototype.resetPassword = function (email) {
        return this.http.post(_env_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].backendEndpoint + "/reset/password", { email: email });
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/core/services/user.service.ts":
/*!***********************************************!*\
  !*** ./src/app/core/services/user.service.ts ***!
  \***********************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @env/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.getUserProfile = function () {
        return this.http.get(_env_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].backendEndpoint + "/v2/user/profile");
    };
    UserService.prototype.updateProfilePicture = function (profilePicture) {
        var fd = new FormData();
        fd.append('image', profilePicture, profilePicture.name);
        return this.http.post(_env_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].backendEndpoint + "/update/picture", fd);
    };
    UserService.prototype.updateUser = function (userId, firstName, lastName) {
        return this.http.put(_env_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].backendEndpoint + "/user/" + userId, { firstName: firstName, lastName: lastName });
    };
    UserService.prototype.changeEmail = function (newEmail) {
        return this.http.post(_env_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].backendEndpoint + "/update/email", { newEmail: newEmail });
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/core/state/app.state.ts":
/*!*****************************************!*\
  !*** ./src/app/core/state/app.state.ts ***!
  \*****************************************/
/*! exports provided: ToggleLoading, AppState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToggleLoading", function() { return ToggleLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppState", function() { return AppState; });
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/fesm5/ngxs-store.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ToggleLoading = /** @class */ (function () {
    function ToggleLoading() {
    }
    ToggleLoading.type = '[App] Toggle Loading';
    return ToggleLoading;
}());

var AppState = /** @class */ (function () {
    function AppState() {
    }
    AppState.loading = function (state) { return state.loading; };
    AppState.prototype.toggleLoading = function (_a, payload) {
        var patchState = _a.patchState, getState = _a.getState;
        var loading = false;
        if (getState() != null) {
            loading = getState().loading;
        }
        patchState({ loading: !loading });
    };
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_0__["Action"])(ToggleLoading),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, ToggleLoading]),
        __metadata("design:returntype", void 0)
    ], AppState.prototype, "toggleLoading", null);
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_0__["Selector"])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], AppState, "loading", null);
    AppState = __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_0__["State"])({
            name: 'app',
            defaults: {
                loading: false
            }
        }),
        __metadata("design:paramtypes", [])
    ], AppState);
    return AppState;
}());



/***/ }),

/***/ "./src/app/core/state/auth.state.ts":
/*!******************************************!*\
  !*** ./src/app/core/state/auth.state.ts ***!
  \******************************************/
/*! exports provided: Login, SignUp, Logout, AuthState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Login", function() { return Login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUp", function() { return SignUp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Logout", function() { return Logout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthState", function() { return AuthState; });
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/fesm5/ngxs-store.js");
/* harmony import */ var _app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Login = /** @class */ (function () {
    function Login(email, password) {
        this.email = email;
        this.password = password;
    }
    Login.type = '[Auth] Login';
    return Login;
}());

var SignUp = /** @class */ (function () {
    function SignUp(firstName, lastName, email, password, referrerUrl) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.referrerUrl = referrerUrl;
    }
    SignUp.type = '[Auth] Signup';
    return SignUp;
}());

var Logout = /** @class */ (function () {
    function Logout() {
    }
    Logout.type = '[Auth] Logout';
    return Logout;
}());

var AuthState = /** @class */ (function () {
    function AuthState(authService) {
        this.authService = authService;
    }
    AuthState.token = function (state) { return state.token; };
    AuthState.prototype.login = function (_a, payload) {
        var patchState = _a.patchState;
        return this.authService.login(payload.email, payload.password).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (result) {
            patchState({ token: result.token });
        }));
    };
    AuthState.prototype.signUp = function (_a, payload) {
        var _this = this;
        var patchState = _a.patchState;
        return this.authService.signUp(payload.firstName, payload.lastName, payload.email, payload.referrerUrl)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (result) {
            patchState({ token: result.token });
            _this.authService.changePassword('', payload.password, true).subscribe();
        }));
    };
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_0__["Action"])(Login),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Login]),
        __metadata("design:returntype", void 0)
    ], AuthState.prototype, "login", null);
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_0__["Action"])(SignUp),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, SignUp]),
        __metadata("design:returntype", void 0)
    ], AuthState.prototype, "signUp", null);
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_0__["Selector"])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], AuthState, "token", null);
    AuthState = __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_0__["State"])({
            name: 'auth'
        }),
        __metadata("design:paramtypes", [_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], AuthState);
    return AuthState;
}());



/***/ }),

/***/ "./src/app/core/state/logout.plugin.ts":
/*!*********************************************!*\
  !*** ./src/app/core/state/logout.plugin.ts ***!
  \*********************************************/
/*! exports provided: logoutPlugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logoutPlugin", function() { return logoutPlugin; });
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/fesm5/ngxs-store.js");
/* harmony import */ var _app_core_state_auth_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/core/state/auth.state */ "./src/app/core/state/auth.state.ts");


function logoutPlugin(state, action, next) {
    // Use the get action type helper to determine the type
    if (Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_0__["getActionTypeFromInstance"])(action) === _app_core_state_auth_state__WEBPACK_IMPORTED_MODULE_1__["Logout"].type) {
        // if we are a logout type, lets erase all the state
        state = {};
    }
    // return the next function with the empty state
    return next(state, action);
}


/***/ }),

/***/ "./src/app/pages/wallet/services/wallet.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/wallet/services/wallet.service.ts ***!
  \*********************************************************/
/*! exports provided: WalletService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WalletService", function() { return WalletService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @env/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WalletService = /** @class */ (function () {
    function WalletService(http) {
        this.http = http;
    }
    WalletService.prototype.getHomeFeed = function () {
        return this.http.get(_env_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].backendEndpoint + "/v2/home");
    };
    WalletService.prototype.getBalanceFeed = function (range) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        if (range) {
            params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('range', range);
        }
        return this.http.get(_env_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].backendEndpoint + "/wallet/dashboard", { params: params });
    };
    WalletService.prototype.getReferralFeed = function () {
        return this.http.get(_env_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].backendEndpoint + "/wallet/referral");
    };
    WalletService.prototype.transfer = function (recipientAddress, amount, memo) {
        return this.http.post(_env_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].backendEndpoint + "/transfer", { recipientAddress: recipientAddress, amount: amount, memo: memo });
    };
    WalletService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], WalletService);
    return WalletService;
}());



/***/ }),

/***/ "./src/app/pages/wallet/state/wallet.state.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/wallet/state/wallet.state.ts ***!
  \****************************************************/
/*! exports provided: LoadWallet, SubmitActivity, SubmitSubscription, UpdateUserInfo, UpdateEmail, WalletState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadWallet", function() { return LoadWallet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubmitActivity", function() { return SubmitActivity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubmitSubscription", function() { return SubmitSubscription; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateUserInfo", function() { return UpdateUserInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateEmail", function() { return UpdateEmail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WalletState", function() { return WalletState; });
/* harmony import */ var _app_core_services_activity_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/core/services/activity.service */ "./src/app/core/services/activity.service.ts");
/* harmony import */ var _app_pages_wallet_services_wallet_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/pages/wallet/services/wallet.service */ "./src/app/pages/wallet/services/wallet.service.ts");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/fesm5/ngxs-store.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _app_core_services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/core/services/user.service */ "./src/app/core/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoadWallet = /** @class */ (function () {
    function LoadWallet() {
    }
    LoadWallet.type = '[Wallet] Load Wallet';
    return LoadWallet;
}());

var SubmitActivity = /** @class */ (function () {
    function SubmitActivity(request) {
        this.request = request;
    }
    SubmitActivity.type = '[Wallet] Submit Activity';
    return SubmitActivity;
}());

var SubmitSubscription = /** @class */ (function () {
    function SubmitSubscription(activityId) {
        this.activityId = activityId;
    }
    SubmitSubscription.type = '[Wallet] Submit Subscription';
    return SubmitSubscription;
}());

var UpdateUserInfo = /** @class */ (function () {
    function UpdateUserInfo(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    UpdateUserInfo.type = '[Wallet] Update User Info';
    return UpdateUserInfo;
}());

var UpdateEmail = /** @class */ (function () {
    function UpdateEmail(email) {
        this.email = email;
    }
    UpdateEmail.type = '[Wallet] Update email';
    return UpdateEmail;
}());

var WalletState = /** @class */ (function () {
    function WalletState(activityService, walletService, userService) {
        this.activityService = activityService;
        this.walletService = walletService;
        this.userService = userService;
    }
    WalletState.activities = function (state) {
        return state.activities.surveys.concat(state.activities.icos, state.activities.completed);
    };
    WalletState.surveys = function (state) { return state.activities.surveys; };
    WalletState.icos = function (state) { return state.activities.icos; };
    WalletState.completedActivities = function (state) { return state.activities.completed; };
    WalletState.balance = function (state) { return state.balance; };
    WalletState.kycStatus = function (state) { return state.kycStatus; };
    WalletState.referralFeed = function (state) { return state.referralFeed; };
    WalletState.email = function (state) { return state.email; };
    WalletState.names = function (state) { return { firstName: state.firstName, lastName: state.lastName }; };
    WalletState.userId = function (state) { return state.userId; };
    WalletState.joined = function (state) { return state.joined; };
    WalletState.level = function (state) { return state.level; };
    WalletState.rating = function (state) { return state.rating; };
    WalletState.profilePicture = function (state) { return state.profilePicture; };
    WalletState.referralReward = function (state) { return state.referralFeed.referralReward; };
    WalletState.eosAccountName = function (state) { return state.eosAccountName; };
    WalletState.shouldUpdatePassword = function (state) { return state.shouldUpdatePassword; };
    WalletState.prototype.loadWallet = function (_a, payload) {
        var patchState = _a.patchState;
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["forkJoin"])(this.userService.getUserProfile(), this.walletService.getHomeFeed(), this.activityService.getActivities(), this.walletService.getReferralFeed())
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (result) {
            return patchState({
                email: result['0'].email,
                userId: result['0'].passportId,
                profilePicture: result['0'].profilePicture,
                firstName: result['0'].firstName,
                lastName: result['0'].lastName,
                activities: result['2'],
                balance: result['1'].balance,
                kycStatus: result['1'].kycStatus,
                referralFeed: result['3'],
                joined: result['0'].joined,
                level: result['0'].level,
                rating: result['0'].rating,
                eosAccountName: result['0'].eosAccountName,
                shouldUpdatePassword: result['0'].shouldUpdatePassword
            });
        }));
    };
    WalletState.prototype.submitActivity = function (_a, payload) {
        var dispatch = _a.dispatch;
        return this.activityService.submitActivity(payload.request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["flatMap"])(function () { return dispatch(new LoadWallet()); }));
    };
    WalletState.prototype.submitSubscription = function (_a, payload) {
        var dispatch = _a.dispatch;
        return this.activityService.submitSubscription(payload.activityId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["flatMap"])(function () { return dispatch(new LoadWallet()); }));
    };
    WalletState.prototype.UpdateUserInfo = function (_a, payload) {
        var getState = _a.getState, dispatch = _a.dispatch;
        return this.userService.updateUser(getState().userId, payload.firstName, payload.lastName)
            .pipe((Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["flatMap"])(function () { return dispatch(new LoadWallet()); })));
    };
    WalletState.prototype.updateEmail = function (_a, payload) {
        var dispatch = _a.dispatch;
        return this.userService.changeEmail(payload.email)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["flatMap"])(function () { return dispatch(new LoadWallet()); }));
    };
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Action"])(LoadWallet),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, LoadWallet]),
        __metadata("design:returntype", void 0)
    ], WalletState.prototype, "loadWallet", null);
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Action"])(SubmitActivity),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, SubmitActivity]),
        __metadata("design:returntype", void 0)
    ], WalletState.prototype, "submitActivity", null);
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Action"])(SubmitSubscription),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, SubmitSubscription]),
        __metadata("design:returntype", void 0)
    ], WalletState.prototype, "submitSubscription", null);
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Action"])(UpdateUserInfo),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, UpdateUserInfo]),
        __metadata("design:returntype", void 0)
    ], WalletState.prototype, "UpdateUserInfo", null);
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Action"])(UpdateEmail),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, UpdateEmail]),
        __metadata("design:returntype", void 0)
    ], WalletState.prototype, "updateEmail", null);
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Selector"])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], WalletState, "activities", null);
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Selector"])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], WalletState, "surveys", null);
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Selector"])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], WalletState, "icos", null);
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Selector"])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], WalletState, "completedActivities", null);
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Selector"])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], WalletState, "balance", null);
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Selector"])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], WalletState, "kycStatus", null);
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Selector"])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], WalletState, "referralFeed", null);
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Selector"])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], WalletState, "email", null);
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Selector"])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], WalletState, "names", null);
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Selector"])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], WalletState, "userId", null);
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Selector"])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], WalletState, "joined", null);
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Selector"])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], WalletState, "level", null);
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Selector"])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], WalletState, "rating", null);
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Selector"])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], WalletState, "profilePicture", null);
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Selector"])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], WalletState, "referralReward", null);
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Selector"])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], WalletState, "eosAccountName", null);
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Selector"])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], WalletState, "shouldUpdatePassword", null);
    WalletState = __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["State"])({
            name: 'wallet'
        }),
        __metadata("design:paramtypes", [_app_core_services_activity_service__WEBPACK_IMPORTED_MODULE_0__["ActivityService"], _app_pages_wallet_services_wallet_service__WEBPACK_IMPORTED_MODULE_1__["WalletService"], _app_core_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]])
    ], WalletState);
    return WalletState;
}());



/***/ }),

/***/ "./src/app/shared/carousel/carousel.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/carousel/carousel.component.ts ***!
  \*******************************************************/
/*! exports provided: CarouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselComponent", function() { return CarouselComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _components_carousel_item_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/carousel-item.component */ "./src/app/shared/carousel/components/carousel-item.component.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// tslint:disable-next-line:max-line-length




var CarouselComponent = /** @class */ (function () {
    function CarouselComponent(el) {
        this.el = el;
        this.nextSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.prevSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subscription"]();
        // tslint:disable-next-line:no-output-on-prefix
        this.onChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.height = '300px';
        this.width = '100%';
        this.autoPlay = true;
        this.infinite = true;
        this.fade = false;
        // tslint:disable-next-line:no-input-rename
        this.dotsVisible = true;
        // tslint:disable-next-line:no-input-rename
        this.arrowsVisible = true;
        this.currentItemIndex = 0;
    }
    CarouselComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.speed = this.speed || 500;
        this.autoPlaySpeed = this.autoPlaySpeed || 1500;
        if (this.autoPlay) {
            this.autoPlayFunction(true);
        }
        this.subscriptions.add(this.nextSubject.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["throttleTime"])(this.speed)).subscribe(function () {
            if (!_this.fade) {
                _this.slideLeft();
            }
            else {
                _this.fadeLeft();
            }
        }));
        this.subscriptions.add(this.prevSubject.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["throttleTime"])(this.speed)).subscribe(function () {
            if (!_this.fade) {
                _this.slideRight();
            }
            else {
                _this.fadeRight();
            }
        }));
        this.subscriptions.add(this.onChange.subscribe(function (index) {
            var item = _this.getItemByIndex(index);
            item.lazyLoad();
        }));
    };
    CarouselComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.el.nativeElement.style.height = this.height;
        this.el.nativeElement.style.width = this.width;
        if (this.items && this.items.length > 0) {
            this.onChange.emit(0);
            this._width = this.items.first.el.nativeElement.offsetWidth;
        }
        this.firstItemIndex = 0;
        this.lastItemIndex = this.items.length - 1;
        if (!this.fade) {
            this.items.forEach(function (item, itemIndex) {
                var totalDistanceSwiped = 0;
                item.speed = _this.speed;
                item.position = _this._width * itemIndex;
                item.currentPosition = item.position;
                item.disableTransition();
                item.moveTo(item.position);
                _this.subscriptions.add(item.swiper.onSwipeLeft.subscribe(function (distance) {
                    totalDistanceSwiped += Math.abs(distance);
                    var shortDistance = distance / Math.pow(totalDistanceSwiped, .4);
                    if (itemIndex === _this.firstItemIndex && _this.infinite) {
                        _this.rotateRight();
                    }
                    _this.items.forEach(function (itm, index) {
                        if ((itemIndex === _this.firstItemIndex || (itemIndex === _this.lastItemIndex && distance > 0))
                            && !_this.infinite) {
                            itm.currentPosition += shortDistance;
                        }
                        else {
                            itm.currentPosition += distance;
                        }
                        itm.moveTo(itm.currentPosition);
                    });
                }));
                _this.subscriptions.add(item.swiper.onSwipeRight.subscribe(function (distance) {
                    totalDistanceSwiped += Math.abs(distance);
                    var shortDistance = distance / Math.pow(totalDistanceSwiped, .4);
                    if (itemIndex === _this.lastItemIndex && _this.infinite) {
                        _this.rotateLeft();
                    }
                    _this.items.forEach(function (itm, index) {
                        if ((itemIndex === _this.lastItemIndex || (itemIndex === _this.firstItemIndex && distance < 0))
                            && !_this.infinite) {
                            itm.currentPosition += shortDistance;
                        }
                        else {
                            itm.currentPosition += distance;
                        }
                        itm.moveTo(itm.currentPosition);
                    });
                }));
                _this.subscriptions.add(item.swiper.swipeLeft.subscribe(function () {
                    totalDistanceSwiped = 0;
                    _this.slideLeft();
                }));
                _this.subscriptions.add(item.swiper.swipeRight.subscribe(function () {
                    totalDistanceSwiped = 0;
                    _this.slideRight();
                }));
                _this.subscriptions.add(item.swiper.onSwipeEnd.subscribe(function () {
                    totalDistanceSwiped = 0;
                    _this.enableTransition();
                    _this.slideToPrevPosition();
                }));
                _this.subscriptions.add(item.swiper.onSwipeStart.subscribe(function () {
                    totalDistanceSwiped = 0;
                    _this.disableTransition();
                }));
            });
        }
        else {
            this.items.forEach(function (item, index) {
                item.zIndex = _this.items.length - index;
                item.setzIndex(item.zIndex);
            });
        }
    };
    CarouselComponent.prototype.next = function () {
        this.prevSubject.next();
    };
    CarouselComponent.prototype.prev = function () {
        this.nextSubject.next();
    };
    CarouselComponent.prototype.goTo = function (index) {
        if (!this.fade) {
            this.slideTo(index);
        }
        else {
            this.fadeTo(index);
        }
    };
    CarouselComponent.prototype.rotateRightTo = function (index) {
        while (index !== this.lastItemIndex) {
            this.rotateRight();
        }
    };
    CarouselComponent.prototype.rotateLeftTo = function (index) {
        while (index !== this.firstItemIndex) {
            this.rotateLeft();
        }
    };
    CarouselComponent.prototype.slideTo = function (index) {
        var _this = this;
        this.onChange.emit((index + this.items.length) % this.items.length);
        var steps = this.currentItemIndex - index;
        if (this.infinite) {
            if (steps > 0) {
                this.rotateRightTo(this.currentItemIndex);
            }
            else if (steps < 0) {
                this.rotateLeftTo(this.currentItemIndex);
            }
        }
        setTimeout(function () {
            _this.enableTransition();
            _this.items.forEach(function (item, i) {
                item.position += _this._width * (steps);
                item.currentPosition = item.position;
                item.moveTo(item.position);
            });
            _this.currentItemIndex = (index + _this.items.length) % _this.items.length;
        }, 50);
    };
    CarouselComponent.prototype.slideLeft = function () {
        if (!this.infinite) {
            if (this.currentItemIndex === 0) {
                this.slideToPrevPosition();
                return;
            }
        }
        this.slideTo(this.currentItemIndex - 1);
    };
    CarouselComponent.prototype.slideRight = function () {
        if (!this.infinite) {
            if (this.currentItemIndex === this.items.length - 1) {
                this.slideToPrevPosition();
                return;
            }
        }
        this.slideTo(this.currentItemIndex + 1);
    };
    CarouselComponent.prototype.slideToPrevPosition = function () {
        this.enableTransition();
        this.items.forEach(function (item) {
            item.currentPosition = item.position;
            item.moveTo(item.position);
        });
    };
    CarouselComponent.prototype.disableTransition = function () {
        this.items.forEach(function (item, index) {
            item.disableTransition();
        });
    };
    CarouselComponent.prototype.enableTransition = function () {
        this.items.forEach(function (item, index) {
            item.enableTransition();
        });
    };
    CarouselComponent.prototype.getItemByIndex = function (index) {
        return this.items.find(function (item, i) {
            return i === index;
        });
    };
    CarouselComponent.prototype.getIndexByItem = function (item) {
        return this.items.toArray().indexOf(item);
    };
    CarouselComponent.prototype.rotateRightNTimes = function (n) {
        for (var i = 0; i < n; i++) {
            this.rotateRight();
        }
    };
    CarouselComponent.prototype.rotateLeftNTimes = function (n) {
        for (var i = 0; i < n; i++) {
            this.rotateLeft();
        }
    };
    CarouselComponent.prototype.rotateRight = function () {
        var firstItemRef = this.getItemByIndex(this.firstItemIndex);
        var lastItemRef = this.getItemByIndex(this.lastItemIndex);
        if (!this.fade) {
            lastItemRef.position = firstItemRef.position - this._width;
            lastItemRef.currentPosition = lastItemRef.position;
            lastItemRef.disableTransition();
            lastItemRef.moveTo(lastItemRef.position);
            this.firstItemIndex = this.lastItemIndex;
            this.lastItemIndex = (this.lastItemIndex - 1 + this.items.length) % this.items.length;
        }
    };
    CarouselComponent.prototype.rotateLeft = function () {
        var firstItemRef = this.getItemByIndex(this.firstItemIndex);
        var lastItemRef = this.getItemByIndex(this.lastItemIndex);
        firstItemRef.position = lastItemRef.position + this._width;
        firstItemRef.currentPosition = firstItemRef.position;
        firstItemRef.disableTransition();
        firstItemRef.moveTo(firstItemRef.position);
        this.lastItemIndex = this.firstItemIndex;
        this.firstItemIndex = (this.lastItemIndex + 1) % this.items.length;
    };
    CarouselComponent.prototype.fadeTo = function (index) {
        this.onChange.emit(index);
        var firstItem = this.getItemByIndex(this.currentItemIndex);
        var targetItem = this.getItemByIndex(index);
        var highestZIndex = this.items.length;
        targetItem.zIndex = firstItem.zIndex + 1;
        targetItem.setzIndex(targetItem.zIndex);
        targetItem.disableTransition();
        targetItem.fadeIn(this.speed);
        this.currentItemIndex = index;
    };
    CarouselComponent.prototype.fadeRight = function () {
        var newIndex = (this.currentItemIndex + 1) % this.items.length;
        this.fadeTo(newIndex);
        this.currentItemIndex = newIndex;
    };
    CarouselComponent.prototype.fadeLeft = function () {
        var newIndex = (this.currentItemIndex - 1 + this.items.length) % this.items.length;
        this.fadeTo(newIndex);
        this.currentItemIndex = newIndex;
    };
    // is item first visually and not necessary first in the dom (QueryList)
    CarouselComponent.prototype.isItemFirst = function (index) {
        return this.firstItemIndex === index;
    };
    // is item last visually and not necessary last in the dom (QueryList)
    CarouselComponent.prototype.isItemLast = function (index) {
        return this.lastItemIndex === index;
    };
    CarouselComponent.prototype.onResize = function (event) {
        this.rePosition();
    };
    CarouselComponent.prototype.rePosition = function () {
        if (this.items && this.items.length > 0) {
            this._width = this.items.first.el.nativeElement.offsetWidth;
        }
        var items = this.items.toArray();
        items.sort(function (item1, item2) {
            if (item1.position > item2.position) {
                return 1;
            }
            else if (item1.position < item2.position) {
                return -1;
            }
            else {
                return 0;
            }
        });
        var currentItem = this.getItemByIndex(this.currentItemIndex);
        var currentItemIndex = items.indexOf(currentItem);
        for (var i = currentItemIndex; i < items.length + currentItemIndex; i++) {
            var item = items[(i + items.length) % items.length];
            item.position = ((i + items.length) % items.length - currentItemIndex) * this._width;
            item.disableTransition();
            item.moveTo(item.position);
        }
    };
    CarouselComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.unsubscribe();
    };
    CarouselComponent.prototype.autoPlayFunction = function (boolean) {
        var _this = this;
        if (this.autoPlay) {
            if (boolean) {
                this.interval = setInterval(function () {
                    _this.next();
                }, this.autoPlaySpeed);
            }
            else {
                clearInterval(this.interval);
            }
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], CarouselComponent.prototype, "onChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CarouselComponent.prototype, "height", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CarouselComponent.prototype, "width", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], CarouselComponent.prototype, "speed", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CarouselComponent.prototype, "autoPlay", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], CarouselComponent.prototype, "autoPlaySpeed", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CarouselComponent.prototype, "infinite", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CarouselComponent.prototype, "fade", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('dotsVisible'),
        __metadata("design:type", Object)
    ], CarouselComponent.prototype, "dotsVisible", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('arrowsVisible'),
        __metadata("design:type", Object)
    ], CarouselComponent.prototype, "arrowsVisible", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"])(_components_carousel_item_component__WEBPACK_IMPORTED_MODULE_2__["CarouselItemComponent"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], CarouselComponent.prototype, "items", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:resize', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], CarouselComponent.prototype, "onResize", null);
    CarouselComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-carousel',
            template: "\n  <div (mouseenter)=\"(autoPlay)?autoPlayFunction(false):null\" (mouseleave)=\"(autoPlay)?autoPlayFunction(true):null\">\n      <ng-content></ng-content>\n      <ng-container *ngIf=\"dotsVisible\">\n      <dots [dots-count]=\"items.length\"\n      position=\"middle\" [active-dot]=\"currentItemIndex\"\n       (on-click)=\"goTo($event)\"></dots>\n      </ng-container>\n      <ng-container  *ngIf=\"arrowsVisible\">\n        <arrow dir=\"left\" (on-click)=\"prev()\" [disabled]=\"false\"></arrow>\n        <arrow dir=\"right\" (on-click)=\"next()\" [disabled]=\"false\"></arrow>\n      </ng-container>\n  </div>\n  ",
            styles: ["\n      :host{\n          display: block;\n          overflow: hidden;\n          position: relative;\n      }\n  "],
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], CarouselComponent);
    return CarouselComponent;
}());



/***/ }),

/***/ "./src/app/shared/carousel/carousel.module.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/carousel/carousel.module.ts ***!
  \****************************************************/
/*! exports provided: CarouselModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselModule", function() { return CarouselModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _carousel_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./carousel.component */ "./src/app/shared/carousel/carousel.component.ts");
/* harmony import */ var _components_carousel_item_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/carousel-item.component */ "./src/app/shared/carousel/components/carousel-item.component.ts");
/* harmony import */ var _components_dots_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/dots.component */ "./src/app/shared/carousel/components/dots.component.ts");
/* harmony import */ var _components_arrow_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/arrow.component */ "./src/app/shared/carousel/components/arrow.component.ts");
/* harmony import */ var _directives_swiper_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./directives/swiper.directive */ "./src/app/shared/carousel/directives/swiper.directive.ts");
/* harmony import */ var _directives_lazy_load_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./directives/lazy-load.directive */ "./src/app/shared/carousel/directives/lazy-load.directive.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var CarouselModule = /** @class */ (function () {
    function CarouselModule() {
    }
    CarouselModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"]
            ],
            declarations: [
                _carousel_component__WEBPACK_IMPORTED_MODULE_1__["CarouselComponent"],
                _components_carousel_item_component__WEBPACK_IMPORTED_MODULE_2__["CarouselItemComponent"],
                _components_dots_component__WEBPACK_IMPORTED_MODULE_3__["DotsComponent"],
                _components_arrow_component__WEBPACK_IMPORTED_MODULE_4__["ArrowComponent"],
                _directives_swiper_directive__WEBPACK_IMPORTED_MODULE_5__["SwiperDirective"],
                _directives_lazy_load_directive__WEBPACK_IMPORTED_MODULE_6__["LazyloadDirective"]
            ],
            exports: [
                _carousel_component__WEBPACK_IMPORTED_MODULE_1__["CarouselComponent"],
                _components_carousel_item_component__WEBPACK_IMPORTED_MODULE_2__["CarouselItemComponent"],
                _directives_lazy_load_directive__WEBPACK_IMPORTED_MODULE_6__["LazyloadDirective"]
            ]
        })
    ], CarouselModule);
    return CarouselModule;
}());



/***/ }),

/***/ "./src/app/shared/carousel/components/arrow.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/shared/carousel/components/arrow.component.ts ***!
  \***************************************************************/
/*! exports provided: ArrowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArrowComponent", function() { return ArrowComponent; });
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

var ArrowComponent = /** @class */ (function () {
    function ArrowComponent() {
        this.disabled = true;
        // tslint:disable-next-line:no-output-rename
        this.click = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ArrowComponent.prototype.onClick = function () {
        if (!this.disabled) {
            this.click.emit();
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ArrowComponent.prototype, "dir", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('disabled'),
        __metadata("design:type", Object)
    ], ArrowComponent.prototype, "disabled", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])('on-click'),
        __metadata("design:type", Object)
    ], ArrowComponent.prototype, "click", void 0);
    ArrowComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            // tslint:disable-next-line:component-selector
            selector: 'arrow',
            template: "\n        <div class=\"arrow\" (click)=\"onClick()\"\n        [ngClass]=\"{ left : dir === 'left', right : dir === 'right', disabled  : disabled}\"></div>\n    ",
            styles: ["\n        .arrow{\n            position: absolute;\n            height: 50px;\n            width: 30px;\n            opacity: .6;\n            user-select: none;\n            -moz-user-select: none;\n            -khtml-user-select: none;\n            -webkit-user-select: none;\n            -o-user-select: none;\n            z-index: 1000;\n        }\n        .arrow.right{\n            right: 5px;\n            top: 50%;\n            transform: scaleX(-1) translateY(-50%);\n            -moz-transform: scaleX(-1) translateY(-50%);\n            -o-transform: scaleX(-1) translateY(-50%);\n            -webkit-transform: scaleX(-1) translateY(-50%);\n            -ms-transform: scaleX(-1) translateY(-50%);\n            filter: FlipH;\n            -ms-filter: \"FlipH\";\n        }\n        .arrow.left{\n            left: 5px;\n            top: 50%;\n            transform: translateY(-50%);\n            -moz-transform: translateY(-50%);\n            -webkit-transform: translateY(-50%);\n            -o-transform: translateY(-50%);\n            -ms-transform: translateY(-50%);\n        }\n        .arrow:hover{\n            opacity: .8;\n            cursor: pointer;\n        }\n        .arrow:before{\n            content: \"\";\n            height: 3px;\n            width: 30px;\n            background: #fff;\n            display: block;\n            position: absolute;\n            top: 14px;\n            transform: rotate(-45deg);\n            -moz-transform: rotate(-45deg);\n            -webkit-transform: rotate(-45deg);\n            -o-transform: rotate(-45deg);\n            -ms-transform: rotate(-45deg);\n        }\n        .arrow:after{\n            content: \"\";\n            height: 3px;\n            width: 30px;\n            background: #fff;\n            display: block;\n            transform: rotate(45deg);\n            -moz-transform: rotate(45deg);\n            -webkit-transform: rotate(45deg);\n            -o-transform: rotate(45deg);\n            -ms-transform: rotate(45deg);\n            position: absolute;\n            bottom: 14px;\n        }\n        .arrow.disabled{\n            opacity: .4;\n        }\n        .arrow.disabled:hover{\n            opacity: .4;\n            cursor: pointer;\n        }\n    "]
        }),
        __metadata("design:paramtypes", [])
    ], ArrowComponent);
    return ArrowComponent;
}());



/***/ }),

/***/ "./src/app/shared/carousel/components/carousel-item.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/shared/carousel/components/carousel-item.component.ts ***!
  \***********************************************************************/
/*! exports provided: CarouselItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselItemComponent", function() { return CarouselItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _directives_swiper_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../directives/swiper.directive */ "./src/app/shared/carousel/directives/swiper.directive.ts");
/* harmony import */ var _directives_lazy_load_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../directives/lazy-load.directive */ "./src/app/shared/carousel/directives/lazy-load.directive.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CarouselItemComponent = /** @class */ (function () {
    function CarouselItemComponent(renderer, ref) {
        this.renderer = renderer;
        this.ref = ref;
        this.currentPosition = 0;
        this.position = 0;
    }
    CarouselItemComponent_1 = CarouselItemComponent;
    Object.defineProperty(CarouselItemComponent.prototype, "transition", {
        get: function () {
            return CarouselItemComponent_1.transitionStyle;
        },
        set: function (transitionStyle) {
            CarouselItemComponent_1.transitionStyle = transitionStyle;
        },
        enumerable: true,
        configurable: true
    });
    CarouselItemComponent.prototype.moveTo = function (position) {
        this.renderer.setStyle(this.el.nativeElement, 'transform', 'translate3d(' + position + 'px, 0px, 0px)');
        this.renderer.setStyle(this.el.nativeElement, '-webkit-transform', 'translate3d(' + position + 'px, 0px, 0px)');
        this.renderer.setStyle(this.el.nativeElement, '-moz-transform', 'translate3d(' + position + 'px, 0px, 0px)');
        this.renderer.setStyle(this.el.nativeElement, '-o-transform', 'translate3d(' + position + 'px, 0px, 0px)');
        this.renderer.setStyle(this.el.nativeElement, '-ms-transform', 'translate3d(' + position + 'px, 0px, 0px)');
    };
    CarouselItemComponent.prototype.moveBy = function (distance) {
        this.renderer.setStyle(this.el.nativeElement, 'transform', 'translate3d(' + distance + 'px, 0px, 0px)');
        this.renderer.setStyle(this.el.nativeElement, '-webkit-transform', 'translate3d(' + distance + 'px, 0px, 0px)');
        this.renderer.setStyle(this.el.nativeElement, '-moz-transform', 'translate3d(' + distance + 'px, 0px, 0px)');
        this.renderer.setStyle(this.el.nativeElement, '-o-transform', 'translate3d(' + distance + 'px, 0px, 0px)');
        this.renderer.setStyle(this.el.nativeElement, '-ms-transform', 'translate3d(' + distance + 'px, 0px, 0px)');
    };
    CarouselItemComponent.prototype.setzIndex = function (zIndex) {
        this.renderer.setStyle(this.el.nativeElement, 'z-index', zIndex);
    };
    CarouselItemComponent.prototype.disableTransition = function () {
        this.renderer.setStyle(this.el.nativeElement, 'transition', 'none');
        this.renderer.setStyle(this.el.nativeElement, '-moz-transition', 'none');
        this.renderer.setStyle(this.el.nativeElement, '-webkit-transition', 'none');
        this.renderer.setStyle(this.el.nativeElement, '-o-transition', 'none');
        this.renderer.setStyle(this.el.nativeElement, '-ms-transition', 'none');
    };
    CarouselItemComponent.prototype.enableTransition = function () {
        this.renderer.setStyle(this.el.nativeElement, 'transition', 'transform');
        this.renderer.setStyle(this.el.nativeElement, '-moz-transition', 'transform');
        this.renderer.setStyle(this.el.nativeElement, '-webkit-transition', 'transform');
        this.renderer.setStyle(this.el.nativeElement, '-o-transition', 'transform');
        this.renderer.setStyle(this.el.nativeElement, '-ms-transition', 'transform');
        this.renderer.setStyle(this.el.nativeElement, 'transition-duration', this.speed + 'ms');
        this.renderer.setStyle(this.el.nativeElement, '-moz-transition-duration', this.speed + 'ms');
        this.renderer.setStyle(this.el.nativeElement, '-webkit-transition-duration', this.speed + 'ms');
        this.renderer.setStyle(this.el.nativeElement, '-o-transition-duration', this.speed + 'ms');
        this.renderer.setStyle(this.el.nativeElement, '-ms-transition-duration', this.speed + 'ms');
    };
    CarouselItemComponent.prototype.fadeOut = function (duration) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.renderer.setStyle(_this.el.nativeElement, 'opacity', '0');
            setTimeout(function () {
                _this.renderer.setStyle(_this.el.nativeElement, 'opacity', '1');
                resolve();
            }, duration);
        });
    };
    CarouselItemComponent.prototype.fadeIn = function (duration) {
        var _this = this;
        this.renderer.setStyle(this.el.nativeElement, 'opacity', '0');
        setTimeout(function () {
            _this.renderer.setStyle(_this.el.nativeElement, 'transition', 'opacity ' + duration + 'ms');
            _this.renderer.setStyle(_this.el.nativeElement, 'opacity', '1');
        }, 0);
    };
    CarouselItemComponent.prototype.lazyLoad = function () {
        this.lazyLoadedImages
            .forEach(function (img) {
            img.load();
        });
    };
    CarouselItemComponent.transitionStyle = {};
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('carouselItem'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], CarouselItemComponent.prototype, "el", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_directives_swiper_directive__WEBPACK_IMPORTED_MODULE_1__["SwiperDirective"]),
        __metadata("design:type", _directives_swiper_directive__WEBPACK_IMPORTED_MODULE_1__["SwiperDirective"])
    ], CarouselItemComponent.prototype, "swiper", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"])(_directives_lazy_load_directive__WEBPACK_IMPORTED_MODULE_2__["LazyloadDirective"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], CarouselItemComponent.prototype, "lazyLoadedImages", void 0);
    CarouselItemComponent = CarouselItemComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-carousel-item',
            template: "\n        <div #carouselItem class=\"ui-carousel-item fade\" [ngStyle]=\"transition\" swiper tabindex=\"-1\" style=\"outline: none\">\n        <ng-content></ng-content>\n        </div>\n   ",
            styles: ["\n        :host{\n            width: 100%;\n        }\n        .ui-carousel-item{\n            user-select: none;\n            -moz-user-select: none;\n            -khtml-user-select: none;\n            -webkit-user-select: none;\n            -o-user-select: none;\n            -ms-user-select: none;\n        }\n        .transition{\n            transition: transform;\n            -moz-transition: transform;\n            -webkit-transition: transform;\n            -o-transition: transform;\n            -ms-transition: transform;\n            transition-timing-function: ease;\n            -moz-transition-timing-function: ease;\n            -o-transition-timing-function: ease;\n            -ms-transition-timing-function: ease;\n        }\n        .ui-carousel-item{\n            height: 100%;\n            width: 100%;\n            position: absolute;\n            overflow: hidden;\n        }\n        .fade{\n            opacity: 1;\n            -webkit-transition: opacity .5s ease-in;\n               -moz-transition: opacity .5s ease-in;\n                -ms-transition: opacity .5s ease-in;\n                 -o-transition: opacity .5s ease-in;\n                    transition: opacity .5s ease-in;\n        }\n        .fade-out{\n            opacity: 0;\n        }\n    "]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], CarouselItemComponent);
    return CarouselItemComponent;
    var CarouselItemComponent_1;
}());



/***/ }),

/***/ "./src/app/shared/carousel/components/dots.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/carousel/components/dots.component.ts ***!
  \**************************************************************/
/*! exports provided: DotsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DotsComponent", function() { return DotsComponent; });
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

var DotsComponent = /** @class */ (function () {
    function DotsComponent() {
        // tslint:disable-next-line:no-input-rename
        this.activeDot = 0;
        this.position = 'left';
        // tslint:disable-next-line:no-unused-expression
        // tslint:disable-next-line:no-output-rename
        this.onclick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    DotsComponent.prototype.ngOnInit = function () {
        this.numbers = Array(this.dotsCount).fill(0).map(function (x, i) { return i; });
    };
    DotsComponent.prototype.click = function (index) {
        this.onclick.emit(index);
        this.activeDot = index;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('active-dot'),
        __metadata("design:type", Object)
    ], DotsComponent.prototype, "activeDot", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('dots-count'),
        __metadata("design:type", Number)
    ], DotsComponent.prototype, "dotsCount", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class'),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DotsComponent.prototype, "position", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])('on-click'),
        __metadata("design:type", Object)
    ], DotsComponent.prototype, "onclick", void 0);
    DotsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            // tslint:disable-next-line:component-selector
            selector: 'dots',
            template: "\n    <div class=\"dot\" *ngFor=\"let index of numbers\" (click)=\"click(index)\" [class.active]=\"activeDot === index\"></div>\n    ",
            styles: ["\n        :host{\n            position: absolute;\n            display: inline-block;\n            z-index: 1000;\n        }\n        :host(.left){\n            bottom: 10px;\n            left: 10px;\n        }\n        :host(.right){\n            bottom: 10px;\n            right: 10px;\n        }\n        :host(.middle){\n            bottom: 20px;\n            left: 50%;\n            transform: translateX(-50%);\n            -webkit-transform: translateX(-50%);\n            -moz-transform: translateX(-50%);\n            -o-transform: translateX(-50%);\n            -ms-transform: translateX(-50%);\n        }\n        .dot{\n            height: 10px;\n            width: 10px;\n            border-radius: 5px;\n            background: #6a6a6a;\n            opacity: .6;\n            margin: 0 4px;\n            display: inline-block;\n        }\n        .dot:hover{\n            opacity: 1;\n            cursor: pointer;\n        }\n        .dot.active{\n            opacity: 1;\n        }\n    "]
        }),
        __metadata("design:paramtypes", [])
    ], DotsComponent);
    return DotsComponent;
}());



/***/ }),

/***/ "./src/app/shared/carousel/directives/lazy-load.directive.ts":
/*!*******************************************************************!*\
  !*** ./src/app/shared/carousel/directives/lazy-load.directive.ts ***!
  \*******************************************************************/
/*! exports provided: LazyloadDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LazyloadDirective", function() { return LazyloadDirective; });
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

// tslint:disable-next-line:directive-selector
var LazyloadDirective = /** @class */ (function () {
    function LazyloadDirective(el, renderer) {
        this.el = el;
        this.renderer = renderer;
    }
    LazyloadDirective.prototype.load = function () {
        var img = this.el.nativeElement;
        if (img.src) {
            return;
        }
        img.src = this.uiLazyLoad;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('ui-lazy-load'),
        __metadata("design:type", String)
    ], LazyloadDirective.prototype, "uiLazyLoad", void 0);
    LazyloadDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({ selector: '[ui-lazy-load]' }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]])
    ], LazyloadDirective);
    return LazyloadDirective;
}());



/***/ }),

/***/ "./src/app/shared/carousel/directives/swiper.directive.ts":
/*!****************************************************************!*\
  !*** ./src/app/shared/carousel/directives/swiper.directive.ts ***!
  \****************************************************************/
/*! exports provided: SwiperDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwiperDirective", function() { return SwiperDirective; });
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

var ZERO = 0.000000000001;
var SwiperDirective = /** @class */ (function () {
    function SwiperDirective(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        this.isDown = false;
        this.initialPos = ZERO;
        this.lastPos = ZERO;
        this.swipeDistance = ZERO;
        this.firstSwipeDate = Date.now();
        // tslint:disable-next-line:no-output-on-prefix
        this.onSwipeRight = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        // tslint:disable-next-line:no-output-on-prefix
        this.onSwipeLeft = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        // tslint:disable-next-line:no-output-on-prefix
        this.onSwipeStart = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        // tslint:disable-next-line:no-output-on-prefix
        this.onSwipeEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.swipeLeft = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.swipeRight = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    SwiperDirective_1 = SwiperDirective;
    SwiperDirective.prototype.ngOnInit = function () {
        this.onSwipeEnd.subscribe(function () {
        });
        this.swipeLeft.subscribe(function () {
            SwiperDirective_1.canISwipe = false;
            setTimeout(function () {
                SwiperDirective_1.canISwipe = true;
            }, 350);
        });
        this.swipeRight.subscribe(function () {
            SwiperDirective_1.canISwipe = false;
            setTimeout(function () {
                SwiperDirective_1.canISwipe = true;
            }, 350);
        });
    };
    SwiperDirective.prototype.onMouseDown = function (event) {
        if (!SwiperDirective_1.canISwipe) {
            return;
        }
        this.firstSwipeDate = Date.now();
        this.isDown = true;
        this.initialPos = event.clientX;
        this.swipeDistance = 0;
        this.onSwipeStart.emit();
    };
    SwiperDirective.prototype.onMouseUp = function (event) {
        if (!this.isDown) {
            return;
        }
        this.initialPos = this.lastPos = ZERO;
        this.isDown = false;
        if (this.swipeDistance > 100) {
            this.swipeLeft.emit();
        }
        else if (this.swipeDistance < -100) {
            this.swipeRight.emit();
        }
        else {
            this.onSwipeEnd.emit();
        }
        this.swipeDistance = ZERO;
    };
    SwiperDirective.prototype.onMouseMove = function (event) {
        if (this.isDown) {
            var swipeFrameDistance = event.clientX - this.initialPos - this.lastPos;
            this.swipeDistance += swipeFrameDistance;
            this.lastPos = event.clientX - this.initialPos;
            if (swipeFrameDistance > 0) {
                this.onSwipeLeft.emit(swipeFrameDistance);
            }
            else {
                this.onSwipeRight.emit(swipeFrameDistance);
            }
        }
    };
    SwiperDirective.prototype.onTouchMove = function (event) {
        if (!SwiperDirective_1.canISwipe) {
            return;
        }
        var touch = event.touches[0] || event.changedTouches[0];
        var swipeFrameDistance = touch.clientX - this.initialPos - this.lastPos;
        swipeFrameDistance = swipeFrameDistance < 30 ? swipeFrameDistance : 30;
        this.swipeDistance += swipeFrameDistance;
        this.lastPos = touch.clientX - this.initialPos;
        if (swipeFrameDistance > 0) {
            this.onSwipeLeft.emit(swipeFrameDistance);
        }
        else {
            this.onSwipeRight.emit(swipeFrameDistance);
        }
    };
    SwiperDirective.prototype.onTouchStart = function (event) {
        if (!SwiperDirective_1.canISwipe) {
            return;
        }
        var touch = event.touches[0] || event.changedTouches[0];
        this.firstSwipeDate = Date.now();
        this.initialPos = touch.clientX;
        this.swipeDistance = ZERO;
        this.onSwipeStart.emit();
    };
    SwiperDirective.prototype.onTouchEnd = function (event) {
        this.initialPos = this.lastPos = ZERO;
        if (this.swipeDistance > 100) {
            this.swipeLeft.emit();
        }
        else if (this.swipeDistance < -100) {
            this.swipeRight.emit();
        }
        else {
            this.onSwipeEnd.emit();
        }
        this.swipeDistance = ZERO;
    };
    SwiperDirective.canISwipe = true;
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], SwiperDirective.prototype, "onSwipeRight", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], SwiperDirective.prototype, "onSwipeLeft", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], SwiperDirective.prototype, "onSwipeStart", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], SwiperDirective.prototype, "onSwipeEnd", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], SwiperDirective.prototype, "swipeLeft", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], SwiperDirective.prototype, "swipeRight", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('mousedown', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], SwiperDirective.prototype, "onMouseDown", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('document:mouseup', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], SwiperDirective.prototype, "onMouseUp", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('mousemove', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], SwiperDirective.prototype, "onMouseMove", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('touchmove', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], SwiperDirective.prototype, "onTouchMove", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('touchstart', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], SwiperDirective.prototype, "onTouchStart", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('touchend', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], SwiperDirective.prototype, "onTouchEnd", null);
    SwiperDirective = SwiperDirective_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            // tslint:disable-next-line:directive-selector
            selector: '[swiper]',
            exportAs: 'swiper'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]])
    ], SwiperDirective);
    return SwiperDirective;
    var SwiperDirective_1;
}());



/***/ }),

/***/ "./src/app/shared/components/bottom-nav/bottom-nav.component.html":
/*!************************************************************************!*\
  !*** ./src/app/shared/components/bottom-nav/bottom-nav.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar>\n  <ng-content></ng-content>\n</mat-toolbar>\n"

/***/ }),

/***/ "./src/app/shared/components/bottom-nav/bottom-nav.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/shared/components/bottom-nav/bottom-nav.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  position: fixed;\n  bottom: 0;\n  display: block;\n  width: 100%;\n  box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);\n  overflow: hidden;\n  z-index: 8; }\n\n:host /deep/ a {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1 1 0;\n      -ms-flex: 1 1 0px;\n          flex: 1 1 0;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: start;\n  -webkit-justify-content: flex-start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  padding: 0 12px;\n  min-width: 60px;\n  max-width: 168px;\n  box-sizing: border-box;\n  color: rgba(0, 0, 0, 0.54);\n  margin-top: auto;\n  padding-bottom: 10px;\n  font-size: 0.75rem;\n  text-decoration: none;\n  -webkit-transition-property: font-size, color;\n  transition-property: font-size, color;\n  -webkit-transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); }\n\n:host /deep/ a img {\n    padding-top: 8px;\n    pointer-events: none;\n    -webkit-transition-property: padding-top, color;\n    transition-property: padding-top, color;\n    -webkit-transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n            transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n    -webkit-transition-duration: 100ms;\n            transition-duration: 100ms; }\n\n:host /deep/ a.active {\n    font-size: 0.875rem;\n    color: #303864; }\n\n:host /deep/ a.active img {\n      padding-top: 6px; }\n"

/***/ }),

/***/ "./src/app/shared/components/bottom-nav/bottom-nav.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/shared/components/bottom-nav/bottom-nav.component.ts ***!
  \**********************************************************************/
/*! exports provided: BottomNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BottomNavComponent", function() { return BottomNavComponent; });
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

var BottomNavComponent = /** @class */ (function () {
    function BottomNavComponent() {
    }
    BottomNavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bottom-nav',
            template: __webpack_require__(/*! ./bottom-nav.component.html */ "./src/app/shared/components/bottom-nav/bottom-nav.component.html"),
            styles: [__webpack_require__(/*! ./bottom-nav.component.scss */ "./src/app/shared/components/bottom-nav/bottom-nav.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], BottomNavComponent);
    return BottomNavComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/header/header.component.html":
/*!****************************************************************!*\
  !*** ./src/app/shared/components/header/header.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n    <nav class=\"navbar navbar-dark navbar-expand-lg\" [ngClass]=\"{'scrolled': navScrolled, 'fixed-top': navScrolled}\" #nav>\n      <div class=\"container\">\n        <a routerLink=\"/\" class=\"d-lg-block navbar-brand\" [class.d-none]=\"hideTitleMobile\" >\n          <img width=\"40px\" height=\"40px\" src=\"assets/images/logo-token.svg\" alt=\"Insights Logo\">\n          <span>INSTAR WALLET</span>\n        </a>\n        <button (click)=\"openMobileMenu()\" class=\"navbar-toggler\" type=\"button\">\n          <span class=\"navbar-toggler-icon\"></span>\n        </button>\n        <div class=\"collapse navbar-collapse\">\n          <ul class=\"navbar-nav ml-auto align-items-center\">\n            <ng-container *ngIf=\"!isLoggedIn\">\n              <li class=\"nav-item\">\n                <a class=\"nav-link\" routerLink=\"/login\">LOG IN</a>\n              </li>\n              <li class=\"nav-item\">\n                <a class=\"nav-link nav-btn-gray\" routerLink=\"/signup\">REGISTER</a>\n              </li>\n            </ng-container>\n            <ng-container *ngIf=\"isLoggedIn\">\n              <li class=\"nav-item\">\n                <a class=\"nav-link\" (click)=\"signOutClicked()\">SIGN OUT</a>\n              </li>\n              <li class=\"nav-item\">\n                <a class=\"nav-link nav-btn-gray\" routerLink=\"/app\">GO TO APP</a>\n              </li>\n            </ng-container>\n          </ul>\n        </div>\n      </div>\n    </nav>\n    <div class=\"show-menu hide-menu\" [ngClass]=\"{'hide-menu': !showMobileMenu}\" id=\"resp-menu\">\n      <div class=\"mini-container\">\n        <div class=\"justified\">\n          <div class=\"text-right\">\n            <img (click)=\"closeMobileMenu()\" src=\"assets/images/close.svg\" class=\"close-menu\" width=\"20px\" height=\"20px\"\n              style=\"cursor: pointer\">\n          </div>\n          <div class=\"main-icon-menu text-center\">\n            <img src=\"assets/images/logo-token.svg\" />\n          </div>\n        </div>\n        <hr>\n        <div>\n          <ng-container *ngIf=\"isLoggedIn\">\n            <a routerLink=\"/app\" class=\"mini-dark\">GO TO APP</a>\n            <a (click)=\"signOutClicked()\" class=\"mini-light\">SIGN OUT</a>\n          </ng-container>\n          <ng-container *ngIf=\"!isLoggedIn\">\n            <a routerLink=\"/signup\" class=\"mini-dark\">REGISTER</a>\n            <a routerLink=\"/login\" class=\"mini-light\">LOG IN</a>\n          </ng-container>\n        </div>\n        <div class=\"menu-footer align-items-center\">\n          <div class=\"col-12\">\n            <p>Insights Network 2018 © All rights reserved</p>\n          </div>\n          <div class=\"col-12 social\">\n            <a target=\"_blank\" href=\"https://t.me/InsightsNetwork\"><img src=\"assets/images/telegram.svg\"></a>\n            <a target=\"_blank\" href=\"https://medium.com/insightsnetwork\"><img src=\"assets/images/medium.svg\"></a>\n            <a target=\"_blank\" href=\"https://twitter.com/instartoken\"><img src=\"assets/images/twitter.svg\"></a>\n            <a target=\"_blank\" href=\"https://www.reddit.com/r/instar/\"><img src=\"assets/images/reddit.svg\"></a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </header>\n  "

/***/ }),

/***/ "./src/app/shared/components/header/header.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/shared/components/header/header.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*!\n * Bootstrap Grid v4.1.3 (https://getbootstrap.com/)\n * Copyright 2011-2018 The Bootstrap Authors\n * Copyright 2011-2018 Twitter, Inc.\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)\n */\n@-ms-viewport {\n  width: device-width; }\nhtml {\n  box-sizing: border-box;\n  -ms-overflow-style: scrollbar; }\n*,\n*::before,\n*::after {\n  box-sizing: inherit; }\n.container {\n  width: 100%;\n  padding-right: 15px;\n  padding-left: 15px;\n  margin-right: auto;\n  margin-left: auto; }\n@media (min-width: 576px) {\n    .container {\n      max-width: 540px; } }\n@media (min-width: 768px) {\n    .container {\n      max-width: 720px; } }\n@media (min-width: 992px) {\n    .container {\n      max-width: 960px; } }\n@media (min-width: 1200px) {\n    .container {\n      max-width: 1140px; } }\n.container-fluid {\n  width: 100%;\n  padding-right: 15px;\n  padding-left: 15px;\n  margin-right: auto;\n  margin-left: auto; }\n.row {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-flex-wrap: wrap;\n      -ms-flex-wrap: wrap;\n          flex-wrap: wrap;\n  margin-right: -15px;\n  margin-left: -15px; }\n.no-gutters {\n  margin-right: 0;\n  margin-left: 0; }\n.no-gutters > .col,\n  .no-gutters > [class*=\"col-\"] {\n    padding-right: 0;\n    padding-left: 0; }\n.col-1, .col-2, .col-3, .col-4, .col-5, .col-6, .col-7, .col-8, .col-9, .col-10, .col-11, .col-12, .col,\n.col-auto, .col-sm-1, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-10, .col-sm-11, .col-sm-12, .col-sm,\n.col-sm-auto, .col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-10, .col-md-11, .col-md-12, .col-md,\n.col-md-auto, .col-lg-1, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-10, .col-lg-11, .col-lg-12, .col-lg,\n.col-lg-auto, .col-xl-1, .col-xl-2, .col-xl-3, .col-xl-4, .col-xl-5, .col-xl-6, .col-xl-7, .col-xl-8, .col-xl-9, .col-xl-10, .col-xl-11, .col-xl-12, .col-xl,\n.col-xl-auto {\n  position: relative;\n  width: 100%;\n  min-height: 1px;\n  padding-right: 15px;\n  padding-left: 15px; }\n.col {\n  -webkit-flex-basis: 0;\n      -ms-flex-preferred-size: 0;\n          flex-basis: 0;\n  -webkit-box-flex: 1;\n  -webkit-flex-grow: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  max-width: 100%; }\n.col-auto {\n  -webkit-box-flex: 0;\n  -webkit-flex: 0 0 auto;\n      -ms-flex: 0 0 auto;\n          flex: 0 0 auto;\n  width: auto;\n  max-width: none; }\n.col-1 {\n  -webkit-box-flex: 0;\n  -webkit-flex: 0 0 8.33333333%;\n      -ms-flex: 0 0 8.33333333%;\n          flex: 0 0 8.33333333%;\n  max-width: 8.33333333%; }\n.col-2 {\n  -webkit-box-flex: 0;\n  -webkit-flex: 0 0 16.66666667%;\n      -ms-flex: 0 0 16.66666667%;\n          flex: 0 0 16.66666667%;\n  max-width: 16.66666667%; }\n.col-3 {\n  -webkit-box-flex: 0;\n  -webkit-flex: 0 0 25%;\n      -ms-flex: 0 0 25%;\n          flex: 0 0 25%;\n  max-width: 25%; }\n.col-4 {\n  -webkit-box-flex: 0;\n  -webkit-flex: 0 0 33.33333333%;\n      -ms-flex: 0 0 33.33333333%;\n          flex: 0 0 33.33333333%;\n  max-width: 33.33333333%; }\n.col-5 {\n  -webkit-box-flex: 0;\n  -webkit-flex: 0 0 41.66666667%;\n      -ms-flex: 0 0 41.66666667%;\n          flex: 0 0 41.66666667%;\n  max-width: 41.66666667%; }\n.col-6 {\n  -webkit-box-flex: 0;\n  -webkit-flex: 0 0 50%;\n      -ms-flex: 0 0 50%;\n          flex: 0 0 50%;\n  max-width: 50%; }\n.col-7 {\n  -webkit-box-flex: 0;\n  -webkit-flex: 0 0 58.33333333%;\n      -ms-flex: 0 0 58.33333333%;\n          flex: 0 0 58.33333333%;\n  max-width: 58.33333333%; }\n.col-8 {\n  -webkit-box-flex: 0;\n  -webkit-flex: 0 0 66.66666667%;\n      -ms-flex: 0 0 66.66666667%;\n          flex: 0 0 66.66666667%;\n  max-width: 66.66666667%; }\n.col-9 {\n  -webkit-box-flex: 0;\n  -webkit-flex: 0 0 75%;\n      -ms-flex: 0 0 75%;\n          flex: 0 0 75%;\n  max-width: 75%; }\n.col-10 {\n  -webkit-box-flex: 0;\n  -webkit-flex: 0 0 83.33333333%;\n      -ms-flex: 0 0 83.33333333%;\n          flex: 0 0 83.33333333%;\n  max-width: 83.33333333%; }\n.col-11 {\n  -webkit-box-flex: 0;\n  -webkit-flex: 0 0 91.66666667%;\n      -ms-flex: 0 0 91.66666667%;\n          flex: 0 0 91.66666667%;\n  max-width: 91.66666667%; }\n.col-12 {\n  -webkit-box-flex: 0;\n  -webkit-flex: 0 0 100%;\n      -ms-flex: 0 0 100%;\n          flex: 0 0 100%;\n  max-width: 100%; }\n.order-first {\n  -webkit-box-ordinal-group: 0;\n  -webkit-order: -1;\n      -ms-flex-order: -1;\n          order: -1; }\n.order-last {\n  -webkit-box-ordinal-group: 14;\n  -webkit-order: 13;\n      -ms-flex-order: 13;\n          order: 13; }\n.order-0 {\n  -webkit-box-ordinal-group: 1;\n  -webkit-order: 0;\n      -ms-flex-order: 0;\n          order: 0; }\n.order-1 {\n  -webkit-box-ordinal-group: 2;\n  -webkit-order: 1;\n      -ms-flex-order: 1;\n          order: 1; }\n.order-2 {\n  -webkit-box-ordinal-group: 3;\n  -webkit-order: 2;\n      -ms-flex-order: 2;\n          order: 2; }\n.order-3 {\n  -webkit-box-ordinal-group: 4;\n  -webkit-order: 3;\n      -ms-flex-order: 3;\n          order: 3; }\n.order-4 {\n  -webkit-box-ordinal-group: 5;\n  -webkit-order: 4;\n      -ms-flex-order: 4;\n          order: 4; }\n.order-5 {\n  -webkit-box-ordinal-group: 6;\n  -webkit-order: 5;\n      -ms-flex-order: 5;\n          order: 5; }\n.order-6 {\n  -webkit-box-ordinal-group: 7;\n  -webkit-order: 6;\n      -ms-flex-order: 6;\n          order: 6; }\n.order-7 {\n  -webkit-box-ordinal-group: 8;\n  -webkit-order: 7;\n      -ms-flex-order: 7;\n          order: 7; }\n.order-8 {\n  -webkit-box-ordinal-group: 9;\n  -webkit-order: 8;\n      -ms-flex-order: 8;\n          order: 8; }\n.order-9 {\n  -webkit-box-ordinal-group: 10;\n  -webkit-order: 9;\n      -ms-flex-order: 9;\n          order: 9; }\n.order-10 {\n  -webkit-box-ordinal-group: 11;\n  -webkit-order: 10;\n      -ms-flex-order: 10;\n          order: 10; }\n.order-11 {\n  -webkit-box-ordinal-group: 12;\n  -webkit-order: 11;\n      -ms-flex-order: 11;\n          order: 11; }\n.order-12 {\n  -webkit-box-ordinal-group: 13;\n  -webkit-order: 12;\n      -ms-flex-order: 12;\n          order: 12; }\n.offset-1 {\n  margin-left: 8.33333333%; }\n.offset-2 {\n  margin-left: 16.66666667%; }\n.offset-3 {\n  margin-left: 25%; }\n.offset-4 {\n  margin-left: 33.33333333%; }\n.offset-5 {\n  margin-left: 41.66666667%; }\n.offset-6 {\n  margin-left: 50%; }\n.offset-7 {\n  margin-left: 58.33333333%; }\n.offset-8 {\n  margin-left: 66.66666667%; }\n.offset-9 {\n  margin-left: 75%; }\n.offset-10 {\n  margin-left: 83.33333333%; }\n.offset-11 {\n  margin-left: 91.66666667%; }\n@media (min-width: 576px) {\n  .col-sm {\n    -webkit-flex-basis: 0;\n        -ms-flex-preferred-size: 0;\n            flex-basis: 0;\n    -webkit-box-flex: 1;\n    -webkit-flex-grow: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1;\n    max-width: 100%; }\n  .col-sm-auto {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 auto;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n    width: auto;\n    max-width: none; }\n  .col-sm-1 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 8.33333333%;\n        -ms-flex: 0 0 8.33333333%;\n            flex: 0 0 8.33333333%;\n    max-width: 8.33333333%; }\n  .col-sm-2 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 16.66666667%;\n        -ms-flex: 0 0 16.66666667%;\n            flex: 0 0 16.66666667%;\n    max-width: 16.66666667%; }\n  .col-sm-3 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 25%;\n        -ms-flex: 0 0 25%;\n            flex: 0 0 25%;\n    max-width: 25%; }\n  .col-sm-4 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 33.33333333%;\n        -ms-flex: 0 0 33.33333333%;\n            flex: 0 0 33.33333333%;\n    max-width: 33.33333333%; }\n  .col-sm-5 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 41.66666667%;\n        -ms-flex: 0 0 41.66666667%;\n            flex: 0 0 41.66666667%;\n    max-width: 41.66666667%; }\n  .col-sm-6 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 50%;\n        -ms-flex: 0 0 50%;\n            flex: 0 0 50%;\n    max-width: 50%; }\n  .col-sm-7 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 58.33333333%;\n        -ms-flex: 0 0 58.33333333%;\n            flex: 0 0 58.33333333%;\n    max-width: 58.33333333%; }\n  .col-sm-8 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 66.66666667%;\n        -ms-flex: 0 0 66.66666667%;\n            flex: 0 0 66.66666667%;\n    max-width: 66.66666667%; }\n  .col-sm-9 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 75%;\n        -ms-flex: 0 0 75%;\n            flex: 0 0 75%;\n    max-width: 75%; }\n  .col-sm-10 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 83.33333333%;\n        -ms-flex: 0 0 83.33333333%;\n            flex: 0 0 83.33333333%;\n    max-width: 83.33333333%; }\n  .col-sm-11 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 91.66666667%;\n        -ms-flex: 0 0 91.66666667%;\n            flex: 0 0 91.66666667%;\n    max-width: 91.66666667%; }\n  .col-sm-12 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 100%;\n        -ms-flex: 0 0 100%;\n            flex: 0 0 100%;\n    max-width: 100%; }\n  .order-sm-first {\n    -webkit-box-ordinal-group: 0;\n    -webkit-order: -1;\n        -ms-flex-order: -1;\n            order: -1; }\n  .order-sm-last {\n    -webkit-box-ordinal-group: 14;\n    -webkit-order: 13;\n        -ms-flex-order: 13;\n            order: 13; }\n  .order-sm-0 {\n    -webkit-box-ordinal-group: 1;\n    -webkit-order: 0;\n        -ms-flex-order: 0;\n            order: 0; }\n  .order-sm-1 {\n    -webkit-box-ordinal-group: 2;\n    -webkit-order: 1;\n        -ms-flex-order: 1;\n            order: 1; }\n  .order-sm-2 {\n    -webkit-box-ordinal-group: 3;\n    -webkit-order: 2;\n        -ms-flex-order: 2;\n            order: 2; }\n  .order-sm-3 {\n    -webkit-box-ordinal-group: 4;\n    -webkit-order: 3;\n        -ms-flex-order: 3;\n            order: 3; }\n  .order-sm-4 {\n    -webkit-box-ordinal-group: 5;\n    -webkit-order: 4;\n        -ms-flex-order: 4;\n            order: 4; }\n  .order-sm-5 {\n    -webkit-box-ordinal-group: 6;\n    -webkit-order: 5;\n        -ms-flex-order: 5;\n            order: 5; }\n  .order-sm-6 {\n    -webkit-box-ordinal-group: 7;\n    -webkit-order: 6;\n        -ms-flex-order: 6;\n            order: 6; }\n  .order-sm-7 {\n    -webkit-box-ordinal-group: 8;\n    -webkit-order: 7;\n        -ms-flex-order: 7;\n            order: 7; }\n  .order-sm-8 {\n    -webkit-box-ordinal-group: 9;\n    -webkit-order: 8;\n        -ms-flex-order: 8;\n            order: 8; }\n  .order-sm-9 {\n    -webkit-box-ordinal-group: 10;\n    -webkit-order: 9;\n        -ms-flex-order: 9;\n            order: 9; }\n  .order-sm-10 {\n    -webkit-box-ordinal-group: 11;\n    -webkit-order: 10;\n        -ms-flex-order: 10;\n            order: 10; }\n  .order-sm-11 {\n    -webkit-box-ordinal-group: 12;\n    -webkit-order: 11;\n        -ms-flex-order: 11;\n            order: 11; }\n  .order-sm-12 {\n    -webkit-box-ordinal-group: 13;\n    -webkit-order: 12;\n        -ms-flex-order: 12;\n            order: 12; }\n  .offset-sm-0 {\n    margin-left: 0; }\n  .offset-sm-1 {\n    margin-left: 8.33333333%; }\n  .offset-sm-2 {\n    margin-left: 16.66666667%; }\n  .offset-sm-3 {\n    margin-left: 25%; }\n  .offset-sm-4 {\n    margin-left: 33.33333333%; }\n  .offset-sm-5 {\n    margin-left: 41.66666667%; }\n  .offset-sm-6 {\n    margin-left: 50%; }\n  .offset-sm-7 {\n    margin-left: 58.33333333%; }\n  .offset-sm-8 {\n    margin-left: 66.66666667%; }\n  .offset-sm-9 {\n    margin-left: 75%; }\n  .offset-sm-10 {\n    margin-left: 83.33333333%; }\n  .offset-sm-11 {\n    margin-left: 91.66666667%; } }\n@media (min-width: 768px) {\n  .col-md {\n    -webkit-flex-basis: 0;\n        -ms-flex-preferred-size: 0;\n            flex-basis: 0;\n    -webkit-box-flex: 1;\n    -webkit-flex-grow: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1;\n    max-width: 100%; }\n  .col-md-auto {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 auto;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n    width: auto;\n    max-width: none; }\n  .col-md-1 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 8.33333333%;\n        -ms-flex: 0 0 8.33333333%;\n            flex: 0 0 8.33333333%;\n    max-width: 8.33333333%; }\n  .col-md-2 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 16.66666667%;\n        -ms-flex: 0 0 16.66666667%;\n            flex: 0 0 16.66666667%;\n    max-width: 16.66666667%; }\n  .col-md-3 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 25%;\n        -ms-flex: 0 0 25%;\n            flex: 0 0 25%;\n    max-width: 25%; }\n  .col-md-4 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 33.33333333%;\n        -ms-flex: 0 0 33.33333333%;\n            flex: 0 0 33.33333333%;\n    max-width: 33.33333333%; }\n  .col-md-5 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 41.66666667%;\n        -ms-flex: 0 0 41.66666667%;\n            flex: 0 0 41.66666667%;\n    max-width: 41.66666667%; }\n  .col-md-6 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 50%;\n        -ms-flex: 0 0 50%;\n            flex: 0 0 50%;\n    max-width: 50%; }\n  .col-md-7 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 58.33333333%;\n        -ms-flex: 0 0 58.33333333%;\n            flex: 0 0 58.33333333%;\n    max-width: 58.33333333%; }\n  .col-md-8 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 66.66666667%;\n        -ms-flex: 0 0 66.66666667%;\n            flex: 0 0 66.66666667%;\n    max-width: 66.66666667%; }\n  .col-md-9 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 75%;\n        -ms-flex: 0 0 75%;\n            flex: 0 0 75%;\n    max-width: 75%; }\n  .col-md-10 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 83.33333333%;\n        -ms-flex: 0 0 83.33333333%;\n            flex: 0 0 83.33333333%;\n    max-width: 83.33333333%; }\n  .col-md-11 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 91.66666667%;\n        -ms-flex: 0 0 91.66666667%;\n            flex: 0 0 91.66666667%;\n    max-width: 91.66666667%; }\n  .col-md-12 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 100%;\n        -ms-flex: 0 0 100%;\n            flex: 0 0 100%;\n    max-width: 100%; }\n  .order-md-first {\n    -webkit-box-ordinal-group: 0;\n    -webkit-order: -1;\n        -ms-flex-order: -1;\n            order: -1; }\n  .order-md-last {\n    -webkit-box-ordinal-group: 14;\n    -webkit-order: 13;\n        -ms-flex-order: 13;\n            order: 13; }\n  .order-md-0 {\n    -webkit-box-ordinal-group: 1;\n    -webkit-order: 0;\n        -ms-flex-order: 0;\n            order: 0; }\n  .order-md-1 {\n    -webkit-box-ordinal-group: 2;\n    -webkit-order: 1;\n        -ms-flex-order: 1;\n            order: 1; }\n  .order-md-2 {\n    -webkit-box-ordinal-group: 3;\n    -webkit-order: 2;\n        -ms-flex-order: 2;\n            order: 2; }\n  .order-md-3 {\n    -webkit-box-ordinal-group: 4;\n    -webkit-order: 3;\n        -ms-flex-order: 3;\n            order: 3; }\n  .order-md-4 {\n    -webkit-box-ordinal-group: 5;\n    -webkit-order: 4;\n        -ms-flex-order: 4;\n            order: 4; }\n  .order-md-5 {\n    -webkit-box-ordinal-group: 6;\n    -webkit-order: 5;\n        -ms-flex-order: 5;\n            order: 5; }\n  .order-md-6 {\n    -webkit-box-ordinal-group: 7;\n    -webkit-order: 6;\n        -ms-flex-order: 6;\n            order: 6; }\n  .order-md-7 {\n    -webkit-box-ordinal-group: 8;\n    -webkit-order: 7;\n        -ms-flex-order: 7;\n            order: 7; }\n  .order-md-8 {\n    -webkit-box-ordinal-group: 9;\n    -webkit-order: 8;\n        -ms-flex-order: 8;\n            order: 8; }\n  .order-md-9 {\n    -webkit-box-ordinal-group: 10;\n    -webkit-order: 9;\n        -ms-flex-order: 9;\n            order: 9; }\n  .order-md-10 {\n    -webkit-box-ordinal-group: 11;\n    -webkit-order: 10;\n        -ms-flex-order: 10;\n            order: 10; }\n  .order-md-11 {\n    -webkit-box-ordinal-group: 12;\n    -webkit-order: 11;\n        -ms-flex-order: 11;\n            order: 11; }\n  .order-md-12 {\n    -webkit-box-ordinal-group: 13;\n    -webkit-order: 12;\n        -ms-flex-order: 12;\n            order: 12; }\n  .offset-md-0 {\n    margin-left: 0; }\n  .offset-md-1 {\n    margin-left: 8.33333333%; }\n  .offset-md-2 {\n    margin-left: 16.66666667%; }\n  .offset-md-3 {\n    margin-left: 25%; }\n  .offset-md-4 {\n    margin-left: 33.33333333%; }\n  .offset-md-5 {\n    margin-left: 41.66666667%; }\n  .offset-md-6 {\n    margin-left: 50%; }\n  .offset-md-7 {\n    margin-left: 58.33333333%; }\n  .offset-md-8 {\n    margin-left: 66.66666667%; }\n  .offset-md-9 {\n    margin-left: 75%; }\n  .offset-md-10 {\n    margin-left: 83.33333333%; }\n  .offset-md-11 {\n    margin-left: 91.66666667%; } }\n@media (min-width: 992px) {\n  .col-lg {\n    -webkit-flex-basis: 0;\n        -ms-flex-preferred-size: 0;\n            flex-basis: 0;\n    -webkit-box-flex: 1;\n    -webkit-flex-grow: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1;\n    max-width: 100%; }\n  .col-lg-auto {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 auto;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n    width: auto;\n    max-width: none; }\n  .col-lg-1 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 8.33333333%;\n        -ms-flex: 0 0 8.33333333%;\n            flex: 0 0 8.33333333%;\n    max-width: 8.33333333%; }\n  .col-lg-2 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 16.66666667%;\n        -ms-flex: 0 0 16.66666667%;\n            flex: 0 0 16.66666667%;\n    max-width: 16.66666667%; }\n  .col-lg-3 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 25%;\n        -ms-flex: 0 0 25%;\n            flex: 0 0 25%;\n    max-width: 25%; }\n  .col-lg-4 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 33.33333333%;\n        -ms-flex: 0 0 33.33333333%;\n            flex: 0 0 33.33333333%;\n    max-width: 33.33333333%; }\n  .col-lg-5 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 41.66666667%;\n        -ms-flex: 0 0 41.66666667%;\n            flex: 0 0 41.66666667%;\n    max-width: 41.66666667%; }\n  .col-lg-6 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 50%;\n        -ms-flex: 0 0 50%;\n            flex: 0 0 50%;\n    max-width: 50%; }\n  .col-lg-7 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 58.33333333%;\n        -ms-flex: 0 0 58.33333333%;\n            flex: 0 0 58.33333333%;\n    max-width: 58.33333333%; }\n  .col-lg-8 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 66.66666667%;\n        -ms-flex: 0 0 66.66666667%;\n            flex: 0 0 66.66666667%;\n    max-width: 66.66666667%; }\n  .col-lg-9 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 75%;\n        -ms-flex: 0 0 75%;\n            flex: 0 0 75%;\n    max-width: 75%; }\n  .col-lg-10 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 83.33333333%;\n        -ms-flex: 0 0 83.33333333%;\n            flex: 0 0 83.33333333%;\n    max-width: 83.33333333%; }\n  .col-lg-11 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 91.66666667%;\n        -ms-flex: 0 0 91.66666667%;\n            flex: 0 0 91.66666667%;\n    max-width: 91.66666667%; }\n  .col-lg-12 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 100%;\n        -ms-flex: 0 0 100%;\n            flex: 0 0 100%;\n    max-width: 100%; }\n  .order-lg-first {\n    -webkit-box-ordinal-group: 0;\n    -webkit-order: -1;\n        -ms-flex-order: -1;\n            order: -1; }\n  .order-lg-last {\n    -webkit-box-ordinal-group: 14;\n    -webkit-order: 13;\n        -ms-flex-order: 13;\n            order: 13; }\n  .order-lg-0 {\n    -webkit-box-ordinal-group: 1;\n    -webkit-order: 0;\n        -ms-flex-order: 0;\n            order: 0; }\n  .order-lg-1 {\n    -webkit-box-ordinal-group: 2;\n    -webkit-order: 1;\n        -ms-flex-order: 1;\n            order: 1; }\n  .order-lg-2 {\n    -webkit-box-ordinal-group: 3;\n    -webkit-order: 2;\n        -ms-flex-order: 2;\n            order: 2; }\n  .order-lg-3 {\n    -webkit-box-ordinal-group: 4;\n    -webkit-order: 3;\n        -ms-flex-order: 3;\n            order: 3; }\n  .order-lg-4 {\n    -webkit-box-ordinal-group: 5;\n    -webkit-order: 4;\n        -ms-flex-order: 4;\n            order: 4; }\n  .order-lg-5 {\n    -webkit-box-ordinal-group: 6;\n    -webkit-order: 5;\n        -ms-flex-order: 5;\n            order: 5; }\n  .order-lg-6 {\n    -webkit-box-ordinal-group: 7;\n    -webkit-order: 6;\n        -ms-flex-order: 6;\n            order: 6; }\n  .order-lg-7 {\n    -webkit-box-ordinal-group: 8;\n    -webkit-order: 7;\n        -ms-flex-order: 7;\n            order: 7; }\n  .order-lg-8 {\n    -webkit-box-ordinal-group: 9;\n    -webkit-order: 8;\n        -ms-flex-order: 8;\n            order: 8; }\n  .order-lg-9 {\n    -webkit-box-ordinal-group: 10;\n    -webkit-order: 9;\n        -ms-flex-order: 9;\n            order: 9; }\n  .order-lg-10 {\n    -webkit-box-ordinal-group: 11;\n    -webkit-order: 10;\n        -ms-flex-order: 10;\n            order: 10; }\n  .order-lg-11 {\n    -webkit-box-ordinal-group: 12;\n    -webkit-order: 11;\n        -ms-flex-order: 11;\n            order: 11; }\n  .order-lg-12 {\n    -webkit-box-ordinal-group: 13;\n    -webkit-order: 12;\n        -ms-flex-order: 12;\n            order: 12; }\n  .offset-lg-0 {\n    margin-left: 0; }\n  .offset-lg-1 {\n    margin-left: 8.33333333%; }\n  .offset-lg-2 {\n    margin-left: 16.66666667%; }\n  .offset-lg-3 {\n    margin-left: 25%; }\n  .offset-lg-4 {\n    margin-left: 33.33333333%; }\n  .offset-lg-5 {\n    margin-left: 41.66666667%; }\n  .offset-lg-6 {\n    margin-left: 50%; }\n  .offset-lg-7 {\n    margin-left: 58.33333333%; }\n  .offset-lg-8 {\n    margin-left: 66.66666667%; }\n  .offset-lg-9 {\n    margin-left: 75%; }\n  .offset-lg-10 {\n    margin-left: 83.33333333%; }\n  .offset-lg-11 {\n    margin-left: 91.66666667%; } }\n@media (min-width: 1200px) {\n  .col-xl {\n    -webkit-flex-basis: 0;\n        -ms-flex-preferred-size: 0;\n            flex-basis: 0;\n    -webkit-box-flex: 1;\n    -webkit-flex-grow: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1;\n    max-width: 100%; }\n  .col-xl-auto {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 auto;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n    width: auto;\n    max-width: none; }\n  .col-xl-1 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 8.33333333%;\n        -ms-flex: 0 0 8.33333333%;\n            flex: 0 0 8.33333333%;\n    max-width: 8.33333333%; }\n  .col-xl-2 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 16.66666667%;\n        -ms-flex: 0 0 16.66666667%;\n            flex: 0 0 16.66666667%;\n    max-width: 16.66666667%; }\n  .col-xl-3 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 25%;\n        -ms-flex: 0 0 25%;\n            flex: 0 0 25%;\n    max-width: 25%; }\n  .col-xl-4 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 33.33333333%;\n        -ms-flex: 0 0 33.33333333%;\n            flex: 0 0 33.33333333%;\n    max-width: 33.33333333%; }\n  .col-xl-5 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 41.66666667%;\n        -ms-flex: 0 0 41.66666667%;\n            flex: 0 0 41.66666667%;\n    max-width: 41.66666667%; }\n  .col-xl-6 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 50%;\n        -ms-flex: 0 0 50%;\n            flex: 0 0 50%;\n    max-width: 50%; }\n  .col-xl-7 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 58.33333333%;\n        -ms-flex: 0 0 58.33333333%;\n            flex: 0 0 58.33333333%;\n    max-width: 58.33333333%; }\n  .col-xl-8 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 66.66666667%;\n        -ms-flex: 0 0 66.66666667%;\n            flex: 0 0 66.66666667%;\n    max-width: 66.66666667%; }\n  .col-xl-9 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 75%;\n        -ms-flex: 0 0 75%;\n            flex: 0 0 75%;\n    max-width: 75%; }\n  .col-xl-10 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 83.33333333%;\n        -ms-flex: 0 0 83.33333333%;\n            flex: 0 0 83.33333333%;\n    max-width: 83.33333333%; }\n  .col-xl-11 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 91.66666667%;\n        -ms-flex: 0 0 91.66666667%;\n            flex: 0 0 91.66666667%;\n    max-width: 91.66666667%; }\n  .col-xl-12 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 100%;\n        -ms-flex: 0 0 100%;\n            flex: 0 0 100%;\n    max-width: 100%; }\n  .order-xl-first {\n    -webkit-box-ordinal-group: 0;\n    -webkit-order: -1;\n        -ms-flex-order: -1;\n            order: -1; }\n  .order-xl-last {\n    -webkit-box-ordinal-group: 14;\n    -webkit-order: 13;\n        -ms-flex-order: 13;\n            order: 13; }\n  .order-xl-0 {\n    -webkit-box-ordinal-group: 1;\n    -webkit-order: 0;\n        -ms-flex-order: 0;\n            order: 0; }\n  .order-xl-1 {\n    -webkit-box-ordinal-group: 2;\n    -webkit-order: 1;\n        -ms-flex-order: 1;\n            order: 1; }\n  .order-xl-2 {\n    -webkit-box-ordinal-group: 3;\n    -webkit-order: 2;\n        -ms-flex-order: 2;\n            order: 2; }\n  .order-xl-3 {\n    -webkit-box-ordinal-group: 4;\n    -webkit-order: 3;\n        -ms-flex-order: 3;\n            order: 3; }\n  .order-xl-4 {\n    -webkit-box-ordinal-group: 5;\n    -webkit-order: 4;\n        -ms-flex-order: 4;\n            order: 4; }\n  .order-xl-5 {\n    -webkit-box-ordinal-group: 6;\n    -webkit-order: 5;\n        -ms-flex-order: 5;\n            order: 5; }\n  .order-xl-6 {\n    -webkit-box-ordinal-group: 7;\n    -webkit-order: 6;\n        -ms-flex-order: 6;\n            order: 6; }\n  .order-xl-7 {\n    -webkit-box-ordinal-group: 8;\n    -webkit-order: 7;\n        -ms-flex-order: 7;\n            order: 7; }\n  .order-xl-8 {\n    -webkit-box-ordinal-group: 9;\n    -webkit-order: 8;\n        -ms-flex-order: 8;\n            order: 8; }\n  .order-xl-9 {\n    -webkit-box-ordinal-group: 10;\n    -webkit-order: 9;\n        -ms-flex-order: 9;\n            order: 9; }\n  .order-xl-10 {\n    -webkit-box-ordinal-group: 11;\n    -webkit-order: 10;\n        -ms-flex-order: 10;\n            order: 10; }\n  .order-xl-11 {\n    -webkit-box-ordinal-group: 12;\n    -webkit-order: 11;\n        -ms-flex-order: 11;\n            order: 11; }\n  .order-xl-12 {\n    -webkit-box-ordinal-group: 13;\n    -webkit-order: 12;\n        -ms-flex-order: 12;\n            order: 12; }\n  .offset-xl-0 {\n    margin-left: 0; }\n  .offset-xl-1 {\n    margin-left: 8.33333333%; }\n  .offset-xl-2 {\n    margin-left: 16.66666667%; }\n  .offset-xl-3 {\n    margin-left: 25%; }\n  .offset-xl-4 {\n    margin-left: 33.33333333%; }\n  .offset-xl-5 {\n    margin-left: 41.66666667%; }\n  .offset-xl-6 {\n    margin-left: 50%; }\n  .offset-xl-7 {\n    margin-left: 58.33333333%; }\n  .offset-xl-8 {\n    margin-left: 66.66666667%; }\n  .offset-xl-9 {\n    margin-left: 75%; }\n  .offset-xl-10 {\n    margin-left: 83.33333333%; }\n  .offset-xl-11 {\n    margin-left: 91.66666667%; } }\n.d-none {\n  display: none !important; }\n.d-inline {\n  display: inline !important; }\n.d-inline-block {\n  display: inline-block !important; }\n.d-block {\n  display: block !important; }\n.d-table {\n  display: table !important; }\n.d-table-row {\n  display: table-row !important; }\n.d-table-cell {\n  display: table-cell !important; }\n.d-flex {\n  display: -webkit-box !important;\n  display: -webkit-flex !important;\n  display: -ms-flexbox !important;\n  display: flex !important; }\n.d-inline-flex {\n  display: -webkit-inline-box !important;\n  display: -webkit-inline-flex !important;\n  display: -ms-inline-flexbox !important;\n  display: inline-flex !important; }\n@media (min-width: 576px) {\n  .d-sm-none {\n    display: none !important; }\n  .d-sm-inline {\n    display: inline !important; }\n  .d-sm-inline-block {\n    display: inline-block !important; }\n  .d-sm-block {\n    display: block !important; }\n  .d-sm-table {\n    display: table !important; }\n  .d-sm-table-row {\n    display: table-row !important; }\n  .d-sm-table-cell {\n    display: table-cell !important; }\n  .d-sm-flex {\n    display: -webkit-box !important;\n    display: -webkit-flex !important;\n    display: -ms-flexbox !important;\n    display: flex !important; }\n  .d-sm-inline-flex {\n    display: -webkit-inline-box !important;\n    display: -webkit-inline-flex !important;\n    display: -ms-inline-flexbox !important;\n    display: inline-flex !important; } }\n@media (min-width: 768px) {\n  .d-md-none {\n    display: none !important; }\n  .d-md-inline {\n    display: inline !important; }\n  .d-md-inline-block {\n    display: inline-block !important; }\n  .d-md-block {\n    display: block !important; }\n  .d-md-table {\n    display: table !important; }\n  .d-md-table-row {\n    display: table-row !important; }\n  .d-md-table-cell {\n    display: table-cell !important; }\n  .d-md-flex {\n    display: -webkit-box !important;\n    display: -webkit-flex !important;\n    display: -ms-flexbox !important;\n    display: flex !important; }\n  .d-md-inline-flex {\n    display: -webkit-inline-box !important;\n    display: -webkit-inline-flex !important;\n    display: -ms-inline-flexbox !important;\n    display: inline-flex !important; } }\n@media (min-width: 992px) {\n  .d-lg-none {\n    display: none !important; }\n  .d-lg-inline {\n    display: inline !important; }\n  .d-lg-inline-block {\n    display: inline-block !important; }\n  .d-lg-block {\n    display: block !important; }\n  .d-lg-table {\n    display: table !important; }\n  .d-lg-table-row {\n    display: table-row !important; }\n  .d-lg-table-cell {\n    display: table-cell !important; }\n  .d-lg-flex {\n    display: -webkit-box !important;\n    display: -webkit-flex !important;\n    display: -ms-flexbox !important;\n    display: flex !important; }\n  .d-lg-inline-flex {\n    display: -webkit-inline-box !important;\n    display: -webkit-inline-flex !important;\n    display: -ms-inline-flexbox !important;\n    display: inline-flex !important; } }\n@media (min-width: 1200px) {\n  .d-xl-none {\n    display: none !important; }\n  .d-xl-inline {\n    display: inline !important; }\n  .d-xl-inline-block {\n    display: inline-block !important; }\n  .d-xl-block {\n    display: block !important; }\n  .d-xl-table {\n    display: table !important; }\n  .d-xl-table-row {\n    display: table-row !important; }\n  .d-xl-table-cell {\n    display: table-cell !important; }\n  .d-xl-flex {\n    display: -webkit-box !important;\n    display: -webkit-flex !important;\n    display: -ms-flexbox !important;\n    display: flex !important; }\n  .d-xl-inline-flex {\n    display: -webkit-inline-box !important;\n    display: -webkit-inline-flex !important;\n    display: -ms-inline-flexbox !important;\n    display: inline-flex !important; } }\n@media print {\n  .d-print-none {\n    display: none !important; }\n  .d-print-inline {\n    display: inline !important; }\n  .d-print-inline-block {\n    display: inline-block !important; }\n  .d-print-block {\n    display: block !important; }\n  .d-print-table {\n    display: table !important; }\n  .d-print-table-row {\n    display: table-row !important; }\n  .d-print-table-cell {\n    display: table-cell !important; }\n  .d-print-flex {\n    display: -webkit-box !important;\n    display: -webkit-flex !important;\n    display: -ms-flexbox !important;\n    display: flex !important; }\n  .d-print-inline-flex {\n    display: -webkit-inline-box !important;\n    display: -webkit-inline-flex !important;\n    display: -ms-inline-flexbox !important;\n    display: inline-flex !important; } }\n.flex-row {\n  -webkit-box-orient: horizontal !important;\n  -webkit-box-direction: normal !important;\n  -webkit-flex-direction: row !important;\n      -ms-flex-direction: row !important;\n          flex-direction: row !important; }\n.flex-column {\n  -webkit-box-orient: vertical !important;\n  -webkit-box-direction: normal !important;\n  -webkit-flex-direction: column !important;\n      -ms-flex-direction: column !important;\n          flex-direction: column !important; }\n.flex-row-reverse {\n  -webkit-box-orient: horizontal !important;\n  -webkit-box-direction: reverse !important;\n  -webkit-flex-direction: row-reverse !important;\n      -ms-flex-direction: row-reverse !important;\n          flex-direction: row-reverse !important; }\n.flex-column-reverse {\n  -webkit-box-orient: vertical !important;\n  -webkit-box-direction: reverse !important;\n  -webkit-flex-direction: column-reverse !important;\n      -ms-flex-direction: column-reverse !important;\n          flex-direction: column-reverse !important; }\n.flex-wrap {\n  -webkit-flex-wrap: wrap !important;\n      -ms-flex-wrap: wrap !important;\n          flex-wrap: wrap !important; }\n.flex-nowrap {\n  -webkit-flex-wrap: nowrap !important;\n      -ms-flex-wrap: nowrap !important;\n          flex-wrap: nowrap !important; }\n.flex-wrap-reverse {\n  -webkit-flex-wrap: wrap-reverse !important;\n      -ms-flex-wrap: wrap-reverse !important;\n          flex-wrap: wrap-reverse !important; }\n.flex-fill {\n  -webkit-box-flex: 1 !important;\n  -webkit-flex: 1 1 auto !important;\n      -ms-flex: 1 1 auto !important;\n          flex: 1 1 auto !important; }\n.flex-grow-0 {\n  -webkit-box-flex: 0 !important;\n  -webkit-flex-grow: 0 !important;\n      -ms-flex-positive: 0 !important;\n          flex-grow: 0 !important; }\n.flex-grow-1 {\n  -webkit-box-flex: 1 !important;\n  -webkit-flex-grow: 1 !important;\n      -ms-flex-positive: 1 !important;\n          flex-grow: 1 !important; }\n.flex-shrink-0 {\n  -webkit-flex-shrink: 0 !important;\n      -ms-flex-negative: 0 !important;\n          flex-shrink: 0 !important; }\n.flex-shrink-1 {\n  -webkit-flex-shrink: 1 !important;\n      -ms-flex-negative: 1 !important;\n          flex-shrink: 1 !important; }\n.justify-content-start {\n  -webkit-box-pack: start !important;\n  -webkit-justify-content: flex-start !important;\n      -ms-flex-pack: start !important;\n          justify-content: flex-start !important; }\n.justify-content-end {\n  -webkit-box-pack: end !important;\n  -webkit-justify-content: flex-end !important;\n      -ms-flex-pack: end !important;\n          justify-content: flex-end !important; }\n.justify-content-center {\n  -webkit-box-pack: center !important;\n  -webkit-justify-content: center !important;\n      -ms-flex-pack: center !important;\n          justify-content: center !important; }\n.justify-content-between {\n  -webkit-box-pack: justify !important;\n  -webkit-justify-content: space-between !important;\n      -ms-flex-pack: justify !important;\n          justify-content: space-between !important; }\n.justify-content-around {\n  -webkit-justify-content: space-around !important;\n      -ms-flex-pack: distribute !important;\n          justify-content: space-around !important; }\n.align-items-start {\n  -webkit-box-align: start !important;\n  -webkit-align-items: flex-start !important;\n      -ms-flex-align: start !important;\n          align-items: flex-start !important; }\n.align-items-end {\n  -webkit-box-align: end !important;\n  -webkit-align-items: flex-end !important;\n      -ms-flex-align: end !important;\n          align-items: flex-end !important; }\n.align-items-center {\n  -webkit-box-align: center !important;\n  -webkit-align-items: center !important;\n      -ms-flex-align: center !important;\n          align-items: center !important; }\n.align-items-baseline {\n  -webkit-box-align: baseline !important;\n  -webkit-align-items: baseline !important;\n      -ms-flex-align: baseline !important;\n          align-items: baseline !important; }\n.align-items-stretch {\n  -webkit-box-align: stretch !important;\n  -webkit-align-items: stretch !important;\n      -ms-flex-align: stretch !important;\n          align-items: stretch !important; }\n.align-content-start {\n  -webkit-align-content: flex-start !important;\n      -ms-flex-line-pack: start !important;\n          align-content: flex-start !important; }\n.align-content-end {\n  -webkit-align-content: flex-end !important;\n      -ms-flex-line-pack: end !important;\n          align-content: flex-end !important; }\n.align-content-center {\n  -webkit-align-content: center !important;\n      -ms-flex-line-pack: center !important;\n          align-content: center !important; }\n.align-content-between {\n  -webkit-align-content: space-between !important;\n      -ms-flex-line-pack: justify !important;\n          align-content: space-between !important; }\n.align-content-around {\n  -webkit-align-content: space-around !important;\n      -ms-flex-line-pack: distribute !important;\n          align-content: space-around !important; }\n.align-content-stretch {\n  -webkit-align-content: stretch !important;\n      -ms-flex-line-pack: stretch !important;\n          align-content: stretch !important; }\n.align-self-auto {\n  -webkit-align-self: auto !important;\n      -ms-flex-item-align: auto !important;\n              -ms-grid-row-align: auto !important;\n          align-self: auto !important; }\n.align-self-start {\n  -webkit-align-self: flex-start !important;\n      -ms-flex-item-align: start !important;\n          align-self: flex-start !important; }\n.align-self-end {\n  -webkit-align-self: flex-end !important;\n      -ms-flex-item-align: end !important;\n          align-self: flex-end !important; }\n.align-self-center {\n  -webkit-align-self: center !important;\n      -ms-flex-item-align: center !important;\n              -ms-grid-row-align: center !important;\n          align-self: center !important; }\n.align-self-baseline {\n  -webkit-align-self: baseline !important;\n      -ms-flex-item-align: baseline !important;\n          align-self: baseline !important; }\n.align-self-stretch {\n  -webkit-align-self: stretch !important;\n      -ms-flex-item-align: stretch !important;\n              -ms-grid-row-align: stretch !important;\n          align-self: stretch !important; }\n@media (min-width: 576px) {\n  .flex-sm-row {\n    -webkit-box-orient: horizontal !important;\n    -webkit-box-direction: normal !important;\n    -webkit-flex-direction: row !important;\n        -ms-flex-direction: row !important;\n            flex-direction: row !important; }\n  .flex-sm-column {\n    -webkit-box-orient: vertical !important;\n    -webkit-box-direction: normal !important;\n    -webkit-flex-direction: column !important;\n        -ms-flex-direction: column !important;\n            flex-direction: column !important; }\n  .flex-sm-row-reverse {\n    -webkit-box-orient: horizontal !important;\n    -webkit-box-direction: reverse !important;\n    -webkit-flex-direction: row-reverse !important;\n        -ms-flex-direction: row-reverse !important;\n            flex-direction: row-reverse !important; }\n  .flex-sm-column-reverse {\n    -webkit-box-orient: vertical !important;\n    -webkit-box-direction: reverse !important;\n    -webkit-flex-direction: column-reverse !important;\n        -ms-flex-direction: column-reverse !important;\n            flex-direction: column-reverse !important; }\n  .flex-sm-wrap {\n    -webkit-flex-wrap: wrap !important;\n        -ms-flex-wrap: wrap !important;\n            flex-wrap: wrap !important; }\n  .flex-sm-nowrap {\n    -webkit-flex-wrap: nowrap !important;\n        -ms-flex-wrap: nowrap !important;\n            flex-wrap: nowrap !important; }\n  .flex-sm-wrap-reverse {\n    -webkit-flex-wrap: wrap-reverse !important;\n        -ms-flex-wrap: wrap-reverse !important;\n            flex-wrap: wrap-reverse !important; }\n  .flex-sm-fill {\n    -webkit-box-flex: 1 !important;\n    -webkit-flex: 1 1 auto !important;\n        -ms-flex: 1 1 auto !important;\n            flex: 1 1 auto !important; }\n  .flex-sm-grow-0 {\n    -webkit-box-flex: 0 !important;\n    -webkit-flex-grow: 0 !important;\n        -ms-flex-positive: 0 !important;\n            flex-grow: 0 !important; }\n  .flex-sm-grow-1 {\n    -webkit-box-flex: 1 !important;\n    -webkit-flex-grow: 1 !important;\n        -ms-flex-positive: 1 !important;\n            flex-grow: 1 !important; }\n  .flex-sm-shrink-0 {\n    -webkit-flex-shrink: 0 !important;\n        -ms-flex-negative: 0 !important;\n            flex-shrink: 0 !important; }\n  .flex-sm-shrink-1 {\n    -webkit-flex-shrink: 1 !important;\n        -ms-flex-negative: 1 !important;\n            flex-shrink: 1 !important; }\n  .justify-content-sm-start {\n    -webkit-box-pack: start !important;\n    -webkit-justify-content: flex-start !important;\n        -ms-flex-pack: start !important;\n            justify-content: flex-start !important; }\n  .justify-content-sm-end {\n    -webkit-box-pack: end !important;\n    -webkit-justify-content: flex-end !important;\n        -ms-flex-pack: end !important;\n            justify-content: flex-end !important; }\n  .justify-content-sm-center {\n    -webkit-box-pack: center !important;\n    -webkit-justify-content: center !important;\n        -ms-flex-pack: center !important;\n            justify-content: center !important; }\n  .justify-content-sm-between {\n    -webkit-box-pack: justify !important;\n    -webkit-justify-content: space-between !important;\n        -ms-flex-pack: justify !important;\n            justify-content: space-between !important; }\n  .justify-content-sm-around {\n    -webkit-justify-content: space-around !important;\n        -ms-flex-pack: distribute !important;\n            justify-content: space-around !important; }\n  .align-items-sm-start {\n    -webkit-box-align: start !important;\n    -webkit-align-items: flex-start !important;\n        -ms-flex-align: start !important;\n            align-items: flex-start !important; }\n  .align-items-sm-end {\n    -webkit-box-align: end !important;\n    -webkit-align-items: flex-end !important;\n        -ms-flex-align: end !important;\n            align-items: flex-end !important; }\n  .align-items-sm-center {\n    -webkit-box-align: center !important;\n    -webkit-align-items: center !important;\n        -ms-flex-align: center !important;\n            align-items: center !important; }\n  .align-items-sm-baseline {\n    -webkit-box-align: baseline !important;\n    -webkit-align-items: baseline !important;\n        -ms-flex-align: baseline !important;\n            align-items: baseline !important; }\n  .align-items-sm-stretch {\n    -webkit-box-align: stretch !important;\n    -webkit-align-items: stretch !important;\n        -ms-flex-align: stretch !important;\n            align-items: stretch !important; }\n  .align-content-sm-start {\n    -webkit-align-content: flex-start !important;\n        -ms-flex-line-pack: start !important;\n            align-content: flex-start !important; }\n  .align-content-sm-end {\n    -webkit-align-content: flex-end !important;\n        -ms-flex-line-pack: end !important;\n            align-content: flex-end !important; }\n  .align-content-sm-center {\n    -webkit-align-content: center !important;\n        -ms-flex-line-pack: center !important;\n            align-content: center !important; }\n  .align-content-sm-between {\n    -webkit-align-content: space-between !important;\n        -ms-flex-line-pack: justify !important;\n            align-content: space-between !important; }\n  .align-content-sm-around {\n    -webkit-align-content: space-around !important;\n        -ms-flex-line-pack: distribute !important;\n            align-content: space-around !important; }\n  .align-content-sm-stretch {\n    -webkit-align-content: stretch !important;\n        -ms-flex-line-pack: stretch !important;\n            align-content: stretch !important; }\n  .align-self-sm-auto {\n    -webkit-align-self: auto !important;\n        -ms-flex-item-align: auto !important;\n                -ms-grid-row-align: auto !important;\n            align-self: auto !important; }\n  .align-self-sm-start {\n    -webkit-align-self: flex-start !important;\n        -ms-flex-item-align: start !important;\n            align-self: flex-start !important; }\n  .align-self-sm-end {\n    -webkit-align-self: flex-end !important;\n        -ms-flex-item-align: end !important;\n            align-self: flex-end !important; }\n  .align-self-sm-center {\n    -webkit-align-self: center !important;\n        -ms-flex-item-align: center !important;\n                -ms-grid-row-align: center !important;\n            align-self: center !important; }\n  .align-self-sm-baseline {\n    -webkit-align-self: baseline !important;\n        -ms-flex-item-align: baseline !important;\n            align-self: baseline !important; }\n  .align-self-sm-stretch {\n    -webkit-align-self: stretch !important;\n        -ms-flex-item-align: stretch !important;\n                -ms-grid-row-align: stretch !important;\n            align-self: stretch !important; } }\n@media (min-width: 768px) {\n  .flex-md-row {\n    -webkit-box-orient: horizontal !important;\n    -webkit-box-direction: normal !important;\n    -webkit-flex-direction: row !important;\n        -ms-flex-direction: row !important;\n            flex-direction: row !important; }\n  .flex-md-column {\n    -webkit-box-orient: vertical !important;\n    -webkit-box-direction: normal !important;\n    -webkit-flex-direction: column !important;\n        -ms-flex-direction: column !important;\n            flex-direction: column !important; }\n  .flex-md-row-reverse {\n    -webkit-box-orient: horizontal !important;\n    -webkit-box-direction: reverse !important;\n    -webkit-flex-direction: row-reverse !important;\n        -ms-flex-direction: row-reverse !important;\n            flex-direction: row-reverse !important; }\n  .flex-md-column-reverse {\n    -webkit-box-orient: vertical !important;\n    -webkit-box-direction: reverse !important;\n    -webkit-flex-direction: column-reverse !important;\n        -ms-flex-direction: column-reverse !important;\n            flex-direction: column-reverse !important; }\n  .flex-md-wrap {\n    -webkit-flex-wrap: wrap !important;\n        -ms-flex-wrap: wrap !important;\n            flex-wrap: wrap !important; }\n  .flex-md-nowrap {\n    -webkit-flex-wrap: nowrap !important;\n        -ms-flex-wrap: nowrap !important;\n            flex-wrap: nowrap !important; }\n  .flex-md-wrap-reverse {\n    -webkit-flex-wrap: wrap-reverse !important;\n        -ms-flex-wrap: wrap-reverse !important;\n            flex-wrap: wrap-reverse !important; }\n  .flex-md-fill {\n    -webkit-box-flex: 1 !important;\n    -webkit-flex: 1 1 auto !important;\n        -ms-flex: 1 1 auto !important;\n            flex: 1 1 auto !important; }\n  .flex-md-grow-0 {\n    -webkit-box-flex: 0 !important;\n    -webkit-flex-grow: 0 !important;\n        -ms-flex-positive: 0 !important;\n            flex-grow: 0 !important; }\n  .flex-md-grow-1 {\n    -webkit-box-flex: 1 !important;\n    -webkit-flex-grow: 1 !important;\n        -ms-flex-positive: 1 !important;\n            flex-grow: 1 !important; }\n  .flex-md-shrink-0 {\n    -webkit-flex-shrink: 0 !important;\n        -ms-flex-negative: 0 !important;\n            flex-shrink: 0 !important; }\n  .flex-md-shrink-1 {\n    -webkit-flex-shrink: 1 !important;\n        -ms-flex-negative: 1 !important;\n            flex-shrink: 1 !important; }\n  .justify-content-md-start {\n    -webkit-box-pack: start !important;\n    -webkit-justify-content: flex-start !important;\n        -ms-flex-pack: start !important;\n            justify-content: flex-start !important; }\n  .justify-content-md-end {\n    -webkit-box-pack: end !important;\n    -webkit-justify-content: flex-end !important;\n        -ms-flex-pack: end !important;\n            justify-content: flex-end !important; }\n  .justify-content-md-center {\n    -webkit-box-pack: center !important;\n    -webkit-justify-content: center !important;\n        -ms-flex-pack: center !important;\n            justify-content: center !important; }\n  .justify-content-md-between {\n    -webkit-box-pack: justify !important;\n    -webkit-justify-content: space-between !important;\n        -ms-flex-pack: justify !important;\n            justify-content: space-between !important; }\n  .justify-content-md-around {\n    -webkit-justify-content: space-around !important;\n        -ms-flex-pack: distribute !important;\n            justify-content: space-around !important; }\n  .align-items-md-start {\n    -webkit-box-align: start !important;\n    -webkit-align-items: flex-start !important;\n        -ms-flex-align: start !important;\n            align-items: flex-start !important; }\n  .align-items-md-end {\n    -webkit-box-align: end !important;\n    -webkit-align-items: flex-end !important;\n        -ms-flex-align: end !important;\n            align-items: flex-end !important; }\n  .align-items-md-center {\n    -webkit-box-align: center !important;\n    -webkit-align-items: center !important;\n        -ms-flex-align: center !important;\n            align-items: center !important; }\n  .align-items-md-baseline {\n    -webkit-box-align: baseline !important;\n    -webkit-align-items: baseline !important;\n        -ms-flex-align: baseline !important;\n            align-items: baseline !important; }\n  .align-items-md-stretch {\n    -webkit-box-align: stretch !important;\n    -webkit-align-items: stretch !important;\n        -ms-flex-align: stretch !important;\n            align-items: stretch !important; }\n  .align-content-md-start {\n    -webkit-align-content: flex-start !important;\n        -ms-flex-line-pack: start !important;\n            align-content: flex-start !important; }\n  .align-content-md-end {\n    -webkit-align-content: flex-end !important;\n        -ms-flex-line-pack: end !important;\n            align-content: flex-end !important; }\n  .align-content-md-center {\n    -webkit-align-content: center !important;\n        -ms-flex-line-pack: center !important;\n            align-content: center !important; }\n  .align-content-md-between {\n    -webkit-align-content: space-between !important;\n        -ms-flex-line-pack: justify !important;\n            align-content: space-between !important; }\n  .align-content-md-around {\n    -webkit-align-content: space-around !important;\n        -ms-flex-line-pack: distribute !important;\n            align-content: space-around !important; }\n  .align-content-md-stretch {\n    -webkit-align-content: stretch !important;\n        -ms-flex-line-pack: stretch !important;\n            align-content: stretch !important; }\n  .align-self-md-auto {\n    -webkit-align-self: auto !important;\n        -ms-flex-item-align: auto !important;\n                -ms-grid-row-align: auto !important;\n            align-self: auto !important; }\n  .align-self-md-start {\n    -webkit-align-self: flex-start !important;\n        -ms-flex-item-align: start !important;\n            align-self: flex-start !important; }\n  .align-self-md-end {\n    -webkit-align-self: flex-end !important;\n        -ms-flex-item-align: end !important;\n            align-self: flex-end !important; }\n  .align-self-md-center {\n    -webkit-align-self: center !important;\n        -ms-flex-item-align: center !important;\n                -ms-grid-row-align: center !important;\n            align-self: center !important; }\n  .align-self-md-baseline {\n    -webkit-align-self: baseline !important;\n        -ms-flex-item-align: baseline !important;\n            align-self: baseline !important; }\n  .align-self-md-stretch {\n    -webkit-align-self: stretch !important;\n        -ms-flex-item-align: stretch !important;\n                -ms-grid-row-align: stretch !important;\n            align-self: stretch !important; } }\n@media (min-width: 992px) {\n  .flex-lg-row {\n    -webkit-box-orient: horizontal !important;\n    -webkit-box-direction: normal !important;\n    -webkit-flex-direction: row !important;\n        -ms-flex-direction: row !important;\n            flex-direction: row !important; }\n  .flex-lg-column {\n    -webkit-box-orient: vertical !important;\n    -webkit-box-direction: normal !important;\n    -webkit-flex-direction: column !important;\n        -ms-flex-direction: column !important;\n            flex-direction: column !important; }\n  .flex-lg-row-reverse {\n    -webkit-box-orient: horizontal !important;\n    -webkit-box-direction: reverse !important;\n    -webkit-flex-direction: row-reverse !important;\n        -ms-flex-direction: row-reverse !important;\n            flex-direction: row-reverse !important; }\n  .flex-lg-column-reverse {\n    -webkit-box-orient: vertical !important;\n    -webkit-box-direction: reverse !important;\n    -webkit-flex-direction: column-reverse !important;\n        -ms-flex-direction: column-reverse !important;\n            flex-direction: column-reverse !important; }\n  .flex-lg-wrap {\n    -webkit-flex-wrap: wrap !important;\n        -ms-flex-wrap: wrap !important;\n            flex-wrap: wrap !important; }\n  .flex-lg-nowrap {\n    -webkit-flex-wrap: nowrap !important;\n        -ms-flex-wrap: nowrap !important;\n            flex-wrap: nowrap !important; }\n  .flex-lg-wrap-reverse {\n    -webkit-flex-wrap: wrap-reverse !important;\n        -ms-flex-wrap: wrap-reverse !important;\n            flex-wrap: wrap-reverse !important; }\n  .flex-lg-fill {\n    -webkit-box-flex: 1 !important;\n    -webkit-flex: 1 1 auto !important;\n        -ms-flex: 1 1 auto !important;\n            flex: 1 1 auto !important; }\n  .flex-lg-grow-0 {\n    -webkit-box-flex: 0 !important;\n    -webkit-flex-grow: 0 !important;\n        -ms-flex-positive: 0 !important;\n            flex-grow: 0 !important; }\n  .flex-lg-grow-1 {\n    -webkit-box-flex: 1 !important;\n    -webkit-flex-grow: 1 !important;\n        -ms-flex-positive: 1 !important;\n            flex-grow: 1 !important; }\n  .flex-lg-shrink-0 {\n    -webkit-flex-shrink: 0 !important;\n        -ms-flex-negative: 0 !important;\n            flex-shrink: 0 !important; }\n  .flex-lg-shrink-1 {\n    -webkit-flex-shrink: 1 !important;\n        -ms-flex-negative: 1 !important;\n            flex-shrink: 1 !important; }\n  .justify-content-lg-start {\n    -webkit-box-pack: start !important;\n    -webkit-justify-content: flex-start !important;\n        -ms-flex-pack: start !important;\n            justify-content: flex-start !important; }\n  .justify-content-lg-end {\n    -webkit-box-pack: end !important;\n    -webkit-justify-content: flex-end !important;\n        -ms-flex-pack: end !important;\n            justify-content: flex-end !important; }\n  .justify-content-lg-center {\n    -webkit-box-pack: center !important;\n    -webkit-justify-content: center !important;\n        -ms-flex-pack: center !important;\n            justify-content: center !important; }\n  .justify-content-lg-between {\n    -webkit-box-pack: justify !important;\n    -webkit-justify-content: space-between !important;\n        -ms-flex-pack: justify !important;\n            justify-content: space-between !important; }\n  .justify-content-lg-around {\n    -webkit-justify-content: space-around !important;\n        -ms-flex-pack: distribute !important;\n            justify-content: space-around !important; }\n  .align-items-lg-start {\n    -webkit-box-align: start !important;\n    -webkit-align-items: flex-start !important;\n        -ms-flex-align: start !important;\n            align-items: flex-start !important; }\n  .align-items-lg-end {\n    -webkit-box-align: end !important;\n    -webkit-align-items: flex-end !important;\n        -ms-flex-align: end !important;\n            align-items: flex-end !important; }\n  .align-items-lg-center {\n    -webkit-box-align: center !important;\n    -webkit-align-items: center !important;\n        -ms-flex-align: center !important;\n            align-items: center !important; }\n  .align-items-lg-baseline {\n    -webkit-box-align: baseline !important;\n    -webkit-align-items: baseline !important;\n        -ms-flex-align: baseline !important;\n            align-items: baseline !important; }\n  .align-items-lg-stretch {\n    -webkit-box-align: stretch !important;\n    -webkit-align-items: stretch !important;\n        -ms-flex-align: stretch !important;\n            align-items: stretch !important; }\n  .align-content-lg-start {\n    -webkit-align-content: flex-start !important;\n        -ms-flex-line-pack: start !important;\n            align-content: flex-start !important; }\n  .align-content-lg-end {\n    -webkit-align-content: flex-end !important;\n        -ms-flex-line-pack: end !important;\n            align-content: flex-end !important; }\n  .align-content-lg-center {\n    -webkit-align-content: center !important;\n        -ms-flex-line-pack: center !important;\n            align-content: center !important; }\n  .align-content-lg-between {\n    -webkit-align-content: space-between !important;\n        -ms-flex-line-pack: justify !important;\n            align-content: space-between !important; }\n  .align-content-lg-around {\n    -webkit-align-content: space-around !important;\n        -ms-flex-line-pack: distribute !important;\n            align-content: space-around !important; }\n  .align-content-lg-stretch {\n    -webkit-align-content: stretch !important;\n        -ms-flex-line-pack: stretch !important;\n            align-content: stretch !important; }\n  .align-self-lg-auto {\n    -webkit-align-self: auto !important;\n        -ms-flex-item-align: auto !important;\n                -ms-grid-row-align: auto !important;\n            align-self: auto !important; }\n  .align-self-lg-start {\n    -webkit-align-self: flex-start !important;\n        -ms-flex-item-align: start !important;\n            align-self: flex-start !important; }\n  .align-self-lg-end {\n    -webkit-align-self: flex-end !important;\n        -ms-flex-item-align: end !important;\n            align-self: flex-end !important; }\n  .align-self-lg-center {\n    -webkit-align-self: center !important;\n        -ms-flex-item-align: center !important;\n                -ms-grid-row-align: center !important;\n            align-self: center !important; }\n  .align-self-lg-baseline {\n    -webkit-align-self: baseline !important;\n        -ms-flex-item-align: baseline !important;\n            align-self: baseline !important; }\n  .align-self-lg-stretch {\n    -webkit-align-self: stretch !important;\n        -ms-flex-item-align: stretch !important;\n                -ms-grid-row-align: stretch !important;\n            align-self: stretch !important; } }\n@media (min-width: 1200px) {\n  .flex-xl-row {\n    -webkit-box-orient: horizontal !important;\n    -webkit-box-direction: normal !important;\n    -webkit-flex-direction: row !important;\n        -ms-flex-direction: row !important;\n            flex-direction: row !important; }\n  .flex-xl-column {\n    -webkit-box-orient: vertical !important;\n    -webkit-box-direction: normal !important;\n    -webkit-flex-direction: column !important;\n        -ms-flex-direction: column !important;\n            flex-direction: column !important; }\n  .flex-xl-row-reverse {\n    -webkit-box-orient: horizontal !important;\n    -webkit-box-direction: reverse !important;\n    -webkit-flex-direction: row-reverse !important;\n        -ms-flex-direction: row-reverse !important;\n            flex-direction: row-reverse !important; }\n  .flex-xl-column-reverse {\n    -webkit-box-orient: vertical !important;\n    -webkit-box-direction: reverse !important;\n    -webkit-flex-direction: column-reverse !important;\n        -ms-flex-direction: column-reverse !important;\n            flex-direction: column-reverse !important; }\n  .flex-xl-wrap {\n    -webkit-flex-wrap: wrap !important;\n        -ms-flex-wrap: wrap !important;\n            flex-wrap: wrap !important; }\n  .flex-xl-nowrap {\n    -webkit-flex-wrap: nowrap !important;\n        -ms-flex-wrap: nowrap !important;\n            flex-wrap: nowrap !important; }\n  .flex-xl-wrap-reverse {\n    -webkit-flex-wrap: wrap-reverse !important;\n        -ms-flex-wrap: wrap-reverse !important;\n            flex-wrap: wrap-reverse !important; }\n  .flex-xl-fill {\n    -webkit-box-flex: 1 !important;\n    -webkit-flex: 1 1 auto !important;\n        -ms-flex: 1 1 auto !important;\n            flex: 1 1 auto !important; }\n  .flex-xl-grow-0 {\n    -webkit-box-flex: 0 !important;\n    -webkit-flex-grow: 0 !important;\n        -ms-flex-positive: 0 !important;\n            flex-grow: 0 !important; }\n  .flex-xl-grow-1 {\n    -webkit-box-flex: 1 !important;\n    -webkit-flex-grow: 1 !important;\n        -ms-flex-positive: 1 !important;\n            flex-grow: 1 !important; }\n  .flex-xl-shrink-0 {\n    -webkit-flex-shrink: 0 !important;\n        -ms-flex-negative: 0 !important;\n            flex-shrink: 0 !important; }\n  .flex-xl-shrink-1 {\n    -webkit-flex-shrink: 1 !important;\n        -ms-flex-negative: 1 !important;\n            flex-shrink: 1 !important; }\n  .justify-content-xl-start {\n    -webkit-box-pack: start !important;\n    -webkit-justify-content: flex-start !important;\n        -ms-flex-pack: start !important;\n            justify-content: flex-start !important; }\n  .justify-content-xl-end {\n    -webkit-box-pack: end !important;\n    -webkit-justify-content: flex-end !important;\n        -ms-flex-pack: end !important;\n            justify-content: flex-end !important; }\n  .justify-content-xl-center {\n    -webkit-box-pack: center !important;\n    -webkit-justify-content: center !important;\n        -ms-flex-pack: center !important;\n            justify-content: center !important; }\n  .justify-content-xl-between {\n    -webkit-box-pack: justify !important;\n    -webkit-justify-content: space-between !important;\n        -ms-flex-pack: justify !important;\n            justify-content: space-between !important; }\n  .justify-content-xl-around {\n    -webkit-justify-content: space-around !important;\n        -ms-flex-pack: distribute !important;\n            justify-content: space-around !important; }\n  .align-items-xl-start {\n    -webkit-box-align: start !important;\n    -webkit-align-items: flex-start !important;\n        -ms-flex-align: start !important;\n            align-items: flex-start !important; }\n  .align-items-xl-end {\n    -webkit-box-align: end !important;\n    -webkit-align-items: flex-end !important;\n        -ms-flex-align: end !important;\n            align-items: flex-end !important; }\n  .align-items-xl-center {\n    -webkit-box-align: center !important;\n    -webkit-align-items: center !important;\n        -ms-flex-align: center !important;\n            align-items: center !important; }\n  .align-items-xl-baseline {\n    -webkit-box-align: baseline !important;\n    -webkit-align-items: baseline !important;\n        -ms-flex-align: baseline !important;\n            align-items: baseline !important; }\n  .align-items-xl-stretch {\n    -webkit-box-align: stretch !important;\n    -webkit-align-items: stretch !important;\n        -ms-flex-align: stretch !important;\n            align-items: stretch !important; }\n  .align-content-xl-start {\n    -webkit-align-content: flex-start !important;\n        -ms-flex-line-pack: start !important;\n            align-content: flex-start !important; }\n  .align-content-xl-end {\n    -webkit-align-content: flex-end !important;\n        -ms-flex-line-pack: end !important;\n            align-content: flex-end !important; }\n  .align-content-xl-center {\n    -webkit-align-content: center !important;\n        -ms-flex-line-pack: center !important;\n            align-content: center !important; }\n  .align-content-xl-between {\n    -webkit-align-content: space-between !important;\n        -ms-flex-line-pack: justify !important;\n            align-content: space-between !important; }\n  .align-content-xl-around {\n    -webkit-align-content: space-around !important;\n        -ms-flex-line-pack: distribute !important;\n            align-content: space-around !important; }\n  .align-content-xl-stretch {\n    -webkit-align-content: stretch !important;\n        -ms-flex-line-pack: stretch !important;\n            align-content: stretch !important; }\n  .align-self-xl-auto {\n    -webkit-align-self: auto !important;\n        -ms-flex-item-align: auto !important;\n                -ms-grid-row-align: auto !important;\n            align-self: auto !important; }\n  .align-self-xl-start {\n    -webkit-align-self: flex-start !important;\n        -ms-flex-item-align: start !important;\n            align-self: flex-start !important; }\n  .align-self-xl-end {\n    -webkit-align-self: flex-end !important;\n        -ms-flex-item-align: end !important;\n            align-self: flex-end !important; }\n  .align-self-xl-center {\n    -webkit-align-self: center !important;\n        -ms-flex-item-align: center !important;\n                -ms-grid-row-align: center !important;\n            align-self: center !important; }\n  .align-self-xl-baseline {\n    -webkit-align-self: baseline !important;\n        -ms-flex-item-align: baseline !important;\n            align-self: baseline !important; }\n  .align-self-xl-stretch {\n    -webkit-align-self: stretch !important;\n        -ms-flex-item-align: stretch !important;\n                -ms-grid-row-align: stretch !important;\n            align-self: stretch !important; } }\nheader {\n  position: absolute;\n  width: 100%;\n  color: #ffffff; }\nheader .navbar {\n    padding-top: 2.5rem;\n    padding-bottom: 2.5rem;\n    -webkit-transition: background-color 200ms linear;\n    transition: background-color 200ms linear;\n    width: 100%; }\n@media (max-width: 991.98px) {\n      header .navbar {\n        position: absolute; } }\nheader .navbar .navbar-toggler {\n      margin-left: auto;\n      padding: 0; }\nheader .navbar .navbar-toggler-icon {\n      background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(250, 250, 250, 1)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E\"); }\nheader .scrolled.navbar {\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    background-color: #303864; }\nheader .navbar-brand {\n    font-family: 'Nunito Sans';\n    margin-left: 0;\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n    -webkit-align-items: center;\n        -ms-flex-align: center;\n            align-items: center;\n    color: #ffffff; }\nheader .navbar-brand span {\n      margin-left: 1.43rem;\n      letter-spacing: 4px;\n      white-space: normal;\n      word-break: break-all;\n      font-size: 1.125rem;\n      font-weight: bold;\n      letter-spacing: 0.04rem; }\n@media (max-width: 575.98px) {\n        header .navbar-brand span {\n          letter-spacing: 0.2rem;\n          margin-left: 0.75rem; } }\nheader .navbar-dark .navbar-nav .nav-link {\n    font-family: 'Nunito Sans';\n    font-size: 0.875rem;\n    font-weight: 600;\n    font-style: normal;\n    font-stretch: normal;\n    line-height: normal;\n    letter-spacing: 0.25px;\n    color: #ffffff !important;\n    padding: 1rem 1.25rem !important; }\nheader .navbar-dark .navbar-nav .nav-link.nav-btn-gray {\n    background: transparent;\n    color: #63cab6 !important;\n    border: 2px solid #63cab6;\n    border-radius: 6px;\n    -webkit-backdrop-filter: blur(4.9px);\n            backdrop-filter: blur(4.9px);\n    -webkit-transition: all 100ms linear;\n    transition: all 100ms linear; }\nheader .navbar-dark .navbar-nav .nav-link.nav-btn-gray:hover {\n      background: #63cab6;\n      color: #ffffff !important; }\nheader .show-menu {\n    background: #ffffff;\n    color: #000000; }\nheader .main-icon-menu {\n    margin-top: -0.75rem; }\nheader .main-icon-menu img {\n      width: 2.812rem;\n      height: auto;\n      margin-right: 0; }\nheader .mini-container {\n    height: 100%;\n    font-family: 'Nunito Sans'; }\nheader .menu-footer {\n    position: absolute;\n    width: 100%;\n    bottom: -0vw;\n    left: 0;\n    text-align: center;\n    padding-bottom: 1.875rem;\n    font-size: 0.812rem; }\nheader .mini-dark {\n    background: #63cab6;\n    border-radius: 0.25rem;\n    font-family: 'Nunito Sans';\n    font-size: 0.75rem;\n    padding: 0.8rem 0; }\nheader .mini-light {\n    border: 2px solid #63cab6;\n    color: #63cab6 !important;\n    border-radius: 0.25rem;\n    font-family: 'Nunito Sans';\n    font-size: 0.75rem;\n    padding: 0.8rem 0; }\n.container {\n  max-width: 80.4rem; }\n"

/***/ }),

/***/ "./src/app/shared/components/header/header.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/header/header.component.ts ***!
  \**************************************************************/
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
        this.signOut = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.showMobileMenu = false;
    }
    HeaderComponent.prototype.openMobileMenu = function () {
        this.showMobileMenu = true;
    };
    HeaderComponent.prototype.closeMobileMenu = function () {
        this.showMobileMenu = false;
    };
    HeaderComponent.prototype.signOutClicked = function () {
        this.signOut.emit();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], HeaderComponent.prototype, "isLoggedIn", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], HeaderComponent.prototype, "navScrolled", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], HeaderComponent.prototype, "hideTitleMobile", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], HeaderComponent.prototype, "signOut", void 0);
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/shared/components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/shared/components/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/shared/data/enums/activity-type.enum.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/data/enums/activity-type.enum.ts ***!
  \*********************************************************/
/*! exports provided: ActivityType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivityType", function() { return ActivityType; });
var ActivityType;
(function (ActivityType) {
    ActivityType[ActivityType["ICO"] = 0] = "ICO";
    ActivityType[ActivityType["POLL"] = 1] = "POLL";
    ActivityType[ActivityType["REFERRAL"] = 2] = "REFERRAL";
})(ActivityType || (ActivityType = {}));


/***/ }),

/***/ "./src/app/shared/data/enums/index.ts":
/*!********************************************!*\
  !*** ./src/app/shared/data/enums/index.ts ***!
  \********************************************/
/*! exports provided: ActivityType, KycStatus, WalletTimeRange */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _activity_type_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./activity-type.enum */ "./src/app/shared/data/enums/activity-type.enum.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ActivityType", function() { return _activity_type_enum__WEBPACK_IMPORTED_MODULE_0__["ActivityType"]; });

/* harmony import */ var _kyc_status_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./kyc-status.enum */ "./src/app/shared/data/enums/kyc-status.enum.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KycStatus", function() { return _kyc_status_enum__WEBPACK_IMPORTED_MODULE_1__["KycStatus"]; });

/* harmony import */ var _wallet_time_range_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./wallet-time-range.enum */ "./src/app/shared/data/enums/wallet-time-range.enum.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WalletTimeRange", function() { return _wallet_time_range_enum__WEBPACK_IMPORTED_MODULE_2__["WalletTimeRange"]; });






/***/ }),

/***/ "./src/app/shared/data/enums/kyc-status.enum.ts":
/*!******************************************************!*\
  !*** ./src/app/shared/data/enums/kyc-status.enum.ts ***!
  \******************************************************/
/*! exports provided: KycStatus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KycStatus", function() { return KycStatus; });
var KycStatus;
(function (KycStatus) {
    KycStatus[KycStatus["UNDETERMINED"] = 0] = "UNDETERMINED";
    KycStatus[KycStatus["PASSED"] = 1] = "PASSED";
    KycStatus[KycStatus["REJECTED"] = 2] = "REJECTED";
    KycStatus[KycStatus["MULTIPLE_REJECTIONS"] = 3] = "MULTIPLE_REJECTIONS";
})(KycStatus || (KycStatus = {}));


/***/ }),

/***/ "./src/app/shared/data/enums/wallet-time-range.enum.ts":
/*!*************************************************************!*\
  !*** ./src/app/shared/data/enums/wallet-time-range.enum.ts ***!
  \*************************************************************/
/*! exports provided: WalletTimeRange */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WalletTimeRange", function() { return WalletTimeRange; });
var WalletTimeRange;
(function (WalletTimeRange) {
    WalletTimeRange["Hour"] = "hour";
    WalletTimeRange["Day"] = "day";
    WalletTimeRange["Week"] = "week";
    WalletTimeRange["Month"] = "month";
    WalletTimeRange["Year"] = "year";
})(WalletTimeRange || (WalletTimeRange = {}));


/***/ }),

/***/ "./src/app/shared/directives/button/button-cancel.directive.ts":
/*!*********************************************************************!*\
  !*** ./src/app/shared/directives/button/button-cancel.directive.ts ***!
  \*********************************************************************/
/*! exports provided: ButtonCancelDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonCancelDirective", function() { return ButtonCancelDirective; });
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

var ButtonCancelDirective = /** @class */ (function () {
    function ButtonCancelDirective() {
        this.elementClass = 'cancel-button';
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class'),
        __metadata("design:type", Object)
    ], ButtonCancelDirective.prototype, "elementClass", void 0);
    ButtonCancelDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appButtonCancel]'
        }),
        __metadata("design:paramtypes", [])
    ], ButtonCancelDirective);
    return ButtonCancelDirective;
}());



/***/ }),

/***/ "./src/app/shared/directives/button/button-confirm.directive.ts":
/*!**********************************************************************!*\
  !*** ./src/app/shared/directives/button/button-confirm.directive.ts ***!
  \**********************************************************************/
/*! exports provided: ButtonConfirmDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonConfirmDirective", function() { return ButtonConfirmDirective; });
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

var ButtonConfirmDirective = /** @class */ (function () {
    function ButtonConfirmDirective(elem) {
        this.elem = elem;
        this.elementClass = 'confirm-button';
    }
    ButtonConfirmDirective.prototype.ngOnInit = function () {
        var nativeElem = this.elem.nativeElement;
        nativeElem.innerHTML = "<i class=\"fa fa-check\"></i><span>" + nativeElem.innerHTML + "</span>";
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class'),
        __metadata("design:type", Object)
    ], ButtonConfirmDirective.prototype, "elementClass", void 0);
    ButtonConfirmDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appButtonConfirm]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], ButtonConfirmDirective);
    return ButtonConfirmDirective;
}());



/***/ }),

/***/ "./src/app/shared/directives/button/button-export.directive.ts":
/*!*********************************************************************!*\
  !*** ./src/app/shared/directives/button/button-export.directive.ts ***!
  \*********************************************************************/
/*! exports provided: ButtonExportDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonExportDirective", function() { return ButtonExportDirective; });
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

var ButtonExportDirective = /** @class */ (function () {
    function ButtonExportDirective(elem) {
        this.elem = elem;
        this.elementClass = 'export-button';
    }
    ButtonExportDirective.prototype.ngOnInit = function () {
        var nativeElem = this.elem.nativeElement;
        nativeElem.innerHTML = "<img src=\"assets/images/wallet/export.svg\"><span>" + nativeElem.innerHTML + "</span>";
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class'),
        __metadata("design:type", Object)
    ], ButtonExportDirective.prototype, "elementClass", void 0);
    ButtonExportDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appButtonExport]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], ButtonExportDirective);
    return ButtonExportDirective;
}());



/***/ }),

/***/ "./src/app/shared/directives/button/button-receive.directive.ts":
/*!**********************************************************************!*\
  !*** ./src/app/shared/directives/button/button-receive.directive.ts ***!
  \**********************************************************************/
/*! exports provided: ButtonReceiveDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonReceiveDirective", function() { return ButtonReceiveDirective; });
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

var ButtonReceiveDirective = /** @class */ (function () {
    function ButtonReceiveDirective(elem) {
        this.elem = elem;
        this.elementClass = 'receive-button';
    }
    ButtonReceiveDirective.prototype.ngOnInit = function () {
        var nativeElem = this.elem.nativeElement;
        nativeElem.innerHTML = "<i class=\"fa fa-download\"></i><span>" + nativeElem.innerHTML + "</span>";
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class'),
        __metadata("design:type", Object)
    ], ButtonReceiveDirective.prototype, "elementClass", void 0);
    ButtonReceiveDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appButtonReceive]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], ButtonReceiveDirective);
    return ButtonReceiveDirective;
}());



/***/ }),

/***/ "./src/app/shared/directives/button/button-share.directive.ts":
/*!********************************************************************!*\
  !*** ./src/app/shared/directives/button/button-share.directive.ts ***!
  \********************************************************************/
/*! exports provided: ButtonShareDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonShareDirective", function() { return ButtonShareDirective; });
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

var ButtonShareDirective = /** @class */ (function () {
    function ButtonShareDirective(elem) {
        this.elem = elem;
        this.elementClass = 'share-button';
    }
    ButtonShareDirective.prototype.ngOnInit = function () {
        var nativeElem = this.elem.nativeElement;
        nativeElem.innerHTML = "<i class=\"fa fa-share-alt\"></i><span>" + nativeElem.innerHTML + "</span>";
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class'),
        __metadata("design:type", Object)
    ], ButtonShareDirective.prototype, "elementClass", void 0);
    ButtonShareDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appButtonShare]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], ButtonShareDirective);
    return ButtonShareDirective;
}());



/***/ }),

/***/ "./src/app/shared/directives/button/button-transfer.directive.ts":
/*!***********************************************************************!*\
  !*** ./src/app/shared/directives/button/button-transfer.directive.ts ***!
  \***********************************************************************/
/*! exports provided: ButtonTransferDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonTransferDirective", function() { return ButtonTransferDirective; });
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

var ButtonTransferDirective = /** @class */ (function () {
    function ButtonTransferDirective(elem) {
        this.elem = elem;
        this.elementClass = 'transfer-button';
    }
    ButtonTransferDirective.prototype.ngOnInit = function () {
        var nativeElem = this.elem.nativeElement;
        nativeElem.innerHTML = "<i class=\"fa fa-exchange\"></i><span>" + nativeElem.innerHTML + "</span>";
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class'),
        __metadata("design:type", Object)
    ], ButtonTransferDirective.prototype, "elementClass", void 0);
    ButtonTransferDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appButtonTransfer]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], ButtonTransferDirective);
    return ButtonTransferDirective;
}());



/***/ }),

/***/ "./src/app/shared/directives/input/password-toggle.directive.ts":
/*!**********************************************************************!*\
  !*** ./src/app/shared/directives/input/password-toggle.directive.ts ***!
  \**********************************************************************/
/*! exports provided: PasswordToggleDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordToggleDirective", function() { return PasswordToggleDirective; });
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

// tslint:disable-next-line:max-line-length
var eye = 'data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQ4OC44NSA0ODguODUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ4OC44NSA0ODguODU7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iMTZweCIgaGVpZ2h0PSIxNnB4Ij4KPGc+Cgk8cGF0aCBkPSJNMjQ0LjQyNSw5OC43MjVjLTkzLjQsMC0xNzguMSw1MS4xLTI0MC42LDEzNC4xYy01LjEsNi44LTUuMSwxNi4zLDAsMjMuMWM2Mi41LDgzLjEsMTQ3LjIsMTM0LjIsMjQwLjYsMTM0LjIgICBzMTc4LjEtNTEuMSwyNDAuNi0xMzQuMWM1LjEtNi44LDUuMS0xNi4zLDAtMjMuMUM0MjIuNTI1LDE0OS44MjUsMzM3LjgyNSw5OC43MjUsMjQ0LjQyNSw5OC43MjV6IE0yNTEuMTI1LDM0Ny4wMjUgICBjLTYyLDMuOS0xMTMuMi00Ny4yLTEwOS4zLTEwOS4zYzMuMi01MS4yLDQ0LjctOTIuNyw5NS45LTk1LjljNjItMy45LDExMy4yLDQ3LjIsMTA5LjMsMTA5LjMgICBDMzQzLjcyNSwzMDIuMjI1LDMwMi4yMjUsMzQzLjcyNSwyNTEuMTI1LDM0Ny4wMjV6IE0yNDguMDI1LDI5OS42MjVjLTMzLjQsMi4xLTYxLTI1LjQtNTguOC01OC44YzEuNy0yNy42LDI0LjEtNDkuOSw1MS43LTUxLjcgICBjMzMuNC0yLjEsNjEsMjUuNCw1OC44LDU4LjhDMjk3LjkyNSwyNzUuNjI1LDI3NS41MjUsMjk3LjkyNSwyNDguMDI1LDI5OS42MjV6IiBmaWxsPSIjMDAwMDAwIi8+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg==';
// tslint:disable-next-line:max-line-length
var eyeCrossed = 'data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTcuMS4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDM3OS41NjEgMzc5LjU2MSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMzc5LjU2MSAzNzkuNTYxOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjE2cHgiIGhlaWdodD0iMTZweCI+CjxwYXRoIGQ9Ik0zMjAuODM4LDEyMS45MjljLTcuMzIxLTUuNjc3LTE1LjYwNC0xMS42MS0yNC42NjQtMTcuMzYyTDM0MS40OTgsNTguNmM2LjIwNC02LjI5Miw2LjEzMy0xNi40MjMtMC4xNi0yMi42MjcgIGMtNi4yOTItNi4yMDQtMTYuNDIyLTYuMTM0LTIyLjYyNiwwLjE1OUwyNjcuMTIsODguNDU2Yy0yMy4yNTMtMTEuMDE4LTQ5LjU4Ny0xOC45NjMtNzcuMTkyLTE4Ljk2M2wtMC45OTEsMC4wMDMgIGMtNTIuMjYyLDAuMzY5LTk5Ljk4MSwyOS45MzItMTMwLjgxLDU0LjY2N0MyNy42MzIsMTQ4LjYzMS0wLjA3MywxODAuMzIsMCwxOTAuNjQ5YzAuMDgyLDExLjcwMiwyNi45ODEsNDIuMjM0LDU4LjczNyw2Ni42NzEgIGM2LjY0Niw1LjExNCwxNS4wNzMsMTEuMTQ1LDI0Ljg3NSwxNy4yNDlMMzcuODcsMzIwLjk2MmMtNi4yMDQsNi4yOTItNi4xMzMsMTYuNDIzLDAuMTYsMjIuNjI3ICBjMy4xMTcsMy4wNzQsNy4xNzUsNC42MDcsMTEuMjMzLDQuNjA3YzQuMTMyLDAsOC4yNjMtMS41OTEsMTEuMzk0LTQuNzY2bDUyLjIxLTUyLjk1MWMyMi42NjYsMTAuNTM1LDQ5LjEwMSwxOC42NTEsNzYuNzUyLDE4LjY1MSAgbDEuMDA3LTAuMDAzYzU1LjUyNS0wLjM5MiwxMDUuNzc2LTMzLjU2NiwxMzAuNzg4LTUzLjMwN2MzMS42MDMtMjQuOTQyLDU4LjIzMS01Ni4wMTEsNTguMTQ4LTY3Ljg0NSAgQzM3OS40ODQsMTc2Ljk4OCwzNTIuMDQzLDE0Ni4xMjYsMzIwLjgzOCwxMjEuOTI5eiBNMTExLjMxNCwxODkuODY0Yy0wLjMwNS00My4zMzYsMzQuNTc4LTc4LjcxNCw3Ny45MTMtNzkuMDE5ICBjMTUuOTc1LTAuMTEzLDMwLjg2LDQuNTY5LDQzLjMxNCwxMi42ODFsLTEwNy45MzgsMTA5LjQ3QzExNi4zMTgsMjIwLjY1NywxMTEuNDI3LDIwNS44MzksMTExLjMxNCwxODkuODY0eiBNMTkwLjMzNCwyNjcuNzc3ICBjLTE1Ljc4NCwwLjExMS0zMC41LTQuNDYyLTQyLjg2My0xMi4zOTZsMTA3Ljc3Ny0xMDkuMzA4YzguMTA3LDEyLjI1LDEyLjg4NywyNi45LDEyLjk5OSw0Mi42ODQgIEMyNjguNTUyLDIzMi4wOTQsMjMzLjY2OSwyNjcuNDcyLDE5MC4zMzQsMjY3Ljc3N3oiIGZpbGw9IiMwMDAwMDAiLz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg==';
var PasswordToggleDirective = /** @class */ (function () {
    function PasswordToggleDirective(elem, renderer) {
        this.elem = elem;
        this.renderer = renderer;
        this.visible = false;
    }
    PasswordToggleDirective.prototype.ngOnInit = function () {
        var _this = this;
        var inputElem = this.elem.nativeElement;
        var parentElem = inputElem.parentElement;
        this.renderer.setStyle(parentElem, 'position', 'relative');
        var inputElemHeight = inputElem.offsetHeight;
        var inputElemTop = inputElem.offsetTop;
        this.renderer.setStyle(inputElem, 'padding-right', (inputElemHeight + 5) + 'px');
        // create toggle button
        var toggleElem = this.renderer.createElement('div');
        this.renderer.setStyle(toggleElem, 'position', 'absolute');
        // this.renderer.setStyle(toggleElem, 'top', inputElemTop + 'px');
        this.renderer.setStyle(toggleElem, 'top', '25%');
        this.renderer.setStyle(toggleElem, 'right', '0px');
        this.renderer.setStyle(toggleElem, 'width', inputElemHeight + 'px');
        this.renderer.setStyle(toggleElem, 'height', inputElemHeight + 'px');
        this.renderer.setStyle(toggleElem, 'cursor', 'pointer');
        this.renderer.setStyle(toggleElem, 'opacity', '0.6');
        this.renderer.setStyle(toggleElem, 'background-color', 'transparent');
        this.renderer.setStyle(toggleElem, 'background-repeat', 'no-repeat');
        this.renderer.setStyle(toggleElem, 'background-position', 'center center');
        this.renderer.setStyle(toggleElem, 'background-image', "url(" + eyeCrossed + ")");
        // append toggle element to input element holder
        this.renderer.appendChild(parentElem, toggleElem);
        // listen to click event on toggle button
        this.renderer.listen(toggleElem, 'click', function (event) {
            _this.visible = !_this.visible;
            _this.renderer.setStyle(toggleElem, 'background-image', "url(" + (_this.visible ? eye : eyeCrossed) + ")");
            _this.renderer.setAttribute(inputElem, 'type', _this.visible ? 'text' : 'password');
        });
    };
    PasswordToggleDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appPasswordToggle]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]])
    ], PasswordToggleDirective);
    return PasswordToggleDirective;
}());



/***/ }),

/***/ "./src/app/shared/pipes/filter-activity-type.pipe.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/pipes/filter-activity-type.pipe.ts ***!
  \***********************************************************/
/*! exports provided: FilterActivityTypePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterActivityTypePipe", function() { return FilterActivityTypePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterActivityTypePipe = /** @class */ (function () {
    function FilterActivityTypePipe() {
    }
    FilterActivityTypePipe.prototype.transform = function (activities, type) {
        if (type instanceof Array) {
            return activities.filter(function (activity) { return type.includes(activity.type); });
        }
        return activities.filter(function (activity) { return activity.type === type; });
    };
    FilterActivityTypePipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({ name: 'filterActivityType' })
    ], FilterActivityTypePipe);
    return FilterActivityTypePipe;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _app_shared_directives_input_password_toggle_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/shared/directives/input/password-toggle.directive */ "./src/app/shared/directives/input/password-toggle.directive.ts");
/* harmony import */ var _app_shared_directives_button_button_confirm_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/shared/directives/button/button-confirm.directive */ "./src/app/shared/directives/button/button-confirm.directive.ts");
/* harmony import */ var _app_shared_directives_button_button_cancel_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/shared/directives/button/button-cancel.directive */ "./src/app/shared/directives/button/button-cancel.directive.ts");
/* harmony import */ var _app_shared_directives_button_button_share_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/shared/directives/button/button-share.directive */ "./src/app/shared/directives/button/button-share.directive.ts");
/* harmony import */ var _app_shared_directives_button_button_receive_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/shared/directives/button/button-receive.directive */ "./src/app/shared/directives/button/button-receive.directive.ts");
/* harmony import */ var _app_shared_directives_button_button_transfer_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/shared/directives/button/button-transfer.directive */ "./src/app/shared/directives/button/button-transfer.directive.ts");
/* harmony import */ var _app_shared_directives_button_button_export_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @app/shared/directives/button/button-export.directive */ "./src/app/shared/directives/button/button-export.directive.ts");
/* harmony import */ var _components_bottom_nav_bottom_nav_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/bottom-nav/bottom-nav.component */ "./src/app/shared/components/bottom-nav/bottom-nav.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _app_shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @app/shared/components/header/header.component */ "./src/app/shared/components/header/header.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_shared_carousel_carousel_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @app/shared/carousel/carousel.module */ "./src/app/shared/carousel/carousel.module.ts");
/* harmony import */ var _pipes_filter_activity_type_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pipes/filter-activity-type.pipe */ "./src/app/shared/pipes/filter-activity-type.pipe.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatToolbarModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterModule"]
            ],
            declarations: [
                _app_shared_directives_input_password_toggle_directive__WEBPACK_IMPORTED_MODULE_2__["PasswordToggleDirective"],
                _app_shared_directives_button_button_confirm_directive__WEBPACK_IMPORTED_MODULE_3__["ButtonConfirmDirective"],
                _app_shared_directives_button_button_cancel_directive__WEBPACK_IMPORTED_MODULE_4__["ButtonCancelDirective"],
                _app_shared_directives_button_button_share_directive__WEBPACK_IMPORTED_MODULE_5__["ButtonShareDirective"],
                _app_shared_directives_button_button_receive_directive__WEBPACK_IMPORTED_MODULE_6__["ButtonReceiveDirective"],
                _app_shared_directives_button_button_transfer_directive__WEBPACK_IMPORTED_MODULE_7__["ButtonTransferDirective"],
                _app_shared_directives_button_button_export_directive__WEBPACK_IMPORTED_MODULE_8__["ButtonExportDirective"],
                _components_bottom_nav_bottom_nav_component__WEBPACK_IMPORTED_MODULE_9__["BottomNavComponent"],
                _app_shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_11__["HeaderComponent"],
                _pipes_filter_activity_type_pipe__WEBPACK_IMPORTED_MODULE_14__["FilterActivityTypePipe"]
            ],
            exports: [
                _app_shared_directives_input_password_toggle_directive__WEBPACK_IMPORTED_MODULE_2__["PasswordToggleDirective"],
                _app_shared_directives_button_button_confirm_directive__WEBPACK_IMPORTED_MODULE_3__["ButtonConfirmDirective"],
                _app_shared_directives_button_button_cancel_directive__WEBPACK_IMPORTED_MODULE_4__["ButtonCancelDirective"],
                _app_shared_directives_button_button_share_directive__WEBPACK_IMPORTED_MODULE_5__["ButtonShareDirective"],
                _app_shared_directives_button_button_receive_directive__WEBPACK_IMPORTED_MODULE_6__["ButtonReceiveDirective"],
                _app_shared_directives_button_button_transfer_directive__WEBPACK_IMPORTED_MODULE_7__["ButtonTransferDirective"],
                _app_shared_directives_button_button_export_directive__WEBPACK_IMPORTED_MODULE_8__["ButtonExportDirective"],
                _components_bottom_nav_bottom_nav_component__WEBPACK_IMPORTED_MODULE_9__["BottomNavComponent"],
                _app_shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_11__["HeaderComponent"],
                _app_shared_carousel_carousel_module__WEBPACK_IMPORTED_MODULE_13__["CarouselModule"]
            ]
        })
    ], SharedModule);
    return SharedModule;
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
    production: false,
    // backendEndpoint: 'http://localhost:5000', // 'https://instar-wallet-devel.herokuapp.com',
    backendEndpoint: 'https://instar-wallet-devel.herokuapp.com',
    reCaptchaSiteKey: '6Lf4O20UAAAAAB_EglpaCHEF1SS1IVUpzGKVQebh',
    branchioKey: 'key_test_fny9AsdJWPrzVPvNrmQErfilrsbf3W8N'
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

module.exports = __webpack_require__(/*! /home/shumik/Documents/Instarweb/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map