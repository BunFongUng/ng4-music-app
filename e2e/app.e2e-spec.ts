import { NgMusicAppPage } from './app.po';

describe('ng-music-app App', () => {
  let page: NgMusicAppPage;

  beforeEach(() => {
    page = new NgMusicAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
