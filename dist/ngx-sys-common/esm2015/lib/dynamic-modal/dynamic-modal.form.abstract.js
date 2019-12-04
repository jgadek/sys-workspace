/**
 * @fileoverview added by tsickle
 * Generated from: lib/dynamic-modal/dynamic-modal.form.abstract.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { EventEmitter, Input, Output } from '@angular/core';
import { DynamicModalManager } from './dynamic-modal.manager';
/**
 * @abstract
 */
export class DynamicModalFormAbstract {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy1tb2RhbC5mb3JtLmFic3RyYWN0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG5neC9zeXMtY29tbW9uLyIsInNvdXJjZXMiOlsibGliL2R5bmFtaWMtbW9kYWwvZHluYW1pYy1tb2RhbC5mb3JtLmFic3RyYWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFDLFlBQVksRUFBRSxLQUFLLEVBQXFCLE1BQU0sRUFBZ0IsTUFBTSxlQUFlLENBQUM7QUFDNUYsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0seUJBQXlCLENBQUM7Ozs7QUFHNUQsTUFBTSxPQUFnQix3QkFBd0I7SUFBOUM7UUFJWSxZQUFPLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7SUFpQjVELENBQUM7Ozs7SUFaQyxRQUFRO0lBQ1IsQ0FBQzs7Ozs7SUFFRCxXQUFXLENBQUMsT0FBc0I7UUFDaEMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7UUFFbEIsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2pCLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUNkO0lBQ0gsQ0FBQzs7O3NCQWpCQSxLQUFLO3VCQUNMLEtBQUs7c0JBRUwsTUFBTTs7OztJQUhQLDJDQUFzQzs7SUFDdEMsNENBQXVCOztJQUV2QiwyQ0FBMEQ7O0lBRTFELHlDQUFxQjs7SUFDckIsZ0RBQXlCOzs7Ozs7SUFhekIsMkRBQWlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtFdmVudEVtaXR0ZXIsIElucHV0LCBPbkNoYW5nZXMsIE9uSW5pdCwgT3V0cHV0LCBTaW1wbGVDaGFuZ2VzfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7RHluYW1pY01vZGFsTWFuYWdlcn0gZnJvbSAnLi9keW5hbWljLW1vZGFsLm1hbmFnZXInO1xuXG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBEeW5hbWljTW9kYWxGb3JtQWJzdHJhY3QgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG4gIEBJbnB1dCgpIG1hbmFnZXI6IER5bmFtaWNNb2RhbE1hbmFnZXI7XG4gIEBJbnB1dCgpIHNlbGVjdGVkOiBhbnk7XG5cbiAgQE91dHB1dCgpIHJlZnJlc2g6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIHB1YmxpYyBlcnJvcjogc3RyaW5nO1xuICBwdWJsaWMgZm9ybVNlY3Rpb25zOiBhbnk7XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgdGhpcy5lcnJvciA9IG51bGw7XG5cbiAgICBpZiAodGhpcy5zZWxlY3RlZCkge1xuICAgICAgdGhpcy5faW5pdCgpO1xuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCBhYnN0cmFjdCBfaW5pdCgpOiB2b2lkO1xufVxuIl19