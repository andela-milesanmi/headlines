import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';
import DefaultPage from '../../components/DefaultPage.jsx';

describe('DefaultPage Component with news sources', () => {
  const wrapper = shallow(<DefaultPage
    sources = {[
      { id: 'cnn', sortBysAvailable: ['top'] },
      { id: 'techcrunch', sortBysAvailable: ['top', 'latest'] }
    ]}
  />);

  it('should exists', () => {
    expect(wrapper).toExist();
  });

  it('should render div elements', () => {
    expect(wrapper.find('div')).toExist();
  });

  it('the props to be an object', () => {
    expect(typeof wrapper.node.props.children).toBe('object');
  });
});
