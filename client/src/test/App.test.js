import React from 'react';
import ReactDOM from 'react-dom';
import { App } from '../App'; // component

import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });



it('should have the title', function() {

  const wrapper = shallow( <App /> ); // wrap
  const result = wrapper.find('h1');

  // Assertion library
  expect(result).toHaveLength(1);

});