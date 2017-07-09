import { MyAngularShopPage } from './app.po';

describe('my-angular-shop App', () => {
  let page: MyAngularShopPage;

  beforeEach(() => {
    page = new MyAngularShopPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
