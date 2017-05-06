import React from 'react';
import { mount, shallow } from 'enzyme';
import expect from 'expect';
import Nav from '../../components/Header/Nav';

describe('Test Nav component', () => {
  const wrapper = shallow(<Nav />);
  describe('should have an html element called ', () => {
    it('div', () => {
      expect(wrapper.node.type).toBe('div');
    });

    it('nav', () => {
      expect(wrapper.node.props.children.type).toBe('nav');
    });
  });

  describe('should have have a ', () => {
    it(' className property set to navbar-fixed', () => {
      expect(wrapper.node.props.className).toBe('navbar-fixed');
    });

    it('child element with a className property set to teal', () => {
      expect(wrapper.node.props.children.props.className).toBe('teal');
    });
  });
});
