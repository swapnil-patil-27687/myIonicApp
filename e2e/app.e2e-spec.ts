import { MyIonicAppPage } from './app.po';

describe('my-ionic-app App', () => {
  let page: MyIonicAppPage;

  beforeEach(() => {
    page = new MyIonicAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
