import expect from 'expect';
import SourcesStore from '../../stores/SourcesStore';

describe('application store', () => {
  it('should instantiate correctly', () => {
    expect(typeof SourcesStore).toBe('object');
    expect(typeof SourcesStore.sources).toBe('object');
  });
});
