import { MeetupControlPage } from './app.po';

describe('meetup-control App', () => {
  let page: MeetupControlPage;

  beforeEach(() => {
    page = new MeetupControlPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
