import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Enzyme from 'enzyme';
Enzyme.configure({ adapter: new Adapter() });
describe('Pokemon_app_card', () => {
    it('should render the card component', () => {
      const wrapper = shallow(
        <Card/>
      );
      expect(wrapper).toMatchSnapshot();
    });
});