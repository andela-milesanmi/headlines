import React from 'react';
import { mount, shallow } from 'enzyme';
import expect from 'expect';
import Main from '../../components/Main';

describe('Test Main component', () => {
  const wrapper = shallow(<Main />);
  // console.log(wrapper.node);
  it('should have a <div> tag', () => {
    expect(wrapper.node.type).toBe('div');
  });
});
