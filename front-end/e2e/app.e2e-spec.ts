import { MusicBlogPage } from './app.po';
import { } from 'jasmine';

describe('music-blog App', function() {
  let page: MusicBlogPage;

  beforeEach(() => {
    page = new MusicBlogPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
