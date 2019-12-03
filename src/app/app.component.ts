import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import {DynamicModalManager} from '@ngx/sys-common';

@Component({
  // tslint:disable-next-line
  selector: 'body',
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {
  public modals = {
    delete: new DynamicModalManager(),
  };


  constructor(private router: Router) { }

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
  }

  onAlert(value) {
    alert(value);
  }
}
