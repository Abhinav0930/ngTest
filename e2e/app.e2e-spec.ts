import { MyHeroesAppPage } from './app.po';

describe('my-heroes-app App', () => {
  let page: MyHeroesAppPage;

  beforeEach(() => {
    page = new MyHeroesAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
