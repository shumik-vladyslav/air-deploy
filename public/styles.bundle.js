webpackJsonp(["styles"],{

/***/ "../../../../../src/styles.css":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../../src/styles.css");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__("../../../../style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js??ref--8-1!../node_modules/postcss-loader/index.js??postcss!./styles.css", function() {
			var newContent = require("!!../node_modules/css-loader/index.js??ref--8-1!../node_modules/postcss-loader/index.js??postcss!./styles.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../../src/assets/css/form.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".tab-content .tab-pane{\r\n    padding-top: 0px;\r\n}\r\n\r\n.alert {\r\n  padding: 8px;\r\n  margin-bottom: 8px;\r\n}\r\n\r\n.ng-valid[required], .ng-valid.required  {\r\n  border-left: 5px solid #42A948; /* green */\r\n}\r\n.ng-invalid:not(form)  {\r\n  border-left: 5px solid #a94442; /* red */\r\n}\r\n", ""]);

// exports


/***/ }),

/***/ "../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../../src/assets/css/loading-bars.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".splash {\r\n    position: absolute;\r\n    z-index: 2000;\r\n    background: white;\r\n    color: gray;\r\n    top: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0\r\n}\r\n\r\n.splash-title {\r\n    text-align: center;\r\n    max-width: 500px;\r\n    margin: 15% auto;\r\n    padding: 20px\r\n}\r\n\r\n.splash-title h1{\r\n    font-size: 26px\r\n}\r\n\r\n.color-line {\r\n    border-radius:4px 4px 0 0\r\n}", ""]);

// exports


/***/ }),

/***/ "../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../../src/assets/css/riliwan-rabo.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*@import url(http://fonts.googleapis.com/css?family=Roboto+Condensed:400,700);\r\n written by riliwan balogun http://www.facebook.com/riliwan.rabo*/\r\n\r\n.board {\r\n    width: 100%;\r\n    margin: 60px auto;\r\n    height: auto;\r\n    min-height: 500px;\r\n    background: #fff;\r\n    /*box-shadow: 10px 10px #ccc,-10px 20px #ddd;*/\r\n}\r\n\r\n.board .nav-tabs {\r\n    position: relative;\r\n    border-bottom: 0;\r\n    width: 85%;\r\n    margin: 40px auto;\r\n    margin-bottom: 0;\r\n    box-sizing: border-box;\r\n}\r\n\r\n.board>div.board-inner {\r\n    background: #fafafa url(http://subtlepatterns.com/patterns/geometry2.png);\r\n    background-size: 30%;\r\n}\r\n\r\np.narrow {\r\n    width: 60%;\r\n    margin: 10px auto;\r\n}\r\n\r\n.liner {\r\n    height: 2px;\r\n    background: #ddd;\r\n    position: absolute;\r\n    width: 65%;\r\n    margin: 0 auto;\r\n    left: 0;\r\n    right: 0;\r\n    top: 50%;\r\n    z-index: 1;\r\n}\r\n\r\n.nav-tabs>li.active>a,\r\n.nav-tabs>li.active>a:hover,\r\n.nav-tabs>li.active>a:focus {\r\n    color: #555555;\r\n    cursor: default;\r\n    /* background-color: #ffffff; */\r\n    border: 0;\r\n    border-bottom-color: transparent;\r\n}\r\n\r\nspan.round-tabs {\r\n    /*width: 70px;\r\n    height: 70px;\r\n    line-height: 70px;\r\n    font-size: 25px;\r\n    */\r\n    width: 65px;\r\n    height: 65px;\r\n    line-height: 65px;\r\n    display: inline-block;\r\n    border-radius: 100px;\r\n    background: white;\r\n    z-index: 2;\r\n    position: absolute;\r\n    left: 0;\r\n    text-align: center;\r\n    font-size:30px;\r\n    \r\n}\r\n\r\nspan.round-tabs.one {\r\n    color: rgb(34, 194, 34);\r\n    border: 2px solid rgb(34, 194, 34);\r\n}\r\n\r\nli.active span.round-tabs.one {\r\n    background: #fff !important;\r\n    border: 2px solid #ddd;\r\n    color: rgb(34, 194, 34);\r\n}\r\n\r\nspan.round-tabs.two {\r\n    color: #febe29;\r\n    border: 2px solid #febe29;\r\n}\r\n\r\nli.active span.round-tabs.two {\r\n    background: #fff !important;\r\n    border: 2px solid #ddd;\r\n    color: #febe29;\r\n}\r\n\r\nspan.round-tabs.three {\r\n    color: #3e5e9a;\r\n    border: 2px solid #3e5e9a;\r\n}\r\n\r\nli.active span.round-tabs.three {\r\n    background: #fff !important;\r\n    border: 2px solid #ddd;\r\n    color: #3e5e9a;\r\n}\r\n\r\nspan.round-tabs.four {\r\n    color: #f1685e;\r\n    border: 2px solid #f1685e;\r\n}\r\n\r\nli.active span.round-tabs.four {\r\n    background: #fff !important;\r\n    border: 2px solid #ddd;\r\n    color: #f1685e;\r\n}\r\n\r\nspan.round-tabs.five {\r\n    color: #999;\r\n    border: 2px solid #999;\r\n}\r\n\r\nli.active span.round-tabs.five {\r\n    background: #fff !important;\r\n    border: 2px solid #ddd;\r\n    color: #999;\r\n}\r\n\r\n.nav-tabs>li.active>a span.round-tabs {\r\n    background: #fafafa;\r\n}\r\n\r\n.nav-tabs>li {\r\n    /*width: 20%;*/\r\n    width: 33%;\r\n}\r\n\r\n/*li.active:before {\r\n    content: \" \";\r\n    position: absolute;\r\n    left: 45%;\r\n    opacity:0;\r\n    margin: 0 auto;\r\n    bottom: -2px;\r\n    border: 10px solid transparent;\r\n    border-bottom-color: #fff;\r\n    z-index: 1;\r\n    transition:0.2s ease-in-out;\r\n}*/\r\n\r\n.nav-tabs>li:after {\r\n    content: \" \";\r\n    position: absolute;\r\n    left: 45%;\r\n    opacity: 0;\r\n    margin: 0 auto;\r\n    bottom: 0px;\r\n    border: 5px solid transparent;\r\n    border-bottom-color: #ddd;\r\n    transition: 0.1s ease-in-out;\r\n}\r\n\r\n.nav-tabs>li.active:after {\r\n    content: \" \";\r\n    position: absolute;\r\n    left: 45%;\r\n    opacity: 1;\r\n    margin: 0 auto;\r\n    bottom: 0px;\r\n    border: 10px solid transparent;\r\n    border-bottom-color: #ddd;\r\n}\r\n\r\n.nav-tabs>li a {\r\n    width: 65px;\r\n    height: 65px;\r\n    margin: 20px auto;\r\n    border-radius: 100%;\r\n    padding: 0;\r\n}\r\n\r\n.nav-tabs>li a:hover {\r\n    background: transparent;\r\n}\r\n\r\n.tab-content .tab-pane {\r\n    position: relative;\r\n    padding-top: 50px;\r\n}\r\n\r\n.tab-content .head {\r\n    font-size: 25px;\r\n    text-transform: uppercase;\r\n    padding-bottom: 10px;\r\n    font-weight: 800;\r\n}\r\n\r\n.btn-outline-rounded {\r\n    padding: 8px 50px;\r\n    margin: 20px 0;\r\n    border: 2px solid transparent;\r\n    border-radius: 4px;\r\n    color: #063E4B;\r\n    font-weight: bold;\r\n}\r\n\r\n.btn.green {\r\n    background-color: #5cb85c;\r\n    /*border: 2px solid #5cb85c;*/\r\n    color: #ffffff;\r\n}\r\n\r\n@media( max-width: 585px) {\r\n    .board {\r\n        width: 100%;\r\n        height: auto !important;\r\n    }\r\n    span.round-tabs {\r\n        font-size: 16px;\r\n        width: 50px;\r\n        height: 50px;\r\n        line-height: 50px;\r\n    }\r\n    .tab-content .head {\r\n        font-size: 20px;\r\n    }\r\n    .nav-tabs>li a {\r\n        width: 50px;\r\n        height: 50px;\r\n        line-height: 50px;\r\n    }\r\n    .nav-tabs>li.active:after {\r\n        content: \" \";\r\n        position: absolute;\r\n        left: 35%;\r\n    }\r\n    .btn-outline-rounded {\r\n        padding: 12px 20px;\r\n    }\r\n}", ""]);

// exports


/***/ }),

/***/ "../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../../src/assets/css/style.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\r\n    font-family: 'Noto Sans', sans-serif;\r\n}\r\n.btn-default {\r\n    border-color: #063E4B;\r\n    margin-right: 10px;\r\n}\r\n\r\n.btn-info {\r\n    background-color: #eaab00;\r\n    color: #063E4B;\r\n}\r\n\r\n.btn-info:active:focus,\r\n.btn-info:active:hover,\r\n.btn-info:focus {\r\n    color: #063E4B;\r\n    background-color: #EAAB00;\r\n    border-color: #EAAB00;\r\n}\r\n\r\n.btn-info:hover,\r\n.btn-info:active {\r\n    color: #063E4B;\r\n    background-color: #EAAB00;\r\n    border-color: #EAAB00;\r\n}\r\n\r\n.btn-default:hover {\r\n    background-color: #fff;\r\n    color: #063E4B;\r\n    border-color: #063E4B;\r\n}\r\n\r\n.tab-content .choice {\r\n    text-align: center;\r\n    cursor: pointer;\r\n    margin-top: 38px;\r\n}\r\n\r\n.tab-content .choice i {\r\n    font-size: 32px;\r\n    line-height: 55px;\r\n}\r\n\r\n.btn-radio {\r\n    width: 100%;\r\n}\r\n\r\n.img-radio {\r\n    opacity: 0.8;\r\n    margin-bottom: 5px;\r\n}\r\n\r\n.space-20 {\r\n    margin-top: 20px;\r\n}\r\n\r\n/* active buttons */\r\n\r\n#status-buttons a.active span.round-tabs.one {\r\n    color: #fff;\r\n    border-color:#eaab00;\r\n    background:#eaab00;\r\n}\r\n#status-buttons a.active span.bottom-text{\r\n    color:#eaab00;\r\n}\r\n\r\nspan.round-tabs.one {\r\n    color: #003946 ;\r\n    border: 2px solid #003946 ;\r\n}\r\n\r\n#status-buttons a.active span.round-tabs.two {\r\n    background:#eaab00;\r\n    color: #fff;\r\n    border-color:#eaab00;\r\n}\r\n\r\nspan.round-tabs.two {\r\n    color: white;\r\n    border: 2px solid #eaab00;\r\n    background:#eaab00;\r\n}\r\n\r\n#myTab li a.active span.round-tabs::before {\r\n    content: \"\\F00C\";\r\n    background:#0B713A; \r\n    position: absolute;\r\n    border-radius: 18px;\r\n    -webkit-border-radius: 18px;\r\n    width: 18px;\r\n    height: 18px;\r\n    line-height: 18px;\r\n    text-align: center;\r\n    right: 0;\r\n    font-size: 12px !important;\r\n    color: #fff;\r\n    display: inline-block;\r\n    font: normal normal normal 14px/1 FontAwesome;\r\n    font-size: inherit;\r\n    text-rendering: auto;\r\n    -webkit-font-smoothing: antialiased;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    display: -webkit-flex;\r\n    -ms-flex-align: center;\r\n        align-items: center;\r\n    -webkit-align-items: center;\r\n    -ms-flex-pack: center;\r\n        justify-content: center;\r\n    -webkit-justify-content: center;\r\n}\r\n\r\n#status-buttons a.active span.round-tabs.three {\r\n    background: #3e5e9a;\r\n    color: #fff\r\n}\r\n\r\n#status-buttons a.active span.round-tabs.four {\r\n    background:#eaab00;\r\n    color: #fff;\r\n    border-color:#eaab00;\r\n}\r\n\r\nspan.round-tabs.four {\r\n    color: white;\r\n    border: 2px solid #eaab00;\r\n    background: #eaab00;\r\n}\r\n\r\n.iradio_buttons {\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n    margin: 0;\r\n    padding: 0;\r\n    width: 22px;\r\n    height: 22px;\r\n    background: #eaab00 no-repeat;\r\n    border: none;\r\n    cursor: pointer;\r\n}\r\n\r\n.iradio_buttons {\r\n    background-position: -120px 0;\r\n}\r\n\r\n.iradio_buttons.hover {\r\n    background-position: -144px 0;\r\n}\r\n\r\n.iradio_buttons.checked {\r\n    background-position: -168px 0;\r\n}\r\n\r\n/*****************************************/\r\n\r\n.board-inner {\r\n    padding-top: 22px !important;\r\n    max-width: 700px;\r\n    margin: 0 auto 60px auto;\r\n}\r\n\r\n.nav-tabs {\r\n    border-bottom: none;\r\n    width: 100% x!important;\r\n    margin: 10px auto !important;\r\n}\r\n\r\n.nav-tabs > li{\r\n    position: relative;\r\n}\r\n\r\n.nav-tabs > li a span.round-tabs\r\n{\r\n    border-color:#003946 ;\r\n    color:#003946 ;\r\n    background: #fff;\r\n    transition:all 0.5s;\r\n    -webkit-transition:all 0.5s;\r\n    -moz-transition:all 0.5s;\r\n}\r\n\r\n.nav-tabs > li a span.bottom-text{\r\n    position: absolute;\r\n    bottom:-35px;\r\n    left:50%;\r\n    transform: translateX(-50%);\r\n    -webkit-transform: translateX(-50%);\r\n    -moz-transform: translateX(-50%);\r\n    color:#003946 ;\r\n    transition:all 0.5s;\r\n    -webkit-transition:all 0.5s;\r\n    -moz-transition:all 0.5s;\r\n}\r\n\r\n\r\n.nav-tabs > li a:hover span.round-tabs{\r\n    border-color:#eaab00;\r\n    color:#eaab00;\r\n}\r\n.nav-tabs > li a:hover span.bottom-text{\r\n    color:#eaab00;\r\n}\r\n\r\n\r\ninput {\r\n    border-left: 1px solid #ccc !important;\r\n}\r\n\r\n.row.no-gutters {\r\n    margin-right: 30px;\r\n    margin-left: 30px;\r\n}\r\n\r\n.border-bottom {\r\n    border-bottom: 2px solid #F4F4F4;\r\n}\r\n\r\nlabel.review-label {\r\n    display: block;\r\n    font-weight: normal;\r\n    color: #858585;\r\n}\r\n\r\n.pb-20 {\r\n    padding-bottom: 20px;\r\n}\r\n\r\n.bg-grey {\r\n    background-color: #F4F4F4;\r\n}\r\n\r\n.investment-section {\r\n    border-radius: 3px;\r\n    padding: 30px 0px;\r\n}\r\n\r\n.total-amount-review {\r\n    color: #d0651e;\r\n    font-size: 23px;\r\n}\r\n\r\n.declaration-text {\r\n    padding: 10px;\r\n}\r\n\r\n.pb-2.client-declaration-common-font {\r\n    padding-bottom: 14px;\r\n}\r\n\r\n.tab-content .head {\r\n    font-size: 25px;\r\n    text-transform: uppercase;\r\n    padding-bottom: 10px;\r\n    font-weight: 800;\r\n    color: rgb(6, 62, 74);\r\n}\r\n\r\n.tab-content .info {\r\n    max-width: 600px;\r\n    margin: 0 auto 20px;\r\n    font-size: 12px;\r\n    color: #9B9B9B;\r\n}\r\n\r\n.box-row {\r\n    width: 100%;\r\n    display: inline-block;\r\n}\r\n\r\n.box {\r\n    padding: 40px 20px;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-pack: distribute;\r\n        justify-content: space-around;\r\n}\r\n\r\n.box-line {\r\n    border: 1px solid lightgray;\r\n    box-sizing: border-box;\r\n    text-align: center;\r\n    margin-bottom: 20px;\r\n    min-height: 230px;\r\n    cursor: pointer;\r\n    transition: all 0.5s;\r\n    -webkit-transition: all 0.5s;\r\n}\r\n\r\n.box-line img {\r\n    margin: 10px 10px auto;\r\n}\r\n\r\n.box-line h2 {\r\n    font-size: 15px;\r\n    font-weight: bold;\r\n    clear: both;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    width: 100%;\r\n    -ms-flex-pack: center;\r\n        justify-content: center;\r\n    text-transform: uppercase;\r\n    line-height: 20px;\r\n    transition: all 0.5s;\r\n    -webkit-transition: all 0.5s;\r\n}\r\n\r\n.box-line:hover{\r\n    border-color:#eaab00;\r\n}\r\n\r\n.box-line:hover h2{\r\n    color:#eaab00;   \r\n}\r\n\r\n:-ms-input-placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */\r\n    color: #888;\r\n    opacity: 1; /* Firefox */\r\n}\r\n\r\n::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */\r\n    color: #888;\r\n    opacity: 1; /* Firefox */\r\n}\r\n\r\n:-ms-input-placeholder { /* Internet Explorer 10-11 */\r\n    color: #888;\r\n}\r\n\r\n::-ms-input-placeholder { /* Microsoft Edge */\r\n    color: #888;\r\n}\r\n\r\n.custom-input {\r\n    background-color: transparent;\r\n    border:1px solid #b4b4b4;\r\n    border-radius: 0px;\r\n    padding: 8px 10px !important;\r\n}\r\n.form-control {\r\n    height: 36px !important;\r\n    font-size: 16px;\r\n    /* color: #ccc; */\r\n    color: rgb(0, 0, 0);\r\n    border:1px solid #b4b4b4;\r\n    border-radius:0px;\r\n}\r\n\r\n\r\n.custom-select {\r\n    border-radius: 0px;\r\n    height: 36px !important;\r\n    /* color: #ccc; */\r\n    color: rgb(0, 0, 0);\r\n    font-size: 16px;\r\n}\r\n.custome-file{\r\n    height: 40px !important;\r\n    background-color: transparent;\r\n    border:1px solid #b4b4b4;\r\n    border-radius: 0px;\r\n}\r\n.control-label{\r\n    color: #003946;\r\n    font-weight: normal;\r\n}\r\n\r\n\r\n.top-bottom-space{\r\n    padding: 56px 0px;\r\n}\r\n\r\n.common-btn-wid{\r\n    max-width:160px;\r\n    width:100%;\r\n}\r\n\r\n.padding-15{\r\n    padding: 15px 0px;\r\n} \r\n.first-popup-common-color{\r\n    color: #606E8A;\r\n}\r\n\r\n.varification-sub-title {\r\n    font-size: 16px;\r\n}\r\n.df{\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n} \r\n.df-wrap{\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n}\r\n.jc-c{\r\n    -ms-flex-pack: center;\r\n        justify-content: center;\r\n}\r\n.ai-c{\r\n    -ms-flex-align: center;\r\n        align-items: center;\r\n}\r\n\r\n@media screen and (max-width:768px){\r\n    .spacing-btn{\r\n        display: block; \r\n    }\r\n\r\n    .e-content{\r\n        padding:15px 15px !important;\r\n    }\r\n}\r\n@media screen and (max-width:768px){\r\n    .spacing-btn {\r\n        text-align: left !important;\r\n    }\r\n}\r\n@media screen and (max-width:767px){\r\n    .mt-100{\r\n        margin-top:40px !important;\r\n    }\r\n    .top-bottom-space{\r\n        padding:40px 0px 0px 0px !important;\r\n    }\r\n\r\n    .subheading{\r\n        padding:0px 0px 30px 0px !important;\r\n        margin:0 !important;\r\n    }\r\n    .nav-tabs > li a span.bottom-text {\r\n\r\n        bottom: -55px;\r\n\r\n    }\r\n\r\n  \r\n}\r\n\r\n\r\n@media screen and (max-width:570px){\r\n    .row.no-gutters {\r\n        margin-right: 0px !important;\r\n        margin-left: 0px !important;\r\n    }\r\n\r\n    .common-btn-wid{\r\n        max-width:135px !important;\r\n        width:100%;\r\n    }\r\n\r\n}\r\n", ""]);

// exports


/***/ }),

/***/ "../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../../src/styles.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(//maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css);", ""]);
exports.push([module.i, "@import url(//netdna.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.css);", ""]);
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Noto+Sans);", ""]);
exports.i(__webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../../src/assets/css/riliwan-rabo.css"), "");
exports.i(__webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../../src/assets/css/style.css"), "");
exports.i(__webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../../src/assets/css/form.css"), "");
exports.i(__webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../../src/assets/css/loading-bars.css"), "");

// module
exports.push([module.i, "/* You can add global styles to this file, and also import other style files */", ""]);

// exports


/***/ }),

/***/ "../../../../css-loader/lib/css-base.js":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "../../../../style-loader/addStyles.js":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
	}),
	getHeadElement = memoize(function () {
		return document.head || document.getElementsByTagName("head")[0];
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [];

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the bottom of <head>.
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
}

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var head = getHeadElement();
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			head.insertBefore(styleElement, head.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			head.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		head.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	styleElement.type = "text/css";
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	linkElement.rel = "stylesheet";
	insertStyleElement(options, linkElement);
	return linkElement;
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/styles.css");


/***/ })

},[2]);
//# sourceMappingURL=styles.bundle.js.map