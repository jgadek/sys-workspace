import { EventEmitter, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { DynamicModalManager } from './dynamic-modal.manager';
export declare abstract class DynamicModalFormAbstract implements OnInit, OnChanges {
    manager: DynamicModalManager;
    selected: any;
    refresh: EventEmitter<any>;
    error: string;
    formSections: any;
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    protected abstract _init(): void;
}
