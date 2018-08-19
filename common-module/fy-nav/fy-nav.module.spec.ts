import { FyNavModule } from './fy-nav.module';

describe('FyNavModule', () => {
  let fyNavModule: FyNavModule;

  beforeEach(() => {
    fyNavModule = new FyNavModule();
  });

  it('should create an instance', () => {
    expect(fyNavModule).toBeTruthy();
  });
});
