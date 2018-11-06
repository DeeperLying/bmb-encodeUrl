import { AppUtilModule } from './app-util.module';

describe('AppUtilModule', () => {
  let appUtilModule: AppUtilModule;

  beforeEach(() => {
    appUtilModule = new AppUtilModule();
  });

  it('should create an instance', () => {
    expect(appUtilModule).toBeTruthy();
  });
});
