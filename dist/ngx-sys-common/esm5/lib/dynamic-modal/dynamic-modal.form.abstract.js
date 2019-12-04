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
export { DynamicModalFormAbstract };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy1tb2RhbC5mb3JtLmFic3RyYWN0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG5neC9zeXMtY29tbW9uLyIsInNvdXJjZXMiOlsibGliL2R5bmFtaWMtbW9kYWwvZHluYW1pYy1tb2RhbC5mb3JtLmFic3RyYWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFDLFlBQVksRUFBRSxLQUFLLEVBQXFCLE1BQU0sRUFBZ0IsTUFBTSxlQUFlLENBQUM7QUFDNUYsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0seUJBQXlCLENBQUM7Ozs7QUFHNUQ7SUFBQTtRQUlZLFlBQU8sR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQWlCNUQsQ0FBQzs7OztJQVpDLDJDQUFROzs7SUFBUjtJQUNBLENBQUM7Ozs7O0lBRUQsOENBQVc7Ozs7SUFBWCxVQUFZLE9BQXNCO1FBQ2hDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBRWxCLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNqQixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDZDtJQUNILENBQUM7OzBCQWpCQSxLQUFLOzJCQUNMLEtBQUs7MEJBRUwsTUFBTTs7SUFpQlQsK0JBQUM7Q0FBQSxBQXJCRCxJQXFCQztTQXJCcUIsd0JBQXdCOzs7SUFDNUMsMkNBQXNDOztJQUN0Qyw0Q0FBdUI7O0lBRXZCLDJDQUEwRDs7SUFFMUQseUNBQXFCOztJQUNyQixnREFBeUI7Ozs7OztJQWF6QiwyREFBaUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0V2ZW50RW1pdHRlciwgSW5wdXQsIE9uQ2hhbmdlcywgT25Jbml0LCBPdXRwdXQsIFNpbXBsZUNoYW5nZXN9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtEeW5hbWljTW9kYWxNYW5hZ2VyfSBmcm9tICcuL2R5bmFtaWMtbW9kYWwubWFuYWdlcic7XG5cblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIER5bmFtaWNNb2RhbEZvcm1BYnN0cmFjdCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcbiAgQElucHV0KCkgbWFuYWdlcjogRHluYW1pY01vZGFsTWFuYWdlcjtcbiAgQElucHV0KCkgc2VsZWN0ZWQ6IGFueTtcblxuICBAT3V0cHV0KCkgcmVmcmVzaDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgcHVibGljIGVycm9yOiBzdHJpbmc7XG4gIHB1YmxpYyBmb3JtU2VjdGlvbnM6IGFueTtcblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICB0aGlzLmVycm9yID0gbnVsbDtcblxuICAgIGlmICh0aGlzLnNlbGVjdGVkKSB7XG4gICAgICB0aGlzLl9pbml0KCk7XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIGFic3RyYWN0IF9pbml0KCk6IHZvaWQ7XG59XG4iXX0=