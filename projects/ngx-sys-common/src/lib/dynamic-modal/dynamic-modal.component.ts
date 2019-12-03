import {Component, EventEmitter, Input, OnDestroy, OnInit, Output, TemplateRef, ViewChild} from '@angular/core';
import {DynamicModalManager} from './dynamic-modal.manager';
import {Subscription} from 'rxjs';
import {DynamicModalShowActionInterface} from './dynamic-modal.show-action.interface';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';

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

  public params: {text: string, body: any};
  public modalRef: BsModalRef;

  private subs: Subscription[] = [];

  @ViewChild('modal', {static: true}) modal: TemplateRef<any>;

  constructor(protected modalService: BsModalService) { }

  ngOnInit() {
    this.subs.push(
      this.manager.show.subscribe((value: DynamicModalShowActionInterface | null) => {
        this.params = value ? value.params : {};
        this.openModal(value ? value.config : {});
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

  public openModal(config = {}) {
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
