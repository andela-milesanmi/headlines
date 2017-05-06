import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';
// import sinon from 'sinon';
import DefaultPage from '../../components/DefaultPage.jsx';

describe('DefaultPage Component with news sources', () => {
  const wrapper = shallow(<DefaultPage />);
  console.log('wrapper', wrapper);
  it('it should render div elements', () => {
    expect(wrapper.find('div')).toExist();
  });
});

// const wrapper = mount(<Welcome />);
// sinon.spy(DefaultPage.prototype, 'componentDidMount');

// describe('if component mounted function exists', () => {
//   it(' componentDidMount exists', () => {
//     expect(DefaultPage.prototype.componentDidMount.calledOnce).toExist();
//   });

//   it(' componentWillUnMount exists', () => {
//     expect(DefaultPage.prototype.componentWillUnMount.calledOnce).toExist();
//   });
// });
