webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n<!--<app-wizard *ngIf=\"!showproposals\" (finish)=\"amount = $event; showproposals = true;\"></app-wizard>-->\n\n<app-health *ngIf=\"!showproposals\" (finish)=\"amount = $event; showproposals = true;\"></app-health>\n\n<app-proposals *ngIf=\"showproposals\" [amount]=\"amount\"></app-proposals>\n<!--<app-proposals [amount]=\"amount\"></app-proposals>-->\n\n<app-footer></app-footer>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__wizard_wizard_component__ = __webpack_require__("../../../../../src/app/wizard/wizard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__wizard_info_info_component__ = __webpack_require__("../../../../../src/app/wizard/info/info.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_footer_footer_component__ = __webpack_require__("../../../../../src/app/shared/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_header_header_component__ = __webpack_require__("../../../../../src/app/shared/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__wizard_calculator_side_panel_calculator_side_panel_component__ = __webpack_require__("../../../../../src/app/wizard/calculator-side-panel/calculator-side-panel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__wizard_genderselect_genderselect_component__ = __webpack_require__("../../../../../src/app/wizard/genderselect/genderselect.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__wizard_birthdate_birthdate_component__ = __webpack_require__("../../../../../src/app/wizard/birthdate/birthdate.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__wizard_smoking_smoking_component__ = __webpack_require__("../../../../../src/app/wizard/smoking/smoking.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__wizard_calculatorsummary_calculatorsummary_component__ = __webpack_require__("../../../../../src/app/wizard/calculatorsummary/calculatorsummary.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__wizard_profession_profession_component__ = __webpack_require__("../../../../../src/app/wizard/profession/profession.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__proposals_proposals_component__ = __webpack_require__("../../../../../src/app/proposals/proposals.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__shared_autocomplit_autocomplit_component__ = __webpack_require__("../../../../../src/app/shared/autocomplit/autocomplit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__wizard_calculatorsummary_calculatorsummary_modal_calculatorsummary_modal_component__ = __webpack_require__("../../../../../src/app/wizard/calculatorsummary/calculatorsummary-modal/calculatorsummary-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__wizard_proposals_modal_calcut_modal_calcut_component__ = __webpack_require__("../../../../../src/app/wizard/proposals/modal-calcut/modal-calcut.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__wizard_proposals_modal_chose_modal_chose_component__ = __webpack_require__("../../../../../src/app/wizard/proposals/modal-chose/modal-chose.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__health_health_component__ = __webpack_require__("../../../../../src/app/health/health.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__wizard_private_health_personalinfo_private_health_personalinfo_component__ = __webpack_require__("../../../../../src/app/wizard/private-health-personalinfo/private-health-personalinfo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__wizard_kupot_holim_kupot_holim_component__ = __webpack_require__("../../../../../src/app/wizard/kupot-holim/kupot-holim.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__wizard_health_insurance_health_insurance_component__ = __webpack_require__("../../../../../src/app/wizard/health-insurance/health-insurance.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__shared_service_store_service__ = __webpack_require__("../../../../../src/app/shared/service/store.service.ts");
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
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_3__wizard_wizard_component__["a" /* WizardComponent */],
            __WEBPACK_IMPORTED_MODULE_4__wizard_info_info_component__["a" /* InfoComponent */],
            __WEBPACK_IMPORTED_MODULE_5__shared_footer_footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_6__shared_header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_7__wizard_calculator_side_panel_calculator_side_panel_component__["a" /* CalculatorSidePanelComponent */],
            __WEBPACK_IMPORTED_MODULE_8__wizard_genderselect_genderselect_component__["a" /* GenderselectComponent */],
            __WEBPACK_IMPORTED_MODULE_9__wizard_birthdate_birthdate_component__["a" /* BirthdateComponent */],
            __WEBPACK_IMPORTED_MODULE_10__wizard_smoking_smoking_component__["a" /* SmokingComponent */],
            __WEBPACK_IMPORTED_MODULE_11__wizard_calculatorsummary_calculatorsummary_component__["a" /* CalculatorsummaryComponent */],
            __WEBPACK_IMPORTED_MODULE_12__wizard_profession_profession_component__["a" /* ProfessionComponent */],
            __WEBPACK_IMPORTED_MODULE_13__proposals_proposals_component__["a" /* ProposalsComponent */],
            __WEBPACK_IMPORTED_MODULE_15__shared_autocomplit_autocomplit_component__["a" /* AutocomplitComponent */],
            __WEBPACK_IMPORTED_MODULE_16__wizard_calculatorsummary_calculatorsummary_modal_calculatorsummary_modal_component__["a" /* CalculatorsummaryModalComponent */],
            __WEBPACK_IMPORTED_MODULE_17__wizard_proposals_modal_calcut_modal_calcut_component__["a" /* ModalCalcutComponent */],
            __WEBPACK_IMPORTED_MODULE_18__wizard_proposals_modal_chose_modal_chose_component__["a" /* ModalChoseComponent */],
            __WEBPACK_IMPORTED_MODULE_20__health_health_component__["a" /* HealthComponent */],
            __WEBPACK_IMPORTED_MODULE_21__wizard_private_health_personalinfo_private_health_personalinfo_component__["a" /* PrivateHealthPersonalinfoComponent */],
            __WEBPACK_IMPORTED_MODULE_22__wizard_kupot_holim_kupot_holim_component__["a" /* KupotHolimComponent */],
            __WEBPACK_IMPORTED_MODULE_23__wizard_health_insurance_health_insurance_component__["a" /* HealthInsuranceComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_19__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_14__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_24__shared_service_store_service__["a" /* StoreService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/health/health.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".calculator{\r\n    padding-bottom: 100px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/health/health.component.html":
/***/ (function(module, exports) {

module.exports = "<main id=\"main\" class=\"container-fluid\" tabindex=\"-1\">\n  <!-- section 1 -->\n  <section class=\"row\">\n    <div class=\"calculator clearfix\">\n\n      <app-info *ngIf=\"activeTab === 'info'\" (next)=\"nextCheck($event)\"></app-info>\n      <app-genderselect *ngIf=\"activeTab === 'genderselect'\" (next)=\"nextCheck($event)\"></app-genderselect>\n      <app-private-health-personalinfo *ngIf=\"activeTab === 'private-health-personalinfo'\" (next)=\"nextCheck($event)\"></app-private-health-personalinfo>\n      <!--<app-private-health-personalinfo  (next)=\"nextCheck($event)\"></app-private-health-personalinfo>-->\n      <app-kupot-holim  *ngIf=\"activeTab === 'kupot-holim'\" (next)=\"nextCheck($event)\"></app-kupot-holim>\n      <app-health-insurance *ngIf=\"activeTab === 'health-insurance'\" (next)=\"nextCheck($event)\"></app-health-insurance>\n      <!--<app-health-insurance (next)=\"nextCheck($event)\"></app-health-insurance>-->\n      <app-calculator-side-panel [options]=\"health\"></app-calculator-side-panel>\n    </div>\n  </section>\n</main>\n"

/***/ }),

/***/ "../../../../../src/app/health/health.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HealthComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_models_health__ = __webpack_require__("../../../../../src/app/shared/models/health.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HealthComponent = (function () {
    function HealthComponent() {
        this.health = new __WEBPACK_IMPORTED_MODULE_1__shared_models_health__["a" /* Health */]();
        this.activeTab = 'info';
        // activeTab = 'private-health-personalinfo';
        this.finish = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
    }
    HealthComponent.prototype.ngOnInit = function () {
    };
    HealthComponent.prototype.nextCheck = function (e) {
        console.log(e);
        if (e.finish) {
            this.finish.emit(e.amount);
        }
        if (e.back) {
            this.activeTab = e.back;
            return;
        }
        switch (e.type) {
            case "info":
                this.health.lastName = e.model.lastName;
                this.health.privateName = e.model.firstName;
                this.health.number = e.model.phone;
                this.health.prefix = e.model.prefix;
                this.health.email = e.model.email;
                break;
            case "genderselect":
                this.health.gender = e.model;
                break;
            case "private-health-personalinfo":
                this.health.birthDate = e.date;
                this.health.doesSmoke = e.smoking;
                break;
            case "kupot-holim":
                // this.risk.doesSmoke = e.model;
                break;
            case "health-insurance":
                break;
        }
        this.activeTab = e.naxtPage;
    };
    return HealthComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
    __metadata("design:type", Object)
], HealthComponent.prototype, "finish", void 0);
HealthComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-health',
        template: __webpack_require__("../../../../../src/app/health/health.component.html"),
        styles: [__webpack_require__("../../../../../src/app/health/health.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HealthComponent);

//# sourceMappingURL=health.component.js.map

/***/ }),

/***/ "../../../../../src/app/proposals/proposals.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".resultsWrapper .results_box .results_toggle{\r\n    font-size: 1.42857em;\r\n    line-height: 24px;\r\n}\r\n.hidden-xs > h3{\r\n    font-size: 2.5rem;\r\n    line-height: 60px;\r\n    font-weight: bold;\r\n}\r\n#div2 > div > div > h3{\r\n    font-size: 2.5rem;\r\n    line-height: 60px;\r\n    font-weight: bold;\r\n}\r\n.toggleList > ul{\r\n    list-style: none;\r\n}\r\ndiv.toggleList > ul:nth-child(2){\r\n    border-right: 1px solid #ececec;\r\n    position: relative;\r\n    left: 26px;\r\n    padding-right: 51px;\r\n    padding-left: 0;\r\n}\r\n#div2 > div > div {\r\n    font-size: 1.42857em;\r\n    line-height: 24px;\r\n}\r\n#div2 > div  > div.col-md-7.col-xs-12> div > p{\r\n    font-size: 1rem;\r\n    margin-top: 20px;\r\n    margin-bottom: 40px;\r\n}\r\n#div2 > div > div.col-md-7.col-xs-12.pull-right{\r\n    padding-right: 0;\r\n}\r\n#div2 > div > div.col-md-5.col-xs-12.pull-right > div.toggleList.col-xs-12.pull-right > ul.col-md-6.col-xs-12.pull-right.check{\r\n    padding-left: 40px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/proposals/proposals.component.html":
/***/ (function(module, exports) {

module.exports = "<main id=\"main\" class=\"container-fluid\" tabindex=\"-1\">\n  <!-- section 1 -->\n  <section class=\"row\">\n    <div class=\"results\">\n      <div class=\"resultsHead clearfix noPadding\">\n        <h2>השוואת הצעות לביטוח חיים</h2>\n        <p>\n          יוסי, תודה על מילוי הפרטים!\n        </p>\n        <p>\n          המערכת ניתחה את הנתונים שמילאת עבור   <span class=\"blue\">כיסוי ביטוחי של {{amount}} <span class=\"nis\">₪</span>   <a href=\"#\" role=\"button\" data-toggle=\"modal\" data-target=\"#modal-explanation\" class=\"exclamation\"><span class=\"icon icon-exclamation-mark\"></span></a></span>\n        </p>\n        <p>\n          ומצאה את הצעות ביטוח חיים/אבדן כושר עבודה/הבריאות האופטימליות עבורך.                        <br />\n          <a (click)=\"showCalcut = true\" class=\"btn\" role=\"button\" data-toggle=\"modal\" data-target=\"#results-modal\"><img src=\"images/results/icon-pencil.png\" alt=\"edit\" /> לחצו לעריכת גובה הכיסוי </a>\n\n        </p>\n      </div>\n\n      <!---->\n      <div class=\"resultsWrapper\" *ngFor=\"let item of data;let i = index\" dir=\"ltr\">\n        <div class=\"results_box clearfix\" [ngClass]=\"{'active': i === 0}\">\n          <div class=\"results_content\">\n            <div class=\"imageBox col-md-3 col-xs-12 pull-right\">\n              <div class=\"imageBorder\"><img [src]=\"item.companyLogoUrl\" alt=\"wakeapp logo\" /></div>\n            </div>\n            <div class=\"col-lg-2 col-md-3 col-xs-6 pull-right\">\n              <div class=\"currencyBox col-md-10 col-xs-12\">\n                <span class=\"currency\">{{item.pricesPerAges[0].price}}<span class=\"nis\">₪</span></span>\n                <span class=\"monthly\"><span class=\"hidden-xs\">תשלום</span> חודשי</span>\n              </div>\n            </div>\n            <div class=\"description col-md-4 col-xs-6 pull-right \">\n              <div class=\"text col-xs-12\">\n                בהצעה זו תשלם <span class=\"nis\">₪</span>27,000  יותר מאשר<br />\n                ההצעה של <span>WakeApp</span>  (עבור אותו הכיסוי) <span class=\"icon icon-information\"></span>\n              </div>\n            </div>\n          </div>\n          <!--results_toggle-->\n\n          <div class=\" col-xs-12\" id=\"div2\"  [@expandCollapse] ='openCloseAnim' >\n            <div  style=\"border-top: 1px #ececec solid;margin-top: 40px;padding-top: 30px;\">\n                <div [hidden]=\"!showObj[i]\" class=\"col-md-7 col-xs-12 pull-right\">\n                    <h3> לורם איפסום</h3>\n                    <p>\n                      לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית קונדימנטום קורוס בליקרה, נונסטי קלובר בריקנה סטום, לפריקך תצטריק לרטילורם איפסום לורם איפסום דולור סיט אמט, קונסקטוררטום קורוס בליקרה, נונסטי קלובר בריקנה סטום, לפריקך תצטריק לרטי. לורם איפסוםלורם איפסום דולור סיט אמט טורר אדיפיסינג לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג *לקוח יקר החבילת לא כוללת אדיפיסינג\n                    </p>\n      \n                    <div class=\"notes\">\n                      <h3 class=\"hidden-md hidden-lg\">ההצעה לא כוללת</h3>\n                      <p>\n                        *לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית קונדימנטום בליקרה\n                      </p>\n                    </div>\n                  </div>\n      \n                  <div [hidden]=\"!showObj[i]\" class=\"col-md-5 col-xs-12 pull-right\">\n                    <div class=\"hidden-xs hidden-sm\"><h3>כל היתרונות בשבילך</h3></div>\n                    <div class=\"hidden-md hidden-lg toggleListButton\" role=\"button\">\n                      <h3>\n                        כל היתרונות בשבילך <span class=\"plus_toggleList\"></span><span class=\"minus_toggleList\"></span>\n                      </h3>\n                    </div>\n                    <div class=\"toggleList col-xs-12 pull-right\">\n                      <ul class=\"col-md-6 col-xs-12 pull-right check\">\n                        <li>כיסוי מורחב בשינוי מצב משפחתי</li>\n                        <li>כיסוי מורחב בשינוי מצב משפחתי</li>\n                        <li>כיסוי מורחב בשינוי מצב משפחתי</li>\n                      </ul>\n                      <ul class=\"col-md-6 col-xs-12 pull-right cancel\">\n                        <li>כיסוי מורחב בשינוי מצב משפחתי</li>\n                        <li>כיסוי מורחב בשינוי מצב משפחתי</li>\n                        <li>כיסוי מורחב בשינוי מצב משפחתי</li>\n                      </ul>\n                    </div>\n                  </div>\n            </div>\n           \n          </div>\n          <div class=\"resultsControlls hidden-xs hidden-sm\">\n            <a (click)=\"showChose = true\" class=\"btn getOffer\">\n              <span>קבל/י הצעה</span>\n            </a>\n            <!--<a *ngIf=\"i === 0\" class=\"btn toBuy\" data-target=\"#cal-results-modal\" data-toggle=\"modal\" href=\"#\">-->\n              <!--<span _ngcontent-c2=\"\">לרכישה</span>-->\n            <!--</a>-->\n          </div>\n\n          <div class=\"bottomBTN\">\n            <div class=\"toggleButton pull-right col-lg-2 col-sm-5 col-md-4 col-xs-7\"  (click)=\"openReportsFilter(i)\">\n              <div class=\"whyMe\"> למה זה מתאים לי<span class=\"hidden-xs plus\"></span></div>\n              <div class=\"closeToggle\">סגור<span class=\"hidden-xs minus\"></span></div>\n            </div>\n\n            <div class=\"resultsControlls pull-right col-xs-5 hidden-md hidden-lg\">\n              <a  (click)=\"showChose = true\" class=\"btn getOffer\">\n                <span>קבל/י הצעה</span>\n              </a>\n            </div>\n          </div>\n          <div _ngcontent-c2=\"\" class=\"angle\" *ngIf=\"i === 0\"><span _ngcontent-c2=\"\">הכי משתלמת!</span></div>\n        </div>\n\n      </div>\n\n    </div>\n  </section>\n  <!-- End section 1 -->\n</main>\n\n<!-- modal -->\n<div id=\"modal-explanation\" class=\"modal fade general-modal light\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"resultModalHeader\">\n  <div class=\"modal-dialog light\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"סגור\" tabindex=\"-1\" aria-hidden=\"true\"><span aria-hidden=\"true\">&times;</span></button>\n        <h4 id=\"resultModalHeader\">הסבר על חישוב הסכום</h4>\n      </div>\n      <div class=\"modal-body\">\n        <div class=\"general-content \">\n          <p class=\"description\">\n            הצעת Wakeapp מחושבת ביחס לסכום הכולל<br />\n            של התשלומים של Wakeapp ביחס לממוצע התשלומים של ההצעות האחרות. עבור כל חברה,\n            מבוצע חישוב של סכום ההצעה הכולל ביחס להצעת Wakeapp\n\n          </p>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<!-- end modal -->\n<app-modal-calcut *ngIf=\"showCalcut\" (closeEvent)=\"showCalcut = false\" (saveEvent)=\"amount = $event;showCalcut = false\" [amount]=\"amount\"></app-modal-calcut>\n\n<app-modal-chose *ngIf=\"showChose\" (closeEvent)=\"showChose = false\"></app-modal-chose>\n"

/***/ }),

/***/ "../../../../../src/app/proposals/proposals.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProposalsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_animations__ = __webpack_require__("../../../animations/@angular/animations.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProposalsComponent = (function () {
    function ProposalsComponent() {
        this.data = [
            {
                "companyId": 1,
                "companyName": "Migdal",
                "companyLogoUrl": "images/results/logo-migdal.png",
                "priceForAllLife": 1500000,
                "pricesPerAges": [
                    {
                        "age": 40,
                        "price": 34.22
                    },
                    {
                        "age": 41,
                        "price": 56.22
                    },
                    {
                        "age": 42,
                        "price": 70.22
                    },
                    {
                        "age": 43,
                        "price": 85.22
                    }
                ]
            },
            {
                "companyId": 2,
                "companyName": "Menora",
                "companyLogoUrl": "images/results/logo-menora.png",
                "priceForAllLife": 43543543,
                "pricesPerAges": [
                    {
                        "age": 40,
                        "price": 34.43
                    },
                    {
                        "age": 41,
                        "price": 55.45
                    },
                    {
                        "age": 42,
                        "price": 76.56
                    },
                    {
                        "age": 43,
                        "price": 87.67
                    }
                ]
            },
            {
                "companyId": 3,
                "companyName": "Klal",
                "companyLogoUrl": "images/results/logo-klal.png",
                "priceForAllLife": 12323423,
                "pricesPerAges": [
                    {
                        "age": 40,
                        "price": 23.22
                    },
                    {
                        "age": 41,
                        "price": 34.22
                    },
                    {
                        "age": 42,
                        "price": 54.22
                    },
                    {
                        "age": 43,
                        "price": 56.22
                    }
                ]
            }
        ];
        this.hideText = true;
        this.showObj = {};
        this.openCloseAnim = 'close';
    }
    ProposalsComponent.prototype.openReportsFilter = function (i) {
        var _this = this;
        for (var i_1 = 0; i_1 < this.data.length; i_1++) {
            this.showObj[i_1] = false;
        }
        this.openCloseAnim = (this.openCloseAnim === 'open') ? 'close' : 'open';
        if (this.openCloseAnim === 'close') {
            setTimeout(function () {
                _this.showObj[i] = false;
            }, 100);
        }
        else {
            this.showObj[i] = true;
        }
    };
    ProposalsComponent.prototype.ngOnInit = function () {
    };
    return ProposalsComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], ProposalsComponent.prototype, "amount", void 0);
ProposalsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-proposals',
        template: __webpack_require__("../../../../../src/app/proposals/proposals.component.html"),
        styles: [__webpack_require__("../../../../../src/app/proposals/proposals.component.css")],
        animations: [
            Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* trigger */])('expandCollapse', [
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* state */])('open', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({
                    'height': '*'
                })),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* state */])('close', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({
                    'height': '0px',
                    'opacity': '0'
                })),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* transition */])('open <=> close', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])(100))
            ])
        ]
    }),
    __metadata("design:paramtypes", [])
], ProposalsComponent);

//# sourceMappingURL=proposals.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/autocomplit/autocomplit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".button-wrap{\r\n    font-family: \"RaananSuper\";\r\n    color: #626262;\r\n    position: relative;\r\n    width: 100% !important;\r\n    height: 100% !important;\r\n}\r\n.button-wrap > button{\r\n    height: 100%;\r\n    border-color: #117ef5;\r\n    padding-right: 0.375rem;\r\n    border: 2px solid #117ef5;\r\n    background-color: transparent;\r\n    border-radius: 10px;\r\n    padding: 0.125rem 0.625rem;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: justify;\r\n        -ms-flex-pack: justify;\r\n            justify-content: space-between;\r\n    width: 100%;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: reverse;\r\n        -ms-flex-direction: row-reverse;\r\n            flex-direction: row-reverse;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    padding-right: 16px;\r\n}\r\n.dropdawn{\r\n    position: absolute;\r\n    top: 100%;\r\n    left: 0;\r\n    z-index: 1000;\r\n    /* display: none; */\r\n    float: left;\r\n    width: 100% !important;\r\n    padding: 5px 0;\r\n    margin: 2px 0 0;\r\n    list-style: none;\r\n    font-size: 14px;\r\n    text-align: left;\r\n    background: white !important;\r\n    border: 1px solid #ccc;\r\n    border: 1px solid rgba(0,0,0,0.15);\r\n    border-radius: 4px;\r\n    box-shadow: 0 6px 12px rgba(0,0,0,0.175);\r\n    background-clip: padding-box;\r\n\r\n}\r\ndiv > div{\r\n    background: white !important;\r\n}\r\n.dropdawn > input{\r\n    border: 2px solid #707070;\r\n    width: 100% !important;\r\n    font-size: 1.51429em;\r\n}\r\n.dropdawn > ul{\r\n    list-style: none;\r\n    padding: 5px 0;\r\n    text-align: center;\r\n    font-size: 22px;\r\n    background: white;\r\n    height: 150px;\r\n    overflow: hidden;\r\n    overflow-y: auto;\r\n    width: 100%;\r\n    padding-top: 0;\r\n}\r\n.dropdawn > ul > li > a{\r\n    color: #333;\r\n    color: #333;\r\n    width: 100%;\r\n    margin: 0 !important;\r\n    cursor: pointer;\r\n    text-decoration: none;\r\n}\r\n.dropdawn > ul > li{\r\n    cursor: pointer;\r\n}\r\n.dropdawn > ul > li:hover{\r\n    color: #333;\r\n    text-decoration: none;\r\n    border: 2px solid #707070;\r\n    outline: 0;\r\n    background-color: #F5F5F5;\r\n}\r\n.button-wrap > button > i{\r\n    color: #117ef5;\r\n}\r\n.button-wrap > button > span{\r\n    font-size: 1.64286em;\r\n}\r\n.button-wrap > button:active{\r\n    /*background-color: #4299f7;*/\r\n}\r\n.button-wrap > button:focus{\r\n    outline: 2px solid #707070 !important;\r\n}\r\n.button-wrap > button:hover{\r\n    /*color: #fff;*/\r\n    /*background-color: #0965ca;*/\r\n}\r\n\r\n\r\n.dropdawn > ul::-webkit-scrollbar-thumb{\r\n    height: 10px !important;\r\n  }\r\n  .dropdawn > ul::-webkit-scrollbar-track\r\n  {\r\n    background-color: rgba(255, 255, 255, 0);\r\n  }\r\n  .dropdawn > ul::-webkit-scrollbar\r\n  {\r\n    width: 10px;\r\n    background-color: rgba(255, 255, 255, 0);\r\n  }\r\n  .dropdawn > ul::-webkit-scrollbar-thumb\r\n  {\r\n    background-color: rgb(239, 239, 239);\r\n    border: 1px solid rgb(232, 232, 232);\r\n    border-radius: 1px;\r\n    height: 2px;\r\n    margin: 3px;\r\n  }\r\n  @media (max-width: 992px){\r\n    .button-wrap > button{\r\n        border: 1px solid #117ef5;\r\n    }\r\n  }\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/autocomplit/autocomplit.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"button-wrap\">\n  <button (click)=\"showClick()\">\n    <i class=\"fa fa-caret-down\" aria-hidden=\"true\"></i>\n    <span>\n      {{label}}\n    </span>\n  </button>\n  <div [hidden]=\"!show\" class=\"dropdawn\" style=\"BACKGROUND: WHITE !IMPORTANT;\">\n    <input type=\"text\" [(ngModel)]=\"searchModel\" (ngModelChange)=\"onSearchChange($event)\" #searchInput>\n    <ul>\n      <li *ngFor=\"let item of filteringData\">\n        <a (click)=\"select(item)\">{{item.label}}</a>\n      </li>\n    </ul>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/shared/autocomplit/autocomplit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AutocomplitComponent; });
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

var AutocomplitComponent = (function () {
    function AutocomplitComponent(_eref) {
        this._eref = _eref;
        this.label = "";
        this.searchModel = "";
        this.filteringData = [];
        this.change = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
    }
    AutocomplitComponent.prototype.ngOnInit = function () {
        if (this.data[0])
            this.label = this.data[0].label;
        this.filteringData = Object.assign([], this.data);
    };
    AutocomplitComponent.prototype.select = function (item) {
        this.label = item.label;
        this.show = false;
        this.change.emit(item.value);
    };
    AutocomplitComponent.prototype.onSearchChange = function (value) {
        this.filteringData = Object.assign([], this.data);
        if (!value) {
            return;
        }
        var filtering = [];
        for (var _i = 0, _a = this.filteringData; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item.label.indexOf(value) !== -1) {
                filtering.push(item);
            }
        }
        this.filteringData = Object.assign([], filtering);
    };
    AutocomplitComponent.prototype.onClick = function (event) {
        if (!this._eref.nativeElement.contains(event.target))
            this.show = false;
    };
    AutocomplitComponent.prototype.showClick = function () {
        var _this = this;
        this.show = !this.show;
        setTimeout(function () {
            _this.searchInput.nativeElement.focus();
        }, 100);
    };
    return AutocomplitComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], AutocomplitComponent.prototype, "data", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
    __metadata("design:type", Object)
], AutocomplitComponent.prototype, "change", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('searchInput'),
    __metadata("design:type", Object)
], AutocomplitComponent.prototype, "searchInput", void 0);
AutocomplitComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-autocomplit',
        template: __webpack_require__("../../../../../src/app/shared/autocomplit/autocomplit.component.html"),
        styles: [__webpack_require__("../../../../../src/app/shared/autocomplit/autocomplit.component.css")],
        host: {
            '(document:click)': 'onClick($event)',
        },
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */]) === "function" && _a || Object])
], AutocomplitComponent);

var _a;
//# sourceMappingURL=autocomplit.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n  .checked{\r\n    content: \"\\F046\";\r\n  }\r\n  input[type=\"checkbox\"]{\r\n    display: none;\r\n}\r\ninput[type=\"checkbox\"]:checked + label::before {\r\n    content: \"\\F046\";\r\n}\r\n\r\n@media screen and (min-width: 1200px) {\r\n    .contactUs {\r\n        width: 178px !important;\r\n        margin-left: 5% !important;\r\n    }\r\n    .wrapper-main{\r\n      display: -webkit-box;\r\n      display: -ms-flexbox;\r\n      display: flex;-webkit-box-pack: justify;-ms-flex-pack: justify;justify-content: space-between;-webkit-box-orient: horizontal;-webkit-box-direction: reverse;-ms-flex-direction: row-reverse;flex-direction: row-reverse;-ms-flex-wrap: wrap;flex-wrap: wrap;\r\n    }\r\n}\r\n@media (min-width: 1200px) and (min-width: 992px){\r\n    .row > div{\r\n        margin-left: 6%;\r\n    }\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- footer -->\n<!-- <footer class=\"container-fluid\">\n  <div class=\"col-md-12\">\n      <div class=\"row\" style=\"display: flex;justify-content: space-between;flex-direction: row-reverse;flex-wrap: wrap;\">\n          <div class=\"contactUs \">\n            <span class=\"limiter\"></span>\n            <h3>צור קשר</h3>\n            <ul class=\"noPadding\">\n              <li><a href=\"#\">צ'אט עם נציג</a></li>\n              <li><a href=\"#\">טופס פנייה</a></li>\n              <li><a href=\"#\">*4500</a></li>\n              <li>\n                <div class=\"col-xs-8 col-xs-push-2 col-md-12 col-md-push-1\">\n                  <a href=\"#\" class=\"social\">\n                    <img src=\"sample-images/youtube.png\" alt=\"youtube\" />\n                  </a>\n                  <a href=\"#\" class=\"social\">\n                    <img src=\"sample-images/facebook.png\" alt=\"facebook\" />\n                  </a>\n                </div>\n              </li>\n            </ul>\n          </div>\n          <div class=\"footerCheckUp \">\n            <span class=\"limiter\"></span>\n            <h3 class=\"noPadding col-xs-10 col-xs-push-1 col-md-push-2\">\n              אבוד בעולם הביטוחי פיננסי\n              יש יותר מדי אפשרויות?\n            </h3>\n            <a class=\"btn col-xs-8 col-xs-push-2 col-md-10\">\n              <span>צ'קאפ - התחל בדיקה</span>\n            </a>\n          </div>\n          <div class=\"compareProduct \">\n            <span class=\"limiter\"></span>\n            <h3>השוואת מוצרים</h3>\n            <div class=\"row text-right\">\n              <ul class=\"col-xs-5 col-xs-push-1\">\n                <li class=\"compareTitle\"><a href=\"#\">חיים</a></li>\n                <li><a href=\"#\">ביטוח חיים</a></li>\n              </ul>\n              <ul class=\"col-xs-5 col-xs-push-1\">\n                <li class=\"compareTitle\"><a href=\"#\">חיים</a></li>\n                <li><a href=\"#\">ביטוח חיים</a></li>\n              </ul>\n            </div>\n          </div>\n          <div class=\"newsLetter \">\n            <span class=\"limiter\"></span>\n            <h3>הניוזלטר שיחסוך לכם כסף</h3>\n            <form action=\"/\" method=\"post\" class=\"col-xs-10 col-xs-push-1 col-sm-12 col-sm-push-0\">\n              <div class=\"form-group\"> -->\n                <!--<input class=\"form-control text-right\" type=\"type\" name=\"name\" value=\"\" placeholder=\"שם פרטי ומשפחה\" />-->\n                <!-- <input class=\"form-control text-right\" type=\"email\" name=\"name\" value=\"\" placeholder='דוא\"ל' />\n      \n                \n                <div class=\"checkbox\">\n                    <input type=\"checkbox\" value=\"checkboxvalue\" id=\"footerCheckBox\" />\n                    <label class=\"checkbox-label  text-right col-xs-11\" for=\"footerCheckBox\">\n                      אישור קבלת חומר שיווקי\n                    </label>\n                </div>\n                <button class=\"btn\">\n                                  <span>\n                                      הרשמה\n                                  </span>\n                </button>\n              </div>\n            </form>\n          </div>\n        </div>\n  </div>\n</footer> -->\n<footer class=\"container-fluid\">\n    <div class=\"row wrapper-main\" >\n        <div class=\"contactUs col-xs-12 col-md-3 col-lg-2\">\n            <span class=\"limiter\"></span>\n            <h3>צור קשר</h3>\n            <ul class=\"noPadding\">\n                <li><a href=\"#\">צ'אט עם נציג</a></li>\n                <li><a href=\"#\">טופס פנייה</a></li>\n                <li><a href=\"#\">*4500</a></li>\n                <li>\n                    <div class=\"col-xs-8 col-xs-push-2 col-md-12 col-md-push-1\">\n                        <a href=\"#\" class=\"social\">\n                            <img src=\"sample-images/youtube.png\" alt=\"youtube\" />\n                        </a>\n                        <a href=\"#\" class=\"social\">\n                            <img src=\"sample-images/facebook.png\" alt=\"facebook\" />\n                        </a>\n                    </div>\n                </li>\n            </ul>\n        </div>\n        <div class=\"footerCheckUp col-xs-12 col-md-3 col-lg-2\">\n            <span class=\"limiter\"></span>\n            <h3 class=\"noPadding col-xs-10 col-xs-push-1 col-md-push-2\">\n                אבוד בעולם הביטוחי פיננסי\n                יש יותר מדי אפשרויות?\n            </h3>\n            <a class=\"btn col-xs-8 col-xs-push-2 col-md-10\">\n                <span>צ'קאפ - התחל בדיקה</span>\n            </a>\n        </div>\n        <div class=\"compareProduct col-xs-12 col-md-3 col-lg-2\">\n            <span class=\"limiter\"></span>\n            <h3>השוואת מוצרים</h3>\n            <div class=\"row text-right\">\n                <ul class=\"col-xs-5 col-xs-push-1\">\n                    <li class=\"compareTitle\"><a href=\"#\">חיים</a></li>\n                    <li><a href=\"#\">ביטוח חיים</a></li>\n                </ul>\n                <ul class=\"col-xs-5 col-xs-push-1\">\n                    <li class=\"compareTitle\"><a href=\"#\">חיים</a></li>\n                    <li><a href=\"#\">ביטוח חיים</a></li>\n                </ul>\n            </div>\n        </div>\n        <div class=\"newsLetter col-xs-12 col-md-3 col-lg-2\">\n            <span class=\"limiter\"></span>\n            <h3>הניוזלטר שיחסוך לכם כסף</h3>\n            <form action=\"/\" method=\"post\" class=\"col-xs-10 col-xs-push-1 col-sm-12 col-sm-push-0\">\n                <div class=\"form-group\">\n                    <!--<input class=\"form-control text-right\" type=\"type\" name=\"name\" value=\"\" placeholder=\"שם פרטי ומשפחה\" />-->\n                    <input class=\"form-control text-right\" type=\"email\" name=\"name\" value=\"\" placeholder='דוא\"ל' />\n\n                    \n                    <div class=\"checkbox\">\n                      <input type=\"checkbox\" value=\"checkboxvalue\" id=\"footerCheckBox\" />\n                      <label class=\"checkbox-label  text-right col-xs-11\" for=\"footerCheckBox\">\n                          אשר/ת שליחת מיסרונים על מבצעים חדשים\n                          לורם איפסום דולור סיט אמט\n                      </label>\n                    </div>\n                    <button class=\"btn col-xs-8 col-xs-push-2 col-md-4 col-md-push-8\">\n                        <span>\n                            הרשמה\n                        </span>\n                    </button>\n                </div>\n            </form>\n        </div>\n    </div>\n</footer>\n\n"

/***/ }),

/***/ "../../../../../src/app/shared/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
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

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    return FooterComponent;
}());
FooterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-footer',
        template: __webpack_require__("../../../../../src/app/shared/footer/footer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/shared/footer/footer.component.css")]
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/header/header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 class=\"sr-only\">page title</h1>\n<a href=\"#main\" class=\"sr-only quick-link sr-only-focusable\">דלג אל תוכן האתר</a>\n<div class=\"menu-overlay\" style=\"display:none;\"></div>\n<!-- header -->\n<header>\n  <!-- Nav bar -->\n  <nav class=\"navbar navbar-default\">\n    <h2 class=\"sr-only\">ניווט ראשי</h2>\n    <div class=\"container-fluid\">\n      <div class=\"navbar-header\">\n        <button type=\"button\" class=\"navbar-toggle\" aria-controls=\"navbar\" data-toggle=\"collapse\" data-target=\"#navbar\"\n                aria-expanded=\"false\">\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n          <span class=\"sr-only\">Toggle navigation</span>\n        </button>\n        <a class=\"navbar-brand\" href=\"#\">\n          <img src=\"images/logo.png\" alt=\"Wakeapp logo\" />\n        </a>\n      </div>\n      <div id=\"navbar\" class=\"navbar-offcanvas\">\n        <div class=\"offcanvas-wrapper\">\n          <ul class=\"nav navbar-nav\">\n            <li class=\"active hidden-lg\"><a href=\"javascript:login();\">כניסה לחשבונך</a></li>\n            <li><a href=\"#\">צ'קאפ</a></li>\n            <li><a href=\"#\">ביטוח חיים</a></li>\n            <li><a href=\"#\">ביטוח בריאות</a></li>\n            <li><a href=\"#\">ביטוח רכוש</a></li>\n            <li><a href=\"#\">ביטוח פיננסי</a></li>\n            <li><a href=\"#\">ביטוח פיננסי</a></li>\n            <li><a href=\"#\">אודות</a></li>\n          </ul>\n        </div>\n      </div>\n      <div class=\"navControls\">\n        <div class=\"navLogin hidden-xs hidden-sm ax-btn\">\n          <a href=\"javascript:login();\">התחברות</a>\n        </div>\n        <div class=\"talk ax-btn\">\n          <a href=\"#\">\n            <span>דברו איתנו</span>\n          </a>\n        </div>\n        <div class=\"textSize\">\n          <a href=\"javascript:void(0);\" class=\"toggle-font-size\">\n                            <span class=\"sr-only\">\n                                שנה גודל פונט\n                            </span>\n          </a>\n        </div>\n        <div class=\"textContrast\">\n          <a href=\"javascript:void(0);\" class=\"toggle-contrast\">\n                            <span class=\"sr-only\">\n                                שנה ניגודיות צבעים\n                            </span>\n          </a>\n        </div>\n      </div>\n    </div>\n  </nav>\n  <!-- End Nav bar -->\n  <!-- Login Form -->\n  <section>\n    <h3 class=\"sr-only\">טופס התחברות לאיזור האישי</h3>\n    <div id=\"login-form\">\n      <div class=\"login-head\">\n        <a href=\"javascript:void(0)\" class=\"login-btn-close\"><span class=\"sr-only\">סגור</span></a>\n        <h4 class=\"form-title\">התחברות</h4>\n      </div>\n      <form role=\"form\" action=\"#\" class=\"form-container login-step1\">\n        <fieldset>\n          <legend class=\"form-title\">\n            כניסה מהירה באמצעות SMS\n          </legend>\n          <div class=\"form-group\">\n                            <span class=\"validation-label field-validation-error\">\n                                אנא הזן מספר נייד\n                            </span>\n            <input id=\"login-phonenumber\" type=\"hidden\" value=\"050777777\" />\n            <label class=\"sr-only\" for=\"login-areacode\"></label>\n            <label class=\"sr-only\" for=\"login-phonenumber\"></label>\n            <div class=\"phone-control\" id=\"login-areacode\">\n              <select class=\"selectpicker\">\n                <option>050</option>\n                <option>2</option>\n                <option>3</option>\n                <option>4</option>\n                <option>5</option>\n              </select>\n              <input class=\"form-control\" id=\"login-phonenumber\" type=\"text\" name=\"phone\" dir=\"ltr\">\n            </div>\n          </div>\n          <div class=\"form-group seperator\">\n                            <span>\n                                או\n                            </span>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"login-mail\">\n                                <span class=\"invalid-text\">\n                                    אנא\n                                </span>\n              הזן כתובת מייל\n            </label>\n            <input id=\"login-mail\" class=\"form-control\" type=\"email\" value=\"\" />\n          </div>\n          <div class=\"form-group\">\n            <button type=\"submit\" class=\"btn btn-default btn-login center-block\">התחבר</button>\n          </div>\n          <!--<div class=\"form-group text-center\">\n              <a class=\"login-register\" href=\"#\">לא רשום?</a>\n          </div>-->\n        </fieldset>\n      </form>\n      <form role=\"form\" action=\"#\" class=\"form-container login-step2\" style=\"display:none\">\n        <fieldset>\n          <legend class=\"form-title\">\n            כניסה מהירה באמצעות SMS\n          </legend>\n          <div class=\"form-group text-center\">\n            <label for=\"login-code\">\n              אנא הזן את הקוד שקיבלת\n            </label>\n            <div>\n              <a href=\"#\" class=\"login-btn-resend\">שלח שוב</a>\n            </div>\n            <div class=\"login-code-control text-right\">\n                                <span class=\"field-validation-error\">\n                                    אנא הזן קוד תקין\n                                </span>\n              <input id=\"login-code\" class=\"form-control\" type=\"text\" value=\"\" />\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <button type=\"submit\" class=\"btn btn-default btn-login center-block\">התחבר</button>\n          </div>\n          <!--<div class=\"form-group text-center\">\n              <a class=\"login-register\" href=\"#\">לא רשום?</a>\n          </div>-->\n        </fieldset>\n      </form>\n    </div>\n  </section>\n  <!-- /Login Form -->\n</header>\n<!-- End header -->\n"

/***/ }),

/***/ "../../../../../src/app/shared/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
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

var HeaderComponent = (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-header',
        template: __webpack_require__("../../../../../src/app/shared/header/header.component.html"),
        styles: [__webpack_require__("../../../../../src/app/shared/header/header.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HeaderComponent);

//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/models/health.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Health; });
var Health = (function () {
    function Health() {
    }
    return Health;
}());

//# sourceMappingURL=health.js.map

/***/ }),

/***/ "../../../../../src/app/shared/models/risk.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Risk; });
var Risk = (function () {
    function Risk() {
    }
    return Risk;
}());

//# sourceMappingURL=risk.js.map

/***/ }),

/***/ "../../../../../src/app/shared/service/store.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StoreService; });
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

var StoreService = (function () {
    function StoreService() {
        this.store = {};
    }
    StoreService.prototype.getByKey = function (key) {
        return this.store[key];
    };
    StoreService.prototype.setByKey = function (key, value) {
        this.store[key] = value;
    };
    return StoreService;
}());
StoreService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], StoreService);

//# sourceMappingURL=store.service.js.map

/***/ }),

/***/ "../../../../../src/app/wizard/birthdate/birthdate.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/wizard/birthdate/birthdate.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"calculatorHead col-xs-12 noPadding\">\n  <h2>השוואת הצעות לביטוח אובדן כושר עבודה</h2>\n  <p>\n    מילוי שאלון קצר לצורך הפקת הצעות ביטוח\n  </p>\n  <span>יקח לך 2 דקות</span>\n</div>\n<div class=\"step_birthDate col-xs-12 noPadding\">\n  <span class=\"field-validation-error center-block text-center\" *ngIf=\"showError && (!day || !month || !year)\">הודעת שגיאה</span>\n  <div class=\"birthDate center-block\">\n    <fieldset>\n      <legend class=\"sr-only\">###</legend>\n      <div class=\"noPadding\">\n        <span class=\"question-title\">תאריך לידה</span>\n        <div class=\"wrapper center-block\">\n          <div class=\"selectWrapper\"  style=\"width: 27%;height: 100%;\">\n            <div style=\"width: 100%;height: 100%;\">\n              <app-autocomplit [data]=\"daysData\"  (change)=\"daysChange($event)\"></app-autocomplit>\n            </div>\n          </div>\n          <div class=\"selectWrapper\" style=\"width: 37%; margin-right:11px;height: 100%;\">\n            <div style=\"width: 100%;height: 100%;\">\n              <app-autocomplit [data]=\"monthData\" (change)=\"monthChange($event)\"></app-autocomplit>\n            </div>\n          </div>\n          <div class=\"selectWrapper\" style=\"width: 27%; margin-right:11px;height: 100%;\">\n            <div style=\"width: 100%;height: 100%;\">\n              <app-autocomplit [data]=\"yearsData\" (change)=\"yearsChange($event)\"></app-autocomplit>\n            </div>\n          </div>\n        </div>\n      </div>\n    </fieldset>\n  </div>\n</div>\n<div class=\"calculatorControllsWrapper col-xs-12\">\n  <div class=\"calculatorControlls center-block\">\n    <a (click)=\"back()\" class=\"btn backBtn center-block\">\n      <span>&#60;חזור</span>\n    </a>\n    <a (click)=\"save()\" class=\"btn nextBtn center-block\">\n      <span>המשך</span>\n    </a>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/wizard/birthdate/birthdate.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BirthdateComponent; });
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

var BirthdateComponent = (function () {
    function BirthdateComponent() {
        this.yearsData = [];
        this.monthData = [
            {
                label: "1",
                value: "1"
            },
            {
                label: "2",
                value: "2"
            },
            {
                label: "3",
                value: "3"
            },
        ];
        this.daysData = [];
        this.day = "1";
        this.month = "1";
        this.year = "1925";
        this.next = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.setYear();
        this.setDays();
    }
    BirthdateComponent.prototype.ngOnInit = function () {
    };
    BirthdateComponent.prototype.setDays = function () {
        for (var i = 1; i <= 31; i++) {
            this.daysData.push({
                label: i.toString(),
                value: i.toString()
            });
        }
    };
    BirthdateComponent.prototype.setYear = function () {
        for (var i = 1925; i <= 2018; i++) {
            this.yearsData.push({
                label: i.toString(),
                value: i.toString()
            });
        }
    };
    BirthdateComponent.prototype.daysChange = function (e) {
        this.day = e;
    };
    BirthdateComponent.prototype.monthChange = function (e) {
        this.month = e;
    };
    BirthdateComponent.prototype.yearsChange = function (e) {
        console.log(e, 2323);
        this.year = e;
    };
    BirthdateComponent.prototype.back = function () {
        this.next.emit(({
            naxtPage: 'genderselect'
        }));
    };
    BirthdateComponent.prototype.save = function () {
        if (!this.year ||
            !this.month ||
            !this.year) {
            this.showError = true;
        }
        else {
            this.next.emit(({
                naxtPage: 'smoking',
                model: this.day + '-' + this.month + '-' + this.year,
                type: "birthdate"
            }));
        }
    };
    return BirthdateComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
    __metadata("design:type", Object)
], BirthdateComponent.prototype, "next", void 0);
BirthdateComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-birthdate',
        template: __webpack_require__("../../../../../src/app/wizard/birthdate/birthdate.component.html"),
        styles: [__webpack_require__("../../../../../src/app/wizard/birthdate/birthdate.component.css")],
    }),
    __metadata("design:paramtypes", [])
], BirthdateComponent);

//# sourceMappingURL=birthdate.component.js.map

/***/ }),

/***/ "../../../../../src/app/wizard/calculator-side-panel/calculator-side-panel.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/wizard/calculator-side-panel/calculator-side-panel.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"calculatorSidePanel\" style=\"height: unset !important;top: 0;\">\n  <ul>\n    <li class=\"personalDetails\" *ngIf=\"options && options.lastName\">\n      <span>{{options.lastName}} {{options.privateName}}</span>\n      <img src=\"sample-images/calculator/cal_person_details.png\" alt=\"###\" />\n    </li>\n    <li class=\"gender\" *ngIf=\"options && options.gender\">\n      <span>גבר</span>\n      <img *ngIf=\"options.gender === 'male'\" src=\"sample-images/calculator/cal_man.png\" alt=\"###\" />\n      <img *ngIf=\"options.gender === 'female'\" src=\"sample-images/calculator/cal_woman.png\" alt=\"###\" />\n    </li>\n    <li class=\"bDate\" *ngIf=\"options && options.birthDate\">\n      <span>{{options.birthDate}}</span>\n      <img src=\"sample-images/calculator/cal_b_day.png\" alt=\"###\" />\n    </li>\n    <li class=\"smoking\" *ngIf=\"options && (options.doesSmoke || options.doesSmoke === false)\">\n      <span>לא מעשן</span>\n      <img *ngIf=\"options.doesSmoke\" src=\"sample-images/calculator/cal_smoke_yes.png\" alt=\"###\" />\n      <img *ngIf=\"!options.doesSmoke\" src=\"sample-images/calculator/cal_smoke_no.png\" alt=\"###\" />\n    </li>\n\n    <!--<li class=\"personalDetails\" *ngIf=\"options && options.lastName\">-->\n      <!--<span>{{options.lastName}} {{options.privateName}}</span>-->\n      <!--<img src=\"sample-images/calculator/cal_person_details.png\" alt=\"###\" />-->\n    <!--</li>-->\n\n    <!--<li class=\"currency\">-->\n      <!--<span>1,000,000</span>-->\n      <!--<img src=\"sample-images/calculator/cal_nis.png\" alt=\"###\" />-->\n    <!--</li>-->\n\n    <!--<li class=\"insurance\">-->\n      <!--<span>יש לי ביטוח חיים</span>-->\n      <!--<img src=\"sample-images/calculator/cal_insurance_yes.png\" alt=\"###\" />-->\n    <!--</li>-->\n  </ul>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/wizard/calculator-side-panel/calculator-side-panel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalculatorSidePanelComponent; });
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

var CalculatorSidePanelComponent = (function () {
    function CalculatorSidePanelComponent() {
    }
    CalculatorSidePanelComponent.prototype.ngOnInit = function () {
    };
    return CalculatorSidePanelComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], CalculatorSidePanelComponent.prototype, "options", void 0);
CalculatorSidePanelComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-calculator-side-panel',
        template: __webpack_require__("../../../../../src/app/wizard/calculator-side-panel/calculator-side-panel.component.html"),
        styles: [__webpack_require__("../../../../../src/app/wizard/calculator-side-panel/calculator-side-panel.component.css")]
    }),
    __metadata("design:paramtypes", [])
], CalculatorSidePanelComponent);

//# sourceMappingURL=calculator-side-panel.component.js.map

/***/ }),

/***/ "../../../../../src/app/wizard/calculatorsummary/calculatorsummary-modal/calculatorsummary-modal.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n.modal{\r\n    overflow: visible;\r\n    position: absolute;\r\n    top: -100px;\r\n}\r\n.fade{\r\n    display: block;\r\n    opacity: 1;\r\n    position: absolute;\r\n    left: 50%;\r\n    margin-left: -350px;\r\n    top: 30px;\r\n    padding-left: 5px;\r\n    padding-right: 5px;\r\n}\r\n.out-wrap{\r\n    width: 100%;\r\n    height: 100%;\r\n    background: #0000007a;\r\n    position: fixed;\r\n    right: 0;\r\n    overflow: hidden;\r\n    z-index: 22222222222222;\r\n    top: 0;\r\n    overflow-y: auto;\r\n}\r\n.out-wrap::-webkit-scrollbar-thumb{\r\n    height: 0 !important;\r\n  }\r\n  .out-wrap::-webkit-scrollbar-track\r\n  {\r\n    background-color: rgba(255, 255, 255, 0);\r\n  }\r\n  .out-wrap::-webkit-scrollbar\r\n  {\r\n    width: 4px;\r\n    background-color: rgba(255, 255, 255, 0);\r\n  }\r\n  .out-wrap::-webkit-scrollbar-thumb\r\n  {\r\n    background-color: rgb(175, 150, 150);\r\n    border: 1px solid rgb(232, 232, 232);\r\n    border-radius: 1px;\r\n    height: 2px;\r\n    margin: 3px;\r\n  }\r\n  .modal-dialog{\r\n    margin-top: 0;\r\n  }\r\n.modal-header{\r\n    height: 90px;\r\n    width: 100%;\r\n    position: relative;\r\n    top: 0;\r\n    left: 0;\r\n    z-index: 100;\r\n    padding: 0;\r\n    background-color: transparent !important;\r\n    background-color: #e3f1f4;\r\n    \r\n}\r\n.close{\r\n    color: #5f5f5f;\r\n    opacity: 1;\r\n    width: 21px;\r\n    height: 21px;\r\n    position: absolute;\r\n    left: 38px;\r\n    top: 38px\r\n}\r\n.close > span{\r\n    font-size: 37px;\r\n    line-height: 1;\r\n    top: -5px;\r\n    position: relative;\r\n\r\n}\r\n.title{\r\n    background-color: #e3f1f4;\r\n    height: 90px;\r\n}\r\n.title > img{\r\n    width: 31px;\r\n    max-width: 31px;\r\n    height: 43px;\r\n    max-height: 43px;\r\n    margin: 1.25rem 2.5rem 0 1.25rem;\r\n    float: right;\r\n}\r\n.title > h3{\r\n    font-size: 2.85714em;\r\n    line-height: 40px;\r\n    text-align: right;\r\n    padding: 1.5625rem 0;\r\n    white-space: nowrap;\r\n}\r\n.hasSmoked-input{\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n}\r\n\r\n.modalStatus{\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n}\r\ninput[type=\"radio\"] {\r\n    display:none;\r\n}\r\n\r\ninput[type=\"radio\"] + label {\r\n    color:#f2f2f2;\r\n    width: 20%;\r\n    border: 1px solid #117ef5;\r\n    padding: 0 2rem;\r\n    font-size: 1.57143em;\r\n    line-height: 22px;\r\n    background:white;\r\n    cursor:pointer;\r\n    text-align: center;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n}\r\n\r\ninput[type=\"radio\"] + label span {\r\n    display:inline-block;\r\n   \r\n    \r\n    vertical-align:middle;\r\n    \r\n   \r\n    \r\n    text-align: center;\r\n    color: #626262;\r\n    padding-top: 8px;\r\n    height: 43px;\r\n}\r\n\r\ninput[type=\"radio\"]:checked + label{\r\n    background: #117ef5;\r\n    color: white;\r\n    border: 2px solid #707070 !important;\r\n}\r\n.wrapper-birthd {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    width: 74%;\r\n    margin-right: 0;\r\n}\r\ndiv.wrapper-birthd > div > div > app-autocomplit > div > button{\r\n    height: 40px !important;\r\n    border-radius: 5px !important;\r\n}\r\n.lable-top{\r\n    font-size: 1.71429em;\r\n    text-align: right;\r\n    padding: 0.75rem 0;\r\n    color: #333;\r\n    position: absolute;\r\n    top: -44px;\r\n}\r\n.lable-bot{\r\n    color: #f53011;\r\n    padding: 2px !important;\r\n    font-size: 1.42857em;\r\n    text-align: right;\r\n}\r\n.childGender {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-flow: column;\r\n            flex-flow: column;\r\n}\r\n/* div.childGender.col-md-4.col-xs-12.noPadding.pull-right > div.hasSmoked-input > label > span{\r\n    width: 64px;\r\n    height: 40px;\r\n} */\r\n.numberOfKids{\r\n    width: 69px;\r\n    height: 43px;\r\n    font-size: 1.71429em;\r\n    border: 1px solid #117ef5 !important;\r\n    border-radius: 5px;\r\n}\r\n.input-wrapper{\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-flow: column;\r\n            flex-flow: column;\r\n}\r\n.input-wrapper > input{\r\n    padding-right: 5px;\r\n}\r\n.calculatorControlls{\r\n    position: relative;\r\n}\r\n div.modal-footer > div > div > a{\r\n    position: absolute;\r\n    left: 50%;\r\n    top: -35px;\r\n    margin-left: -51px;\r\n    color: white;\r\n }\r\n div.modal-footer > div > div > a > span{\r\n    color: white;\r\n    font-size: 2.14286em;\r\n    text-decoration: none;\r\n    font-weight: 300;\r\n    padding-top: 7px;\r\n    display: block;\r\n }\r\n .modal-footer{\r\n     border: none;\r\n }\r\n /* div.childGender.col-md-4.col-xs-12.noPadding.pull-right > div.hasSmoked-input > label:nth-child(4) > span{\r\n    position: relative;\r\n    left: -30px;\r\n } */\r\n .selectWrapper > div{\r\n    height: 40px;\r\n }\r\n@media (min-width: 992px){\r\n    .modal-dialog{\r\n        width: 700px;\r\n    }\r\n    .child {\r\n        margin-bottom: 24px;\r\n    }\r\n    .input-wrapper{\r\n        margin-bottom: 37px;\r\n    }\r\n    .form-group{\r\n        margin-bottom: 49px;\r\n    }\r\n    .modalSectionTitle{\r\n        font-size: 1.71429em;\r\n        float: right;\r\n        text-align: center;\r\n        margin-left: 38px;\r\n        padding: 0.75rem 0;\r\n        display: block;\r\n        line-height: 17px;\r\n    }\r\n    div.modalKids.noPadding.clearfix > span{\r\n        margin-left: 111px;\r\n    }\r\n    .numberOfKids{\r\n        position: relative;\r\n        left: 13px;\r\n    }\r\n \r\n    \r\n}\r\n@media (max-width: 992px){\r\n\r\n    .modal-dialog{\r\n        width: 100%;\r\n    }\r\n    .fade{\r\n        width: 100%;\r\n        left: unset;\r\n    }\r\n    .close{\r\n        right: 24px;\r\n        top: -53px;    \r\n    }\r\n    .modalStatus{\r\n        -webkit-box-orient: vertical;\r\n        -webkit-box-direction: normal;\r\n            -ms-flex-flow: column;\r\n                flex-flow: column;\r\n        text-align: center;\r\n    }\r\n    .wrapper{\r\n        width: 100%;\r\n    } \r\n     input[type=\"radio\"] + label{\r\n        width: 20%;\r\n    }\r\n    input[type=\"radio\"] + label span {\r\n        width: 100%;\r\n        height: 60px;\r\n        padding-top: 17px;\r\n    }\r\n    .modalSectionTitle{\r\n        font-size: 2.42857em;\r\n        line-height: 34px;\r\n        margin-top: 0.5rem;\r\n        margin-bottom: 0.625rem;\r\n    }\r\n    .modalStatus{\r\n        text-align: center;\r\n    }\r\n    .modalKids {\r\n        text-align: center;\r\n    }\r\n    .input-wrapper{\r\n        position: relative;\r\n        -webkit-box-align: center;\r\n            -ms-flex-align: center;\r\n                align-items: center;\r\n    }\r\n    .childGender {\r\n        position: relative;\r\n        left: -10%;\r\n    }\r\n    .childBDate {\r\n        position: relative;\r\n        left: -10%;\r\n    }\r\n    .childGender {\r\n        position: relative;\r\n        left: -10%;\r\n    }\r\n    .childBDate {\r\n        position: relative;\r\n        left: -10%;\r\n    }\r\n    div.modal-footer > div > div > a{\r\n        position: absolute;\r\n        left: 50%;\r\n        top: -35px;\r\n        margin-left: -113px;\r\n        color: white;\r\n        height: 60px;\r\n    }\r\n    .lable-top{\r\n        position: absolute;\r\n        top: -52px;\r\n }\r\n \r\n .wrapper-birthd{\r\n    width: 50%;\r\n }\r\n div.childGender.col-md-4.col-xs-12.noPadding.pull-right > div.hasSmoked-input > label{\r\n    width: 30%;\r\n }\r\n}\r\n@media (max-width: 991px) and (min-width: 768px){\r\n    div.childrenListWrapper.noPadding.col-md-12 > div> div.childGender.col-md-4.col-xs-12.noPadding.pull-right{\r\n        margin-top: 30px;\r\n        margin-bottom: 30px;\r\n     }\r\n    .modal-header{\r\n        margin-top: 90px;\r\n    }\r\n    .Close{\r\n        right: 20px;\r\n        top: -50px;\r\n    }\r\n    .title > h3{\r\n        text-align: center;\r\n        position: relative;\r\n        left: 40px;\r\n    }\r\n    div.childGender.col-md-4.col-xs-12.noPadding.pull-right > div.hasSmoked-input > label{\r\n        width: 165px;\r\n    }\r\n    .selectWrapper > div{\r\n        height: 62px;\r\n     }\r\n     .numberOfKids{\r\n        height: 62px;\r\n        margin-bottom: 10px;\r\n     }\r\n     .lable-top{\r\n        margin-top: 10px;\r\n     }\r\n     userBox{\r\n        text-align: right;\r\n     }\r\n     div.input-wrapper > span{\r\n        left: 197px;\r\n     }\r\n     \r\n}\r\n@media (max-width: 768px){\r\n    input[type=\"radio\"] + label{\r\n        height: 40px;\r\n    }\r\n    .modal{\r\n        position: absolute;\r\n        top: 26px;\r\n    }\r\n    .title{\r\n        background-color: #e3f1f4;\r\n        height: 90px;\r\n    }\r\n    .title > img{\r\n        width: 31px;\r\n        max-width: 31px;\r\n        height: 43px;\r\n        max-height: 43px;\r\n        margin: 1.25rem 2.5rem 0 1.25rem;\r\n        float: right;\r\n    }\r\n    .title > h3{\r\n        font-size: 2.85714em;\r\n        line-height: 40px;\r\n        text-align: right;\r\n        padding: 1.5625rem 0;\r\n        white-space: nowrap;\r\n    }\r\n    .modal-header{\r\n        margin-top: 46px;\r\n    }\r\n    .close{\r\n        top: -30px;\r\n    }\r\n    .modalSectionTitle{\r\n        font-size: 1.21429em;\r\n        display: block;\r\n        text-align: center;\r\n        line-height: 17px;\r\n        margin-top: 0.5rem;\r\n        margin-bottom: 0.3125rem;\r\n    }\r\n    input[type=\"radio\"] + label{\r\n        font-size: 1.14286em;\r\n    }\r\n    .numberOfKids{\r\n        width: 45px;\r\n        height: 39px;\r\n        font-size: 1.5em;\r\n        text-align: center;\r\n        background-color: transparent;\r\n        border: 1px solid #8bbef6;\r\n        border-radius: 5px;\r\n        display: block;\r\n    }\r\n    .lable-top{\r\n        font-size: 1.21429em;\r\n        display: block;\r\n        line-height: 17px;\r\n        margin-top: 0.5rem;\r\n        margin-bottom: 0.3125rem;\r\n        position: unset;\r\n        padding: 0;\r\n        text-align: center\r\n    }\r\n    .lable-bot{\r\n        font-size: 1.21429em;\r\n        display: block;\r\n        line-height: 17px;\r\n        margin-top: 0.5rem;\r\n        margin-bottom: 0.3125rem;\r\n    }\r\n    .childGender {\r\n        position: relative;\r\n        left: -30%;\r\n    }\r\n    div.modalStatus.noPadding.clearfix > div > fieldset > div > span{\r\n        text-align: center;\r\n    }\r\n   \r\n    .form-group{\r\n        margin-bottom: 0;\r\n    }\r\n    div > div.lable-bot{\r\n        position: unset;\r\n        text-align: center;\r\n    }\r\n    div.childGender.col-md-4.col-xs-12.noPadding.pull-right > div.lable-bot{\r\n        position: unset;\r\n        text-align: center;\r\n    }\r\n    div.childBDate.col-md-8.col-xs-12.noPadding > div.lable-top{\r\n        position: unset;\r\n        text-align: center;\r\n    }\r\n    div.modal-footer > div > div > a{\r\n        margin-left: -46px;\r\n    }\r\n    div.modal-footer > div > div > a > span{\r\n         padding-top: 0px;\r\n    }\r\n    div.modal-footer > div > div > a {\r\n        height: 40px;\r\n        position: absolute;\r\n        left: 50%;\r\n        margin-left: -67px;\r\n    }\r\n    div.input-wrapper > span{\r\n        position: unset;\r\n    }\r\n    input[type=\"radio\"] + label{\r\n        padding: 0 0rem;\r\n    }\r\n    .title > h3{\r\n        font-size: calc(6px + 4vw);\r\n        line-height: 40px;\r\n        text-align: right; \r\n        padding: 1.5625rem 0; \r\n        white-space: wrap;\r\n        text-align: center;\r\n        position: relative;\r\n        left: 33px\r\n    }\r\n    .input-wrapper{\r\n        position: unset;\r\n        -webkit-box-align: center;\r\n            -ms-flex-align: center;\r\n                align-items: center;\r\n    }\r\n    div.input-wrapper > span{\r\n        position: relative;\r\n        top: 2px !important;\r\n        left: 0 !important;\r\n        text-align: center;\r\n    }\r\n    .childGender{\r\n        position: unset;\r\n    }\r\n    .hasSmoked-input{\r\n        -webkit-box-align: center;\r\n            -ms-flex-align: center;\r\n                align-items: center;\r\n        -webkit-box-pack: center;\r\n            -ms-flex-pack: center;\r\n                justify-content: center;\r\n    }\r\n    .wrapper-birthd{\r\n        display: -webkit-box;\r\n        display: -ms-flexbox;\r\n        display: flex;\r\n        margin-right: 0;\r\n        -webkit-box-pack: center;\r\n            -ms-flex-pack: center;\r\n                justify-content: center;\r\n        -webkit-box-align: center;\r\n            -ms-flex-align: center;\r\n                align-items: center;\r\n        width: 100%;\r\n    }\r\n    div.wrapper-birthd.center-block > div{\r\n       width: 70px !important;\r\n    }\r\n    .modalControllsWrapper{\r\n        -webkit-box-pack: center;\r\n            -ms-flex-pack: center;\r\n                justify-content: center;\r\n        display: -webkit-box;\r\n        display: -ms-flexbox;\r\n        display: flex;\r\n    }\r\n    .childBDate{\r\n        position: unset;\r\n    }\r\n    .modal-dialog{\r\n        margin: 0;\r\n    }\r\n    div.childrenListWrapper.noPadding.col-md-12 > div> div.childGender.col-md-4.col-xs-12.noPadding.pull-right{\r\n        margin-bottom: 25px;\r\n     }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/wizard/calculatorsummary/calculatorsummary-modal/calculatorsummary-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- modal -->\n<div class=\"out-wrap\">\n    <div class=\"fade\" style=\"display:block;opacity: 1;\">\n        <div class=\"modal-dialog\" role=\"document\">\n          <div class=\"modal-content\">\n            <!-- modal head -->\n            <div class=\"modal-header\">\n                <div class=\"title\">\n                    <img src=\"sample-images/calculator/calculator.png\" alt=\"calc\" />\n                    <h3>חישוב סכום כיסוי לביטוח</h3>\n                </div>\n              <button type=\"button\" class=\"close\" (click)=\"closeClick()\" data-dismiss=\"modal\" aria-label=\"Close\">\n                <span aria-hidden=\"true\">&times;</span>\n              </button>\n\n              <!--<h4 class=\"modal-title\" id=\"myModalLabel\">Modal title</h4>-->\n            </div>\n            <!-- modal body -->\n            <div class=\"modal-body\">\n\n\n              <div class=\"modalForm\">\n                <form class=\"\" action=\"/\" method=\"post\">\n                  <div class=\"modalStatus noPadding clearfix\">\n                    <span class=\"modalSectionTitle\">מצב משפחתי:</span>\n                    <div class=\"wrapper\">\n                      <fieldset>\n                        <legend class=\"sr-only\"></legend>\n                        <div class=\"form-group userBox col-xs-12 noPadding\">\n                          <div class=\"statusForm\">\n                              <div class=\"hasSmoked-input\">\n                                  <input type=\"radio\" id=\"radio1\" name=\"status1\" value=\"1\" [(ngModel)]=\"raiodVa\"/>\n                                  <label for=\"radio1\" style=\"border-bottom-right-radius: 4px;border-top-right-radius: 4px;\"><span >רווק</span></label>\n                                  <input type=\"radio\" id=\"radio2\" name=\"status1\" value=\"2\" [(ngModel)]=\"raiodVa\"/>\n                                  <label for=\"radio2\" style=\"border-right:0px;\"><span >נשוי</span></label>\n                                  <input type=\"radio\" id=\"radio3\" name=\"status1\" value=\"3\" [(ngModel)]=\"raiodVa\"/>\n                                  <label for=\"radio3\" style=\"border-right:0px;\"><span >גרוש</span></label>\n                                  <input type=\"radio\" id=\"radio4\" name=\"status1\" value=\"4\" [(ngModel)]=\"raiodVa\"/>\n                                  <label for=\"radio4\" style=\"border-right:0px;\"><span >אלמן</span></label>\n                                  <input type=\"radio\" id=\"radio5\" name=\"status1\" value=\"5\" [(ngModel)]=\"raiodVa\"/>\n                                  <label for=\"radio5\" style=\"border-right:0px;border-bottom-left-radius: 4px;border-top-left-radius: 4px;\"><span >אחר</span></label>\n                              </div>\n                            <!-- <label>\n                              רווק\n                              <input type=\"radio\" name=\"status1\" value=\"1\" />\n                            </label>\n                            <label>\n                              נשוי\n                              <input type=\"radio\" name=\"status1\" value=\"2\" />\n                            </label>\n                            <label>\n                              גרוש\n                              <input type=\"radio\" name=\"status1\" value=\"3\" />\n                            </label>\n                            <label>\n                              אלמן\n                              <input type=\"radio\" name=\"status1\" value=\"4\" />\n                            </label>\n                            <label>\n                              אחר\n                              <input type=\"radio\" name=\"status1\" value=\"5\" />\n                            </label> -->\n                          </div>\n                          <span class=\"field-validation-error lable-bot\" *ngIf=\"showError && !raiodVa\">אנא בחר ערך</span>\n                        </div>\n                      </fieldset>\n                    </div>\n                  </div>\n                  <div class=\"modalKids noPadding clearfix\">\n                    <span class=\"modalSectionTitle\">ילדים:</span>\n                    <fieldset class=\"userBox\">\n                      <legend class=\"sr-only\"></legend>\n                      <div class=\"input-wrapper\">\n                          <input class=\"numberOfKids\" type=\"number\" name=\"name\" [(ngModel)]=\"childrenCount\" (ngModelChange)=\"doChangeChildren($event)\" />\n                          <span class=\"field-validation-error lable-bot \" style=\"position: relative;top: 50px;left: 13px\" *ngIf=\"showError && !childrenCount && childrenCount !== 0\">אנא בחר ערך</span>\n                      </div>\n                      <div class=\"col-xs-12 no-padding\"></div>\n                      <div class=\"childrenListWrapper noPadding col-md-12\">\n                        <div *ngFor=\"let item of childrens;let i = index\" class=\"child row\" disabled>\n                          <div class=\"childGender col-md-4  col-xs-12 noPadding pull-right\">\n                              <div class=\"lable-top\">\n\n                                  ילד \n                              </div>\n                              <div class=\"hasSmoked-input\">\n                                  <input type=\"radio\" id=\"radio6{{i}}\" name=\"status{{i}}\" value=\"6\" [(ngModel)]=\"item.stat\"/>\n                                  <label for=\"radio6{{i}}\" style=\"border-bottom-right-radius: 4px;border-top-right-radius: 4px;\"><span >רווק</span></label>\n                                  <input type=\"radio\" id=\"radio7{{i}}\" name=\"status{{i}}\" value=\"7\" [(ngModel)]=\"item.stat\"/>\n                                  <label for=\"radio7{{i}}\" style=\"border-bottom-left-radius: 4px;border-right:0px;border-top-left-radius: 4px;\"><span >אחר</span></label>\n                              </div>\n                              <div class=\"lable-bot\" *ngIf=\"showError && !item.stat\">\n                                  אנא בחר ערך\n                              </div>\n                          </div>\n                          <div class=\"childBDate col-md-8 col-xs-12 noPadding\">\n                              <div class=\"lable-top\" *ngIf=\"showError\">\n\n                                  תאריך לידה\n                              </div>\n                              <div class=\"wrapper-birthd center-block\">\n                                  <div class=\"selectWrapper\"  style=\"width: 25%;\">\n                                    <div style=\"width: 100%;\">\n                                      <app-autocomplit [data]=\"daysData\"></app-autocomplit>\n                                    </div>\n                                  </div>\n                                  <div class=\"selectWrapper\" style=\"width: 35%; margin-right:11px\">\n                                    <div style=\"width: 100%;\">\n                                      <app-autocomplit [data]=\"monthData\"></app-autocomplit>\n                                    </div>\n                                  </div>\n                                  <div class=\"selectWrapper\" style=\"width: 35%; margin-right:11px;\">\n                                    <div style=\"width: 100%;\">\n                                      <app-autocomplit [data]=\"yearsData\"></app-autocomplit>\n                                    </div>\n                                  </div>\n                                </div>\n                                <!--<div class=\"lable-bot\" *ngIf=\"showError\">-->\n                                    <!--אנא בחר ערך-->\n                                <!--</div>-->\n                          </div>\n                        </div>\n\n                      </div>\n                      <!--<div class=\"kidsAge\">\n                          <div class=\"childBox\">\n                              <label>גיל:</label>\n                              <input type=\"text\" name=\"name\" value=\"\" />\n                          </div>\n                          <div class=\"childBox\">\n                              <label>גיל:</label>\n                              <input type=\"text\" name=\"name\" value=\"\" />\n                          </div>\n                          <div class=\"childBox\">\n                              <label>גיל:</label>\n                              <input type=\"text\" name=\"name\" value=\"\" />\n                          </div>\n                      </div>-->\n                    </fieldset>\n                  </div>\n                  <!--<div class=\"modalSalary noPadding clearfix\">\n                      <span class=\"modalSectionTitle\">שכר:</span>\n                      <div class=\"wrapper\">\n                          <fieldset>\n                              <legend class=\"sr-only\"></legend>\n                              <div class=\"selectWrapper userBox noPadding col-xs-12\">\n                                  <select class=\"selectpicker\">\n                                      <option>בחר שכר</option>\n                                      <option>2</option>\n                                      <option>3</option>\n                                      <option>4</option>\n                                      <option>5</option>\n                                  </select>\n                              </div>\n                          </fieldset>\n                      </div>\n                      <div class=\"col-xs-12 no-padding\"><span class=\"field-validation-error \">אנא בחר ערך</span></div>\n\n                  </div>-->\n                  <!--<div class=\"modalClinic noPadding clearfix\">\n                      <span class=\"modalSectionTitle\">קופת חולים:</span>\n                      <div class=\"wrapper\">\n                          <fieldset>\n                              <legend class=\"sr-only\"></legend>\n                              <div class=\"form-group userBox col-xs-12 noPadding\">\n                                  <div class=\"clinicForm\">\n                                      <label>\n                                          מאוחדת\n                                          <input type=\"radio\" name=\"status1\" value=\"1\" />\n                                      </label>\n                                      <label>\n                                          כללית\n                                          <input type=\"radio\" name=\"status1\" value=\"2\" />\n                                      </label>\n                                      <label>\n                                          מכבי\n                                          <input type=\"radio\" name=\"status1\" value=\"3\" />\n                                      </label>\n                                      <label>\n                                          לאומית\n                                          <input type=\"radio\" name=\"status1\" value=\"4\" />\n                                      </label>\n                                      <label>\n                                          אחר\n                                          <input type=\"radio\" name=\"status1\" value=\"5\" />\n                                      </label>\n                                  </div>\n                              </div>\n                          </fieldset>\n                      </div>\n                      <div class=\"col-xs-12 no-padding\"><span class=\"field-validation-error \">אנא בחר ערך</span></div>\n                  </div>-->\n                </form>\n              </div>\n            </div>\n            <div class=\"modal-footer\">\n              <div class=\"modalControllsWrapper col-xs-12\">\n                <div class=\"calculatorControlls center-block\">\n                  <a (click)=\"save()\" class=\"btn nextBtn center-block\">\n                    <span>המשך</span>\n                  </a>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <!-- modal end -->\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/wizard/calculatorsummary/calculatorsummary-modal/calculatorsummary-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalculatorsummaryModalComponent; });
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

var CalculatorsummaryModalComponent = (function () {
    function CalculatorsummaryModalComponent() {
        this.yearsData = [];
        this.monthData = [
            {
                label: "1",
                value: "1"
            },
            {
                label: "2",
                value: "2"
            },
            {
                label: "3",
                value: "3"
            },
        ];
        this.daysData = [];
        this.close = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.childrens = [];
        this.childrenCount = 0;
        this.setYear();
        this.setDays();
    }
    CalculatorsummaryModalComponent.prototype.ngOnInit = function () {
    };
    CalculatorsummaryModalComponent.prototype.setDays = function () {
        for (var i = 1; i <= 31; i++) {
            this.daysData.push({
                label: i.toString(),
                value: i.toString()
            });
        }
    };
    CalculatorsummaryModalComponent.prototype.setYear = function () {
        for (var i = 1925; i <= 2018; i++) {
            this.yearsData.push({
                label: i.toString(),
                value: i.toString()
            });
        }
    };
    CalculatorsummaryModalComponent.prototype.doChangeChildren = function () {
        this.childrens = [];
        for (var i = 0; i < this.childrenCount; i++) {
            this.childrens.push({ stat: "" });
        }
    };
    CalculatorsummaryModalComponent.prototype.closeClick = function () {
        this.close.emit("");
    };
    CalculatorsummaryModalComponent.prototype.save = function () {
        if (!this.raiodVa) {
            this.showError = true;
        }
        else {
            this.close.emit("");
        }
    };
    return CalculatorsummaryModalComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
    __metadata("design:type", Object)
], CalculatorsummaryModalComponent.prototype, "close", void 0);
CalculatorsummaryModalComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-calculatorsummary-modal',
        template: __webpack_require__("../../../../../src/app/wizard/calculatorsummary/calculatorsummary-modal/calculatorsummary-modal.component.html"),
        styles: [__webpack_require__("../../../../../src/app/wizard/calculatorsummary/calculatorsummary-modal/calculatorsummary-modal.component.css")]
    }),
    __metadata("design:paramtypes", [])
], CalculatorsummaryModalComponent);

//# sourceMappingURL=calculatorsummary-modal.component.js.map

/***/ }),

/***/ "../../../../../src/app/wizard/calculatorsummary/calculatorsummary.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/wizard/calculatorsummary/calculatorsummary.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"calculatorHead col-xs-12 noPadding\">\n  <h2>השאוות הצעות לביטוח חיים</h2>\n  <p>\n    מילוי שאלון קצר לצורך הפקת הצעות ביטוח\n  </p>\n  <span>יקח לך 2 דקות</span>\n</div>\n<div class=\"step_calculatorSummary col-xs-12 noPadding\">\n  <span class=\"field-validation-error center-block text-center\" *ngIf=\"showError && !amount\">הודעת שגיאה</span>\n  <div class=\"calculatorSummary col-xs-10 col-xs-push-1 noPadding\">\n    <p class=\"summaryTitle text-center\">סכום הביטוח שיספק לך לחיים מאושרים</p>\n    <div class=\"calculate\">\n      <fieldset class=\"calculateWrapper center-block\">\n        <legend class=\"sr-only\">###</legend>\n        <a (click)=\"showCalculator = true\" class=\"\" type=\"button\" data-toggle=\"modal\" data-target=\"#needs-modal\">\n          <img src=\"sample-images/calculator/calculator.png\" alt=\"calc\" />\n          <span>חשב מחדש</span>\n        </a>\n\n        <div class=\"inputWrapper\">\n          <input [(ngModel)]=\"amount\" id=\"aaa\" class=\"form-control\" type=\"number\" name=\"calculate\" placeholder=\"\" />\n          <span class=\"nisIcon\"></span>\n        </div>\n      </fieldset>\n    </div>\n  </div>\n\n</div>\n<div class=\"calculatorControllsWrapper col-xs-12\">\n  <div class=\"calculatorControlls center-block\">\n    <a (click)=\"back()\" class=\"btn backBtn center-block\">\n      <span>&#60;חזור</span>\n    </a>\n    <a (click)=\"save()\" class=\"btn nextBtn center-block\">\n      <span>הבא</span>\n    </a>\n  </div>\n</div>\n<div class=\"modalka\">\n  <app-calculatorsummary-modal *ngIf=\"showCalculator\" (close)=\"showCalculator = false\" style=\"transition: 3s;\"></app-calculatorsummary-modal>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/wizard/calculatorsummary/calculatorsummary.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalculatorsummaryComponent; });
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

var CalculatorsummaryComponent = (function () {
    function CalculatorsummaryComponent() {
        this.amount = 0;
        this.next = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
    }
    CalculatorsummaryComponent.prototype.ngOnInit = function () {
    };
    CalculatorsummaryComponent.prototype.save = function () {
        this.next.emit(({
            finish: true,
            amount: this.amount
        }));
    };
    CalculatorsummaryComponent.prototype.back = function () {
        this.next.emit(({
            naxtPage: 'profession'
        }));
    };
    return CalculatorsummaryComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
    __metadata("design:type", Object)
], CalculatorsummaryComponent.prototype, "next", void 0);
CalculatorsummaryComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-calculatorsummary',
        template: __webpack_require__("../../../../../src/app/wizard/calculatorsummary/calculatorsummary.component.html"),
        styles: [__webpack_require__("../../../../../src/app/wizard/calculatorsummary/calculatorsummary.component.css")]
    }),
    __metadata("design:paramtypes", [])
], CalculatorsummaryComponent);

//# sourceMappingURL=calculatorsummary.component.js.map

/***/ }),

/***/ "../../../../../src/app/wizard/genderselect/genderselect.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/wizard/genderselect/genderselect.component.html":
/***/ (function(module, exports) {

module.exports = "    <div class=\"calculatorHead col-xs-12 noPadding\">\n      <h2>השוואת הצעות לביטוח חיים</h2>\n      <p>\n        מילוי שאלון קצר לצורך הפקת הצעות ביטוח\n      </p>\n      <span>יקח לך 2 דקות</span>\n    </div>\n    <div class=\"step_genderSelect col-xs-12 noPadding\">\n      <span class=\"field-validation-error center-block text-center\" *ngIf=\"showError && !gender\">אנא בחר מין</span>\n      <div class=\"genderSelect\">\n        <fieldset>\n          <legend class=\"sr-only\">###</legend>\n          <input type=\"hidden\" name=\"gender\" id=\"hdnGender\" value=\"\" />\n          <div class=\"male\" (click)=\"gender= 'male'\" [ngClass]=\"{'active-male': gender === 'male'}\" role=\"button\" data-value=\"0\" tabindex=\"0\">\n            <span>גבר</span>\n          </div>\n          <div class=\"female\" (click)=\"gender= 'female'\" [ngClass]=\"{'active-female': gender === 'female'}\" role=\"button\" data-value=\"1\" tabindex=\"0\">\n            <span>אישה</span>\n          </div>\n        </fieldset>\n      </div>\n    </div>\n    <div class=\"calculatorControllsWrapper col-xs-12\">\n      <div class=\"calculatorControlls center-block\">\n        <a (click)=\"save()\" class=\"btn nextBtn center-block\">\n          <span>המשך</span>\n        </a>\n      </div>\n    </div>\n"

/***/ }),

/***/ "../../../../../src/app/wizard/genderselect/genderselect.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GenderselectComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_service_store_service__ = __webpack_require__("../../../../../src/app/shared/service/store.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GenderselectComponent = (function () {
    function GenderselectComponent(storeService) {
        this.storeService = storeService;
        this.next = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        var store = this.storeService.getByKey("genderselect");
        if (store) {
            this.gender = store;
        }
    }
    GenderselectComponent.prototype.ngOnInit = function () {
    };
    GenderselectComponent.prototype.save = function () {
        if (!this.gender) {
            this.showError = true;
        }
        else {
            this.next.emit(({
                // naxtPage: 'birthdate',
                naxtPage: 'private-health-personalinfo',
                model: this.gender,
                type: 'genderselect'
            }));
            this.storeService.setByKey("genderselect", this.gender);
        }
    };
    return GenderselectComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
    __metadata("design:type", Object)
], GenderselectComponent.prototype, "next", void 0);
GenderselectComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-genderselect',
        template: __webpack_require__("../../../../../src/app/wizard/genderselect/genderselect.component.html"),
        styles: [__webpack_require__("../../../../../src/app/wizard/genderselect/genderselect.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_service_store_service__["a" /* StoreService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_service_store_service__["a" /* StoreService */]) === "function" && _a || Object])
], GenderselectComponent);

var _a;
//# sourceMappingURL=genderselect.component.js.map

/***/ }),

/***/ "../../../../../src/app/wizard/health-insurance/health-insurance.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* active radio */\r\n/* div > div> div > div > div > div > div > fieldset > div > div > label:focus{ \r\n    background: #117ef5;\r\n    color: #626262;\r\n    border: none;\r\n    outline: none !important;\r\n}\r\ndiv.step_calculatorSummary.col-xs-12.noPadding > div > div > div > div > div> fieldset > div > label:focus{\r\n    background: #117ef5;\r\n    color: #626262;\r\n    border: none;\r\n    outline: none !important;\r\n} */\r\n.hasSmoked-input{\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: start;\r\n        -ms-flex-pack: start;\r\n            justify-content: flex-start;\r\n}\r\n.modalStatus{\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n}\r\n.hasSmoked-input > input[type=\"radio\"] {\r\n    display:none;\r\n}\r\n\r\n.hasSmoked-input > input[type=\"radio\"] + label {\r\n    color:#f2f2f2;\r\n    width: 20%;\r\n    border: 2px solid #117ef5;\r\n    padding: 0 2rem;\r\n    font-size: 1.57143em;\r\n    line-height: 22px;\r\n    background:white;\r\n    cursor:pointer;\r\n    text-align: center;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n}\r\n.hasSmoked-input > input[type=\"radio\"] + label span {\r\n    display:inline-block;\r\n    vertical-align:middle;\r\n    text-align: center;\r\n    color: #626262;\r\n    padding-top: 8px;\r\n    height: 43px;\r\n}\r\n\r\n.hasSmoked-input > input[type=\"radio\"]:checked + label{\r\n    background: #117ef5;\r\n    color: white;\r\n    /* border: 2px solid #707070 !important; */\r\n}\r\n.radio-buttons-top{\r\n    margin-bottom: 20px;\r\n}\r\n.bottom-input > input[type=\"radio\"] + label {\r\n    border: 1px solid #117ef5;\r\n    white-space: nowrap;\r\n}\r\n.hasSmoked-input > input[type=\"radio\"]:checked + label > span{\r\n    color: white;\r\n    /* border: 2px solid #707070 !important; */\r\n}\r\n.left-input > input[type=\"radio\"] + label {\r\n    width: 32%;\r\n}\r\n.wrapper{\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: justify;\r\n        -ms-flex-pack: justify;\r\n            justify-content: space-between;\r\n    height: 64px;\r\n}\r\n.clearfix{\r\n    \r\n}\r\n.form-wrapper{\r\n    position: relative;\r\n}\r\n.val-container{\r\n    position: absolute;\r\n    bottom: 0;\r\n}\r\n@media screen and (min-width: 992px) {\r\n    .error-right{\r\n        padding-right: 103px !important;\r\n    }\r\n    .error-left{\r\n        padding-right: 97px !important;\r\n    }\r\n    \r\n}\r\n\r\n@media screen and (max-width: 992px) {\r\n    .wrapper{\r\n        display: block;\r\n        height: 107px;\r\n    }\r\n    .hasSmoked-input > input[type=\"radio\"] + label {\r\n        width: 33%;\r\n    }\r\n}\r\n@media screen and (max-width: 500px) {\r\n    .hasSmoked-input > input[type=\"radio\"] + label {\r\n        width: 91px;\r\n    }\r\n    .left-input > input[type=\"radio\"] + label {\r\n        width: 91px;\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/wizard/health-insurance/health-insurance.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"calculator clearfix\">\n  <div class=\"calculatorHead col-xs-12 noPadding\">\n    <h2>השאוות הצעות לביטוח בריאות</h2>\n    <p>\n      מילוי שאלון קצר לצורך הפקת הצעות ביטוח\n    </p>\n    <span>יקח לך 2 דקות</span>\n  </div>\n  <div class=\"step_calculatorSummary col-xs-12 noPadding\">\n    <span class=\"field-validation-error center-block text-center\" *ngIf=\"showError\">הודעת שגיאה</span>\n    <div class=\"calculatorSummary col-xs-12\">\n\n      <div class=\"calculate\">\n        <!--private-health-->\n        <div class=\"private-health\">\n          <h3>תוכנית בריאות פרטית</h3>\n          <div class=\"generalForm\">\n            <!--form-group-->\n            <div class=\"form-group col-md-5 col-xs-12 right\">\n              <!--1-->\n              <fieldset class=\"form-wrapper\">\n                <legend class=\"sr-only\">###</legend>\n                <p>האם קיימת תוכנית בריאות פרטית?</p>\n                <div class=\"clearfix\">\n                  <div class=\"wrapper\">\n                      <div class=\"subject col-md-4 col-xs-12 right noPadding\">\n                          <div>\n                            דוד דוד דוד דוד\n                          </div>\n                        </div>\n                        <div class=\"private1 btn-group btoggle btoggle-single col-md-7  col-xs-12 noPadding right\" dir=\"rtl\">\n                        <div class=\"hasSmoked-input bottom-input\">\n                            <input type=\"radio\" id=\"radio1\" name=\"private-health11\" value=\"1\" [(ngModel)]=\"manExist\"/>\n                            <label for=\"radio1\" style=\"border-bottom-right-radius: 4px;border-top-right-radius: 4px;\"><span >כן</span></label>\n                            <input type=\"radio\" id=\"radio2\" name=\"private-health11\" value=\"2\" [(ngModel)]=\"manExist\"/>\n                            <label for=\"radio2\" style=\"border-right:0px;\"><span >לא</span></label>\n                            <input type=\"radio\" id=\"radio3\" name=\"private-health11\" value=\"3\" [(ngModel)]=\"manExist\"/>\n                            <label for=\"radio3\" style=\"border-right:0px;border-bottom-left-radius: 4px;border-top-left-radius: 4px;\"><span >לא יודע</span></label>\n                        </div>\n\n                        </div>\n                  </div>\n\n                </div>\n                <div *ngIf=\"showError && !manExist\" class=\"val-container\">\n                  <span class=\"small field-validation-error error-right\" data-valmsg-for=\"PrivateHealthInsurance\" data-valmsg-replace=\"true\"><span id=\"PrivateHealthInsurance-error\" class=\"\">אנא בחר ערך</span></span>&nbsp;\n                </div>\n              </fieldset>\n              <!--2-->\n              <fieldset *ngIf=\"info.wifeName\" class=\"form-wrapper\">\n                <div class=\"clearfix\">\n                    <div class=\"wrapper\">\n                        <div class=\"subject col-md-4 col-xs-12 right noPadding\"><div>בן/ בת זוג:</div></div>\n                        <div class=\"private2 btn-group btoggle btoggle-single col-md-7  col-xs-12 noPadding right\" dir=\"rtl\">\n                            <div class=\"hasSmoked-input bottom-input\">\n                                <input type=\"radio\" id=\"radio4\" name=\"private-health12\" value=\"1\"  [(ngModel)]=\"wifeExist\"/>\n                                <label for=\"radio4\" style=\"border-bottom-right-radius: 4px;border-top-right-radius: 4px;\"><span >כן</span></label>\n                                <input type=\"radio\" id=\"radio5\" name=\"private-health12\" value=\"2\"  [(ngModel)]=\"wifeExist\"/>\n                                <label for=\"radio5\" style=\"border-right:0px;\"><span >לא</span></label>\n                                <input type=\"radio\" id=\"radio6\" name=\"private-health12\" value=\"3\" [(ngModel)]=\"wifeExist\" />\n                                <label for=\"radio6\" style=\"border-right:0px;border-bottom-left-radius: 4px;border-top-left-radius: 4px;\"><span >לא יודע</span></label>\n                            </div>\n\n                        </div>\n                    </div>\n\n                </div>\n                <div *ngIf=\"showError && !wifeExist\" class=\"val-container\">\n                  <span class=\"small field-validation-error error-right\" data-valmsg-for=\"PrivateHealthInsurance\" data-valmsg-replace=\"true\"><span id=\"PrivateHealthInsurance-error\" class=\"\">אנא בחר ערך</span></span>&nbsp;\n                </div>\n              </fieldset>\n              <!--3-->\n              <fieldset *ngIf=\"info.childAmount\" class=\"form-wrapper\">\n                  <div class=\"wrapper\">\n                      <div class=\"subject col-md-4 col-xs-12 right noPadding\"><div>ילדים:</div></div>\n                      <div class=\"private3 btn-group btoggle btoggle-single col-md-7  col-xs-12 right noPadding\" dir=\"rtl\">\n                        <div class=\"hasSmoked-input bottom-input\">\n                                <input type=\"radio\" id=\"radio7\" name=\"private-health13\" value=\"1\"  [(ngModel)]=\"childExist\"/>\n                                <label for=\"radio7\" style=\"border-bottom-right-radius: 4px;border-top-right-radius: 4px;\"><span >כן</span></label>\n                                <input type=\"radio\" id=\"radio8\" name=\"private-health13\" value=\"2\" [(ngModel)]=\"childExist\"/>\n                                <label for=\"radio8\" style=\"border-right:0px;\"><span >לא</span></label>\n                                <input type=\"radio\" id=\"radio9\" name=\"private-health13\" value=\"3\" [(ngModel)]=\"childExist\"/>\n                                <label for=\"radio9\" style=\"border-right:0px;border-bottom-left-radius: 4px;border-top-left-radius: 4px;\"><span >לא יודע</span></label>\n                            </div>\n\n                      </div>\n                  </div>\n                  <div *ngIf=\"showError && !childExist\" class=\"val-container\">\n                    <span class=\"small field-validation-error error-right\" data-valmsg-for=\"PrivateHealthInsurance\" data-valmsg-replace=\"true\"><span id=\"PrivateHealthInsurance-error\" class=\"\">אנא בחר ערך</span></span>&nbsp;\n                  </div>\n              </fieldset>\n              <!--span class=\"field-validation-error\">error<!--/span-->\n            </div>\n            <!--end form-group-->\n            <!--form-group-->\n            <div class=\"form-group col-md-7 col-xs-12 right\">\n              <!--1-->\n              <fieldset class=\"form-wrapper\">\n                <p>סוג התוכנית</p>\n                <div class=\"clearfix\">\n                    <div class=\"wrapper\" [ngClass]=\"{'inactive-block': manExist === '2'}\">\n                        <div class=\"subject col-md-2 col-xs-12 noPadding right\">\n                            <div>\n                              דוד\n                            </div>\n                          </div>\n                          <div class=\"type1 btn-group btoggle btoggle-single col-md-9  col-xs-12 noPadding right\" dir=\"rtl\">\n                              <div class=\"hasSmoked-input bottom-input left-input\">\n                                  <input type=\"radio\" id=\"radio13\" name=\"private-health1\" value=\"1\" [(ngModel)]=\"manType\"/>\n                                  <label for=\"radio13\" style=\"border-bottom-right-radius: 4px;border-top-right-radius: 4px;\"><span >פרטית</span></label>\n                                  <input type=\"radio\" id=\"radio14\" name=\"private-health1\" value=\"2\" [(ngModel)]=\"manType\"/>\n                                  <label for=\"radio14\" style=\"border-right:0px;\"><span >קולקטיב</span></label>\n                                  <input type=\"radio\" id=\"radio15\" name=\"private-health1\" value=\"3\" [(ngModel)]=\"manType\"/>\n                                  <label for=\"radio15\" style=\"border-right:0px;border-bottom-left-radius: 4px;border-top-left-radius: 4px;\"><span >לא יודע</span></label>\n                              </div>\n\n                          </div>\n                    </div>\n\n                </div>\n                <div *ngIf=\"showError && !manType && manExist !== '2'\" class=\"val-container\">\n                  <span class=\"small field-validation-error error-left\" data-valmsg-for=\"PrivateHealthInsurance\" data-valmsg-replace=\"true\"><span id=\"PrivateHealthInsurance-error\" class=\"\">אנא בחר ערך</span></span>&nbsp;\n                </div>\n              </fieldset>\n              <!--2-->\n              <fieldset *ngIf=\"info.wifeName\"  class=\"form-wrapper\">\n                <div class=\"wrapper\" [ngClass]=\"{'inactive-block': wifeExist === '2'}\">\n                    <div class=\"subject col-md-3 noPadding right col-xs-12\" style=\"white-space:nowrap;margin-left: 7px;\"><div>בן/ בת זוג:</div></div>\n                    <div class=\"clearfix\" style=\"width: 100%;\">\n                      <div class=\"type2 btn-group btoggle btoggle-single col-xs-12 noPadding right\" dir=\"rtl\">\n                          <div class=\"hasSmoked-input bottom-input left-input\">\n                              <input type=\"radio\" id=\"radio16\" name=\"private-health2\" value=\"1\" [(ngModel)]=\"wifeType\"/>\n                              <label for=\"radio16\" style=\"border-bottom-right-radius: 4px;border-top-right-radius: 4px;\"><span >פרטית</span></label>\n                              <input type=\"radio\" id=\"radio17\" name=\"private-health2\" value=\"2\" [(ngModel)]=\"wifeType\"/>\n                              <label for=\"radio17\" style=\"border-right:0px;\"><span >קולקטיב</span></label>\n                              <input type=\"radio\" id=\"radio18\" name=\"private-health2\" value=\"3\" [(ngModel)]=\"wifeType\"/>\n                              <label for=\"radio18\" style=\"border-right:0px;border-bottom-left-radius: 4px;border-top-left-radius: 4px;\"><span >לא יודע</span></label>\n                          </div>\n\n                      </div>\n                    </div>\n                </div>\n\n                <div *ngIf=\"showError && !wifeType && wifeExist !== '2'\" class=\"val-container\">\n                  <span class=\"small field-validation-error error-left\" data-valmsg-for=\"PrivateHealthInsurance\" data-valmsg-replace=\"true\"><span id=\"PrivateHealthInsurance-error\" class=\"\">אנא בחר ערך</span></span>&nbsp;\n                </div>\n              </fieldset>\n              <!--3-->\n              <fieldset *ngIf=\"info.childAmount\" class=\"form-wrapper\">\n                <div class=\"wrapper\" [ngClass]=\"{'inactive-block': childExist === '2'}\">\n                    <div class=\"subject col-md-2 col-xs-12 noPadding right\"><div>ילדים:</div></div>\n                    <div class=\"type3 btn-group btoggle btoggle-single col-md-9  col-xs-12 noPadding right\" dir=\"rtl\">\n                        <div class=\"hasSmoked-input bottom-input left-input\">\n                            <input type=\"radio\" id=\"radio19\" name=\"private-health3\" value=\"1\" [(ngModel)]=\"childType\"/>\n                            <label for=\"radio19\" style=\"border-bottom-right-radius: 4px;border-top-right-radius: 4px;\"><span >פרטית</span></label>\n                            <input type=\"radio\" id=\"radio20\" name=\"private-health3\" value=\"2\" [(ngModel)]=\"childType\"/>\n                            <label for=\"radio20\" style=\"border-right:0px;\"><span >קולקטיב</span></label>\n                            <input type=\"radio\" id=\"radio21\" name=\"private-health3\" value=\"3\" [(ngModel)]=\"childType\"/>\n                            <label for=\"radio21\" style=\"border-right:0px;border-bottom-left-radius: 4px;border-top-left-radius: 4px;\"><span >לא יודע</span></label>\n                        </div>\n\n                    </div>\n                </div>\n                <div *ngIf=\"showError && !childType && childExist !== '2'\" class=\"val-container\">\n                  <span class=\"small field-validation-error error-left\" data-valmsg-for=\"PrivateHealthInsurance\" data-valmsg-replace=\"true\"><span id=\"PrivateHealthInsurance-error\" class=\"\">אנא בחר ערך</span></span>&nbsp;\n                </div>\n                <!--span class=\"field-validation-error\">error<!--/span-->\n              </fieldset>\n              <!--end form-group-->\n            </div>\n          </div>\n        </div>\n        <!--end private-health-->\n      </div>\n    </div>\n\n\n  </div>\n  <div class=\"calculatorControllsWrapper col-xs-12\">\n    <div class=\"calculatorControlls center-block\">\n      <a (click)=\"back()\" class=\"btn backBtn center-block\">\n        <span>&#60;חזור</span>\n      </a>\n      <a (click)=\"save()\" class=\"btn nextBtn center-block\">\n        <span>לקבלת הצעות</span>\n      </a>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/wizard/health-insurance/health-insurance.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HealthInsuranceComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_service_store_service__ = __webpack_require__("../../../../../src/app/shared/service/store.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HealthInsuranceComponent = (function () {
    function HealthInsuranceComponent(storeService) {
        this.storeService = storeService;
        this.manExist = "";
        this.manType = "";
        this.wifeExist = "";
        this.wifeType = "";
        this.childExist = "";
        this.childType = "";
        this.info = {};
        this.next = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
    }
    HealthInsuranceComponent.prototype.ngOnInit = function () {
        var info = this.storeService.getByKey("private-health-personalinfo");
        if (info) {
            this.info = info;
        }
    };
    HealthInsuranceComponent.prototype.save = function () {
        if (!this.manExist || (!this.manType && this.manExist !== '2') ||
            (this.info.wifeName && (!this.wifeExist || !this.wifeType) && this.wifeExist !== '2') ||
            (this.info.childAmount && (!this.childExist || !this.childType) && this.childExist !== '2')) {
            this.showError = true;
        }
        else {
            this.next.emit(({
                finish: true,
                naxtPage: 'health-insurance',
                type: "health-insurance",
                model: this.manExist
            }));
        }
    };
    HealthInsuranceComponent.prototype.back = function () {
        this.next.emit(({
            naxtPage: 'kupot-holim'
        }));
    };
    return HealthInsuranceComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
    __metadata("design:type", Object)
], HealthInsuranceComponent.prototype, "next", void 0);
HealthInsuranceComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-health-insurance',
        template: __webpack_require__("../../../../../src/app/wizard/health-insurance/health-insurance.component.html"),
        styles: [__webpack_require__("../../../../../src/app/wizard/health-insurance/health-insurance.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_service_store_service__["a" /* StoreService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_service_store_service__["a" /* StoreService */]) === "function" && _a || Object])
], HealthInsuranceComponent);

var _a;
//# sourceMappingURL=health-insurance.component.js.map

/***/ }),

/***/ "../../../../../src/app/wizard/info/info.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n  .contactPhone{\r\n    -webkit-box-pack: justify;\r\n        -ms-flex-pack: justify;\r\n            justify-content: space-between;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: reverse;\r\n        -ms-flex-direction: row-reverse;\r\n            flex-direction: row-reverse;\r\n  }\r\n  .calculator .step_personalInfo .personalInfo .confirmBox label.checked::before, .calculator .step_personalInfo .getResults .confirmBox label.checked::before, .calculator .step_getResults .personalInfo .confirmBox label.checked::before, .calculator .step_getResults .getResults .confirmBox label.checked::before{\r\n    content: \"\\F046\";\r\n  }\r\n  \r\n  /* .checked{\r\n    content: \"\\f046\";\r\n  }\r\n  input[type=\"checkbox\"] {\r\n    display:none;\r\n}\r\n\r\ninput[type=\"hidden\"] + label {\r\n    color:#f2f2f2;\r\n}\r\n\r\ninput[type=\"checkbox\"] + label span {\r\n    display:inline-block;\r\n    width:19px;\r\n    height:19px;\r\n    margin:-2px 10px 0 0;\r\n    vertical-align:middle;\r\n    background:url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/check_radio_sheet.png) left top no-repeat;\r\n    cursor:pointer;\r\n} */\r\ninput[type=\"checkbox\"]{\r\n    display: none;\r\n}\r\ninput[type=\"checkbox\"]:checked + label::before {\r\n    content: \"\\F046\";\r\n}\r\n@media screen and (max-width: 992px) {\r\n    div.noPadding.clearfix > div > div > div{\r\n        width: 27% !important;\r\n    }\r\n    .contactPhone {\r\n        height: 33px;\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/wizard/info/info.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"calculatorHead col-xs-12 noPadding\">\n  <h2>השאוות הצעות לביטוח חיים</h2>\n  <p>\n    מילוי שאלון קצר לצורך הפקת הצעות ביטוח\n  </p>\n  <span>יקח לך 2 דקות</span>\n</div>\n<div class=\"step_personalInfo col-xs-12 noPadding\">\n  <!--<span class=\"field-validation-error center-block text-center\">הודעת שגיאה</span>-->\n  <div class=\"personalInfo col-xs-10 col-xs-push-1\">\n    <fieldset>\n      <legend class=\"sr-only\">###</legend>\n      <div class=\"wrapper\">\n        <div class=\"noPadding\">\n          <label for=\"firstName\" class=\"\">שם פרטי</label>\n          <input id=\"firstName\" [(ngModel)]=\"model.firstName\" class=\"form-control\" type=\"text\" name=\"firstName\" placeholder=\"שם פרטי\" data-placeholder=\"שם פרטי\">\n          <span class=\"field-validation-error\" *ngIf=\"showError && !model.firstName\">שדה שם פרטי הוא שדה חובה</span>\n        </div>\n        <div class=\"noPadding\">\n          <label for=\"lastName\">שם משפחה</label>\n          <input id=\"lastName\" [(ngModel)]=\"model.lastName\" class=\"form-control\" type=\"text\" name=\"lastName\" placeholder=\"שם משפחה\" data-placeholder=\"שם משפחה\">\n          <span class=\"field-validation-error\" *ngIf=\"showError && !model.lastName\" data-valmsg-for=\"LastName\" data-valmsg-replace=\"true\"><span id=\"LastName-error\" class=\"\">שדה שם משפחה הוא שדה חובה</span></span>\n        </div>\n        <div class=\"noPadding clearfix\">\n          <label for=\"phone\">הטלפון שלי</label>\n          <input id=\"phone\" type=\"hidden\" value=\"\" />\n          <div class=\"clearfix\">\n            <div class=\"contactPhone noPadding col-xs-12\">\n              <div style=\"width: 90px;\">\n                <app-autocomplit [data]=\"phoneData\" (change)=\"phoneChange($event)\"></app-autocomplit>\n              </div>\n\n              <input [(ngModel)]=\"model.phone\" class=\"form-control\" type=\"text\" name=\"phone\" placeholder=\"הטלפון שלי\" data-placeholder=\"הטלפון שלי\">\n            </div>\n          </div>\n          <span class=\"field-validation-error\" *ngIf=\"showError && !model.phone\">שדה טלפון הוא שדה חובה</span>\n        </div>\n        <div class=\"noPadding\">\n          <label for=\"email\" class=\"\">כתובת אימייל</label>\n          <div class=\"clearfix\">\n            <input [(ngModel)]=\"model.email\" id=\"email\" class=\"form-control col-md-4\" type=\"text\" name=\"email\" placeholder=\"המייל שלי\" data-placeholder=\"המייל שלי\">\n          </div>\n          <span class=\"field-validation-error\" *ngIf=\"showError && !model.email\">יש להזין כתובת אימייל חוקית</span>\n        </div>\n\n        <div class=\"confirmBox noPadding\">\n          <!-- <input type=\"checkbox\" name=\"confirm\" value=\"1\" id=\"confirmBoxInput\" /> -->\n          <input [ngModel]=\"model.link\" type=\"checkbox\" value=\"checkboxvalue\" id=\"confirmBoxInput\"/>\n          <label class=\"checkbox-label \" for=\"confirmBoxInput\">\n            אישור קבלת חומר שיווקי\n          </label>\n          <div class=\"clearfix visible-xs visible-sm hidden-md\"></div>\n          <div>\n            <span class=\"field-validation-error\" *ngIf=\"showError && !model.link\">יש לאשר קבלת חומר שיווקי</span>\n          </div>\n        </div>\n      </div>\n    </fieldset>\n  </div>\n\n</div>\n<div class=\"calculatorControllsWrapper col-xs-12\">\n  <div class=\"calculatorControlls center-block\">\n    <a href=\"#\" class=\"btn backBtn center-block\">\n      <span>&#60;חזור</span>\n    </a>\n    <a (click)=\"save()\" class=\"btn nextBtn center-block\">\n      <span>הבא</span>\n    </a>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/wizard/info/info.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_service_store_service__ = __webpack_require__("../../../../../src/app/shared/service/store.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InfoComponent = (function () {
    function InfoComponent(storeService) {
        this.storeService = storeService;
        this.model = {
            firstName: "",
            lastName: "",
            phone: "",
            email: "",
            prefix: "050",
            link: true
        };
        this.phoneData = [
            {
                label: "050",
                value: "050"
            },
            {
                label: "040",
                value: "040"
            },
            {
                label: "060",
                value: "060"
            },
            {
                label: "070",
                value: "070"
            },
        ];
        this.next = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        var store = this.storeService.getByKey("info");
        if (store) {
            this.model = store;
        }
    }
    InfoComponent.prototype.ngOnInit = function () {
    };
    InfoComponent.prototype.phoneChange = function (e) {
        this.model.prefix = e;
    };
    InfoComponent.prototype.save = function () {
        console.log(this.model);
        if (this.model.phone === "" ||
            this.model.email === "" ||
            this.model.lastName === "" ||
            this.model.firstName === "") {
            this.showError = true;
        }
        else {
            this.next.emit(({
                naxtPage: 'genderselect',
                type: "info",
                model: this.model
            }));
            this.storeService.setByKey("info", this.model);
        }
    };
    return InfoComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
    __metadata("design:type", Object)
], InfoComponent.prototype, "next", void 0);
InfoComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-info',
        template: __webpack_require__("../../../../../src/app/wizard/info/info.component.html"),
        styles: [__webpack_require__("../../../../../src/app/wizard/info/info.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_service_store_service__["a" /* StoreService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_service_store_service__["a" /* StoreService */]) === "function" && _a || Object])
], InfoComponent);

var _a;
//# sourceMappingURL=info.component.js.map

/***/ }),

/***/ "../../../../../src/app/wizard/kupot-holim/kupot-holim.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*  active radio */\r\ndiv.step_calculatorSummary.col-xs-12.noPadding > div > div > div > div > div > fieldset > div > input[type=\"radio\"]:checked + label{\r\n    background: #117ef5 !important;\r\n    color: #626262 !important;\r\n    border: none !important;\r\n    outline: none !important;\r\n}\r\n/*  */\r\n\r\n.hasSmoked-input{\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n}\r\n.modalStatus{\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n}\r\n.hasSmoked-input > input[type=\"radio\"] {\r\n    display:none;\r\n}\r\n\r\n.hasSmoked-input > input[type=\"radio\"] + label {\r\n    color:#f2f2f2;\r\n    width: 25%;\r\n    border: 2px solid #117ef5;\r\n    padding: 0 2rem;\r\n    font-size: 1.57143em;\r\n    line-height: 22px;\r\n    background:white;\r\n    cursor:pointer;\r\n    text-align: center;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n}\r\n.hasSmoked-input > input[type=\"radio\"] + label span {\r\n    display:inline-block;\r\n   \r\n    \r\n    vertical-align:middle;\r\n    \r\n   \r\n    \r\n    text-align: center;\r\n    color: #626262;\r\n    padding-top: 8px;\r\n    height: 43px;\r\n}\r\n\r\n.hasSmoked-input > input[type=\"radio\"]:checked + label{\r\n    background: #117ef5;\r\n    color: white;\r\n    /* border: 2px solid #707070 !important; */\r\n}\r\n.hasSmoked-input > input[type=\"radio\"]:checked + label > span{\r\n    color: white;\r\n    /* border: 2px solid #707070 !important; */\r\n}\r\n.radio-buttons-top{\r\n    margin-bottom: 20px;\r\n}\r\n.bottom-input > input[type=\"radio\"] + label {\r\n    width: 25%;\r\n    border: 1px solid #117ef5;\r\n}\r\n.left-wrap-radio > input[type=\"radio\"] + label {\r\n    width: 41%;\r\n}\r\n.left-wrap-radio > input[type=\"radio\"] +  label:nth-child(4){\r\n    width: 59%;\r\n}\r\n@media screen and (max-width: 992px) {\r\n    .left-content-top {\r\n        float: right;\r\n        padding-right: 0\r\n    }\r\n}\r\n@media screen and (max-width: 500px) {\r\n    .bottom-input > input[type=\"radio\"] + label {\r\n        padding: 0 0 !important;\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/wizard/kupot-holim/kupot-holim.component.html":
/***/ (function(module, exports) {

module.exports = "  <div class=\"calculator clearfix\">\n    <div class=\"calculatorHead col-xs-12 noPadding\">\n      <h2>השאוות הצעות לביטוח בריאות</h2>\n      <p>\n        מילוי שאלון קצר לצורך הפקת הצעות ביטוח\n      </p>\n      <span>יקח לך 2 דקות</span>\n    </div>\n    <div class=\"step_calculatorSummary col-xs-12 noPadding\">\n      <span class=\"field-validation-error center-block text-center\"*ngIf=\"showError\">הודעת שגיאה</span>\n      <div class=\"calculatorSummary col-xs-12\">\n\n        <div class=\"calculate\">\n          <!--private-health-->\n          <div class=\"private-health\">\n            <h3 class=\"yesPadding\">קופת חולים + משלימים</h3>\n            <div class=\"generalForm HMO\">\n              <div class=\"radio-buttons-top col-xs-12 \">\n                  <div class=\"col-md-5 col-xs-8 left-content-top\">\n                      <div class=\"col-xs-12 noPadding\">\n                          <div class=\"statusForm big\" style=\"display: flex;flex-flow: column;\">\n                              <div class=\"subject right noPadding\">דוד</div>\n                              <div class=\"hasSmoked-input\">\n                                  <input type=\"radio\" id=\"radio6\" name=\"status1\" value=\"true\" [(ngModel)]=\"obj.manHMOextra\"/>\n                                  <label for=\"radio6\" style=\"border-bottom-right-radius: 20px;border-top-right-radius: 20px;\"><span >רווק</span></label>\n                                  <input type=\"radio\" id=\"radio7\" name=\"status1\" value=\"false\" [(ngModel)]=\"obj.manHMOextra\"/>\n                                  <label for=\"radio7\" style=\"border-right:0px;border-bottom-left-radius: 20px;border-top-left-radius: 20px;\"><span >אחר</span></label>\n                              </div>\n                          </div>\n                          <span class=\"field-validation-error\" *ngIf=\"showError && !obj.manHMOextra && obj.manHMOextra !== false\">אנא בחר ערך</span>\n                        </div>\n                  </div>\n                  <div class=\"col-md-7 col-xs-12\" style=\"padding-right: 0;\">\n                      <div class=\"col-xs-12 noPadding\" style=\"padding-right: 0;\">\n                          <div class=\"statusForm big\" style=\"display: flex;flex-flow: column;\">\n                              <div class=\"subject right noPadding\">דוד</div>\n                              <div class=\"hasSmoked-input\">\n                                  <input type=\"radio\" id=\"radio1\" name=\"status12\" value=\"16\" [(ngModel)]=\"obj.manHMO\"/>\n                                  <label for=\"radio1\" style=\"border-bottom-right-radius: 20px;border-top-right-radius: 20px;\"><span >רווק</span></label>\n                                  <input type=\"radio\" id=\"radio3\" name=\"status12\" value=\"17\" [(ngModel)]=\"obj.manHMO\"/>\n                                  <label for=\"radio3\" style=\"border-right:0px;\"><span >גרוש</span></label>\n                                  <input type=\"radio\" id=\"radio4\" name=\"status12\" value=\"18\" [(ngModel)]=\"obj.manHMO\"/>\n                                  <label for=\"radio4\" style=\"border-right:0px;\"><span >אלמן</span></label>\n                                  <input type=\"radio\" id=\"radio5\" name=\"status12\" value=\"19\" [(ngModel)]=\"obj.manHMO\"/>\n                                  <label for=\"radio5\" style=\"border-right:0px;border-bottom-left-radius: 20px;border-top-left-radius: 20px;\"><span >אחר</span></label>\n                              </div>\n                          </div>\n                          <span class=\"field-validation-error\" *ngIf=\"showError && !obj.manHMO\">אנא בחר ערך</span>\n                        </div>\n                  </div>\n              </div>\n              <!--form-group-->\n              <div *ngIf=\"info.wifeName\" class=\"form-group col-xs-12 noPadding\">\n                <!--1-->\n                <fieldset class=\"col-md-8  col-xs-12 right form-wrapper\">\n                  <legend class=\"sr-only\">###</legend>\n                  <div class=\"subject col-xs-12 right noPadding\">דוד</div>\n                  <div class=\"HMO-name btn-group btoggle btoggle-single col-xs-12 noPadding right\" dir=\"rtl\">\n                      <div class=\"hasSmoked-input bottom-input\">\n                          <input type=\"radio\" id=\"radio8\" name=\"HMO-name\" value=\"1\" [(ngModel)]=\"obj.wifeHMO\"/>\n                          <label for=\"radio8\" style=\"border-bottom-right-radius: 4px;border-top-right-radius: 4px;\"><span >מאוחדת</span></label>\n                          <input type=\"radio\" id=\"radio9\" name=\"HMO-name\" value=\"2\" [(ngModel)]=\"obj.wifeHMO\"/>\n                          <label for=\"radio9\" style=\"border-right:0px;\"><span >מכבי</span></label>\n                          <input type=\"radio\" id=\"radio10\" name=\"HMO-name\" value=\"3\" [(ngModel)]=\"obj.wifeHMO\"/>\n                          <label for=\"radio10\" style=\"border-right:0px;\"><span >כללית</span></label>\n                          <input type=\"radio\" id=\"radio11\" name=\"HMO-name\" value=\"4\" [(ngModel)]=\"obj.wifeHMO\"/>\n                          <label for=\"radio11\" style=\"border-right:0px;border-bottom-left-radius: 4px;border-top-left-radius: 4px;\"><span >לאומית</span></label>\n                      </div>\n                    <!-- <label class=\"btn btn-default btn-btgoggle\" tabindex=\"0\">\n                      מאוחדת\n                      <input type=\"radio\" name=\"HMO-name\" value=\"1\" tabindex=\"-1\" style=\"display: none;\" [(ngModel)]=\"wifeHMO\">\n                    </label>\n                    <label class=\"btn btn-default btn-btgoggle\" tabindex=\"0\">\n                      מכבי\n                      <input type=\"radio\" name=\"HMO-name\" value=\"2\" tabindex=\"-1\" style=\"display: none;\" [(ngModel)]=\"wifeHMO\">\n                    </label>\n                    <label class=\"btn btn-default btn-btgoggle\" tabindex=\"0\">\n                      כללית\n                      <input type=\"radio\" name=\"HMO-name\" value=\"3\" tabindex=\"-1\" style=\"display: none;\" [(ngModel)]=\"wifeHMO\">\n                    </label>\n                    <label class=\"btn btn-default btn-btgoggle\" tabindex=\"0\">\n                      לאומית\n                      <input type=\"radio\" name=\"HMO-name\" value=\"3\" tabindex=\"-1\" style=\"display: none;\" [(ngModel)]=\"wifeHMO\">\n                    </label> -->\n\n                  </div>\n                  <span class=\"field-validation-error small\" *ngIf=\"showError && !obj.wifeHMO\">אנא בחר ערך</span>\n                </fieldset>\n                <!--2-->\n                <fieldset class=\"col-md-4 col-xs-8 right form-wrapper\">\n                  <div class=\"subject col-xs-12 right noPadding\">משלים</div>\n                  <div class=\"HMO-name2 btn-group btoggle btoggle-single  col-xs-12 noPadding right\" dir=\"rtl\">\n                      <div class=\"hasSmoked-input bottom-input left-wrap-radio\">\n                          <input type=\"radio\" id=\"radio12\" name=\"HMO-name1\" value=\"false\" [(ngModel)]=\"obj.wifeHMOextra\"/>\n                          <label for=\"radio12\" style=\"border-bottom-right-radius: 4px;border-top-right-radius: 4px;\"><span >קיים</span></label>\n                          <input type=\"radio\" id=\"radio13\" name=\"HMO-name1\" value=\"true\" [(ngModel)]=\"obj.wifeHMOextra\"/>\n                          <label for=\"radio13\" style=\"border-right:0px;border-bottom-left-radius: 4px;border-top-left-radius: 4px;\"><span >לא קיים</span></label>\n                      </div>\n                    <!-- <label class=\"btn btn-default btn-btgoggle\" tabindex=\"0\">\n                      קיים\n                      <input type=\"radio\" name=\"HMO-name1\" value=\"false\" style=\"display: none;\" [(ngModel)]=\"wifeHMOextra\">\n                    </label>\n                    <label class=\"btn btn-default btn-btgoggle\" tabindex=\"0\">\n                      לא קיים\n                      <input type=\"radio\" name=\"HMO-name1\" value=\"true\" style=\"display: none;\" [(ngModel)]=\"wifeHMOextra\">\n                    </label> -->\n                  </div>\n                  <span class=\"field-validation-error small\" *ngIf=\"showError && !obj.wifeHMOextra && obj.wifeHMOextra !== false\">אנא בחר ערך</span>\n                </fieldset>\n\n              </div>\n              <!--end form-group-->\n              <!--form-group-->\n              <div *ngIf=\"info.childAmount\" class=\"form-group col-xs-12 noPadding\">\n                <!--1-->\n                <fieldset class=\"col-md-8  col-xs-12 right form-wrapper\">\n                  <legend class=\"sr-only\">###</legend>\n                  <div class=\"subject col-xs-12 right noPadding\">בן / בת</div>\n                  <div class=\"HMO-spouse btn-group btoggle btoggle-single col-xs-12 noPadding right\" dir=\"rtl\">\n                      <div class=\"hasSmoked-input bottom-input\">\n                          <input type=\"radio\" id=\"radio14\" name=\"HMO-spouse\" value=\"1\" [(ngModel)]=\"obj.childHMO\"/>\n                          <label for=\"radio14\" style=\"border-bottom-right-radius: 4px;border-top-right-radius: 4px;\"><span >מאוחדת</span></label>\n                          <input type=\"radio\" id=\"radio15\" name=\"HMO-spouse\" value=\"2\" [(ngModel)]=\"obj.childHMO\"/>\n                          <label for=\"radio15\" style=\"border-right:0px;\"><span >מכבי</span></label>\n                          <input type=\"radio\" id=\"radio16\" name=\"HMO-spouse\" value=\"3\" [(ngModel)]=\"obj.childHMO\"/>\n                          <label for=\"radio16\" style=\"border-right:0px;\"><span >כללית</span></label>\n                          <input type=\"radio\" id=\"radio17\" name=\"HMO-spouse\" value=\"4\" [(ngModel)]=\"obj.childHMO\"/>\n                          <label for=\"radio17\" style=\"border-right:0px;border-bottom-left-radius: 4px;border-top-left-radius: 4px;\"><span >לאומית</span></label>\n                      </div>\n                    <!-- <label class=\"btn btn-default btn-btgoggle\" tabindex=\"0\">\n                      מאוחדת\n                      <input type=\"radio\" name=\"HMO-spouse\" value=\"1\" tabindex=\"-1\" style=\"display: none;\" [(ngModel)]=\"childHMO\">\n                    </label>\n                    <label class=\"btn btn-default btn-btgoggle\" tabindex=\"0\">\n                      מכבי\n                      <input type=\"radio\" name=\"HMO-spouse\" value=\"2\" tabindex=\"-1\" style=\"display: none;\" [(ngModel)]=\"childHMO\">\n                    </label>\n                    <label class=\"btn btn-default btn-btgoggle\" tabindex=\"0\">\n                      כללית\n                      <input type=\"radio\" name=\"HMO-spouse\" value=\"3\" tabindex=\"-1\" style=\"display: none;\" [(ngModel)]=\"childHMO\">\n                    </label>\n                    <label class=\"btn btn-default btn-btgoggle\" tabindex=\"0\">\n                      לאומית\n                      <input type=\"radio\" name=\"HMO-spouse\" value=\"3\" tabindex=\"-1\" style=\"display: none;\" [(ngModel)]=\"childHMO\">\n                    </label> -->\n                  </div>\n                  <span class=\"field-validation-error small\" *ngIf=\"showError && !obj.childHMO\">אנא בחר ערך</span>\n                </fieldset>\n                <!--2-->\n                <fieldset class=\"col-md-4 col-xs-8 right form-wrapper\">\n                  <div class=\"subject col-xs-12 right noPadding\">משלים</div>\n                  <div class=\"HMO-couple2 btn-group btoggle btoggle-single  col-xs-12 noPadding right\" dir=\"rtl\">\n                      <div class=\"hasSmoked-input bottom-input left-wrap-radio\">\n                          <input type=\"radio\" id=\"radio18\" name=\"HMO-couple\" value=\"1\" [(ngModel)]=\"obj.childHMOextra\"/>\n                          <label for=\"radio18\" style=\"border-bottom-right-radius: 4px;border-top-right-radius: 4px;\"><span >קיים</span></label>\n                          <input type=\"radio\" id=\"radio19\" name=\"HMO-couple\" value=\"2\" [(ngModel)]=\"obj.childHMOextra\"/>\n                          <label for=\"radio19\" style=\"border-right:0px;border-bottom-left-radius: 4px;border-top-left-radius: 4px;\"><span >לא קיים</span></label>\n                      </div>\n                    <!-- <label class=\"btn btn-default btn-btgoggle\" tabindex=\"0\">\n                      קיים\n                      <input type=\"radio\" name=\"HMO-couple\" value=\"1\" tabindex=\"-1\" style=\"display: none;\" [(ngModel)]=\"childHMOextra\">\n                    </label>\n                    <label class=\"btn btn-default btn-btgoggle\" tabindex=\"0\">\n                      לא קיים\n                      <input type=\"radio\" name=\"HMO-couple\" value=\"2\" tabindex=\"-1\" style=\"display: none;\" [(ngModel)]=\"childHMOextra\">\n                    </label> -->\n                  </div>\n                  <span class=\"field-validation-error small\" *ngIf=\"showError && !obj.childHMOextra && obj.childHMOextra !== false\">אנא בחר ערך</span>\n                </fieldset>\n              </div>\n              <!--end form-group-->\n\n\n            </div>\n          </div>\n          <!--end private-health-->\n        </div>\n      </div>\n\n\n    </div>\n    <div class=\"calculatorControllsWrapper col-xs-12\">\n      <div class=\"calculatorControlls center-block\">\n        <a (click)=\"back()\" class=\"btn backBtn center-block\">\n          <span>&#60;חזור</span>\n        </a>\n        <a (click)=\"save()\" class=\"btn nextBtn center-block\">\n          <span>המשך</span>\n        </a>\n      </div>\n    </div>\n  </div>\n"

/***/ }),

/***/ "../../../../../src/app/wizard/kupot-holim/kupot-holim.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KupotHolimComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_service_store_service__ = __webpack_require__("../../../../../src/app/shared/service/store.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var KupotHolimComponent = (function () {
    function KupotHolimComponent(storeService) {
        this.storeService = storeService;
        this.obj = {
            manHMO: "",
            manHMOextra: "",
            wifeHMO: "",
            wifeHMOextra: "",
            childHMO: "",
            childHMOextra: ""
        };
        this.info = {
            wifeName: 2,
            childAmount: 2,
        };
        this.next = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
    }
    KupotHolimComponent.prototype.ngOnInit = function () {
        var store = this.storeService.getByKey("kupot-holim");
        if (store) {
            this.obj = store;
        }
        this.info = this.storeService.getByKey("private-health-personalinfo");
    };
    KupotHolimComponent.prototype.save = function () {
        if (((!this.obj.manHMO && !(this.obj.manHMO === false)) || !this.obj.manHMOextra) ||
            (this.info.wifeName && ((!this.obj.wifeHMO && !(this.obj.wifeHMO === false)) || !this.obj.wifeHMOextra)) ||
            (this.info.childAmount && ((!this.obj.childHMO && !(this.obj.childHMO === false)) || !this.obj.childHMOextra))) {
            this.showError = true;
        }
        else {
            this.next.emit(({
                naxtPage: 'health-insurance',
                type: "kupot-holim",
                model: this.obj
            }));
            this.storeService.setByKey("kupot-holim", this.obj);
        }
    };
    KupotHolimComponent.prototype.back = function () {
        this.next.emit(({
            naxtPage: 'private-health-personalinfo'
        }));
    };
    return KupotHolimComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
    __metadata("design:type", Object)
], KupotHolimComponent.prototype, "next", void 0);
KupotHolimComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-kupot-holim',
        template: __webpack_require__("../../../../../src/app/wizard/kupot-holim/kupot-holim.component.html"),
        styles: [__webpack_require__("../../../../../src/app/wizard/kupot-holim/kupot-holim.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_service_store_service__["a" /* StoreService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_service_store_service__["a" /* StoreService */]) === "function" && _a || Object])
], KupotHolimComponent);

var _a;
//# sourceMappingURL=kupot-holim.component.js.map

/***/ }),

/***/ "../../../../../src/app/wizard/private-health-personalinfo/private-health-personalinfo.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n.hasSmoked-input{\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n}\r\n.modalStatus{\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n}\r\n.hasSmoked-input > input[type=\"radio\"] {\r\n    display:none;\r\n}\r\n.hasSmoked-input > input[type=\"radio\"] + label {\r\n    color:#f2f2f2;\r\n    width: 20%;\r\n    border: 1px solid #117ef5;\r\n    padding: 0 2rem;\r\n    font-size: 1.57143em;\r\n    line-height: 22px;\r\n    background:white;\r\n    cursor:pointer;\r\n    text-align: center;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n}\r\n.hasSmoked-input > input[type=\"radio\"] + label span {\r\n    display:inline-block;\r\n    vertical-align:middle;\r\n    text-align: center;\r\n    color: #626262;\r\n    padding-top: 8px;\r\n    height: 43px;\r\n}\r\n\r\n.hasSmoked-input > input[type=\"radio\"]:checked + label{\r\n    background: #117ef5;\r\n    color: white;\r\n}\r\n.hasSmoked-input > input[type=\"radio\"]:checked + label > span{\r\n    color: white;\r\n}\r\n.center-block{\r\n    height: 45px;\r\n}\r\n/* .smoke-input{\r\n    display: flex;\r\njustify-content: center;\r\n} */\r\n.smoke-input > input[type=\"radio\"] + label {\r\n    border: 2px solid #117ef5;\r\n    width: 30%;\r\n}\r\n.intut-wrapper-inside > input[type=\"radio\"] + label {\r\n    border: 2px solid #117ef5;\r\n}\r\n.smole-buttons > input[type=\"radio\"] + label {\r\n    padding: 0 24px;\r\n}\r\n@media (max-width: 992px){\r\n    .checkup-error-position {\r\n        text-align: center !important;\r\n    }\r\n}\r\n@media (max-width: 570px){\r\n    .hasSmoked-input > input[type=\"radio\"] + label {\r\n        padding: 0 1rem;  \r\n    }\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/wizard/private-health-personalinfo/private-health-personalinfo.component.html":
/***/ (function(module, exports) {

module.exports = "\n    <div class=\"calculator clearfix\">\n      <div class=\"calculatorHead col-xs-12 noPadding\">\n        <h2>השאוות הצעות לביטוח בריאות</h2>\n        <p>\n          מילוי שאלון קצר לצורך הפקת הצעות ביטוח\n        </p>\n        <span>יקח לך 2 דקות</span>\n      </div>\n      <div class=\"step_calculatorSummary col-xs-12 noPadding\">\n        <!--<span class=\"field-validation-error center-block text-center\">הודעת שגיאה</span>-->\n        <div class=\"calculatorSummary col-xs-12\">\n\n          <div class=\"calculate\">\n            <!--private-health-->\n            <div class=\"private-health\">\n              <div class=\"generalForm\" >\n                <!--personalDetails-->\n                <div class=\"personalDetails\">\n                  <fieldset>\n                    <legend class=\"sr-only\">###</legend>\n                    <div class=\"birthDate pull-right noPadding col-md-5 col-xs-12\">\n                      <label class=\"subject\">תאריך לידה</label>\n                      <div class=\"wrapper center-block button-helth-top\" id=\"button-helth-top\">\n                          <div class=\"selectWrapper\"  style=\"width: 19%;height: 100%;\">\n                            <div style=\"width: 100%;height: 100%;\">\n                              <app-autocomplit [data]=\"daysData\"  (change)=\"daysChange($event)\"></app-autocomplit>\n                            </div>\n                          </div>\n                          <div class=\"selectWrapper\" style=\"width: 38%;margin-right: 2px;height: 100%;\">\n                            <div style=\"width: 100%;height: 100%;\">\n                              <app-autocomplit [data]=\"monthData\" (change)=\"monthChange($event)\"></app-autocomplit>\n                            </div>\n                          </div>\n                          <div class=\"selectWrapper\" style=\"width: 27%;margin-right: 3px;height: 100%;\">\n                            <div style=\"width: 100%;height: 100%;\">\n                              <app-autocomplit [data]=\"yearsData\" (change)=\"yearsChange($event)\"></app-autocomplit>\n                            </div>\n                          </div>\n                        </div>\n                      <!-- <div class=\"selectWrapper big\">\n                        <select class=\"day selectpicker\">\n                          <option>14</option>\n                          <option>2</option>\n                          <option>3</option>\n                          <option>4</option>\n                          <option>5</option>\n                        </select>\n                      </div>\n                      <div class=\"selectWrapper big\">\n                        <select class=\"month selectpicker\">\n                          <option>ספט'</option>\n                          <option>2</option>\n                          <option>3</option>\n                          <option>4</option>\n                          <option>5</option>\n                        </select>\n                      </div>\n                      <div class=\"selectWrapper big\">\n                        <select class=\"year selectpicker\">\n                          <option>1975</option>\n                          <option>2</option>\n                          <option>3</option>\n                          <option>4</option>\n                          <option>5</option>\n                        </select>\n                      </div> -->\n                      <div class=\"clearfix visible-xs visible-sm hidden-md\"></div>\n                      <!--<span class=\"field-validation-error\">אנא בחר ערך</span>-->\n                    </div>\n\n                  </fieldset>\n                </div>\n                <!--end personalDetails-->\n                <!--smoking-->\n                <div class=\"step_smoking col-xs-12 clearfix noPadding\">\n                  <div class=\"smoking\">\n                    <div class=\"col-md-7 col-xs-12 pull-right noPadding\">\n                      <div class=\"isSmoking\">\n                        <fieldset>\n                          <legend class=\"sr-only\">###</legend>\n                          <input type=\"hidden\" name=\"smoking\" id=\"hdnSmoking\" value=\"\" />\n                          <div class=\"yes \" (click)=\"obj.smoking = true\" [ngClass]=\"{'yes-active': obj.smoking === true}\" role=\"button\" data-value=\"1\" tabindex=\"0\">\n                            <span>מעשן</span>\n                          </div>\n                          <div class=\"no\" (click)=\"obj.smoking = false\" [ngClass]=\"{'no-active': obj.smoking === false}\" role=\"button\" data-value=\"0\" tabindex=\"0\">\n                            <span>לא מעשן</span>\n                          </div>\n                        </fieldset>\n                        <span class=\"small field-validation-error\" *ngIf=\"showError && !obj.smoking && obj.smoking !== false\" data-valmsg-for=\"IsSmokedPast3Years\" data-valmsg-replace=\"true\"><span id=\"IsSmokedPast3Years-error\" class=\"\">אנא בחר ערך</span></span>\n\n                      </div>\n                    </div>\n\n                    <div  class=\"col-md-5 col-xs-12 noPadding  pull-right\">\n                      <div class=\"lastSmoked hasSmoked\" *ngIf=\"obj.smoking === false\">\n                        <fieldset>\n                          <legend style=\"text-align: right;\">האם עישנת ב-3 השנים האחרונות</legend>\n                          <div class=\"hasSmoked-input smoke-input\">\n                            <input type=\"radio\" id=\"smoke\" name=\"status1\" value=\"כן\" [(ngModel)]=\"obj.yearSmokin\"/>\n                            <label for=\"smoke\" style=\"border-radius:0px 17px 17px 0px;\"><span style=\"\">כן</span></label>\n                            <input type=\"radio\" id=\"nsmoke\" name=\"status1\" value=\"לא\" [(ngModel)]=\"obj.yearSmokin\"/>\n                            <label for=\"nsmoke\" style=\"position: relative;left: 0px;border-right:none;border-radius:17px 0px 0px 17px;\"><span style=\"\">לא</span></label>\n                          </div>\n                          <span class=\"field-validation-error small\" *ngIf=\"showError && smoking === false && !obj.yearSmokin\">אנא בחר ערך</span>\n                        </fieldset>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <!--end smoking-->\n                <!--MedicalSection-->\n                <!--<div class=\"MedicalSection col-xs-12 clearfix noPadding\">-->\n                  <!--<fieldset>-->\n                    <!--<legend class=\"sr-only\">###</legend>-->\n                    <!--<div class=\"clinic formSection col-md-7 col-xs-12 pull-right noPadding\">-->\n                      <!--<label class=\"subject\">קופת חולים:</label>-->\n                      <!--<div class=\"wrapper\">-->\n                        <!--<div class=\"form-group col-xs-12 noPadding\">-->\n                            <!--<div class=\"hasSmoked-input\">-->\n                                <!--<input type=\"radio\" id=\"radio10\" name=\"status3\" value=\"10\" [(ngModel)]=\"raiodVa\"/>-->\n                                <!--<label for=\"radio10\" style=\"border-bottom-right-radius: 4px;border-top-right-radius: 4px;\"><span >מאוחדת</span></label>-->\n                                <!--<input type=\"radio\" id=\"radio11\" name=\"status3\" value=\"11\" [(ngModel)]=\"raiodVa\"/>-->\n                                <!--<label for=\"radio11\" style=\"border-right:0px;\"><span >כללית</span></label>-->\n                                <!--<input type=\"radio\" id=\"radio12\" name=\"status3\" value=\"12\" [(ngModel)]=\"raiodVa\"/>-->\n                                <!--<label for=\"radio12\" style=\"border-right:0px;\"><span >מכבי</span></label>-->\n                                <!--<input type=\"radio\" id=\"radio13\" name=\"status3\" value=\"13\" [(ngModel)]=\"raiodVa\"/>-->\n                                <!--<label for=\"radio13\" style=\"border-right:0px;border-bottom-left-radius: 4px;border-top-left-radius: 4px;\"><span >לאומית</span></label>-->\n                            <!--</div>-->\n                          <!--&lt;!&ndash; <div class=\"clinicForm big\">-->\n                            <!--<label>-->\n                              <!--מאוחדת-->\n                              <!--<input type=\"radio\" name=\"clinic1\" value=\"1\" />-->\n                            <!--</label>-->\n                            <!--<label>-->\n                              <!--כללית-->\n                              <!--<input type=\"radio\" name=\"clinic1\" value=\"2\" />-->\n                            <!--</label>-->\n                            <!--<label>-->\n                              <!--מכבי-->\n                              <!--<input type=\"radio\" name=\"clinic1\" value=\"3\" />-->\n                            <!--</label>-->\n                            <!--<label>-->\n                              <!--לאומית-->\n                              <!--<input type=\"radio\" name=\"clinic1\" value=\"4\" />-->\n                            <!--</label>-->\n                          <!--</div> &ndash;&gt;-->\n                          <!--<span class=\"field-validation-error\">אנא בחר ערך</span>-->\n                        <!--</div>-->\n                      <!--</div>-->\n                    <!--</div>-->\n                    <!--<div class=\"medigap formSection col-md-5 col-xs-12 pull-right noPadding\">-->\n                      <!--<label class=\"subject\">ביטוח משלים:</label>-->\n                      <!--<div class=\"wrapper\">-->\n                          <!--<div class=\"hasSmoked-input\">-->\n                              <!--<input type=\"radio\" id=\"radio8\" name=\"status4\" value=\"8\" [(ngModel)]=\"raiodVa\"/>-->\n                              <!--<label for=\"radio8\" style=\"border-bottom-right-radius: 4px;-->\n                              <!--border-top-right-radius: 4px;\"><span >כן</span></label>-->\n                              <!--<input type=\"radio\" id=\"radio9\" name=\"status4\" value=\"9\" [(ngModel)]=\"raiodVa\"/>-->\n                              <!--<label for=\"radio9\" style=\"border-right:0px;border-bottom-left-radius: 4px;border-top-left-radius: 4px;\"><span >לא</span></label>-->\n                          <!--</div>-->\n                      <!--</div>-->\n                    <!--</div>-->\n                  <!--</fieldset>-->\n                <!--</div>-->\n\n                <!--end MedicalSection-->\n\n                <div class=\"status pull-right noPadding col-md-7 col-xs-12\">\n                  <label class=\"subject\">מצב משפחתי:</label>\n                  <div class=\"col-xs-12 noPadding\">\n                    <div class=\"statusForm big\">\n                      <div class=\"hasSmoked-input intut-wrapper-inside\">\n                        <input type=\"radio\" id=\"radio1\" name=\"status1\" value=\"9\" [(ngModel)]=\"obj.raiodMaritalStatus\"/>\n                        <label for=\"radio1\" style=\"border-bottom-right-radius: 17px;border-top-right-radius: 17px;\"><span >רווק</span></label>\n                        <input type=\"radio\" id=\"radio2\" name=\"status1\" value=\"10\" [(ngModel)]=\"obj.raiodMaritalStatus\"/>\n                        <label for=\"radio2\" style=\"border-right:0px;\"><span >נשוי</span></label>\n                        <input type=\"radio\" id=\"radio3\" name=\"status1\" value=\"11\" [(ngModel)]=\"obj.raiodMaritalStatus\"/>\n                        <label for=\"radio3\" style=\"border-right:0px;\"><span >גרוש</span></label>\n                        <input type=\"radio\" id=\"radio4\" name=\"status1\" value=\"12\" [(ngModel)]=\"obj.raiodMaritalStatus\"/>\n                        <label for=\"radio4\" style=\"border-right:0px;\"><span >אלמן</span></label>\n                        <input type=\"radio\" id=\"radio5\" name=\"status1\" value=\"13\" [(ngModel)]=\"obj.raiodMaritalStatus\"/>\n                        <label for=\"radio5\" style=\"border-right:0px;border-bottom-left-radius: 17px;border-top-left-radius: 17px;\"><span >אחר</span></label>\n                      </div>\n                    </div>\n                    <span class=\"field-validation-error\" *ngIf=\"!obj.raiodMaritalStatus && showError\">אנא בחר ערך</span>\n                  </div>\n                </div>\n\n              </div>\n            </div>\n            <!--end private-health-->\n          </div>\n        </div>\n\n\n      </div>\n      <!--<div class=\"calculatorControllsWrapper col-xs-12\">-->\n        <!--<div class=\"calculatorControlls center-block\">-->\n\n          <!--<a href=\"#\" class=\"btn nextBtn center-block\">-->\n            <!--<span>המשך</span>-->\n          <!--</a>-->\n        <!--</div>-->\n      <!--</div>-->\n    </div>\n\n    <div class=\"step_calculatorSummary col-xs-12 noPadding\">\n      <!--<span class=\"field-validation-error center-block text-center\">הודעת שגיאה</span>-->\n      <div class=\"calculatorSummary col-xs-12\">\n        <div class=\"calculate\">\n          <!--private-health-->\n          <div class=\"private-health\">\n            <div class=\"generalForm\">\n              <!--formSection section-->\n              <div class=\"formSection\">\n                <fieldset>\n                  <legend class=\"sr-only\">###</legend>\n\n                  <div class=\"wrapper\">\n\n                    <!--spouse-->\n                    <div *ngIf=\"obj.raiodMaritalStatus === '10'\" class=\"col-xs-12 noPadding\">\n                      <div class=\"row spouse\">\n                        <div class=\"col-md-3 col-xs-12 pull-right\">\n                          <label class=\"subject\">בן/בת זוג</label>\n                          <div class=\"form-group\">\n                            <input type=\"text\" name=\"childname1\" class=\"medium2\"  [(ngModel)]=\"obj.wifeName\"/>\n                          </div>\n                          <span class=\"field-validation-error small\" *ngIf=\"!obj.wifeName && showError\">שדה שם פרטי הוא שדה חובה</span>\n                        </div>\n                        <div class=\"col-md-2 col-xs-12 pull-right\">\n                          <label class=\"subject\">מין</label>\n                          <div class=\"form-group\">\n                              <div class=\"hasSmoked-input\">\n                                  <input type=\"radio\" id=\"radio16\" name=\"status5\" value=\"16\" [(ngModel)]=\"obj.wifV1\"/>\n                                  <label for=\"radio16\" style=\"border-bottom-right-radius: 4px;\n                                  border-top-right-radius: 4px;\"><span >כן</span></label>\n                                  <input type=\"radio\" id=\"radio17\" name=\"status5\" value=\"17\" [(ngModel)]=\"obj.wifV1\"/>\n                                  <label for=\"radio17\" style=\"border-right:0px;border-bottom-left-radius: 4px;border-top-left-radius: 4px;\"><span >לא</span></label>\n                              </div>\n                            <span class=\"field-validation-error small\" *ngIf=\"!obj.wifV1 && showError\">אנא בחר מין</span>\n                          </div>\n                        </div>\n                        <div class=\"col-md-4 col-xs-12 pull-right\">\n                          <label class=\"subject\">תאריך לידה</label>\n                          <div>\n                              <div class=\"wrapper center-block button-helth\" id=\"button-helth\">\n                                  <div class=\"selectWrapper\"  style=\"width: 19%;height: 100%;\">\n                                    <div style=\"width: 100%;height: 100%;\">\n                                      <app-autocomplit [data]=\"daysData\"  (change)=\"daysChange($event)\"></app-autocomplit>\n                                    </div>\n                                  </div>\n                                  <div class=\"selectWrapper\" style=\"width: 38%;margin-right: 2px;height: 100%;\">\n                                    <div style=\"width: 100%;height: 100%;\">\n                                      <app-autocomplit [data]=\"monthData\" (change)=\"monthChange($event)\"></app-autocomplit>\n                                    </div>\n                                  </div>\n                                  <div class=\"selectWrapper\" style=\"width: 27%;margin-right: 3px;height: 100%;\">\n                                    <div style=\"width: 100%;height: 100%;\">\n                                      <app-autocomplit [data]=\"yearsData\" (change)=\"yearsChange($event)\"></app-autocomplit>\n                                    </div>\n                                  </div>\n                                </div>\n\n                            <div class=\"clearfix visible-xs visible-sm hidden-md\"></div>\n                            <!--<span class=\"field-validation-error small\">שדה תאריך לידה הוא שדה חובה</span>-->\n                          </div>\n                        </div>\n\n                        <div class=\"col-md-3 col-xs-3 pull-right \" style=\"padding-right: 29px;\">\n                          <label class=\"subject\">מעשן</label>\n                          <div class=\"form-group\">\n                              <div class=\"hasSmoked-input\">\n                                  <input type=\"radio\" id=\"radio14\" name=\"status6\" value=\"yes\" [(ngModel)]=\"obj.radioWifeSmoke\"/>\n                                  <label for=\"radio14\" style=\"border-bottom-right-radius: 4px;\n                                  border-top-right-radius: 4px;\"><span >כן</span></label>\n                                  <input type=\"radio\" id=\"radio15\" name=\"status6\" value=\"no\" [(ngModel)]=\"obj.radioWifeSmoke\"/>\n                                  <label for=\"radio15\" style=\"border-right:0px;border-bottom-left-radius: 4px;border-top-left-radius: 4px;\"><span >לא</span></label>\n                              </div>\n                            <span class=\"field-validation-error small\" *ngIf=\"!obj.radioWifeSmoke && showError\">אנא בחר ערך</span>\n                          </div>\n                        </div>\n                        <!--smoking-->\n                        <div class=\"smoking col-md-12 col-xs-9\" *ngIf=\"obj.radioWifeSmoke === 'no'\">\n                          <div class=\"col-md-5 pull-right noPadding\">\n                            <div class=\"col-md-7 col-xs-7 pull-right noPadding\"><label class=\"subject\">האם עישנת ב-3 שנים האחרונות?</label></div>\n                            <div class=\"form-group pull-right col-md-5 col-xs-5\">\n                                <div class=\"hasSmoked-input smole-buttons\">\n                                    <input type=\"radio\" id=\"radio25\" name=\"status7\" value=\"yes\" [(ngModel)]=\"last3year\"/>\n                                    <label for=\"radio25\" style=\"border-bottom-right-radius: 4px;\n                                    border-top-right-radius: 4px;\"><span >כן</span></label>\n                                    <input type=\"radio\" id=\"radio26\" name=\"status7\" value=\"no\" [(ngModel)]=\"last3year\"/>\n                                    <label for=\"radio26\" style=\"border-right:0px;border-bottom-left-radius: 4px;border-top-left-radius: 4px;\"><span >לא</span></label>\n                                </div>\n                              <span class=\"field-validation-error small\" *ngIf=\"!last3year && showError\">אנא בחר ערך</span>\n                            </div>\n                          </div>\n\n                        </div>\n                        <!--/smoking-->\n                      </div>\n                    </div>\n                    <!--/spouse-->\n                    <!----children-->\n                    <div class=\"children clearfix\">\n                      <div class=\"noPadding pull-right col-md-3 col-xs-12\">\n                        <label for=\"childAmount\" class=\"subject\">ילדים:</label>\n                        <input type=\"number\" class=\"form-control medium childAmount\" id=\"childAmount\" name=\"childAmount\" placeholder=\"0\"  [(ngModel)]=\"obj.childAmount\" (ngModelChange)=\"doChangeChildren($event)\">\n                        <!--<span class=\"field-validation-error small\" >שדה זה הוא שדה חובה</span>-->\n                      </div>\n\n                      <div class=\"noPadding pull-right col-md-9 col-xs-12\">\n                        <!---child1-->\n                        <div class=\"row child\" *ngFor=\"let child of obj.childrens; let i = index\">\n                          <div class=\"col-md-3 col-xs-12 pull-right\">\n                            <label class=\"subject\">ילד {{i + 1}}</label>\n                            <div class=\"form-group\">\n                              <input type=\"text\" name=\"childname1\" value=\"שם\" class=\"medium\" [(ngModel)]=\"child.name\"/>\n                            </div>\n                            <span class=\"field-validation-error small\" *ngIf=\"showError && !child.name\">שדה שם פרטי הוא שדה חובה</span>\n                          </div>\n                          <div class=\"col-md-3 col-xs-12 pull-right\">\n                            <label class=\"subject\">מין</label>\n                            <div class=\"form-group\">\n                                <div class=\"hasSmoked-input\">\n                                    <input type=\"radio\" id=\"radio18{{i}}\" name=\"status{{i}}\" value=\"18\" [(ngModel)]=\"child.radio\"/>\n                                    <label for=\"radio18{{i}}\" style=\"border-bottom-right-radius: 4px;\n                                    border-top-right-radius: 4px;\"><span >זכר</span></label>\n                                    <input type=\"radio\" id=\"radio19{{i}}\" name=\"status{{i}}\" value=\"19\" [(ngModel)]=\"child.radio\"/>\n                                    <label for=\"radio19{{i}}\" style=\"border-right:0px;border-bottom-left-radius: 4px;border-top-left-radius: 4px;\"><span >נקבה</span></label>\n                                </div>\n\n                              <span class=\"field-validation-error small\" *ngIf=\"showError && !child.radio\">אנא בחר ערך</span>\n                            </div>\n                          </div>\n                          <div class=\"col-md-6 col-xs-12\">\n                            <label class=\"subject\">תאריך לידה</label>\n                            <div>\n                                <div class=\"wrapper center-block button-helth\" id=\"button-helth\">\n                                    <div class=\"selectWrapper\"  style=\"width: 19%;height: 100%;\">\n                                      <div style=\"width: 100%;height: 100%;\">\n                                        <app-autocomplit [data]=\"daysData\"  (change)=\"daysChange($event)\"></app-autocomplit>\n                                      </div>\n                                    </div>\n                                    <div class=\"selectWrapper\" style=\"width: 38%;margin-right: 2px;height: 100%;\">\n                                      <div style=\"width: 100%;height: 100%;\">\n                                        <app-autocomplit [data]=\"monthData\" (change)=\"monthChange($event)\"></app-autocomplit>\n                                      </div>\n                                    </div>\n                                    <div class=\"selectWrapper\" style=\"width: 27%;margin-right: 3px;height: 100%;\">\n                                      <div style=\"width: 100%;height: 100%;\">\n                                        <app-autocomplit [data]=\"yearsData\" (change)=\"yearsChange($event)\"></app-autocomplit>\n                                      </div>\n                                    </div>\n                                  </div>\n                              <div class=\"clearfix visible-xs visible-sm hidden-md\"></div>\n                              <!--<span class=\"field-validation-error small\">-->\n                                                                        <!--שדה תאריך לידה הוא שדה חובה-->\n                                                                    <!--</span>-->\n                            </div>\n                          </div>\n                        </div>\n\n                      </div>\n                    </div>\n                    <!--/children-->\n                  </div>\n\n\n                </fieldset>\n              </div>\n              <!--end formSection-->\n\n            </div>\n          </div>\n          <!--end private-health-->\n        </div>\n      </div>\n\n\n    </div>\n    <div class=\"calculatorControllsWrapper col-xs-12\">\n      <div class=\"calculatorControlls center-block\">\n        <a (click)=\"back()\" class=\"btn backBtn center-block\">\n          <span>&#60;חזור</span>\n        </a>\n        <a (click)=\"save()\" class=\"btn nextBtn center-block\">\n          <span>המשך</span>\n        </a>\n      </div>\n    </div>\n    <div *ngIf=\"showError\" class=\"col-xs-12 text-center checkup-general-error checkup-error-position\" style=\"/* display: none; */\" id=\"errorOccurredPersonalDetails\" aria-hidden=\"true\">\n                    <span class=\"field-validation-error\" aria-hidden=\"true\">\n                        אירעה שגיאה. אנא נסה שנית מאוחר יותר.\n                    </span>\n    </div>\n    <div *ngIf=\"showError\" class=\"col-xs-12 text-center checkup-general-error checkup-error-position\" style=\"\" id=\"userExistsErrorMsg\" aria-hidden=\"false\">\n                    <span class=\"field-validation-error\" aria-hidden=\"true\">\n                        משתמש קיים, אנא התחבר.\n                    </span>\n    </div>\n"

/***/ }),

/***/ "../../../../../src/app/wizard/private-health-personalinfo/private-health-personalinfo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrivateHealthPersonalinfoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_service_store_service__ = __webpack_require__("../../../../../src/app/shared/service/store.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PrivateHealthPersonalinfoComponent = (function () {
    function PrivateHealthPersonalinfoComponent(storeService) {
        this.storeService = storeService;
        this.yearsData = [];
        this.monthData = [
            {
                label: "1",
                value: "1"
            },
            {
                label: "2",
                value: "2"
            },
            {
                label: "3",
                value: "3"
            },
        ];
        this.daysData = [];
        this.obj = {
            day: "1",
            month: "1",
            year: "1925",
            yearSmokin: "",
            raiodMaritalStatus: "",
            radioWifeSmoke: "",
            wifeName: "",
            wifV1: "",
            childAmount: 0,
            smoking: null,
            childrens: []
        };
        this.next = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.setYear();
        this.setDays();
    }
    PrivateHealthPersonalinfoComponent.prototype.ngOnInit = function () {
        var store = this.storeService.getByKey("private-health-personalinfo");
        if (store) {
            this.obj = store;
        }
    };
    PrivateHealthPersonalinfoComponent.prototype.setDays = function () {
        for (var i = 1; i <= 31; i++) {
            this.daysData.push({
                label: i.toString(),
                value: i.toString()
            });
        }
    };
    PrivateHealthPersonalinfoComponent.prototype.setYear = function () {
        for (var i = 1925; i <= 2018; i++) {
            this.yearsData.push({
                label: i.toString(),
                value: i.toString()
            });
        }
    };
    PrivateHealthPersonalinfoComponent.prototype.daysChange = function (e) {
        this.obj.day = e;
    };
    PrivateHealthPersonalinfoComponent.prototype.monthChange = function (e) {
        this.obj.month = e;
    };
    PrivateHealthPersonalinfoComponent.prototype.yearsChange = function (e) {
        this.obj.year = e;
    };
    PrivateHealthPersonalinfoComponent.prototype.doChangeChildren = function () {
        this.obj.childrens = [];
        for (var i = 0; i < this.obj.childAmount; i++) {
            this.obj.childrens.push({ stat: "", radio: "", name: "" });
        }
    };
    PrivateHealthPersonalinfoComponent.prototype.back = function () {
        this.next.emit(({
            naxtPage: 'genderselect'
        }));
    };
    PrivateHealthPersonalinfoComponent.prototype.save = function () {
        var childFlag;
        if (!this.obj.year ||
            !this.obj.month ||
            !this.obj.year || (!this.obj.smoking && !(this.obj.smoking === false))
            || !this.obj.raiodMaritalStatus) {
            this.showError = true;
            console.log(22);
        }
        else {
            if (this.obj.smoking === false && !this.obj.yearSmokin) {
                this.showError = true;
                return;
            }
            for (var i = 0; i < this.obj.childAmount; i++) {
                if (!this.obj.childrens[i].name || !this.obj.childrens[i].radio) {
                    childFlag = true;
                    break;
                }
            }
            if (childFlag) {
                this.showError = true;
                return;
            }
            if (this.obj.raiodMaritalStatus === '10' && (!this.obj.wifeName || !this.obj.wifV1 || !this.obj.radioWifeSmoke)) {
                this.showError = true;
                return;
            }
            this.next.emit(({
                naxtPage: 'kupot-holim',
                date: this.obj.day + '-' + this.obj.month + '-' + this.obj.year,
                smoking: this.obj.smoking,
                raiodMaritalStatus: this.obj.raiodMaritalStatus,
                childrens: this.obj.childrens,
                type: "private-health-personalinfo"
            }));
            this.storeService.setByKey("private-health-personalinfo", this.obj);
        }
    };
    return PrivateHealthPersonalinfoComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
    __metadata("design:type", Object)
], PrivateHealthPersonalinfoComponent.prototype, "next", void 0);
PrivateHealthPersonalinfoComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-private-health-personalinfo',
        template: __webpack_require__("../../../../../src/app/wizard/private-health-personalinfo/private-health-personalinfo.component.html"),
        styles: [__webpack_require__("../../../../../src/app/wizard/private-health-personalinfo/private-health-personalinfo.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_service_store_service__["a" /* StoreService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_service_store_service__["a" /* StoreService */]) === "function" && _a || Object])
], PrivateHealthPersonalinfoComponent);

var _a;
//# sourceMappingURL=private-health-personalinfo.component.js.map

/***/ }),

/***/ "../../../../../src/app/wizard/profession/profession.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/wizard/profession/profession.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"calculatorHead col-xs-12 noPadding\">\n  <h2>השוואת הצעות לביטוח חיים</h2>\n  <p>\n    מילוי שאלון קצר לצורך הפקת הצעות ביטוח\n  </p>\n  <span>יקח לך 2 דקות</span>\n</div>\n<div class=\"step_profession col-xs-12 noPadding\">\n  <span class=\"field-validation-error center-block text-center\" *ngIf=\"showError && (!job || !rate)\">הודעת שגיאה</span>\n  <div class=\"profession center-block\">\n    <fieldset>\n      <legend class=\"sr-only\">###</legend>\n      <div class=\"professionWrapper noPadding\">\n        <span class=\"question-title\">אני עוסק/ת ב:</span>\n        <div class=\"wrapper center-block\">\n          <div class=\"selectWrapper\" style=\"height: 100%;\">\n            <div style=\"height: 100%;\">\n              <app-autocomplit [data]=\"jobsData\" (change)=\"jobsChange($event)\"></app-autocomplit>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"professionWrapper noPadding\">\n        <span class=\"question-title\">שכר:</span>\n        <div class=\"wrapper center-block\">\n          <div class=\"selectWrapper\" style=\"height: 100%;\">\n            <div style=\"height: 100%;\">\n              <app-autocomplit [data]=\"rateData\" (change)=\"rateChange($event)\"></app-autocomplit>\n            </div>\n          </div>\n        </div>\n      </div>\n    </fieldset>\n  </div>\n</div>\n<div class=\"calculatorControllsWrapper col-xs-12\">\n  <div class=\"calculatorControlls center-block\">\n    <a (click)=\"back()\" class=\"btn backBtn center-block\">\n      <span>&#60;חזור</span>\n    </a>\n    <a (click)=\"save()\" class=\"btn nextBtn center-block\">\n      <span>המשך</span>\n    </a>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/wizard/profession/profession.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfessionComponent; });
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

var ProfessionComponent = (function () {
    function ProfessionComponent() {
        this.job = "בחר מקצוע";
        this.rate = "1000 - 10000";
        this.jobsData = [
            {
                label: "בחר מקצוע",
                value: "בחר מקצוע"
            },
            {
                label: "דייל/דיילת מכירו",
                value: "דייל/דיילת מכירו"
            },
        ];
        this.rateData = [
            {
                label: "1000 - 10000",
                value: "1000 - 10000"
            },
            {
                label: "10000 - 20000",
                value: "10000 - 20000"
            },
        ];
        this.next = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
    }
    ProfessionComponent.prototype.ngOnInit = function () {
    };
    ProfessionComponent.prototype.jobsChange = function (e) {
        this.job = e;
    };
    ProfessionComponent.prototype.rateChange = function (e) {
        this.rate = e;
    };
    ProfessionComponent.prototype.save = function () {
        if (!this.job || !this.rate) {
            this.showError = true;
        }
        else {
            this.next.emit(({
                naxtPage: 'calculatorsummary',
                type: 'profession',
                modal: {},
            }));
        }
    };
    ProfessionComponent.prototype.back = function () {
        this.next.emit(({
            naxtPage: 'smoking'
        }));
    };
    return ProfessionComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
    __metadata("design:type", Object)
], ProfessionComponent.prototype, "next", void 0);
ProfessionComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-profession',
        template: __webpack_require__("../../../../../src/app/wizard/profession/profession.component.html"),
        styles: [__webpack_require__("../../../../../src/app/wizard/profession/profession.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ProfessionComponent);

//# sourceMappingURL=profession.component.js.map

/***/ }),

/***/ "../../../../../src/app/wizard/proposals/modal-calcut/modal-calcut.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".modal-dialog{\r\n    margin: 13% !important;\r\n    left: 50%;\r\n    margin-left: -385px !important;\r\n}\r\n.modal{\r\n    background: #00000094;\r\n}\r\n.general-modal{\r\n    overflow-y: auto;\r\n}\r\n#results-modal > div > div > div.modal-body > div > p{\r\n    text-align: center;\r\n}\r\n@media screen and (max-width: 960px) {\r\n    .modal-dialog {\r\n        margin: 0;\r\n        left: 50%;\r\n        margin-left: -385px !important;\r\n        top: 81px;\r\n    }\r\n}\r\n@media screen and (max-width: 768px){\r\n    div.modal-body > div > p{\r\n        text-align: center !important;\r\n    }\r\n    .modal-dialog {\r\n        top: 112px;\r\n        left: 0;\r\n        margin-left: 0 !important;\r\n        margin-top: 0 !important;\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/wizard/proposals/modal-calcut/modal-calcut.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- modal -->\n<div id=\"results-modal\" class=\"modal fade general-modal light\" style=\"display: block;\n    opacity: 1;\">\n  <div class=\"modal-dialog light\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" (click)=\"close()\" class=\"close\" data-dismiss=\"modal\" aria-label=\"סגור\" tabindex=\"-1\" aria-hidden=\"true\"><span aria-hidden=\"true\">&times;</span></button>\n        <h4 id=\"resultModalHeader\">עריכת סכום הכיסוי</h4>\n      </div>\n      <div class=\"modal-body\">\n        <div class=\"general-content\">\n          <p>\n            תנו ל- <span>Wakeapp</span>\n            להכיר אתכם ולמצוא את הצעות הביטוח המתאימות ביותר עבורכם\n          </p>\n          <a href=\"#\">\n            לעזרה בחישוב הסכום\n            <img src=\"/images/calculator/calculator.png\" alt=\"calc\">\n          </a>\n\n          <div class=\"generalForm\">\n            <div><span class=\"nisIcon\"></span><input type=\"number\" name=\"calculate\" placeholder=\"\" [(ngModel)]=\"amount\" /></div>\n            <!--<div class=\"validation-block\">-->\n              <!--<span class=\"center-block text-center field-validation-error\" data-valmsg-for=\"Amount\" data-valmsg-replace=\"true\"><span id=\"Amount-error\" class=\"\">יש להזין סכום בין 50,000 ל-50,000,000</span></span>-->\n            <!--</div>-->\n            <div><input (click)=\"save()\" type=\"button\" value=\"עדכן סכום וסגור\" /></div>\n          </div>\n\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<!-- end modal -->\n"

/***/ }),

/***/ "../../../../../src/app/wizard/proposals/modal-calcut/modal-calcut.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalCalcutComponent; });
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

var ModalCalcutComponent = (function () {
    function ModalCalcutComponent() {
        this.closeEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.saveEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
    }
    ModalCalcutComponent.prototype.ngOnInit = function () {
    };
    ModalCalcutComponent.prototype.close = function () {
        this.closeEvent.emit("");
    };
    ModalCalcutComponent.prototype.save = function () {
        this.saveEvent.emit(this.amount);
    };
    return ModalCalcutComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], ModalCalcutComponent.prototype, "amount", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
    __metadata("design:type", Object)
], ModalCalcutComponent.prototype, "closeEvent", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
    __metadata("design:type", Object)
], ModalCalcutComponent.prototype, "saveEvent", void 0);
ModalCalcutComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-modal-calcut',
        template: __webpack_require__("../../../../../src/app/wizard/proposals/modal-calcut/modal-calcut.component.html"),
        styles: [__webpack_require__("../../../../../src/app/wizard/proposals/modal-calcut/modal-calcut.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ModalCalcutComponent);

//# sourceMappingURL=modal-calcut.component.js.map

/***/ }),

/***/ "../../../../../src/app/wizard/proposals/modal-chose/modal-chose.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".modal{\r\n    position: fixed;\r\n    overflow: visible;\r\n    overflow-y: auto;\r\n    background: #00000061;\r\n    height: 100%;\r\n    width: 100%;\r\n}\r\n\r\n.results_modal_succesful{\r\n    text-align: center;\r\n}\r\ndiv.results_modal_succesful.clearfix > div.title > h3{\r\n    text-align: center;\r\n    margin-bottom: 0.625rem;\r\n    white-space: nowrap;\r\n}\r\n    div.title > p{\r\n    color: #5f5f5f;\r\n}\r\ndiv.results_modal_succesful.clearfix > div.results_modal_preferred_time > h5{\r\n    color: #117ef5;\r\n}\r\ndiv.success{\r\n    text-align: center;\r\n    color: #117ef5;\r\n    font-size: 2em;\r\n    margin-top: -9px;\r\n    padding-bottom: 20px;\r\n    font-family: \"RaananSuper\";\r\n    direction: rtl;\r\n    margin-top: 10px;\r\n}\r\n\r\ninput[type=\"radio\"] {\r\n    display:none;\r\n}\r\n\r\ninput[type=\"radio\"] + label {\r\n    color:#f2f2f2;\r\n\r\n    line-height: 22px;\r\n    padding: 1rem;\r\n    border: 2px solid #117ef5 !important;\r\n    margin-bottom: auto;\r\n    color: #626262;\r\n    border-radius:20px;\r\n    width: 137px;\r\n    height: 60px;\r\n    margin-right: 15px;\r\n}\r\n\r\ninput[type=\"radio\"] + label span {\r\n\r\n    font-size: 2.57143em;\r\n    line-height: 22px;\r\n    padding: 1rem;\r\n    margin-bottom: auto;\r\n    color: #626262;\r\n}\r\n\r\ninput[type=\"radio\"]:checked + label{\r\n    background: #117ef5;\r\n    color: white;\r\n    outline: 2px solid #707070 !important;\r\n}\r\n\r\n@media (min-width: 992px){\r\n    .close > span{\r\n        font-size: 37px;\r\n        line-height: 59px;\r\n        top: -5px;\r\n        position: relative\r\n    }\r\n    .close{\r\n        background-color: #ffffff;\r\n        border-radius: 50%;\r\n        width: 41px;\r\n        height: 41px;\r\n        min-height: 41px;\r\n        line-height: 41px;\r\n        color: #5f5f5f;\r\n        opacity: 1;\r\n    }\r\n    .modal-header{\r\n        background-color: transparent;\r\n        position: absolute;\r\n        z-index: 100;\r\n        right: 0;\r\n    }\r\n    a.btn.yes > span{\r\n        font-family: \"RaananSuper\";\r\n        font-weight: bold;\r\n        font-size: 1.57143em;\r\n        position: relative;\r\n        top: -17px;\r\n    }\r\n    a.btn.yes > p{\r\n        color: #fff;\r\n        text-align: center;\r\n        font-size: 2.71429em;\r\n        position: relative;\r\n        top: -5px;\r\n    }\r\n    div > a.btn.yes{\r\n        color: #fff;\r\n        background-color: #117ef5;\r\n        width: auto;\r\n        min-width: 305px;\r\n        float: right;\r\n        height: 71px;\r\n        margin-top: 15px;\r\n    }\r\n    div > a.btn.yes:active{\r\n        background-color: #4299f7;\r\n    }\r\n     div > a.btn.no{\r\n        color: #898989;\r\n        font-size: 2em;\r\n        background-color: rgba(255, 255, 255, 0);\r\n        width: auto;\r\n        min-width: 175px;\r\n        float: right;\r\n        text-decoration: underline;\r\n        margin-right: 1.25rem;\r\n     }\r\n    div.results_modal_banner.hidden-xs.hidden-sm > div > span{\r\n        color: #117ef5;\r\n        font-family: \"RaananSuper\";\r\n        font-weight: bold;\r\n        font-size: 2em;\r\n        line-height: .8;\r\n        float: right;\r\n        margin: 1.25rem 0 0 0;\r\n    }\r\n    div.results_modal_banner.hidden-xs.hidden-sm > div > p > span{\r\n        float: right;\r\n        clear: both;\r\n    }\r\n    div.results_modal_banner.hidden-xs.hidden-sm > div > p{\r\n        color: #626262;\r\n        font-size: 1.71429em;\r\n        line-height: 26px;\r\n    }\r\n    div.results_modal_banner.hidden-xs.hidden-sm > div > h2{\r\n        color: #626262;\r\n        font-size: 3.14286em;\r\n        line-height: 35px;\r\n        padding: 0 0 0 3.125rem;\r\n        margin: 2.9375rem 0 1.25rem 0\r\n    }\r\n    div.results_modal_banner.hidden-xs.hidden-sm > div{\r\n        width: 50%;\r\n        float: right;\r\n        text-align: right;\r\n    }\r\n    div.results_modal_banner.hidden-xs.hidden-sm{\r\n        height: 484px;\r\n        background-size: 76%;\r\n        background-repeat: no-repeat;\r\n        background-position: 0 0;\r\n        padding: 0 5.625rem 0 0;\r\n    }\r\n    .modal-dialog{\r\n        width: 98%;\r\n        top: 207px;\r\n    }\r\n    .results_modal_succesful{\r\n        background-color: #e7f2fe;\r\n        border-bottom: 1px solid #e1e1e1;\r\n        margin-top: 1.875rem;\r\n    }\r\n   div.results_modal_succesful.clearfix > div.results_modal_preferred_time > h5{\r\n        padding-left: 178px;\r\n        font-size: 2.14286em;\r\n        line-height: 30px;\r\n        margin-top: 3rem;\r\n        margin-bottom: 0.875rem;\r\n    }\r\n     div.results_modal_succesful.clearfix > div.title > h3{\r\n        font-size: 4.57143em;\r\n        line-height: 64px;\r\n     }\r\n     div.title > p{\r\n        font-size: 2.42857em;\r\n        line-height: 34px;\r\n    }\r\n}\r\n@media (max-width: 992px){\r\n    div.results_modal_succesful.clearfix > div.results_modal_preferred_time > h5{\r\n        margin-top: 0.75rem;\r\n        margin-bottom: 1rem;\r\n    }\r\n    div.results_modal_succesful.clearfix > div.title > h3{\r\n        font-size: 2.28571em;\r\n        line-height: 15px;\r\n        text-align: center;\r\n        margin-bottom: 0.625rem;\r\n        white-space: nowrap;\r\n        color: #5f5f5f;\r\n    }\r\n    .modal-dialog{\r\n        width: 100%;\r\n        margin-top: 102px;\r\n        margin-left: 0;\r\n    }\r\n    .hasSmoked-input{\r\n        -webkit-box-pack: center;\r\n            -ms-flex-pack: center;\r\n                justify-content: center;\r\n        -webkit-box-align: center;\r\n            -ms-flex-align: center;\r\n                align-items: center;\r\n        -webkit-box-orient: vertical;\r\n        -webkit-box-direction: reverse;\r\n            -ms-flex-flow: column-reverse;\r\n                flex-flow: column-reverse;\r\n        display: -webkit-box;\r\n        display: -ms-flexbox;\r\n        display: flex;\r\n    }\r\n    input[type=\"radio\"] + label{\r\n        MARGIN-BOTTOM: 10PX;\r\n    }\r\n    .close > span{\r\n        font-size: 37px;\r\n        line-height: 59px;\r\n        top: -5px;\r\n        position: relative\r\n    }\r\n    .close{\r\n        background-color: #ffffff;\r\n        border-radius: 50%;\r\n        width: 41px;\r\n        height: 41px;\r\n        min-height: 41px;\r\n        line-height: 41px;\r\n        color: #5f5f5f;\r\n        opacity: 1;\r\n    }\r\n    input[type=\"radio\"] + label{\r\n        width: 150px;\r\n        height: 40px;\r\n        font-size: 0.7em;\r\n        white-space: normal;\r\n        line-height: 26px;\r\n        padding: 0.375rem;\r\n        color: #626262;\r\n        font-weight: normal;\r\n        background: transparent;\r\n        border: 1px solid #117ef5 !important;\r\n        border-radius: 10px;\r\n        float: right;\r\n        margin-bottom: 1.0625rem;\r\n    }\r\n}\r\n\r\n\r\n\r\n@media screen and (min-width: 762px) and (max-width: 992px) { \r\n    div.results_modal_succesful.clearfix > div.results_modal_preferred_time > h5{\r\n        font-size: 2.42857em;\r\n        line-height: 34px;\r\n    }\r\n    div.results_modal_succesful.clearfix > div.title > h3{\r\n        font-size: 4.28571em;\r\n        line-height: 15px;\r\n        text-align: center;\r\n        margin-bottom: 1.625rem;\r\n        white-space: nowrap;\r\n        color: #5f5f5f;\r\n    }\r\n    .modal-dialog{\r\n        width: 100%;\r\n        margin-top: 102px;\r\n        margin-left: 0;\r\n    }\r\n    .hasSmoked-input{\r\n        -webkit-box-pack: center;\r\n            -ms-flex-pack: center;\r\n                justify-content: center;\r\n        -webkit-box-align: center;\r\n            -ms-flex-align: center;\r\n                align-items: center;\r\n        -webkit-box-orient: vertical;\r\n        -webkit-box-direction: reverse;\r\n            -ms-flex-flow: column-reverse;\r\n                flex-flow: column-reverse;\r\n        display: -webkit-box;\r\n        display: -ms-flexbox;\r\n        display: flex;\r\n    }\r\n    input[type=\"radio\"] + label{\r\n        MARGIN-BOTTOM: 10PX;\r\n    }\r\n    .close > span{\r\n        font-size: 37px;\r\n        line-height: 59px;\r\n        top: -5px;\r\n        position: relative\r\n    }\r\n    .close{\r\n        background-color: #ffffff;\r\n        border-radius: 50%;\r\n        width: 41px;\r\n        height: 41px;\r\n        min-height: 41px;\r\n        line-height: 41px;\r\n        color: #5f5f5f;\r\n        opacity: 1;\r\n    }\r\n    input[type=\"radio\"] + label{\r\n        width: 300px;\r\n        height: 80px;\r\n        font-size: 1.4em;\r\n        line-height: 64px;\r\n        border-radius: 15px;\r\n        padding-top: 13px;\r\n    }\r\n    div.title > p{\r\n        font-size: 2.42857em;\r\n        line-height: 34px;\r\n    }\r\n}\r\n    @media (max-width: 768px){\r\n       \r\n        div.results_modal_succesful.clearfix> div.title > h3{\r\n            text-align: center;\r\n            margin-bottom: 0.625rem;\r\n            white-space: nowrap;\r\n            font-size: 2.57143em;\r\n            line-height: 64px;\r\n            margin-bottom: 0;\r\n        }\r\n        div.title > p{\r\n            font-size: 1.42857em;\r\n            line-height: 34px;\r\n            color: #5f5f5f;\r\n        }\r\n        div.results_modal_succesful.clearfix > div.results_modal_preferred_time> h5{\r\n            padding-left: 0;\r\n            font-size: 1.21429em;\r\n            line-height: 30px;\r\n            margin: 0rem;\r\n            \r\n        } \r\n        input[type=\"radio\"] + label{\r\n            font-size: 1.4em;\r\n        }\r\n        input[type=\"radio\"] + label span {\r\n            \r\n            font-size: 1.143em;\r\n            }\r\n            .modal-dialog{\r\n                width: 100%;\r\n                margin-top: 122px;\r\n            }\r\n            \r\n    }\r\n\r\n    \r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/wizard/proposals/modal-chose/modal-chose.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- modal -->\n<div class=\"modal fade\" style=\"display: block;\n     opacity: 1;\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <!-- modal header -->\n      <div class=\"modal-header\">\n        <button (click)=\"close()\" type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <!-- modal body -->\n      <div class=\"modal-body\">\n        <form>\n          <div class=\"results_modal_succesful clearfix\">\n            <div class=\"title\">\n              <h3>פנייתך התקבלה בהצלחה!</h3>\n              <p>נציגינו יצרו איתך קשר להמשך התהליך</p>\n            </div>\n\n            <div class=\"results_modal_preferred_time\">\n              <h5>אני מעדיף בזמנים הבאים:</h5>\n              <fieldset>\n                <legend class=\"sr-only\"></legend>\n                <div class=\"form-group userBox col-xs-12 noPadding\">\n                  <div class=\"preferred_time_form\" data-btoggle>\n                      <div class=\"hasSmoked-input\">\n                          <input type=\"radio\" id=\"smoke1\" name=\"status1\" value=\"1\" [(ngModel)]=\"select\"  (ngModelChange)=\"showSuccess = true\"/>\n                          <label for=\"smoke1\"><span style=\"\">ערב</span></label>\n                          <input type=\"radio\" id=\"smoke\" name=\"status1\" value=\"2\" [(ngModel)]=\"select\"  (ngModelChange)=\"showSuccess = true\"/>\n                          <label for=\"smoke\"><span style=\"\">צהריים</span></label>\n                          <input type=\"radio\" id=\"nsmoke\" name=\"status1\" value=\"3\" [(ngModel)]=\"select\" (ngModelChange)=\"showSuccess = true\"/>\n                          <label for=\"nsmoke\" style=\"border-right:none;\"><span style=\"\">בוקר</span></label>\n                      </div>\n                    <!-- <label>\n                      בוקר\n                      <input type=\"radio\" name=\"status1\" value=\"1\" />\n                    </label>\n                    <label>\n                      צהריים\n                      <input type=\"radio\" name=\"status1\" value=\"2\" />\n                    </label>\n                    <label>\n                      ערב\n                      <input type=\"radio\" name=\"status1\" value=\"3\" />\n                    </label> -->\n                  </div>\n                </div>\n              </fieldset>\n            </div>\n            <!--<div class=\"results_modal_congrats_box\">\n                <h4 class=\"v-title\">\n                    השאלון מולא בהצלחה\n                </h4>\n                <p class=\"subtitle\">\n                    ברוכים הבאים ובהצלחה\n                </p>\n            </div>-->\n            <div class=\"success\" *ngIf=\"showSuccess\"><span class=\"icon icon-success\"></span> פרטייך התקבלו בהצלחה! </div>\n          </div>\n\n          <div class=\"results_modal_banner hidden-xs hidden-sm\" style=\"background-image:url(../sample-images/section1_bg1.png);background-size: 50% 100%;\">\n\n\n            <div class=\"results_modal_banner_content\">\n              <h2>\n                פותחים את המכתבים מהבנק וחברות הביטוח ולא מבינים על מה אתם משלמים?\n              </h2>\n              <p class=\"clearfix\">\n                <span>יתכן שיש לכם ביטוחים מיותרים?</span>\n                <span>יכול להיות שיש לכם כפל ביטוחי?</span>\n                <span>סומכים על קופת החולים עם הבריאות שלכם?</span>\n              </p>\n              <span class=\"weRecommend clearfix\">\n                                    Wize:App ותוכל לקבל תמונה מלאה של כל החסכונות והביטוחים במקום אחד\n                                </span>\n              <div class=\"controls clearfix\">\n                <a (click)=\"yes()\" class=\"btn yes\">\n                  <p>צ'קאפ - התחל בדיקה</p>\n                  <span>זה יקח לך 3 דקות...</span>\n                </a>\n                <a (click)=\"no()\" class=\"btn no\">\n                  תודה אבל אני לא צריך\n                </a>\n              </div>\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n<!-- modal end -->\n"

/***/ }),

/***/ "../../../../../src/app/wizard/proposals/modal-chose/modal-chose.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalChoseComponent; });
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

var ModalChoseComponent = (function () {
    function ModalChoseComponent() {
        this.closeEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
    }
    ModalChoseComponent.prototype.ngOnInit = function () {
    };
    ModalChoseComponent.prototype.close = function () {
        this.closeEvent.emit("");
    };
    ModalChoseComponent.prototype.no = function () {
        this.closeEvent.emit("");
    };
    ModalChoseComponent.prototype.yes = function () {
        this.closeEvent.emit("");
    };
    return ModalChoseComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
    __metadata("design:type", Object)
], ModalChoseComponent.prototype, "closeEvent", void 0);
ModalChoseComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-modal-chose',
        template: __webpack_require__("../../../../../src/app/wizard/proposals/modal-chose/modal-chose.component.html"),
        styles: [__webpack_require__("../../../../../src/app/wizard/proposals/modal-chose/modal-chose.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ModalChoseComponent);

//# sourceMappingURL=modal-chose.component.js.map

/***/ }),

/***/ "../../../../../src/app/wizard/smoking/smoking.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\ninput[type=\"radio\"] {\r\n    display:none;\r\n}\r\n\r\ninput[type=\"radio\"] + label {\r\n    color:#f2f2f2;\r\n}\r\n\r\ninput[type=\"radio\"] + label span {\r\n    display:inline-block;\r\n    width:60px;\r\n    height:45px;\r\n    vertical-align:middle;\r\n    background:white;\r\n    cursor:pointer;\r\n    border: 1px solid #117ef5;\r\n    text-align: center;\r\n    font-size: 1.57143em;\r\n    color: #626262;\r\n    padding-top: 8px;\r\n}\r\n\r\ninput[type=\"radio\"]:checked + label span {\r\n    background: #117ef5;\r\n    color: white;\r\n    outline: 2px solid #707070 !important;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/wizard/smoking/smoking.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"calculatorHead col-xs-12 noPadding\">\n  <h2>השאוות הצעות לביטוח חיים</h2>\n  <p>\n    מילוי שאלון קצר לצורך הפקת הצעות ביטוח\n  </p>\n  <span>יקח לך 2 דקות</span>\n</div>\n<div class=\"step_smoking col-xs-12 noPadding\">\n  <span class=\"field-validation-error center-block text-center\" *ngIf=\"showError && !smoking && smoking !== false\">הודעת שגיאה</span>\n  <div class=\"smoking\">\n    <div class=\"isSmoking\">\n      <fieldset>\n        <legend class=\"sr-only\">###</legend>\n        <input type=\"hidden\" name=\"smoking\" id=\"hdnSmoking\" value=\"\" />\n        <div class=\"yes \" (click)=\"smoking = true\" [ngClass]=\"{'yes-active': smoking === true}\" role=\"button\" data-value=\"1\" tabindex=\"0\">\n          <span>מעשן</span>\n        </div>\n        <div class=\"no\" (click)=\"smoking = false\" [ngClass]=\"{'no-active': smoking === false}\" role=\"button\" data-value=\"0\" tabindex=\"0\">\n          <span>לא מעשן</span>\n        </div>\n      </fieldset>\n\n    </div>\n    <div class=\"lastSmoked hasSmoked\" *ngIf=\"smoking === false\">\n      <fieldset>\n        <legend>האם עישנת ב-3 השנים האחרונות</legend>\n        <div class=\"hasSmoked-input\">\n            <input type=\"radio\" id=\"smoke\" name=\"status1\" value=\"כן\" [(ngModel)]=\"yearSmokin\"/>\n            <label for=\"smoke\"><span style=\"border-radius:0px 5px 5px 0px;\">כן</span></label>\n            <input type=\"radio\" id=\"nsmoke\" name=\"status1\" value=\"לא\" [(ngModel)]=\"yearSmokin\"/>\n            <label for=\"nsmoke\" style=\"position: relative;left: 3px;border-right:none;\"><span style=\"border-radius:5px 0px 0px 5px;\">לא</span></label>\n        </div>\n        <span class=\"field-validation-error small\" *ngIf=\"showError && smoking === false && !yearSmokin\">אנא בחר ערך</span>\n      </fieldset>\n    </div>\n  </div>\n</div>\n<div class=\"calculatorControllsWrapper col-xs-12\">\n  <div class=\"calculatorControlls center-block\">\n    <a (click)=\"back()\" class=\"btn backBtn center-block\">\n      <span>&#60;חזור</span>\n    </a>\n    <a (click)=\"save()\" class=\"btn nextBtn center-block\">\n      <span>המשך</span>\n    </a>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/wizard/smoking/smoking.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SmokingComponent; });
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

var SmokingComponent = (function () {
    function SmokingComponent() {
        this.yearSmokin = "";
        this.next = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
    }
    SmokingComponent.prototype.ngOnInit = function () {
    };
    SmokingComponent.prototype.save = function () {
        if (!this.smoking && !(this.smoking === false)) {
            this.showError = true;
        }
        else {
            if (this.smoking === false && !this.yearSmokin) {
                this.showError = true;
                return;
            }
            this.next.emit(({
                naxtPage: 'profession',
                type: "smoking",
                model: this.smoking
            }));
        }
    };
    SmokingComponent.prototype.back = function () {
        this.next.emit(({
            naxtPage: 'birthdate'
        }));
    };
    return SmokingComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
    __metadata("design:type", Object)
], SmokingComponent.prototype, "next", void 0);
SmokingComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-smoking',
        template: __webpack_require__("../../../../../src/app/wizard/smoking/smoking.component.html"),
        styles: [__webpack_require__("../../../../../src/app/wizard/smoking/smoking.component.css")]
    }),
    __metadata("design:paramtypes", [])
], SmokingComponent);

//# sourceMappingURL=smoking.component.js.map

/***/ }),

/***/ "../../../../../src/app/wizard/wizard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/wizard/wizard.component.html":
/***/ (function(module, exports) {

module.exports = "<main id=\"main\" class=\"container-fluid\" tabindex=\"-1\">\n  <!-- section 1 -->\n  <section class=\"row\">\n    <div class=\"calculator clearfix\">\n\n      <app-info *ngIf=\"activeTab === 'info'\" (next)=\"nextCheck($event)\"></app-info>\n      <app-genderselect *ngIf=\"activeTab === 'genderselect'\" (next)=\"nextCheck($event)\"></app-genderselect>\n      <app-birthdate *ngIf=\"activeTab === 'birthdate'\" (next)=\"nextCheck($event)\"></app-birthdate>\n      <app-smoking *ngIf=\"activeTab === 'smoking'\" (next)=\"nextCheck($event)\"></app-smoking>\n      <app-profession *ngIf=\"activeTab === 'profession'\" (next)=\"nextCheck($event)\"></app-profession>\n      <app-calculatorsummary *ngIf=\"activeTab === 'calculatorsummary'\" (next)=\"nextCheck($event)\"></app-calculatorsummary>\n      <app-calculator-side-panel [options]=\"risk\"></app-calculator-side-panel>\n    </div>\n  </section>\n</main>\n"

/***/ }),

/***/ "../../../../../src/app/wizard/wizard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WizardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_models_risk__ = __webpack_require__("../../../../../src/app/shared/models/risk.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WizardComponent = (function () {
    function WizardComponent() {
        this.risk = new __WEBPACK_IMPORTED_MODULE_1__shared_models_risk__["a" /* Risk */]();
        this.activeTab = 'info';
        this.finish = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
    }
    WizardComponent.prototype.ngOnInit = function () {
    };
    WizardComponent.prototype.nextCheck = function (e) {
        console.log(e);
        if (e.finish) {
            this.finish.emit(e.amount);
        }
        if (e.back) {
            this.activeTab = e.back;
            return;
        }
        switch (e.type) {
            case "info":
                this.risk.lastName = e.model.lastName;
                this.risk.privateName = e.model.firstName;
                this.risk.number = e.model.phone;
                this.risk.prefix = e.model.prefix;
                this.risk.email = e.model.email;
                break;
            case "genderselect":
                this.risk.gender = e.model;
                break;
            case "birthdate":
                this.risk.birthDate = e.model;
                console.log(this.risk.birthDate, e.model);
                break;
            case "smoking":
                this.risk.doesSmoke = e.model;
                break;
            case "profession":
                break;
            case "calculatorsummary":
                break;
        }
        this.activeTab = e.naxtPage;
    };
    return WizardComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
    __metadata("design:type", Object)
], WizardComponent.prototype, "finish", void 0);
WizardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-wizard',
        template: __webpack_require__("../../../../../src/app/wizard/wizard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/wizard/wizard.component.css")]
    }),
    __metadata("design:paramtypes", [])
], WizardComponent);

//# sourceMappingURL=wizard.component.js.map

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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map