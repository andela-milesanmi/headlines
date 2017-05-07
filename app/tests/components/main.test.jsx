import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';
import Main from '../../components/Main.jsx';

describe('Test Main component', () => {
  const wrapper = shallow(<Main />);
  it('should have a <div> tag', () => {
    expect(wrapper.node.type).toBe('div');
  });
});
