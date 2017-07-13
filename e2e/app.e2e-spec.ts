import { TranslatorPage } from './app.po';

describe('translator App', () => {
  let page: TranslatorPage;

  beforeEach(() => {
    page = new TranslatorPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
