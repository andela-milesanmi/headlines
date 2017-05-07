import expect from 'expect';
import NewsStore from '../../stores/newsStore';

describe('news store', () => {
  console.log('storeInstance', NewsStore.articles);
  it('should instantiate correctly', () => {
    expect(typeof NewsStore).toBe('object');
    expect(typeof NewsStore.articles).toBe('object');
  });
});
