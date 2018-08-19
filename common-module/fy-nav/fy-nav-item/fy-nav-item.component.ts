import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NavItem} from '../NavItem';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'fy-nav-item',
  templateUrl: './fy-nav-item.component.html',
  styleUrls: ['./fy-nav-item.component.scss'],
  animations: [
    // 可以设置多个动画
    trigger('fdaxy-a-accordion', [
      state('out', style({height: '*'})),
      state('in', style({height: 0})),
      transition('in <=> out', [
        animate('250ms')
      ])
    ])
  ]
})
export class FyNavItemComponent implements OnInit {
  @Input() nav: NavItem;
  @Input() iconLeftOrRight: boolean;
  @Input() layer: number;
  @Output() clickBtn = new EventEmitter<NavItem>();

  tempWidth = 0;

  constructor() { }

  ngOnInit() {
    this.nav['av_state'] = 'in';
    this.nav['nav_icon'] = 'chevron_right';
    this.nav['select'] = false;
    if (this.iconLeftOrRight) {
      this.tempWidth = 12;
    }
  }

  navClick(ev, nav) {
    this.clickBtn.emit(nav);
    if (this.nav['av_state'] === 'out') {
      this.nav['av_state'] = 'in';
      this.nav['nav_icon'] = 'chevron_right';
      this.eachnav(this.nav);
    } else {
      this.nav['av_state'] = 'out';
      this.nav['nav_icon'] = 'keyboard_arrow_down';
    }
  }

  clickUp(nav) {
    this.clickBtn.emit(nav);
  }

  eachnav(nav: NavItem) {
    if (nav.children) {
      nav.children.map(item => {
        if (item.children && item.children.length > 0) {
          item['av_state'] = 'in';
          item['nav_icon'] = 'chevron_right';
          this.eachnav(item);
        }
      });
    }
  }


  hasChildren(nav: NavItem): boolean {
    if (nav.children && nav.children.length > 0) {
      return true;
    } else {
      return false;
    }
  }
  getIWidth(): number {
    if (this.layer === 0) {
      return this.layer * 24 + 12 + this.tempWidth;
    }
    return this.layer * 24 + this.tempWidth;
  }
}
