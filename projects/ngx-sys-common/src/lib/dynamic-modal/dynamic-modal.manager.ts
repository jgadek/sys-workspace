import {Subject} from 'rxjs';

export class DynamicModalManager {
  show = new Subject();
  hide = new Subject();
}
