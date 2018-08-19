import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {FyMessageDataFilled} from '../prompt.definitions';

@Component({
  selector: 'fy-prompt',
  templateUrl: './prompt.component.html',
  styleUrls: ['./prompt.component.scss'],
  animations         : [
    trigger('enterLeave', [
      state('enter', style({ opacity: 1, transform: 'translateY(0)' })),
      transition('* => enter', [
        style({ opacity: 0, transform: 'translateY(-50%)' }),
        animate('100ms linear')
      ]),
      state('leave', style({ opacity: 0, transform: 'translateY(-50%)' })),
      transition('* => leave', [
        style({ opacity: 1, transform: 'translateY(0)' }),
        animate('100ms linear')
      ])
    ])
  ],
})
export class PromptComponent implements OnInit {

  @Input()
  message: FyMessageDataFilled;
  @Input()
  index: number;
  @Output()
  closeMessage = new EventEmitter<FyMessageDataFilled>();

  bgcolor: string;

  constructor() { }

  ngOnInit() {
    this.init();
  }

  close() {
    this.message.options.state = 'leave';
    setTimeout(() => {
      this.closeMessage.emit(this.message);
    }, 110);
  }

  private init() {
    switch (this.message.options.type) {
      case 'success':
        this.bgcolor = '#73cf45';
        break;
      case 'error':
        this.bgcolor = '#f5222d';
        break;
      case 'info':
        this.bgcolor = '#2998ff';
        break;
      case 'warning':
        this.bgcolor = '#faad14';
        break;
      default:
        this.bgcolor = '#2998ff';
        break;
    }
  }

}
