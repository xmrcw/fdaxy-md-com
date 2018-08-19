import {Component, OnDestroy, OnInit} from '@angular/core';
import {FyMessageDataFilled, FyMessageDataOptions} from '../prompt.definitions';

let idCount = 0;

@Component({
  selector: 'fy-prompt-container',
  templateUrl: './prompt-container.component.html',
  styleUrls: ['./prompt-container.component.scss']
})
export class PromptContainerComponent implements OnInit, OnDestroy {

  messages: FyMessageDataFilled[] = [];
  time: any;
  delMess: string[] = [];

  constructor() { }

  ngOnInit() {

  }

  close(message: FyMessageDataFilled) {
    this.messages = this.messages.filter( d => d.messageId !== message.messageId);
  }

  public push(type: string, title: string, context: string, option: FyMessageDataOptions) {
    if (!this.time) {
      this.time = window.setInterval(() => {
        this.messages = this.messages.filter(d => this.delMess.indexOf(d.messageId) < 0);
        this.delMess.length = 0;

        this.messages.forEach( i => {
            if (i.options.fyDuration <= 0) {
              i.options.state = 'leave';
              this.delMess.push(i.messageId);
            } else {
              i.options.fyDuration = i.options.fyDuration - 100;
            }
        });
      }, 100);
    }

    if (!option) {
      option = {
        fyDuration: 3000,
        fyAnimate: true,
        fyPauseOnHover: true,
        state: 'enter',
        type: type
      };
    } else {
      option = {
        fyDuration: option.fyDuration || 3000,
        fyAnimate: option.fyAnimate || true,
        fyPauseOnHover: option.fyPauseOnHover || true,
        state: option.state || 'enter',
        type: type
      };
    }

    this.messages.push({
      content: context,
      title: title,
      messageId: 'fy_messageid' + (idCount++),
      options: option
    });
  }

  ngOnDestroy(): void {
    if (this.time) {
      window.clearInterval(this.time);
    }
  }
}
