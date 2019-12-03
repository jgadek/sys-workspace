import {EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {DynamicModalManager} from './dynamic-modal.manager';


export abstract class DynamicModalFormAbstract implements OnInit, OnChanges {
  @Input() manager: DynamicModalManager;
  @Input() selected: any;

  @Output() refresh: EventEmitter<any> = new EventEmitter();

  public error: string;
  public formSections: any;

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.error = null;

    if (this.selected) {
      this._init();
    }
  }

  protected abstract _init(): void;
}
