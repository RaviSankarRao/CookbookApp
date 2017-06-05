import { CookBookPage } from './app.po';

describe('cook-book App', () => {
  let page: CookBookPage;

  beforeEach(() => {
    page = new CookBookPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
