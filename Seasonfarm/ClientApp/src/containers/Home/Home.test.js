import React from 'react';
import { shallow } from 'enzyme';
import { Home } from './Home';

describe('Home container', () => {
    test('render test', async () => {
        const warpper = shallow(<Home />);
    });
});