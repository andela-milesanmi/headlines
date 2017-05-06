import React from 'react';
import { mount, shallow } from 'enzyme';
import expect from 'expect';
import Footer from '../../components/Footer/Footer';

describe('Test Footer component', () => {
  // const props = {
  //   value: 'top',
  //   label: 'top',
  // };
  const wrapper = shallow(<Footer />);
  // console.log(wrapper);
  describe('should have an html element called ', () => {
    it('footer', () => {
      expect(wrapper.node.type).toBe('footer');
    });
    it('div', () => {
      expect(wrapper.node.props.children.type).toBe('div');
    });

    it('div', () => {
      expect(wrapper.node.props.children.props.className).toBe('footer-copyright');
    });
  });
});
