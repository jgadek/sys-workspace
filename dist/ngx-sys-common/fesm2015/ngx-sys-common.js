import { Injectable, ɵɵdefineInjectable, Component, NgModule, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subject } from 'rxjs';
import { BsModalService, ModalModule } from 'ngx-bootstrap';

/**
 * @fileoverview added by tsickle
 * Generated from: lib/ngx-sys-common.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgxSysCommonService {
    constructor() { }
}
NgxSysCommonService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
NgxSysCommonService.ctorParameters = () => [];
/** @nocollapse */ NgxSysCommonService.ngInjectableDef = ɵɵdefineInjectable({ factory: function NgxSysCommonService_Factory() { return new NgxSysCommonService(); }, token: NgxSysCommonService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * Generated from: lib/ngx-sys-common.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgxSysCommonComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
NgxSysCommonComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-ngx-sys-common',
                template: `
    <p>
      ngx-sys-common works!
    </p>
  `
            }] }
];
/** @nocollapse */
NgxSysCommonComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * Generated from: lib/ngx-sys-common.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgxSysCommonModule {
}
NgxSysCommonModule.decorators = [
    { type: NgModule, args: [{
                declarations: [NgxSysCommonComponent],
                imports: [],
                exports: [NgxSysCommonComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: lib/dynamic-modal/dynamic-modal.manager.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DynamicModalManager {
    constructor() {
        this.show = new Subject();
        this.hide = new Subject();
    }
}
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
class DynamicModalComponent {
    /**
     * @param {?} modalService
     */
    constructor(modalService) {
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
    ngOnInit() {
        this.subs.push(this.manager.show.subscribe((/**
         * @param {?} value
         * @return {?}
         */
        (value) => {
            this.openModal(value);
        })));
        this.subs.push(this.manager.hide.subscribe((/**
         * @return {?}
         */
        () => {
            this.hideModal();
        })));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._unsubscribe();
    }
    /**
     * @return {?}
     */
    onSubmit() {
        this.submit.next(this.params);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    openModal(value) {
        this.params = value ? value.params : {};
        /** @type {?} */
        const config = value ? value.params : {};
        /** @type {?} */
        const modalDefaultConfig = {
            backdrop: true,
            ignoreBackdropClick: true
        };
        /** @type {?} */
        const modalConfig = Object.assign({}, modalDefaultConfig, config);
        this.modalRef = this.modalService.show(this.modal, modalConfig);
    }
    /**
     * @param {?=} actionSuccess
     * @return {?}
     */
    hideModal(actionSuccess = false) {
        if (actionSuccess) {
            this.actionDone.emit(true);
        }
        this.modalRef.hide();
    }
    /**
     * @private
     * @return {?}
     */
    _unsubscribe() {
        this.subs.forEach((/**
         * @param {?} subscription
         * @return {?}
         */
        (subscription) => {
            subscription.unsubscribe();
        }));
        this.subs = [];
    }
}
DynamicModalComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-dynamic-modal',
                template: "<ng-template #modal>\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title pull-left font-weight-bold\">{{title}} <span *ngIf=\"params && params.title\"> {{params.title}}</span></h4>\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"hideModal()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"{{modalClass}}\">\n    <ng-content></ng-content>\n  </div>\n\n  <div class=\"modal-footer\" *ngIf=\"confirm\">\n    <div class=\"w-100\">\n      <div class=\"btn-group\">\n        <button (click)=\"onSubmit()\" class=\"btn btn-danger\">{{yesButtonText}}</button>\n        <button (click)=\"hideModal()\" class=\"btn btn-success\">{{noButtonText}}</button>\n      </div>\n    </div>\n  </div>\n</ng-template>\n",
                styles: [""]
            }] }
];
/** @nocollapse */
DynamicModalComponent.ctorParameters = () => [
    { type: BsModalService }
];
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
class DynamicModalModule {
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
class DynamicModalFormAbstract {
    constructor() {
        this.refresh = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        this.error = null;
        if (this.selected) {
            this._init();
        }
    }
}
DynamicModalFormAbstract.propDecorators = {
    manager: [{ type: Input }],
    selected: [{ type: Input }],
    refresh: [{ type: Output }]
};
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
