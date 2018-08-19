export interface FyMessageDataOptions {
  fyDuration?: number;
  fyAnimate?: boolean;
  fyPauseOnHover?: boolean;
  state?: 'enter' | 'leave';
  type?: string;
}

export interface FyMessageDataFilled {
  // 唯一ID
  messageId?: string;
  title?: string;
  content?: string;
  options?: FyMessageDataOptions;
}
