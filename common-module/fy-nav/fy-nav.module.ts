import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FyNavComponent } from './fy-nav/fy-nav.component';
import { FyNavItemComponent } from './fy-nav-item/fy-nav-item.component';
import {MatIconModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatIconModule
  ],
  declarations: [FyNavComponent, FyNavItemComponent],
  exports: [FyNavComponent, FyNavItemComponent]
})
export class FyNavModule { }
