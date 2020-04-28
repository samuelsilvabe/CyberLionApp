webpackJsonp([2],{

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TelaLoginPageModule", function() { return TelaLoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tela_login__ = __webpack_require__(278);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TelaLoginPageModule = /** @class */ (function () {
    function TelaLoginPageModule() {
    }
    TelaLoginPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__tela_login__["a" /* TelaLoginPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__tela_login__["a" /* TelaLoginPage */]),
            ],
        })
    ], TelaLoginPageModule);
    return TelaLoginPageModule;
}());

//# sourceMappingURL=tela-login.module.js.map

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TelaLoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TelaLoginPage = /** @class */ (function () {
    function TelaLoginPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    TelaLoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TelaLoginPage');
    };
    TelaLoginPage.prototype.chamaTabs = function () {
        this.navCtrl.setRoot('TabsPage');
    };
    TelaLoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tela-login',template:/*ion-inline-start:"C:\Users\BEYONDER\Desktop\CyberApp\CyberAplication\CyberApp\src\pages\tela-login\tela-login.html"*/'<ion-content padding id="container">\n	<div id="logo">\n    	<img src="../assets/logo/logo.png" alt="logo">\n	</div>\n	<ion-list>\n		<ion-input class="user" type="text" placeholder="Usuario"></ion-input>\n		<ion-input class="pass" type="text" placeholder="Senha"></ion-input>\n	</ion-list>\n\n	<div  id="buttons">\n		<button ion-button class="login" (click)="chamaTabs()"><a href="#" title="">Login</a></button>\n	</div>	\n</ion-content>\n'/*ion-inline-end:"C:\Users\BEYONDER\Desktop\CyberApp\CyberAplication\CyberApp\src\pages\tela-login\tela-login.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]) === "function" && _b || Object])
    ], TelaLoginPage);
    return TelaLoginPage;
    var _a, _b;
}());

//# sourceMappingURL=tela-login.js.map

/***/ })

});
//# sourceMappingURL=2.js.map