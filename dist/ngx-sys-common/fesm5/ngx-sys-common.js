import { Injectable, ɵɵdefineInjectable, Component, NgModule, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { __assign } from 'tslib';
import { Subject } from 'rxjs';
import { BsModalService, ModalModule } from 'ngx-bootstrap';

/**
 * @fileoverview added by tsickle
 * Generated from: lib/ngx-sys-common.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgxSysCommonService = /** @class */ (function () {
    function NgxSysCommonService() {
    }
    NgxSysCommonService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    NgxSysCommonService.ctorParameters = function () { return []; };
    /** @nocollapse */ NgxSysCommonService.ngInjectableDef = ɵɵdefineInjectable({ factory: function NgxSysCommonService_Factory() { return new NgxSysCommonService(); }, token: NgxSysCommonService, providedIn: "root" });
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
        { type: Component, args: [{
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
        { type: NgModule, args: [{
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
        this.show = new Subject();
        this.hide = new Subject();
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
        this.actionDone = new EventEmitter();
        this.submit = new EventEmitter();
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
        { type: Component, args: [{
                    selector: 'lib-dynamic-modal',
                    template: "<ng-template #modal>\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title pull-left font-weight-bold\">{{title}} <span *ngIf=\"params && params.title\"> {{params.title}}</span></h4>\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"hideModal()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"{{modalClass}}\">\n    <ng-content></ng-content>\n  </div>\n\n  <div class=\"modal-footer\" *ngIf=\"confirm\">\n    <div class=\"w-100\">\n      <div class=\"btn-group\">\n        <button (click)=\"onSubmit()\" class=\"btn btn-danger\">{{yesButtonText}}</button>\n        <button (click)=\"hideModal()\" class=\"btn btn-success\">{{noButtonText}}</button>\n      </div>\n    </div>\n  </div>\n</ng-template>\n",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    DynamicModalComponent.ctorParameters = function () { return [
        { type: BsModalService }
    ]; };
    DynamicModalComponent.propDecorators = {
        title: [{ type: Input }],
        confirm: [{ type: Input }],
        modalClass: [{ type: Input }],
        yesButtonText: [{ type: Input }],
        noButtonText: [{ type: Input }],
        manager: [{ type: Input }],
        actionDone: [{ type: Output }],
        submit: [{ type: Output }],
        modal: [{ type: ViewChild, args: ['modal', { static: true },] }]
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
        { type: NgModule, args: [{
                    declarations: [DynamicModalComponent],
                    exports: [DynamicModalComponent],
                    imports: [
                        CommonModule,
                        ModalModule.forRoot(),
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
        this.refresh = new EventEmitter();
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
        manager: [{ type: Input }],
        selected: [{ type: Input }],
        refresh: [{ type: Output }]
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

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: ngx-sys-common.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { DynamicModalFormAbstract, DynamicModalManager, DynamicModalModule, NgxSysCommonComponent, NgxSysCommonModule, NgxSysCommonService, DynamicModalComponent as ɵa };
//# sourceMappingURL=ngx-sys-common.js.map
