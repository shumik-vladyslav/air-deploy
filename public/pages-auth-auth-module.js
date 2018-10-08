(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-auth-auth-module"],{

/***/ "./node_modules/ngx-captcha/fesm5/ngx-captcha.js":
/*!*******************************************************!*\
  !*** ./node_modules/ngx-captcha/fesm5/ngx-captcha.js ***!
  \*******************************************************/
/*! exports provided: ReCaptcha2Component, InvisibleReCaptchaComponent, NgxCaptchaConfig, NgxCaptchaModule, ɵa */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReCaptcha2Component", function() { return ReCaptcha2Component; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvisibleReCaptchaComponent", function() { return InvisibleReCaptchaComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxCaptchaConfig", function() { return NgxCaptchaConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxCaptchaModule", function() { return NgxCaptchaModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return BaseReCaptchaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");





/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @enum {number} */
var ReCaptchaType = {
    InvisibleReCaptcha: 0,
    ReCaptcha2: 1,
};
ReCaptchaType[ReCaptchaType.InvisibleReCaptcha] = 'InvisibleReCaptcha';
ReCaptchaType[ReCaptchaType.ReCaptcha2] = 'ReCaptcha2';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
var BaseReCaptchaComponent = /** @class */ (function () {
    function BaseReCaptchaComponent(renderer, zone, injector, globalConfig) {
        this.renderer = renderer;
        this.zone = zone;
        this.injector = injector;
        this.globalConfig = globalConfig;
        this.setupAfterLoad = false;
        /**
         * Name of the global callback
         */
        this.windowOnLoadCallbackProperty = 'ngx_onload_callback_' + this.getPseudoUniqueNumber();
        /**
         * Name of the global reCaptcha property
         */
        this.globalReCaptchaProperty = 'grecaptcha';
        /**
         * Prefix of the captcha element
         */
        this.captchaElemPrefix = 'ngx_captcha_id_';
        /**
         * Type
         */
        this.type = 'image';
        /**
         * Tab index
         */
        this.tabIndex = 0;
        /**
         * Called when captcha receives successful response.
         * Captcha response token is passed to event.
         */
        this.success = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Called when captcha is loaded. Event receives id of the captcha
         */
        this.load = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Called when captcha is loaded & ready. I.e. when you need to execute captcha on component load.
         */
        this.ready = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * If enabled, captcha will reset after receiving success response. This is useful
         * when invisible captcha need to be resolved multiple times on same page
         */
        this.resetCaptchaAfterSuccess = false;
        /**
         * Indicates if captcha is loaded
         */
        this.isLoaded = false;
    }
    /**
     * @return {?}
     */
    BaseReCaptchaComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.control = this.injector.get(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControl"]).control;
    };
    /**
     * @return {?}
     */
    BaseReCaptchaComponent.prototype.getGlobalSiteKey = /**
     * @return {?}
     */
    function () {
        if (this.globalConfig) {
            // Invisible captcha
            if (this.recaptchaType === ReCaptchaType.InvisibleReCaptcha) {
                if (!this.globalConfig.invisibleCaptchaSiteKey) {
                    throw Error("SiteKey for invisible reCaptcha is not set!");
                }
                if (this.globalConfig.invisibleCaptchaSiteKey instanceof Function) {
                    return this.globalConfig.invisibleCaptchaSiteKey();
                }
                else {
                    return this.globalConfig.invisibleCaptchaSiteKey;
                }
                // recaptcha 2
            }
            else if (this.recaptchaType === ReCaptchaType.ReCaptcha2) {
                if (!this.globalConfig.reCaptcha2SiteKey) {
                    throw Error("SiteKey for reCaptcha2 is not set!");
                }
                if (this.globalConfig.reCaptcha2SiteKey instanceof Function) {
                    return this.globalConfig.reCaptcha2SiteKey();
                }
                else {
                    return this.globalConfig.reCaptcha2SiteKey;
                }
            }
            else {
                throw Error("Unsupported captcha type '" + this.recaptchaType + "'!");
            }
        }
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    BaseReCaptchaComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (!this.siteKey) {
            // use global site key if key is not available
            this._siteKey = this.getGlobalSiteKey();
        }
        else {
            // use comnponent site key
            if (this.siteKey instanceof Function) {
                this._siteKey = this.siteKey();
            }
            else {
                this._siteKey = this.siteKey;
            }
        }
        this.setupComponent();
    };
    /**
     * @return {?}
     */
    BaseReCaptchaComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        window[this.windowOnLoadCallbackProperty] = {};
        window[this.globalReCaptchaProperty] = {};
    };
    /**
     * Gets captcha response as per reCaptcha docs
    */
    /**
     * Gets captcha response as per reCaptcha docs
     * @return {?}
     */
    BaseReCaptchaComponent.prototype.getResponse = /**
     * Gets captcha response as per reCaptcha docs
     * @return {?}
     */
    function () {
        return this.reCaptchaApi.getResponse(this.captchaId);
    };
    /**
     * Gets Id of captcha widget
    */
    /**
     * Gets Id of captcha widget
     * @return {?}
     */
    BaseReCaptchaComponent.prototype.getCaptchaId = /**
     * Gets Id of captcha widget
     * @return {?}
     */
    function () {
        return this.captchaId;
    };
    /**
    * Resets captcha
    */
    /**
     * Resets captcha
     * @return {?}
     */
    BaseReCaptchaComponent.prototype.resetCaptcha = /**
     * Resets captcha
     * @return {?}
     */
    function () {
        var _this = this;
        this.zone.run(function () {
            _this.onChange(null);
            _this.onTouched(null);
        });
    };
    /**
     * Gets last submitted captcha response
    */
    /**
     * Gets last submitted captcha response
     * @return {?}
     */
    BaseReCaptchaComponent.prototype.getCurrentResponse = /**
     * Gets last submitted captcha response
     * @return {?}
     */
    function () {
        return this.currentResponse;
    };
    /**
     * Reload captcha. Useful when properties (i.e. theme) changed and captcha need to reflect them
    */
    /**
     * Reload captcha. Useful when properties (i.e. theme) changed and captcha need to reflect them
     * @return {?}
     */
    BaseReCaptchaComponent.prototype.reloadCaptcha = /**
     * Reload captcha. Useful when properties (i.e. theme) changed and captcha need to reflect them
     * @return {?}
     */
    function () {
        this.setupComponent();
    };
    /**
     * @param {?} captchaElemId
     * @return {?}
     */
    BaseReCaptchaComponent.prototype.ensureCaptchaElem = /**
     * @param {?} captchaElemId
     * @return {?}
     */
    function (captchaElemId) {
        /** @type {?} */
        var captchaElem = document.getElementById(captchaElemId);
        if (!captchaElem) {
            throw Error("Captcha element with id '" + captchaElemId + "' was not found");
        }
        // assign captcha alem
        this.captchaElem = captchaElem;
    };
    /**
     * Responsible for instantiating captcha element
    */
    /**
     * Responsible for instantiating captcha element
     * @return {?}
     */
    BaseReCaptchaComponent.prototype.renderReCaptcha = /**
     * Responsible for instantiating captcha element
     * @return {?}
     */
    function () {
        this.captchaId = this.reCaptchaApi.render(this.captchaElemId, this.getCaptchaProperties());
        this.ready.next();
    };
    /**
     * Called when captcha receives response
     * @param callback Callback
     */
    /**
     * Called when captcha receives response
     * @param {?} callback Callback
     * @return {?}
     */
    BaseReCaptchaComponent.prototype.handleCallback = /**
     * Called when captcha receives response
     * @param {?} callback Callback
     * @return {?}
     */
    function (callback) {
        var _this = this;
        this.currentResponse = callback;
        this.success.next(callback);
        this.zone.run(function () {
            _this.onChange(callback);
            _this.onTouched(callback);
        });
        if (this.resetCaptchaAfterSuccess) {
            this.resetCaptcha();
        }
    };
    /**
     * Registers reCaptcha script if its not available
    */
    /**
     * Registers reCaptcha script if its not available
     * @return {?}
     */
    BaseReCaptchaComponent.prototype.ensureReCaptchaScript = /**
     * Registers reCaptcha script if its not available
     * @return {?}
     */
    function () {
        window[this.globalReCaptchaProperty] = {};
        this.reCaptchaApi = {};
        this.registerReCaptchaScript();
    };
    /**
     * Add script to page with reference to captcha API. This has to be done manually
     * as we want to avoid adding script to main index.html
    */
    /**
     * Add script to page with reference to captcha API. This has to be done manually
     * as we want to avoid adding script to main index.html
     * @return {?}
     */
    BaseReCaptchaComponent.prototype.registerReCaptchaScript = /**
     * Add script to page with reference to captcha API. This has to be done manually
     * as we want to avoid adding script to main index.html
     * @return {?}
     */
    function () {
        /** @type {?} */
        var script = document.createElement('script');
        script.innerHTML = '';
        script.src =
            "https://www.google.com/recaptcha/api.js?onload=" + this.windowOnLoadCallbackProperty + "&render=explicit" + this.getLanguageParam();
        script.async = true;
        script.defer = true;
        this.captchaScriptElem.nativeElement.appendChild(script);
    };
    /**
     * @return {?}
     */
    BaseReCaptchaComponent.prototype.getLanguageParam = /**
     * @return {?}
     */
    function () {
        if (!this.hl) {
            return '';
        }
        return "&hl=" + this.hl;
    };
    /**
     * @return {?}
     */
    BaseReCaptchaComponent.prototype.getPseudoUniqueNumber = /**
     * @return {?}
     */
    function () {
        return new Date().getUTCMilliseconds() + Math.floor(Math.random() * 9999);
    };
    /**
     * Checks if reCaptcha Api is defined. It may happen that when navigating from angular component to another
     * via router, the Api was already loaded previously. In such cases, do not render script again.
     * @return {?}
     */
    BaseReCaptchaComponent.prototype.isReCaptchaApiDefined = /**
     * Checks if reCaptcha Api is defined. It may happen that when navigating from angular component to another
     * via router, the Api was already loaded previously. In such cases, do not render script again.
     * @return {?}
     */
    function () {
        if (!window[this.globalReCaptchaProperty]) {
            return false;
        }
        return true;
    };
    /**
     * @return {?}
     */
    BaseReCaptchaComponent.prototype.setupComponent = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // captcha specific setup
        this.captchaSpecificSetup();
        // create captcha wrapper
        this.createAndSetCaptchaElem();
        // we need to patch the callback through global variable, otherwise callback is not accessible
        // note: https://github.com/Enngage/ngx-captcha/issues/2
        window[this.windowOnLoadCallbackProperty] = /** @type {?} */ ((function () { return _this.zone.run(_this.onloadCallback.bind(_this)); }));
        // create and put reCaptcha script to page
        this.ensureReCaptchaScript();
    };
    /**
     * Called when google's recaptcha script is ready
     * @return {?}
     */
    BaseReCaptchaComponent.prototype.onloadCallback = /**
     * Called when google's recaptcha script is ready
     * @return {?}
     */
    function () {
        // assign reference to reCaptcha Api once its loaded
        this.reCaptchaApi = grecaptcha;
        if (!this.reCaptchaApi) {
            throw Error("ReCaptcha Api was not initialized correctly");
        }
        // loaded flag
        this.isLoaded = true;
        // fire load event
        this.load.next();
        // render captcha
        this.renderReCaptcha();
        // setup component if it was flagged as such
        if (this.setupAfterLoad) {
            this.setupAfterLoad = false;
            this.setupComponent();
        }
    };
    /**
     * @return {?}
     */
    BaseReCaptchaComponent.prototype.generateNewElemId = /**
     * @return {?}
     */
    function () {
        return this.captchaElemPrefix + this.getPseudoUniqueNumber();
    };
    /**
     * @return {?}
     */
    BaseReCaptchaComponent.prototype.createAndSetCaptchaElem = /**
     * @return {?}
     */
    function () {
        // generate new captcha id
        this.captchaElemId = this.generateNewElemId();
        if (!this.captchaElemId) {
            throw Error("Captcha elem Id is not set");
        }
        // remove old html
        this.captchaWrapperElem.nativeElement.innerHTML = '';
        /** @type {?} */
        var newElem = this.renderer.createElement('div');
        newElem.id = this.captchaElemId;
        this.renderer.appendChild(this.captchaWrapperElem.nativeElement, newElem);
        // update captcha elem
        this.ensureCaptchaElem(this.captchaElemId);
    };
    /**
     * To be aligned with the ControlValueAccessor interface we need to implement this method
     * However as we don't want to update the recaptcha, this doesn't need to be implemented
     * @param {?} obj
     * @return {?}
     */
    BaseReCaptchaComponent.prototype.writeValue = /**
     * To be aligned with the ControlValueAccessor interface we need to implement this method
     * However as we don't want to update the recaptcha, this doesn't need to be implemented
     * @param {?} obj
     * @return {?}
     */
    function (obj) { };
    /**
     * This method helps us tie together recaptcha and our formControl values
     * @param {?} fn
     * @return {?}
     */
    BaseReCaptchaComponent.prototype.registerOnChange = /**
     * This method helps us tie together recaptcha and our formControl values
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onChange = fn;
    };
    /**
     * At some point we might be interested whether the user has touched our component
     * @param {?} fn
     * @return {?}
     */
    BaseReCaptchaComponent.prototype.registerOnTouched = /**
     * At some point we might be interested whether the user has touched our component
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouched = fn;
    };
    BaseReCaptchaComponent.propDecorators = {
        siteKey: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        type: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        hl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        tabIndex: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        success: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        load: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        ready: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        captchaWrapperElem: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['captchaWrapperElem',] }],
        captchaScriptElem: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['captchaScriptElem',] }]
    };
    return BaseReCaptchaComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var NgxCaptchaConfig = /** @class */ (function () {
    function NgxCaptchaConfig() {
    }
    return NgxCaptchaConfig;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var ReCaptcha2Component = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__extends"])(ReCaptcha2Component, _super);
    function ReCaptcha2Component(renderer, zone, injector, globalConfig) {
        var _this = _super.call(this, renderer, zone, injector, globalConfig) || this;
        _this.renderer = renderer;
        _this.zone = zone;
        _this.injector = injector;
        _this.globalConfig = globalConfig;
        /**
         * Name of the global expire callback
         */
        _this.windowOnErrorCallbackProperty = 'ngx_captcha_error_callback';
        /**
         * Name of the global error callback
         */
        _this.windowOnExpireCallbackProperty = 'ngx_captcha_expire_callback';
        /**
         * Theme
         */
        _this.theme = 'light';
        /**
         * Size
         */
        _this.size = 'normal';
        /**
         * Expired callback
         */
        _this.expire = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Error callback
         */
        _this.error = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.recaptchaType = ReCaptchaType.ReCaptcha2;
        return _this;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ReCaptcha2Component.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        _super.prototype.ngOnChanges.call(this, changes);
    };
    /**
     * @return {?}
     */
    ReCaptcha2Component.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        _super.prototype.ngOnDestroy.call(this);
        window[this.windowOnErrorCallbackProperty] = {};
        window[this.windowOnExpireCallbackProperty] = {};
    };
    /**
     * @return {?}
     */
    ReCaptcha2Component.prototype.captchaSpecificSetup = /**
     * @return {?}
     */
    function () {
        this.registerCallbacks();
    };
    /**
     * Gets reCaptcha properties
    */
    /**
     * Gets reCaptcha properties
     * @return {?}
     */
    ReCaptcha2Component.prototype.getCaptchaProperties = /**
     * Gets reCaptcha properties
     * @return {?}
     */
    function () {
        var _this = this;
        return {
            'sitekey': this._siteKey,
            'callback': function (response) { return _this.zone.run(function () { return _this.handleCallback(response); }); },
            'expired-callback': function () { return _this.zone.run(function () { return _this.handleExpireCallback(); }); },
            'error-callback': function () { return _this.zone.run(function () { return _this.handleErrorCallback(); }); },
            'theme': this.theme,
            'type': this.type,
            'size': this.size,
            'tabindex': this.tabIndex
        };
    };
    /**
     * Registers global callbacks
     * @return {?}
     */
    ReCaptcha2Component.prototype.registerCallbacks = /**
     * Registers global callbacks
     * @return {?}
     */
    function () {
        window[this.windowOnErrorCallbackProperty] = this.handleErrorCallback.bind(this);
        window[this.windowOnExpireCallbackProperty] = this.handleExpireCallback.bind(this);
    };
    /**
     * Handles error callback
     * @return {?}
     */
    ReCaptcha2Component.prototype.handleErrorCallback = /**
     * Handles error callback
     * @return {?}
     */
    function () {
        var _this = this;
        this.zone.run(function () {
            _this.onChange(null);
            _this.onTouched(null);
        });
        this.error.next();
    };
    /**
     * Handles expired callback
     * @return {?}
     */
    ReCaptcha2Component.prototype.handleExpireCallback = /**
     * Handles expired callback
     * @return {?}
     */
    function () {
        this.expire.next();
        // reset captcha on expire callback
        this.resetCaptcha();
    };
    ReCaptcha2Component.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'ngx-recaptcha2',
                    template: "\n  <div #captchaScriptElem></div>\n  <div #captchaWrapperElem></div>",
                    providers: [
                        {
                            provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
                            useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return ReCaptcha2Component; }),
                            multi: true,
                        }
                    ]
                },] },
    ];
    /** @nocollapse */
    ReCaptcha2Component.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"] },
        { type: NgxCaptchaConfig, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }] }
    ]; };
    ReCaptcha2Component.propDecorators = {
        theme: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        size: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        hl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        expire: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        error: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
    };
    return ReCaptcha2Component;
}(BaseReCaptchaComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var InvisibleReCaptchaComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__extends"])(InvisibleReCaptchaComponent, _super);
    function InvisibleReCaptchaComponent(renderer, zone, injector, globalConfig) {
        var _this = _super.call(this, renderer, zone, injector, globalConfig) || this;
        _this.renderer = renderer;
        _this.zone = zone;
        _this.injector = injector;
        _this.globalConfig = globalConfig;
        /**
         * This size representing invisible captcha
         */
        _this.size = 'invisible';
        /**
         * Badge
         */
        _this.badge = 'bottomright';
        _this.recaptchaType = ReCaptchaType.InvisibleReCaptcha;
        return _this;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    InvisibleReCaptchaComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        _super.prototype.ngOnChanges.call(this, changes);
    };
    /**
     * Programatically invoke the reCAPTCHA check. Used if the invisible reCAPTCHA is on a div instead of a button.
     */
    /**
     * Programatically invoke the reCAPTCHA check. Used if the invisible reCAPTCHA is on a div instead of a button.
     * @return {?}
     */
    InvisibleReCaptchaComponent.prototype.execute = /**
     * Programatically invoke the reCAPTCHA check. Used if the invisible reCAPTCHA is on a div instead of a button.
     * @return {?}
     */
    function () {
        // execute captcha
        this.reCaptchaApi.execute(this.captchaId);
    };
    /**
     * @return {?}
     */
    InvisibleReCaptchaComponent.prototype.captchaSpecificSetup = /**
     * @return {?}
     */
    function () {
    };
    /**
    * Gets reCaptcha properties
    */
    /**
     * Gets reCaptcha properties
     * @return {?}
     */
    InvisibleReCaptchaComponent.prototype.getCaptchaProperties = /**
     * Gets reCaptcha properties
     * @return {?}
     */
    function () {
        var _this = this;
        return {
            'sitekey': this._siteKey,
            'callback': function (response) { return _this.zone.run(function () { return _this.handleCallback(response); }); },
            'badge': this.badge,
            'type': this.type,
            'tabindex': this.tabIndex,
            'size': this.size
        };
    };
    InvisibleReCaptchaComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'ngx-invisible-recaptcha',
                    template: "\n  <div #captchaScriptElem></div>\n  <div #captchaWrapperElem></div>",
                    providers: [
                        {
                            provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
                            useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return InvisibleReCaptchaComponent; }),
                            multi: true,
                        }
                    ]
                },] },
    ];
    /** @nocollapse */
    InvisibleReCaptchaComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"] },
        { type: NgxCaptchaConfig, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }] }
    ]; };
    InvisibleReCaptchaComponent.propDecorators = {
        badge: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        hl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
    };
    return InvisibleReCaptchaComponent;
}(BaseReCaptchaComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var NgxCaptchaModule = /** @class */ (function () {
    function NgxCaptchaModule() {
    }
    /**
     * @param {?=} config
     * @return {?}
     */
    NgxCaptchaModule.forRoot = /**
     * @param {?=} config
     * @return {?}
     */
    function (config) {
        return {
            ngModule: NgxCaptchaModule,
            providers: [
                {
                    provide: NgxCaptchaConfig,
                    useValue: config,
                }
            ]
        };
    };
    NgxCaptchaModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]
                    ],
                    declarations: [
                        ReCaptcha2Component,
                        InvisibleReCaptchaComponent
                    ],
                    exports: [
                        ReCaptcha2Component,
                        InvisibleReCaptchaComponent
                    ]
                },] },
    ];
    return NgxCaptchaModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWNhcHRjaGEuanMubWFwIiwic291cmNlcyI6WyJuZzovL25neC1jYXB0Y2hhL2xpYi9yZWNhcHRjaGEtdHlwZS5lbnVtLnRzIiwibmc6Ly9uZ3gtY2FwdGNoYS9saWIvYmFzZS1yZWNhcHRjaGEuY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gtY2FwdGNoYS9saWIvcmVjYXB0Y2hhLmNvbmZpZy50cyIsIm5nOi8vbmd4LWNhcHRjaGEvbGliL3JlY2FwdGNoYS0yLmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LWNhcHRjaGEvbGliL2ludmlzaWJsZS1yZWNhcHRjaGEuY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gtY2FwdGNoYS9saWIvbmd4LWNhcHRjaGEubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBlbnVtIFJlQ2FwdGNoYVR5cGUge1xyXG5cclxuICAgIEludmlzaWJsZVJlQ2FwdGNoYSxcclxuICAgIFJlQ2FwdGNoYTJcclxufVxyXG4iLCJpbXBvcnQge1xyXG4gICAgQWZ0ZXJWaWV3SW5pdCxcclxuICAgIEVsZW1lbnRSZWYsXHJcbiAgICBFdmVudEVtaXR0ZXIsIEluamVjdG9yLFxyXG4gICAgSW5wdXQsXHJcbiAgICBOZ1pvbmUsXHJcbiAgICBPbkNoYW5nZXMsXHJcbiAgICBPbkRlc3Ryb3ksXHJcbiAgICBPdXRwdXQsXHJcbiAgICBSZW5kZXJlcjIsXHJcbiAgICBTaW1wbGVDaGFuZ2VzLFxyXG4gICAgVmlld0NoaWxkLFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgUmVDYXB0Y2hhVHlwZSB9IGZyb20gJy4vcmVjYXB0Y2hhLXR5cGUuZW51bSc7XHJcbmltcG9ydCB7IE5neENhcHRjaGFDb25maWcgfSBmcm9tICcuL3JlY2FwdGNoYS5jb25maWcnO1xyXG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgRm9ybUNvbnRyb2wsIE5nQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuXHJcbmRlY2xhcmUgdmFyIGdyZWNhcHRjaGE6IGFueTtcclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBCYXNlUmVDYXB0Y2hhQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkRlc3Ryb3ksIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBBZnRlclZpZXdJbml0IHtcclxuICAgIC8qKlxyXG4gICAgICogRm9ybSBDb250cm9sIHRvIGJlIGVuYWJsZSB1c2FnZSBpbiByZWFjdGl2ZSBmb3Jtc1xyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGNvbnRyb2w6IEZvcm1Db250cm9sO1xyXG5cclxuICAgIHByaXZhdGUgc2V0dXBBZnRlckxvYWQgPSBmYWxzZTtcclxuXHJcbiAgICAvKipcclxuICAgICogTmFtZSBvZiB0aGUgZ2xvYmFsIGNhbGxiYWNrXHJcbiAgICAqL1xyXG4gICAgcHJvdGVjdGVkIHJlYWRvbmx5IHdpbmRvd09uTG9hZENhbGxiYWNrUHJvcGVydHkgPSAnbmd4X29ubG9hZF9jYWxsYmFja18nICsgdGhpcy5nZXRQc2V1ZG9VbmlxdWVOdW1iZXIoKTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIE5hbWUgb2YgdGhlIGdsb2JhbCByZUNhcHRjaGEgcHJvcGVydHlcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIHJlYWRvbmx5IGdsb2JhbFJlQ2FwdGNoYVByb3BlcnR5ID0gJ2dyZWNhcHRjaGEnO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogUHJlZml4IG9mIHRoZSBjYXB0Y2hhIGVsZW1lbnRcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIHJlYWRvbmx5IGNhcHRjaGFFbGVtUHJlZml4ID0gJ25neF9jYXB0Y2hhX2lkXyc7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgICogR29vZ2xlJ3Mgc2l0ZSBrZXkuXHJcbiAgICAgICogWW91IGNhbiBmaW5kIHRoaXMgdW5kZXIgaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9yZWNhcHRjaGFcclxuICAgICAgKi9cclxuICAgIHByb3RlY3RlZCBfc2l0ZUtleT86IHN0cmluZztcclxuXHJcbiAgICAvKipcclxuICAgICogQ29uZmlnIHRvIHVzZVxyXG4gICAgKi9cclxuICAgIEBJbnB1dCgpIHNpdGVLZXk6IHN0cmluZyB8ICgoKSA9PiBzdHJpbmcpO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVHlwZVxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKSB0eXBlOiAnYXVkaW8nIHwgJ2ltYWdlJyA9ICdpbWFnZSc7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBMYW5ndWFnZSBjb2RlLiBBdXRvLWRldGVjdHMgdGhlIHVzZXIncyBsYW5ndWFnZSBpZiB1bnNwZWNpZmllZC5cclxuICAgICAqL1xyXG4gICAgQElucHV0KCkgaGw6IHN0cmluZztcclxuXHJcbiAgICAvKipcclxuICAgICogVGFiIGluZGV4XHJcbiAgICAqL1xyXG4gICAgQElucHV0KCkgdGFiSW5kZXggPSAwO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2FsbGVkIHdoZW4gY2FwdGNoYSByZWNlaXZlcyBzdWNjZXNzZnVsIHJlc3BvbnNlLlxyXG4gICAgICogQ2FwdGNoYSByZXNwb25zZSB0b2tlbiBpcyBwYXNzZWQgdG8gZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBzdWNjZXNzID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XHJcblxyXG4gICAgLyoqXHJcbiAgICAqIENhbGxlZCB3aGVuIGNhcHRjaGEgaXMgbG9hZGVkLiBFdmVudCByZWNlaXZlcyBpZCBvZiB0aGUgY2FwdGNoYVxyXG4gICAgKi9cclxuICAgIEBPdXRwdXQoKSBsb2FkID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XHJcblxyXG4gICAgLyoqXHJcbiAgICAqIENhbGxlZCB3aGVuIGNhcHRjaGEgaXMgbG9hZGVkICYgcmVhZHkuIEkuZS4gd2hlbiB5b3UgbmVlZCB0byBleGVjdXRlIGNhcHRjaGEgb24gY29tcG9uZW50IGxvYWQuXHJcbiAgICAqL1xyXG4gICAgQE91dHB1dCgpIHJlYWR5ID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xyXG5cclxuICAgIEBWaWV3Q2hpbGQoJ2NhcHRjaGFXcmFwcGVyRWxlbScpIGNhcHRjaGFXcmFwcGVyRWxlbTogRWxlbWVudFJlZjtcclxuICAgIEBWaWV3Q2hpbGQoJ2NhcHRjaGFTY3JpcHRFbGVtJykgY2FwdGNoYVNjcmlwdEVsZW06IEVsZW1lbnRSZWY7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDYXB0Y2hhIGVsZW1lbnRcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIGNhcHRjaGFFbGVtPzogSFRNTEVsZW1lbnQ7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBJZCBvZiB0aGUgY2FwdGNoYSBlbGVtXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBjYXB0Y2hhSWQ/OiBudW1iZXI7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBIb2xkcyBsYXN0IHJlc3BvbnNlIHZhbHVlXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBjdXJyZW50UmVzcG9uc2U/OiBzdHJpbmc7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBJZiBlbmFibGVkLCBjYXB0Y2hhIHdpbGwgcmVzZXQgYWZ0ZXIgcmVjZWl2aW5nIHN1Y2Nlc3MgcmVzcG9uc2UuIFRoaXMgaXMgdXNlZnVsXHJcbiAgICAgKiB3aGVuIGludmlzaWJsZSBjYXB0Y2hhIG5lZWQgdG8gYmUgcmVzb2x2ZWQgbXVsdGlwbGUgdGltZXMgb24gc2FtZSBwYWdlXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCByZXNldENhcHRjaGFBZnRlclN1Y2Nlc3MgPSBmYWxzZTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEluZGljYXRlcyBpZiBjYXB0Y2hhIGlzIGxvYWRlZFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgaXNMb2FkZWQgPSBmYWxzZTtcclxuXHJcbiAgICAvKipcclxuICAgICogUmVmZXJlbmNlIHRvIGdsb2JhbCByZUNhcHRjaGEgQVBJXHJcbiAgICAqL1xyXG4gICAgcHVibGljIHJlQ2FwdGNoYUFwaT86IGFueTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIElkIG9mIHRoZSBET00gZWxlbWVudCB3cmFwcGluZyBjYXB0Y2hhXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBjYXB0Y2hhRWxlbUlkPzogc3RyaW5nO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2FwdGNoYSB0eXBlXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBhYnN0cmFjdCByZWNhcHRjaGFUeXBlOiBSZUNhcHRjaGFUeXBlO1xyXG5cclxuICAgIC8qKlxyXG4gICAgKiBSZXF1aXJlZCBieSBDb250cm9sVmFsdWVBY2Nlc3NvclxyXG4gICAgKi9cclxuICAgIHByb3RlY3RlZCBvbkNoYW5nZTogKHZhbHVlOiBzdHJpbmcpID0+IHZvaWQ7XHJcbiAgICBwcm90ZWN0ZWQgb25Ub3VjaGVkOiAodmFsdWU6IHN0cmluZykgPT4gdm9pZDtcclxuXHJcbiAgICBwcm90ZWN0ZWQgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJvdGVjdGVkIHJlbmRlcmVyOiBSZW5kZXJlcjIsXHJcbiAgICAgICAgcHJvdGVjdGVkIHpvbmU6IE5nWm9uZSxcclxuICAgICAgICBwcm90ZWN0ZWQgaW5qZWN0b3I6IEluamVjdG9yLFxyXG4gICAgICAgIHByb3RlY3RlZCBnbG9iYWxDb25maWc/OiBOZ3hDYXB0Y2hhQ29uZmlnLFxyXG4gICAgKSB7IH1cclxuXHJcbiAgICBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICAgICAgdGhpcy5jb250cm9sID0gdGhpcy5pbmplY3Rvci5nZXQoTmdDb250cm9sKS5jb250cm9sO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgKiBHZXRzIHJlQ2FwdGNoYSBwcm9wZXJ0aWVzXHJcbiAgICAqL1xyXG4gICAgcHJvdGVjdGVkIGFic3RyYWN0IGdldENhcHRjaGFQcm9wZXJ0aWVzKCk6IGFueTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFVzZWQgZm9yIGNhcHRjaGEgc3BlY2lmaWMgc2V0dXBcclxuICAgICovXHJcbiAgICBwcm90ZWN0ZWQgYWJzdHJhY3QgY2FwdGNoYVNwZWNpZmljU2V0dXAoKTogdm9pZDtcclxuXHJcbiAgICBwcml2YXRlIGdldEdsb2JhbFNpdGVLZXkoKTogc3RyaW5nIHtcclxuICAgICAgICBpZiAodGhpcy5nbG9iYWxDb25maWcpIHtcclxuICAgICAgICAgICAgLy8gSW52aXNpYmxlIGNhcHRjaGFcclxuICAgICAgICAgICAgaWYgKHRoaXMucmVjYXB0Y2hhVHlwZSA9PT0gUmVDYXB0Y2hhVHlwZS5JbnZpc2libGVSZUNhcHRjaGEpIHtcclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5nbG9iYWxDb25maWcuaW52aXNpYmxlQ2FwdGNoYVNpdGVLZXkpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBFcnJvcihgU2l0ZUtleSBmb3IgaW52aXNpYmxlIHJlQ2FwdGNoYSBpcyBub3Qgc2V0IWApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmdsb2JhbENvbmZpZy5pbnZpc2libGVDYXB0Y2hhU2l0ZUtleSBpbnN0YW5jZW9mIEZ1bmN0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2xvYmFsQ29uZmlnLmludmlzaWJsZUNhcHRjaGFTaXRlS2V5KCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmdsb2JhbENvbmZpZy5pbnZpc2libGVDYXB0Y2hhU2l0ZUtleTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvLyByZWNhcHRjaGEgMlxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMucmVjYXB0Y2hhVHlwZSA9PT0gUmVDYXB0Y2hhVHlwZS5SZUNhcHRjaGEyKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuZ2xvYmFsQ29uZmlnLnJlQ2FwdGNoYTJTaXRlS2V5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgRXJyb3IoYFNpdGVLZXkgZm9yIHJlQ2FwdGNoYTIgaXMgbm90IHNldCFgKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5nbG9iYWxDb25maWcucmVDYXB0Y2hhMlNpdGVLZXkgaW5zdGFuY2VvZiBGdW5jdGlvbikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmdsb2JhbENvbmZpZy5yZUNhcHRjaGEyU2l0ZUtleSgpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5nbG9iYWxDb25maWcucmVDYXB0Y2hhMlNpdGVLZXk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgRXJyb3IoYFVuc3VwcG9ydGVkIGNhcHRjaGEgdHlwZSAnJHt0aGlzLnJlY2FwdGNoYVR5cGV9JyFgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgICAgIGlmICghdGhpcy5zaXRlS2V5KSB7XHJcbiAgICAgICAgICAgIC8vIHVzZSBnbG9iYWwgc2l0ZSBrZXkgaWYga2V5IGlzIG5vdCBhdmFpbGFibGVcclxuICAgICAgICAgICAgdGhpcy5fc2l0ZUtleSA9IHRoaXMuZ2V0R2xvYmFsU2l0ZUtleSgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIHVzZSBjb21ucG9uZW50IHNpdGUga2V5XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnNpdGVLZXkgaW5zdGFuY2VvZiBGdW5jdGlvbikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fc2l0ZUtleSA9IHRoaXMuc2l0ZUtleSgpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fc2l0ZUtleSA9IHRoaXMuc2l0ZUtleTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNldHVwQ29tcG9uZW50KCk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgd2luZG93W3RoaXMud2luZG93T25Mb2FkQ2FsbGJhY2tQcm9wZXJ0eV0gPSB7fTtcclxuICAgICAgICB3aW5kb3dbdGhpcy5nbG9iYWxSZUNhcHRjaGFQcm9wZXJ0eV0gPSB7fTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldHMgY2FwdGNoYSByZXNwb25zZSBhcyBwZXIgcmVDYXB0Y2hhIGRvY3NcclxuICAgICovXHJcbiAgICBnZXRSZXNwb25zZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJlQ2FwdGNoYUFwaS5nZXRSZXNwb25zZSh0aGlzLmNhcHRjaGFJZCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXRzIElkIG9mIGNhcHRjaGEgd2lkZ2V0XHJcbiAgICAqL1xyXG4gICAgZ2V0Q2FwdGNoYUlkKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY2FwdGNoYUlkO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgKiBSZXNldHMgY2FwdGNoYVxyXG4gICAgKi9cclxuICAgIHJlc2V0Q2FwdGNoYSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnpvbmUucnVuKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5vbkNoYW5nZShudWxsKTtcclxuICAgICAgICAgICAgdGhpcy5vblRvdWNoZWQobnVsbCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXRzIGxhc3Qgc3VibWl0dGVkIGNhcHRjaGEgcmVzcG9uc2VcclxuICAgICovXHJcbiAgICBnZXRDdXJyZW50UmVzcG9uc2UoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jdXJyZW50UmVzcG9uc2U7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZWxvYWQgY2FwdGNoYS4gVXNlZnVsIHdoZW4gcHJvcGVydGllcyAoaS5lLiB0aGVtZSkgY2hhbmdlZCBhbmQgY2FwdGNoYSBuZWVkIHRvIHJlZmxlY3QgdGhlbVxyXG4gICAgKi9cclxuICAgIHJlbG9hZENhcHRjaGEoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zZXR1cENvbXBvbmVudCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBlbnN1cmVDYXB0Y2hhRWxlbShjYXB0Y2hhRWxlbUlkOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBjYXB0Y2hhRWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNhcHRjaGFFbGVtSWQpO1xyXG5cclxuICAgICAgICBpZiAoIWNhcHRjaGFFbGVtKSB7XHJcbiAgICAgICAgICAgIHRocm93IEVycm9yKGBDYXB0Y2hhIGVsZW1lbnQgd2l0aCBpZCAnJHtjYXB0Y2hhRWxlbUlkfScgd2FzIG5vdCBmb3VuZGApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gYXNzaWduIGNhcHRjaGEgYWxlbVxyXG4gICAgICAgIHRoaXMuY2FwdGNoYUVsZW0gPSBjYXB0Y2hhRWxlbTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJlc3BvbnNpYmxlIGZvciBpbnN0YW50aWF0aW5nIGNhcHRjaGEgZWxlbWVudFxyXG4gICAgKi9cclxuICAgIHByb3RlY3RlZCByZW5kZXJSZUNhcHRjaGEoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5jYXB0Y2hhSWQgPSB0aGlzLnJlQ2FwdGNoYUFwaS5yZW5kZXIodGhpcy5jYXB0Y2hhRWxlbUlkLCB0aGlzLmdldENhcHRjaGFQcm9wZXJ0aWVzKCkpO1xyXG4gICAgICAgIHRoaXMucmVhZHkubmV4dCgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2FsbGVkIHdoZW4gY2FwdGNoYSByZWNlaXZlcyByZXNwb25zZVxyXG4gICAgICogQHBhcmFtIGNhbGxiYWNrIENhbGxiYWNrXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBoYW5kbGVDYWxsYmFjayhjYWxsYmFjazogYW55KTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50UmVzcG9uc2UgPSBjYWxsYmFjaztcclxuICAgICAgICB0aGlzLnN1Y2Nlc3MubmV4dChjYWxsYmFjayk7XHJcblxyXG4gICAgICAgIHRoaXMuem9uZS5ydW4oKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm9uQ2hhbmdlKGNhbGxiYWNrKTtcclxuICAgICAgICAgICAgdGhpcy5vblRvdWNoZWQoY2FsbGJhY2spO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5yZXNldENhcHRjaGFBZnRlclN1Y2Nlc3MpIHtcclxuICAgICAgICAgICAgdGhpcy5yZXNldENhcHRjaGEoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZWdpc3RlcnMgcmVDYXB0Y2hhIHNjcmlwdCBpZiBpdHMgbm90IGF2YWlsYWJsZVxyXG4gICAgKi9cclxuICAgIHByb3RlY3RlZCBlbnN1cmVSZUNhcHRjaGFTY3JpcHQoKTogdm9pZCB7XHJcbiAgICAgICAgd2luZG93W3RoaXMuZ2xvYmFsUmVDYXB0Y2hhUHJvcGVydHldID0ge307XHJcbiAgICAgICAgdGhpcy5yZUNhcHRjaGFBcGkgPSB7fTtcclxuXHJcbiAgICAgICAgdGhpcy5yZWdpc3RlclJlQ2FwdGNoYVNjcmlwdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQWRkIHNjcmlwdCB0byBwYWdlIHdpdGggcmVmZXJlbmNlIHRvIGNhcHRjaGEgQVBJLiBUaGlzIGhhcyB0byBiZSBkb25lIG1hbnVhbGx5XHJcbiAgICAgKiBhcyB3ZSB3YW50IHRvIGF2b2lkIGFkZGluZyBzY3JpcHQgdG8gbWFpbiBpbmRleC5odG1sXHJcbiAgICAqL1xyXG4gICAgcHJvdGVjdGVkIHJlZ2lzdGVyUmVDYXB0Y2hhU2NyaXB0KCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xyXG4gICAgICAgIHNjcmlwdC5pbm5lckhUTUwgPSAnJztcclxuICAgICAgICBzY3JpcHQuc3JjID1cclxuICAgICAgICAgICAgYGh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vcmVjYXB0Y2hhL2FwaS5qcz9vbmxvYWQ9JHt0aGlzLndpbmRvd09uTG9hZENhbGxiYWNrUHJvcGVydHl9JnJlbmRlcj1leHBsaWNpdCR7dGhpcy5nZXRMYW5ndWFnZVBhcmFtKCl9YDtcclxuICAgICAgICBzY3JpcHQuYXN5bmMgPSB0cnVlO1xyXG4gICAgICAgIHNjcmlwdC5kZWZlciA9IHRydWU7XHJcblxyXG4gICAgICAgIHRoaXMuY2FwdGNoYVNjcmlwdEVsZW0ubmF0aXZlRWxlbWVudC5hcHBlbmRDaGlsZChzY3JpcHQpO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBnZXRMYW5ndWFnZVBhcmFtKCk6IHN0cmluZyB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmhsKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAnJztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBgJmhsPSR7dGhpcy5obH1gO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0UHNldWRvVW5pcXVlTnVtYmVyKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBEYXRlKCkuZ2V0VVRDTWlsbGlzZWNvbmRzKCkgKyBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA5OTk5KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENoZWNrcyBpZiByZUNhcHRjaGEgQXBpIGlzIGRlZmluZWQuIEl0IG1heSBoYXBwZW4gdGhhdCB3aGVuIG5hdmlnYXRpbmcgZnJvbSBhbmd1bGFyIGNvbXBvbmVudCB0byBhbm90aGVyXHJcbiAgICAgKiB2aWEgcm91dGVyLCB0aGUgQXBpIHdhcyBhbHJlYWR5IGxvYWRlZCBwcmV2aW91c2x5LiBJbiBzdWNoIGNhc2VzLCBkbyBub3QgcmVuZGVyIHNjcmlwdCBhZ2Fpbi5cclxuICAgICovXHJcbiAgICBwcml2YXRlIGlzUmVDYXB0Y2hhQXBpRGVmaW5lZCgpOiBib29sZWFuIHtcclxuICAgICAgICBpZiAoIXdpbmRvd1t0aGlzLmdsb2JhbFJlQ2FwdGNoYVByb3BlcnR5XSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2V0dXBDb21wb25lbnQoKTogdm9pZCB7XHJcbiAgICAgICAgLy8gY2FwdGNoYSBzcGVjaWZpYyBzZXR1cFxyXG4gICAgICAgIHRoaXMuY2FwdGNoYVNwZWNpZmljU2V0dXAoKTtcclxuXHJcbiAgICAgICAgLy8gY3JlYXRlIGNhcHRjaGEgd3JhcHBlclxyXG4gICAgICAgIHRoaXMuY3JlYXRlQW5kU2V0Q2FwdGNoYUVsZW0oKTtcclxuXHJcbiAgICAgICAgLy8gd2UgbmVlZCB0byBwYXRjaCB0aGUgY2FsbGJhY2sgdGhyb3VnaCBnbG9iYWwgdmFyaWFibGUsIG90aGVyd2lzZSBjYWxsYmFjayBpcyBub3QgYWNjZXNzaWJsZVxyXG4gICAgICAgIC8vIG5vdGU6IGh0dHBzOi8vZ2l0aHViLmNvbS9Fbm5nYWdlL25neC1jYXB0Y2hhL2lzc3Vlcy8yXHJcbiAgICAgICAgd2luZG93W3RoaXMud2luZG93T25Mb2FkQ2FsbGJhY2tQcm9wZXJ0eV0gPSA8YW55PigoKSA9PiB0aGlzLnpvbmUucnVuKFxyXG4gICAgICAgICAgICB0aGlzLm9ubG9hZENhbGxiYWNrLmJpbmQodGhpcylcclxuICAgICAgICApKTtcclxuXHJcbiAgICAgICAgLy8gY3JlYXRlIGFuZCBwdXQgcmVDYXB0Y2hhIHNjcmlwdCB0byBwYWdlXHJcbiAgICAgICAgdGhpcy5lbnN1cmVSZUNhcHRjaGFTY3JpcHQoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICogQ2FsbGVkIHdoZW4gZ29vZ2xlJ3MgcmVjYXB0Y2hhIHNjcmlwdCBpcyByZWFkeVxyXG4gICAgKi9cclxuICAgIHByaXZhdGUgb25sb2FkQ2FsbGJhY2soKTogdm9pZCB7XHJcbiAgICAgICAgLy8gYXNzaWduIHJlZmVyZW5jZSB0byByZUNhcHRjaGEgQXBpIG9uY2UgaXRzIGxvYWRlZFxyXG4gICAgICAgIHRoaXMucmVDYXB0Y2hhQXBpID0gZ3JlY2FwdGNoYTtcclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLnJlQ2FwdGNoYUFwaSkge1xyXG4gICAgICAgICAgICB0aHJvdyBFcnJvcihgUmVDYXB0Y2hhIEFwaSB3YXMgbm90IGluaXRpYWxpemVkIGNvcnJlY3RseWApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gbG9hZGVkIGZsYWdcclxuICAgICAgICB0aGlzLmlzTG9hZGVkID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgLy8gZmlyZSBsb2FkIGV2ZW50XHJcbiAgICAgICAgdGhpcy5sb2FkLm5leHQoKTtcclxuXHJcbiAgICAgICAgLy8gcmVuZGVyIGNhcHRjaGFcclxuICAgICAgICB0aGlzLnJlbmRlclJlQ2FwdGNoYSgpO1xyXG5cclxuICAgICAgICAvLyBzZXR1cCBjb21wb25lbnQgaWYgaXQgd2FzIGZsYWdnZWQgYXMgc3VjaFxyXG4gICAgICAgIGlmICh0aGlzLnNldHVwQWZ0ZXJMb2FkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0dXBBZnRlckxvYWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5zZXR1cENvbXBvbmVudCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdlbmVyYXRlTmV3RWxlbUlkKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY2FwdGNoYUVsZW1QcmVmaXggKyB0aGlzLmdldFBzZXVkb1VuaXF1ZU51bWJlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY3JlYXRlQW5kU2V0Q2FwdGNoYUVsZW0oKTogdm9pZCB7XHJcbiAgICAgICAgLy8gZ2VuZXJhdGUgbmV3IGNhcHRjaGEgaWRcclxuICAgICAgICB0aGlzLmNhcHRjaGFFbGVtSWQgPSB0aGlzLmdlbmVyYXRlTmV3RWxlbUlkKCk7XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5jYXB0Y2hhRWxlbUlkKSB7XHJcbiAgICAgICAgICAgIHRocm93IEVycm9yKGBDYXB0Y2hhIGVsZW0gSWQgaXMgbm90IHNldGApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gcmVtb3ZlIG9sZCBodG1sXHJcbiAgICAgICAgdGhpcy5jYXB0Y2hhV3JhcHBlckVsZW0ubmF0aXZlRWxlbWVudC5pbm5lckhUTUwgPSAnJztcclxuXHJcbiAgICAgICAgLy8gY3JlYXRlIG5ldyB3cmFwcGVyIGZvciBjYXB0Y2hhXHJcbiAgICAgICAgY29uc3QgbmV3RWxlbSA9IHRoaXMucmVuZGVyZXIuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgbmV3RWxlbS5pZCA9IHRoaXMuY2FwdGNoYUVsZW1JZDtcclxuXHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5hcHBlbmRDaGlsZCh0aGlzLmNhcHRjaGFXcmFwcGVyRWxlbS5uYXRpdmVFbGVtZW50LCBuZXdFbGVtKTtcclxuXHJcbiAgICAgICAgLy8gdXBkYXRlIGNhcHRjaGEgZWxlbVxyXG4gICAgICAgIHRoaXMuZW5zdXJlQ2FwdGNoYUVsZW0odGhpcy5jYXB0Y2hhRWxlbUlkKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFRvIGJlIGFsaWduZWQgd2l0aCB0aGUgQ29udHJvbFZhbHVlQWNjZXNzb3IgaW50ZXJmYWNlIHdlIG5lZWQgdG8gaW1wbGVtZW50IHRoaXMgbWV0aG9kXHJcbiAgICAgKiBIb3dldmVyIGFzIHdlIGRvbid0IHdhbnQgdG8gdXBkYXRlIHRoZSByZWNhcHRjaGEsIHRoaXMgZG9lc24ndCBuZWVkIHRvIGJlIGltcGxlbWVudGVkXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyB3cml0ZVZhbHVlKG9iajogYW55KTogdm9pZCB7IH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgbWV0aG9kIGhlbHBzIHVzIHRpZSB0b2dldGhlciByZWNhcHRjaGEgYW5kIG91ciBmb3JtQ29udHJvbCB2YWx1ZXNcclxuICAgICAqL1xyXG4gICAgcHVibGljIHJlZ2lzdGVyT25DaGFuZ2UoZm46IGFueSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICogQXQgc29tZSBwb2ludCB3ZSBtaWdodCBiZSBpbnRlcmVzdGVkIHdoZXRoZXIgdGhlIHVzZXIgaGFzIHRvdWNoZWQgb3VyIGNvbXBvbmVudFxyXG4gICAgKi9cclxuICAgIHB1YmxpYyByZWdpc3Rlck9uVG91Y2hlZChmbjogYW55KTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5vblRvdWNoZWQgPSBmbjtcclxuICAgIH1cclxufVxyXG5cclxuIiwiZXhwb3J0IGludGVyZmFjZSBJTmd4Q2FwdGNoYUNvbmZpZyB7XHJcbiAgICByZUNhcHRjaGEyU2l0ZUtleT86IHN0cmluZyB8ICgoKSA9PiBzdHJpbmcpO1xyXG4gICAgaW52aXNpYmxlQ2FwdGNoYVNpdGVLZXk/OiBzdHJpbmcgfCAoKCkgPT4gc3RyaW5nKTtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIE5neENhcHRjaGFDb25maWcgaW1wbGVtZW50cyBJTmd4Q2FwdGNoYUNvbmZpZyB7XHJcblxyXG4gICAgcHVibGljIHJlQ2FwdGNoYTJTaXRlS2V5Pzogc3RyaW5nIHwgKCgpID0+IHN0cmluZyk7XHJcbiAgICBwdWJsaWMgaW52aXNpYmxlQ2FwdGNoYVNpdGVLZXk/OiBzdHJpbmcgfCAoKCkgPT4gc3RyaW5nKTtcclxufVxyXG4iLCJpbXBvcnQge1xyXG4gIENvbXBvbmVudCxcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSW5wdXQsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIE9uRGVzdHJveSxcclxuICBPcHRpb25hbCxcclxuICBPdXRwdXQsXHJcbiAgUmVuZGVyZXIyLFxyXG4gIFNpbXBsZUNoYW5nZXMsXHJcbiAgTmdab25lLCBJbmplY3RvciwgZm9yd2FyZFJlZixcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IEJhc2VSZUNhcHRjaGFDb21wb25lbnQgfSBmcm9tICcuL2Jhc2UtcmVjYXB0Y2hhLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFJlQ2FwdGNoYVR5cGUgfSBmcm9tICcuL3JlY2FwdGNoYS10eXBlLmVudW0nO1xyXG5pbXBvcnQgeyBOZ3hDYXB0Y2hhQ29uZmlnIH0gZnJvbSAnLi9yZWNhcHRjaGEuY29uZmlnJztcclxuaW1wb3J0IHsgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ25neC1yZWNhcHRjaGEyJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gIDxkaXYgI2NhcHRjaGFTY3JpcHRFbGVtPjwvZGl2PlxyXG4gIDxkaXYgI2NhcHRjaGFXcmFwcGVyRWxlbT48L2Rpdj5gLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAge1xyXG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcclxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gUmVDYXB0Y2hhMkNvbXBvbmVudCksXHJcbiAgICAgIG11bHRpOiB0cnVlLFxyXG4gICAgfVxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFJlQ2FwdGNoYTJDb21wb25lbnQgZXh0ZW5kcyBCYXNlUmVDYXB0Y2hhQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xyXG5cclxuICAvKipcclxuICAqIE5hbWUgb2YgdGhlIGdsb2JhbCBleHBpcmUgY2FsbGJhY2tcclxuICAqL1xyXG4gIHByb3RlY3RlZCByZWFkb25seSB3aW5kb3dPbkVycm9yQ2FsbGJhY2tQcm9wZXJ0eSA9ICduZ3hfY2FwdGNoYV9lcnJvcl9jYWxsYmFjayc7XHJcblxyXG4gIC8qKlxyXG4gICogTmFtZSBvZiB0aGUgZ2xvYmFsIGVycm9yIGNhbGxiYWNrXHJcbiAgKi9cclxuICBwcm90ZWN0ZWQgcmVhZG9ubHkgd2luZG93T25FeHBpcmVDYWxsYmFja1Byb3BlcnR5ID0gJ25neF9jYXB0Y2hhX2V4cGlyZV9jYWxsYmFjayc7XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZW1lXHJcbiAgICovXHJcbiAgQElucHV0KCkgdGhlbWU6ICdkYXJrJyB8ICdsaWdodCcgPSAnbGlnaHQnO1xyXG5cclxuICAvKipcclxuICAqIFNpemVcclxuICAqL1xyXG4gIEBJbnB1dCgpIHNpemU6ICdjb21wYWN0JyB8ICdub3JtYWwnID0gJ25vcm1hbCc7XHJcblxyXG4gIC8qKlxyXG4gICAqIExhbmd1YWdlIGNvZGUuIEF1dG8tZGV0ZWN0cyB0aGUgdXNlcidzIGxhbmd1YWdlIGlmIHVuc3BlY2lmaWVkLlxyXG4gICAqL1xyXG4gIEBJbnB1dCgpIGhsOiBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICogRXhwaXJlZCBjYWxsYmFja1xyXG4gICovXHJcbiAgQE91dHB1dCgpIGV4cGlyZSA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcclxuXHJcbiAgLyoqXHJcbiAgKiBFcnJvciBjYWxsYmFja1xyXG4gICovXHJcbiAgQE91dHB1dCgpIGVycm9yID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xyXG5cclxuICBwcm90ZWN0ZWQgcmVjYXB0Y2hhVHlwZTogUmVDYXB0Y2hhVHlwZSA9IFJlQ2FwdGNoYVR5cGUuUmVDYXB0Y2hhMjtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcm90ZWN0ZWQgcmVuZGVyZXI6IFJlbmRlcmVyMixcclxuICAgIHByb3RlY3RlZCB6b25lOiBOZ1pvbmUsXHJcbiAgICBwcm90ZWN0ZWQgaW5qZWN0b3I6IEluamVjdG9yLFxyXG4gICAgQE9wdGlvbmFsKCkgcHJvdGVjdGVkIGdsb2JhbENvbmZpZzogTmd4Q2FwdGNoYUNvbmZpZyxcclxuICApIHtcclxuICAgIHN1cGVyKHJlbmRlcmVyLCB6b25lLCBpbmplY3RvciwgZ2xvYmFsQ29uZmlnKTtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgIHN1cGVyLm5nT25DaGFuZ2VzKGNoYW5nZXMpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICBzdXBlci5uZ09uRGVzdHJveSgpO1xyXG5cclxuICAgIHdpbmRvd1t0aGlzLndpbmRvd09uRXJyb3JDYWxsYmFja1Byb3BlcnR5XSA9IHt9O1xyXG4gICAgd2luZG93W3RoaXMud2luZG93T25FeHBpcmVDYWxsYmFja1Byb3BlcnR5XSA9IHt9O1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIGNhcHRjaGFTcGVjaWZpY1NldHVwKCk6IHZvaWQge1xyXG4gICAgdGhpcy5yZWdpc3RlckNhbGxiYWNrcygpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogR2V0cyByZUNhcHRjaGEgcHJvcGVydGllc1xyXG4gICovXHJcbiAgcHJvdGVjdGVkIGdldENhcHRjaGFQcm9wZXJ0aWVzKCk6IGFueSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAnc2l0ZWtleSc6IHRoaXMuX3NpdGVLZXksXHJcbiAgICAgICdjYWxsYmFjayc6IChyZXNwb25zZSkgPT4gdGhpcy56b25lLnJ1bigoKSA9PiB0aGlzLmhhbmRsZUNhbGxiYWNrKHJlc3BvbnNlKSksXHJcbiAgICAgICdleHBpcmVkLWNhbGxiYWNrJzogKCkgPT4gdGhpcy56b25lLnJ1bigoKSA9PiB0aGlzLmhhbmRsZUV4cGlyZUNhbGxiYWNrKCkpLFxyXG4gICAgICAnZXJyb3ItY2FsbGJhY2snOiAoKSA9PiB0aGlzLnpvbmUucnVuKCgpID0+IHRoaXMuaGFuZGxlRXJyb3JDYWxsYmFjaygpKSxcclxuICAgICAgJ3RoZW1lJzogdGhpcy50aGVtZSxcclxuICAgICAgJ3R5cGUnOiB0aGlzLnR5cGUsXHJcbiAgICAgICdzaXplJzogdGhpcy5zaXplLFxyXG4gICAgICAndGFiaW5kZXgnOiB0aGlzLnRhYkluZGV4XHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmVnaXN0ZXJzIGdsb2JhbCBjYWxsYmFja3NcclxuICAqL1xyXG4gIHByaXZhdGUgcmVnaXN0ZXJDYWxsYmFja3MoKTogdm9pZCB7XHJcbiAgICB3aW5kb3dbdGhpcy53aW5kb3dPbkVycm9yQ2FsbGJhY2tQcm9wZXJ0eV0gPSB0aGlzLmhhbmRsZUVycm9yQ2FsbGJhY2suYmluZCh0aGlzKTtcclxuICAgIHdpbmRvd1t0aGlzLndpbmRvd09uRXhwaXJlQ2FsbGJhY2tQcm9wZXJ0eV0gPSB0aGlzLmhhbmRsZUV4cGlyZUNhbGxiYWNrLmJpbmQodGhpcyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBIYW5kbGVzIGVycm9yIGNhbGxiYWNrXHJcbiAgKi9cclxuICBwcml2YXRlIGhhbmRsZUVycm9yQ2FsbGJhY2soKTogdm9pZCB7XHJcbiAgICB0aGlzLnpvbmUucnVuKCgpID0+IHtcclxuICAgICAgdGhpcy5vbkNoYW5nZShudWxsKTtcclxuICAgICAgdGhpcy5vblRvdWNoZWQobnVsbCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLmVycm9yLm5leHQoKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEhhbmRsZXMgZXhwaXJlZCBjYWxsYmFja1xyXG4gICAqL1xyXG4gIHByaXZhdGUgaGFuZGxlRXhwaXJlQ2FsbGJhY2soKTogdm9pZCB7XHJcbiAgICB0aGlzLmV4cGlyZS5uZXh0KCk7XHJcblxyXG4gICAgLy8gcmVzZXQgY2FwdGNoYSBvbiBleHBpcmUgY2FsbGJhY2tcclxuICAgIHRoaXMucmVzZXRDYXB0Y2hhKCk7XHJcbiAgfVxyXG59XHJcblxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkNoYW5nZXMsIE9wdGlvbmFsLCBSZW5kZXJlcjIsIFNpbXBsZUNoYW5nZXMsIE5nWm9uZSwgSW5qZWN0b3IsIGZvcndhcmRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IEJhc2VSZUNhcHRjaGFDb21wb25lbnQgfSBmcm9tICcuL2Jhc2UtcmVjYXB0Y2hhLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFJlQ2FwdGNoYVR5cGUgfSBmcm9tICcuL3JlY2FwdGNoYS10eXBlLmVudW0nO1xyXG5pbXBvcnQgeyBOZ3hDYXB0Y2hhQ29uZmlnIH0gZnJvbSAnLi9yZWNhcHRjaGEuY29uZmlnJztcclxuaW1wb3J0IHsgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICduZ3gtaW52aXNpYmxlLXJlY2FwdGNoYScsXHJcbiAgdGVtcGxhdGU6IGBcclxuICA8ZGl2ICNjYXB0Y2hhU2NyaXB0RWxlbT48L2Rpdj5cclxuICA8ZGl2ICNjYXB0Y2hhV3JhcHBlckVsZW0+PC9kaXY+YCxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIHtcclxuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXHJcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IEludmlzaWJsZVJlQ2FwdGNoYUNvbXBvbmVudCksXHJcbiAgICAgIG11bHRpOiB0cnVlLFxyXG4gICAgfVxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEludmlzaWJsZVJlQ2FwdGNoYUNvbXBvbmVudCBleHRlbmRzIEJhc2VSZUNhcHRjaGFDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xyXG5cclxuICAvKipcclxuICAgKiBUaGlzIHNpemUgcmVwcmVzZW50aW5nIGludmlzaWJsZSBjYXB0Y2hhXHJcbiAgICovXHJcbiAgcHJvdGVjdGVkIHJlYWRvbmx5IHNpemUgPSAnaW52aXNpYmxlJztcclxuXHJcbiAgLyoqXHJcbiAgICogQmFkZ2VcclxuICAgKi9cclxuICBASW5wdXQoKSBiYWRnZTogJ2JvdHRvbXJpZ2h0JyB8ICdib3R0b21sZWZ0JyB8ICdpbmxpbmUnID0gJ2JvdHRvbXJpZ2h0JztcclxuXHJcbiAgLyoqXHJcbiAgICogTGFuZ3VhZ2UgY29kZS4gQXV0by1kZXRlY3RzIHRoZSB1c2VyJ3MgbGFuZ3VhZ2UgaWYgdW5zcGVjaWZpZWQuXHJcbiAgICovXHJcbiAgQElucHV0KCkgaGw6IHN0cmluZztcclxuXHJcbiAgcHJvdGVjdGVkIHJlY2FwdGNoYVR5cGU6IFJlQ2FwdGNoYVR5cGUgPSBSZUNhcHRjaGFUeXBlLkludmlzaWJsZVJlQ2FwdGNoYTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcm90ZWN0ZWQgcmVuZGVyZXI6IFJlbmRlcmVyMixcclxuICAgIHByb3RlY3RlZCB6b25lOiBOZ1pvbmUsXHJcbiAgICBwcm90ZWN0ZWQgaW5qZWN0b3I6IEluamVjdG9yLFxyXG4gICAgQE9wdGlvbmFsKCkgcHJvdGVjdGVkIGdsb2JhbENvbmZpZzogTmd4Q2FwdGNoYUNvbmZpZyxcclxuICApIHtcclxuICAgIHN1cGVyKHJlbmRlcmVyLCB6b25lLCBpbmplY3RvciwgZ2xvYmFsQ29uZmlnKTtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgIHN1cGVyLm5nT25DaGFuZ2VzKGNoYW5nZXMpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUHJvZ3JhbWF0aWNhbGx5IGludm9rZSB0aGUgcmVDQVBUQ0hBIGNoZWNrLiBVc2VkIGlmIHRoZSBpbnZpc2libGUgcmVDQVBUQ0hBIGlzIG9uIGEgZGl2IGluc3RlYWQgb2YgYSBidXR0b24uXHJcbiAgICovXHJcbiAgZXhlY3V0ZSgpOiB2b2lkIHtcclxuICAgIC8vIGV4ZWN1dGUgY2FwdGNoYVxyXG4gICAgdGhpcy5yZUNhcHRjaGFBcGkuZXhlY3V0ZSh0aGlzLmNhcHRjaGFJZCk7XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgY2FwdGNoYVNwZWNpZmljU2V0dXAoKTogdm9pZCB7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAqIEdldHMgcmVDYXB0Y2hhIHByb3BlcnRpZXNcclxuICAqL1xyXG4gIHByb3RlY3RlZCBnZXRDYXB0Y2hhUHJvcGVydGllcygpOiBhbnkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgJ3NpdGVrZXknOiB0aGlzLl9zaXRlS2V5LFxyXG4gICAgICAnY2FsbGJhY2snOiAocmVzcG9uc2UpID0+IHRoaXMuem9uZS5ydW4oKCkgPT4gdGhpcy5oYW5kbGVDYWxsYmFjayhyZXNwb25zZSkpLFxyXG4gICAgICAnYmFkZ2UnOiB0aGlzLmJhZGdlLFxyXG4gICAgICAndHlwZSc6IHRoaXMudHlwZSxcclxuICAgICAgJ3RhYmluZGV4JzogdGhpcy50YWJJbmRleCxcclxuICAgICAgJ3NpemUnOiB0aGlzLnNpemVcclxuICAgIH07XHJcbiAgfVxyXG59XHJcblxyXG4iLCJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgSW52aXNpYmxlUmVDYXB0Y2hhQ29tcG9uZW50IH0gZnJvbSAnLi9pbnZpc2libGUtcmVjYXB0Y2hhLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBSZUNhcHRjaGEyQ29tcG9uZW50IH0gZnJvbSAnLi9yZWNhcHRjaGEtMi5jb21wb25lbnQnO1xuaW1wb3J0IHsgTmd4Q2FwdGNoYUNvbmZpZyB9IGZyb20gJy4vcmVjYXB0Y2hhLmNvbmZpZyc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgUmVDYXB0Y2hhMkNvbXBvbmVudCxcbiAgICBJbnZpc2libGVSZUNhcHRjaGFDb21wb25lbnRcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIFJlQ2FwdGNoYTJDb21wb25lbnQsXG4gICAgSW52aXNpYmxlUmVDYXB0Y2hhQ29tcG9uZW50XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgTmd4Q2FwdGNoYU1vZHVsZSB7XG5cbiAgc3RhdGljIGZvclJvb3QoY29uZmlnPzogTmd4Q2FwdGNoYUNvbmZpZyk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogTmd4Q2FwdGNoYU1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICB7XG4gICAgICAgICAgcHJvdmlkZTogTmd4Q2FwdGNoYUNvbmZpZyxcbiAgICAgICAgICB1c2VWYWx1ZTogY29uZmlnLFxuICAgICAgICB9XG4gICAgICBdXG4gICAgfTtcbiAgfVxufVxuXG5cbiJdLCJuYW1lcyI6WyJ0c2xpYl8xLl9fZXh0ZW5kcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7SUFFSSxxQkFBa0I7SUFDbEIsYUFBVTs7NEJBRFYsa0JBQWtCOzRCQUNsQixVQUFVOzs7Ozs7QUNIZDs7OztJQXVJSSxnQ0FDYyxRQUFtQixFQUNuQixJQUFZLEVBQ1osUUFBa0IsRUFDbEIsWUFBK0I7UUFIL0IsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNuQixTQUFJLEdBQUosSUFBSSxDQUFRO1FBQ1osYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUNsQixpQkFBWSxHQUFaLFlBQVksQ0FBbUI7OEJBakhwQixLQUFLOzs7OzRDQUtvQixzQkFBc0IsR0FBRyxJQUFJLENBQUMscUJBQXFCLEVBQUU7Ozs7dUNBSzFELFlBQVk7Ozs7aUNBS2xCLGlCQUFpQjs7OztvQkFnQnJCLE9BQU87Ozs7d0JBVXRCLENBQUM7Ozs7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

/***/ }),

/***/ "./src/app/core/guards/auth.guard.ts":
/*!*******************************************!*\
  !*** ./src/app/core/guards/auth.guard.ts ***!
  \*******************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/fesm5/ngxs-store.js");
/* harmony import */ var _app_core_state_auth_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/core/state/auth.state */ "./src/app/core/state/auth.state.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthGuard = /** @class */ (function () {
    function AuthGuard(router, store) {
        this.router = router;
        this.store = store;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        var token = this.store.selectSnapshot(_app_core_state_auth_state__WEBPACK_IMPORTED_MODULE_3__["AuthState"].token);
        if (token) {
            return true;
        }
        this.router.navigate(['auth/login'], { queryParams: { callback: state.url } });
        return false;
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/core/guards/non-auth.guard.ts":
/*!***********************************************!*\
  !*** ./src/app/core/guards/non-auth.guard.ts ***!
  \***********************************************/
/*! exports provided: NonAuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NonAuthGuard", function() { return NonAuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/fesm5/ngxs-store.js");
/* harmony import */ var _app_core_state_auth_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/core/state/auth.state */ "./src/app/core/state/auth.state.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NonAuthGuard = /** @class */ (function () {
    function NonAuthGuard(router, store) {
        this.router = router;
        this.store = store;
    }
    NonAuthGuard.prototype.canActivate = function (next, state) {
        var token = this.store.selectSnapshot(_app_core_state_auth_state__WEBPACK_IMPORTED_MODULE_3__["AuthState"].token);
        if (token) {
            this.router.navigate(['/app']);
            return false;
        }
        return true;
    };
    NonAuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], NonAuthGuard);
    return NonAuthGuard;
}());



/***/ }),

/***/ "./src/app/pages/auth/auth-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/auth/auth-routing.module.ts ***!
  \***************************************************/
/*! exports provided: AuthRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthRoutingModule", function() { return AuthRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_pages_auth_auth_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/pages/auth/auth.component */ "./src/app/pages/auth/auth.component.ts");
/* harmony import */ var _app_core_guards_non_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/core/guards/non-auth.guard */ "./src/app/core/guards/non-auth.guard.ts");
/* harmony import */ var _app_core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/core/guards/auth.guard */ "./src/app/core/guards/auth.guard.ts");
/* harmony import */ var _app_pages_auth_pages_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/pages/auth/pages/login/login.component */ "./src/app/pages/auth/pages/login/login.component.ts");
/* harmony import */ var _app_pages_auth_pages_signup_signup_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/pages/auth/pages/signup/signup.component */ "./src/app/pages/auth/pages/signup/signup.component.ts");
/* harmony import */ var _app_pages_auth_pages_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/pages/auth/pages/forgot-password/forgot-password.component */ "./src/app/pages/auth/pages/forgot-password/forgot-password.component.ts");
/* harmony import */ var _app_pages_auth_pages_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @app/pages/auth/pages/change-password/change-password.component */ "./src/app/pages/auth/pages/change-password/change-password.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    {
        path: '',
        component: _app_pages_auth_auth_component__WEBPACK_IMPORTED_MODULE_2__["AuthComponent"],
        children: [
            { path: 'login', component: _app_pages_auth_pages_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"], canActivate: [_app_core_guards_non_auth_guard__WEBPACK_IMPORTED_MODULE_3__["NonAuthGuard"]] },
            { path: 'register', component: _app_pages_auth_pages_signup_signup_component__WEBPACK_IMPORTED_MODULE_6__["SignupComponent"], canActivate: [_app_core_guards_non_auth_guard__WEBPACK_IMPORTED_MODULE_3__["NonAuthGuard"]] },
            { path: 'password_reset', component: _app_pages_auth_pages_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_7__["ForgotPasswordComponent"], canActivate: [_app_core_guards_non_auth_guard__WEBPACK_IMPORTED_MODULE_3__["NonAuthGuard"]] },
            { path: 'change_password', component: _app_pages_auth_pages_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_8__["ChangePasswordComponent"], canActivate: [_app_core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]] }
        ]
    }
];
var AuthRoutingModule = /** @class */ (function () {
    function AuthRoutingModule() {
    }
    AuthRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AuthRoutingModule);
    return AuthRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/auth/auth.component.html":
/*!************************************************!*\
  !*** ./src/app/pages/auth/auth.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/pages/auth/auth.component.scss":
/*!************************************************!*\
  !*** ./src/app/pages/auth/auth.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*!\n * Bootstrap Grid v4.1.3 (https://getbootstrap.com/)\n * Copyright 2011-2018 The Bootstrap Authors\n * Copyright 2011-2018 Twitter, Inc.\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)\n */\n@-ms-viewport {\n  width: device-width; }\nhtml {\n  box-sizing: border-box;\n  -ms-overflow-style: scrollbar; }\n*,\n*::before,\n*::after {\n  box-sizing: inherit; }\n.container {\n  width: 100%;\n  padding-right: 15px;\n  padding-left: 15px;\n  margin-right: auto;\n  margin-left: auto; }\n@media (min-width: 576px) {\n    .container {\n      max-width: 540px; } }\n@media (min-width: 768px) {\n    .container {\n      max-width: 720px; } }\n@media (min-width: 992px) {\n    .container {\n      max-width: 960px; } }\n@media (min-width: 1200px) {\n    .container {\n      max-width: 1140px; } }\n.container-fluid {\n  width: 100%;\n  padding-right: 15px;\n  padding-left: 15px;\n  margin-right: auto;\n  margin-left: auto; }\n.row {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-flex-wrap: wrap;\n      -ms-flex-wrap: wrap;\n          flex-wrap: wrap;\n  margin-right: -15px;\n  margin-left: -15px; }\n.no-gutters {\n  margin-right: 0;\n  margin-left: 0; }\n.no-gutters > .col,\n  .no-gutters > [class*=\"col-\"] {\n    padding-right: 0;\n    padding-left: 0; }\n.col-1, .col-2, .col-3, .col-4, .col-5, .col-6, .col-7, .col-8, .col-9, .col-10, .col-11, .col-12, .col,\n.col-auto, .col-sm-1, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-10, .col-sm-11, .col-sm-12, .col-sm,\n.col-sm-auto, .col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-10, .col-md-11, .col-md-12, .col-md,\n.col-md-auto, .col-lg-1, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-10, .col-lg-11, .col-lg-12, .col-lg,\n.col-lg-auto, .col-xl-1, .col-xl-2, .col-xl-3, .col-xl-4, .col-xl-5, .col-xl-6, .col-xl-7, .col-xl-8, .col-xl-9, .col-xl-10, .col-xl-11, .col-xl-12, .col-xl,\n.col-xl-auto {\n  position: relative;\n  width: 100%;\n  min-height: 1px;\n  padding-right: 15px;\n  padding-left: 15px; }\n.col {\n  -webkit-flex-basis: 0;\n      -ms-flex-preferred-size: 0;\n          flex-basis: 0;\n  -webkit-box-flex: 1;\n  -webkit-flex-grow: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  max-width: 100%; }\n.col-auto {\n  -webkit-box-flex: 0;\n  -webkit-flex: 0 0 auto;\n      -ms-flex: 0 0 auto;\n          flex: 0 0 auto;\n  width: auto;\n  max-width: none; }\n.col-1 {\n  -webkit-box-flex: 0;\n  -webkit-flex: 0 0 8.33333333%;\n      -ms-flex: 0 0 8.33333333%;\n          flex: 0 0 8.33333333%;\n  max-width: 8.33333333%; }\n.col-2 {\n  -webkit-box-flex: 0;\n  -webkit-flex: 0 0 16.66666667%;\n      -ms-flex: 0 0 16.66666667%;\n          flex: 0 0 16.66666667%;\n  max-width: 16.66666667%; }\n.col-3 {\n  -webkit-box-flex: 0;\n  -webkit-flex: 0 0 25%;\n      -ms-flex: 0 0 25%;\n          flex: 0 0 25%;\n  max-width: 25%; }\n.col-4 {\n  -webkit-box-flex: 0;\n  -webkit-flex: 0 0 33.33333333%;\n      -ms-flex: 0 0 33.33333333%;\n          flex: 0 0 33.33333333%;\n  max-width: 33.33333333%; }\n.col-5 {\n  -webkit-box-flex: 0;\n  -webkit-flex: 0 0 41.66666667%;\n      -ms-flex: 0 0 41.66666667%;\n          flex: 0 0 41.66666667%;\n  max-width: 41.66666667%; }\n.col-6 {\n  -webkit-box-flex: 0;\n  -webkit-flex: 0 0 50%;\n      -ms-flex: 0 0 50%;\n          flex: 0 0 50%;\n  max-width: 50%; }\n.col-7 {\n  -webkit-box-flex: 0;\n  -webkit-flex: 0 0 58.33333333%;\n      -ms-flex: 0 0 58.33333333%;\n          flex: 0 0 58.33333333%;\n  max-width: 58.33333333%; }\n.col-8 {\n  -webkit-box-flex: 0;\n  -webkit-flex: 0 0 66.66666667%;\n      -ms-flex: 0 0 66.66666667%;\n          flex: 0 0 66.66666667%;\n  max-width: 66.66666667%; }\n.col-9 {\n  -webkit-box-flex: 0;\n  -webkit-flex: 0 0 75%;\n      -ms-flex: 0 0 75%;\n          flex: 0 0 75%;\n  max-width: 75%; }\n.col-10 {\n  -webkit-box-flex: 0;\n  -webkit-flex: 0 0 83.33333333%;\n      -ms-flex: 0 0 83.33333333%;\n          flex: 0 0 83.33333333%;\n  max-width: 83.33333333%; }\n.col-11 {\n  -webkit-box-flex: 0;\n  -webkit-flex: 0 0 91.66666667%;\n      -ms-flex: 0 0 91.66666667%;\n          flex: 0 0 91.66666667%;\n  max-width: 91.66666667%; }\n.col-12 {\n  -webkit-box-flex: 0;\n  -webkit-flex: 0 0 100%;\n      -ms-flex: 0 0 100%;\n          flex: 0 0 100%;\n  max-width: 100%; }\n.order-first {\n  -webkit-box-ordinal-group: 0;\n  -webkit-order: -1;\n      -ms-flex-order: -1;\n          order: -1; }\n.order-last {\n  -webkit-box-ordinal-group: 14;\n  -webkit-order: 13;\n      -ms-flex-order: 13;\n          order: 13; }\n.order-0 {\n  -webkit-box-ordinal-group: 1;\n  -webkit-order: 0;\n      -ms-flex-order: 0;\n          order: 0; }\n.order-1 {\n  -webkit-box-ordinal-group: 2;\n  -webkit-order: 1;\n      -ms-flex-order: 1;\n          order: 1; }\n.order-2 {\n  -webkit-box-ordinal-group: 3;\n  -webkit-order: 2;\n      -ms-flex-order: 2;\n          order: 2; }\n.order-3 {\n  -webkit-box-ordinal-group: 4;\n  -webkit-order: 3;\n      -ms-flex-order: 3;\n          order: 3; }\n.order-4 {\n  -webkit-box-ordinal-group: 5;\n  -webkit-order: 4;\n      -ms-flex-order: 4;\n          order: 4; }\n.order-5 {\n  -webkit-box-ordinal-group: 6;\n  -webkit-order: 5;\n      -ms-flex-order: 5;\n          order: 5; }\n.order-6 {\n  -webkit-box-ordinal-group: 7;\n  -webkit-order: 6;\n      -ms-flex-order: 6;\n          order: 6; }\n.order-7 {\n  -webkit-box-ordinal-group: 8;\n  -webkit-order: 7;\n      -ms-flex-order: 7;\n          order: 7; }\n.order-8 {\n  -webkit-box-ordinal-group: 9;\n  -webkit-order: 8;\n      -ms-flex-order: 8;\n          order: 8; }\n.order-9 {\n  -webkit-box-ordinal-group: 10;\n  -webkit-order: 9;\n      -ms-flex-order: 9;\n          order: 9; }\n.order-10 {\n  -webkit-box-ordinal-group: 11;\n  -webkit-order: 10;\n      -ms-flex-order: 10;\n          order: 10; }\n.order-11 {\n  -webkit-box-ordinal-group: 12;\n  -webkit-order: 11;\n      -ms-flex-order: 11;\n          order: 11; }\n.order-12 {\n  -webkit-box-ordinal-group: 13;\n  -webkit-order: 12;\n      -ms-flex-order: 12;\n          order: 12; }\n.offset-1 {\n  margin-left: 8.33333333%; }\n.offset-2 {\n  margin-left: 16.66666667%; }\n.offset-3 {\n  margin-left: 25%; }\n.offset-4 {\n  margin-left: 33.33333333%; }\n.offset-5 {\n  margin-left: 41.66666667%; }\n.offset-6 {\n  margin-left: 50%; }\n.offset-7 {\n  margin-left: 58.33333333%; }\n.offset-8 {\n  margin-left: 66.66666667%; }\n.offset-9 {\n  margin-left: 75%; }\n.offset-10 {\n  margin-left: 83.33333333%; }\n.offset-11 {\n  margin-left: 91.66666667%; }\n@media (min-width: 576px) {\n  .col-sm {\n    -webkit-flex-basis: 0;\n        -ms-flex-preferred-size: 0;\n            flex-basis: 0;\n    -webkit-box-flex: 1;\n    -webkit-flex-grow: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1;\n    max-width: 100%; }\n  .col-sm-auto {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 auto;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n    width: auto;\n    max-width: none; }\n  .col-sm-1 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 8.33333333%;\n        -ms-flex: 0 0 8.33333333%;\n            flex: 0 0 8.33333333%;\n    max-width: 8.33333333%; }\n  .col-sm-2 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 16.66666667%;\n        -ms-flex: 0 0 16.66666667%;\n            flex: 0 0 16.66666667%;\n    max-width: 16.66666667%; }\n  .col-sm-3 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 25%;\n        -ms-flex: 0 0 25%;\n            flex: 0 0 25%;\n    max-width: 25%; }\n  .col-sm-4 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 33.33333333%;\n        -ms-flex: 0 0 33.33333333%;\n            flex: 0 0 33.33333333%;\n    max-width: 33.33333333%; }\n  .col-sm-5 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 41.66666667%;\n        -ms-flex: 0 0 41.66666667%;\n            flex: 0 0 41.66666667%;\n    max-width: 41.66666667%; }\n  .col-sm-6 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 50%;\n        -ms-flex: 0 0 50%;\n            flex: 0 0 50%;\n    max-width: 50%; }\n  .col-sm-7 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 58.33333333%;\n        -ms-flex: 0 0 58.33333333%;\n            flex: 0 0 58.33333333%;\n    max-width: 58.33333333%; }\n  .col-sm-8 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 66.66666667%;\n        -ms-flex: 0 0 66.66666667%;\n            flex: 0 0 66.66666667%;\n    max-width: 66.66666667%; }\n  .col-sm-9 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 75%;\n        -ms-flex: 0 0 75%;\n            flex: 0 0 75%;\n    max-width: 75%; }\n  .col-sm-10 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 83.33333333%;\n        -ms-flex: 0 0 83.33333333%;\n            flex: 0 0 83.33333333%;\n    max-width: 83.33333333%; }\n  .col-sm-11 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 91.66666667%;\n        -ms-flex: 0 0 91.66666667%;\n            flex: 0 0 91.66666667%;\n    max-width: 91.66666667%; }\n  .col-sm-12 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 100%;\n        -ms-flex: 0 0 100%;\n            flex: 0 0 100%;\n    max-width: 100%; }\n  .order-sm-first {\n    -webkit-box-ordinal-group: 0;\n    -webkit-order: -1;\n        -ms-flex-order: -1;\n            order: -1; }\n  .order-sm-last {\n    -webkit-box-ordinal-group: 14;\n    -webkit-order: 13;\n        -ms-flex-order: 13;\n            order: 13; }\n  .order-sm-0 {\n    -webkit-box-ordinal-group: 1;\n    -webkit-order: 0;\n        -ms-flex-order: 0;\n            order: 0; }\n  .order-sm-1 {\n    -webkit-box-ordinal-group: 2;\n    -webkit-order: 1;\n        -ms-flex-order: 1;\n            order: 1; }\n  .order-sm-2 {\n    -webkit-box-ordinal-group: 3;\n    -webkit-order: 2;\n        -ms-flex-order: 2;\n            order: 2; }\n  .order-sm-3 {\n    -webkit-box-ordinal-group: 4;\n    -webkit-order: 3;\n        -ms-flex-order: 3;\n            order: 3; }\n  .order-sm-4 {\n    -webkit-box-ordinal-group: 5;\n    -webkit-order: 4;\n        -ms-flex-order: 4;\n            order: 4; }\n  .order-sm-5 {\n    -webkit-box-ordinal-group: 6;\n    -webkit-order: 5;\n        -ms-flex-order: 5;\n            order: 5; }\n  .order-sm-6 {\n    -webkit-box-ordinal-group: 7;\n    -webkit-order: 6;\n        -ms-flex-order: 6;\n            order: 6; }\n  .order-sm-7 {\n    -webkit-box-ordinal-group: 8;\n    -webkit-order: 7;\n        -ms-flex-order: 7;\n            order: 7; }\n  .order-sm-8 {\n    -webkit-box-ordinal-group: 9;\n    -webkit-order: 8;\n        -ms-flex-order: 8;\n            order: 8; }\n  .order-sm-9 {\n    -webkit-box-ordinal-group: 10;\n    -webkit-order: 9;\n        -ms-flex-order: 9;\n            order: 9; }\n  .order-sm-10 {\n    -webkit-box-ordinal-group: 11;\n    -webkit-order: 10;\n        -ms-flex-order: 10;\n            order: 10; }\n  .order-sm-11 {\n    -webkit-box-ordinal-group: 12;\n    -webkit-order: 11;\n        -ms-flex-order: 11;\n            order: 11; }\n  .order-sm-12 {\n    -webkit-box-ordinal-group: 13;\n    -webkit-order: 12;\n        -ms-flex-order: 12;\n            order: 12; }\n  .offset-sm-0 {\n    margin-left: 0; }\n  .offset-sm-1 {\n    margin-left: 8.33333333%; }\n  .offset-sm-2 {\n    margin-left: 16.66666667%; }\n  .offset-sm-3 {\n    margin-left: 25%; }\n  .offset-sm-4 {\n    margin-left: 33.33333333%; }\n  .offset-sm-5 {\n    margin-left: 41.66666667%; }\n  .offset-sm-6 {\n    margin-left: 50%; }\n  .offset-sm-7 {\n    margin-left: 58.33333333%; }\n  .offset-sm-8 {\n    margin-left: 66.66666667%; }\n  .offset-sm-9 {\n    margin-left: 75%; }\n  .offset-sm-10 {\n    margin-left: 83.33333333%; }\n  .offset-sm-11 {\n    margin-left: 91.66666667%; } }\n@media (min-width: 768px) {\n  .col-md {\n    -webkit-flex-basis: 0;\n        -ms-flex-preferred-size: 0;\n            flex-basis: 0;\n    -webkit-box-flex: 1;\n    -webkit-flex-grow: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1;\n    max-width: 100%; }\n  .col-md-auto {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 auto;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n    width: auto;\n    max-width: none; }\n  .col-md-1 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 8.33333333%;\n        -ms-flex: 0 0 8.33333333%;\n            flex: 0 0 8.33333333%;\n    max-width: 8.33333333%; }\n  .col-md-2 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 16.66666667%;\n        -ms-flex: 0 0 16.66666667%;\n            flex: 0 0 16.66666667%;\n    max-width: 16.66666667%; }\n  .col-md-3 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 25%;\n        -ms-flex: 0 0 25%;\n            flex: 0 0 25%;\n    max-width: 25%; }\n  .col-md-4 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 33.33333333%;\n        -ms-flex: 0 0 33.33333333%;\n            flex: 0 0 33.33333333%;\n    max-width: 33.33333333%; }\n  .col-md-5 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 41.66666667%;\n        -ms-flex: 0 0 41.66666667%;\n            flex: 0 0 41.66666667%;\n    max-width: 41.66666667%; }\n  .col-md-6 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 50%;\n        -ms-flex: 0 0 50%;\n            flex: 0 0 50%;\n    max-width: 50%; }\n  .col-md-7 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 58.33333333%;\n        -ms-flex: 0 0 58.33333333%;\n            flex: 0 0 58.33333333%;\n    max-width: 58.33333333%; }\n  .col-md-8 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 66.66666667%;\n        -ms-flex: 0 0 66.66666667%;\n            flex: 0 0 66.66666667%;\n    max-width: 66.66666667%; }\n  .col-md-9 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 75%;\n        -ms-flex: 0 0 75%;\n            flex: 0 0 75%;\n    max-width: 75%; }\n  .col-md-10 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 83.33333333%;\n        -ms-flex: 0 0 83.33333333%;\n            flex: 0 0 83.33333333%;\n    max-width: 83.33333333%; }\n  .col-md-11 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 91.66666667%;\n        -ms-flex: 0 0 91.66666667%;\n            flex: 0 0 91.66666667%;\n    max-width: 91.66666667%; }\n  .col-md-12 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 100%;\n        -ms-flex: 0 0 100%;\n            flex: 0 0 100%;\n    max-width: 100%; }\n  .order-md-first {\n    -webkit-box-ordinal-group: 0;\n    -webkit-order: -1;\n        -ms-flex-order: -1;\n            order: -1; }\n  .order-md-last {\n    -webkit-box-ordinal-group: 14;\n    -webkit-order: 13;\n        -ms-flex-order: 13;\n            order: 13; }\n  .order-md-0 {\n    -webkit-box-ordinal-group: 1;\n    -webkit-order: 0;\n        -ms-flex-order: 0;\n            order: 0; }\n  .order-md-1 {\n    -webkit-box-ordinal-group: 2;\n    -webkit-order: 1;\n        -ms-flex-order: 1;\n            order: 1; }\n  .order-md-2 {\n    -webkit-box-ordinal-group: 3;\n    -webkit-order: 2;\n        -ms-flex-order: 2;\n            order: 2; }\n  .order-md-3 {\n    -webkit-box-ordinal-group: 4;\n    -webkit-order: 3;\n        -ms-flex-order: 3;\n            order: 3; }\n  .order-md-4 {\n    -webkit-box-ordinal-group: 5;\n    -webkit-order: 4;\n        -ms-flex-order: 4;\n            order: 4; }\n  .order-md-5 {\n    -webkit-box-ordinal-group: 6;\n    -webkit-order: 5;\n        -ms-flex-order: 5;\n            order: 5; }\n  .order-md-6 {\n    -webkit-box-ordinal-group: 7;\n    -webkit-order: 6;\n        -ms-flex-order: 6;\n            order: 6; }\n  .order-md-7 {\n    -webkit-box-ordinal-group: 8;\n    -webkit-order: 7;\n        -ms-flex-order: 7;\n            order: 7; }\n  .order-md-8 {\n    -webkit-box-ordinal-group: 9;\n    -webkit-order: 8;\n        -ms-flex-order: 8;\n            order: 8; }\n  .order-md-9 {\n    -webkit-box-ordinal-group: 10;\n    -webkit-order: 9;\n        -ms-flex-order: 9;\n            order: 9; }\n  .order-md-10 {\n    -webkit-box-ordinal-group: 11;\n    -webkit-order: 10;\n        -ms-flex-order: 10;\n            order: 10; }\n  .order-md-11 {\n    -webkit-box-ordinal-group: 12;\n    -webkit-order: 11;\n        -ms-flex-order: 11;\n            order: 11; }\n  .order-md-12 {\n    -webkit-box-ordinal-group: 13;\n    -webkit-order: 12;\n        -ms-flex-order: 12;\n            order: 12; }\n  .offset-md-0 {\n    margin-left: 0; }\n  .offset-md-1 {\n    margin-left: 8.33333333%; }\n  .offset-md-2 {\n    margin-left: 16.66666667%; }\n  .offset-md-3 {\n    margin-left: 25%; }\n  .offset-md-4 {\n    margin-left: 33.33333333%; }\n  .offset-md-5 {\n    margin-left: 41.66666667%; }\n  .offset-md-6 {\n    margin-left: 50%; }\n  .offset-md-7 {\n    margin-left: 58.33333333%; }\n  .offset-md-8 {\n    margin-left: 66.66666667%; }\n  .offset-md-9 {\n    margin-left: 75%; }\n  .offset-md-10 {\n    margin-left: 83.33333333%; }\n  .offset-md-11 {\n    margin-left: 91.66666667%; } }\n@media (min-width: 992px) {\n  .col-lg {\n    -webkit-flex-basis: 0;\n        -ms-flex-preferred-size: 0;\n            flex-basis: 0;\n    -webkit-box-flex: 1;\n    -webkit-flex-grow: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1;\n    max-width: 100%; }\n  .col-lg-auto {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 auto;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n    width: auto;\n    max-width: none; }\n  .col-lg-1 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 8.33333333%;\n        -ms-flex: 0 0 8.33333333%;\n            flex: 0 0 8.33333333%;\n    max-width: 8.33333333%; }\n  .col-lg-2 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 16.66666667%;\n        -ms-flex: 0 0 16.66666667%;\n            flex: 0 0 16.66666667%;\n    max-width: 16.66666667%; }\n  .col-lg-3 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 25%;\n        -ms-flex: 0 0 25%;\n            flex: 0 0 25%;\n    max-width: 25%; }\n  .col-lg-4 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 33.33333333%;\n        -ms-flex: 0 0 33.33333333%;\n            flex: 0 0 33.33333333%;\n    max-width: 33.33333333%; }\n  .col-lg-5 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 41.66666667%;\n        -ms-flex: 0 0 41.66666667%;\n            flex: 0 0 41.66666667%;\n    max-width: 41.66666667%; }\n  .col-lg-6 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 50%;\n        -ms-flex: 0 0 50%;\n            flex: 0 0 50%;\n    max-width: 50%; }\n  .col-lg-7 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 58.33333333%;\n        -ms-flex: 0 0 58.33333333%;\n            flex: 0 0 58.33333333%;\n    max-width: 58.33333333%; }\n  .col-lg-8 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 66.66666667%;\n        -ms-flex: 0 0 66.66666667%;\n            flex: 0 0 66.66666667%;\n    max-width: 66.66666667%; }\n  .col-lg-9 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 75%;\n        -ms-flex: 0 0 75%;\n            flex: 0 0 75%;\n    max-width: 75%; }\n  .col-lg-10 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 83.33333333%;\n        -ms-flex: 0 0 83.33333333%;\n            flex: 0 0 83.33333333%;\n    max-width: 83.33333333%; }\n  .col-lg-11 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 91.66666667%;\n        -ms-flex: 0 0 91.66666667%;\n            flex: 0 0 91.66666667%;\n    max-width: 91.66666667%; }\n  .col-lg-12 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 100%;\n        -ms-flex: 0 0 100%;\n            flex: 0 0 100%;\n    max-width: 100%; }\n  .order-lg-first {\n    -webkit-box-ordinal-group: 0;\n    -webkit-order: -1;\n        -ms-flex-order: -1;\n            order: -1; }\n  .order-lg-last {\n    -webkit-box-ordinal-group: 14;\n    -webkit-order: 13;\n        -ms-flex-order: 13;\n            order: 13; }\n  .order-lg-0 {\n    -webkit-box-ordinal-group: 1;\n    -webkit-order: 0;\n        -ms-flex-order: 0;\n            order: 0; }\n  .order-lg-1 {\n    -webkit-box-ordinal-group: 2;\n    -webkit-order: 1;\n        -ms-flex-order: 1;\n            order: 1; }\n  .order-lg-2 {\n    -webkit-box-ordinal-group: 3;\n    -webkit-order: 2;\n        -ms-flex-order: 2;\n            order: 2; }\n  .order-lg-3 {\n    -webkit-box-ordinal-group: 4;\n    -webkit-order: 3;\n        -ms-flex-order: 3;\n            order: 3; }\n  .order-lg-4 {\n    -webkit-box-ordinal-group: 5;\n    -webkit-order: 4;\n        -ms-flex-order: 4;\n            order: 4; }\n  .order-lg-5 {\n    -webkit-box-ordinal-group: 6;\n    -webkit-order: 5;\n        -ms-flex-order: 5;\n            order: 5; }\n  .order-lg-6 {\n    -webkit-box-ordinal-group: 7;\n    -webkit-order: 6;\n        -ms-flex-order: 6;\n            order: 6; }\n  .order-lg-7 {\n    -webkit-box-ordinal-group: 8;\n    -webkit-order: 7;\n        -ms-flex-order: 7;\n            order: 7; }\n  .order-lg-8 {\n    -webkit-box-ordinal-group: 9;\n    -webkit-order: 8;\n        -ms-flex-order: 8;\n            order: 8; }\n  .order-lg-9 {\n    -webkit-box-ordinal-group: 10;\n    -webkit-order: 9;\n        -ms-flex-order: 9;\n            order: 9; }\n  .order-lg-10 {\n    -webkit-box-ordinal-group: 11;\n    -webkit-order: 10;\n        -ms-flex-order: 10;\n            order: 10; }\n  .order-lg-11 {\n    -webkit-box-ordinal-group: 12;\n    -webkit-order: 11;\n        -ms-flex-order: 11;\n            order: 11; }\n  .order-lg-12 {\n    -webkit-box-ordinal-group: 13;\n    -webkit-order: 12;\n        -ms-flex-order: 12;\n            order: 12; }\n  .offset-lg-0 {\n    margin-left: 0; }\n  .offset-lg-1 {\n    margin-left: 8.33333333%; }\n  .offset-lg-2 {\n    margin-left: 16.66666667%; }\n  .offset-lg-3 {\n    margin-left: 25%; }\n  .offset-lg-4 {\n    margin-left: 33.33333333%; }\n  .offset-lg-5 {\n    margin-left: 41.66666667%; }\n  .offset-lg-6 {\n    margin-left: 50%; }\n  .offset-lg-7 {\n    margin-left: 58.33333333%; }\n  .offset-lg-8 {\n    margin-left: 66.66666667%; }\n  .offset-lg-9 {\n    margin-left: 75%; }\n  .offset-lg-10 {\n    margin-left: 83.33333333%; }\n  .offset-lg-11 {\n    margin-left: 91.66666667%; } }\n@media (min-width: 1200px) {\n  .col-xl {\n    -webkit-flex-basis: 0;\n        -ms-flex-preferred-size: 0;\n            flex-basis: 0;\n    -webkit-box-flex: 1;\n    -webkit-flex-grow: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1;\n    max-width: 100%; }\n  .col-xl-auto {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 auto;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n    width: auto;\n    max-width: none; }\n  .col-xl-1 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 8.33333333%;\n        -ms-flex: 0 0 8.33333333%;\n            flex: 0 0 8.33333333%;\n    max-width: 8.33333333%; }\n  .col-xl-2 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 16.66666667%;\n        -ms-flex: 0 0 16.66666667%;\n            flex: 0 0 16.66666667%;\n    max-width: 16.66666667%; }\n  .col-xl-3 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 25%;\n        -ms-flex: 0 0 25%;\n            flex: 0 0 25%;\n    max-width: 25%; }\n  .col-xl-4 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 33.33333333%;\n        -ms-flex: 0 0 33.33333333%;\n            flex: 0 0 33.33333333%;\n    max-width: 33.33333333%; }\n  .col-xl-5 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 41.66666667%;\n        -ms-flex: 0 0 41.66666667%;\n            flex: 0 0 41.66666667%;\n    max-width: 41.66666667%; }\n  .col-xl-6 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 50%;\n        -ms-flex: 0 0 50%;\n            flex: 0 0 50%;\n    max-width: 50%; }\n  .col-xl-7 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 58.33333333%;\n        -ms-flex: 0 0 58.33333333%;\n            flex: 0 0 58.33333333%;\n    max-width: 58.33333333%; }\n  .col-xl-8 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 66.66666667%;\n        -ms-flex: 0 0 66.66666667%;\n            flex: 0 0 66.66666667%;\n    max-width: 66.66666667%; }\n  .col-xl-9 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 75%;\n        -ms-flex: 0 0 75%;\n            flex: 0 0 75%;\n    max-width: 75%; }\n  .col-xl-10 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 83.33333333%;\n        -ms-flex: 0 0 83.33333333%;\n            flex: 0 0 83.33333333%;\n    max-width: 83.33333333%; }\n  .col-xl-11 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 91.66666667%;\n        -ms-flex: 0 0 91.66666667%;\n            flex: 0 0 91.66666667%;\n    max-width: 91.66666667%; }\n  .col-xl-12 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 100%;\n        -ms-flex: 0 0 100%;\n            flex: 0 0 100%;\n    max-width: 100%; }\n  .order-xl-first {\n    -webkit-box-ordinal-group: 0;\n    -webkit-order: -1;\n        -ms-flex-order: -1;\n            order: -1; }\n  .order-xl-last {\n    -webkit-box-ordinal-group: 14;\n    -webkit-order: 13;\n        -ms-flex-order: 13;\n            order: 13; }\n  .order-xl-0 {\n    -webkit-box-ordinal-group: 1;\n    -webkit-order: 0;\n        -ms-flex-order: 0;\n            order: 0; }\n  .order-xl-1 {\n    -webkit-box-ordinal-group: 2;\n    -webkit-order: 1;\n        -ms-flex-order: 1;\n            order: 1; }\n  .order-xl-2 {\n    -webkit-box-ordinal-group: 3;\n    -webkit-order: 2;\n        -ms-flex-order: 2;\n            order: 2; }\n  .order-xl-3 {\n    -webkit-box-ordinal-group: 4;\n    -webkit-order: 3;\n        -ms-flex-order: 3;\n            order: 3; }\n  .order-xl-4 {\n    -webkit-box-ordinal-group: 5;\n    -webkit-order: 4;\n        -ms-flex-order: 4;\n            order: 4; }\n  .order-xl-5 {\n    -webkit-box-ordinal-group: 6;\n    -webkit-order: 5;\n        -ms-flex-order: 5;\n            order: 5; }\n  .order-xl-6 {\n    -webkit-box-ordinal-group: 7;\n    -webkit-order: 6;\n        -ms-flex-order: 6;\n            order: 6; }\n  .order-xl-7 {\n    -webkit-box-ordinal-group: 8;\n    -webkit-order: 7;\n        -ms-flex-order: 7;\n            order: 7; }\n  .order-xl-8 {\n    -webkit-box-ordinal-group: 9;\n    -webkit-order: 8;\n        -ms-flex-order: 8;\n            order: 8; }\n  .order-xl-9 {\n    -webkit-box-ordinal-group: 10;\n    -webkit-order: 9;\n        -ms-flex-order: 9;\n            order: 9; }\n  .order-xl-10 {\n    -webkit-box-ordinal-group: 11;\n    -webkit-order: 10;\n        -ms-flex-order: 10;\n            order: 10; }\n  .order-xl-11 {\n    -webkit-box-ordinal-group: 12;\n    -webkit-order: 11;\n        -ms-flex-order: 11;\n            order: 11; }\n  .order-xl-12 {\n    -webkit-box-ordinal-group: 13;\n    -webkit-order: 12;\n        -ms-flex-order: 12;\n            order: 12; }\n  .offset-xl-0 {\n    margin-left: 0; }\n  .offset-xl-1 {\n    margin-left: 8.33333333%; }\n  .offset-xl-2 {\n    margin-left: 16.66666667%; }\n  .offset-xl-3 {\n    margin-left: 25%; }\n  .offset-xl-4 {\n    margin-left: 33.33333333%; }\n  .offset-xl-5 {\n    margin-left: 41.66666667%; }\n  .offset-xl-6 {\n    margin-left: 50%; }\n  .offset-xl-7 {\n    margin-left: 58.33333333%; }\n  .offset-xl-8 {\n    margin-left: 66.66666667%; }\n  .offset-xl-9 {\n    margin-left: 75%; }\n  .offset-xl-10 {\n    margin-left: 83.33333333%; }\n  .offset-xl-11 {\n    margin-left: 91.66666667%; } }\n.d-none {\n  display: none !important; }\n.d-inline {\n  display: inline !important; }\n.d-inline-block {\n  display: inline-block !important; }\n.d-block {\n  display: block !important; }\n.d-table {\n  display: table !important; }\n.d-table-row {\n  display: table-row !important; }\n.d-table-cell {\n  display: table-cell !important; }\n.d-flex {\n  display: -webkit-box !important;\n  display: -webkit-flex !important;\n  display: -ms-flexbox !important;\n  display: flex !important; }\n.d-inline-flex {\n  display: -webkit-inline-box !important;\n  display: -webkit-inline-flex !important;\n  display: -ms-inline-flexbox !important;\n  display: inline-flex !important; }\n@media (min-width: 576px) {\n  .d-sm-none {\n    display: none !important; }\n  .d-sm-inline {\n    display: inline !important; }\n  .d-sm-inline-block {\n    display: inline-block !important; }\n  .d-sm-block {\n    display: block !important; }\n  .d-sm-table {\n    display: table !important; }\n  .d-sm-table-row {\n    display: table-row !important; }\n  .d-sm-table-cell {\n    display: table-cell !important; }\n  .d-sm-flex {\n    display: -webkit-box !important;\n    display: -webkit-flex !important;\n    display: -ms-flexbox !important;\n    display: flex !important; }\n  .d-sm-inline-flex {\n    display: -webkit-inline-box !important;\n    display: -webkit-inline-flex !important;\n    display: -ms-inline-flexbox !important;\n    display: inline-flex !important; } }\n@media (min-width: 768px) {\n  .d-md-none {\n    display: none !important; }\n  .d-md-inline {\n    display: inline !important; }\n  .d-md-inline-block {\n    display: inline-block !important; }\n  .d-md-block {\n    display: block !important; }\n  .d-md-table {\n    display: table !important; }\n  .d-md-table-row {\n    display: table-row !important; }\n  .d-md-table-cell {\n    display: table-cell !important; }\n  .d-md-flex {\n    display: -webkit-box !important;\n    display: -webkit-flex !important;\n    display: -ms-flexbox !important;\n    display: flex !important; }\n  .d-md-inline-flex {\n    display: -webkit-inline-box !important;\n    display: -webkit-inline-flex !important;\n    display: -ms-inline-flexbox !important;\n    display: inline-flex !important; } }\n@media (min-width: 992px) {\n  .d-lg-none {\n    display: none !important; }\n  .d-lg-inline {\n    display: inline !important; }\n  .d-lg-inline-block {\n    display: inline-block !important; }\n  .d-lg-block {\n    display: block !important; }\n  .d-lg-table {\n    display: table !important; }\n  .d-lg-table-row {\n    display: table-row !important; }\n  .d-lg-table-cell {\n    display: table-cell !important; }\n  .d-lg-flex {\n    display: -webkit-box !important;\n    display: -webkit-flex !important;\n    display: -ms-flexbox !important;\n    display: flex !important; }\n  .d-lg-inline-flex {\n    display: -webkit-inline-box !important;\n    display: -webkit-inline-flex !important;\n    display: -ms-inline-flexbox !important;\n    display: inline-flex !important; } }\n@media (min-width: 1200px) {\n  .d-xl-none {\n    display: none !important; }\n  .d-xl-inline {\n    display: inline !important; }\n  .d-xl-inline-block {\n    display: inline-block !important; }\n  .d-xl-block {\n    display: block !important; }\n  .d-xl-table {\n    display: table !important; }\n  .d-xl-table-row {\n    display: table-row !important; }\n  .d-xl-table-cell {\n    display: table-cell !important; }\n  .d-xl-flex {\n    display: -webkit-box !important;\n    display: -webkit-flex !important;\n    display: -ms-flexbox !important;\n    display: flex !important; }\n  .d-xl-inline-flex {\n    display: -webkit-inline-box !important;\n    display: -webkit-inline-flex !important;\n    display: -ms-inline-flexbox !important;\n    display: inline-flex !important; } }\n@media print {\n  .d-print-none {\n    display: none !important; }\n  .d-print-inline {\n    display: inline !important; }\n  .d-print-inline-block {\n    display: inline-block !important; }\n  .d-print-block {\n    display: block !important; }\n  .d-print-table {\n    display: table !important; }\n  .d-print-table-row {\n    display: table-row !important; }\n  .d-print-table-cell {\n    display: table-cell !important; }\n  .d-print-flex {\n    display: -webkit-box !important;\n    display: -webkit-flex !important;\n    display: -ms-flexbox !important;\n    display: flex !important; }\n  .d-print-inline-flex {\n    display: -webkit-inline-box !important;\n    display: -webkit-inline-flex !important;\n    display: -ms-inline-flexbox !important;\n    display: inline-flex !important; } }\n.flex-row {\n  -webkit-box-orient: horizontal !important;\n  -webkit-box-direction: normal !important;\n  -webkit-flex-direction: row !important;\n      -ms-flex-direction: row !important;\n          flex-direction: row !important; }\n.flex-column {\n  -webkit-box-orient: vertical !important;\n  -webkit-box-direction: normal !important;\n  -webkit-flex-direction: column !important;\n      -ms-flex-direction: column !important;\n          flex-direction: column !important; }\n.flex-row-reverse {\n  -webkit-box-orient: horizontal !important;\n  -webkit-box-direction: reverse !important;\n  -webkit-flex-direction: row-reverse !important;\n      -ms-flex-direction: row-reverse !important;\n          flex-direction: row-reverse !important; }\n.flex-column-reverse {\n  -webkit-box-orient: vertical !important;\n  -webkit-box-direction: reverse !important;\n  -webkit-flex-direction: column-reverse !important;\n      -ms-flex-direction: column-reverse !important;\n          flex-direction: column-reverse !important; }\n.flex-wrap {\n  -webkit-flex-wrap: wrap !important;\n      -ms-flex-wrap: wrap !important;\n          flex-wrap: wrap !important; }\n.flex-nowrap {\n  -webkit-flex-wrap: nowrap !important;\n      -ms-flex-wrap: nowrap !important;\n          flex-wrap: nowrap !important; }\n.flex-wrap-reverse {\n  -webkit-flex-wrap: wrap-reverse !important;\n      -ms-flex-wrap: wrap-reverse !important;\n          flex-wrap: wrap-reverse !important; }\n.flex-fill {\n  -webkit-box-flex: 1 !important;\n  -webkit-flex: 1 1 auto !important;\n      -ms-flex: 1 1 auto !important;\n          flex: 1 1 auto !important; }\n.flex-grow-0 {\n  -webkit-box-flex: 0 !important;\n  -webkit-flex-grow: 0 !important;\n      -ms-flex-positive: 0 !important;\n          flex-grow: 0 !important; }\n.flex-grow-1 {\n  -webkit-box-flex: 1 !important;\n  -webkit-flex-grow: 1 !important;\n      -ms-flex-positive: 1 !important;\n          flex-grow: 1 !important; }\n.flex-shrink-0 {\n  -webkit-flex-shrink: 0 !important;\n      -ms-flex-negative: 0 !important;\n          flex-shrink: 0 !important; }\n.flex-shrink-1 {\n  -webkit-flex-shrink: 1 !important;\n      -ms-flex-negative: 1 !important;\n          flex-shrink: 1 !important; }\n.justify-content-start {\n  -webkit-box-pack: start !important;\n  -webkit-justify-content: flex-start !important;\n      -ms-flex-pack: start !important;\n          justify-content: flex-start !important; }\n.justify-content-end {\n  -webkit-box-pack: end !important;\n  -webkit-justify-content: flex-end !important;\n      -ms-flex-pack: end !important;\n          justify-content: flex-end !important; }\n.justify-content-center {\n  -webkit-box-pack: center !important;\n  -webkit-justify-content: center !important;\n      -ms-flex-pack: center !important;\n          justify-content: center !important; }\n.justify-content-between {\n  -webkit-box-pack: justify !important;\n  -webkit-justify-content: space-between !important;\n      -ms-flex-pack: justify !important;\n          justify-content: space-between !important; }\n.justify-content-around {\n  -webkit-justify-content: space-around !important;\n      -ms-flex-pack: distribute !important;\n          justify-content: space-around !important; }\n.align-items-start {\n  -webkit-box-align: start !important;\n  -webkit-align-items: flex-start !important;\n      -ms-flex-align: start !important;\n          align-items: flex-start !important; }\n.align-items-end {\n  -webkit-box-align: end !important;\n  -webkit-align-items: flex-end !important;\n      -ms-flex-align: end !important;\n          align-items: flex-end !important; }\n.align-items-center {\n  -webkit-box-align: center !important;\n  -webkit-align-items: center !important;\n      -ms-flex-align: center !important;\n          align-items: center !important; }\n.align-items-baseline {\n  -webkit-box-align: baseline !important;\n  -webkit-align-items: baseline !important;\n      -ms-flex-align: baseline !important;\n          align-items: baseline !important; }\n.align-items-stretch {\n  -webkit-box-align: stretch !important;\n  -webkit-align-items: stretch !important;\n      -ms-flex-align: stretch !important;\n          align-items: stretch !important; }\n.align-content-start {\n  -webkit-align-content: flex-start !important;\n      -ms-flex-line-pack: start !important;\n          align-content: flex-start !important; }\n.align-content-end {\n  -webkit-align-content: flex-end !important;\n      -ms-flex-line-pack: end !important;\n          align-content: flex-end !important; }\n.align-content-center {\n  -webkit-align-content: center !important;\n      -ms-flex-line-pack: center !important;\n          align-content: center !important; }\n.align-content-between {\n  -webkit-align-content: space-between !important;\n      -ms-flex-line-pack: justify !important;\n          align-content: space-between !important; }\n.align-content-around {\n  -webkit-align-content: space-around !important;\n      -ms-flex-line-pack: distribute !important;\n          align-content: space-around !important; }\n.align-content-stretch {\n  -webkit-align-content: stretch !important;\n      -ms-flex-line-pack: stretch !important;\n          align-content: stretch !important; }\n.align-self-auto {\n  -webkit-align-self: auto !important;\n      -ms-flex-item-align: auto !important;\n              -ms-grid-row-align: auto !important;\n          align-self: auto !important; }\n.align-self-start {\n  -webkit-align-self: flex-start !important;\n      -ms-flex-item-align: start !important;\n          align-self: flex-start !important; }\n.align-self-end {\n  -webkit-align-self: flex-end !important;\n      -ms-flex-item-align: end !important;\n          align-self: flex-end !important; }\n.align-self-center {\n  -webkit-align-self: center !important;\n      -ms-flex-item-align: center !important;\n              -ms-grid-row-align: center !important;\n          align-self: center !important; }\n.align-self-baseline {\n  -webkit-align-self: baseline !important;\n      -ms-flex-item-align: baseline !important;\n          align-self: baseline !important; }\n.align-self-stretch {\n  -webkit-align-self: stretch !important;\n      -ms-flex-item-align: stretch !important;\n              -ms-grid-row-align: stretch !important;\n          align-self: stretch !important; }\n@media (min-width: 576px) {\n  .flex-sm-row {\n    -webkit-box-orient: horizontal !important;\n    -webkit-box-direction: normal !important;\n    -webkit-flex-direction: row !important;\n        -ms-flex-direction: row !important;\n            flex-direction: row !important; }\n  .flex-sm-column {\n    -webkit-box-orient: vertical !important;\n    -webkit-box-direction: normal !important;\n    -webkit-flex-direction: column !important;\n        -ms-flex-direction: column !important;\n            flex-direction: column !important; }\n  .flex-sm-row-reverse {\n    -webkit-box-orient: horizontal !important;\n    -webkit-box-direction: reverse !important;\n    -webkit-flex-direction: row-reverse !important;\n        -ms-flex-direction: row-reverse !important;\n            flex-direction: row-reverse !important; }\n  .flex-sm-column-reverse {\n    -webkit-box-orient: vertical !important;\n    -webkit-box-direction: reverse !important;\n    -webkit-flex-direction: column-reverse !important;\n        -ms-flex-direction: column-reverse !important;\n            flex-direction: column-reverse !important; }\n  .flex-sm-wrap {\n    -webkit-flex-wrap: wrap !important;\n        -ms-flex-wrap: wrap !important;\n            flex-wrap: wrap !important; }\n  .flex-sm-nowrap {\n    -webkit-flex-wrap: nowrap !important;\n        -ms-flex-wrap: nowrap !important;\n            flex-wrap: nowrap !important; }\n  .flex-sm-wrap-reverse {\n    -webkit-flex-wrap: wrap-reverse !important;\n        -ms-flex-wrap: wrap-reverse !important;\n            flex-wrap: wrap-reverse !important; }\n  .flex-sm-fill {\n    -webkit-box-flex: 1 !important;\n    -webkit-flex: 1 1 auto !important;\n        -ms-flex: 1 1 auto !important;\n            flex: 1 1 auto !important; }\n  .flex-sm-grow-0 {\n    -webkit-box-flex: 0 !important;\n    -webkit-flex-grow: 0 !important;\n        -ms-flex-positive: 0 !important;\n            flex-grow: 0 !important; }\n  .flex-sm-grow-1 {\n    -webkit-box-flex: 1 !important;\n    -webkit-flex-grow: 1 !important;\n        -ms-flex-positive: 1 !important;\n            flex-grow: 1 !important; }\n  .flex-sm-shrink-0 {\n    -webkit-flex-shrink: 0 !important;\n        -ms-flex-negative: 0 !important;\n            flex-shrink: 0 !important; }\n  .flex-sm-shrink-1 {\n    -webkit-flex-shrink: 1 !important;\n        -ms-flex-negative: 1 !important;\n            flex-shrink: 1 !important; }\n  .justify-content-sm-start {\n    -webkit-box-pack: start !important;\n    -webkit-justify-content: flex-start !important;\n        -ms-flex-pack: start !important;\n            justify-content: flex-start !important; }\n  .justify-content-sm-end {\n    -webkit-box-pack: end !important;\n    -webkit-justify-content: flex-end !important;\n        -ms-flex-pack: end !important;\n            justify-content: flex-end !important; }\n  .justify-content-sm-center {\n    -webkit-box-pack: center !important;\n    -webkit-justify-content: center !important;\n        -ms-flex-pack: center !important;\n            justify-content: center !important; }\n  .justify-content-sm-between {\n    -webkit-box-pack: justify !important;\n    -webkit-justify-content: space-between !important;\n        -ms-flex-pack: justify !important;\n            justify-content: space-between !important; }\n  .justify-content-sm-around {\n    -webkit-justify-content: space-around !important;\n        -ms-flex-pack: distribute !important;\n            justify-content: space-around !important; }\n  .align-items-sm-start {\n    -webkit-box-align: start !important;\n    -webkit-align-items: flex-start !important;\n        -ms-flex-align: start !important;\n            align-items: flex-start !important; }\n  .align-items-sm-end {\n    -webkit-box-align: end !important;\n    -webkit-align-items: flex-end !important;\n        -ms-flex-align: end !important;\n            align-items: flex-end !important; }\n  .align-items-sm-center {\n    -webkit-box-align: center !important;\n    -webkit-align-items: center !important;\n        -ms-flex-align: center !important;\n            align-items: center !important; }\n  .align-items-sm-baseline {\n    -webkit-box-align: baseline !important;\n    -webkit-align-items: baseline !important;\n        -ms-flex-align: baseline !important;\n            align-items: baseline !important; }\n  .align-items-sm-stretch {\n    -webkit-box-align: stretch !important;\n    -webkit-align-items: stretch !important;\n        -ms-flex-align: stretch !important;\n            align-items: stretch !important; }\n  .align-content-sm-start {\n    -webkit-align-content: flex-start !important;\n        -ms-flex-line-pack: start !important;\n            align-content: flex-start !important; }\n  .align-content-sm-end {\n    -webkit-align-content: flex-end !important;\n        -ms-flex-line-pack: end !important;\n            align-content: flex-end !important; }\n  .align-content-sm-center {\n    -webkit-align-content: center !important;\n        -ms-flex-line-pack: center !important;\n            align-content: center !important; }\n  .align-content-sm-between {\n    -webkit-align-content: space-between !important;\n        -ms-flex-line-pack: justify !important;\n            align-content: space-between !important; }\n  .align-content-sm-around {\n    -webkit-align-content: space-around !important;\n        -ms-flex-line-pack: distribute !important;\n            align-content: space-around !important; }\n  .align-content-sm-stretch {\n    -webkit-align-content: stretch !important;\n        -ms-flex-line-pack: stretch !important;\n            align-content: stretch !important; }\n  .align-self-sm-auto {\n    -webkit-align-self: auto !important;\n        -ms-flex-item-align: auto !important;\n                -ms-grid-row-align: auto !important;\n            align-self: auto !important; }\n  .align-self-sm-start {\n    -webkit-align-self: flex-start !important;\n        -ms-flex-item-align: start !important;\n            align-self: flex-start !important; }\n  .align-self-sm-end {\n    -webkit-align-self: flex-end !important;\n        -ms-flex-item-align: end !important;\n            align-self: flex-end !important; }\n  .align-self-sm-center {\n    -webkit-align-self: center !important;\n        -ms-flex-item-align: center !important;\n                -ms-grid-row-align: center !important;\n            align-self: center !important; }\n  .align-self-sm-baseline {\n    -webkit-align-self: baseline !important;\n        -ms-flex-item-align: baseline !important;\n            align-self: baseline !important; }\n  .align-self-sm-stretch {\n    -webkit-align-self: stretch !important;\n        -ms-flex-item-align: stretch !important;\n                -ms-grid-row-align: stretch !important;\n            align-self: stretch !important; } }\n@media (min-width: 768px) {\n  .flex-md-row {\n    -webkit-box-orient: horizontal !important;\n    -webkit-box-direction: normal !important;\n    -webkit-flex-direction: row !important;\n        -ms-flex-direction: row !important;\n            flex-direction: row !important; }\n  .flex-md-column {\n    -webkit-box-orient: vertical !important;\n    -webkit-box-direction: normal !important;\n    -webkit-flex-direction: column !important;\n        -ms-flex-direction: column !important;\n            flex-direction: column !important; }\n  .flex-md-row-reverse {\n    -webkit-box-orient: horizontal !important;\n    -webkit-box-direction: reverse !important;\n    -webkit-flex-direction: row-reverse !important;\n        -ms-flex-direction: row-reverse !important;\n            flex-direction: row-reverse !important; }\n  .flex-md-column-reverse {\n    -webkit-box-orient: vertical !important;\n    -webkit-box-direction: reverse !important;\n    -webkit-flex-direction: column-reverse !important;\n        -ms-flex-direction: column-reverse !important;\n            flex-direction: column-reverse !important; }\n  .flex-md-wrap {\n    -webkit-flex-wrap: wrap !important;\n        -ms-flex-wrap: wrap !important;\n            flex-wrap: wrap !important; }\n  .flex-md-nowrap {\n    -webkit-flex-wrap: nowrap !important;\n        -ms-flex-wrap: nowrap !important;\n            flex-wrap: nowrap !important; }\n  .flex-md-wrap-reverse {\n    -webkit-flex-wrap: wrap-reverse !important;\n        -ms-flex-wrap: wrap-reverse !important;\n            flex-wrap: wrap-reverse !important; }\n  .flex-md-fill {\n    -webkit-box-flex: 1 !important;\n    -webkit-flex: 1 1 auto !important;\n        -ms-flex: 1 1 auto !important;\n            flex: 1 1 auto !important; }\n  .flex-md-grow-0 {\n    -webkit-box-flex: 0 !important;\n    -webkit-flex-grow: 0 !important;\n        -ms-flex-positive: 0 !important;\n            flex-grow: 0 !important; }\n  .flex-md-grow-1 {\n    -webkit-box-flex: 1 !important;\n    -webkit-flex-grow: 1 !important;\n        -ms-flex-positive: 1 !important;\n            flex-grow: 1 !important; }\n  .flex-md-shrink-0 {\n    -webkit-flex-shrink: 0 !important;\n        -ms-flex-negative: 0 !important;\n            flex-shrink: 0 !important; }\n  .flex-md-shrink-1 {\n    -webkit-flex-shrink: 1 !important;\n        -ms-flex-negative: 1 !important;\n            flex-shrink: 1 !important; }\n  .justify-content-md-start {\n    -webkit-box-pack: start !important;\n    -webkit-justify-content: flex-start !important;\n        -ms-flex-pack: start !important;\n            justify-content: flex-start !important; }\n  .justify-content-md-end {\n    -webkit-box-pack: end !important;\n    -webkit-justify-content: flex-end !important;\n        -ms-flex-pack: end !important;\n            justify-content: flex-end !important; }\n  .justify-content-md-center {\n    -webkit-box-pack: center !important;\n    -webkit-justify-content: center !important;\n        -ms-flex-pack: center !important;\n            justify-content: center !important; }\n  .justify-content-md-between {\n    -webkit-box-pack: justify !important;\n    -webkit-justify-content: space-between !important;\n        -ms-flex-pack: justify !important;\n            justify-content: space-between !important; }\n  .justify-content-md-around {\n    -webkit-justify-content: space-around !important;\n        -ms-flex-pack: distribute !important;\n            justify-content: space-around !important; }\n  .align-items-md-start {\n    -webkit-box-align: start !important;\n    -webkit-align-items: flex-start !important;\n        -ms-flex-align: start !important;\n            align-items: flex-start !important; }\n  .align-items-md-end {\n    -webkit-box-align: end !important;\n    -webkit-align-items: flex-end !important;\n        -ms-flex-align: end !important;\n            align-items: flex-end !important; }\n  .align-items-md-center {\n    -webkit-box-align: center !important;\n    -webkit-align-items: center !important;\n        -ms-flex-align: center !important;\n            align-items: center !important; }\n  .align-items-md-baseline {\n    -webkit-box-align: baseline !important;\n    -webkit-align-items: baseline !important;\n        -ms-flex-align: baseline !important;\n            align-items: baseline !important; }\n  .align-items-md-stretch {\n    -webkit-box-align: stretch !important;\n    -webkit-align-items: stretch !important;\n        -ms-flex-align: stretch !important;\n            align-items: stretch !important; }\n  .align-content-md-start {\n    -webkit-align-content: flex-start !important;\n        -ms-flex-line-pack: start !important;\n            align-content: flex-start !important; }\n  .align-content-md-end {\n    -webkit-align-content: flex-end !important;\n        -ms-flex-line-pack: end !important;\n            align-content: flex-end !important; }\n  .align-content-md-center {\n    -webkit-align-content: center !important;\n        -ms-flex-line-pack: center !important;\n            align-content: center !important; }\n  .align-content-md-between {\n    -webkit-align-content: space-between !important;\n        -ms-flex-line-pack: justify !important;\n            align-content: space-between !important; }\n  .align-content-md-around {\n    -webkit-align-content: space-around !important;\n        -ms-flex-line-pack: distribute !important;\n            align-content: space-around !important; }\n  .align-content-md-stretch {\n    -webkit-align-content: stretch !important;\n        -ms-flex-line-pack: stretch !important;\n            align-content: stretch !important; }\n  .align-self-md-auto {\n    -webkit-align-self: auto !important;\n        -ms-flex-item-align: auto !important;\n                -ms-grid-row-align: auto !important;\n            align-self: auto !important; }\n  .align-self-md-start {\n    -webkit-align-self: flex-start !important;\n        -ms-flex-item-align: start !important;\n            align-self: flex-start !important; }\n  .align-self-md-end {\n    -webkit-align-self: flex-end !important;\n        -ms-flex-item-align: end !important;\n            align-self: flex-end !important; }\n  .align-self-md-center {\n    -webkit-align-self: center !important;\n        -ms-flex-item-align: center !important;\n                -ms-grid-row-align: center !important;\n            align-self: center !important; }\n  .align-self-md-baseline {\n    -webkit-align-self: baseline !important;\n        -ms-flex-item-align: baseline !important;\n            align-self: baseline !important; }\n  .align-self-md-stretch {\n    -webkit-align-self: stretch !important;\n        -ms-flex-item-align: stretch !important;\n                -ms-grid-row-align: stretch !important;\n            align-self: stretch !important; } }\n@media (min-width: 992px) {\n  .flex-lg-row {\n    -webkit-box-orient: horizontal !important;\n    -webkit-box-direction: normal !important;\n    -webkit-flex-direction: row !important;\n        -ms-flex-direction: row !important;\n            flex-direction: row !important; }\n  .flex-lg-column {\n    -webkit-box-orient: vertical !important;\n    -webkit-box-direction: normal !important;\n    -webkit-flex-direction: column !important;\n        -ms-flex-direction: column !important;\n            flex-direction: column !important; }\n  .flex-lg-row-reverse {\n    -webkit-box-orient: horizontal !important;\n    -webkit-box-direction: reverse !important;\n    -webkit-flex-direction: row-reverse !important;\n        -ms-flex-direction: row-reverse !important;\n            flex-direction: row-reverse !important; }\n  .flex-lg-column-reverse {\n    -webkit-box-orient: vertical !important;\n    -webkit-box-direction: reverse !important;\n    -webkit-flex-direction: column-reverse !important;\n        -ms-flex-direction: column-reverse !important;\n            flex-direction: column-reverse !important; }\n  .flex-lg-wrap {\n    -webkit-flex-wrap: wrap !important;\n        -ms-flex-wrap: wrap !important;\n            flex-wrap: wrap !important; }\n  .flex-lg-nowrap {\n    -webkit-flex-wrap: nowrap !important;\n        -ms-flex-wrap: nowrap !important;\n            flex-wrap: nowrap !important; }\n  .flex-lg-wrap-reverse {\n    -webkit-flex-wrap: wrap-reverse !important;\n        -ms-flex-wrap: wrap-reverse !important;\n            flex-wrap: wrap-reverse !important; }\n  .flex-lg-fill {\n    -webkit-box-flex: 1 !important;\n    -webkit-flex: 1 1 auto !important;\n        -ms-flex: 1 1 auto !important;\n            flex: 1 1 auto !important; }\n  .flex-lg-grow-0 {\n    -webkit-box-flex: 0 !important;\n    -webkit-flex-grow: 0 !important;\n        -ms-flex-positive: 0 !important;\n            flex-grow: 0 !important; }\n  .flex-lg-grow-1 {\n    -webkit-box-flex: 1 !important;\n    -webkit-flex-grow: 1 !important;\n        -ms-flex-positive: 1 !important;\n            flex-grow: 1 !important; }\n  .flex-lg-shrink-0 {\n    -webkit-flex-shrink: 0 !important;\n        -ms-flex-negative: 0 !important;\n            flex-shrink: 0 !important; }\n  .flex-lg-shrink-1 {\n    -webkit-flex-shrink: 1 !important;\n        -ms-flex-negative: 1 !important;\n            flex-shrink: 1 !important; }\n  .justify-content-lg-start {\n    -webkit-box-pack: start !important;\n    -webkit-justify-content: flex-start !important;\n        -ms-flex-pack: start !important;\n            justify-content: flex-start !important; }\n  .justify-content-lg-end {\n    -webkit-box-pack: end !important;\n    -webkit-justify-content: flex-end !important;\n        -ms-flex-pack: end !important;\n            justify-content: flex-end !important; }\n  .justify-content-lg-center {\n    -webkit-box-pack: center !important;\n    -webkit-justify-content: center !important;\n        -ms-flex-pack: center !important;\n            justify-content: center !important; }\n  .justify-content-lg-between {\n    -webkit-box-pack: justify !important;\n    -webkit-justify-content: space-between !important;\n        -ms-flex-pack: justify !important;\n            justify-content: space-between !important; }\n  .justify-content-lg-around {\n    -webkit-justify-content: space-around !important;\n        -ms-flex-pack: distribute !important;\n            justify-content: space-around !important; }\n  .align-items-lg-start {\n    -webkit-box-align: start !important;\n    -webkit-align-items: flex-start !important;\n        -ms-flex-align: start !important;\n            align-items: flex-start !important; }\n  .align-items-lg-end {\n    -webkit-box-align: end !important;\n    -webkit-align-items: flex-end !important;\n        -ms-flex-align: end !important;\n            align-items: flex-end !important; }\n  .align-items-lg-center {\n    -webkit-box-align: center !important;\n    -webkit-align-items: center !important;\n        -ms-flex-align: center !important;\n            align-items: center !important; }\n  .align-items-lg-baseline {\n    -webkit-box-align: baseline !important;\n    -webkit-align-items: baseline !important;\n        -ms-flex-align: baseline !important;\n            align-items: baseline !important; }\n  .align-items-lg-stretch {\n    -webkit-box-align: stretch !important;\n    -webkit-align-items: stretch !important;\n        -ms-flex-align: stretch !important;\n            align-items: stretch !important; }\n  .align-content-lg-start {\n    -webkit-align-content: flex-start !important;\n        -ms-flex-line-pack: start !important;\n            align-content: flex-start !important; }\n  .align-content-lg-end {\n    -webkit-align-content: flex-end !important;\n        -ms-flex-line-pack: end !important;\n            align-content: flex-end !important; }\n  .align-content-lg-center {\n    -webkit-align-content: center !important;\n        -ms-flex-line-pack: center !important;\n            align-content: center !important; }\n  .align-content-lg-between {\n    -webkit-align-content: space-between !important;\n        -ms-flex-line-pack: justify !important;\n            align-content: space-between !important; }\n  .align-content-lg-around {\n    -webkit-align-content: space-around !important;\n        -ms-flex-line-pack: distribute !important;\n            align-content: space-around !important; }\n  .align-content-lg-stretch {\n    -webkit-align-content: stretch !important;\n        -ms-flex-line-pack: stretch !important;\n            align-content: stretch !important; }\n  .align-self-lg-auto {\n    -webkit-align-self: auto !important;\n        -ms-flex-item-align: auto !important;\n                -ms-grid-row-align: auto !important;\n            align-self: auto !important; }\n  .align-self-lg-start {\n    -webkit-align-self: flex-start !important;\n        -ms-flex-item-align: start !important;\n            align-self: flex-start !important; }\n  .align-self-lg-end {\n    -webkit-align-self: flex-end !important;\n        -ms-flex-item-align: end !important;\n            align-self: flex-end !important; }\n  .align-self-lg-center {\n    -webkit-align-self: center !important;\n        -ms-flex-item-align: center !important;\n                -ms-grid-row-align: center !important;\n            align-self: center !important; }\n  .align-self-lg-baseline {\n    -webkit-align-self: baseline !important;\n        -ms-flex-item-align: baseline !important;\n            align-self: baseline !important; }\n  .align-self-lg-stretch {\n    -webkit-align-self: stretch !important;\n        -ms-flex-item-align: stretch !important;\n                -ms-grid-row-align: stretch !important;\n            align-self: stretch !important; } }\n@media (min-width: 1200px) {\n  .flex-xl-row {\n    -webkit-box-orient: horizontal !important;\n    -webkit-box-direction: normal !important;\n    -webkit-flex-direction: row !important;\n        -ms-flex-direction: row !important;\n            flex-direction: row !important; }\n  .flex-xl-column {\n    -webkit-box-orient: vertical !important;\n    -webkit-box-direction: normal !important;\n    -webkit-flex-direction: column !important;\n        -ms-flex-direction: column !important;\n            flex-direction: column !important; }\n  .flex-xl-row-reverse {\n    -webkit-box-orient: horizontal !important;\n    -webkit-box-direction: reverse !important;\n    -webkit-flex-direction: row-reverse !important;\n        -ms-flex-direction: row-reverse !important;\n            flex-direction: row-reverse !important; }\n  .flex-xl-column-reverse {\n    -webkit-box-orient: vertical !important;\n    -webkit-box-direction: reverse !important;\n    -webkit-flex-direction: column-reverse !important;\n        -ms-flex-direction: column-reverse !important;\n            flex-direction: column-reverse !important; }\n  .flex-xl-wrap {\n    -webkit-flex-wrap: wrap !important;\n        -ms-flex-wrap: wrap !important;\n            flex-wrap: wrap !important; }\n  .flex-xl-nowrap {\n    -webkit-flex-wrap: nowrap !important;\n        -ms-flex-wrap: nowrap !important;\n            flex-wrap: nowrap !important; }\n  .flex-xl-wrap-reverse {\n    -webkit-flex-wrap: wrap-reverse !important;\n        -ms-flex-wrap: wrap-reverse !important;\n            flex-wrap: wrap-reverse !important; }\n  .flex-xl-fill {\n    -webkit-box-flex: 1 !important;\n    -webkit-flex: 1 1 auto !important;\n        -ms-flex: 1 1 auto !important;\n            flex: 1 1 auto !important; }\n  .flex-xl-grow-0 {\n    -webkit-box-flex: 0 !important;\n    -webkit-flex-grow: 0 !important;\n        -ms-flex-positive: 0 !important;\n            flex-grow: 0 !important; }\n  .flex-xl-grow-1 {\n    -webkit-box-flex: 1 !important;\n    -webkit-flex-grow: 1 !important;\n        -ms-flex-positive: 1 !important;\n            flex-grow: 1 !important; }\n  .flex-xl-shrink-0 {\n    -webkit-flex-shrink: 0 !important;\n        -ms-flex-negative: 0 !important;\n            flex-shrink: 0 !important; }\n  .flex-xl-shrink-1 {\n    -webkit-flex-shrink: 1 !important;\n        -ms-flex-negative: 1 !important;\n            flex-shrink: 1 !important; }\n  .justify-content-xl-start {\n    -webkit-box-pack: start !important;\n    -webkit-justify-content: flex-start !important;\n        -ms-flex-pack: start !important;\n            justify-content: flex-start !important; }\n  .justify-content-xl-end {\n    -webkit-box-pack: end !important;\n    -webkit-justify-content: flex-end !important;\n        -ms-flex-pack: end !important;\n            justify-content: flex-end !important; }\n  .justify-content-xl-center {\n    -webkit-box-pack: center !important;\n    -webkit-justify-content: center !important;\n        -ms-flex-pack: center !important;\n            justify-content: center !important; }\n  .justify-content-xl-between {\n    -webkit-box-pack: justify !important;\n    -webkit-justify-content: space-between !important;\n        -ms-flex-pack: justify !important;\n            justify-content: space-between !important; }\n  .justify-content-xl-around {\n    -webkit-justify-content: space-around !important;\n        -ms-flex-pack: distribute !important;\n            justify-content: space-around !important; }\n  .align-items-xl-start {\n    -webkit-box-align: start !important;\n    -webkit-align-items: flex-start !important;\n        -ms-flex-align: start !important;\n            align-items: flex-start !important; }\n  .align-items-xl-end {\n    -webkit-box-align: end !important;\n    -webkit-align-items: flex-end !important;\n        -ms-flex-align: end !important;\n            align-items: flex-end !important; }\n  .align-items-xl-center {\n    -webkit-box-align: center !important;\n    -webkit-align-items: center !important;\n        -ms-flex-align: center !important;\n            align-items: center !important; }\n  .align-items-xl-baseline {\n    -webkit-box-align: baseline !important;\n    -webkit-align-items: baseline !important;\n        -ms-flex-align: baseline !important;\n            align-items: baseline !important; }\n  .align-items-xl-stretch {\n    -webkit-box-align: stretch !important;\n    -webkit-align-items: stretch !important;\n        -ms-flex-align: stretch !important;\n            align-items: stretch !important; }\n  .align-content-xl-start {\n    -webkit-align-content: flex-start !important;\n        -ms-flex-line-pack: start !important;\n            align-content: flex-start !important; }\n  .align-content-xl-end {\n    -webkit-align-content: flex-end !important;\n        -ms-flex-line-pack: end !important;\n            align-content: flex-end !important; }\n  .align-content-xl-center {\n    -webkit-align-content: center !important;\n        -ms-flex-line-pack: center !important;\n            align-content: center !important; }\n  .align-content-xl-between {\n    -webkit-align-content: space-between !important;\n        -ms-flex-line-pack: justify !important;\n            align-content: space-between !important; }\n  .align-content-xl-around {\n    -webkit-align-content: space-around !important;\n        -ms-flex-line-pack: distribute !important;\n            align-content: space-around !important; }\n  .align-content-xl-stretch {\n    -webkit-align-content: stretch !important;\n        -ms-flex-line-pack: stretch !important;\n            align-content: stretch !important; }\n  .align-self-xl-auto {\n    -webkit-align-self: auto !important;\n        -ms-flex-item-align: auto !important;\n                -ms-grid-row-align: auto !important;\n            align-self: auto !important; }\n  .align-self-xl-start {\n    -webkit-align-self: flex-start !important;\n        -ms-flex-item-align: start !important;\n            align-self: flex-start !important; }\n  .align-self-xl-end {\n    -webkit-align-self: flex-end !important;\n        -ms-flex-item-align: end !important;\n            align-self: flex-end !important; }\n  .align-self-xl-center {\n    -webkit-align-self: center !important;\n        -ms-flex-item-align: center !important;\n                -ms-grid-row-align: center !important;\n            align-self: center !important; }\n  .align-self-xl-baseline {\n    -webkit-align-self: baseline !important;\n        -ms-flex-item-align: baseline !important;\n            align-self: baseline !important; }\n  .align-self-xl-stretch {\n    -webkit-align-self: stretch !important;\n        -ms-flex-item-align: stretch !important;\n                -ms-grid-row-align: stretch !important;\n            align-self: stretch !important; } }\n:host {\n  display: block;\n  min-height: 100%;\n  background: url(\"/assets/images/bg-header.png\") no-repeat;\n  background-size: auto 100vw;\n  font-family: 'Nunito Sans'; }\n@media (max-width: 1199.98px) {\n    :host {\n      background: url(\"/assets/images/bg-header-mobile.png\"); } }\n/deep/ .registration-form {\n  padding-top: 8rem; }\n/deep/ .registration-form label {\n    display: none; }\n/deep/ .registration-form h2 {\n    color: #fff;\n    font-family: 'Nunito Sans';\n    letter-spacing: .5px;\n    margin-bottom: 1.5rem;\n    font-size: 2.25rem; }\n@media (max-width: 991.98px) {\n      /deep/ .registration-form h2 {\n        font-size: 1.675rem; } }\n/deep/ .registration-form .text-center {\n    margin-left: 3.375rem;\n    margin-right: 3.375rem; }\n@media (max-width: 991.98px) {\n      /deep/ .registration-form .text-center {\n        margin-left: 0.5rem;\n        margin-right: 0.5rem; } }\n/deep/ .registration-form .log-link {\n    display: inline-block;\n    color: #fff;\n    font-family: 'Nunito Sans';\n    font-size: 0.875rem;\n    font-weight: 600;\n    letter-spacing: 0.03rem;\n    padding: 0;\n    margin-bottom: 0.75rem; }\n@media (max-width: 575.98px) {\n      /deep/ .registration-form .log-link {\n        text-align: center;\n        display: block; } }\n/deep/ .registration-form .dot {\n    color: #fff;\n    opacity: 0; }\n/deep/ .registration-form .form-group {\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n    -webkit-flex-direction: column;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    background: #fff;\n    padding: 3.484rem 2.68rem;\n    width: 100%;\n    box-shadow: 0 0.335rem 0.67rem rgba(0, 0, 0, 0.15) !important;\n    border-radius: 0.5rem;\n    margin-bottom: 2.25rem; }\n@media (max-width: 991.98px) {\n      /deep/ .registration-form .form-group {\n        padding: 2.484rem 1.68rem; } }\n/deep/ .registration-form .form-group input::-webkit-input-placeholder {\n      opacity: .5;\n      font-family: inherit;\n      font-size: inherit; }\n/deep/ .registration-form .form-group .keep-signed-in {\n      display: inline-block;\n      font-size: 0.875rem;\n      margin-left: 0.335rem;\n      color: #303864;\n      padding-left: 2.187rem; }\n/deep/ .registration-form .form-group input[type=\"checkbox\"] {\n      height: 1rem;\n      width: 1rem;\n      border-radius: 0; }\n/deep/ .registration-form .form-group .form-element {\n      margin-top: .6rem;\n      margin-bottom: 1rem; }\n/deep/ .registration-form .form-group .form-element a {\n        font-weight: bold;\n        color: #000000;\n        text-decoration: none; }\n/deep/ .registration-form .form-inline {\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: justify;\n    -webkit-justify-content: space-between;\n        -ms-flex-pack: justify;\n            justify-content: space-between; }\n/deep/ a.nav-btn-gray {\n  background: #93a5bf;\n  color: #fff !important;\n  padding: 0.536rem 0.804rem;\n  padding-left: 0.8rem !important;\n  padding-right: 0.8rem !important; }\n.top-bar {\n  background: #28a745;\n  color: #fff;\n  padding-top: 0.1675rem;\n  padding-bottom: 0.1675rem;\n  padding-left: 0.335rem;\n  padding-right: 0.335rem; }\n.top-bar a {\n    color: #fff; }\n.top-bar a:hover {\n      color: #fff; }\n/deep/ .navbar-brand {\n  font-family: 'Nunito Sans';\n  font-size: 1.675rem;\n  text-decoration: none;\n  letter-spacing: 4px;\n  margin-left: 2.68rem;\n  font-weight: 200; }\n/deep/ .navbar-brand .btn-outline-danger {\n    padding: 1rem 1.5rem !important; }\n.navbar-dark .navbar-brand {\n  color: #000; }\n.nav-item {\n  margin-right: 0.67rem;\n  margin-left: 0.67rem; }\n@media (max-width: 767.98px) {\n    .nav-item {\n      margin-left: 0;\n      margin-right: 0; } }\n.navbar.active {\n  background: #3a446a !important;\n  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.25);\n  padding-top: 10px !important;\n  padding-bottom: 10px !important;\n  -webkit-transition: 0.5s;\n  transition: 0.5s; }\n"

/***/ }),

/***/ "./src/app/pages/auth/auth.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/auth/auth.component.ts ***!
  \**********************************************/
/*! exports provided: AuthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthComponent", function() { return AuthComponent; });
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

var AuthComponent = /** @class */ (function () {
    function AuthComponent() {
    }
    AuthComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-auth',
            template: __webpack_require__(/*! ./auth.component.html */ "./src/app/pages/auth/auth.component.html"),
            styles: [__webpack_require__(/*! ./auth.component.scss */ "./src/app/pages/auth/auth.component.scss")],
        }),
        __metadata("design:paramtypes", [])
    ], AuthComponent);
    return AuthComponent;
}());



/***/ }),

/***/ "./src/app/pages/auth/auth.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/auth/auth.module.ts ***!
  \*******************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _auth_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth-routing.module */ "./src/app/pages/auth/auth-routing.module.ts");
/* harmony import */ var _auth_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth.component */ "./src/app/pages/auth/auth.component.ts");
/* harmony import */ var ngx_captcha__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-captcha */ "./node_modules/ngx-captcha/fesm5/ngx-captcha.js");
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @env/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _app_pages_auth_pages_login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @app/pages/auth/pages/login/login.component */ "./src/app/pages/auth/pages/login/login.component.ts");
/* harmony import */ var _app_pages_auth_pages_signup_signup_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @app/pages/auth/pages/signup/signup.component */ "./src/app/pages/auth/pages/signup/signup.component.ts");
/* harmony import */ var _app_pages_auth_pages_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @app/pages/auth/pages/forgot-password/forgot-password.component */ "./src/app/pages/auth/pages/forgot-password/forgot-password.component.ts");
/* harmony import */ var _app_pages_auth_pages_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @app/pages/auth/pages/change-password/change-password.component */ "./src/app/pages/auth/pages/change-password/change-password.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    AuthModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _auth_routing_module__WEBPACK_IMPORTED_MODULE_3__["AuthRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
                _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
                ngx_captcha__WEBPACK_IMPORTED_MODULE_5__["NgxCaptchaModule"].forRoot({
                    reCaptcha2SiteKey: _env_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].reCaptchaSiteKey
                })
            ],
            declarations: [_app_pages_auth_pages_login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"], _app_pages_auth_pages_signup_signup_component__WEBPACK_IMPORTED_MODULE_10__["SignupComponent"], _auth_component__WEBPACK_IMPORTED_MODULE_4__["AuthComponent"], _app_pages_auth_pages_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_11__["ForgotPasswordComponent"], _app_pages_auth_pages_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_12__["ChangePasswordComponent"]]
        })
    ], AuthModule);
    return AuthModule;
}());



/***/ }),

/***/ "./src/app/pages/auth/pages/change-password/change-password.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/auth/pages/change-password/change-password.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container registration-form\">\n  <div class=\"row\">\n    <div class=\"col-md-10 col-lg-6 mx-auto my-5\">\n      <h2 class=\"text-center\">Change Password</h2>\n      <form [formGroup]=\"changePasswordForm\" (ngSubmit)=\"onSubmit()\" novalidate>\n        <div class=\"form-group\">\n          <mat-form-field>\n            <input matInput placeholder=\"Current Password\" formControlName=\"currentPassword\" type=\"password\"\n              appPasswordToggle>\n            <mat-error *ngIf=\"f.currentPassword?.hasError('required')\">\n              Current Password is required\n            </mat-error>\n          </mat-form-field>\n          <mat-form-field>\n            <input matInput placeholder=\"Choose Password\" formControlName=\"password\" type=\"password\" appPasswordToggle>\n            <mat-error *ngIf=\"f.currentPassword?.hasError('required')\">\n              Password is required\n            </mat-error>\n          </mat-form-field>\n          <mat-form-field>\n            <input matInput placeholder=\"Password Confirmation\" formControlName=\"passwordConfirm\" type=\"password\"\n              appPasswordToggle>\n            <mat-error *ngIf=\"f.passwordConfirm?.hasError('required')\">\n              Password Confirmation is required\n            </mat-error>\n            <mat-error *ngIf=\"f.passwordConfirm?.hasError('notEquivalent')\">\n              Passwords do not match\n            </mat-error>\n          </mat-form-field>\n          <div class=\"text-center\">\n            <button [disabled]=\"!changePasswordForm.valid\" appButtonConfirm>CHANGE PASSWORD</button>\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/auth/pages/change-password/change-password.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/auth/pages/change-password/change-password.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/auth/pages/change-password/change-password.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/auth/pages/change-password/change-password.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ChangePasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordComponent", function() { return ChangePasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_shared_validators_password_validator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/shared/validators/password.validator */ "./src/app/shared/validators/password.validator.ts");
/* harmony import */ var _app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ChangePasswordComponent = /** @class */ (function () {
    function ChangePasswordComponent(fb, toastr, router, authService) {
        this.fb = fb;
        this.toastr = toastr;
        this.router = router;
        this.authService = authService;
        this.changePasswordForm = this.fb.group({
            currentPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            passwordConfirm: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
        }, {
            validator: [_app_shared_validators_password_validator__WEBPACK_IMPORTED_MODULE_4__["PasswordValidator"].MatchPassword('password', 'passwordConfirm')]
        });
    }
    Object.defineProperty(ChangePasswordComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () { return this.changePasswordForm.controls; },
        enumerable: true,
        configurable: true
    });
    ChangePasswordComponent.prototype.onSubmit = function () {
        var _this = this;
        var val = this.changePasswordForm.value;
        var toastOptions = { closeButton: true, progressBar: true, positionClass: 'toast-bottom-right' };
        this.authService.changePassword(val.currentPassword, val.password, false)
            .subscribe(function (_success) {
            _this.toastr.success('Password changed successfully!', 'Change Password', toastOptions);
            _this.router.navigateByUrl('/app');
        }, function (error) {
            _this.toastr.error(error, 'Change Password', toastOptions);
        });
    };
    ChangePasswordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-change-password',
            template: __webpack_require__(/*! ./change-password.component.html */ "./src/app/pages/auth/pages/change-password/change-password.component.html"),
            styles: [__webpack_require__(/*! ./change-password.component.scss */ "./src/app/pages/auth/pages/change-password/change-password.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]])
    ], ChangePasswordComponent);
    return ChangePasswordComponent;
}());



/***/ }),

/***/ "./src/app/pages/auth/pages/forgot-password/forgot-password.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/auth/pages/forgot-password/forgot-password.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container registration-form\">\n  <div class=\"row\">\n    <div *ngIf=\"!showSuccessMessage\" class=\"col-md-10 col-lg-6 mx-auto my-5\">\n      <h2 class=\"text-center\">Forgot Your Password?</h2>\n      <form [formGroup]=\"forgotPasswordForm\" (ngSubmit)=\"onSubmit()\">\n        <div class=\"form-group\">\n          <p>Enter the email you used to register</p>\n          <mat-form-field>\n            <input matInput placeholder=\"E-mail\" formControlName=\"email\" autofocus>\n            <mat-error *ngIf=\"f.email?.hasError('email') && !email?.hasError('required')\">\n              Please enter a valid email address\n            </mat-error>\n            <mat-error *ngIf=\"f.email?.hasError('required')\">\n              Email is <strong>required</strong>\n            </mat-error>\n          </mat-form-field>\n          <div class=\"d-flex justify-content-center\">\n              <button [disabled]=\"!forgotPasswordForm.valid\" appButtonConfirm type=\"submit\">Submit</button>\n          </div>\n        </div>\n      </form>\n    </div>\n    <div *ngIf=\"showSuccessMessage\" class=\"col-md-6 mx-auto my-5 \">\n      <div class=\"form-group\">\n        <p>\n          We've emailed you instructions for setting your password, if an account exists with the email you entered.\n          You should receive them shortly.\n        </p>\n        <p>\n          If you don't receive an email, please make sure you've entered the address you registered with,\n          and check your spam folder.\n        </p>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/auth/pages/forgot-password/forgot-password.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/auth/pages/forgot-password/forgot-password.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/auth/pages/forgot-password/forgot-password.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/auth/pages/forgot-password/forgot-password.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ForgotPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function() { return ForgotPasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ForgotPasswordComponent = /** @class */ (function () {
    function ForgotPasswordComponent(fb, authService) {
        this.fb = fb;
        this.authService = authService;
        this.showSuccessMessage = false;
        this.forgotPasswordForm = this.fb.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(200)]]
        });
    }
    Object.defineProperty(ForgotPasswordComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () { return this.forgotPasswordForm.controls; },
        enumerable: true,
        configurable: true
    });
    ForgotPasswordComponent.prototype.onSubmit = function () {
        var _this = this;
        var val = this.forgotPasswordForm.value;
        this.authService.resetPassword(val.email)
            .subscribe(function () { return _this.showSuccessMessage = true; }, function () { return alert('Could not reset your password'); });
    };
    ForgotPasswordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-forgot-password',
            template: __webpack_require__(/*! ./forgot-password.component.html */ "./src/app/pages/auth/pages/forgot-password/forgot-password.component.html"),
            styles: [__webpack_require__(/*! ./forgot-password.component.scss */ "./src/app/pages/auth/pages/forgot-password/forgot-password.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], ForgotPasswordComponent);
    return ForgotPasswordComponent;
}());



/***/ }),

/***/ "./src/app/pages/auth/pages/login/login.component.html":
/*!*************************************************************!*\
  !*** ./src/app/pages/auth/pages/login/login.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container registration-form\">\n  <div class=\"row\">\n    <div class=\"col-md-10 col-lg-6 mx-auto my-5\">\n      <h2 class=\"text-center\">Log in to Instar Wallet</h2>\n      <form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\" novalidate>\n        <div class=\"form-group\">\n          <mat-form-field>\n            <input matInput placeholder=\"E-mail\" formControlName=\"email\" autofocus>\n            <mat-error *ngIf=\"f.email?.hasError('email') && !f.email?.hasError('required')\">\n              Please enter a valid email address\n            </mat-error>\n            <mat-error *ngIf=\"f.email?.hasError('required')\">\n              Email is <strong>required</strong>\n            </mat-error>\n          </mat-form-field>\n          <mat-form-field>\n            <input matInput placeholder=\"Password\" formControlName=\"password\" type=\"password\" appPasswordToggle>\n            <mat-error *ngIf=\"f.password?.hasError('required')\">\n                Password is required\n            </mat-error>\n          </mat-form-field>\n          <div class=\"row\">\n            <div class=\"col-12 col-lg-7 d-flex align-items-center mb-3 mb-md-0\">\n              <input type=\"checkbox\" id=\"keep-logged-in\">\n              <label class=\"keep-signed-in\" for=\"keep-logged-in\">Keep me logged in this computer</label>\n            </div>\n            <div class=\"col-12 col-lg-4\">\n              <button [disabled]=\"!loginForm.valid\" appButtonConfirm>Log in</button>\n            </div>\n          </div>\n        </div>\n      </form>\n      <div class=\"text-center row\">\n        <a routerLink=\"../password_reset\" class=\"log-link col-5 col-lg-4\">Forgot Password?</a>\n        <a routerLink=\"/signup\" class=\"log-link col-7 col-lg-4\">Don't have an account?</a>\n        <a target=\"_blank\" href=\"http://insights.network/privacy\" class=\"log-link col-12 col-lg-4\">Privacy Policy</a>\n        <a href=\"#\" class=\"log-link col-12 col-lg-12\">Have an issue with 2-factor authentication?</a>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/auth/pages/login/login.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/pages/auth/pages/login/login.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".confirm-button {\n  border-radius: 30px;\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  box-shadow: 0 20px 40px 0 rgba(215, 219, 230, 0.5); }\n\n.mat-form-field-label {\n  font-size: 0.8rem;\n  line-height: 1.67;\n  color: #8c9fbf; }\n"

/***/ }),

/***/ "./src/app/pages/auth/pages/login/login.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/auth/pages/login/login.component.ts ***!
  \***********************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/fesm5/ngxs-store.js");
/* harmony import */ var _app_core_state_auth_state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/core/state/auth.state */ "./src/app/core/state/auth.state.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _app_core_state_app_state__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/core/state/app.state */ "./src/app/core/state/app.state.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var LoginComponent = /** @class */ (function () {
    function LoginComponent(fb, toastr, router, store, route) {
        this.fb = fb;
        this.toastr = toastr;
        this.router = router;
        this.store = store;
        this.route = route;
        this.loginForm = this.fb.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    }
    Object.defineProperty(LoginComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () { return this.loginForm.controls; },
        enumerable: true,
        configurable: true
    });
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["filter"])(function (params) { return params.callback; }))
            .subscribe(function (params) {
            _this.callback = params.callback;
        });
    };
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        var val = this.loginForm.value;
        this.store.dispatch(new _app_core_state_app_state__WEBPACK_IMPORTED_MODULE_6__["ToggleLoading"]());
        this.store.dispatch(new _app_core_state_auth_state__WEBPACK_IMPORTED_MODULE_4__["Login"](val.email, val.password)).subscribe(function (_success) {
            _this.store.dispatch(new _app_core_state_app_state__WEBPACK_IMPORTED_MODULE_6__["ToggleLoading"]());
            _this.router.navigateByUrl(_this.callback || '/app');
        }, function (error) {
            _this.store.dispatch(new _app_core_state_app_state__WEBPACK_IMPORTED_MODULE_6__["ToggleLoading"]());
            var toastOptions = { closeButton: true, progressBar: true, positionClass: 'toast-bottom-right' };
            _this.toastr.error(error, 'Sign Up', toastOptions);
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/pages/auth/pages/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/pages/auth/pages/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Store"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/pages/auth/pages/signup/signup.component.html":
/*!***************************************************************!*\
  !*** ./src/app/pages/auth/pages/signup/signup.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container registration-form\">\n  <div class=\"row\">\n    <div class=\"col-md-10 col-lg-6 mx-auto my-5\">\n      <h2 class=\"text-center\">Create Your Account</h2>\n      <form [formGroup]=\"registerForm\" (ngSubmit)=\"onSubmit()\" novalidate>\n        <div class=\"form-group\">\n          <div class=\"row\">\n            <div class=\"col-6\">\n              <mat-form-field class=\"w-100\">\n                <input matInput placeholder=\"First Name\" formControlName=\"firstName\" autofocus>\n                <mat-error *ngIf=\"f.email?.hasError('required')\">\n                  First Name is <strong>required</strong>\n                </mat-error>\n              </mat-form-field>\n            </div>\n            <div class=\"col-6\">\n              <mat-form-field class=\"w-100\">\n                <input matInput placeholder=\"Last Name\" formControlName=\"lastName\">\n                <mat-error *ngIf=\"f.lastName?.hasError('required')\">\n                  Last Name is <strong>required</strong>\n                </mat-error>\n              </mat-form-field>\n            </div>\n          </div>\n          <mat-form-field>\n            <input matInput placeholder=\"E-mail\" formControlName=\"email\" autofocus>\n            <mat-error *ngIf=\"f.email?.hasError('email') && !f.email?.hasError('required')\">\n              Please enter a valid email address\n            </mat-error>\n            <mat-error *ngIf=\"f.email?.hasError('required')\">\n              Email is <strong>required</strong>\n            </mat-error>\n          </mat-form-field>\n          <mat-form-field>\n            <input matInput appPasswordToggle type=\"password\" placeholder=\"Choose Password\" formControlName=\"password\">\n            <mat-error *ngIf=\"f.password?.hasError('required')\">\n              Password is <strong>required</strong>\n            </mat-error>\n          </mat-form-field>\n          <mat-form-field>\n            <input matInput appPasswordToggle type=\"password\" placeholder=\"Confirm Password\" formControlName=\"passwordConfirm\">\n            <mat-error *ngIf=\"f.passwordConfirm?.hasError('required')\">\n              This field is <strong>required</strong>\n            </mat-error>\n            <mat-error *ngIf=\"f.passwordConfirm?.hasError('notEquivalent')\">\n              Passwords do not match\n            </mat-error>\n          </mat-form-field>\n          <div class=\"form-element\">\n            <ngx-recaptcha2 [size]=\"recaptchaConfig.size\" [hl]=\"recaptchaConfig.lang\" [theme]=\"recaptchaConfig.theme\"\n              [type]=\"recaptchaConfig.type\" (expire)=\"handleCaptchaExpire()\" (load)=\"handleCaptchaLoad()\" (success)=\"handleCaptchaSuccess($event)\"\n              formControlName=\"recaptcha\">\n            </ngx-recaptcha2>\n          </div>\n          <div class=\"form-element\">\n            <input type=\"checkbox\" id=\"terms\" formControlName=\"acceptsTerms\">\n            <label for=\"terms\">I certify that I am 18 years of age or older, and I agree to the\n              <a target=\"_blank\" href=\"https://insights.network/terms/\">User Agreement</a> and <a target=\"_blank \" href=\"https://insights.network/privacy/\">Privacy\n                Policy</a>.\n            </label>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-9 col-lg-7 mx-auto\">\n              <div class=\"form-element text-center\">\n                <button [disabled]=\"!registerForm.valid\" appButtonConfirm>Create Account</button>\n              </div>\n            </div>\n          </div>\n        </div>\n      </form>\n      <br>\n      <div class=\"text-center\">\n        <a routerLink=\"/login\" class=\"log-link\">Already have an account?</a>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/auth/pages/signup/signup.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/pages/auth/pages/signup/signup.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".confirm-button {\n  width: 240px;\n  height: 50px;\n  border-radius: 30px;\n  background-color: #63cab6;\n  box-shadow: 0 10px 20px 0 #d9e7ec; }\n\n.form-group {\n  padding: 1.84rem 2.68rem; }\n"

/***/ }),

/***/ "./src/app/pages/auth/pages/signup/signup.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/auth/pages/signup/signup.component.ts ***!
  \*************************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_shared_validators_password_validator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/shared/validators/password.validator */ "./src/app/shared/validators/password.validator.ts");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/fesm5/ngxs-store.js");
/* harmony import */ var _app_core_state_auth_state__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/core/state/auth.state */ "./src/app/core/state/auth.state.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @env/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var SignupComponent = /** @class */ (function () {
    function SignupComponent(fb, router, store, toastr, route) {
        this.fb = fb;
        this.router = router;
        this.store = store;
        this.toastr = toastr;
        this.route = route;
        this.captchaSuccess = false;
        this.recaptchaConfig = {
            size: 'normal',
            lang: 'en',
            theme: 'light',
            type: 'image',
        };
        this.registerForm = this.fb.group({
            firstName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            lastName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(200)]],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            passwordConfirm: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            recaptcha: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            acceptsTerms: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].requiredTrue]
        }, {
            validator: [_app_shared_validators_password_validator__WEBPACK_IMPORTED_MODULE_3__["PasswordValidator"].MatchPassword('password', 'passwordConfirm')]
        });
        this.toastOptions = { closeButton: true, progressBar: true, positionClass: 'toast-bottom-right' };
    }
    Object.defineProperty(SignupComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () { return this.registerForm.controls; },
        enumerable: true,
        configurable: true
    });
    SignupComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["filter"])(function (params) { return params._branch_match_id; }))
            .subscribe(function (params) {
            branch.init(_env_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].branchioKey, {
                branch_match_id: params._branch_match_id
            }, function (err, data) {
                if (err) {
                    _this.toastr.error(err, 'Sign Up', _this.toastOptions);
                }
                else {
                    _this.referrerUrl = data.data_parsed['~referring_link'];
                    if (_this.referrerUrl) {
                        _this.toastr.info('Successfully detected referrer url', 'Sign Up', _this.toastOptions);
                    }
                }
            });
        });
    };
    SignupComponent.prototype.handleCaptchaSuccess = function (captchaResponse) {
        this.captchaSuccess = true;
    };
    SignupComponent.prototype.handleCaptchaLoad = function () { };
    SignupComponent.prototype.handleCaptchaExpire = function () { };
    SignupComponent.prototype.onSubmit = function () {
        var _this = this;
        var val = this.registerForm.value;
        this.store.dispatch(new _app_core_state_auth_state__WEBPACK_IMPORTED_MODULE_5__["SignUp"](val.firstName, val.lastName, val.email, val.password, this.referrerUrl)).subscribe(function () { }, function (error) {
            _this.toastr.error(error, 'Sign Up', _this.toastOptions);
        }, function () { return _this.router.navigateByUrl('/app'); });
    };
    SignupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/pages/auth/pages/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.scss */ "./src/app/pages/auth/pages/signup/signup.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Store"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/shared/validators/password.validator.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/validators/password.validator.ts ***!
  \*********************************************************/
/*! exports provided: PasswordValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordValidator", function() { return PasswordValidator; });
var PasswordValidator = /** @class */ (function () {
    function PasswordValidator() {
    }
    PasswordValidator.MatchPassword = function (passwordKey, passwordConfirmationKey) {
        return function (group) {
            var passwordInput = group.controls[passwordKey], passwordConfirmationInput = group.controls[passwordConfirmationKey];
            if (passwordInput.value !== passwordConfirmationInput.value) {
                return passwordConfirmationInput.setErrors({ notEquivalent: true });
            }
            else {
                return passwordConfirmationInput.setErrors(null);
            }
        };
    };
    return PasswordValidator;
}());



/***/ })

}]);
//# sourceMappingURL=pages-auth-auth-module.js.map