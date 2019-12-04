/**
 * @fileoverview added by tsickle
 * Generated from: lib/dynamic-modal/dynamic-modal.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, EventEmitter, Input, Output, TemplateRef, ViewChild } from '@angular/core';
import { DynamicModalManager } from './dynamic-modal.manager';
import { BsModalService } from 'ngx-bootstrap';
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
        var modalConfig = tslib_1.__assign({}, modalDefaultConfig, config);
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
export { DynamicModalComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy1tb2RhbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Abmd4L3N5cy1jb21tb24vIiwic291cmNlcyI6WyJsaWIvZHluYW1pYy1tb2RhbC9keW5hbWljLW1vZGFsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQXFCLE1BQU0sRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ2hILE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBRzVELE9BQU8sRUFBYSxjQUFjLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFHekQ7SUF1QkUsK0JBQXNCLFlBQTRCO1FBQTVCLGlCQUFZLEdBQVosWUFBWSxDQUFnQjtRQWZ6QyxlQUFVLEdBQVEsV0FBVyxDQUFDO1FBQzlCLGtCQUFhLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLGlCQUFZLEdBQUcsSUFBSSxDQUFDO1FBR25CLGVBQVUsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ2hDLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBSzlCLFNBQUksR0FBbUIsRUFBRSxDQUFDO0lBSW9CLENBQUM7Ozs7SUFFdkQsd0NBQVE7OztJQUFSO1FBQUEsaUJBWUM7UUFYQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FDWixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTOzs7O1FBQUMsVUFBQyxLQUFxQztZQUNoRSxLQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3hCLENBQUMsRUFBQyxDQUNILENBQUM7UUFFRixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FDWixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTOzs7UUFBQztZQUMxQixLQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDbkIsQ0FBQyxFQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7Ozs7SUFFRCwyQ0FBVzs7O0lBQVg7UUFDRSxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDdEIsQ0FBQzs7OztJQUVELHdDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNoQyxDQUFDOzs7OztJQUVNLHlDQUFTOzs7O0lBQWhCLFVBQWlCLEtBQXFDO1FBQ3BELElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7O1lBRWxDLE1BQU0sR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUU7O1lBQ2xDLGtCQUFrQixHQUFHO1lBQ3pCLFFBQVEsRUFBRSxJQUFJO1lBQ2QsbUJBQW1CLEVBQUUsSUFBSTtTQUMxQjs7WUFFSyxXQUFXLHdCQUFPLGtCQUFrQixFQUFLLE1BQU0sQ0FBQztRQUV0RCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsV0FBVyxDQUFDLENBQUM7SUFDbEUsQ0FBQzs7Ozs7SUFFTSx5Q0FBUzs7OztJQUFoQixVQUFpQixhQUE4QjtRQUE5Qiw4QkFBQSxFQUFBLHFCQUE4QjtRQUM3QyxJQUFJLGFBQWEsRUFBRTtZQUNqQixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUM1QjtRQUNELElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDdkIsQ0FBQzs7Ozs7SUFFTyw0Q0FBWTs7OztJQUFwQjtRQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTzs7OztRQUFDLFVBQUMsWUFBMEI7WUFDM0MsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQzdCLENBQUMsRUFBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7SUFDakIsQ0FBQzs7Z0JBMUVGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsbUJBQW1CO29CQUM3QixteUJBQTZDOztpQkFFOUM7Ozs7Z0JBUG1CLGNBQWM7Ozt3QkFTL0IsS0FBSzswQkFDTCxLQUFLOzZCQUNMLEtBQUs7Z0NBQ0wsS0FBSzsrQkFDTCxLQUFLOzBCQUNMLEtBQUs7NkJBRUwsTUFBTTt5QkFDTixNQUFNO3dCQU9OLFNBQVMsU0FBQyxPQUFPLEVBQUUsRUFBQyxNQUFNLEVBQUUsSUFBSSxFQUFDOztJQXNEcEMsNEJBQUM7Q0FBQSxBQTNFRCxJQTJFQztTQXRFWSxxQkFBcUI7OztJQUNoQyxzQ0FBdUI7O0lBQ3ZCLHdDQUEwQjs7SUFDMUIsMkNBQXVDOztJQUN2Qyw4Q0FBK0I7O0lBQy9CLDZDQUE2Qjs7SUFDN0Isd0NBQXNDOztJQUV0QywyQ0FBMEM7O0lBQzFDLHVDQUFzQzs7SUFFdEMsdUNBQTZDOztJQUM3Qyx5Q0FBNEI7Ozs7O0lBRTVCLHFDQUFrQzs7SUFFbEMsc0NBQTREOzs7OztJQUVoRCw2Q0FBc0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25EZXN0cm95LCBPbkluaXQsIE91dHB1dCwgVGVtcGxhdGVSZWYsIFZpZXdDaGlsZH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0R5bmFtaWNNb2RhbE1hbmFnZXJ9IGZyb20gJy4vZHluYW1pYy1tb2RhbC5tYW5hZ2VyJztcbmltcG9ydCB7U3Vic2NyaXB0aW9ufSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHtCc01vZGFsUmVmLCBCc01vZGFsU2VydmljZX0gZnJvbSAnbmd4LWJvb3RzdHJhcCc7XG5pbXBvcnQge0lEeW5hbWljTW9kYWxTaG93QWN0aW9uLCBJRHluYW1pY01vZGFsU2hvd0FjdGlvblBhcmFtc30gZnJvbSAnLi9keW5hbWljLW1vZGFsLmludGVyZmFjZXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItZHluYW1pYy1tb2RhbCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9keW5hbWljLW1vZGFsLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZHluYW1pYy1tb2RhbC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIER5bmFtaWNNb2RhbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgQElucHV0KCkgdGl0bGU6IHN0cmluZztcbiAgQElucHV0KCkgY29uZmlybTogYm9vbGVhbjtcbiAgQElucHV0KCkgbW9kYWxDbGFzczogYW55ID0gJ2NhcmQtYm9keSc7XG4gIEBJbnB1dCgpIHllc0J1dHRvblRleHQgPSAnWWVzJztcbiAgQElucHV0KCkgbm9CdXR0b25UZXh0ID0gJ05vJztcbiAgQElucHV0KCkgbWFuYWdlcjogRHluYW1pY01vZGFsTWFuYWdlcjtcblxuICBAT3V0cHV0KCkgYWN0aW9uRG9uZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIHN1Ym1pdCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBwdWJsaWMgcGFyYW1zOiBJRHluYW1pY01vZGFsU2hvd0FjdGlvblBhcmFtcztcbiAgcHVibGljIG1vZGFsUmVmOiBCc01vZGFsUmVmO1xuXG4gIHByaXZhdGUgc3ViczogU3Vic2NyaXB0aW9uW10gPSBbXTtcblxuICBAVmlld0NoaWxkKCdtb2RhbCcsIHtzdGF0aWM6IHRydWV9KSBtb2RhbDogVGVtcGxhdGVSZWY8YW55PjtcblxuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgbW9kYWxTZXJ2aWNlOiBCc01vZGFsU2VydmljZSkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5zdWJzLnB1c2goXG4gICAgICB0aGlzLm1hbmFnZXIuc2hvdy5zdWJzY3JpYmUoKHZhbHVlOiBJRHluYW1pY01vZGFsU2hvd0FjdGlvbiB8IG51bGwpID0+IHtcbiAgICAgICAgdGhpcy5vcGVuTW9kYWwodmFsdWUpO1xuICAgICAgfSlcbiAgICApO1xuXG4gICAgdGhpcy5zdWJzLnB1c2goXG4gICAgICB0aGlzLm1hbmFnZXIuaGlkZS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICB0aGlzLmhpZGVNb2RhbCgpO1xuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5fdW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIG9uU3VibWl0KCkge1xuICAgIHRoaXMuc3VibWl0Lm5leHQodGhpcy5wYXJhbXMpO1xuICB9XG5cbiAgcHVibGljIG9wZW5Nb2RhbCh2YWx1ZTogSUR5bmFtaWNNb2RhbFNob3dBY3Rpb24gfCBudWxsKSB7XG4gICAgdGhpcy5wYXJhbXMgPSB2YWx1ZSA/IHZhbHVlLnBhcmFtcyA6IHt9O1xuXG4gICAgY29uc3QgY29uZmlnID0gdmFsdWUgPyB2YWx1ZS5wYXJhbXMgOiB7fTtcbiAgICBjb25zdCBtb2RhbERlZmF1bHRDb25maWcgPSB7XG4gICAgICBiYWNrZHJvcDogdHJ1ZSxcbiAgICAgIGlnbm9yZUJhY2tkcm9wQ2xpY2s6IHRydWVcbiAgICB9O1xuXG4gICAgY29uc3QgbW9kYWxDb25maWcgPSB7Li4ubW9kYWxEZWZhdWx0Q29uZmlnLCAuLi5jb25maWd9O1xuXG4gICAgdGhpcy5tb2RhbFJlZiA9IHRoaXMubW9kYWxTZXJ2aWNlLnNob3codGhpcy5tb2RhbCwgbW9kYWxDb25maWcpO1xuICB9XG5cbiAgcHVibGljIGhpZGVNb2RhbChhY3Rpb25TdWNjZXNzOiBib29sZWFuID0gZmFsc2UpIHtcbiAgICBpZiAoYWN0aW9uU3VjY2Vzcykge1xuICAgICAgdGhpcy5hY3Rpb25Eb25lLmVtaXQodHJ1ZSk7XG4gICAgfVxuICAgIHRoaXMubW9kYWxSZWYuaGlkZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBfdW5zdWJzY3JpYmUoKSB7XG4gICAgdGhpcy5zdWJzLmZvckVhY2goKHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uKSA9PiB7XG4gICAgICBzdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB9KTtcblxuICAgIHRoaXMuc3VicyA9IFtdO1xuICB9XG59XG4iXX0=