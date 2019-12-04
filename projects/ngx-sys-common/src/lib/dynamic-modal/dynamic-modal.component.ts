import {Component, EventEmitter, Input, OnDestroy, OnInit, Output, TemplateRef, ViewChild} from '@angular/core';
import {DynamicModalManager} from './dynamic-modal.manager';
import {Subscription} from 'rxjs';

import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import {IDynamicModalShowAction, IDynamicModalShowActionParams} from './dynamic-modal.interfaces';

@Component({
  selector: 'lib-dynamic-modal',
  templateUrl: './dynamic-modal.component.html',
  styleUrls: ['./dynamic-modal.component.scss']
})
export class DynamicModalComponent implements OnInit, OnDestroy {
  @Input() title: string;
  @Input() confirm: boolean;
  @Input() modalClass: any = 'card-body';
  @Input() yesButtonText = 'Yes';
  @Input() noButtonText = 'No';
  @Input() manager: DynamicModalManager;

  @Output() actionDone = new EventEmitter();
  @Output() submit = new EventEmitter();

  public params: IDynamicModalShowActionParams;
  public modalRef: BsModalRef;

  private subs: Subscription[] = [];

  @ViewChild('modal', {static: true}) modal: TemplateRef<any>;

  constructor(protected modalService: BsModalService) { }

  ngOnInit() {
    this.subs.push(
      this.manager.show.subscribe((value: IDynamicModalShowAction | null) => {
        this.openModal(value);
      })
    );

    this.subs.push(
      this.manager.hide.subscribe(() => {
        this.hideModal();
      })
    );
  }

  ngOnDestroy(): void {
    this._unsubscribe();
  }

  onSubmit() {
    this.submit.next(this.params);
  }

  public openModal(value: IDynamicModalShowAction | null) {
    this.params = value ? value.params : {};

    const config = value ? value.params : {};
    const modalDefaultConfig = {
      backdrop: true,
      ignoreBackdropClick: true
    };

    const modalConfig = {...modalDefaultConfig, ...config};

    this.modalRef = this.modalService.show(this.modal, modalConfig);
  }

  public hideModal(actionSuccess: boolean = false) {
    if (actionSuccess) {
      this.actionDone.emit(true);
    }
    this.modalRef.hide();
  }

  private _unsubscribe() {
    this.subs.forEach((subscription: Subscription) => {
      subscription.unsubscribe();
    });

    this.subs = [];
  }
}
