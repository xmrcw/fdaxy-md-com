import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NavItem} from '../NavItem';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'fy-nav',
  templateUrl: './fy-nav.component.html',
  styleUrls: ['./fy-nav.component.scss']
})
export class FyNavComponent implements OnInit {
  @Input()
  navs: NavItem[] = [];
  @Input()
  iconLeftOrRight = false;

  @Output()
  fdClick = new EventEmitter<NavItem>();

  oldNav: NavItem;

  constructor() { }

  ngOnInit() {
  }

  click(nav: NavItem) {
    if (this.oldNav) {
      this.oldNav['select'] = false;
    }
    this.oldNav = nav;
    this.oldNav['select'] = true;
    this.fdClick.emit(nav);
    if (!nav.children || nav.children.length < 1) {
      if (nav.url != null && nav.url.length > 1) {
        // this.router.navigate([nav.url]);
      }
      return;
    }
  }
}
