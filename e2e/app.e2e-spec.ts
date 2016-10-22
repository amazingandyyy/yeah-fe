import { YeahFrontendPage } from './app.po';

describe('yeah-frontend App', function() {
  let page: YeahFrontendPage;

  beforeEach(() => {
    page = new YeahFrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
