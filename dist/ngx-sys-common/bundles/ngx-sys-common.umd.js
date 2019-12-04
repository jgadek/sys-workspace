(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('rxjs'), require('ngx-bootstrap')) :
    typeof define === 'function' && define.amd ? define('@ngx/sys-common', ['exports', '@angular/core', '@angular/common', 'rxjs', 'ngx-bootstrap'], factory) :
    (global = global || self, factory((global.ngx = global.ngx || {}, global.ngx['sys-common'] = {}), global.ng.core, global.ng.common, global.rxjs, global.ngxBootstrap));
}(this, (function (exports, core, common, rxjs, ngxBootstrap) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __exportStar(m, exports) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m) return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/ngx-sys-common.service.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NgxSysCommonService = /** @class */ (function () {
        function NgxSysCommonService() {
        }
        NgxSysCommonService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        NgxSysCommonService.ctorParameters = function () { return []; };
        /** @nocollapse */ NgxSysCommonService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function NgxSysCommonService_Factory() { return new NgxSysCommonService(); }, token: NgxSysCommonService, providedIn: "root" });
        return NgxSysCommonService;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/ngx-sys-common.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NgxSysCommonComponent = /** @class */ (function () {
        function NgxSysCommonComponent() {
        }
        /**
         * @return {?}
         */
        NgxSysCommonComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
        };
        NgxSysCommonComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'lib-ngx-sys-common',
                        template: "\n    <p>\n      ngx-sys-common works!\n    </p>\n  "
                    }] }
        ];
        /** @nocollapse */
        NgxSysCommonComponent.ctorParameters = function () { return []; };
        return NgxSysCommonComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/ngx-sys-common.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NgxSysCommonModule = /** @class */ (function () {
        function NgxSysCommonModule() {
        }
        NgxSysCommonModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [NgxSysCommonComponent],
                        imports: [],
                        exports: [NgxSysCommonComponent]
                    },] }
        ];
        return NgxSysCommonModule;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/dynamic-modal/dynamic-modal.manager.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DynamicModalManager = /** @class */ (function () {
        function DynamicModalManager() {
            this.show = new rxjs.Subject();
            this.hide = new rxjs.Subject();
        }
        return DynamicModalManager;
    }());
    if (false) {
        /** @type {?} */
        DynamicModalManager.prototype.show;
        /** @type {?} */
        DynamicModalManager.prototype.hide;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/dynamic-modal/dynamic-modal.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DynamicModalComponent = /** @class */ (function () {
        function DynamicModalComponent(modalService) {
            this.modalService = modalService;
            this.modalClass = 'card-body';
            this.yesButtonText = 'Yes';
            this.noButtonText = 'No';
            this.actionDone = new core.EventEmitter();
            this.submit = new core.EventEmitter();
            this.subs = [];
        }
        /**
         * @return {?}
         */
        DynamicModalComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            var _this = this;
            this.subs.push(this.manager.show.subscribe((/**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                _this.openModal(value);
            })));
            this.subs.push(this.manager.hide.subscribe((/**
             * @return {?}
             */
            function () {
                _this.hideModal();
            })));
        };
        /**
         * @return {?}
         */
        DynamicModalComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            this._unsubscribe();
        };
        /**
         * @return {?}
         */
        DynamicModalComponent.prototype.onSubmit = /**
         * @return {?}
         */
        function () {
            this.submit.next(this.params);
        };
        /**
         * @param {?} value
         * @return {?}
         */
        DynamicModalComponent.prototype.openModal = /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.params = value ? value.params : {};
            /** @type {?} */
            var config = value ? value.params : {};
            /** @type {?} */
            var modalDefaultConfig = {
                backdrop: true,
                ignoreBackdropClick: true
            };
            /** @type {?} */
            var modalConfig = __assign({}, modalDefaultConfig, config);
            this.modalRef = this.modalService.show(this.modal, modalConfig);
        };
        /**
         * @param {?=} actionSuccess
         * @return {?}
         */
        DynamicModalComponent.prototype.hideModal = /**
         * @param {?=} actionSuccess
         * @return {?}
         */
        function (actionSuccess) {
            if (actionSuccess === void 0) { actionSuccess = false; }
            if (actionSuccess) {
                this.actionDone.emit(true);
            }
            this.modalRef.hide();
        };
        /**
         * @private
         * @return {?}
         */
        DynamicModalComponent.prototype._unsubscribe = /**
         * @private
         * @return {?}
         */
        function () {
            this.subs.forEach((/**
             * @param {?} subscription
             * @return {?}
             */
            function (subscription) {
                subscription.unsubscribe();
            }));
            this.subs = [];
        };
        DynamicModalComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'lib-dynamic-modal',
                        template: "<ng-template #modal>\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title pull-left font-weight-bold\">{{title}} <span *ngIf=\"params && params.title\"> {{params.title}}</span></h4>\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"hideModal()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"{{modalClass}}\">\n    <ng-content></ng-content>\n  </div>\n\n  <div class=\"modal-footer\" *ngIf=\"confirm\">\n    <div class=\"w-100\">\n      <div class=\"btn-group\">\n        <button (click)=\"onSubmit()\" class=\"btn btn-danger\">{{yesButtonText}}</button>\n        <button (click)=\"hideModal()\" class=\"btn btn-success\">{{noButtonText}}</button>\n      </div>\n    </div>\n  </div>\n</ng-template>\n",
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        DynamicModalComponent.ctorParameters = function () { return [
            { type: ngxBootstrap.BsModalService }
        ]; };
        DynamicModalComponent.propDecorators = {
            title: [{ type: core.Input }],
            confirm: [{ type: core.Input }],
            modalClass: [{ type: core.Input }],
            yesButtonText: [{ type: core.Input }],
            noButtonText: [{ type: core.Input }],
            manager: [{ type: core.Input }],
            actionDone: [{ type: core.Output }],
            submit: [{ type: core.Output }],
            modal: [{ type: core.ViewChild, args: ['modal', { static: true },] }]
        };
        return DynamicModalComponent;
    }());
    if (false) {
        /** @type {?} */
        DynamicModalComponent.prototype.title;
        /** @type {?} */
        DynamicModalComponent.prototype.confirm;
        /** @type {?} */
        DynamicModalComponent.prototype.modalClass;
        /** @type {?} */
        DynamicModalComponent.prototype.yesButtonText;
        /** @type {?} */
        DynamicModalComponent.prototype.noButtonText;
        /** @type {?} */
        DynamicModalComponent.prototype.manager;
        /** @type {?} */
        DynamicModalComponent.prototype.actionDone;
        /** @type {?} */
        DynamicModalComponent.prototype.submit;
        /** @type {?} */
        DynamicModalComponent.prototype.params;
        /** @type {?} */
        DynamicModalComponent.prototype.modalRef;
        /**
         * @type {?}
         * @private
         */
        DynamicModalComponent.prototype.subs;
        /** @type {?} */
        DynamicModalComponent.prototype.modal;
        /**
         * @type {?}
         * @protected
         */
        DynamicModalComponent.prototype.modalService;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/dynamic-modal/dynamic-modal.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DynamicModalModule = /** @class */ (function () {
        function DynamicModalModule() {
        }
        DynamicModalModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [DynamicModalComponent],
                        exports: [DynamicModalComponent],
                        imports: [
                            common.CommonModule,
                            ngxBootstrap.ModalModule.forRoot(),
                        ]
                    },] }
        ];
        return DynamicModalModule;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/dynamic-modal/dynamic-modal.interfaces.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @record
     */
    function IDynamicModalShowAction() { }
    if (false) {
        /** @type {?|undefined} */
        IDynamicModalShowAction.prototype.config;
        /** @type {?|undefined} */
        IDynamicModalShowAction.prototype.params;
    }
    /**
     * @record
     */
    function IDynamicModalShowActionParams() { }
    if (false) {
        /** @type {?|undefined} */
        IDynamicModalShowActionParams.prototype.title;
        /** @type {?|undefined} */
        IDynamicModalShowActionParams.prototype.body;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/dynamic-modal/dynamic-modal.form.abstract.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @abstract
     */
    var DynamicModalFormAbstract = /** @class */ (function () {
        function DynamicModalFormAbstract() {
            this.refresh = new core.EventEmitter();
        }
        /**
         * @return {?}
         */
        DynamicModalFormAbstract.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
        };
        /**
         * @param {?} changes
         * @return {?}
         */
        DynamicModalFormAbstract.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
        function (changes) {
            this.error = null;
            if (this.selected) {
                this._init();
            }
        };
        DynamicModalFormAbstract.propDecorators = {
            manager: [{ type: core.Input }],
            selected: [{ type: core.Input }],
            refresh: [{ type: core.Output }]
        };
        return DynamicModalFormAbstract;
    }());
    if (false) {
        /** @type {?} */
        DynamicModalFormAbstract.prototype.manager;
        /** @type {?} */
        DynamicModalFormAbstract.prototype.selected;
        /** @type {?} */
        DynamicModalFormAbstract.prototype.refresh;
        /** @type {?} */
        DynamicModalFormAbstract.prototype.error;
        /** @type {?} */
        DynamicModalFormAbstract.prototype.formSections;
        /**
         * @abstract
         * @protected
         * @return {?}
         */
        DynamicModalFormAbstract.prototype._init = function () { };
    }

    exports.DynamicModalFormAbstract = DynamicModalFormAbstract;
    exports.DynamicModalManager = DynamicModalManager;
    exports.DynamicModalModule = DynamicModalModule;
    exports.NgxSysCommonComponent = NgxSysCommonComponent;
    exports.NgxSysCommonModule = NgxSysCommonModule;
    exports.NgxSysCommonService = NgxSysCommonService;
    exports.ɵa = DynamicModalComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ngx-sys-common.umd.js.map
