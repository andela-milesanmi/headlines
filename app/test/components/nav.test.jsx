import React from 'react';
import { mount, shallow } from 'enzyme';
import expect from 'expect';
import Nav from '../../components/Header/Nav';

describe('Test Nav component', () => {
  const wrapper = shallow(<Nav />);
  describe('should have an html element called ', () => {
    it('nav', () => {
      expect(wrapper.node.type).toBe('nav');
    });

    it('div', () => {
      expect(wrapper.node.props.children.type).toBe('div');
    });
  });

  describe('should have have a ', () => {
    it(' className property set to blue', () => {
      expect(wrapper.node.props.className).toBe('blue');
    });

    it('child element with a className property set to nav-wrapper container', () => {
      expect(wrapper.node.props.children.props.className).toBe('nav-wrapper container');
    });
  });
});
