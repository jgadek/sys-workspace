/**
 * @fileoverview added by tsickle
 * Generated from: lib/dynamic-modal/dynamic-modal.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, Output, TemplateRef, ViewChild } from '@angular/core';
import { DynamicModalManager } from './dynamic-modal.manager';
import { BsModalService } from 'ngx-bootstrap';
export class DynamicModalComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy1tb2RhbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Abmd4L3N5cy1jb21tb24vIiwic291cmNlcyI6WyJsaWIvZHluYW1pYy1tb2RhbC9keW5hbWljLW1vZGFsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBcUIsTUFBTSxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDaEgsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFHNUQsT0FBTyxFQUFhLGNBQWMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQVF6RCxNQUFNLE9BQU8scUJBQXFCOzs7O0lBa0JoQyxZQUFzQixZQUE0QjtRQUE1QixpQkFBWSxHQUFaLFlBQVksQ0FBZ0I7UUFmekMsZUFBVSxHQUFRLFdBQVcsQ0FBQztRQUM5QixrQkFBYSxHQUFHLEtBQUssQ0FBQztRQUN0QixpQkFBWSxHQUFHLElBQUksQ0FBQztRQUduQixlQUFVLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNoQyxXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUs5QixTQUFJLEdBQW1CLEVBQUUsQ0FBQztJQUlvQixDQUFDOzs7O0lBRXZELFFBQVE7UUFDTixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FDWixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTOzs7O1FBQUMsQ0FBQyxLQUFxQyxFQUFFLEVBQUU7WUFDcEUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN4QixDQUFDLEVBQUMsQ0FDSCxDQUFDO1FBRUYsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQ1osSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsU0FBUzs7O1FBQUMsR0FBRyxFQUFFO1lBQy9CLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNuQixDQUFDLEVBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQzs7OztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDdEIsQ0FBQzs7OztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDaEMsQ0FBQzs7Ozs7SUFFTSxTQUFTLENBQUMsS0FBcUM7UUFDcEQsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQzs7Y0FFbEMsTUFBTSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRTs7Y0FDbEMsa0JBQWtCLEdBQUc7WUFDekIsUUFBUSxFQUFFLElBQUk7WUFDZCxtQkFBbUIsRUFBRSxJQUFJO1NBQzFCOztjQUVLLFdBQVcscUJBQU8sa0JBQWtCLEVBQUssTUFBTSxDQUFDO1FBRXRELElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxXQUFXLENBQUMsQ0FBQztJQUNsRSxDQUFDOzs7OztJQUVNLFNBQVMsQ0FBQyxnQkFBeUIsS0FBSztRQUM3QyxJQUFJLGFBQWEsRUFBRTtZQUNqQixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUM1QjtRQUNELElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDdkIsQ0FBQzs7Ozs7SUFFTyxZQUFZO1FBQ2xCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTzs7OztRQUFDLENBQUMsWUFBMEIsRUFBRSxFQUFFO1lBQy9DLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUM3QixDQUFDLEVBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDO0lBQ2pCLENBQUM7OztZQTFFRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjtnQkFDN0IsbXlCQUE2Qzs7YUFFOUM7Ozs7WUFQbUIsY0FBYzs7O29CQVMvQixLQUFLO3NCQUNMLEtBQUs7eUJBQ0wsS0FBSzs0QkFDTCxLQUFLOzJCQUNMLEtBQUs7c0JBQ0wsS0FBSzt5QkFFTCxNQUFNO3FCQUNOLE1BQU07b0JBT04sU0FBUyxTQUFDLE9BQU8sRUFBRSxFQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUM7Ozs7SUFmbEMsc0NBQXVCOztJQUN2Qix3Q0FBMEI7O0lBQzFCLDJDQUF1Qzs7SUFDdkMsOENBQStCOztJQUMvQiw2Q0FBNkI7O0lBQzdCLHdDQUFzQzs7SUFFdEMsMkNBQTBDOztJQUMxQyx1Q0FBc0M7O0lBRXRDLHVDQUE2Qzs7SUFDN0MseUNBQTRCOzs7OztJQUU1QixxQ0FBa0M7O0lBRWxDLHNDQUE0RDs7Ozs7SUFFaEQsNkNBQXNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uRGVzdHJveSwgT25Jbml0LCBPdXRwdXQsIFRlbXBsYXRlUmVmLCBWaWV3Q2hpbGR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtEeW5hbWljTW9kYWxNYW5hZ2VyfSBmcm9tICcuL2R5bmFtaWMtbW9kYWwubWFuYWdlcic7XG5pbXBvcnQge1N1YnNjcmlwdGlvbn0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7QnNNb2RhbFJlZiwgQnNNb2RhbFNlcnZpY2V9IGZyb20gJ25neC1ib290c3RyYXAnO1xuaW1wb3J0IHtJRHluYW1pY01vZGFsU2hvd0FjdGlvbiwgSUR5bmFtaWNNb2RhbFNob3dBY3Rpb25QYXJhbXN9IGZyb20gJy4vZHluYW1pYy1tb2RhbC5pbnRlcmZhY2VzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLWR5bmFtaWMtbW9kYWwnLFxuICB0ZW1wbGF0ZVVybDogJy4vZHluYW1pYy1tb2RhbC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2R5bmFtaWMtbW9kYWwuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBEeW5hbWljTW9kYWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIEBJbnB1dCgpIHRpdGxlOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGNvbmZpcm06IGJvb2xlYW47XG4gIEBJbnB1dCgpIG1vZGFsQ2xhc3M6IGFueSA9ICdjYXJkLWJvZHknO1xuICBASW5wdXQoKSB5ZXNCdXR0b25UZXh0ID0gJ1llcyc7XG4gIEBJbnB1dCgpIG5vQnV0dG9uVGV4dCA9ICdObyc7XG4gIEBJbnB1dCgpIG1hbmFnZXI6IER5bmFtaWNNb2RhbE1hbmFnZXI7XG5cbiAgQE91dHB1dCgpIGFjdGlvbkRvbmUgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBzdWJtaXQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgcHVibGljIHBhcmFtczogSUR5bmFtaWNNb2RhbFNob3dBY3Rpb25QYXJhbXM7XG4gIHB1YmxpYyBtb2RhbFJlZjogQnNNb2RhbFJlZjtcblxuICBwcml2YXRlIHN1YnM6IFN1YnNjcmlwdGlvbltdID0gW107XG5cbiAgQFZpZXdDaGlsZCgnbW9kYWwnLCB7c3RhdGljOiB0cnVlfSkgbW9kYWw6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIG1vZGFsU2VydmljZTogQnNNb2RhbFNlcnZpY2UpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuc3Vicy5wdXNoKFxuICAgICAgdGhpcy5tYW5hZ2VyLnNob3cuc3Vic2NyaWJlKCh2YWx1ZTogSUR5bmFtaWNNb2RhbFNob3dBY3Rpb24gfCBudWxsKSA9PiB7XG4gICAgICAgIHRoaXMub3Blbk1vZGFsKHZhbHVlKTtcbiAgICAgIH0pXG4gICAgKTtcblxuICAgIHRoaXMuc3Vicy5wdXNoKFxuICAgICAgdGhpcy5tYW5hZ2VyLmhpZGUuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgdGhpcy5oaWRlTW9kYWwoKTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuX3Vuc3Vic2NyaWJlKCk7XG4gIH1cblxuICBvblN1Ym1pdCgpIHtcbiAgICB0aGlzLnN1Ym1pdC5uZXh0KHRoaXMucGFyYW1zKTtcbiAgfVxuXG4gIHB1YmxpYyBvcGVuTW9kYWwodmFsdWU6IElEeW5hbWljTW9kYWxTaG93QWN0aW9uIHwgbnVsbCkge1xuICAgIHRoaXMucGFyYW1zID0gdmFsdWUgPyB2YWx1ZS5wYXJhbXMgOiB7fTtcblxuICAgIGNvbnN0IGNvbmZpZyA9IHZhbHVlID8gdmFsdWUucGFyYW1zIDoge307XG4gICAgY29uc3QgbW9kYWxEZWZhdWx0Q29uZmlnID0ge1xuICAgICAgYmFja2Ryb3A6IHRydWUsXG4gICAgICBpZ25vcmVCYWNrZHJvcENsaWNrOiB0cnVlXG4gICAgfTtcblxuICAgIGNvbnN0IG1vZGFsQ29uZmlnID0gey4uLm1vZGFsRGVmYXVsdENvbmZpZywgLi4uY29uZmlnfTtcblxuICAgIHRoaXMubW9kYWxSZWYgPSB0aGlzLm1vZGFsU2VydmljZS5zaG93KHRoaXMubW9kYWwsIG1vZGFsQ29uZmlnKTtcbiAgfVxuXG4gIHB1YmxpYyBoaWRlTW9kYWwoYWN0aW9uU3VjY2VzczogYm9vbGVhbiA9IGZhbHNlKSB7XG4gICAgaWYgKGFjdGlvblN1Y2Nlc3MpIHtcbiAgICAgIHRoaXMuYWN0aW9uRG9uZS5lbWl0KHRydWUpO1xuICAgIH1cbiAgICB0aGlzLm1vZGFsUmVmLmhpZGUoKTtcbiAgfVxuXG4gIHByaXZhdGUgX3Vuc3Vic2NyaWJlKCkge1xuICAgIHRoaXMuc3Vicy5mb3JFYWNoKChzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbikgPT4ge1xuICAgICAgc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLnN1YnMgPSBbXTtcbiAgfVxufVxuIl19