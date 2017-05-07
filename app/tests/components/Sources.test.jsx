import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';
import Sources from '../../components/News/Sources.jsx';

describe('Sources component', () => {
  const wrapper = shallow(<Sources
    key = {[
      { id: 'cnn' },
      { id: 'tchcrunch' }
    ]}
    sources = {[
      { id: 'cnn', sortBysAvailable: ['top'] },
      { id: 'techcrunch', sortBysAvailable: ['top', 'latest'] }
    ]}
  />);

  it('should have a <div> tag', () => {
    expect(wrapper.node.type).toBe('div');
  });

  it('should render div elements', () => {
    expect(wrapper.find('div')).toExist();
  });

  it('the props to be an object', () => {
    expect(typeof wrapper.node.props.children).toBe('object');
  });
});
