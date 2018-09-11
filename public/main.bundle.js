webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export appRoutes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ipq_ipq_component__ = __webpack_require__("../../../../../src/app/ipq/ipq.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__personal_information_personal_information_component__ = __webpack_require__("../../../../../src/app/personal-information/personal-information.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__checkout_checkout_component__ = __webpack_require__("../../../../../src/app/checkout/checkout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__thank_you_page_thank_you_page_component__ = __webpack_require__("../../../../../src/app/thank-you-page/thank-you-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__workflow_workflow_guard_service__ = __webpack_require__("../../../../../src/app/workflow/workflow-guard.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


//import { FaceToFaceComponent }    from './face-to-face/face-to-face.component';

//import { WorkComponent }        from './work/work.component';

//import { AddressComponent }     from './address/address.component';



var appRoutes = [
    // 1st Route
    { path: 'ipq', component: __WEBPACK_IMPORTED_MODULE_2__ipq_ipq_component__["a" /* IpqComponent */] },
    // 2nd Route
    //{ path: 'work',  component: WorkComponent, canActivate: [WorkflowGuard] },
    { path: 'personalinformation', component: __WEBPACK_IMPORTED_MODULE_3__personal_information_personal_information_component__["a" /* PersonalInformationComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_6__workflow_workflow_guard_service__["a" /* WorkflowGuard */]] },
    // 3rd Route
    //{ path: 'address',  component: AddressComponent, canActivate: [WorkflowGuard] },
    // 4th Route
    { path: 'checkout', component: __WEBPACK_IMPORTED_MODULE_4__checkout_checkout_component__["a" /* CheckoutComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_6__workflow_workflow_guard_service__["a" /* WorkflowGuard */]] },
    // 5th Route
    { path: '', redirectTo: '/ipq', pathMatch: 'full' },
    // 6th Route
    { path: 'thanks', component: __WEBPACK_IMPORTED_MODULE_5__thank_you_page_thank_you_page_component__["a" /* ThankYouPageComponent */] },
    // 7th Route
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_2__ipq_ipq_component__["a" /* IpqComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(appRoutes, { useHash: true })],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]],
        providers: [__WEBPACK_IMPORTED_MODULE_6__workflow_workflow_guard_service__["a" /* WorkflowGuard */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<section>\r\n  <div class=\"container\">\r\n      <div class=\"board\">\r\n          <!-- Navigation Area (Circular Tabs) -->\r\n          <msw-navbar></msw-navbar>\r\n          <!-- End Navigation Area (Circular Tabs) -->\r\n\r\n          <!-- Content Area -->\r\n          <div class=\"tab-content\">\r\n              <!-- Nested view  -->\r\n              <router-outlet></router-outlet>\r\n          </div>\r\n          <!-- End Content Area -->\r\n      </div>\r\n\r\n      <!-- For Debugging: show our valid formData -->\r\n      <!--pre>{{ formData | json }}</pre-->\r\n  </div>\r\n</section>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_formData_service__ = __webpack_require__("../../../../../src/app/data/formData.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(formDataService) {
        this.formDataService = formDataService;
        this.title = 'Multi-Step Wizard';
    }
    AppComponent.prototype.ngOnInit = function () {
        this.formData = this.formDataService.getFormData();
        console.log(this.title + ' loaded!');
    };
    return AppComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], AppComponent.prototype, "formData", void 0);
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'multi-step-wizard-app',
        template: __webpack_require__("../../../../../src/app/app.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__data_formData_service__["a" /* FormDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__data_formData_service__["a" /* FormDataService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__navbar_navbar_component__ = __webpack_require__("../../../../../src/app/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__face_to_face_face_to_face_component__ = __webpack_require__("../../../../../src/app/face-to-face/face-to-face.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ipq_ipq_component__ = __webpack_require__("../../../../../src/app/ipq/ipq.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__personal_information_personal_information_component__ = __webpack_require__("../../../../../src/app/personal-information/personal-information.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__checkout_checkout_component__ = __webpack_require__("../../../../../src/app/checkout/checkout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__review_information_review_information_component__ = __webpack_require__("../../../../../src/app/review-information/review-information.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__term_condition_term_condition_component__ = __webpack_require__("../../../../../src/app/term-condition/term-condition.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__data_formData_service__ = __webpack_require__("../../../../../src/app/data/formData.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__workflow_workflow_service__ = __webpack_require__("../../../../../src/app/workflow/workflow.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ngx_bootstrap__ = __webpack_require__("../../../../ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__checkout_deposit_modal_deposit_modal_component__ = __webpack_require__("../../../../../src/app/checkout/deposit-modal/deposit-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__checkout_prosperity_modal_prosperity_modal_component__ = __webpack_require__("../../../../../src/app/checkout/prosperity-modal/prosperity-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__thank_you_page_thank_you_page_component__ = __webpack_require__("../../../../../src/app/thank-you-page/thank-you-page.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



/* App Root */


/* Feature Components */



//import { AddressComponent }   from './address/address.component';



/* Routing Module */

/* Shared Service */







var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_14_ngx_bootstrap__["b" /* ModalModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_11__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_14_ngx_bootstrap__["c" /* TooltipModule */].forRoot()
        ],
        providers: [{ provide: __WEBPACK_IMPORTED_MODULE_12__data_formData_service__["a" /* FormDataService */], useClass: __WEBPACK_IMPORTED_MODULE_12__data_formData_service__["a" /* FormDataService */] },
            { provide: __WEBPACK_IMPORTED_MODULE_13__workflow_workflow_service__["a" /* WorkflowService */], useClass: __WEBPACK_IMPORTED_MODULE_13__workflow_workflow_service__["a" /* WorkflowService */] },
            { provide: __WEBPACK_IMPORTED_MODULE_14_ngx_bootstrap__["a" /* BsModalRef */], useClass: __WEBPACK_IMPORTED_MODULE_14_ngx_bootstrap__["a" /* BsModalRef */] }],
        //declarations: [ AppComponent, NavbarComponent, PersonalComponent, WorkComponent, PersonalInformationComponent, AddressComponent, ResultComponent ],
        declarations: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */], __WEBPACK_IMPORTED_MODULE_4__navbar_navbar_component__["a" /* NavbarComponent */], __WEBPACK_IMPORTED_MODULE_5__face_to_face_face_to_face_component__["a" /* FaceToFaceComponent */], __WEBPACK_IMPORTED_MODULE_6__ipq_ipq_component__["a" /* IpqComponent */], __WEBPACK_IMPORTED_MODULE_7__personal_information_personal_information_component__["a" /* PersonalInformationComponent */], __WEBPACK_IMPORTED_MODULE_8__checkout_checkout_component__["a" /* CheckoutComponent */], __WEBPACK_IMPORTED_MODULE_9__review_information_review_information_component__["a" /* ReviewInformationComponent */], __WEBPACK_IMPORTED_MODULE_10__term_condition_term_condition_component__["a" /* TermsConditionComponent */], __WEBPACK_IMPORTED_MODULE_15__checkout_deposit_modal_deposit_modal_component__["a" /* DepositModalComponent */], __WEBPACK_IMPORTED_MODULE_16__checkout_prosperity_modal_prosperity_modal_component__["a" /* ProsperityModalComponent */], __WEBPACK_IMPORTED_MODULE_17__thank_you_page_thank_you_page_component__["a" /* ThankYouPageComponent */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_9__review_information_review_information_component__["a" /* ReviewInformationComponent */],
            __WEBPACK_IMPORTED_MODULE_10__term_condition_term_condition_component__["a" /* TermsConditionComponent */],
            __WEBPACK_IMPORTED_MODULE_5__face_to_face_face_to_face_component__["a" /* FaceToFaceComponent */],
            __WEBPACK_IMPORTED_MODULE_15__checkout_deposit_modal_deposit_modal_component__["a" /* DepositModalComponent */],
            __WEBPACK_IMPORTED_MODULE_16__checkout_prosperity_modal_prosperity_modal_component__["a" /* ProsperityModalComponent */],
            __WEBPACK_IMPORTED_MODULE_17__thank_you_page_thank_you_page_component__["a" /* ThankYouPageComponent */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/checkout/checkout.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"tab-pane fade in active\">\r\n    <!--h3 class=\"head text-center\">{{title}}</h3-->\r\n    <!--h3 class=\"head text-center\">TERMS AND CONITIONS</h3>\r\n    <div class=\"p-4 declaration-modal-content bg-grey\">\r\n\r\n        <div class=\"declaration-text pr-4\">\r\n            <h4 class=\"pb-20\">I. SECTION 1</h4>\r\n            <div class=\"pb-2 client-declaration-common-font\">\r\n                I understand that this FNA is based on information and data which I provided.The FNA is designed to help me assess my financial\r\n                needs,which I know will change over time depending on my life stage and objectives.Therefore any suggestions\r\n                and recommendations in the FNA are not guaranteed and complete, and are general advice based on my current\r\n                situation.The FNA does not require me to implement any suggestions and recommendations therein.\r\n            </div>\r\n            <div class=\"pb-2 client-declaration-common-font\">\r\n                I understand that this FNA is based on information and data which I provided.The FNA is designed to help me assess my financial\r\n                needs,which I know will change over time depending on my life stage and objectives.Therefore any suggestions\r\n                and recommendations in the FNA are not guaranteed and complete, and are general advice based on my current\r\n                situation.The FNA does not require me to implement any suggestions and recommendations therein.\r\n            </div>\r\n            <div class=\"pb-2 client-declaration-common-font\">\r\n                I understand that this FNA is based on information and data which I provided.The FNA is designed to help me assess my financial\r\n                needs,which I know will change over time depending on my life stage and objectives.Therefore any suggestions\r\n                and recommendations in the FNA are not guaranteed and complete, and are general advice based on my current\r\n                situation.The FNA does not require me to implement any suggestions and recommendations therein.\r\n            </div>\r\n            <div class=\"pb-2 client-declaration-common-font\">\r\n                I understand that this FNA is based on information and data which I provided.The FNA is designed to help me assess my financial\r\n                needs,which I know will change over time depending on my life stage and objectives.Therefore any suggestions\r\n                and recommendations in the FNA are not guaranteed and complete, and are general advice based on my current\r\n                situation.The FNA does not require me to implement any suggestions and recommendations therein.\r\n            </div>\r\n            <div class=\"pb-2 client-declaration-common-font\">\r\n                I understand that this FNA is based on information and data which I provided.The FNA is designed to help me assess my financial\r\n                needs,which I know will change over time depending on my life stage and objectives.Therefore any suggestions\r\n                and recommendations in the FNA are not guaranteed and complete, and are general advice based on my current\r\n                situation.The FNA does not require me to implement any suggestions and recommendations therein.\r\n            </div>\r\n            <div class=\"pb-2 client-declaration-common-font\">\r\n                I understand that this FNA is based on information and data which I provided.The FNA is designed to help me assess my financial\r\n                needs,which I know will change over time depending on my life stage and objectives.Therefore any suggestions\r\n                and recommendations in the FNA are not guaranteed and complete, and are general advice based on my current\r\n                situation.The FNA does not require me to implement any suggestions and recommendations therein.\r\n            </div>\r\n            <div class=\"pb-2 client-declaration-common-font\">\r\n                I understand that this FNA is based on information and data which I provided.The FNA is designed to help me assess my financial\r\n                needs,which I know will change over time depending on my life stage and objectives.Therefore any suggestions\r\n                and recommendations in the FNA are not guaranteed and complete, and are general advice based on my current\r\n                situation.The FNA does not require me to implement any suggestions and recommendations therein.\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"text-center top-bottom-space\">\r\n        <button class=\"btn btn-outline-rounded btn-default\">Cancel</button>\r\n        <!--button class=\"btn btn-outline-rounded btn-info\" [disabled]=\"!personaldataForm.valid\" (click)=\"goToNext(workForm)\"> Next <span style=\"margin-left:10px;\" class=\"glyphicon glyphicon-arrow-right\"></span></button-->\r\n    <!--button class=\"btn btn-outline-rounded btn-info\">Accept</button>\r\n\r\n    </div-->\r\n    <h3 class=\"head text-center\">SELECT PAYMENT METHOD</h3>\r\n    <div class=\"row\">\r\n        <div class=\"col-md-3 col-lg-3 col-sm-6 col-xs-12\">\r\n            <div (click)=\"oprenDepositModal()\" class=\"box-line\">\r\n                <img src=\"assets/images/bank.png\">\r\n                <h2>bank transfer <br /> and deposit</h2>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-3 col-lg-3 col-sm-6 col-xs-12\">\r\n            <div (click)=\"oprenProsperityModal()\" class=\"box-line\">\r\n                <img src=\"assets/images/card.png\">\r\n                <h2>slf prosperity card</h2>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-3 col-lg-3 col-sm-6 col-xs-12\">\r\n            <div routerLink=\"/thanks\" class=\"box-line\">\r\n                <img src=\"assets/images/online.png\">\r\n                <h2>online payment</h2>\r\n            </div>\r\n            <div class=\"text-center varification-sub-title\">\r\n                You will be redirected to our payment gateway\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-3 col-lg-3 col-sm-6 col-xs-12\">\r\n            <div class=\"box-line\">\r\n                <img src=\"assets/images/bldg.png\">\r\n                <h2>slf financial store</h2>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n    <!--div class=\"text-center\">\r\n            <button class=\"btn btn-success btn-outline-rounded\" [disabled]=\"!isFormValid\" (click)=\"submit()\"> Submit\r\n                <span style=\"margin-left:10px;\" class=\"glyphicon glyphicon-arrow-right\"></span>\r\n            </button>\r\n        </div-->"

/***/ }),

/***/ "../../../../../src/app/checkout/checkout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_formData_model__ = __webpack_require__("../../../../../src/app/data/formData.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_formData_service__ = __webpack_require__("../../../../../src/app/data/formData.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap_modal__ = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_modal_bs_modal_ref_service__ = __webpack_require__("../../../../ngx-bootstrap/modal/bs-modal-ref.service.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__deposit_modal_deposit_modal_component__ = __webpack_require__("../../../../../src/app/checkout/deposit-modal/deposit-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__prosperity_modal_prosperity_modal_component__ = __webpack_require__("../../../../../src/app/checkout/prosperity-modal/prosperity-modal.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CheckoutComponent = (function () {
    function CheckoutComponent(formDataService, modalService, bsModalRef) {
        this.formDataService = formDataService;
        this.modalService = modalService;
        this.bsModalRef = bsModalRef;
        this.title = 'SELECT PAYMENT METHOD';
        this.isFormValid = false;
    }
    CheckoutComponent.prototype.ngOnInit = function () {
        this.formData = this.formDataService.getFormData();
        this.isFormValid = this.formDataService.isFormValid();
        console.log('Result feature loaded!');
    };
    CheckoutComponent.prototype.submit = function () {
        alert('Excellent Job!');
        this.formData = this.formDataService.resetFormData();
        this.isFormValid = false;
    };
    CheckoutComponent.prototype.oprenDepositModal = function () {
        this.bsModalRef.hide();
        var initialState = {
            title: 'TERMS AND CONDITION',
        };
        this.bsModalRef = this.modalService.show(__WEBPACK_IMPORTED_MODULE_5__deposit_modal_deposit_modal_component__["a" /* DepositModalComponent */], { initialState: initialState, class: 'modal-md deposit-modal-modal' });
    };
    CheckoutComponent.prototype.oprenProsperityModal = function () {
        this.bsModalRef.hide();
        var initialState = {
            title: 'TERMS AND CONDITION',
        };
        this.bsModalRef = this.modalService.show(__WEBPACK_IMPORTED_MODULE_6__prosperity_modal_prosperity_modal_component__["a" /* ProsperityModalComponent */], { initialState: initialState, class: 'modal-md prosperity-modal-modal' });
    };
    return CheckoutComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__data_formData_model__["a" /* FormData */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__data_formData_model__["a" /* FormData */]) === "function" && _a || Object)
], CheckoutComponent.prototype, "formData", void 0);
CheckoutComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'mt-wizard-result',
        template: __webpack_require__("../../../../../src/app/checkout/checkout.component.html"),
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__data_formData_service__["a" /* FormDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__data_formData_service__["a" /* FormDataService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap_modal__["b" /* BsModalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap_modal__["b" /* BsModalService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_modal_bs_modal_ref_service__["a" /* BsModalRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_modal_bs_modal_ref_service__["a" /* BsModalRef */]) === "function" && _d || Object])
], CheckoutComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=checkout.component.js.map

/***/ }),

/***/ "../../../../../src/app/checkout/deposit-modal/deposit-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"term-conditions\">\n  <div class=\"modal-body\">\n    <div (click)=\"bsModalRef.hide()\" class=\"close-icon\">\n      <i class=\"fa fa-times\"></i>\n    </div>\n    <div class=\"heading text-blue\">\n      Validated Deposit Slip(VDS) Playment Window\n    </div>\n    <h6 class=\"text-center text\">\n      Please upload VDS as proof of chash payment\n    </h6>\n    <div class=\"text-center df-wrap jc-c ai-c\">\n      <div class=\"upload-wrap df ai-c\">\n        <label for=\"upload\">\n          Browse\n        </label>\n        <input class=\"input-md custom-input ekycidProof\" required id=\"upload\" name=\"upload\" type=\"file\">\n        <div class=\"fild\">\n          Upload a VDS\n        </div>\n      </div>\n      <div class=\"text-blue\">\n        Depository Banks\n      </div>\n    </div>\n\n    <div class=\"table\">\n      <div class=\"row-table \">\n        <div class=\"left-items\">\n          <div class=\"bank-col bold\">\n            Bank\n          </div>\n        </div>\n        <div class=\"right-items\">\n          <div class=\"type-col bold\">\n            Type\n          </div>\n          <div class=\"acc-col bold\">\n            Bank acconut no.\n          </div>\n        </div>\n      </div>\n      <div class=\"row-table \">\n          <div class=\"left-items\">\n            <div class=\"bank-col\">\n                Bank of Philippine Islands\n            </div>\n          </div>\n          <div class=\"right-items\">\n            <div class=\"type-col\">\n              Type\n            </div>\n            <div class=\"acc-col\">\n              12-12331-23452\n            </div>\n          </div>\n        </div>\n        <div class=\"row-table \">\n            <div class=\"left-items\">\n              <div class=\"bank-col\">\n                Bank\n              </div>\n            </div>\n            <div class=\"right-items\">\n              <div class=\"type-col\">\n                Type\n              </div>\n              <div class=\"acc-col\">\n                Bank acconut no.\n              </div>\n            </div>\n          </div>\n          <div class=\"row-table \">\n        <div class=\"left-items\">\n          <div class=\"bank-col\">\n            Bank\n          </div>\n        </div>\n        <div class=\"right-items\">\n          <div class=\"type-col\">\n            Type\n          </div>\n          <div class=\"acc-col\">\n            Bank acconut no.\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"text-center\">\n      <button type=\"button\" class=\"btn btn-outline-rounded btn-info\" (click)=\"paymentMethod()\">Next</button>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/checkout/deposit-modal/deposit-modal.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".term-conditions .modal-footer {\n  -ms-flex-pack: center;\n      justify-content: center;\n  border: 0px; }\n\n.term-conditions .declaration-text {\n  overflow: auto;\n  max-height: 400px;\n  text-align: justify; }\n\n.term-conditions .modal-footer {\n  -ms-flex-pack: center;\n      justify-content: center;\n  border: 0px;\n  text-align: center;\n  padding-bottom: 50px; }\n  .term-conditions .modal-footer .btn-outline-rounded {\n    margin: 0; }\n  .term-conditions .modal-footer button {\n    width: 200px; }\n\n.term-conditions .client-declaration-common-font {\n  font-size: 13px; }\n  .term-conditions .client-declaration-common-font span {\n    word-wrap: break-word; }\n\n.term-conditions .declaration-modal-content {\n  border: 1px solid;\n  padding: 10px; }\n\n/* width */\n::-webkit-scrollbar {\n  width: 15px; }\n\n/* Track */\n::-webkit-scrollbar-track {\n  background: #fff; }\n\n/* Handle */\n::-webkit-scrollbar-thumb {\n  background: #ccc;\n  border-radius: 10px; }\n\n/* Handle on hover */\n::-webkit-scrollbar-thumb:hover {\n  background: #ccc; }\n\n.modal-body {\n  position: relative; }\n\n.close-icon {\n  font-size: 10px;\n  position: absolute;\n  right: 5px;\n  top: 5px;\n  color: #cacaca;\n  cursor: pointer; }\n\n.heading {\n  margin-top: -10px; }\n\n.text-blue {\n  color: #575d8f;\n  font-weight: bold;\n  font-size: 13px; }\n\n.text {\n  color: #757575;\n  margin: 40px 0;\n  font-size: 14px; }\n\n.upload-wrap {\n  margin-right: 44px; }\n  .upload-wrap input {\n    display: none; }\n  .upload-wrap label {\n    margin: 0;\n    padding: 10px;\n    background: #ededee;\n    color: #5b6268;\n    font-weight: 600;\n    font-size: 12px;\n    border-radius: 5px 0 0 5px;\n    border: 1px solid #d2d2d2;\n    border-right: 0;\n    cursor: pointer; }\n  .upload-wrap .fild {\n    padding: 10px;\n    background: white;\n    border: 1px solid #d2d2d2;\n    font-size: 12px;\n    font-style: italic;\n    color: #b0a39e;\n    border-radius: 5px;\n    width: 217px;\n    max-width: 320px;\n    text-align: left; }\n\n.row-table {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n      align-items: center;\n  -ms-flex-pack: justify;\n      justify-content: space-between;\n  padding: 10px 10px;\n  border-bottom: 2px solid #e3e3e3; }\n  .row-table .left-items .bank-col {\n    width: 170px;\n    min-width: 170px; }\n  .row-table .right-items {\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-align: center;\n        align-items: center; }\n    .row-table .right-items .type-col {\n      width: 65px;\n      min-width: 65px; }\n    .row-table .right-items .acc-col {\n      width: 122px;\n      min-width: 122px; }\n\n.bold {\n  font-weight: bold; }\n\n.table {\n  max-width: 440px;\n  margin-left: 20px;\n  margin-top: 20px; }\n\nbutton {\n  width: 164px;\n  border-radius: 10px;\n  border-width: 1px;\n  font-size: 12px;\n  font-weight: bold;\n  padding: 13px; }\n\n@media screen and (min-width: 400px) and (max-width: 480px) {\n  .term-conditions .modal-footer button {\n    width: 160px; } }\n\n@media screen and (max-width: 400px) {\n  .term-conditions .modal-footer button {\n    width: 134px; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/checkout/deposit-modal/deposit-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DepositModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap_modal_bs_modal_ref_service__ = __webpack_require__("../../../../ngx-bootstrap/modal/bs-modal-ref.service.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DepositModalComponent = (function () {
    function DepositModalComponent(router, bsModalRef) {
        this.router = router;
        this.bsModalRef = bsModalRef;
        this.title = '';
    }
    DepositModalComponent.prototype.ngOnInit = function () {
    };
    DepositModalComponent.prototype.paymentMethod = function () {
        this.bsModalRef.hide();
        this.router.navigate(['/checkout']);
    };
    return DepositModalComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], DepositModalComponent.prototype, "title", void 0);
DepositModalComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-deposit-modal',
        template: __webpack_require__("../../../../../src/app/checkout/deposit-modal/deposit-modal.component.html"),
        styles: [__webpack_require__("../../../../../src/app/checkout/deposit-modal/deposit-modal.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap_modal_bs_modal_ref_service__["a" /* BsModalRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap_modal_bs_modal_ref_service__["a" /* BsModalRef */]) === "function" && _b || Object])
], DepositModalComponent);

var _a, _b;
//# sourceMappingURL=deposit-modal.component.js.map

/***/ }),

/***/ "../../../../../src/app/checkout/prosperity-modal/prosperity-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"term-conditions\">\n  <div class=\"modal-body\">\n    <div (click)=\"bsModalRef.hide()\" class=\"close-icon\">\n      <i class=\"fa fa-times\"></i>\n    </div>\n    <div class=\"\">\n      Sun Life Prosperity Card (SPC) Payment Window\n    </div>\n    <h6 class=\"text-center text\">\n      Please enter Sun Life Prosperity Card information\n    </h6>\n    <div class=\"row m-b-10\">\n      <div class=\"col-sm-5\">\n        <div class=\"text-center bold\">\n          Card Number\n        </div>\n      </div>\n      <div class=\"col-sm-5\">\n        <div class=\"text-center bold\">\n          Security Code\n        </div>\n      </div>\n      <div class=\"col-sm-2\">\n        <div>\n\n        </div>\n      </div>\n    </div>\n\n    <div class=\"row ai-c df row-input\">\n      <div class=\"col-sm-5\">\n        <div>\n          <input class=\"form-control custom-input\" type=\"text\">\n        </div>\n      </div>\n      <div class=\"col-sm-5\">\n        <div>\n          <input class=\"form-control custom-input\" type=\"text\">\n        </div>\n      </div>\n      <div class=\"col-sm-2 p-0\">\n        <div class=\"icon-add-remove text-center\" (click)=\"addNewItem($event)\">\n          <i class=\"fa fa-plus\"></i>\n          Add\n        </div>\n      </div>\n    </div>\n\n    <div  *ngFor=\"let item of items; let idx = index\" class=\"row ai-c df row-input\">\n        <div class=\"col-sm-5\">\n          <div>\n            <input class=\"form-control custom-input\" type=\"text\">\n          </div>\n        </div>\n        <div class=\"col-sm-5\">\n          <div>\n            <input class=\"form-control custom-input\" type=\"text\">\n          </div>\n        </div>\n        <div class=\"col-sm-2 p-0\">\n          <div class=\"icon-add-remove text-center\" (click)=\"detaleItem(item)\">\n            <i class=\"fa fa-minus\"></i>\n            Remove\n          </div>\n        </div>\n      </div>\n\n    <div class=\"text-center comment\">\n      Sun Life Prosperity Card investments should be in denominations of PHP 5,000.00 (e.g. PHP 10,000.00 incestments need two Prosperity Card, PHP 12,000.00 cannot be processed)\n    </div>\n\n    <div class=\"modal-footer\">\n      <button type=\"button\" class=\"btn btn-outline-rounded btn-default\" (click)=\"bsModalRef.hide()\">Back</button>\n      <button type=\"button\" class=\"btn btn-outline-rounded btn-info\" (click)=\"paymentMethod()\">Next</button>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/checkout/prosperity-modal/prosperity-modal.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".term-conditions .modal-footer {\n  -ms-flex-pack: center;\n      justify-content: center;\n  border: 0px; }\n\n.term-conditions .declaration-text {\n  overflow: auto;\n  max-height: 400px;\n  text-align: justify; }\n\n.term-conditions .modal-footer {\n  -ms-flex-pack: center;\n      justify-content: center;\n  border: 0px;\n  text-align: center;\n  padding-bottom: 50px; }\n  .term-conditions .modal-footer .btn-outline-rounded {\n    margin: 0; }\n  .term-conditions .modal-footer button {\n    width: 200px; }\n\n.term-conditions .client-declaration-common-font {\n  font-size: 13px; }\n  .term-conditions .client-declaration-common-font span {\n    word-wrap: break-word; }\n\n.term-conditions .declaration-modal-content {\n  border: 1px solid;\n  padding: 10px; }\n\n/* width */\n::-webkit-scrollbar {\n  width: 15px; }\n\n/* Track */\n::-webkit-scrollbar-track {\n  background: #fff; }\n\n/* Handle */\n::-webkit-scrollbar-thumb {\n  background: #ccc;\n  border-radius: 10px; }\n\n/* Handle on hover */\n::-webkit-scrollbar-thumb:hover {\n  background: #ccc; }\n\n.modal-body {\n  position: relative; }\n\n.close-icon {\n  font-size: 10px;\n  position: absolute;\n  right: 5px;\n  top: 5px;\n  color: #cacaca;\n  cursor: pointer; }\n\n.heading {\n  margin-top: -10px; }\n\n.text-blue {\n  color: #575d8f;\n  font-weight: bold;\n  font-size: 13px; }\n\n.text {\n  color: #757575;\n  margin: 40px 0;\n  font-size: 14px; }\n\n.upload-wrap {\n  margin-right: 44px; }\n  .upload-wrap input {\n    display: none; }\n  .upload-wrap label {\n    margin: 0;\n    padding: 10px;\n    background: #ededee;\n    color: #5b6268;\n    font-weight: 600;\n    font-size: 12px;\n    border-radius: 5px 0 0 5px;\n    border: 1px solid #d2d2d2;\n    border-right: 0; }\n  .upload-wrap .fild {\n    padding: 10px;\n    background: white;\n    border: 1px solid #d2d2d2;\n    font-size: 12px;\n    font-style: italic;\n    color: #b0a39e;\n    border-radius: 5px;\n    width: 217px;\n    max-width: 320px;\n    text-align: left; }\n\n.row-table {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n      align-items: center;\n  -ms-flex-pack: justify;\n      justify-content: space-between;\n  padding: 10px 10px;\n  border-bottom: 2px solid #e3e3e3; }\n  .row-table .left-items .bank-col {\n    width: 170px;\n    min-width: 170px; }\n  .row-table .right-items {\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-align: center;\n        align-items: center; }\n    .row-table .right-items .type-col {\n      width: 65px;\n      min-width: 65px; }\n    .row-table .right-items .acc-col {\n      width: 122px;\n      min-width: 122px; }\n\n.bold {\n  font-weight: bold; }\n\n.table {\n  max-width: 440px;\n  margin-left: 20px;\n  margin-top: 20px; }\n\n.modal-footer {\n  -ms-flex-pack: distribute !important;\n      justify-content: space-around !important;\n  display: -ms-flexbox !important;\n  display: flex !important; }\n  .modal-footer button {\n    width: 164px !important;\n    border-radius: 10px;\n    border-width: 1px;\n    font-size: 12px;\n    font-weight: bold;\n    padding: 13px; }\n\n.icon-add-remove {\n  cursor: pointer; }\n\n.p-0 {\n  padding: 0 !important; }\n\n.custom-input {\n  border-radius: 4px; }\n\n.row-input {\n  margin: 15px 0px; }\n\n.m-b-10 {\n  margin-bottom: 10px; }\n\n.comment {\n  font-size: 10px;\n  padding: 0 54px;\n  margin-top: 30px;\n  margin-bottom: 10px;\n  color: #757575; }\n\n@media screen and (min-width: 400px) and (max-width: 480px) {\n  .term-conditions .modal-footer button {\n    width: 160px; } }\n\n@media screen and (max-width: 400px) {\n  .term-conditions .modal-footer button {\n    width: 134px; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/checkout/prosperity-modal/prosperity-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProsperityModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap_modal_bs_modal_ref_service__ = __webpack_require__("../../../../ngx-bootstrap/modal/bs-modal-ref.service.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProsperityModalComponent = (function () {
    function ProsperityModalComponent(router, bsModalRef) {
        this.router = router;
        this.bsModalRef = bsModalRef;
        this.title = '';
        this.items = [];
    }
    ProsperityModalComponent.prototype.ngOnInit = function () {
    };
    ProsperityModalComponent.prototype.paymentMethod = function () {
        this.bsModalRef.hide();
        this.router.navigate(['/checkout']);
    };
    ProsperityModalComponent.prototype.addNewItem = function (item) {
        this.items.push(item);
    };
    ProsperityModalComponent.prototype.addNewItemMethod = function (item) {
        this.items.push(item);
    };
    ProsperityModalComponent.prototype.detaleItem = function (item) {
        var index = this.items.indexOf(item);
        this.items.splice(index, 1);
        console.log(index);
    };
    return ProsperityModalComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], ProsperityModalComponent.prototype, "title", void 0);
ProsperityModalComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-prosperity-modal',
        template: __webpack_require__("../../../../../src/app/checkout/prosperity-modal/prosperity-modal.component.html"),
        styles: [__webpack_require__("../../../../../src/app/checkout/prosperity-modal/prosperity-modal.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap_modal_bs_modal_ref_service__["a" /* BsModalRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap_modal_bs_modal_ref_service__["a" /* BsModalRef */]) === "function" && _b || Object])
], ProsperityModalComponent);

var _a, _b;
//# sourceMappingURL=prosperity-modal.component.js.map

/***/ }),

/***/ "../../../../../src/app/data/formData.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormData; });
/* unused harmony export Personal */
/* unused harmony export Personaldata */
var FormData = (function () {
    function FormData() {
        this.firstName = '';
        this.middlename = '';
        this.lastName = '';
        this.email = '';
        this.confirmEmail = '';
        this.mobileno = '';
        this.gender = '';
        this.civilstatus = '';
        this.tin = '';
        this.sssgsis = '';
        this.dob = '';
        this.birthcountry = '';
        this.birthcity = '';
        this.idproof = '';
        this.street = '';
        this.state = '';
        this.city = '';
        this.zipcode = '';
        this.isSameAsPermanent = false;
        this.currentStreet = '';
        this.currentState = '';
        this.currentCity = '';
        this.currentZipcode = '';
        this.naBusinessAddress = '';
        this.businessStreet = '';
        this.businessState = '';
        this.businesscity = '';
        this.businessZipcode = '';
        this.mailingaddress = '';
        this.primaryoccupation = '';
        this.otheroccupation = '';
        this.businessnature = '';
        this.otherbusinessnature = '';
        this.employername = '';
        this.annualincome = '';
        this.sourcefunds = '';
        this.othersourcefunds = '';
        this.financialadvisorcode = '';
        this.financialadvisorname = '';
        this.ekycidProof = '';
    }
    FormData.prototype.clear = function () {
        this.firstName = '';
        this.middlename = '';
        this.lastName = '';
        this.email = '';
        this.confirmEmail = '';
        this.mobileno = '';
        this.gender = '';
        this.civilstatus = '';
        this.tin = '';
        this.sssgsis = '';
        this.dob = '';
        this.birthcountry = '';
        this.birthcity = '';
        this.idproof = '';
        this.street = '';
        this.state = '';
        this.city = '';
        this.zipcode = '';
        this.isSameAsPermanent = false;
        this.currentStreet = '';
        this.currentState = '';
        this.currentCity = '';
        this.currentZipcode = '';
        this.naBusinessAddress = '';
        this.businessStreet = '';
        this.businessState = '';
        this.businesscity = '';
        this.businessZipcode = '';
        this.mailingaddress = '';
        this.primaryoccupation = '';
        this.otheroccupation = '';
        this.businessnature = '';
        this.otherbusinessnature = '';
        this.employername = '';
        this.annualincome = '';
        this.sourcefunds = '';
        this.othersourcefunds = '';
        this.financialadvisorcode = '';
        this.financialadvisorname = '';
        this.ekycidProof = '';
    };
    return FormData;
}());

var Personal = (function () {
    function Personal() {
        this.firstName = '';
        this.lastName = '';
        this.email = '';
    }
    return Personal;
}());

var Personaldata = (function () {
    function Personaldata() {
        this.firstName = '';
        this.middlename = '';
        this.lastName = '';
        this.email = '';
        this.confirmEmail = '';
        this.mobileno = '';
        this.gender = '';
        this.civilstatus = '';
        this.tin = '';
        this.sssgsis = '';
        this.dob = '';
        this.birthcountry = '';
        this.birthcity = '';
        this.idproof = '';
        this.street = '';
        this.state = '';
        this.city = '';
        this.zipcode = '';
        this.isSameAsPermanent = false;
        this.currentStreet = '';
        this.currentState = '';
        this.currentCity = '';
        this.currentZipcode = '';
        this.naBusinessAddress = '';
        this.businessStreet = '';
        this.businessState = '';
        this.businesscity = '';
        this.businessZipcode = '';
        this.mailingaddress = '';
        this.primaryoccupation = '';
        this.otheroccupation = '';
        this.businessnature = '';
        this.otherbusinessnature = '';
        this.employername = '';
        this.annualincome = '';
        this.sourcefunds = '';
        this.othersourcefunds = '';
        this.financialadvisorcode = '';
        this.financialadvisorname = '';
        this.ekycidProof = '';
    }
    return Personaldata;
}());

//# sourceMappingURL=formData.model.js.map

/***/ }),

/***/ "../../../../../src/app/data/formData.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormDataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__formData_model__ = __webpack_require__("../../../../../src/app/data/formData.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__workflow_workflow_service__ = __webpack_require__("../../../../../src/app/workflow/workflow.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__workflow_workflow_model__ = __webpack_require__("../../../../../src/app/workflow/workflow.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import { FormData, Personal, Address, Personaldata }       from './formData.model';



var FormDataService = (function () {
    function FormDataService(workflowService) {
        this.workflowService = workflowService;
        this.formData = new __WEBPACK_IMPORTED_MODULE_1__formData_model__["a" /* FormData */]();
        this.isPersonalFormValid = false;
        this.isPersonaldataFormValid = false;
        this.isWorkFormValid = false;
        this.isAddressFormValid = false;
    }
    FormDataService.prototype.getPersonal = function () {
        // Return the Personal data
        var personal = {
            firstName: this.formData.firstName,
            lastName: this.formData.lastName,
            email: this.formData.email
        };
        return personal;
    };
    FormDataService.prototype.setPersonal = function (data) {
        // Update the Personal data only when the Personal Form had been validated successfully
        this.isPersonalFormValid = true;
        this.formData.firstName = data.firstName;
        this.formData.lastName = data.lastName;
        this.formData.email = data.email;
        // Validate Personal Step in Workflow
        this.workflowService.validateStep(__WEBPACK_IMPORTED_MODULE_3__workflow_workflow_model__["a" /* STEPS */].ipq);
    };
    FormDataService.prototype.getPersonaldata = function () {
        // Return the Personal data
        var personaldata = {
            firstName: this.formData.firstName,
            middlename: this.formData.middlename,
            lastName: this.formData.lastName,
            email: this.formData.email,
            confirmEmail: this.formData.confirmEmail,
            mobileno: this.formData.mobileno,
            gender: this.formData.gender,
            civilstatus: this.formData.civilstatus,
            tin: this.formData.tin,
            sssgsis: this.formData.sssgsis,
            dob: this.formData.dob,
            birthcountry: this.formData.birthcountry,
            birthcity: this.formData.birthcity,
            idproof: this.formData.idproof,
            street: this.formData.street,
            state: this.formData.state,
            city: this.formData.city,
            zipcode: this.formData.zipcode,
            isSameAsPermanent: this.formData.isSameAsPermanent,
            currentStreet: this.formData.currentStreet,
            currentState: this.formData.currentState,
            currentCity: this.formData.currentCity,
            currentZipcode: this.formData.currentZipcode,
            naBusinessAddress: this.formData.naBusinessAddress,
            businessStreet: this.formData.businessStreet,
            businessState: this.formData.businessState,
            businesscity: this.formData.businesscity,
            businessZipcode: this.formData.businessZipcode,
            mailingaddress: this.formData.mailingaddress,
            primaryoccupation: this.formData.primaryoccupation,
            otheroccupation: this.formData.otheroccupation,
            businessnature: this.formData.businessnature,
            otherbusinessnature: this.formData.otherbusinessnature,
            employername: this.formData.employername,
            annualincome: this.formData.annualincome,
            sourcefunds: this.formData.sourcefunds,
            othersourcefunds: this.formData.othersourcefunds,
            financialadvisorcode: this.formData.financialadvisorcode,
            financialadvisorname: this.formData.financialadvisorname,
            ekycidProof: this.formData.ekycidProof,
        };
        return personaldata;
    };
    FormDataService.prototype.setPersonaldata = function (data) {
        // Update the Personal data only when the Personal Form had been validated successfully
        this.isPersonaldataFormValid = true;
        this.formData.firstName = data.firstName;
        this.formData.middlename = data.middlename;
        this.formData.lastName = data.lastName;
        this.formData.email = data.email;
        this.formData.confirmEmail = data.confirmEmail;
        this.formData.mobileno = data.mobileno;
        this.formData.gender = data.gender;
        this.formData.civilstatus = data.civilstatus;
        this.formData.tin = data.tin;
        this.formData.sssgsis = data.sssgsis;
        this.formData.dob = data.dob;
        this.formData.birthcountry = data.birthcountry;
        this.formData.birthcity = data.birthcity;
        this.formData.idproof = data.idproof;
        this.formData.street = data.street;
        this.formData.state = data.state;
        this.formData.city = data.city;
        this.formData.zipcode = data.zipcode;
        this.formData.isSameAsPermanent = data.isSameAsPermanent;
        this.formData.currentStreet = data.currentStreet;
        this.formData.currentState = data.currentState;
        this.formData.currentCity = data.currentCity;
        this.formData.currentZipcode = data.currentZipcode;
        this.formData.naBusinessAddress = data.naBusinessAddress;
        this.formData.businessStreet = data.businessStreet;
        this.formData.businessState = data.businessState;
        this.formData.businesscity = data.businesscity;
        this.formData.businessZipcode = data.businessZipcode;
        this.formData.mailingaddress = data.mailingaddress;
        this.formData.primaryoccupation = data.primaryoccupation;
        this.formData.otheroccupation = data.otheroccupation;
        this.formData.businessnature = data.businessnature;
        this.formData.otherbusinessnature = data.otherbusinessnature;
        this.formData.employername = data.employername;
        this.formData.annualincome = data.annualincome;
        this.formData.sourcefunds = data.sourcefunds;
        this.formData.othersourcefunds = data.othersourcefunds;
        this.formData.financialadvisorcode = data.financialadvisorcode;
        this.formData.financialadvisorname = data.financialadvisorname;
        this.formData.ekycidProof = data.ekycidProof;
        // Validate Personal Step in Workflow
        this.workflowService.validateStep(__WEBPACK_IMPORTED_MODULE_3__workflow_workflow_model__["a" /* STEPS */].personalinformation);
    };
    FormDataService.prototype.getFormData = function () {
        return this.formData;
    };
    FormDataService.prototype.resetFormData = function () {
        // Reset the workflow
        this.workflowService.resetSteps();
        this.formData.clear();
        this.isPersonalFormValid = this.isPersonaldataFormValid = false;
        return this.formData;
    };
    FormDataService.prototype.isFormValid = function () {
        // Return true if all forms had been validated successfully; otherwise, return false
        ///return this.isPersonalFormValid &&  this.isWorkFormValid &&   this.isPersonaldataFormValid && this.isAddressFormValid;
        return this.isPersonalFormValid && this.isPersonaldataFormValid;
    };
    return FormDataService;
}());
FormDataService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__workflow_workflow_service__["a" /* WorkflowService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__workflow_workflow_service__["a" /* WorkflowService */]) === "function" && _a || Object])
], FormDataService);

var _a;
//# sourceMappingURL=formData.service.js.map

/***/ }),

/***/ "../../../../../src/app/face-to-face/face-to-face.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"client-declaration\">\r\n  <div class=\"modal-body\">\r\n    <div class=\"p-4 declaration-modal-content\">\r\n      <div class=\"declaration-text pr-4\">\r\n        <h5 class=\"padding-15 first-popup-common-color varification-sub-title\" ><b>Face-to-Face Verification, Citizenship, and Investment Notification</b></h5>\r\n        <div class=\"pb-2 client-declaration-common-font\">\r\n          You will now be redirected to the online investment application form. As required by the Securities and Exchange Commission (SEC) and the Anti-Money Laundering Council (AMLC), please visit any Sun Life branch within ten (10) calendar days of your online application for face-to-face (Know Your Customer) verification.\r\n        </div>\r\n        <div class=\"pb-2 client-declaration-common-font\">\r\n          Only Filipino citizens residing in the Philippines may invest online. If you are a foreign citizen residing in the Philippines or a Filipino located outside the Philippines, please email <b><a class=\"first-popup-common-color\" href=\"mailto:Phil-SLAMCI@sunlife.com\">Phil-SLAMCI@sunlife.com</a></b> so we may assign a licensed financial advisor to assist you.\r\n        </div>\r\n        <div class=\"pb-2 client-declaration-common-font\">\r\n          This channel is intended for initial investments only. Existing SLAMCI clients may process their additional investments online through <b><a class=\"first-popup-common-color\" href=\"#!\">My Sun Life Client Portal</a></b> or the <b><a class=\"first-popup-common-color\" href=\"#!\">Sun Life PH mobile app.</a></b>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button type=\"button\" class=\"btn btn-outline-rounded btn-info auto-width\" (click)=\"ipq()\">OK</button>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/face-to-face/face-to-face.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".client-declaration .modal-footer {\n  -ms-flex-pack: center;\n      justify-content: center;\n  border: 0px; }\n\n.client-declaration .declaration-text {\n  overflow: auto;\n  max-height: 400px;\n  text-align: justify; }\n\n.client-declaration .modal-footer {\n  -ms-flex-pack: center;\n      justify-content: center;\n  border: 0px;\n  text-align: center;\n  padding-bottom: 50px; }\n  .client-declaration .modal-footer .btn-outline-rounded {\n    margin: 0; }\n  .client-declaration .modal-footer button {\n    width: 200px; }\n\n.client-declaration .client-declaration-common-font {\n  font-size: 13px; }\n\n.auto-width {\n  width: auto !important; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/face-to-face/face-to-face.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FaceToFaceComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap_modal_bs_modal_ref_service__ = __webpack_require__("../../../../ngx-bootstrap/modal/bs-modal-ref.service.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FaceToFaceComponent = (function () {
    function FaceToFaceComponent(router, bsModalRef) {
        this.router = router;
        this.bsModalRef = bsModalRef;
        this.title = '';
    }
    FaceToFaceComponent.prototype.ngOnInit = function () {
    };
    FaceToFaceComponent.prototype.ipq = function () {
        this.bsModalRef.hide();
        this.router.navigate(['/ipq']);
    };
    return FaceToFaceComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], FaceToFaceComponent.prototype, "title", void 0);
FaceToFaceComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-face-to-face',
        template: __webpack_require__("../../../../../src/app/face-to-face/face-to-face.component.html"),
        styles: [__webpack_require__("../../../../../src/app/face-to-face/face-to-face.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap_modal_bs_modal_ref_service__["a" /* BsModalRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap_modal_bs_modal_ref_service__["a" /* BsModalRef */]) === "function" && _b || Object])
], FaceToFaceComponent);

var _a, _b;
//# sourceMappingURL=face-to-face.component.js.map

/***/ }),

/***/ "../../../../../src/app/ipq/ipq.component.html":
/***/ (function(module, exports) {

module.exports = "<h4 class=\"head text-center\">investor profile questionnaire</h4>\r\n<div class=\"info text-center\">\r\n  This assessment serves as a reference about your risk profile and investment experience, which may change over time based\r\n  on your current goals and life stage.\r\n</div>\r\n<div class=\"row no-gutters pb-20\">\r\n  <div class=\"col-sm-6 mb-6\">\r\n    <label class=\"review-label common-label-color font-17\">\r\n      <b>How much do you want to invest</b>\r\n    </label>\r\n    <input class=\"form-control input-md border-clr color-black\" type=\"text\" placeholder=\"Php 50,000.00\">\r\n  </div>\r\n</div>\r\n<div class=\"row no-gutters pb-20\">\r\n  <div class=\"col-sm-6 mb-6\">\r\n    <label class=\"control-label common-label-color font-17\">How long can you keep your money invested?</label>\r\n  </div>\r\n  <div class=\"col-sm-6 mb-6 text-right\">\r\n    <div class=\"spacing-btn\">\r\n      <span>{{rangeone}} Year</span>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-sm-12\">\r\n    <input type=\"range\" min=\"1\" max=\"30\" value=\"1\" class=\"slider border-clr\" [(ngModel)]=\"rangeone\" id=\"myRange\">\r\n  </div>\r\n</div>\r\n<div class=\"row no-gutters pb-20\">\r\n  <div class=\"col-sm-6 mb-6\">\r\n    <label class=\"control-label common-label-color font-17\">How can you describe your attitude towards investing and the level of risk you can take</label>\r\n  </div>\r\n  <div class=\"col-sm-6 mb-6 text-right\">\r\n    <div class=\"spacing-btn min-height-65\">\r\n      <span *ngIf=\"rangetwo<=10\">Seeks capital capital preservation. stable returns are preferredas opposed to funds that fluctuate widely.</span>\r\n      <span *ngIf=\"rangetwo>10 && rangetwo<=20\">Comfortable with volatility , and prepare to do so with more than half of my assets.</span>\r\n      <span *ngIf=\"rangetwo>20 && rangetwo<=29\">Comfortable with volatility , and prepare to do so with less than half of my assets.</span>\r\n      <span *ngIf=\"rangetwo>29 && rangetwo<=30\">Seeks capital capital appreciation. Fully accepts volatility to ensure higher returns in the long term.</span>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-sm-12\">\r\n    <input type=\"range\" min=\"1\" max=\"30\" value=\"0\" [(ngModel)]=\"rangetwo\" class=\"slider border-clr\" id=\"myRange\">\r\n  </div>\r\n</div>\r\n<div class=\"row no-gutters pb-20\">\r\n  <div class=\"col-sm-6 mb-6\">\r\n    <label class=\"control-label common-label-color font-17\">Which statement describes your financial situation</label>\r\n  </div>\r\n  <div class=\"col-sm-6 mb-6 text-right\">\r\n    <div class=\"spacing-btn min-height-65\">\r\n      <span *ngIf=\"rangethree<=10\">The investment will supplement my income</span>\r\n      <span *ngIf=\"rangethree>10 && rangethree<=20\">The investment is not needed to supplement current income, however this could change.</span>\r\n      <span *ngIf=\"rangethree>20 && rangethree<=29 \">Should an unexpected situation arise, there may be a need to access there funds.</span>\r\n      <span *ngIf=\"rangethree>29 && rangethree<=30 \">Can meet emergency requirements without withdrawing there funds.</span>\r\n    </div>\r\n\r\n  </div>\r\n  <div class=\"col-sm-12\">\r\n    <input type=\"range\" min=\"1\" max=\"30\" value=\"0\" [(ngModel)]=\"rangethree\" class=\"slider border-clr\" id=\"myRange\">\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n<div class=\"row no-gutters pb-20\">\r\n  <div class=\"risk-section\">\r\n    <div class=\"inner-div\">\r\n      <span class=\"agressive-heading\">\r\n        <abbr>\r\n          <i class=\"fa fa-area-chart text-slate-blue\" aria-hidden=\"true\"></i>\r\n        </abbr>\r\n        <abbr>\r\n          <i class=\"fa fa-bar-chart text-orange\" aria-hidden=\"true\"></i>\r\n        </abbr>\r\n        <abbr>\r\n          <i class=\"fa fa-line-chart text-sunlife-blue\" aria-hidden=\"true\"></i>\r\n        </abbr>\r\n        <span class=\"text-orange\">Your risk appetite is moderately aggressive </span>\r\n      </span>\r\n      <p>Moderately aggressive investors want the balance of capital growth and protection. They prefer the combined benefits\r\n        of bonds and equities as a way to reach their goals while building their financial nest for the long-term.</p>\r\n\r\n      <div class=\"recommanded-text\">\r\n        RECOMMENDED PRODUCTS\r\n        <div class=\"lightblue\">Phillippine Stock Equity Fund / Phillippine Equity Fund / Money Market Fund</div>\r\n      </div>\r\n      <div class=\"info text-center\">\r\n        We recommended to invest in a fund that is consistent with your assessed risk appetite. Should you choose differently, you\r\n        are deemed responsible for that decision and any of its effects.\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class='row'>\r\n  <div class='col-xs-offset-1 col-xs-10 col-sm-offset-2 col-sm-8'>\r\n    <div class=\"form-group text-center\">\r\n      <button class=\"btn btn-success btn-outline-rounded btn-info\" (click)=\"goToNext(personalForm)\">\r\n        Continue</button>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/ipq/ipq.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".spacing-btn {\n  padding: 12px;\n  font-weight: 700;\n  background: #EEEEEE;\n  min-height: 45px; }\n  .spacing-btn.min-height-65 {\n    min-height: 65px; }\n\n.risk-return {\n  padding: 0px 15px;\n  margin-bottom: 20px; }\n\n.risk-return label {\n  display: block;\n  font-weight: 700;\n  font-size: 17px; }\n\n.risk-return-block {\n  border: 1px solid #275862;\n  border-radius: 10px;\n  -webkit-border-radius: 10px;\n  -moz-border-radius: 10px;\n  padding: 15px;\n  margin-top: 15px;\n  color: #275862;\n  font-size: 17px;\n  font-weight: 700;\n  transition: all 0.5s;\n  -webkit-transition: all 0.5s;\n  cursor: pointer; }\n\n.risk-return-block:hover {\n  background: #EAAB00;\n  border: 1px solid #EAAB00; }\n\n.font-17 {\n  font-size: 17px; }\n\n.risk-section {\n  background: #FEFBF2;\n  text-align: center;\n  padding: 15px 15px 25px 15px;\n  margin: 45px 15px 0px 15px; }\n\n.risk-section p {\n  color: #A2A2A1;\n  font-size: 14px; }\n\n.agressive-heading {\n  font-size: 18px;\n  font-weight: 700; }\n  .agressive-heading span {\n    display: block; }\n\n.recommanded-text {\n  margin-bottom: 30px; }\n\n.text-orange {\n  color: #d0651e; }\n\n.text-slate-blue {\n  color: #5482ab; }\n\n.text-sunlife-blue {\n  color: #003946; }\n\n.agressive-heading abbr {\n  display: inline-block;\n  font-size: 45px; }\n\n.inner-div {\n  width: 100%;\n  max-width: 800px;\n  margin: 0px auto; }\n\n.darkblue {\n  color: #33626c !important; }\n\n.lightblue {\n  color: #3F788E !important; }\n\n.slider {\n  -webkit-appearance: none;\n  width: 100%;\n  height: 15px;\n  border-radius: 5px;\n  background: #FFEFCF;\n  outline: none;\n  opacity: 0.7;\n  transition: opacity .2s;\n  margin-top: 12px;\n  border: 1px solid #EFBF3D; }\n\n.slider::-webkit-slider-thumb {\n  -webkit-appearance: none;\n  appearance: none;\n  width: 25px;\n  height: 25px;\n  border-radius: 50%;\n  background: #EAAB00;\n  cursor: pointer;\n  box-shadow: inset 0 0 0 3px #fff;\n  border: 2px solid #EAAB00; }\n\n.slider::-moz-range-thumb {\n  width: 25px;\n  height: 25px;\n  border-radius: 50%;\n  background: #EAAB00;\n  cursor: pointer;\n  border: 2px solid #EAAB00; }\n\n.color-black {\n  color: black !important; }\n\n.color-black:-ms-input-placeholder {\n  color: black !important;\n  opacity: 1; }\n\n.color-black::placeholder {\n  color: black !important;\n  opacity: 1; }\n\n.color-black:-ms-input-placeholder {\n  color: black !important; }\n\n.color-black::-ms-input-placeholder {\n  color: black !important; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ipq/ipq.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IpqComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap_modal__ = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__face_to_face_face_to_face_component__ = __webpack_require__("../../../../../src/app/face-to-face/face-to-face.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var IpqComponent = (function () {
    function IpqComponent(router, modalService) {
        this.router = router;
        this.modalService = modalService;
    }
    // changeValue(){
    //     this.rangetwo = this.rangeone;
    //     this.rangethree = this.rangeone;
    // }
    IpqComponent.prototype.ngOnInit = function () {
        var initialState = {
            title: 'TERMS AND CONDITION',
        };
        this.bsModalRef = this.modalService.show(__WEBPACK_IMPORTED_MODULE_3__face_to_face_face_to_face_component__["a" /* FaceToFaceComponent */]);
    };
    IpqComponent.prototype.goToNext = function () {
        this.router.navigate(['/personalinformation']);
    };
    return IpqComponent;
}());
IpqComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'mt-wizard-ipq',
        template: __webpack_require__("../../../../../src/app/ipq/ipq.component.html"),
        styles: [__webpack_require__("../../../../../src/app/ipq/ipq.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap_modal__["b" /* BsModalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap_modal__["b" /* BsModalService */]) === "function" && _b || Object])
], IpqComponent);

var _a, _b;
//# sourceMappingURL=ipq.component.js.map

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"board-inner\" id=\"status-buttons\">\r\n    <ul class=\"nav nav-tabs\" id=\"myTab\">\r\n        <div class=\"liner\"></div>\r\n        <li>\r\n            <a routerLink=\"/ipq\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{ exact: true }\" data-toggle=\"tab\" title=\"personal\">\r\n                <span class=\"round-tabs one\">\r\n                        <i class=\"fa fa-user\" aria-hidden=\"true\"></i>\r\n                </span>\r\n                <span class=\"bottom-text\">IPQ</span>\r\n            </a>\r\n        </li>\r\n        <li>\r\n            <a routerLink=\"/personalinformation\" routerLinkActive=\"active\" data-toggle=\"tab\" title=\"personalinformation\">\r\n                <span class=\"round-tabs two\">\r\n                    <i class=\"fa fa-file\"></i>\r\n                </span>\r\n                <span class=\"bottom-text\">Information</span>\r\n            </a>\r\n        </li>\r\n        <li>\r\n            <a routerLink=\"/checkout\" routerLinkActive=\"active\" data-toggle=\"tab\" title=\"completed\">\r\n                <span class=\"round-tabs four\">\r\n                    <i class=\"fa fa-shopping-cart\" aria-hidden=\"true\"></i>\r\n                </span>\r\n                <span class=\"bottom-text\">Checkout</span>\r\n            </a>\r\n        </li>\r\n                \r\n    </ul>\r\n    <div class=\"clearfix\"></div>\r\n</div>\r\n<script src=\"assets/js/loading-bars.js\"></script>"

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NavbarComponent = (function () {
    function NavbarComponent() {
    }
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'msw-navbar',
        template: __webpack_require__("../../../../../src/app/navbar/navbar.component.html")
    })
], NavbarComponent);

//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/personal-information/personal-information.component.html":
/***/ (function(module, exports) {

module.exports = "<form #workForm=\"ngForm\" class=\"editForm personal-information\" novalidate>\r\n    <div class=\"form-horizontal\">\r\n        <div class=\"tab-pane fade in active\">\r\n            <!--h2 class=\"text-center\"> {{ title }}</h2-->\r\n            <h2 class=\"text-center\"> CLIENT INFORMATION</h2>\r\n            <br/>\r\n            <div class=\"row no-gutters\">\r\n                <div class='col-xs-12 col-sm-4 '>\r\n                    <div class=\"form-group\">\r\n                        <label class=\"control-label\" for=\"firstname\">First Name</label>\r\n                        <input class=\"form-control input-md  custom-input\" #firstname=\"ngModel\" required id=\"firstname\" name=\"firstname\" type=\"text\"\r\n                            [(ngModel)]=\"personalData.firstName\">\r\n                        <!--div class=\"alert alert-danger\" [hidden]=\"firstname.valid\">First Name is required</div-->\r\n                    </div>\r\n                </div>\r\n                <div class='col-xs-12 col-sm-4'>\r\n                    <div class=\"form-group\">\r\n                        <label class=\"control-label\" for=\"middlename\">Middle Name</label>\r\n                        <input class=\"form-control input-md  custom-input\" #middlename=\"ngModel\" required id=\"middlename\" name=\"middlename\" type=\"text\"\r\n                            [(ngModel)]=\"personalData.middlename\">\r\n                        <!--div class=\"alert alert-danger\" [hidden]=\"middlename.valid\">Middle Name is required</div-->\r\n                    </div>\r\n                </div>\r\n                <div class='col-xs-12 col-sm-4'>\r\n                    <div class=\"form-group\">\r\n                        <label class=\"control-label\" for=\"lastname\">Last Name</label>\r\n                        <input class=\"form-control input-md custom-input\" #lastname=\"ngModel\" required id=\"lastname\" name=\"lastname\" type=\"text\"\r\n                            [(ngModel)]=\"personalData.lastName\">\r\n                        <!--div class=\"alert alert-danger\" [hidden]=\"lastname.valid\">Last Name is required</div-->\r\n                    </div>\r\n                </div>\r\n                <div class='col-xs-12 col-sm-4'>\r\n                    <div class=\"form-group\">\r\n                        <label class=\"control-label\" for=\"email\">Email</label>\r\n                        <input class=\"form-control input-md custom-input\" #email=\"ngModel\" required id=\"email\" name=\"email\" type=\"email\" [(ngModel)]=\"personalData.email\">\r\n                        <!--div class=\"alert alert-danger\" [hidden]=\"email.valid\">Email is required</div-->\r\n                    </div>\r\n                </div>\r\n                <div class='col-xs-12 col-sm-4'>\r\n                    <div class=\"form-group\">\r\n                        <label class=\"control-label\" for=\"confirmEmail\">Re Enter Email</label>\r\n                        <input class=\"form-control input-md custom-input\" #confirmEmail=\"ngModel\" required id=\"confirmEmail\" name=\"confirmEmail\"\r\n                            type=\"email\" [(ngModel)]=\"personalData.confirmEmail\">\r\n                        <!--div class=\"alert alert-danger\" [hidden]=\"email.valid\">Email is required</div-->\r\n                    </div>\r\n                </div>\r\n                <div class='col-xs-12 col-sm-4'>\r\n                    <div class=\"form-group\">\r\n                        <label class=\"control-label\" for=\"mobileno\">Mobile no.</label>\r\n                        <input class=\"form-control input-md custom-input\" #mobileno=\"ngModel\" required id=\"mobileno\" name=\"mobileno\" type=\"text\"\r\n                            [(ngModel)]=\"personalData.mobileno\">\r\n                        <!--div class=\"alert alert-danger\" [hidden]=\"mobileno.valid\">Mobile no is required</div-->\r\n                    </div>\r\n                </div>\r\n                <div class='col-xs-12 col-sm-4'>\r\n                    <div class=\"form-group\">\r\n                        <label class=\"control-label\" for=\"gender\">Gender </label>\r\n                        <select class=\"form-control\" id=\"gender\" name=\"gender\" placeholder=\"Select one\" [(ngModel)]=\"personalData.gender\">\r\n                            <option value=''>Select one...</option>\r\n                            <option>Male</option>\r\n                            <option>Female</option>\r\n                        </select>\r\n                    </div>\r\n                </div>\r\n                <div class='col-xs-12 col-sm-4'>\r\n                    <div class=\"form-group\">\r\n                        <label class=\"control-label\" for=\"civilstatus\">Civil Status</label>\r\n                        <select class=\"form-control  custom-select\" #civilstatus=\"ngModel\" id=\"civilstatus\" name=\"civilstatus\" placeholder=\"Select one\"\r\n                            [(ngModel)]=\"personalData.civilstatus\">\r\n                            <option value=''>Select one...</option>\r\n                            <option>1</option>\r\n                            <option>2</option>\r\n                        </select>\r\n\r\n                    </div>\r\n                </div>\r\n                <div class='col-xs-12 col-sm-4'>\r\n                    <div class=\"form-group\">\r\n                        <label class=\"control-label\" for=\"tin\">TIN</label>\r\n                        <input class=\"form-control input-md custom-input\" #tin=\"ngModel\" required id=\"tin\" name=\"tin\" type=\"text\" [(ngModel)]=\"personalData.tin\">\r\n                    </div>\r\n                </div>\r\n                <div class='col-xs-12 col-sm-4'>\r\n                    <div class=\"form-group\">\r\n                        <label class=\"control-label\" for=\"sssgsis\">SSS/GSIS</label>\r\n                        <input class=\"form-control input-md custom-input\" #sssgsis=\"ngModel\" required id=\"sssgsis\" name=\"sssgsis\" type=\"text\" [(ngModel)]=\"personalData.sssgsis\"\r\n                        />\r\n\r\n                    </div>\r\n                </div>\r\n                <div class='col-xs-12 col-sm-4'>\r\n                    <div class=\"form-group\">\r\n                        <label class=\"control-label\" for=\"dob\">Date of birth</label>\r\n                        <input class=\"form-control input-md custom-input\" #dob=\"ngModel\" required id=\"dob\" name=\"dob\" type=\"text\" [(ngModel)]=\"personalData.dob\">\r\n                        <!--div class=\"alert alert-danger\" [hidden]=\"email.valid\">Email is required</div-->\r\n                    </div>\r\n                </div>\r\n                <div class='col-xs-12 col-sm-4'>\r\n                    <div class=\"form-group\">\r\n                        <label class=\"control-label\" for=\"birthcountry\">Country of birth</label>\r\n                        <select class=\"form-control custom-select\" #birthcountry=\"ngModel\" id=\"birthcountry\" name=\"birthcountry\" placeholder=\"Select one\"\r\n                            [(ngModel)]=\"personalData.birthcountry\">\r\n                            <option value=''>Select one...</option>\r\n                            <option>1</option>\r\n                            <option>2</option>\r\n                        </select>\r\n\r\n                    </div>\r\n                </div>\r\n                <div class='col-xs-12 col-sm-4'>\r\n                    <div class=\"form-group\">\r\n                        <label class=\"control-label\" for=\"birthcity\">Citizenship</label>\r\n                        <select class=\"form-control custom-select\" #birthcity=\"ngModel\" id=\"birthcity\" name=\"birthcity\" placeholder=\"Select one\"\r\n                            [(ngModel)]=\"personalData.birthcity\">\r\n                            <option value=''>Select one...</option>\r\n                            <option>1</option>\r\n                            <option>2</option>\r\n                        </select>\r\n                    </div>\r\n                </div>\r\n                <div class='col-xs-12 col-sm-4'>\r\n                    <div class=\"form-group\">\r\n                        <label class=\"control-label\" for=\"idproof\">Proof of identity\r\n                            <i class=\"fa fa-info-circle tooltip-icon\" tooltip=\"Lorem Ipsum is simply dummy text of the printing and typesetting industry.\"\r\n                                aria-hidden=\"true\"></i>\r\n                        </label>\r\n                        \r\n                        <div class=\"upload-wrap df ai-c m-t-0\">\r\n                            <label for=\"idproof\">\r\n                                Browse\r\n                            </label>\r\n                            <input class=\"form-control input-md custome-file\" #idproof=\"ngModel\" required id=\"idproof\" name=\"idproof\" type=\"file\" [(ngModel)]=\"personalData.idproof\">\r\n                            <div class=\"fild\">\r\n                                {{personalData.idproof || 'Upload a file'}}\r\n\r\n                            </div>\r\n                        </div>\r\n                        <!--div class=\"alert alert-danger\" [hidden]=\"idproof.valid\">Id Proof is required</div-->\r\n                    </div>\r\n                </div>\r\n                <div class='col-xs-12 col-sm-4'>\r\n                    <div class=\"form-group\">\r\n                    </div>\r\n                </div>\r\n                <div class='col-xs-12 col-sm-4'>\r\n                    <div class=\"form-group\">\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <h2 class=\"text-center\">YOUR ADDRESSES</h2>\r\n\r\n            <h3 class=\"text-left subheading p-l-45\">Permanent address</h3>\r\n\r\n            <div class=\"row no-gutters\">\r\n                <div class='col-xs-12 col-sm-6'>\r\n                    <div class=\"form-group\">\r\n                        <label class=\"control-label\" for=\"street\">No. of street / Subdivision / Barangay</label>\r\n                        <input class=\"form-control input-md custom-input\" #street=\"ngModel\" required id=\"street\" name=\"street\" type=\"text\" [(ngModel)]=\"personalData.street\">\r\n                        <!--div class=\"alert alert-danger\" [hidden]=\"street.valid\">Street Address is required</di-->\r\n                    </div>\r\n                </div>\r\n                <div class='col-xs-12 col-sm-6'>\r\n                    <div class=\"form-group\">\r\n                        <label class=\"control-label\" for=\"state\">State / Province</label>\r\n\r\n                        <select class=\"form-control  custom-select\" #state=\"ngModel\" id=\"state\" name=\"state\" placeholder=\"Select one\" [(ngModel)]=\"personalData.state\">\r\n                            <option value=''>Select one...</option>\r\n                            <option>1</option>\r\n                            <option>2</option>\r\n                        </select>\r\n                        <!--div class=\"alert alert-danger\" [hidden]=\"state.valid\">State is required</div-->\r\n                    </div>\r\n                </div>\r\n                <div class='col-xs-12 col-sm-6'>\r\n                    <div class=\"form-group\">\r\n                        <label class=\"control-label\" for=\"city\">City</label>\r\n                        <input class=\"form-control input-md custom-input\" #city=\"ngModel\" required id=\"city\" name=\"city\" type=\"text\" [(ngModel)]=\"personalData.city\">\r\n                        <!--div class=\"alert alert-danger\" [hidden]=\"city.valid\">City is required</div-->\r\n                    </div>\r\n                </div>\r\n\r\n                <div class='col-xs-12 col-sm-6'>\r\n                    <div class=\"form-group\">\r\n                        <label class=\"control-label\" for=\"zipcode\">Zip code</label>\r\n                        <input class=\"form-control input-md custom-input\" #zipcode=\"ngModel\" required id=\"zipcode\" name=\"zipcode\" type=\"text\" [(ngModel)]=\"personalData.zipcode\">\r\n                        <!--div class=\"alert alert-danger\" [hidden]=\"zipcode.valid\">Zip code is required</div-->\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <h3 class=\"text-left subheading p-l-45\">Current address</h3>\r\n            <div class=\"row no-gutters\">\r\n                <div class=\"col-md-12 mr-15\">\r\n\r\n                    <label class=\"custom-checkbox\">Current address is same as Permanent address\r\n                        <input type=\"checkbox\" checked=\"checked\" #isSameAsPermanent=\"ngModel\" id=\"isSameAsPermanent\" name=\"isSameAsPermanent\" [(ngModel)]=\"personalData.isSameAsPermanent\">\r\n                        <span class=\"checkmark\"></span>\r\n                    </label>\r\n\r\n                </div>\r\n            </div>\r\n            <div class=\"row no-gutters\" [hidden]=\"personalData.isSameAsPermanent\">\r\n                <div class='col-xs-12 col-sm-6'>\r\n                    <div class=\"form-group\">\r\n                        <label class=\"control-label\" for=\"street\">No. of street / Subdivision / Barangay</label>\r\n                        <input class=\"form-control input-md custom-input\" #street=\"ngModel\" required id=\"currentStreet\" name=\"currentStreet\" type=\"text\"\r\n                            [(ngModel)]=\"personalData.currentStreet\">\r\n                        <!--div class=\"alert alert-danger\" [hidden]=\"street.valid\">Street Address is required</div-->\r\n                    </div>\r\n                </div>\r\n                <div class='col-xs-12 col-sm-6'>\r\n                    <div class=\"form-group\">\r\n                        <label class=\"control-label\" for=\"state\">State / Province</label>\r\n                        <!--input class=\"form-control input-md custom-input\" #state=\"ngModel\" required id=\"state\" name=\"state\" type=\"text\" placeholder=\"State\" [(ngModel)]=\"personal.state\">\r\n                        <div class=\"alert alert-danger\" [hidden]=\"state.valid\">State is required</div-->\r\n                        <select class=\"form-control  custom-select\" id=\"currentState\" name=\"currentState\" placeholder=\"Select one\" [(ngModel)]=\"personalData.currentState\">\r\n                            <option value=\"\">Select one...</option>\r\n                            <option>1</option>\r\n                            <option>2</option>\r\n                        </select>\r\n                    </div>\r\n                </div>\r\n                <div class='col-xs-12 col-sm-6'>\r\n                    <div class=\"form-group\">\r\n                        <label class=\"control-label\" for=\"city\">City</label>\r\n                        <input class=\"form-control input-md custom-input\" #city=\"ngModel\" required id=\"currentCity\" name=\"currentCity\" type=\"text\"\r\n                            [(ngModel)]=\"personalData.currentCity\">\r\n                        <!--div class=\"alert alert-danger\" [hidden]=\"city.valid\">City is required</div-->\r\n                    </div>\r\n                </div>\r\n                <div class='col-xs-12 col-sm-6'>\r\n                    <div class=\"form-group\">\r\n                        <label class=\"control-label\" for=\"zipcode\">Zip code</label>\r\n                        <input class=\"form-control input-md custom-input\" #zipcode=\"ngModel\" required id=\"currentZipcode\" name=\"currentZipcode\" type=\"text\"\r\n                            [(ngModel)]=\"personalData.currentZipcode\">\r\n                        <!--div class=\"alert alert-danger\" [hidden]=\"zipcode.valid\">Zip code is required</div-->\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <h3 class=\"text-left subheading p-l-45\">Business address</h3>\r\n            <div class=\"row no-gutters\">\r\n                <div class=\"col-md-12 mr-15\">\r\n\r\n                    <label class=\"custom-checkbox\"> N/A for business address\r\n                        <input type=\"checkbox\" #naBusinessAddress=\"ngModel\" id=\"naBusinessAddress\" name=\"naBusinessAddress\" [(ngModel)]=\"personalData.naBusinessAddress\">\r\n                        <span class=\"checkmark\"></span>\r\n                    </label>\r\n\r\n                </div>\r\n            </div>\r\n            <div class=\"row no-gutters\" [hidden]=\"personalData.naBusinessAddress\">\r\n                <div class='col-xs-12 col-sm-6'>\r\n                    <div class=\"form-group\">\r\n                        <label class=\"control-label\" for=\"street\">No. of street / Subdivision / Barangay</label>\r\n                        <input class=\"form-control input-md custom-input\" #businessStreet=\"ngModel\" required id=\"businessStreet\" name=\"businessStreet\"\r\n                            type=\"text\" [(ngModel)]=\"personalData.businessStreet\">\r\n                        <!--div class=\"alert alert-danger\" [hidden]=\"street.valid\">Street Address is required</div-->\r\n                    </div>\r\n                </div>\r\n                <div class='col-xs-12 col-sm-6'>\r\n                    <div class=\"form-group\">\r\n                        <label class=\"control-label\" for=\"state\">State / Province</label>\r\n                        <!--input class=\"form-control input-md custom-input\" #state=\"ngModel\" required id=\"state\" name=\"state\" type=\"text\" placeholder=\"State\" [(ngModel)]=\"personal.state\">\r\n                        <div class=\"alert alert-danger\" [hidden]=\"state.valid\">State is required</div-->\r\n                        <select class=\"form-control  custom-select\" #businessState=\"ngModel\" id=\"businessState\" name=\"businessState\" placeholder=\"Select one\"\r\n                            [(ngModel)]=\"personalData.businessState\">\r\n                            <option value=\"\">Select one...</option>\r\n                            <option>1</option>\r\n                            <option>2</option>\r\n                        </select>\r\n                    </div>\r\n                </div>\r\n                <div class='col-xs-12 col-sm-6'>\r\n                    <div class=\"form-group\">\r\n                        <label class=\"control-label\" for=\"city\">City</label>\r\n                        <input class=\"form-control input-md custom-input\" #businesscity=\"ngModel\" required id=\"businesscity\" name=\"businesscity\"\r\n                            type=\"text\" [(ngModel)]=\"personalData.businesscity\">\r\n                        <!--div class=\"alert alert-danger\" [hidden]=\"city.valid\">City is required</div-->\r\n                    </div>\r\n                </div>\r\n                <div class='col-xs-12 col-sm-6'>\r\n                    <div class=\"form-group\">\r\n                        <label class=\"control-label\" for=\"zipcode\">Zip code</label>\r\n                        <input class=\"form-control input-md custom-input\" #businessZipcode=\"ngModel\" required id=\"businessZipcode\" name=\"businessZipcode\"\r\n                            type=\"text\" [(ngModel)]=\"personalData.businessZipcode\">\r\n                        <!--div class=\"alert alert-danger\" [hidden]=\"zipcode.valid\">Zip code is required</div-->\r\n                    </div>\r\n                </div>\r\n\r\n                <div class='col-xs-12 col-sm-6'>\r\n                    <div class=\"form-group\">\r\n                        <!--label class=\"control-label\" for=\"zipcode\">Zip code</label>  \r\n                        <input class=\"form-control input-md\" #zipcode=\"ngModel\" required id=\"zipcode\" name=\"zipcode\" type=\"text\" placeholder=\"Zip code\" [(ngModel)]=\"personal.zipcode\">   \r\n                        <div class=\"alert alert-danger\" [hidden]=\"zipcode.valid\">Zip code is required</div-->\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <h2 class=\"text-center\">Preferred Mailing Address</h2>\r\n            <div class=\"row no-gutters\">\r\n                <div class='col-xs-12 col-sm-6'>\r\n                    <div class=\"form-group\">\r\n                        <label class=\"control-label\" for=\"mailingaddress\">Mailing address</label>\r\n                        <!--input class=\"form-control input-md custom-input\" #mailingaddress=\"ngModel\" required id=\"mailingaddress\" name=\"mailingaddress\" type=\"text\" placeholder=\"Mailing address\" [(ngModel)]=\"personal.mailingaddress\">\r\n                    <div class=\"alert alert-danger\" [hidden]=\"city.valid\">Mailing address is required</div-->\r\n                        <select class=\"form-control  custom-select\" id=\"mailingaddress\" name=\"mailingaddress\" placeholder=\"Select one\" [(ngModel)]=\"personalData.mailingaddress\">\r\n                            <option value=''>Select one...</option>\r\n                            <option>Permanent Address</option>\r\n                            <option>Current Address</option>\r\n                            <option>Business Address</option>\r\n                        </select>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <h2 class=\"text-center\">Work details</h2>\r\n            <div class=\"row no-gutters\">\r\n                <div class='col-xs-12 col-sm-6'>\r\n                    <div class=\"form-group\">\r\n                        <label class=\"control-label\" for=\"primaryoccupation\">Primary occupation</label>\r\n                        <!--div class=\"alert alert-danger\" [hidden]=\"primaryoccupation.valid\">Primary occupation is required</div-->\r\n                        <select class=\"form-control  custom-select\" id=\"primaryoccupation\" name=\"primaryoccupation\" placeholder=\"Select one\" [(ngModel)]=\"personalData.primaryoccupation\">\r\n                            <option value=''>Select one...</option>\r\n                            <option>1</option>\r\n                            <option>2</option>\r\n                        </select>\r\n                    </div>\r\n                </div>\r\n                <div class='col-xs-12 col-sm-6'>\r\n                    <div class=\"form-group\">\r\n                        <label class=\"control-label empty-label\" for=\"otheroccupation\"></label>\r\n                        <input class=\"form-control input-md custom-input\" required id=\"otheroccupation\" name=\"otheroccupation\" type=\"text\" placeholder=\"Other occupation\"\r\n                            [(ngModel)]=\"personalData.otheroccupation\">\r\n                    </div>\r\n                </div>\r\n                <div class='col-xs-12 col-sm-6'>\r\n                    <div class=\"form-group\">\r\n                        <label class=\"control-label\" for=\"businessnature\">Nature of business</label>\r\n                        <select class=\"form-control  custom-select\" id=\"businessnature\" name=\"businessnature\" placeholder=\"Select one\" [(ngModel)]=\"personalData.businessnature\">\r\n                            <option value=''>Select one...</option>\r\n                            <option>1</option>\r\n                            <option>2</option>\r\n                        </select>\r\n                    </div>\r\n                </div>\r\n                <div class='col-xs-12 col-sm-6'>\r\n                    <div class=\"form-group\">\r\n                        <label class=\"control-label empty-label\" for=\"otherbusinessnature\"></label>\r\n                        <input class=\"form-control input-md custom-input\" required id=\"otherbusinessnature\" name=\"otherbusinessnature\" type=\"text\"\r\n                            placeholder=\"Other Nature of business\" [(ngModel)]=\"personalData.otherbusinessnature\">\r\n\r\n                        <!--div class=\"alert alert-danger\" [hidden]=\"annualincome.valid\">Annual income is required</div-->\r\n                    </div>\r\n                </div>\r\n                <div class='col-xs-12 col-sm-6'>\r\n                    <div class=\"form-group\">\r\n                        <label class=\"control-label empty-label\" for=\"employername\">Name of employer</label>\r\n                        <input class=\"form-control input-md custom-input\" #employername=\"ngModel\" required id=\"employername\" name=\"employername\"\r\n                            type=\"text\" [(ngModel)]=\"personalData.employername\">\r\n\r\n                    </div>\r\n                </div>\r\n                <div class='col-xs-12 col-sm-6'>\r\n                    <div class=\"form-group\">\r\n                        <label class=\"control-label\" for=\"annualincome\">Annual income</label>\r\n                        <select class=\"form-control  custom-select\" id=\"annualincome\" name=\"annualincome\" placeholder=\"Select one\" [(ngModel)]=\"personalData.annualincome\">\r\n                            <option value=''>Select one...</option>\r\n                            <option>1</option>\r\n                            <option>2</option>\r\n                        </select>\r\n                    </div>\r\n                </div>\r\n                <div class='col-xs-12 col-sm-6'>\r\n                    <div class=\"form-group\">\r\n                        <label class=\"control-label\" for=\"sourcefunds\">Source of funds </label>\r\n                        <select class=\"form-control  custom-select\" #sourcefunds=\"ngModel\" id=\"sourcefunds\" name=\"sourcefunds\" placeholder=\"Select one\"\r\n                            [(ngModel)]=\"personalData.sourcefunds\">\r\n                            <option value=''>Select one...</option>\r\n                            <option>1</option>\r\n                            <option>2</option>\r\n                        </select>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class='col-xs-12 col-sm-6'>\r\n                    <div class=\"form-group\">\r\n                        <label class=\"control-label empty-label\" for=\"othersourcefunds\"></label>\r\n                        <input class=\"form-control input-md custom-input\" #othersourcefunds=\"ngModel\" required id=\"othersourcefunds\" name=\"othersourcefunds\"\r\n                            type=\"text\" placeholder=\"Other source of funds\" [(ngModel)]=\"personalData.othersourcefunds\">\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <h2 class=\"text-center\">Financial advisor information\r\n                <i class=\"fa fa-info-circle tooltip-icon\" tooltip=\"Lorem Ipsum is simply dummy text of the printing and typesetting industry.\"\r\n                    aria-hidden=\"true\"></i>\r\n            </h2>\r\n            <div class=\"row no-gutters\">\r\n\r\n                <div class='col-xs-12 col-sm-6'>\r\n                    <div class=\"form-group\">\r\n                        <label class=\"control-label\" for=\"financialadvisorcode\">Financial advisor code (optional) </label>\r\n                        <input class=\"form-control input-md custom-input\" #financialadvisorcode=\"ngModel\" required id=\"financialadvisorcode\" name=\"financialadvisorcode\"\r\n                            type=\"text\" [(ngModel)]=\"personalData.financialadvisorcode\">\r\n                        <!--div class=\"alert alert-danger\" [hidden]=\"street.valid\">Street Address is required</div-->\r\n                    </div>\r\n                </div>\r\n                <div class='col-xs-12 col-sm-6'>\r\n                    <div class=\"form-group\">\r\n                        <label class=\"control-label\" for=\"financialadvisorname\">Financial advisor name</label>\r\n                        <input class=\"form-control input-md custom-input\" #financialadvisorname=\"ngModel\" required id=\"financialadvisorname\" name=\"financialadvisorname\"\r\n                            type=\"text\" [(ngModel)]=\"personalData.financialadvisorname\">\r\n                        <!--div class=\"alert alert-danger\" [hidden]=\"street.valid\">Street Address is required</div-->\r\n                    </div>\r\n                </div>\r\n\r\n\r\n            </div>\r\n            <div class=\"row no-gutters bg-grey mt-100\">\r\n                <h4 class=\"text-center pt-15\">\r\n                    <b>eKYC</b>\r\n                </h4>\r\n                <p class=\"e-content\">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum\r\n                    has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley\r\n                    of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also\r\n                    the leap into electronic typesetting, remaining essentially unchanged.</p>\r\n                <div class=\"col-sm-3\"></div>\r\n                <div class=\"col-sm-6\">\r\n                    <div class=\"form-group\">\r\n                        <label class=\"control-label identityproof\" for=\"ekycidProof\">Proof of identity\r\n                            <i tooltip=\"Lorem Ipsum is simply dummy text of the printing and typesetting industry.\" class=\"fa fa-info-circle tooltip-icon\"\r\n                                aria-hidden=\"true\"></i>\r\n                        </label>\r\n                        <div class=\"upload-wrap df ai-c\">\r\n                            <label for=\"ekycidProof\">\r\n                                Browse\r\n                            </label>\r\n                            <input class=\"input-md custom-input ekycidProof\" #ekycIdProof=\"ngModel\" required id=\"ekycidProof\" name=\"ekycidProof\" type=\"file\"\r\n                                [(ngModel)]=\"personalData.ekycidProof\">\r\n                            <div class=\"fild\">\r\n                                {{personalData.ekycidProof || 'Upload a file'}}\r\n\r\n                            </div>\r\n                        </div>\r\n\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-sm-3\"></div>\r\n            </div>\r\n            <div class=\"text-center top-bottom-space\">\r\n                <button class=\"btn btn-outline-rounded common-btn-wid btn-default\" (click)=\"goToPrevious(workForm)\">\r\n                    <!--span style=\"margin-right:10px;\" class=\"glyphicon glyphicon-arrow-left\"></span-->Back</button>\r\n                <!--button class=\"btn btn-outline-rounded btn-info\" [disabled]=\"!personaldataForm.valid\" (click)=\"goToNext(workForm)\"> Next <span style=\"margin-left:10px;\" class=\"glyphicon glyphicon-arrow-right\"></span></button-->\r\n                <button class=\"btn btn-outline-rounded common-btn-wid btn-info\" (click)=\"goToNext(workForm)\"> Continue\r\n                    <!--span style=\"margin-left:10px;\" class=\"glyphicon glyphicon-arrow-right\"></span-->\r\n\r\n                </button>\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n</form>"

/***/ }),

/***/ "../../../../../src/app/personal-information/personal-information.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".main-heading {\n  font-weight: bold;\n  /* padding: 40px; */\n  padding-top: 40px;\n  padding-bottom: 40px;\n  /* color: #292E39; */ }\n\nform {\n  margin-bottom: 50px; }\n\n.ekycidProof {\n  width: 100%; }\n\nlabel {\n  font-size: 17px; }\n\n.subheading {\n  padding: 33px 0px;\n  font-size: 22px; }\n\n.container {\n  display: block;\n  position: relative;\n  padding-left: 35px;\n  margin-bottom: 12px;\n  cursor: pointer;\n  font-size: 22px;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none; }\n\n/* Hide the browser's default checkbox */\n.custom-checkbox input {\n  position: absolute;\n  opacity: 0;\n  cursor: pointer; }\n\n/* Create a custom checkbox */\n.checkmark {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 25px;\n  width: 25px;\n  background-color: #fff;\n  border: 1px solid #9DB1B2; }\n\nlabel.custom-checkbox {\n  margin-left: 25px;\n  vertical-align: middle;\n  padding-bottom: 22px;\n  color: #C3C3C3;\n  font-weight: normal;\n  font-size: 15px; }\n\n/* On mouse-over, add a grey background color */\n.custom-checkbox:hover input ~ .checkmark {\n  background-color: #fff; }\n\n/* When the checkbox is checked, add a blue background */\n.custom-checkbox input:checked ~ .checkmark {\n  background-color: #ccc;\n  border: 1px solid #9DB1B2; }\n\n.mr-15 {\n  margin-left: 15px; }\n\n.form-control:focus {\n  border-color: #EAAB00 !important;\n  outline: 0;\n  box-shadow: none !important; }\n\n/* Create the checkmark/indicator (hidden when not checked) */\n.checkmark:after {\n  content: \"\";\n  position: absolute;\n  display: none; }\n\n/* Show the checkmark when checked */\n.custom-checkbox input:checked ~ .checkmark:after {\n  display: block; }\n\n/* Style the checkmark/indicator */\n.custom-checkbox .checkmark:after {\n  left: 9px;\n  top: 5px;\n  width: 5px;\n  height: 10px;\n  border: solid white;\n  border-width: 0 3px 3px 0;\n  transform: rotate(45deg); }\n\n.top-section i {\n  background: #5C302D;\n  width: 100px;\n  height: 100px;\n  border-radius: 100px;\n  -webkit-border-radius: 100px;\n  position: relative;\n  left: 0;\n  top: 32px;\n  display: -ms-flexbox;\n  display: flex;\n  display: -webkit-flex;\n  -ms-flex-pack: center;\n  justify-content: center;\n  -ms-flex-align: center;\n  align-items: center;\n  font-size: 60px;\n  color: #fff;\n  display: -ms-inline-flexbox;\n  display: inline-flex; }\n\n.top-section.text-center {\n  width: 330px;\n  margin: 0 auto; }\n\n/******************************************/\n.stepwizard-step p {\n  margin-top: 10px; }\n\n.stepwizard-row {\n  display: table-row; }\n\n.stepwizard {\n  display: table;\n  width: 600px;\n  position: relative;\n  margin: 50px auto; }\n\n.stepwizard-step button[disabled] {\n  opacity: 1 !important;\n  filter: alpha(opacity=100) !important; }\n\n.stepwizard-row:before {\n  top: 45px;\n  bottom: 0;\n  position: absolute;\n  content: \" \";\n  width: 70%;\n  height: 1px;\n  background-color: #fff;\n  /*z-order: 0;*/\n  margin: 0 auto;\n  left: 85px; }\n\n.stepwizard-step {\n  display: table-cell;\n  text-align: center;\n  position: relative; }\n\n.btn-primary {\n  color: #fff;\n  background-color: #5C302D;\n  border-color: #5C302D; }\n\n.btn-primary.active, .btn-primary:active {\n  color: #fff;\n  background-color: #5C302D !important;\n  border-color: #5C302D !important; }\n\n.btn-circle {\n  width: 90px;\n  height: 90px;\n  text-align: center;\n  padding: 6px 0;\n  font-size: 30px;\n  line-height: 1.428571429;\n  border-radius: 100%; }\n\n.row.no-gutters {\n  margin-right: 30px;\n  margin-left: 30px; }\n\n.form-group {\n  margin: 0px !important;\n  padding-bottom: 20px; }\n\n.e-content {\n  padding: 15px 70px;\n  color: #A1A1A1; }\n\n.mt-100 {\n  margin-top: 100px; }\n\n.pt-15 {\n  padding-top: 15px; }\n\n.empty-label {\n  min-height: 27px; }\n\n.personal-information h2 {\n  font-weight: bold;\n  color: #063e4a;\n  font-size: 24px; }\n\n.personal-information .tooltip-icon {\n  color: #9B9B9B;\n  font-size: 16px;\n  cursor: pointer; }\n\n.p-l-45 {\n  padding-left: 45px !important; }\n\n.upload-wrap {\n  margin-top: 10px; }\n  .upload-wrap input {\n    display: none; }\n  .upload-wrap label {\n    margin: 0;\n    padding: 10px;\n    background: #ededee;\n    color: #5b6268;\n    font-weight: 600;\n    font-size: 12px;\n    border-radius: 5px 0 0 5px;\n    border: 1px solid #d2d2d2;\n    border-right: 0;\n    cursor: pointer; }\n  .upload-wrap .fild {\n    padding: 10px;\n    background: white;\n    border: 1px solid #d2d2d2;\n    font-size: 12px;\n    font-style: italic;\n    color: #b0a39e;\n    border-radius: 5px;\n    width: 100%;\n    text-align: left;\n    height: 38px; }\n\n.m-t-0 {\n  margin-top: 0 !important; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/personal-information/personal-information.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersonalInformationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_formData_service__ = __webpack_require__("../../../../../src/app/data/formData.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__review_information_review_information_component__ = __webpack_require__("../../../../../src/app/review-information/review-information.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_modal__ = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PersonalInformationComponent = (function () {
    function PersonalInformationComponent(router, formDataService, modalService) {
        this.router = router;
        this.formDataService = formDataService;
        this.modalService = modalService;
        this.title = 'Client Information';
    }
    PersonalInformationComponent.prototype.ngOnInit = function () {
        this.personalData = this.formDataService.getPersonaldata();
        console.log('Work feature loaded!--', this.personalData);
    };
    PersonalInformationComponent.prototype.save = function (form) {
        if (!form.valid) {
            return false;
        }
        this.formDataService.setPersonaldata(this.personalData);
        return true;
    };
    PersonalInformationComponent.prototype.goToPrevious = function (form) {
        if (this.save(form)) {
            // Navigate to the personal page
            this.router.navigate(['/personal']);
        }
    };
    PersonalInformationComponent.prototype.goToNext = function (form) {
        this.reviewInformation();
        /*if (this.save(form)) {
            this.reviewInformation()
           
        }*/
    };
    PersonalInformationComponent.prototype.reviewInformation = function () {
        var initialState = {
            title: 'REVIEW CLIENT INFORMATION',
            personalData: this.personalData
        };
        this.bsModalRef = this.modalService.show(__WEBPACK_IMPORTED_MODULE_3__review_information_review_information_component__["a" /* ReviewInformationComponent */], { initialState: initialState, class: 'modal-lg review-information-modal' });
    };
    return PersonalInformationComponent;
}());
PersonalInformationComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'mt-wizard-personal',
        template: __webpack_require__("../../../../../src/app/personal-information/personal-information.component.html"),
        styles: [__webpack_require__("../../../../../src/app/personal-information/personal-information.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__data_formData_service__["a" /* FormDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__data_formData_service__["a" /* FormDataService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_modal__["b" /* BsModalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_modal__["b" /* BsModalService */]) === "function" && _c || Object])
], PersonalInformationComponent);

var _a, _b, _c;
//# sourceMappingURL=personal-information.component.js.map

/***/ }),

/***/ "../../../../../src/app/review-information/review-information.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"review-information\">\r\n  <div class=\"modal-body modal-lg\">\r\n    <h4 class=\"text-center title\">{{title}}</h4>\r\n    <div class=\"row border-bottom review-rows\">\r\n      <div *ngIf = \"personalData.firstName !== ''\" class=\"col-sm-4 m-b-20\">\r\n        <label class=\"review-label\">First name</label>\r\n        <b>{{personalData.firstName}} </b>\r\n      </div>\r\n      <div *ngIf = \"personalData.middlename !== ''\" class=\"col-sm-4 m-b-20\">\r\n        <label class=\"review-label\">Middle name</label>\r\n        <b>{{personalData.middlename}}</b>\r\n      </div>\r\n      <div *ngIf = \"personalData.lastName !== ''\" class=\"col-sm-4 m-b-20\">\r\n        <label class=\"review-label\">Last name</label>\r\n        <b>{{personalData.lastName}}</b>\r\n      </div>\r\n      <div *ngIf = \"personalData.email !== ''\" class=\"col-sm-4 m-b-20\">\r\n        <label class=\"review-label\">Email</label>\r\n        <b>{{personalData.email}}</b>\r\n      </div>\r\n      <div *ngIf = \"personalData.confirmEmail !== ''\" class=\"col-sm-4 m-b-20\">\r\n        <label class=\"review-label\">Re Enter Email.</label>\r\n        <b>{{personalData.confirmEmail}}</b>\r\n      </div>\r\n      <div *ngIf = \"personalData.mobileno !== ''\" class=\"col-sm-4 m-b-20\">\r\n        <label class=\"review-label\">Mobile no.</label>\r\n        <b>{{personalData.mobileno}}</b>\r\n      </div>\r\n      <div *ngIf = \"personalData.gender !== ''\" class=\"col-sm-4 m-b-20\">\r\n        <label class=\"review-label\">Gender</label>\r\n        <b>{{personalData.gender}}</b>\r\n      </div>\r\n      <div *ngIf = \"personalData.civilstatus !== ''\" class=\"col-sm-4 m-b-20\">\r\n        <label class=\"review-label\">Civil Status</label>\r\n        <b>{{personalData.civilstatus}}</b>\r\n      </div>\r\n      <div *ngIf = \"personalData.tin !== ''\" class=\"col-sm-4 m-b-20\">\r\n        <label class=\"review-label\">TIN</label>\r\n        <b>{{personalData.tin}}</b>\r\n      </div>\r\n      <div *ngIf = \"personalData.sssgsis !== ''\" class=\"col-sm-4 m-b-20\">\r\n        <label class=\"review-label\">SSS/GSIS</label>\r\n        <b>{{personalData.sssgsis}}</b>\r\n      </div>\r\n      <div *ngIf = \"personalData.dob !== ''\" class=\"col-sm-4 m-b-20\">\r\n        <label class=\"review-label\">Date of birth</label>\r\n        <b>{{personalData.dob}}</b>\r\n      </div>\r\n      <div *ngIf = \"personalData.birthcountry !== ''\" class=\"col-sm-4 m-b-20\">\r\n        <label class=\"review-label\">Country of birth</label>\r\n        <b>{{personalData.birthcountry}}</b>\r\n      </div>\r\n      <div *ngIf = \"personalData.birthcity !== ''\" class=\"col-sm-4 m-b-20\">\r\n        <label class=\"review-label\">Citizenship</label>\r\n        <b>{{personalData.birthcity}}</b>\r\n      </div>\r\n      <div *ngIf = \"personalData.idproof !== ''\" class=\"col-sm-4 m-b-20\">\r\n        <label class=\"review-label\">\r\n          Proof of identity\r\n          <i class=\"fa fa-info-circle tooltip-icon\" tooltip=\"Lorem Ipsum is simply dummy text of the printing and typesetting industry.\"\r\n            aria-hidden=\"true\"></i>\r\n        </label>\r\n        <b>{{personalData.idproof}}</b>\r\n      </div>\r\n    </div>\r\n    <h4 class=\"text-center title\">YOUR ADDRESSES</h4>\r\n    <h5 class=\"text-left sub-title\">Permanent address</h5>\r\n    <div class=\"row border-bottom review-rows\">\r\n\r\n      <div *ngIf = \"personalData.street !== ''\" class=\"col-sm-6 m-b-20\">\r\n        <label class=\"review-label\">No. of street / Subdivision / Barangay</label>\r\n        <b>{{personalData.street}}</b>\r\n      </div>\r\n      <div *ngIf = \"personalData.state !== ''\" class=\"col-sm-6 m-b-20\">\r\n        <label class=\"review-label\">State / Province</label>\r\n        <b>{{personalData.state}}</b>\r\n      </div>\r\n      <div *ngIf = \"personalData.city !== ''\" class=\"col-sm-6 m-b-20\">\r\n        <label class=\"review-label\">City</label>\r\n        <b>{{personalData.city}}</b>\r\n      </div>\r\n      <div *ngIf = \"personalData.zipcode !== ''\" class=\"col-sm-6 m-b-20\">\r\n        <label class=\"review-label\">Zip Code</label>\r\n        <b>{{personalData.zipcode}}</b>\r\n      </div>\r\n    </div>\r\n\r\n    <h5 *ngIf = \"!personalData.isSameAsPermanent\" class=\"text-left sub-title\">Current Address</h5>\r\n    <div *ngIf = \"!personalData.isSameAsPermanent\" class=\"row border-bottom review-rows\">\r\n      <div *ngIf = \"personalData.currentStreet !== ''\" class=\"col-sm-6 m-b-20\">\r\n        <label class=\"review-label\">No. of street / Subdivision / Barangay</label>\r\n        <b>{{personalData.currentStreet}}</b>\r\n      </div>\r\n      <div *ngIf = \"personalData.currentState !== ''\" class=\"col-sm-6 m-b-20\">\r\n        <label class=\"review-label\">State / Province</label>\r\n        <b>{{personalData.currentState}}</b>\r\n      </div>\r\n      <div *ngIf = \"personalData.currentCity !== ''\" class=\"col-sm-6 m-b-20\">\r\n        <label class=\"review-label\">City</label>\r\n        <b>{{personalData.currentCity}}</b>\r\n      </div>\r\n      <div *ngIf = \"personalData.currentZipcode !== ''\" class=\"col-sm-6 m-b-20\">\r\n        <label class=\"review-label\">Zip Code</label>\r\n        <b>{{personalData.currentZipcode}}</b>\r\n      </div>\r\n    </div>\r\n\r\n    <h5 *ngIf = \"!personalData.naBusinessAddress\" class=\"text-left sub-title\">Business Address</h5>\r\n    <div *ngIf = \"!personalData.naBusinessAddress\" class=\"row border-bottom review-rows\">\r\n      <div *ngIf = \"personalData.businessStreet !== ''\" class=\"col-sm-6 m-b-20\">\r\n        <label class=\"review-label\">No. of street / Subdivision / Barangay</label>\r\n        <b>{{personalData.businessStreet}}</b>\r\n      </div>\r\n      <div *ngIf = \"personalData.businessState !== ''\" class=\"col-sm-6 m-b-20\">\r\n        <label class=\"review-label\">State / Province</label>\r\n        <b>{{personalData.businessState}}</b>\r\n      </div>\r\n      <div *ngIf = \"personalData.businesscity !== ''\" class=\"col-sm-6 m-b-20\">\r\n        <label class=\"review-label\">City</label>\r\n        <b>{{personalData.businesscity}}</b>\r\n      </div>\r\n      <div *ngIf = \"personalData.businessZipcode !== ''\" class=\"col-sm-6 m-b-20\">\r\n        <label class=\"review-label\">Zip Code</label>\r\n        <b>{{personalData.businessZipcode}}</b>\r\n      </div>\r\n    </div>\r\n\r\n    <h5 class=\"text-left sub-title\">Preferred Mailing Address</h5>\r\n\r\n    <div class=\"row border-bottom review-rows\">\r\n      <div *ngIf = \"personalData.mailingaddress !== ''\" class=\"col-sm-4 m-b-20 df-wrap\">\r\n        <label class=\"review-label m-r-10\">Prefered mailing address</label>\r\n        <b>{{personalData.mailingaddress}}</b>\r\n      </div>\r\n    </div>\r\n\r\n    <h4 class=\"text-center title\">WORK DETAILS</h4>\r\n\r\n    <div class=\"row border-bottom review-rows\">\r\n      <div *ngIf = \"personalData.primaryoccupation !== ''\" class=\"col-sm-6 m-b-20\">\r\n        <label class=\"review-label\">Primary occupation</label>\r\n        <b>{{personalData.primaryoccupation}}</b>\r\n      </div>\r\n      <div *ngIf = \"personalData.otheroccupation !== ''\" class=\"col-sm-6 m-b-20\">\r\n          <label class=\"review-label\">Other occupation</label>\r\n          <b>{{personalData.otheroccupation}}</b>\r\n        </div>\r\n      <div *ngIf = \"personalData.businessnature !== ''\" class=\"col-sm-6 m-b-20\">\r\n        <label class=\"review-label\">Nature of business</label>\r\n        <b>{{personalData.businessnature}}</b>\r\n      </div>\r\n      <div *ngIf = \"personalData.otherbusinessnature !== ''\" class=\"col-sm-6 m-b-20\">\r\n          <label class=\"review-label\">Other Nature of business</label>\r\n          <b>{{personalData.otherbusinessnature}}</b>\r\n        </div>\r\n      <div *ngIf = \"personalData.employername !== ''\" class=\"col-sm-6 m-b-20\">\r\n        <label class=\"review-label\">Name of employer</label>\r\n        <b> {{personalData.employername}}</b>\r\n      </div>\r\n      <div *ngIf = \"personalData.annualincome !== ''\" class=\"col-sm-6 m-b-20\">\r\n        <label class=\"review-label\">Annual income</label>\r\n        <b>{{personalData.annualincome}}</b>\r\n      </div>\r\n      <div *ngIf = \"personalData.sourcefunds !== ''\" class=\"col-sm-6 m-b-20\">\r\n        <label class=\"review-label\">Source of funds</label>\r\n        <b>{{personalData.sourcefunds}}</b>\r\n      </div>\r\n      <div *ngIf = \"personalData.othersourcefunds !== ''\" class=\"col-sm-6 m-b-20\">\r\n          <label class=\"review-label\">Other source of funds</label>\r\n          <b>{{personalData.othersourcefunds}}</b>\r\n        </div>\r\n    </div>\r\n\r\n    <h5 *ngIf = \"(personalData.financialadvisorname !== '') || (personalData.financialadvisorcode !== '')\" class=\"text-center sub-title\">Financial advisor information</h5>\r\n    <div class=\"row review-rows\">\r\n      <div *ngIf = \"personalData.financialadvisorcode !== ''\" class=\"col-sm-6 m-b-20\">\r\n        <label class=\"review-label\">Financial advisor code</label>\r\n        <b>{{personalData.financialadvisorcode}}</b>\r\n      </div>\r\n      <div *ngIf = \"personalData.financialadvisorname !== ''\" class=\"col-sm-6 m-b-20\">\r\n        <label class=\"review-label\">Financial advisor name</label>\r\n        <b>{{personalData.financialadvisorname}}</b>\r\n      </div>\r\n    </div>\r\n\r\n    <h4 class=\"text-center title\">IDENTITY VALIDATION</h4>\r\n    <div class=\"row review-rows\">\r\n        <div class=\"col-sm-12 m-b-20 df-wrap\">\r\n          <label class=\"review-label m-r-10\">Submitted selfie file:</label>\r\n          <b>{{personalData.ekycidProof}}</b>\r\n        </div>\r\n      </div>\r\n    <div class=\"row review-rows bg-grey\">\r\n      <div class=\"col-sm-4 m-b-20\">\r\n        <label class=\"review-label\">Investment amount</label>\r\n        <b>Php 50,000.00</b>\r\n      </div>\r\n      <div class=\"col-sm-4 m-b-20\">\r\n        <label class=\"review-label\">Admin charges(sales load + VAT)</label>\r\n        <b>Php 0.00</b>\r\n      </div>\r\n      <div class=\"col-sm-4 m-b-20\">\r\n        <label class=\"review-label\">Total investible amount</label>\r\n        <b class=\"investible-amount\">Php 50,000.00</b>\r\n      </div>\r\n\r\n    </div>\r\n\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button type=\"button\" class=\"btn btn-outline-rounded btn-default\" (click)=\"bsModalRef.hide()\">Back</button>\r\n    <button type=\"button\" class=\"btn btn-outline-rounded btn-info\" (click)=\"oprenTermsAndConditions()\">Continue</button>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/review-information/review-information.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".review-information .modal-body {\n  padding: 40px; }\n  .review-information .modal-body .title {\n    font-weight: bold;\n    margin-bottom: 30px;\n    color: #003946; }\n  .review-information .modal-body .sub-title {\n    margin-bottom: 18px;\n    font-size: 18px; }\n  .review-information .modal-body .review-rows {\n    padding-bottom: 15px;\n    margin-bottom: 30px; }\n    .review-information .modal-body .review-rows.bg-grey {\n      padding: 30px 0; }\n  .review-information .modal-body .m-b-20 {\n    margin-bottom: 20px; }\n  .review-information .modal-body .investible-amount {\n    color: #D0651E;\n    font-size: 24px; }\n\n.review-information .modal-footer {\n  -ms-flex-pack: center;\n      justify-content: center;\n  border: 0px;\n  text-align: center;\n  padding-bottom: 50px; }\n  .review-information .modal-footer .btn-outline-rounded {\n    margin: 0; }\n  .review-information .modal-footer button {\n    width: 200px; }\n\n.review-information label.review-label {\n  display: block;\n  margin-bottom: 2px;\n  font-family: 'Noto Sans', sans-serif;\n  font-size: 16px; }\n\n.review-information b {\n  color: #575757;\n  font-size: 16px;\n  font-family: 'Noto Sans', sans-serif; }\n\n.review-information .border-bottom {\n  border-bottom: 0.08rem solid #DBDBDB !important; }\n\n/* width */\n::-webkit-scrollbar {\n  width: 15px; }\n\n/* Track */\n::-webkit-scrollbar-track {\n  background: #fff; }\n\n/* Handle */\n::-webkit-scrollbar-thumb {\n  background: #EAAB00;\n  border-radius: 10px; }\n\n/* Handle on hover */\n::-webkit-scrollbar-thumb:hover {\n  background: #EAAB00; }\n\n.df-wrap {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap; }\n\n.m-r-10 {\n  margin-right: 20px; }\n\n@media screen and (min-width: 400px) and (max-width: 480px) {\n  .review-information .modal-footer button {\n    width: 160px; } }\n\n@media screen and (max-width: 400px) {\n  .review-information .modal-footer button {\n    width: 134px; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/review-information/review-information.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReviewInformationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__term_condition_term_condition_component__ = __webpack_require__("../../../../../src/app/term-condition/term-condition.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap_modal__ = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap_modal_bs_modal_ref_service__ = __webpack_require__("../../../../ngx-bootstrap/modal/bs-modal-ref.service.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ReviewInformationComponent = (function () {
    function ReviewInformationComponent(modalService, bsModalRef) {
        this.modalService = modalService;
        this.bsModalRef = bsModalRef;
        this.title = '';
        this.personalData = '';
    }
    ReviewInformationComponent.prototype.ngOnInit = function () {
    };
    ReviewInformationComponent.prototype.oprenTermsAndConditions = function () {
        this.bsModalRef.hide();
        var initialState = {
            title: 'TERMS AND CONDITION',
        };
        this.bsModalRef = this.modalService.show(__WEBPACK_IMPORTED_MODULE_1__term_condition_term_condition_component__["a" /* TermsConditionComponent */], { initialState: initialState, class: 'modal-md terms-conditions-modal' });
    };
    return ReviewInformationComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], ReviewInformationComponent.prototype, "title", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], ReviewInformationComponent.prototype, "personalData", void 0);
ReviewInformationComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'mt-wizard-personal',
        template: __webpack_require__("../../../../../src/app/review-information/review-information.component.html"),
        styles: [__webpack_require__("../../../../../src/app/review-information/review-information.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap_modal__["b" /* BsModalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap_modal__["b" /* BsModalService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap_modal_bs_modal_ref_service__["a" /* BsModalRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap_modal_bs_modal_ref_service__["a" /* BsModalRef */]) === "function" && _b || Object])
], ReviewInformationComponent);

var _a, _b;
//# sourceMappingURL=review-information.component.js.map

/***/ }),

/***/ "../../../../../src/app/term-condition/term-condition.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"term-conditions\">\r\n  <div class=\"modal-body\">\r\n    <h3 class=\"text-center t-schooner pb-4 mb-4  font-weight-bold\">{{title}}</h3>\r\n    <h6 class=\"text-center\">(scroll down to accept)</h6>\r\n    <div class=\"p-4 declaration-modal-content\">\r\n      <div class=\"declaration-text pr-4\">\r\n        <h6><b class=\"pb-2\">PART III: CLIENT DECLARATIONS</b></h6>\r\n        <div class=\"pb-2 client-declaration-common-font\">\r\n          <b>FINANCIAL NEEDS ANALYSIS:</b> <span>I understand that this FNA is based on information and data which I provided.The\r\n          FNA is designed to help me assess my financial needs,which I know will change over time depending on my life stage\r\n          and objectives.Therefore any suggestions and recommendations in the FNA are not guaranteed and complete, and are\r\n          general advice based on my current situation.The FNA does not require me to implement any suggestions and recommendations\r\n          therein.</span>\r\n        </div>\r\n        <div class=\"pb-2 client-declaration-common-font\">\r\n          <b>RISK PROFILE QUESTIONNAIRE:</b> <span>If,however,I resolve to allocate my investment in VUL funds diffrently from results\r\n          of my RPQ,either now or in the future,I hold SLOCPI,its representative,advisors,employees,officers,directors and\r\n          succcessor-in-interest free and harmless from any and all liabilities,claims,opportunity cost andcauses of action\r\n          whatever kind or nature that may effect me as a result thereof.</span>\r\n        </div>\r\n        <div class=\"pb-2 client-declaration-common-font\">\r\n          <b>DATA PRIVACY:</b> <span>I authorize the company, its employees,duly authorized representatives,related companies,third\r\n          party service providors and vendors and consent to use, processing and exchange of information needed for underwritting\r\n          and adminstration and adjudicating claims under this arrsurance with any person or organization who has relevant\r\n          information about me including institutions ,investigative agencies resurers and reinsurers.The company may also\r\n          use my contact details,demographic information and policy detail to contact with me marketing and promotional information\r\n          regarding financial,insurance products and study/surveys to be conducted company including phone calls,mail,email,SMS\r\n          or any type of electronic message.The company may future use personal data for the purposes of providing service\r\n          to me or for other reasonable purposes which are related to services it provide or improvement/upgrade in its systems\r\n          and bussiness processes(inculding but not limited to data analtics automated processing etc) This authorization\r\n          and consent are as valid as a signed document and shall continue to have effect throughout the duration of my coverage\r\n          under my assrurance policy and or until expiration of the retention limit set by laws and regulations from account\r\n          closure and the period set until destruction or disposal of records,unless withdrawn in writting or withheld due\r\n          to changes in the information supplied by the company.I certify that, I have read , understood and agree with the\r\n          declarations and authorization above,including Sun life's privacy policy found in http://apps.sunlife.com.ph/privacy.</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button type=\"button\" class=\"btn btn-outline-rounded btn-default\" (click)=\"bsModalRef.hide()\">Cancel</button>\r\n    <button type=\"button\" class=\"btn btn-outline-rounded btn-info\" (click)=\"paymentMethod()\">I AGREE</button>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/term-condition/term-condition.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".term-conditions .modal-footer {\n  -ms-flex-pack: center;\n      justify-content: center;\n  border: 0px; }\n\n.term-conditions .declaration-text {\n  overflow: auto;\n  max-height: 400px;\n  text-align: justify; }\n\n.term-conditions .modal-footer {\n  -ms-flex-pack: center;\n      justify-content: center;\n  border: 0px;\n  text-align: center;\n  padding-bottom: 50px; }\n  .term-conditions .modal-footer .btn-outline-rounded {\n    margin: 0; }\n  .term-conditions .modal-footer button {\n    width: 200px; }\n\n.term-conditions .client-declaration-common-font {\n  font-size: 13px; }\n  .term-conditions .client-declaration-common-font span {\n    word-wrap: break-word; }\n\n.term-conditions .declaration-modal-content {\n  border: 1px solid;\n  padding: 10px; }\n\n/* width */\n::-webkit-scrollbar {\n  width: 15px; }\n\n/* Track */\n::-webkit-scrollbar-track {\n  background: #fff; }\n\n/* Handle */\n::-webkit-scrollbar-thumb {\n  background: #ccc;\n  border-radius: 10px; }\n\n/* Handle on hover */\n::-webkit-scrollbar-thumb:hover {\n  background: #ccc; }\n\n@media screen and (min-width: 400px) and (max-width: 480px) {\n  .term-conditions .modal-footer button {\n    width: 160px; } }\n\n@media screen and (max-width: 400px) {\n  .term-conditions .modal-footer button {\n    width: 134px; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/term-condition/term-condition.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TermsConditionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap_modal_bs_modal_ref_service__ = __webpack_require__("../../../../ngx-bootstrap/modal/bs-modal-ref.service.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TermsConditionComponent = (function () {
    function TermsConditionComponent(router, bsModalRef) {
        this.router = router;
        this.bsModalRef = bsModalRef;
        this.title = '';
    }
    TermsConditionComponent.prototype.ngOnInit = function () {
    };
    TermsConditionComponent.prototype.paymentMethod = function () {
        this.bsModalRef.hide();
        this.router.navigate(['/checkout']);
    };
    return TermsConditionComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], TermsConditionComponent.prototype, "title", void 0);
TermsConditionComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-term-condition',
        template: __webpack_require__("../../../../../src/app/term-condition/term-condition.component.html"),
        styles: [__webpack_require__("../../../../../src/app/term-condition/term-condition.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap_modal_bs_modal_ref_service__["a" /* BsModalRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap_modal_bs_modal_ref_service__["a" /* BsModalRef */]) === "function" && _b || Object])
], TermsConditionComponent);

var _a, _b;
//# sourceMappingURL=term-condition.component.js.map

/***/ }),

/***/ "../../../../../src/app/thank-you-page/thank-you-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-wrap\">\n  <h3 class=\"bold text-center\">\n    Congratulations for taking a step towards a more prosperous life!\n  </h3>\n  <p class=\"text-center m-40-0\">\n    Your investment application reference number is <b> Reference # </b>\n  </p>\n  <p>\n    A transaction summary was sent to <b> email@email.com</b>.\n  </p>\n  <p>\n    To complete your application, personally visit any of the branches listed below for account funding and additional documents\n    submission. Our branches are open Monday to Friday (except during public holidays) from 9am to 5pm:\n  </p>\n  <ul>\n    <li>Additional government-issued valid ID</li>\n    <li>List of banks where you have maintained or are maintaining an account,</li>\n    <li>List of companies where you are a director, officer, or stockholder</li>\n  </ul>\n  <p class=\"m-0\">\n    <b>\n      For Privately Employed or Self-employed Individuals:\n    </b>\n  </p>\n  <ul>\n    <li>Latest ITR or Certificate of Employment with Compensation or Updated Business Financial Statements</li>\n  </ul>\n  <p class=\"m-0\">\n    <b>\n      For Government Officials and Employees:\n    </b>\n  </p>\n  <ul>\n    <li>Latest Statement of Assets, Liabilities and Net (SALN)</li>\n  </ul>\n  <p>\n    We will be able to continue with the application processing upon receipt and validation of the additional requirements.\n  </p>\n  <p class=\"m-b-40\">\n    For inquiries, you may get in touch with us through +63(2) 849-9888 or send us an email at sunlink@sunlife.com.\n  </p>\n\n\n  <h5 class=\"bold m-b-20\">\n    METRO MANILA\n  </h5>\n  <div class=\"p-0\">\n    <div class=\"row borer-bot\">\n      <div class=\"col-md-4 col-lg-4 col-sm-6 col-xs-12 m-b-40\">\n        <div class=\"df ai-c\">\n          <i class=\"fas fa-map-marker-alt jc-c df ai-c with-25\"></i>\n          <span class=\"color-orange bold\">\n            BGC FINANCIAL STORE\n          </span>\n        </div>\n        <p class=\"p-l-25 text-box\">\n          G/F Sun Life Center Building Rizal Drive cor. 5th Avenue\n        </p>\n        <div class=\"df ai-c\">\n          <i class=\"fas fa-phone jc-c df ai-c with-25\"></i>\n          <span>\n            (02)8732132\n          </span>\n        </div>\n      </div>\n      <div class=\"col-md-4 col-lg-4 col-sm-6 col-xs-12 m-b-40\">\n        <div class=\"df ai-c\">\n          <i class=\"fas fa-map-marker-alt jc-c df ai-c with-25\"></i>\n          <span class=\"color-orange bold\">\n            BGC FINANCIAL STORE\n          </span>\n        </div>\n        <p class=\"p-l-25 text-box\">\n          G/F Sun Life Center Building Rizal Drive cor. 5th Avenue\n        </p>\n        <div class=\"df ai-c\">\n          <i class=\"fas fa-phone jc-c df ai-c with-25\"></i>\n          <span>\n            (02)8732132\n          </span>\n        </div>\n      </div>\n      <div class=\"col-md-4 col-lg-4 col-sm-6 col-xs-12 m-b-40\">\n        <div class=\"df ai-c\">\n          <i class=\"fas fa-map-marker-alt jc-c df ai-c with-25\"></i>\n          <span class=\"color-orange bold\">\n            BGC FINANCIAL STORE\n          </span>\n        </div>\n        <p class=\"p-l-25 text-box\">\n          G/F Sun Life Center Building Rizal Drive cor. 5th Avenue\n        </p>\n        <div class=\"df ai-c\">\n          <i class=\"fas fa-phone jc-c df ai-c with-25\"></i>\n          <span>\n            (02)8732132\n          </span>\n        </div>\n      </div>\n    </div>\n  </div>\n  <h5 class=\"bold m-b-20\">\n    VISAYAS\n  </h5>\n  <div class=\"p-0\">\n    <div class=\"row\">\n      <div class=\"col-md-4 col-lg-4 col-sm-6 col-xs-12 m-b-40\">\n        <div class=\"df ai-c\">\n          <i class=\"fas fa-map-marker-alt jc-c df ai-c with-25\"></i>\n          <span class=\"color-orange bold\">\n            BGC FINANCIAL STORE\n          </span>\n        </div>\n        <p class=\"p-l-25 text-box\">\n          G/F Sun Life Center Building Rizal Drive cor. 5th Avenue\n        </p>\n        <div class=\"df ai-c\">\n          <i class=\"fas fa-phone jc-c df ai-c with-25\"></i>\n          <span>\n            (02)8732132\n          </span>\n        </div>\n      </div>\n      <div class=\"col-md-4 col-lg-4 col-sm-6 col-xs-12 m-b-40\">\n        <div class=\"df ai-c\">\n          <i class=\"fas fa-map-marker-alt jc-c df ai-c with-25\"></i>\n          <span class=\"color-orange bold\">\n            BGC FINANCIAL STORE\n          </span>\n        </div>\n        <p class=\"p-l-25 text-box\">\n          G/F Sun Life Center Building Rizal Drive cor. 5th Avenue\n        </p>\n        <div class=\"df ai-c\">\n          <i class=\"fas fa-phone jc-c df ai-c with-25\"></i>\n          <span>\n            (02)8732132\n          </span>\n        </div>\n      </div>\n      <div class=\"col-md-4 col-lg-4 col-sm-6 col-xs-12 m-b-40\">\n        <div class=\"df ai-c\">\n          <i class=\"fas fa-map-marker-alt jc-c df ai-c with-25\"></i>\n          <span class=\"color-orange bold\">\n            BGC FINANCIAL STORE\n          </span>\n        </div>\n        <p class=\"p-l-25 text-box\">\n          G/F Sun Life Center Building Rizal Drive cor. 5th Avenue\n        </p>\n        <div class=\"df ai-c\">\n          <i class=\"fas fa-phone jc-c df ai-c with-25\"></i>\n          <span>\n            (02)8732132\n          </span>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/thank-you-page/thank-you-page.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".bold {\n  font-weight: bold; }\n\n.m-40-0 {\n  margin: 40px 0; }\n\np {\n  margin-bottom: 20px;\n  color: #666666; }\n\nul {\n  margin-bottom: 20px;\n  color: #666666; }\n\n.m-0 {\n  margin: 0 !important; }\n\n.color-orange {\n  color: #d29053; }\n\n.df {\n  display: -ms-flexbox;\n  display: flex; }\n\n.ai-c {\n  -ms-flex-align: center;\n      align-items: center; }\n\n.jc-c {\n  -ms-flex-pack: center;\n      justify-content: center; }\n\n.p-l-25 {\n  padding-left: 25px; }\n\n.with-25 {\n  width: 25px; }\n\n.fa-phone {\n  transform: rotate(100deg); }\n\n.text-box {\n  max-width: 224px; }\n\n.p-0 {\n  padding: 0; }\n\n.m-b-40 {\n  margin-bottom: 40px; }\n\n.borer-bot {\n  border-bottom: 1px solid #f1f1f1; }\n\n.m-b-20 {\n  margin-bottom: 20px; }\n\n.main-wrap {\n  max-width: 900px;\n  margin: auto; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/thank-you-page/thank-you-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThankYouPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ThankYouPageComponent = (function () {
    function ThankYouPageComponent() {
    }
    ThankYouPageComponent.prototype.ngOnInit = function () {
    };
    return ThankYouPageComponent;
}());
ThankYouPageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-thank-you-page',
        template: __webpack_require__("../../../../../src/app/thank-you-page/thank-you-page.component.html"),
        styles: [__webpack_require__("../../../../../src/app/thank-you-page/thank-you-page.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], ThankYouPageComponent);

//# sourceMappingURL=thank-you-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/workflow/workflow-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkflowGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__workflow_service__ = __webpack_require__("../../../../../src/app/workflow/workflow.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WorkflowGuard = (function () {
    function WorkflowGuard(router, workflowService) {
        this.router = router;
        this.workflowService = workflowService;
    }
    WorkflowGuard.prototype.canActivate = function (route, state) {
        var path = route.routeConfig.path;
        return this.verifyWorkFlow(path);
    };
    WorkflowGuard.prototype.verifyWorkFlow = function (path) {
        console.log("Entered '" + path + "' path.");
        // If any of the previous steps is invalid, go back to the first invalid step
        var firstPath = this.workflowService.getFirstInvalidStep(path);
        if (firstPath.length > 0) {
            console.log("Redirected to '" + firstPath + "' path which it is the first invalid step.");
            var url = "/" + firstPath;
            this.router.navigate([url]);
            return false;
        }
        ;
        return true;
    };
    return WorkflowGuard;
}());
WorkflowGuard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__workflow_service__["a" /* WorkflowService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__workflow_service__["a" /* WorkflowService */]) === "function" && _b || Object])
], WorkflowGuard);

var _a, _b;
//# sourceMappingURL=workflow-guard.service.js.map

/***/ }),

/***/ "../../../../../src/app/workflow/workflow.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return STEPS; });
var STEPS = {
    ipq: 'personal',
    // work: 'work',
    personalinformation: 'personalinformation',
    // address: 'address',
    checkout: 'checkout'
};
//# sourceMappingURL=workflow.model.js.map

/***/ }),

/***/ "../../../../../src/app/workflow/workflow.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkflowService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__workflow_model__ = __webpack_require__("../../../../../src/app/workflow/workflow.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var WorkflowService = (function () {
    function WorkflowService() {
        this.workflow = [
            { step: __WEBPACK_IMPORTED_MODULE_1__workflow_model__["a" /* STEPS */].ipq, valid: true },
            //{ step: STEPS.work, valid: false },
            { step: __WEBPACK_IMPORTED_MODULE_1__workflow_model__["a" /* STEPS */].personalinformation, valid: true },
            // { step: STEPS.address, valid: false },
            { step: __WEBPACK_IMPORTED_MODULE_1__workflow_model__["a" /* STEPS */].checkout, valid: true }
        ];
    }
    WorkflowService.prototype.validateStep = function (step) {
        // If the state is found, set the valid field to true 
        var found = false;
        for (var i = 0; i < this.workflow.length && !found; i++) {
            if (this.workflow[i].step === step) {
                found = this.workflow[i].valid = true;
            }
        }
    };
    WorkflowService.prototype.resetSteps = function () {
        // Reset all the steps in the Workflow to be invalid
        this.workflow.forEach(function (element) {
            element.valid = false;
        });
    };
    WorkflowService.prototype.getFirstInvalidStep = function (step) {
        // If all the previous steps are validated, return blank
        // Otherwise, return the first invalid step
        var found = false;
        var valid = true;
        var redirectToStep = '';
        for (var i = 0; i < this.workflow.length && !found && valid; i++) {
            var item = this.workflow[i];
            if (item.step === step) {
                found = true;
                redirectToStep = '';
            }
            else {
                valid = item.valid;
                redirectToStep = item.step;
            }
        }
        return redirectToStep;
    };
    return WorkflowService;
}());
WorkflowService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])()
], WorkflowService);

//# sourceMappingURL=workflow.service.js.map

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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map