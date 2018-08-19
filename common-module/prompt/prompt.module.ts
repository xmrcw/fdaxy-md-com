import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PromptComponent } from './prompt/prompt.component';
import { PromptContainerComponent } from './prompt-container/prompt-container.component';
import { PromptService } from './PromptService';
import { OverlayModule } from '@angular/cdk/overlay';
import {MatButtonModule, MatCardModule, MatIconModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    OverlayModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule
  ],
  declarations: [PromptComponent, PromptContainerComponent],
  providers: [PromptService],
  exports: [PromptComponent],
  entryComponents: [PromptContainerComponent]
})
export class PromptModule { }
