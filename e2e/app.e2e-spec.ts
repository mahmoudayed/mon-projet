import { MonProjetPage } from './app.po';

describe('mon-projet App', () => {
  let page: MonProjetPage;

  beforeEach(() => {
    page = new MonProjetPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
