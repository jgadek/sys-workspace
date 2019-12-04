import { EventEmitter, OnDestroy, OnInit, TemplateRef } from '@angular/core';
import { DynamicModalManager } from './dynamic-modal.manager';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { IDynamicModalShowAction, IDynamicModalShowActionParams } from './dynamic-modal.interfaces';
export declare class DynamicModalComponent implements OnInit, OnDestroy {
    protected modalService: BsModalService;
    title: string;
    confirm: boolean;
    modalClass: any;
    yesButtonText: string;
    noButtonText: string;
    manager: DynamicModalManager;
    actionDone: EventEmitter<any>;
    submit: EventEmitter<any>;
    params: IDynamicModalShowActionParams;
    modalRef: BsModalRef;
    private subs;
    modal: TemplateRef<any>;
    constructor(modalService: BsModalService);
    ngOnInit(): void;
    ngOnDestroy(): void;
    onSubmit(): void;
    openModal(value: IDynamicModalShowAction | null): void;
    hideModal(actionSuccess?: boolean): void;
    private _unsubscribe;
}
