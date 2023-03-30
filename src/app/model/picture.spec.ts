import { Picture } from './picture';

describe('Picture', () => {
  it('should create an instance', () => {
    expect(new Picture('title', 'url', 'thumbnailUrl')).toBeTruthy();
  });
});
